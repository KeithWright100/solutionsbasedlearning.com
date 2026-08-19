// /api/admin/delete-user — POST { userId }
// Permanently deletes the Supabase Auth user. The sbl_profiles row
// is removed automatically (ON DELETE CASCADE from auth.users).
// This is irreversible, so the dashboard confirms with the admin
// before calling this endpoint.

import { requireAdmin } from '../_lib/auth.js';
import { getSupabaseAdmin } from '../_lib/supabaseAdmin.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await requireAdmin(req, res);
  if (!session) return;

  const { userId } = req.body || {};
  if (!userId) {
    return res.status(400).json({ error: 'userId is required.' });
  }
  if (userId === session.user.id) {
    return res.status(400).json({ error: 'You cannot delete your own account.' });
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase.auth.admin.deleteUser(userId);

  if (error) {
    console.error('Failed to delete user:', error);
    return res.status(500).json({ error: 'Could not delete this user.' });
  }

  return res.status(200).json({ ok: true });
}
