/*
 * SBL teacher tools — shared by every game.
 *
 * Shows a "Teacher tools" button (bottom-left) ONLY to logged-in, active
 * teacher or admin accounts, checked with /api/session. Students never see it.
 *
 * Each game describes itself by setting, before this script runs:
 *
 *   window.SBL_TEACHER_ADAPTER = {
 *     key: function () { return '<h3>…</h3>…'; },   // answer key HTML (required)
 *     unlock: function (on) { … },                  // optional: open every level/stage
 *     unlockLabel: 'levels'                          // optional wording
 *   };
 *
 * The unlock choice is remembered per game on this device.
 */
(function () {
  'use strict';
  if (window.__sblTeacherTools) return;
  window.__sblTeacherTools = true;

  var path = location.pathname.replace(/\/+$/, '') || '/';
  var UKEY = 'sbl-teacher-unlock:' + path;
  var isTeacher = false, unlocked = false;

  function adapter() { return window.SBL_TEACHER_ADAPTER || null; }
  function getU() { try { return localStorage.getItem(UKEY) === '1'; } catch (e) { return false; } }
  function setU(v) { try { if (v) localStorage.setItem(UKEY, '1'); else localStorage.removeItem(UKEY); } catch (e) {} }

  var css = '' +
    '.sbt-btn{position:fixed;left:18px;bottom:18px;z-index:999998;background:#0f3a5c;color:#fff;border:0;border-radius:999px;padding:10px 16px;font:800 14px/1 "Inter","Segoe UI",system-ui,Arial,sans-serif;box-shadow:0 8px 22px rgba(0,0,0,.25);cursor:pointer}' +
    '.sbt-btn:focus-visible,.sbt-menu button:focus-visible,.sbt-x:focus-visible{outline:3px solid #f59e0b;outline-offset:2px}' +
    '.sbt-menu{position:fixed;left:18px;bottom:66px;z-index:999998;background:#fff;border:1px solid rgba(5,43,65,.15);border-radius:14px;box-shadow:0 14px 34px rgba(0,0,0,.22);padding:8px;display:flex;flex-direction:column;gap:4px;min-width:230px;font-family:"Inter","Segoe UI",system-ui,Arial,sans-serif}' +
    '.sbt-menu[hidden]{display:none}' +
    '.sbt-menu .sbt-h{font-size:11px;font-weight:900;letter-spacing:.07em;text-transform:uppercase;color:#007c82;padding:6px 10px 2px}' +
    '.sbt-menu button{text-align:left;background:none;border:0;border-radius:10px;padding:10px 12px;font:700 14px "Inter","Segoe UI",system-ui,Arial,sans-serif;color:#062033;cursor:pointer}' +
    '.sbt-menu button:hover{background:#eef5fa}' +
    '.sbt-ov{position:fixed;inset:0;z-index:1000001;background:rgba(7,26,44,.72);display:flex;align-items:flex-start;justify-content:center;padding:24px 14px;overflow:auto}' +
    '.sbt-box{background:#fff;color:#062033;border-radius:18px;max-width:900px;width:100%;padding:22px 24px;box-shadow:0 20px 50px rgba(0,0,0,.35);font:15px/1.55 "Inter","Segoe UI",system-ui,Arial,sans-serif;text-align:left}' +
    '.sbt-top{display:flex;align-items:center;gap:10px;justify-content:space-between;flex-wrap:wrap;border-bottom:1px solid rgba(5,43,65,.12);padding-bottom:10px;margin-bottom:12px}' +
    '.sbt-top b{font-size:13px;font-weight:900;letter-spacing:.07em;text-transform:uppercase;color:#007c82}' +
    '.sbt-top h2{font-size:22px;font-weight:900;color:#0f3a5c;margin:2px 0 0}' +
    '.sbt-x{background:#0f3a5c;color:#fff;border:0;border-radius:999px;padding:8px 14px;font-weight:800;cursor:pointer}' +
    '.sbt-x.g{background:#fff;color:#0f3a5c;border:2px solid #0f3a5c}' +
    '.sbt-body h3{font-size:17px;font-weight:900;color:#0f3a5c;margin:18px 0 6px}' +
    '.sbt-body h4{font-size:15px;font-weight:800;color:#062033;margin:12px 0 4px}' +
    '.sbt-body ul,.sbt-body ol{margin:4px 0 8px 22px}.sbt-body li{margin:3px 0}' +
    '.sbt-body p{margin:4px 0 8px}' +
    '.sbt-body table{border-collapse:collapse;width:100%;margin:6px 0 10px;font-size:14px}.sbt-body th,.sbt-body td{border:1px solid rgba(5,43,65,.15);padding:6px 8px;text-align:left;vertical-align:top}.sbt-body th{background:#eef4f7}' +
    '.sbt-body .ok{color:#15803d;font-weight:800}.sbt-body .muted{color:#4a6272}' +
    '.sbt-toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%);z-index:1000002;background:#071a2c;color:#fff;padding:10px 18px;border-radius:999px;font:700 14px "Inter","Segoe UI",system-ui,Arial,sans-serif}' +
    '@media print{body.sbt-printing>*:not(.sbt-ov){display:none!important}body.sbt-printing .sbt-ov{position:static;background:#fff;padding:0}body.sbt-printing .sbt-box{box-shadow:none;max-width:none}body.sbt-printing .sbt-top button{display:none}}';

  function toast(t) { var d = document.createElement('div'); d.className = 'sbt-toast'; d.textContent = t; document.body.appendChild(d); setTimeout(function () { d.remove(); }, 2400); }

  function openKey() {
    var a = adapter(); if (!a || !a.key) return;
    var html = '';
    try { html = a.key(); } catch (e) { html = '<p>Sorry, the answer key could not be built for this game.</p>'; }
    var title = (document.title || '').split(' — ')[0];
    var ov = document.createElement('div'); ov.className = 'sbt-ov'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Teacher answer key');
    ov.innerHTML = '<div class="sbt-box"><div class="sbt-top"><div><b>Teacher answer key</b><h2></h2></div><div><button type="button" class="sbt-x g" data-p>Print</button> <button type="button" class="sbt-x" data-c>Close</button></div></div><div class="sbt-body"></div></div>';
    ov.querySelector('h2').textContent = title;
    ov.querySelector('.sbt-body').innerHTML = html;
    var close = function () { ov.remove(); document.body.classList.remove('sbt-printing'); document.removeEventListener('keydown', onKey); btn.focus(); };
    var onKey = function (e) { if (e.key === 'Escape') close(); };
    ov.querySelector('[data-c]').onclick = close;
    ov.querySelector('[data-p]').onclick = function () { document.body.classList.add('sbt-printing'); setTimeout(function () { window.print(); document.body.classList.remove('sbt-printing'); }, 50); };
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    document.addEventListener('keydown', onKey);
    document.body.appendChild(ov);
    ov.querySelector('[data-c]').focus();
  }

  var btn, menu;
  function build() {
    var a = adapter(); if (!a) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    btn = document.createElement('button'); btn.type = 'button'; btn.className = 'sbt-btn'; btn.textContent = 'Teacher tools'; btn.setAttribute('aria-expanded', 'false');
    menu = document.createElement('div'); menu.className = 'sbt-menu'; menu.hidden = true;
    document.body.appendChild(btn); document.body.appendChild(menu);
    var render = function () {
      var lbl = a.unlockLabel || 'levels';
      menu.innerHTML = '<span class="sbt-h">Teacher tools</span>' +
        (a.key ? '<button type="button" data-k>Answer key</button>' : '') +
        (a.unlock ? '<button type="button" data-u>' + (unlocked ? 'Lock ' + lbl + ' again' : 'Unlock all ' + lbl) + '</button>' : '');
      var k = menu.querySelector('[data-k]'), u = menu.querySelector('[data-u]');
      if (k) k.onclick = function () { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); openKey(); };
      if (u) u.onclick = function () {
        unlocked = !unlocked; setU(unlocked);
        try { a.unlock(unlocked); } catch (e) {}
        toast(unlocked ? 'All ' + lbl + ' unlocked' : lbl.charAt(0).toUpperCase() + lbl.slice(1) + ' locked again');
        render();
      };
    };
    render();
    btn.onclick = function () { menu.hidden = !menu.hidden; btn.setAttribute('aria-expanded', String(!menu.hidden)); };
    document.addEventListener('click', function (e) { if (!menu.hidden && !menu.contains(e.target) && e.target !== btn) { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); } });
    if (a.unlock && getU()) { unlocked = true; try { a.unlock(true); } catch (e) {} render(); }
  }

  function start() {
    try {
      fetch('/api/session', { credentials: 'same-origin' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
        isTeacher = !!(d && d.loggedIn && d.user && d.user.status === 'active' && (d.user.role === 'teacher' || d.user.role === 'admin'));
        if (isTeacher) { document.body.classList.add('sbl-is-teacher'); build(); }
      }).catch(function () {});
    } catch (e) {}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
