// /api/register-application
// Handles a "Request Access" submission. Does NOT create a login —
// it saves a pending application and emails the applicant a
// confirmation. No admin-notification email is sent; the admin
// checks the pending list directly in /admin/ instead. See
// README-AUTH-SETUP.md.

import { getSupabaseAdmin } from './_lib/supabaseAdmin.js';
import { sendApplicantConfirmationEmail } from './_lib/emails.js';
import { isValidEmail, isNonEmptyString, isValidRoleApplied, sanitizeAreasOfInterest } from './_lib/validate.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const firstName = (body.firstName || '').trim();
  const lastName = (body.lastName || '').trim();
  const email = (body.email || '').trim().toLowerCase();
  const organisation = (body.organisation || '').trim();
  const country = (body.country || '').trim();
  const roleAppliedFor = body.roleAppliedFor;
  const reason = (body.reason || '').trim();
  const areasOfInterest = sanitizeAreasOfInterest(body.areasOfInterest);
  const terms = body.terms || {};

  const errors = [];
  if (!isNonEmptyString(firstName, 100)) errors.push('First name is required.');
  if (!isNonEmptyString(lastName, 100)) errors.push('Last name is required.');
  if (!isValidEmail(email)) errors.push('A valid professional email address is required.');
  if (!isNonEmptyString(organisation, 200)) errors.push('School / organisation is required.');
  if (!isNonEmptyString(country, 100)) errors.push('Country is required.');
  if (!isValidRoleApplied(roleAppliedFor)) errors.push('Please select a valid role.');
  if (!isNonEmptyString(reason, 4000)) errors.push('Please tell us why you would like access.');
  if (!terms.professionalCapacity || !terms.noSharing || !terms.adminDiscretion || !terms.responsibleUse) {
    errors.push('All four terms of access must be accepted.');
  }

  if (errors.length) {
    return res.status(400).json({ error: errors.join(' ') });
  }

  const supabase = getSupabaseAdmin();

  // Prevent duplicate pending applications and re-applications by
  // already-approved users from cluttering the queue.
  const { data: existingApplication } = await supabase
    .from('sbl_applications')
    .select('id, status')
    .eq('email', email)
    .order('submitted_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (existingApplication && existingApplication.status === 'pending') {
    return res.status(409).json({
      error: 'An application from this email address is already pending review.'
    });
  }

  const { data: inserted, error: insertError } = await supabase
    .from('sbl_applications')
    .insert({
      first_name: firstName,
      last_name: lastName,
      email,
      organisation,
      country,
      role_applied_for: roleAppliedFor,
      reason,
      areas_of_interest: areasOfInterest,
      terms_professional_capacity: true,
      terms_no_sharing: true,
      terms_admin_discretion: true,
      terms_responsible_use: true,
      status: 'pending'
    })
    .select('id, reference_id, first_name, last_name, email, organisation, country, role_applied_for, areas_of_interest, reason, submitted_at')
    .single();

  if (insertError) {
    console.error('Failed to insert application:', insertError);
    return res.status(500).json({ error: 'Could not save your application. Please try again.' });
  }

  // Email failure should not stop the application being saved — the
  // applicant already has a reference ID either way.
  try {
    await sendApplicantConfirmationEmail({
      email: inserted.email,
      firstName: inserted.first_name,
      referenceId: inserted.reference_id
    });
  } catch (err) {
    console.error('Failed to send applicant confirmation email:', err);
  }

  return res.status(201).json({
    referenceId: inserted.reference_id
  });
}
