-- ============================================================
-- Teacher-uploaded lesson resources (Lesson Slides, Lesson Notes,
-- Key Terms, Diagrams & Models, Data Sheets) — the "Resources" card
-- already shown on every IB Geography lesson page.
--
-- Files themselves live in a private Supabase Storage bucket
-- (created below); this table just records which file is currently
-- assigned to which lesson + resource slot. Only the server (via
-- the service_role key, in /api/admin/resources.js, /api/resources.js
-- and /api/resource-file.js) ever touches this table or the bucket —
-- same pattern as sbl_lesson_progress and sbl_applications.
--
-- Run this once in the Supabase SQL Editor (Project → SQL Editor →
-- New Query → paste this whole file → Run) — same place as the
-- earlier schema files.
--
-- Safe to re-run: every statement uses IF NOT EXISTS / ON CONFLICT
-- guards.
-- ============================================================

create table if not exists public.sbl_lesson_resources (
  id            uuid primary key default gen_random_uuid(),

  -- Matches the short lesson id used across the site (the same id
  -- passed to openTeachBot(...), openChallengeMode(...), etc., and
  -- found on data-lesson-id in each lesson page's HTML) — e.g.
  -- 'CP05', 'CC10', or the longer 'HD-t1-l1-measuring-human' style
  -- ids used by some optional units.
  lesson_id     text not null,

  -- One of the five slots shown in the Resources card.
  resource_type text not null,

  file_name     text not null,          -- original filename, shown to students
  storage_path  text not null,          -- path within the 'lesson-resources' bucket
  file_size     bigint,                 -- bytes
  content_type  text,

  uploaded_by   uuid references auth.users(id) on delete set null,
  uploaded_at   timestamptz not null default now(),

  constraint sbl_lesson_resources_type_check
    check (resource_type in ('slides', 'notes', 'key_terms', 'diagrams', 'data_sheets')),

  -- One active file per (lesson, slot) — uploading a replacement
  -- overwrites the slot rather than creating a second entry.
  constraint sbl_lesson_resources_unique unique (lesson_id, resource_type)
);

create index if not exists sbl_lesson_resources_lesson_idx on public.sbl_lesson_resources (lesson_id);

-- No RLS policies, same pattern as sbl_applications/sbl_profiles/
-- sbl_lesson_progress: only the server (via the service_role key)
-- ever touches this table, and it always scopes queries itself. RLS
-- stays enabled with no policies so the table is locked down by
-- default even if a client key were ever used against it directly.
alter table public.sbl_lesson_resources enable row level security;

-- ---------------------------------------------------------------
-- Storage bucket for the actual files. Kept PRIVATE (public: false)
-- — files are only ever reached through /api/resource-file.js,
-- which checks the visitor is logged in and then hands back a
-- short-lived signed URL, so resource files get exactly the same
-- protection as the lesson pages themselves (gated by
-- middleware.js). No storage.objects policies are needed for the
-- same reason as above: only the service_role key (server-side)
-- ever reads or writes this bucket.
-- ---------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('lesson-resources', 'lesson-resources', false)
on conflict (id) do nothing;
