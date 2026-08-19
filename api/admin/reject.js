// /api/admin/reject — POST { applicationId, note? }

import { requireAdmin } from '../_lib/auth.js';
import { getSupabaseAdmin } from '../_lib/supabaseAdmin.js';
import { sendRejectionEmail } from '../_lib/emails.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await requireAdmin(req, res);
  if (!session) return;

  const applicationId = req.body && req.body.applicationId;
  const note = req.body && req.body.note ? String(req.body.note).slice(0, 2000) : null;
  if (!applicationId) {
    return res.status(400).json({ error: 'applicationId is required.' });
  }

  const supabase = getSupabaseAdmin();

  const { data: application, error: fetchError } = await supabase
    .from('sbl_applications')
    .select('id, first_name, email, status')
    .eq('id', applicationId)
    .maybeSingle();

  if (fetchError || !application) {
    return res.status(404).json({ error: 'Application not found.' });
  }
  if (application.status !== 'pending') {
    return res.status(409).json({ error: `This application has already been ${application.status}.` });
  }

  const { error: updateError } = await supabase
    .from('sbl_applications')
    .update({
      status: 'rejected',
      decided_at: new Date().toISOString(),
      decided_by: session.profile.email,
      decision_note: note
    })
    .eq('id', applicationId);

  if (updateError) {
    console.error('Failed to mark application rejected:', updateError);
    return res.status(500).json({ error: 'Could not update the application.' });
  }

  let emailWarning = null;
  try {
    await sendRejectionEmail({ email: application.email, firstName: application.first_name });
  } catch (err) {
    console.error('Failed to send rejection email:', err);
    emailWarning = 'The application was rejected, but the notification email could not be sent.';
  }

  return res.status(200).json({ ok: true, warning: emailWarning });
}
