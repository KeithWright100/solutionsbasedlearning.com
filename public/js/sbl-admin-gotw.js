/* public/js/sbl-admin-gotw.js
   "Game of the week" picker on the admin dashboard. Choose a game for
   this week and the next two weeks; any week left on "Automatic" uses
   the weekly rotation from sbl-games-catalog.js. Saved through
   /api/admin/action (set-game-of-week) into sbl_site_settings. */
(function () {
  var W = window.SBLGameOfWeek, mount = document.getElementById('gotwRows');
  if (!W || !mount) return;
  var picks = {};
  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }
  function addDays(ws, n) { var d = new Date(ws + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
  function nice(ws) { return new Date(ws + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' }); }
  function options(ws, sel) {
    var auto = W.rotation(ws);
    var html = '<option value="">Automatic: ' + esc(auto ? auto.title : '') + '</option>';
    var levels = [];
    window.SBL_GAMES.forEach(function (g) { if (levels.indexOf(g.level) < 0) levels.push(g.level); });
    levels.forEach(function (lv) {
      html += '<optgroup label="' + esc(lv) + '">' + window.SBL_GAMES.filter(function (g) { return g.level === lv; }).map(function (g) {
        return '<option value="' + esc(g.slug) + '"' + (g.slug === sel ? ' selected' : '') + '>' + esc(g.title) + '</option>';
      }).join('') + '</optgroup>';
    });
    return html;
  }
  function render() {
    var ws = W.weekStart(), rows = '';
    [0, 7, 14].forEach(function (off, i) {
      var w = addDays(ws, off), p = picks[w] || {};
      rows += '<div class="gotw-row" data-week="' + w + '">' +
        '<div class="gotw-when"><b>' + (i === 0 ? 'This week' : i === 1 ? 'Next week' : 'Week after') + '</b><span>from Mon ' + nice(w) + '</span></div>' +
        '<select class="sbl-search-input gotw-game" aria-label="Game for the week starting ' + nice(w) + '">' + options(w, p.slug) + '</select>' +
        '<input class="sbl-search-input gotw-note" maxlength="120" placeholder="Optional note, e.g. Good for: IGCSE Economics Topic 2" value="' + esc(p.note || '') + '" aria-label="Note for the week starting ' + nice(w) + '">' +
        '<button type="button" class="sbl-btn sbl-btn--secondary sbl-btn--small gotw-save">Save</button>' +
        '<span class="gotw-status" aria-live="polite"></span></div>';
    });
    mount.innerHTML = rows;
  }
  mount.addEventListener('click', function (e) {
    var btn = e.target.closest('.gotw-save'); if (!btn) return;
    var row = btn.closest('.gotw-row'), week = row.dataset.week;
    var slug = row.querySelector('.gotw-game').value, note = row.querySelector('.gotw-note').value;
    var status = row.querySelector('.gotw-status');
    btn.disabled = true; status.textContent = 'Saving…';
    fetch('/api/admin/action', { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slug ? { action: 'set-game-of-week', week: week, slug: slug, note: note } : { action: 'set-game-of-week', week: week, clear: true }) })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
      .then(function (res) {
        if (!res.ok) { status.textContent = res.d.error || 'Could not save.'; return; }
        picks = res.d.picks || {};
        status.textContent = slug ? 'Saved ✓' : 'Set to automatic ✓';
      })
      .catch(function () { status.textContent = 'Could not save.'; })
      .finally(function () { btn.disabled = false; });
  });
  fetch('/api/session?gameOfWeek=1', { credentials: 'same-origin' })
    .then(function (r) { return r.ok ? r.json() : {}; })
    .then(function (d) { picks = (d && d.picks) || {}; render(); })
    .catch(render);
})();
