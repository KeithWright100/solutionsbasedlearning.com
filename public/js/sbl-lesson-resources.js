// public/js/sbl-lesson-resources.js
// Runs on every IB Geography lesson page that has a "Resources" card.
//
// The Resources card is TEACHER-ONLY:
//   - Teachers and admins see the card as before. Where the page has
//     a lesson id and the .lh-resources__item slots, each slot becomes
//     a live link once a file has been uploaded via /admin/resources/,
//     or shows "Not added yet".
//   - Everyone else (students, not logged in, or if the role can't be
//     checked) sees a short "Teacher resources" note instead of the
//     list.
//
// This only controls what the page SHOWS. The files themselves are
// protected on the server: /api/resources refuses anyone who isn't a
// teacher or admin (see api/resources.js), so a shared link won't
// open for a student either.

(function () {
  var TEACHER_ROLES = ['teacher', 'admin'];

  var LOCK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">' +
    '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';

  function lists() {
    return Array.prototype.slice.call(document.querySelectorAll('ul.lh-resources'));
  }

  // Hide the lists straight away so a student never sees the file
  // names flash up before the role check comes back.
  function hideLists() {
    lists().forEach(function (ul) { ul.style.visibility = 'hidden'; });
  }

  function showLists() {
    lists().forEach(function (ul) { ul.style.visibility = ''; });
  }

  function showTeacherNote() {
    lists().forEach(function (ul) {
      var note = document.createElement('p');
      note.className = 'lh-resources__note';
      note.innerHTML = LOCK_SVG + '<span><strong>Teacher resources</strong>' +
        'Lesson slides, notes and workbooks for this lesson are available to teachers.</span>';
      ul.parentNode.replaceChild(note, ul);
    });
  }

  // Teacher view: the original behaviour — turn uploaded slots into
  // links and mark the rest "Not added yet".
  // The PPQ slots were added after the lesson pages were built, so
  // they're added to each Resources list here instead of editing
  // every page.
  var EXTRA_ITEMS = [
    { type: 'ppq', label: 'Past Paper Questions',
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z"/><path d="M9 13h6M9 17h4"/></svg>' },
    { type: 'ppq_markscheme', label: 'PPQ Mark Schemes',
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/></svg>' }
  ];
  function addExtraItems() {
    lists().forEach(function (ul) {
      EXTRA_ITEMS.forEach(function (it) {
        if (ul.querySelector('[data-resource-type="' + it.type + '"]')) return;
        var li = document.createElement('li');
        li.className = 'lh-resources__item';
        li.setAttribute('data-resource-type', it.type);
        li.innerHTML = it.svg + '<span class="lh-resources__label">' + it.label + '</span>';
        ul.appendChild(li);
      });
    });
  }

  function wireTeacherLinks() {
    addExtraItems();
    var overlay = document.getElementById('sblTeachBotOverlay');
    var lessonId = overlay && overlay.getAttribute('data-lesson-id');
    var items = document.querySelectorAll('.lh-resources__item[data-resource-type]');
    if (!lessonId || !items.length) return;

    fetch('/api/resources?lessonId=' + encodeURIComponent(lessonId), { credentials: 'same-origin' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        var resources = data.resources || {};

        items.forEach(function (li) {
          var type = li.getAttribute('data-resource-type');
          var resource = resources[type];
          var label = li.querySelector('.lh-resources__label');
          var labelText = label ? label.textContent : '';

          if (resource) {
            var base = '/api/resources?lessonId=' + encodeURIComponent(lessonId) + '&open=' + encodeURIComponent(type);
            var count = resource.linkCount > 1 ? resource.linkCount : 1;
            var template = li.innerHTML;
            var prev = li;
            for (var n = 0; n < count; n++) {
              var row = n === 0 ? li : document.createElement('li');
              if (n > 0) { row.className = li.className; prev.parentNode.insertBefore(row, prev.nextSibling); prev = row; }
              row.classList.add('is-live');
              var link = document.createElement('a');
              link.className = 'lh-resources__link';
              link.href = base + (count > 1 ? '&n=' + n : '');
              link.target = '_blank';
              link.rel = 'noopener';
              link.setAttribute('aria-label', 'Open ' + labelText + (count > 1 ? ' ' + (n + 1) : '') + ' (' + resource.fileName + ')');
              link.innerHTML = template;
              if (count > 1) {
                var lab = link.querySelector('.lh-resources__label');
                if (lab) lab.textContent = labelText + ' (' + (n + 1) + ')';
              }
              row.innerHTML = '';
              row.appendChild(link);
            }
          } else {
            li.classList.add('is-empty');
            if (label) {
              var status = document.createElement('span');
              status.className = 'lh-resources__status';
              status.textContent = 'Not added yet';
              label.parentNode.insertBefore(status, label.nextSibling);
            }
          }
        });
      })
      .catch(function () {
        // API not reachable — leave the list as plain text.
      });
  }

  function init() {
    if (!lists().length) return;
    hideLists();

    fetch('/api/session', { credentials: 'same-origin' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (s) {
        var role = s && s.loggedIn && s.user ? s.user.role : null;
        if (role && TEACHER_ROLES.indexOf(role) !== -1) {
          showLists();
          wireTeacherLinks();
        } else {
          showTeacherNote();
        }
      })
      .catch(function () {
        // Can't confirm the visitor is a teacher, so show the note.
        showTeacherNote();
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// ---------------------------------------------------------------
// Diagram zoom: on IGCSE lesson pages, click or tap a diagram
// (figure.ig-map) to open it full screen. Esc, the close button or
// a click outside the diagram closes it.
// ---------------------------------------------------------------
(function () {
  function init() {
    var figs = document.querySelectorAll('figure.ig-map');
    if (!figs.length) return;
    var st = document.createElement('style');
    st.textContent =
      'figure.ig-map svg{cursor:zoom-in}' +
      '.ig-zoom-hint{display:block;font-size:.8rem;color:#64748b;margin-top:2px}' +
      '.ig-zoom{position:fixed;inset:0;z-index:9999;background:rgba(15,23,42,.88);display:flex;align-items:center;justify-content:center;padding:16px;overflow:auto}' +
      '.ig-zoom__inner{background:#fff;border-radius:14px;padding:10px;width:min(1400px,100%);max-height:100%;overflow:auto}' +
      '.ig-zoom__inner svg{display:block;width:100%;height:auto;min-width:900px}' +
      '.ig-zoom__close{position:fixed;top:12px;right:16px;font:600 15px/1 system-ui,sans-serif;background:#fff;color:#0f172a;border:0;border-radius:999px;padding:10px 16px;cursor:pointer}' +
      '@media (min-width:960px){.ig-zoom__inner svg{min-width:0}}';
    document.head.appendChild(st);
    function open(svg) {
      var ov = document.createElement('div');
      ov.className = 'ig-zoom';
      ov.setAttribute('role', 'dialog');
      ov.setAttribute('aria-modal', 'true');
      var inner = document.createElement('div');
      inner.className = 'ig-zoom__inner';
      var copy = svg.cloneNode(true);
      copy.removeAttribute('aria-labelledby');
      inner.appendChild(copy);
      var btn = document.createElement('button');
      btn.className = 'ig-zoom__close';
      btn.type = 'button';
      btn.textContent = 'Close ✕';
      ov.appendChild(inner);
      ov.appendChild(btn);
      function close() {
        document.removeEventListener('keydown', onKey);
        ov.remove();
        document.body.style.overflow = '';
      }
      function onKey(e) { if (e.key === 'Escape') close(); }
      ov.addEventListener('click', function (e) { if (!inner.contains(e.target)) close(); });
      btn.addEventListener('click', close);
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      document.body.appendChild(ov);
      btn.focus();
    }
    figs.forEach(function (f) {
      var svg = f.querySelector('svg');
      if (!svg) return;
      svg.setAttribute('tabindex', '0');
      svg.addEventListener('click', function () { open(svg); });
      svg.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(svg); }
      });
      var cap = f.querySelector('figcaption');
      if (cap && !cap.querySelector('.ig-zoom-hint')) {
        var h = document.createElement('span');
        h.className = 'ig-zoom-hint';
        h.textContent = 'Click or tap the diagram to enlarge it.';
        cap.appendChild(h);
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
