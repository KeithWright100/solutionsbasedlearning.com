// public/js/sbl-nav.js
// The shared SBL top menu bar (IB Diploma / IGCSE / Revision & practice /
// Teachers), drawn from ONE list — SBL_NAV below. The Humanities Hub also
// uses this same list for its subject tiles and its sitemap, so adding a
// page or a whole new section (e.g. KS3) means editing SBL_NAV once.
//
// To use on a page:
//   <link rel="stylesheet" href="/css/sbl-nav.css">
//   <div id="sbl-nav"></div>            (optional — otherwise it is added
//                                        at the very top of <body>)
//   <script src="/js/sbl-nav.js"></script>
//
// Item format: [label, href, flag]  flag: 'new' (badge) or 'soon'
// (shown greyed out, not a link). A menu or column with teacher:true is
// only shown to teacher/admin logins; adminOnly:true only to admins.
// The login check here only hides links — middleware.js still decides
// who can actually open each page.

(function () {
  if (window.__sblNavLoaded) return;
  window.__sblNavLoaded = true;

  var SBL_NAV = [
    { key: 'ib', label: 'IB Diploma', color: 'var(--sn-ib)', blurb: 'Geography, Economics, Business Management and History',
      all: ['IB subject menu', '/menu'],
      cols: [
        { title: 'IB Geography', href: '/geography', blurb: 'Core units, options and HL, with case studies, quizzes and games.', items: [
          ['Unit 1: Changing population', '/geography/paper-1/core-1'],
          ['Unit 2: Global climate', '/geography/paper-1/core-2'],
          ['Unit 3: Resource consumption', '/geography/paper-1/core-3'],
          ['Option A: Freshwater', '/geography/paper-1/option-a'],
          ['Option E: Leisure, tourism & sport', '/geography/paper-1/option-e'],
          ['Option F: Food & health', '/geography/paper-1/option-f'],
          ['HL: Power, places & networks', '/geography/paper-2/hl-1'],
          ['HL: Human development & diversity', '/geography/paper-2/hl-2'],
          ['HL: Global risks & resilience', '/geography/paper-2/hl-3'],
          ['Revision guide', '/geography/revision/guide'],
          ['Revise by topic', '/geography/revision/topics'],
          ['Past paper questions', '/geography/revision/paper-questions'],
          ['Exam tips', '/geography/exam-tips']] },
        { title: 'IB Economics', href: '/economics', blurb: 'Microeconomics, macroeconomics and the global economy.', items: [
          ['Overview', '/economics'],
          ['Revise by topic', '/economics/revision/topics'],
          ['Exam tips', '/economics/exam-tips']] },
        { title: 'IB Business Management', href: '/business', blurb: 'All five units, with case studies and paper practice.', items: [
          ['Overview', '/business'],
          ['Revise by topic', '/business/revision/topics'],
          ['Past paper questions', '/business/revision/paper-questions'],
          ['Exam tips', '/business/exam-tips#toolkit-challenge']] },
        { title: 'IB History', blurb: 'Coming soon.', soon: true, items: [
          ['Coming soon', '', 'soon']] }
      ] },
    { key: 'igcse', label: 'IGCSE', color: 'var(--sn-ig)', blurb: 'Edexcel and Cambridge courses',
      all: ['IGCSE subject menu', '/igcse/menu'],
      cols: [
        { title: 'IGCSE Geography', href: '/igcse/geography/learn', blurb: 'Five topics and fieldwork, with lessons, quizzes and past papers.', items: [
          ['Lessons', '/igcse/geography/learn'],
          ['Revise by topic', '/igcse/geography/revision/topics'],
          ['Past paper questions', '/igcse/geography'],
          ['Exam tips', '/igcse/geography/exam-tips'],
          ['Research', '/igcse/geography/research']] },
        { title: 'IGCSE Economics', href: '/igcse/economics/learn', blurb: 'Edexcel lessons and paper practice, plus Cambridge (CIE) revision.', items: [
          ['Edexcel lessons', '/igcse/economics/learn'],
          ['Edexcel revise by topic', '/igcse/economics/revision/topics'],
          ['Edexcel past paper questions', '/igcse/economics'],
          ['Cambridge (CIE) revision', '/igcse/cie-economics', 'new'],
          ['Cambridge specimen papers', '/igcse/cie-economics/past-papers', 'new'],
          ['Exam tips', '/igcse/economics/exam-tips'],
          ['Research', '/igcse/economics/research']] },
        { title: 'IGCSE Business', href: '/igcse/business/learn', blurb: 'All five topics, with lessons, case studies and paper practice.', items: [
          ['Lessons', '/igcse/business/learn'],
          ['Revise by topic', '/igcse/business/revision/topics'],
          ['Past paper questions', '/igcse/business'],
          ['Exam tips', '/igcse/business/exam-tips'],
          ['Research', '/igcse/business/research']] },
        { title: 'IGCSE History', href: '/igcse/history/learn', blurb: 'Superpower relations, Civil rights in the USA, and Russia and the Soviet Union.', items: [
          ['Lessons', '/igcse/history/learn'],
          ['Revise by topic', '/igcse/history/revision/topics'],
          ['Exam tips', '/igcse/history/exam-tips']] }
      ] },
    { key: 'rev', label: 'Revision & practice', color: 'var(--sn-rev)', blurb: 'Revision, past papers and games across every subject',
      cols: [
        { title: 'Revision', items: [
          ['IB revision guides', '/menu'],
          ['IB Geography revision', '/geography/revision'],
          ['IGCSE revision', '/igcse/revision'],
          ['Cambridge Economics revision', '/igcse/cie-economics']] },
        { title: 'Past paper questions', items: [
          ['IB Geography', '/geography/revision/paper-questions'],
          ['IB Business', '/business/revision/paper-questions'],
          ['All IGCSE subjects', '/igcse'],
          ['Cambridge Economics', '/igcse/cie-economics/past-papers']] },
        { title: 'Quizzes', items: [
          ['IB Geography quizzes', '/geography/quizzes']] },
        { title: 'Geography games', href: '/geography/games', items: [
          ['KS3 games', '/geography/games#ks3'],
          ['IGCSE games', '/geography/games#igcse'],
          ['IB Diploma games', '/geography/games#ib']] }
      ] },
    { key: 'tch', label: 'Teachers', color: 'var(--sn-tch)', teacher: true, blurb: 'Only visible to teacher and admin accounts',
      cols: [
        { title: 'My classes', items: [
          ['Teacher dashboard', '/teacher']] },
        { title: 'Admin', adminOnly: true, items: [
          ['Users, groups & subjects', '/admin']] }
      ] }
  ];
  window.SBL_NAV = SBL_NAV;

  var CHEV = '<svg class="sn-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }
  function tag(f) { return f === 'new' ? '<span class="sn-tag sn-tag--new">New</span>' : f === 'soon' ? '<span class="sn-tag sn-tag--soon">Soon</span>' : ''; }
  function item(it) {
    if (it[2] === 'soon' || !it[1]) return '<li><span class="sn-off">' + esc(it[0]) + tag('soon') + '</span></li>';
    return '<li><a href="' + esc(it[1]) + '"><span>' + esc(it[0]) + '</span>' + tag(it[2]) + '</a></li>';
  }

  var role = '';
  function visibleMenus() {
    return SBL_NAV.filter(function (m) { return !m.teacher || role === 'teacher' || role === 'admin'; })
      .map(function (m) {
        return Object.assign({}, m, { cols: m.cols.filter(function (c) { return !c.adminOnly || role === 'admin'; }) });
      });
  }

  var root, barIn, mob, findInput, findList, userBtn, userMenu;

  function build() {
    if (document.querySelector('.sn-root')) return;
    root = document.getElementById('sbl-nav');
    if (!root) { root = document.createElement('div'); document.body.insertBefore(root, document.body.firstChild); }
    root.className = 'sn-root';
    root.innerHTML =
      '<div class="sn-brand"><div class="sn-brand__in">' +
        '<a class="sn-logo" href="/humanities-hub"><b>SBL</b><span>Humanities Hub<small>Solutions Based Learning</small></span></a>' +
        '<span class="sn-brand__spacer"></span><span class="sn-brand__note">IB Diploma &middot; IGCSE &middot; KS3</span>' +
      '</div></div>' +
      '<nav class="sn-bar" aria-label="Main"><div class="sn-bar__in">' +
        '<a class="sn-home" href="/humanities-hub" aria-label="Humanities Hub home"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg></a>' +
        '<span class="sn-menus" style="display:contents"></span>' +
        '<span class="sn-spacer"></span>' +
        '<div class="sn-find"><label><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>' +
          '<input type="search" placeholder="Find a page…" aria-label="Find a page" autocomplete="off"></label><div class="sn-find__list" role="listbox"></div></div>' +
        '<div class="sn-userwrap"><button type="button" class="sn-user" aria-haspopup="true" aria-expanded="false"><i>…</i><span class="sn-uname"></span>' + CHEV + '</button>' +
          '<div class="sn-usermenu"><small class="sn-umail"></small><a href="/humanities-hub">Humanities Hub</a><a href="/">SBL home</a><button type="button" class="sn-logout">Log out</button></div></div>' +
        '<button type="button" class="sn-burger" aria-label="Open menu" aria-expanded="false"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
      '</div></nav>' +
      '<div class="sn-mob"></div>';
    barIn = root.querySelector('.sn-bar__in');
    mob = root.querySelector('.sn-mob');
    findInput = root.querySelector('.sn-find input');
    findList = root.querySelector('.sn-find__list');
    userBtn = root.querySelector('.sn-user');
    userMenu = root.querySelector('.sn-usermenu');
    drawMenus();
    wire();
  }

  function drawMenus() {
    var menus = visibleMenus();
    var holder = root.querySelector('.sn-menus');
    var bar = root.querySelector('.sn-bar');
    holder.innerHTML = '';
    bar.querySelectorAll('.sn-panel').forEach(function (p) { p.remove(); });
    menus.forEach(function (m) {
      var wrap = document.createElement('div');
      wrap.className = 'sn-menu';
      wrap.innerHTML = '<button type="button" class="sn-btn" aria-expanded="false" aria-controls="sn-p-' + m.key + '"><span class="sn-dot" style="background:' + m.color + '"></span>' + esc(m.label) + CHEV + '</button>';
      var p = document.createElement('div');
      p.className = 'sn-panel'; p.id = 'sn-p-' + m.key;
      p.innerHTML = '<div class="sn-panel__in" style="grid-template-columns:repeat(' + m.cols.length + ',minmax(0,1fr))">' +
        '<div class="sn-panel__head"><strong>' + esc(m.label) + '</strong><span>' + esc(m.blurb) + '</span>' +
        (m.all ? '<a href="' + esc(m.all[1]) + '">' + esc(m.all[0]) + ' &rarr;</a>' : '') + '</div>' +
        m.cols.map(function (c) {
          return '<div class="sn-col"><h4>' + (c.href ? '<a href="' + esc(c.href) + '">' + esc(c.title) + '</a>' : esc(c.title)) + '</h4><ul>' + c.items.map(item).join('') + '</ul></div>';
        }).join('') + '</div>';
      holder.appendChild(wrap);
      bar.appendChild(p);
      var btn = wrap.firstChild, timer;
      var hover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
      function open() { closeAll(); btn.setAttribute('aria-expanded', 'true'); p.classList.add('is-open'); }
      btn.addEventListener('click', function () {
        if (hover && !p.classList.contains('is-open')) { open(); return; }
        p.classList.contains('is-open') ? closeAll() : open();
      });
      if (hover) {
        [wrap, p].forEach(function (el) {
          el.addEventListener('mouseenter', function () { clearTimeout(timer); open(); });
          el.addEventListener('mouseleave', function () { timer = setTimeout(closeAll, 200); });
        });
      }
    });
    // phone menu
    mob.innerHTML = menus.map(function (m) {
      return '<details><summary><span class="sn-dot" style="background:' + m.color + '"></span>' + esc(m.label) + CHEV + '</summary><div class="sn-mob__sub">' +
        (m.all ? '<a href="' + esc(m.all[1]) + '"><strong>' + esc(m.all[0]) + '</strong></a>' : '') +
        m.cols.map(function (c) {
          return '<h4>' + esc(c.title) + '</h4>' + c.items.map(function (it) {
            return (it[2] === 'soon' || !it[1]) ? '<span class="sn-off">' + esc(it[0]) + '</span>' : '<a href="' + esc(it[1]) + '"><span>' + esc(it[0]) + '</span>' + tag(it[2]) + '</a>';
          }).join('');
        }).join('') + '</div></details>';
    }).join('');
  }

  function closeAll() {
    root.querySelectorAll('.sn-panel.is-open').forEach(function (x) { x.classList.remove('is-open'); });
    root.querySelectorAll('.sn-btn').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
  }

  // "Find a page" — searches every link in the menus
  function allLinks() {
    var out = [];
    visibleMenus().forEach(function (m) {
      m.cols.forEach(function (c) {
        c.items.forEach(function (it) { if (it[1] && it[2] !== 'soon') out.push({ label: it[0], href: it[1], where: c.title }); });
      });
    });
    return out;
  }
  function runFind() {
    var q = findInput.value.trim().toLowerCase();
    if (!q) { findList.classList.remove('is-open'); return; }
    var words = q.split(/\s+/);
    var hits = allLinks().filter(function (l) {
      var hay = (l.label + ' ' + l.where).toLowerCase();
      return words.every(function (w) { return hay.indexOf(w) !== -1; });
    }).slice(0, 12);
    findList.innerHTML = hits.length ? hits.map(function (h, i) {
      return '<a href="' + esc(h.href) + '"' + (i === 0 ? ' class="is-active"' : '') + '>' + esc(h.label) + '<small>' + esc(h.where) + '</small></a>';
    }).join('') : '<div class="sn-find__none">No matching pages.</div>';
    findList.classList.add('is-open');
  }

  function wire() {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeAll(); userMenu.classList.remove('is-open'); findList.classList.remove('is-open'); }
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.sn-menu') && !e.target.closest('.sn-panel')) closeAll();
      if (!e.target.closest('.sn-userwrap')) { userMenu.classList.remove('is-open'); userBtn.setAttribute('aria-expanded', 'false'); }
      if (!e.target.closest('.sn-find')) findList.classList.remove('is-open');
    });
    root.querySelector('.sn-burger').addEventListener('click', function () {
      var o = root.classList.toggle('is-mob-open');
      this.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
    userBtn.addEventListener('click', function () {
      var o = userMenu.classList.toggle('is-open');
      userBtn.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
    root.querySelector('.sn-logout').addEventListener('click', function () {
      fetch('/api/logout', { method: 'POST', credentials: 'same-origin' }).finally(function () { window.location.href = '/login/'; });
    });
    findInput.addEventListener('input', runFind);
    findInput.addEventListener('focus', runFind);
    findInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { var a = findList.querySelector('a.is-active') || findList.querySelector('a'); if (a) window.location.href = a.getAttribute('href'); }
    });
  }

  function loadSession() {
    fetch('/api/session', { credentials: 'same-origin' })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (!d || !d.loggedIn) { root.querySelector('.sn-userwrap').innerHTML = '<a class="sn-user" href="/login/?redirect=' + encodeURIComponent(location.pathname) + '">Log in</a>'; return; }
        var u = d.user || {};
        role = u.role || '';
        window.SBL_USER = u;
        var name = (u.fullName || u.email || '').trim();
        var first = name.split(/\s+/)[0] || 'Account';
        var initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0].toUpperCase(); }).join('') || '?';
        userBtn.querySelector('i').textContent = initials;
        userBtn.querySelector('.sn-uname').textContent = first;
        root.querySelector('.sn-umail').textContent = u.email || '';
        if (role === 'teacher' || role === 'admin') drawMenus();
        document.dispatchEvent(new CustomEvent('sbl:user', { detail: u }));
      })
      .catch(function () {});
  }

  function start() { build(); loadSession(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
