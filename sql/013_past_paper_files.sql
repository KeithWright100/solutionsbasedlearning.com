-- ============================================================
-- Past paper files: lets the existing Lesson Resources system
-- also hold files for whole exam papers (question paper,
-- markscheme, resource booklet/insert, and one other file), shown
-- on /admin/past-papers/ (upload) and /teacher/past-papers/
-- (teacher library).
--
-- Papers reuse sbl_lesson_resources and the private
-- 'lesson-resources' bucket: a paper's lesson_id is a key such as
-- 'PAPER|ib-geo|2024-05|P2'. This only widens the list of allowed
-- slot types. Teacher and admin logins only — students cannot open
-- these files (see api/resources.js).
--
-- Run once in Supabase -> SQL Editor -> New Query -> paste -> Run.
-- Safe to re-run.
-- ============================================================

alter table public.sbl_lesson_resources
  drop constraint if exists sbl_lesson_resources_type_check;

alter table public.sbl_lesson_resources
  add constraint sbl_lesson_resources_type_check
  check (resource_type in ('slides', 'notes', 'key_terms', 'diagrams', 'data_sheets', 'ppq', 'ppq_markscheme',
                           'paper_qp', 'paper_ms', 'paper_rb', 'paper_extra'));

notify pgrst, 'reload schema';
