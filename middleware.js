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
    // Content gating is ON — a visitor needs a valid, active login
    // to reach anything under these paths. A direct link into any of
    // these bypasses the login page entirely if its path isn't
    // listed here — the middleware never even runs for an unmatched
    // path, since matching happens before this file's code does.
    '/geography/:path*',
    '/humanities-hub/:path*',
    '/igcse/:path*',
    '/economics/:path*',
    // The admin dashboard — always gated, and additionally requires
    // role === 'admin' (checked below), not just "logged in".
    '/admin/:path*',
    // The teacher dashboard ("My Students") — always gated, and
    // additionally requires role === 'teacher' (checked below).
    '/teacher/:path*'
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

// Supabase projects sign access tokens one of two ways depending on
// when the project was created / whether it has been rotated:
//   - Legacy: HS256 with a single shared secret (Settings → API →
//     JWT Settings → "JWT Secret" / "Legacy JWT Secret").
//   - Newer:  ES256 (ECC P-256) asymmetric signing keys (Settings →
//     JWT Keys). These are verified against the project's public
//     JWKS endpoint — no secret required at all, since it's a public
//     key. This is Supabase's current default for new/rotated
//     projects.
// verifySupabaseJwt() below handles BOTH, branching on the token's
// own `alg` header, so this file works unmodified regardless of
// which signing method a given Supabase project uses.

let jwksCache = { keys: null, fetchedAt: 0 };
const JWKS_CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes — best-effort; edge instances are short-lived anyway

async function getJwks(supabaseUrl) {
  const isFresh = jwksCache.keys && (Date.now() - jwksCache.fetchedAt) < JWKS_CACHE_TTL_MS;
  if (isFresh) return jwksCache.keys;

  try {
    const res = await fetch(`${supabaseUrl}/auth/v1/.well-known/jwks.json`);
    if (!res.ok) return jwksCache.keys; // fall back to a stale cache rather than nothing
    const data = await res.json();
    if (Array.isArray(data.keys) && data.keys.length) {
      jwksCache = { keys: data.keys, fetchedAt: Date.now() };
    }
    return jwksCache.keys;
  } catch (err) {
    return jwksCache.keys;
  }
}

async function verifyEs256(headerB64, payloadB64, signatureB64, header, supabaseUrl) {
  const keys = await getJwks(supabaseUrl);
  if (!keys) return false;

  const jwk = keys.find((k) => k.kid === header.kid) || keys.find((k) => k.kty === 'EC');
  if (!jwk) return false;

  const key = await crypto.subtle.importKey(
    'jwk',
    jwk,
    { name: 'ECDSA', namedCurve: jwk.crv || 'P-256' },
    false,
    ['verify']
  );

  const data = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
  const signature = base64UrlToUint8Array(signatureB64);
  return crypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-256' }, key, signature, data);
}

async function verifyHs256(headerB64, payloadB64, signatureB64, jwtSecret) {
  if (!jwtSecret) return false;

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(jwtSecret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify']
  );

  const data = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
  const signature = base64UrlToUint8Array(signatureB64);
  return crypto.subtle.verify('HMAC', key, signature, data);
}

// Verifies a Supabase JWT's signature and expiry, using whichever
// algorithm the token itself declares. Returns the decoded payload
// if valid, otherwise null. Does not throw.
async function verifySupabaseJwt(token, { jwtSecret, supabaseUrl }) {
  try {
    const [headerB64, payloadB64, signatureB64] = token.split('.');
    if (!headerB64 || !payloadB64 || !signatureB64) return null;

    const header = base64UrlToJson(headerB64);
    const payload = base64UrlToJson(payloadB64);
    if (!payload.exp || payload.exp * 1000 < Date.now()) return null;

    let valid = false;
    if (header.alg === 'ES256') {
      valid = await verifyEs256(headerB64, payloadB64, signatureB64, header, supabaseUrl);
    } else if (header.alg === 'HS256') {
      valid = await verifyHs256(headerB64, payloadB64, signatureB64, jwtSecret);
    }
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

// For /admin/* and /teacher/* — looks up the logged-in user's role,
// via PostgREST using the visitor's OWN access token (RLS's "select
// own row" policy allows this without needing the service role key
// at the edge). Returns the role string if the profile is active,
// otherwise null (missing profile, suspended, or a lookup failure —
// all fail closed the same way).
async function getActiveRole(accessToken, supabaseUrl, anonKey, userId) {
  try {
    const res = await fetch(
      `${supabaseUrl}/rest/v1/sbl_profiles?id=eq.${userId}&select=role,status`,
      { headers: { apikey: anonKey, Authorization: `Bearer ${accessToken}` } }
    );
    if (!res.ok) return null;
    const rows = await res.json();
    const profile = rows[0];
    if (!profile || profile.status !== 'active') return null;
    return profile.role;
  } catch (err) {
    return null;
  }
}

export default async function middleware(request) {
  const { pathname } = new URL(request.url);
  const isAdminPath = pathname.startsWith('/admin');
  const isTeacherPath = pathname.startsWith('/teacher');

  const supabaseUrl = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  // Optional: only used as a fallback for projects still on the
  // legacy HS256 shared-secret signing method. Newer projects (ES256
  // / JWKS) don't need this set at all — see the comment above
  // verifySupabaseJwt().
  const jwtSecret = process.env.SUPABASE_JWT_SECRET;

  if (!supabaseUrl || !anonKey) {
    // Fail closed for admin/teacher (never expose either dashboard
    // by accident), fail open for regular content so a missing env
    // var doesn't take the whole public-facing site down. Fix the
    // env vars — see README-AUTH-SETUP.md.
    console.error('SBL auth middleware: missing SUPABASE_URL / SUPABASE_ANON_KEY.');
    return (isAdminPath || isTeacherPath) ? redirectToLogin(request) : undefined;
  }

  const accessToken = getCookie(request, ACCESS_COOKIE);
  let payload = accessToken ? await verifySupabaseJwt(accessToken, { jwtSecret, supabaseUrl }) : null;
  let refreshedCookies = null;

  if (!payload) {
    const refreshToken = getCookie(request, REFRESH_COOKIE);
    if (!refreshToken) return redirectToLogin(request);

    const refreshed = await refreshSession(refreshToken, supabaseUrl, anonKey);
    if (!refreshed) return redirectToLogin(request);

    payload = await verifySupabaseJwt(refreshed.access_token, { jwtSecret, supabaseUrl });
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

  if (isAdminPath || isTeacherPath) {
    const role = await getActiveRole(accessToken, supabaseUrl, anonKey, payload.sub);
    if (isAdminPath && role !== 'admin') return redirectToLogin(request);
    if (isTeacherPath && role !== 'teacher') return redirectToLogin(request);
  }

  return undefined; // valid session — let the request through
}
