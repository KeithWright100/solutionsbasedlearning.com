// api/_lib/flipEdits.js
// Teacher edits to the Flip learning panels. Reached through
// /api/session?flipEdits=1 (the Vercel Hobby plan is at its 12-function
// limit, so this has no file of its own). Needs sql/015_flip_edits.sql.
//
// GET    ?flipEdits=1&panel=CP02&subject=Geography
//          teacher/admin: { edits, mine: true, canEdit: true }   (their own edits)
//          student:       { edits, teacher: "Name" }              (their teacher's edits for that subject)
//          edits is {} when there are none.
// PUT    ?flipEdits=1   body { panel, data }   teacher/admin only: save own edits
// DELETE ?flipEdits=1&panel=CP02               teacher/admin only: revert to the original
//
// Only teacher-written task text is stored. Students can only read the
// edits of a teacher they are assigned to; nobody can change anyone
// else's edits.

import { getSessionUser } from './auth.js';
import { getSupabaseAdmin } from './supabaseAdmin.js';

const SUBJECTS = ['Geography', 'Business', 'Economics', 'History'];
const PANEL_RE = /^[A-Za-z0-9_-]{1,40}$/;
const MAX_TEXT = 1500;
const MAX_LINKS = 6;
const MAX_ADD = 10;
const MAX_HIDE = 60;

function clean(s, max) {
  if (typeof s !== 'string') return '';
  return s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
}

// Keep only the fields we know about, with sensible limits.
export function sanitiseEdits(d) {
  d = d && typeof d === 'object' ? d : {};
  const out = {};
  const intro = clean(d.intro, MAX_TEXT);
  if (intro) out.intro = intro;
  const note = clean(d.note, MAX_TEXT);
  if (note) out.note = note;
  if (Array.isArray(d.links)) {
    const links = d.links.slice(0, MAX_LINKS).map((l) => ({
      label: clean(l && l.label, 120),
      url: clean(l && l.url, 500)
    })).filter((l) => l.label && /^https:\/\/[^\s"'<>]+$/i.test(l.url));
    if (links.length) out.links = links;
  }
  if (Array.isArray(d.hide)) {
    const hide = d.hide.filter((n) => Number.isInteger(n) && n >= 0 && n < 200).slice(0, MAX_HIDE);
    if (hide.length) out.hide = Array.from(new Set(hide));
  }
  if (Array.isArray(d.add)) {
    const add = d.add.slice(0, MAX_ADD).map((q) => clean(q, 400)).filter(Boolean);
    if (add.length) out.add = add;
  }
  return out;
}

function teacherFor(profile, subject) {
  const list = Array.isArray(profile.teacher_assignments) ? profile.teacher_assignments : [];
  const hit = list.find((a) => a && a.subject === subject && a.teacher_id);
  if (hit) return hit.teacher_id;
  if (subject === 'Geography' && profile.teacher_id) return profile.teacher_id;
  return null;
}

export async function flipEditsHandler(req, res) {
  const session = await getSessionUser(req, res);
  if (!session) return res.status(401).json({ error: 'Not signed in.' });
  if (session.profile.status !== 'active') return res.status(403).json({ error: 'Account not active.' });

  const role = session.profile.role;
  const isTeacher = role === 'teacher' || role === 'admin';
  const supabase = getSupabaseAdmin();
  const q = req.query || {};

  if (req.method === 'GET') {
    const panel = typeof q.panel === 'string' ? q.panel : '';
    if (!PANEL_RE.test(panel)) return res.status(400).json({ error: 'Bad panel id.' });

    if (isTeacher) {
      const { data, error } = await supabase.from('sbl_flip_edits').select('data')
        .eq('teacher_id', session.user.id).eq('panel_id', panel).maybeSingle();
      if (error) return res.status(500).json({ error: 'Could not load edits.' });
      return res.status(200).json({ edits: (data && data.data) || {}, mine: true, canEdit: true });
    }

    const subject = SUBJECTS.indexOf(q.subject) >= 0 ? q.subject : 'Geography';
    const { data: me, error: meErr } = await supabase.from('sbl_profiles')
      .select('teacher_id, teacher_assignments').eq('id', session.user.id).maybeSingle();
    if (meErr || !me) return res.status(200).json({ edits: {} });
    const teacherId = teacherFor(me, subject);
    if (!teacherId) return res.status(200).json({ edits: {} });
    const [{ data: row }, { data: t }] = await Promise.all([
      supabase.from('sbl_flip_edits').select('data').eq('teacher_id', teacherId).eq('panel_id', panel).maybeSingle(),
      supabase.from('sbl_profiles').select('full_name').eq('id', teacherId).maybeSingle()
    ]);
    return res.status(200).json({ edits: (row && row.data) || {}, teacher: (t && t.full_name) || '' });
  }

  if (!isTeacher) return res.status(403).json({ error: 'Only teachers can edit flip learning tasks.' });

  if (req.method === 'PUT' || req.method === 'POST') {
    const b = req.body || {};
    const panel = typeof b.panel === 'string' ? b.panel : '';
    if (!PANEL_RE.test(panel)) return res.status(400).json({ error: 'Bad panel id.' });
    const data = sanitiseEdits(b.data);
    if (JSON.stringify(data).length > 20000) return res.status(413).json({ error: 'Too much text.' });
    const { error } = await supabase.from('sbl_flip_edits').upsert(
      { teacher_id: session.user.id, panel_id: panel, data, updated_at: new Date().toISOString() },
      { onConflict: 'teacher_id,panel_id' });
    if (error) return res.status(500).json({ error: 'Could not save.' });
    return res.status(200).json({ ok: true, edits: data });
  }

  if (req.method === 'DELETE') {
    const panel = typeof q.panel === 'string' ? q.panel : '';
    if (!PANEL_RE.test(panel)) return res.status(400).json({ error: 'Bad panel id.' });
    const { error } = await supabase.from('sbl_flip_edits').delete()
      .eq('teacher_id', session.user.id).eq('panel_id', panel);
    if (error) return res.status(500).json({ error: 'Could not revert.' });
    return res.status(200).json({ ok: true });
  }

  res.setHeader('Allow', 'GET, PUT, DELETE');
  return res.status(405).json({ error: 'Method not allowed.' });
}
