/* public/js/sbl-admin-guest.js
   "Conference guest login" on the admin dashboard. Choose a password and
   press Start: the shared guest login works for 6 hours, then switches
   itself off. Saved through /api/admin/action (guest-access). */
(function () {
  var mount = document.getElementById('guestPanel');
  if (!mount) return;
  var state = null, timer = null;

  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }
  function post(body) {
    return fetch('/api/admin/action', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.assign({ action: 'guest-access' }, body)) })
      .then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'Something went wrong.'); return d; }); });
  }
  function left(ms) {
    var m = Math.max(0, Math.round(ms / 60000)), h = Math.floor(m / 60);
    return (h ? h + ' h ' : '') + (m % 60) + ' min';
  }
  function when(t) { return new Date(t).toLocaleString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }); }

  function render(msg) {
    var on = state && state.until && state.until > Date.now();
    mount.innerHTML =
      '<div class="gotw-row" style="grid-template-columns:130px 1fr">' +
        '<div class="gotw-when"><b>Status</b></div>' +
        '<div>' + (on
          ? '<b style="color:var(--teal-bright)">On</b> &mdash; until ' + esc(when(state.until)) + ' (' + left(state.until - Date.now()) + ' left)'
          : '<b>Off</b>' + (state && state.until ? ' &mdash; last ended ' + esc(when(state.until)) : '')) + '</div>' +
      '</div>' +
      '<div class="gotw-row" style="grid-template-columns:130px 1fr">' +
        '<div class="gotw-when"><b>Email</b><span>the user name</span></div>' +
        '<div><code style="font-size:0.95rem">' + esc(state ? state.email : '') + '</code></div>' +
      '</div>' +
      '<div class="gotw-row" style="grid-template-columns:130px minmax(180px,1fr) auto auto 1fr">' +
        '<div class="gotw-when"><b>Password</b><span>8+ characters</span></div>' +
        '<input class="sbl-search-input" id="guestPw" maxlength="64" autocomplete="off" placeholder="e.g. Patana-Conference-30" aria-label="Guest password">' +
        '<button type="button" class="sbl-btn sbl-btn--secondary sbl-btn--small" id="guestStart">' + (on ? 'Restart for ' : 'Start for ') + (state ? state.hours : 6) + ' hours</button>' +
        (on ? '<button type="button" class="sbl-btn sbl-btn--secondary sbl-btn--small" id="guestStop">End now</button>' : '<span></span>') +
        '<span class="gotw-status" id="guestStatus" aria-live="polite">' + esc(msg || '') + '</span>' +
      '</div>' +
      '<p style="color:var(--slate);font-size:0.8rem;margin:0.6rem 0 0">Starting clears the guest&rsquo;s saved scores from last time. Pressing Start again sets a new password and a fresh 6 hours. After &ldquo;End now&rdquo;, anyone still on a page is logged out within the hour.</p>';
    mount.querySelector('#guestStart').onclick = function () {
      var pw = mount.querySelector('#guestPw').value.trim();
      if (pw.length < 8) { mount.querySelector('#guestStatus').textContent = 'Choose a password of at least 8 characters.'; return; }
      this.disabled = true; mount.querySelector('#guestStatus').textContent = 'Starting…';
      post({ op: 'start', password: pw }).then(function (d) { state = d; render('Guest login is on ✓ Password: ' + pw); })
        .catch(function (e) { render(e.message); });
    };
    var stop = mount.querySelector('#guestStop');
    if (stop) stop.onclick = function () {
      this.disabled = true;
      post({ op: 'stop' }).then(function (d) { state = d; render('Guest login switched off ✓'); }).catch(function (e) { render(e.message); });
    };
  }

  post({ op: 'get' }).then(function (d) { state = d; render(); }).catch(function (e) { render(e.message); });
  // keep the "time left" fresh while the dashboard is open
  timer = setInterval(function () {
    var pw = mount.querySelector('#guestPw');
    if (state && state.until && !(pw && (pw.value || document.activeElement === pw))) {
      var s = mount.querySelector('#guestStatus'); render(s ? s.textContent : '');
    }
  }, 60000);
})();
