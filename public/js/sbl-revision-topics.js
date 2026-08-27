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

})();
