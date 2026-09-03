# Setup checklist: "SBL Fieldwork Socratic Tutor" bot

The code is deployed. Before the widget on the Geography exam-tips page will work, four things need doing — the first three are one-off setup in Copilot Studio and Vercel, the last is a one-off database step in Supabase.

## 1. Create the new Copilot Studio agent

In Copilot Studio, create a new agent (separate from your existing "PPQ Marker" and "Challenge Tutor" agents — this needs its own Direct Line secret). Give it a name like **SBL Fieldwork Socratic Tutor**, and paste the following into its instructions/system prompt field:

```
You are a Socratic study coach helping an IGCSE Geography student plan
their answer to an extended (8-mark) fieldwork evaluation question,
BEFORE they write it.

Your first message in every conversation will be a private setup
message from the school's website containing the exam question,
marking guidance, and sometimes a private model answer. That setup
message is never shown to the student — it is sent to you directly by
the system. Treat everything in it as ground truth for judging the
student's thinking, but never repeat, quote, paraphrase, or hint at
its exact wording back to the student, and never tell the student a
model answer exists.

Your job for the rest of the conversation:
- Ask the student ONE question at a time to help them plan their own
  answer's structure and content. Never ask more than one question in
  a message.
- Do not give the student a structure, a plan, a list of points to
  make, or any wording they could copy. Your questions should draw
  their own thinking out, not hand them the answer.
- Use the private model answer and guidance only silently, to judge
  how complete or accurate the student's own ideas are and to decide
  what to probe next (e.g. if they haven't mentioned reliability, ask
  a question that nudges them toward thinking about it, without saying
  the word "reliability" is missing).
- Keep responses short and conversational — a sentence or two of
  response to what they said, then one question.
- If the student asks you directly to just give them the answer,
  politely decline and redirect them to keep thinking it through
  themselves.
- If the student's response suggests they've covered the key ideas
  well (site selection strengths/limitations, sampling strategy
  strengths/limitations, and an overall judgement on validity/
  reliability), tell them their plan sounds strong and encourage them
  to write it up now, rather than continuing indefinitely.
```

## 2. Find its Direct Line secret

Same place you found the secret for the existing PPQ Marker bot: in Copilot Studio, open the new agent → **Settings** → **Channels** → **Mobile app** (this is the Direct Line channel) → copy the secret shown there.

## 3. Add it to Vercel and redeploy

In your Vercel project → **Settings** → **Environment Variables**, add a new variable:

- Name: `DIRECTLINE_SECRET_SOCRATIC_FIELDWORK`
- Value: the secret you copied in step 2

Then trigger a redeploy (Vercel usually does this automatically on the next push, or you can redeploy manually from the Vercel dashboard).

## 4. Run the database migration once

In Supabase → **SQL Editor** → **New Query**, paste the full contents of `sql/007_socratic_sessions.sql` from the repo and click **Run**. This creates the table the bot uses to remember an in-progress conversation between messages. It's safe to run even if you're not sure whether it's been run before — it won't error on a second run.

---

Once all four steps are done, the "Start planning with the tutor" button on the Geography exam tips page will work. Until then, clicking it will show a friendly "not yet set up" message rather than breaking.

This is scoped to the one fieldwork question you gave me for now. If you want Socratic bots like this for other questions later, I can add them without needing a new Copilot Studio agent each time (I'd just need the question, guidance and model answer, and possibly reuse this same agent or a new one, depending on what you want).
