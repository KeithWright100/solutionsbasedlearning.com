/* SBL IGCSE Geography classroom lessons: sidebar navigation and the list of every unit and lesson.
   TO ADD A LESSON: add { "label": "Lesson title", "href": "/igcse/geography/lessons/<unit>/<lesson>", "id": "IGL-...", "n": 6 }
   to that unit's "lessons" list below, create the lesson page (copy an existing lesson folder, change the title,
   breadcrumbs, eyebrow, <h1> and data-lesson-id) and add the lesson's content to /js/sbl-igcse-classroom-lessons.js.
   The IGCSE lessons home page, unit pages and sidebar all read this list. These are separate from the
   IGCSE revision lessons in /igcse/geography/learn. */
(function () {
  var TREE = [
  {
    "section": "Paper 1: Physical geography",
    "units": [
      {
        "slug": "coastal-environments",
        "label": "Coastal Environments",
        "href": "/igcse/geography/lessons/coastal-environments",
        "status": "available",
        "desc": "Coastal processes and landforms, coastal ecosystems, and how people manage the coast.",
        "icon": "wave",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "hazardous-environments",
        "label": "Hazardous Environments",
        "href": "/igcse/geography/lessons/hazardous-environments",
        "status": "available",
        "desc": "Plate tectonics, earthquakes, volcanoes and tropical cyclones, and how people respond to hazards.",
        "icon": "volcano",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      }
    ]
  },
  {
    "section": "Paper 2: Human geography",
    "units": [
      {
        "slug": "economic-activity-and-energy",
        "label": "Economic Activity and Energy",
        "href": "/igcse/geography/lessons/economic-activity-and-energy",
        "status": "available",
        "desc": "Sectors of the economy, how employment changes as countries develop, and energy resources.",
        "icon": "chart",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "rural-environments",
        "label": "Rural Environments",
        "href": "/igcse/geography/lessons/rural-environments",
        "status": "available",
        "desc": "Rural ecosystems, changing rural areas, and the challenges and opportunities they face.",
        "icon": "mountain",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "development-and-human-welfare",
        "label": "Development and Human Welfare",
        "href": "/igcse/geography/lessons/development-and-human-welfare",
        "status": "available",
        "desc": "Measuring development, why the world is unequal, and strategies to close the development gap.",
        "icon": "people",
        "topics": [
          {
            "title": "Lessons",
            "lessons": [
              {
                "label": "Causes of uneven development",
                "href": "/igcse/geography/lessons/development-and-human-welfare/l06-causes-of-uneven-development",
                "id": "IGL-DV06",
                "n": 6
              },
              {
                "label": "Uneven development within countries: Italy",
                "href": "/igcse/geography/lessons/development-and-human-welfare/l07-italy-uneven-development",
                "id": "IGL-DV07",
                "n": 7
              },
              {
                "label": "International strategies to reduce the development gap",
                "href": "/igcse/geography/lessons/development-and-human-welfare/l08-reducing-the-development-gap",
                "id": "IGL-DV08",
                "n": 8
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "section": "Fieldwork",
    "units": [
      {
        "slug": "coastal-fieldwork",
        "label": "Coastal Fieldwork",
        "href": "/igcse/geography/lessons/coastal-fieldwork",
        "status": "available",
        "desc": "Planning, collecting, presenting and evaluating a coastal investigation.",
        "icon": "clip",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "rural-fieldwork",
        "label": "Rural Fieldwork",
        "href": "/igcse/geography/lessons/rural-fieldwork",
        "status": "available",
        "desc": "Planning, collecting, presenting and evaluating a rural investigation.",
        "icon": "clip",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      }
    ]
  }
];
  window.SBL_TREES = window.SBL_TREES || {};
  window.SBL_TREES["igcse-geo-lessons"] = TREE;

  var ICONS = {
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    mountain: '<path d="M3 20l6-10 4 6 2-3 6 7z"/><path d="M9 10l1.5 2.5"/>',
    map: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    clip: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3"/>',
    wave: '<path d="M2 12c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6 0"/><path d="M2 17c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6 0"/><path d="M8 7l2-3 2 3"/>',
    storm: '<path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M12 3c-5 0-8 3-8 6 3-2 6-2 8 3"/><path d="M12 21c5 0 8-3 8-6-3 2-6 2-8-3"/>',
    chart: '<path d="M4 20h16"/><path d="M6 16v-3M10 16V9M14 16v-5M18 16V6"/>',
    therm: '<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/><path d="M12 9v7"/>',
    sun: '<circle cx="9" cy="9" r="3"/><path d="M9 2v2M2 9h2M4 4l1.4 1.4M14 4l-1.4 1.4"/><path d="M8 18a4 4 0 0 1 4-4 5 5 0 0 1 9 2 3 3 0 0 1-1 6H9a3 3 0 0 1-1-4z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    volcano: '<path d="M3 21l6-9h6l6 9z"/><path d="M9 12l1-3h4l1 3"/><path d="M11 6l-1-3M13 6l1-3M12 6V2"/>',
    people: '<circle cx="8" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3 20c0-3 2.5-5.5 5-5.5s5 2.5 5 5.5M13 20c0-2.5 1.5-4.5 3-4.5s4 2 4 4.5"/>'
  };
  window.SBL_IGL_ICON = function (k) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[k] || ICONS.globe) + "</svg>"; };

  var STORE = "sbl-igl-tree-open";
  function ensureCss() {
    if (document.querySelector('link[href="/css/sbl-tree-nav.css"]')) return;
    var l = document.createElement("link"); l.rel = "stylesheet"; l.href = "/css/sbl-tree-nav.css"; document.head.appendChild(l);
  }
  function icon(name) {
    var i = {
      home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"/></svg>',
      back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/></svg>',
      game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="5"/><path d="M7 10v4M5 12h4M15 11h.01M18 13h.01"/></svg>',
      minusAll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12h8"/></svg>',
      plusAll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>',
      list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/></svg>'
    };
    return i[name] || "";
  }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function norm(p) { return (p || "").replace(/[?#].*$/, "").replace(/\/index\.html$/, "").replace(/\/+$/, "") || "/"; }
  function lessonsOf(u) { var a = []; (u.topics || []).forEach(function (t) { a = a.concat(t.lessons || []); }); return a; }
  window.SBL_IGL_LESSONS_OF = lessonsOf;
  function loadOpen() { try { return JSON.parse(sessionStorage.getItem(STORE) || "{}"); } catch (e) { return {}; } }
  function saveOpen(o) { try { sessionStorage.setItem(STORE, JSON.stringify(o)); } catch (e) {} }
  function locate(path) {
    var hit = null;
    TREE.forEach(function (g, gi) {
      g.units.forEach(function (u, ui) {
        if (norm(u.href) === path) hit = hit || { g: gi, u: ui, unitPage: true };
        lessonsOf(u).forEach(function (l) { if (norm(l.href) === path) hit = { g: gi, u: ui, lesson: l.href }; });
        if (!hit && path.indexOf(norm(u.href) + "/") === 0) hit = { g: gi, u: ui };
      });
    });
    return hit;
  }
  window.SBL_IGL_LOCATE = function () { var h = locate(norm(location.pathname)); return h ? { year: TREE[h.g], unit: TREE[h.g].units[h.u], lesson: h.lesson } : null; };
  function tog(id, open, label) { return '<button type="button" class="tn-tog" data-node="' + id + '" aria-expanded="' + open + '" aria-label="' + (open ? "Collapse " : "Expand ") + esc(label) + '"><span aria-hidden="true">' + (open ? "\u2212" : "+") + "</span></button>"; }

  function render(mount) {
    var path = norm(location.pathname), here = locate(path), open = loadOpen();
    if (here) { open["g" + here.g] = true; open["g" + here.g + "u" + here.u] = true; saveOpen(open); }
    var h = '<div class="lh-sidebar__brand"><span class="lh-sidebar__mark">SBL</span><span class="lh-sidebar__brand-text"><span class="name">IGCSE Geography</span><span class="sub">Classroom lessons</span></span></div>';
    h += '<a class="lh-sidebar__home" href="/humanities-hub">' + icon("back") + "<span>Back to Humanities Hub</span></a>";
    h += '<a class="lh-sidebar__home" href="/igcse/geography/lessons">' + icon("home") + "<span>IGCSE lessons home</span></a>";
    h += '<a class="lh-sidebar__home" href="/igcse/geography/learn">' + icon("list") + "<span>IGCSE revision lessons</span></a>";
    h += '<a class="lh-sidebar__home" href="/geography/games#igcse">' + icon("game") + "<span>IGCSE games</span></a>";
    h += '<div class="tn-panel"><div class="tn-head"><button type="button" class="tn-head__title" aria-expanded="true">' + icon("list") + '<span>Contents</span></button><span class="tn-head__tools"><button type="button" class="tn-all" data-all="close" title="Collapse all" aria-label="Collapse all">' + icon("minusAll") + '</button><button type="button" class="tn-all" data-all="open" title="Expand all" aria-label="Expand all">' + icon("plusAll") + "</button></span></div>";
    h += '<ul class="tn-tree tn-l1">';
    TREE.forEach(function (g, gi) {
      var gid = "g" + gi, gOpen = !!open[gid];
      h += '<li class="tn-node' + (here && here.g === gi ? " is-path" : "") + '"><div class="tn-row tn-row--section"><button type="button" class="tn-label" data-node="' + gid + '">' + esc(g.section) + "</button>" + tog(gid, gOpen, g.section) + "</div>";
      h += '<ul class="tn-tree tn-l2"' + (gOpen ? "" : " hidden") + ' data-for="' + gid + '">';
      g.units.forEach(function (u, ui) {
        var uid = gid + "u" + ui, uOpen = !!open[uid], ls = lessonsOf(u), onUnit = here && here.g === gi && here.u === ui, isCur = onUnit && here.unitPage;
        h += '<li class="tn-node' + (onUnit ? " is-path" : "") + '"><div class="tn-row tn-row--unit' + (isCur ? " is-current" : "") + '"><a class="tn-label" href="' + esc(u.href) + '"' + (isCur ? ' aria-current="page"' : "") + ">" + esc(u.label) + "</a>" + (ls.length ? tog(uid, uOpen, u.label) : "") + "</div>";
        if (ls.length) {
          h += '<ul class="tn-tree tn-l4"' + (uOpen ? "" : " hidden") + ' data-for="' + uid + '">';
          ls.forEach(function (l, li) {
            var cur = here && here.lesson && norm(l.href) === norm(here.lesson);
            h += '<li><a class="tn-leaf' + (cur ? " is-current" : "") + '" href="' + esc(l.href) + '"' + (cur ? ' aria-current="page"' : "") + ">" + (typeof l.n === "string" ? "" : (l.n || li + 1) + ". ") + esc(l.label) + "</a></li>";
          });
          h += "</ul>";
        }
        h += "</li>";
      });
      h += "</ul></li>";
    });
    h += "</ul></div>";
    mount.innerHTML = h; mount.classList.add("tn-sidebar");
    function setNode(id, isOpen) {
      var list = mount.querySelector('ul[data-for="' + id + '"]'); if (!list) return;
      if (isOpen) list.removeAttribute("hidden"); else list.setAttribute("hidden", "");
      mount.querySelectorAll('.tn-tog[data-node="' + id + '"]').forEach(function (b) { b.setAttribute("aria-expanded", isOpen ? "true" : "false"); b.firstChild.textContent = isOpen ? "\u2212" : "+"; });
      var o = loadOpen(); if (isOpen) o[id] = true; else delete o[id]; saveOpen(o);
    }
    mount.addEventListener("click", function (e) {
      var b = e.target.closest("[data-node]");
      if (b && b.tagName === "BUTTON") { var id = b.getAttribute("data-node"), l = mount.querySelector('ul[data-for="' + id + '"]'); if (l) setNode(id, l.hasAttribute("hidden")); return; }
      var all = e.target.closest(".tn-all");
      if (all) { var oa = all.getAttribute("data-all") === "open"; mount.querySelectorAll("ul[data-for]").forEach(function (ul) { setNode(ul.getAttribute("data-for"), oa); }); if (!oa && here) { setNode("g" + here.g, true); setNode("g" + here.g + "u" + here.u, true); } return; }
      var head = e.target.closest(".tn-head__title");
      if (head) { var p = mount.querySelector(".tn-panel"), shut = p.classList.toggle("is-shut"); head.setAttribute("aria-expanded", shut ? "false" : "true"); }
    });
    if (window.matchMedia && window.matchMedia("(max-width: 900px)").matches) { mount.querySelector(".tn-panel").classList.add("is-shut"); mount.querySelector(".tn-head__title").setAttribute("aria-expanded", "false"); }
  }
  window.renderIglSidebar = function (mountId) { var m = document.getElementById(mountId); if (!m) return; ensureCss(); render(m); };
})();
