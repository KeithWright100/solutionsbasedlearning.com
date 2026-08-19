// /api/forgot-password
// Always responds with the same generic success message, whether or
// not the email belongs to an account — this avoids letting someone
// use the form to discover which email addresses have SBL accounts.

import { isValidEmail } from './_lib/validate.js';
import { getSupabaseAdmin } from './_lib/supabaseAdmin.js';
import { createSetupToken } from './_lib/tokens.js';
import { sendPasswordResetEmail } from './_lib/emails.js';

const GENERIC_MESSAGE = 'If an account exists for that email address, a password reset link has been sent.';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const email = (req.body && req.body.email || '').trim().toLowerCase();
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data: profile } = await supabase
      .from('sbl_profiles')
      .select('id, full_name, status')
      .eq('email', email)
      .maybeSingle();

    if (profile && profile.status === 'active') {
      const rawToken = await createSetupToken({ userId: profile.id, purpose: 'reset' });
      const siteUrl = process.env.SBL_SITE_URL || `https://${req.headers.host}`;
      const resetUrl = `${siteUrl}/set-password/?purpose=reset&token=${encodeURIComponent(rawToken)}`;
      const firstName = (profile.full_name || '').split(' ')[0];

      await sendPasswordResetEmail({ email, firstName, resetUrl }).catch((err) => {
        console.error('Failed to send password reset email:', err);
      });
    }
  } catch (err) {
    // Deliberately swallow errors here too, for the same reason —
    // the response must not reveal whether anything went wrong on
    // an existing-vs-non-existing account.
    console.error('forgot-password error:', err);
  }

  return res.status(200).json({ message: GENERIC_MESSAGE });
}
