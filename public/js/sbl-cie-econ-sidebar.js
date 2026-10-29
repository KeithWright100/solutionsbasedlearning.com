/* SBL Learning Hub — Cambridge IGCSE Economics sidebar navigation.
   Same structure, markup and CSS classes as sbl-sidebar.js (IB
   Geography) and sbl-economics-sidebar.js, kept as its own file so the
   IGCSE area can be edited without touching the IB pages. Add lessons
   to TREE as each topic is built; units marked "soon" show a badge. */

(function () {
  var TREE = [
  {
    "section": "Syllabus topics",
    "units": [
      {
        "slug": "basic-economic-problem",
        "label": "1. Basic economic problem",
        "href": "/igcse/cie-economics/basic-economic-problem",
        "status": "available",
        "topics": [
          {
            "title": "Topics",
            "lessons": [
              {
                "label": "1. Scarcity and opportunity cost",
                "href": "/igcse/cie-economics/basic-economic-problem/topic-1-scarcity-factors-and-opportunity-cost"
              },
              {
                "label": "2. PPC diagrams",
                "href": "/igcse/cie-economics/basic-economic-problem/topic-2-production-possibility-curves"
              }
            ]
          }
        ]
      },
      {
        "slug": "allocation-of-resources",
        "label": "2. Allocation of resources",
        "href": "/igcse/cie-economics/allocation-of-resources",
        "status": "available",
        "topics": [
          {
            "title": "Topics",
            "lessons": [
              {
                "label": "3. Demand and supply",
                "href": "/igcse/cie-economics/allocation-of-resources/topic-3-markets-demand-and-supply"
              },
              {
                "label": "4. Equilibrium and price changes",
                "href": "/igcse/cie-economics/allocation-of-resources/topic-4-price-determination-and-price-changes"
              },
              {
                "label": "5. PED and PES",
                "href": "/igcse/cie-economics/allocation-of-resources/topic-5-price-elasticity"
              },
              {
                "label": "6. Market failure",
                "href": "/igcse/cie-economics/allocation-of-resources/topic-6-market-economy-and-market-failure"
              },
              {
                "label": "7. Government intervention",
                "href": "/igcse/cie-economics/allocation-of-resources/topic-7-mixed-economy-and-government-intervention"
              }
            ]
          }
        ]
      },
      {
        "slug": "microeconomic-decision-makers",
        "label": "3. Microeconomic decision-makers",
        "href": "/igcse/cie-economics/microeconomic-decision-makers",
        "status": "available",
        "topics": [
          {
            "title": "Topics",
            "lessons": [
              {
                "label": "8. Money, banks and households",
                "href": "/igcse/cie-economics/microeconomic-decision-makers/topic-8-money-banking-and-households"
              },
              {
                "label": "9. Workers and wages",
                "href": "/igcse/cie-economics/microeconomic-decision-makers/topic-9-workers"
              },
              {
                "label": "10. Firms and economies of scale",
                "href": "/igcse/cie-economics/microeconomic-decision-makers/topic-10-firms-mergers-and-economies-of-scale"
              },
              {
                "label": "11. Production, costs and revenue",
                "href": "/igcse/cie-economics/microeconomic-decision-makers/topic-11-production-costs-and-revenue"
              },
              {
                "label": "12. Objectives and market structure",
                "href": "/igcse/cie-economics/microeconomic-decision-makers/topic-12-objectives-of-firms-and-types-of-market"
              }
            ]
          }
        ]
      },
      {
        "slug": "government-and-the-macroeconomy",
        "label": "4. Government and the macroeconomy",
        "href": "/igcse/cie-economics/government-and-the-macroeconomy",
        "status": "available",
        "topics": [
          {
            "title": "Topics",
            "lessons": [
              {
                "label": "13. Aims and fiscal policy",
                "href": "/igcse/cie-economics/government-and-the-macroeconomy/topic-13-macroeconomic-aims-and-fiscal-policy"
              },
              {
                "label": "14. Monetary and supply-side policy",
                "href": "/igcse/cie-economics/government-and-the-macroeconomy/topic-14-monetary-and-supply-side-policy"
              },
              {
                "label": "15. Growth and recession",
                "href": "/igcse/cie-economics/government-and-the-macroeconomy/topic-15-economic-growth-and-recession"
              },
              {
                "label": "16. Unemployment",
                "href": "/igcse/cie-economics/government-and-the-macroeconomy/topic-16-employment-and-unemployment"
              },
              {
                "label": "17. Inflation",
                "href": "/igcse/cie-economics/government-and-the-macroeconomy/topic-17-inflation-and-deflation"
              }
            ]
          }
        ]
      },
      {
        "slug": "economic-development",
        "label": "5. Economic development",
        "href": "/igcse/cie-economics/economic-development",
        "status": "available",
        "topics": [
          {
            "title": "Topics",
            "lessons": [
              {
                "label": "18. Living standards and poverty",
                "href": "/igcse/cie-economics/economic-development/topic-18-living-standards-and-poverty"
              },
              {
                "label": "19. Population and development",
                "href": "/igcse/cie-economics/economic-development/topic-19-population-and-differences-in-development"
              }
            ]
          }
        ]
      },
      {
        "slug": "international-trade-and-globalisation",
        "label": "6. Trade and globalisation",
        "href": "/igcse/cie-economics/international-trade-and-globalisation",
        "status": "available",
        "topics": [
          {
            "title": "Topics",
            "lessons": [
              {
                "label": "20. Free trade and globalisation",
                "href": "/igcse/cie-economics/international-trade-and-globalisation/topic-20-specialisation-free-trade-and-globalisation"
              },
              {
                "label": "21. Trade restrictions",
                "href": "/igcse/cie-economics/international-trade-and-globalisation/topic-21-trade-restrictions"
              },
              {
                "label": "22. Exchange rates",
                "href": "/igcse/cie-economics/international-trade-and-globalisation/topic-22-foreign-exchange-rates"
              },
              {
                "label": "23. Current account",
                "href": "/igcse/cie-economics/international-trade-and-globalisation/topic-23-current-account-of-the-balance-of-payments"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "section": "Exam practice",
    "units": [
      {
        "slug": "past-papers",
        "label": "Specimen papers",
        "href": "/igcse/cie-economics/past-papers",
        "status": "available",
        "topics": [
          {
            "title": "Papers",
            "lessons": [
              {
                "label": "Paper 1: Multiple choice",
                "href": "/igcse/cie-economics/past-papers?paper=sp-p1"
              },
              {
                "label": "Paper 2: Structured questions",
                "href": "/igcse/cie-economics/past-papers?paper=sp-p2"
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

  window.renderSBLCieEconSidebar = function (mountId, opts) {
    opts = opts || {};
    var mount = document.getElementById(mountId);
    if (!mount) return;

    var html = '<div class="lh-sidebar__brand">';
    html += '<span class="lh-sidebar__mark">SBL</span>';
    html += '<span class="lh-sidebar__brand-text"><span class="name">CIE IGCSE Economics</span><span class="sub">Cambridge 0455 &middot; Revision</span></span>';
    html += "</div>";

    html += '<a class="lh-sidebar__home" href="/humanities-hub">' + icon("back") + "<span>Back to Humanities Home Page</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/cie-economics">' + icon("home") + "<span>CIE Economics overview</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/cie-economics/past-papers">' + icon("book") + "<span>Specimen paper practice</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/economics/learn">' + icon("game") + "<span>Edexcel IGCSE Economics</span></a>";

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
