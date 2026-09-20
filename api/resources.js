// /api/resources — the student-facing half of the lesson Resources
// card. Combined into ONE function together with two jobs (list +
// open-a-file) so the project stays under Vercel's Hobby-plan cap of
// 12 Serverless Functions — see the comment at the top of
// api/admin/resources.js for the fuller explanation.
//
// GET ?lessonId=xyz             — which of the five slots
//                                  (slides/notes/key_terms/diagrams/
//                                  data_sheets) have a file for this
//                                  lesson: { resources: { slides:
//                                  {fileName}, ... } }. Only filled
//                                  slots are included.
//
// GET ?lessonId=xyz&open=slides — redirects (302) to a short-lived
//                                  signed URL for that one file, so
//                                  a plain <a href> can be used on
//                                  the lesson page.
//
// Lesson pages are gated by middleware.js, so only a logged-in
// visitor can normally reach a page that calls this — but this route
// checks for itself regardless, same as every other /api endpoint
// (see api/progress.js for the identical pattern).

import { requireSession } from './_lib/auth.js';
import { getSupabaseAdmin } from './_lib/supabaseAdmin.js';

const BUCKET = 'lesson-resources';
const MAX_LESSON_ID_LENGTH = 200;
const SIGNED_URL_TTL_SECONDS = 60;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await requireSession(req, res);
  if (!session) return; // requireSession has already sent the 401/403

  const lessonId = typeof req.query.lessonId === 'string' ? req.query.lessonId : null;
  if (!lessonId || !lessonId.trim() || lessonId.length > MAX_LESSON_ID_LENGTH) {
    return res.status(400).json({ error: 'lessonId is required.' });
  }

  const openType = typeof req.query.open === 'string' ? req.query.open : null;

  const supabase = getSupabaseAdmin();

  if (openType) {
    const { data: row, error } = await supabase
      .from('sbl_lesson_resources')
      .select('storage_path')
      .eq('lesson_id', lessonId)
      .eq('resource_type', openType)
      .maybeSingle();

    if (error || !row) {
      return res.status(404).json({ error: 'That resource has not been added yet.' });
    }

    const { data: signed, error: signError } = await supabase.storage
      .from(BUCKET)
      .createSignedUrl(row.storage_path, SIGNED_URL_TTL_SECONDS);

    if (signError || !signed) {
      console.error('Failed to create signed URL for resource:', signError);
      return res.status(500).json({ error: 'Could not open this file right now.' });
    }

    res.writeHead(302, { Location: signed.signedUrl });
    return res.end();
  }

  const { data, error } = await supabase
    .from('sbl_lesson_resources')
    .select('resource_type, file_name')
    .eq('lesson_id', lessonId);

  if (error) {
    console.error('Failed to load lesson resources:', error);
    return res.status(500).json({ error: 'Could not load resources.' });
  }

  const resources = {};
  (data || []).forEach((row) => {
    resources[row.resource_type] = { fileName: row.file_name };
  });

  return res.status(200).json({ resources });
}
