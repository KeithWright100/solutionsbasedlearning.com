// /api/admin/data — GET: everything the admin dashboard needs to
// render its four tabs (pending / approved / rejected / feedback).

import { requireAdmin } from '../_lib/auth.js';
import { getSupabaseAdmin } from '../_lib/supabaseAdmin.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await requireAdmin(req, res);
  if (!session) return;

  const supabase = getSupabaseAdmin();

  if (req.query && req.query.usage === '1') return handleUsage(res, supabase);

  const [pendingRes, decidedRes, profilesRes, feedbackRes] = await Promise.all([
    supabase
      .from('sbl_applications')
      .select('id, reference_id, first_name, last_name, email, organisation, country, role_applied_for, areas_of_interest, reason, submitted_at, status')
      .eq('status', 'pending')
      .order('submitted_at', { ascending: true }),
    supabase
      .from('sbl_applications')
      .select('id, reference_id, first_name, last_name, email, organisation, country, role_applied_for, decided_at, status')
      .eq('status', 'rejected')
      .order('decided_at', { ascending: false })
      .limit(200),
    supabase
      .from('sbl_profiles')
      .select('*') // includes teacher_assignments once sql/010 has run
      .order('created_at', { ascending: false })
      .limit(500),
    supabase
      .from('sbl_feedback')
      .select('id, rating_overall, rating_understanding, effective_methods, suggestions, contact_email, page_url, status, created_at')
      .order('created_at', { ascending: false })
      .limit(300)
  ]);

  if (pendingRes.error || decidedRes.error || profilesRes.error || feedbackRes.error) {
    console.error('admin/data query error:', pendingRes.error || decidedRes.error || profilesRes.error || feedbackRes.error);
    return res.status(500).json({ error: 'Could not load dashboard data.' });
  }

  // A lightweight list of current teachers, so the dashboard can
  // offer an "assign to teacher" dropdown for each student row
  // without a second round trip. Admin accounts count as teachers
  // here too, since an admin may also want students assigned
  // directly to them and see their own My Students page.
  const teachers = (profilesRes.data || [])
    .filter((p) => p.role === 'teacher' || p.role === 'admin')
    .map((p) => ({ id: p.id, full_name: p.full_name, email: p.email }));

  return res.status(200).json({
    pending: pendingRes.data,
    rejected: decidedRes.data,
    users: profilesRes.data,
    teachers,
    feedback: feedbackRes.data
  });
}

// ---------------------------------------------------------------
// GET /api/admin/data?usage=1 — site usage overview for the admin
// "Usage" tab, built from saved lesson progress (quizzes, IB-style
// and past paper marks, checklists). Games are open without login,
// so they aren't counted here (see Vercel Analytics for those).
// ---------------------------------------------------------------
const WEEK = 7 * 86400000;

function unitOf(lessonId) {
  const id = String(lessonId || '');
  if (id.indexOf('PPQ:') === 0) return 'Past paper revision';
  const map = [['IGCO', 'IGCSE: Coastal environments'], ['IGDV', 'IGCSE: Development and human welfare'], ['CP', 'Unit 1: Changing population'], ['CC', 'Unit 2: Global climate'], ['RC', 'Unit 3: Resource consumption'],
    ['FW', 'Option: Freshwater'], ['LT', 'Option: Leisure, tourism & sport'], ['FH', 'Option: Food & health'],
    ['PPN', 'HL: Power, places & networks'], ['HD', 'HL: Human development'], ['GR', 'HL: Global risks & resilience']];
  for (const [p, name] of map) if (id.indexOf(p) === 0) return name;
  return 'Other';
}

