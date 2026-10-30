/* public/js/sbl-games-catalog.js
   The list of SBL games, used by the "Game of the week" card on the
   Humanities Hub and by the picker in the admin dashboard.
   Add a line here whenever a new game goes live (slug = the last part
   of its URL). ROTATION is the order used for automatic weeks; it
   alternates subjects and levels so consecutive weeks differ.

   window.SBLGameOfWeek.weekStart([date])  -> 'YYYY-MM-DD' Monday (Bangkok time)
   window.SBLGameOfWeek.resolve(picks)     -> { game, note, picked } for this week */
(function () {
  var GAMES = [
  {
    "slug": "world-map-challenge",
    "title": "World Map Challenge",
    "href": "/geography/games/world-map-challenge",
    "level": "KS3 Geography",
    "tag": "New",
    "desc": "Find and name the countries of the world, track down mountains, rivers, lakes, deserts and seas, learn the continents, oceans and lines of latitude, and test yourself on capitals and flags. Three levels from famous countries to tiny islands, for the whole world or one continent."
  },
  {
    "slug": "tropical-storm-mission",
    "title": "Tropical Storm Mission",
    "href": "/geography/games/tropical-storm-mission",
    "level": "KS3 Geography",
    "tag": "Live",
    "desc": "Three linked missions: label a storm's cross-section, sequence its formation, then set the conditions to build and steer your own tropical storm."
  },
  {
    "slug": "place-detective",
    "title": "Place Detective",
    "href": "/geography/games/place-detective",
    "level": "KS3 Geography",
    "tag": "Live",
    "desc": "Use geographical clues to solve mystery locations. Four levels, from famous places for Year 7 up to expert detectives with technical clues and penalties for wrong guesses."
  },
  {
    "slug": "tropical-storm-links",
    "title": "Tropical Storm: Link It Up",
    "href": "/geography/games/tropical-storm-links",
    "level": "KS3 Geography",
    "tag": "Live",
    "desc": "Tap a cause circle, then the impact it leads to, and explain the link — instant AI feedback on every connection you make."
  },
  {
    "slug": "storm-ready-city",
    "title": "Storm-Ready City",
    "href": "/geography/games/storm-ready-city",
    "level": "KS3 Geography",
    "tag": "Live · Reducing storm impacts",
    "desc": "Sort 12 plans into Prediction, Preparation and Protection, spend a $50m city budget, survive a Category 4 storm — then try again with only $10m."
  },
  {
    "slug": "tropical-storms-exam-survival",
    "title": "Tropical Storms: Exam Survival Challenge",
    "href": "/geography/games/tropical-storms-exam-survival",
    "level": "KS3 Geography",
    "tag": "Live · 6 levels",
    "desc": "Measuring storms on the Saffir-Simpson Scale, Hazard/Exposure/Vulnerability in Typhoon Haiyan, the 3Ps, key terms, comparing deadly storms across countries, and future trends — sort, classify and answer your way through to the final boss level."
  },
  {
    "slug": "volcano-fantastic-place",
    "title": "Ruapehu Mission",
    "href": "/geography/games/volcano-fantastic-place",
    "level": "KS3 Geography",
    "tag": "Live · Can a volcano be a fantastic place?",
    "desc": "A Year 7 enquiry on Mount Ruapehu, New Zealand: label the subduction diagram, sort evidence into the 4 Ps, make a decision, write a tourist advert — then copy every answer into OneNote."
  },
  {
    "slug": "bangkok-venice-east",
    "title": "Was Bangkok the Venice of the East?",
    "href": "/geography/games/bangkok-venice-east",
    "level": "KS3 Geography",
    "tag": "Live · The 4 Ps Challenge",
    "desc": "Sort 15 clues about old Bangkok’s canals and modern Venice into Place, Processes, Power and Possibilities, justify your thinking, rate your confidence — some clues earn bonus points for fitting more than one P — then give your verdict."
  },
  {
    "slug": "igcse-coastal-quest",
    "title": "Coastal Quest",
    "href": "/geography/games/igcse-coastal-quest",
    "level": "IGCSE Geography",
    "tag": "Live · Whole topic revision",
    "desc": "16 levels, one per lesson: waves, erosion and weathering, headlands to stumps, spits, dunes, coral reefs, threats, conflicts, flooding, hard and soft engineering, Sri Lanka and Holderness. Labelled diagrams, data skills, a past paper checkpoint after every level and an Edexcel Examiner boss fight."
  },
  {
    "slug": "igcse-hazard-quest",
    "title": "Hazard Quest",
    "href": "/geography/games/igcse-hazard-quest",
    "level": "IGCSE Geography",
    "tag": "Live · Whole topic revision",
    "desc": "13 levels, one per lesson: hazards and vulnerability, plate tectonics, earthquakes and tsunamis, Japan 2011, Haiti 2010, volcanoes, Kīlauea 2018, tropical cyclones and Typhoon Haiyan. Labelled diagrams, data skills, a past paper checkpoint after every level and an Edexcel Examiner boss fight."
  },
  {
    "slug": "energy-sort",
    "title": "Energy Sort",
    "href": "/geography/games/energy-sort",
    "level": "IGCSE Geography",
    "tag": "Live · Starter",
    "desc": "Sort 15 energy resources into Renewable and Non-renewable against the clock, then justify the tricky cases: nuclear, fuelwood, HEP, geothermal and shale gas."
  },
  {
    "slug": "micro-hydro-mission",
    "title": "Micro-Hydro Mission",
    "href": "/geography/games/micro-hydro-mission",
    "level": "IGCSE Geography",
    "tag": "Live · Energy for last-mile communities",
    "desc": "Label a micro-hydro system from river to village, sort diesel vs micro-hydro, then investigate Long Tanid in Malaysian Borneo — and copy your work into OneNote."
  },
  {
    "slug": "topic4-exam-survival",
    "title": "Topic 4 Exam Survival Challenge",
    "href": "/geography/games/topic4-exam-survival",
    "level": "IGCSE Geography",
    "tag": "Live · IGCSE Economic Activity & Energy",
    "desc": "Ten mini-games to save Veridia’s economy and energy future: sector sort, Clark Fisher, location escape room, Malthus vs Boserup boss fight, energy mix builder, carbon calculator and a final P-E-E exam boss, with a past paper checkpoint question after each level. Earn XP and badges."
  },
  {
    "slug": "igcse-rural-quest",
    "title": "Rural Quest",
    "href": "/geography/games/igcse-rural-quest",
    "level": "IGCSE Geography",
    "tag": "Live · Whole topic revision",
    "desc": "12 levels, one per lesson: biomes, ecosystem goods and services, the Amazon, farming systems, rural change in the UK, diversification, sustainable rural living and rural–urban migration in Thailand. Labelled diagrams, data skills, a past paper checkpoint after every level and an Edexcel Examiner boss fight."
  },
  {
    "slug": "igcse-development-quest",
    "title": "Development Quest",
    "href": "/geography/games/igcse-development-quest",
    "level": "IGCSE Geography",
    "tag": "Live · Whole topic revision",
    "desc": "10 levels, one per lesson: measuring development, GDP, HDI, Gini and corruption, the DTM, population pyramids, causes of uneven development, Italy, aid and trade, and the Nigeria and Kenya projects. A past paper checkpoint after every level and a 12-mark Discuss boss fight."
  },
  {
    "slug": "igcse-fieldwork-quest",
    "title": "Fieldwork Quest",
    "href": "/geography/games/igcse-fieldwork-quest",
    "level": "IGCSE Geography",
    "tag": "Live · Coastal and rural fieldwork",
    "desc": "13 levels in three parts: fieldwork skills (enquiry process, data types, sampling pros and cons, risk, presenting and analysing data, evaluation), then our Sam Roi Yot coastal study and rural study. A past paper checkpoint after every level and an 8-mark Evaluate boss fight."
  },
  {
    "slug": "ib-population-quest",
    "title": "Population Quest: Changing Population",
    "href": "/geography/games/ib-population-quest",
    "level": "IB Geography",
    "tag": "New · Unit 1 revision adventure",
    "desc": "Fourteen levels across all three topics — distribution and development, Egypt and Thailand, the DTM, Thailand vs The Gambia, megacities, the Rohingya, Haiti, ageing, population policies, trafficking and the demographic dividend — with checkpoint past paper questions, then beat the IB Examiner."
  },
  {
    "slug": "thailand-or-gambia",
    "title": "Thailand, The Gambia or Both?",
    "href": "/geography/games/thailand-or-gambia",
    "level": "IB Geography",
    "tag": "Live · Unit 1 · Retrieval",
    "desc": "Sort 20 demographic statements into Thailand, The Gambia or Both, then explain the shared features — dependency, falling fertility, falling mortality and migration."
  },
  {
    "slug": "population-minister",
    "title": "Population Minister 2025–2055",
    "href": "/geography/games/population-minister",
    "level": "IB Geography",
    "tag": "Live · Unit 1 · Plenary",
    "desc": "Manage Thailand's ageing or The Gambia's youthful population for three decades. Choose responses, watch the pyramid change, survive events, then compare both countries."
  },
  {
    "slug": "consequence-carousel",
    "title": "Consequence Carousel: the Rohingya Crisis",
    "href": "/geography/games/consequence-carousel",
    "level": "IB Geography",
    "tag": "Live · Unit 1 forced migration",
    "desc": "Sort the consequences for refugees, Bangladesh, Myanmar and aid organisations, label them social/economic/political/environmental, short/long term and direct/indirect, draw the cause-and-effect arrows, then build an exam paragraph."
  },
  {
    "slug": "haiti-phantom-state",
    "title": "The Phantom State: Haiti 2010",
    "href": "/geography/games/haiti-phantom-state",
    "level": "IB Geography",
    "tag": "Live · Unit 1 forced migration",
    "desc": "Crack the evidence vault on the 2010 earthquake, build the doom loop between state fragility and displacement (spot the red herrings), then try to do better than Haiti as Minister of Reconstruction."
  },
  {
    "slug": "rohingya-or-haiti",
    "title": "Rohingya, Haiti or Both?",
    "href": "/geography/games/rohingya-or-haiti",
    "level": "IB Geography",
    "tag": "Live · Unit 1 forced migration essay prep",
    "desc": "Sort 26 evidence cards into Rohingya only, Haiti only or Both, decide whether each essay theme is a similarity or a difference, then build a comparative PEEL paragraph to paste into OneNote."
  },
  {
    "slug": "essay-lab-megacity",
    "title": "Essay Lab: Megacity Growth (Mumbai)",
    "href": "/geography/games/essay-lab-megacity",
    "level": "IB Geography",
    "tag": "Live · Unit 1 · 10-mark essay",
    "desc": "Rebuild a model essay on Mumbai’s megacity growth, colour-code the 6 P’s, grade it /10, then prove why it reaches the top markband."
  },
  {
    "slug": "ib-climate-quest",
    "title": "Climate Quest: Changing Climate",
    "href": "/geography/games/ib-climate-quest",
    "level": "IB Geography",
    "tag": "Live · Unit 2 revision adventure",
    "desc": "Twelve levels across Causes, Consequences and Responding — albedo and feedback loops, sea level rise, Bangladesh, risk and vulnerability, adaptation vs mitigation, greenwashing — then beat the IB Examiner with Claim, Evidence, Explain and Judgement."
  },
  {
    "slug": "ib-resource-quest",
    "title": "Resource Quest: Global Resource Consumption",
    "href": "/geography/games/ib-resource-quest",
    "level": "IB Geography",
    "tag": "New · Unit 3 revision adventure",
    "desc": "Fourteen levels across all three topics — poverty reduction, ecological footprints, water, food and energy, the nexus, Nepal and Israel, e-waste, the SDGs, Malthus vs Boserup and the circular economy — with checkpoint past paper questions, then beat the IB Examiner."
  },
  {
    "slug": "resource-classification-challenge",
    "title": "Resource Classification Challenge",
    "href": "/geography/games/resource-classification-challenge",
    "level": "IB Geography",
    "tag": "Live · Unit 3 · Sort",
    "desc": "Drag and drop 16 real-world resources into Renewable, Non-Renewable, Biotic and Abiotic before the clock runs out."
  },
  {
    "slug": "oil-trends-sort",
    "title": "Oil Trends Sort",
    "href": "/geography/games/oil-trends-sort",
    "level": "IB Geography",
    "tag": "Live · Unit 3 · Sort",
    "desc": "Drag 28 statements into four boxes: what increases or decreases the consumption and the production of oil? Clues for every wrong answer, then an “examine” writing task."
  },
  {
    "slug": "energy-minister",
    "title": "Energy Minister 2025–2050",
    "href": "/geography/games/energy-minister",
    "level": "IB Geography",
    "tag": "Live · Plenary",
    "desc": "Run the UK, Thailand, India or Kenya's electricity mix for three decades. Balance sustainability, energy security, reliability and cost, survive random events, then write up your pathway."
  },
  {
    "slug": "water-security-decision",
    "title": "Water Security Decision Game",
    "href": "/geography/games/water-security-decision",
    "level": "IB Geography",
    "tag": "Live · Unit 3 · Apply & evaluate",
    "desc": "Advise Israel, Singapore, rural Ethiopia, Punjab or Bangkok. Fund only two strategies, survive a drought year, then justify each with a benefit, a limitation and regional fit."
  },
  {
    "slug": "nexus-chain-reaction",
    "title": "Nexus Chain Reaction",
    "href": "/geography/games/nexus-chain-reaction",
    "level": "IB Geography",
    "tag": "Live · Unit 3 climate change and the nexus",
    "desc": "Rebuild eight chain reactions link by link — from rising temperatures to pressure on water, energy and food — sort each effect into the nexus, then explain one chain."
  },
  {
    "slug": "nepal-climate-adaptation",
    "title": "Nepal: Adapting to Climate Change",
    "href": "/geography/games/nepal-climate-adaptation",
    "level": "IB Geography",
    "tag": "Live · Unit 3 Nepal case study",
    "desc": "Crack the evidence vault on rural Nepal, sort monsoon and dry-season impacts on water, food and energy, then spend a small grant on adaptation projects for a hill village."
  },
  {
    "slug": "essay-lab-diets",
    "title": "Essay Lab: Changing Diets",
    "href": "/geography/games/essay-lab-diets",
    "level": "IB Geography",
    "tag": "Live · Unit 3 · Paper 2 essay",
    "desc": "Rebuild a model 10-mark essay like a jigsaw, colour-code its evaluation, definitions, places, processes, possibilities and power, then grade it with the IB markbands."
  },
  {
    "slug": "world-case-study-map",
    "title": "World Case Study Map",
    "href": "/geography/games/world-case-study-map",
    "level": "IB Geography",
    "tag": "Live · Interactive case-study map",
    "desc": "Click dots on a world map to open real case studies — Place, Processes, Power and Possibilities for each. Starting with Population density in Egypt and Thailand."
  },
  {
    "slug": "market-shock",
    "title": "Market Shock",
    "href": "/geography/games/market-shock",
    "level": "IGCSE Economics",
    "tag": "Live · Demand and supply · New",
    "desc": "Breaking news hits the markets: decide which curve shifts and which way, then predict what happens to price and quantity. Ten headlines, a faster clock every round, and a shift-or-movement trap to catch you out."
  }
];
  var ROTATION = ["market-shock", "ib-population-quest", "igcse-coastal-quest", "world-map-challenge", "thailand-or-gambia", "igcse-hazard-quest", "tropical-storm-mission", "population-minister", "energy-sort", "place-detective", "consequence-carousel", "micro-hydro-mission", "tropical-storm-links", "haiti-phantom-state", "topic4-exam-survival", "storm-ready-city", "rohingya-or-haiti", "igcse-rural-quest", "tropical-storms-exam-survival", "essay-lab-megacity", "igcse-development-quest", "volcano-fantastic-place", "ib-climate-quest", "igcse-fieldwork-quest", "bangkok-venice-east", "ib-resource-quest", "resource-classification-challenge", "oil-trends-sort", "energy-minister", "water-security-decision", "nexus-chain-reaction", "nepal-climate-adaptation", "essay-lab-diets", "world-case-study-map"];
  function weekStart(d) {
    var t = (d ? d.getTime() : Date.now()) + 7 * 3600000; /* Bangkok, UTC+7 */
    var x = new Date(t), day = (x.getUTCDay() + 6) % 7; /* Monday = 0 */
    return new Date(Date.UTC(x.getUTCFullYear(), x.getUTCMonth(), x.getUTCDate() - day)).toISOString().slice(0, 10);
  }
  function bySlug(s) { for (var i = 0; i < GAMES.length; i++) if (GAMES[i].slug === s) return GAMES[i]; return null; }
  function rotation(ws) {
    var weeks = Math.round((Date.parse(ws + 'T00:00:00Z') - Date.parse('2026-01-05T00:00:00Z')) / 604800000);
    var n = ROTATION.length, i = ((weeks % n) + n) % n;
    return bySlug(ROTATION[i]);
  }
  function resolve(picks, ws) {
    ws = ws || weekStart();
    var p = picks && picks[ws], g = p && bySlug(p.slug);
    if (g) return { game: g, note: p.note || '', picked: true, week: ws };
    return { game: rotation(ws), note: '', picked: false, week: ws };
  }
  window.SBL_GAMES = GAMES;
  window.SBLGameOfWeek = { weekStart: weekStart, resolve: resolve, rotation: rotation, bySlug: bySlug };
})();
