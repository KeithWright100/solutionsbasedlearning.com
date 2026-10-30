/* SBL — IB Geography Revision Guide sidebar navigation (collapsible tree).
   Generated with the guide pages; regenerate rather than editing by hand. */

(function () {
  var TREE = [
  {
    "section": "Paper 1: Options",
    "units": [
      {
        "slug": "freshwater",
        "label": "Option A: Freshwater",
        "href": "/geography/revision/guide/freshwater",
        "status": "available",
        "topics": [
          {
            "title": "Topics",
            "lessons": [
              {
                "label": "Drainage basins",
                "href": "/geography/revision/guide/freshwater/topic-1-drainage-basin-hydrology-and-geomorphology"
              },
              {
                "label": "Flooding",
                "href": "/geography/revision/guide/freshwater/topic-2-flooding-and-flood-mitigation"
              },
              {
                "label": "Water scarcity and quality",
                "href": "/geography/revision/guide/freshwater/topic-3-water-scarcity-and-water-quality"
              },
              {
                "label": "Water management futures",
                "href": "/geography/revision/guide/freshwater/topic-4-water-management-futures"
              }
            ]
          }
        ]
      },
      {
        "slug": "leisure-tourism-sport",
        "label": "Option E: Leisure, Tourism and Sport",
        "href": null,
        "status": "soon",
        "topics": []
      },
      {
        "slug": "food-and-health",
        "label": "Option F: Food and Health",
        "href": null,
        "status": "soon",
        "topics": []
      }
    ]
  },
  {
    "section": "Paper 2: Core",
    "units": [
      {
        "slug": "changing-population",
        "label": "Unit 1: Changing Population",
        "href": "/geography/revision/guide/changing-population",
        "status": "available",
        "topics": [
          {
            "title": "Topics",
            "lessons": [
              {
                "label": "Distribution and development",
                "href": "/geography/revision/guide/changing-population/topic-1-population-and-economic-development-patterns"
              },
              {
                "label": "Changing populations",
                "href": "/geography/revision/guide/changing-population/topic-2-changing-populations-and-places"
              },
              {
                "label": "Challenges and opportunities",
                "href": "/geography/revision/guide/changing-population/topic-3-challenges-and-opportunities"
              }
            ]
          }
        ]
      },
      {
        "slug": "global-climate",
        "label": "Unit 2: Global Climate",
        "href": "/geography/revision/guide/global-climate",
        "status": "available",
        "topics": [
          {
            "title": "Topics",
            "lessons": [
              {
                "label": "Causes of climate change",
                "href": "/geography/revision/guide/global-climate/topic-1-causes-of-global-climate-change"
              },
              {
                "label": "Consequences of climate change",
                "href": "/geography/revision/guide/global-climate/topic-2-consequences-of-global-climate-change"
              },
              {
                "label": "Responding to climate change",
                "href": "/geography/revision/guide/global-climate/topic-3-responding-to-global-climate-change"
              }
            ]
          }
        ]
      },
      {
        "slug": "resource-consumption",
        "label": "Unit 3: Resource Consumption",
        "href": "/geography/revision/guide/resource-consumption",
        "status": "available",
        "topics": [
          {
            "title": "Topics",
            "lessons": [
              {
                "label": "Global trends in consumption",
                "href": "/geography/revision/guide/resource-consumption/topic-1-global-trends-in-consumption"
              },
              {
                "label": "Impacts of changing consumption",
                "href": "/geography/revision/guide/resource-consumption/topic-2-impacts-of-changing-trends-in-resource-consumption"
              },
              {
                "label": "Resource stewardship",
                "href": "/geography/revision/guide/resource-consumption/topic-3-resource-stewardship"
              }
            ]
          }
        ]
      }
    ]
  }
];
  /* shared with the site search in /js/sbl-nav.js */
  window.SBL_TREES = window.SBL_TREES || {};
  window.SBL_TREES["ib-guide"] = TREE;

  /* ---------------------------------------------------------------------
     Collapsible tree navigation (Oct 2026).
     Every level — paper, unit, topic — opens and closes with + / −. The
     branch containing the current page opens automatically and the page
     itself is highlighted. "Collapse all" / "Expand all" sit in the panel
     header. Styles live in /css/sbl-tree-nav.css (added automatically).
     Which branches a student has opened is remembered for this browser
     tab only (sessionStorage), so moving between lessons keeps the tree
     as they left it.
     --------------------------------------------------------------------- */

  var STORE = "sbl-ibguide-tree-open";

  function ensureCss() {
    if (document.querySelector('link[href="/css/sbl-tree-nav.css"]')) return;
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "/css/sbl-tree-nav.css";
    document.head.appendChild(l);
  }

  function icon(name) {
    var icons = {
      home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"/></svg>',
      book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5V5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>',
      back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/></svg>',
      minusAll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12h8"/></svg>',
      plusAll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>',
      game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 11v3M5.5 12.5h3M16 12h.01M18 13.5h.01"/></svg>',
      check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.6 2.6L16 9.5"/></svg>',
      list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/></svg>'
    };
    return icons[name] || "";
  }

  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function norm(p) { return (p || "").replace(/[?#].*$/, "").replace(/\/index\.html$/, "").replace(/\/+$/, "") || "/"; }

  function loadOpen() { try { return JSON.parse(sessionStorage.getItem(STORE) || "{}"); } catch (e) { return {}; } }
  function saveOpen(o) { try { sessionStorage.setItem(STORE, JSON.stringify(o)); } catch (e) {} }

  /* Find where the current page sits in TREE: section, unit, topic, lesson. */
  function locate(path, opts) {
    var hit = null;
    TREE.forEach(function (g, gi) {
      g.units.forEach(function (u, ui) {
        if (u.href && norm(u.href) === path) hit = hit || { g: gi, u: ui, t: -1, lesson: null, unitPage: true };
        (u.topics || []).forEach(function (t, ti) {
          (t.lessons || []).forEach(function (l) {
            if (l.href && (norm(l.href) === path || path.indexOf(norm(l.href) + "/") === 0)) hit = { g: gi, u: ui, t: ti, lesson: l.href };
          });
        });
      });
    });
    if (hit) return hit;
    /* fall back to what the page asked for (older pages pass activeUnit etc.) */
    if (opts && opts.activeUnit) {
      TREE.forEach(function (g, gi) {
        g.units.forEach(function (u, ui) {
          if (u.slug === opts.activeUnit) hit = { g: gi, u: ui, t: typeof opts.activeTopic === "number" ? opts.activeTopic : -1, lesson: opts.activeLessonHref || null };
        });
      });
    }
    if (!hit) {
      /* deepest unit whose href is a prefix of this path */
      TREE.forEach(function (g, gi) {
        g.units.forEach(function (u, ui) {
          if (u.href && path.indexOf(norm(u.href) + "/") === 0) hit = { g: gi, u: ui, t: -1, lesson: null };
        });
      });
    }
    return hit;
  }

  function toggleBtn(id, open, label) {
    return '<button type="button" class="tn-tog" data-node="' + id + '" aria-expanded="' + (open ? "true" : "false") + '" aria-label="' + (open ? "Collapse " : "Expand ") + esc(label) + '"><span aria-hidden="true">' + (open ? "−" : "+") + "</span></button>";
  }

  function render(mount, opts) {
    var path = norm(location.pathname);
    var here = locate(path, opts);
    var open = loadOpen();
    if (here) {
      open["g" + here.g] = true;
      open["g" + here.g + "u" + here.u] = true;
      if (here.t >= 0) open["g" + here.g + "u" + here.u + "t" + here.t] = true;
      saveOpen(open);
    }

    var html = '<div class="lh-sidebar__brand">';
    html += '<span class="lh-sidebar__mark">SBL</span>';
    html += '<span class="lh-sidebar__brand-text"><span class="name">IB Geography</span><span class="sub">Revision Guide</span></span>';
    html += "</div>";
    html += '<a class="lh-sidebar__home" href="/humanities-hub">' + icon("back") + "<span>Back to Humanities Hub</span></a>";
    html += '<a class="lh-sidebar__home" href="/geography/revision/guide">' + icon("home") + "<span>Revision guide overview</span></a>";
    html += '<a class="lh-sidebar__home" href="/geography/revision">' + icon("check") + "<span>Check your understanding</span></a>";
    html += '<a class="lh-sidebar__home" href="/geography">' + icon("book") + "<span>IB Geography lessons</span></a>";
    html += '<div class="tn-panel">';
    html += '<div class="tn-head"><button type="button" class="tn-head__title" aria-expanded="true">' + icon("list") + "<span>Contents</span></button>";
    html += '<span class="tn-head__tools"><button type="button" class="tn-all" data-all="close" title="Collapse all" aria-label="Collapse all">' + icon("minusAll") + '</button>';
    html += '<button type="button" class="tn-all" data-all="open" title="Expand all" aria-label="Expand all">' + icon("plusAll") + "</button></span></div>";
    html += '<ul class="tn-tree tn-l1">';

    TREE.forEach(function (g, gi) {
      var gid = "g" + gi, gOpen = !!open[gid];
      html += '<li class="tn-node' + (here && here.g === gi ? " is-path" : "") + '">';
      html += '<div class="tn-row tn-row--section"><button type="button" class="tn-label" data-node="' + gid + '" title="' + esc(g.section) + '">' + esc(g.section) + "</button>" + toggleBtn(gid, gOpen, g.section) + "</div>";
      html += '<ul class="tn-tree tn-l2"' + (gOpen ? "" : " hidden") + ' data-for="' + gid + '">';
      g.units.forEach(function (u, ui) {
        var uid = gid + "u" + ui, uOpen = !!open[uid];
        var hasT = (u.topics || []).some(function (t) { return t.lessons && t.lessons.length; });
        var onUnit = here && here.g === gi && here.u === ui;
        var isCur = onUnit && here.unitPage;
        html += '<li class="tn-node' + (onUnit ? " is-path" : "") + (u.status === "soon" ? " is-soon" : "") + '">';
        html += '<div class="tn-row tn-row--unit' + (isCur ? " is-current" : "") + '">';
        if (u.href && u.status !== "soon") html += '<a class="tn-label" href="' + esc(u.href) + '" title="' + esc(u.label) + '"' + (isCur ? ' aria-current="page"' : "") + ">" + esc(u.label) + "</a>";
        else html += '<span class="tn-label" title="' + esc(u.label) + '">' + esc(u.label) + "</span>";
        if (u.status === "soon") html += '<span class="tn-soon">Soon</span>';
        else if (hasT) html += toggleBtn(uid, uOpen, u.label);
        html += "</div>";
        var flat = hasT && u.topics.filter(function (t) { return t.lessons && t.lessons.length; }).length === 1;
        if (flat) {
          var ft = u.topics.filter(function (t) { return t.lessons && t.lessons.length; })[0];
          html += '<ul class="tn-tree tn-l4 tn-l4--flat"' + (uOpen ? "" : " hidden") + ' data-for="' + uid + '">';
          ft.lessons.forEach(function (l) {
            var cur = here && here.lesson && norm(l.href) === norm(here.lesson);
            html += '<li><a class="tn-leaf' + (cur ? " is-current" : "") + '" href="' + esc(l.href) + '" title="' + esc(l.label) + '"' + (cur ? ' aria-current="page"' : "") + ">" + esc(l.label) + "</a></li>";
          });
          html += "</ul>";
        } else if (hasT) {
          html += '<ul class="tn-tree tn-l3"' + (uOpen ? "" : " hidden") + ' data-for="' + uid + '">';
          u.topics.forEach(function (t, ti) {
            if (!t.lessons || !t.lessons.length) return;
            var tid = uid + "t" + ti, tOpen = !!open[tid];
            html += '<li class="tn-node' + (onUnit && here.t === ti ? " is-path" : "") + '">';
            html += '<div class="tn-row tn-row--topic"><button type="button" class="tn-label" data-node="' + tid + '" title="' + esc(t.title) + '">' + esc(t.title) + "</button>" + toggleBtn(tid, tOpen, t.title) + "</div>";
            html += '<ul class="tn-tree tn-l4"' + (tOpen ? "" : " hidden") + ' data-for="' + tid + '">';
            t.lessons.forEach(function (l) {
              var cur = here && here.lesson && norm(l.href) === norm(here.lesson);
              html += '<li><a class="tn-leaf' + (cur ? " is-current" : "") + '" href="' + esc(l.href) + '" title="' + esc(l.label) + '"' + (cur ? ' aria-current="page"' : "") + ">" + esc(l.label) + "</a></li>";
            });
            html += "</ul></li>";
          });
          html += "</ul>";
        }
        html += "</li>";
      });
      html += "</ul></li>";
    });
    html += "</ul></div>";

    mount.innerHTML = html;
    mount.classList.add("tn-sidebar");

    function setNode(id, isOpen) {
      var list = mount.querySelector('ul[data-for="' + id + '"]');
      if (!list) return;
      if (isOpen) list.removeAttribute("hidden"); else list.setAttribute("hidden", "");
      mount.querySelectorAll('.tn-tog[data-node="' + id + '"]').forEach(function (b) {
        b.setAttribute("aria-expanded", isOpen ? "true" : "false");
        b.firstChild.textContent = isOpen ? "−" : "+";
      });
      var o = loadOpen();
      if (isOpen) o[id] = true; else delete o[id];
      saveOpen(o);
    }

    mount.addEventListener("click", function (e) {
      var b = e.target.closest("[data-node]");
      if (b && b.tagName === "BUTTON") {
        var id = b.getAttribute("data-node");
        var list = mount.querySelector('ul[data-for="' + id + '"]');
        if (list) setNode(id, list.hasAttribute("hidden"));
        return;
      }
      var all = e.target.closest(".tn-all");
      if (all) {
        var openAll = all.getAttribute("data-all") === "open";
        mount.querySelectorAll("ul[data-for]").forEach(function (ul) { setNode(ul.getAttribute("data-for"), openAll); });
        if (!openAll && here) {
          /* keep the path to the current page visible */
          setNode("g" + here.g, true);
          setNode("g" + here.g + "u" + here.u, true);
          if (here.t >= 0) setNode("g" + here.g + "u" + here.u + "t" + here.t, true);
        }
        return;
      }
      var head = e.target.closest(".tn-head__title");
      if (head) {
        var panel = mount.querySelector(".tn-panel");
        var shut = panel.classList.toggle("is-shut");
        head.setAttribute("aria-expanded", shut ? "false" : "true");
      }
    });

    /* on phones the contents start folded away under the "Contents" button */
    if (window.matchMedia && window.matchMedia("(max-width: 900px)").matches) {
      mount.querySelector(".tn-panel").classList.add("is-shut");
      mount.querySelector(".tn-head__title").setAttribute("aria-expanded", "false");
    }

    /* bring the current page into view inside the sidebar */
    var curEl = mount.querySelector(".is-current");
    if (curEl && mount.scrollHeight > mount.clientHeight) {
      var top = curEl.getBoundingClientRect().top - mount.getBoundingClientRect().top;
      if (top > mount.clientHeight - 80) mount.scrollTop = top - mount.clientHeight / 3;
    }
  }

  window.renderSBLIbGuideSidebar = function (mountId, opts) {
    var mount = document.getElementById(mountId);
    if (!mount) return;
    ensureCss();
    render(mount, opts || {});
  };
})();
