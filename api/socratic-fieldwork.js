// /api/socratic-fieldwork.js
// Vercel serverless function. Runs a multi-turn, Socratic-questioning
// chat with a student, backed by a dedicated Copilot Studio agent
// ("SBL Fieldwork Socratic Tutor") reached via the Direct Line API —
// same integration pattern as /api/mark-ppq.js.
//
// The key difference from mark-ppq.js: this endpoint holds a PRIVATE
// model answer for each question (see QUESTIONS below) that must
// never reach the browser. On the first call for a question, the
// server opens a new Direct Line conversation and posts a hidden
// "context" message containing the question, the marking/fieldwork
// guidance, and the model answer, all in one go — before the student
// has typed anything. That hidden message, its conversationId and
// its Direct Line token are stored server-side only (in the
// sbl_socratic_sessions table, see sql/007_socratic_sessions.sql);
// the browser is handed back nothing but an opaque sessionId and the
// bot's first visible question. Every later turn goes back through
// this same endpoint, keyed by that sessionId, so the model answer
// and the Direct Line token never travel to the browser at any point.
//
// Requires a Vercel environment variable per agent — see
// QUESTIONS[key].secretEnvVar below. Setting one up requires:
//   1. Creating a new Copilot Studio agent for this behaviour (ask
//      Claude for the instructions text to paste in).
//   2. Finding that agent's Direct Line channel secret (Copilot
//      Studio → Settings → Channels → Mobile app / Direct Line —
//      same place the existing PPQ Marker agent's secret came from).
//   3. Adding it to Vercel as the env var named below, then
//      redeploying.
//   4. Running sql/007_socratic_sessions.sql once in the Supabase
//      SQL editor, if not already run.

import { getSupabaseAdmin } from './_lib/supabaseAdmin.js';

const DIRECTLINE_BASE = 'https://directline.botframework.com/v3/directline';

// ------------------------------------------------------------------
// Per-question configuration. Add a new entry here (and reference its
// key from the front end) for each Socratic-bot question — nothing
// else in this file needs to change.
// ------------------------------------------------------------------
const QUESTIONS = {
  'geog-coastal-fieldwork-8mark': {
    secretEnvVar: 'DIRECTLINE_SECRET_SOCRATIC_FIELDWORK',
    question:
      '(e) You have studied a coastal environment as part of your own geographical enquiry. ' +
      'Evaluate how effective your site selection and sampling strategies were in helping you ' +
      'answer your enquiry title. (8)',
    guidance:
      'This is an 8-mark IGCSE Geography fieldwork evaluation question. A strong answer: refers ' +
      'to the student’s OWN enquiry (their own sites, sampling method and enquiry title, not a ' +
      'generic one); judges effectiveness rather than just describing methods; weighs strengths ' +
      'against limitations for both site selection AND sampling strategy; and reaches a supported ' +
      'overall judgement on how far the methods helped answer the enquiry title.',
    modelAnswer:
      'Overall, the site selection and sampling strategies were effective to a large extent in ' +
      'helping answer the enquiry into how coastal management methods have impacted coastal ' +
      'processes, although there were some limitations.\n\n' +
      'The selection of three beaches along the Sam Roi Yot coastline was effective as it allowed ' +
      'for direct comparison between sites with different levels of coastal management. For ' +
      'example, one site had three offshore breakwaters and a rip rap groyne to the south of the ' +
      'beach, while others had less protection, one having a rock armour sea wall and the other no ' +
      'management used as a control site. This made it possible to assess how management ' +
      'influences processes such as wave energy, sediment deposition and longshore drift, helping ' +
      'to directly answer the enquiry question.\n\n' +
      'However, the small number of sites (three) reduces reliability, as the results may not ' +
      'represent the whole coastline. Coastal processes can vary along the coast, so a larger ' +
      'number of sites would have improved the validity of the conclusions. Due to point sampling, ' +
      'beach widths also varied. If the transects at each site were shared, this would have ' +
      'increased the amount of data, thereby improving the study.\n\n' +
      'The use of systematic sampling at 10m intervals along a transect was effective as it ' +
      'provided consistent and evenly spaced data on beach width, gradient and vegetation. This ' +
      'made it easier to identify patterns linked to coastal processes, such as wider beaches and ' +
      'gentler gradients in more protected areas.\n\n' +
      'However, systematic sampling may miss anomalies between intervals, meaning some variations ' +
      'in coastal processes could have been overlooked, such as the presence of berms, which ' +
      'reduces accuracy.\n\n' +
      'There were also limitations in data collection. Measurements were taken at different times ' +
      'of day, meaning tidal changes may have affected beach width and gradient, making ' +
      'comparisons less reliable. In addition, deciding where the beach started and ended was ' +
      'subjective, introducing potential error.\n\n' +
      'In conclusion, the methods were largely effective in showing that coastal management (such ' +
      'as the offshore breakwaters) reduces wave energy and leads to wider beaches and increased ' +
      'deposition. However, limitations such as sample size, tidal variation and sampling gaps ' +
      'mean the conclusions are valid but only moderately reliable.'
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { action, questionKey, sessionId, message } = req.body || {};

  if (action === 'start') {
    return handleStart(req, res, questionKey);
  }
  if (action === 'reply') {
    return handleReply(req, res, sessionId, message);
  }
  return res.status(400).json({ error: '"action" must be "start" or "reply".' });
}

// ------------------------------------------------------------------
// Start a brand-new session: open a Direct Line conversation, post
// the hidden context message (question + guidance + model answer),
// capture the bot's first visible question, and store just enough
// to continue the conversation later.
// ------------------------------------------------------------------
async function handleStart(req, res, questionKey) {
  const config = QUESTIONS[questionKey];
  if (!config) {
    return res.status(400).json({ error: 'Unknown questionKey.' });
  }

  const secret = process.env[config.secretEnvVar];
  if (!secret) {
    console.error(config.secretEnvVar + ' is not set');
    return res.status(500).json({
      error: 'This Socratic bot has not been fully set up yet — the Copilot Studio agent secret is missing.'
    });
  }

  try {
    const { conversationId, activeToken } = await startDirectLineConversation(secret);

    const hiddenContext = [
      `You are helping a student PLAN their answer to this exam question. Do not answer it for them.`,
      `QUESTION: ${config.question}`,
      `GUIDANCE: ${config.guidance}`,
      config.modelAnswer
        ? `PRIVATE MODEL ANSWER — for your reference only. Never reveal, quote, paraphrase, summarise, or hint at the exact wording of this to the student, and never tell them it exists. Use it only, silently, to judge how complete the student's own thinking is and to decide what to ask next:\n${config.modelAnswer}`
        : null,
      `Begin now: ask the student an opening question to get them planning, one question at a time. Do not give them a structure, a plan, or any model wording.`
    ].filter(Boolean).join('\n\n');

    const replyText = await postAndAwaitReply(conversationId, activeToken, hiddenContext);

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('sbl_socratic_sessions')
      .insert({
        question_key: questionKey,
        conversation_id: conversationId,
        directline_token: activeToken
      })
      .select('id')
      .single();

    if (error || !data) {
      console.error('Failed to store Socratic session:', error);
      return res.status(500).json({ error: 'Could not start a planning session. Please try again.' });
    }

    return res.status(200).json({ sessionId: data.id, reply: replyText });
  } catch (err) {
    console.error('Unexpected error starting Socratic session:', err);
    return res.status(500).json({ error: 'Something went wrong starting the planning bot.' });
  }
}

// ------------------------------------------------------------------
// Continue an existing session: look up its Direct Line conversation
// server-side, post the student's message, return the bot's reply.
// ------------------------------------------------------------------
async function handleReply(req, res, sessionId, message) {
  if (!sessionId || !message) {
    return res.status(400).json({ error: 'sessionId and message are required.' });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data: session, error } = await supabase
      .from('sbl_socratic_sessions')
      .select('conversation_id, directline_token, expires_at')
      .eq('id', sessionId)
      .single();

    if (error || !session) {
      return res.status(404).json({ error: 'This planning session has ended. Please start a new one.' });
    }
    if (new Date(session.expires_at).getTime() < Date.now()) {
      return res.status(410).json({ error: 'This planning session has expired. Please start a new one.' });
    }

    const replyText = await postAndAwaitReply(session.conversation_id, session.directline_token, message);

    return res.status(200).json({ reply: replyText });
  } catch (err) {
    console.error('Unexpected error continuing Socratic session:', err);
    return res.status(500).json({ error: 'Something went wrong reaching the planning bot.' });
  }
}

