-- ============================================================
-- Adds a free-text "group" label to a profile, e.g. "SL Geography
-- Grad'28" — so a teacher can see which class/cohort each of their
-- students belongs to on the /teacher/ "My Students" page.
--
-- This is a label only: it does NOT affect login, content access,
-- or who a student's assigned teacher is (that's still the separate
-- teacher_id column from sql/005_teacher_student_links.sql). Each
-- student belongs to exactly one group at a time — set it from the
-- Admin Dashboard's "Approved Users" tab, the same place teacher
-- assignment is done.
--
-- Run this once in the Supabase SQL Editor (Project → SQL Editor →
-- New Query → paste this whole file → Run) — same place you ran the
-- earlier migration files.
--
-- Safe to re-run: uses IF NOT EXISTS guards throughout.
-- ============================================================

alter table public.sbl_profiles
  add column if not exists group_name text;

create index if not exists sbl_profiles_group_name_idx
  on public.sbl_profiles (group_name);
