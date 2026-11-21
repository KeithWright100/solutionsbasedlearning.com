/* SBL Learning Hub: IB Geography unit pages (lesson-card layout).
   Rebuilds the plain .lh-unit-topics lists on a unit page into numbered
   topic sections with lesson cards, tags (Case study, Flip learning) and,
   for signed-in students, progress from /api/progress (the same data the
   lesson pages use). Needs no changes to the unit page HTML beyond
   including this script (and sbl-flip-learning.js for the flip tags). */
(function () {
  var LESSON_IDS = {"/geography/paper-1/core-1/t1-population-and/l1-physical-and":"CP01","/geography/paper-1/core-1/t1-population-and/l2-global-patterns":"CP02","/geography/paper-1/core-1/t1-population-and/l3-population":"CP03","/geography/paper-1/core-1/t1-population-and/l4-lesson-4-case":"CP04","/geography/paper-1/core-1/t2-changing/l1-population":"CP05","/geography/paper-1/core-1/t2-changing/l2-comparing":"CP06","/geography/paper-1/core-1/t2-changing/l3-the":"CP07","/geography/paper-1/core-1/t2-changing/l4-the-causes-and":"CP08","/geography/paper-1/core-1/t2-changing/l5-internal":"CP09","/geography/paper-1/core-1/t3-challenges-and/l1-trends-in":"CP10","/geography/paper-1/core-1/t3-challenges-and/l2-population":"CP11","/geography/paper-1/core-1/t3-challenges-and/l3-gender-equality":"CP12","/geography/paper-1/core-1/t3-challenges-and/l4-the-demographic":"CP13","/geography/paper-1/core-2/t1-causes-of/l1-the-atmospheric":"CC01","/geography/paper-1/core-2/t1-causes-of/l2-the-global":"CC02","/geography/paper-1/core-2/t1-causes-of/l3-the-enhanced":"CC03","/geography/paper-1/core-2/t2-consequences-of/l1-climate-change":"CC04","/geography/paper-1/core-2/t2-consequences-of/l2-climate-change":"CC05","/geography/paper-1/core-2/t2-consequences-of/l3-climate-change":"CC06","/geography/paper-1/core-2/t2-consequences-of/l4-climate-change":"CC07","/geography/paper-1/core-2/t2-consequences-of/l5-the-impacts-of":"CC08","/geography/paper-1/core-2/t3-responding-to/l1-climate-change":"CC09","/geography/paper-1/core-2/t3-responding-to/l2-government-led":"CC10","/geography/paper-1/core-2/t3-responding-to/l3-civil-society":"CC11","/geography/paper-1/core-3/t1-global-trends/l1-global":"RC01","/geography/paper-1/core-3/t1-global-trends/l2-measuring":"RC02","/geography/paper-1/core-3/t1-global-trends/l3-patterns-and":"RC03","/geography/paper-1/core-3/t1-global-trends/l4-patterns-and":"RC04","/geography/paper-1/core-3/t1-global-trends/l5-patterns-and":"RC05","/geography/paper-1/core-3/t2-impacts-of/l1-the-water-food":"RC06","/geography/paper-1/core-3/t2-impacts-of/l2-the":"RC07","/geography/paper-1/core-3/t2-impacts-of/l3-the-water":"RC08","/geography/paper-1/core-3/t2-impacts-of/l4-the-water":"RC09","/geography/paper-1/core-3/t2-impacts-of/l5-the-disposal":"RC10","/geography/paper-1/core-3/t3-resource/l1-course":"RC11","/geography/paper-1/core-3/t3-resource/l2-population-and":"RC12","/geography/paper-1/core-3/t3-resource/l3-the-value-of":"RC13","/geography/paper-1/option-a/t1-drainage-basin/l1-the-drainage":"FW01","/geography/paper-1/option-a/t1-drainage-basin/l2-discharge":"FW02","/geography/paper-1/option-a/t1-drainage-basin/l3-erosion":"FW03","/geography/paper-1/option-a/t1-drainage-basin/l4-river-landforms":"FW04","/geography/paper-1/option-a/t2-flooding-and/l1-hydrographs":"FW05","/geography/paper-1/option-a/t2-flooding-and/l2-factors":"FW06","/geography/paper-1/option-a/t2-flooding-and/l3-flood-mitigation":"FW07","/geography/paper-1/option-a/t2-flooding-and/l4-case-studies-of":"FW08","/geography/paper-1/option-a/t3-water-scarcity/l1-physical-and":"FW09","/geography/paper-1/option-a/t3-water-scarcity/l2-environmental":"FW10","/geography/paper-1/option-a/t3-water-scarcity/l3-human-pressures":"FW11","/geography/paper-1/option-a/t3-water-scarcity/l4-internationally":"FW12","/geography/paper-1/option-a/t4-water/l1-improving-local":"FW13","/geography/paper-1/option-a/t4-water/l2-intervention-in":"FW14","/geography/paper-1/option-a/t4-water/l3-integrated":"FW15","/geography/paper-1/option-a/t4-water/l4-freshwater":"FW16","/geography/paper-1/option-e/t1-changing/l1-how-have":"LT01","/geography/paper-1/option-e/t1-changing/l2-what-is-the":"LT02","/geography/paper-1/option-e/t1-changing/l3-what-factors":"LT03","/geography/paper-1/option-e/t2-tourism-and/l1-what-are-the":"LT04","/geography/paper-1/option-e/t2-tourism-and/l2-spheres-of":"LT05","/geography/paper-1/option-e/t2-tourism-and/l3-case-study-of-a":"LT06","/geography/paper-1/option-e/t2-tourism-and/l4-costs-and":"LT07","/geography/paper-1/option-e/t2-tourism-and/l5-a-case-study-of":"LT08","/geography/paper-1/option-e/t3-tourism-and/l1-niche-tourism":"LT09","/geography/paper-1/option-e/t3-tourism-and/l2-the-role-of":"LT10","/geography/paper-1/option-e/t3-tourism-and/l3-tourism-as-a":"LT11","/geography/paper-1/option-e/t3-tourism-and/l4-international":"LT12","/geography/paper-1/option-e/t3-tourism-and/l5-case-study-of-a":"LT13","/geography/paper-1/option-e/t4-managing/l1-the":"LT14","/geography/paper-1/option-e/t4-managing/l2-case-study":"LT15","/geography/paper-1/option-e/t4-managing/l3-tourism-in-the":"LT16","/geography/paper-1/option-e/t4-managing/l4-political-and":"LT17","/geography/paper-1/option-f/t1-measuring-food/l1-global-patterns":"FH-t1-l1-global-patterns","/geography/paper-1/option-f/t1-measuring-food/l2-the-nutrition":"FH-t1-l2-the-nutrition","/geography/paper-1/option-f/t1-measuring-food/l3-global-patterns":"FH-t1-l3-global-patterns","/geography/paper-1/option-f/t1-measuring-food/l4-the":"FH-t1-l4-the","/geography/paper-1/option-f/t2-food-systems/l1-energy-and":"FH06","/geography/paper-1/option-f/t2-food-systems/l2-disease":"FH07","/geography/paper-1/option-f/t2-food-systems/l3-the-role-of":"FH08","/geography/paper-1/option-f/t2-food-systems/l4-malaria-in":"FH09","/geography/paper-1/option-f/t2-food-systems/l5-cholera-a-water":"FH10","/geography/paper-1/option-f/t3-stakeholders-in/l1-the-role-of":"FH11","/geography/paper-1/option-f/t3-stakeholders-in/l2-the-influence":"FH12","/geography/paper-1/option-f/t3-stakeholders-in/l3-gender-roles":"FH13","/geography/paper-1/option-f/t3-stakeholders-in/l4-factors":"FH14","/geography/paper-1/option-f/t3-stakeholders-in/l5-case-study-a":"FH15","/geography/paper-1/option-f/t3-stakeholders-in/l6-case-study":"FH16","/geography/paper-1/option-f/t4-future-health/l1-possible":"FH17","/geography/paper-1/option-f/t4-future-health/l2-contemporary":"FH18","/geography/paper-1/option-f/t4-future-health/l3-prevention-and":"FH19","/geography/paper-1/option-f/t4-future-health/l4-managing":"FH20","/geography/paper-2/hl-1/t1-global/l1-globalization":"PPN-t1-l1-globalization","/geography/paper-2/hl-1/t1-global/l2-global":"PPN-t1-l2-global","/geography/paper-2/hl-1/t1-global/l3-powerful":"PPN-t1-l3-powerful","/geography/paper-2/hl-1/t2-global-networks/l1-an-overview-of":"PPN-t2-l1-an-overview-of","/geography/paper-2/hl-1/t2-global-networks/l2-foreign-direct":"PPN-t2-l2-foreign-direct","/geography/paper-2/hl-1/t2-global-networks/l3-case-study-two":"PPN-t2-l3-case-study-two","/geography/paper-2/hl-1/t3-human-and/l1-political":"PPN-t3-l1-political","/geography/paper-2/hl-1/t3-human-and/l2-our-shrinking":"PPN-t3-l2-our-shrinking","/geography/paper-2/hl-1/t3-human-and/l3-transport":"PPN-t3-l3-transport","/geography/paper-2/hl-1/t3-human-and/l4-patterns-and":"PPN-t3-l4-patterns-and","/geography/paper-2/hl-1/t3-human-and/l5-the-influence":"PPN-t3-l5-the-influence","/geography/paper-2/hl-2/t1-development/l1-measuring-human":"HD-t1-l1-measuring-human","/geography/paper-2/hl-2/t1-development/l2-empowering":"HD-t1-l2-empowering","/geography/paper-2/hl-2/t1-development/l3-the-importance":"HD-t1-l3-the-importance","/geography/paper-2/hl-2/t1-development/l4-tncs-and":"HD-t1-l4-tncs-and","/geography/paper-2/hl-2/t2-changing/l1-culture":"HD-t2-l1-culture","/geography/paper-2/hl-2/t2-changing/l2-the-effects-of":"HD-t2-l2-the-effects-of","/geography/paper-2/hl-2/t2-changing/l3-how-diasporas":"HD-t2-l3-how-diasporas","/geography/paper-2/hl-2/t3-local-responses/l1-local-and-civil":"HD-t3-l1-local-and-civil","/geography/paper-2/hl-2/t3-local-responses/l2-geopolitical":"HD-t3-l2-geopolitical","/geography/paper-2/hl-2/t3-local-responses/l3-the-role-of":"HD-t3-l3-the-role-of","/geography/paper-2/hl-3/t1-geopolitical/l1-threats-to":"GR01","/geography/paper-2/hl-3/t1-geopolitical/l2-emerging":"GR02","/geography/paper-2/hl-3/t1-geopolitical/l3-the-link":"GR03","/geography/paper-2/hl-3/t2-environmental/l1-trans-boundary":"GR04","/geography/paper-2/hl-3/t2-environmental/l2-environmental":"GR05","/geography/paper-2/hl-3/t2-environmental/l3-environmental":"GR06","/geography/paper-2/hl-3/t3-local-and/l1-international":"GR07","/geography/paper-2/hl-3/t3-local-and/l2-strategies-to":"GR08"};
  var UNITS = {
    "core-1": { guide: "changing-population", quest: "ib-population-quest" },
    "core-2": { guide: "global-climate", quest: "ib-climate-quest" },
    "core-3": { guide: "resource-consumption", quest: "ib-resource-quest" },
    "option-a": { guide: "freshwater", quest: "freshwater-quest" },
    "option-e": { guide: "leisure-tourism-sport", quest: "leisure-quest" },
    "option-f": { guide: "food-and-health", quest: "food-health-quest" },
    "hl-1": { guide: "power-places-networks" },
    "hl-2": { guide: "human-development-diversity" },
    "hl-3": { guide: "global-risks-resilience" }
  };

  var wrap = document.querySelector(".lh-unit-topics");
  if (!wrap) return;
  var seg = location.pathname.replace(/\/+$/, "").split("/").pop();
  var unit = UNITS[seg] || UNITS[Object.keys(UNITS).filter(function (k) { return seg.indexOf(k + "-") === 0; })[0]] || {};
  var flipIds = window.SBL_FLIP_IDS || [];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // Read the existing markup.
  var n = 0, topics = [];
  wrap.querySelectorAll(".lh-unit-topic").forEach(function (t) {
    var h = t.querySelector("h3"), lessons = [];
    t.querySelectorAll("li").forEach(function (li) {
      var a = li.querySelector("a");
      if (!a) return;
      var href = a.getAttribute("href"), raw = a.textContent.trim();
      var tagText = Array.prototype.map.call(li.querySelectorAll(".lh-item-tag"), function (x) { return x.textContent.trim(); });
      var isCase = /case study/i.test(raw) || tagText.some(function (x) { return /case/i.test(x); });
      var title = raw.replace(/^Lesson\s*\d+\s*:\s*/i, "").replace(/^Case study\s*[—–-]\s*/i, "");
      var id = LESSON_IDS[href] || null;
      n++;
      lessons.push({ n: n, href: href, title: title, id: id, isCase: isCase,
        isHL: tagText.some(function (x) { return /^HL/i.test(x); }),
        flip: !!(id && flipIds.indexOf(id) !== -1) });
    });
    topics.push({ title: h ? h.textContent.trim() : "", lessons: lessons });
  });
  if (!n) return;

  var css = document.createElement("style");
  css.textContent =
    ".up{max-width:1180px}" +
    ".up-stats{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1rem}" +
    ".up-stat{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);border-radius:10px;padding:.4rem .75rem;font-size:.82rem;color:rgba(255,255,255,.82)}" +
    ".up-stat b{font:700 1.05rem var(--lh-font-display);color:#fff;margin-right:.3rem}" +
    ".up-acts{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.9rem}" +
    ".up-act{display:inline-flex;align-items:center;gap:.4rem;border:1px solid rgba(255,255,255,.3);border-radius:999px;padding:.45rem .9rem;color:#fff!important;font:600 .83rem var(--lh-font-body);text-decoration:none}" +
    ".up-act:hover{background:rgba(255,255,255,.1)}.up-act--main{background:var(--lh-teal);border-color:var(--lh-teal)}" +
    ".up-act svg{width:15px;height:15px}" +
    ".up-topic{margin-top:1.8rem}" +
    ".up-th{display:flex;align-items:center;gap:.8rem;margin-bottom:.5rem}" +
    ".up-num{flex:none;width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:var(--lh-teal-bg);color:var(--lh-teal-deep);font:700 .95rem var(--lh-font-display)}" +
    ".up-th h2{margin:0;font:700 1.08rem var(--lh-font-display);color:var(--lh-ink)}" +
    ".up-th small{margin-left:auto;font-size:.8rem;color:var(--lh-muted);white-space:nowrap}" +
    ".up-bar{height:5px;border-radius:5px;background:var(--lh-border);margin:0 0 .9rem 46px;overflow:hidden}.up-bar i{display:block;height:100%;background:var(--lh-teal);border-radius:5px}" +
    ".up-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:.8rem}" +
    ".up-card{position:relative;display:flex;flex-direction:column;gap:.45rem;min-height:128px;background:var(--lh-surface);border:1px solid var(--lh-border);border-radius:14px;padding:.9rem 1rem;text-decoration:none;color:var(--lh-ink);transition:border-color .15s,transform .15s,box-shadow .15s}" +
    ".up-card:hover{border-color:var(--lh-teal);transform:translateY(-2px);box-shadow:0 6px 18px rgba(15,60,70,.08)}" +
    ".up-l{font:500 .7rem var(--lh-font-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--lh-muted)}" +
    ".up-t{font-weight:600;font-size:.93rem;line-height:1.35}" +
    ".up-tags{display:flex;flex-wrap:wrap;gap:.3rem;margin-top:auto}" +
    ".up-tag{font-size:.7rem;font-weight:600;border-radius:6px;padding:.12rem .45rem}" +
    ".up-tag--case{background:var(--lh-purple-bg);color:var(--lh-purple)}.up-tag--flip{background:var(--lh-teal-bg);color:var(--lh-teal-deep)}.up-tag--hl{background:var(--lh-gold-bg);color:var(--lh-gold)}" +
    ".up-st{font-size:.74rem;font-weight:600;color:var(--lh-muted)}.up-st--done{color:var(--lh-green)}.up-st--prog{color:var(--lh-orange)}" +
    ".up-card--done{border-color:var(--lh-green-bg)}" +
    ".up-go{position:absolute;right:.9rem;top:.85rem;width:16px;height:16px;color:var(--lh-muted)}.up-card:hover .up-go{color:var(--lh-teal)}" +
    "@media (max-width:640px){.up-bar{margin-left:0}.up-grid{grid-template-columns:1fr}}";
  document.head.appendChild(css);

  var ARROW = '<svg class="up-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var ICON = {
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 4v16l13-8z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5V5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>',
    game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="16" cy="11.5" r="1"/><circle cx="18" cy="13.5" r="1"/></svg>'
  };

  var all = topics.reduce(function (a, t) { return a.concat(t.lessons); }, []);
  var nCase = all.filter(function (l) { return l.isCase; }).length;
  var nFlip = all.filter(function (l) { return l.flip; }).length;

  // Stats + actions inside the dark banner.
  var banner = document.querySelector(".lh-page-banner");
  var bannerText = banner && banner.querySelector("div:not(.lh-page-banner__icon)");
  if (bannerText) {
    var st = '<div class="up-stats">' +
      '<span class="up-stat"><b>' + topics.length + "</b>topics</span>" +
      '<span class="up-stat"><b>' + all.length + "</b>lessons</span>" +
      (nCase ? '<span class="up-stat"><b>' + nCase + "</b>case stud" + (nCase === 1 ? "y" : "ies") + "</span>" : "") +
      (nFlip ? '<span class="up-stat"><b>' + nFlip + "</b>flip learning</span>" : "") +
      '<span class="up-stat" id="upDone" hidden></span></div>';
    var acts = '<div class="up-acts"><a class="up-act up-act--main" id="upContinue" href="' + esc(all[0].href) + '">' + ICON.play + "<span>Start lesson 1</span></a>" +
      (unit.guide ? '<a class="up-act" href="/geography/revision/guide/' + unit.guide + '">' + ICON.book + "Revision guide</a>" : "") +
      (unit.quest ? '<a class="up-act" href="/geography/games/' + unit.quest + '" target="_blank" rel="noopener">' + ICON.game + "Revision quest</a>" : "") + "</div>";
    bannerText.insertAdjacentHTML("beforeend", st + acts);
  }

  // Topic sections and lesson cards.
  var h = "";
  topics.forEach(function (t, ti) {
    h += '<section class="up-topic" data-t="' + ti + '"><div class="up-th"><span class="up-num">' + (ti + 1) + "</span><h2>" + esc(t.title) + "</h2>" +
      '<small class="up-count">' + t.lessons.length + " lesson" + (t.lessons.length === 1 ? "" : "s") + "</small></div>" +
      '<div class="up-bar" hidden><i style="width:0"></i></div><div class="up-grid">';
    t.lessons.forEach(function (l) {
      var tags = (l.isCase ? '<span class="up-tag up-tag--case">Case study</span>' : "") +
        (l.flip ? '<span class="up-tag up-tag--flip">Flip learning</span>' : "") +
        (l.isHL ? '<span class="up-tag up-tag--hl">HL</span>' : "");
      h += '<a class="up-card" href="' + esc(l.href) + '" data-id="' + esc(l.id || "") + '">' + ARROW +
        '<span class="up-l">Lesson ' + l.n + '</span><span class="up-t">' + esc(l.title) + "</span>" +
        '<span class="up-tags">' + tags + '<span class="up-st" hidden></span></span></a>';
    });
    h += "</div></section>";
  });
  wrap.className = "up";
  wrap.innerHTML = h;

  // Progress for signed-in students (same scoring as the lesson pages: 6 activities).
  function pct(d) {
    if (!d) return 0;
    var ib = Object.keys(d).some(function (k) { return k.indexOf("ib_q") === 0 && d[k] && typeof d[k].awarded === "number"; });
    var tmk = d.quiz_test_my_knowledge, sr = d.quiz_spaced_retrieval;
    var done = [!!d.teachOpenedAt || (Array.isArray(d.checklist) && d.checklist.some(Boolean)),
      !!(tmk && typeof tmk.pct === "number"), ib, !!(sr && typeof sr.pct === "number"), !!d.challengeOpenedAt, !!d.readinessCompleted];
    return Math.round(done.filter(Boolean).length / 6 * 100);
  }
  try {
    fetch("/api/progress", { credentials: "same-origin" }).then(function (r) { return r.ok ? r.json() : null; }).then(function (res) {
      var data = res && res.lessons;
      if (!data) return;
      var doneAll = 0, next = null;
      topics.forEach(function (t, ti) {
        var sum = 0, done = 0;
        t.lessons.forEach(function (l) {
          var p = l.id ? pct(data[l.id]) : 0;
          sum += p;
          var card = wrap.querySelector('.up-card[href="' + l.href + '"]'), s = card && card.querySelector(".up-st");
          if (s) {
            if (p === 100) { s.textContent = "✓ Completed"; s.className = "up-st up-st--done"; card.classList.add("up-card--done"); done++; }
            else if (p > 0) { s.textContent = "In progress · " + p + "%"; s.className = "up-st up-st--prog"; }
            s.hidden = !(p > 0);
          }
          if (p < 100 && !next) next = l;
        });
        doneAll += done;
        var sec = wrap.querySelector('.up-topic[data-t="' + ti + '"]');
        sec.querySelector(".up-count").textContent = t.lessons.length + " lessons · " + done + " done";
        var bar = sec.querySelector(".up-bar"); bar.hidden = false;
        bar.firstChild.style.width = Math.round(sum / t.lessons.length) + "%";
      });
      var d = document.getElementById("upDone");
      if (d) { d.innerHTML = "<b>" + doneAll + " / " + all.length + "</b>completed"; d.hidden = false; }
      var c = document.getElementById("upContinue");
      if (c && next && (doneAll || next.n > 1 || Object.keys(data).length)) {
        c.href = next.href;
        c.querySelector("span").textContent = "Continue: lesson " + next.n;
      }
    }).catch(function () {});
  } catch (e) {}
})();
