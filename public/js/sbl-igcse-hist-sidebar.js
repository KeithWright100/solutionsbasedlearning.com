/* SBL Learning Hub — Edexcel IGCSE History sidebar navigation.
   Same structure, markup and CSS classes as sbl-sidebar.js (IB
   Geography) and sbl-economics-sidebar.js, kept as its own file so the
   IGCSE area can be edited without touching the IB pages. Add lessons
   to TREE as each topic is built; units marked "soon" show a badge. */

(function () {
  var TREE = [
  {
    "section": "Paper 1: Depth studies",
    "units": [
      {
        "slug": "superpower-relations",
        "label": "A world divided: superpower relations, 1943–72",
        "href": "/igcse/history/learn/superpower-relations",
        "status": "available",
        "topics": [
          {
            "title": "1. Reasons for the Cold War",
            "lessons": [
              {
                "label": "Long-term rivalry",
                "href": "/igcse/history/learn/superpower-relations/l01-long-term-rivalry-and-ideology"
              },
              {
                "label": "Wartime tensions",
                "href": "/igcse/history/learn/superpower-relations/l02-tensions-during-the-second-world-war"
              },
              {
                "label": "Tehran and Yalta",
                "href": "/igcse/history/learn/superpower-relations/l03-tehran-and-yalta"
              },
              {
                "label": "Potsdam and the bomb",
                "href": "/igcse/history/learn/superpower-relations/l04-potsdam-truman-stalin-and-the-atomic-bomb"
              }
            ]
          },
          {
            "title": "2. Early developments in the Cold War, 1945–49",
            "lessons": [
              {
                "label": "Soviet expansion",
                "href": "/igcse/history/learn/superpower-relations/l05-soviet-expansion-and-the-iron-curtain"
              },
              {
                "label": "Truman Doctrine and Marshall Plan",
                "href": "/igcse/history/learn/superpower-relations/l06-truman-doctrine-marshall-plan-cominform-comecon"
              },
              {
                "label": "The Berlin Blockade",
                "href": "/igcse/history/learn/superpower-relations/l07-germany-divided-and-the-berlin-blockade"
              },
              {
                "label": "Two Germanys and NATO",
                "href": "/igcse/history/learn/superpower-relations/l08-results-of-the-berlin-crisis-nato-and-two-germanys"
              }
            ]
          },
          {
            "title": "3. The Cold War in the 1950s",
            "lessons": [
              {
                "label": "Korean War and Warsaw Pact",
                "href": "/igcse/history/learn/superpower-relations/l09-korean-war-and-the-warsaw-pact"
              },
              {
                "label": "Arms race and co-existence",
                "href": "/igcse/history/learn/superpower-relations/l10-arms-race-and-peaceful-co-existence"
              },
              {
                "label": "Hungarian Uprising",
                "href": "/igcse/history/learn/superpower-relations/l11-the-hungarian-uprising-1956"
              }
            ]
          },
          {
            "title": "4. Three crises: Berlin, Cuba and Czechoslovakia",
            "lessons": [
              {
                "label": "Berlin Ultimatum and U-2",
                "href": "/igcse/history/learn/superpower-relations/l12-berlin-refugees-ultimatum-and-the-u2-incident"
              },
              {
                "label": "The Berlin Wall",
                "href": "/igcse/history/learn/superpower-relations/l13-the-berlin-wall"
              },
              {
                "label": "Bay of Pigs",
                "href": "/igcse/history/learn/superpower-relations/l14-cuba-the-revolution-and-the-bay-of-pigs"
              },
              {
                "label": "Cuban Missile Crisis",
                "href": "/igcse/history/learn/superpower-relations/l15-the-cuban-missile-crisis"
              },
              {
                "label": "Prague Spring",
                "href": "/igcse/history/learn/superpower-relations/l16-czechoslovakia-1968-and-the-brezhnev-doctrine"
              }
            ]
          },
          {
            "title": "5. The Thaw and moves towards Détente, 1963–72",
            "lessons": [
              {
                "label": "The thaw",
                "href": "/igcse/history/learn/superpower-relations/l17-the-thaw-hotline-and-treaties"
              },
              {
                "label": "Reasons for détente",
                "href": "/igcse/history/learn/superpower-relations/l18-reasons-for-detente"
              },
              {
                "label": "SALT 1",
                "href": "/igcse/history/learn/superpower-relations/l19-salt-1-and-the-extent-of-detente"
              }
            ]
          }
        ]
      },
      {
        "slug": "civil-rights-usa",
        "label": "A divided union: civil rights in the USA, 1945–74",
        "href": null,
        "status": "soon",
        "topics": []
      }
    ]
  },
  {
    "section": "Paper 2: Investigation and breadth studies",
    "units": [
      {
        "slug": "russia-and-the-soviet-union",
        "label": "Russia and the Soviet Union, 1905–24",
        "href": null,
        "status": "soon",
        "topics": []
      },
      {
        "slug": "middle-east",
        "label": "The Middle East: conflict, crisis and change, 1917–2012",
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

  window.renderSBLIgcseHistSidebar = function (mountId, opts) {
    opts = opts || {};
    var mount = document.getElementById(mountId);
    if (!mount) return;

    var html = '<div class="lh-sidebar__brand">';
    html += '<span class="lh-sidebar__mark">SBL</span>';
    html += '<span class="lh-sidebar__brand-text"><span class="name">IGCSE History</span><span class="sub">Edexcel &middot; Learning Hub</span></span>';
    html += "</div>";

    html += '<a class="lh-sidebar__home" href="/humanities-hub">' + icon("back") + "<span>Back to Humanities Home Page</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/history/learn">' + icon("home") + "<span>IGCSE History overview</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/history/exam-tips">' + icon("book") + "<span>Exam tips</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/history/revision/topics">' + icon("game") + "<span>Revision topics</span></a>";

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
