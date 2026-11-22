/* SBL KS3 Geography: sidebar navigation and the list of every KS3 unit and lesson.
   TO ADD A LESSON: add { "label": "Lesson title", "href": "/ks3/geography/<unit>/<lesson>", "id": "KS3-..." }
   to that unit's "lessons" list below, create the lesson page (copy /ks3/geography/template-preview/index.html,
   change the title, breadcrumbs and data-lesson-id) and add the lesson's content to /js/sbl-ks3-lessons.js.
   The KS3 home page, unit pages, sidebar and site search all read this list. */
(function () {
  var TREE = [
  {
    "section": "Year 7",
    "units": [
      {
        "slug": "y7-introduction-to-geography",
        "label": "Introduction to Geography",
        "href": "/ks3/geography/y7-introduction-to-geography",
        "status": "available",
        "desc": "What geographers study: physical, human and environmental geography, and how to think like a geographer.",
        "icon": "compass",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "y7-fantastic-places",
        "label": "Fantastic Places",
        "href": "/ks3/geography/y7-fantastic-places",
        "status": "available",
        "desc": "Explore remarkable places around the world and what makes each of them special.",
        "icon": "mountain",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "y7-map-skills",
        "label": "Map Skills",
        "href": "/ks3/geography/y7-map-skills",
        "status": "available",
        "desc": "Direction, grid references, scale, symbols, contours and atlas skills.",
        "icon": "map",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "y7-project",
        "label": "Project",
        "href": "/ks3/geography/y7-project",
        "status": "available",
        "desc": "An independent geography enquiry: ask a question, collect evidence and present your findings.",
        "icon": "clip",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "y7-oceans-and-waste",
        "label": "Oceans and Waste",
        "href": "/ks3/geography/y7-oceans-and-waste",
        "status": "available",
        "desc": "Our oceans, plastic pollution and how waste can be reduced.",
        "icon": "wave",
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
    "section": "Year 8",
    "units": [
      {
        "slug": "y8-tropical-storms",
        "label": "Tropical Storms",
        "href": "/ks3/geography/y8-tropical-storms",
        "status": "available",
        "desc": "How tropical storms form, their impacts and how people prepare and respond.",
        "icon": "storm",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "y8-development-and-inequality",
        "label": "Development and Inequalities",
        "href": "/ks3/geography/y8-development-and-inequality",
        "status": "available",
        "desc": "How we measure development and why inequality exists between and within countries.",
        "icon": "chart",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "y8-climate-change",
        "label": "Climate Change",
        "href": "/ks3/geography/y8-climate-change",
        "status": "available",
        "desc": "The causes, impacts and responses to a changing climate.",
        "icon": "therm",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "y8-micro-climates",
        "label": "Micro-climates",
        "href": "/ks3/geography/y8-micro-climates",
        "status": "available",
        "desc": "How local factors change the climate around us, with fieldwork around the school.",
        "icon": "sun",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "y8-africa-is-not-a-country",
        "label": "Africa Is Not a Country",
        "href": "/ks3/geography/y8-africa-is-not-a-country",
        "status": "available",
        "desc": "The diversity of Africa's 54 countries, and challenging single stories and stereotypes.",
        "icon": "globe",
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
    "section": "Year 9",
    "units": [
      {
        "slug": "y9-project",
        "label": "Project",
        "href": "/ks3/geography/y9-project",
        "status": "available",
        "desc": "An independent geography enquiry: ask a question, collect evidence and present your findings.",
        "icon": "clip",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "y9-restless-earth",
        "label": "Restless Earth",
        "href": "/ks3/geography/y9-restless-earth",
        "status": "available",
        "desc": "Plate tectonics, earthquakes and volcanoes, and how people live with hazards.",
        "icon": "volcano",
        "topics": [
          {
            "title": "Lessons",
            "lessons": []
          }
        ]
      },
      {
        "slug": "y9-population",
        "label": "Population",
        "href": "/ks3/geography/y9-population",
        "status": "available",
        "desc": "Population growth, distribution, migration and change.",
        "icon": "people",
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
  window.SBL_TREES["ks3-geo"] = TREE;

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
  window.SBL_KS3_ICON = function (k) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[k] || ICONS.globe) + "</svg>"; };

  var STORE = "sbl-ks3-tree-open";
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
  window.SBL_KS3_LESSONS_OF = lessonsOf;
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
  window.SBL_KS3_LOCATE = function () { var h = locate(norm(location.pathname)); return h ? { year: TREE[h.g], unit: TREE[h.g].units[h.u], lesson: h.lesson } : null; };
  function tog(id, open, label) { return '<button type="button" class="tn-tog" data-node="' + id + '" aria-expanded="' + open + '" aria-label="' + (open ? "Collapse " : "Expand ") + esc(label) + '"><span aria-hidden="true">' + (open ? "\u2212" : "+") + "</span></button>"; }

  function render(mount) {
    var path = norm(location.pathname), here = locate(path), open = loadOpen();
    if (here) { open["g" + here.g] = true; open["g" + here.g + "u" + here.u] = true; saveOpen(open); }
    var h = '<div class="lh-sidebar__brand"><span class="lh-sidebar__mark">SBL</span><span class="lh-sidebar__brand-text"><span class="name">KS3 Geography</span><span class="sub">Years 7 to 9</span></span></div>';
    h += '<a class="lh-sidebar__home" href="/humanities-hub">' + icon("back") + "<span>Back to Humanities Hub</span></a>";
    h += '<a class="lh-sidebar__home" href="/ks3/geography">' + icon("home") + "<span>KS3 Geography home</span></a>";
    h += '<a class="lh-sidebar__home" href="/geography/games#ks3">' + icon("game") + "<span>KS3 games</span></a>";
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
            h += '<li><a class="tn-leaf' + (cur ? " is-current" : "") + '" href="' + esc(l.href) + '"' + (cur ? ' aria-current="page"' : "") + ">" + (li + 1) + ". " + esc(l.label) + "</a></li>";
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
  window.renderKS3Sidebar = function (mountId) { var m = document.getElementById(mountId); if (!m) return; ensureCss(); render(m); };
})();
