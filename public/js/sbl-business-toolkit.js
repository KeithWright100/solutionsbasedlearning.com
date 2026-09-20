/* ============================================================
   SBL Revision — IB Business Management Toolkit Socratic Challenge

   Adds ONE synthetic "lesson" entry to window.SBL_LESSONS so the
   existing Challenge Mode machinery in sbl-teach-bot.js (the same
   "SBL Challenge Tutor" Copilot Studio agent used by every other
   Challenge Mode button on the site) can be reused as-is to run a
   Socratic Q&A on the Business Management Toolkit — no new backend,
   agent, secret or database table required.

   window.openChallengeMode('IBBUSTOOLKIT') builds its opening prompt
   from lesson.challenge.checklistItems (see buildChallengeOpener in
   sbl-teach-bot.js): the Challenge Tutor is told to ask the student
   direct questions, one checklist item at a time in random order,
   waiting for an answer before moving on — which is exactly a
   Socratic Q&A over the eight Business Management tools below.

   Only Challenge Mode is used on the Exam Tips page (not Teach Me
   Bot or Test My Knowledge), so this lesson entry only needs .title
   and .challenge — no .checklist, .quiz or .starterButtons.

   Load order on the exam-tips page:
     <script src="/js/sbl-business-toolkit.js"></script>
     <script src="/js/sbl-teach-bot.js"></script>
   ============================================================ */
(function () {

  window.SBL_LESSONS = window.SBL_LESSONS || {};

  var TOOLKIT_CHECKLIST = [
    'I can identify the purpose of a SWOT analysis.',
    'I can recognise the main components or information used in a SWOT analysis.',
    'I can use a SWOT analysis in an appropriate business context.',
    'I can interpret what a SWOT analysis shows about a business situation.',
    'I can apply a SWOT analysis to a case or business decision.',
    'I can evaluate the usefulness and limitations of a SWOT analysis when appropriate.',

    'I can identify the purpose of the Ansoff Matrix.',
    'I can recognise the main components or information used in the Ansoff Matrix.',
    'I can use the Ansoff Matrix in an appropriate business context.',
    'I can interpret what the Ansoff Matrix shows about a business situation.',
    'I can apply the Ansoff Matrix to a case or business decision.',
    'I can evaluate the usefulness and limitations of the Ansoff Matrix when appropriate.',

    'I can identify the purpose of a STEEPLE analysis.',
    'I can recognise the main components or information used in a STEEPLE analysis.',
    'I can use a STEEPLE analysis in an appropriate business context.',
    'I can interpret what a STEEPLE analysis shows about a business situation.',
    'I can apply a STEEPLE analysis to a case or business decision.',
    'I can evaluate the usefulness and limitations of a STEEPLE analysis when appropriate.',

    'I can identify the purpose of a business plan.',
    'I can recognise the main components or information used in a business plan.',
    'I can use a business plan in an appropriate business context.',
    'I can interpret what a business plan shows about a business situation.',
    'I can apply a business plan to a case or business decision.',
    'I can evaluate the usefulness and limitations of a business plan when appropriate.',

    'I can identify the purpose of decision trees.',
    'I can recognise the main components or information used in decision trees.',
    'I can use decision trees in an appropriate business context.',
    'I can interpret what decision trees show about a business situation.',
    'I can apply decision trees to a case or business decision.',
    'I can evaluate the usefulness and limitations of decision trees when appropriate.',

    'I can identify the purpose of circular business models.',
    'I can recognise the main components or information used in circular business models.',
    'I can use circular business models in an appropriate business context.',
    'I can interpret what circular business models show about a business situation.',
    'I can apply circular business models to a case or business decision.',
    'I can evaluate the usefulness and limitations of circular business models when appropriate.',

    "I can identify the purpose of Porter's generic strategies. (HL only)",
    "I can recognise the main components or information used in Porter's generic strategies. (HL only)",
    "I can use Porter's generic strategies in an appropriate business context. (HL only)",
    "I can interpret what Porter's generic strategies show about a business situation. (HL only)",
    "I can apply Porter's generic strategies to a case or business decision. (HL only)",
    "I can evaluate the usefulness and limitations of Porter's generic strategies when appropriate. (HL only)",

    'I can identify the purpose of simple linear regression. (HL only)',
    'I can recognise the main components or information used in simple linear regression. (HL only)',
    'I can use simple linear regression in an appropriate business context. (HL only)',
    'I can interpret what simple linear regression shows about a business situation. (HL only)',
    'I can apply simple linear regression to a case or business decision. (HL only)',
    'I can evaluate the usefulness and limitations of simple linear regression when appropriate. (HL only)'
  ];

  window.SBL_LESSONS.IBBUSTOOLKIT = window.SBL_LESSONS.IBBUSTOOLKIT || {
    id: 'IBBUSTOOLKIT',
    title: 'Business Management Toolkit',
    challenge: {
      question: 'Can you use, interpret and evaluate every tool in the Business Management Toolkit?',
      intro: 'The Toolkit Challenge Tutor will pick one tool at a time — SWOT analysis, the Ansoff Matrix, STEEPLE analysis, a business plan, decision trees, circular business models, Porter’s generic strategies (HL only) or simple linear regression (HL only) — and ask you a direct question about identifying, using, interpreting, applying or evaluating it. Answer before it moves on to the next tool.',
      unitTitle: 'the Business Management Toolkit',
      checklistItems: TOOLKIT_CHECKLIST
    }
  };

})();
