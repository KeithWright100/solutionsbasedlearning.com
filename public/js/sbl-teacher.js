// public/js/sbl-teacher.js
// Teacher "Class Sheet" (/teacher/) — a spreadsheet-style view of the
// students assigned to the signed-in teacher (assignments are made by
// an admin in /admin/ → Approved Users). Rows are students, columns are
// the lessons of the chosen unit; each lesson shows the student's
// Test My Knowledge quiz % and their marks on the lesson's IB-style
// questions. A "Past paper questions" view shows revision PPQ marks.
// Everything fills in automatically from /api/progress — students'
// quiz results and marked answers are saved as they work.
//
// All real authorization is server-side (middleware.js gates the page;
// /api/progress?myStudents=1 and ?studentId= re-check the caller is a
// teacher/admin and, for one student, that the student is theirs).
// The class filter uses each student's Group label (set in /admin/).

(function () {
  var $ = function (id) { return document.getElementById(id); };
  var pageError = $('pageError');

  // Unit views → the lesson config file that lists that unit's lessons.
  var VIEWS = [
    { key: 'u1', label: 'Unit 1: Changing population', src: '/js/sbl-population-lessons.js' },
    { key: 'u2', label: 'Unit 2: Global climate', src: '/js/sbl-climate-lessons.js' },
    { key: 'u3', label: 'Unit 3: Resource consumption and security', src: '/js/sbl-rc-lessons.js' },
    { key: 'fw', label: 'Option: Freshwater', src: '/js/sbl-freshwater-lessons.js' },
    { key: 'lt', label: 'Option: Leisure, tourism and sport', src: '/js/sbl-leisure-lessons.js' },
    { key: 'fh', label: 'Option: Food and health', src: '/js/sbl-fh-lessons.js' },
    { key: 'ppn', label: 'HL: Power, places and networks', src: '/js/sbl-unit4-lessons.js' },
    { key: 'hd', label: 'HL: Human development and diversity', src: '/js/sbl-hd-lessons.js' },
    { key: 'gr', label: 'HL: Global risks and resilience', src: '/js/sbl-gr-lessons.js' },
    { key: 'igeo', label: 'IGCSE Geography (Edexcel)', src: '/js/sbl-igcse-geo-lessons.js' },
    { key: 'iecon', label: 'IGCSE Economics (Edexcel)', src: '/js/sbl-igcse-econ-lessons.js' },
    { key: 'ppq', label: 'Past paper questions (revision)', src: null }
  ];
  var viewLessons = {};   // view key -> [{ id, title }]
  var students = [];
  var current = { cls: '__all', view: 'u1', q: '', subj: '__all' };
  var DAY = 86400000;
  var isAdmin = false;
  var viewing = '';   // admin only: '' = my students, 'all', or a teacher id

  function showError(msg) { pageError.textContent = msg; pageError.classList.add('is-visible'); }
  function esc(str) { var d = document.createElement('div'); d.textContent = str == null ? '' : String(str); return d.innerHTML; }
  function fmtDate(iso, withTime) {
    if (!iso) return '—';
    try { return new Date(iso).toLocaleString('en-GB', withTime ? { dateStyle: 'medium', timeStyle: 'short' } : { day: 'numeric', month: 'short' }); }
    catch (e) { return iso; }
  }
  function band(pct) { return pct == null ? '' : pct >= 70 ? 'cs-good' : pct >= 50 ? 'cs-ok' : 'cs-low'; }
  function pctOf(a, m) { return m ? Math.round(a / m * 100) : null; }

  // ---- Session check / bounce non-teachers ----
  fetch('/api/session')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data.loggedIn || (data.user.role !== 'teacher' && data.user.role !== 'admin')) {
        window.location.href = '/login/?redirect=/teacher/';
        return;
      }
      $('teacherName').textContent = data.user.fullName || data.user.email;
      isAdmin = data.user.role === 'admin';
      if (isAdmin) $('adminLink').hidden = false;
      init();
    })
    .catch(function () { window.location.href = '/login/?redirect=/teacher/'; });

  $('logoutBtn').addEventListener('click', function () {
    fetch('/api/logout', { method: 'POST' }).finally(function () { window.location.href = '/login/'; });
  });

  function init() {
    var vs = $('viewSel');
    VIEWS.forEach(function (v) { var o = document.createElement('option'); o.value = v.key; o.textContent = v.label; vs.appendChild(o); });
    try { var saved = localStorage.getItem('sbl-teacher-view'); if (saved && VIEWS.some(function (v) { return v.key === saved; })) current.view = saved; } catch (e) {}
    vs.value = current.view;
    vs.addEventListener('change', function () { current.view = vs.value; try { localStorage.setItem('sbl-teacher-view', vs.value); } catch (e) {} showView(); });
    $('classSel').addEventListener('change', function () { current.cls = this.value; try { localStorage.setItem('sbl-teacher-class', this.value); } catch (e) {} render(); });
    $('subjSel').addEventListener('change', function () { current.subj = this.value; render(); });
    $('searchBox').addEventListener('input', function () { current.q = this.value.trim().toLowerCase(); render(); });
    $('csvBtn').addEventListener('click', downloadCsv);
    $('drawerClose').addEventListener('click', closeDrawer);
    $('drawerBg').addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });

    $('teacherSel').addEventListener('change', function () {
      viewing = this.value;
      try { localStorage.setItem('sbl-teacher-viewing', viewing); } catch (e) {}
      loadStudents();
    });
    if (isAdmin) { try { viewing = localStorage.getItem('sbl-teacher-viewing') || ''; } catch (e) {} }
    loadStudents();
  }

  var teachersFilled = false;
  function fillTeachers(list) {
    if (!isAdmin || !list || teachersFilled) return;
    teachersFilled = true;
    var sel = $('teacherSel');
    sel.innerHTML = '<option value="">My students</option><option value="all">All students on the site</option>' +
      list.map(function (t) { return '<option value="' + esc(t.id) + '">' + esc(t.name) + '’s students</option>'; }).join('');
    if (!sel.querySelector('option[value="' + String(viewing).replace(/"/g, '') + '"]')) viewing = '';
    sel.value = viewing;
    $('teacherField').hidden = false;
  }

  function loadStudents() {
    $('sheetWrap').innerHTML = '<div class="sbl-empty-state" style="padding:2rem;">Loading students…</div>';
    var url = '/api/progress?myStudents=1&sheet=1' +
      (isAdmin && viewing === 'all' ? '&all=1' : isAdmin && viewing ? '&teacherId=' + encodeURIComponent(viewing) : '');
    fetch(url)
      .then(function (r) {
        if (!r.ok) return r.json().then(function (d) { throw new Error(d.error || 'Could not load your students.'); });
        return r.json();
      })
      .then(function (data) {
        students = data.students || [];
        fillTeachers(data.teachers);
        fillClasses();
        fillSubjects();
        showView();
      })
      .catch(function (err) {
        $('sheetWrap').innerHTML = '';
        showError(err.message || 'Could not load your students. Please refresh the page.');
      });
  }

  function fillClasses() {
    var sel = $('classSel'), groups = {};
    students.forEach(function (s) { groups[s.groupName || ''] = true; });
    var names = Object.keys(groups).filter(Boolean).sort();
    sel.innerHTML = '<option value="__all">All my students (' + students.length + ')</option>' +
      names.map(function (g) {
        var n = students.filter(function (s) { return s.groupName === g; }).length;
        return '<option value="' + esc(g) + '">' + esc(g) + ' (' + n + ')</option>';
      }).join('') +
      (groups[''] && names.length ? '<option value="__none">No class set</option>' : '');
    current.cls = '__all';
    try { var saved = localStorage.getItem('sbl-teacher-class'); if (saved && sel.querySelector('option[value="' + saved.replace(/"/g, '') + '"]')) sel.value = saved; } catch (e) {}
    current.cls = sel.value;
  }

  // Subject filter — only shown when this teacher teaches the students
  // more than one subject (subjects come from Admin → Subjects & teachers).
  function fillSubjects() {
    var set = {};
    students.forEach(function (s) { (s.subjects || []).forEach(function (x) { set[x] = true; }); });
    var names = Object.keys(set).sort();
    var wrap = $('subjField'), sel = $('subjSel');
    if (names.length < 2) { wrap.hidden = true; current.subj = '__all'; return; }
    wrap.hidden = false;
    sel.innerHTML = '<option value="__all">All my subjects</option>' + names.map(function (n) { return '<option>' + esc(n) + '</option>'; }).join('');
  }

  // ---- lesson columns for a unit (loads that unit's lesson file once) ----
  var loading = {};
  function lessonsFor(view) {
    if (viewLessons[view.key]) return Promise.resolve(viewLessons[view.key]);
    if (loading[view.key]) return loading[view.key];
    loading[view.key] = new Promise(function (resolve) {
      window.SBL_LESSONS = window.SBL_LESSONS || {};
      var before = {}; Object.keys(window.SBL_LESSONS).forEach(function (k) { before[k] = true; });
      var prevOrder = window.SBL_LESSON_ORDER;
      window.SBL_LESSON_ORDER = null;
      var s = document.createElement('script');
      s.src = view.src;
      s.onload = function () {
        var added = Object.keys(window.SBL_LESSONS).filter(function (k) { return !before[k]; });
        var order = Array.isArray(window.SBL_LESSON_ORDER) ? window.SBL_LESSON_ORDER.filter(function (k) { return added.indexOf(k) !== -1; }) : [];
        added.forEach(function (k) { if (order.indexOf(k) === -1) order.push(k); });
        window.SBL_LESSON_ORDER = prevOrder;
        viewLessons[view.key] = order.map(function (id) { var l = window.SBL_LESSONS[id] || {}; return { id: id, title: l.title || id }; });
        resolve(viewLessons[view.key]);
      };
      s.onerror = function () { viewLessons[view.key] = []; resolve([]); };
      document.head.appendChild(s);
    });
    return loading[view.key];
  }

  function ppqColumns() {
    var seen = {};
    students.forEach(function (s) {
      Object.keys(s.cells || {}).forEach(function (id) {
        var c = s.cells[id];
        if (id.indexOf('PPQ:') !== 0 || !c.ibCount) return;
        if (c.page && c.page.indexOf('/geography/') === -1) return; // keep the trial to Geography
        seen[id] = true;
      });
    });
    return Object.keys(seen).sort().map(function (id) { return { id: id, title: id.slice(4) }; });
  }

  var cols = [];
  function showView() {
    var view = VIEWS.filter(function (v) { return v.key === current.view; })[0];
    if (view.key === 'ppq') { cols = ppqColumns(); render(); return; }
    $('sheetWrap').innerHTML = '<div class="sbl-empty-state" style="padding:2rem;">Loading lessons…</div>';
    lessonsFor(view).then(function (list) { if (current.view === view.key) { cols = list; render(); } });
  }

  function visibleStudents() {
    return students.filter(function (s) {
      if (current.cls === '__none' && s.groupName) return false;
      if (current.cls !== '__all' && current.cls !== '__none' && s.groupName !== current.cls) return false;
      if (current.subj !== '__all' && (s.subjects || []).indexOf(current.subj) === -1) return false;
      if (current.q && (s.fullName || '').toLowerCase().indexOf(current.q) === -1 && (s.email || '').toLowerCase().indexOf(current.q) === -1) return false;
      return true;
    });
  }

  function rowSummary(s) {
    var qSum = 0, qN = 0, aw = 0, mx = 0;
    cols.forEach(function (c) {
      var cell = (s.cells || {})[c.id];
      if (!cell) return;
      if (cell.tmk != null) { qSum += cell.tmk; qN++; }
      if (cell.ibMax) { aw += cell.ibAwarded; mx += cell.ibMax; }
    });
    return { quiz: qN ? Math.round(qSum / qN) : null, ppq: pctOf(aw, mx), ppqText: mx ? aw + '/' + mx : '' };
  }

  function flagsFor(s) {
    var f = [];
    var last = s.lastUpdated ? new Date(s.lastUpdated).getTime() : 0;
    if (!last) f.push(['No activity yet', 'warn']);
    else if (Date.now() - last > 7 * DAY) f.push(['Inactive ' + Math.floor((Date.now() - last) / DAY) + ' days', 'warn']);
    if (s.quizAvgPct != null && s.quizAvgPct < 50) f.push(['Quiz avg ' + s.quizAvgPct + '%', 'low']);
    if (s.ibAvgPct != null && s.ibAvgPct < 50) f.push(['PPQ avg ' + s.ibAvgPct + '%', 'low']);
    return f;
  }

  function render() {
    var list = visibleStudents();
    var isPPQ = current.view === 'ppq';
    var wrap = $('sheetWrap');
    renderStats(list);

    if (!students.length) {
      wrap.innerHTML = '<div class="sbl-empty-state" style="padding:2rem;">No students are assigned to you yet — ask your admin to assign some from the Admin Dashboard.</div>';
      $('sheetNote').textContent = ''; return;
    }
    if (!cols.length) {
      wrap.innerHTML = '<div class="sbl-empty-state" style="padding:2rem;">' + (isPPQ ? 'No past paper questions have been marked yet. They appear here automatically when your students submit revision answers for marking.' : 'No lessons found for this unit.') + '</div>';
      $('sheetNote').textContent = ''; return;
    }

    var h1 = '<tr><th class="cs-name" rowspan="2">Student</th>';
    var h2 = '<tr>';
    cols.forEach(function (c, i) {
      var num = isPPQ ? 'PPQ' : 'L' + (i + 1);
      h1 += '<th class="cs-lessonhead cs-groupstart" colspan="' + (isPPQ ? 1 : 2) + '" title="' + esc(c.title) + '"><b>' + num + '</b>' + esc(c.title.length > 60 ? c.title.slice(0, 58) + '…' : c.title) + '</th>';
      h2 += isPPQ ? '<th class="cs-groupstart">Marks</th>' : '<th class="cs-groupstart">Quiz</th><th>PPQ</th>';
    });
    h1 += (isPPQ ? '' : '<th class="cs-groupstart" rowspan="2">Quiz avg</th>') + '<th rowspan="2"' + (isPPQ ? ' class="cs-groupstart"' : '') + '>PPQ avg</th><th rowspan="2">Last active</th><th rowspan="2">Flags</th></tr>';
    h2 += '</tr>';

    var body = '';
    list.forEach(function (s) {
      var sub = viewing === 'all' && s.assignments && s.assignments.length
        ? [s.groupName].concat(s.assignments.map(function (a) { return a.subject + ' – ' + a.teacher; })).filter(Boolean).join(' · ')
        : [s.groupName].concat(s.subjects || []).filter(Boolean).join(' · ');
      var r = '<tr><td class="cs-name"><button type="button" class="cs-who" data-student="' + esc(s.id) + '" title="See all of this student’s work">' + esc(s.fullName || s.email) + '</button><small>' + esc(sub) + '</small></td>';
      cols.forEach(function (c) {
        var cell = (s.cells || {})[c.id];
        var data = ' data-s="' + esc(s.id) + '" data-l="' + esc(c.id) + '"';
        if (!isPPQ) {
          if (cell && cell.tmk != null) {
            var tip = 'Test My Knowledge ' + cell.tmk + '%' + (cell.sr != null ? ' · Spaced Retrieval ' + cell.sr + '%' : '');
            r += '<td class="cs-cell cs-groupstart ' + band(cell.tmk) + '"' + data + ' title="' + tip + '">' + cell.tmk + '%</td>';
          } else if (cell && cell.sr != null) {
            r += '<td class="cs-cell cs-groupstart ' + band(cell.sr) + '"' + data + ' title="Spaced Retrieval only">SR ' + cell.sr + '%</td>';
          } else r += '<td class="cs-cell cs-empty cs-groupstart">·</td>';
        }
        if (cell && cell.ibMax) {
          var p = pctOf(cell.ibAwarded, cell.ibMax);
          r += '<td class="cs-cell ' + (isPPQ ? 'cs-groupstart ' : '') + band(p) + '"' + data + ' title="' + cell.ibCount + ' question(s) marked · ' + p + '%">' + cell.ibAwarded + '/' + cell.ibMax + '</td>';
        } else r += '<td class="cs-cell cs-empty' + (isPPQ ? ' cs-groupstart' : '') + '">·</td>';
      });
      var sum = rowSummary(s);
      if (!isPPQ) r += '<td class="cs-sum cs-groupstart ' + band(sum.quiz) + '">' + (sum.quiz == null ? '—' : sum.quiz + '%') + '</td>';
      r += '<td class="cs-sum ' + (isPPQ ? 'cs-groupstart ' : '') + band(sum.ppq) + '" title="' + esc(sum.ppqText) + '">' + (sum.ppq == null ? '—' : sum.ppq + '%') + '</td>';
      r += '<td>' + fmtDate(s.lastUpdated) + '</td>';
      r += '<td style="text-align:left">' + flagsFor(s).map(function (f) { return '<span class="cs-flag' + (f[1] === 'warn' ? ' cs-flag--warn' : '') + '">' + esc(f[0]) + '</span>'; }).join('') + '</td></tr>';
      body += r;
    });
    if (!list.length) body = '<tr><td class="cs-name" style="color:var(--slate)">No students match.</td></tr>';

    wrap.innerHTML = '<table class="cs-sheet"><thead>' + h1 + h2 + '</thead><tbody>' + body + '</tbody></table>';
    var first = wrap.querySelector('thead tr:first-child th:nth-child(2)');
    if (first) wrap.style.setProperty('--cs-head1', first.offsetHeight + 'px');
    wrap.querySelectorAll('button.cs-who').forEach(function (b) {
      b.addEventListener('click', function () { openStudent(b.dataset.student); });
    });
    wrap.querySelectorAll('td.cs-cell[data-s]').forEach(function (td) {
      td.tabIndex = 0;
      td.addEventListener('click', function () { openDetail(td.dataset.s, td.dataset.l); });
      td.addEventListener('keydown', function (e) { if (e.key === 'Enter') openDetail(td.dataset.s, td.dataset.l); });
    });
    $('sheetNote').textContent = isPPQ
      ? 'Each column is a revision topic. Marks show the latest attempt at each question in that topic.'
      : 'PPQ shows marks on the lesson’s IB-style questions (latest attempt at each question). Flags use all units, not just this one.';
  }

  function renderStats(list) {
    var active = 0, qSum = 0, qN = 0, aw = 0, mx = 0, flagged = 0;
    list.forEach(function (s) {
      if (s.lastUpdated && Date.now() - new Date(s.lastUpdated).getTime() <= 7 * DAY) active++;
      cols.forEach(function (c) {
        var cell = (s.cells || {})[c.id]; if (!cell) return;
        if (cell.tmk != null) { qSum += cell.tmk; qN++; }
        if (cell.ibMax) { aw += cell.ibAwarded; mx += cell.ibMax; }
      });
      if (flagsFor(s).length) flagged++;
    });
    var stat = function (b, t) { return '<div class="cs-stat"><b>' + b + '</b><span>' + t + '</span></div>'; };
    $('stats').innerHTML =
      stat(list.length, 'students') +
      stat(active, 'active in the last 7 days') +
      (current.view === 'ppq' ? '' : stat(qN ? Math.round(qSum / qN) + '%' : '—', 'average quiz score (this unit)')) +
      stat(mx ? Math.round(aw / mx * 100) + '%' : '—', 'average PPQ mark (this view)') +
      stat(flagged, 'students flagged');
  }

  // ---- detail drawer: one student, one lesson ----
  // ---- whole-student overview: every lesson and PPQ topic they've saved ----
  var UNIT_PREFIX = [['IGEN', 'iecon'], ['IGCO', 'igeo'], ['IGDV', 'igeo'], ['IGHZ', 'igeo'], ['IGCF', 'igeo'], ['IGRU', 'igeo'], ['IGEC', 'igeo'], ['IGRF', 'igeo'], ['CP', 'u1'], ['CC', 'u2'], ['RC', 'u3'], ['FW', 'fw'], ['LT', 'lt'], ['FH', 'fh'], ['PPN', 'ppn'], ['HD', 'hd'], ['GR', 'gr']];
  function viewOf(id) {
    if (id.indexOf('PPQ:') === 0) return 'ppq';
    for (var i = 0; i < UNIT_PREFIX.length; i++) if (id.indexOf(UNIT_PREFIX[i][0]) === 0) return UNIT_PREFIX[i][1];
    return 'other';
  }
  function openStudent(studentId) {
    var s = students.filter(function (x) { return x.id === studentId; })[0] || {};
    $('drawerBody').innerHTML = '<h2 id="drawerTitle">' + esc(s.fullName || s.email) + '</h2><div class="cs-sub">All units · loading…</div>';
    $('drawer').classList.add('is-open'); $('drawerBg').classList.add('is-open'); $('drawer').setAttribute('aria-hidden', 'false');
    $('drawerClose').focus();
    var unitViews = VIEWS.filter(function (v) { return v.src; });
    Promise.all([
      fetch('/api/progress?studentId=' + encodeURIComponent(studentId)).then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'Could not load.'); return d; }); }),
      Promise.all(unitViews.map(lessonsFor))
    ]).then(function (res) {
      var d = res[0], lessons = d.lessons || {}, updated = d.updated || {};
      var titles = {}, order = {};
      unitViews.forEach(function (v, vi) { (viewLessons[v.key] || []).forEach(function (l, li) { titles[l.id] = l.title; order[l.id] = vi * 1000 + li; }); });
      var ids = Object.keys(lessons).sort(function (a, b) {
        var oa = order[a] == null ? 99999 : order[a], ob = order[b] == null ? 99999 : order[b];
        return oa - ob || a.localeCompare(b);
      });
      var html = '<h2 id="drawerTitle">' + esc(s.fullName || s.email) + '</h2><div class="cs-sub">' + esc(s.email || '') +
        (s.assignments && s.assignments.length ? ' · ' + esc(s.assignments.map(function (a) { return a.subject + ' – ' + a.teacher; }).join(', ')) : '') + '</div>';
      if (!ids.length) html += '<div class="cs-block">No saved work yet.</div>';
      var lastView = null;
      ids.forEach(function (id) {
        var v = viewOf(id);
        if (v !== lastView) {
          if (lastView !== null) html += '</tbody></table></div>';
          var vl = (VIEWS.filter(function (x) { return x.key === v; })[0] || { label: 'Other' }).label;
          html += '<div class="cs-block"><h3>' + esc(vl) + '</h3><table class="cs-mini"><thead><tr><th>Lesson</th><th>Quiz</th><th>SR</th><th>PPQ</th></tr></thead><tbody>';
          lastView = v;
        }
        var L = lessons[id] || {}, aw = 0, mx = 0;
        Object.keys(L).forEach(function (k) { var a = L[k]; if (k.indexOf('ib_q') === 0 && a && typeof a.awarded === 'number' && a.marks) { aw += a.awarded; mx += a.marks; } });
        var t = id.indexOf('PPQ:') === 0 ? id.slice(4) : (titles[id] || id);
        var tmk = L.quiz_test_my_knowledge && L.quiz_test_my_knowledge.pct, sr = L.quiz_spaced_retrieval && L.quiz_spaced_retrieval.pct;
        html += '<tr data-lesson="' + esc(id) + '" data-title="' + esc(t) + '"><td>' + esc(t.length > 70 ? t.slice(0, 68) + '…' : t) + '<small>' + fmtDate(updated[id]) + '</small></td>' +
          '<td class="' + band(tmk) + '">' + (tmk == null ? '·' : tmk + '%') + '</td>' +
          '<td class="' + band(sr) + '">' + (sr == null ? '·' : sr + '%') + '</td>' +
          '<td class="' + band(pctOf(aw, mx)) + '">' + (mx ? aw + '/' + mx : '·') + '</td></tr>';
      });
      if (lastView !== null) html += '</tbody></table></div>';
      html += '<p class="cs-sub">Click a lesson to see answers and feedback.</p>';
      $('drawerBody').innerHTML = html;
      $('drawerBody').querySelectorAll('tr[data-lesson]').forEach(function (tr) {
        tr.addEventListener('click', function () { openDetail(studentId, tr.dataset.lesson, tr.dataset.title, true); });
      });
    }).catch(function (err) { $('drawerBody').innerHTML += '<div class="cs-block">' + esc(err.message) + '</div>'; });
  }

  function openDetail(studentId, lessonId, titleOverride, fromOverview) {
    var s = students.filter(function (x) { return x.id === studentId; })[0] || {};
    var col = cols.filter(function (c) { return c.id === lessonId; })[0] || { title: titleOverride || lessonId };
    backTo = fromOverview ? studentId : null;
    $('drawerBody').innerHTML = '<h2 id="drawerTitle">' + esc(s.fullName || s.email) + '</h2><div class="cs-sub">' + esc(col.title) + '</div><p class="cs-sub">Loading…</p>';
    $('drawer').classList.add('is-open'); $('drawerBg').classList.add('is-open'); $('drawer').setAttribute('aria-hidden', 'false');
    $('drawerClose').focus();
    fetch('/api/progress?studentId=' + encodeURIComponent(studentId) + '&lessonId=' + encodeURIComponent(lessonId))
      .then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'Could not load.'); return d; }); })
      .then(function (d) { renderDetail(s, col, (d.lessons || {})[lessonId] || {}); })
      .catch(function (err) { $('drawerBody').innerHTML += '<div class="cs-block">' + esc(err.message) + '</div>'; });
  }

  function quizBlock(name, q) {
    if (!q) return '';
    return '<div class="cs-block"><span class="cs-mark">' + (q.pct != null ? q.pct + '%' : '') + '</span><h3>' + name + '</h3>' +
      '<p>' + (q.score != null ? q.score + ' / ' + q.total + ' correct' : '') + (q.band ? ' · ' + esc(q.band) : '') + '</p>' +
      '<p><b>Completed:</b> ' + fmtDate(q.completedAt, true) + '</p></div>';
  }

  var backTo = null;
  function renderDetail(s, col, data) {
    var html = (backTo ? '<button type="button" class="cs-back" id="csBack">← All of ' + esc(s.fullName || 'this student') + '’s work</button>' : '') +
      '<h2 id="drawerTitle">' + esc(s.fullName || s.email) + '</h2><div class="cs-sub">' + esc(col.title) + '</div>';
    html += quizBlock('Test My Knowledge', data.quiz_test_my_knowledge);
    html += quizBlock('Spaced Retrieval', data.quiz_spaced_retrieval);
    if (Array.isArray(data.checklist) && data.checklist.length) {
      var ticked = data.checklist.filter(Boolean).length;
      html += '<div class="cs-block"><span class="cs-mark">' + ticked + '/' + data.checklist.length + '</span><h3>Success criteria ticked</h3></div>';
    }
    if (data.readinessCompleted) html += '<div class="cs-block"><h3>Ready for the Classroom</h3><p>Completed ' + fmtDate(data.readinessCompletedAt, true) + '</p></div>';
    var keys = Object.keys(data).filter(function (k) { return k.indexOf('ib_q') === 0; })
      .sort(function (a, b) { return (+a.slice(4)) - (+b.slice(4)); });
    keys.forEach(function (k) {
      var a = data[k] || {};
      var p = a.marks ? pctOf(a.awarded || 0, a.marks) : null;
      html += '<div class="cs-block"><span class="cs-mark ' + band(p) + '" style="padding:0 6px;border-radius:6px">' + (a.awarded != null ? a.awarded : '—') + ' / ' + (a.marks || '?') + '</span>' +
        '<h3>Question ' + (+k.slice(4) + 1) + '</h3>' +
        '<p>' + esc(a.question) + '</p>' +
        '<p><b>Marked:</b> ' + fmtDate(a.at, true) + '</p>' +
        '<details><summary>Student’s answer</summary><div class="cs-answer">' + esc(a.answer || '(no text)') + '</div></details>' +
        '<details><summary>Feedback given</summary>' +
          (a.whyThisMark ? '<p><b>Why this mark:</b> ' + esc(a.whyThisMark) + '</p>' : '') +
          (a.whatWasDoneWell ? '<p><b>Done well:</b> ' + esc(a.whatWasDoneWell) + '</p>' : '') +
          (a.whatIsMissing ? '<p><b>Missing:</b> ' + esc(a.whatIsMissing) + '</p>' : '') +
          (a.nextStep ? '<p><b>Next step:</b> ' + esc(a.nextStep) + '</p>' : '') +
        '</details></div>';
    });
    if (html.indexOf('cs-block') === -1) html += '<div class="cs-block">Nothing saved for this lesson yet.</div>';
    $('drawerBody').innerHTML = html;
    if (backTo) { var id = backTo; $('csBack').addEventListener('click', function () { openStudent(id); }); }
  }

  function closeDrawer() {
    $('drawer').classList.remove('is-open'); $('drawerBg').classList.remove('is-open'); $('drawer').setAttribute('aria-hidden', 'true');
  }

  // ---- CSV of the current view ----
  function downloadCsv() {
    var isPPQ = current.view === 'ppq';
    var q = function (v) { v = v == null ? '' : String(v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
    var head = ['Student', 'Email', 'Class'];
    cols.forEach(function (c, i) {
      var n = isPPQ ? c.title : 'L' + (i + 1) + ' ' + c.title;
      if (!isPPQ) head.push(n + ' — Quiz %');
      head.push(n + ' — PPQ marks');
    });
    if (!isPPQ) head.push('Quiz avg %');
    head.push('PPQ avg %', 'Last active');
    var lines = [head.map(q).join(',')];
    visibleStudents().forEach(function (s) {
      var row = [s.fullName, s.email, s.groupName || ''];
      cols.forEach(function (c) {
        var cell = (s.cells || {})[c.id] || {};
        if (!isPPQ) row.push(cell.tmk != null ? cell.tmk : '');
        row.push(cell.ibMax ? cell.ibAwarded + '/' + cell.ibMax : '');
      });
      var sum = rowSummary(s);
      if (!isPPQ) row.push(sum.quiz == null ? '' : sum.quiz);
      row.push(sum.ppq == null ? '' : sum.ppq, s.lastUpdated ? s.lastUpdated.slice(0, 10) : '');
      lines.push(row.map(q).join(','));
    });
    var view = VIEWS.filter(function (v) { return v.key === current.view; })[0];
    var name = 'SBL class sheet - ' + (current.cls === '__all' ? 'all students' : current.cls) + ' - ' + view.label + '.csv';
    var blob = new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name.replace(/[\\/:*?"<>|]/g, '-');
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
})();
