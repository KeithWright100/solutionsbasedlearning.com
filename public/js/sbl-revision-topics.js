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
     unit pool and assigns it to the revision lesson's .quiz, then
     opens Test My Knowledge on it — so every attempt is a new random
     draw, exactly like re-rolling a hand of cards. Falls back to the
     whole pool if there are fewer than `count` questions available. */
  window.sblStartUnitRevisionQuiz = function (revisionLessonId, unitPrefix, count) {
    var lesson = window.SBL_LESSONS && window.SBL_LESSONS[revisionLessonId];
    if (!lesson) return;
    var pool = poolQuestions(unitPrefix, revisionLessonId);
    var n = Math.min(count || 20, pool.length);
    lesson.quiz = shuffle(pool).slice(0, n);
    window.openTestMyKnowledge(revisionLessonId);
  };

  /* ---------------- Unit 1: Changing Population ---------------- */

  window.SBL_LESSONS = window.SBL_LESSONS || {};

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
    checklist: [
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
    ],
    challenge: {
      question: 'To what extent is demographic transition a bigger driver of population challenges than migration?',
      intro: 'This question draws on the whole of Unit 1: Changing Population — population structure, migration, and the challenges and opportunities that come with a changing population. Use specific examples and case studies from across the unit to support your answer.'
    },
    quiz: poolQuestions('CP', 'CPREV')
  };

})();
