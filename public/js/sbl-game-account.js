/* public/js/sbl-game-account.js
   Saves a game's scores to the player's SBL account, in the same format as
   World Map Challenge, so they appear on My scores and in the teacher's
   KS3 Geography mark book (/teacher/). Games stay open to everyone: if the
   player is not logged in, nothing is sent and the game carries on.

   Saved as lesson "GAME:<slug>" with
     "r:<part>|<round>" best score for each round  { t, mode, s, m, st, n, ls, lm, at }
     "m:<part>"         running mark for each part  { ls, lm, lp, lt, at, n, bp }
     "explore"          optional count (e.g. passport stamps)  { ids, n, at }

   SBLGameAccount.record(slug, part, round, title, score, max)
   SBLGameAccount.collect(slug, id)   adds id to the "explore" list */
(function () {
  var cache = {}, pending = {};
  function starsFor(p) { return p >= 0.9 ? 3 : p >= 0.7 ? 2 : p >= 0.4 ? 1 : 0; }
  function load(slug) {
    if (cache[slug] !== undefined) return Promise.resolve(cache[slug]);
    if (pending[slug]) return pending[slug];
    if (!window.fetch) return Promise.resolve(null);
    pending[slug] = fetch('/api/progress?lessonId=' + encodeURIComponent('GAME:' + slug), { credentials: 'same-origin' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { cache[slug] = d ? (d.data || {}) : null; return cache[slug]; }, function () { cache[slug] = null; return null; });
    return pending[slug];
  }
  function post(slug, patch) {
    try {
      fetch('/api/progress', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lessonId: 'GAME:' + slug, patch: patch }) })
        .then(function (r) { if (r.status === 401) cache[slug] = null; }, function () {});
    } catch (e) {}
  }
  function record(slug, part, round, title, score, max) {
    if (!max) return;
    score = Math.max(0, Math.min(score, max));
    return load(slug).then(function (acct) {
      if (!acct) return;
      var at = new Date().toISOString(), p = score / max, st = starsFor(p), key = 'r:' + part + '|' + round;
      var a0 = acct[key], better = !a0 || st > a0.st || (st === a0.st && score > a0.s);
      var entry = { t: title, mode: part, s: better ? score : a0.s, m: better ? max : a0.m, st: better ? st : a0.st, n: (a0 ? a0.n || 0 : 0) + 1, ls: score, lm: max, at: at };
      var m0 = acct['m:' + part] || {}, pct = Math.round(p * 100);
      var me = { ls: score, lm: max, lp: pct, lt: title, at: at, n: (m0.n || 0) + 1, bp: Math.max(m0.bp || 0, pct) };
      acct[key] = entry; acct['m:' + part] = me;
      var patch = {}; patch[key] = entry; patch['m:' + part] = me;
      post(slug, patch);
    });
  }
  function collect(slug, id) {
    return load(slug).then(function (acct) {
      if (!acct) return;
      var ex = acct.explore || { ids: [] }, ids = (ex.ids || []).slice();
      if (ids.indexOf(id) !== -1) return;
      ids.push(id);
      acct.explore = { ids: ids, n: ids.length, at: new Date().toISOString() };
      post(slug, { explore: acct.explore });
    });
  }
  window.SBLGameAccount = { record: record, collect: collect, load: load };
})();
