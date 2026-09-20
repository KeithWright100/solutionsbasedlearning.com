/* ============================================================
   SBL Revision — IB Geography Command Terms self-test

   Adds ONE synthetic "lesson" entry to window.SBL_LESSONS so the
   existing Test My Knowledge quiz machinery in sbl-teach-bot.js (the
   same self-marking multiple-choice engine used by every real lesson
   quiz on the site) can be reused as-is for a standalone command-terms
   quiz on the Geography Exam Tips page — no new backend or agent
   required, since Test My Knowledge is fully local/self-contained.

   Every question below tests the GENERIC meaning of an IB command
   term (the everyday instruction it gives a student — e.g. "compare"
   means point out similarities). These are original, dictionary-style
   descriptions written from general exam-technique knowledge, not
   copied or paraphrased from any IB command-terms glossary, subject
   guide or mark scheme, and they never reference any specific
   syllabus content, case study or exam question.

   Only Test My Knowledge is used on the Exam Tips page (not Teach Me
   Bot or Challenge Mode), so this lesson entry only needs .title and
   .quiz.

   Load order on the exam-tips page:
     <script src="/js/sbl-geography-command-terms.js"></script>
     <script src="/js/sbl-teach-bot.js"></script>
   ============================================================ */
(function () {

  window.SBL_LESSONS = window.SBL_LESSONS || {};

  window.SBL_LESSONS.GEOGCMDTERMS = window.SBL_LESSONS.GEOGCMDTERMS || {
    id: 'GEOGCMDTERMS',
    title: 'IB Geography Command Terms',
    quiz: [
      {
        q: 'In an IB Geography question, what does the command term "Classify" ask you to do?',
        options: ['Arrange things into groups or categories based on shared characteristics', 'Give the precise, accepted meaning of a term', 'Give reasons or causes for something', 'Weigh up strengths and weaknesses and reach a judgement'],
        correct: 0,
        explain: '"Classify" asks you to sort items into categories based on features they share — an AO1 knowledge-level task.',
        misconception: 'Classify is sometimes confused with Describe — classifying is about grouping, not describing features in detail.',
        tag: 'AO1'
      },
      {
        q: 'What is a "Define" question asking for?',
        options: ['A brief summary of the main points only', 'The precise, accepted meaning of a word or term', 'An approximate value based on evidence given', 'A judgement backed by evidence'],
        correct: 1,
        explain: '"Define" wants the exact, accepted meaning of a term — short and precise, with no extra explanation needed.',
        misconception: 'Students sometimes pad a definition with examples or explanation, when a tight, accurate statement of meaning is all that is required.',
        tag: 'AO1'
      },
      {
        q: 'A "Describe" question wants you to:',
        options: ['Break something into parts and show how they relate', 'State the main features or give a detailed account of what something is like, without saying why', 'Propose a possible explanation for an unfamiliar situation', 'Point out differences between two things'],
        correct: 1,
        explain: '"Describe" is about accurately portraying what something looks like or how it happens — not why it happens.',
        misconception: 'A common error is slipping into explanation (the "why") when a question only asks you to describe (the "what").',
        tag: 'AO1'
      },
      {
        q: 'What does "Determine" require?',
        options: ['Working out or identifying something precisely from the evidence or data given', 'A short answer with no supporting argument', 'A balanced review of different viewpoints', 'Picking out one named feature from a diagram'],
        correct: 0,
        explain: '"Determine" asks you to use the data or evidence in front of you to work something out or pin something down precisely.',
        misconception: 'Determine is sometimes treated as identical to Estimate, but Determine expects a precise, evidenced answer rather than an approximation.',
        tag: 'AO1'
      },
      {
        q: 'An "Estimate" question is asking you to:',
        options: ['Give an approximate value or judgement based on the information provided', 'Give the exact accepted meaning of a term', 'Sort items into categories', 'Justify a conclusion with evidence'],
        correct: 0,
        explain: '"Estimate" wants a sensible approximate figure or judgement drawn from the material given, not an exact calculation.',
        misconception: 'Some students think an estimate can be any guess — it must still be a reasonable figure grounded in the evidence provided.',
        tag: 'AO1'
      },
      {
        q: 'What is "Identify" asking for?',
        options: ['A detailed account of a process', 'Picking out and naming a specific feature, factor or trend from the evidence given', 'A comparison of two options', 'An argument weighing up more than one viewpoint'],
        correct: 1,
        explain: '"Identify" is a short, targeted task — naming the specific thing the question is pointing you towards.',
        misconception: 'Identify is often answered with too much detail; a precise, named answer is all that is needed.',
        tag: 'AO1'
      },
      {
        q: 'An "Outline" question wants:',
        options: ['A brief summary or overview of the main points, without detailed explanation', 'A full chain of reasoning linking cause to impact', 'A judgement on how significant something is', 'The differences between two processes'],
        correct: 0,
        explain: '"Outline" is a give a brief account or summary" instruction — main points only, not a developed explanation.',
        misconception: 'Outline is frequently over-answered with full explanation, when only a concise summary is being asked for.',
        tag: 'AO1'
      },
      {
        q: 'What does "State" require in an answer?',
        options: ['A short, precise answer with no supporting argument required', 'A balanced discussion of viewpoints', 'An approximate figure from a graph', 'A grouping of items by shared feature'],
        correct: 0,
        explain: '"State" wants a brief, accurate fact or point — nothing more is expected or rewarded.',
        misconception: 'Adding justification or explanation to a "state" answer wastes time without earning extra marks.',
        tag: 'AO1'
      },
      {
        q: 'What is an "Analyse" question really asking you to do?',
        options: ['Give a short factual answer', 'Break something down into its parts to show how they relate to each other and the bigger picture', 'Give the meaning of a term', 'List examples of a process'],
        correct: 1,
        explain: '"Analyse" is about taking something apart to examine how its components connect and what that means overall — more than describing what happened.',
        misconception: 'Analysis is sometimes confused with description — analysis must show relationships and reasoning, not just what is present.',
        tag: 'AO2'
      },
      {
        q: 'A "Distinguish" question wants you to:',
        options: ['Explain the difference(s) between two or more things, concepts or processes', 'Point out only the similarities between two things', 'Give an approximate value', 'Summarise the main points briefly'],
        correct: 0,
        explain: '"Distinguish" focuses specifically on making clear how two or more things differ from one another.',
        misconception: 'Distinguish is sometimes answered as if it were Compare — but distinguishing is about difference, not similarity.',
        tag: 'AO2'
      },
      {
        q: 'What does "Explain" ask for?',
        options: ['A named list of features', 'Reasons or causes for something, showing how or why it happens', 'A judgement on the value of something', 'A precise definition of a term'],
        correct: 1,
        explain: '"Explain" wants you to show the mechanism or reasoning behind something — the how and why, not just the what.',
        misconception: 'An "explain" answer that only describes what happens, without reasoning through why it happens, will miss significant credit.',
        tag: 'AO2'
      },
      {
        q: 'A "Suggest" question is asking you to:',
        options: ['State a fact with no justification', 'Propose a solution, hypothesis or explanation using your own knowledge and reasoning, often in an unfamiliar situation', 'Point out differences between two options', 'Weigh up two viewpoints and reach a judgement'],
        correct: 1,
        explain: '"Suggest" invites you to apply your knowledge and reasoning to propose a plausible idea, often where there is no single fixed answer.',
        misconception: 'Suggest is sometimes treated as requiring one "correct" answer, when a well-reasoned, plausible proposal is what is being rewarded.',
        tag: 'AO2'
      },
      {
        q: 'What does a "Compare" question want you to focus on?',
        options: ['The similarities between two or more things', 'The differences between two or more things', 'Both similarities and differences', 'An overall judgement on which is best'],
        correct: 0,
        explain: '"Compare" is specifically about identifying similarities between the things being examined.',
        misconception: 'Students often add differences to a "compare" answer out of habit — differences alone don\'t answer the question asked.',
        tag: 'AO3'
      },
      {
        q: 'What does "Compare and contrast" require, that a plain "Compare" does not?',
        options: ['Nothing extra — they mean exactly the same thing', 'Differences as well as similarities', 'A final recommendation', 'A precise calculation'],
        correct: 1,
        explain: '"Compare and contrast" explicitly wants both the similarities (compare) and the differences (contrast) covered.',
        misconception: 'Answering only with similarities (or only with differences) misses half of what "compare and contrast" is asking for.',
        tag: 'AO3'
      },
      {
        q: 'A "Contrast" question is asking you to focus on:',
        options: ['Similarities only', 'Differences between two or more things', 'A summary of the main points', 'An estimate of a value'],
        correct: 1,
        explain: '"Contrast" is the mirror of "Compare" — it wants the differences between the things being examined, not the similarities.',
        misconception: 'Contrast is sometimes muddled with Compare; keeping the two separate in your head (similar vs different) avoids answering the wrong question.',
        tag: 'AO3'
      },
      {
        q: 'What is a "Discuss" question looking for?',
        options: ['A single fact stated briefly', 'A balanced review of an issue, considering different viewpoints or arguments', 'A named list of factors', 'An approximate reading from a graph'],
        correct: 1,
        explain: '"Discuss" wants you to set out more than one side of an issue in a balanced way, rather than arguing for only one position.',
        misconception: 'A one-sided "discuss" answer, even if well argued, is missing the balance the command term is asking for.',
        tag: 'AO3'
      },
      {
        q: 'What does "Evaluate" ask you to do?',
        options: ['Weigh up the strengths and weaknesses, or make a judgement backed by evidence, about the value or significance of something', 'Give a brief factual summary', 'Sort information into categories', 'Point out only similarities'],
        correct: 0,
        explain: '"Evaluate" requires a supported judgement, made after weighing up evidence for and against — not just a description of both sides.',
        misconception: 'Listing pros and cons without a final, justified judgement leaves an "evaluate" answer incomplete.',
        tag: 'AO3'
      },
      {
        q: 'An "Examine" question wants you to:',
        options: ['State a fact briefly', 'Consider something in close detail, uncovering the assumptions and interrelationships underlying an issue', 'Estimate a value from a diagram', 'Define a key term'],
        correct: 1,
        explain: '"Examine" pushes you to look closely at what is really going on beneath the surface of an issue, including assumptions that are often left unstated.',
        misconception: 'Examine is sometimes answered at the same shallow level as Describe, missing the closer scrutiny the term is asking for.',
        tag: 'AO3'
      },
      {
        q: 'What does "Justify" require in an answer?',
        options: ['Valid reasons or evidence to support an answer or conclusion', 'A brief unsupported statement', 'A list of categories', 'A comparison with no judgement'],
        correct: 0,
        explain: '"Justify" wants you to back up a claim or conclusion with solid reasons or evidence, showing why it holds up.',
        misconception: 'Simply restating the conclusion more forcefully is not the same as justifying it with actual reasons or evidence.',
        tag: 'AO3'
      },
      {
        q: 'A "To what extent" question is asking you to:',
        options: ['Give a short, unsupported fact', 'Consider the merits of an argument or concept and reach an evidence-based conclusion about how far it is accurate, valid or significant', 'Sort items into groups', 'Give the dictionary meaning of a term'],
        correct: 1,
        explain: '"To what extent" wants a genuine judgement of degree — how far something is true, significant or valid — supported by evidence, not just a yes/no answer.',
        misconception: 'Treating "to what extent" as a simple yes/no question misses the graded judgement the command term is actually asking for.',
        tag: 'AO3'
      }
    ]
  };

})();
