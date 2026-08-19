// /api/admin/bootstrap — POST { email, password, secret }
// One-time-only endpoint for creating the very first admin account
// (there is no other way to get an admin in, since normally an
// admin has to approve every new account). Protected by a secret
// env var rather than a session, since no session can exist yet.
//
// Self-disabling: if an admin profile already exists, this endpoint
// refuses to run again even with a correct secret — so it cannot
// become a standing backdoor if ADMIN_BOOTSTRAP_SECRET ever leaks
// later. See README-AUTH-SETUP.md, "Step 5 — Make yourself an admin".

import { isValidEmail, isValidPassword } from '../_lib/validate.js';
import { getSupabaseAdmin } from '../_lib/supabaseAdmin.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
