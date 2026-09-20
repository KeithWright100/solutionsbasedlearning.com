// api/_lib/cookies.js
// Minimal cookie helpers for Vercel Node serverless functions
// (req/res are plain Node http objects here, not Next.js — this
// project has no framework, so nothing does this for us).

export function parseCookies(req) {
  const header = req.headers.cookie;
  const out = {};
  if (!header) return out;
  header.split(';').forEach((part) => {
    const idx = part.indexOf('=');
    if (idx === -1) return;
    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    if (key) out[key] = decodeURIComponent(value);
  });
  return out;
}

// Builds a Set-Cookie header string. `maxAgeSeconds` omitted => session cookie.
export function buildCookie(name, value, { maxAgeSeconds, httpOnly = true } = {}) {
  const parts = [`${name}=${encodeURIComponent(value)}`, 'Path=/', 'SameSite=Lax'];
  if (httpOnly) parts.push('HttpOnly');
  if (process.env.NODE_ENV !== 'development') parts.push('Secure');
  if (typeof maxAgeSeconds === 'number') parts.push(`Max-Age=${maxAgeSeconds}`);
  return parts.join('; ');
}

export function buildExpiredCookie(name) {
  return `${name}=; Path=/; SameSite=Lax; HttpOnly; Max-Age=0`;
}

export const ACCESS_COOKIE = 'sbl_at';
export const REFRESH_COOKIE = 'sbl_rt';

export function setSessionCookies(res, { accessToken, refreshToken, expiresIn }) {
  const cookies = [
    buildCookie(ACCESS_COOKIE, accessToken, { maxAgeSeconds: expiresIn || 3600 }),
    buildCookie(REFRESH_COOKIE, refreshToken, { maxAgeSeconds: 60 * 60 * 24 * 30 })
  ];
  res.setHeader('Set-Cookie', cookies);
}

export function clearSessionCookies(res) {
  res.setHeader('Set-Cookie', [buildExpiredCookie(ACCESS_COOKIE), buildExpiredCookie(REFRESH_COOKIE)]);
}
