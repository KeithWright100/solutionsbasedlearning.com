/* public/js/sbl-admin-p3codes.js
   "Paper 3 essay codes" panel on the admin dashboard. Shows the unlock
   code for each practice essay on the 16-mark essay synthesis maps page
   (revision guide), and lets you set your own, generate new ones, or go
   back to the original code. Read and saved through /api/admin/action
   (p3-codes) into sbl_site_settings. Students' codes are checked by
   /api/session?p3unlock=… , which never sends codes to the browser. */
(function () {
  var mount = document.getElementById('p3codeRows'), MAPS = window.SBL_P3_MAPS;
  if (!mount || !MAPS) return;
  var MODELS = 4, value = { codes: {}, master: '' };
  var essays = MAPS.map(function (m, i) { return { id: m.id, n: i + 1, t: m.short }; }).slice(MODELS);
  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }
  function current(id) { return id === '*' ? value.master : value.codes[id]; }
  function row(id, label, sub) {
    var c = current(id) || '';
    return '<div class="p3c-row" data-id="' + id + '">' +
      '<div class="p3c-when"><b>' + esc(label) + '</b><span>' + esc(sub) + '</span></div>' +
      '<input class="sbl-search-input p3c-code" maxlength="20" value="' + esc(c) + '" placeholder="' + (c ? '' : 'Original code') + '" aria-label="Code for ' + esc(label) + '">' +
      '<button type="button" class="sbl-btn sbl-btn--secondary sbl-btn--small" data-op="set">Save</button>' +
      '<button type="button" class="sbl-btn sbl-btn--secondary sbl-btn--small" data-op="random">New code</button>' +
      (c ? '<button type="button" class="sbl-btn sbl-btn--secondary sbl-btn--small" data-op="clear" title="Go back to the original code">Original</button>' : '<span></span>') +
      '<span class="p3c-status" aria-live="polite"></span></div>';
  }
  function render() {
    var h = essays.map(function (e) { return row(e.id, 'Essay ' + e.n, e.t); }).join('');
    h += row('*', 'Master code', 'Unlocks every essay');
    mount.innerHTML = h;
  }
  function send(payload, status) {
    status.textContent = 'Saving…';
    return fetch('/api/admin/action', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.assign({ action: 'p3-codes' }, payload)) })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
      .then(function (res) {
        if (!res.ok) { status.textContent = res.d.error || 'Could not save.'; return false; }
        value = { codes: res.d.codes || {}, master: res.d.master || '' };
        return true;
      })
      .catch(function () { status.textContent = 'Could not save.'; return false; });
  }
  mount.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-op]'); if (!btn) return;
    var r = btn.closest('.p3c-row'), id = r.dataset.id, op = btn.dataset.op, status = r.querySelector('.p3c-status');
    var payload = { op: op, id: id };
    if (op === 'set') payload.code = r.querySelector('.p3c-code').value;
    btn.disabled = true;
    send(payload, status).then(function (ok) {
      if (!ok) { btn.disabled = false; return; }
      render();
      mount.querySelector('[data-id="' + (id === '*' ? '\\*' : id) + '"] .p3c-status').textContent = op === 'clear' ? 'Back to original ✓' : 'Saved ✓';
    });
  });
  var all = document.getElementById('p3codeAll'), copy = document.getElementById('p3codeCopy'), msg = document.getElementById('p3codeMsg');
  if (all) all.addEventListener('click', function () {
    if (all.dataset.arm !== '1') { all.dataset.arm = '1'; all.textContent = 'Click again to replace every code'; return; }
    all.dataset.arm = ''; all.textContent = 'New codes for every essay';
    send({ op: 'random-all', ids: essays.map(function (e) { return e.id; }).concat('*') }, msg).then(function (ok) { if (ok) { render(); msg.textContent = 'New codes saved ✓ Old codes no longer work.'; } });
  });
  if (copy) copy.addEventListener('click', function () {
    var txt = essays.map(function (e) { return 'Essay ' + e.n + ' ' + e.t + ': ' + (current(e.id) || '(original code)'); }).join('\n') + '\nMaster: ' + (value.master || '(original code)');
    (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(function () { msg.textContent = 'Copied ✓'; }, function () { msg.textContent = 'Could not copy.'; });
  });
  fetch('/api/admin/action', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'p3-codes', op: 'get' }) })
    .then(function (r) { return r.ok ? r.json() : {}; })
    .then(function (d) { value = { codes: (d && d.codes) || {}, master: (d && d.master) || '' }; render(); })
    .catch(render);
})();
