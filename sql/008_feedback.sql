-- ============================================================
-- Site feedback / suggestions box. A short questionnaire (two 1-5
-- ratings, a multi-select "what's most effective for you" list, and
-- an open suggestions box) reachable from a small floating button on
-- every page (public/js/sbl-feedback-widget.js).
--
-- No login is required to submit, so this table is NOT linked to
-- sbl_profiles. contact_email IS required (Keith wants honesty up
-- front rather than anonymous submissions) — api/feedback.js refuses
-- to insert a row without one. It is never shown anywhere publicly,
-- only in the Admin Dashboard's Feedback tab.
--
-- Run this once in the Supabase SQL Editor (Project -> SQL Editor ->
-- New Query -> paste this whole file -> Run) -- same place as the
-- earlier migration files.
--
-- Safe to re-run: every statement uses IF NOT EXISTS guards.
-- ============================================================

create table if not exists public.sbl_feedback (
  id                   uuid primary key default gen_random_uuid(),
  created_at           timestamptz not null default now(),

  -- 1-5 scale ratings from the two rating questions on the form.
  rating_overall       smallint check (rating_overall between 1 and 5),
  rating_understanding smallint check (rating_understanding between 1 and 5),

  -- Multi-select "what's most effective for your learning" answer --
  -- stored as a text array so more than one option can be ticked.
  -- The options are free-text labels (not fixed codes), so what's
  -- offered on the form can change later without a migration.
  effective_methods    text[] not null default '{}',

  -- Open "how can the site be improved" answer. Optional -- a
  -- visitor may only want to leave ratings/ticks.
  suggestions          text,

  -- Required -- see the comment at the top of this file.
  contact_email        text not null,

  -- Which page the feedback box was opened from, and a short browser
  -- string -- both just useful context for Keith when reading a
  -- submission, never shown to other visitors.
  page_url             text,
  user_agent           text,

  -- Submitter's IP, used only server-side to lightly throttle abuse
  -- of the public endpoint (see api/feedback.js) -- same idea as
  -- sbl_login_attempts.ip_address.
  submitter_ip         text,

  -- Lets the Admin Dashboard mark a submission as looked-at without
  -- deleting it, mirroring how applications have a status.
  status               text not null default 'new' check (status in ('new', 'reviewed'))
);

create index if not exists sbl_feedback_created_at_idx
  on public.sbl_feedback (created_at desc);

create index if not exists sbl_feedback_status_idx
  on public.sbl_feedback (status);

create index if not exists sbl_feedback_submitter_ip_idx
  on public.sbl_feedback (submitter_ip, created_at);

-- No RLS policies, same pattern as sbl_socratic_sessions and
-- sbl_lesson_progress: only the server (via the service_role key, in
-- api/feedback.js and api/admin/*.js) ever touches this table. RLS
-- stays enabled with no policies so the table is locked down by
-- default even if a client key were ever used against it directly.
alter table public.sbl_feedback enable row level security;
