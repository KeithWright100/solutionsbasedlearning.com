// api/_lib/guest.js
// The shared conference / demo guest login.
//
// One account (GUEST_EMAIL) that an admin switches on from the admin
// dashboard ("Conference guest login"). Starting it sets the password
// and stamps the account's Supabase app_metadata with sbl_guest_until
// (a millisecond timestamp, 6 hours ahead). That stamp is carried in
// every access token issued to the guest, so:
//   - api/login.js refuses the guest login once the time has passed,
//   - middleware.js sends a guest back to the login page on any page load,
//   - api/_lib/auth.js treats an expired guest as logged out for /api calls.
// The guest has the 'student' role, so it can never open /teacher or
// /admin, and it has no teacher links, so it can't see any student data.

export const GUEST_EMAIL = 'guest@solutionsbasedlearning.com';
export const GUEST_HOURS = 6;

// The guest's end time (ms), or null for every normal account.
export function guestUntil(user) {
  const v = user && user.app_metadata && user.app_metadata.sbl_guest_until;
  return typeof v === 'number' ? v : null;
}

export function guestExpired(user) {
  const until = guestUntil(user);
  return until !== null && Date.now() >= until;
}
