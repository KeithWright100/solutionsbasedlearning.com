# Handover notes — moving to your personal Claude account

Quick reference for picking up the SBL work (and sorting out the Guitar files) once you're on your new/personal account, on the same PC.

## 1. The one thing to do BEFORE you disconnect the school account

Both of these currently live inside the **school OneDrive sync folder**
(`C:\Users\kewr\OneDrive - Bangkok Patana School\...`):

- The SBL website repo: `...\Desktop\public\Github\solutionsbasedlearning.com`
- Your Guitar course material: `...\OneDrive - Bangkok Patana School\Guitar`
  (backing tracks, course PDFs, tabs — about 1.9GB, mostly large .wav files)

When a Microsoft 365 / OneDrive account is removed from a PC, Windows usually
stops syncing that folder and can remove the local copy of its contents. So
**before you change the email / disconnect the school account**, move or copy
both of these somewhere that isn't tied to the school OneDrive — for example
your personal OneDrive (`C:\Users\kewr\OneDrive`) or a plain local folder like
`Documents`.

**For the Guitar folder**: please do this yourself in File Explorer (cut the
`Guitar` folder, paste it into the new location) — it's a local move on your
own PC, so it's instant and has no file-size limits. I can't move it through
my own tools because several of the backing-track files are too large for me
to write back to your device (my tools cap at 30MB per file; many of your
.wav files are 60–180MB). The `Highway star` folder next to it is empty, so
nothing to move there.

**For the SBL repo**: this one is safer, because everything in it is also
backed up on GitHub (see below) — so even if the local OneDrive copy
disappeared, nothing would be lost. Still worth moving/re-cloning it to a
non-school-synced folder for convenience, so you're not dependent on that
account at all going forward.

## 2. The SBL GitHub repo (this is your real safety net)

- Repo: `https://github.com/KeithWright100/solutionsbasedlearning.com.git`
- Owned by your `KeithWright100` GitHub account — **not** tied to your school
  email, so this keeps working no matter what you do with the Patana account.
- Before switching, make sure everything is committed and pushed (GitHub
  Desktop → Changes tab → Commit → Push origin). As of this session, the
  Tropical Storms game, the World Case Study Map update (pyramids +
  dependency ratios), the updated games hub page, and the photo-attach
  feature in `sbl-teach-bot.js` / `sbl-revision.js` are saved locally and
  ready to commit if you haven't already.
- If you do move the local folder (or reinstall/re-clone later), you can
  always get a fresh working copy with `git clone` from that URL — nothing
  about the code depends on which Claude or Microsoft account you're signed
  into.

## 3. Picking the SBL conversation back up on the new account

1. Open the Claude desktop app signed into your new personal account.
2. Start a new Cowork task and choose **"Link to this computer"** (or start
   it from this same computer if that's the default) so Claude can reach
   your files again.
3. When it asks for folder access, point it at wherever the
   `solutionsbasedlearning.com` folder ends up living (either the original
   path if you keep it, or the new location if you move it).
4. I'd just say something like: "This is my IB Geography Learning Hub site
   (solutionsbasedlearning.com) — here's the repo" and paste the GitHub URL
   if you want it re-cloned fresh rather than linked to the existing folder.

## 4. The guitar course — this is NOT in the Guitar folder on your PC

Turns out the guitar course itself isn't local files — it's 10 pages you built
with me as published Claude Artifacts, living in this account's artifact
gallery at claude.ai/code/artifacts: the 8 lessons, the Scale Library and the
Barre Chord Library. The `Guitar` folder on your PC (section 1 above) is just
supporting material — backing tracks, PDFs, tabs — not the course itself.

Artifacts belong to the account that made them, so switching to your personal
account would normally leave them behind. I've already copied all 10 pages'
full content into `Guitar-Course-Backup.zip`, sent in this chat — open any of
those `.html` files in a browser and the whole interactive page works exactly
as it does on claude.ai, with your drill scores and checklist ticks starting
fresh (those are saved in-browser on the original page, not something I can
carry over).

**To get them working again on your new account:** once you're set up there,
start a new conversation and attach these HTML files (or ask me to read them)
and ask me to publish each one as a fresh Artifact — I can do that directly
from the files in the backup zip. You'll get new links, and you can re-link
them to each other the way the originals were (each lesson links to the next).

I also noticed two other items in your artifact gallery — one called "Design
System" and one "Untitled" — that don't look like guitar course content (they
use a different Anthropic page type for design tooling). I didn't back these
up since they don't appear related; let me know if you want them looked at
too.

## 5. What's attached

- `SBL-session-backup.zip` — everything built this session for the geography
  site, as an extra copy independent of any account or folder:
  - `public/geography/games/tropical-storms-exam-survival/index.html`
  - `public/geography/games/world-case-study-map/index.html`
  - `public/geography/games/index.html` (hub page)
  - `public/js/sbl-teach-bot.js`
  - `public/js/sbl-revision.js`
- `Guitar-Course-Backup.zip` — all 10 guitar course pages as standalone HTML:
  Lessons 1–8, the Scale Library and the Barre Chord Library.
