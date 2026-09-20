# SBL User Registration, Login and Approval System — Setup Guide

This adds a full login/registration/approval system to the site:
a public "Request Access" form, an email to you for every request,
an admin dashboard where you approve or reject applicants, and a
login system that gates the lesson content behind an account.

Like the earlier tutor-bot setup, this needs a few accounts and
environment variables — no coding required, just careful copy/paste.
Budget about 30–45 minutes the first time.

---

## What you'll need accounts for

- **Supabase** — the database and login system. You mentioned you
  already created a Supabase account but weren't receiving emails
  from it. That's fine: this system does **not** rely on Supabase to
  send any email at all. Every email (admin notification, applicant
  confirmation, approval, rejection, password reset) is sent by your
  own code through Resend instead. Supabase is only used to store
  data and check passwords.
- **Resend** — sends all of the above emails. Free tier covers this
  comfortably (3,000 emails/month).
- **Vercel** — already set up from the original deployment. We're
  just adding more environment variables to the same project.

---

## Step 1 — Set up your Supabase project

If you already have a Supabase project from the earlier tutor-bot
plan, you can reuse it — skip to Step 2. Otherwise:

1. Go to https://supabase.com, sign in, and create a new project.
2. Choose a strong database password when prompted (Supabase asks
   for this once, during project creation — save it somewhere safe,
   you won't need it day-to-day but you may need it later).
3. Wait for the project to finish provisioning (a minute or two).

### Run the database schema

1. In your Supabase project, go to **SQL Editor** (left sidebar) →
   **New query**.
2. Open `sql/001_sbl_auth_schema.sql` from this project folder, copy
   its entire contents, and paste it into the SQL editor.
3. Click **Run**. You should see "Success. No rows returned."
4. This is safe to re-run later if needed — it won't duplicate
   anything or delete existing data.

### Turn off Supabase's own confirmation emails

Since Supabase never sends user-facing email in this system, turn
off its confirmation step so it doesn't interfere:

1. Go to **Authentication → Providers → Email**.
2. Toggle **Confirm email** to **off**.

(Accounts are created server-side with `email_confirm: true` anyway,
so this mostly avoids confusion rather than fixing a real problem —
but it's one less thing to think about.)

### Copy your four Supabase values

Go to **Settings → API**. You'll need:

| Value | Where to find it |
|---|---|
| **Project URL** | Settings → API → "Project URL" |
| **anon / public key** | Settings → API → "Project API keys" → `anon` `public` |
| **service_role key** | Settings → API → "Project API keys" → `service_role` `secret` — never share this or put it in the frontend code |
| **JWT Secret** | Settings → API → "JWT Settings" → "JWT Secret" |

> **If you don't see a "JWT Secret" field** (some newer Supabase
> projects default to a different, asymmetric key system instead):
> stop here and let me know before deploying — the content-gating
> part of this system (`middleware.js`) needs a small adjustment for
> that case. Everything else (login, registration, admin dashboard)
> works either way.

Copy all four somewhere safe — you'll paste them into Vercel in
Step 4.

---

## Step 2 — Set up Resend (for sending emails)

1. Go to https://resend.com and create a free account.
2. Go to **API Keys** → **Create API Key**. Copy it somewhere safe —
   you'll paste it into Vercel in Step 4.
3. **About the "from" address**, two options:
   - **Fastest to get started**: don't do anything else yet. The
     code defaults to sending from `onboarding@resend.dev`, Resend's
     shared testing address — but it can only send **to the email
     address on your Resend account**, so applicant/approval emails
     to other people won't arrive yet. Fine for your own first test,
     not fine for real applicants.
   - **For real use** (do this before going live): in Resend, go to
     **Domains → Add Domain**, add `solutionsbasedlearning.com`, and
     add the DNS records Resend shows you at your domain registrar
     (same place you added Vercel's DNS records). Once verified
     (usually well under an hour), set the `SBL_EMAIL_FROM`
     environment variable in Step 4 to something like
     `Solutions Based Learning <no-reply@solutionsbasedlearning.com>`.

---

## Step 3 — Put the new files on GitHub

Upload/commit these new and changed files to your repository (same
drag-and-drop process as before, or `git add` / `git commit` /
`git push` if you're comfortable with the command line):

- `sql/001_sbl_auth_schema.sql` *(reference copy — you already ran
  this directly in Supabase in Step 1; keeping it in the repo just
  means it's version-controlled)*
- `middleware.js`
- `package.json` *(changed — added `"type": "module"`)*
- `api/_lib/*.js` *(six new helper files)*
- `api/register-application.js`
- `api/login.js`
- `api/logout.js`
- `api/session.js`
- `api/forgot-password.js`
- `api/complete-password-setup.js`
- `api/admin/data.js`
- `api/admin/action.js` *(handles approve / reject / suspend /
  delete-user / bootstrap — combined into one file to stay under
  Vercel's Hobby-plan limit of 12 Serverless Functions per
  deployment; see the note at the end of Step 3)*
- `public/css/sbl-auth.css`
- `public/js/sbl-admin.js`
- `public/login/index.html`
- `public/register/index.html`
- `public/forgot-password/index.html`
- `public/set-password/index.html`
- `public/admin/index.html`

> **Important — delete these 5 old files if they're still in your
> repo, they've been replaced by `api/admin/action.js` above:**
> `api/admin/approve.js`, `api/admin/reject.js`,
> `api/admin/suspend.js`, `api/admin/delete-user.js`,
> `api/admin/bootstrap.js`. Leaving them in place alongside
> `action.js` will push your Vercel project over the Hobby plan's
> 12-Serverless-Function limit and every deployment will fail with
> "No more than 12 Serverless Functions can be added to a
> Deployment on the Hobby plan." Just select each file in File
> Explorer and delete it, then commit/push as normal — deleting a
> file is committed just like changing one.

---

## Step 4 — Add the environment variables in Vercel

Go to your Vercel project → **Settings → Environment Variables** and
add each of these (all Environments: Production, Preview, and
Development):

| Name | Value |
|---|---|
| `SUPABASE_URL` | Your Supabase Project URL |
| `SUPABASE_ANON_KEY` | Your Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service_role key |
| `SUPABASE_JWT_SECRET` | Your Supabase JWT Secret |
| `RESEND_API_KEY` | Your Resend API key |
| `SBL_EMAIL_FROM` | *(optional)* e.g. `Solutions Based Learning <no-reply@solutionsbasedlearning.com>` — once your domain is verified in Resend |
| `SBL_ADMIN_EMAIL` | *(optional)* defaults to `keithwright100@icloud.com` if not set |
| `SBL_SITE_URL` | *(optional)* e.g. `https://solutionsbasedlearning.com` — defaults to the request's own domain if not set |
| `ADMIN_BOOTSTRAP_SECRET` | A random string you make up (e.g. generate one at https://1password.com/password-generator/) — **temporary, see Step 5** |

If your project already has `ANTHROPIC_API_KEY` and
`DIRECTLINE_SECRET` set from before, leave those exactly as they are
— this system doesn't touch them.

Click **Deploy** (or push to GitHub, which triggers a deploy
automatically) once these are all saved.

---

## Step 5 — Make yourself an admin

There's a chicken-and-egg problem with any approval system: normally
an admin approves every new account, but there's no admin yet. The
`ADMIN_BOOTSTRAP_SECRET` from Step 4 exists to solve this, once,
safely — it refuses to run a second time once any admin exists.

Once your deploy has finished, open your browser's DevTools console
on any page of your site (F12 → Console tab) and run this, filling
in your own email, a password you'll actually use, and the secret
you set in Step 4:

```js
fetch('/api/admin/action', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    action: 'bootstrap',
    email: 'you@example.com',
    password: 'choose-a-real-password-10-chars-plus',
    secret: 'the-ADMIN_BOOTSTRAP_SECRET-value-you-set-in-vercel'
  })
}).then(r => r.json()).then(console.log);
```

You should see `{ ok: true, message: "Admin account ready..." }`.
Go to `/login/` and log in with that email and password — you
should land in a normal session; visit `/admin/` to see the
dashboard.

**Then remove `ADMIN_BOOTSTRAP_SECRET` from Vercel's environment
variables** (or leave it — the endpoint refuses to create a second
admin once one exists either way, but removing the secret is tidier
and means the endpoint does nothing at all if it's ever called
again).

If you ever need to promote a *second* admin later (a co-admin),
that's a one-line SQL statement in Supabase's SQL Editor:

```sql
update sbl_profiles set role = 'admin' where email = 'someone@example.com';
```

(That user needs to already have an account — i.e. already been
approved through the normal flow — before you run this.)

---

## Step 6 — Test the full flow

1. Open an incognito/private window (so you're not logged in as
   admin) and go to `/register/`. Submit a test application using an
   email address you can check.
2. Check that:
   - You (the admin) receive the "New SBL Access Request" email.
   - The applicant's email receives a confirmation with their
     reference ID.
3. Log in as admin at `/login/`, go to `/admin/`, find the
   application under **Pending Applications**, and click **Approve**.
4. Check that the applicant's email receives "Your SBL Access Has
   Been Approved" with an **Activate Account** button.
5. Click it, set a password, and confirm you land on `/login/` with
   a "your account is active" message, then log in successfully.
6. Back in the admin dashboard, confirm that user now appears under
   **Approved Users**. Try **Suspend**, confirm the account can no
   longer log in, then **Reactivate** it again.
7. Submit a second test application and **Reject** it instead —
   confirm the applicant receives the rejection email and the
   application appears under **Rejected Applications**.
8. Test `/forgot-password/` with your admin account's email, confirm
   the reset email arrives and the link works.

If any step doesn't behave as described, check the function's logs
in Vercel (**Deployments → [latest] → Functions**) — the error
messages there are usually specific about what's missing (a typo'd
env var name is the most common cause).

---

## Step 7 — Turn on content gating

This is deliberately the **last** step, and separate from everything
above, because it's the one that can lock people out of content if
something's misconfigured — better to find that out on a single
lesson folder than across the whole site.

`middleware.js` currently gates:

```js
matcher: [
  '/geography/:path*',
  '/humanities-hub/:path*',
  '/admin/:path*'
]
```

`/admin/:path*` should stay exactly as it is — the dashboard must
always be gated. Before relying on the other two:

1. Deploy as-is and visit a geography lesson page in an incognito
   window. You should be redirected to `/login/?redirect=...`.
2. Log in with your admin (or a test approved user) account — you
   should land back on the lesson page you started from.
3. Confirm logging out (there's a "Log out" button on `/admin/`; for
   a non-admin test user, calling `fetch('/api/logout', {method:
   'POST'})` from DevTools works too) immediately blocks the page
   again.

If you want to gate additional sections later (or narrow what's
gated), just edit the `matcher` array and redeploy — nothing else
needs to change.

**Rollback if something goes wrong:** delete `middleware.js` (or
empty its `matcher` array to `[]`) and redeploy. This immediately
makes all content public again — no data is lost, and you can debug
and re-add it later.

---

## How the pieces fit together (for future reference)

- **Registration** (`/register/` → `POST /api/register-application`)
  saves a row in `sbl_applications` with `status = 'pending'` and
  emails you + the applicant. No login account exists yet.
- **Approval** (`POST /api/admin/action` with `action: 'approve'`) creates the real Supabase
  Auth user and a matching `sbl_profiles` row (`role: 'user'`,
  `status: 'active'`), marks the application approved, and emails
  the applicant a one-time activation link (`/set-password/`).
- **Login** (`POST /api/login`) checks the password against
  Supabase, checks the user isn't suspended, rate-limits repeated
  failures (`sbl_login_attempts`), and sets two `HttpOnly` cookies
  (`sbl_at` / `sbl_rt`) — the browser never sees or stores the raw
  tokens in JavaScript-accessible storage.
- **Content gating** (`middleware.js`) runs at Vercel's edge before
  a matched request reaches `/public`, checks those cookies are a
  valid, unexpired session (refreshing silently if needed), and for
  `/admin/*` additionally checks the caller's `sbl_profiles.role`
  is `'admin'`.
- **Suspend / Delete / Reject** are all admin-only, session-checked
  server-side on every call (never trust the dashboard's own
  buttons as the security boundary — they're just the UI).

## Future roles

The brief asked for the database to support more roles later
(Student, Teacher, School Administrator, Premium Member, Bangkok
Patana Staff) without building them now. `sbl_profiles.role` already
accepts all of these values (see the `CHECK` constraint in the SQL
file) — nothing in Phase 1's code assigns them, but a future phase
can start using them (e.g. a `/api/admin/set-role` endpoint, and
role-specific `matcher` rules in `middleware.js`) without a schema
migration.
