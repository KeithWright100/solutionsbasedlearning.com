// api/_lib/emails.js
// All outbound email for the auth system goes through here, using
// Resend. Every template shares a small amount of SBL branding so
// emails look like they come from the same product as the site.
//
// Required env var: RESEND_API_KEY
// Optional env var: SBL_EMAIL_FROM (defaults below) — must be an
// address on a domain you have verified in Resend, e.g.
// "Solutions Based Learning <no-reply@solutionsbasedlearning.com>".
// Until you verify your own domain, Resend's onboarding sandbox
// address (onboarding@resend.dev) can be used for testing, but it
// can only send to the email address on your Resend account.

const RESEND_API_URL = 'https://api.resend.com/emails';

async function sendEmail({ to, subject, html, text }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not set as a Vercel environment variable.');
  }
  const from = process.env.SBL_EMAIL_FROM || 'Solutions Based Learning <onboarding@resend.dev>';

  const res = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ from, to, subject, html, text })
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Resend API error (${res.status}): ${body}`);
  }

  return res.json();
}

function wrapper(innerHtml) {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#0B1929;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0B1929;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:520px;background:#10233A;border:1px solid #1B3247;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px 0;">
                <div style="font-family:Arial,sans-serif;font-weight:700;font-size:20px;letter-spacing:-0.02em;color:#2DE1CB;">SBL</div>
                <div style="font-size:13px;color:#7C93A3;margin-top:2px;">Solutions Based Learning</div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 32px;color:#F6FAFA;font-size:15px;line-height:1.6;">
                ${innerHtml}
              </td>
            </tr>
          </table>
          <div style="color:#445A6B;font-size:12px;margin-top:20px;">Solutions Based Learning &middot; This is an automated message.</div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function button(href, label) {
  return `<a href="${href}" style="display:inline-block;background:linear-gradient(135deg,#17B8A6,#2DE1CB);color:#060D16;text-decoration:none;font-weight:700;padding:12px 24px;border-radius:10px;font-size:14px;">${label}</a>`;
}

export async function sendAdminNotificationEmail({ adminEmail, application, dashboardUrl }) {
  const {
    reference_id, first_name, last_name, email, organisation, country,
    role_applied_for, areas_of_interest, reason, submitted_at
  } = application;

  const submittedDisplay = new Date(submitted_at).toLocaleString('en-GB', {
    dateStyle: 'medium', timeStyle: 'short'
  });

  const html = wrapper(`
    <p>Hello Keith,</p>
    <p>A new request has been submitted for access to Solutions Based Learning.</p>
    <p style="font-weight:700;margin-bottom:4px;">Applicant Details</p>
    <table role="presentation" style="width:100%;font-size:14px;color:#F6FAFA;">
      <tr><td style="color:#7C93A3;padding:3px 0;">Name</td><td style="padding:3px 0;">${first_name} ${last_name}</td></tr>
      <tr><td style="color:#7C93A3;padding:3px 0;">Email Address</td><td style="padding:3px 0;">${email}</td></tr>
      <tr><td style="color:#7C93A3;padding:3px 0;">School / Organisation</td><td style="padding:3px 0;">${organisation}</td></tr>
      <tr><td style="color:#7C93A3;padding:3px 0;">Country</td><td style="padding:3px 0;">${country}</td></tr>
      <tr><td style="color:#7C93A3;padding:3px 0;">Role</td><td style="padding:3px 0;">${role_applied_for}</td></tr>
      <tr><td style="color:#7C93A3;padding:3px 0;">Areas of Interest</td><td style="padding:3px 0;">${(areas_of_interest || []).join(', ') || '—'}</td></tr>
      <tr><td style="color:#7C93A3;padding:3px 0;vertical-align:top;">Reason for Request</td><td style="padding:3px 0;">${reason}</td></tr>
      <tr><td style="color:#7C93A3;padding:3px 0;">Application Status</td><td style="padding:3px 0;">Pending Approval</td></tr>
      <tr><td style="color:#7C93A3;padding:3px 0;">Reference ID</td><td style="padding:3px 0;">${reference_id}</td></tr>
      <tr><td style="color:#7C93A3;padding:3px 0;">Submitted</td><td style="padding:3px 0;">${submittedDisplay}</td></tr>
    </table>
    <p style="margin-top:22px;">These buttons take you to the admin dashboard to log in and review the application — they do not approve or reject it directly, for security.</p>
    <div style="margin-top:8px;">
      ${button(dashboardUrl, 'VIEW APPLICATION')}
    </div>
  `);

  return sendEmail({
    to: adminEmail,
    subject: 'New SBL Access Request',
    html,
    text: `A new request has been submitted for access to Solutions Based Learning.\n\nName: ${first_name} ${last_name}\nEmail: ${email}\nSchool/Organisation: ${organisation}\nCountry: ${country}\nRole: ${role_applied_for}\nAreas of Interest: ${(areas_of_interest || []).join(', ')}\nReason: ${reason}\nReference ID: ${reference_id}\nSubmitted: ${submittedDisplay}\n\nReview it at: ${dashboardUrl}`
  });
}

export async function sendApplicantConfirmationEmail({ email, firstName, referenceId }) {
  const html = wrapper(`
    <p>Hello ${firstName},</p>
    <p>Thank you for requesting access to Solutions Based Learning. Your application has been received and is now pending review.</p>
    <p>Your reference ID is <strong>${referenceId}</strong>. All applications are reviewed individually, so this can take a little time — we'll email you as soon as a decision has been made.</p>
    <p>Kind regards,<br/>Keith Wright<br/>Founder, Solutions Based Learning</p>
  `);
  return sendEmail({
    to: email,
    subject: `Your Solutions Based Learning application (${referenceId})`,
    html,
    text: `Hello ${firstName},\n\nThank you for requesting access to Solutions Based Learning. Your application (reference ${referenceId}) has been received and is pending review.\n\nKind regards,\nKeith Wright\nFounder, Solutions Based Learning`
  });
}

export async function sendApprovalEmail({ email, firstName, activateUrl }) {
  const html = wrapper(`
    <p>Hello ${firstName},</p>
    <p>Thank you for your interest in Solutions Based Learning.</p>
    <p><strong>Your application has been approved.</strong></p>
    <p>Please click the button below to create your password and activate your account.</p>
    <div style="margin:20px 0;">${button(activateUrl, 'ACTIVATE ACCOUNT')}</div>
    <p style="font-size:13px;color:#7C93A3;">This link will expire in 7 days. If it expires, use "Forgot password" on the login page to request a new one.</p>
    <p>We look forward to welcoming you to the SBL community.</p>
    <p>Kind regards,<br/>Keith Wright<br/>Founder, Solutions Based Learning</p>
  `);
  return sendEmail({
    to: email,
    subject: 'Your SBL Access Has Been Approved',
    html,
    text: `Hello ${firstName},\n\nThank you for your interest in Solutions Based Learning. Your application has been approved.\n\nActivate your account and set your password here: ${activateUrl}\n\nWe look forward to welcoming you to the SBL community.\n\nKind regards,\nKeith Wright\nFounder, Solutions Based Learning`
  });
}

export async function sendRejectionEmail({ email, firstName }) {
  const html = wrapper(`
    <p>Hello ${firstName},</p>
    <p>Thank you for your interest in Solutions Based Learning.</p>
    <p>Unfortunately, we are unable to approve your application at this time.</p>
    <p>Thank you for taking the time to apply.</p>
    <p>Kind regards,<br/>Keith Wright<br/>Founder, Solutions Based Learning</p>
  `);
  return sendEmail({
    to: email,
    subject: 'SBL Access Request Update',
    html,
    text: `Hello ${firstName},\n\nThank you for your interest in Solutions Based Learning. Unfortunately, we are unable to approve your application at this time.\n\nThank you for taking the time to apply.\n\nKind regards,\nKeith Wright\nFounder, Solutions Based Learning`
  });
}

export async function sendPasswordResetEmail({ email, firstName, resetUrl }) {
  const html = wrapper(`
    <p>Hello ${firstName || 'there'},</p>
    <p>We received a request to reset the password for your Solutions Based Learning account.</p>
    <div style="margin:20px 0;">${button(resetUrl, 'RESET PASSWORD')}</div>
    <p style="font-size:13px;color:#7C93A3;">This link will expire in 1 hour. If you did not request this, you can safely ignore this email — your password will not be changed.</p>
    <p>Kind regards,<br/>The Solutions Based Learning team</p>
  `);
  return sendEmail({
    to: email,
    subject: 'Reset your Solutions Based Learning password',
    html,
    text: `We received a request to reset the password for your Solutions Based Learning account.\n\nReset it here: ${resetUrl}\n\nThis link expires in 1 hour. If you did not request this, you can safely ignore this email.`
  });
}
