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
        "href": "/igcse/history/learn/civil-rights-usa",
        "status": "available",
        "topics": [
          {
            "title": "1. The Red Scare and McCarthyism",
            "lessons": [
              {
                "label": "Reasons for the Red Scare",
                "href": "/igcse/history/learn/civil-rights-usa/l01-reasons-for-the-red-scare"
              },
              {
                "label": "FBI, HUAC and Hollywood",
                "href": "/igcse/history/learn/civil-rights-usa/l02-the-fbi-huac-and-the-hollywood-ten"
              },
              {
                "label": "Hiss and the Rosenbergs",
                "href": "/igcse/history/learn/civil-rights-usa/l03-hiss-the-rosenbergs-and-the-mccarran-act"
              },
              {
                "label": "McCarthyism",
                "href": "/igcse/history/learn/civil-rights-usa/l04-mccarthy-and-mccarthyism"
              }
            ]
          },
          {
            "title": "2. Civil rights in the 1950s",
            "lessons": [
              {
                "label": "Segregation and discrimination",
                "href": "/igcse/history/learn/civil-rights-usa/l05-segregation-and-discrimination"
              },
              {
                "label": "Brown v Topeka and Emmett Till",
                "href": "/igcse/history/learn/civil-rights-usa/l06-brown-versus-topeka-and-emmett-till"
              },
              {
                "label": "Montgomery Bus Boycott",
                "href": "/igcse/history/learn/civil-rights-usa/l07-the-montgomery-bus-boycott"
              },
              {
                "label": "Little Rock",
                "href": "/igcse/history/learn/civil-rights-usa/l08-little-rock-1957"
              },
              {
                "label": "Civil Rights Act 1957",
                "href": "/igcse/history/learn/civil-rights-usa/l09-the-civil-rights-act-1957"
              }
            ]
          },
          {
            "title": "3. The impact of civil rights protests, 1960–74",
            "lessons": [
              {
                "label": "Sit-ins and freedom rides",
                "href": "/igcse/history/learn/civil-rights-usa/l10-sit-ins-and-freedom-rides"
              },
              {
                "label": "Meredith and King",
                "href": "/igcse/history/learn/civil-rights-usa/l11-meredith-and-martin-luther-king"
              },
              {
                "label": "Birmingham and Washington",
                "href": "/igcse/history/learn/civil-rights-usa/l12-birmingham-and-the-march-on-washington"
              },
              {
                "label": "Freedom Summer and Selma",
                "href": "/igcse/history/learn/civil-rights-usa/l13-freedom-summer-and-selma"
              },
              {
                "label": "1964 and 1965 Acts",
                "href": "/igcse/history/learn/civil-rights-usa/l14-civil-rights-act-and-voting-rights-act"
              },
              {
                "label": "Malcolm X and Black Power",
                "href": "/igcse/history/learn/civil-rights-usa/l15-malcolm-x-and-black-power"
              },
              {
                "label": "Black Panthers and riots",
                "href": "/igcse/history/learn/civil-rights-usa/l16-the-black-panthers-and-race-riots"
              },
              {
                "label": "Civil rights 1966–74",
                "href": "/igcse/history/learn/civil-rights-usa/l17-the-civil-rights-movement-1966-74"
              }
            ]
          },
          {
            "title": "4. Other protest movements: students, women, anti-Vietnam",
            "lessons": [
              {
                "label": "Growth of protest",
                "href": "/igcse/history/learn/civil-rights-usa/l18-reasons-for-protest-movements"
              },
              {
                "label": "Student protest",
                "href": "/igcse/history/learn/civil-rights-usa/l19-student-protest-sds-and-berkeley"
              },
              {
                "label": "Anti-Vietnam and hippies",
                "href": "/igcse/history/learn/civil-rights-usa/l20-anti-vietnam-war-protest-and-hippies"
              },
              {
                "label": "Women’s movement",
                "href": "/igcse/history/learn/civil-rights-usa/l21-the-womens-movement-roosevelt-friedan-and-now"
              },
              {
                "label": "Women’s Lib and opposition",
                "href": "/igcse/history/learn/civil-rights-usa/l22-womens-liberation-abortion-and-opposition"
              }
            ]
          },
          {
            "title": "5. Nixon and Watergate",
            "lessons": [
              {
                "label": "Nixon and the break-in",
                "href": "/igcse/history/learn/civil-rights-usa/l23-nixon-the-plumbers-and-the-break-in"
              },
              {
                "label": "Watergate scandal",
                "href": "/igcse/history/learn/civil-rights-usa/l24-the-watergate-scandal-and-fords-pardon"
              },
              {
                "label": "Impact of Watergate",
                "href": "/igcse/history/learn/civil-rights-usa/l25-the-impact-of-watergate"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "section": "Paper 2: Investigation and breadth studies",
    "units": [
      {
        "slug": "russia-and-the-soviet-union",
        "label": "Russia and the Soviet Union, 1905–24",
        "href": "/igcse/history/learn/russia-and-the-soviet-union",
        "status": "available",
        "topics": [
          {
            "title": "1. Tsarist rule in Russia, 1905–14",
            "lessons": [
              {
                "label": "Tsarist rule in 1905",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l01-tsarist-rule-in-1905"
              },
              {
                "label": "The 1905 revolution",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l02-the-1905-revolution"
              },
              {
                "label": "October Manifesto",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l03-october-manifesto-and-repression"
              },
              {
                "label": "The dumas",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l04-nicholas-and-the-dumas"
              },
              {
                "label": "Stolypin and Lena",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l05-stolypin-land-reform-and-lena-goldfields"
              }
            ]
          },
          {
            "title": "2. Opposition to tsarist rule, 1914–17",
            "lessons": [
              {
                "label": "Effects of the war",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l06-effects-of-the-first-world-war"
              },
              {
                "label": "Rasputin",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l07-rasputin-and-the-tsarina"
              },
              {
                "label": "February Revolution",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l08-the-february-revolution"
              }
            ]
          },
          {
            "title": "3. The Provisional Government and the Bolshevik revolution",
            "lessons": [
              {
                "label": "Provisional Government",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l09-weaknesses-of-the-provisional-government"
              },
              {
                "label": "April Theses and July Days",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l10-lenin-the-april-theses-and-the-july-days"
              },
              {
                "label": "Kornilov Revolt",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l11-the-kornilov-revolt"
              },
              {
                "label": "Bolshevik takeover",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l12-the-bolshevik-takeover"
              }
            ]
          },
          {
            "title": "4. Bolshevik consolidation of power and the Civil War",
            "lessons": [
              {
                "label": "Decrees and Constituent Assembly",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l13-early-decrees-and-the-constituent-assembly"
              },
              {
                "label": "Brest-Litovsk",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l14-the-treaty-of-brest-litovsk"
              },
              {
                "label": "The Civil War",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l15-the-civil-war"
              },
              {
                "label": "Why the Reds won",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l16-why-the-reds-won"
              }
            ]
          },
          {
            "title": "5. War Communism and the New Economic Policy",
            "lessons": [
              {
                "label": "War Communism",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l17-war-communism"
              },
              {
                "label": "Kronstadt Mutiny",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l18-the-kronstadt-mutiny"
              },
              {
                "label": "The NEP",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l19-the-new-economic-policy"
              },
              {
                "label": "Lenin’s achievements",
                "href": "/igcse/history/learn/russia-and-the-soviet-union/l20-lenins-achievements-to-1924"
              }
            ]
          }
        ]
      },
      {
        "slug": "japan-in-transformation",
        "label": "Japan in transformation, 1853–1945",
        "href": "/igcse/history/learn/japan-in-transformation",
        "status": "available",
        "topics": [
          {
            "title": "1. The end of isolation, 1853–68",
            "lessons": [
              {
                "label": "Tokugawa Japan",
                "href": "/igcse/history/learn/japan-in-transformation/l01-tokugawa-japan-before-1853"
              },
              {
                "label": "Commodore Perry",
                "href": "/igcse/history/learn/japan-in-transformation/l02-commodore-perry-and-kanagawa"
              },
              {
                "label": "Fall of the shogunate",
                "href": "/igcse/history/learn/japan-in-transformation/l03-unequal-treaties-and-the-fall-of-the-shogunate"
              }
            ]
          },
          {
            "title": "2. The Meiji Restoration and its effects",
            "lessons": [
              {
                "label": "Effects of the Meiji Restoration",
                "href": "/igcse/history/learn/japan-in-transformation/l04-effects-of-the-meiji-restoration"
              }
            ]
          },
          {
            "title": "3. Japan becomes a world power, 1894–1923",
            "lessons": [
              {
                "label": "Sino-Japanese War",
                "href": "/igcse/history/learn/japan-in-transformation/l05-the-sino-japanese-war"
              },
              {
                "label": "Russo-Japanese War",
                "href": "/igcse/history/learn/japan-in-transformation/l06-the-russo-japanese-war"
              },
              {
                "label": "Twenty-One Demands",
                "href": "/igcse/history/learn/japan-in-transformation/l07-first-world-war-and-twenty-one-demands"
              },
              {
                "label": "Impact of the war",
                "href": "/igcse/history/learn/japan-in-transformation/l08-impact-of-the-first-world-war"
              }
            ]
          },
          {
            "title": "4. Party government and the rise of militarism, 1918–36",
            "lessons": [
              {
                "label": "Party government",
                "href": "/igcse/history/learn/japan-in-transformation/l09-party-government-1918-29"
              },
              {
                "label": "Manchurian Incident",
                "href": "/igcse/history/learn/japan-in-transformation/l10-depression-and-the-manchurian-incident"
              },
              {
                "label": "The army takes control",
                "href": "/igcse/history/learn/japan-in-transformation/l11-the-army-takes-control"
              }
            ]
          },
          {
            "title": "5. Japan at war, 1937–45",
            "lessons": [
              {
                "label": "Invasion of China",
                "href": "/igcse/history/learn/japan-in-transformation/l12-japan-invades-china"
              },
              {
                "label": "Pearl Harbor",
                "href": "/igcse/history/learn/japan-in-transformation/l13-the-road-to-pearl-harbor"
              },
              {
                "label": "War in the Pacific",
                "href": "/igcse/history/learn/japan-in-transformation/l14-the-war-in-the-pacific"
              },
              {
                "label": "Atomic bombs and surrender",
                "href": "/igcse/history/learn/japan-in-transformation/l15-hiroshima-nagasaki-and-surrender"
              }
            ]
          }
        ]
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
  /* shared with the site search in /js/sbl-nav.js */
  window.SBL_TREES = window.SBL_TREES || {};
  window.SBL_TREES["igcse-hist"] = TREE;


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

  var STORE = "sbl-igcsehist-tree-open";

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
    html += '<span class="lh-sidebar__brand-text"><span class="name">IGCSE History</span><span class="sub">Edexcel &middot; Learning Hub</span></span>';
    html += "</div>";
    html += '<a class="lh-sidebar__home" href="/humanities-hub">' + icon("back") + "<span>Back to Humanities Hub</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/history/learn">' + icon("home") + "<span>IGCSE History overview</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/history/exam-tips">' + icon("book") + "<span>Exam tips</span></a>";
    html += '<a class="lh-sidebar__home" href="/igcse/history/revision/topics">' + icon("check") + "<span>Revision topics</span></a>";
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

  window.renderSBLIgcseHistSidebar = function (mountId, opts) {
    var mount = document.getElementById(mountId);
    if (!mount) return;
    ensureCss();
    render(mount, opts || {});
  };
})();
