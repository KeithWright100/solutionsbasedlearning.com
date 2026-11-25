/* SBL KS3 Geography: lesson content.
   Each lesson is one entry, keyed by the data-lesson-id on its page. Lessons use the same
   activity types as the IB lessons (tables, matching, sorting, quizzes, writing boxes,
   diagrams, games) and are organised by five banners: Connect, Demonstrate, Quizzes,
   Challenge and Reflect. There is no flip learning for KS3.
   KS3-TEMPLATE is the sample lesson shown at /ks3/geography/template-preview. */
window.SBL_FLIP_EXTRA = window.SBL_FLIP_EXTRA || {};
(function (L) {
  function lesson(cfg) { cfg.kind = "lesson"; cfg.inline = true; cfg.markbook = true; cfg.open = true; cfg.noBot = true; cfg.heading = cfg.heading || "Lesson"; cfg.intro = cfg.intro || ""; return [cfg]; }
  var B = {
    connect: { type: "banner", src: "/images/flip/banner-connect.jpg", alt: "Connect" },
    demonstrate: { type: "banner", src: "/images/flip/banner-demonstrate.jpg", alt: "Demonstrate" },
    quizzes: { type: "banner", src: "/images/flip/banner-quizzes.jpg", alt: "Quizzes" },
    challenge: { type: "banner", src: "/images/flip/banner-challenge.jpg", alt: "Challenge" },
    reflect: { type: "banner", src: "/images/flip/banner-reflect.jpg", alt: "Reflect" }
  };
  window.SBL_KS3_BANNERS = B;
  function CLIMATE_SVG(name, T, R, tMin, tMax, rMax, w) {
    var M = "JFMAMJJASOND", X0 = 56, X1 = (w || 360) - 46, Y0 = 30, Y1 = 250, bw = (X1 - X0) / 12;
    var ty = function (t) { return Y1 - (t - tMin) / (tMax - tMin) * (Y1 - Y0); }, ry = function (r) { return Y1 - r / rMax * (Y1 - Y0); };
    var s = '<svg viewBox="0 0 ' + (w || 360) + ' 290" role="img" aria-label="Climate graph for ' + name + '" style="width:100%;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif" font-size="10.5">';
    s += '<text x="' + ((w || 360) / 2) + '" y="18" text-anchor="middle" font-weight="700" font-size="13">' + name + "</text>";
    for (var k = 0; k <= 5; k++) { var y = Y1 - k / 5 * (Y1 - Y0); s += '<line x1="' + X0 + '" y1="' + y + '" x2="' + X1 + '" y2="' + y + '" stroke="#eee"/><text x="' + (X0 - 5) + '" y="' + (y + 3.5) + '" text-anchor="end" fill="#1f5e85">' + Math.round(k / 5 * rMax) + '</text><text x="' + (X1 + 5) + '" y="' + (y + 3.5) + '" fill="#b42318">' + Math.round(tMin + k / 5 * (tMax - tMin)) + "</text>"; }
    R.forEach(function (r, i) { s += '<rect x="' + (X0 + i * bw + 2).toFixed(1) + '" y="' + ry(r).toFixed(1) + '" width="' + (bw - 4).toFixed(1) + '" height="' + (Y1 - ry(r)).toFixed(1) + '" fill="#5aa6d1"/><text x="' + (X0 + i * bw + bw / 2).toFixed(1) + '" y="' + (Y1 + 13) + '" text-anchor="middle">' + M[i] + "</text>"; });
    s += '<path d="M' + T.map(function (t, i) { return (X0 + i * bw + bw / 2).toFixed(1) + " " + ty(t).toFixed(1); }).join(" L") + '" fill="none" stroke="#b42318" stroke-width="2.5"/>' + T.map(function (t, i) { return '<circle cx="' + (X0 + i * bw + bw / 2).toFixed(1) + '" cy="' + ty(t).toFixed(1) + '" r="2.6" fill="#b42318"/>'; }).join("");
    s += '<line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#333"/><line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X0 + '" y2="' + Y1 + '" stroke="#1f5e85"/><line x1="' + X1 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#b42318"/>';
    s += '<text x="12" y="140" transform="rotate(-90 12 140)" text-anchor="middle" fill="#1f5e85">Precipitation (mm)</text><text x="' + ((w || 360) - 8) + '" y="140" transform="rotate(90 ' + ((w || 360) - 8) + ' 140)" text-anchor="middle" fill="#b42318">Temperature (°C)</text>';
    return s + "</g></svg>";
  }
  var BLANK_CLIMATE = (function () {
    var X0 = 80, X1 = 680, Y0 = 40, Y1 = 400, M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var s = '<svg viewBox="0 0 760 450" role="img" aria-label="Blank climate graph axes for Oslo: rainfall 0 to 100 millimetres on the left, temperature minus 5 to 25 degrees on the right, months along the bottom" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif" font-size="12">';
    for (var y = Y0; y <= Y1 + 0.1; y += 9) s += '<line x1="' + X0 + '" y1="' + y + '" x2="' + X1 + '" y2="' + y + '" stroke="' + ((y - Y0) % 72 === 0 ? "#b9cbe0" : "#e3ecf5") + '"/>';
    for (var x = X0; x <= X1 + 0.1; x += 10) s += '<line x1="' + x + '" y1="' + Y0 + '" x2="' + x + '" y2="' + Y1 + '" stroke="' + ((x - X0) % 50 === 0 ? "#b9cbe0" : "#e3ecf5") + '"/>';
    for (var k = 0; k <= 5; k++) { var yy = Y1 - k * 72; s += '<text x="' + (X0 - 8) + '" y="' + (yy + 4) + '" text-anchor="end" fill="#1f5e85" font-weight="700">' + (k * 20) + "</text>"; }
    for (var t = 0; t <= 6; t++) { var yt = Y1 - t * 60; s += '<line x1="' + X1 + '" y1="' + yt + '" x2="' + (X1 + 5) + '" y2="' + yt + '" stroke="#b42318" stroke-width="2"/><text x="' + (X1 + 9) + '" y="' + (yt + 4) + '" fill="#b42318" font-weight="700">' + (t * 5 - 5) + "</text>"; }
    M.forEach(function (m, i) { s += '<text x="' + (X0 + 25 + i * 50) + '" y="' + (Y1 + 18) + '" text-anchor="middle">' + m + "</text>"; });
    s += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X0 + '" y2="' + Y1 + '" stroke="#1f5e85" stroke-width="2"/><line x1="' + X1 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#b42318" stroke-width="2"/><line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#333" stroke-width="2"/>';
    s += '<text x="' + X0 + '" y="26" text-anchor="middle" fill="#1f5e85" font-weight="700">Rainfall (mm)</text><text x="' + X1 + '" y="26" text-anchor="middle" fill="#b42318" font-weight="700">Temperature (°C)</text><text x="380" y="444" text-anchor="middle" fill="#333">Climate graph for Oslo</text>';
    return s + "</g></svg>";
  })();
  var OSLO_T = [-3, -2, 2, 7, 13, 17, 18, 17, 12, 6, 1, -2], OSLO_R = [49, 37, 48, 41, 54, 81, 84, 95, 90, 90, 73, 63];
  var BKK_T = [27.5, 28.7, 29.8, 30.9, 30.4, 29.8, 29.4, 29.2, 28.7, 28.4, 28.1, 27.0], BKK_R = [21, 20, 52, 81, 220, 210, 207, 242, 331, 244, 59, 13];
  var CLIMATE_PAIR = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:.8rem">' + CLIMATE_SVG("Oslo, Norway", OSLO_T, OSLO_R, -5, 20, 100) + CLIMATE_SVG("Bangkok, Thailand", BKK_T, BKK_R, 0, 35, 350) + "</div>";
  var JUXT_SVG = (function () {
    var s = '<svg viewBox="0 0 760 300" role="img" aria-label="Illustration: modern skyscrapers rising directly behind an area of small informal homes with metal roofs" style="width:100%;max-width:760px;height:auto;display:block;border:1px solid var(--lh-border);border-radius:10px"><defs><linearGradient id="jsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe0f5"/><stop offset="1" stop-color="#eef7fc"/></linearGradient></defs><rect width="760" height="300" fill="url(#jsky)"/>';
    [[420, 40, 60], [490, 70, 50], [550, 20, 70], [630, 90, 55], [690, 60, 50], [360, 100, 50]].forEach(function (b) {
      s += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (210 - b[1]) + '" fill="#7d93a8"/>';
      for (var y = b[1] + 10; y < 200; y += 14) for (var x = b[0] + 6; x < b[0] + b[2] - 8; x += 12) s += '<rect x="' + x + '" y="' + y + '" width="7" height="8" fill="#d8e6f2"/>';
    });
    s += '<rect x="0" y="200" width="760" height="100" fill="#a58b6a"/>';
    for (var i = 0; i < 26; i++) {
      var x = (i % 13) * 58 - 10 + (i > 12 ? 28 : 0), y = i > 12 ? 248 : 212, w = 46 + (i * 7) % 14, h = 26 + (i * 5) % 10;
      var c = ["#b9c3cc", "#9aa8b4", "#c7b59a", "#8f9ea9", "#b0a088"][i % 5];
      s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + ["#d9c7a5", "#c9b48f", "#e1d2b5"][i % 3] + '" stroke="#7a6a52"/><path d="M' + (x - 3) + ' ' + y + ' L' + (x + w / 2) + ' ' + (y - 9) + ' L' + (x + w + 3) + ' ' + y + ' Z" fill="' + c + '" stroke="#6b7680"/>';
    }
    s += '<text x="12" y="290" font-family="Inter,Arial,sans-serif" font-size="12" fill="#fff">Illustration</text>';
    return s + "</svg>";
  })();
  var SCALES_SVG = (function () {
    var s = '<svg viewBox="0 0 760 266" role="img" aria-label="Inequality at three scales: global between countries, national within a country, local within a city" style="width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px"><g font-family="Inter,Arial,sans-serif" font-size="12.5">';
    var sh = ["#14695a", "#3b9e8a", "#7cc5b5", "#b7e1d8", "#e6f4f1"];
    /* global */
    s += '<g transform="translate(20,20)"><circle cx="105" cy="90" r="85" fill="#e8f3fa" stroke="#9fb7c4"/>' +
      '<path d="M50 50 q20-15 45-5 l5 25 -25 15 -20-10z" fill="' + sh[0] + '"/><path d="M110 40 q25-8 45 8 l-8 25 -30 0z" fill="' + sh[1] + '"/><path d="M95 95 q20-5 30 10 l-10 45 -20-5 -8-30z" fill="' + sh[4] + '"/><path d="M140 95 l25 5 0 25 -20 5z" fill="' + sh[3] + '"/><path d="M45 105 l25-5 5 40 -20 5z" fill="' + sh[2] + '"/></g>';
    s += '<text x="125" y="222" text-anchor="middle" font-weight="700">Global</text><text x="125" y="240" text-anchor="middle" fill="#555">between countries</text>';
    /* national */
    s += '<g transform="translate(275,25)"><path d="M30 20 L170 10 L200 70 L175 160 L90 175 L20 120 Z" fill="#fff" stroke="#555" stroke-width="1.5"/>' +
      '<path d="M30 20 L110 15 L100 80 L25 90 Z" fill="' + sh[1] + '"/><path d="M110 15 L170 10 L200 70 L120 85 Z" fill="' + sh[0] + '"/><path d="M25 90 L100 80 L95 160 L20 120 Z" fill="' + sh[3] + '"/><path d="M100 80 L200 70 L175 160 L95 165 Z" fill="' + sh[4] + '"/></g>';
    s += '<text x="380" y="222" text-anchor="middle" font-weight="700">National</text><text x="380" y="240" text-anchor="middle" fill="#555">between regions of one country</text>';
    /* local */
    s += '<g transform="translate(530,25)">';
    for (var r = 0; r < 4; r++) for (var c = 0; c < 5; c++) s += '<rect x="' + (c * 42) + '" y="' + (r * 42) + '" width="40" height="40" rx="3" fill="' + sh[(r * 2 + c * 3) % 5] + '"/>';
    s += '<path d="M-5 150 L215 15" stroke="#e07b1a" stroke-width="4" stroke-dasharray="8 5"/></g>';
    s += '<text x="635" y="222" text-anchor="middle" font-weight="700">Local</text><text x="635" y="240" text-anchor="middle" fill="#555">between neighbourhoods</text><text x="635" y="256" text-anchor="middle" fill="#c2410c" font-size="11.5">dashed line = a transect</text>';
    return s + "</g></svg>";
  })();

  L["KS3-TEMPLATE"] = lesson({
    title: "Template: how a KS3 lesson is laid out",
    overview: {
      heading: "Template lesson",
      intention: "To show the five-part structure every KS3 lesson follows.",
      syllabus: ["Each KS3 lesson is organised into Connect, Demonstrate, Quizzes, Challenge and Reflect."],
      success: ["I can find the starter in Connect.", "I can complete the main activities in Demonstrate.", "I can check my learning in Quizzes, stretch myself in Challenge and look back in Reflect."]
    },
    parts: [
      B.connect,
      { type: "heading", text: "Starter", note: "A short activity to connect to what you already know." },
      { id: "c1", label: "", type: "text", prompt: "What do you already know about this topic? Write three things." },
      B.demonstrate,
      { type: "heading", text: "Activity 1", note: "The main teaching and learning activities go here: diagrams, maps, tables, matching and sorting tasks." },
      { id: "d1", label: "a)", type: "table", prompt: "Example table", cols: ["Key word", "Meaning"], rows: ["Physical geography", "Human geography", "Environmental geography"] },
      B.quizzes,
      { id: "q1", label: "", type: "mcq", noReason: true, prompt: "Quick quiz", items: [
        { q: "Which of these is an example of physical geography?", o: ["A city", "A volcano", "A farm", "A road"], a: 1 },
        { q: "Which of these is an example of human geography?", o: ["A river", "A desert", "Migration", "A glacier"], a: 2 }] },
      B.challenge,
      { id: "h1", label: "", type: "text", prompt: "Challenge question: a harder question that stretches your thinking." },
      B.reflect,
      { id: "r1", label: "", type: "text", prompt: "Exit ticket: what is one thing you learned today, and one question you still have?" }
    ]
  });

  L["KS3-Y8DEV-L1"] = lesson({
    title: "How does life vary around the world?",
    overview: {
      heading: "Development and inequalities",
      intention: "To understand how and why life varies between and within countries, without stereotyping places.",
      syllabus: ["Key question: how does life vary around the world, and why should we be careful not to generalise?"],
      success: ["Define climate, inequality and GDP per capita.",
        "Describe how life varies around the world, using clues from photos and data.",
        "Explain why life also varies within a country, such as Thailand and Kenya, and why stereotypes are misleading."]
    },
    parts: [
      B.connect,
      { type: "heading", text: "Starter: True or false? (Time for educated guesswork)", note: "In pairs, discuss each statement and decide whether it is true or false." },
      { id: "tf", label: "", type: "mcq", noReason: true, prompt: "", items: [
        { q: "If a country has a high GDP per person, everyone in that country is wealthy.", o: ["True", "False"], a: 1 },
        { q: "Some high-income countries still have people living in poverty.", o: ["True", "False"], a: 0 },
        { q: "All people in low-income countries are poor.", o: ["True", "False"], a: 1 },
        { q: "Most of the world\u2019s population lives in low-income countries.", o: ["True", "False"], a: 1 },
        { q: "Life expectancy is usually higher in countries with better access to healthcare, clean water and education.", o: ["True", "False"], a: 0 },
        { q: "A country can become wealthier without reducing inequality.", o: ["True", "False"], a: 0 },
        { q: "Development only means economic growth.", o: ["True", "False"], a: 1 },
        { q: "Every person in a highly developed country enjoys a high quality of life.", o: ["True", "False"], a: 1 },
        { q: "Girls and boys have equal access to education in every country.", o: ["True", "False"], a: 1 },
        { q: "Countries can have modern cities and poor rural areas at the same time.", o: ["True", "False"], a: 0 },
        { q: "A country with a high average income automatically has low inequality.", o: ["True", "False"], a: 1 },
        { q: "Some countries with lower incomes have higher life expectancy than richer countries.", o: ["True", "False"], a: 0 }] },
      { type: "heading", text: "Activity 1: Mix and match key terms" },
      { id: "k1", label: "", type: "match", termCol: "Key term", defCol: "Definition (choose one)", noExample: true, prompt: "",
        items: [{ t: "Climate", d: "The average of weather conditions (e.g. rain, sun, wind) in a place, taken over a long period of time (usually 30 years or more)." },
          { t: "Inequality", d: "The uneven distribution of resources, opportunities and living conditions." },
          { t: "GDP per capita", d: "The total value of all the goods and services produced in a country in a year, divided by its population." }] },
      B.demonstrate,
      { type: "heading", text: "Activity 2: How does life vary around the world?", note: "Study the photographs your teacher shows you." },
      { id: "c1", label: "a)", type: "table", prompt: "What clues do the photographs give us about living in these places?", cols: ["", "What I can see, and what it tells me"], rows: ["Clue 1", "Clue 2", "Clue 3", "Clue 4", "Can you add any more?"] },
      { id: "c2", label: "b)", type: "text", before: "<svg viewBox=\"0 0 760 330\" role=\"img\" aria-label=\"Mind map: life varies around the world in wealth, health, education, housing, jobs, climate, culture and technology\" style=\"width:100%;max-width:760px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px\"><g font-family=\"Inter,Arial,sans-serif\"><line x1=\"380\" y1=\"165\" x2=\"380\" y2=\"40\" stroke=\"#0f766e\" stroke-width=\"2.5\"/><rect x=\"295\" y=\"23\" width=\"170\" height=\"34\" rx=\"17\" fill=\"#fff\" stroke=\"#0f766e\" stroke-width=\"2\"/><text x=\"380\" y=\"45\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f766e\">Wealth and income</text><line x1=\"380\" y1=\"165\" x2=\"585\" y2=\"77\" stroke=\"#b42318\" stroke-width=\"2.5\"/><rect x=\"500\" y=\"60\" width=\"170\" height=\"34\" rx=\"17\" fill=\"#fff\" stroke=\"#b42318\" stroke-width=\"2\"/><text x=\"585\" y=\"82\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#b42318\">Health</text><line x1=\"380\" y1=\"165\" x2=\"670\" y2=\"165\" stroke=\"#2a63b8\" stroke-width=\"2.5\"/><rect x=\"585\" y=\"148\" width=\"170\" height=\"34\" rx=\"17\" fill=\"#fff\" stroke=\"#2a63b8\" stroke-width=\"2\"/><text x=\"670\" y=\"170\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2a63b8\">Education</text><line x1=\"380\" y1=\"165\" x2=\"585\" y2=\"253\" stroke=\"#c2410c\" stroke-width=\"2.5\"/><rect x=\"500\" y=\"236\" width=\"170\" height=\"34\" rx=\"17\" fill=\"#fff\" stroke=\"#c2410c\" stroke-width=\"2\"/><text x=\"585\" y=\"258\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#c2410c\">Housing</text><line x1=\"380\" y1=\"165\" x2=\"380\" y2=\"290\" stroke=\"#6b2fa3\" stroke-width=\"2.5\"/><rect x=\"295\" y=\"273\" width=\"170\" height=\"34\" rx=\"17\" fill=\"#fff\" stroke=\"#6b2fa3\" stroke-width=\"2\"/><text x=\"380\" y=\"295\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#6b2fa3\">Jobs</text><line x1=\"380\" y1=\"165\" x2=\"175\" y2=\"253\" stroke=\"#5e8f3c\" stroke-width=\"2.5\"/><rect x=\"90\" y=\"236\" width=\"170\" height=\"34\" rx=\"17\" fill=\"#fff\" stroke=\"#5e8f3c\" stroke-width=\"2\"/><text x=\"175\" y=\"258\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#5e8f3c\">Climate and environment</text><line x1=\"380\" y1=\"165\" x2=\"90\" y2=\"165\" stroke=\"#a16207\" stroke-width=\"2.5\"/><rect x=\"5\" y=\"148\" width=\"170\" height=\"34\" rx=\"17\" fill=\"#fff\" stroke=\"#a16207\" stroke-width=\"2\"/><text x=\"90\" y=\"170\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#a16207\">Culture and religion</text><line x1=\"380\" y1=\"165\" x2=\"175\" y2=\"77\" stroke=\"#13284b\" stroke-width=\"2.5\"/><rect x=\"90\" y=\"60\" width=\"170\" height=\"34\" rx=\"17\" fill=\"#fff\" stroke=\"#13284b\" stroke-width=\"2\"/><text x=\"175\" y=\"82\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#13284b\">Technology</text><ellipse cx=\"380\" cy=\"165\" rx=\"110\" ry=\"40\" fill=\"#6b2fa3\"/><text x=\"380\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#fff\">How does life vary</text><text x=\"380\" y=\"180\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"800\" fill=\"#fff\">around the world?</text></g></svg>", prompt: "Life varies around the world in many ways. Study the diagram, then add two more ways of your own and explain one of them." },
      { type: "heading", text: "Activity 3: How does life vary around the world?", note: "Work through the activity below to learn how life varies in different parts of the world. Screenshot each page and paste it into OneNote." },
      { type: "game", src: "/geography/games/life-around-the-world", title: "How Does Life Vary?" },
      { id: "lv1", label: "", type: "text", prompt: "Summarise the three most surprising differences you found between places." },
      { type: "heading", text: "Activity 4: Who is correct, Izzy or Sam?" },
      { id: "is1", label: "", type: "text", prompt: "Who is correct? Justify your answer.",
        before: '<div class="fl-chat"><p class="fl-chat__a"><b>Izzy:</b> Kenya is a poor country, so everyone who lives there must be poor.</p><p class="fl-chat__b"><b>Sam:</b> I don’t agree. Life varies inside a country. Nairobi has wealthy suburbs, shopping centres and skyscrapers, but also informal settlements, and life in rural areas is different again.</p></div>' },
      { type: "heading", text: "Activity 5: So, how much does life vary in Thailand?" },
      { type: "html", html: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><b>Thailand fact file</b><ul style="margin:.4rem 0 0 1.1rem;padding:0"><li>Human Development Index (HDI): 0.798, ranked 76th of 193 countries (UNDP, 2023 data). It is fourth in South-East Asia, after Singapore, Brunei and Malaysia.</li><li>When inequality is taken into account, Thailand’s HDI score falls by about 15%.</li><li>Wealth is very unevenly shared: the richest 5% of landowners hold about 80% of all land.</li><li>Bangkok is a global city with high incomes and modern services, while many rural areas, for example in the north-east (Isan), rely on farming and have lower incomes.</li></ul></div>' },
      { id: "th1", label: "", type: "text", words: [80, 200], prompt: "How does life vary in Thailand? Use the information above and your own experience." },
      { type: "heading", text: "Activity 6: Don’t generalise or create stereotypes", note: "Study the illustration below." },
      { type: "html", html: JUXT_SVG },
      { id: "st1", label: "", type: "questions", letters: true, prompt: "", rows: ["What does stereotyping mean?", "Geographers use the word ‘juxtaposition’ to describe images like this one. What do you think it means? Think about what the image is showing."] },
      { type: "heading", text: "Activity 7: Using statistics in geography", note: "Study all of the information below." },
      { id: "ke0", label: "", type: "table", prompt: "Kenya: key statistics", given: true, cols: ["Indicator", "Kenya"], rows: ["Population", "GDP per capita", "Life expectancy", "Human Development Index (HDI)", "Living in towns and cities", "Adult literacy"],
        prefill: { 0: ["About 57 million (2025)"], 1: ["About US$2,360 (World Bank, 2025)"], 2: ["63.6 years (2023)"], 3: ["0.628, ranked 143rd of 193 (2023)"], 4: ["About 30% (most people live in rural areas)"], 5: ["About 83% (2021)"] } },
      { id: "ke1", label: "", type: "text", words: [80, 200], prompt: "Using everything you have learned this lesson, describe what life is like in Kenya. Remember that life varies within the country: avoid generalising." },
      { type: "heading", text: "Activity 8: Who is correct in this discussion?" },
      { id: "dc1", label: "", type: "text", prompt: "Write your response here.",
        before: '<div class="fl-chat"><p class="fl-chat__a"><b>Student A:</b> The best way to measure development is GDP per capita. If a country is rich, its people have a good quality of life.</p><p class="fl-chat__b"><b>Student B:</b> GDP per capita only shows money. Costa Rica has a lower GDP per capita than many countries but people live long, happy lives. We need a composite indicator like the HDI.</p></div>' },
      B.quizzes,
      { id: "q1", label: "", type: "mcq", noReason: true, prompt: "Quick check", items: [
        { q: "Which is the best definition of climate?", o: ["The weather today", "The average weather over 30 years or more", "How hot it is in summer", "The amount of rain in one storm"], a: 1 },
        { q: "GDP per capita is\u2026", o: ["the total money a government spends", "the value of goods and services produced, divided by the population", "the average life expectancy", "the number of jobs in a country"], a: 1 },
        { q: "Which statement avoids a stereotype?", o: ["Everyone in Kenya is poor", "Life in Kenya varies between cities and rural areas", "All of Africa is one poor country", "Thailand has no modern cities"], a: 1 }] },
      B.reflect,
      { type: "heading", text: "Plenary: Analysing inaccuracies", note: "Write a response to Jun, suggesting why each of his sentences might be misleading." },
      { id: "j1", label: "", type: "table", before: '<div class="fl-chat"><p class="fl-chat__a"><b>Jun:</b> 1. Africa is a poor country. 2. Everyone in Thailand lives on a farm. 3. Rich countries like the USA don\u2019t have any poverty. 4. Kenya has no big cities or modern buildings.</p></div><div class="fl__tnote"><b>Structure:</b> Jun says\u2026 This is misleading because\u2026 A more accurate sentence would be\u2026</div>', prompt: "", cols: ["Jun\u2019s sentence", "Why it is misleading", "A more accurate sentence"], rows: ["1. Africa is a poor country.", "2. Everyone in Thailand lives on a farm.", "3. Rich countries like the USA don\u2019t have any poverty.", "4. Kenya has no big cities or modern buildings."] }
    ]
  });

  L["KS3-Y8DEV-L2"] = lesson({
    title: "How do we measure development?",
    overview: {
      heading: "Development and inequalities",
      intention: "To understand how we measure development using single and composite indicators.",
      syllabus: ["Key question: how can we measure development, and which indicators give the best picture?"],
      success: ["Define development, development indicator and composite indicator.",
        "Use development indicators to describe development in Costa Rica.",
        "Evaluate which indicators give the best picture of development, using Development Detectives."]
    },
    parts: [
      B.connect,
      { type: "heading", text: "Starter: Kahoot recap", note: "Recap last lesson. Your teacher will start the game on the board." },
      { type: "linkcard", url: "https://create.kahoot.it/details/16af2697-645b-4c58-a31d-8c6b76ca750b", icon: "K", title: "Kahoot: development recap", sub: "Join with the game PIN on the board" },
      { type: "heading", text: "Activity 1: Mix and match key terms" },
      { id: "k1", label: "", type: "match", termCol: "Key term", defCol: "Definition (choose one)", noExample: true, prompt: "Match each key term to its definition.",
        items: [{ t: "Development", d: "The improvement in people’s quality of life within a country or region." },
          { t: "Development indicator", d: "A measurable piece of data used to assess and compare levels of development between countries or regions." },
          { t: "Composite indicator", d: "A measure that combines several individual indicators to give a more complete picture of development." }] },
      B.demonstrate,
      { type: "heading", text: "Activity 2: Exploring development in Costa Rica", note: "Costa Rica is a small country in Central America, the part of North America between Mexico and South America. Study the information below." },
      { type: "html", html: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><b>Costa Rica fact file</b><ul style="margin:.4rem 0 0 1.1rem;padding:0"><li>Population: about 5.2 million people.</li><li>Human Development Index (HDI): 0.833, ranked 62nd of 193 countries (UNDP, 2023 data). This counts as <b>very high</b> human development.</li><li>Life expectancy: about 81 years, longer than in the USA.</li><li>GDP per capita: about US$20,000 (World Bank, 2025).</li><li>Almost all of its electricity (about 98%) comes from renewable sources, mostly hydroelectric power.</li><li>Forest covered only about 20% of the country in the 1980s; after protection and replanting it now covers over half.</li><li>Costa Rica abolished its army in 1948 and spends the money on education, health and the environment.</li><li>It often comes top of the Happy Planet Index, which compares wellbeing and life expectancy with environmental impact.</li></ul></div>' },
      { id: "c1", label: "a)", type: "table", prompt: "Sort the facts into development indicators.", cols: ["Type of indicator", "Evidence from Costa Rica"], rows: ["Economic (money and jobs)", "Social (health, education, wellbeing)", "Environmental", "Composite (more than one combined)"] },
      { id: "c2", label: "b)", type: "text", prompt: "Costa Rica is not a rich country, yet people live long and happy lives. Suggest why." },
      { type: "heading", text: "Activity 3: Development Detectives (main activity)", note: "Play the game below. There are pause points throughout where we will discuss your understanding. The game ends with a short assessment that gives you an immediate score and feedback, and your scores save to your account." },
      { type: "game", src: "/geography/games/development-detectives", title: "Development Detectives" },
      { id: "dd1", label: "a)", type: "text", prompt: "Challenge answers: copy your answers to the challenges here." },
      { id: "dd2", label: "b)", type: "text", words: [60, 200], prompt: "Assessment: copy your final answer here, with your score and the feedback you were given." },
      B.quizzes,
      { id: "q1", label: "", type: "mcq", noReason: true, prompt: "Quick check", items: [
        { q: "Which of these is a social indicator of development?", o: ["GDP per capita", "Life expectancy", "Exports", "Unemployment rate"], a: 1 },
        { q: "The Human Development Index (HDI) is an example of…", o: ["a single indicator", "a composite indicator", "a stereotype", "a type of map"], a: 1 },
        { q: "Which statement is true?", o: ["Everyone in a low-income country is poor", "Life can vary a lot within one country", "GDP per capita shows how happy people are", "Development only means getting richer"], a: 1 },
        { q: "Costa Rica makes almost all of its electricity from…", o: ["coal", "nuclear power", "renewable sources", "imported oil"], a: 2 }] },
      B.challenge,
      { id: "h1", label: "", type: "text", prompt: "Challenge: Costa Rica has a much lower GDP per capita than the USA, yet people there live longer. Which indicator do you think gives the best picture of development? Explain your choice and its limitations." },
      B.reflect,
      { id: "r1", label: "", type: "text", prompt: "Exit ticket: which indicator do you think gives the best picture of development, and why?" }
    ]
  });

  L["KS3-Y8DEV-GROUP"] = lesson({
    title: "The Development Summit (group task)",
    overview: {
      heading: "Development and inequalities",
      intention: "To work as a group to consolidate what we have learned about measuring development and inequality.",
      syllabus: ["Key question: which country is the most developed, and does the answer depend on how we measure it?"],
      success: ["Use economic and social indicators to compare six countries.",
        "Explain why a country\u2019s wealth does not always match its level of development.",
        "Present a group decision, supported by evidence, and assess other groups fairly."]
    },
    parts: [
      B.connect,
      { type: "heading", text: "Starter: First impressions", note: "On your own, before you see any data, put these countries in order from most developed to least developed. We will come back to this at the end." },
      { id: "s1", label: "", type: "rank", prompt: "1 = most developed, 6 = least developed.", n: 6, placeholder: "Choose a country\u2026", options: ["Norway", "Qatar", "Costa Rica", "Thailand", "India", "Kenya"] },
      B.demonstrate,
      { type: "heading", text: "Activity 1: Choose your roles", note: "Welcome to the Development Summit. Your group is a team of advisers to the United Nations. Your job is to decide which of six countries is the most developed, and to convince the summit you are right." },
      { type: "html", html: "<div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:.6rem\"><div style=\"border:2px solid #0f766e;border-radius:12px;padding:.6rem .7rem;background:#fff\"><div style=\"font-weight:800;color:#0f766e\">Economist</div><div style=\"font-size:.92rem;margin-top:.25rem\">Wealth and jobs: GNI per person, types of work, trade.</div></div><div style=\"border:2px solid #b42318;border-radius:12px;padding:.6rem .7rem;background:#fff\"><div style=\"font-weight:800;color:#b42318\">Health and education expert</div><div style=\"font-size:.92rem;margin-top:.25rem\">Life expectancy, years of schooling, access to doctors and clean water.</div></div><div style=\"border:2px solid #6b2fa3;border-radius:12px;padding:.6rem .7rem;background:#fff\"><div style=\"font-weight:800;color:#6b2fa3\">Equality officer</div><div style=\"font-size:.92rem;margin-top:.25rem\">Who gets left behind? Gaps between rich and poor, cities and countryside, men and women.</div></div><div style=\"border:2px solid #5e8f3c;border-radius:12px;padding:.6rem .7rem;background:#fff\"><div style=\"font-weight:800;color:#5e8f3c\">Environment adviser</div><div style=\"font-size:.92rem;margin-top:.25rem\">Is development sustainable? Energy, pollution and carbon emissions.</div></div></div><div class=\"fl__tnote\" style=\"margin-top:.6rem\"><b>Groups of 4:</b> each person takes one role. You are the expert for your role, so you must speak up for your evidence in the summit.</div>" },
      { type: "heading", text: "Activity 2: Study the country cards", note: "Read all six cards together. Each expert should focus on the evidence for their role." },
      { type: "html", html: "<div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.7rem\"><div style=\"border-radius:12px;overflow:hidden;border:1px solid var(--lh-border);background:#fff\"><div style=\"background:#13284b;color:#fff;padding:.45rem .7rem\"><b style=\"font-size:1.05rem\">Norway</b> <span style=\"opacity:.85;font-size:.85rem\">Europe</span></div><div style=\"padding:.5rem .7rem;font-size:.92rem\"><div><b>HDI:</b> 0.970 (world rank 2nd)</div><div><b>GNI per person:</b> $112,710</div><div><b>Life expectancy:</b> 83.3 years</div><div><b>Expected schooling:</b> 18.8 years</div><div style=\"margin-top:.35rem;padding-top:.35rem;border-top:1px dashed var(--lh-border)\">One of the most equal societies in the world. Almost all electricity comes from hydropower, but much of its wealth comes from selling oil and gas.</div></div></div><div style=\"border-radius:12px;overflow:hidden;border:1px solid var(--lh-border);background:#fff\"><div style=\"background:#7a1f3d;color:#fff;padding:.45rem .7rem\"><b style=\"font-size:1.05rem\">Qatar</b> <span style=\"opacity:.85;font-size:.85rem\">Middle East</span></div><div style=\"padding:.5rem .7rem;font-size:.92rem\"><div><b>HDI:</b> 0.886 (world rank 43rd)</div><div><b>GNI per person:</b> \u2248 $100,000*</div><div><b>Life expectancy:</b> \u2248 82 years*</div><div><b>Expected schooling:</b> \u2248 13 years*</div><div style=\"margin-top:.35rem;padding-top:.35rem;border-top:1px dashed var(--lh-border)\">Most people living there are migrant workers, many of whom earn far less than Qatari citizens. Very high carbon emissions per person.</div></div></div><div style=\"border-radius:12px;overflow:hidden;border:1px solid var(--lh-border);background:#fff\"><div style=\"background:#0f766e;color:#fff;padding:.45rem .7rem\"><b style=\"font-size:1.05rem\">Costa Rica</b> <span style=\"opacity:.85;font-size:.85rem\">Central America</span></div><div style=\"padding:.5rem .7rem;font-size:.92rem\"><div><b>HDI:</b> 0.833 (world rank 62nd)</div><div><b>GNI per person:</b> $23,417</div><div><b>Life expectancy:</b> 80.8 years</div><div><b>Expected schooling:</b> 16.3 years</div><div style=\"margin-top:.35rem;padding-top:.35rem;border-top:1px dashed var(--lh-border)\">No army since 1948; money goes to health and education instead. Nearly all electricity comes from renewable sources.</div></div></div><div style=\"border-radius:12px;overflow:hidden;border:1px solid var(--lh-border);background:#fff\"><div style=\"background:#2a63b8;color:#fff;padding:.45rem .7rem\"><b style=\"font-size:1.05rem\">Thailand</b> <span style=\"opacity:.85;font-size:.85rem\">South-east Asia</span></div><div style=\"padding:.5rem .7rem;font-size:.92rem\"><div><b>HDI:</b> 0.798 (world rank 76th)</div><div><b>GNI per person:</b> \u2248 $19,000*</div><div><b>Life expectancy:</b> \u2248 76 years*</div><div><b>Expected schooling:</b> \u2248 15 years*</div><div style=\"margin-top:.35rem;padding-top:.35rem;border-top:1px dashed var(--lh-border)\">Bangkok is a modern, wealthy city, but incomes are much lower in many rural areas such as the north-east.</div></div></div><div style=\"border-radius:12px;overflow:hidden;border:1px solid var(--lh-border);background:#fff\"><div style=\"background:#c2410c;color:#fff;padding:.45rem .7rem\"><b style=\"font-size:1.05rem\">India</b> <span style=\"opacity:.85;font-size:.85rem\">South Asia</span></div><div style=\"padding:.5rem .7rem;font-size:.92rem\"><div><b>HDI:</b> 0.685 (world rank 130th)</div><div><b>GNI per person:</b> \u2248 $9,000*</div><div><b>Life expectancy:</b> \u2248 72 years*</div><div><b>Expected schooling:</b> \u2248 13 years*</div><div style=\"margin-top:.35rem;padding-top:.35rem;border-top:1px dashed var(--lh-border)\">Fast-growing technology cities such as Bengaluru, but many people in rural areas still live in poverty.</div></div></div><div style=\"border-radius:12px;overflow:hidden;border:1px solid var(--lh-border);background:#fff\"><div style=\"background:#5e8f3c;color:#fff;padding:.45rem .7rem\"><b style=\"font-size:1.05rem\">Kenya</b> <span style=\"opacity:.85;font-size:.85rem\">East Africa</span></div><div style=\"padding:.5rem .7rem;font-size:.92rem\"><div><b>HDI:</b> 0.628 (world rank 143rd)</div><div><b>GNI per person:</b> \u2248 $5,000*</div><div><b>Life expectancy:</b> 63.6 years</div><div><b>Expected schooling:</b> \u2248 11 years*</div><div style=\"margin-top:.35rem;padding-top:.35rem;border-top:1px dashed var(--lh-border)\">Nairobi is a technology hub (mobile money began here), but many rural households still have no electricity.</div></div></div></div><div class=\"fl__tnote\" style=\"margin-top:.5rem;font-size:.85rem\">Data: UNDP Human Development Report 2025 (2023 figures). GNI per person is adjusted for the cost of living (PPP). * rounded estimate.</div>" },
      { id: "t1", label: "", type: "table", prompt: "As a group, complete the evidence table. Each expert fills in their own column.", cols: ["Country", "Economist: wealth", "Health and education", "Equality", "Environment"], rows: ["Norway", "Qatar", "Costa Rica", "Thailand", "India", "Kenya"] },
      { type: "heading", text: "Activity 3: Spot the surprises", note: "Discuss these questions as a group. Write your group\u2019s answers." },
      { id: "m1", type: "questions", letters: true, prompt: "", rows: ["Qatar is almost as rich as Norway. Why is its HDI so much lower? Use the cards to suggest two reasons.",
        "Costa Rica earns about one fifth of Norway\u2019s GNI per person, yet people live only about two and a half years less. How?",
        "Which country would the environment adviser be most worried about? Why?",
        "Which country has the biggest gap between its cities and its countryside? What does this tell you about using one average for a whole country?"] },
      { type: "heading", text: "Activity 4: Prepare your summit pitch", note: "Your group must agree on the most developed country. It does not have to be the one with the highest HDI, but you must justify your choice. Each expert speaks for about 30 seconds." },
      { id: "p1", label: "", type: "text", words: [100, 250], prompt: "Write your group\u2019s pitch. Every expert must add one piece of evidence.",
        before: '<div class="fl__tnote"><b>Pitch frame:</b> We believe ___ is the most developed country because\u2026 The economist\u2019s evidence shows\u2026 Our health and education expert found\u2026 However, our equality officer warns that\u2026 Our environment adviser thinks\u2026 Overall\u2026</div>',
        mustUse: [["Indicator", "indicator"], ["HDI", "hdi|human development"], ["GNI or GDP", "gni|gdp"], ["Life expectancy", "life expectancy"], ["Inequality", "inequal|equal|gap"], ["However", "however|but|although"]] },
      { type: "heading", text: "Activity 5: The summit", note: "Each group presents its pitch. While you listen, assess each group." },
      { id: "pa", label: "", type: "table", prompt: "Peer assessment. Give each group a score out of 3 for each column, and one question you would ask them.", cols: ["Group and country chosen", "Used evidence (/3)", "Considered inequality (/3)", "Persuasive (/3)", "My question for them"], rows: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5", "Group 6"] },
      B.quizzes,
      { id: "q1", label: "", type: "mcq", noReason: true, prompt: "Quick check", items: [
        { q: "Which three things does the HDI combine?", o: ["Wealth, health and education", "Wealth, climate and population", "Health, religion and jobs", "Exports, imports and debt"], a: 0 },
        { q: "Why might a rich country have a lower HDI than expected?", o: ["Its wealth is shared unequally, or spent less on health and education", "It has too many schools", "It is too far from the equator", "The HDI only measures wealth"], a: 0 },
        { q: "Which statement about Kenya is the most accurate?", o: ["Everyone in Kenya is poor", "Kenya has modern cities such as Nairobi but many rural areas lack electricity", "Kenya has no technology", "Kenya is the least developed country in the world"], a: 1 },
        { q: "An average figure for a whole country can hide\u2026", o: ["differences between regions and groups of people", "the capital city", "the climate", "nothing at all"], a: 0 }] },
      B.reflect,
      { id: "r1", label: "a)", type: "text", prompt: "Look back at your starter order. Did you change your mind? What surprised you most?" },
      { id: "r2", label: "b)", type: "text", prompt: "How well did your group work together? What did you do well in your role, and what would you do differently next time?" }
    ]
  });

  L["KS3-Y8DEV-L3"] = lesson({
    title: "GIS: analysing inequality at different scales",
    overview: {
      heading: "Development and inequalities",
      intention: "To use GIS to analyse inequality at global, national and local scales.",
      syllabus: ["Key question: how does inequality differ between countries, within countries and within a local area?"],
      success: ["Describe patterns of economic or social inequality on a digital map, such as GDP per capita or healthy life expectancy.",
        "Use the ArcGIS Geography Visualiser to add a layer and draw a transect across a local area.",
        "Explain how inequality differs at global, national and local scales, using evidence from the maps."]
    },
    parts: [
      B.connect,
      { type: "heading", text: "Starter: key terms", note: "Match each new key term to its meaning, then add them to your key terms list from last week." },
      { id: "k1", label: "", type: "match", termCol: "Key term", defCol: "Meaning (choose one)", noExample: true, prompt: "",
        items: [{ t: "Inequality", d: "The uneven distribution of resources, opportunities and living conditions." },
          { t: "GIS (Geographic Information System)", d: "A computer system that captures and displays geographic data to help us understand spatial patterns." },
          { t: "GDP per capita", d: "The total value of all the goods and services produced in a country in a year, divided by its population." },
          { t: "Healthy life expectancy", d: "The average number of years a person is expected to live free from serious disability or disease." },
          { t: "Deprivation", d: "A lack of the basic needs and services that people need to live a safe and healthy life." }] },
      B.demonstrate,
      { type: "heading", text: "Activity 1: Why do geographers map data?", note: "Data on inequality can be shown in many ways. This table shows GDP per capita for the first few countries in a World Bank table. The full table has 189 rows!" },
      { id: "t1", label: "", type: "table", prompt: "", given: true, cols: ["Country", "GDP per capita (US $)"], rows: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda"],
        prefill: { 0: ["1,992"], 1: ["18,244"], 2: ["15,159"], 3: ["64,631"], 4: ["7,244"], 5: ["28,967"] } },
      { id: "t2", label: "a)", type: "text", prompt: "How easy would it be to analyse inequality using a table of 189 rows? What would be a better way to show this data?" },
      { type: "html", html: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><b>Why do we do this?</b> As geographers, we show data <b>spatially</b> (on maps) so we can see how patterns and processes vary from place to place. A map lets us describe patterns that a table hides, for example: <i>high GDP per capita in North America and western Europe; low GDP per capita in sub-Saharan Africa and south-west Asia.</i></div>' },
      { type: "heading", text: "Activity 2: Be a geographical data analyst", note: "Students often ask what jobs you can do with geography. Today you will try one: geographical data analyst! Use the GIS map below." },
      { id: "g1", label: "", type: "gismap", prompt: "", a: 0,
        source: "Countries are grouped into five bands (approximate). Data: World Bank (GDP per capita, adjusted for prices), WHO (healthy life expectancy) and the World Happiness Report (life satisfaction), via Our World in Data (CC BY). For exact figures, use Our World in Data.",
        layers: [
          { name: "GDP per capita", bands: ["Under $3,000", "$3,000\u201310,000", "$10,000\u201325,000", "$25,000\u201345,000", "Over $45,000"], colors: ["#e6f4f1", "#b7e1d8", "#7cc5b5", "#3b9e8a", "#14695a"] },
          { name: "Healthy life expectancy", bands: ["Under 55 years", "55\u201360 years", "60\u201365 years", "65\u201370 years", "70 years or more"], colors: ["#e8f0fb", "#bcd3f2", "#86aee3", "#4a7fc6", "#1f4f94"] },
          { name: "Life satisfaction (happiness)", bands: ["Under 4 out of 10", "4\u20135", "5\u20136", "6\u20137", "7 or more"], colors: ["#fdf0e1", "#fbd3a5", "#f6a75e", "#e07b1a", "#a3500a"] }],
        data: "012:3:4:3;024:2:2:0;204:2:2:2;072:3:2:1;854:1:1:2;108:1:2:1;120:2:1:2;140:1:1:0;148:1:1:2;178:2:2:3;180:1:1:1;384:2:1:3;262:2:2:0;818:3:3:2;226:3:2:0;232:1:2:0;231:1:2:2;266:3:2:2;270:1:2:2;288:2:2:2;324:2:1:2;624:1:1:0;404:2:2:2;426:1:1:1;430:1:2:2;434:3:3:3;450:1:2:2;454:1:2:1;466:1:1:2;478:2:2:2;504:2:3:2;508:1:1:3;516:3:2:2;562:1:2:2;566:2:1:2;646:1:3:1;686:2:3:2;694:1:1:1;706:1:1:0;710:3:2:3;728:1:1:1;729:2:3:0;748:3:1:0;834:2:2:1;768:1:1:2;788:3:4:2;800:1:2:2;894:2:2:1;716:2:1:1;840:5:4:4;124:5:5:4;484:3:4:4;320:3:3:4;084:3:3:0;222:3:3:4;340:2:3:3;558:2:3:4;188:4:4:5;591:4:4:4;192:0:4:0;332:1:2:0;214:3:3:3;388:3:4:3;780:4:4:0;044:4:3:0;630:4:0:0;170:3:4:3;862:0:3:3;328:5:2:0;740:3:3:0;218:3:4:3;604:3:4:3;076:3:4:4;068:2:3:3;600:3:4:3;858:4:4:4;032:4:4:4;152:4:5:4;826:5:5:4;372:5:5:4;250:5:5:4;276:5:5:4;528:5:5:5;056:5:5:4;442:5:5:5;756:5:5:5;040:5:5:4;380:5:5:4;724:4:5:4;620:4:5:4;300:4:5:3;578:5:5:5;752:5:5:5;246:5:5:5;208:5:5:5;352:5:5:5;616:4:4:4;203:5:4:4;703:4:4:4;348:4:4:4;705:4:5:4;191:4:4:4;070:3:4:3;688:3:4:4;499:4:4:3;807:3:4:3;008:3:4:3;100:4:4:3;642:4:4:4;498:3:3:3;804:3:3:2;112:4:4:0;643:4:3:3;233:4:4:4;428:4:4:4;440:4:4:4;196:5:5:4;156:3:4:3;356:2:3:2;392:4:5:4;410:5:5:4;408:0:3:0;496:3:3:3;158:5:0:4;704:3:4:4;418:2:3:0;116:2:3:2;764:3:4:3;104:2:3:2;458:4:4:3;360:3:3:3;608:2:3:4;626:2:3:0;096:5:3:0;050:2:3:1;064:3:3:0;524:2:3:3;144:3:4:1;586:2:2:2;004:1:1:1;364:3:4:2;368:3:3:3;760:0:3:0;422:3:4:1;376:5:5:5;275:2:0:2;400:2:4:2;682:5:3:4;784:5:4:4;512:4:4:0;887:1:2:0;414:5:4:4;634:5:4:0;792:4:4:2;268:3:3:3;051:3:4:3;031:3:3:0;398:4:3:4;860:2:3:4;795:0:3:0;417:2:3:3;762:2:3:3;036:5:5:5;554:5:5:5;598:2:2:0;242:3:3:0;090:1:3:0;548:2:3:0" },
      { id: "g2", label: "a)", type: "table", prompt: "Look at each map in turn (change the main map). Describe what you see.", cols: ["Map", "Where are the highest values?", "Where are the lowest values?", "Anything that doesn\u2019t follow the pattern?"], rows: ["GDP per capita", "Healthy life expectancy", "Life satisfaction"] },
      { id: "g3", label: "b)", type: "text", words: [60, 150], prompt: "Pick one map and write a short paragraph describing what you can see. Use continents, named countries and numbers from the map.",
        before: '<div class="fl__tnote"><b>Hints:</b> Which countries have the highest values? Which have the lowest? Is there a pattern or trend? Is there anything that doesn\u2019t follow the pattern?<br><b>A great answer may sound like this:</b> <i>I chose to look at how satisfied people are with their lives, which is a measure of happiness. Countries in Oceania, northern Europe and Central America tend to have high scores; for example, Costa Rica in Central America scores above 7 out of 10. Countries in central Africa, such as South Sudan, and Afghanistan in central Asia have very low scores, below 4.</i></div>' },
      { id: "g4", label: "c)", type: "text", words: [60, 150], prompt: "Now overlay two maps: choose GDP per capita as the main map and healthy life expectancy as the overlay (circles). Describe the relationship. Do countries with high GDP per capita also have long healthy lives? Name any exceptions.",
        note: "Sentence starters: In general, countries with ___ also have ___. For example, ___. However, ___ does not follow this pattern because ___." },
      { type: "linkcard", url: "https://ourworldindata.org/", icon: "\ud83c\udf0d", title: "Our World in Data", sub: "Search for GDP per capita, healthy life expectancy, HDI or happiness to see the exact figures" },
      { type: "heading", text: "Activity 3: Inequality at different scales", note: "Inequality is not just between countries. It exists inside countries and inside towns and cities too." },
      { type: "html", html: SCALES_SVG },
      { type: "html", html: '<figure style="margin:.8rem 0 0"><img src="/images/flip/ks3-y8dev-scales.jpg" alt="Three maps: GDP per capita by country (global inequality between countries), deprivation across Northern Ireland (national inequality within a country), and deprivation across Sheffield (local inequality within a place)" style="width:100%;max-width:900px;height:auto;display:block;border:1px solid var(--lh-border);border-radius:10px"><figcaption class="fl__note" style="margin-top:.3rem">Left: Our World in Data, GDP per capita 2023 (CC BY). Centre and right: deprivation maps viewed in ArcGIS.</figcaption></figure>' },
      {"type": "heading", "text": "Activity 4: Inequality inside a country: Thailand", "note": "Thailand is a middle-income country, but life varies a lot between its regions. Use the map like a GIS: change the data layer, and move over or tap a region to see its figures."},
      {"id": "th", "label": "", "type": "regionmap", "prompt": "", "country": 764, "box": [[97.3, 5.6], [105.7, 20.5]], "regions": [{"name": "North", "label": [99.6, 18.4], "coords": [[96, 21], [101.4, 21], [101.3, 17.8], [101, 16.5], [98.5, 16.3], [96, 16.5], [96, 21]]}, {"name": "Northeast (Isan)", "label": [103.3, 16.0], "coords": [[101.3, 17.8], [101.4, 21], [106.5, 21], [106.5, 14.1], [102.5, 14.1], [101.3, 14.6], [101, 16.5], [101.3, 17.8]]}, {"name": "West", "label": [99.0, 14.6], "coords": [[96, 16.5], [98.5, 16.3], [99.9, 15.5], [99.9, 13.5], [99.6, 11.5], [96, 11.5], [96, 16.5]]}, {"name": "Central", "label": [100.3, 15.4], "coords": [[98.5, 16.3], [101, 16.5], [101.3, 14.6], [100.95, 14.15], [100.2, 14.15], [100.2, 13.55], [99.9, 13.5], [99.9, 15.5], [98.5, 16.3]]}, {"name": "East", "label": [101.9, 13.2], "coords": [[101.3, 14.6], [102.5, 14.1], [103.2, 14.1], [103.2, 11], [100.8, 12.4], [100.85, 13.55], [100.95, 14.15], [101.3, 14.6]]}, {"name": "South", "label": [99.4, 8.6], "coords": [[96, 11.5], [99.6, 11.5], [101, 11.5], [102, 5], [96, 5], [96, 11.5]]}, {"name": "Bangkok", "label": [100.55, 13.85], "coords": [[100.2, 13.55], [100.95, 13.55], [100.95, 14.15], [100.2, 14.15], [100.2, 13.55]]}], "layers": [{"name": "GDP per person (US$, 2024)", "values": [3711, 2957, 5035, 8340, 14183, 4829, 14186], "breaks": [0, 4000, 6000, 10000], "bands": ["Under $4,000", "$4,000–5,999", "$6,000–9,999", "$10,000 and over"], "colors": ["#fee2e2", "#fca5a5", "#ef4444", "#991b1b"], "fmt": "${v}"}, {"name": "Human Development Index (2023)", "values": [0.782, 0.779, 0.808, 0.808, 0.808, 0.786, 0.833], "breaks": [0, 0.78, 0.8, 0.82], "bands": ["Under 0.780", "0.780–0.799", "0.800–0.819", "0.820 and over"], "colors": ["#dbeafe", "#93c5fd", "#3b82f6", "#1e3a8a"]}, {"name": "People living in poverty (%, 2022)", "values": [6.8, 7.81, null, null, null, 9.3, 1.37], "breaks": [0, 3, 7, 9], "bands": ["Under 3%", "3–6.9%", "7–8.9%", "9% and over"], "colors": ["#dcfce7", "#86efac", "#22c55e", "#14532d"], "fmt": "{v}%"}], "source": "Map drawn by SBL; region boundaries are simplified. Data: GDP per person from Wikipedia’s list of ASEAN subdivisions by GDP (2024); HDI from UNDP regional estimates (2023, Central, East and West are one region); poverty from NESDC (2022, no separate figure for Central, East and West)."},
      {"type": "html", "html": "<div class=\"fl__scroll\"><table><thead><tr><th>Region</th><th>GDP per person (US$, 2024)</th><th>HDI (2023)</th><th>Poverty (%, 2022)</th></tr></thead><tbody><tr><td class=\"fl__rh\">North</td><td>$3,711</td><td>0.782</td><td>6.8%</td></tr><tr><td class=\"fl__rh\">Northeast (Isan)</td><td>$2,957</td><td>0.779</td><td>7.81%</td></tr><tr><td class=\"fl__rh\">West</td><td>$5,035</td><td>0.808</td><td>no separate data</td></tr><tr><td class=\"fl__rh\">Central</td><td>$8,340</td><td>0.808</td><td>no separate data</td></tr><tr><td class=\"fl__rh\">East</td><td>$14,183</td><td>0.808</td><td>no separate data</td></tr><tr><td class=\"fl__rh\">South</td><td>$4,829</td><td>0.786</td><td>9.3%</td></tr><tr><td class=\"fl__rh\">Bangkok</td><td>$14,186</td><td>0.833</td><td>1.37%</td></tr></tbody></table></div>"},
      {"id": "th1", "label": "a)", "type": "table", "prompt": "Use the map. For each layer, describe what you see.", "cols": ["Data layer", "Highest region(s)", "Lowest region(s)", "Pattern you notice"], "rows": ["GDP per person", "Human Development Index", "Poverty"]},
      {"id": "th2", "label": "b)", "type": "text", "words": [60, 150], "prompt": "Compare the maps. Do the regions with the lowest GDP per person also have the lowest HDI and the highest poverty? Use figures from the map."},
      {"id": "th3", "label": "c)", "type": "text", "prompt": "Suggest two reasons why Bangkok and the East are so much richer than the Northeast (Isan). Think about jobs, industry, ports, farming and migration."},
      {"type": "heading", "text": "Extension (optional): analysing inequality in an English city with ArcGIS"},
      { type: "heading", text: "Use the ArcGIS Geography Visualiser", note: "The ArcGIS Geography Visualiser has a data layer called the English Indices of Multiple Deprivation (IMD) 2019. It uses official government statistics to rank small areas of England by deprivation, taking into account income, education, health and housing." },
      { type: "linkcard", url: "https://www.arcgis.com/apps/instant/atlas/index.html?appid=7150690455c24b42b25fc850462befe2", icon: "\ud83d\uddfa\ufe0f", title: "The Geography Visualiser (ArcGIS)", sub: "Open the map, then follow Parts 1 and 2 below" },
      { type: "html", html: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><b>Part 1</b><ol style="margin:.3rem 0 .6rem 1.2rem;padding:0"><li>Open the Geography Visualiser (link above).</li><li>Click <b>Add layer</b> in the bottom toolbar.</li><li>Select <b>English Indices of Multiple Deprivation (IMD) 2019</b>.</li><li>Search for a place. Pick a city: London, Liverpool, Manchester, Newcastle or Sheffield.</li><li>Click <b>Map layer</b> to hide the deprivation layer.</li><li>Click <b>Sketch</b> on the toolbar and draw around your chosen place (pick a colour you can see).</li></ol><b>Part 2</b><ol style="margin:.3rem 0 .6rem 1.2rem;padding:0"><li>Click <b>Map layer</b> again to make deprivation visible.</li><li>Click <b>Sketch</b> and draw a line (a transect) across your chosen area in another bright colour.</li><li>Pick 4 points along your line and record the deprivation decile at each one.</li></ol><b>Reading the IMD:</b> check the legend. Decile <b>1</b> means the area is among the <b>10% most deprived</b> in England; decile <b>10</b> means it is among the <b>10% least deprived</b>.</div>' },
      { id: "a1", label: "a)", type: "table", prompt: "Record your 4 points along the transect.", cols: ["Point", "Where along the line (place or road name)", "IMD decile (1\u201310)", "What this tells you"], rows: ["Point 1", "Point 2", "Point 3", "Point 4"] },
      { id: "a2", label: "b)", type: "text", words: [80, 180], prompt: "Part 3: Describe how deprivation changes along your line in the city you chose. Look at the most and least deprived points AND the overall trend or pattern you see.", note: "Name your city, use the decile numbers as evidence, and say whether deprivation rises or falls towards the city centre." },
      B.quizzes,
      { id: "q1", label: "", type: "mcq", noReason: true, prompt: "Quick check", items: [
        { q: "What does GIS stand for?", o: ["Global Inequality Survey", "Geographic Information System", "Geographical Index Score", "Government Information Service"], a: 1 },
        { q: "Comparing GDP per capita between Norway and Chad is inequality at which scale?", o: ["Local", "National", "Global"], a: 2 },
        { q: "Comparing neighbourhoods along a transect across Sheffield is inequality at which scale?", o: ["Local", "National", "Global"], a: 0 },
        { q: "In the IMD, an area in decile 1 is\u2026", o: ["among the 10% least deprived", "among the 10% most deprived", "exactly average"], a: 1 }] },
      B.challenge,
      { id: "h1", label: "", type: "text", prompt: "Challenge: the UK has a high GDP per capita, yet your transect shows big differences in deprivation within one city. Explain why a country can be rich overall but still very unequal inside. Use evidence from the maps." },
      B.reflect,
      { type: "heading", text: "Review your learning", note: "Play the class Kahoot to check what you have learned." },
      { type: "linkcard", url: "https://create.kahoot.it/share/gis-analysing-inequality-at-different-scales-1/db767d5f-22bc-44d8-82b3-bc49c711a93a", icon: "K", title: "Kahoot: GIS, analysing inequality at different scales", sub: "Your teacher will start the game on the board" }
    ]
  });

  L["KS3-Y7FP-L3"] = lesson({
    title: "Mount Ruapehu: a fantastic volcanic place",
    overview: {
      heading: "Fantastic places",
      intention: "To explain what makes Mount Ruapehu a fantastic place, using place, processes, power and possibilities.",
      syllabus: ["Key question: what makes Mount Ruapehu fantastic, and how can people visit it safely and responsibly?"],
      success: ["Describe what makes Mount Ruapehu distinctive (place).", "Explain how volcanic activity has shaped the landscape (processes).",
        "Explain how scientists, communities and authorities manage safe access (power), and suggest a responsible future idea (possibilities)."]
    },
    parts: [
      B.connect,
      { type: "heading", text: "Starter: our case study", note: "Study the photo below and answer the questions." },
      { type: "html", html: '<img src="/images/flip/ks3-y7fp-ruapehu-starter.jpg" alt="A snow-capped volcano behind a steaming landscape of brightly coloured, mineral-stained rocks and a pale blue pool" style="width:100%;max-width:700px;height:auto;display:block;border-radius:10px;border:1px solid var(--lh-border)">' },
      { id: "st", label: "", type: "questions", prompt: "", rows: ["Where do you think the photograph was taken?", "What can you observe?", "What processes may have shaped this landscape?", "What would you need to know before calling it \u201cfantastic\u201d?"] },
      B.demonstrate,
      { type: "heading", text: "Activity 1: Ruapehu Mission", note: "Play the game to explore Mount Ruapehu. Your scores save to your account if you are logged in." },
      { type: "game", src: "/geography/games/volcano-fantastic-place", title: "Ruapehu Mission" },
      { type: "heading", text: "Activity 2: Persuasive tourist advert", note: "ROLE: you are a travel writer and geographer. Persuade people to visit Mount Ruapehu while keeping the geography accurate and the advice responsible." },
      { type: "html", html: '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:.7rem;margin:.4rem 0"><div style="border:2px solid #1b8bb0;border-radius:10px;padding:.7rem .9rem;background:#fff"><b style="color:#1b8bb0">PLACE</b><p style="margin:.3rem 0 0">what makes Mount Ruapehu distinctive</p></div><div style="border:2px solid #e0703a;border-radius:10px;padding:.7rem .9rem;background:#fff"><b style="color:#e0703a">PROCESSES</b><p style="margin:.3rem 0 0">how volcanic activity shaped the landscape</p></div><div style="border:2px solid #7650ad;border-radius:10px;padding:.7rem .9rem;background:#fff"><b style="color:#7650ad">POWER</b><p style="margin:.3rem 0 0">how scientists, communities or authorities influence safe access</p></div><div style="border:2px solid #4a8a3f;border-radius:10px;padding:.7rem .9rem;background:#fff"><b style="color:#4a8a3f">POSSIBILITIES</b><p style="margin:.3rem 0 0">one positive but responsible future idea</p></div></div>' },
      { type: "html", html: '<div class="fl__tnote"><b>Your advert must include:</b><ul style="margin:.3rem 0 0 1.1rem;padding:0"><li>a title and a slogan</li><li>a rhetorical question and direct address (talk to the reader as \u201cyou\u201d)</li><li>at least three persuasive adjectives</li><li>a clear statement about following current official guidance and restrictions</li></ul></div>' },
      { id: "p1", label: "a)", type: "table", prompt: "Planning frame", cols: ["", "My plan"], rows: ["Title and slogan", "PLACE evidence", "PROCESSES evidence", "POWER evidence", "POSSIBILITIES idea", "Persuasive techniques", "Safety statement"] },
      { type: "html", html: '<div class="fl__tnote" style="background:#fff8f0;border:1px solid #f3c9a5"><p style="margin:0 0 .3rem;font-size:.85rem;color:#666">Example for inspiration. Yours needs to be better and more detailed: you can do this!</p><h3 style="margin:.2rem 0;color:#13284b">Visit Mount Ruapehu</h3><p style="margin:0 0 .5rem;font-style:italic">Can one mountain be shaped by both fire and ice?</p><p style="margin:0 0 .5rem;color:#c2410c;font-weight:700">Discover a snow-capped volcanic cone, an acidic crater lake, glaciers and vivid mineral-stained rocks in a place shaped by powerful Earth processes.</p><p style="margin:0 0 .5rem">Explore approved routes, learn how subduction creates magma and see how eruptions, glaciers and lahars have shaped Ruapehu. GNS Science, the Department of Conservation, iwi, emergency managers, communities and visitors all play a part in keeping access responsible.</p><p style="margin:0 0 .5rem;color:#b42318;font-weight:700">Follow current official guidance and never enter a restricted area.</p><p style="margin:0;font-weight:800;color:#1b8bb0">VISIT MOUNT RUAPEHU: GEOGRAPHY COMES ALIVE</p></div>' },
      { id: "p2", label: "b)", type: "text", words: [120, 250], prompt: "Write your persuasive tourist advert for Mount Ruapehu.", note: "Each item turns green when you use it.",
        mustUse: [["Place", "distinctive|unique|special"], ["Processes", "subduction|magma|erupt|lahar"], ["Power", "scientist|gns|geonet|conservation|iwi|authorit|emergency"], ["Possibilities", "future"], ["Rhetorical question", "\\?"], ["Direct address", "\\byou\\b"], ["Safety statement", "guidance|restrict|safe"]] },
      B.quizzes,
      { id: "q1", label: "", type: "mcq", noReason: true, prompt: "Quick check", items: [
        { q: "Mount Ruapehu is on which island of New Zealand?", o: ["North Island", "South Island", "Stewart Island", "Chatham Island"], a: 0 },
        { q: "Ruapehu formed because one tectonic plate sinks beneath another. This process is called\u2026", o: ["erosion", "subduction", "deposition", "weathering"], a: 1 },
        { q: "A fast-moving flow of volcanic mud and water is called a\u2026", o: ["glacier", "lahar", "geyser", "fjord"], a: 1 },
        { q: "Why does the Crater Lake on Ruapehu need careful monitoring?", o: ["It is very acidic and can feed eruptions and lahars", "It is used for swimming", "It freezes every summer", "It is the source of all New Zealand\u2019s drinking water"], a: 0 }] },
      B.reflect,
      { type: "heading", text: "Final geographical judgement", note: "How far do you agree: \u201cMount Ruapehu is fantastic because of its volcano\u201d?" },
      { id: "j1", label: "", type: "table", prompt: "", cols: ["", "Your sentence"], rows: ["PLACE: Ruapehu is distinctive because\u2026", "PROCESSES: Volcanic processes have\u2026", "POWER: Decisions are influenced by\u2026", "POSSIBILITIES: In the future, Ruapehu could\u2026"] },
      { id: "j2", label: "", type: "text", prompt: "VERDICT: Overall, I agree / partly agree / disagree because the most important evidence is\u2026" },
      { type: "heading", text: "Exit ticket: one idea for each P", note: "Complete the four rows, then give your final verdict." },
      { id: "x1", label: "", type: "table", prompt: "", cols: ["", "Evidence", "Why it matters"], rows: ["PLACE", "PROCESSES", "POWER", "POSSIBILITIES"] },
      { id: "x2", label: "", type: "text", prompt: "FINAL VERDICT: Fantastic, partly fantastic or too risky? Choose one and give your main reason." }
    ]
  });

  L["KS3-Y7FP-L5"] = lesson({
    title: "Oslo: weather, climate and climate graphs",
    overview: {
      heading: "Fantastic places",
      intention: "To describe the location and climate of Oslo, and to draw and interpret a climate graph.",
      syllabus: ["Key question: what is the climate like in Oslo, and how can we show climate data visually?"],
      success: ["Describe the location of Oslo using continent, country, hemisphere, compass directions and nearby features.",
        "Read climate data to find the coldest and wettest months and calculate the temperature range.",
        "Draw a climate graph for Oslo and use it to describe the climate in detail."]
    },
    parts: [
      B.connect,
      { type: "heading", text: "Starter: What’s the weather like?", note: "Look out of the window. What things make up the ‘weather’? Write as many words as you can on your whiteboard, then complete the table." },
      { id: "s0", label: "a)", type: "text", prompt: "Weather words I can think of:" },
      { id: "s1", label: "b)", type: "table", prompt: "Describe each weather variable.", cols: ["Variable", "Description"], rows: ["Temperature (hot or cold?) and humidity", "Precipitation (rainfall or snow?)", "Extreme weather events", "Air pressure and wind speed", "Wind direction", "Cloud cover and different types of cloud"] },
      B.demonstrate,
      { type: "heading", text: "Activity 1: Place: which city am I?", note: "Grab a small whiteboard. Your teacher will reveal up to 10 clues. After each clue, wait to be told before you raise your board." },
      { type: "html", html: '<details class="fl-clue"><summary>Clue 1</summary><p>I am a capital city.</p></details><details class="fl-clue"><summary>Clue 2</summary><p>I am in the Northern Hemisphere, and in the Eastern Hemisphere too.</p></details><details class="fl-clue"><summary>Clue 3</summary><p>I am on the continent of Europe.</p></details><details class="fl-clue"><summary>Clue 4</summary><p>I am in a region called Scandinavia.</p></details><details class="fl-clue"><summary>Clue 5</summary><p>I sit at the head of a long, narrow inlet of the sea called a fjord.</p></details><details class="fl-clue"><summary>Clue 6</summary><p>In winter the average temperature is below 0°C, and there can be snow for months.</p></details><details class="fl-clue"><summary>Clue 7</summary><p>In summer it stays light until nearly 11 at night.</p></details><details class="fl-clue"><summary>Clue 8</summary><p>My country became rich from oil and gas found under the North Sea.</p></details><details class="fl-clue"><summary>Clue 9</summary><p>The Nobel Peace Prize is awarded in my city every December.</p></details><details class="fl-clue"><summary>Clue 10</summary><p>I am the capital of Norway.</p></details><details class="fl-clue"><summary>Reveal the answer</summary><p><b>Oslo, Norway</b></p></details>' },
      { type: "heading", text: "Activity 2: Describing the location of Oslo" },
      { id: "loc", label: "", type: "locmap", alt: "Map of northern Europe with Norway highlighted and Oslo marked", box: [[-6, 52], [32, 71]], hi: [578], points: [{ t: "Oslo", lon: 10.75, lat: 59.91 }],
        labels: [{ t: "NORWAY", lon: 9, lat: 62.5 }, { t: "SWEDEN", lon: 16, lat: 63 }, { t: "FINLAND", lon: 26.5, lat: 63.5 }, { t: "DENMARK", lon: 9.3, lat: 56.1 }, { t: "UK", lon: -1.5, lat: 53.2 }, { t: "North Sea", lon: 3, lat: 56.5, sea: true }, { t: "Norwegian Sea", lon: 3, lat: 66.5, sea: true }, { t: "Baltic Sea", lon: 19.5, lat: 57.5, sea: true }, { t: "Skagerrak", lon: 8.8, lat: 57.8, sea: true }] },
      { id: "l1", label: "", type: "text", words: [40, 100], prompt: "Describe the location of Oslo. Include the continent, country, hemisphere, compass directions and nearby (adjacent) features.",
        note: "Sentence starters: Oslo is the capital city of ___, in the continent of ___. It is in the ___ Hemisphere. It lies in the ___ of Norway, at the head of the Oslofjord, which leads to the ___. To the east is ___." },
      { type: "heading", text: "Oslo is a long way north!", note: "Look at the other places on the same line of latitude as Oslo (about 60\u00b0N)." },
      { id: "lat", label: "", type: "locmap", alt: "World map with a line along latitude 60 degrees north and a line along longitude 10.75 degrees east, crossing at Oslo", box: [[-170, -56], [180, 78]], points: [{ t: "Oslo", lon: 10.75, lat: 59.91 }], lines: { lat: 59.91, lon: 10.75 },
        labels: [{ t: "Oslo: 59\u00b055\u2032N, 10\u00b045\u2032E", lon: -120, lat: -45 }] },
      { id: "lat1", label: "", type: "table", prompt: "What do you think Oslo\u2019s climate will be like? Discuss with the person next to you, then write your predictions.", cols: ["", "My prediction and why"], rows: ["Rainfall / precipitation", "Temperature", "Hours of sunlight"] },
      { type: "html", html: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><b>Oslo has dramatic physical and human geography!</b><ul style="margin:.4rem 0 0 1.1rem;padding:0"><li><b>Physical:</b> the city sits at the head of the Oslofjord and is surrounded by forested hills; on dark winter nights the northern lights (aurora borealis) can sometimes be seen.</li><li><b>Human:</b> a modern waterfront of offices, apartments and the Opera House, a busy harbour, and the Holmenkollen ski jump on the hills above the city.</li></ul></div>' },
      { id: "lat2", label: "", type: "text", prompt: "List two physical and two human features of Oslo." },
      { type: "heading", text: "Activity 3: Processes: Oslo’s climate data", note: "Here is the average rainfall (in millimetres) and temperature (in °C) for each month in Oslo." },
      { id: "d0", label: "", type: "table", prompt: "", given: true, cols: ["Month", "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], rows: ["Temperature (°C)", "Rainfall (mm)"],
        prefill: { 0: OSLO_T.map(String), 1: OSLO_R.map(String) } },
      { id: "d1", label: "", type: "mcq", noReason: true, prompt: "Read the data", items: [
        { q: "Which is the coldest month?", o: ["January", "February", "November", "December"], a: 0 },
        { q: "Which is the wettest month?", o: ["June", "July", "August", "October"], a: 2 },
        { q: "What is the temperature range (the difference between the hottest and coldest months)? Be careful with the negative number!", o: ["15°C", "18°C", "21°C", "-21°C"], a: 2 }] },
      { id: "d2", label: "", type: "text", prompt: "This table is not a very interesting way to show the data! In a pair or small group, use your big whiteboard to show the data in a more visual way. Describe your idea here, and take a photo for OneNote." },
      { type: "heading", text: "Activity 4: Constructing a climate graph", note: "Use the graph paper your teacher gives you to plot the climate graph for Oslo: rainfall as blue bars, temperature as a red line. Use the game below for help." },
      { type: "html", html: '<p class="fl__q" style="margin:0 0 .4rem">How are we going to construct the axes?</p>' + BLANK_CLIMATE + '<p class="fl__note">Rainfall uses the left axis (0\u2013100 mm) and temperature the right axis (\u22125 to 25\u00b0C), so check which scale you are reading before you plot each point. Use <b>Print / save as PDF</b> at the bottom of the page to print it.</p>' },
      { type: "game", src: "/geography/games/climate-graph-oslo", title: "Build a Climate Graph: Oslo" },
      { type: "heading", text: "Activity 5: Developing your writing" },
      { id: "w1", label: "", type: "text", words: [80, 180], prompt: "Write a paragraph about the annual climate of Oslo.",
        before: '<div class="fl__tnote"><b>Refer to:</b><ul style="margin:.3rem 0 0 1.1rem;padding:0"><li>the hottest and coldest months (give both the months and the temperatures in \u00b0C)</li><li>the wettest and driest months</li><li>the <b>mean</b> (average) temperature for the year: you will need to calculate this!</li><li>the <b>total</b> rainfall for the year</li><li>the <b>range</b> of temperature: remember there are negative numbers, so be careful!</li></ul></div>',
        note: "Each term turns green when you use it.",
        mustUse: [["Hottest", "hottest|warmest"], ["Coldest", "coldest"], ["Wettest", "wettest"], ["Driest", "driest"], ["Mean", "mean|average"], ["Total rainfall", "total"], ["Range", "range"], ["\u00b0C", "\u00b0c|degrees"], ["mm", "mm|millimetre"]] },
      { id: "w2", label: "", type: "mcq", noReason: true, prompt: "Check your calculations", items: [
        { q: "What is the mean (average) temperature for the year in Oslo? (Add the 12 temperatures, then divide by 12.)", o: ["about 5.5\u00b0C", "about 7.2\u00b0C", "about 8.6\u00b0C", "about 10.5\u00b0C"], a: 1 },
        { q: "What is the total rainfall for the year?", o: ["705 mm", "780 mm", "805 mm", "905 mm"], a: 2 },
        { q: "Which is the driest month?", o: ["January", "February", "April", "May"], a: 1 }] },
      B.quizzes,
      { id: "q1", label: "", type: "mcq", noReason: true, prompt: "Quick check", items: [
        { q: "On a climate graph, rainfall is usually shown as…", o: ["a red line", "blue bars", "a pie chart", "dots"], a: 1 },
        { q: "Oslo is in which hemispheres?", o: ["Northern and Western", "Southern and Eastern", "Northern and Eastern", "Southern and Western"], a: 2 },
        { q: "Which of these is weather, not climate?", o: ["Oslo has cold winters", "It is snowing in Oslo today", "Oslo’s wettest month is August", "Summers in Oslo are mild"], a: 1 },
        { q: "Oslo sits at the head of a long, narrow sea inlet called a…", o: ["delta", "fjord", "lagoon", "bay"], a: 1 }] },
      B.challenge,
      { type: "heading", text: "Extra for experts: comparing climate graphs", note: "Compare Oslo with Bangkok. Look very carefully at the axes before you answer." },
      { type: "html", html: CLIMATE_PAIR + '<p class="fl__note">Approximate monthly averages.</p>' },
      { id: "x1", label: "", type: "questions", letters: true, prompt: "", rows: ["Why do we need to be careful when comparing these two climate graphs?", "Which city has the bigger precipitation (rainfall) range? Show your working.", "Which city has the bigger temperature range? Show your working."] },
      B.reflect,
      { id: "r1", label: "", type: "text", prompt: "Exit ticket: what is the difference between weather and climate? Give one example of each for Oslo." }
    ]
  });

  L["KS3-Y7FP-ASSESS"] = lesson({
    title: "Assessment: leaflet of a fantastic place",
    overview: {
      heading: "Fantastic places: assessment",
      intention: "To research a fantastic place and present its location, climate and processes in an informative leaflet.",
      syllabus: ["Assessment 1: create a leaflet of a fantastic place, assessed on AO1 Knowledge, AO2 Understanding and AO4 Skills."],
      success: ["Use correct geographical words, describe my place with facts and examples, show where it is on a map and explain what makes it fantastic (AO1).", "Explain how and why processes shape my place and how people and the environment are connected (AO2).", "Create and label maps, graphs or diagrams correctly, describe what they show and check my data is clear and accurate (AO4)."]
    },
    parts: [
      B.connect,
      { type: "heading", text: "Your task: GeoExplorer\u2019s \u201cFantastic Places\u201d issue" },
      { type: "html", html: "<div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.6rem\"><div style=\"border:2px solid #0f766e;border-radius:12px;padding:.6rem .8rem;background:#fff\"><b style=\"color:#0f766e;font-size:1.02rem\">Goal</b><p style=\"margin:.3rem 0 0;font-size:.92rem;line-height:1.45\">Create an informative, eye-catching leaflet about a fantastic place on Earth, explaining its location, climate and the processes that shape it.</p></div><div style=\"border:2px solid #2a63b8;border-radius:12px;padding:.6rem .8rem;background:#fff\"><b style=\"color:#2a63b8;font-size:1.02rem\">Role</b><p style=\"margin:.3rem 0 0;font-size:.92rem;line-height:1.45\">You are a <b>travel writer and geographer</b> for the magazine <i>GeoExplorer</i>.</p></div><div style=\"border:2px solid #6b2fa3;border-radius:12px;padding:.6rem .8rem;background:#fff\"><b style=\"color:#6b2fa3;font-size:1.02rem\">Audience</b><p style=\"margin:.3rem 0 0;font-size:.92rem;line-height:1.45\">Curious travellers and students: they want accurate geography and engaging visuals.</p></div><div style=\"border:2px solid #c2410c;border-radius:12px;padding:.6rem .8rem;background:#fff\"><b style=\"color:#c2410c;font-size:1.02rem\">Situation</b><p style=\"margin:.3rem 0 0;font-size:.92rem;line-height:1.45\">The editor wants each leaflet to show <b>where</b> the place is, <b>what</b> it is like, <b>how</b> it has changed and <b>why</b> it is worth studying or visiting.</p></div></div><div class=\"fl__tnote\" style=\"margin-top:.6rem\"><b>Product: your leaflet (tri-fold or one-page digital) must include</b><ol style=\"margin:.3rem 0 0 1.2rem;padding:0\"><li><b>Front page:</b> title (\u201cFantastic Places: [name]\u201d), an eye-catching image or map and a tagline (e.g. \u201cIceland: the land of fire and ice\u201d)</li><li><b>Location and map:</b> where is it? A labelled map with compass directions</li><li><b>Climate:</b> a climate graph and a description of the temperature and rainfall patterns</li><li><b>Processes of change:</b> explain one process that shapes the place (erosion, glaciation, plate movement, desertification, tourism\u2026)</li><li><b>Why it\u2019s fantastic:</b> unique features, wildlife, culture or human story</li><li><b>Summary / fun facts:</b> quick, memorable bullet points</li></ol></div><p class=\"fl__note\" style=\"margin-top:.5rem\"><b>Ideas:</b> Mount Everest \u00b7 Great Barrier Reef \u00b7 Sahara Desert \u00b7 Grand Canyon \u00b7 Amazon Rainforest \u00b7 Iceland \u00b7 Death Valley \u00b7 Antarctica \u00b7 Svalbard</p><div class=\"fl__actions\"><a class=\"fl__btn fl__btn--ghost\" href=\"/ks3/resources/y7-fantastic-places-task-sheet.docx\">Download the task sheet (Word)</a><a class=\"fl__btn fl__btn--ghost\" href=\"/ks3/resources/y7-fantastic-places-enquiry-template.docx\">Download the enquiry template (Word)</a></div>" },
      B.demonstrate,
      { type: "heading", text: "Step 1: Creating the enquiry" },
      { id: "e1", label: "", type: "table", prompt: "", cols: ["", "My answer"], rows: ["Where have you chosen and why? (I have chosen \u2026 because \u2026)", "What makes this place \u2018fantastic\u2019? (This place is fantastic because \u2026)"] },
      { type: "heading", text: "Step 2: Timeline", note: "Write down what you plan to do in each lesson, then reflect as you go." },
      { id: "e2", label: "", type: "table", prompt: "", cols: ["Lesson", "Date to complete by", "What task do I need to do?", "Reflection: was it easy or difficult? Why?", "Completed? (yes/no)"], rows: ["Lesson 1", "Lesson 2", "Lesson 3"] },
      { type: "heading", text: "Step 3: Research journal", note: "Record every source you use and summarise the information in your own words. Add images, maps and graphs to your OneNote." },
      { type: "html", html: '<div class="fl__tnote"><b>Example summary (in my own words):</b> <i>Svalbard is in Europe, far to the north of mainland Norway, between the Arctic Ocean to the north and the Norwegian Sea to the south. It sits roughly midway between Norway and the North Pole, making it one of the world\u2019s northernmost inhabited places.</i></div>' },
      { id: "e3", label: "", type: "table", prompt: "", cols: ["What do I need to find out?", "Source (website)", "Information", "Summary (in my own words)"], rows: ["Where is this place located?", "What is the climate like?", "What processes have changed this place?", "How do people interact with this environment?"] },
      { type: "linkcard", url: "/geography/games/climate-graph-oslo", icon: "\ud83d\udcca", title: "Need help with your climate graph?", sub: "Practise with Build a Climate Graph: Oslo, then do the same for your place" },
      { type: "heading", text: "Step 4: Build your leaflet", note: "Use this checklist as you build it. Write what you have included in each section." },
      { id: "e4", label: "", type: "table", prompt: "", cols: ["Section", "What I have included"], rows: ["Front page: title, image and tagline", "Location and labelled map (compass directions, scale)", "Climate graph and description", "Process of change", "Why it\u2019s fantastic", "Summary / fun facts"] },
      B.challenge,
      { type: "heading", text: "Aim for steps 8 and 9", note: "Push your leaflet to the top steps of the success ladder." },
      { id: "h1", label: "", type: "text", prompt: "Which process has had the biggest impact on your place? Judge it against at least one other process, and explain how people and the environment are linked." },
      { type: "heading", text: "Success ladder: how will I be assessed?", note: "Find the step you are on for each area, then aim one step higher." },
      { type: "html", html: "<div class=\"fl__scroll\"><table><thead><tr><th>Step</th><th>AO1 Knowledge (about the place)</th><th>AO2 Understanding (processes and links)</th><th>AO4 Skills (maps, graphs, presentation)</th></tr></thead><tbody><tr><th>1</th><td>Name a fantastic place and give one simple fact about it.</td><td>Say something that happens there (e.g. \u201cit rains a lot\u201d).</td><td>Include a picture or map of the place, which may not be labelled.</td></tr><tr><th>2</th><td>Describe one or two features using basic geographical words (rocky, dry, cold).</td><td>Describe one simple process that happens there (e.g. \u201cthe river erodes the land\u201d).</td><td>Include a simple map or drawing with a few labels or symbols.</td></tr><tr><th>3</th><td>Describe where the place is (continent or country) and what it is like.</td><td>Explain how one simple process shapes the place (e.g. \u201cwind shapes the sand dunes\u201d).</td><td>Make a simple map or climate graph with a title and labels.</td></tr><tr><th>4</th><td>Explain clear facts using correct geographical words (e.g. \u201cThe Amazon is in South America and has a hot, wet climate\u201d).</td><td>Explain a simple cause and effect (e.g. \u201cheavy rain causes floods in the rainforest\u201d).</td><td>Make a clear map or climate graph and describe what it shows.</td></tr><tr><th>5</th><td>Use examples to explain how one process affects the place (e.g. \u201cErosion makes the Grand Canyon deeper\u201d).</td><td>Explain how people and the environment affect each other (e.g. \u201cTourism helps Iceland\u2019s economy but damages some areas\u201d).</td><td>Present data neatly and describe patterns (e.g. \u201cIt rains most in summer\u201d).</td></tr><tr><th>6</th><td>Link ideas to explain how the place has changed over time (e.g. \u201cGlaciers once covered Iceland and still shape its land\u201d).</td><td>Explain how different processes connect and influence each other (e.g. \u201cVolcanoes and glaciers both change Iceland\u2019s shape\u201d).</td><td>Interpret maps or graphs to explain relationships or changes.</td></tr><tr><th>7</th><td>Explain how physical and human processes work together (e.g. \u201cTourism grows because of volcanoes and geysers in Iceland\u201d).</td><td>Analyse the impacts of these links and suggest reasons (e.g. \u201cTourism brings jobs but also pollution\u201d).</td><td>Analyse visuals, explaining what they show and how accurate they are.</td></tr><tr><th>8</th><td>Evaluate how several processes combine to shape the place (e.g. \u201cVolcanic activity and glaciers together create Iceland\u2019s unique landscape\u201d).</td><td>Judge which factors are most important and explain why (e.g. \u201cThe volcanoes have had the biggest impact on Iceland\u2019s shape\u201d).</td><td>Evaluate how well maps, graphs and visuals support ideas and conclusions.</td></tr><tr><th>9</th><td>Show expert knowledge with accurate local and global examples (e.g. \u201cIceland is on the Mid-Atlantic Ridge where two plates move apart\u201d).</td><td>Evaluate complex links between people, processes and change with clear reasoning.</td><td>Create and interpret detailed, accurate visuals and justify conclusions with evidence and data.</td></tr></tbody></table></div>" },
      { id: "sa", label: "", type: "table", prompt: "Self-assessment", cols: ["Area", "My step (1\u20139)", "What I need to do to reach the next step"], rows: ["AO1 Knowledge", "AO2 Understanding", "AO4 Skills"] },
      B.reflect,
      { type: "heading", text: "Reflection", note: "Answer all the questions." },
      { id: "r1", label: "", type: "cards", prompt: "",
        items: [{ t: "Strength: give", c: "#0f766e", q: "Identify one strength of your research process." }, { t: "Strength: describe", c: "#0f766e", q: "Why was it a strength of your research process?" }, { t: "Strength: explain", c: "#0f766e", q: "How did it help you to complete your final piece of work?" },
          { t: "Challenge: give", c: "#b42318", q: "Identify one challenge of your research process." }, { t: "Challenge: describe", c: "#b42318", q: "What did it prevent you from finding or completing?" }, { t: "Challenge: explain", c: "#b42318", q: "How did this affect the outcome of your final piece of work?" },
          { t: "Improvement: give", c: "#2a63b8", q: "Identify one change you would make if you re-did this task." }, { t: "Improvement: describe", c: "#2a63b8", q: "Describe this change." }, { t: "Improvement: explain", c: "#2a63b8", q: "How would this change affect your final piece of work?" },
          { t: "More time: give", c: "#6b2fa3", q: "Identify one thing you would do in your research if you had more time." }, { t: "More time: describe", c: "#6b2fa3", q: "Describe this change to your research process." }, { t: "More time: explain", c: "#6b2fa3", q: "If you had made this change earlier, how would it have affected your research and final piece of work?" }] },
      { type: "reveal", code: "rubric", label: "Teacher marking rubric", html: "<div class=\"fl__scroll\"><table><thead><tr><th>Step</th><th>AO1 Knowledge (about the place)</th><th>AO2 Understanding (processes and links)</th><th>AO4 Skills (maps, graphs, presentation)</th></tr></thead><tbody><tr><th>1</th><td>Names a place and gives one simple fact. Limited or everyday vocabulary.</td><td>Identifies something that happens (e.g. \u201cit rains\u201d). No explanation of why.</td><td>Includes a picture or basic map, not labelled or explained.</td></tr><tr><th>2</th><td>Describes one or two features using simple adjectives. Begins to use geographical words.</td><td>Describes one simple process (e.g. erosion, rainfall).</td><td>Includes a basic map or drawing with some labels or symbols.</td></tr><tr><th>3</th><td>Describes where the place is (continent/country) and key features. Uses some correct geographical terms.</td><td>Explains how one process shapes the place in simple terms.</td><td>Includes a basic map or graph with a title and simple labels.</td></tr><tr><th>4</th><td>Gives a clear factual description using geographical vocabulary. Identifies key features (climate, landscape).</td><td>Explains a simple cause-and-effect link.</td><td>Produces a clear, labelled map or graph and comments on what it shows.</td></tr><tr><th>5</th><td>Uses examples to show how one process affects the place. Begins to explain people\u2013environment interactions.</td><td>Explains how processes and people interact to create change. Begins to include reasoning.</td><td>Presents accurate data; identifies simple patterns or trends.</td></tr><tr><th>6</th><td>Links ideas to explain how the place has changed over time. Shows awareness of processes working together.</td><td>Analyses how multiple processes connect and influence each other.</td><td>Interprets maps/graphs to explain relationships or changes.</td></tr><tr><th>7</th><td>Explains how physical and human processes work together. Uses detailed examples.</td><td>Analyses impacts of connections between processes and people.</td><td>Analyses visuals and comments on reliability or accuracy.</td></tr><tr><th>8</th><td>Evaluates how several processes combine to shape the place. Uses precise, subject-specific terminology.</td><td>Judges which factors have the greatest influence, with justification.</td><td>Evaluates how well visuals and data support explanations and conclusions.</td></tr><tr><th>9</th><td>Demonstrates expert knowledge using local and global examples. Integrates physical and human geography effectively.</td><td>Evaluates complex interactions and change with well-reasoned arguments.</td><td>Produces detailed, accurate visuals; integrates data and evidence to justify conclusions.</td></tr></tbody></table></div>" }
    ]
  });
})(window.SBL_FLIP_EXTRA);
