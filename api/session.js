// /api/session — GET: tells a page whether the current visitor is
// logged in, and as whom. Used by the login/register pages (to
// bounce an already-logged-in visitor away) and by any page that
// wants to show "Log out" vs "Log in" without a hard server redirect.
// This is a convenience for the UI only — middleware.js is what
// actually enforces access to protected content.

//
// Also: GET /api/session?tutorToken=tutor|challenge returns a short-lived
// Direct Line token for the SBL Tutor / SBL Challenge Tutor Copilot
// Studio agents, so the voice-enabled chat (js/sbl-voice.js) can connect
// without the secret ever reaching the browser. Lives here rather than in
// a new file because the Vercel Hobby plan is at its 12-function limit.
// Secrets come from Vercel environment variables:
//   DIRECTLINE_SECRET_TUTOR      (SBL Tutor -> Settings -> Security -> Web channel security)
//   DIRECTLINE_SECRET_CHALLENGE  (SBL Challenge Tutor -> same place)
// If a secret isn't set, this returns 503 and the page falls back to the
// normal iframe chat.

import { getSessionUser } from './_lib/auth.js';

const TUTOR_SECRETS = {
  tutor: 'DIRECTLINE_SECRET_TUTOR',
  challenge: 'DIRECTLINE_SECRET_CHALLENGE'
};

async function tutorToken(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const envName = TUTOR_SECRETS[req.query.tutorToken];
  if (!envName) return res.status(400).json({ error: 'Unknown tutor.' });
  const secret = process.env[envName];
  if (!secret) return res.status(503).json({ error: 'Voice chat is not set up for this tutor.' });
  try {
    const r = await fetch('https://directline.botframework.com/v3/directline/tokens/generate', {
      method: 'POST',
      headers: { Authorization: `Bearer ${secret}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
    if (!r.ok) {
      console.error('Tutor token generation failed:', envName, r.status, await r.text());
      return res.status(502).json({ error: 'Could not connect to the tutor.' });
    }
    const { token, expires_in } = await r.json();
    return res.status(200).json({ token, expires_in });
  } catch (err) {
    console.error('Tutor token error:', err);
    return res.status(502).json({ error: 'Could not connect to the tutor.' });
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (req.query && req.query.tutorToken) return tutorToken(req, res);

  const session = await getSessionUser(req);
  if (!session) {
    return res.status(200).json({ loggedIn: false });
  }

  return res.status(200).json({
    loggedIn: true,
    user: {
      email: session.profile.email,
      fullName: session.profile.full_name,
      role: session.profile.role,
      status: session.profile.status
    }
  });
}
