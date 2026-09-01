# Student Groups — Setup Guide

This adds a simple, free-text **group** label to each student account —
e.g. "SL Geography Grad'28" — so a teacher can see which class or
cohort each of their students belongs to on their **My Students**
page at **/teacher/**.

It's a label only. It doesn't affect login, doesn't control who can
see what content, and doesn't change who a student's assigned
teacher is — that's still the separate teacher/student link from
`sql/005_teacher_student_links.sql`. Each student belongs to exactly
one group at a time (there's no multi-group membership).

---

## Step 1 — Run the database migration

1. Go to your Supabase project → **SQL Editor** → **New Query**.
2. Open `sql/006_student_groups.sql` from this repo, copy the whole
   file, paste it in, and click **Run**.

This adds one column (`group_name`) to the existing `sbl_profiles`
table. Nothing else changes.

Safe to re-run if you're ever unsure whether it already ran.

## Step 2 — Push and deploy

Same as always: review the changes in GitHub Desktop, commit, and
push. Vercel will pick it up and deploy automatically.

## Step 3 — Set a student's group

1. Log in and go to **/admin/** → **Approved Users**.
2. Find the student's row — the new **Group** column has a text box.
3. Type the group name (e.g. `SL Geography Grad'28`) and click away,
   or press Enter, to save. Leave it blank and save to clear it.

The group only shows up as a text box for accounts with the
**Student** role, same as the Teacher column next to it.

## Step 4 — Where it shows up

A teacher's **My Students** page (**/teacher/**) now has a **Group**
column, and the roster is sorted by group first, then by student
name, so students in the same class sit together. It's purely
informational — there's no filtering or "view by group" control yet;
if that would be useful once you're using it, it's a small addition
on top of this.

---

## Where this lives in the code, if useful later

- `sql/006_student_groups.sql` — the `group_name` column.
- `api/admin/action.js` — one new action: `assign-group` (set or
  clear a student's group label).
- `api/admin/data.js` — now also returns `group_name` for each user.
- `api/progress.js` — `myStudents=1` now returns and sorts by
  `groupName` too.
- `public/admin/index.html` + `public/js/sbl-admin.js` — the
  Approved Users table's new Group column.
- `public/teacher/index.html` + `public/js/sbl-teacher.js` — the
  My Students page's new Group column.

**On the Vercel function-count limit:** this feature adds **zero**
new serverless functions — it folds into the same `api/admin/action.js`,
`api/admin/data.js` and `api/progress.js` files that already existed
(see README-RESOURCES-SETUP.md for the background on that limit).
