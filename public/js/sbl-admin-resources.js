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
    { key: 'key_terms', label: 'Student Workbooks' },
    { key: 'diagrams', label: 'OneNote Pages' },
    { key: 'data_sheets', label: 'Quizzes' },
    { key: 'ppq', label: 'PPQs', below: 'ppq_markscheme' }
  ];
  // Slots that hold a link instead of a file: live OneNote pages, and
  // mark scheme links (shown under the PPQ file in the PPQs column).
  var LINK_TYPES = ['diagrams', 'ppq_markscheme'];
  var LINK_LABELS = { diagrams: 'OneNote page', ppq_markscheme: 'Mark scheme' };
  var TYPE_LABELS = { ppq_markscheme: 'Mark scheme' };
  function linkLabel(type) { return LINK_LABELS[type] || 'Link'; }
  function isLinkType(type) { return LINK_TYPES.indexOf(type) !== -1; }

  // Which lessons this page manages: 'ib' (/admin/resources/) or
  // 'igcse' (/admin/igcse-resources/), set by data-scope on <body>.
  // Both pages share the same API and storage — a resource is keyed
  // only by lesson id, and IGCSE ids all start with "IG".
  var SCOPE = (document.body.getAttribute('data-scope') || 'ib').toLowerCase();
  var PAGE_PATH = SCOPE === 'igcse' ? '/admin/igcse-resources/' : '/admin/resources/';
  function isIgcse(id, l) { return /^IG[A-Z]{2}\d/.test(id) || /^\/igcse\//.test((l && l.href) || ''); }
  // Paper -> unit groups, in syllabus order. A lesson belongs to the
  // first group whose URL prefix its href starts with.
  var GROUPS = SCOPE === 'igcse' ? [
    { paper: 'Paper 1', paperTitle: 'Physical Geography', unit: 'Coastal Environments', prefix: '/igcse/geography/learn/coastal-environments/' },
    { paper: 'Paper 1', paperTitle: 'Physical Geography', unit: 'Hazardous Environments', prefix: '/igcse/geography/learn/hazardous-environments/' },
    { paper: 'Paper 1', paperTitle: 'Physical Geography', unit: 'Coastal Fieldwork', prefix: '/igcse/geography/learn/coastal-fieldwork/' },
    { paper: 'Paper 2', paperTitle: 'Human Geography', unit: 'Economic Activity and Energy', prefix: '/igcse/geography/learn/economic-activity-and-energy/' },
    { paper: 'Paper 2', paperTitle: 'Human Geography', unit: 'Rural Environments', prefix: '/igcse/geography/learn/rural-environments/' },
    { paper: 'Paper 2', paperTitle: 'Human Geography', unit: 'Rural Fieldwork', prefix: '/igcse/geography/learn/rural-fieldwork/' },
    { paper: 'Paper 2', paperTitle: 'Human Geography', unit: 'Development and Human Welfare', prefix: '/igcse/geography/learn/development-and-human-welfare/' }
  ] : [
    { paper: 'Paper 1', paperTitle: 'Optional Themes', unit: 'Option A: Freshwater', prefix: '/geography/paper-1/option-a/' },
    { paper: 'Paper 1', paperTitle: 'Optional Themes', unit: 'Option E: Leisure, Tourism and Sport', prefix: '/geography/paper-1/option-e/' },
    { paper: 'Paper 1', paperTitle: 'Optional Themes', unit: 'Option F: Food and Health', prefix: '/geography/paper-1/option-f/' },
    { paper: 'Paper 2', paperTitle: 'Core', unit: 'Unit 1: Changing Population', prefix: '/geography/paper-1/core-1/' },
    { paper: 'Paper 2', paperTitle: 'Core', unit: 'Unit 2: Global Climate', prefix: '/geography/paper-1/core-2/' },
    { paper: 'Paper 2', paperTitle: 'Core', unit: 'Unit 3: Resource Consumption and Security', prefix: '/geography/paper-1/core-3/' },
    { paper: 'Paper 3', paperTitle: 'HL Core Extension', unit: 'Unit 4: Power, Places and Networks', prefix: '/geography/paper-2/hl-1/' },
    { paper: 'Paper 3', paperTitle: 'HL Core Extension', unit: 'Unit 5: Human Development and Diversity', prefix: '/geography/paper-2/hl-2/' },
    { paper: 'Paper 3', paperTitle: 'HL Core Extension', unit: 'Unit 6: Global Risks and Resilience', prefix: '/geography/paper-2/hl-3/' }
  ];
  var OTHER = { paper: 'Other', paperTitle: '', unit: 'Other lessons', prefix: '' };
  GROUPS.forEach(function (g, i) { g.n = i; g.key = 'u' + i; });
  OTHER.n = GROUPS.length; OTHER.key = 'u' + GROUPS.length;
  function groupFor(href) {
    href = (href || '').replace(/\/?$/, '/');
    for (var i = 0; i < GROUPS.length; i++) if (href.indexOf(GROUPS[i].prefix) === 0) return GROUPS[i];
    return OTHER;
  }
  var filter = { paper: '', unit: '' };

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
        window.location.href = '/login/?redirect=' + PAGE_PATH;
        return;
      }
      document.getElementById('adminName').textContent = data.user.fullName || data.user.email;
      loadData();
    })
    .catch(function () {
      window.location.href = '/login/?redirect=' + PAGE_PATH;
    });

  document.getElementById('logoutBtn').addEventListener('click', function () {
    fetch('/api/logout', { method: 'POST' }).finally(function () {
      window.location.href = '/login/';
    });
  });

  // ---- Load lesson manifest (from window.SBL_LESSONS, populated by
  // the lesson-data <script> tags on this page) + existing resources ----
  function loadData() {
    var lessons = Object.keys(window.SBL_LESSONS || {}).filter(function (id) {
      return isIgcse(id, window.SBL_LESSONS[id]) === (SCOPE === 'igcse');
    }).map(function (id) {
      var l = window.SBL_LESSONS[id];
      var g = groupFor(l.href);
      return { id: id, title: l.title, topicTitle: (l.topicTitle || '').replace(/\s*\(IGCSE\)\s*$/, ''), href: l.href || '', group: g };
    });
    lessons.sort(function (a, b) {
      return (a.group.n - b.group.n) || (a.href || a.id).localeCompare(b.href || b.id);
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
    var lastGroup = null;
    state.lessons.forEach(function (lesson) {
      var g = lesson.group;
      if (g !== lastGroup) {
        lastGroup = g;
        var n = state.lessons.filter(function (x) { return x.group === g; }).length;
        html += '<tr class="sbl-res-group" id="res-' + g.key + '" data-unit="' + g.key + '" data-paper="' + escapeHtml(g.paper) + '"><td colspan="' + (RESOURCE_TYPES.length + 1) + '">' +
          '<span class="sbl-res-group__paper">' + escapeHtml(g.paper + (g.paperTitle ? ' \u00b7 ' + g.paperTitle : '')) + '</span>' +
          '<span class="sbl-res-group__unit">' + escapeHtml(g.unit) + '</span><span class="sbl-res-group__n">' + n + ' lesson' + (n === 1 ? '' : 's') + '</span></td></tr>';
      }
      html += '<tr data-lesson-row="' + escapeHtml(lesson.id) + '" data-unit="' + g.key + '" data-paper="' + escapeHtml(g.paper) + '" data-search="' +
        escapeHtml((lesson.title + ' ' + lesson.topicTitle + ' ' + g.unit + ' ' + g.paper).toLowerCase()) + '">';
      html += '<td class="sbl-res-lesson">' +
        (lesson.topicTitle ? '<span class="sbl-res-lesson__topic">' + escapeHtml(lesson.topicTitle) + '</span>' : '') +
        '<span class="sbl-res-lesson__title">' + escapeHtml(lesson.title) + '</span></td>';

      RESOURCE_TYPES.forEach(function (rt) {
        if (rt.below) {
          html += '<td class="sbl-res-slot">' +
            '<span class="sbl-res-sublabel">Past paper questions</span>' + renderSlotCell(lesson.id, rt.key) +
            '<span class="sbl-res-sublabel">Mark scheme' + '</span>' + renderSlotCell(lesson.id, rt.below) + '</td>';
        } else {
          html += '<td class="sbl-res-slot">' + renderSlotCell(lesson.id, rt.key) + '</td>';
        }
      });

      html += '</tr>';
    });
    body.innerHTML = html;
    renderNav();
    applyFilter();
    bindCellButtons(body);
  }

  function bindCellButtons(root) {
    root.querySelectorAll('[data-upload-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        startUpload(btn.getAttribute('data-lesson-id'), btn.getAttribute('data-resource-type'));
      });
    });
    root.querySelectorAll('[data-delete-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        deleteResource(btn.getAttribute('data-resource-id'), btn.getAttribute('data-lesson-id'), btn.getAttribute('data-resource-type'));
      });
    });
    root.querySelectorAll('[data-link-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        startLinkEdit(btn.getAttribute('data-lesson-id'), btn.getAttribute('data-resource-type'));
      });
    });
  }

  function renderSlotCell(lessonId, type) {
    var resource = state.resources[resourceKey(lessonId, type)];
    var cell = '<div class="sbl-res-sub" data-slot-cell="' + escapeHtml(lessonId) + '|' + escapeHtml(type) + '">';
    var ids = 'data-lesson-id="' + escapeHtml(lessonId) + '" data-resource-type="' + escapeHtml(type) + '"';

    if (isLinkType(type)) {
      var links = resource && resource.linkUrls ? resource.linkUrls : [];
      if (links.length) {
        links.forEach(function (u, i) {
          cell += '<a class="sbl-res-slot__file" href="' + escapeHtml(u) + '" target="_blank" rel="noopener" title="' + escapeHtml(u) + '">' + linkLabel(type) + (links.length > 1 ? ' ' + (i + 1) : '') + ' &#8599;</a>';
        });
      } else if (resource) {
        cell += '<span class="sbl-res-slot__file" title="' + escapeHtml(resource.fileName) + '">' + escapeHtml(resource.fileName) + ' <span class="sbl-muted">(file)</span></span>';
      } else {
        cell += '<span class="sbl-res-slot__empty">No link yet</span>';
      }
      cell += '<span class="sbl-res-slot__actions">';
      cell += '<button type="button" class="sbl-btn sbl-btn--secondary sbl-btn--small" data-link-btn ' + ids + '>' + (resource ? 'Change link' : 'Add link') + '</button>';
      if (resource) cell += '<button type="button" class="sbl-btn sbl-btn--danger sbl-btn--small" data-delete-btn data-resource-id="' + escapeHtml(resource.id || '') + '" ' + ids + '>Remove</button>';
      cell += '</span></div>';
      return cell;
    }

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

    cell += '</div>';
    return cell;
  }

  function refreshSlotCell(lessonId, type) {
    var cell = body.querySelector('[data-slot-cell="' + lessonId + '|' + type + '"]');
    if (!cell) return;
    var temp = document.createElement('div');
    temp.innerHTML = renderSlotCell(lessonId, type);
    var newCell = temp.firstChild;
    cell.replaceWith(newCell);
    bindCellButtons(newCell);
  }

  // ---- OneNote links ----
  // In OneNote: right-click a page in the page list, Copy link to
  // page, then paste it here. Up to MAX_LINKS links per lesson; the
  // server keeps only the https part of each.
  var MAX_LINKS = 5;
  function startLinkEdit(lessonId, type) {
    var cell = body.querySelector('[data-slot-cell="' + lessonId + '|' + type + '"]');
    if (!cell) return;
    var existing = state.resources[resourceKey(lessonId, type)];
    var current = existing && existing.linkUrls && existing.linkUrls.length ? existing.linkUrls.slice() : [''];
    var idBase = 'link-' + lessonId.replace(/[^a-zA-Z0-9_-]/g, '_') + '-' + type + '-';

    cell.innerHTML =
      '<div data-link-list></div>' +
      '<span class="sbl-res-slot__actions" style="margin-bottom:0.4rem">' +
      '<button type="button" class="sbl-btn sbl-btn--small" data-link-add>+ Add another link</button></span>' +
      '<span class="sbl-res-slot__actions">' +
      '<button type="button" class="sbl-btn sbl-btn--secondary sbl-btn--small" data-link-save>Save</button>' +
      '<button type="button" class="sbl-btn sbl-btn--small" data-link-cancel>Cancel</button></span>';
    var list = cell.querySelector('[data-link-list]');
    var addBtn = cell.querySelector('[data-link-add]');

    function addInput(value) {
      var i = list.querySelectorAll('input').length;
      var wrap = document.createElement('div');
      wrap.innerHTML =
        '<label class="sbl-res-link__label" for="' + escapeHtml(idBase + i) + '">' + linkLabel(type) + ' ' + (i + 1) + ' link</label>' +
        '<input type="url" class="sbl-res-link__input" id="' + escapeHtml(idBase + i) + '" placeholder="https://…">';
      var input = wrap.querySelector('input');
      input.value = value || '';
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); save(); }
        if (e.key === 'Escape') refreshSlotCell(lessonId, type);
      });
      list.appendChild(wrap);
      addBtn.style.display = list.querySelectorAll('input').length >= MAX_LINKS ? 'none' : '';
      return input;
    }
    current.forEach(function (u) { addInput(u); });
    list.querySelector('input').focus();
    addBtn.addEventListener('click', function () { addInput('').focus(); });

    function save() {
      var urls = Array.prototype.map.call(list.querySelectorAll('input'), function (el) { return el.value.trim(); })
        .filter(function (u) { return u; });
      if (!urls.length) { showError('Paste at least one link, or use Remove to clear this slot.'); return; }
      clearMessages();
      cell.innerHTML = '<span class="sbl-res-slot__empty">Saving&hellip;</span>';
      fetch('/api/admin/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'set-link', lessonId: lessonId, resourceType: type, urls: urls, label: linkLabel(type) })
      })
        .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, data: d }; }); })
        .then(function (res) {
          if (!res.ok) throw new Error(res.data.error || 'Could not save these links.');
          return loadResourcesOnly();
        })
        .then(function () {
          refreshSlotCell(lessonId, type);
          showNotice(urls.length > 1 ? urls.length + ' ' + linkLabel(type) + ' links saved.' : linkLabel(type) + ' link saved.');
        })
        .catch(function (err) {
          refreshSlotCell(lessonId, type);
          showError(err.message || 'Could not save these links.');
        });
    }
    cell.querySelector('[data-link-save]').addEventListener('click', save);
    cell.querySelector('[data-link-cancel]').addEventListener('click', function () { refreshSlotCell(lessonId, type); });
  }

  // ---- Filter ----
  searchInput.addEventListener('input', applyFilter);

  // Rows shown = search match AND the chosen paper/unit. Unit header
  // rows show only when at least one of their lessons is visible.
  function applyFilter() {
    var q = searchInput.value.trim().toLowerCase();
    var shown = {};
    body.querySelectorAll('tr[data-search]').forEach(function (row) {
      var match = (!q || row.getAttribute('data-search').indexOf(q) !== -1) &&
        (!filter.paper || row.getAttribute('data-paper') === filter.paper) &&
        (!filter.unit || row.getAttribute('data-unit') === filter.unit);
      row.classList.toggle('sbl-res-row--hidden', !match);
      if (match) shown[row.getAttribute('data-unit')] = (shown[row.getAttribute('data-unit')] || 0) + 1;
    });
    body.querySelectorAll('tr.sbl-res-group').forEach(function (row) {
      row.classList.toggle('sbl-res-row--hidden', !shown[row.getAttribute('data-unit')]);
    });
    var total = Object.keys(shown).reduce(function (t, k) { return t + shown[k]; }, 0);
    lessonCount.textContent = total + ' of ' + state.lessons.length + ' lessons';
    var nav = document.getElementById('resNav');
    if (nav) nav.querySelectorAll('[data-f]').forEach(function (b) {
      var on = b.getAttribute('data-f') === (filter.unit ? 'unit:' + filter.unit : filter.paper ? 'paper:' + filter.paper : 'all');
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  // Paper / unit navigation: one column per paper with its units.
  function renderNav() {
    var nav = document.getElementById('resNav');
    if (!nav || nav.getAttribute('data-built')) return;
    var counts = {}; var papers = [];
    state.lessons.forEach(function (l) { counts[l.group.key] = (counts[l.group.key] || 0) + 1; });
    GROUPS.concat([OTHER]).forEach(function (g) {
      if (!counts[g.key]) return;
      var p = papers.filter(function (x) { return x.paper === g.paper; })[0];
      if (!p) { p = { paper: g.paper, title: g.paperTitle, units: [] }; papers.push(p); }
      p.units.push(g);
    });
    var h = '<button type="button" class="sbl-res-nav__all" data-f="all">All papers <span>' + state.lessons.length + '</span></button><div class="sbl-res-nav__grid">';
    papers.forEach(function (p) {
      var n = p.units.reduce(function (t, g) { return t + counts[g.key]; }, 0);
      h += '<div class="sbl-res-nav__paper"><button type="button" class="sbl-res-nav__ph" data-f="paper:' + escapeHtml(p.paper) + '"><b>' + escapeHtml(p.paper) + '</b>' +
        (p.title ? '<i>' + escapeHtml(p.title) + '</i>' : '') + '<span>' + n + '</span></button>';
      p.units.forEach(function (g) {
        h += '<button type="button" class="sbl-res-nav__unit" data-f="unit:' + g.key + '">' + escapeHtml(g.unit) + ' <span>' + counts[g.key] + '</span></button>';
      });
      h += '</div>';
    });
    nav.innerHTML = h + '</div>';
    nav.setAttribute('data-built', '1');
    nav.addEventListener('click', function (e) {
      var b = e.target.closest('[data-f]'); if (!b) return;
      var f = b.getAttribute('data-f');
      filter.paper = f.indexOf('paper:') === 0 ? f.slice(6) : '';
      filter.unit = f.indexOf('unit:') === 0 ? f.slice(5) : '';
      applyFilter();
      var scroller = document.querySelector('.sbl-res-scroll');
      if (scroller) scroller.scrollTop = 0;
    });
  }


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
    var label = TYPE_LABELS[type] || RESOURCE_TYPES.filter(function (rt) { return rt.key === type; }).map(function (rt) { return rt.label; })[0] || type;
    if (!confirm((isLinkType(type) ? 'Remove the ' + label + ' link(s)' : 'Delete the ' + label + ' file') + ' for this lesson? This cannot be undone.')) return;

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
