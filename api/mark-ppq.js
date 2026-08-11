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
    // 1. Generate a Direct Line token from the secret (short-lived, safe to use once).
    const tokenRes = await fetch(`${DIRECTLINE_BASE}/tokens/generate`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${secret}` }
    });
    if (!tokenRes.ok) {
      const text = await tokenRes.text();
      console.error('Token generation failed:', tokenRes.status, text);
      return res.status(502).json({ error: 'Could not authenticate with the marking service.' });
    }
    const { token, conversationId } = await tokenRes.json();

    // 2. Build the message sent to the agent. The agent's own instructions
    //    define the required fields and the exact output format, so we pass
    //    them through clearly labelled.
    const messageText = [
      `QUESTION: ${question}`,
      `MAXIMUM MARK: ${maxMark}`,
      markingGuidance ? `MARKING GUIDANCE: ${markingGuidance}` : null,
      `STUDENT ANSWER: ${studentAnswer}`
    ].filter(Boolean).join('\n\n');

    const postRes = await fetch(`${DIRECTLINE_BASE}/conversations/${conversationId}/activities`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
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

    // 3. Poll for the agent's reply. Direct Line delivers messages
    //    asynchronously, so we poll a few times with a short delay.
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
        headers: { Authorization: `Bearer ${token}` }
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

    // 4. Parse the agent's structured text reply into fields the front end
    //    can render directly.
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