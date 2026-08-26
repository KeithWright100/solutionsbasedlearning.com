// /api/progress
//
// GET  ?lessonId=xyz  — returns the logged-in student's saved
//                       progress data for one lesson: { data: {...} }
// GET  (no lessonId)  — returns progress for every lesson this
//                       student has any saved data for:
//                       { lessons: { <lessonId>: {...}, ... } }
// POST { lessonId, patch } — shallow-merges `patch` into this
//                       student's saved data for that lesson (each
//                       feature uses its own top-level key inside
//                       `patch`, e.g. "checklist" or
//                       "quiz_test_my_knowledge", so different kinds
//                       of progress never overwrite each other).
//
// Lesson pages are gated by middleware.js, so only a logged-in
// visitor can normally reach a page that calls this — but this route
// checks for itself regardless, same as every other /api endpoint.
// See sql/003_lesson_progress.sql for the table this reads/writes.

import { getSessionUser } from './_lib/auth.js';
import { getSupabaseAdmin } from './_lib/supabaseAdmin.js';

const MAX_LESSON_ID_LENGTH = 200;

export default async function handler(req, res) {
  const session = await getSessionUser(req);
  if (!session) {
    return res.status(401).json({ error: 'Not signed in.' });
  }

  const supabase = getSupabaseAdmin();

  if (req.method === 'GET') {
    const lessonId = typeof req.query.lessonId === 'string' ? req.query.lessonId : null;

    let query = supabase
      .from('sbl_lesson_progress')
      .select('lesson_id, data')
      .eq('user_id', session.user.id);

    if (lessonId) query = query.eq('lesson_id', lessonId);

    const { data, error } = await query;
    if (error) {
      console.error('Failed to load progress:', error);
      return res.status(500).json({ error: 'Could not load progress.' });
    }

    if (lessonId) {
      const row = data && data[0];
      return res.status(200).json({ data: (row && row.data) || {} });
    }

    const byLesson = {};
    (data || []).forEach((row) => { byLesson[row.lesson_id] = row.data; });
    return res.status(200).json({ lessons: byLesson });
  }

  if (req.method === 'POST') {
    const body = req.body || {};
    const lessonId = body.lessonId;
    const patch = body.patch;

    if (
      typeof lessonId !== 'string' || !lessonId.trim() || lessonId.length > MAX_LESSON_ID_LENGTH ||
      !patch || typeof patch !== 'object' || Array.isArray(patch)
    ) {
      return res.status(400).json({ error: 'lessonId (string) and patch (object) are required.' });
    }

    const { data: existing, error: fetchError } = await supabase
      .from('sbl_lesson_progress')
      .select('data')
      .eq('user_id', session.user.id)
      .eq('lesson_id', lessonId)
      .maybeSingle();

    if (fetchError) {
      console.error('Failed to read existing progress:', fetchError);
      return res.status(500).json({ error: 'Could not save progress.' });
    }

    const merged = Object.assign({}, (existing && existing.data) || {}, patch);

    const { error: upsertError } = await supabase
      .from('sbl_lesson_progress')
      .upsert(
        {
          user_id: session.user.id,
          lesson_id: lessonId,
          data: merged,
          updated_at: new Date().toISOString()
        },
        { onConflict: 'user_id,lesson_id' }
      );

    if (upsertError) {
      console.error('Failed to save progress:', upsertError);
      return res.status(500).json({ error: 'Could not save progress.' });
    }

    return res.status(200).json({ ok: true });
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed' });
}
