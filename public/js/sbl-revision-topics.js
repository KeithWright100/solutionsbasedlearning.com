/* ============================================================
   SBL Revision — Unit Revision Topics
   Adds one synthetic "lesson" entry to window.SBL_LESSONS per full
   revision topic (unit), so the existing Teach Me Bot / Test My
   Knowledge / Challenge Mode modal machinery in sbl-teach-bot.js can
   be reused as-is on a topic-level revision page.

   Each revision-topic page loads its unit's real lesson-data file
   FIRST (e.g. sbl-population-lessons.js), then this file, then
   sbl-teach-bot.js — so the pooling below can see every real lesson's
   quiz bank already on window.SBL_LESSONS.

   Load order on a revision topic page:
     <script src="/js/sbl-population-lessons.js"></script>
     <script src="/js/sbl-revision-topics.js"></script>
     <script src="/js/sbl-teach-bot.js"></script>
   ============================================================ */
(function () {

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  /* Pools every quiz question from every real lesson whose id starts
     with the given prefix (e.g. 'CP' pools CP01..CP13). Excludes the
     synthetic revision-topic lesson itself so it never pools its own
     already-sampled quiz. */
  function poolQuestions(prefix, excludeId) {
    var lessons = window.SBL_LESSONS || {};
    var pool = [];
    Object.keys(lessons).forEach(function (id) {
      if (id === excludeId) return;
      if (id.indexOf(prefix) !== 0) return;
      var lesson = lessons[id];
      if (lesson && lesson.quiz && lesson.quiz.length) {
        pool = pool.concat(lesson.quiz);
      }
    });
    return pool;
  }

  /* Re-samples a fresh random set of `count` questions from the full
     unit pool and assigns it to the revision lesson's .quiz. Shared by
     both entry points below so the modal's own "Test My Knowledge"
     button (inside Teach Me Bot) and the page's standalone quiz button
     always agree on the question count. Falls back to the whole pool
     if there are fewer than `count` questions available. */
  function resampleUnitQuiz(revisionLessonId, unitPrefix, count) {
    var lesson = window.SBL_LESSONS && window.SBL_LESSONS[revisionLessonId];
    if (!lesson) return;
    var pool = poolQuestions(unitPrefix, revisionLessonId);
    var n = Math.min(count || 20, pool.length);
    lesson.quiz = shuffle(pool).slice(0, n);
  }

  /* Entry point: standalone "Test My Knowledge" card on the revision
     topic page — re-samples then jumps straight into the quiz. */
  window.sblStartUnitRevisionQuiz = function (revisionLessonId, unitPrefix, count) {
    resampleUnitQuiz(revisionLessonId, unitPrefix, count);
    window.openTestMyKnowledge(revisionLessonId);
  };

  /* Entry point: "Teach Me Bot" card on the revision topic page —
     re-samples first so that if the student launches the quiz from
     *inside* the Teach Bot modal instead, it's still a fresh random
     set of `count` questions, and the modal's own question-count text
     (driven by lesson.quiz.length) reads correctly. */
  window.sblOpenUnitTeachBot = function (revisionLessonId, unitPrefix, count) {
    resampleUnitQuiz(revisionLessonId, unitPrefix, count);
    window.openTeachBot(revisionLessonId);
  };

  /* ---------------- Unit 1: Changing Population ---------------- */

  window.SBL_LESSONS = window.SBL_LESSONS || {};

  var CP_UNIT_TITLE = 'Unit 1: Changing Population';

  var CP_CHECKLIST = [
    'I can explain the difference between population distribution and population density.',
    'I can describe and explain the human and physical factors affecting population distribution globally.',
    'I can define LIC, MIC and HIC and give examples of countries in each category.',
    'I can describe the characteristics of a range of HIC, LIC and MIC countries.',
    'I can define development and explain how development indicators are used to measure development.',
    'I can describe and explain the patterns of development and population distribution in Thailand.',
    'I can explain the core-periphery model and apply it to Bangkok.',
    'I can give reasons for voluntary internal migration.',
    'I can describe and explain the patterns of development and population distribution in Egypt, and make comparisons with Thailand.',
    'I can explain the Demographic Transition Model.',
    'I can describe and interpret population pyramids.',
    'I can explain the factors that affect birth and death rates in a country.',
    'I can define and calculate dependency ratios.',
    'I can explain the concept of demographic momentum.',
    'I can define and explain population projections.',
    'I can compare and contrast differences in population structure and demographic transition in Thailand and The Gambia.',
    'I can define a ‘megacity’ and identify some megacities globally.',
    'I can describe the problems associated with rapid megacity growth.',
    'I can explain the social, economic and environmental consequences of rapid megacity growth, using Mumbai, India as a case study.',
    'I can define IDP, refugee and economic migrant.',
    'I can explain the causes of forced migration.',
    'I can evaluate the causes and consequences of forced migration on donor and recipient countries.',
    'I can discuss a social/political case study of forced migration: the Rohingya, Burma.',
    'I can discuss a social/political case study of forced migration: Syria.',
    'I can discuss an environmental case study of forced migration: Niger or Haiti.',
    'I can describe trends in sex ratio, nationally and globally.',
    'I can describe trends in family size, nationally and globally.',
    'I can describe trends in ageing, nationally and globally.',
    'I can explain the causes, consequences and possible solutions to an ageing population, using Japan as a case study.',
    'I can explain pro-natal population policies in The Gambia.',
    'I can describe some patterns and trends in gender equality globally and nationally.',
    'I can explain the policies being put in place in Kerala, India to tackle gender equality.',
    'I can define human trafficking and explain how it is an issue globally.',
    'I can explain some policies being put in place to tackle human trafficking.'
  ];

  window.SBL_LESSONS.CPREV = {
    id: 'CPREV',
    title: 'Changing Population — Full Unit Revision',
    syllabusFocus: 'The whole of Unit 1: Changing Population — population distribution and development patterns, the Demographic Transition Model and population structure, megacities, migration, and the challenges and opportunities of an ageing, growing or unevenly distributed population.',
    starterButtons: [
      { label: 'Overview of the whole unit', request: 'Give me a full overview of Unit 1: Changing Population, covering population and development patterns, changing population and places, and challenges and opportunities.' },
      { label: 'Distribution vs development', request: 'Explain how population distribution relates to development, using LICs, MICs and HICs as examples.' },
      { label: 'Demographic Transition Model', request: 'Explain the Demographic Transition Model and how to interpret population pyramids at each stage.' },
      { label: 'Megacity growth', request: 'Explain the problems associated with rapid megacity growth, using Mumbai as a case study.' },
      { label: 'Forced migration', request: 'Explain the causes and consequences of forced migration, comparing a social/political case study with an environmental one.' },
      { label: 'Ageing populations', request: 'Explain the causes, consequences and possible solutions to an ageing population, using Japan as a case study.' },
      { label: 'Help me plan an essay', request: 'Help me plan an essay comparing the causes of population change in two contrasting countries from this unit.' }
    ],
    checklist: CP_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Unit 1 checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this unit — for example, “Explain the pro-natal population policy in The Gambia.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: CP_UNIT_TITLE,
      checklistItems: CP_CHECKLIST
    },
    quiz: poolQuestions('CP', 'CPREV')
  };

  /* ---------------- Unit 2: Global Climate ---------------- */

  var CC_UNIT_TITLE = 'Unit 2: Global Climate';

  var CC_CHECKLIST = [
    'I can identify and describe the layers of the atmosphere.',
    'I can explain the Earth’s energy budget using a diagram.',
    'I can explain how cloud cover affects temperature.',
    'I can explain how the output of solar radiation varies with reference to the Milankovitch cycles.',
    'I can explain and give examples of positive and negative feedback loops.',
    'I can explain how sunspots impact global temperatures.',
    'I can explain global dimming and its human and physical causes.',
    'I can describe the albedo effect using examples.',
    'I can identify a number of greenhouse gases and their characteristics.',
    'I can explain the difference between the enhanced greenhouse effect and the greenhouse effect.',
    'I can critically evaluate the arguments for and against human-induced climate change.',
    'I can define the four main spheres — hydrosphere, biosphere, lithosphere and atmosphere.',
    'I can describe and explain ocean acidification.',
    'I can describe and explain glacial retreat, including examples of places where it is occurring.',
    'I can describe and explain the causes and impacts of rising sea levels.',
    'I can describe the carbon cycle.',
    'I can explain carbon sources, fluxes and sinks.',
    'I can describe the key changes to extreme weather occurring due to climate change.',
    'I can explain the link between climate change and El Niño.',
    'I can describe the potential changes to the location of the world’s biomes due to climate change.',
    'I can explain the impact of climate change on at least one plant or animal species in detail.',
    'I can explain the impact of climate change on animal migratory patterns and habitat more generally.',
    'I can describe and explain the impact of climate change on crop yields globally.',
    'I can examine the impacts of climate change on agriculture more generally.',
    'I can give examples of parts of the world where farmers will and will not benefit from climate change.',
    'I can describe the possible impacts of climate change on human health.',
    'I can define the key term ‘environmental migration’ and explain how this is linked to climate change, using examples of specific places around the world.',
    'I can explain the possible impacts of climate change on ocean transport routes, e.g. the Northwest Passage.',
    'I can define risk and vulnerability and describe how each is calculated.',
    'I can describe the locations that are potentially most at risk from climate change.',
    'I can explain the factors that increase or decrease vulnerability and risk.',
    'I can explain what the Climate Change Vulnerability Index is.',
    'I can discuss a case study of climate change impacts and vulnerability: Switzerland.',
    'I can discuss a case study of climate change impacts and vulnerability: Nunavummiut, Northern Canada.',
    'I can explain the connection between gender, vulnerability and climate change.',
    'I can describe which countries in the world have made the most and least commitments to tackling climate change.',
    'I can explain the key features of the UN Framework Convention on Climate Change, 1992.',
    'I can explain the key features of the Kyoto Protocol, 1997.',
    'I can explain the key features of the Paris Agreement, 2015.',
    'I can explain the difference between adaptation and mitigation.',
    'I can describe and explain carbon trading.',
    'I can describe and explain carbon offsetting.',
    'I can describe and explain geoengineering.',
    'I can describe and explain afforestation.',
    'I can describe and explain carbon capture and sequestration (CCS).',
    'I can explain what civil society is and give examples.',
    'I can explain strategies used by corporations to respond to climate change.',
    'I can discuss a case study of NGO climate action: NGOs in Nicaragua.',
    'I can discuss a case study of climate change impacts and responses: Bangladesh.'
  ];

  window.SBL_LESSONS.CCREV = {
    id: 'CCREV',
    title: 'Global Climate — Full Unit Revision',
    syllabusFocus: 'The whole of Unit 2: Global Climate — the physical and human causes of climate change, its consequences for the atmosphere, oceans, ecosystems, agriculture and human health, and how the world is responding through adaptation, mitigation and international agreements.',
    starterButtons: [
      { label: 'Overview of the whole unit', request: 'Give me a full overview of Unit 2: Global Climate, covering causes, consequences, and responses to global climate change.' },
      { label: 'Feedback loops', request: 'Explain positive and negative feedback loops in the climate system, with examples.' },
      { label: 'Greenhouse effect vs enhanced', request: 'Explain the difference between the greenhouse effect and the enhanced greenhouse effect.' },
      { label: 'The carbon cycle', request: 'Describe the carbon cycle and explain the difference between carbon sources, fluxes and sinks.' },
      { label: 'Vulnerability and risk', request: 'Explain how risk and vulnerability to climate change are calculated, and what factors increase or decrease them.' },
      { label: 'International agreements', request: 'Explain the key features of the UNFCCC, the Kyoto Protocol, and the Paris Agreement, and how they differ.' },
      { label: 'Help me plan an essay', request: 'Help me plan an essay comparing adaptation and mitigation strategies for climate change, using specific examples.' }
    ],
    checklist: CC_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Unit 2 checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this unit — for example, “Explain the key features of the Paris Agreement, 2015.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: CC_UNIT_TITLE,
      checklistItems: CC_CHECKLIST
    },
    quiz: poolQuestions('CC', 'CCREV')
  };

  /* ---------------- Unit 3: Resource Consumption and Security ---------------- */

  var RC_UNIT_TITLE = 'Unit 3: Resource Consumption and Security';

  var RC_CHECKLIST = [
    'I can define the key terms Low Income Country (LIC) and High Income Country (HIC).',
    'I can explain how different development indicators are used to assess a country’s level of development.',
    'I can explain what the Millennium Development Goals are and outline some of their key successes and failures.',
    'I can explain what the Sustainable Development Goals are, why they were set up, and their aims.',
    'I can explain the growth of the ‘new’ middle class and its impacts on the global economy.',
    'I can classify resources along a continuum from exhaustible to infinitely renewable.',
    'I can define the key terms carrying capacity, overpopulation and underpopulation.',
    'I can explain and calculate individual and national ecological footprints.',
    'I can describe and explain spatial patterns relating to the size of ecological footprints.',
    'I can describe and explain global patterns of water consumption.',
    'I can explain the concept of embedded water.',
    'I can describe and explain global patterns of food consumption.',
    'I can explain how patterns of food consumption change due to the growth of middle income countries.',
    'I can describe and explain the global pattern of oil production and consumption.',
    'I can explain the importance of renewable energy sources and nuclear energy.',
    'I can evaluate a number of alternative, non-fossil fuel energy sources, including biofuel, wind, solar, geothermal, nuclear, tidal, hydroelectric and fuel wood.',
    'I can explain the water-food-energy nexus.',
    'I can define water security, food security and energy security.',
    'I can explain how climate change could influence the water-food-energy nexus.',
    'I can give examples of how climate change can affect agricultural productivity.',
    'I can give examples of how climate change can impact water supplies.',
    'I can give examples of how climate change can impact energy demands.',
    'I can explain how some countries and regions have adapted to the unwanted negative effects of climate change on the water-food-energy nexus.',
    'I can discuss a water-food-energy nexus case study: Nepal, a small-scale approach.',
    'I can discuss a water-food-energy nexus case study: Israel, a large-scale approach.',
    'I can describe and explain global variations in the world’s waste.',
    'I can explain the 3 R’s — reduce, reuse, recycle — and the waste hierarchy.',
    'I can define e-waste and explain why it causes problems.',
    'I can outline some of the solutions to the e-waste problem, with reference to examples.',
    'I can explain the theories of Thomas Malthus and the neo-Malthusians.',
    'I can explain the theories of Esther Boserup and other optimists.',
    'I can apply the case study of the Ethiopian famine as evidence to support Malthusian theory.',
    'I can apply the case study of India’s ‘Green and Gene Revolutions’ as evidence to support Boserup’s theory.',
    'I can explain the theory of the ‘Tragedy of the Commons’.',
    'I can explain the concept of resource stewardship.',
    'I can explain the concept of the circular economy.',
    'I can apply the concept of the circular economy to a case study, e.g. biochar in Chiang Mai or brewing beer from surplus bread in Europe.'
  ];

  window.SBL_LESSONS.RCREV = {
    id: 'RCREV',
    title: 'Resource Consumption and Security — Full Unit Revision',
    syllabusFocus: 'The whole of Unit 3: Global Resource Consumption and Security — global trends in resource consumption and development, the water-food-energy nexus and its impacts, and theories and strategies of resource stewardship.',
    starterButtons: [
      { label: 'Overview of the whole unit', request: 'Give me a full overview of Unit 3: Global Resource Consumption and Security, covering global trends in consumption, the water-food-energy nexus, and resource stewardship.' },
      { label: 'Ecological footprints', request: 'Explain how ecological footprints are calculated and why they vary spatially.' },
      { label: 'Water-food-energy nexus', request: 'Explain the water-food-energy nexus and how climate change affects it.' },
      { label: 'Malthus vs Boserup', request: 'Compare the theories of Thomas Malthus and Esther Boserup on population and resources.' },
      { label: 'Circular economy', request: 'Explain the concept of the circular economy, using a real example.' },
      { label: 'E-waste', request: 'Explain what e-waste is, why it is a problem, and some solutions to it.' },
      { label: 'Help me plan an essay', request: 'Help me plan an essay evaluating whether resource consumption is a bigger threat to sustainability than population growth.' }
    ],
    checklist: RC_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Unit 3 checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this unit — for example, “Explain the concept of the circular economy.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: RC_UNIT_TITLE,
      checklistItems: RC_CHECKLIST
    },
    quiz: poolQuestions('RC', 'RCREV')
  };

})();
