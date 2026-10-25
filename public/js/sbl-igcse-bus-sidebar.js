/* SBL Learning Hub — Edexcel IGCSE Business sidebar navigation.
   Same structure, markup and CSS classes as sbl-sidebar.js (IB
   Geography) and sbl-economics-sidebar.js, kept as its own file so the
   IGCSE area can be edited without touching the IB pages. Add lessons
   to TREE as each topic is built; units marked "soon" show a badge. */

(function () {
  var TREE = [
  {
    "section": "The specification: five topics",
    "units": [
      {
        "slug": "business-activity-and-influences",
        "label": "Business activity and influences on business",
        "href": "/igcse/business/learn/business-activity-and-influences",
        "status": "available",
        "topics": [
          {
            "title": "1.1 Business objectives",
            "lessons": [
              {
                "label": "Business objectives",
                "href": "/igcse/business/learn/business-activity-and-influences/l01-business-objectives"
              }
            ]
          },
          {
            "title": "1.2 Types of organisations",
            "lessons": [
              {
                "label": "Types of ownership",
                "href": "/igcse/business/learn/business-activity-and-influences/l02-types-of-business-ownership"
              },
              {
                "label": "Franchises and other forms",
                "href": "/igcse/business/learn/business-activity-and-influences/l03-franchises-social-enterprises-multinationals"
              }
            ]
          },
          {
            "title": "1.3 Classification of businesses",
            "lessons": [
              {
                "label": "Sectors of activity",
                "href": "/igcse/business/learn/business-activity-and-influences/l04-primary-secondary-tertiary"
              }
            ]
          },
          {
            "title": "1.4 Decisions on location",
            "lessons": [
              {
                "label": "Location decisions",
                "href": "/igcse/business/learn/business-activity-and-influences/l05-location-decisions"
              }
            ]
          },
          {
            "title": "1.5 Business and the international economy",
            "lessons": [
              {
                "label": "Globalisation and MNCs",
                "href": "/igcse/business/learn/business-activity-and-influences/l06-globalisation-and-multinationals"
              },
              {
                "label": "Exchange rates",
                "href": "/igcse/business/learn/business-activity-and-influences/l07-exchange-rates"
              }
            ]
          },
          {
            "title": "1.6 Government objectives and policies",
            "lessons": [
              {
                "label": "Government and business",
                "href": "/igcse/business/learn/business-activity-and-influences/l08-government-objectives-and-policies"
              }
            ]
          },
          {
            "title": "1.7 External factors",
            "lessons": [
              {
                "label": "External factors",
                "href": "/igcse/business/learn/business-activity-and-influences/l09-external-factors"
              }
            ]
          },
          {
            "title": "1.8 What makes a business successful?",
            "lessons": [
              {
                "label": "Success and failure",
                "href": "/igcse/business/learn/business-activity-and-influences/l10-business-success-and-failure"
              }
            ]
          }
        ]
      },
      {
        "slug": "people-in-business",
        "label": "People in business",
        "href": "/igcse/business/learn/people-in-business",
        "status": "available",
        "topics": [
          {
            "title": "2.1 Internal and external communication",
            "lessons": [
              {
                "label": "Communication methods",
                "href": "/igcse/business/learn/people-in-business/l01-communication-methods"
              },
              {
                "label": "Barriers to communication",
                "href": "/igcse/business/learn/people-in-business/l02-barriers-to-communication"
              }
            ]
          },
          {
            "title": "2.2 Recruitment and selection",
            "lessons": [
              {
                "label": "Employment types and documents",
                "href": "/igcse/business/learn/people-in-business/l03-employment-types-and-recruitment-documents"
              },
              {
                "label": "Recruitment and selection",
                "href": "/igcse/business/learn/people-in-business/l04-recruitment-and-selection"
              },
              {
                "label": "Employment law",
                "href": "/igcse/business/learn/people-in-business/l05-legal-controls-over-employment"
              }
            ]
          },
          {
            "title": "2.3 Training",
            "lessons": [
              {
                "label": "Training",
                "href": "/igcse/business/learn/people-in-business/l06-training"
              }
            ]
          },
          {
            "title": "2.4 Motivation and rewards",
            "lessons": [
              {
                "label": "Motivation theories",
                "href": "/igcse/business/learn/people-in-business/l07-motivation-theories"
              },
              {
                "label": "Methods of motivation",
                "href": "/igcse/business/learn/people-in-business/l08-financial-and-non-financial-motivation"
              }
            ]
          },
          {
            "title": "2.5 Organisation structure and employees",
            "lessons": [
              {
                "label": "Organisation structure",
                "href": "/igcse/business/learn/people-in-business/l09-organisation-structure"
              },
              {
                "label": "Functional areas",
                "href": "/igcse/business/learn/people-in-business/l10-functional-areas"
              }
            ]
          }
        ]
      },
      {
        "slug": "business-finance",
        "label": "Business finance",
        "href": null,
        "status": "soon",
        "topics": []
      },
      {
        "slug": "marketing",
        "label": "Marketing",
        "href": null,
        "status": "soon",
        "topics": []
      },
      {
        "slug": "business-operations",
        "label": "Business operations",
        "href": null,
        "status": "soon",
        "topics": []
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

  window.renderSBLIgcseBusSidebar = function (mountId, opts) {
    opts = opts || {};
    var mount = document.getElementById(mountId);
    if (!mount) return;

    var html = '<div class="lh-sidebar__brand">';
    html += '<span class="lh-sidebar__mark">SBL</span>';
    html += '<span class="lh-sidebar__brand-text"><span class="name">IGCSE Business</span><span class="sub">Edexcel &middot; Learning Hub</span></span>';
    html += "</div>";

    html += '<a class="lh-sidebar__home" href="/humanities-hub">' + icon("back") + "<span>Back to Humanities Home Page</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/business/learn">' + icon("home") + "<span>IGCSE Business overview</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/business">' + icon("book") + "<span>Paper practice</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/business/revision/topics">' + icon("game") + "<span>Revision topics</span></a>";

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
