// /api/complete-password-setup
// Used by /set-password/ for BOTH flows: a newly-approved user
// activating their account, and an existing user resetting a
// forgotten password. Consumes a one-time token (see _lib/tokens.js),
// sets the new password via the Supabase Admin API, and logs the
// user straight in (sets session cookies) so activation feels like
// one smooth step rather than "set password, then log in again".

import { isValidPassword } from './_lib/validate.js';
import { consumeSetupToken } from './_lib/tokens.js';
import { getSupabaseAdmin } from './_lib/supabaseAdmin.js';
import { setSessionCookies } from './_lib/cookies.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token, password, purpose } = req.body || {};

  if (purpose !== 'activate' && purpose !== 'reset') {
    return res.status(400).json({ error: 'Invalid request.' });
  }
  if (!isValidPassword(password)) {
    return res.status(400).json({ error: 'Password must be at least 10 characters long.' });
  }

  const userId = await consumeSetupToken({ rawToken: token, purpose });
  if (!userId) {
    return res.status(400).json({
      error: 'This link is invalid or has expired. Please request a new one.'
    });
  }

  const supabase = getSupabaseAdmin();
  const { data: userData, error: updateError } = await supabase.auth.admin.updateUserById(userId, { password });
  if (updateError) {
    console.error('Failed to set password:', updateError);
    return res.status(500).json({ error: 'Could not set your password. Please try again.' });
  }

  const email = userData.user.email;

  // Log the user straight in.
  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  try {
    const tokenRes = await fetch(`${url}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: { apikey: anonKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const tokenData = await tokenRes.json();
    if (tokenRes.ok && tokenData.access_token) {
      setSessionCookies(res, {
        accessToken: tokenData.access_token,
        refreshToken: tokenData.refresh_token,
        expiresIn: tokenData.expires_in
      });
    }
  } catch (err) {
    console.error('Auto-login after password setup failed (password was still set):', err);
  }

  return res.status(200).json({ ok: true });
}
