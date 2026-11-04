/* public/js/sbl-past-papers.js
   Past Paper Library — one script for two pages:
     /admin/past-papers/    (data-mode="admin")   upload, replace and delete files
     /teacher/past-papers/  (data-mode="teacher") find and open files
   Each exam paper has four slots: question paper, markscheme, resource
   booklet / insert, and one other file. Files are stored with the
   existing Lesson Resources system (private 'lesson-resources' bucket,
   sbl_lesson_resources table) under a key such as
   'PAPER|ib-geo|2024-05|P2' — see sql/013_past_paper_files.sql.
   Teacher and admin logins only: api/resources.js refuses students. */
(function () {
  var MODE = (document.body.getAttribute('data-mode') || 'teacher').toLowerCase();
  var ADMIN = MODE === 'admin';
  var PAGE_PATH = ADMIN ? '/admin/past-papers/' : '/teacher/past-papers/';

  var SUBJECTS = [
    { id: 'ib-geo', name: 'IB Geography', board: 'IB' },
    { id: 'ib-econ', name: 'IB Economics', board: 'IB' },
    { id: 'ib-bus', name: 'IB Business Management', board: 'IB' },
    { id: 'ig-geo', name: 'IGCSE Geography', board: 'Edexcel 4GE1' },
    { id: 'ig-econ', name: 'IGCSE Economics', board: 'Edexcel 4EC1' },
    { id: 'ig-bus', name: 'IGCSE Business', board: 'Edexcel 4BS1' }
  ];
  var SLOTS = [
    { key: 'paper_qp', label: 'Question paper' },
    { key: 'paper_ms', label: 'Markscheme' },
    { key: 'paper_rb', label: 'Resource booklet / insert' },
    { key: 'paper_extra', label: 'Other file' }
  ];
  // Papers already used on the site. Any other paper can be added with
  // "Add a paper"; it then stays listed once a file has been uploaded.
  var SEED = {
    'ib-geo': ['2019-05|P2', '2019-05|P3', '2021-05|P1', '2021-05|P2', '2021-05|P3', '2023-05|P1', '2023-05|P2', '2023-05|P3-TZ2',
      '2024-05|P1', '2024-05|P2', '2024-05|P3', '2025-05|P3-TZ1', '2025-05|P3-TZ2', '2025-05|P3-TZ3'],
    'ib-econ': ['2022-05|P1-SL', '2022-05|P1-HL', '2022-05|P2-SL', '2022-05|P2-HL', '2022-05|P3', '2023-05|P1-SL-TZ1', '2023-05|P1-HL-TZ1', '2023-05|P1-SL-TZ2', '2023-05|P1-HL-TZ2', '2023-05|P2-SL', '2023-05|P2-HL', '2023-05|P3'],
    'ib-bus': ['2025-05|P1-TZ2', '2025-05|P2-TZ2', '2025-05|P3'],
    'ig-geo': ['2019-06|P1R', '2019-06|P2R', '2021-06|P1', '2021-06|P2', '2022-06|P1', '2022-06|P2', '2023-06|P1R', '2023-06|P2R', '2025-06|P1'],
    'ig-econ': ['2019-06|P1R', '2019-06|P2R', '2020-01|P1', '2020-01|P2', '2022-06|P2R', '2023-01|P1'],
    'ig-bus': ['2019-06|P1R', '2019-06|P2', '2022-06|P1', '2022-06|P2']
  };
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var files = {};       // key -> { slotKey: {id, fileName, fileSize} }
  var extra = {};       // subject -> [ 'yyyy-mm|code' ] added this session
  var st = { subject: 'ib-geo', q: '' };
  try { var saved = localStorage.getItem('sbl-pp-subject'); if (saved) st.subject = saved; } catch (e) { }

  function $(id) { return document.getElementById(id); }
  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }
  function bytes(n) { if (typeof n !== 'number') return ''; if (n < 1048576) return Math.max(1, Math.round(n / 1024)) + ' KB'; return (n / 1048576).toFixed(1) + ' MB'; }
  function keyOf(subject, sp) { return 'PAPER|' + subject + '|' + sp; }
  function parse(key) { var p = key.split('|'); return { subject: p[1], session: p[2], code: p[3] }; }
  function sessionLabel(s) { var a = s.split('-'); return MONTHS[+a[1] - 1] + ' ' + a[0]; }
  function codeLabel(c) {
    var m = c.split('-'), base = m[0].replace(/^P(\d)(R?)$/, function (_, n, r) { return 'Paper ' + n + (r ? 'R' : ''); });
    return base + (m.length > 1 ? ' (' + m.slice(1).join(', ').replace(/TZ/g, 'Time zone ') + ')' : '');
  }
  function paperLabel(key) { var p = parse(key); return sessionLabel(p.session) + ' · ' + codeLabel(p.code); }
  function showError(msg) { var e = $('pageError'); if (e) { e.textContent = msg || ''; e.style.display = msg ? 'block' : 'none'; } }
  function showNotice(msg) { var e = $('pageNotice'); if (e) { e.textContent = msg || ''; e.style.display = msg ? 'block' : 'none'; if (msg) setTimeout(function () { e.style.display = 'none'; }, 4000); } }
  function post(body) {
    return fetch('/api/admin/resources', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, data: d }; }); });
  }

  function papersFor(subject) {
    var set = {};
    (SEED[subject] || []).concat(extra[subject] || []).forEach(function (sp) { set[keyOf(subject, sp)] = 1; });
    Object.keys(files).forEach(function (k) { if (parse(k).subject === subject) set[k] = 1; });
    return Object.keys(set).sort(function (a, b) {
      var A = parse(a), B = parse(b);
      return A.session === B.session ? (A.code < B.code ? -1 : 1) : (A.session < B.session ? 1 : -1);
    });
  }

  /* ---------- loading ---------- */
  function load() {
    var req = ADMIN
      ? post({ action: 'list' }).then(function (r) {
          if (!r.ok) throw new Error(r.data.error || 'Could not load files.');
          return (r.data.resources || []).filter(function (x) { return /^PAPER\|/.test(x.lessonId); })
            .map(function (x) { return { id: x.id, key: x.lessonId, type: x.resourceType, fileName: x.fileName, fileSize: x.fileSize }; });
        })
      : fetch('/api/resources?papers=1', { credentials: 'same-origin' }).then(function (r) {
          return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'Could not load past papers.'); return d.papers || []; });
        });
    return req.then(function (list) {
      files = {};
      list.forEach(function (x) { (files[x.key] = files[x.key] || {})[x.type] = x; });
      render();
    }).catch(function (err) { showError(err.message); render(); });
  }

  /* ---------- rendering ---------- */
  function render() {
    var tabs = $('ppTabs');
    tabs.innerHTML = SUBJECTS.map(function (s) {
      var n = papersFor(s.id).filter(function (k) { return files[k]; }).length;
      return '<button type="button" data-subject="' + s.id + '"' + (s.id === st.subject ? ' class="is-active"' : '') + '>' + esc(s.name) + ' <span>' + n + '</span></button>';
    }).join('');
    var q = st.q.trim().toLowerCase();
    var list = papersFor(st.subject).filter(function (k) { return !q || paperLabel(k).toLowerCase().indexOf(q) >= 0 || JSON.stringify(files[k] || {}).toLowerCase().indexOf(q) >= 0; });
    var sub = SUBJECTS.filter(function (s) { return s.id === st.subject; })[0];
    $('ppHead').textContent = sub.name + ' · ' + sub.board;
    if (!list.length) { $('ppBody').innerHTML = '<div class="sbl-empty-state">' + (q ? 'No papers match.' : 'No papers yet.') + '</div>'; return; }
    var h = '<table class="sbl-table pp-table"><thead><tr><th>Paper</th>' + SLOTS.map(function (s) { return '<th>' + esc(s.label) + '</th>'; }).join('') + '</tr></thead><tbody>';
    var lastSession = '';
    list.forEach(function (k) {
      var p = parse(k);
      if (p.session !== lastSession) { h += '<tr class="pp-group"><td colspan="' + (SLOTS.length + 1) + '">' + esc(sessionLabel(p.session)) + '</td></tr>'; lastSession = p.session; }
      h += '<tr><td class="pp-paper"><b>' + esc(codeLabel(p.code)) + '</b></td>';
      SLOTS.forEach(function (s) { h += '<td class="pp-slot" data-key="' + esc(k) + '" data-type="' + s.key + '">' + slotHtml(k, s.key) + '</td>'; });
      h += '</tr>';
    });
    $('ppBody').innerHTML = h + '</tbody></table>';
  }
  function openUrl(k, type) { return '/api/resources?lessonId=' + encodeURIComponent(k) + '&open=' + type; }
  function slotHtml(k, type) {
    var f = files[k] && files[k][type];
    if (!ADMIN) {
      return f ? '<a class="pp-file" href="' + openUrl(k, type) + '" target="_blank" rel="noopener" title="' + esc(f.fileName) + '">' + esc(f.fileName) + '</a><small>' + bytes(f.fileSize) + '</small>' : '<span class="pp-none">—</span>';
    }
    if (f) {
      return '<a class="pp-file" href="' + openUrl(k, type) + '" target="_blank" rel="noopener" title="' + esc(f.fileName) + '">' + esc(f.fileName) + '</a><small>' + bytes(f.fileSize) + '</small>' +
        '<div class="pp-actions"><button type="button" class="sbl-btn sbl-btn--secondary sbl-btn--small" data-act="upload">Replace</button><button type="button" class="sbl-btn sbl-btn--secondary sbl-btn--small" data-act="delete">Delete</button></div>';
    }
    return '<span class="pp-none">Not added</span><div class="pp-actions"><button type="button" class="sbl-btn sbl-btn--secondary sbl-btn--small" data-act="upload">Upload</button></div>';
  }

  /* ---------- admin actions ---------- */
  function upload(k, type, file, cell) {
    cell.innerHTML = '<span class="pp-none">Uploading ' + esc(file.name) + '…</span>';
    post({ action: 'create-upload-url', lessonId: k, resourceType: type, fileName: file.name })
      .then(function (r) {
        if (!r.ok) throw new Error(r.data.error || 'Could not prepare the upload.');
        var up = r.data;
        return fetch(up.signedUrl, { method: 'PUT', headers: { 'Content-Type': file.type || 'application/octet-stream' }, body: file })
          .then(function (put) { if (!put.ok) throw new Error('The upload to storage failed (status ' + put.status + ').'); return up.path; });
      })
      .then(function (path) {
        return post({ action: 'confirm-upload', lessonId: k, resourceType: type, fileName: file.name, storagePath: path, fileSize: file.size, contentType: file.type || null });
      })
      .then(function (r) {
        if (!r.ok) throw new Error((r.data.error || 'Could not save this upload.') + (/type|check/i.test(r.data.error || '') ? ' Has sql/013_past_paper_files.sql been run in Supabase?' : ''));
        showNotice('Uploaded ' + file.name + ' to ' + paperLabel(k) + '.');
        return load();
      })
      .catch(function (err) { showError(err.message || 'The upload failed.'); cell.innerHTML = slotHtml(k, type); });
  }
  function del(k, type, cell) {
    var f = files[k] && files[k][type]; if (!f) return;
    if (cell.dataset.arm !== '1') { cell.dataset.arm = '1'; cell.querySelector('[data-act="delete"]').textContent = 'Click again to delete'; return; }
    post({ action: 'delete', id: f.id }).then(function (r) {
      if (!r.ok) throw new Error(r.data.error || 'Could not delete.');
      showNotice('Deleted ' + f.fileName + '.'); return load();
    }).catch(function (err) { showError(err.message); });
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-subject]');
    if (t) { st.subject = t.dataset.subject; try { localStorage.setItem('sbl-pp-subject', st.subject); } catch (x) { } render(); return; }
    var a = e.target.closest('[data-act]'); if (!a || !ADMIN) return;
    var cell = a.closest('.pp-slot'), k = cell.dataset.key, type = cell.dataset.type;
    if (a.dataset.act === 'upload') {
      var inp = document.createElement('input'); inp.type = 'file';
      inp.accept = '.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg';
      inp.addEventListener('change', function () { if (inp.files && inp.files[0]) upload(k, type, inp.files[0], cell); });
      inp.click();
    }
    if (a.dataset.act === 'delete') del(k, type, cell);
  });
  var search = $('ppSearch');
  if (search) search.addEventListener('input', function () { st.q = search.value; render(); });

  var addForm = $('ppAdd');
  if (addForm && ADMIN) {
    $('ppAddSubject').innerHTML = SUBJECTS.map(function (s) { return '<option value="' + s.id + '">' + esc(s.name) + '</option>'; }).join('');
    $('ppAddMonth').innerHTML = MONTHS.map(function (m, i) { return '<option value="' + ('0' + (i + 1)).slice(-2) + '"' + (i === 4 ? ' selected' : '') + '>' + m + '</option>'; }).join('');
    $('ppAddYear').value = new Date().getFullYear();
    addForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var subj = $('ppAddSubject').value, y = String($('ppAddYear').value).trim(), m = $('ppAddMonth').value;
      var n = String($('ppAddPaper').value).trim().toUpperCase(), r = $('ppAddR').checked ? 'R' : '', tz = $('ppAddTz').value;
      if (!/^\d{4}$/.test(y) || !/^[1-6]$/.test(n)) { showError('Enter a four-digit year and a paper number from 1 to 6.'); return; }
      var sp = y + '-' + m + '|P' + n + r + (tz ? '-' + tz : '');
      (extra[subj] = extra[subj] || []).push(sp);
      st.subject = subj; showError(''); showNotice(paperLabel(keyOf(subj, sp)) + ' added. Upload a file to keep it in the list.');
      render();
    });
  }

  /* ---------- start ---------- */
  fetch('/api/session', { credentials: 'same-origin' })
    .then(function (r) { return r.json(); })
    .then(function (d) {
      var role = d && d.user && d.user.role;
      if (!d.loggedIn || (ADMIN ? role !== 'admin' : (role !== 'teacher' && role !== 'admin'))) { window.location.href = '/login/?redirect=' + PAGE_PATH; return; }
      var nm = $('staffName'); if (nm) nm.textContent = d.user.fullName || d.user.email;
      var al = $('adminLink'); if (al && role === 'admin') al.hidden = false;
      load();
    })
    .catch(function () { window.location.href = '/login/?redirect=' + PAGE_PATH; });
})();
