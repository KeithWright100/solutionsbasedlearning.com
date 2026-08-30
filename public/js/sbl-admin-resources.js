// public/js/sbl-admin-resources.js
// Client-side logic for the "Lesson Resources" admin page
// (/admin/resources/). All real authorization happens server-side
// (middleware.js gates /admin/:path* itself; every /api/admin/*
// endpoint independently re-checks the caller is an active admin) —
// this script only renders data and calls those endpoints, same
// pattern as sbl-admin.js.

(function () {
  var RESOURCE_TYPES = [
    { key: 'slides', label: 'Lesson Slides' },
    { key: 'notes', label: 'Lesson Notes' },
    { key: 'key_terms', label: 'Key Terms' },
    { key: 'diagrams', label: 'Diagrams & Models' },
    { key: 'data_sheets', label: 'Data Sheets' }
  ];

  var state = { lessons: [], resources: {} }; // resources: { "<lessonId>|<type>": {fileName, fileSize, uploadedAt} }

  var pageError = document.getElementById('pageError');
  var pageNotice = document.getElementById('pageNotice');
  var body = document.getElementById('resourcesBody');
  var emptyState = document.getElementById('resourcesEmpty');
  var lessonCount = document.getElementById('lessonCount');
  var searchInput = document.getElementById('lessonSearch');

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

  function resourceKey(lessonId, type) { return lessonId + '|' + type; }

  function formatBytes(n) {
    if (typeof n !== 'number' || !isFinite(n)) return '';
    if (n < 1024) return n + ' B';
    if (n < 1024 * 1024) return Math.round(n / 1024) + ' KB';
    return (n / (1024 * 1024)).toFixed(1) + ' MB';
  }

  // ---- Session check / bounce non-admins ----
  fetch('/api/session')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data.loggedIn || data.user.role !== 'admin') {
        window.location.href = '/login/?redirect=/admin/resources/';
        return;
      }
      document.getElementById('adminName').textContent = data.user.fullName || data.user.email;
      loadData();
    })
    .catch(function () {
      window.location.href = '/login/?redirect=/admin/resources/';
    });

  document.getElementById('logoutBtn').addEventListener('click', function () {
    fetch('/api/logout', { method: 'POST' }).finally(function () {
      window.location.href = '/login/';
    });
  });

  // ---- Load lesson manifest (from window.SBL_LESSONS, populated by
  // the lesson-data <script> tags on this page) + existing resources ----
  function loadData() {
    var lessons = Object.keys(window.SBL_LESSONS || {}).map(function (id) {
      var l = window.SBL_LESSONS[id];
      return { id: id, title: l.title, topicTitle: l.topicTitle || '', href: l.href || '' };
    });
    lessons.sort(function (a, b) {
      return (a.href || a.id).localeCompare(b.href || b.id);
    });
    state.lessons = lessons;

    fetch('/api/admin/resources', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'list' })
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.error) { showError(data.error); return; }
        var map = {};
        (data.resources || []).forEach(function (r) {
          map[resourceKey(r.lessonId, r.resourceType)] = r;
        });
        state.resources = map;
        render();
      })
      .catch(function () {
        showError('Could not load lesson resources. Check your connection and try again.');
      });
  }

  // ---- Render ----
  function render() {
    lessonCount.textContent = state.lessons.length + ' lesson' + (state.lessons.length === 1 ? '' : 's');
    if (!state.lessons.length) {
      emptyState.style.display = 'block';
      body.innerHTML = '';
      return;
    }
    emptyState.style.display = 'none';

    var html = '';
    state.lessons.forEach(function (lesson) {
      html += '<tr data-lesson-row="' + escapeHtml(lesson.id) + '" data-search="' +
        escapeHtml((lesson.title + ' ' + lesson.topicTitle).toLowerCase()) + '">';
      html += '<td class="sbl-res-lesson">' +
        (lesson.topicTitle ? '<span class="sbl-res-lesson__topic">' + escapeHtml(lesson.topicTitle) + '</span>' : '') +
        '<span class="sbl-res-lesson__title">' + escapeHtml(lesson.title) + '</span></td>';

      RESOURCE_TYPES.forEach(function (rt) {
        html += renderSlotCell(lesson.id, rt.key);
      });

      html += '</tr>';
    });
    body.innerHTML = html;

    body.querySelectorAll('[data-upload-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        startUpload(btn.getAttribute('data-lesson-id'), btn.getAttribute('data-resource-type'));
      });
    });
    body.querySelectorAll('[data-delete-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        deleteResource(btn.getAttribute('data-resource-id'), btn.getAttribute('data-lesson-id'), btn.getAttribute('data-resource-type'));
      });
    });
  }

  function renderSlotCell(lessonId, type) {
    var resource = state.resources[resourceKey(lessonId, type)];
    var cell = '<td class="sbl-res-slot" data-slot-cell="' + escapeHtml(lessonId) + '|' + escapeHtml(type) + '">';

    if (resource) {
      cell += '<span class="sbl-res-slot__file" title="' + escapeHtml(resource.fileName) + '">' + escapeHtml(resource.fileName) +
        (resource.fileSize ? ' <span class="sbl-muted">(' + formatBytes(resource.fileSize) + ')</span>' : '') + '</span>';
      cell += '<span class="sbl-res-slot__actions">';
      cell += '<button type="button" class="sbl-btn sbl-btn--secondary sbl-btn--small" data-upload-btn data-lesson-id="' + escapeHtml(lessonId) + '" data-resource-type="' + escapeHtml(type) + '">Replace</button>';
      cell += '<button type="button" class="sbl-btn sbl-btn--danger sbl-btn--small" data-delete-btn data-resource-id="' + escapeHtml(resource.id || '') + '" data-lesson-id="' + escapeHtml(lessonId) + '" data-resource-type="' + escapeHtml(type) + '">Delete</button>';
      cell += '</span>';
    } else {
      cell += '<span class="sbl-res-slot__empty">Not uploaded</span>';
      cell += '<span class="sbl-res-slot__actions">';
      cell += '<button type="button" class="sbl-btn sbl-btn--secondary sbl-btn--small" data-upload-btn data-lesson-id="' + escapeHtml(lessonId) + '" data-resource-type="' + escapeHtml(type) + '">Upload</button>';
      cell += '</span>';
    }

    cell += '</td>';
    return cell;
  }

  function refreshSlotCell(lessonId, type) {
    var cell = body.querySelector('[data-slot-cell="' + lessonId + '|' + type + '"]');
    if (!cell) return;
    var temp = document.createElement('tbody');
    temp.innerHTML = '<tr>' + renderSlotCell(lessonId, type) + '</tr>';
    var newCell = temp.querySelector('td');
    cell.replaceWith(newCell);
    newCell.querySelectorAll('[data-upload-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        startUpload(btn.getAttribute('data-lesson-id'), btn.getAttribute('data-resource-type'));
      });
    });
    newCell.querySelectorAll('[data-delete-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        deleteResource(btn.getAttribute('data-resource-id'), btn.getAttribute('data-lesson-id'), btn.getAttribute('data-resource-type'));
      });
    });
  }

  // ---- Filter ----
  searchInput.addEventListener('input', function () {
    var q = searchInput.value.trim().toLowerCase();
    body.querySelectorAll('tr[data-search]').forEach(function (row) {
      var match = !q || row.getAttribute('data-search').indexOf(q) !== -1;
      row.classList.toggle('sbl-res-row--hidden', !match);
    });
  });

  // ---- Upload flow ----
  // Step 1: ask for a signed upload URL. Step 2: PUT the file bytes
  // straight to Supabase Storage (never through our own server —
  // keeps this fast and avoids request-size limits). Step 3: confirm
  // the upload so it's recorded against this lesson + slot.
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.style.display = 'none';
  document.body.appendChild(fileInput);
  var pendingUpload = null;

  function startUpload(lessonId, type) {
    pendingUpload = { lessonId: lessonId, type: type };
    fileInput.value = '';
    fileInput.click();
  }

  fileInput.addEventListener('change', function () {
    var file = fileInput.files && fileInput.files[0];
    if (!file || !pendingUpload) return;
    var lessonId = pendingUpload.lessonId;
    var type = pendingUpload.type;
    pendingUpload = null;
    clearMessages();

    var cell = body.querySelector('[data-slot-cell="' + lessonId + '|' + type + '"]');
    if (cell) cell.innerHTML = '<span class="sbl-res-slot__empty">Uploading&hellip;</span>';

    fetch('/api/admin/resources', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'create-upload-url',
        lessonId: lessonId,
        resourceType: type,
        fileName: file.name
      })
    })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, data: d }; }); })
      .then(function (res) {
        if (!res.ok) throw new Error(res.data.error || 'Could not prepare the upload.');
        var upload = res.data;

        return fetch(upload.signedUrl, {
          method: 'PUT',
          headers: { 'Content-Type': file.type || 'application/octet-stream' },
          body: file
        }).then(function (putRes) {
          if (!putRes.ok) throw new Error('The upload to storage failed (status ' + putRes.status + ').');
          return upload.path;
        });
      })
      .then(function (path) {
        return fetch('/api/admin/resources', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'confirm-upload',
            lessonId: lessonId,
            resourceType: type,
            fileName: file.name,
            storagePath: path,
            fileSize: file.size,
            contentType: file.type || null
          })
        }).then(function (r) { return r.json().then(function (d) { return { ok: r.ok, data: d }; }); });
      })
      .then(function (res) {
        if (!res.ok) throw new Error(res.data.error || 'Could not save this upload.');
        return loadResourcesOnly();
      })
      .then(function () {
        refreshSlotCell(lessonId, type);
        showNotice('Uploaded ' + file.name + '.');
      })
      .catch(function (err) {
        refreshSlotCell(lessonId, type);
        showError(err.message || 'The upload failed. Please try again.');
      });
  });

  function loadResourcesOnly() {
    return fetch('/api/admin/resources', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'list' })
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.error) throw new Error(data.error);
        var map = {};
        (data.resources || []).forEach(function (r) {
          map[resourceKey(r.lessonId, r.resourceType)] = r;
        });
        state.resources = map;
      });
  }

  // ---- Delete ----
  function deleteResource(id, lessonId, type) {
    if (!id) return;
    var label = RESOURCE_TYPES.filter(function (rt) { return rt.key === type; }).map(function (rt) { return rt.label; })[0] || type;
    if (!confirm('Delete the ' + label + ' file for this lesson? This cannot be undone.')) return;

    clearMessages();
    fetch('/api/admin/resources', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'delete', id: id })
    })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, data: d }; }); })
      .then(function (res) {
        if (!res.ok) throw new Error(res.data.error || 'Could not delete this resource.');
        delete state.resources[resourceKey(lessonId, type)];
        refreshSlotCell(lessonId, type);
        showNotice('Deleted.');
      })
      .catch(function (err) {
        showError(err.message || 'Could not delete this resource.');
      });
  }
})();
