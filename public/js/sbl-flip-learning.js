/* SBL Learning Hub: Flip learning (pre-lesson) panels.
   Adds a collapsible "Flip learning" task above the lesson activity
   cards (.lh-modes) on any lesson page whose teach-bot overlay has a
   data-lesson-id listed in FLIP below. To add another lesson, add an
   entry keyed by its lesson id (e.g. CP06) and include this script on
   that page. Answers are kept only in the student's own browser
   (localStorage) and can be copied out for OneNote. No accounts, no
   server calls.

   Part types:
     heading   { type, text, note }                 section heading (Part A ...)
     text      { id, prompt, note }                 one answer box
     terms     { id, prompt, rows }                 Key term | Definition table
     table     { id, prompt, cols, rows, prefill }  first col = row labels;
                                                    a row starting "#" is a group heading;
                                                    prefill { rowIndex: [cells] } = worked example
     questions { id, prompt, rows, video }          numbered questions; video = URL or true
     html      { html }                             static content (e.g. a diagram)
   Any part may have: label ("" hides the letter), note, links [{label,url}]. */
(function () {
  var DTM_SVG =
    '<svg viewBox="0 0 640 290" role="img" aria-label="Demographic transition model: birth rate, death rate and total population across five stages" style="width:100%;max-width:640px;height:auto;display:block;background:#fff;border:1px solid var(--lh-border);border-radius:10px">' +
    '<g font-family="Inter,Arial,sans-serif" font-size="12" fill="#334">' +
    [0, 1, 2, 3, 4].map(function (i) {
      var x = 50 + i * 115;
      return '<rect x="' + x + '" y="30" width="115" height="215" fill="' + (i % 2 ? "#f1f6fb" : "#e6eff8") + '"/>' +
        '<text x="' + (x + 57) + '" y="22" text-anchor="middle" font-weight="600">Stage ' + (i + 1) + "</text>";
    }).join("") +
    '<path d="M50 62 C80 50 110 70 140 56 C170 48 200 60 250 60 C300 64 330 120 365 170 C390 200 420 208 470 210 C520 212 560 220 625 228" fill="none" stroke="#e07b1a" stroke-width="3.5"/>' +
    '<path d="M50 74 C75 60 100 86 125 66 C150 54 160 80 175 90 C200 140 220 180 270 196 C320 205 400 208 470 208 C530 207 580 200 625 194" fill="none" stroke="#d0457a" stroke-width="3.5"/>' +
    '<path d="M50 232 C120 231 160 228 190 220 C250 196 300 130 360 96 C410 72 450 66 520 64 C570 63 600 66 625 70" fill="none" stroke="#2a63b8" stroke-width="3.5"/>' +
    '<line x1="50" y1="245" x2="625" y2="245" stroke="#556"/><line x1="50" y1="30" x2="50" y2="245" stroke="#556"/>' +
    '<text x="44" y="40" text-anchor="end">High</text><text x="44" y="245" text-anchor="end">Low</text>' +
    '<text x="337" y="266" text-anchor="middle">Time</text>' +
    '<rect x="60" y="272" width="14" height="4" fill="#e07b1a"/><text x="80" y="278">Birth rate</text>' +
    '<rect x="170" y="272" width="14" height="4" fill="#d0457a"/><text x="190" y="278">Death rate</text>' +
    '<rect x="285" y="272" width="14" height="4" fill="#2a63b8"/><text x="305" y="278">Total population</text>' +
    "</g></svg>";

  function PYRAMID(name, w) {
    var ages = ["0-4","5-9","10-14","15-19","20-24","25-29","30-34","35-39","40-44","45-49","50-54","55-59","60-64","65-69","70-74","75-79","80+"];
    var bh = 12, top = 30, mid = 160, out = "";
    ages.forEach(function (a, i) {
      var y = top + (ages.length - 1 - i) * bh, v = w[i] * 1.2;
      out += '<rect x="' + (mid - 22 - v) + '" y="' + y + '" width="' + v + '" height="' + (bh - 2) + '" fill="#3a9fc4"/>' +
        '<rect x="' + (mid + 22) + '" y="' + y + '" width="' + v + '" height="' + (bh - 2) + '" fill="#3a9fc4"/>' +
        '<text x="' + mid + '" y="' + (y + 9) + '" text-anchor="middle" font-size="8">' + a + "</text>";
    });
    return '<svg viewBox="0 0 320 260" role="img" aria-label="' + name + ': population pyramid" style="width:100%;height:auto;background:#fff;border:1px solid var(--lh-border);border-radius:10px">' +
      '<g font-family="Inter,Arial,sans-serif" fill="#334"><text x="160" y="18" text-anchor="middle" font-size="13" font-weight="700">' + name + "</text>" +
      '<text x="20" y="18" font-size="10">Male</text><text x="300" y="18" text-anchor="end" font-size="10">Female</text>' + out +
      '<line x1="10" y1="240" x2="310" y2="240" stroke="#556"/><text x="160" y="254" text-anchor="middle" font-size="9">Population</text></g></svg>';
  }
  var PYRAMIDS = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;max-width:720px">' +
    PYRAMID("Pyramid A", [100, 92, 84, 76, 68, 60, 52, 45, 38, 32, 26, 21, 16, 12, 8, 5, 3]) +
    PYRAMID("Pyramid B", [52, 55, 57, 58, 60, 64, 67, 70, 70, 72, 70, 68, 62, 54, 42, 30, 22]) + "</div>";

  /* Image slot: shows /images/flip/<name>.png (or .jpg) when the file exists;
     otherwise shows the fallback (if given) or nothing. */
  function IMG(name, alt, fallback) {
    return '<figure class="fl__img"><img src="/images/flip/' + name + '.png" alt="' + alt + '" onerror="SBLFlipImg(this)">' +
      (fallback ? '<div class="fl__fb" hidden>' + fallback + "</div>" : "") + "</figure>";
  }
  window.SBLFlipImg = function (im) {
    if (!im.getAttribute("data-jpg")) { im.setAttribute("data-jpg", "1"); im.src = im.src.replace(/\.png$/, ".jpg"); return; }
    var f = im.parentNode, fb = f.querySelector(".fl__fb");
    if (fb) { fb.hidden = false; im.remove(); } else f.remove();
  };

  var FLIP = {
    CP02: {
      title: "Global patterns and classifications of economic development",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to cover:",
      cover: ["Low-income countries", "Middle-income countries", "High-income countries"],
      parts: [
        { id: "a", type: "terms", prompt: "Define the following key terms.",
          rows: ["Development", "Economic development", "Quality of life", "Standard of living", "GDP per capita", "GNI per capita", "BRICS", "MINTs"] },
        { id: "b", type: "text", prompt: "Define inequality and give examples." },
        { id: "c", type: "table", prompt: "What are LICs, MICs and HICs?",
          cols: ["", "Definition", "2–3 examples"], rows: ["LICs", "MICs", "HICs"] },
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
    },

    CP03: {
      title: "The core–periphery model",
      teacherNote: "As there isn't much home learning, I will go through this with you in class.",
      intro: "Complete this before the lesson. Ask the Teach Me Live bot on this page to help you with each part.",
      parts: [
        { type: "heading", text: "Part A: Key concepts" },
        { id: "a", type: "text", prompt: "What is a core area?" },
        { id: "b", type: "table", prompt: "Now complete the table.", cols: ["", "Core area characteristics"], rows: ["1", "2", "3", "4", "5"] },
        { id: "c", type: "text", prompt: "What is a peripheral area?" },
        { id: "d", type: "table", prompt: "Complete the table.", cols: ["", "Peripheral area characteristics"], rows: ["1", "2", "3", "4", "5"] },
        { type: "heading", text: "Part B: Now compare core and periphery" },
        { id: "e", label: "", type: "table", prompt: "Core and periphery at different scales.",
          cols: ["Scale", "Definition", "Example"], rows: ["Global", "Continental", "Regional", "National", "Local"] },
        { id: "f", label: "", type: "table", prompt: "Compare the features of core and peripheral areas.",
          cols: ["Feature", "Core area", "Peripheral area"], rows: ["Wealth", "Infrastructure", "Employment", "Services", "Investment"] },
        { type: "heading", text: "Part C: Core–periphery at different scales" },
        { id: "g", label: "", type: "table", prompt: "Causes of inequality.",
          cols: ["Cause of inequality", "What is it?", "How can it create inequality between countries?", "How can it create inequality within a country?", "Example (location)", "Classify: economic, social, political or environmental"],
          rows: ["Historical factors", "Colonialism", "Physical geography", "Resource distribution", "Globalisation", "Trade relationships", "Education", "Healthcare", "Governance", "Conflict and instability", "Technology access"] }
      ]
    },

    CP04: {
      title: "Case study: the demographics of Thailand and Egypt",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to answer the following.",
      parts: [
        { id: "a", type: "table", prompt: "Complete the table: the demographics of Thailand and Egypt.",
          cols: ["", "Thailand", "Egypt"],
          rows: ["Total population", "Number of migrants in the country", "Population growth rate", "Life expectancy", "Total fertility rate", "Ethnic groups", "Population density", "Population distribution", "Top three cities/areas by population"] },
        { id: "b", type: "table", prompt: "Research and answer the following for Thailand and Egypt.",
          cols: ["", "Thailand", "Egypt"],
          rows: ["Densely populated areas", "Sparsely populated areas", "Physical reasons for the pattern", "Human/economic reasons", "Main core areas", "Main peripheral areas", "Pattern of internal migration", "Main reasons for internal migration", "Role of major cities", "4–5 useful stats/examples"] },
        { id: "c", type: "text", prompt: "Try to find a physical map and a population density map for each country, and show the core and peripheral areas.",
          note: "Paste your maps into OneNote. Use this box to note where you found them and what they show." }
      ]
    },

    CP06: {
      title: "Comparing demographic transition: Thailand and The Gambia",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to find the statistics and definitions.",
      parts: [
        { type: "heading", text: "Part 1: Demographic data on Thailand and The Gambia" },
        { id: "a", label: "", type: "table", prompt: "Complete the table with statistics.",
          cols: ["", "Thailand", "The Gambia"],
          rows: ["Total population", "Population growth (%)", "Annual increase", "Total fertility rate (children per woman)", "Life expectancy (years)",
            "Population aged 65 and above (% of total): what is the trend since 1960? (look at the pattern of the graph)",
            "Population aged 15–64 (% of total): what is the trend since 1960?",
            "Dependency ratio (% of working-age population): what is the trend since 1960?"] },
        { type: "heading", text: "Part 2: Preparing for the debate",
          note: "In class we will have a demographic debate. Some of you will represent Thailand, others The Gambia. You don't yet know which country you will represent. To prepare:" },
        { id: "b", label: "", type: "terms", prompt: "Define the following.",
          rows: ["Overpopulation", "Underpopulation", "Optimum population"] },
        { type: "heading", text: "Part 3: Pre-debate judgement" },
        { id: "c", label: "", type: "table", prompt: "Complete the table to build evidence for the debate.",
          cols: ["Indicator", "Thailand", "What does this suggest?", "The Gambia", "What does this suggest?"],
          rows: ["Fertility", "Life expectancy", "Population growth", "Population aged 65+", "Dependency ratio", "DTM stage"] }
      ]
    },
    CP07: {
      title: "Megacity growth",
      intro: "Complete this before class. The classroom lesson will use this knowledge to analyse an infographic and apply the evidence to Mumbai.",
      parts: [
        { type: "heading", text: "Part 1: Megacity growth" },
        { id: "a", type: "table", prompt: "Watch and capture: watch both videos and make notes.",
          links: [
            { label: "Video 1: What are the world's largest cities?", url: "https://www.youtube.com/watch?v=UqKe7ygkkzs" },
            { label: "Video 2: Mapped: the world's largest megacities by 2100", url: "https://www.youtube.com/watch?v=OksiAQqsAZs" }
          ],
          cols: ["Viewing prompt", "Your notes"],
          rows: ["What makes a city a megacity?", "Name two megacities shown.", "Give two reasons why megacities grow.", "Why are many future megacities expected in Asia and Africa?"] },
        { type: "heading", text: "Part 2: Key knowledge", note: "Read the table carefully, then add one named example of a megacity." },
        { id: "b", label: "", type: "table", given: true, prompt: "",
          cols: ["Term / cause", "Meaning", "Example or explanation"],
          rows: ["Urbanisation", "Megacity", "Rural-to-urban migration", "Natural increase", "Economic opportunity", "Globalisation and connectivity"],
          prefill: {
            0: ["Growth in the percentage of people living in urban areas.", "May result from migration and natural increase."],
            1: ["An urban area with more than 10 million inhabitants.", null],
            2: ["Movement from rural areas to towns and cities.", "Jobs, education and services may act as pull factors."],
            3: ["Births exceeding deaths within the urban population.", "A young age structure can contribute to rapid growth."],
            4: ["Perceived access to employment and higher incomes.", "Growth creates formal and informal work."],
            5: ["Growing flows of investment, information, people and trade.", "Connected cities attract businesses and migrants."]
          } },
        { type: "heading", text: "Part 3: Where are the world's megacities?" },
        { id: "c", type: "text", before: IMG("cp07-megacities-map", "Map: the 15 fastest-growing megacities"), prompt: "Describe the distribution of the world's megacities.",
          note: "Use the map of the 15 fastest-growing megacities from class and Video 2. Mention continents, coasts and named examples with figures." }
      ]
    },
    CP08: {
      title: "The causes and consequences of forced migration and internal displacement",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page if you get stuck.",
      parts: [
        { type: "heading", text: "Part 1: Watch: What They Took With Them" },
        { id: "a", label: "", type: "questions", letters: true, prompt: "Watch the video, then answer the following questions.",
          links: [{ label: "Video: What They Took With Them (UNHCR)", url: "https://www.youtube.com/watch?v=xS-Q2sgNjl8" }],
          rows: [
            "What is your emotional response to this video?",
            "What is the message the video maker wanted to send?",
            "Which organisation made the video?",
            "What do you think was their goal in making the video?",
            "Do you think that it is effective? Justify your reasons."
          ] },
        { type: "heading", text: "Part 2: Read: causes of forced migration", note: "Open the Concern article from your class OneNote." },
        { id: "b", label: "a)", type: "table", prompt: "Complete the table for each cause.",
          cols: ["Cause", "How it forces movement", "Direct, indirect or both?"],
          rows: ["Drought", "Hunger", "Flooding", "Earthquakes", "War and conflict", "Economic circumstances"] },
        { id: "c", label: "b)", type: "text", prompt: "Which cause is most significant globally? Justify your choice and acknowledge one counterargument." },
        { type: "heading", text: "Part 3: Reading photographs", note: "Look at the photo on your class OneNote page." },
        { id: "d", label: "", type: "questions", letters: true, prompt: "", before: IMG("cp08-photo", "Photograph to analyse"),
          rows: [
            "What's happening in the photo?",
            "Why do you think this has happened?",
            "What do you think the consequences could be?",
            "Where do you think this photo was taken?"
          ] },
        { type: "heading", text: "Part 4: Internally displaced people and refugees" },
        { id: "e", label: "", type: "questions", letters: true, prompt: "Watch the clip and answer the following questions.",
          links: [{ label: "Video: Who is an internally displaced person?", url: "https://www.youtube.com/watch?v=DCzpVQkencw" }],
          rows: [
            "What is the fundamental difference between IDPs and refugees?",
            "Identify four reasons that keep IDPs from leaving their country.",
            "Who do IDPs often rely on for protection? What is the problem with this?",
            "List the impacts that IDPs suffer.",
            "Why is it difficult for NGOs to help IDPs?",
            "What is the ratio of IDPs to refugees?"
          ] }
      ]
    },
    CP09: {
      title: "Internal displacement in Haiti",
      intro: "Flipped learning check (about 5 minutes). Watch the video and use the map from your class OneNote to complete the table and question.",
      parts: [
        { type: "heading", text: "Part 1: Watch and capture" },
        { id: "a", type: "table", prompt: "Complete the table.", before: IMG("cp09-haiti-map", "Map of the 2010 Haiti earthquake"),
          links: [{ label: "Video: Haiti earthquake documentary", url: "https://www.youtube.com/watch?v=uS4EMk_H0lQ" }],
          cols: ["Prompt", "Your notes"],
          rows: ["Date, magnitude and location", "Two immediate impacts", "Why people were internally displaced", "IDP definition", "Why IDPs are not refugees"] },
        { id: "b", type: "text", prompt: "Answer required: write a one-sentence hypothesis.", note: "Start: “The earthquake caused forced migration because…”" },
        { type: "heading", text: "Connect: build the event story" },
        { id: "c", type: "table", prompt: "Use the map, the documentary and class discussion to build a precise introduction. Include the date, magnitude, epicentre/location, places and the spatial pattern of severe impacts.",
          cols: ["Evidence category", "Notes"],
          rows: ["When and how powerful?", "Where? Use located detail.", "What happened immediately?", "Why were impacts severe?"] },
        { id: "d", type: "text", words: [70, 90], prompt: "Write a 70–90 word case-study introduction.",
          note: "Your introduction must include: 12 January 2010; magnitude 7.0; Haiti and Port-au-Prince; a clear link between building destruction and displacement. Avoid a simple list of impacts: explain the sequence from the hazard, to the damage, to people being forced from their homes." }
      ]
    },
    CP11: [{
      part: "11a",
      title: "Ageing populations: the UK and Japan",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to help you.",
      parts: [
        { type: "heading", text: "Activity 1: What do you know?",
          note: "In class you will mind map these on the large whiteboards. Prepare your notes now, using the UK and/or Japan. If you can make judgements about the implications of the solutions, even better." },
        { id: "a", label: "", type: "table", prompt: "", video: true,
          cols: ["", "Your notes (UK and/or Japan)"],
          rows: ["Calculation of the dependency ratio", "Reasons for an ageing population", "Problems", "Potential solutions"] },
        { type: "heading", text: "Activity 2: Read the population data sets",
          note: "Use the population data sets for Japan in Firefly (the 2018 population pyramid and the total fertility rate graph) to analyse the national trends." },
        { id: "b", type: "text", label: "", before: '<div class="fl__imgs">' + IMG("cp11-japan-pyramid", "Japan population pyramid, 2018") + IMG("cp11-fertility", "Total fertility rate in the USA and Japan, 1947 to 2010") + "</div>", prompt: "What national trends do the data sets show for Japan? Use figures from the data." },
        { type: "heading", text: "Extension" },
        { id: "c", type: "text", label: "", prompt: "Why did so many Japanese families avoid having children in 1966? Who were the Firehorse women?", video: true }
      ]
    }],
    CP12: {
      title: "Gender equality and human trafficking",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to help you research.",
      parts: [
        { type: "heading", text: "Part 1: Gender equality" },
        { id: "a", type: "text", prompt: "Watch the video and consider why gender equality is important. Make sure you define it.",
          links: [{ label: "Video: The girl effect: the clock is ticking", url: "https://www.youtube.com/watch?v=1e8xgF0JtVg" }] },
        { type: "heading", text: "Human trafficking",
          note: "Definition: “The unlawful act of transporting or coercing people in order to benefit from their work or service, typically in the form of forced labour or sexual exploitation.”" },
        { id: "b", type: "text", prompt: "Why are humans trafficked? Give as many examples as you can, e.g. countries." },
        { type: "heading", text: "Part 2: Gender equality: the global gender gap",
          note: "The Gender Inequality Index (GII), published by the UNDP in the Human Development Reports, is a composite measure of gender disadvantage in three dimensions: reproductive health, empowerment and the labour market. It runs from 0 (greater equality) to 1 (greater inequality)." },
        { id: "c", type: "table", prompt: "Research and complete the table on what the GII measures.",
          cols: ["Dimension", "What could we measure?", "Why might inequality here matter?"],
          rows: ["Reproductive health", "Empowerment", "Labour market"] },
        { id: "d", type: "table", prompt: "Why does gender equality vary between countries? Through research, note reasons why it varies across the world. We will build on this in the lesson.",
          note: "Use the countries in the Global Gender Gap Index rankings (World Economic Forum) on your class OneNote page to find some reasons.",
          before: IMG("cp12-gender-gap", "Global Gender Gap Index rankings"),
          cols: ["", "Country", "Reason"], rows: ["1", "2", "3", "4", "5", "6"] }
      ]
    },
    CP13: {
      title: "The demographic dividend",
      intro: "Complete this before the lesson. Use the video and the Teach Me Live bot on this page to answer the following.",
      parts: [
        { id: "a", label: "", type: "questions", letters: true, prompt: "",
          links: [{ label: "Video: Demographic dividend explained", url: "https://www.youtube.com/watch?v=bhkrS0qSJLg" }],
          rows: [
            "What is the demographic dividend, and when does it occur?",
            "What are the characteristics of the population pyramid?",
            "What are the benefits for a country in this situation?"
          ] }
      ]
    },
    CP05: [{
      part: "5a",
      title: "Why do populations change, and how does population change affect people and places?",
      intro: "Complete this before the lesson. Use the Teach Me Live bot on this page to help you.",
      parts: [
        { type: "heading", text: "Part 1: Key terms",
          note: "Find the exact definitions of the following. Population momentum is harder to understand, so ask the bot to explain it and to describe how a population pyramid moves over time. Try to include a diagram or drawing to help you remember each term (sketch it in OneNote)." },
        { id: "a", label: "", type: "table", prompt: "Population key terms.",
          cols: ["Measure", "What it means and how it is measured", "Diagram to represent it"],
          rows: ["Natural increase", "Population growth rate",
            "#Measures of fertility", "Crude birth rate", "Total fertility rate", "General fertility rate",
            "#Measures of mortality", "Crude death rate", "Life expectancy", "Infant mortality rate",
            "#Population structure", "Dependency ratio", "Ageing ratio", "Replacement level", "Doubling time", "Population momentum", "Population projections"],
          links: [{ label: "Video: What is a dependency ratio?", url: "https://www.youtube.com/watch?v=t0kAO4p5bmk" }] },
        { type: "heading", text: "Part 2: Interpreting the demographic transition model",
          note: "Study the model below and complete the table to show what is happening at each stage. Stage 1 has been done to help you." },
        { type: "html", html: IMG("cp05-dtm", "Demographic transition model", DTM_SVG) },
        { id: "b", label: "", type: "table", prompt: "What happens at each stage?",
          cols: ["DTM stage", "Birth rate", "Death rate", "Natural increase", "Total population", "Reasons for total population change"],
          rows: ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5"],
          prefill: { 0: ["High", "High", "Low", "Low", "Birth and death rates are both high and fluctuating, so total population is low and fluctuates."] } },
        { type: "heading", text: "Part C: Predict", note: "Answer in two or three sentences." },
        { id: "c", label: "", type: "questions", prompt: "",
          rows: [
            "During which DTM stage is natural increase usually greatest?",
            "Why does the death rate normally fall before the birth rate?",
            "Why might the population continue growing after the fertility rate has fallen?"
          ] }
      ]
    }, {
      part: "5b",
      title: "Population pyramids and death rate factors",
      intro: "Complete this before the lesson. Watch the video first, then work through the activities. Use the Teach Me Live bot on this page if you get stuck.",
      parts: [
        { type: "heading", text: "Part 1: What are population pyramids?" },
        { id: "a", type: "text", prompt: "Watch the video to learn how to interpret population pyramids for countries at contrasting levels of economic development. Write down three things you learned.",
          links: [{ label: "Video: Population pyramids: powerful predictors of the future (Kim Preshoff, TED-Ed)", url: "https://www.youtube.com/watch?v=RLmKfXwWQtE" }] },
        { id: "b", type: "table", before: IMG("cp05-pyramids", "Two population pyramids, A and B", PYRAMIDS), prompt: "Study the two pyramids. Which one is a rich country and which is a poor country? Use the PPT for help, and consider the shape, the base and the top.",
          note: "If in doubt, ask the bot about appropriate labels.",
          cols: ["", "Pyramid A", "Pyramid B"],
          rows: ["Rich or poor country?", "The shape of the pyramid", "The base", "The top", "Labels you would add to the graph"] },
        { id: "c", type: "table", prompt: "Pyramids and the DTM: find a pyramid that you think is connected with each stage of the DTM.",
          note: "Paste the pyramid images into OneNote. Use the table to record the country and why it fits that stage.",
          cols: ["DTM stage", "Example country", "Why this pyramid fits the stage"],
          rows: ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5"] },
        { type: "heading", text: "Part 2: Death rate factors",
          note: "Complete the table for factors that increase or decrease death rates, applying SEEP (social, economic, environmental, political)." },
        { id: "d", label: "", type: "table", prompt: "",
          cols: ["Factor", "Decrease or increase death rate? Explain how", "SEEP"],
          rows: ["Healthcare", "Water and sanitation", "Food and nutrition", "Living conditions", "Education", "Government and infrastructure", "Environment", "War"] }
      ]
    }]
  };

  var overlay = document.querySelector("[data-lesson-id]");
  var id = overlay && overlay.getAttribute("data-lesson-id");
  var list = id && FLIP[id];
  var modes = document.querySelector(".lh-modes");
  if (!list || !modes) return;
  if (!Array.isArray(list)) list = [list];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function box(saved, key, label, rows, cell) {
    return '<textarea class="fl-in" data-k="' + key + '" rows="' + (rows || 2) + '"' + (cell ? ' data-voice="off"' : "") + ' aria-label="' + esc(label) + '">' + esc(saved[key] || "") + "</textarea>";
  }
  function isGroup(r) { return r.charAt(0) === "#"; }
  function tableCols(p) { return p.type === "terms" ? ["Key term", "Definition"] : p.cols; }
  function cellKey(p, i, c) { return p.type === "terms" ? p.id + i : p.id + i + "_" + c; }

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
    ".fl__top{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center}" +
    ".fl__banner{display:block;width:100%;max-width:900px;height:auto;border-radius:10px;margin:1rem auto 0}" +
    ".fl__intro{margin:1rem 0 .6rem;color:var(--lh-body)}.fl__cover{margin:-.3rem 0 .8rem 1.2rem;padding:0;color:var(--lh-body)}" +
    ".fl__bot{display:inline-flex;align-items:center;gap:.4rem;border:0;border-radius:999px;padding:.5rem 1rem;background:var(--lh-indigo);color:#fff;font:600 .85rem var(--lh-font-body);cursor:pointer}" +
    ".fl__part{margin-top:1.3rem}.fl__q{font-weight:600;color:var(--lh-ink);margin:0 0 .5rem}.fl__q b{display:inline-block;min-width:1.6rem;color:var(--lh-teal-deep)}" +
    ".fl__head{margin:2rem 0 .2rem;padding-top:1rem;border-top:2px solid var(--lh-teal-bg);font:700 1.05rem var(--lh-font-display);color:var(--lh-teal-deep)}" +
    ".fl__head+.fl__note{margin-top:.2rem}" +
    ".fl__scroll{overflow-x:auto}" +
    ".fl table{width:100%;border-collapse:collapse;font-size:.88rem}.fl th,.fl td{border:1px solid var(--lh-border);padding:.4rem;vertical-align:top;text-align:left}" +
    ".fl th{background:var(--lh-teal-bg);color:var(--lh-ink);font-weight:600}.fl td.fl__rh{font-weight:600;color:var(--lh-ink);width:22%}" +
    ".fl td.fl__grp{background:var(--lh-bg);font-weight:700;color:var(--lh-teal-deep);text-transform:uppercase;font-size:.75rem;letter-spacing:.05em}" +
    ".fl td.fl__ex{font-style:italic;color:var(--lh-body);background:var(--lh-gold-bg)}" +
    ".fl td.fl__given{color:var(--lh-body)}" +
    ".fl__wide td{min-width:78px}.fl__wide td.fl__rh{width:13%}.fl__wide td:last-child{min-width:160px}" +
    ".fl-in{width:100%;box-sizing:border-box;border:1px solid var(--lh-border);border-radius:8px;padding:.45rem .55rem;font:inherit;font-size:.88rem;resize:vertical;background:var(--lh-bg)}" +
    ".fl td .fl-in{border-color:transparent;background:transparent;min-height:2.4rem}.fl td .fl-in:focus,.fl-in:focus{outline:2px solid var(--lh-teal);background:#fff}" +
    ".fl__vq{margin:.6rem 0 .25rem;color:var(--lh-ink)}.fl__video{display:inline-block;margin:.1rem 1.2rem .6rem 0;color:var(--lh-blue);font-weight:600}" +
    ".fl__yts{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:.8rem;margin:.3rem 0 .3rem;max-width:760px}" +
    ".fl__yt{position:relative;aspect-ratio:16/9;border-radius:10px;overflow:hidden;background:#000}.fl__yt iframe{position:absolute;inset:0;width:100%;height:100%;border:0}" +
    ".fl__img{margin:.3rem 0 .6rem}.fl__img img{display:block;max-width:100%;max-height:520px;height:auto;border:1px solid var(--lh-border);border-radius:10px;background:#fff}" +
    ".fl__imgs{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:.8rem}" +
    ".fl__tnote{margin:.2rem 0 .8rem;padding:.55rem .8rem;border-radius:10px;background:var(--lh-gold-bg);color:var(--lh-ink);font-size:.9rem}" +
    ".fl__note{font-size:.84rem;color:var(--lh-muted);margin:.2rem 0 .5rem}" +
    ".fl__actions{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;margin-top:1.4rem}" +
    ".fl__btn{border:1px solid var(--lh-teal);background:var(--lh-teal);color:#fff;border-radius:999px;padding:.5rem 1rem;font:600 .85rem var(--lh-font-body);cursor:pointer}" +
    ".fl__btn--ghost{background:transparent;color:var(--lh-teal-deep)}" +
    ".fl__pair{margin:.2rem 0 .8rem}" +
    "@media print{body.fl-printing .fl:not(.fl--print){display:none!important}.lh-sidebar,.lh-topbar,.lh-rail,.lh-modes,.lh-stats,.lh-tip,.fl__actions,.fl__top,.fl__banner,.fl__yts{display:none!important}.fl{border:0}.fl td .fl-in{border:0}}";
  document.head.appendChild(css);

  function panel(cfg, n) {
  var KEY = "sbl-flip-" + id + (n ? "-" + (n + 1) : "");
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
  var h = '<details class="fl" id="flipLearning' + (n ? n + 1 : "") + '"><summary>' +
    '<span class="fl__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/></svg></span>' +
    '<span class="fl__h"><span class="fl__eyebrow">Flip learning · pre-lesson' + (cfg.part ? " · " + esc(cfg.part) : "") + '</span><p class="fl__title">' + esc(cfg.title) + "</p></span>" +
    '<span class="fl__state"></span>' +
    '<svg class="fl__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></summary><div class="fl__body">' +
    '<img class="fl__banner" src="/images/flip-learning-banner.jpg" alt="Flip Learning: learn first, think deep, apply together. Learn, inquiry, think, collaborate, apply.">';
  if (cfg.intro) h += '<p class="fl__intro">' + esc(cfg.intro) + "</p>";
  if (cfg.teacherNote) h += '<p class="fl__tnote">' + esc(cfg.teacherNote) + "</p>";
  if (cfg.cover) h += '<ul class="fl__cover">' + cfg.cover.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul>";
  h += '<div class="fl__top"><button type="button" class="fl__bot" onclick="window.openTeachBot && openTeachBot(\'' + id + '\')">Open Teach Me Live &rarr;</button>' +
    '<button type="button" class="fl__btn fl__btn--ghost fl-copy">Copy to OneNote</button></div>';

  function ytId(u) { var m = /(?:youtu\.be\/|[?&]v=)([\w-]{11})/.exec(u || ""); return m && m[1]; }
  function embed(u) {
    var v = ytId(u);
    return v ? '<div class="fl__yt"><iframe src="https://www.youtube-nocookie.com/embed/' + v + '" title="Video" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>' : "";
  }
  function links(p) {
    var vids = [], v0 = p.video === true ? cfg.video : p.video;
    if (v0) vids.push(v0);
    (p.links || []).forEach(function (l) { if (ytId(l.url)) vids.push(l.url); });
    var out = vids.length ? '<div class="fl__yts">' + vids.map(embed).join("") + "</div>" : "";
    var v = p.video === true ? cfg.video : p.video;
    if (p.video) out += v
      ? '<a class="fl__video" href="' + esc(v) + '" target="_blank" rel="noopener">Watch the video &rarr;</a>'
      : '<p class="fl__note">Link coming soon from your teacher.</p>';
    (p.links || []).forEach(function (l) { out += '<a class="fl__video" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + " &rarr;</a>"; });
    return out;
  }

  cfg.parts.forEach(function (p) {
    if (p.type === "heading") {
      h += '<h3 class="fl__head">' + esc(p.text) + "</h3>" + (p.note ? '<p class="fl__note">' + esc(p.note) + "</p>" : "");
      return;
    }
    if (p.type === "html") { h += '<div class="fl__part">' + p.html + "</div>"; return; }
    var lab = p.label != null ? p.label : p.id + ")";
    h += '<div class="fl__part">';
    if (p.prompt)
      h += '<p class="fl__q">' + (lab ? "<b>" + esc(lab) + "</b>" : "") + esc(p.prompt) + "</p>";
    if (p.note) h += '<p class="fl__note">' + esc(p.note) + "</p>";
    h += links(p);
    if (p.before && p.type !== "terms" && p.type !== "table") h += '<div class="fl__pair">' + p.before + "</div>";
    if (p.type === "text") {
      h += box(saved, p.id, p.prompt, p.words ? 6 : 4);
      if (p.words) h += '<p class="fl__note fl__wc" data-wc="' + p.id + '" data-min="' + p.words[0] + '" data-max="' + p.words[1] + '"></p>';
    }
    if (p.type === "terms" || p.type === "table") {
      var cols = tableCols(p);
      if (p.before) h += '<div class="fl__pair">' + p.before + "</div>";
      h += '<div class="fl__scroll"><table' + (cols.length > 4 ? ' class="fl__wide"' : "") + "><thead><tr>" + cols.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>";
      p.rows.forEach(function (r, i) {
        if (isGroup(r)) { h += '<tr><td class="fl__grp" colspan="' + cols.length + '">' + esc(r.slice(1)) + "</td></tr>"; return; }
        var ex = p.prefill && p.prefill[i];
        h += '<tr><td class="fl__rh">' + esc(r) + (ex && !p.given ? '<br><span class="fl__note">Example</span>' : "") + "</td>";
        for (var c = 1; c < cols.length; c++)
          h += ex && ex[c - 1] !== null ? '<td class="' + (p.given ? "fl__given" : "fl__ex") + '">' + esc(ex[c - 1] || "") + "</td>" : "<td>" + box(saved, cellKey(p, i, c), r + ": " + cols[c], 2, 1) + "</td>";
        h += "</tr>";
      });
      h += "</tbody></table></div>";
    }
    if (p.type === "questions")
      p.rows.forEach(function (r, i) { h += '<p class="fl__vq">' + (p.letters ? "abcdefghij".charAt(i) + ")" : (i + 1) + ".") + " " + esc(r) + "</p>" + box(saved, p.id + i, r, 3); });
    h += "</div>";
  });

  h += '<div class="fl__actions"><button type="button" class="fl__btn fl-copy">Copy my answers for OneNote</button>' +
    '<button type="button" class="fl__btn fl__btn--ghost" data-print="1">Print / save as PDF</button>' +
    '<span class="fl__note">Your answers save automatically on this device.</span></div></div></details>';

  modes.insertAdjacentHTML("beforebegin", h);
  var root = document.getElementById("flipLearning" + (n ? n + 1 : ""));
  var inputs = root.querySelectorAll(".fl-in");

  function state() {
    root.querySelectorAll(".fl__wc").forEach(function (el) {
      var t = (saved[el.getAttribute("data-wc")] || "").trim(), n = t ? t.split(/\s+/).length : 0;
      var lo = +el.getAttribute("data-min"), hi = +el.getAttribute("data-max");
      el.textContent = n + " words (aim for " + lo + "\u2013" + hi + ")" + (n >= lo && n <= hi ? " \u2713" : "");
      el.style.color = n >= lo && n <= hi ? "var(--lh-green)" : "";
    });
    var done = 0;
    inputs.forEach(function (t) { if (t.value.trim()) done++; });
    root.querySelector(".fl__state").textContent = done ? done + " / " + inputs.length + " answered" : "Not started";
  }
  root.addEventListener("input", function (e) {
    if (!e.target.classList.contains("fl-in")) return;
    saved[e.target.getAttribute("data-k")] = e.target.value;
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (err) {}
    state();
  });
  state();

  root.querySelector("[data-print]").onclick = function () {
    root.open = true; document.body.classList.add("fl-printing"); root.classList.add("fl--print");
    window.print();
    setTimeout(function () { document.body.classList.remove("fl-printing"); root.classList.remove("fl--print"); }, 500);
  };

  function buildCopy() {
    var T = 'style="border-collapse:collapse;border:1px solid #999"', D = 'style="border:1px solid #999;padding:4px 6px;vertical-align:top"';
    var html = "<h2>Flip learning: " + esc(cfg.title) + "</h2>", out = ["Flip learning: " + cfg.title, ""];
    function ans(k) { return saved[k] || ""; }
    function cellHtml(v) { return esc(v).replace(/\n/g, "<br>") || "&nbsp;"; }
    cfg.parts.forEach(function (p) {
      if (p.type === "heading") { html += "<h3>" + esc(p.text) + "</h3>"; out.push(p.text.toUpperCase(), ""); return; }
      if (p.type === "html") return;
      var lab = p.label != null ? p.label : p.id + ")";
      if (p.prompt) { html += "<p><b>" + esc((lab ? lab + " " : "") + p.prompt) + "</b></p>"; out.push((lab ? lab + " " : "") + p.prompt); }
      (p.links || []).forEach(function (l) { html += '<p><a href="' + esc(l.url) + '">' + esc(l.label) + "</a></p>"; out.push(l.label + ": " + l.url); });
      if (p.type === "text") { html += "<p>" + cellHtml(ans(p.id)) + "</p>"; out.push(ans(p.id)); }
      if (p.type === "questions") p.rows.forEach(function (r, i) {
        var n = p.letters ? "abcdefghij".charAt(i) + ")" : (i + 1) + ".";
        html += "<p><i>" + n + " " + esc(r) + "</i><br>" + cellHtml(ans(p.id + i)) + "</p>";
        out.push(n + " " + r, ans(p.id + i));
      });
      if (p.type === "terms" || p.type === "table") {
        var cols = tableCols(p);
        html += "<table " + T + "><tr>" + cols.map(function (c) { return "<th " + D + ">" + esc(c) + "</th>"; }).join("") + "</tr>";
        p.rows.forEach(function (r, i) {
          if (isGroup(r)) { html += '<tr><td colspan="' + cols.length + '" ' + D + "><b>" + esc(r.slice(1)) + "</b></td></tr>"; out.push(r.slice(1).toUpperCase()); return; }
          var ex = p.prefill && p.prefill[i], cells = [];
          html += "<tr><td " + D + "><b>" + esc(r) + "</b></td>";
          for (var c = 1; c < cols.length; c++) {
            var fixed = ex && ex[c - 1] !== null, v = fixed ? (ex[c - 1] || "") : ans(cellKey(p, i, c));
            html += "<td " + D + ">" + (fixed && !p.given ? "<i>" + cellHtml(v) + "</i>" : cellHtml(v)) + "</td>";
            cells.push((cols.length > 2 ? cols[c] + ": " : "") + v);
          }
          html += "</tr>";
          out.push("- " + r + " | " + cells.join(" | "));
        });
        html += "</table>";
      }
      out.push("");
    });
    return { html: html, text: out.join("\n") };
  }
  root.querySelectorAll(".fl-copy").forEach(function (btn) {
    btn.onclick = function () {
      var c = buildCopy(), label = btn.textContent;
      function ok() { btn.textContent = "Copied ✓ paste into OneNote"; setTimeout(function () { btn.textContent = label; }, 2200); }
      function plain() {
        if (navigator.clipboard) navigator.clipboard.writeText(c.text).then(ok, function () { window.prompt("Copy:", c.text); });
        else window.prompt("Copy:", c.text);
      }
      try {
        if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
          navigator.clipboard.write([new ClipboardItem({
            "text/html": new Blob([c.html], { type: "text/html" }),
            "text/plain": new Blob([c.text], { type: "text/plain" })
          })]).then(ok, plain);
          return;
        }
      } catch (e) {}
      plain();
    };
  });
  }
  list.forEach(panel);
})();
