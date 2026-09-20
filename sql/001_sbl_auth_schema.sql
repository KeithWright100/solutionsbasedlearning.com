-- ============================================================
-- SBL User Registration, Login and Approval System
-- Database schema — run this once in the Supabase SQL Editor
-- (Project → SQL Editor → New Query → paste this whole file → Run)
--
-- Safe to re-run: every statement uses IF NOT EXISTS / OR REPLACE
-- guards, so running it twice will not duplicate anything or wipe
-- existing data.
-- ============================================================

-- ---------------------------------------------------------------
-- 1. sbl_applications — every "Request Access" submission.
--    This is NOT a user account. It is reviewed by the admin, who
--    then approves (creating a real login) or rejects it.
-- ---------------------------------------------------------------
create table if not exists public.sbl_applications (
  id                          uuid primary key default gen_random_uuid(),
  reference_id                text unique not null,

  first_name                  text not null,
  last_name                   text not null,
  email                       text not null,
  organisation                text not null,
  country                     text not null,
  role_applied_for            text not null,           -- Teacher / Head of Department / etc — free text, see CHECK below
  reason                      text not null,           -- "why would you like access"
  areas_of_interest           text[] not null default '{}',

  terms_professional_capacity boolean not null default false,
  terms_no_sharing            boolean not null default false,
  terms_admin_discretion      boolean not null default false,
  terms_responsible_use       boolean not null default false,

  status                      text not null default 'pending', -- pending | approved | rejected
  submitted_at                timestamptz not null default now(),
  decided_at                  timestamptz,
  decided_by                  text,                    -- admin email/name who actioned it
  decision_note               text,                    -- optional free-text note left by the admin

  -- Filled in once approved AND the applicant has an auth.users row.
  user_id                     uuid references auth.users(id) on delete set null,

  constraint sbl_applications_status_check
    check (status in ('pending', 'approved', 'rejected')),
  constraint sbl_applications_role_check
    check (role_applied_for in (
      'Teacher', 'Head of Department', 'School Leader', 'Curriculum Coordinator',
      'Educational Consultant', 'University Lecturer', 'Trainee Teacher', 'Other'
    )),
  constraint sbl_applications_terms_check
    check (
      terms_professional_capacity and terms_no_sharing
      and terms_admin_discretion and terms_responsible_use
    )
);

create index if not exists sbl_applications_status_idx on public.sbl_applications (status);
create index if not exists sbl_applications_email_idx on public.sbl_applications (lower(email));

-- Reference ID generator: SBL-0001, SBL-0002, ...
create sequence if not exists public.sbl_application_ref_seq start 1;

create or replace function public.sbl_next_reference_id()
returns text
language sql
as $$
  select 'SBL-' || lpad(nextval('public.sbl_application_ref_seq')::text, 4, '0');
$$;

alter table public.sbl_applications
  alter column reference_id set default public.sbl_next_reference_id();

-- ---------------------------------------------------------------
-- 2. sbl_profiles — one row per real user account (1:1 with
--    auth.users). This is where role/status/future-proofing lives.
--    A profile is only ever created by the server (via the
--    service_role key) when an application is approved — there is
--    no public self-signup path that creates one directly.
-- ---------------------------------------------------------------
create table if not exists public.sbl_profiles (
  id              uuid primary key references auth.users(id) on delete cascade,
  full_name       text not null,
  email           text not null,
  organisation    text,
  country         text,

  -- Phase 1 only ever assigns 'user' or 'admin'. The other values
  -- are accepted by the database now so future phases can start
  -- using them without a schema migration — see the project brief's
  -- "Future-Proofing" section. Do not build UI for these yet.
  role            text not null default 'user',
  status          text not null default 'active',   -- active | suspended

  application_id  uuid references public.sbl_applications(id) on delete set null,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),

  constraint sbl_profiles_role_check
    check (role in (
      'user', 'admin',
      'student', 'teacher', 'school_admin', 'premium_member', 'bangkok_patana_staff'
    )),
  constraint sbl_profiles_status_check
    check (status in ('active', 'suspended'))
);

create index if not exists sbl_profiles_role_idx on public.sbl_profiles (role);
create index if not exists sbl_profiles_status_idx on public.sbl_profiles (status);

create or replace function public.sbl_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists sbl_profiles_set_updated_at on public.sbl_profiles;
create trigger sbl_profiles_set_updated_at
  before update on public.sbl_profiles
  for each row execute function public.sbl_set_updated_at();

-- ---------------------------------------------------------------
-- 3. sbl_login_attempts — append-only log used to rate-limit login
--    attempts. Old rows can be pruned periodically (see setup
--    guide); nothing in the app depends on keeping them forever.
-- ---------------------------------------------------------------
create table if not exists public.sbl_login_attempts (
  id           bigint generated always as identity primary key,
  email        text not null,
  ip_address   text,
  succeeded    boolean not null,
  attempted_at timestamptz not null default now()
);

create index if not exists sbl_login_attempts_lookup_idx
  on public.sbl_login_attempts (lower(email), attempted_at desc);

-- ---------------------------------------------------------------
-- 4. sbl_password_setup_tokens — one-time links we email ourselves
--    (via Resend) for "activate your account" and "forgot password".
--    We deliberately do NOT use Supabase's own emailed magic
--    links/redirects for this — every user-facing email in this
--    system is sent by our own code, so delivery is never dependent
--    on Supabase's built-in mailer.
-- ---------------------------------------------------------------
create table if not exists public.sbl_password_setup_tokens (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  token_hash  text not null unique,   -- sha256 of the token; the raw token is never stored
  purpose     text not null,          -- 'activate' | 'reset'
  expires_at  timestamptz not null,
  used_at     timestamptz,
  created_at  timestamptz not null default now(),

  constraint sbl_password_setup_tokens_purpose_check
    check (purpose in ('activate', 'reset'))
);

create index if not exists sbl_password_setup_tokens_user_idx
  on public.sbl_password_setup_tokens (user_id);

alter table public.sbl_password_setup_tokens enable row level security;
-- No policies: only service_role (server-side) ever touches this table.

-- ---------------------------------------------------------------
-- 5. Row Level Security
--
--    All writes to sbl_applications and sbl_profiles happen through
--    Vercel serverless functions using the service_role key, which
--    bypasses RLS entirely — so these policies exist purely as a
--    safety net in case the anon/publishable key is ever used
--    directly against these tables (it should never be, but this
--    means a mistake fails closed, not open).
-- ---------------------------------------------------------------
alter table public.sbl_applications   enable row level security;
alter table public.sbl_profiles       enable row level security;
alter table public.sbl_login_attempts enable row level security;

-- No anon/authenticated policies are created on sbl_applications or
-- sbl_login_attempts at all — meaning the anon and authenticated
-- roles can do nothing to them. Only service_role (which bypasses
-- RLS by design) can read/write.

-- sbl_profiles: a logged-in user may read (but not write) their own
-- profile row. This lets the site show "Welcome, <name>" etc. from
-- the browser without a server round trip, without exposing anyone
-- else's data.
drop policy if exists sbl_profiles_select_own on public.sbl_profiles;
create policy sbl_profiles_select_own
  on public.sbl_profiles
  for select
  to authenticated
  using (id = auth.uid());

-- ============================================================
-- End of schema. Next step: create your own admin account.
-- See README-AUTH-SETUP.md, "Step 5 — Make yourself an admin".
-- ============================================================
