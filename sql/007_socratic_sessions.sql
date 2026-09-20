-- ============================================================
-- Ephemeral session store for the Socratic fieldwork-planning bot
-- (/api/socratic-fieldwork.js). Each row holds the Direct Line
-- conversationId + conversation-scoped token for ONE in-progress
-- chat between a student's browser and the "SBL Fieldwork Socratic
-- Tutor" Copilot Studio agent.
--
-- Why this table exists: the very first message posted into each
-- conversation is a hidden "context" message containing the exam
-- question and (sometimes) a private model answer, sent straight
-- from the server so it never reaches the browser. To let the
-- student keep chatting across multiple turns without re-sending
-- that hidden context, the server needs to remember which Direct
-- Line conversation belongs to which browser session — this table
-- is that memory. The browser is only ever given this row's random
-- id (sessionId), never the Direct Line token itself, so there is
-- no way for the browser to call Direct Line directly and read back
-- the hidden first message.
--
-- Run this once in the Supabase SQL Editor (Project → SQL Editor →
-- New Query → paste this whole file → Run) — same place as the
-- earlier migration files.
--
-- Safe to re-run: every statement uses IF NOT EXISTS guards.
-- ============================================================

create table if not exists public.sbl_socratic_sessions (
  id                uuid primary key default gen_random_uuid(),

  -- Which question config this session was started from (see the
  -- QUESTIONS registry in /api/socratic-fieldwork.js), so the same
  -- table can serve more than one Socratic question in future.
  question_key      text not null,

  -- Direct Line conversation this session is tied to. The token is
  -- the short-lived, conversation-scoped Direct Line token (NOT the
  -- long-lived secret, which stays only in the DIRECTLINE_SECRET_*
  -- Vercel env var and is never written to the database).
  conversation_id   text not null,
  directline_token  text not null,

  created_at        timestamptz not null default now(),

  -- Sessions are single-sitting by design (one planning conversation
  -- per student per question) — this is just a backstop so a stale
  -- session can't be resumed indefinitely. Not enforced automatically;
  -- /api/socratic-fieldwork.js checks this on each request.
  expires_at        timestamptz not null default (now() + interval '3 hours')
);

create index if not exists sbl_socratic_sessions_expires_idx
  on public.sbl_socratic_sessions (expires_at);

-- No RLS policies, same pattern as sbl_lesson_progress: only the
-- server (via the service_role key, in /api/socratic-fieldwork.js)
-- ever touches this table. RLS stays enabled with no policies so the
-- table is locked down by default even if a client key were ever
-- used against it directly.
alter table public.sbl_socratic_sessions enable row level security;
