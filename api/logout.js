// /api/logout — clears the session cookies. Best-effort revokes the
// refresh token with Supabase too, so the token can't be replayed.

import { parseCookies, clearSessionCookies, ACCESS_COOKIE } from './_lib/cookies.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const cookies = parseCookies(req);
  const accessToken = cookies[ACCESS_COOKIE];
  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (accessToken && url && anonKey) {
    try {
      await fetch(`${url}/auth/v1/logout`, {
        method: 'POST',
        headers: { apikey: anonKey, Authorization: `Bearer ${accessToken}` }
      });
    } catch (err) {
      console.error('Supabase logout call failed (cookies are cleared regardless):', err);
    }
  }

  clearSessionCookies(res);
  return res.status(200).json({ ok: true });
}
