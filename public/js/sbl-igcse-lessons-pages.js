/* SBL IGCSE Geography classroom lessons: builds the lessons home page, the unit pages and the "continue" banner
   from the unit and lesson list in /js/sbl-igcse-lessons-sidebar.js. Lesson pages call it too, to
   remember which lessons a student has opened (on this device only). */
(function () {
  var TREE = (window.SBL_TREES || {})["igcse-geo-lessons"] || [];
  var lessonsOf = window.SBL_IGL_LESSONS_OF || function () { return []; };
  var ICON = window.SBL_IGL_ICON || function () { return ""; };
  var COL = ["", "p2", "p3"];
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function norm(p) { return (p || "").replace(/[?#].*$/, "").replace(/\/index\.html$/, "").replace(/\/+$/, "") || "/"; }
  function visited() { try { return JSON.parse(localStorage.getItem("sbl-igl-visited") || "{}"); } catch (e) { return {}; } }
  function stat(u) {
    var v = visited(), ls = lessonsOf(u), n = 0;
    ls.forEach(function (l) { if (v[norm(l.href)]) n++; });
    return { n: ls.length, seen: n, pct: ls.length ? Math.round(n / ls.length * 100) : 0 };
  }
  function card(u, gi, kicker) {
    var s = stat(u);
    return '<a class="lh-unit-card" href="' + esc(u.href) + '"><span class="lh-unit-card__icon" aria-hidden="true">' + ICON(u.icon) + '</span><span class="lh-unit-card__section">' + esc(kicker) + "</span><h3>" + esc(u.label) + "</h3>" +
      '<div class="lh-unit-card__bar"><div class="lh-unit-card__bar-fill" style="width:' + s.pct + '%"></div></div><div class="lh-unit-card__meta"><span>' +
      (s.n ? s.seen + " of " + s.n + " lessons opened · " + s.pct + "%" : "Lessons coming soon") + '</span><span class="lh-unit-card__go">' + (s.n ? (s.seen ? "Continue" : "Start") : "View") + " &rarr;</span></div></a>";
  }
  function continueBanner(el) {
    var last = null; try { last = JSON.parse(localStorage.getItem("sbl-igl-last") || "null"); } catch (e) {}
    if (!last || !el) return;
    el.innerHTML = '<a class="ib-continue" href="' + esc(last.href) + '"><span class="ib-continue__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span><span class="ib-continue__body"><small>Continue where you left off</small><b>' + esc(last.title) + "</b><span>" + esc(last.unit) + '</span></span><span class="ib-continue__go">Continue &rarr;</span></a>';
  }

  /* Lessons home page */
  var hub = document.getElementById("iglHub");
  if (hub) {
    var h = "", tot = 0, seen = 0;
    TREE.forEach(function (g, gi) {
      h += '<h2 class="lh-section-title ' + COL[gi % 3] + '">' + esc(g.section) + "</h2><div class=\"lh-units " + COL[gi % 3] + '">';
      g.units.forEach(function (u, ui) { var s = stat(u); tot += s.n; seen += s.seen; h += card(u, gi, g.section + " · Unit " + (ui + 1)); });
      h += "</div>";
    });
    hub.innerHTML = h;
    var pct = tot ? Math.round(seen / tot * 100) : 0, f = document.getElementById("iglOverallFill"), t = document.getElementById("iglOverallPct");
    if (f) f.style.width = pct + "%"; if (t) t.textContent = pct + "%";
    continueBanner(document.getElementById("iglContinue"));
  }

  /* Unit page */
  var unitEl = document.getElementById("iglUnit");
  if (unitEl) {
    var slug = unitEl.getAttribute("data-unit"), U = null, Y = null, gi0 = 0;
    TREE.forEach(function (g, gi) { g.units.forEach(function (u) { if (u.slug === slug) { U = u; Y = g; gi0 = gi; } }); });
    if (U) {
      var ls = lessonsOf(U), v = visited();
      var out = '<div class="lh-page-banner lh-page-banner--dark"><span class="lh-page-banner__icon" aria-hidden="true">' + ICON(U.icon) + '</span><div><span class="lh-page-banner__eyebrow">IGCSE GEOGRAPHY · ' + esc(Y.section.toUpperCase()) + "</span><h1>" + esc(U.label) + '</h1><p class="lh-page-banner__desc">' + esc(U.desc) + "</p></div></div>";
      out += '<h2 class="lh-section-title ' + COL[gi0 % 3] + '">Lessons</h2><div class="lh-units ' + COL[gi0 % 3] + '">';
      if (!ls.length) out += '<div class="lh-unit-card lh-unit-card--soon"><span class="lh-unit-card__section">Coming soon</span><h3>Lessons for this unit are on their way</h3><div class="lh-unit-card__meta"><span>Check back soon, or use the IGCSE revision lessons while you wait.</span></div></div>';
      ls.forEach(function (l, i) {
        var done = v[norm(l.href)];
        out += '<a class="lh-unit-card" href="' + esc(l.href) + '"><span class="lh-unit-card__icon" aria-hidden="true">' + ICON(U.icon) + '</span><span class="lh-unit-card__section">' + (typeof l.n === "string" ? esc(l.n) : "Lesson " + (l.n || i + 1)) + "</span><h3>" + esc(l.label) + '</h3><div class="lh-unit-card__bar"><div class="lh-unit-card__bar-fill" style="width:' + (done ? 100 : 0) + '%"></div></div><div class="lh-unit-card__meta"><span>' + (done ? "Opened" : "Not started") + '</span><span class="lh-unit-card__go">' + (done ? "Open again" : "Start") + " &rarr;</span></div></a>";
      });
      out += "</div>";
      unitEl.innerHTML = out;
      var crumb = document.getElementById("iglCrumb"); if (crumb) crumb.innerHTML = '<a href="/igcse/geography/lessons">IGCSE Geography lessons</a><span class="lh-crumbs__sep">/</span><span>' + esc(Y.section) + "</span><span class=\"lh-crumbs__sep\">/</span><span>" + esc(U.label) + "</span>";
      document.title = U.label + " — IGCSE Geography lessons — SBL";
    }
  }

  /* Lesson page: remember that it has been opened */
  var lessonEl = document.querySelector("[data-igl-lesson]");
  if (lessonEl && window.SBL_IGL_LOCATE) {
    var here = window.SBL_IGL_LOCATE(), p = norm(location.pathname);
    try {
      var v2 = visited(); v2[p] = Date.now(); localStorage.setItem("sbl-igl-visited", JSON.stringify(v2));
      var title = (document.querySelector("main h1") || {}).textContent || document.title;
      localStorage.setItem("sbl-igl-last", JSON.stringify({ href: p, title: title, unit: here ? here.year.section + " · " + here.unit.label : "IGCSE Geography" }));
    } catch (e) {}
  }
})();
