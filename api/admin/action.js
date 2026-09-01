// /api/admin/action — POST { action, ...payload }
//
// Consolidates approve / reject / suspend / delete-user / bootstrap
// into ONE serverless function. This exists purely to stay under
// Vercel's Hobby-plan cap of 12 Serverless Functions per deployment —
// having each of these as its own /api/admin/*.js file (as originally
// built) pushed the project's total function count to 13, which
// caused every deployment to fail with "No more than 12 Serverless
// Functions can be added to a Deployment on the Hobby plan."
//
// The behaviour of each action below is otherwise IDENTICAL to when
// it was its own file — nothing about validation, security checks or
// email sending has changed, only where the code lives.
//
// Dispatch: every action except 'bootstrap' requires an active admin
// session (checked once, up front). 'bootstrap' is the one-time,
// no-session, secret-protected exception — see handleBootstrap below.

import { requireAdmin } from '../_lib/auth.js';
import { getSupabaseAdmin } from '../_lib/supabaseAdmin.js';
import { createSetupToken } from '../_lib/tokens.js';
import { sendApprovalEmail, sendRejectionEmail } from '../_lib/emails.js';
import { isValidEmail, isValidPassword } from '../_lib/validate.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const action = req.body && req.body.action;

  // Bootstrap has no session to check against (it's how the very
  // first admin session becomes possible) — it authenticates via
  // ADMIN_BOOTSTRAP_SECRET instead. Every other action requires an
  // active admin session, checked once here.
  if (action === 'bootstrap') {
    return handleBootstrap(req, res);
  }

  const session = await requireAdmin(req, res);
  if (!session) return; // requireAdmin has already sent the 401/403

  if (action === 'approve') return handleApprove(req, res, session);
  if (action === 'reject') return handleReject(req, res, session);
  if (action === 'suspend') return handleSuspend(req, res, session);
  if (action === 'delete-user') return handleDeleteUser(req, res, session);
  if (action === 'set-role') return handleSetRole(req, res, session);
  if (action === 'assign-teacher') return handleAssignTeacher(req, res, session);

  return res.status(400).json({ error: 'Unknown or missing action.' });
}

