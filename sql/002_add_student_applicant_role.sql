-- ============================================================
-- Adds "Student" as a valid role on the Request Access form.
-- Run this once in the Supabase SQL Editor (Project → SQL Editor →
-- New Query → paste this whole file → Run) — same place you ran
-- 001_sbl_auth_schema.sql originally.
--
-- Safe to re-run: it just replaces the same constraint.
--
-- Note: sbl_profiles.role already allows 'student' as a value (it
-- was included from the start as one of the future-proofed roles),
-- so no change is needed there — only sbl_applications needs this.
-- ============================================================

alter table public.sbl_applications
  drop constraint if exists sbl_applications_role_check;

alter table public.sbl_applications
  add constraint sbl_applications_role_check
  check (role_applied_for in (
    'Student',
    'Teacher', 'Head of Department', 'School Leader', 'Curriculum Coordinator',
    'Educational Consultant', 'University Lecturer', 'Trainee Teacher', 'Other'
  ));
