// /api/mark-fieldwork-ppq.js
// Marks a student's full written answer to a specific fieldwork PPQ,
// using the same "SBL PPQ Marker" Copilot Studio agent (via Direct
// Line) that /api/mark-ppq.js already talks to for the rest of the
// site's past-paper bank.
//
// Why this is a separate endpoint rather than just calling
// /api/mark-ppq.js directly: on the public past-paper bank, the
// question, max mark and marking guidance are supplied BY THE
// BROWSER (see public/js/sbl-revision.js) — fine, since none of that
// is sensitive. This question is different: Keith supplied a private
// model answer that must never reach the browser. So exactly like
// /api/socratic-fieldwork.js, the question, marking guidance AND
// model answer all live server-side here, keyed by questionKey. The
// browser only ever sends {questionKey, studentAnswer} and gets back
// parsed feedback — never the guidance or model answer.
//
// This reuses the existing DIRECTLINE_SECRET / PPQ Marker agent, so
// no new Copilot Studio agent or Vercel env var is needed for this
// feature — it works as soon as this file is deployed.
//
// Caveat worth knowing: the PPQ Marker agent's own Copilot Studio
// instructions were written before this feature existed, so its
// "never reveal the model answer" behaviour here relies on the
// explicit instruction embedded in the message below, not on the
// agent having been separately configured for it. In practice this
// agent already handles confidential mark schemes for every other
// past paper on the site without repeating them back verbatim, so
// the same behaviour is expected here — but if a student were ever
// somehow able to coax it into echoing the model answer, that would
// be a Copilot Studio agent-side gap rather than something visible
// in this codebase.

const DIRECTLINE_BASE = 'https://directline.botframework.com/v3/directline';

