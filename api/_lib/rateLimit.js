// api/_lib/rateLimit.js
// Table-backed login rate limiting. Vercel serverless functions are
// stateless between invocations, so an in-memory counter would not
// work reliably — this uses the sbl_login_attempts table instead,
// which also doubles as an audit log of login activity.

import { getSupabaseAdmin } from './supabaseAdmin.js';

const WINDOW_MINUTES = 15;
const MAX_FAILED_ATTEMPTS = 8;

export function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket && req.socket.remoteAddress ? req.socket.remoteAddress : 'unknown';
}

// Returns true if this email/IP combination has too many recent
// failed attempts and should be blocked.
export async function isRateLimited({ email, ip }) {
  const supabase = getSupabaseAdmin();
  const since = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString();

  const { count, error } = await supabase
    .from('sbl_login_attempts')
    .select('id', { count: 'exact', head: true })
    .eq('succeeded', false)
    .gte('attempted_at', since)
    .or(`email.eq.${email.toLowerCase()},ip_address.eq.${ip}`);

  if (error) {
    // Fail open on a logging error — we don't want a broken audit
    // table to lock every user out of the site.
    console.error('Rate limit check failed:', error);
    return false;
  }

  return (count || 0) >= MAX_FAILED_ATTEMPTS;
}

export async function recordLoginAttempt({ email, ip, succeeded }) {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from('sbl_login_attempts').insert({
    email: email.toLowerCase(),
    ip_address: ip,
    succeeded
  });
  if (error) console.error('Failed to record login attempt:', error);
}

export const RATE_LIMIT_WINDOW_MINUTES = WINDOW_MINUTES;
