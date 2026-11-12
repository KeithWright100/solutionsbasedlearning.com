// public/js/sbl-admin.js
// Client-side logic for the admin dashboard (/admin/). All real
// authorization happens server-side (middleware.js gates the page
// itself; every /api/admin/* endpoint independently re-checks the
// caller is an active admin) — this script only renders data and
// calls those endpoints. It never trusts anything client-side as a
// security boundary.

(function () {
  var state = { pending: [], rejected: [], users: [], teachers: [], feedback: [] };


  // In-page confirm box. Used instead of the browser's confirm(), which
  // Chrome lets you switch off ("Don't allow this site to prompt again")
  // — after that every confirm() silently answers Cancel, so buttons
  // seemed to do nothing. Resolves to the chosen value (null = cancel).
  function sblAsk(message, buttons, isHtml) {
    buttons = buttons || [[true, 'Yes'], [null, 'Cancel']];
    return new Promise(function (resolve) {
      var wrap = document.createElement('div');
      wrap.className = 'sbl-ask-backdrop';
      wrap.innerHTML = '<div class="sbl-ask" role="dialog" aria-modal="true"><div class="sbl-ask-msg"></div><div class="sbl-ask-btns"></div></div>';
      var p = wrap.querySelector('.sbl-ask-msg');
      if (isHtml) p.innerHTML = message; else p.textContent = message;
      var row = wrap.querySelector('.sbl-ask-btns');
      function close(v) { document.removeEventListener('keydown', onKey); wrap.remove(); resolve(v); }
      function onKey(e) { if (e.key === 'Escape') close(null); }
      buttons.forEach(function (b, i) {
        var el = document.createElement('button');
        el.type = 'button';
        el.className = 'sbl-btn sbl-btn--small ' + (b[0] === null ? 'sbl-btn--secondary' : 'sbl-btn--primary');
        el.textContent = b[1];
        el.addEventListener('click', function () { close(b[0]); });
        row.appendChild(el);
      });
      wrap.addEventListener('click', function (e) { if (e.target === wrap) close(null); });
      document.addEventListener('keydown', onKey);
      document.body.appendChild(wrap);
      row.querySelector('button').focus();
    });
  }

  var pageError = document.getElementById('pageError');
  var pageNotice = document.getElementById('pageNotice');
  // Messages float at the top of the screen; click one to dismiss it.
  [pageError, pageNotice].forEach(function (el) { el.addEventListener('click', function () { el.classList.remove('is-visible'); }); });

  function showError(msg) {
    pageNotice.classList.remove('is-visible');
    pageError.textContent = msg;
    pageError.classList.add('is-visible');
  }
  function showNotice(msg) {
    pageError.classList.remove('is-visible');
    pageNotice.textContent = msg;
    pageNotice.classList.add('is-visible');
  }
  function clearMessages() {
    pageError.classList.remove('is-visible');
    pageNotice.classList.remove('is-visible');
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  function formatDate(iso) {
    if (!iso) return '—';
    try {
      return new Date(iso).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' });
    } catch (e) { return iso; }
  }

  // ---- Search (name/email filter, shared by Pending/Approved/Rejected) ----
  // Purely a client-side filter over data already loaded by loadData() —
  // no extra request per keystroke. Matches if the query is a substring
  // of any given field, case-insensitive.
  function matchesSearch(query, fields) {
    var q = (query || '').trim().toLowerCase();
    if (!q) return true;
    return fields.some(function (f) { return (f || '').toLowerCase().indexOf(q) !== -1; });
  }

  function searchValue(inputId) {
    var el = document.getElementById(inputId);
    return el ? el.value : '';
  }

  function noMatchesMessage(query, defaultMessage) {
    var q = (query || '').trim();
    return q ? 'No matches for “' + q + '”.' : defaultMessage;
  }

  // ---- Session check / bounce non-admins ----
  fetch('/api/session')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data.loggedIn || data.user.role !== 'admin') {
        window.location.href = '/login/?redirect=/admin/';
        return;
      }
      document.getElementById('adminName').textContent = data.user.fullName || data.user.email;
      loadData();
    })
    .catch(function () {
      window.location.href = '/login/?redirect=/admin/';
    });

  document.getElementById('logoutBtn').addEventListener('click', function () {
    fetch('/api/logout', { method: 'POST' }).finally(function () {
      window.location.href = '/login/';
    });
  });

  // ---- Tabs ----
  var tabs = document.querySelectorAll('.sbl-tab');
  var panels = {
    pending: document.getElementById('panelPending'),
    approved: document.getElementById('panelApproved'),
    rejected: document.getElementById('panelRejected'),
    feedback: document.getElementById('panelFeedback'),
    usage: document.getElementById('panelUsage')
  };
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('is-active'); });
      tab.classList.add('is-active');
      Object.keys(panels).forEach(function (key) { panels[key].style.display = 'none'; });
      panels[tab.getAttribute('data-tab')].style.display = 'block';
      if (tab.getAttribute('data-tab') === 'usage' && !usageLoaded) loadUsage();
    });
  });

  // ---- Usage tab (loaded the first time it's opened) ----
  var usageLoaded = false;
  document.getElementById('usageRefresh').addEventListener('click', loadUsage);
  function loadUsage() {
    usageLoaded = true;
    var box = document.getElementById('usageBody');
    box.innerHTML = '<div class="sbl-empty-state">Loading usage…</div>';
    fetch('/api/admin/data?usage=1')
      .then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'Could not load usage.'); return d; }); })
      .then(renderUsage)
      .catch(function (err) { box.innerHTML = '<div class="sbl-empty-state">' + escapeHtml(err.message) + '</div>'; });
  }
  function renderUsage(d) {
    var T = d.totals || {};
    var stat = function (b, t) { return '<div class="us-stat"><b>' + b + '</b><span>' + t + '</span></div>'; };
    var pc = function (v) { return v == null ? '—' : v + '%'; };
    var html = '<div class="us-stats">' +
      stat(T.students, 'student accounts') +
      stat(T.active7, 'active in the last 7 days') +
      stat(T.active30, 'active in the last 30 days') +
      stat(T.quizzes30, 'quizzes in the last 30 days (' + T.quizzes + ' total)') +
      stat(T.ppqs30, 'PPQs marked in the last 30 days (' + T.ppqs + ' total)') + '</div>';
    var max = 1;
    (d.weeks || []).forEach(function (w) { max = Math.max(max, w.quizzes, w.ppqs); });
    html += '<h3 class="us-h">Last 8 weeks <span class="sbl-muted" style="text-transform:none;letter-spacing:0;">— <span style="color:var(--teal)">■</span> quizzes &nbsp;<span style="color:#f59e0b">■</span> PPQs marked</span></h3><div class="us-bars">' +
      (d.weeks || []).map(function (w) {
        var label = w.weeksAgo === 0 ? 'This wk' : w.weeksAgo + 'w ago';
        return '<div class="us-bar" title="' + w.quizzes + ' quizzes, ' + w.ppqs + ' PPQs, ' + w.activeStudents + ' students"><div class="pair">' +
          '<i style="height:' + Math.round(w.quizzes / max * 100) + '%"></i><i class="ppq" style="height:' + Math.round(w.ppqs / max * 100) + '%"></i></div>' +
          '<span>' + w.activeStudents + ' stu</span><span>' + label + '</span></div>';
      }).join('') + '</div>';
    html += '<h3 class="us-h">By unit</h3><table class="sbl-table"><thead><tr><th>Unit</th><th>Students</th><th>Quizzes</th><th>Avg quiz</th><th>Avg PPQ</th></tr></thead><tbody>' +
      (d.units || []).map(function (u) { return '<tr><td>' + escapeHtml(u.name) + '</td><td>' + u.students + '</td><td>' + u.quizzes + '</td><td>' + pc(u.quizAvg) + '</td><td>' + pc(u.ppqAvg) + '</td></tr>'; }).join('') +
      '</tbody></table>';
    var lessonRows = function (list) {
      return (list || []).map(function (l) { return '<tr><td>' + escapeHtml(l.id.indexOf('PPQ:') === 0 ? l.id.slice(4) : l.id) + '<div class="sbl-muted">' + escapeHtml(l.unit) + '</div></td><td>' + l.students + '</td><td>' + pc(l.quizAvg) + '</td><td>' + pc(l.ppqAvg) + '</td></tr>'; }).join('') ||
        '<tr><td colspan="4" class="sbl-muted">Not enough data yet.</td></tr>';
    };
    html += '<div class="us-grid2"><div><h3 class="us-h">Most used lessons</h3><table class="sbl-table"><thead><tr><th>Lesson</th><th>Students</th><th>Avg quiz</th><th>Avg PPQ</th></tr></thead><tbody>' + lessonRows(d.topLessons) + '</tbody></table></div>' +
      '<div><h3 class="us-h">Lowest quiz scores <span class="sbl-muted" style="text-transform:none;letter-spacing:0;">(3+ quizzes)</span></h3><table class="sbl-table"><thead><tr><th>Lesson</th><th>Students</th><th>Avg quiz</th><th>Avg PPQ</th></tr></thead><tbody>' + lessonRows(d.weakestLessons) + '</tbody></table></div></div>';
    document.getElementById('usageBody').innerHTML = html;
  }

  // ---- Search boxes: filter instantly as you type, no server call ----
  document.getElementById('pendingSearch').addEventListener('input', renderPending);
  document.getElementById('approvedSearch').addEventListener('input', renderApproved);
  document.getElementById('rejectedSearch').addEventListener('input', renderRejected);

  // ---- Data loading + rendering ----
  function loadData() {
    fetch('/api/admin/data')
      .then(function (r) {
        if (!r.ok) throw new Error('load-failed');
        return r.json();
      })
      .then(function (data) {
        state.pending = data.pending || [];
        state.rejected = data.rejected || [];
        state.users = data.users || [];
        state.teachers = data.teachers || [];
        state.feedback = data.feedback || [];
        render();
      })
      .catch(function () {
        showError('Could not load dashboard data. Please refresh the page.');
      });
  }

  function render() {
    document.getElementById('countPending').textContent = state.pending.length;
    document.getElementById('countRejected').textContent = state.rejected.length;
    document.getElementById('countApproved').textContent = state.users.filter(function (u) { return u.role !== 'admin'; }).length;
    // The Feedback badge counts only unreviewed ('new') items, the
    // same way Pending Applications' count is really "awaiting you" —
    // once Keith has looked at one, it stops nagging her from the tab.
    document.getElementById('countFeedback').textContent = state.feedback.filter(function (f) { return f.status !== 'reviewed'; }).length;

    renderPending();
    renderApproved();
    renderRejected();
    renderFeedback();
  }

  function renderPending() {
    var body = document.getElementById('pendingBody');
    var empty = document.getElementById('pendingEmpty');
    var query = searchValue('pendingSearch');
    var list = state.pending.filter(function (app) {
      return matchesSearch(query, [app.first_name, app.last_name, app.email]);
    });
    body.innerHTML = '';
    if (!list.length) {
      empty.textContent = noMatchesMessage(query, 'No pending applications right now.');
      empty.style.display = 'block';
      return;
    }
    empty.style.display = 'none';

    list.forEach(function (app) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td><input type="checkbox" class="sbl-pend-check" data-id="' + app.id + '"' + (selected[app.id] ? ' checked' : '') + ' aria-label="Select ' + escapeHtml(app.first_name + ' ' + app.last_name) + '"></td>' +
        '<td>' + escapeHtml(app.first_name + ' ' + app.last_name) + '<div class="sbl-muted">' + escapeHtml(app.reference_id) + '</div></td>' +
        '<td>' + escapeHtml(app.organisation) + '<div class="sbl-muted">' + escapeHtml(app.country) + '</div></td>' +
        '<td>' + escapeHtml(app.email) + '</td>' +
        '<td>' + escapeHtml(app.role_applied_for) + '</td>' +
        '<td>' + formatDate(app.submitted_at) + '</td>' +
        '<td class="sbl-table-actions">' +
          '<button class="sbl-btn sbl-btn--primary sbl-btn--small" data-action="approve" data-id="' + app.id + '">Approve</button>' +
          '<button class="sbl-btn sbl-btn--danger sbl-btn--small" data-action="reject" data-id="' + app.id + '">Reject</button>' +
          '<button class="sbl-btn sbl-btn--secondary sbl-btn--small" data-action="view" data-id="' + app.id + '">View</button>' +
        '</td>';
      body.appendChild(tr);
    });
    updateBulkButton();
  }

  // ---- Bulk approve (tick several pending applications, approve in one go) ----
  var selected = {};
  var bulkRunning = false;
  function visiblePendingIds() {
    return Array.prototype.map.call(document.querySelectorAll('#pendingBody .sbl-pend-check'), function (c) { return c.getAttribute('data-id'); });
  }
  function updateBulkButton() {
    Object.keys(selected).forEach(function (id) {
      if (!state.pending.some(function (a) { return a.id === id; })) delete selected[id];
    });
    var n = Object.keys(selected).length;
    var btn = document.getElementById('approveSelected');
    if (btn && !bulkRunning) { btn.disabled = n === 0; btn.textContent = n ? 'Approve selected (' + n + ')' : 'Approve selected'; }
    var btn2 = document.getElementById('approveSelectedPw');
    if (btn2 && !bulkRunning) { btn2.disabled = n === 0; btn2.textContent = n ? 'Approve ' + n + ' with passwords (no email)' : 'Approve with passwords (no email)'; }
    var all = document.getElementById('pendingAll');
    if (all) {
      var ids = visiblePendingIds();
      all.checked = ids.length > 0 && ids.every(function (id) { return selected[id]; });
    }
  }
  document.getElementById('pendingAll').addEventListener('change', function (e) {
    visiblePendingIds().forEach(function (id) { if (e.target.checked) selected[id] = true; else delete selected[id]; });
    renderPending();
  });
  document.getElementById('pendingBody').addEventListener('change', function (e) {
    var c = e.target.closest('.sbl-pend-check');
    if (!c) return;
    if (c.checked) selected[c.getAttribute('data-id')] = true; else delete selected[c.getAttribute('data-id')];
    updateBulkButton();
  });
  document.getElementById('approveSelected').addEventListener('click', function () { runBulk(false); });
  document.getElementById('approveSelectedPw').addEventListener('click', function () { runBulk(true); });
  function runBulk(temp) {
    var ids = Object.keys(selected);
    if (!ids.length || bulkRunning) return;
    var n = ids.length + ' application' + (ids.length > 1 ? 's' : '');
    sblAsk(temp
      ? 'Approve ' + n + ' and give each a password now?\n\nNo emails are sent. You get a list of passwords to hand out (e.g. for a KS3 class).'
      : 'Approve ' + n + '? Each person gets an account and an activation email.').then(function (ok) { if (!ok) return;
    clearMessages();
    bulkRunning = true;
    var btn = document.getElementById('approveSelected');
    var status = document.getElementById('bulkStatus');
    btn.disabled = true;
    document.getElementById('approveSelectedPw').disabled = true;
    var done = 0, failed = [], warned = 0, existing = [], pwList = [];
    // One at a time: each approval is its own short request, so a slow
    // email never makes the whole batch time out.
    ids.reduce(function (chain, id) {
      return chain.then(function () {
        var app = state.pending.find(function (a) { return a.id === id; });
        var name = app ? app.first_name + ' ' + app.last_name : id;
        status.textContent = 'Approving ' + (done + failed.length + 1) + ' of ' + ids.length + ' — ' + name + '…';
        return approveRequest(id, temp).then(function (r) {
          if (r.ok) {
            done++; if (r.warning) warned++; removePending(id);
            if (r.existing) existing.push(r.name || name);
            if (r.password) pwList.push([r.name || name, r.email || '', r.password]);
          }
          else failed.push(name + ' (' + r.error + ')');
        });
      });
    }, Promise.resolve()).then(function () {
      bulkRunning = false;
      status.textContent = '';
      var msg = done + ' approved.' + (warned ? ' ' + warned + ' activation email' + (warned > 1 ? 's' : '') + ' could not be sent — use Set temp password for them.' : '') +
        (existing.length && !temp ? ' Already had an account (closed, no email sent): ' + existing.join(', ') + ' — use Set temp password if they can\u2019t log in.' : '');
      if (failed.length) showError(msg + ' Not approved: ' + failed.join('; '));
      else showNotice(msg + (temp ? '' : ' Activation emails have been sent to new accounts.'));
      updateBulkButton();
      loadData();
      if (pwList.length) showPasswordList(pwList);
    });
    });
  }

  // Shows the name / email / password list after "Approve with passwords",
  // with a button to copy it all (paste into Teams, a doc or a sheet).
  function showPasswordList(rows) {
    var text = 'Name\tEmail\tPassword\n' + rows.map(function (r) { return r.join('\t'); }).join('\n');
    var html = 'Passwords for ' + rows.length + ' student' + (rows.length > 1 ? 's' : '') + ' &mdash; copy them now, they are not shown again. Students log in at solutionsbasedlearning.com with their email and this password.' +
      '<table class="sbl-pw-table"><tr><th>Name</th><th>Email</th><th>Password</th></tr>' +
      rows.map(function (r) { return '<tr><td>' + escapeHtml(r[0]) + '</td><td>' + escapeHtml(r[1]) + '</td><td><b>' + escapeHtml(r[2]) + '</b></td></tr>'; }).join('') + '</table>';
    function ask() {
      return sblAsk(html, [['copy', 'Copy list'], [null, 'Close']], true).then(function (v) {
        if (v !== 'copy') return;
        var done = function () { showNotice('Password list copied — paste it into a document or spreadsheet.'); };
        (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(done, function () {
          var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select();
          try { document.execCommand('copy'); done(); } catch (e) {}
          ta.remove();
        });
        return ask();
      });
    }
    ask();
  }

  // Take an approved application off the Pending list straight away,
  // instead of waiting for the full dashboard reload.
  function removePending(id) {
    state.pending = state.pending.filter(function (a) { return a.id !== id; });
    delete selected[id];
    document.getElementById('countPending').textContent = state.pending.length;
    renderPending();
  }

  // Sends one approval. Always resolves to { ok, error, warning } — a
  // dropped connection or a server timeout becomes a readable error
  // instead of a click that silently does nothing. "Already approved"
  // (e.g. a retry after a timeout that actually worked) counts as ok.
  function approveRequest(id, temp) {
    return postJson('/api/admin/action', { action: 'approve', applicationId: id, tempPassword: !!temp }).then(function (result) {
      var err = result.data && result.data.error;
      if (result.ok) return { ok: true, warning: result.data.warning, existing: !!result.data.existingAccount, password: result.data.password, email: result.data.email, name: result.data.name };
      if (result.status === 409 && /approved/.test(err || '')) return { ok: true };
      return { ok: false, error: err || 'the server said no (' + result.status + ')' };
    }, function () {
      return { ok: false, error: 'no reply from the server — refresh to check whether it went through' };
    });
  }

  // Role column: a badge, plus (for the two roles this dashboard is
  // allowed to toggle — 'user' and 'teacher') a button to switch it.
  // 'student' and any other future-proofed role just show as a
  // plain badge, matching what api/admin/action.js's set-role will
  // actually accept.
  function renderRoleCell(u) {
    var label = u.role.charAt(0).toUpperCase() + u.role.slice(1).replace(/_/g, ' ');
    var badge = '<span class="sbl-badge" style="background:rgba(124,147,163,0.2);color:var(--slate);">' + escapeHtml(label) + '</span>';
    var btn = function (action, text) {
      return '<button class="sbl-btn sbl-btn--secondary sbl-btn--small" style="margin:0.35rem 0.3rem 0 0;" data-action="' + action + '" data-id="' + u.id + '">' + text + '</button>';
    };
    if (u.role === 'teacher') return badge + '<div>' + btn('make-user', 'Make user') + '</div>';
    if (u.role === 'user') return badge + '<div>' + btn('make-student', 'Make student') + btn('make-teacher', 'Make teacher') + '</div>';
    if (u.role === 'student') return badge + '<div>' + btn('make-user', 'Make user') + '</div>';
    return badge;
  }

  // Subjects & teachers column: up to three subject + teacher pairs
  // per student (e.g. Geography with Mr A, Business with Ms B). Each
  // row saves once BOTH its subject and teacher are chosen; choosing
  // "— None —" for the subject clears that row. Stored in
  // sbl_profiles.teacher_assignments (sql/010). Older single
  // teacher_id links show as Geography until edited.
  var SUBJECTS = ['Geography', 'Business', 'Economics', 'History'];
  var MAX_SUBJECTS = 3;

  function assignmentsOf(u) {
    if (Array.isArray(u.teacher_assignments) && u.teacher_assignments.length) return u.teacher_assignments;
    return u.teacher_id ? [{ subject: 'Geography', teacher_id: u.teacher_id }] : [];
  }

  function renderTeacherCell(u) {
    if (u.role !== 'student') return '—';
    var list = assignmentsOf(u);
    var html = '<div class="sbl-subj-list" data-id="' + u.id + '" style="display:grid; gap:4px; min-width:300px;">';
    for (var i = 0; i < MAX_SUBJECTS; i++) {
      var a = list[i] || {};
      var subj = '<option value="">— Subject —</option>' + SUBJECTS.map(function (sname) {
        return '<option value="' + sname + '"' + (a.subject === sname ? ' selected' : '') + '>' + sname + '</option>';
      }).join('');
      var teach = '<option value="">— Teacher —</option>' + state.teachers.map(function (t) {
        return '<option value="' + t.id + '"' + (t.id === a.teacher_id ? ' selected' : '') + '>' + escapeHtml(t.full_name || t.email) + '</option>';
      }).join('');
      html += '<div class="sbl-subj-row" style="display:flex; gap:4px;">' +
        '<select class="sbl-teacher-select" data-role="subject" aria-label="Subject ' + (i + 1) + '" style="width:118px;">' + subj + '</select>' +
        '<select class="sbl-teacher-select" data-role="teacher" aria-label="Teacher ' + (i + 1) + '" style="flex:1; min-width:150px;">' + teach + '</select>' +
        '</div>';
    }
    return html + '<div class="sbl-subj-hint sbl-muted" style="font-size:0.72rem; min-height:1em;"></div></div>';
  }

  function handleSubjectChange(listEl) {
    var rows = listEl.querySelectorAll('.sbl-subj-row');
    var hint = listEl.querySelector('.sbl-subj-hint');
    var assignments = [], incomplete = false;
    rows.forEach(function (row) {
      var subj = row.querySelector('[data-role="subject"]').value;
      var teacher = row.querySelector('[data-role="teacher"]').value;
      if (subj && teacher) assignments.push({ subject: subj, teacherId: teacher });
      else if (subj || teacher) incomplete = true;
    });
    if (incomplete) { hint.textContent = 'Choose both a subject and a teacher to save that row.'; return; }
    hint.textContent = 'Saving…';
    clearMessages();
    var selects = listEl.querySelectorAll('select');
    selects.forEach(function (sel) { sel.disabled = true; });
    postJson('/api/admin/action', { action: 'assign-subjects', studentId: listEl.getAttribute('data-id'), assignments: assignments })
      .then(function (result) {
        if (!result.ok) { showError(result.data.error || "Could not update this student's subjects."); loadData(); return; }
        showNotice('Subjects and teachers updated.');
        loadData();
      })
      .finally(function () { selects.forEach(function (sel) { sel.disabled = false; }); });
  }

  // Group column: only students get a group label — a free-text
  // field like "SL Geography Grad'28", shown on that student's
  // teacher's /teacher/ roster. Saves on blur (same pattern as the
  // Teacher <select>, just for a text field — Enter blurs it too).
  var GROUP_OPTIONS = ["IGCSE Grad '30", "IGCSE Grad '29", "IB Grad '28", "IB Grad '27"];
  function renderGroupCell(u) {
    if (u.role !== 'student') return '—';
    var cur = u.group_name || '';
    var opts = GROUP_OPTIONS.slice();
    // keep any older free-text group so it isn't lost until changed
    if (cur && opts.indexOf(cur) === -1) opts.unshift(cur);
    return '<select class="sbl-group-input" data-action="assign-group" data-id="' + u.id + '">' +
      '<option value="">— No group —</option>' +
      opts.map(function (g) {
        return '<option value="' + escapeHtml(g) + '"' + (g === cur ? ' selected' : '') + '>' + escapeHtml(g) + '</option>';
      }).join('') + '</select>';
  }

  function renderApproved() {
    var body = document.getElementById('approvedBody');
    var empty = document.getElementById('approvedEmpty');
    var query = searchValue('approvedSearch');
    var allUsers = state.users.filter(function (u) { return u.role !== 'admin'; });
    var users = allUsers.filter(function (u) {
      return matchesSearch(query, [u.full_name, u.email]);
    });
    body.innerHTML = '';
    if (!users.length) {
      empty.textContent = noMatchesMessage(query, 'No approved users yet.');
      empty.style.display = 'block';
      return;
    }
    empty.style.display = 'none';

    // Not-yet-assigned accounts first, then those already assigned to a
    // teacher; each part A-Z by name (first name first, as entered).
    var byName = function (x, y) {
      return String(x.full_name || x.email || '').localeCompare(String(y.full_name || y.email || ''), 'en', { sensitivity: 'base' });
    };
    var isAssigned = function (u) { return assignmentsOf(u).length > 0; };
    var unassigned = users.filter(function (u) { return !isAssigned(u); }).sort(byName);
    var assigned = users.filter(isAssigned).sort(byName);
    users = unassigned.concat(assigned);

    users.forEach(function (u, i) {
      if (i === unassigned.length && assigned.length) {
        var divider = document.createElement('tr');
        divider.innerHTML = '<td colspan="9" style="padding:0.9rem 1rem 0.5rem; font-size:0.75rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--teal-bright); border-top:2px solid var(--navy-line);">Assigned to a teacher (' + assigned.length + ')</td>';
        body.appendChild(divider);
      }
      var tr = document.createElement('tr');
      var badge = u.status === 'suspended'
        ? '<span class="sbl-badge sbl-badge--suspended">Suspended</span>'
        : '<span class="sbl-badge sbl-badge--approved">Active</span>';
      var toggleLabel = u.status === 'suspended' ? 'Reactivate' : 'Suspend';
      var toggleAction = u.status === 'suspended' ? 'reactivate' : 'suspend';
      tr.innerHTML =
        '<td>' + escapeHtml(u.full_name) + '</td>' +
        '<td>' + escapeHtml(u.email) + '</td>' +
        '<td>' + escapeHtml(u.organisation || '—') + '<div class="sbl-muted">' + escapeHtml(u.country || '') + '</div></td>' +
        '<td>' + renderRoleCell(u) + '</td>' +
        '<td>' + renderTeacherCell(u) + '</td>' +
        '<td>' + renderGroupCell(u) + '</td>' +
        '<td>' + badge + '</td>' +
        '<td>' + formatDate(u.created_at) + '</td>' +
        '<td class="sbl-table-actions">' +
          '<button class="sbl-btn sbl-btn--secondary sbl-btn--small" data-action="reset-password" data-id="' + u.id + '" data-name="' + escapeHtml(u.full_name) + '">Reset Password</button>' +
          '<button class="sbl-btn sbl-btn--secondary sbl-btn--small" data-action="temp-password" data-id="' + u.id + '" data-name="' + escapeHtml(u.full_name) + '" title="Set a new password now and show it to you — no email needed">Set temp password</button>' +
          '<button class="sbl-btn sbl-btn--secondary sbl-btn--small" data-action="' + toggleAction + '" data-id="' + u.id + '">' + toggleLabel + '</button>' +
          '<button class="sbl-btn sbl-btn--danger sbl-btn--small" data-action="delete" data-id="' + u.id + '" data-name="' + escapeHtml(u.full_name) + '">Delete</button>' +
        '</td>';
      body.appendChild(tr);
    });
  }

  function renderRejected() {
    var body = document.getElementById('rejectedBody');
    var empty = document.getElementById('rejectedEmpty');
    var query = searchValue('rejectedSearch');
    var list = state.rejected.filter(function (app) {
      return matchesSearch(query, [app.first_name, app.last_name, app.email]);
    });
    body.innerHTML = '';
    if (!list.length) {
      empty.textContent = noMatchesMessage(query, 'No rejected applications.');
      empty.style.display = 'block';
      return;
    }
    empty.style.display = 'none';

    list.forEach(function (app) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' + escapeHtml(app.first_name + ' ' + app.last_name) + '</td>' +
        '<td>' + escapeHtml(app.email) + '</td>' +
        '<td>' + formatDate(app.decided_at) + '</td>' +
        '<td><button class="sbl-btn sbl-btn--primary sbl-btn--small" data-action="approve" data-id="' + app.id + '">Approve instead</button></td>';
      body.appendChild(tr);
    });
  }

  function formatMethods(arr) {
    return (arr && arr.length) ? arr.join(', ') : '—';
  }

  function truncateText(str, n) {
    if (!str) return '—';
    return str.length > n ? str.slice(0, n).trim() + '…' : str;
  }

  function renderFeedback() {
    var body = document.getElementById('feedbackBody');
    var empty = document.getElementById('feedbackEmpty');
    body.innerHTML = '';
    if (!state.feedback.length) { empty.style.display = 'block'; return; }
    empty.style.display = 'none';

    state.feedback.forEach(function (f) {
      var tr = document.createElement('tr');
      var statusBadge = f.status === 'reviewed'
        ? '<span class="sbl-badge" style="background:rgba(124,147,163,0.2);color:var(--slate);">Reviewed</span>'
        : '<span class="sbl-badge sbl-badge--approved">New</span>';
      var toggleLabel = f.status === 'reviewed' ? 'Mark new' : 'Mark reviewed';
      tr.innerHTML =
        '<td>' + formatDate(f.created_at) + '</td>' +
        '<td>' + (f.rating_overall ? f.rating_overall + ' / 5' : '—') + '</td>' +
        '<td>' + (f.rating_understanding ? f.rating_understanding + ' / 5' : '—') + '</td>' +
        '<td>' + escapeHtml(formatMethods(f.effective_methods)) + '</td>' +
        '<td>' + escapeHtml(truncateText(f.suggestions, 60)) + '</td>' +
        '<td>' + statusBadge + '</td>' +
        '<td class="sbl-table-actions">' +
          '<button class="sbl-btn sbl-btn--secondary sbl-btn--small" data-action="view-feedback" data-id="' + f.id + '">View</button>' +
          '<button class="sbl-btn sbl-btn--secondary sbl-btn--small" data-action="toggle-feedback" data-id="' + f.id + '">' + toggleLabel + '</button>' +
        '</td>';
      body.appendChild(tr);
    });
  }

  // ---- Modal: view application ----
  var modalBackdrop = document.getElementById('viewModalBackdrop');
  var modalBody = document.getElementById('viewModalBody');
  document.getElementById('closeModalBtn').addEventListener('click', function () {
    modalBackdrop.classList.remove('is-open');
  });
  modalBackdrop.addEventListener('click', function (e) {
    if (e.target === modalBackdrop) modalBackdrop.classList.remove('is-open');
  });

  function openViewModal(app) {
    modalBody.innerHTML =
      '<dt>Name</dt><dd>' + escapeHtml(app.first_name + ' ' + app.last_name) + '</dd>' +
      '<dt>Email</dt><dd>' + escapeHtml(app.email) + '</dd>' +
      '<dt>School / Organisation</dt><dd>' + escapeHtml(app.organisation) + '</dd>' +
      '<dt>Country</dt><dd>' + escapeHtml(app.country) + '</dd>' +
      '<dt>Role</dt><dd>' + escapeHtml(app.role_applied_for) + '</dd>' +
      '<dt>Areas of Interest</dt><dd>' + escapeHtml((app.areas_of_interest || []).join(', ') || '—') + '</dd>' +
      '<dt>Reason for Request</dt><dd>' + escapeHtml(app.reason) + '</dd>' +
      '<dt>Reference ID</dt><dd>' + escapeHtml(app.reference_id) + '</dd>' +
      '<dt>Submitted</dt><dd>' + formatDate(app.submitted_at) + '</dd>';
    modalBackdrop.classList.add('is-open');
  }

  // ---- Modal: view feedback ----
  var feedbackModalBackdrop = document.getElementById('feedbackModalBackdrop');
  var feedbackModalBody = document.getElementById('feedbackModalBody');
  document.getElementById('closeFeedbackModalBtn').addEventListener('click', function () {
    feedbackModalBackdrop.classList.remove('is-open');
  });
  feedbackModalBackdrop.addEventListener('click', function (e) {
    if (e.target === feedbackModalBackdrop) feedbackModalBackdrop.classList.remove('is-open');
  });

  function openFeedbackModal(f) {
    feedbackModalBody.innerHTML =
      '<dt>Submitted</dt><dd>' + formatDate(f.created_at) + '</dd>' +
      '<dt>Overall rating</dt><dd>' + (f.rating_overall ? f.rating_overall + ' / 5' : '—') + '</dd>' +
      '<dt>Supports learning</dt><dd>' + (f.rating_understanding ? f.rating_understanding + ' / 5' : '—') + '</dd>' +
      '<dt>Most effective for them</dt><dd>' + escapeHtml(formatMethods(f.effective_methods)) + '</dd>' +
      '<dt>Suggestions</dt><dd>' + escapeHtml(f.suggestions || '—') + '</dd>' +
      '<dt>Contact email</dt><dd>' + escapeHtml(f.contact_email || '—') + '</dd>' +
      '<dt>Page</dt><dd>' + escapeHtml(f.page_url || '—') + '</dd>';
    feedbackModalBackdrop.classList.add('is-open');
  }

  // ---- Action handling (event delegation across all three tables) ----
  document.querySelector('.sbl-admin-shell').addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-action]');
    if (!btn) return;
    var action = btn.getAttribute('data-action');
    var id = btn.getAttribute('data-id');

    if (action === 'view') {
      var app = state.pending.find(function (a) { return a.id === id; });
      if (app) openViewModal(app);
      return;
    }
    if (action === 'approve') return handleApprove(id, btn);
    if (action === 'reject') return handleReject(id, btn);
    if (action === 'suspend') return handleSuspendToggle(id, true, btn);
    if (action === 'reactivate') return handleSuspendToggle(id, false, btn);
    if (action === 'delete') return handleDelete(id, btn.getAttribute('data-name'), btn);
    if (action === 'make-teacher') return handleSetRole(id, 'teacher', btn);
    if (action === 'make-user') return handleSetRole(id, 'user', btn);
    if (action === 'make-student') return handleSetRole(id, 'student', btn);
    if (action === 'reset-password') return handleResetPassword(id, btn.getAttribute('data-name'), btn);
    if (action === 'temp-password') return handleTempPassword(id, btn.getAttribute('data-name'), btn);
    if (action === 'view-feedback') {
      var fb = state.feedback.find(function (f) { return f.id === id; });
      if (fb) openFeedbackModal(fb);
      return;
    }
    if (action === 'toggle-feedback') return handleToggleFeedback(id, btn);
  });

  // Teacher-assignment dropdowns fire 'change', not 'click'.
  document.querySelector('.sbl-admin-shell').addEventListener('change', function (e) {
    var subjList = e.target.closest('.sbl-subj-list');
    if (subjList) { handleSubjectChange(subjList); return; }
    var select = e.target.closest('select[data-action="assign-teacher"]');
    if (select) { handleAssignTeacher(select.getAttribute('data-id'), select.value || null, select); return; }
    var input = e.target.closest('[data-action="assign-group"]');
    if (input) { handleAssignGroup(input.getAttribute('data-id'), input.value, input); return; }
  });

  // The group text field saves on 'change' (fires on blur once the
  // value differs) — pressing Enter blurs it immediately rather than
  // making the person click away first.
  document.querySelector('.sbl-admin-shell').addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    if (!e.target.closest('input[data-action="assign-group"]')) return;
    e.target.blur();
  });

  function withButtonBusy(btn, busyLabel, fn) {
    var original = btn.textContent;
    btn.disabled = true;
    btn.textContent = busyLabel;
    return fn().finally(function () {
      btn.disabled = false;
      btn.textContent = original;
    });
  }

  function postJson(url, body) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body || {})
    }).then(function (r) {
      return r.json().catch(function () {
        return { error: r.status >= 500 ? 'The server took too long or failed (' + r.status + '). Refresh to check whether it went through.' : 'Unexpected reply from the server (' + r.status + ').' };
      }).then(function (data) { return { ok: r.ok, status: r.status, data: data || {} }; });
    });
  }

  function handleApprove(id, btn) {
    sblAsk('Approve this application? An account will be created and an activation email will be sent.').then(function (ok) { if (!ok) return;
    clearMessages();
    withButtonBusy(btn, 'Approving…', function () {
      return approveRequest(id).then(function (r) {
        if (!r.ok) { showError('Could not approve this application: ' + r.error); loadData(); return; }
        removePending(id);
        if (r.existing) showNotice((r.name || 'This applicant') + ' already had an SBL account from an earlier application, so this one has been closed (no new email sent). If they can\u2019t log in, use \u201cSet temp password\u201d in Approved users.');
        else showNotice(r.warning || 'Application approved. The applicant has been emailed an activation link.');
        loadData();
      });
    });
    });
  }

  function handleReject(id, btn) {
    sblAsk('Reject this application? The applicant will be notified by email.').then(function (ok) { if (!ok) return;
    return sblAsk('Which email should the applicant get?', [['general', 'Standard rejection'], ['duplicate', 'Already has an account (use Forgot password)'], [null, 'Cancel']]).then(function (reason) { if (!reason) return;
    clearMessages();
    withButtonBusy(btn, 'Rejecting…', function () {
      return postJson('/api/admin/action', { action: 'reject', applicationId: id, reason: reason }).then(function (result) {
        if (!result.ok) { showError(result.data.error || 'Could not reject this application.'); return; }
        showNotice(result.data.warning || 'Application rejected. The applicant has been notified by email.');
        loadData();
      });
    });
    });
    });
  }

  function handleSuspendToggle(userId, suspend, btn) {
    var verb = suspend ? 'suspend' : 'reactivate';
    sblAsk('Are you sure you want to ' + verb + ' this user?').then(function (ok) { if (!ok) return;
    clearMessages();
    withButtonBusy(btn, suspend ? 'Suspending…' : 'Reactivating…', function () {
      return postJson('/api/admin/action', { action: 'suspend', userId: userId, suspend: suspend }).then(function (result) {
        if (!result.ok) { showError(result.data.error || ('Could not ' + verb + ' this user.')); return; }
        showNotice('User ' + (suspend ? 'suspended' : 'reactivated') + '.');
        loadData();
      });
    });
    });
  }

  function handleDelete(userId, name, btn) {
    sblAsk('Permanently delete ' + name + '’s account? This cannot be undone.').then(function (ok) { if (!ok) return;
    clearMessages();
    withButtonBusy(btn, 'Deleting…', function () {
      return postJson('/api/admin/action', { action: 'delete-user', userId: userId }).then(function (result) {
        if (!result.ok) { showError(result.data.error || 'Could not delete this user.'); return; }
        showNotice('User deleted.');
        loadData();
      });
    });
    });
  }

  function handleSetRole(userId, role, btn) {
    var verb = role === 'teacher' ? 'make this user a teacher'
      : role === 'student' ? 'make this account a student'
      : 'change this account back to a regular user';
    sblAsk('Are you sure you want to ' + verb + '?').then(function (ok) { if (!ok) return;
    clearMessages();
    withButtonBusy(btn, 'Updating…', function () {
      return postJson('/api/admin/action', { action: 'set-role', userId: userId, role: role }).then(function (result) {
        if (!result.ok) { showError(result.data.error || "Could not update this user's role."); return; }
        showNotice(role === 'teacher' ? 'This user is now a teacher.'
          : role === 'student' ? 'This account is now a student \u2014 you can now give them subjects and teachers.'
          : 'This account is now a regular user.');
        loadData();
      });
    });
    });
  }

  // Sends the same password-reset email the public "Forgot password?"
  // link sends, but triggered by the admin — for when a student (or
  // any user) is stuck signing in and would rather not, or can't,
  // use the self-service flow themselves.
  function handleResetPassword(userId, name, btn) {
    sblAsk('Send a password reset email to ' + name + '?').then(function (ok) { if (!ok) return;
    clearMessages();
    withButtonBusy(btn, 'Sending…', function () {
      return postJson('/api/admin/action', { action: 'reset-password', userId: userId }).then(function (result) {
        if (!result.ok) { showError(result.data.error || 'Could not send the password reset email.'); return; }
        showNotice('Password reset email sent to ' + name + '.');
      });
    });
    });
  }

  function handleTempPassword(userId, name, btn) {
    sblAsk('Give ' + name + ' a new temporary password now?\n\nTheir old password stops working. No email is sent — you tell them the new one.').then(function (ok) { if (!ok) return;
    clearMessages();
    withButtonBusy(btn, 'Setting…', function () {
      return postJson('/api/admin/action', { action: 'temp-password', userId: userId }).then(function (result) {
        if (!result.ok) { showError(result.data.error || 'Could not set a temporary password.'); return; }
        showNotice(name + ' (' + result.data.email + ') can now log in with: ' + result.data.password + '  — they can change it with "Forgot password".');
        sblAsk('New password for ' + name + ' (' + result.data.email + '):<code class="sbl-ask-code">' + escapeHtml(result.data.password) + '</code>Tell them this now — it is not shown again. They can change it with &ldquo;Forgot password&rdquo;.', [[true, 'Done']], true);
      }, function () { showError('No reply from the server. Please try again.'); });
    });
    });
  }

  function handleToggleFeedback(id, btn) {
    var fb = state.feedback.find(function (f) { return f.id === id; });
    if (!fb) return;
    var reviewed = fb.status !== 'reviewed';
    clearMessages();
    withButtonBusy(btn, 'Updating…', function () {
      return postJson('/api/admin/action', { action: 'mark-feedback', feedbackId: id, reviewed: reviewed }).then(function (result) {
        if (!result.ok) { showError(result.data.error || 'Could not update this feedback item.'); return; }
        showNotice(reviewed ? 'Marked as reviewed.' : 'Marked as new.');
        loadData();
      });
    });
  }

  function handleAssignTeacher(studentId, teacherId, select) {
    clearMessages();
    select.disabled = true;
    postJson('/api/admin/action', { action: 'assign-teacher', studentId: studentId, teacherId: teacherId })
      .then(function (result) {
        if (!result.ok) { showError(result.data.error || 'Could not update the assigned teacher.'); loadData(); return; }
        showNotice('Assigned teacher updated.');
        loadData();
      })
      .finally(function () { select.disabled = false; });
  }

  function handleAssignGroup(studentId, groupName, input) {
    clearMessages();
    input.disabled = true;
    postJson('/api/admin/action', { action: 'assign-group', studentId: studentId, groupName: groupName })
      .then(function (result) {
        if (!result.ok) { showError(result.data.error || "Could not update this student's group."); loadData(); return; }
        showNotice('Group updated.');
        loadData();
      })
      .finally(function () { input.disabled = false; });
  }
})();
