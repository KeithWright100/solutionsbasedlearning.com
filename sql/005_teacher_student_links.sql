-- ============================================================
-- Links a student to a teacher, so a teacher can sign in and see
-- just their own students' lesson progress (the new "My Students"
-- page at /teacher/).
--
-- Run this once in the Supabase SQL Editor (Project → SQL Editor →
-- New Query → paste this whole file → Run) — same place you ran
-- the earlier migration files.
--
-- Safe to re-run: uses IF NOT EXISTS guards throughout.
-- ============================================================

alter table public.sbl_profiles
  add column if not exists teacher_id uuid references auth.users(id) on delete set null;

create index if not exists sbl_profiles_teacher_idx
  on public.sbl_profiles (teacher_id);

-- Note: sbl_profiles.role already accepts 'teacher' as a value (it
-- was included from the very first migration as one of the
-- future-proofed roles — see 001_sbl_auth_schema.sql), so no CHECK
-- constraint change is needed here. Turning a regular user into a
-- teacher, and assigning students to them, is done from the Admin
-- Dashboard's "Approved Users" tab once the site is deployed.
