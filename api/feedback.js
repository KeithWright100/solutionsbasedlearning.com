// /api/feedback
// Public "site feedback" box -- no login required. Saves the
// submission to sbl_feedback (see sql/008_feedback.sql) and emails
// every active admin a copy, the same way api/forgot-password.js
// notifies admins of a password reset request.
//
// POST { ratingOverall?, ratingUnderstanding?, effectiveMethods?,
//        suggestions?, contactEmail, pageUrl? }
// contactEmail is REQUIRED -- Keith wants honest, attributable
// feedback rather than anonymous submissions. Everything else is
// optional individually, but at least ONE of a rating, a ticked
// option, or the suggestions text must also be present -- an
// entirely empty submission is refused so the table doesn't fill up
// with blank rows from a stray click on the floating button.

import { getSupabaseAdmin } from './_lib/supabaseAdmin.js';
import { sendFeedbackNotificationEmail } from './_lib/emails.js';
import { isValidEmail, isNonEmptyString } from './_lib/validate.js';
import { getClientIp } from './_lib/rateLimit.js';

const MAX_METHODS = 12;
const MAX_METHOD_LENGTH = 80;
const MAX_SUGGESTIONS_LENGTH = 4000;
const MAX_SUBMISSIONS_PER_WINDOW = 5;
const WINDOW_MINUTES = 60;

function toRating(value) {
  const n = Number(value);
  if (!Number.isInteger(n) || n < 1 || n > 5) return null;
  return n;
}

function sanitizeMethods(value) {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item) => typeof item === 'string')
    .map((item) => item.trim())
    .filter((item) => item.length > 0 && item.length <= MAX_METHOD_LENGTH)
    .slice(0, MAX_METHODS);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const ratingOverall = toRating(body.ratingOverall);
  const ratingUnderstanding = toRating(body.ratingUnderstanding);
  const effectiveMethods = sanitizeMethods(body.effectiveMethods);
  const suggestions = typeof body.suggestions === 'string'
    ? body.suggestions.trim().slice(0, MAX_SUGGESTIONS_LENGTH)
    : '';
  const contactEmail = typeof body.contactEmail === 'string' ? body.contactEmail.trim() : '';
  const pageUrl = typeof body.pageUrl === 'string' ? body.pageUrl.trim().slice(0, 500) : '';

  if (!contactEmail || !isValidEmail(contactEmail)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (!ratingOverall && !ratingUnderstanding && !effectiveMethods.length && !isNonEmptyString(suggestions, MAX_SUGGESTIONS_LENGTH)) {
    return res.status(400).json({ error: 'Please give a rating, tick an option, or leave a suggestion before sending.' });
  }

  const supabase = getSupabaseAdmin();
  const ip = getClientIp(req);

  // Light spam guard -- no login is required to submit, so throttle
  // by IP rather than by account. Fails open: a broken check should
  // never block genuine feedback.
  try {
    const since = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString();
    const { count, error } = await supabase
      .from('sbl_feedback')
      .select('id', { count: 'exact', head: true })
      .eq('submitter_ip', ip)
      .gte('created_at', since);
    if (!error && (count || 0) >= MAX_SUBMISSIONS_PER_WINDOW) {
      return res.status(429).json({ error: 'Thanks for the feedback -- please wait a little while before sending more.' });
    }
  } catch (err) {
    console.error('Feedback rate-limit check failed:', err);
  }

  const { data: inserted, error: insertError } = await supabase
    .from('sbl_feedback')
    .insert({
      rating_overall: ratingOverall,
      rating_understanding: ratingUnderstanding,
      effective_methods: effectiveMethods,
      suggestions: suggestions || null,
      contact_email: contactEmail,
      page_url: pageUrl || null,
      user_agent: (req.headers['user-agent'] || '').slice(0, 300),
      submitter_ip: ip
    })
    .select('id, rating_overall, rating_understanding, effective_methods, suggestions, contact_email, page_url, created_at')
    .single();

  if (insertError) {
    console.error('Failed to insert feedback:', insertError);
    return res.status(500).json({ error: 'Could not save your feedback. Please try again.' });
  }

  // Email failure should not stop the submission being saved -- it's
  // already sitting in the Admin Dashboard's Feedback tab either way.
  try {
    const { data: admins } = await supabase
      .from('sbl_profiles')
      .select('email')
      .eq('role', 'admin')
      .eq('status', 'active');
    const siteUrl = process.env.SBL_SITE_URL || `https://${req.headers.host}`;
    const dashboardUrl = `${siteUrl}/admin/`;
    await Promise.all((admins || []).map((admin) =>
      sendFeedbackNotificationEmail({ adminEmail: admin.email, feedback: inserted, dashboardUrl }).catch((err) => {
        console.error('Failed to send feedback notification email:', err);
      })
    ));
  } catch (err) {
    console.error('Failed to look up admins for feedback notification:', err);
  }

  return res.status(201).json({ ok: true });
}
