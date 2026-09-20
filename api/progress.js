// /api/progress
//
// GET  ?lessonId=xyz  — returns the logged-in student's saved
//                       progress data for one lesson: { data: {...} }
// GET  (no lessonId)  — returns progress for every lesson this
//                       student has any saved data for:
//                       { lessons: { <lessonId>: {...}, ... } }
// GET  ?myStudents=1  — teacher accounts only: the roster of
//                       students assigned to the caller, each with a
//                       lightweight progress summary:
//                       { students: [{ id, fullName, email, status,
//                         lessonsWithProgress, lastUpdated }, ...] }
// GET  ?studentId=xyz — one specific student's per-lesson progress,
//                       for an admin or that student's assigned
//                       teacher only: { student: {...}, lessons: {...} }
//                       (add &lessonId= to narrow to one lesson)
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
// See sql/003_lesson_progress.sql for the table this reads/writes,
// and sql/005_teacher_student_links.sql for the teacher_id column
// the myStudents/studentId modes rely on.

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
    if (req.query.myStudents === '1') return handleMyStudents(req, res, session, supabase);

    const studentId = typeof req.query.studentId === 'string' ? req.query.studentId : null;
    const lessonId = typeof req.query.lessonId === 'string' ? req.query.lessonId : null;

    if (studentId) return handleStudentProgress(req, res, session, supabase, studentId, lessonId);

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

// ---------------------------------------------------------------
// myStudents=1 — teacher accounts only. Returns every student
// currently assigned to the caller (sbl_profiles.teacher_id), each
// with a lightweight progress summary (how many lessons they have
// any saved data for, and when they last saved anything) rather
// than the full per-lesson breakdown — enough for a teacher to see
// at a glance who's active and who isn't.
// ---------------------------------------------------------------
async function handleMyStudents(req, res, session, supabase) {
  // Admin accounts can also act as a teacher and have students
  // assigned directly to them, so this roster is available to
  // 'teacher' and 'admin' alike — see README-TEACHER-LINKING-SETUP.md.
  if (session.profile.role !== 'teacher' && session.profile.role !== 'admin') {
    return res.status(403).json({ error: 'Only teacher accounts have a student roster here.' });
  }

  const { data: students, error: studentsError } = await supabase
    .from('sbl_profiles')
    .select('id, full_name, email, status, group_name')
    .eq('teacher_id', session.user.id)
    .order('group_name', { ascending: true, nullsFirst: false })
    .order('full_name', { ascending: true });

  if (studentsError) {
    console.error('Failed to load assigned students:', studentsError);
    return res.status(500).json({ error: 'Could not load your students.' });
  }

  if (!students || !students.length) {
    return res.status(200).json({ students: [] });
  }

  const studentIds = students.map((s) => s.id);
  const { data: progressRows, error: progressError } = await supabase
    .from('sbl_lesson_progress')
    .select('user_id, lesson_id, updated_at')
    .in('user_id', studentIds);

  if (progressError) {
    console.error("Failed to load students' progress summary:", progressError);
    return res.status(500).json({ error: "Could not load your students' progress." });
  }

  const summary = {};
  (progressRows || []).forEach((row) => {
    const entry = summary[row.user_id] || (summary[row.user_id] = { lessonsWithProgress: 0, lastUpdated: null });
    entry.lessonsWithProgress += 1;
    if (!entry.lastUpdated || row.updated_at > entry.lastUpdated) entry.lastUpdated = row.updated_at;
  });

  const result = students.map((s) => Object.assign(
    { id: s.id, fullName: s.full_name, email: s.email, status: s.status, groupName: s.group_name || null },
    summary[s.id] || { lessonsWithProgress: 0, lastUpdated: null }
  ));

  return res.status(200).json({ students: result });
}

// ---------------------------------------------------------------
// studentId=xyz — one specific student's per-lesson progress data,
// same shape as a student viewing their own progress. Allowed for
// an admin (any student) or a teacher (only a student currently
// assigned to them) — anyone else gets 403, including a teacher
// asking about a student who isn't theirs.
// ---------------------------------------------------------------
async function handleStudentProgress(req, res, session, supabase, studentId, lessonId) {
  const { data: student, error: studentError } = await supabase
    .from('sbl_profiles')
    .select('id, full_name, email, teacher_id')
    .eq('id', studentId)
    .maybeSingle();

  if (studentError || !student) {
    return res.status(404).json({ error: 'Student not found.' });
  }

  const isAdmin = session.profile.role === 'admin';
  const isAssignedTeacher = session.profile.role === 'teacher' && student.teacher_id === session.user.id;
  if (!isAdmin && !isAssignedTeacher) {
    return res.status(403).json({ error: "You do not have access to this student's progress." });
  }

  let query = supabase
    .from('sbl_lesson_progress')
    .select('lesson_id, data')
    .eq('user_id', studentId);

  if (lessonId) query = query.eq('lesson_id', lessonId);

  const { data, error } = await query;
  if (error) {
    console.error("Failed to load student's progress:", error);
    return res.status(500).json({ error: "Could not load this student's progress." });
  }

  const byLesson = {};
  (data || []).forEach((row) => { byLesson[row.lesson_id] = row.data; });

  return res.status(200).json({
    student: { id: student.id, fullName: student.full_name, email: student.email },
    lessons: byLesson
  });
}
