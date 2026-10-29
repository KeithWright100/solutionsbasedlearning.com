/* SBL Learning Hub — Edexcel IGCSE Geography sidebar navigation.
   Same structure, markup and CSS classes as sbl-sidebar.js (IB
   Geography) and sbl-economics-sidebar.js, kept as its own file so the
   IGCSE area can be edited without touching the IB pages. Add lessons
   to TREE as each topic is built; units marked "soon" show a badge. */

(function () {
  var TREE = [
  {
    "section": "Paper 1: Physical Geography",
    "units": [
      {
        "slug": "coastal",
        "label": "Coastal Environments",
        "href": "/igcse/geography/learn/coastal-environments",
        "status": "available",
        "topics": [
          {
            "title": "2.1 Coastal processes and landforms",
            "lessons": [
              {
                "label": "Characteristics of waves",
                "href": "/igcse/geography/learn/coastal-environments/l01-characteristics-of-waves"
              },
              {
                "label": "Erosion, transportation and deposition",
                "href": "/igcse/geography/learn/coastal-environments/l02-erosion-transportation-deposition"
              },
              {
                "label": "Weathering and mass movement",
                "href": "/igcse/geography/learn/coastal-environments/l03-weathering-and-mass-movement"
              },
              {
                "label": "Geology, vegetation, people and sea level",
                "href": "/igcse/geography/learn/coastal-environments/l04-geology-vegetation-people-sea-level"
              },
              {
                "label": "Landforms 1: headlands, bays and coves",
                "href": "/igcse/geography/learn/coastal-environments/l05-headlands-bays-coves"
              },
              {
                "label": "Landforms 2: cliffs, caves, arches, stacks",
                "href": "/igcse/geography/learn/coastal-environments/l06-cliffs-caves-arches-stacks"
              },
              {
                "label": "Landforms 3: beaches, spits, bars, tombolos",
                "href": "/igcse/geography/learn/coastal-environments/l07-beaches-spits-bars"
              }
            ]
          },
          {
            "title": "2.2 Coastal ecosystems",
            "lessons": [
              {
                "label": "Coastal ecosystems: distribution and value",
                "href": "/igcse/geography/learn/coastal-environments/l08-coastal-ecosystems"
              },
              {
                "label": "Coral reefs: a named ecosystem",
                "href": "/igcse/geography/learn/coastal-environments/l09-coral-reefs"
              },
              {
                "label": "Threats to coastal ecosystems",
                "href": "/igcse/geography/learn/coastal-environments/l10-threats-to-coastal-ecosystems"
              }
            ]
          },
          {
            "title": "2.3 People and coastal management",
            "lessons": [
              {
                "label": "Conflicts on the coast",
                "href": "/igcse/geography/learn/coastal-environments/l11-coastal-conflicts"
              },
              {
                "label": "Coastal flooding: causes and prevention",
                "href": "/igcse/geography/learn/coastal-environments/l12-coastal-flooding"
              },
              {
                "label": "Hard and soft engineering",
                "href": "/igcse/geography/learn/coastal-environments/l13-hard-and-soft-engineering"
              },
              {
                "label": "Case study: Sri Lanka (CZMP)",
                "href": "/igcse/geography/learn/coastal-environments/l14-sri-lanka-coastal-management"
              },
              {
                "label": "Case study: Holderness, UK",
                "href": "/igcse/geography/learn/coastal-environments/l15-holderness-coastal-management"
              }
            ]
          },
          {
            "title": "Exam practice",
            "lessons": [
              {
                "label": "Past paper questions",
                "href": "/igcse/geography/learn/coastal-environments/past-papers"
              }
            ]
          }
        ]
      },
      {
        "slug": "hazardous",
        "label": "Hazardous Environments",
        "href": "/igcse/geography/learn/hazardous-environments",
        "status": "available",
        "topics": [
          {
            "title": "Hazards and plate tectonics",
            "lessons": [
              {
                "label": "What is a hazard?",
                "href": "/igcse/geography/learn/hazardous-environments/l01-what-is-a-hazard"
              },
              {
                "label": "Structure of the Earth",
                "href": "/igcse/geography/learn/hazardous-environments/l02-structure-of-the-earth"
              },
              {
                "label": "Plate boundaries",
                "href": "/igcse/geography/learn/hazardous-environments/l03-plate-boundaries"
              }
            ]
          },
          {
            "title": "Earthquakes",
            "lessons": [
              {
                "label": "Earthquakes",
                "href": "/igcse/geography/learn/hazardous-environments/l04-earthquakes"
              },
              {
                "label": "Earthquake hazards and tsunamis",
                "href": "/igcse/geography/learn/hazardous-environments/l05-earthquake-hazards-and-tsunamis"
              },
              {
                "label": "Earthquake management",
                "href": "/igcse/geography/learn/hazardous-environments/l06-earthquake-management"
              },
              {
                "label": "Case study: Japan 2011 (HIC)",
                "href": "/igcse/geography/learn/hazardous-environments/l07-japan-2011-earthquake"
              },
              {
                "label": "Case study: Haiti 2010 (LIC)",
                "href": "/igcse/geography/learn/hazardous-environments/l08-haiti-2010-earthquake"
              }
            ]
          },
          {
            "title": "Volcanoes",
            "lessons": [
              {
                "label": "Volcanoes",
                "href": "/igcse/geography/learn/hazardous-environments/l09-volcanoes"
              },
              {
                "label": "Case study: K\u012blauea 2018",
                "href": "/igcse/geography/learn/hazardous-environments/l10-kilauea-2018"
              }
            ]
          },
          {
            "title": "Tropical cyclones",
            "lessons": [
              {
                "label": "Tropical storms",
                "href": "/igcse/geography/learn/hazardous-environments/l11-tropical-storms"
              },
              {
                "label": "Case study: Typhoon Haiyan 2013",
                "href": "/igcse/geography/learn/hazardous-environments/l12-typhoon-haiyan-2013"
              }
            ]
          },
          {
            "title": "Exam practice",
            "lessons": [
              {
                "label": "Past paper questions",
                "href": "/igcse/geography/learn/hazardous-environments/past-papers"
              }
            ]
          }
        ]
      },
      {
        "slug": "coastal-fieldwork",
        "label": "Coastal Fieldwork",
        "href": "/igcse/geography/learn/coastal-fieldwork",
        "status": "available",
        "topics": [
          {
            "title": "Planning the enquiry",
            "lessons": [
              {
                "label": "Why fieldwork? The enquiry process",
                "href": "/igcse/geography/learn/coastal-fieldwork/l01-why-fieldwork"
              },
              {
                "label": "Data types, pilot surveys and risk",
                "href": "/igcse/geography/learn/coastal-fieldwork/l02-planning-data-and-risk"
              },
              {
                "label": "Sampling and transects",
                "href": "/igcse/geography/learn/coastal-fieldwork/l03-sampling"
              }
            ]
          },
          {
            "title": "Collecting the data",
            "lessons": [
              {
                "label": "Coastal data collection methods",
                "href": "/igcse/geography/learn/coastal-fieldwork/l04-data-collection-methods"
              }
            ]
          },
          {
            "title": "Presenting, analysing and evaluating",
            "lessons": [
              {
                "label": "Presenting fieldwork data",
                "href": "/igcse/geography/learn/coastal-fieldwork/l05-presenting-data"
              },
              {
                "label": "Analysis and conclusions",
                "href": "/igcse/geography/learn/coastal-fieldwork/l06-analysis-and-conclusions"
              },
              {
                "label": "Evaluating the enquiry",
                "href": "/igcse/geography/learn/coastal-fieldwork/l07-evaluation"
              }
            ]
          },
          {
            "title": "Exam practice",
            "lessons": [
              {
                "label": "Past paper questions",
                "href": "/igcse/geography/learn/coastal-fieldwork/past-papers"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "section": "Paper 2: Human Geography",
    "units": [
      {
        "slug": "economic",
        "label": "Economic Activity and Energy",
        "href": "/igcse/geography/learn/economic-activity-and-energy",
        "status": "available",
        "topics": [
          {
            "title": "Economic sectors and location",
            "lessons": [
              {
                "label": "Economic sectors and employment",
                "href": "/igcse/geography/learn/economic-activity-and-energy/l01-economic-sectors-and-employment"
              },
              {
                "label": "Location of economic activity",
                "href": "/igcse/geography/learn/economic-activity-and-energy/l02-location-of-economic-activity"
              }
            ]
          },
          {
            "title": "Changing employment",
            "lessons": [
              {
                "label": "Changes in sector employment",
                "href": "/igcse/geography/learn/economic-activity-and-energy/l03-changes-in-sector-employment"
              },
              {
                "label": "Sector shifts in three countries",
                "href": "/igcse/geography/learn/economic-activity-and-energy/l04-sector-shifts-in-three-countries"
              },
              {
                "label": "Informal employment: Bangkok",
                "href": "/igcse/geography/learn/economic-activity-and-energy/l05-informal-employment-bangkok"
              }
            ]
          },
          {
            "title": "Energy resources",
            "lessons": [
              {
                "label": "Rising energy demand",
                "href": "/igcse/geography/learn/economic-activity-and-energy/l06-rising-energy-demand"
              },
              {
                "label": "Renewable vs non-renewable",
                "href": "/igcse/geography/learn/economic-activity-and-energy/l07-renewable-and-non-renewable-energy"
              },
              {
                "label": "Case study: fracking in the UK",
                "href": "/igcse/geography/learn/economic-activity-and-energy/l08-case-study-fracking-in-the-uk"
              }
            ]
          },
          {
            "title": "Sustainable energy",
            "lessons": [
              {
                "label": "Sustainable energy",
                "href": "/igcse/geography/learn/economic-activity-and-energy/l09-sustainable-energy"
              },
              {
                "label": "Case study: micro-hydro in Peru",
                "href": "/igcse/geography/learn/economic-activity-and-energy/l10-case-study-micro-hydro-in-peru"
              }
            ]
          },
          {
            "title": "Exam practice",
            "lessons": [
              {
                "label": "Past paper questions",
                "href": "/igcse/geography/learn/economic-activity-and-energy/past-papers"
              }
            ]
          }
        ]
      },
      {
        "slug": "rural",
        "label": "Rural Environments",
        "href": "/igcse/geography/learn/rural-environments",
        "status": "available",
        "topics": [
          {
            "title": "Ecosystems and biomes",
            "lessons": [
              {
                "label": "The world\u2019s biomes",
                "href": "/igcse/geography/learn/rural-environments/l01-world-biomes"
              },
              {
                "label": "Ecosystem goods and services",
                "href": "/igcse/geography/learn/rural-environments/l02-ecosystem-goods-and-services"
              },
              {
                "label": "Case study: the Amazon",
                "href": "/igcse/geography/learn/rural-environments/l03-amazon-rainforest"
              }
            ]
          },
          {
            "title": "Farming and rural areas",
            "lessons": [
              {
                "label": "Food production and farming",
                "href": "/igcse/geography/learn/rural-environments/l04-food-production-and-farming"
              },
              {
                "label": "Characteristics of rural areas",
                "href": "/igcse/geography/learn/rural-environments/l05-characteristics-of-rural-areas"
              }
            ]
          },
          {
            "title": "Rural change in a developed country (UK)",
            "lessons": [
              {
                "label": "UK rural change (1): counter-urbanisation",
                "href": "/igcse/geography/learn/rural-environments/l06-uk-rural-change-counter-urbanisation"
              },
              {
                "label": "UK rural change (2): tourism and isolation",
                "href": "/igcse/geography/learn/rural-environments/l07-uk-rural-change-tourism-and-isolation"
              },
              {
                "label": "Diversification of farming",
                "href": "/igcse/geography/learn/rural-environments/l08-diversification-of-farming"
              },
              {
                "label": "Sustainable rural living (UK)",
                "href": "/igcse/geography/learn/rural-environments/l09-sustainable-rural-living"
              }
            ]
          },
          {
            "title": "Rural change in an emerging country (Thailand)",
            "lessons": [
              {
                "label": "Thailand (1): rural\u2013urban migration",
                "href": "/igcse/geography/learn/rural-environments/l10-thailand-rural-urban-migration"
              },
              {
                "label": "Thailand (2): managing rural challenges",
                "href": "/igcse/geography/learn/rural-environments/l11-managing-rural-challenges-thailand"
              }
            ]
          },
          {
            "title": "Exam practice",
            "lessons": [
              {
                "label": "Past paper questions",
                "href": "/igcse/geography/learn/rural-environments/past-papers"
              }
            ]
          }
        ]
      },
      {
        "slug": "rural-fieldwork",
        "label": "Rural Fieldwork",
        "href": "/igcse/geography/learn/rural-fieldwork",
        "status": "available",
        "topics": [
          {
            "title": "Planning the enquiry",
            "lessons": [
              {
                "label": "Our rural enquiry and location",
                "href": "/igcse/geography/learn/rural-fieldwork/l01-our-rural-enquiry"
              },
              {
                "label": "Settlement hierarchy and hypothesis",
                "href": "/igcse/geography/learn/rural-fieldwork/l02-settlement-hierarchy-and-hypothesis"
              },
              {
                "label": "Data types, equipment and risk",
                "href": "/igcse/geography/learn/rural-fieldwork/l03-data-types-equipment-and-risk"
              },
              {
                "label": "Sampling",
                "href": "/igcse/geography/learn/rural-fieldwork/l04-sampling"
              }
            ]
          },
          {
            "title": "Collecting the data",
            "lessons": [
              {
                "label": "Rural data collection methods",
                "href": "/igcse/geography/learn/rural-fieldwork/l05-data-collection-methods"
              }
            ]
          },
          {
            "title": "Presenting, analysing and evaluating",
            "lessons": [
              {
                "label": "Presenting rural data",
                "href": "/igcse/geography/learn/rural-fieldwork/l06-presenting-data"
              },
              {
                "label": "Analysis, conclusions and evaluation",
                "href": "/igcse/geography/learn/rural-fieldwork/l07-analysis-conclusions-evaluation"
              }
            ]
          },
          {
            "title": "Exam practice",
            "lessons": [
              {
                "label": "Past paper questions",
                "href": "/igcse/geography/learn/rural-fieldwork/past-papers"
              }
            ]
          }
        ]
      },
      {
        "slug": "development",
        "label": "Development and Human Welfare",
        "href": "/igcse/geography/learn/development-and-human-welfare",
        "status": "available",
        "topics": [
          {
            "title": "Defining and measuring development",
            "lessons": [
              {
                "label": "What is development?",
                "href": "/igcse/geography/learn/development-and-human-welfare/l01-what-is-development"
              },
              {
                "label": "Measuring development: GDP",
                "href": "/igcse/geography/learn/development-and-human-welfare/l02-measuring-development-gdp"
              },
              {
                "label": "HDI, Gini and corruption",
                "href": "/igcse/geography/learn/development-and-human-welfare/l03-hdi-gini-and-corruption"
              }
            ]
          },
          {
            "title": "Development and population",
            "lessons": [
              {
                "label": "Demographic data and the DTM",
                "href": "/igcse/geography/learn/development-and-human-welfare/l04-demographic-transition-model"
              },
              {
                "label": "Population pyramids and the DTM",
                "href": "/igcse/geography/learn/development-and-human-welfare/l05-population-pyramids"
              }
            ]
          },
          {
            "title": "Uneven development",
            "lessons": [
              {
                "label": "Causes of uneven development",
                "href": "/igcse/geography/learn/development-and-human-welfare/l06-causes-of-uneven-development"
              },
              {
                "label": "Case study: Italy",
                "href": "/igcse/geography/learn/development-and-human-welfare/l07-italy-uneven-development"
              }
            ]
          },
          {
            "title": "Reducing the development gap",
            "lessons": [
              {
                "label": "Strategies to reduce the gap",
                "href": "/igcse/geography/learn/development-and-human-welfare/l08-reducing-the-development-gap"
              },
              {
                "label": "Case studies: Nigeria and Kenya",
                "href": "/igcse/geography/learn/development-and-human-welfare/l09-nigeria-and-kenya-projects"
              }
            ]
          },
          {
            "title": "Exam practice",
            "lessons": [
              {
                "label": "Past paper questions",
                "href": "/igcse/geography/learn/development-and-human-welfare/past-papers"
              }
            ]
          }
        ]
      }
    ]
  }
];


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

  var STORE = "sbl-igcsegeo-tree-open";

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
    html += '<span class="lh-sidebar__brand-text"><span class="name">IGCSE Geography</span><span class="sub">Edexcel &middot; Learning Hub</span></span>';
    html += "</div>";
    html += '<a class="lh-sidebar__home" href="/humanities-hub">' + icon("back") + "<span>Back to Humanities Hub</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/geography/learn">' + icon("home") + "<span>IGCSE Geography overview</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/geography">' + icon("book") + "<span>Paper practice</span></a>";
    html += '<a class="lh-sidebar__home" href="/geography/games">' + icon("game") + "<span>Geography games</span></a>";
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

  window.renderSBLIgcseGeoSidebar = function (mountId, opts) {
    var mount = document.getElementById(mountId);
    if (!mount) return;
    ensureCss();
    render(mount, opts || {});
  };
})();
