// middleware.js — Vercel Edge Middleware.
// This is what actually enforces "protected content unavailable to
// non-logged-in users": it runs BEFORE any matched request reaches
// the static files in /public, on Vercel's edge network, and
// redirects to /login/ if there is no valid session.
//
// Scope is controlled entirely by `config.matcher` below. Start
// narrow (a single lesson folder), confirm it behaves as expected,
// then widen it — see README-AUTH-SETUP.md, "Step 7 — Turn on
// content gating".
//
// This file intentionally does NOT import @supabase/supabase-js or
// any other npm package: Edge Middleware bundles run in a
// restricted, non-Node runtime, and the Supabase SDK assumes a
// Node/browser environment. Everything here is done with plain
// fetch() and the Web Crypto API, which both work natively at the
// edge.

export const config = {
  matcher: [
    // Educator-only lesson content. Widen this list once you've
    // confirmed the gate works the way you expect on one folder.
    '/geography/:path*',
    '/humanities-hub/:path*',
    // The admin dashboard — always gated, and additionally requires
    // role === 'admin' (checked below), not just "logged in".
    '/admin/:path*'
  ]
};

const ACCESS_COOKIE = 'sbl_at';
const REFRESH_COOKIE = 'sbl_rt';

function getCookie(request, name) {
  const header = request.headers.get('cookie');
  if (!header) return null;
  const match = header.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function base64UrlToUint8Array(base64url) {
  const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function base64UrlToJson(base64url) {
  const bytes = base64UrlToUint8Array(base64url);
  const text = new TextDecoder().decode(bytes);
  return JSON.parse(text);
}

// Verifies a Supabase HS256 JWT's signature and expiry using the
// project's JWT secret (Supabase Dashboard → Settings → API → JWT
// Settings → "JWT Secret"). Returns the decoded payload if valid,
// otherwise null. Does not throw.
async function verifySupabaseJwt(token, jwtSecret) {
  try {
    const [headerB64, payloadB64, signatureB64] = token.split('.');
    if (!headerB64 || !payloadB64 || !signatureB64) return null;

    const payload = base64UrlToJson(payloadB64);
    if (!payload.exp || payload.exp * 1000 < Date.now()) return null;

    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(jwtSecret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const data = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
    const signature = base64UrlToUint8Array(signatureB64);

    const valid = await crypto.subtle.verify('HMAC', key, signature, data);
    return valid ? payload : null;
  } catch (err) {
    return null;
  }
}

async function refreshSession(refreshToken, supabaseUrl, anonKey) {
  try {
    const res = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=refresh_token`, {
      method: 'POST',
      headers: { apikey: anonKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: refreshToken })
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.access_token || !data.refresh_token) return null;
    return data;
  } catch (err) {
    return null;
  }
}

function buildCookieHeader(name, value, maxAgeSeconds) {
  return `${name}=${encodeURIComponent(value)}; Path=/; SameSite=Lax; HttpOnly; Secure; Max-Age=${maxAgeSeconds}`;
}

function redirectToLogin(request) {
  const loginUrl = new URL('/login/', request.url);
  loginUrl.searchParams.set('redirect', new URL(request.url).pathname);
  return Response.redirect(loginUrl, 302);
}

// For /admin/* — confirms the logged-in user's profile has
// role === 'admin' and status === 'active', via PostgREST using the
// visitor's OWN access token (RLS's "select own row" policy allows
// this without needing the service role key at the edge).
async function isActiveAdmin(accessToken, supabaseUrl, anonKey, userId) {
  try {
    const res = await fetch(
      `${supabaseUrl}/rest/v1/sbl_profiles?id=eq.${userId}&select=role,status`,
      { headers: { apikey: anonKey, Authorization: `Bearer ${accessToken}` } }
    );
    if (!res.ok) return false;
    const rows = await res.json();
    const profile = rows[0];
    return !!profile && profile.role === 'admin' && profile.status === 'active';
  } catch (err) {
    return false;
  }
}

export default async function middleware(request) {
  const { pathname } = new URL(request.url);
  const isAdminPath = pathname.startsWith('/admin');

  const supabaseUrl = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  const jwtSecret = process.env.SUPABASE_JWT_SECRET;

  if (!supabaseUrl || !anonKey || !jwtSecret) {
    // Fail closed for admin (never expose the dashboard by
    // accident), fail open for regular content so a missing env var
    // doesn't take the whole public-facing site down. Fix the env
    // vars — see README-AUTH-SETUP.md.
    console.error('SBL auth middleware: missing SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_JWT_SECRET.');
    return isAdminPath ? redirectToLogin(request) : undefined;
  }

  const accessToken = getCookie(request, ACCESS_COOKIE);
  let payload = accessToken ? await verifySupabaseJwt(accessToken, jwtSecret) : null;
  let refreshedCookies = null;

  if (!payload) {
    const refreshToken = getCookie(request, REFRESH_COOKIE);
    if (!refreshToken) return redirectToLogin(request);

    const refreshed = await refreshSession(refreshToken, supabaseUrl, anonKey);
    if (!refreshed) return redirectToLogin(request);

    payload = await verifySupabaseJwt(refreshed.access_token, jwtSecret);
    if (!payload) return redirectToLogin(request);

    // Re-issue the request to the same URL so the browser picks up
    // the fresh cookies before the page (or the admin check below)
    // continues. Plain Web Response — no framework helper needed.
    const response = new Response(null, {
      status: 302,
      headers: {
        Location: request.url,
        'Set-Cookie': buildCookieHeader(ACCESS_COOKIE, refreshed.access_token, refreshed.expires_in || 3600)
      }
    });
    response.headers.append('Set-Cookie', buildCookieHeader(REFRESH_COOKIE, refreshed.refresh_token, 60 * 60 * 24 * 30));
    return response;
  }

  if (isAdminPath) {
    const allowed = await isActiveAdmin(accessToken, supabaseUrl, anonKey, payload.sub);
    if (!allowed) return redirectToLogin(request);
  }

  return undefined; // valid session — let the request through
}
