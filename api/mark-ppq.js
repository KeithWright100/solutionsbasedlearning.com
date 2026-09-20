// /api/mark-ppq.js
// Vercel serverless function. Securely calls the SBL PPQ Marker Copilot
// Studio agent via the Direct Line API. The Direct Line secret is read
// from a Vercel environment variable (DIRECTLINE_SECRET) and is never
// sent to or visible from the browser.

const DIRECTLINE_BASE = 'https://directline.botframework.com/v3/directline';

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

  const { question, maxMark, markingGuidance, studentAnswer } = req.body || {};

  if (!question || !maxMark || !studentAnswer) {
    return res.status(400).json({ error: 'question, maxMark and studentAnswer are required.' });
  }

  try {
    // 1. Generate a Direct Line token from the secret.
    //    NOTE: this endpoint returns only { token, expires_in } —
    //    it does NOT start a conversation or return a conversationId.
    const tokenRes = await fetch(`${DIRECTLINE_BASE}/tokens/generate`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${secret}` }
    });
    if (!tokenRes.ok) {
      const text = await tokenRes.text();
      console.error('Token generation failed:', tokenRes.status, text);
      return res.status(502).json({ error: 'Could not authenticate with the marking service.' });
    }
    const { token } = await tokenRes.json();

    // 2. Actually START the conversation using that token. This is the
    //    step that was previously missing — /tokens/generate alone does
    //    NOT create a usable conversationId. This call returns a real
    //    conversationId (and a conversation-scoped token/streamUrl).
    const startRes = await fetch(`${DIRECTLINE_BASE}/conversations`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!startRes.ok) {
      const text = await startRes.text();
      console.error('Starting conversation failed:', startRes.status, text);
      return res.status(502).json({ error: 'Could not start a conversation with the marking service.' });
    }
    const startData = await startRes.json();
    const conversationId = startData.conversationId;
    // Direct Line may issue a fresh, conversation-scoped token here; use
    // it if present, otherwise fall back to the original token.
    const activeToken = startData.token || token;

    if (!conversationId) {
      console.error('No conversationId returned from /conversations:', startData);
      return res.status(502).json({ error: 'Could not establish a conversation with the marking service.' });
    }

    // 3. Build and post the message to the agent.
    const messageText = [
      `QUESTION: ${question}`,
      `MAXIMUM MARK: ${maxMark}`,
      markingGuidance ? `MARKING GUIDANCE: ${markingGuidance}` : null,
      `STUDENT ANSWER: ${studentAnswer}`,
      `STYLE: Keep the feedback realistic and concise — a sentence or two per section is plenty. Students will not read long paragraphs, so avoid restating the whole mark scheme.`
    ].filter(Boolean).join('\n\n');

    const postRes = await fetch(`${DIRECTLINE_BASE}/conversations/${conversationId}/activities`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${activeToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'message',
        from: { id: 'sbl-website-user' },
        text: messageText
      })
    });
    if (!postRes.ok) {
      const text = await postRes.text();
      console.error('Posting activity failed:', postRes.status, text);
      return res.status(502).json({ error: 'Could not reach the marking service.' });
    }

    // 4. Poll for the agent's reply.
    let replyText = null;
    let watermark = null;
    const maxAttempts = 12;
    const delayMs = 1500;

    for (let attempt = 0; attempt < maxAttempts && !replyText; attempt++) {
      await new Promise((r) => setTimeout(r, delayMs));

      const url = watermark
        ? `${DIRECTLINE_BASE}/conversations/${conversationId}/activities?watermark=${watermark}`
        : `${DIRECTLINE_BASE}/conversations/${conversationId}/activities`;

      const getRes = await fetch(url, {
        headers: { Authorization: `Bearer ${activeToken}` }
      });
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
      return res.status(504).json({ error: 'The marking service took too long to respond. Please try again.' });
    }

    // 5. Parse the agent's structured text reply into fields the front
    //    end can render directly.
    const feedback = parseMarkingReply(replyText);

    return res.status(200).json({ raw: replyText, feedback });
  } catch (err) {
    console.error('Unexpected error in mark-ppq:', err);
    return res.status(500).json({ error: 'Something went wrong while marking your answer.' });
  }
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