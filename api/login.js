// /api/login
// Proxies a password login through Supabase Auth's REST API
// server-side (rather than calling Supabase directly from the
// browser) so we can enforce rate limiting and set the session as
// HttpOnly cookies. See README-AUTH-SETUP.md for the cookie/session
// design and middleware.js for how those cookies gate protected
// pages.

import { isValidEmail } from './_lib/validate.js';
import { isRateLimited, recordLoginAttempt, getClientIp, RATE_LIMIT_WINDOW_MINUTES } from './_lib/rateLimit.js';
import { setSessionCookies } from './_lib/cookies.js';
import { getSupabaseAdmin } from './_lib/supabaseAdmin.js';
import { GUEST_EMAIL, guestUntil } from './_lib/guest.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const email = (req.body && req.body.email || '').trim().toLowerCase();
  const password = req.body && req.body.password;
  const ip = getClientIp(req);

  if (!isValidEmail(email) || typeof password !== 'string' || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  // The conference guest login is shared by a room full of people on one
  // Wi-Fi network, so a few typos must not lock everyone out: it skips the
  // failed-attempt limit (its password is only valid for a few hours anyway).
  const isGuest = email === GUEST_EMAIL;

  const blocked = isGuest ? false : await isRateLimited({ email, ip });
  if (blocked) {
    return res.status(429).json({
      error: `Too many failed login attempts. Please wait ${RATE_LIMIT_WINDOW_MINUTES} minutes and try again, or use "Forgot password".`
    });
  }

  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    console.error('SUPABASE_URL / SUPABASE_ANON_KEY not set.');
    return res.status(500).json({ error: 'Server is not configured correctly.' });
  }

  let tokenData;
  try {
    const tokenRes = await fetch(`${url}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: { apikey: anonKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    tokenData = await tokenRes.json();

    if (!tokenRes.ok || !tokenData.access_token) {
      if (!isGuest) await recordLoginAttempt({ email, ip, succeeded: false });
      return res.status(401).json({ error: 'Invalid email or password.' });
    }
  } catch (err) {
    console.error('Login request to Supabase failed:', err);
    return res.status(502).json({ error: 'Could not reach the authentication service. Please try again.' });
  }

  // The guest login only works while an admin has it switched on.
  if (isGuest) {
    const until = guestUntil(tokenData.user);
    if (until === null || Date.now() >= until) {
      return res.status(403).json({ error: 'The guest login has ended. Thank you for trying SBL!' });
    }
  }

  // Reject suspended accounts even if their password is correct.
  const supabase = getSupabaseAdmin();
  const { data: profile } = await supabase
    .from('sbl_profiles')
    .select('status, full_name, role')
    .eq('id', tokenData.user.id)
    .maybeSingle();

  if (!profile) {
    await recordLoginAttempt({ email, ip, succeeded: false });
    return res.status(403).json({ error: 'This account is not fully set up. Please contact the administrator.' });
  }
  if (profile.status === 'suspended') {
    await recordLoginAttempt({ email, ip, succeeded: false });
    return res.status(403).json({ error: 'This account has been suspended. Please contact the administrator.' });
  }

  await recordLoginAttempt({ email, ip, succeeded: true });

  setSessionCookies(res, {
    accessToken: tokenData.access_token,
    refreshToken: tokenData.refresh_token,
    expiresIn: tokenData.expires_in
  });

  return res.status(200).json({
    user: { email, fullName: profile.full_name, role: profile.role }
  });
}
