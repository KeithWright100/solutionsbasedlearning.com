# Teacher–Student Linking — Setup Guide

This adds a way to mark certain accounts as **teachers**, assign
students to them, and give each teacher a **My Students** page at
**/teacher/** where they can see who's assigned to them and a
quick progress summary — how many lessons each student has started,
and when they last saved anything.

It reuses the login/role system you already have — no new sign-up
flow, just an extra step in the Admin Dashboard.

---

## Step 1 — Run the database migration

1. Go to your Supabase project → **SQL Editor** → **New Query**.
2. Open `sql/005_teacher_student_links.sql` from this repo, copy the
   whole file, paste it in, and click **Run**.

This adds one column (`teacher_id`) to the existing `sbl_profiles`
table, linking a student to the one teacher they're assigned to.
Nothing else changes — the `teacher` role itself was already allowed
by the database from the very first migration, it just wasn't used
anywhere yet.

Safe to re-run if you're ever unsure whether it already ran.

## Step 2 — Push and deploy

Same as always: review the changes in GitHub Desktop, commit, and
push. Vercel will pick it up and deploy automatically.

## Step 3 — Make someone a teacher, and assign students to them

1. Log in and go to **/admin/** → **Approved Users**.
2. Find the account you want to promote (they need to already be an
   approved user — apply/approve them first if they aren't yet), and
   click **Make teacher** in the Role column.
3. For each student, use the new **Teacher** dropdown in their row
   to assign them to a teacher (or **— None —** to unassign).
4. That teacher can now log in and go to **/teacher/** to see their
   assigned students and a lesson-progress summary for each.

You can demote a teacher back to a regular user at any time with
**Make user** — this also automatically clears the assignment for
any students who were pointing at them, so no one is left "assigned"
to someone who can no longer see a students list.

---

## What a teacher actually sees

The **/teacher/** page ("My Students") is deliberately simple: a
table of their assigned students with a status badge, how many
lessons each has any saved progress for, and when they last saved
anything. It doesn't drill into what a student answered on any
particular quiz — just enough to spot who's active and who might
need a nudge. If you'd like a more detailed per-lesson view later,
the server side already supports fetching one specific student's
full lesson-by-lesson data (`/api/progress?studentId=`) — it's just
not wired up to any page yet.

Only a teacher can see their own `/teacher/` page — it's gated the
same way `/admin/` is (blocked at the edge for anyone not logged in,
plus a role check that requires `role = teacher` specifically). A
teacher only ever sees students explicitly assigned to them; there's
no way for a teacher to browse or see any other student's data.

---

## Where this lives in the code, if useful later

- `sql/005_teacher_student_links.sql` — the `teacher_id` column.
- `api/admin/action.js` — two new actions: `set-role` (promote/demote
  between `user` and `teacher`) and `assign-teacher` (link/unlink a
  student and a teacher).
- `api/admin/data.js` — now also returns the current list of
  teachers, so the dashboard can populate the assignment dropdown.
- `api/progress.js` — two new read modes: `myStudents=1` (a
  teacher's own roster + progress summary) and `studentId=` (one
  student's full lesson-by-lesson progress, for an admin or that
  student's assigned teacher only).
- `middleware.js` — `/teacher/*` is now gated the same way
  `/admin/*` is, requiring `role = teacher`.
- `public/teacher/index.html` + `public/js/sbl-teacher.js` — the
  My Students page itself.
- `public/admin/index.html` + `public/js/sbl-admin.js` — the
  Approved Users table's new Role and Teacher columns.

**On the Vercel function-count limit:** this feature adds **zero**
new serverless functions — everything above folds into the same
`api/admin/action.js`, `api/admin/data.js` and `api/progress.js`
files that already existed, so the project stays at exactly 12 of
12 (see README-RESOURCES-SETUP.md for the background on that limit).
