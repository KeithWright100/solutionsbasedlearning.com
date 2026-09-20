# Lesson Resources — Setup Guide

This adds a "teacher only" area at **/admin/resources/** where you
can upload a Lesson Slides / Lesson Notes / Key Terms / Diagrams &
Models / Data Sheets file for any IB Geography lesson. Once uploaded,
the matching item in that lesson's "Resources" card (in the sidebar)
becomes a live link for any logged-in student — before that, it just
shows "Not added yet", same as it does today.

It reuses the login/admin system you already have (see
README-AUTH-SETUP.md) — no new accounts needed, just one database
step in Supabase.

---

## Step 1 — Run the database migration

1. Go to your Supabase project → **SQL Editor** → **New Query**.
2. Open `sql/004_lesson_resources.sql` from this repo, copy the
   whole file, paste it in, and click **Run**.

This creates a new table (`sbl_lesson_resources`) to keep track of
which file is assigned to which lesson, and a new **private** Storage
bucket called `lesson-resources` to hold the files themselves.
"Private" means files are never given a permanent public URL — every
time a student clicks a resource link, the site checks they're
logged in and hands back a link that only works for about a minute.

Safe to re-run if you're ever unsure whether it already ran.

## Step 2 — Push and deploy

Same as always: review the changes in GitHub Desktop, commit, and
push. Vercel will pick it up and deploy automatically.

## Step 3 — Upload your first resource

1. Log in and go to **/admin/** → click **Lesson Resources** (or go
   straight to **/admin/resources/**).
2. Find a lesson (there's a search box at the top), click **Upload**
   under any of the five columns, and pick a file.
3. Once it finishes, that column shows the filename with **Replace**
   / **Delete** buttons, and the lesson page's Resources card now
   links straight to it.

I'd suggest trying this with one small file first, since this is new
server code I haven't been able to test against your live Supabase
project from here (I don't have your project's credentials — I can
only test the parts that don't need them, which I have). Everything
else — the page layout, the search/filter, the way the Resources
card switches between "live link" and "Not added yet" — has been
checked and works correctly; it's specifically the real
upload‑to‑Supabase‑Storage round trip worth confirming once for
yourself.

If an upload fails, the error message on the page should say why. A
couple of things worth checking if it does:
- If it says something like "storage bucket" not being found —
  double check Step 1 ran successfully (Supabase → Storage should
  show a `lesson-resources` bucket).
- Browser ad blockers / privacy extensions occasionally interfere
  with direct-to-storage uploads — worth a quick try in a different
  browser/profile if an upload silently fails.

---

## Where this lives in the code, if useful later

- `sql/004_lesson_resources.sql` — the table + storage bucket.
- `api/admin/resources.js` — teacher-only: list resources, get an
  upload link, confirm an upload, delete a resource.
- `api/resources.js` — student-facing: which slots are filled for a
  lesson, and opening one specific file.
- `js/sbl-lesson-resources.js` — runs on every lesson page, turns the
  static Resources list into live links.
- `js/sbl-admin-resources.js` + `admin/resources/index.html` — the
  upload page itself.

**One thing to know about scale:** Vercel's free (Hobby) plan caps a
project at 12 serverless functions, and adding these two new
endpoints brought this project to exactly that limit (12 of 12). If
a future feature needs a brand new `/api/*` endpoint, it'll either
need to be folded into an existing file (the way `api/admin/action.js`
and these two files already bundle several jobs into one function),
or the project would need to move to a paid Vercel plan first.

**Current scope:** this is wired up for IB Geography lessons only
(the 118 lesson pages that already have a Resources card). IGCSE
Geography and IGCSE Business pages don't have a Resources card yet —
extending it there later would mean adding the card to those page
templates first, then it can reuse everything built here.
