/* public/js/sbl-subject-hub.js
   Builds the subject home pages (/subjects/geography/, /economics/, /business/, /history/).
   Each page is just <main id="subjectHub" data-subject="geography"></main> plus this script.
   Links come from the shared menu (window.SBL_NAV in sbl-nav.js) and games from
   window.SBL_GAMES (sbl-games-catalog.js), so new lessons and games appear here
   automatically once they are in the menu or the games catalogue. */
(function () {
  var root = document.getElementById('subjectHub'); if (!root) return;
  var key = root.getAttribute('data-subject');
  var S = {
    geography: { name: 'Geography', color: '#0b7f86', c2: '#00d1c4', soft: '#e3f5f4', kicker: 'People, places and the planet',
      lead: 'Lessons, revision, past paper practice and games for KS3, IGCSE and the IB Diploma.',
      nav: { igcse: 'IGCSE Geography', ib: 'IB Geography' }, gameRe: /Geography/, pathRe: /^\/(geography|igcse\/geography)/,
      ks3: { title: 'KS3 Geography', blurb: 'Curriculum lessons, quizzes and games for Years 7 to 9: maps, storms, development and more.', start: ['Start the KS3 lessons', '/ks3/geography'],
        items: [['KS3 curriculum lessons', '/ks3/geography', 'new'], ['KS3 quizzes', '/geography/quizzes'], ['KS3 games', '/geography/games#ks3'], ['World Map Challenge', '/geography/games/world-map-challenge'], ['Travel the Wright Way', '/geography/games/travel-the-wright-way']] } },
    economics: { name: 'Economics', color: '#1d4ed8', c2: '#60a5fa', soft: '#e6eefc', kicker: 'Choices, markets and the global economy',
      lead: 'Edexcel and Cambridge IGCSE plus the IB Diploma: lessons, revision bots, past papers and games.',
      nav: { igcse: 'IGCSE Economics', ib: 'IB Economics' }, gameRe: /Economics/, pathRe: /^\/(economics|igcse\/economics|igcse\/cie-economics)/ },
    business: { name: 'Business', color: '#7c3aed', c2: '#c4b5fd', soft: '#f0eafd', kicker: 'Ideas, people and organisations',
      lead: 'IGCSE Business and IB Business Management: lessons, case studies, revision bots and paper practice.',
      nav: { igcse: 'IGCSE Business', ib: 'IB Business Management' }, gameRe: /Business/, pathRe: /^\/(business|igcse\/business)/ },
    history: { name: 'History', color: '#9f1239', c2: '#fda4af', soft: '#fbe8ec', kicker: 'Evidence, change and consequence',
      lead: 'KS3 games and IGCSE History lessons on superpower relations, civil rights in the USA and Russia.',
      nav: { igcse: 'IGCSE History', ib: 'IB History' }, gameRe: /History/, pathRe: /^\/(igcse\/history|history)/,
      ks3: { title: 'KS3 History', blurb: 'Enquiry games for Years 7 to 9, starting with China’s First Emperor.', start: ['Play KS3 History games', '/geography/games#ks3'],
        items: [['Tomb of the First Emperor', '/geography/games/qin-tomb'], ['All KS3 games', '/geography/games#ks3']] } }
  }[key];
  if (!S) return;
  document.documentElement.style.setProperty('--c', S.color);
  document.documentElement.style.setProperty('--c2', S.c2);
  document.documentElement.style.setProperty('--soft', S.soft);

  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }
  var P = {
    book: '<path d="M4 5c3-1 6-1 8 1 2-2 5-2 8-1v13c-3-1-6-1-8 1-2-2-5-2-8-1z"/><path d="M12 6v13"/>',
    guide: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    bot: '<rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M9 16h6"/>',
    paper: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
    tips: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    game: '<rect x="3" y="8" width="18" height="10" rx="5"/><path d="M8 11v4M6 13h4M15.5 12h.01M17.5 14h.01"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    scores: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'
  };
  function icon(n) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[n] || P.book) + '</svg>'; }
  function iconFor(t) {
    t = t.toLowerCase();
    if (/bot/.test(t)) return 'bot'; if (/past paper|specimen|paper question/.test(t)) return 'paper'; if (/tip/.test(t)) return 'tips';
    if (/game|quest|challenge|travel/.test(t)) return 'game'; if (/research/.test(t)) return 'search'; if (/check|quiz/.test(t)) return 'check';
    if (/guide|revision$|topic revision/.test(t)) return 'guide'; if (/overview/.test(t)) return 'compass'; return 'book';
  }
  function sub(t) {
    t = t.toLowerCase();
    if (/bot/.test(t)) return 'Chat with an AI tutor by topic'; if (/past paper|specimen/.test(t)) return 'Self-marking exam practice';
    if (/tip/.test(t)) return 'Command terms and technique'; if (/game/.test(t)) return 'Learn by playing'; if (/research/.test(t)) return 'Case studies and current events';
    if (/guide/.test(t)) return 'Every topic in one place'; if (/lesson/.test(t)) return 'Notes, quizzes and tasks'; if (/check|quiz/.test(t)) return 'Quick knowledge checks';
    if (/overview/.test(t)) return 'Start here'; if (/cambridge|cie/.test(t)) return 'Cambridge syllabus'; return 'Open';
  }
  var NAV = window.SBL_NAV || [];
  function col(title) { for (var i = 0; i < NAV.length; i++) for (var j = 0; j < (NAV[i].cols || []).length; j++) if (NAV[i].cols[j].title === title) return NAV[i].cols[j]; return null; }
  var levels = [];
  if (S.ks3) levels.push({ id: 'ks3', badge: 'KS3', age: 'Ages 11–14', c: '#c2410c', title: S.ks3.title, blurb: S.ks3.blurb, start: S.ks3.start, items: S.ks3.items, units: [] });
  ['igcse', 'ib'].forEach(function (lv) {
    var c = col(S.nav[lv]); if (!c) return;
    var items = [], units = [];
    c.items.forEach(function (it) { if (!it[1] || it[2] === 'soon' || it[2] === 'head') return; (/^(Unit|Option|HL)/.test(it[0]) ? units : items).push(it); });
    levels.push({ id: lv, badge: lv === 'ib' ? 'IB Diploma' : 'IGCSE', age: lv === 'ib' ? 'Ages 16–19' : 'Ages 14–16', c: lv === 'ib' ? '#0b6e8a' : '#1f8a4c',
      title: c.title, blurb: c.blurb, soon: c.soon, start: c.href ? [lv === 'ib' ? 'Enter ' + c.title : lv === 'igcse' ? 'Start the revision lessons' : 'Start the lessons', c.href] : null, items: items, units: units });
  });
  var games = (window.SBL_GAMES || []).filter(function (g) { return S.gameRe.test(g.level || ''); });
  var art = key === 'geography' ? '<svg class="art" viewBox="0 0 200 200" fill="none" stroke="#fff" stroke-width="3"><circle cx="100" cy="100" r="80"/><path d="M20 100h160M100 20c-30 30-30 130 0 160M100 20c30 30 30 130 0 160M35 60h130M35 140h130"/></svg>'
    : key === 'economics' ? '<svg class="art" viewBox="0 0 200 200" fill="none" stroke="#fff" stroke-width="4"><path d="M20 180V20M20 180h170M40 40l130 120M40 160 170 40"/><circle cx="105" cy="100" r="6" fill="#fff"/></svg>'
    : key === 'business' ? '<svg class="art" viewBox="0 0 200 200" fill="none" stroke="#fff" stroke-width="4"><rect x="30" y="60" width="140" height="100" rx="12"/><path d="M75 60V40h50v20M30 105h140"/></svg>'
    : '<svg class="art" viewBox="0 0 200 200" fill="none" stroke="#fff" stroke-width="4"><path d="M30 170h140M45 170V80M75 170V80M125 170V80M155 170V80M25 80h150L100 30z"/></svg>';

  var h = '<nav class="crumbs"><a href="/humanities-hub">Humanities Hub</a> › ' + esc(S.name) + '</nav>' +
    '<section class="sh-hero">' + art + '<div style="position:relative;z-index:1"><div class="kick">' + esc(S.kicker) + '</div><h1>' + esc(S.name) + ' Hub</h1><p class="lead">' + esc(S.lead) + '</p>' +
    '<div class="find" role="search"><div class="find__box"><input id="find" type="search" placeholder="Find a ' + esc(S.name.toLowerCase()) + ' lesson, topic or game…" autocomplete="off" aria-label="Find a page"><span>Search</span></div><div class="find__list" id="findList"></div></div>' +
    '<div class="sh-jump">' + levels.map(function (l) { return '<a href="#lvl-' + l.id + '">' + esc(l.badge) + '</a>'; }).join('') + (games.length ? '<a href="#games">Games</a>' : '') + '</div></div>' +
    '<div class="sh-stats">' +
      '<div class="sh-stat"><b>' + levels.filter(function (l) { return !l.soon; }).length + '</b><span>levels of study</span></div>' +
      '<div class="sh-stat"><b>' + games.length + '</b><span>interactive games</span></div>' +
      '<div class="sh-stat"><b>' + levels.reduce(function (n, l) { return n + l.items.length + l.units.length; }, 0) + '</b><span>places to learn and revise</span></div>' +
      '<div class="sh-stat"><b>AI</b><span>tutor and self-marking feedback</span></div>' +
    '</div></section>';

  h += '<section class="sh-sec"><div class="sh-two"><div class="sh-card"><h2>Carry on where you left off</h2><div id="recent"></div></div>' +
    '<div class="sh-card tools"><h2>Your tools</h2><a href="/humanities-hub/my-scores">' + icon('scores') + 'My scores and feedback<span>→</span></a><a href="/geography/games">' + icon('game') + 'All games<span>→</span></a><a href="/humanities-hub">' + icon('compass') + 'Humanities Hub home<span>→</span></a></div></div></section>';

  levels.forEach(function (l) {
    h += '<section class="sh-sec" id="lvl-' + l.id + '"><div class="sh-head"><h2><span class="lvl-badge lvl-' + l.id + '">' + esc(l.badge) + '</span>' + esc(l.title) + '<span class="age">' + esc(l.age) + '</span></h2></div>' +
      '<div class="sh-level" style="--lc:' + l.c + '"><div class="sh-start' + (l.soon ? ' soon' : '') + '" style="--lc:' + l.c + '"><div><span class="lvl-badge" style="background:rgba(255,255,255,.2)">' + esc(l.badge) + '</span><h3>' + esc(l.title) + '</h3><p>' + esc(l.blurb || '') + '</p></div>' +
      (l.soon ? '<span class="go" style="background:#dfe6ea;color:#5f7382">Coming soon</span>' : (l.start ? '<a class="go" href="' + esc(l.start[1]) + '">' + esc(l.start[0]) + ' →</a>' : '')) + '</div>' +
      '<div class="sh-res">' + l.items.map(function (it) { return '<a class="sh-tile" href="' + esc(it[1]) + '"><span class="ic">' + icon(iconFor(it[0])) + '</span><span><b>' + esc(it[0]) + (it[2] === 'new' ? '<span class="pill">New</span>' : '') + '</b><small>' + esc(sub(it[0])) + '</small></span></a>'; }).join('') + '</div>' +
      (l.units.length ? '<div class="sh-units"><span class="lab">Lesson units</span>' + l.units.map(function (u) { return '<a href="' + esc(u[1]) + '">' + esc(u[0]) + '</a>'; }).join('') + '</div>' : '') +
      '</div></section>';
  });

  if (games.length) {
    var lvls = []; games.forEach(function (g) { var t = /KS3/.test(g.level) ? 'KS3' : /IGCSE/.test(g.level) ? 'IGCSE' : 'IB'; g._l = t; if (lvls.indexOf(t) < 0) lvls.push(t); });
    h += '<section class="sh-sec" id="games"><div class="sh-head"><h2>' + esc(S.name) + ' games<span class="age">' + games.length + ' to play</span></h2><div class="sh-filter" id="gf"><button type="button" class="on" data-f="">All</button>' +
      ['KS3', 'IGCSE', 'IB'].filter(function (t) { return lvls.indexOf(t) >= 0; }).map(function (t) { return '<button type="button" data-f="' + t + '">' + t + '</button>'; }).join('') + '</div></div><div class="sh-games" id="gl"></div><div class="sh-more" id="gm"></div></section>';
  }
  var others = [['Geography', 'geography'], ['Economics', 'economics'], ['Business', 'business'], ['History', 'history']].filter(function (o) { return o[1] !== key; });
  h += '<section class="sh-sec"><div class="sh-head"><h2>Other subjects</h2></div><div class="others">' + others.map(function (o) { return '<a href="/subjects/' + o[1] + '/">' + o[0] + ' Hub →</a>'; }).join('') + '</div></section>';
  root.innerHTML = h;
  document.title = S.name + ' Hub | Solutions Based Learning';

  // games grid with level filter
  var filt = '', showAll = false;
  function drawGames() {
    var gl = document.getElementById('gl'); if (!gl) return;
    var list = games.filter(function (g) { return !filt || g._l === filt; }).slice().reverse();
    var shown = showAll ? list : list.slice(0, 9);
    gl.innerHTML = shown.map(function (g) { return '<a class="sh-game g-' + g._l.toLowerCase() + '" href="' + esc(g.href) + '"><div class="top"><span class="lvl-badge lvl-' + g._l.toLowerCase() + '">' + g._l + '</span>' + (g.tag === 'New' ? '<span class="pill">New</span>' : '') + '</div><h3>' + esc(g.title) + '</h3><p>' + esc(g.desc || '') + '</p><span class="play">Play →</span></a>'; }).join('');
    document.getElementById('gm').innerHTML = list.length > 9 && !showAll ? '<button type="button" id="gmb">Show all ' + list.length + ' games</button>' : '';
    var b = document.getElementById('gmb'); if (b) b.onclick = function () { showAll = true; drawGames(); };
  }
  var gf = document.getElementById('gf');
  if (gf) gf.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; filt = b.getAttribute('data-f'); showAll = false; gf.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b); }); drawGames(); });
  drawGames();

  // recently opened pages in this subject (recorded by sbl-feedback-widget.js)
  var recent = []; try { recent = JSON.parse(localStorage.getItem('sbl-recent') || '[]'); } catch (e) {}
  recent = recent.filter(function (r) { return r && S.pathRe.test(r.p); }).slice(0, 4);
  document.getElementById('recent').innerHTML = recent.length ? recent.map(function (r) { return '<a class="resume" href="' + esc(r.p) + '"><span class="ic">' + icon(iconFor(r.t)) + '</span><span><b>' + esc(r.t) + '</b><small>' + esc(r.p) + '</small></span></a>'; }).join('')
    : '<p class="empty">Pages you open in ' + esc(S.name) + ' will appear here. ' + (levels[0] && levels[0].start ? 'Start with <a href="' + esc(levels[0].start[1]) + '" style="color:var(--c);font-weight:700">' + esc(levels[0].start[0]) + '</a>.' : '') + '</p>';

  var find = document.getElementById('find'), list = document.getElementById('findList');
  function attach() { if (window.SBLSearch && window.SBLSearch.attach) { window.SBLSearch.attach(find, list, { limit: 10 }); return true; } return false; }
  if (!attach()) { var tries = 0, t = setInterval(function () { if (attach() || ++tries > 20) clearInterval(t); }, 150); }
})();
