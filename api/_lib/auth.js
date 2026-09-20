// api/_lib/auth.js
// Shared helpers for /api routes that need to know who the caller
// is: verifies the session cookie against Supabase and (optionally)
// checks the caller's profile role. Used by every /api/admin/*
// endpoint. This is the Node-runtime counterpart to the JWT check
// middleware.js does at the Edge — the two are intentionally
// independent so a bug in one is not a single point of failure.

import { parseCookies, ACCESS_COOKIE } from './cookies.js';
import { getSupabaseAdmin } from './supabaseAdmin.js';

// Returns { user, profile } for a valid, logged-in caller, or null.
export async function getSessionUser(req) {
  const cookies = parseCookies(req);
  const accessToken = cookies[ACCESS_COOKIE];
  if (!accessToken) return null;

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.auth.getUser(accessToken);
  if (error || !data || !data.user) return null;

  const { data: profile, error: profileError } = await supabase
    .from('sbl_profiles')
    .select('id, full_name, email, role, status')
    .eq('id', data.user.id)
    .maybeSingle();

  if (profileError || !profile) return null;
  return { user: data.user, profile };
}

// For endpoints that must only be usable by an active admin.
// Sends the 401/403 response itself and returns null if the caller
// is not allowed, so route handlers can just do:
//   const session = await requireAdmin(req, res);
//   if (!session) return;
export async function requireAdmin(req, res) {
  const session = await getSessionUser(req);
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
  const session = await getSessionUser(req);
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
