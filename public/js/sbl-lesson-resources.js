// public/js/sbl-lesson-resources.js
// Turns the static "Resources" card on an IB Geography lesson page
// into live links, once files have been uploaded for that lesson via
// the teacher-only /admin/resources/ page.
//
// Reads the lesson id off the same #sblTeachBotOverlay[data-lesson-id]
// element the Teach Me Live / Challenge Mode / etc. buttons already
// use, so no page needs a second, separate id anywhere. If that
// element or the .lh-resources__item slots aren't present, this does
// nothing — safe to include on any page.
//
// Fails silently on any error (not logged in, API not deployed yet,
// network issue, etc.) so a lesson page never breaks or shows a
// scary error because of this — worst case, the Resources list just
// stays as plain, non-clickable text, exactly as it always has.

(function () {
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  function init() {
    var overlay = document.getElementById('sblTeachBotOverlay');
    var lessonId = overlay && overlay.getAttribute('data-lesson-id');
    if (!lessonId) return;

    var items = document.querySelectorAll('.lh-resources__item[data-resource-type]');
    if (!items.length) return;

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
            li.classList.add('is-live');
            var link = document.createElement('a');
            link.className = 'lh-resources__link';
            link.href = '/api/resources?lessonId=' + encodeURIComponent(lessonId) + '&open=' + encodeURIComponent(type);
            link.target = '_blank';
            link.rel = 'noopener';
            link.setAttribute('aria-label', 'Open ' + labelText + ' (' + resource.fileName + ')');
            link.innerHTML = li.innerHTML;
            li.innerHTML = '';
            li.appendChild(link);
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
        // Not logged in, API not live yet, or a network hiccup — leave
        // the Resources card exactly as it was.
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