async function handleUsage(res, supabase) {
  const [progRes, profRes] = await Promise.all([
    supabase.from('sbl_lesson_progress').select('user_id, lesson_id, data, updated_at').limit(20000),
    supabase.from('sbl_profiles').select('id, role, status')
  ]);
  if (progRes.error || profRes.error) {
    console.error('usage query error:', progRes.error || profRes.error);
    return res.status(500).json({ error: 'Could not load usage data.' });
  }
  const now = Date.now();
  const role = {};
  (profRes.data || []).forEach((p) => { role[p.id] = p.role; });
  const students = (profRes.data || []).filter((p) => p.role === 'student' && p.status !== 'suspended').length;

  const weeks = Array.from({ length: 8 }, () => ({ quizzes: 0, ppqs: 0, users: new Set() }));
  const active7 = new Set(), active30 = new Set(), everActive = new Set();
  let quizzes = 0, quizzes30 = 0, ppqs = 0, ppqs30 = 0;
  const lessons = {}, units = {};

  const bucket = (iso) => {
    const t = Date.parse(iso || '');
    if (!t) return -1;
    const w = Math.floor((now - t) / WEEK);
    return w >= 0 && w < 8 ? w : -1;
  };

  (progRes.data || []).forEach((row) => {
    if (role[row.user_id] === 'teacher' || role[row.user_id] === 'admin') return; // count learners only
    const t = Date.parse(row.updated_at || '');
    everActive.add(row.user_id);
    if (now - t <= WEEK) active7.add(row.user_id);
    if (now - t <= 30 * 86400000) active30.add(row.user_id);
    const L = lessons[row.lesson_id] || (lessons[row.lesson_id] = { id: row.lesson_id, students: 0, quizPctSum: 0, quizN: 0, ppqAw: 0, ppqMax: 0 });
    L.students += 1;
    const U = units[unitOf(row.lesson_id)] || (units[unitOf(row.lesson_id)] = { quizPctSum: 0, quizN: 0, ppqAw: 0, ppqMax: 0, students: new Set() });
    U.students.add(row.user_id);
    const d = row.data || {};
    Object.keys(d).forEach((k) => {
      const v = d[k];
      if (!v || typeof v !== 'object') return;
      if (k.indexOf('quiz_') === 0 && typeof v.pct === 'number') {
        quizzes++; L.quizPctSum += v.pct; L.quizN++; U.quizPctSum += v.pct; U.quizN++;
        const w = bucket(v.completedAt); if (w >= 0) { weeks[w].quizzes++; weeks[w].users.add(row.user_id); }
        if (Date.parse(v.completedAt || '') > now - 30 * 86400000) quizzes30++;
      } else if (k.indexOf('ib_q') === 0 && typeof v.awarded === 'number' && v.marks > 0) {
        ppqs++; L.ppqAw += v.awarded; L.ppqMax += v.marks; U.ppqAw += v.awarded; U.ppqMax += v.marks;
        const w = bucket(v.at); if (w >= 0) { weeks[w].ppqs++; weeks[w].users.add(row.user_id); }
        if (Date.parse(v.at || '') > now - 30 * 86400000) ppqs30++;
      }
    });
  });

  const pct = (a, b) => (b ? Math.round((a / b) * 100) : null);
  const lessonList = Object.values(lessons).map((L) => ({
    id: L.id, unit: unitOf(L.id), students: L.students,
    quizAvg: L.quizN ? Math.round(L.quizPctSum / L.quizN) : null, quizzes: L.quizN,
    ppqAvg: pct(L.ppqAw, L.ppqMax)
  })).sort((a, b) => b.students - a.students);

  return res.status(200).json({
    totals: {
      students, active7: active7.size, active30: active30.size, everActive: everActive.size,
      quizzes, quizzes30, ppqs, ppqs30
    },
    weeks: weeks.map((w, i) => ({ weeksAgo: i, quizzes: w.quizzes, ppqs: w.ppqs, activeStudents: w.users.size })).reverse(),
    units: Object.keys(units).sort().map((name) => ({
      name, students: units[name].students.size,
      quizAvg: units[name].quizN ? Math.round(units[name].quizPctSum / units[name].quizN) : null,
      quizzes: units[name].quizN, ppqAvg: pct(units[name].ppqAw, units[name].ppqMax)
    })),
    topLessons: lessonList.slice(0, 15),
    weakestLessons: lessonList.filter((l) => l.quizAvg != null && l.quizzes >= 3).sort((a, b) => a.quizAvg - b.quizAvg).slice(0, 8)
  });
}
