// /api/session — GET: tells a page whether the current visitor is
// logged in, and as whom. Used by the login/register pages (to
// bounce an already-logged-in visitor away) and by any page that
// wants to show "Log out" vs "Log in" without a hard server redirect.
// This is a convenience for the UI only — middleware.js is what
// actually enforces access to protected content.

import { getSessionUser } from './_lib/auth.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await getSessionUser(req);
  if (!session) {
    return res.status(200).json({ loggedIn: false });
  }

  return res.status(200).json({
    loggedIn: true,
    user: {
      email: session.profile.email,
      fullName: session.profile.full_name,
      role: session.profile.role,
      status: session.profile.status
    }
  });
}
