-- ============================================================
-- Team games (e.g. "Guess the Place"): a teacher hosts a game on
-- the board, teams join on a phone or laptop with a QR code and a
-- team name, and answer clues against the clock.
--
-- No student names or accounts are stored: teams only give a team
-- name. Games expire after 3 hours.
--
-- Only the server (service role) reads and writes these tables,
-- via /api/session?teamGame=... Row Level Security is on with no
-- policies, so the public anon key cannot touch them.
--
-- Run once in Supabase -> SQL Editor -> New Query -> paste -> Run.
-- Safe to re-run.
-- ============================================================

create table if not exists public.sbl_team_games (
  code              text primary key,
  set_slug          text not null,
  host_key          text not null,
  host_email        text,
  status            text not null default 'lobby',   -- lobby | round | reveal | finished
  round             integer not null default 0,      -- 0-based index into the question set
  round_started_at  timestamptz,
  created_at        timestamptz not null default now(),
  expires_at        timestamptz not null default (now() + interval '3 hours')
);

create table if not exists public.sbl_team_game_teams (
  id          uuid primary key default gen_random_uuid(),
  game_code   text not null references public.sbl_team_games(code) on delete cascade,
  name        text not null,
  team_key    text not null,
  removed     boolean not null default false,
  created_at  timestamptz not null default now()
);
create unique index if not exists sbl_team_game_teams_name_idx
  on public.sbl_team_game_teams (game_code, lower(name)) where not removed;

create table if not exists public.sbl_team_game_answers (
  id          bigint generated always as identity primary key,
  game_code   text not null references public.sbl_team_games(code) on delete cascade,
  team_id     uuid not null references public.sbl_team_game_teams(id) on delete cascade,
  round       integer not null,
  stage       integer not null,
  answer      text not null,
  correct     boolean not null,
  points      integer not null default 0,
  created_at  timestamptz not null default now()
);
create index if not exists sbl_team_game_answers_game_idx
  on public.sbl_team_game_answers (game_code, round);

alter table public.sbl_team_games enable row level security;
alter table public.sbl_team_game_teams enable row level security;
alter table public.sbl_team_game_answers enable row level security;

notify pgrst, 'reload schema';
