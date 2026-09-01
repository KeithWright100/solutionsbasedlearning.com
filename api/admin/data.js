// /api/admin/data — GET: everything the admin dashboard needs to
// render its three tabs (pending / approved / rejected).

import { requireAdmin } from '../_lib/auth.js';
import { getSupabaseAdmin } from '../_lib/supabaseAdmin.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await requireAdmin(req, res);
  if (!session) return;

  const supabase = getSupabaseAdmin();

  const [pendingRes, decidedRes, profilesRes] = await Promise.all([
    supabase
      .from('sbl_applications')
      .select('id, reference_id, first_name, last_name, email, organisation, country, role_applied_for, areas_of_interest, reason, submitted_at, status')
      .eq('status', 'pending')
      .order('submitted_at', { ascending: true }),
    supabase
      .from('sbl_applications')
      .select('id, reference_id, first_name, last_name, email, organisation, country, role_applied_for, decided_at, status')
      .eq('status', 'rejected')
      .order('decided_at', { ascending: false })
      .limit(200),
    supabase
      .from('sbl_profiles')
      .select('id, full_name, email, organisation, country, role, status, teacher_id, created_at')
      .order('created_at', { ascending: false })
      .limit(500)
  ]);

  if (pendingRes.error || decidedRes.error || profilesRes.error) {
    console.error('admin/data query error:', pendingRes.error || decidedRes.error || profilesRes.error);
    return res.status(500).json({ error: 'Could not load dashboard data.' });
  }

  // A lightweight list of current teachers, so the dashboard can
  // offer an "assign to teacher" dropdown for each student row
  // without a second round trip. Admin accounts count as teachers
  // here too, since an admin may also want students assigned
  // directly to them and see their own My Students page.
  const teachers = (profilesRes.data || [])
    .filter((p) => p.role === 'teacher' || p.role === 'admin')
    .map((p) => ({ id: p.id, full_name: p.full_name, email: p.email }));

  return res.status(200).json({
    pending: pendingRes.data,
    rejected: decidedRes.data,
    users: profilesRes.data,
    teachers
  });
}
