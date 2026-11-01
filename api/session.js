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
import { getSupabaseAdmin } from './_lib/supabaseAdmin.js';
import { createHash } from 'node:crypto';

// Also: GET /api/session?gameOfWeek=1 returns the admin's Game of the
// week picks ({ picks: { 'YYYY-MM-DD': { slug, note } } }, keyed by the
// Monday each week starts). The hub falls back to an automatic weekly
// rotation when there is no pick for the current week. Lives here for
// the same 12-function reason as the tutor token.
async function gameOfWeek(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  try {
    const { data, error } = await getSupabaseAdmin()
      .from('sbl_site_settings').select('value').eq('key', 'game_of_week').maybeSingle();
    if (error) throw error;
    const picks = (data && data.value && data.value.picks) || {};
    return res.status(200).json({ picks });
  } catch (err) {
    console.error('Game of the week read failed:', err && err.message);
    return res.status(200).json({ picks: {} });
  }
}

// Also: GET /api/session?p3unlock=<essay id>&code=<code> checks a
// teacher's unlock code for a Paper 3 synthesis map practice essay
// (revision guide -> 16-mark essay synthesis maps). Codes are managed
// in the admin dashboard and stored in sbl_site_settings (key
// 'p3_codes'). Until a code has been set there for an essay, the
// original codes are checked against the hashes below, so no code is
// ever stored in the site's files. Returns { ok: true|false } only.
const P3_DEFAULT_HASHES = {"sovereignty": "a8e51685a503bdc785fc93e6374d6ffd63cd8c7be24e4e5947adada3b24ac11f", "civil": "f89abb13d9b23046cec19d1e00b9897d8f52098357e721e47146413e56aa4b42", "resilience": "61ff36b3a3f13e0bd775b86389a059c6969c96c19255fe40307ef35f04305f10", "supply": "b5a044c6d8797137daf93675e53dbeb87558f246efc9e566751373920f96f92f", "physical": "32cfb449e28e891fdc64b90a71d60b011995272403b531341dacc6e578e1d6c5", "lics": "a20332377136637b22cffff22912f864528bbc7557984964e86670a658797a68", "envimpact": "f9c729012b53af24828ee847845b4558ef251983775f34e15e0ee9c972823adf", "future": "907018bc8aad7c2cc5711425d4c32ff73e8a5c639bea018602c49977e1ef6322", "opposition": "992f94e1db644d147a18bf70891d5db48f11c26daef04d5e5175d3db3402320f", "growth": "abf8a05d083e52e2a9ffad9e944443df7437eeebaf823b591acbf7ab7133ca8c", "*": "f0da95c460ad21e7feae6eca60f843603cb798de84a620ab2e676172d13bea07", "risk": "cfdd4e47145817b2285cbd07d0ae710e3047978da331174e0962bc29024516fd"};
function p3hash(text) { return createHash('sha256').update(text).digest('hex'); }
async function p3Unlock(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const id = String(req.query.p3unlock || '');
  const code = String(req.query.code || '').trim().toUpperCase().slice(0, 30);
  if (!/^[a-z]{2,20}$/.test(id) || !code) return res.status(400).json({ ok: false });
  let stored = {};
  try {
    const { data } = await getSupabaseAdmin()
      .from('sbl_site_settings').select('value').eq('key', 'p3_codes').maybeSingle();
    stored = (data && data.value) || {};
  } catch (err) {
    console.error('P3 codes read failed:', err && err.message);
  }
  const codes = stored.codes || {};
  const essayOk = codes[id] ? code === codes[id] : p3hash(id + ':' + code) === P3_DEFAULT_HASHES[id];
  const masterOk = stored.master ? code === stored.master : p3hash('all:' + code) === P3_DEFAULT_HASHES['*'];
  return res.status(200).json({ ok: !!(essayOk || masterOk) });
}

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
  if (req.query && req.query.gameOfWeek) return gameOfWeek(req, res);
  if (req.query && req.query.p3unlock) return p3Unlock(req, res);

  const session = await getSessionUser(req, res);
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
