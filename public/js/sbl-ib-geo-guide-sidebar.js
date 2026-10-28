/* SBL Learning Hub — IB Geography Revision Guide sidebar navigation.
   Same structure, markup and CSS classes as sbl-sidebar.js (IB
   Geography) and sbl-economics-sidebar.js, kept as its own file so the
   IGCSE area can be edited without touching the IB pages. Add lessons
   to TREE as each topic is built; units marked "soon" show a badge. */

(function () {
  var TREE = [
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

  window.renderSBLIbGuideSidebar = function (mountId, opts) {
    opts = opts || {};
    var mount = document.getElementById(mountId);
    if (!mount) return;

    var html = '<div class="lh-sidebar__brand">';
    html += '<span class="lh-sidebar__mark">SBL</span>';
    html += '<span class="lh-sidebar__brand-text"><span class="name">IB Geography</span><span class="sub">Revision Guide</span></span>';
    html += "</div>";

    html += '<a class="lh-sidebar__home" href="/humanities-hub">' + icon("back") + "<span>Back to Humanities Home Page</span></a>";
    html += '<a class="lh-sidebar__home" href="/geography/revision/guide">' + icon("home") + "<span>Revision guide overview</span></a>";
    html += '<a class="lh-sidebar__home" href="/geography/revision/topics">' + icon("book") + "<span>Revision topics</span></a>";
    html += '<a class="lh-sidebar__home" href="/geography">' + icon("game") + "<span>IB Geography lessons</span></a>";

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
