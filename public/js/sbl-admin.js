// public/js/sbl-admin.js
// Client-side logic for the admin dashboard (/admin/). All real
// authorization happens server-side (middleware.js gates the page
// itself; every /api/admin/* endpoint independently re-checks the
// caller is an active admin) — this script only renders data and
// calls those endpoints. It never trusts anything client-side as a
// security boundary.

(function () {
  var state = { pending: [], rejected: [], users: [] };

  var pageError = document.getElementById('pageError');
  var pageNotice = document.getElementById('pageNotice');

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
    rejected: document.getElementById('panelRejected')
  };
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('is-active'); });
      tab.classList.add('is-active');
      Object.keys(panels).forEach(function (key) { panels[key].style.display = 'none'; });
      panels[tab.getAttribute('data-tab')].style.display = 'block';
    });
  });

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

    renderPending();
    renderApproved();
    renderRejected();
  }

  function renderPending() {
    var body = document.getElementById('pendingBody');
    var empty = document.getElementById('pendingEmpty');
    body.innerHTML = '';
    if (!state.pending.length) { empty.style.display = 'block'; return; }
    empty.style.display = 'none';

    state.pending.forEach(function (app) {
      var tr = document.createElement('tr');
      tr.innerHTML =
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
  }

  function renderApproved() {
    var body = document.getElementById('approvedBody');
    var empty = document.getElementById('approvedEmpty');
    body.innerHTML = '';
    var users = state.users.filter(function (u) { return u.role !== 'admin'; });
    if (!users.length) { empty.style.display = 'block'; return; }
    empty.style.display = 'none';

    users.forEach(function (u) {
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
        '<td>' + badge + '</td>' +
        '<td>' + formatDate(u.created_at) + '</td>' +
        '<td class="sbl-table-actions">' +
          '<button class="sbl-btn sbl-btn--secondary sbl-btn--small" data-action="' + toggleAction + '" data-id="' + u.id + '">' + toggleLabel + '</button>' +
          '<button class="sbl-btn sbl-btn--danger sbl-btn--small" data-action="delete" data-id="' + u.id + '" data-name="' + escapeHtml(u.full_name) + '">Delete</button>' +
        '</td>';
      body.appendChild(tr);
    });
  }

  function renderRejected() {
    var body = document.getElementById('rejectedBody');
    var empty = document.getElementById('rejectedEmpty');
    body.innerHTML = '';
    if (!state.rejected.length) { empty.style.display = 'block'; return; }
    empty.style.display = 'none';

    state.rejected.forEach(function (app) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' + escapeHtml(app.first_name + ' ' + app.last_name) + '</td>' +
        '<td>' + escapeHtml(app.email) + '</td>' +
        '<td>' + formatDate(app.decided_at) + '</td>';
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
      return r.json().then(function (data) { return { ok: r.ok, data: data }; });
    });
  }

  function handleApprove(id, btn) {
    if (!confirm('Approve this application? An account will be created and an activation email will be sent.')) return;
    clearMessages();
    withButtonBusy(btn, 'Approving…', function () {
      return postJson('/api/admin/action', { action: 'approve', applicationId: id }).then(function (result) {
        if (!result.ok) { showError(result.data.error || 'Could not approve this application.'); return; }
        showNotice(result.data.warning || 'Application approved. The applicant has been emailed an activation link.');
        loadData();
      });
    });
  }

  function handleReject(id, btn) {
    if (!confirm('Reject this application? The applicant will be notified by email.')) return;
    clearMessages();
    withButtonBusy(btn, 'Rejecting…', function () {
      return postJson('/api/admin/action', { action: 'reject', applicationId: id }).then(function (result) {
        if (!result.ok) { showError(result.data.error || 'Could not reject this application.'); return; }
        showNotice(result.data.warning || 'Application rejected. The applicant has been notified by email.');
        loadData();
      });
    });
  }

  function handleSuspendToggle(userId, suspend, btn) {
    var verb = suspend ? 'suspend' : 'reactivate';
    if (!confirm('Are you sure you want to ' + verb + ' this user?')) return;
    clearMessages();
    withButtonBusy(btn, suspend ? 'Suspending…' : 'Reactivating…', function () {
      return postJson('/api/admin/action', { action: 'suspend', userId: userId, suspend: suspend }).then(function (result) {
        if (!result.ok) { showError(result.data.error || ('Could not ' + verb + ' this user.')); return; }
        showNotice('User ' + (suspend ? 'suspended' : 'reactivated') + '.');
        loadData();
      });
    });
  }

  function handleDelete(userId, name, btn) {
    if (!confirm('Permanently delete ' + name + '’s account? This cannot be undone.')) return;
    clearMessages();
    withButtonBusy(btn, 'Deleting…', function () {
      return postJson('/api/admin/action', { action: 'delete-user', userId: userId }).then(function (result) {
        if (!result.ok) { showError(result.data.error || 'Could not delete this user.'); return; }
        showNotice('User deleted.');
        loadData();
      });
    });
  }
})();
