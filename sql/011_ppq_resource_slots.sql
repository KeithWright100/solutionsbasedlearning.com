-- ============================================================
-- Adds two new Lesson Resources slots:
--   'ppq'             — a past paper questions file (upload)
--   'ppq_markscheme'  — link(s) to the mark scheme(s)
-- shown together in the new "PPQs" column on /admin/resources/.
--
-- Run once in Supabase -> SQL Editor -> New Query -> paste -> Run.
-- Safe to re-run.
-- ============================================================

alter table public.sbl_lesson_resources
  drop constraint if exists sbl_lesson_resources_type_check;

alter table public.sbl_lesson_resources
  add constraint sbl_lesson_resources_type_check
  check (resource_type in ('slides', 'notes', 'key_terms', 'diagrams', 'data_sheets', 'ppq', 'ppq_markscheme'));

notify pgrst, 'reload schema';
