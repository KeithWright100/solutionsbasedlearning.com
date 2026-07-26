# IB Geography Learning Hub — Deployment Guide

This folder is a complete, ready-to-deploy app: the student-facing page
(`public/index.html`) plus a small secure backend (`api/chat.js`) that holds
your API key safely.

You do not need to write code or hire a developer. Follow these steps.

---

## Step 0 — Set up logins (Supabase)

This app requires students to log in before chatting. Logins are handled by
**Supabase** (free for this scale of use), so you don't have to build or
secure your own login system.

1. Go to https://supabase.com and create a free account and a new project.
2. In your project, go to **Settings → API**. You'll need three values from
   this page — copy them somewhere safe:
   - **Project URL**
   - **anon / public key**
   - **service_role key** (this one is secret — never share it or put it in
     the frontend code)
3. Open `public/index.html`, find this section near the top of the
   `<script type="module">` block, and replace the two placeholders:
   ```js
   const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
   const SUPABASE_ANON_KEY = "YOUR-ANON-KEY";
   ```
4. By default, Supabase requires new users to confirm their email before
   logging in. For a school setting, you may want to turn this off (so
   students can sign in immediately): in Supabase, go to
   **Authentication → Providers → Email** and toggle off "Confirm email".
5. You'll add the **service_role key** as an environment variable in Step 3
   below (alongside your Anthropic key) — it's used only on the server, to
   verify that a login is valid.

## Step 1 — Get an Anthropic API key

1. Go to https://console.anthropic.com and create an account (separate from
   a normal claude.ai account — this is the developer console).
2. Go to **Settings → API Keys** and create a new key.
3. Copy it somewhere safe. You'll paste it into your hosting platform in
   Step 3 — never into the code itself, and never share it publicly.
4. Add a small amount of billing credit (this is pay-per-use; a class of
   students chatting with a tutor bot typically costs a few dollars a month,
   but keep an eye on usage in the console).

## Step 2 — Put this project on GitHub

1. Create a free account at https://github.com if you don't have one.
2. Create a new repository (e.g. `ib-geography-hub`).
3. Upload all the files in this folder to that repository (GitHub's web
   interface lets you drag and drop files — no command line needed).

## Step 3 — Deploy with Vercel (free, no server management)

1. Go to https://vercel.com and sign up using your GitHub account.
2. Click **Add New → Project**, and select the repository you just created.
3. Before clicking Deploy, open **Environment Variables** and add:
   - Name: `ANTHROPIC_API_KEY`, Value: (paste the key from Step 1)
   - Name: `SUPABASE_URL`, Value: (your Project URL from Step 0)
   - Name: `SUPABASE_SERVICE_ROLE_KEY`, Value: (your service_role key from Step 0)
4. Click **Deploy**. Vercel will give you a working URL
   (like `ib-geography-hub.vercel.app`) within a minute or two.
5. Open that URL and test the chat — this confirms everything works before
   you connect your own domain.

## Step 4 — Connect your domain

1. Buy a domain from any registrar (Namecheap, GoDaddy, Google Domains, etc.)
   if you haven't already.
2. In your Vercel project, go to **Settings → Domains** and add your domain.
3. Vercel will show you 1–2 DNS records to add. Log into your domain
   registrar, find the DNS settings, and add those records exactly as shown.
4. Wait 10–60 minutes for DNS to update. Your domain will then point at the
   app.

## Making changes later

- To edit the syllabus, wording, or styling: edit `public/index.html`
  directly in GitHub (click a file → pencil icon → edit → commit). Vercel
  redeploys automatically within a minute of any change.
- To add new lessons: find the `TREE` object near the top of the `<script>`
  section in `index.html` and follow the existing pattern.

## Adding paid subscriptions later

Because accounts already exist (via Supabase), turning this into a paid
product for other schools later is a smaller step than it would be starting
from scratch:

- Add a `paid` (or `school_id`) column to the Supabase user data
- Add Stripe for checkout and subscription billing
- The backend check in `api/chat.js` gets one more condition: logged in
  **and** paid, before answering

None of this needs to be built now — just noting that today's setup is the
right foundation for it.

## A note on student data

Since students will be creating accounts (even free ones), it's worth a
quick check with your school on data-handling expectations before rolling
this out — particularly if any students are minors. This is a policy
question, not a technical one, so it's worth a conversation with whoever
handles student data privacy at your school.

## Cost & usage notes

- Vercel's free tier comfortably covers a single class or small school.
- Anthropic API cost is pay-per-message (only when students actually chat).
  You can set spend limits in the Anthropic Console under billing.
- If costs become a concern, you can add simple usage limits (e.g. per
  student per day) — ask for help adding this if needed.
