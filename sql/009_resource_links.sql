-- ============================================================
-- Lets a lesson Resources slot hold a LINK instead of an uploaded
-- file — used for "OneNote Pages" (the 'diagrams' slot), where each
-- lesson points to a live page in a OneNote notebook.
--
-- A row now holds EITHER a file (storage_path) OR a link (link_url).
-- Teachers open links through /api/resources, which checks they are
-- a teacher or admin first, then sends them on to the link.
--
-- Run this once in the Supabase SQL Editor (Project → SQL Editor →
-- New Query → paste this whole file → Run), same as the earlier
-- files. Safe to re-run.
-- ============================================================

alter table public.sbl_lesson_resources
  add column if not exists link_url text;

-- Link rows have no file in Storage.
alter table public.sbl_lesson_resources
  alter column storage_path drop not null;

-- Every row must have one or the other.
alter table public.sbl_lesson_resources
  drop constraint if exists sbl_lesson_resources_file_or_link;
alter table public.sbl_lesson_resources
  add constraint sbl_lesson_resources_file_or_link
  check (storage_path is not null or link_url is not null);
