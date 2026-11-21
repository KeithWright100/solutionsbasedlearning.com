/* SBL Learning Hub: Flip learning (pre-lesson) panels.
   Adds a collapsible "Flip learning" task above the lesson activity
   cards (.lh-modes) on any lesson page whose teach-bot overlay has a
   data-lesson-id listed in FLIP below. To add another lesson, add an
   entry keyed by its lesson id (e.g. CP03) and include this script on
   that page. Answers are kept only in the student's own browser
   (localStorage) and can be copied out for OneNote. No accounts, no
   server calls. */
(function () {
  var FLIP = {
    CP02: {
      title: "Global patterns and classifications of economic development",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to cover:",
      cover: ["Low-income countries", "Middle-income countries", "High-income countries"],
      video: "", // paste the video URL here when ready
      parts: [
        { id: "a", type: "terms", prompt: "Define the following key terms.",
          rows: ["Development", "Economic development", "Quality of life", "Standard of living", "GDP per capita", "GNI per capita", "BRICS", "MINTs"] },
        { id: "b", type: "text", prompt: "Define inequality and give examples." },
        { id: "c", type: "table", prompt: "What are LICs, MICs and HICs?",
          cols: ["", "Definition", "2–3 examples"],
          rows: ["LICs", "MICs", "HICs"] },
        { id: "d", type: "table", prompt: "Complete the table below.",
          cols: ["Measure of development", "What does it measure?", "Measured in", "Type (social, economic, composite)"],
          rows: ["GDP per capita", "GNI per capita", "Life expectancy", "Education: literacy rate / expected years of schooling", "HDI", "GII", "Infant mortality rate", "Access to clean water"] },
        { id: "e", type: "questions", prompt: "Watch the video clip on development and answer the questions.", video: true,
          rows: [
            "What does human development mean?",
            "Why is development not only about money?",
            "Give two indicators that could measure quality of life.",
            "Why might two countries with similar income have different levels of development?",
            "Which measure do you think is most useful for understanding development? Explain why."
          ] }
      ]
    }
  };

  var overlay = document.querySelector("[data-lesson-id]");
  var id = overlay && overlay.getAttribute("data-lesson-id");
  var cfg = id && FLIP[id];
  var modes = document.querySelector(".lh-modes");
  if (!cfg || !modes) return;

  var KEY = "sbl-flip-" + id;
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function box(key, label, rows, cell) {
    return '<textarea class="fl-in" data-k="' + key + '" rows="' + (rows || 2) + '"' + (cell ? ' data-voice="off"' : "") + ' aria-label="' + esc(label) + '">' + esc(saved[key] || "") + "</textarea>";
  }

  var css = document.createElement("style");
  css.textContent =
    ".fl{margin:0 0 1.2rem;background:var(--lh-surface);border:1px solid var(--lh-border);border-left:5px solid var(--lh-teal);border-radius:14px;overflow:hidden}" +
    ".fl>summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:.9rem;padding:1rem 1.2rem}" +
    ".fl>summary::-webkit-details-marker{display:none}" +
    ".fl__icon{flex:none;width:42px;height:42px;border-radius:12px;display:grid;place-items:center;background:var(--lh-teal-bg);color:var(--lh-teal-deep)}" +
    ".fl__icon svg{width:22px;height:22px}" +
    ".fl__h{flex:1}.fl__eyebrow{font:500 .7rem var(--lh-font-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--lh-teal-deep)}" +
    ".fl__title{margin:.1rem 0 0;font:700 1.02rem var(--lh-font-display);color:var(--lh-ink)}" +
    ".fl__state{font-size:.8rem;color:var(--lh-muted);white-space:nowrap}" +
    ".fl__chev{width:18px;height:18px;color:var(--lh-muted);transition:transform .2s}.fl[open] .fl__chev{transform:rotate(180deg)}" +
    ".fl__body{padding:0 1.2rem 1.2rem;border-top:1px solid var(--lh-border)}" +
    ".fl__banner{display:block;width:100%;height:auto;border-radius:10px;margin-top:1rem}" +
    ".fl__intro{margin:1rem 0 .4rem;color:var(--lh-body)}.fl__cover{margin:0 0 .8rem 1.2rem;padding:0;color:var(--lh-body)}" +
    ".fl__bot{display:inline-flex;align-items:center;gap:.4rem;border:0;border-radius:999px;padding:.5rem 1rem;background:var(--lh-indigo);color:#fff;font:600 .85rem var(--lh-font-body);cursor:pointer}" +
    ".fl__part{margin-top:1.3rem}.fl__q{font-weight:600;color:var(--lh-ink);margin:0 0 .5rem}.fl__q b{display:inline-block;min-width:1.6rem;color:var(--lh-teal-deep)}" +
    ".fl table{width:100%;border-collapse:collapse;font-size:.88rem}.fl th,.fl td{border:1px solid var(--lh-border);padding:.4rem;vertical-align:top;text-align:left}" +
    ".fl th{background:var(--lh-teal-bg);color:var(--lh-ink);font-weight:600}.fl td.fl__rh{font-weight:600;color:var(--lh-ink);width:24%}" +
    ".fl-in{width:100%;box-sizing:border-box;border:1px solid var(--lh-border);border-radius:8px;padding:.45rem .55rem;font:inherit;font-size:.88rem;resize:vertical;background:var(--lh-bg)}" +
    ".fl td .fl-in{border-color:transparent;background:transparent;min-height:2.4rem}.fl td .fl-in:focus,.fl-in:focus{outline:2px solid var(--lh-teal);background:#fff}" +
    ".fl__vq{margin:.6rem 0 .25rem;color:var(--lh-ink)}.fl__video{display:inline-block;margin-bottom:.4rem;color:var(--lh-blue);font-weight:600}" +
    ".fl__note{font-size:.82rem;color:var(--lh-muted)}" +
    ".fl__actions{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;margin-top:1.4rem}" +
    ".fl__btn{border:1px solid var(--lh-teal);background:var(--lh-teal);color:#fff;border-radius:999px;padding:.5rem 1rem;font:600 .85rem var(--lh-font-body);cursor:pointer}" +
    ".fl__btn--ghost{background:transparent;color:var(--lh-teal-deep)}" +
    "@media print{.lh-sidebar,.lh-topbar,.lh-rail,.lh-modes,.lh-stats,.lh-tip,.fl__actions,.fl__bot{display:none!important}.fl{border:0}.fl td .fl-in{border:0}}";
  document.head.appendChild(css);

  var h = '<details class="fl" id="flipLearning"><summary>' +
    '<span class="fl__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/></svg></span>' +
    '<span class="fl__h"><span class="fl__eyebrow">Flip learning · pre-lesson</span><p class="fl__title">' + esc(cfg.title) + "</p></span>" +
    '<span class="fl__state" id="flState"></span>' +
    '<svg class="fl__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></summary><div class="fl__body">' +
    '<img class="fl__banner" src="/images/flip-learning-banner.png" alt="Flip Learning: learn first, think deep, apply together. Learn, inquiry, think, collaborate, apply.">';
  h += '<p class="fl__intro">' + esc(cfg.intro) + "</p><ul class=\"fl__cover\">" + cfg.cover.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul>";
  h += '<button type="button" class="fl__bot" onclick="window.openTeachBot && openTeachBot(\'' + id + '\')">Open Teach Me Live &rarr;</button>';

  cfg.parts.forEach(function (p) {
    h += '<div class="fl__part"><p class="fl__q"><b>' + p.id + ")</b>" + esc(p.prompt) + "</p>";
    if (p.type === "text") h += box(p.id, p.prompt, 4);
    if (p.type === "terms") {
      h += "<table><thead><tr><th>Key term</th><th>Definition</th></tr></thead><tbody>";
      p.rows.forEach(function (r, i) { h += '<tr><td class="fl__rh">' + esc(r) + "</td><td>" + box(p.id + i, r, 2, 1) + "</td></tr>"; });
      h += "</tbody></table>";
    }
    if (p.type === "table") {
      h += "<table><thead><tr>" + p.cols.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>";
      p.rows.forEach(function (r, i) {
        h += '<tr><td class="fl__rh">' + esc(r) + "</td>";
        for (var c = 1; c < p.cols.length; c++) h += "<td>" + box(p.id + i + "_" + c, r + ": " + p.cols[c], 2, 1) + "</td>";
        h += "</tr>";
      });
      h += "</tbody></table>";
    }
    if (p.type === "questions") {
      if (p.video) h += cfg.video
        ? '<a class="fl__video" href="' + esc(cfg.video) + '" target="_blank" rel="noopener">Watch the video &rarr;</a>'
        : '<p class="fl__note">Your teacher will share the video link.</p>';
      p.rows.forEach(function (r, i) { h += '<p class="fl__vq">' + (i + 1) + ". " + esc(r) + "</p>" + box(p.id + i, r, 3); });
    }
    h += "</div>";
  });

  h += '<div class="fl__actions"><button type="button" class="fl__btn" id="flCopy">Copy my answers for OneNote</button>' +
    '<button type="button" class="fl__btn fl__btn--ghost" id="flPrint">Print / save as PDF</button>' +
    '<span class="fl__note">Your answers save automatically on this device.</span></div></div></details>';

  modes.insertAdjacentHTML("beforebegin", h);
  var root = document.getElementById("flipLearning");
  var inputs = root.querySelectorAll(".fl-in");

  function state() {
    var done = 0;
    inputs.forEach(function (t) { if (t.value.trim()) done++; });
    document.getElementById("flState").textContent = done ? done + " / " + inputs.length + " answered" : "Not started";
  }
  root.addEventListener("input", function (e) {
    if (!e.target.classList.contains("fl-in")) return;
    saved[e.target.getAttribute("data-k")] = e.target.value;
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (err) {}
    state();
  });
  state();

  document.getElementById("flPrint").onclick = function () { root.open = true; window.print(); };
  document.getElementById("flCopy").onclick = function () {
    var out = ["Flip learning: " + cfg.title, ""];
    cfg.parts.forEach(function (p) {
      out.push(p.id + ") " + p.prompt);
      if (p.type === "text") out.push(saved[p.id] || "");
      if (p.type === "terms" || p.type === "questions") p.rows.forEach(function (r, i) { out.push("- " + r + " " + (saved[p.id + i] || "")); });
      if (p.type === "table") p.rows.forEach(function (r, i) {
        var cells = [];
        for (var c = 1; c < p.cols.length; c++) cells.push(p.cols[c] + ": " + (saved[p.id + i + "_" + c] || ""));
        out.push("- " + r + " | " + cells.join(" | "));
      });
      out.push("");
    });
    var txt = out.join("\n"), btn = this;
    function ok() { btn.textContent = "Copied ✓"; setTimeout(function () { btn.textContent = "Copy my answers for OneNote"; }, 1800); }
    if (navigator.clipboard) navigator.clipboard.writeText(txt).then(ok, function () { window.prompt("Copy:", txt); });
    else window.prompt("Copy:", txt);
  };
})();