// ------------------------------------------------------------------
// Direct Line helpers (same protocol as /api/mark-ppq.js)
// ------------------------------------------------------------------

async function startDirectLineConversation(secret) {
  const tokenRes = await fetch(`${DIRECTLINE_BASE}/tokens/generate`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${secret}` }
  });
  if (!tokenRes.ok) {
    const text = await tokenRes.text();
    throw new Error('Token generation failed: ' + tokenRes.status + ' ' + text);
  }
  const { token } = await tokenRes.json();

  const startRes = await fetch(`${DIRECTLINE_BASE}/conversations`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!startRes.ok) {
    const text = await startRes.text();
    throw new Error('Starting conversation failed: ' + startRes.status + ' ' + text);
  }
  const startData = await startRes.json();
  const conversationId = startData.conversationId;
  const activeToken = startData.token || token;

  if (!conversationId) {
    throw new Error('No conversationId returned from /conversations.');
  }

  return { conversationId, activeToken };
}

async function postAndAwaitReply(conversationId, activeToken, text) {
  const postRes = await fetch(`${DIRECTLINE_BASE}/conversations/${conversationId}/activities`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${activeToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: 'message',
      from: { id: 'sbl-website-user' },
      text
    })
  });
  if (!postRes.ok) {
    const errText = await postRes.text();
    throw new Error('Posting activity failed: ' + postRes.status + ' ' + errText);
  }

  let replyText = null;
  let watermark = null;
  const maxAttempts = 12;
  const delayMs = 1500;

  for (let attempt = 0; attempt < maxAttempts && !replyText; attempt++) {
    await new Promise((r) => setTimeout(r, delayMs));

    const url = watermark
      ? `${DIRECTLINE_BASE}/conversations/${conversationId}/activities?watermark=${watermark}`
      : `${DIRECTLINE_BASE}/conversations/${conversationId}/activities`;

    const getRes = await fetch(url, { headers: { Authorization: `Bearer ${activeToken}` } });
    if (!getRes.ok) continue;

    const data = await getRes.json();
    watermark = data.watermark || watermark;

    const botMessages = (data.activities || []).filter(
      (a) => a.type === 'message' && a.from && a.from.id !== 'sbl-website-user'
    );
    if (botMessages.length > 0) {
      replyText = botMessages[botMessages.length - 1].text;
    }
  }

  if (!replyText) {
    throw new Error('The planning bot took too long to respond.');
  }

  return replyText;
}
