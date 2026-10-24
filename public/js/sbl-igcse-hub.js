/* ============================================================
   SBL — IGCSE learn hub enhancements (every IGCSE subject)
   Loaded automatically by sbl-teach-bot.js on /igcse/<subject>/learn…

   • Lesson pages: remember the last lesson opened (this device) so
     the subject home page can offer "Continue where you left off".
   • Subject home page: topic icons, a progress bar on each topic
     card ("4 of 10 lessons complete") and the Continue banner.
   • Topic pages: a progress bar under "About this topic", and on
     each lesson card a status chip (Complete / 2 of 3 criteria /
     Not started), the Test My Knowledge score, and a chip with the
     number of past paper questions for that lesson.

   "Complete" = every success criterion on the lesson ticked.
   Progress comes from one GET /api/progress call (all lessons).
   ============================================================ */
(function () {
  var path = location.pathname.replace(/\/+$/, '');
  /* IB Geography lesson pages: remember the last lesson for the IB hub's Continue banner */
  if (/^\/geography\/paper-\d\/[^\/]+\/t\d[^\/]*\/l\d/.test(path)) {
    var L0 = window.SBL_LESSONS || {}, hit = null;
    Object.keys(L0).forEach(function (k) { if (L0[k] && L0[k].href && L0[k].href.replace(/\/+$/, '') === path) hit = L0[k]; });
    try { localStorage.setItem('sbl-last-lesson-ib-geography', JSON.stringify({ href: path, id: hit && hit.id, title: hit ? hit.title : document.title.split(' — ')[0], at: Date.now() })); } catch (e) {}
    return;
  }
  var m = path.match(/^\/igcse\/([a-z-]+)\/learn(\/[^\/]+)?(\/[^\/]+)?$/);
  if (!m) return;
  var subj = m[1], unit = m[2] || '', sub = m[3] || '';
  var KEY = 'sbl-last-lesson-' + subj;
  var LESSONS = window.SBL_LESSONS || {};
  var all = Object.keys(LESSONS).map(function (k) { return LESSONS[k]; })
    .filter(function (l) { return l && l.href && l.href.indexOf('/igcse/' + subj + '/learn/') === 0; });

  function byHref(h) { h = h.replace(/\/+$/, ''); for (var i = 0; i < all.length; i++) if (all[i].href.replace(/\/+$/, '') === h) return all[i]; return null; }
  function under(prefix) { prefix = prefix.replace(/\/+$/, '') + '/'; return all.filter(function (l) { return l.href.indexOf(prefix) === 0; }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function num(l) { var x = l.href.match(/\/l(\d+)-/); return x ? parseInt(x[1], 10) : 0; }

  /* ---------- lesson page: remember it ---------- */
  if (sub && /^\/l\d+-/.test(sub)) {
    var me = byHref(path);
    try {
      localStorage.setItem(KEY, JSON.stringify({ href: path, id: me && me.id, title: (me && me.title) || document.title.split(' — ')[0], at: Date.now() }));
    } catch (e) {}
    return;
  }
  if (sub) return; // past-papers and other sub pages

  /* ---------- progress helpers ---------- */
  var prog = {};
  function stat(l) {
    var p = prog[l.id] || {};
    var n = (l.checklist || []).length;
    var t = Array.isArray(p.checklist) ? p.checklist.filter(Boolean).length : 0;
    var tmk = p.quiz_test_my_knowledge || null;
    return { n: n, t: Math.min(t, n), done: n > 0 && t >= n, started: t > 0 || !!tmk || !!p.quiz_spaced_retrieval, tmk: tmk };
  }
  function bar(done, total, pct, label) {
    return '<div class="ig-prog" role="img" aria-label="' + esc(label) + '"><div class="ig-prog__track"><span style="width:' + pct + '%"></span></div>' +
      '<span class="ig-prog__txt">' + esc(label) + '</span></div>';
  }
  function topicSummary(ls) {
    var done = 0, crit = 0, critT = 0;
    ls.forEach(function (l) { var s = stat(l); if (s.done) done++; crit += s.n; critT += s.t; });
    var pct = crit ? Math.round(critT / crit * 100) : 0;
    return { done: done, total: ls.length, pct: pct };
  }

  /* ---------- topic icons ---------- */
  var ICONS = {
    'market-system': '<path d="M4 4v16h16"/><path d="M7 6l11 11"/><path d="M7 17L18 6"/>',
    'business-economics': '<path d="M3 21V10l6 4V10l6 4V5h4v16z"/><path d="M7 21v-3M12 21v-3M17 21v-3"/>',
    'government': '<path d="M3 10l9-6 9 6"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8"/><path d="M3 21h18"/>',
    'global-economy': '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    'coastal-environments': '<path d="M2 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/><path d="M2 19c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/><path d="M8 10a4 4 0 0 1 8 0"/>',
    'hazardous': '<path d="M3 20l6-10 3 4 2-3 7 9z"/><path d="M10 6l1-3M14 6l2-2M7 7L5 5"/>',
    'fieldwork': '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2"/><path d="M8.5 11l2 2 4-4"/><path d="M8.5 17h7"/>',
    'economic-activity': '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    'rural': '<path d="M12 21v-7"/><path d="M12 14c-4 0-6-3-6-6 3 0 6 2 6 6zM12 14c4 0 6-3 6-6-3 0-6 2-6 6z"/><path d="M3 21h18"/>',
    'development': '<path d="M4 20h16"/><path d="M6 16v-3M10 16V9M14 16v-5M18 16V6"/>'
  };
  function iconFor(href) {
    var k = Object.keys(ICONS).filter(function (key) { return href.indexOf(key) !== -1; })[0];
    return k ? '<span class="ig-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + ICONS[k] + '</svg></span>' : '';
  }

  /* ---------- home page ---------- */
  function decorateHome() {
    document.querySelectorAll('main a.ig-card').forEach(function (a) {
      var href = a.getAttribute('href') || ''; var ls = under(href);
      if (!ls.length) return;
      if (!a.querySelector('.ig-icon')) a.insertAdjacentHTML('afterbegin', iconFor(href));
      var s = topicSummary(ls);
      var old = a.querySelector('.ig-prog'); if (old) old.remove();
      a.insertAdjacentHTML('beforeend', bar(s.done, s.total, s.pct, s.done + ' of ' + s.total + ' lessons complete'));
    });
    // Continue banner
    var last = null; try { last = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
    var target = last && byHref(last.href || '');
    var mode = 'continue';
    if (!target) {
      // no visit on this device: first unfinished lesson in a topic with progress, else lesson 1
      var started = all.filter(function (l) { return stat(l).started; });
      var pool = started.length ? under(started[0].href.replace(/\/l\d+-[^\/]+$/, '')) : [];
      pool.sort(function (x, y) { return num(x) - num(y); });
      target = pool.filter(function (l) { return !stat(l).done; })[0] || null;
      if (!target) { mode = 'start'; var firstCard = document.querySelector('main a.ig-card'); var fl = firstCard ? under(firstCard.getAttribute('href')) : []; fl.sort(function (x, y) { return num(x) - num(y); }); target = fl[0] || null; }
    }
    if (!target) return;
    var s = stat(target);
    var topicTitle = (target.topicTitle || '').replace(/\s*\(IGCSE[^)]*\)\s*$/, '');
    var html = '<a class="ig-continue" href="' + esc(target.href) + '">' +
      '<span class="ig-continue__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 5v14l11-7z"/></svg></span>' +
      '<span class="ig-continue__body"><small>' + (mode === 'start' ? 'Start here' : 'Continue where you left off') + '</small>' +
      '<b>Lesson ' + num(target) + ': ' + esc(target.title) + '</b><span>' + esc(topicTitle) +
      (s.n ? ' &middot; ' + s.t + ' of ' + s.n + ' success criteria ticked' : '') + '</span></span>' +
      '<span class="ig-continue__go">' + (mode === 'start' ? 'Start' : 'Continue') + ' &rarr;</span></a>';
    var old = document.querySelector('.ig-continue'); if (old) old.remove();
    var anchor = document.querySelector('main .lh-page-head');
    if (anchor) anchor.insertAdjacentHTML('afterend', html);
  }

  /* ---------- topic page ---------- */
  var ppqCount = {};
  function decorateTopic() {
    var ls = under(path);
    if (!ls.length) return;
    var s = topicSummary(ls);
    var about = document.querySelector('main .lh-page-head + .ig-section');
    var old = document.querySelector('.ig-topic-prog'); if (old) old.remove();
    if (about) about.insertAdjacentHTML('beforeend', '<div class="ig-topic-prog">' + bar(s.done, s.total, s.pct, s.done + ' of ' + s.total + ' lessons complete · ' + s.pct + '% of success criteria ticked') + '</div>');
    document.querySelectorAll('main a.ig-card').forEach(function (a) {
      var l = byHref(a.getAttribute('href') || ''); if (!l) return;
      var st = stat(l);
      var chips = '';
      if (st.done) chips += '<span class="ig-chip ig-chip--done">&#10003; Complete</span>';
      else if (st.t) chips += '<span class="ig-chip ig-chip--part">' + st.t + ' of ' + st.n + ' criteria</span>';
      else if (st.started) chips += '<span class="ig-chip ig-chip--part">Started</span>';
      if (st.tmk && typeof st.tmk.score === 'number') chips += '<span class="ig-chip ig-chip--quiz">Quiz ' + st.tmk.score + '/' + st.tmk.total + '</span>';
      if (ppqCount[l.id]) chips += '<span class="ig-chip ig-chip--ppq">' + ppqCount[l.id] + ' past paper Q' + (ppqCount[l.id] === 1 ? '' : 's') + '</span>';
      var box = a.querySelector('.ig-chips'); if (box) box.remove();
      if (chips) a.querySelector('h3').insertAdjacentHTML('beforebegin', '<div class="ig-chips">' + chips + '</div>');
      a.classList.toggle('is-done', st.done);
    });
  }

  function render() { if (!unit) decorateHome(); else decorateTopic(); }

  function loadPpq(done) {
    if (!unit) return done();
    var s = document.createElement('script');
    var prev = window.SBL_IGCSE_PPQ;
    s.src = path + '/past-papers/ppq-data.js';
    s.onload = function () {
      var D = window.SBL_IGCSE_PPQ;
      if (D && D !== prev && D.parts) D.parts.forEach(function (p) { ppqCount[p.lesson] = (ppqCount[p.lesson] || 0) + 1; });
      window.SBL_IGCSE_PPQ = prev; done();
    };
    s.onerror = function () { done(); };
    document.head.appendChild(s);
  }

  function start() {
    render(); // instant render (no progress yet)
    var pending = 2;
    function step() { if (--pending === 0) render(); }
    loadPpq(step);
    fetch('/api/progress', { credentials: 'same-origin' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { prog = (d && d.lessons) || {}; step(); })
      .catch(step);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
