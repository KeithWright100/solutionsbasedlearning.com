-- ============================================================
-- Up to three subject + teacher assignments per student.
--
-- Adds sbl_profiles.teacher_assignments: a small JSON list such as
--   [ {"subject":"Geography","teacher_id":"<uuid>"},
--     {"subject":"Business","teacher_id":"<uuid>"} ]
-- Subjects allowed: Geography, Business, Economics, History.
-- Maximum three entries (checked by the admin API).
--
-- The older single teacher_id column is kept and always mirrors the
-- FIRST assignment, so nothing that still reads it breaks.
--
-- Existing links are copied across as Geography (the trial subject).
--
-- Run once in Supabase -> SQL Editor -> New Query -> paste -> Run.
-- Safe to re-run.
-- ============================================================

alter table public.sbl_profiles
  add column if not exists teacher_assignments jsonb not null default '[]'::jsonb;

-- Copy each existing teacher link across as a Geography assignment.
update public.sbl_profiles
set teacher_assignments = jsonb_build_array(
      jsonb_build_object('subject', 'Geography', 'teacher_id', teacher_id::text))
where teacher_id is not null
  and teacher_assignments = '[]'::jsonb;

-- Fast "which students are assigned to me?" lookups.
create index if not exists sbl_profiles_teacher_assignments_idx
  on public.sbl_profiles using gin (teacher_assignments jsonb_path_ops);

-- Tell the API about the new column straight away.
notify pgrst, 'reload schema';
