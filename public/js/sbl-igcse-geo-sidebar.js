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
        "href": null,
        "status": "soon"
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
          }
        ]
      },
      {
        "slug": "rural-fieldwork",
        "label": "Rural Fieldwork",
        "href": null,
        "status": "soon"
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
          }
        ]
      }
    ]
  }
];

  function icon(name) {
    var icons = {
      home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"/></svg>',
      book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5V5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>',
      back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/></svg>',
      game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 11v3M5.5 12.5h3M16 12h.01M18 13.5h.01"/></svg>',
      chevron: '<svg class="lh-topic__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6" transform="rotate(90 12 12)"/></svg>'
    };
    return icons[name] || "";
  }

  function renderUnit(unit, opts) {
    var isActiveUnit = unit.slug === opts.activeUnit;
    var hasTopics = unit.topics && unit.topics.length && unit.topics.some(function(t) { return t.lessons.length > 0; });
    var cls = "lh-unit" + (isActiveUnit && !hasTopics ? " lh-unit--active" : "") + (unit.status === "soon" ? " lh-unit--soon" : "");
    var linkTag = unit.href ? "a" : "span";
    var hrefAttr = unit.href ? ' href="' + unit.href + '"' : "";
    var badge = unit.status === "soon" ? '<span class="lh-unit__badge">Soon</span>' : "";

    var out = '<div class="' + cls + '">';
    out += "<" + linkTag + ' class="lh-unit__link"' + hrefAttr + ">";
    out += "<span>" + unit.label + "</span>" + badge;
    out += "</" + linkTag + ">";

    if (isActiveUnit && hasTopics) {
      out += '<div class="lh-topics">';
      unit.topics.forEach(function (topic, i) {
        var topicIsActive = opts.activeTopic === i;
        out += '<div class="lh-topic' + (topicIsActive ? " lh-topic--active" : "") + '" data-topic-index="' + i + '">';
        out += '<button type="button" class="lh-topic__title" aria-expanded="' + (topicIsActive ? "true" : "false") + '">';
        out += '<span>' + topic.title + '</span>' + icon("chevron");
        out += '</button>';
        if (topic.lessons && topic.lessons.length) {
          out += '<ul class="lh-lessons"' + (topicIsActive ? "" : " hidden") + '>';
          topic.lessons.forEach(function (lesson) {
            var isCurrent = opts.activeLessonHref && lesson.href === opts.activeLessonHref;
            out += '<li><a class="' + (isCurrent ? "is-current" : "") + '" href="' + lesson.href + '">' + lesson.label + "</a></li>";
          });
          out += "</ul>";
        }
        out += "</div>";
      });
      out += "</div>";
    }

    out += "</div>";
    return out;
  }

  window.renderSBLIgcseGeoSidebar = function (mountId, opts) {
    opts = opts || {};
    var mount = document.getElementById(mountId);
    if (!mount) return;

    var html = '<div class="lh-sidebar__brand">';
    html += '<span class="lh-sidebar__mark">SBL</span>';
    html += '<span class="lh-sidebar__brand-text"><span class="name">IGCSE Geography</span><span class="sub">Edexcel &middot; Learning Hub</span></span>';
    html += "</div>";

    html += '<a class="lh-sidebar__home" href="/humanities-hub">' + icon("back") + "<span>Back to Humanities Home Page</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/geography/learn">' + icon("home") + "<span>IGCSE Geography overview</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/geography">' + icon("book") + "<span>Paper practice</span></a>";
    html += '<a class="lh-sidebar__home" href="/geography/games">' + icon("game") + "<span>Geography games</span></a>";

    if (!TREE.length) {
      html += '<div class="lh-sidebar__section">';
      html += '<div class="lh-sidebar__section-title">Syllabus</div>';
      html += '<p style="padding:0 1rem; font-size:0.82rem; color:var(--lh-muted);">Units are being added — check back soon.</p>';
      html += "</div>";
    }

    TREE.forEach(function (group) {
      html += '<div class="lh-sidebar__section">';
      html += '<div class="lh-sidebar__section-title">' + group.section + "</div>";
      group.units.forEach(function (unit) {
        html += renderUnit(unit, opts);
      });
      html += "</div>";
    });

    mount.innerHTML = html;

    /* Wire up topic-title toggle buttons: clicking expands/collapses
       that topic's lesson list. Several topics can be open at once. */
    mount.querySelectorAll(".lh-topic__title").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var topicEl = btn.closest(".lh-topic");
        var list = topicEl.querySelector(".lh-lessons");
        if (!list) return;
        var isHidden = list.hasAttribute("hidden");
        if (isHidden) {
          list.removeAttribute("hidden");
          btn.setAttribute("aria-expanded", "true");
          topicEl.classList.add("lh-topic--active");
        } else {
          list.setAttribute("hidden", "");
          btn.setAttribute("aria-expanded", "false");
          topicEl.classList.remove("lh-topic--active");
        }
      });
    });
  };
})();
