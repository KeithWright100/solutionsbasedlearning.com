// api/_lib/auth.js
// Shared helpers for /api routes that need to know who the caller
// is: verifies the session cookie against Supabase and (optionally)
// checks the caller's profile role. Used by every /api/admin/*
// endpoint. This is the Node-runtime counterpart to the JWT check
// middleware.js does at the Edge — the two are intentionally
// independent so a bug in one is not a single point of failure.

import { parseCookies, ACCESS_COOKIE, REFRESH_COOKIE, setSessionCookies } from './cookies.js';
import { getSupabaseAdmin } from './supabaseAdmin.js';

// The access-token cookie only lasts an hour. middleware.js renews it
// when a protected PAGE loads, but /api routes are not covered by the
// middleware, so a student who stays on one lesson for over an hour
// would have every save rejected. If the access token is missing or
// expired but the 30-day refresh token is present, renew the session
// here and send fresh cookies back with this response.
async function refreshAccessToken(refreshToken) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key || !refreshToken) return null;
  try {
    const r = await fetch(`${url}/auth/v1/token?grant_type=refresh_token`, {
      method: 'POST',
      headers: { apikey: key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: refreshToken })
    });
    if (!r.ok) return null;
    const d = await r.json();
    return d && d.access_token && d.refresh_token ? d : null;
  } catch (e) {
    return null;
  }
}

// Returns { user, profile } for a valid, logged-in caller, or null.
// Pass `res` so an expired session can be renewed transparently.
export async function getSessionUser(req, res) {
  const cookies = parseCookies(req);
  const supabase = getSupabaseAdmin();

  let user = null;
  const accessToken = cookies[ACCESS_COOKIE];
  if (accessToken) {
    const { data, error } = await supabase.auth.getUser(accessToken);
    if (!error && data && data.user) user = data.user;
  }

  if (!user && res && cookies[REFRESH_COOKIE]) {
    const refreshed = await refreshAccessToken(cookies[REFRESH_COOKIE]);
    if (refreshed) {
      const { data, error } = await supabase.auth.getUser(refreshed.access_token);
      if (!error && data && data.user) {
        user = data.user;
        setSessionCookies(res, {
          accessToken: refreshed.access_token,
          refreshToken: refreshed.refresh_token,
          expiresIn: refreshed.expires_in
        });
      }
    }
  }
  if (!user) return null;

  const { data: profile, error: profileError } = await supabase
    .from('sbl_profiles')
    .select('id, full_name, email, role, status')
    .eq('id', user.id)
    .maybeSingle();

  if (profileError || !profile) return null;
  return { user, profile };
}

// For endpoints that must only be usable by an active admin.
// Sends the 401/403 response itself and returns null if the caller
// is not allowed, so route handlers can just do:
//   const session = await requireAdmin(req, res);
//   if (!session) return;
export async function requireAdmin(req, res) {
  const session = await getSessionUser(req, res);
  if (!session) {
    res.status(401).json({ error: 'Not signed in.' });
    return null;
  }
  if (session.profile.status !== 'active') {
    res.status(403).json({ error: 'Account is suspended.' });
    return null;
  }
  if (session.profile.role !== 'admin') {
    res.status(403).json({ error: 'Administrator access required.' });
    return null;
  }
  return session;
}

// For endpoints usable by any active logged-in visitor, not just
// admins (e.g. reading lesson resources — the surrounding page is
// already gated by middleware.js, but every /api endpoint checks
// for itself regardless). Same call shape as requireAdmin:
//   const session = await requireSession(req, res);
//   if (!session) return;
export async function requireSession(req, res) {
  const session = await getSessionUser(req, res);
  if (!session) {
    res.status(401).json({ error: 'Not signed in.' });
    return null;
  }
  if (session.profile.status !== 'active') {
    res.status(403).json({ error: 'Account is suspended.' });
    return null;
  }
  return session;
}
