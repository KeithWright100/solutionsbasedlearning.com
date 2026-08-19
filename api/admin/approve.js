// /api/admin/approve — POST { applicationId }
// Creates the real account (Supabase Auth user + sbl_profiles row),
// marks the application approved, and emails the applicant an
// activation link. No password is set here — the applicant chooses
// their own via the emailed link (api/complete-password-setup.js).

import { requireAdmin } from '../_lib/auth.js';
import { getSupabaseAdmin } from '../_lib/supabaseAdmin.js';
import { createSetupToken } from '../_lib/tokens.js';
import { sendApprovalEmail } from '../_lib/emails.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await requireAdmin(req, res);
  if (!session) return;

  const applicationId = req.body && req.body.applicationId;
  if (!applicationId) {
    return res.status(400).json({ error: 'applicationId is required.' });
  }

  const supabase = getSupabaseAdmin();

  const { data: application, error: fetchError } = await supabase
    .from('sbl_applications')
    .select('*')
    .eq('id', applicationId)
    .maybeSingle();

  if (fetchError || !application) {
    return res.status(404).json({ error: 'Application not found.' });
  }
  if (application.status !== 'pending') {
    return res.status(409).json({ error: `This application has already been ${application.status}.` });
  }

  // Create the Auth user with no password yet. email_confirm:true
  // means Supabase never needs to send its own "confirm your email"
  // message — our activation email (via Resend) is the only email
  // the applicant gets, avoiding the delivery problems Supabase's
  // built-in mailer has had.
  const fullName = `${application.first_name} ${application.last_name}`.trim();
  const { data: createdUser, error: createUserError } = await supabase.auth.admin.createUser({
    email: application.email,
    email_confirm: true,
    user_metadata: { full_name: fullName }
  });

  if (createUserError || !createdUser || !createdUser.user) {
    // Most common cause: a user with this email already exists
    // (e.g. re-approving after a manual fix). Surface a clear error
    // rather than silently failing.
    console.error('Failed to create auth user:', createUserError);
    return res.status(500).json({
      error: createUserError && createUserError.message
        ? `Could not create the account: ${createUserError.message}`
        : 'Could not create the account.'
    });
  }

  const userId = createdUser.user.id;

  const { error: profileError } = await supabase.from('sbl_profiles').insert({
    id: userId,
    full_name: fullName,
    email: application.email,
    organisation: application.organisation,
    country: application.country,
    role: 'user',
    status: 'active',
    application_id: application.id
  });

  if (profileError) {
    console.error('Failed to create profile row:', profileError);
    return res.status(500).json({ error: 'Account was created but the profile could not be saved. Please contact support.' });
  }

  const { error: updateAppError } = await supabase
    .from('sbl_applications')
    .update({
      status: 'approved',
      decided_at: new Date().toISOString(),
      decided_by: session.profile.email,
      user_id: userId
    })
    .eq('id', applicationId);

  if (updateAppError) {
    console.error('Failed to mark application approved:', updateAppError);
  }

  let emailWarning = null;
  try {
    const rawToken = await createSetupToken({ userId, purpose: 'activate' });
    const siteUrl = process.env.SBL_SITE_URL || `https://${req.headers.host}`;
    const activateUrl = `${siteUrl}/set-password/?purpose=activate&token=${encodeURIComponent(rawToken)}`;
    await sendApprovalEmail({ email: application.email, firstName: application.first_name, activateUrl });
  } catch (err) {
    console.error('Failed to send approval email:', err);
    emailWarning = 'The account was created, but the approval email could not be sent. You may want to contact the applicant directly.';
  }

  return res.status(200).json({ ok: true, warning: emailWarning });
}