const QUESTIONS = {
  'geog-coastal-fieldwork-8mark': {
    question:
      '(e) You have studied a coastal environment as part of your own geographical enquiry. ' +
      'Evaluate how effective your site selection and sampling strategies were in helping you ' +
      'answer your enquiry title. (8)',
    maxMark: 8,
    // Official mark scheme for this question (5(e), AO3 4 marks / AO4 4
    // marks), transcribed verbatim from the exam board's published mark
    // scheme document, supplied by Keith on 2026-09-03.
    markingGuidance:
      'MARKING INSTRUCTIONS: Markers must apply the descriptors in line with the general marking ' +
      'guidance and the qualities outlined in the level-based mark scheme below.\n\n' +
      'INDICATIVE CONTENT GUIDANCE: The indicative content below is not prescriptive, and ' +
      'candidates are not required to include all of it. Other relevant material not suggested ' +
      'below must also be credited.\n\n' +
      'This question is about evaluating the effectiveness of planning their sampling for data ' +
      'collection. The candidate needs to evaluate the strengths and weaknesses of their site ' +
      'selection and sampling strategies to reflect on the reliability of their conclusion.\n\n' +
      'AO3 indicative content:\n' +
      '- Consideration to location and number of sites chosen for data collection.\n' +
      '- It may be important to ensure key features of the area are represented in data collected.\n' +
      '- Sites need to be easily accessible.\n' +
      '- There are three main sampling strategies – systematic, random, stratified.\n' +
      '- Random sampling removes bias from data collected.\n' +
      '- Random sampling can lead to poor representation in data.\n' +
      '- Systematic sampling ensures good coverage of sample area.\n' +
      '- Systematic sampling is more biased as not all areas have equal chance of being selected.\n' +
      '- Stratified sampling can be more representative.\n' +
      '- Stratified sampling is difficult if sub-sets are not accurate/known.\n' +
      '- A judgement about how site selection and sampling strategies helped to answer their ' +
      'enquiry title.\n\n' +
      'AO4 indicative content:\n' +
      '- Detail about the specific way they chose their sites in relation to collecting ' +
      'accurate/reliable data.\n' +
      '- Detail about how many sites were selected and why this number of sites was chosen.\n' +
      '- Detail about the sampling strategies used for each type of data collected and why this ' +
      'strategy was chosen.\n' +
      '- Detail about any limitations in their chosen site and sampling strategies.\n' +
      '- Detail about whether they could answer their hypothesis/predictions/enquiry questions.\n' +
      '- Detail about specific mitigation strategies used to ensure data collected was reliable ' +
      'and accurate.\n' +
      '- Detail about what conclusion were reached.\n\n' +
      'LEVEL-BASED MARK SCHEME:\n' +
      '0 marks: No rewardable material.\n\n' +
      'Level 1 (1–3 marks):\n' +
      '(AO3) Attempts to apply understanding to deconstruct information but understanding and ' +
      'connections are flawed. An unbalanced or incomplete argument that provides limited ' +
      'synthesis of understanding. Judgements that are supported by limited evidence.\n' +
      '(AO4) Uses some geographical skills to obtain information with limited relevance and ' +
      'accuracy, which supports few aspects of the argument.\n\n' +
      'Level 2 (4–6 marks):\n' +
      '(AO3) Applies understanding to deconstruct information and provide some logical connections ' +
      'between concepts. An imbalanced argument that synthesises mostly relevant understanding, ' +
      'but not entirely coherently, leading to judgements that are supported by evidence ' +
      'occasionally.\n' +
      '(AO4) Uses geographical skills to obtain accurate information that supports some aspects of ' +
      'the argument.\n\n' +
      'Level 3 (7–8 marks):\n' +
      '(AO3) Applies understanding to deconstruct information and provide logical connections ' +
      'between concepts throughout. A balanced, well-developed argument that synthesises relevant ' +
      'understanding coherently, leading to judgements that are supported by evidence throughout.\n' +
      '(AO4) Uses geographical skills to obtain accurate information that supports all aspects of ' +
      'the argument.\n\n' +
      'Award the mark using the level descriptor that best fits the whole answer (best-fit, not ' +
      'aggregate), then use the indicative content only as illustrative examples of relevant ' +
      'material — full marks are available even if the student\'s specific points differ from the ' +
      'indicative content, as long as they are equally relevant and well-reasoned.',
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

  const secret = process.env.DIRECTLINE_SECRET;
  if (!secret) {
    console.error('DIRECTLINE_SECRET is not set');
    return res.status(500).json({ error: 'Server is not configured correctly.' });
  }

  const { questionKey, studentAnswer } = req.body || {};
  const config = QUESTIONS[questionKey];
  if (!config) {
    return res.status(400).json({ error: 'Unknown questionKey.' });
  }
  if (!studentAnswer || !String(studentAnswer).trim()) {
    return res.status(400).json({ error: 'Please write an answer before submitting for marking.' });
  }

  try {
    const { conversationId, activeToken } = await startDirectLineConversation(secret);

    const messageText = [
      `QUESTION: ${config.question}`,
      `MAXIMUM MARK: ${config.maxMark}`,
      `MARKING GUIDANCE: ${config.markingGuidance}`,
      `PRIVATE MODEL ANSWER — for your reference only, to calibrate the standard of a strong response. Never reveal, quote, paraphrase, or hint at the exact wording of this in your feedback to the student:\n${config.modelAnswer}`,
      `STUDENT ANSWER: ${studentAnswer}`,
      `STYLE: Keep the feedback realistic and concise — a sentence or two per section is plenty. Students will not read long paragraphs, so avoid restating the whole mark scheme.`
    ].join('\n\n');

    const replyText = await postAndAwaitReply(conversationId, activeToken, messageText);
    const feedback = parseMarkingReply(replyText);

    return res.status(200).json({ feedback });
  } catch (err) {
    console.error('Unexpected error in mark-fieldwork-ppq:', err);
    return res.status(500).json({ error: 'Something went wrong while marking your answer.' });
  }
}

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
    throw new Error('The marking service took too long to respond.');
  }

  return replyText;
}

function parseMarkingReply(text) {
  const sections = {
    markAwarded: null,
    whyThisMark: null,
    whatWasDoneWell: null,
    whatIsMissing: null,
    nextStep: null,
    followUpQuestion: null
  };

  const headings = [
    ['markAwarded', /MARK AWARDED/i],
    ['whyThisMark', /WHY THIS MARK WAS AWARDED/i],
    ['whatWasDoneWell', /WHAT WAS DONE WELL/i],
    ['whatIsMissing', /WHAT IS MISSING OR NEEDS DEVELOPMENT/i],
    ['nextStep', /NEXT STEP/i],
    ['followUpQuestion', /FOLLOW.?UP QUESTION/i]
  ];

  const positions = headings
    .map(([key, re]) => {
      const match = text.match(re);
      return match ? { key, index: match.index, headingLength: match[0].length } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.index - b.index);

  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].index + positions[i].headingLength;
    const end = i + 1 < positions.length ? positions[i + 1].index : text.length;
    sections[positions[i].key] = text.slice(start, end).trim().replace(/^[:\-\s]+/, '');
  }

  const foundAny = Object.values(sections).some(Boolean);
  if (!foundAny) {
    sections.whyThisMark = text;
  }

  return sections;
}
