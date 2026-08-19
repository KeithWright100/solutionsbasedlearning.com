// /api/admin/suspend — POST { userId, suspend: true|false }
// Toggles a user between active and suspended. A suspended user's
// existing password keeps working at Supabase's level, but both
// /api/login and middleware.js check sbl_profiles.status and block
// them regardless — belt and braces, since Supabase's own "ban"
// flag has quirky expiry semantics we'd rather not depend on here.

import { requireAdmin } from '../_lib/auth.js';
import { getSupabaseAdmin } from '../_lib/supabaseAdmin.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await requireAdmin(req, res);
  if (!session) return;

  const { userId, suspend } = req.body || {};
  if (!userId || typeof suspend !== 'boolean') {
    return res.status(400).json({ error: 'userId and suspend (boolean) are required.' });
  }
  if (userId === session.user.id && suspend) {
    return res.status(400).json({ error: 'You cannot suspend your own account.' });
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from('sbl_profiles')
    .update({ status: suspend ? 'suspended' : 'active' })
    .eq('id', userId);

  if (error) {
    console.error('Failed to update user status:', error);
    return res.status(500).json({ error: 'Could not update this user.' });
  }

  return res.status(200).json({ ok: true });
}
