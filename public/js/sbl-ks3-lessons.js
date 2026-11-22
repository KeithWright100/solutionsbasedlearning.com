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

  L["KS3-Y8DEV-L2"] = lesson({
    title: "How does life vary around the world?",
    overview: {
      heading: "Development and inequalities",
      intention: "To understand how we measure development and how life varies between and within countries.",
      syllabus: ["Key question: how does life vary around the world, and how can we measure development without stereotyping places?"],
      success: ["Define development, development indicator and composite indicator.",
        "Use development indicators to describe how life varies between countries such as Costa Rica, Thailand and Kenya.",
        "Explain why life also varies within a country, and why we should not generalise or stereotype places."]
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
      { type: "heading", text: "Activity 4: How does life vary around the world?", note: "Work through the activity below to learn how life varies in different parts of the world. Screenshot each page and paste it into OneNote." },
      { type: "game", src: "/geography/games/life-around-the-world", title: "How Does Life Vary?" },
      { id: "lv1", label: "", type: "text", prompt: "Summarise the three most surprising differences you found between places." },
      { type: "heading", text: "Activity 5: Who is correct, Izzy or Sam?" },
      { id: "is1", label: "", type: "text", prompt: "Who is correct? Justify your answer.",
        before: '<div class="fl-chat"><p class="fl-chat__a"><b>Izzy:</b> Kenya is a poor country, so everyone who lives there must be poor.</p><p class="fl-chat__b"><b>Sam:</b> I don’t agree. Life varies inside a country. Nairobi has wealthy suburbs, shopping centres and skyscrapers, but also informal settlements, and life in rural areas is different again.</p></div>' },
      { type: "heading", text: "Activity 6: So, how much does life vary in Thailand?" },
      { type: "html", html: '<div class="fl__tnote" style="background:var(--lh-teal-bg)"><b>Thailand fact file</b><ul style="margin:.4rem 0 0 1.1rem;padding:0"><li>Human Development Index (HDI): 0.798, ranked 76th of 193 countries (UNDP, 2023 data). It is fourth in South-East Asia, after Singapore, Brunei and Malaysia.</li><li>When inequality is taken into account, Thailand’s HDI score falls by about 15%.</li><li>Wealth is very unevenly shared: the richest 5% of landowners hold about 80% of all land.</li><li>Bangkok is a global city with high incomes and modern services, while many rural areas, for example in the north-east (Isan), rely on farming and have lower incomes.</li></ul></div>' },
      { id: "th1", label: "", type: "text", words: [80, 200], prompt: "How does life vary in Thailand? Use the information above and your own experience." },
      { type: "heading", text: "Activity 7: Don’t generalise or create stereotypes", note: "Study the illustration below." },
      { type: "html", html: JUXT_SVG },
      { id: "st1", label: "", type: "questions", letters: true, prompt: "", rows: ["What does stereotyping mean?", "Geographers use the word ‘juxtaposition’ to describe images like this one. What do you think it means? Think about what the image is showing."] },
      { type: "heading", text: "Activity 8: Using statistics in geography", note: "Study all of the information below." },
      { id: "ke0", label: "", type: "table", prompt: "Kenya: key statistics", given: true, cols: ["Indicator", "Kenya"], rows: ["Population", "GDP per capita", "Life expectancy", "Human Development Index (HDI)", "Living in towns and cities", "Adult literacy"],
        prefill: { 0: ["About 57 million (2025)"], 1: ["About US$2,360 (World Bank, 2025)"], 2: ["63.6 years (2023)"], 3: ["0.628, ranked 143rd of 193 (2023)"], 4: ["About 30% (most people live in rural areas)"], 5: ["About 83% (2021)"] } },
      { id: "ke1", label: "", type: "text", words: [80, 200], prompt: "Using everything you have learned this lesson, describe what life is like in Kenya. Remember that life varies within the country: avoid generalising." },
      { type: "heading", text: "Activity 9: Who is correct in this discussion?" },
      { id: "dc1", label: "", type: "text", prompt: "Write your response here.",
        before: '<div class="fl-chat"><p class="fl-chat__a"><b>Student A:</b> The best way to measure development is GDP per capita. If a country is rich, its people have a good quality of life.</p><p class="fl-chat__b"><b>Student B:</b> GDP per capita only shows money. Costa Rica has a lower GDP per capita than many countries but people live long, happy lives. We need a composite indicator like the HDI.</p></div>' },
      B.quizzes,
      { id: "q1", label: "", type: "mcq", noReason: true, prompt: "Quick check", items: [
        { q: "Which of these is a social indicator of development?", o: ["GDP per capita", "Life expectancy", "Exports", "Unemployment rate"], a: 1 },
        { q: "The Human Development Index (HDI) is an example of…", o: ["a single indicator", "a composite indicator", "a stereotype", "a type of map"], a: 1 },
        { q: "Which statement is true?", o: ["Everyone in a low-income country is poor", "Life can vary a lot within one country", "GDP per capita shows how happy people are", "Development only means getting richer"], a: 1 },
        { q: "Costa Rica makes almost all of its electricity from…", o: ["coal", "nuclear power", "renewable sources", "imported oil"], a: 2 }] },
      B.challenge,
      { id: "h1", label: "", type: "text", prompt: "Challenge: Costa Rica has a much lower GDP per capita than the USA, yet people there live longer. Which indicator do you think gives the best picture of development? Explain your choice and its limitations." },
      B.reflect,
      { id: "r1", label: "", type: "text", prompt: "Exit ticket: write one thing you now understand about how life varies, and one stereotype you will avoid." }
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
      { type: "heading", text: "Activity 4: Analysing inequality across a local area using GIS", note: "The ArcGIS Geography Visualiser has a data layer called the English Indices of Multiple Deprivation (IMD) 2019. It uses official government statistics to rank small areas of England by deprivation, taking into account income, education, health and housing." },
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
})(window.SBL_FLIP_EXTRA);
