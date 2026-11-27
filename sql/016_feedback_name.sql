-- ============================================================
-- Feedback box: the submitter's name is now required as well as
-- their email (api/feedback.js refuses a submission without both).
-- Adds a contact_name column to sbl_feedback.
--
-- Run this once in the Supabase SQL Editor (Project -> SQL Editor ->
-- New Query -> paste this whole file -> Run). Safe to re-run.
-- Until it has run, api/feedback.js still saves feedback and puts
-- the name at the start of the suggestions text instead.
-- ============================================================

alter table public.sbl_feedback
  add column if not exists contact_name text;
