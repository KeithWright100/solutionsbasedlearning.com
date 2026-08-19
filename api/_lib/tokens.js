// api/_lib/tokens.js
// Helpers for the one-time "activate account" / "reset password"
// links we email via Resend. The raw token only ever exists in the
// email link itself — we store just its SHA-256 hash, so a database
// leak alone can never be used to set someone's password.

import crypto from 'node:crypto';
import { getSupabaseAdmin } from './supabaseAdmin.js';

const ACTIVATE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const RESET_TTL_MS = 60 * 60 * 1000;             // 1 hour

function hashToken(rawToken) {
  return crypto.createHash('sha256').update(rawToken).digest('hex');
}

export async function createSetupToken({ userId, purpose }) {
  const rawToken = crypto.randomBytes(32).toString('base64url');
  const tokenHash = hashToken(rawToken);
  const ttl = purpose === 'activate' ? ACTIVATE_TTL_MS : RESET_TTL_MS;
  const expiresAt = new Date(Date.now() + ttl).toISOString();

  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from('sbl_password_setup_tokens').insert({
    user_id: userId,
    token_hash: tokenHash,
    purpose,
    expires_at: expiresAt
  });
  if (error) throw error;

  return rawToken;
}

// Validates a raw token, marks it used, and returns the associated
// user_id. Returns null if the token is missing, expired or already
// used. This function is single-use: calling it twice with the same
// token will succeed once and return null the second time.
export async function consumeSetupToken({ rawToken, purpose }) {
  if (!rawToken || typeof rawToken !== 'string') return null;
  const tokenHash = hashToken(rawToken);
  const supabase = getSupabaseAdmin();

  const { data: row, error } = await supabase
    .from('sbl_password_setup_tokens')
    .select('id, user_id, purpose, expires_at, used_at')
    .eq('token_hash', tokenHash)
    .maybeSingle();

  if (error || !row) return null;
  if (row.purpose !== purpose) return null;
  if (row.used_at) return null;
  if (new Date(row.expires_at).getTime() < Date.now()) return null;

  const { error: updateError } = await supabase
    .from('sbl_password_setup_tokens')
    .update({ used_at: new Date().toISOString() })
    .eq('id', row.id)
    .is('used_at', null);

  if (updateError) return null;

  return row.user_id;
}
