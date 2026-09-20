-- ============================================================
-- Per-student, per-lesson progress — checklist ("success criteria")
-- ticks, quiz results (Test My Knowledge / Spaced Retrieval), and
-- readiness-check completion, saved against the logged-in user's
-- account so it carries across devices instead of living only in
-- one browser's storage.
--
-- Run this once in the Supabase SQL Editor (Project → SQL Editor →
-- New Query → paste this whole file → Run) — same place as the
-- earlier schema files.
--
-- Safe to re-run: every statement uses IF NOT EXISTS guards.
-- ============================================================

create table if not exists public.sbl_lesson_progress (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  lesson_id   text not null,

  -- Flexible bag of progress data for this (user, lesson) pair.
  -- Each feature writes its own top-level key so different kinds of
  -- progress never clobber each other on save:
  --   "checklist"                — array of booleans, success-criteria ticks
  --   "readinessCompleted"       — true once the readiness check is finished
  --   "readinessCompletedAt"     — ISO timestamp
  --   "quiz_test_my_knowledge"   — {score, total, pct, band, completedAt}
  --   "quiz_spaced_retrieval"    — {score, total, pct, band, completedAt}
  data        jsonb not null default '{}',

  updated_at  timestamptz not null default now(),

  constraint sbl_lesson_progress_unique unique (user_id, lesson_id)
);

create index if not exists sbl_lesson_progress_user_idx on public.sbl_lesson_progress (user_id);

-- No RLS policies, same pattern as sbl_applications/sbl_profiles:
-- only the server (via the service_role key, in /api/progress.js)
-- ever touches this table, and it always scopes queries to the
-- logged-in caller's own user_id itself. RLS stays enabled with no
-- policies so the table is locked down by default even if a client
-- key were ever used against it directly.
alter table public.sbl_lesson_progress enable row level security;
