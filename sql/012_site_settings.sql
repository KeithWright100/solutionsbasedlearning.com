-- ============================================================
-- Site settings: a small key/value table for site-wide choices
-- made in the admin dashboard. First use: "Game of the week"
-- (key 'game_of_week'), shown at the top of the Humanities Hub.
--
-- Only the server (service role) reads and writes this table, via
-- /api/session?gameOfWeek=1 (read) and /api/admin/action (write,
-- admins only). Row Level Security is on with no policies, so the
-- public anon key cannot touch it.
--
-- Run once in Supabase -> SQL Editor -> New Query -> paste -> Run.
-- Safe to re-run.
-- ============================================================

create table if not exists public.sbl_site_settings (
  key         text primary key,
  value       jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now(),
  updated_by  text
);

alter table public.sbl_site_settings enable row level security;

notify pgrst, 'reload schema';
