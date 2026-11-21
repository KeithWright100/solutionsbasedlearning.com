-- ============================================================
-- Teacher edits to the Flip learning (pre-lesson) panels.
--
-- A teacher can adapt a lesson's flip task for their own classes:
-- change the introduction, add a note, add links or videos, hide
-- questions and add their own questions. The original task in
-- /js/sbl-flip-learning.js is never changed: each teacher's edits are
-- stored here, one row per teacher per panel, and applied on top when
-- the page loads. Students see the edits of their own teacher for
-- that subject (sbl_profiles.teacher_assignments / teacher_id).
--
-- No student data is stored in this table: only teacher-written task
-- text, keyed by the teacher's id.
--
-- Only the server (service role) reads and writes this table, via
-- /api/session?flipEdits=1. Row Level Security is on with no
-- policies, so the public anon key cannot touch it.
--
-- Run once in Supabase -> SQL Editor -> New Query -> paste -> Run.
-- Safe to re-run.
-- ============================================================

create table if not exists public.sbl_flip_edits (
  teacher_id  uuid not null references auth.users(id) on delete cascade,
  panel_id    text not null,                 -- e.g. 'CP02', or 'CP05-2' for a lesson's second panel
  data        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now(),
  primary key (teacher_id, panel_id)
);

alter table public.sbl_flip_edits enable row level security;

notify pgrst, 'reload schema';