// ---------------------------------------------------------------
// approve — { applicationId }
// Creates the real account (Supabase Auth user + sbl_profiles row),
// marks the application approved, and emails the applicant an
// activation link. No password is set here — the applicant chooses
// their own via the emailed link (api/complete-password-setup.js).
// ---------------------------------------------------------------
async function handleApprove(req, res, session) {
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
    console.error('Failed to create auth user:', createUserError);
    return res.status(500).json({
      error: createUserError && createUserError.message
        ? `Could not create the account: ${createUserError.message}`
        : 'Could not create the account.'
    });
  }

  const userId = createdUser.user.id;

  // Students get tagged with the 'student' role (already supported by
  // the sbl_profiles CHECK constraint) so future features — progress
  // tracking, teachers monitoring their own classes — can tell them
  // apart from staff. Everyone else (any other applied-for role)
  // becomes a plain 'user', same as before.
  const assignedRole = application.role_applied_for === 'Student' ? 'student' : 'user';

  const { error: profileError } = await supabase.from('sbl_profiles').insert({
    id: userId,
    full_name: fullName,
    email: application.email,
    organisation: application.organisation,
    country: application.country,
    role: assignedRole,
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

// ---------------------------------------------------------------
// reject — { applicationId, note? }
// ---------------------------------------------------------------
async function handleReject(req, res, session) {
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

// ---------------------------------------------------------------
// suspend — { userId, suspend: true|false }
// Toggles a user between active and suspended. A suspended user's
// existing password keeps working at Supabase's level, but both
// /api/login and middleware.js check sbl_profiles.status and block
// them regardless — belt and braces, since Supabase's own "ban"
// flag has quirky expiry semantics we'd rather not depend on here.
// ---------------------------------------------------------------
async function handleSuspend(req, res, session) {
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

// ---------------------------------------------------------------
// delete-user — { userId }
// Permanently deletes the Supabase Auth user. The sbl_profiles row
// is removed automatically (ON DELETE CASCADE from auth.users).
// This is irreversible, so the dashboard confirms with the admin
// before calling this endpoint.
// ---------------------------------------------------------------
async function handleDeleteUser(req, res, session) {
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

// ---------------------------------------------------------------
// set-role — { userId, role }
// Toggles an approved account between the plain 'user' role and
// 'teacher' — this is the only way a 'teacher' account gets created
// (there's no separate application flow for it; someone applies as
// normal, gets approved, and the admin promotes them here once
// they're ready to see a class of students' progress).
//
// Deliberately restricted to 'user' <-> 'teacher' only: it will not
// touch an 'admin' or 'student' account, and it will not promote
// anyone TO 'admin' — that stays a manual Supabase step (see
// handleBootstrap's own comment) so it can never be done by mistake
// through the dashboard.
// ---------------------------------------------------------------
async function handleSetRole(req, res, session) {
  const { userId, role } = req.body || {};
  if (!userId || (role !== 'user' && role !== 'teacher')) {
    return res.status(400).json({ error: 'userId and role ("user" or "teacher") are required.' });
  }

  const supabase = getSupabaseAdmin();

  const { data: target, error: fetchError } = await supabase
    .from('sbl_profiles')
    .select('id, role')
    .eq('id', userId)
    .maybeSingle();

  if (fetchError || !target) {
    return res.status(404).json({ error: 'User not found.' });
  }
  if (target.role !== 'user' && target.role !== 'teacher') {
    return res.status(400).json({ error: `This account's role (${target.role}) can't be changed from here.` });
  }

  const { error } = await supabase.from('sbl_profiles').update({ role }).eq('id', userId);
  if (error) {
    console.error('Failed to update role:', error);
    return res.status(500).json({ error: "Could not update this user's role." });
  }

  // Demoting a teacher back to a plain user: clear their students'
  // assignments too, so no student is left "assigned" to someone
  // who can no longer see a students list at all.
  if (role === 'user') {
    const { error: unassignError } = await supabase
      .from('sbl_profiles')
      .update({ teacher_id: null })
      .eq('teacher_id', userId);
    if (unassignError) {
      console.error("Failed to clear former teacher's student assignments:", unassignError);
    }
  }

  return res.status(200).json({ ok: true });
}

// ---------------------------------------------------------------
// assign-teacher — { studentId, teacherId }
// Sets (or, with teacherId omitted/null, clears) which teacher a
// student is linked to. teacherId, if given, must belong to an
// account whose role is currently 'teacher' — or 'admin', since an
// admin can also act as a teacher and have students assigned
// directly to them (see README-TEACHER-LINKING-SETUP.md).
// ---------------------------------------------------------------
async function handleAssignTeacher(req, res, session) {
  const { studentId, teacherId } = req.body || {};
  if (!studentId) {
    return res.status(400).json({ error: 'studentId is required.' });
  }

  const supabase = getSupabaseAdmin();

  if (teacherId) {
    const { data: teacher, error: teacherError } = await supabase
      .from('sbl_profiles')
      .select('id, role')
      .eq('id', teacherId)
      .maybeSingle();

    if (teacherError || !teacher || (teacher.role !== 'teacher' && teacher.role !== 'admin')) {
      return res.status(400).json({ error: 'That account is not a teacher.' });
    }
  }

  const { error } = await supabase
    .from('sbl_profiles')
    .update({ teacher_id: teacherId || null })
    .eq('id', studentId);

  if (error) {
    console.error('Failed to assign teacher:', error);
    return res.status(500).json({ error: "Could not update this student's assigned teacher." });
  }

  return res.status(200).json({ ok: true });
}

// ---------------------------------------------------------------
// bootstrap — { email, password, secret }
// One-time-only action for creating the very first admin account
// (there is no other way to get an admin in, since normally an
// admin has to approve every new account). Protected by a secret
// env var rather than a session, since no session can exist yet.
//
// Self-disabling: if an admin profile already exists, this refuses
// to run again even with a correct secret — so it cannot become a
// standing backdoor if ADMIN_BOOTSTRAP_SECRET ever leaks later.
// See README-AUTH-SETUP.md, "Step 5 — Make yourself an admin".
// ---------------------------------------------------------------
async function handleBootstrap(req, res) {
  const expectedSecret = process.env.ADMIN_BOOTSTRAP_SECRET;
  if (!expectedSecret) {
    return res.status(500).json({ error: 'ADMIN_BOOTSTRAP_SECRET is not set — see the setup guide.' });
  }

  const { email, password, secret } = req.body || {};
  if (secret !== expectedSecret) {
    return res.status(403).json({ error: 'Invalid secret.' });
  }
  if (!isValidEmail(email) || !isValidPassword(password)) {
    return res.status(400).json({ error: 'A valid email and a password of at least 10 characters are required.' });
  }

  const supabase = getSupabaseAdmin();

  const { count: adminCount, error: countError } = await supabase
    .from('sbl_profiles')
    .select('id', { count: 'exact', head: true })
    .eq('role', 'admin');

  if (countError) {
    console.error('Bootstrap admin-count check failed:', countError);
    return res.status(500).json({ error: 'Could not verify admin state.' });
  }
  if ((adminCount || 0) > 0) {
    return res.status(403).json({
      error: 'An admin account already exists. Bootstrap is disabled — remove ADMIN_BOOTSTRAP_SECRET from your Vercel project, or promote further admins directly in Supabase (update sbl_profiles set role = \'admin\' where email = \'...\';).'
    });
  }

  const normalizedEmail = email.trim().toLowerCase();

  const { data: existingProfile } = await supabase
    .from('sbl_profiles')
    .select('id')
    .eq('email', normalizedEmail)
    .maybeSingle();

  let userId;
  if (existingProfile) {
    userId = existingProfile.id;
    await supabase.auth.admin.updateUserById(userId, { password });
  } else {
    const { data: createdUser, error: createUserError } = await supabase.auth.admin.createUser({
      email: normalizedEmail,
      password,
      email_confirm: true
    });
    if (createUserError || !createdUser || !createdUser.user) {
      console.error('Bootstrap createUser failed:', createUserError);
      return res.status(500).json({ error: 'Could not create the account.' });
    }
    userId = createdUser.user.id;
  }

  const { error: upsertError } = await supabase
    .from('sbl_profiles')
    .upsert({
      id: userId,
      full_name: 'Keith Wright',
      email: normalizedEmail,
      role: 'admin',
      status: 'active'
    });

  if (upsertError) {
    console.error('Bootstrap profile upsert failed:', upsertError);
    return res.status(500).json({ error: 'Account was created but the admin profile could not be saved.' });
  }

  return res.status(200).json({ ok: true, message: 'Admin account ready. You can now log in at /login/.' });
}
