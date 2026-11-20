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
        options: ['Arrange things into groups based on shared characteristics', 'Give the precise, accepted meaning of a term or concept', 'Give reasons or causes for something, showing how it happens', 'Weigh up strengths and weaknesses, then reach a judgement'],
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
        options: ['Break something into parts and show how those parts relate to each other', 'Give the main features of what something is like, without saying why', 'Propose a possible explanation for an unfamiliar situation or problem', 'Point out the differences between two things, concepts or processes'],
        correct: 1,
        explain: '"Describe" is about accurately portraying what something looks like or how it happens — not why it happens.',
        misconception: 'A common error is slipping into explanation (the "why") when a question only asks you to describe (the "what").',
        tag: 'AO1'
      },
      {
        q: 'What does "Determine" require?',
        options: ['Work out or identify something precisely from the evidence or data', 'Give a short answer with no supporting argument, data or explanation of any kind', 'Give a balanced review of different viewpoints on an issue', 'Pick out one named feature from a diagram, map or photo'],
        correct: 0,
        explain: '"Determine" asks you to use the data or evidence in front of you to work something out or pin something down precisely.',
        misconception: 'Determine is sometimes treated as identical to Estimate, but Determine expects a precise, evidenced answer rather than an approximation.',
        tag: 'AO1'
      },
      {
        q: 'An "Estimate" question is asking you to:',
        options: ['Give an approximate value or judgement from the information given', 'Give the exact, accepted meaning of a geographical term', 'Sort a set of items into categories based on shared features', 'Justify a conclusion with detailed evidence from case studies'],
        correct: 0,
        explain: '"Estimate" wants a sensible approximate figure or judgement drawn from the material given, not an exact calculation.',
        misconception: 'Some students think an estimate can be any guess — it must still be a reasonable figure grounded in the evidence provided.',
        tag: 'AO1'
      },
      {
        q: 'What is "Identify" asking for?',
        options: ['Give a detailed account of how a process works, step by step', 'Pick out and name a specific feature, factor or trend from the evidence', 'Compare two options and say which one is better and why', 'Weigh up more than one viewpoint and reach a judgement'],
        correct: 1,
        explain: '"Identify" is a short, targeted task — naming the specific thing the question is pointing you towards.',
        misconception: 'Identify is often answered with too much detail; a precise, named answer is all that is needed.',
        tag: 'AO1'
      },
      {
        q: 'An "Outline" question wants:',
        options: ['A brief summary of the main points, without detailed explanation', 'A full chain of reasoning linking a cause to its impacts', 'A judgement on how significant something is, supported with evidence', 'The differences between two processes, explained in detail'],
        correct: 0,
        explain: '"Outline" is a give a brief account or summary" instruction — main points only, not a developed explanation.',
        misconception: 'Outline is frequently over-answered with full explanation, when only a concise summary is being asked for.',
        tag: 'AO1'
      },
      {
        q: 'What does "State" require in an answer?',
        options: ['A short, precise answer with no supporting argument required', 'A balanced discussion of different viewpoints on an issue', 'An approximate figure read from a graph or map', 'A grouping of items by a feature they share'],
        correct: 0,
        explain: '"State" wants a brief, accurate fact or point — nothing more is expected or rewarded.',
        misconception: 'Adding justification or explanation to a "state" answer wastes time without earning extra marks.',
        tag: 'AO1'
      },
      {
        q: 'What is an "Analyse" question really asking you to do?',
        options: ['Give a short, factual answer with no explanation or supporting argument', 'Break something into its parts to show how they relate to each other', 'Give the precise, accepted meaning of a term or geographical concept', 'List examples of a process from case studies you have learned'],
        correct: 1,
        explain: '"Analyse" is about taking something apart to examine how its components connect and what that means overall — more than describing what happened.',
        misconception: 'Analysis is sometimes confused with description — analysis must show relationships and reasoning, not just what is present.',
        tag: 'AO2'
      },
      {
        q: 'A "Distinguish" question wants you to:',
        options: ['Explain the differences between two or more things or processes', 'Point out only the similarities between two things or processes', 'Give an approximate value from a graph, table or map', 'Summarise the main points briefly, without explanation'],
        correct: 0,
        explain: '"Distinguish" focuses specifically on making clear how two or more things differ from one another.',
        misconception: 'Distinguish is sometimes answered as if it were Compare — but distinguishing is about difference, not similarity.',
        tag: 'AO2'
      },
      {
        q: 'What does "Explain" ask for?',
        options: ['A named list of features, without any explanation', 'Reasons or causes for something, showing how or why it happens', 'A judgement on the value or importance of something, using evidence', 'A precise definition of a key term or concept'],
        correct: 1,
        explain: '"Explain" wants you to show the mechanism or reasoning behind something — the how and why, not just the what.',
        misconception: 'An "explain" answer that only describes what happens, without reasoning through why it happens, will miss significant credit.',
        tag: 'AO2'
      },
      {
        q: 'A "Suggest" question is asking you to:',
        options: ['State a fact with no justification or supporting evidence', 'Propose a solution, hypothesis or explanation, often for an unfamiliar situation', 'Point out the differences between two options or viewpoints', 'Weigh up two viewpoints and reach a supported judgement'],
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
        options: ['Similarities between two or more things', 'Differences between two or more things', 'A brief summary of the main points', 'An estimate of a value from data'],
        correct: 1,
        explain: '"Contrast" is the mirror of "Compare" — it wants the differences between the things being examined, not the similarities.',
        misconception: 'Contrast is sometimes muddled with Compare; keeping the two separate in your head (similar vs different) avoids answering the wrong question.',
        tag: 'AO3'
      },
      {
        q: 'What is a "Discuss" question looking for?',
        options: ['A single fact, stated briefly and without evidence', 'A balanced review of an issue, considering different viewpoints', 'A named list of factors, without any explanation of how they work', 'An approximate reading taken from a graph or a table'],
        correct: 1,
        explain: '"Discuss" wants you to set out more than one side of an issue in a balanced way, rather than arguing for only one position.',
        misconception: 'A one-sided "discuss" answer, even if well argued, is missing the balance the command term is asking for.',
        tag: 'AO3'
      },
      {
        q: 'What does "Evaluate" ask you to do?',
        options: ['Weigh strengths and weaknesses, or judge the value of something with evidence', 'Give a brief factual summary of the main points of a topic or case study you have learned', 'Sort information into categories and label each category clearly', 'Point out only the similarities between two places, processes or ideas'],
        correct: 0,
        explain: '"Evaluate" requires a supported judgement, made after weighing up evidence for and against — not just a description of both sides.',
        misconception: 'Listing pros and cons without a final, justified judgement leaves an "evaluate" answer incomplete.',
        tag: 'AO3'
      },
      {
        q: 'An "Examine" question wants you to:',
        options: ['State a fact briefly, with no detail or explanation needed', 'Consider something closely, uncovering its assumptions and links', 'Estimate a value from a graph, map or other diagram', 'Give the precise, accepted definition of a key term'],
        correct: 1,
        explain: '"Examine" pushes you to look closely at what is really going on beneath the surface of an issue, including assumptions that are often left unstated.',
        misconception: 'Examine is sometimes answered at the same shallow level as Describe, missing the closer scrutiny the term is asking for.',
        tag: 'AO3'
      },
      {
        q: 'What does "Justify" require in an answer?',
        options: ['Valid reasons or evidence to support an answer or conclusion', 'A brief statement given without any reasons or evidence', 'A list of categories with examples of each one', 'A comparison of two things with no final judgement'],
        correct: 0,
        explain: '"Justify" wants you to back up a claim or conclusion with solid reasons or evidence, showing why it holds up.',
        misconception: 'Simply restating the conclusion more forcefully is not the same as justifying it with actual reasons or evidence.',
        tag: 'AO3'
      },
      {
        q: 'A "To what extent" question is asking you to:',
        options: ['Give a short, unsupported fact about a topic or case study', 'Consider the merits of an argument and reach an evidence-based conclusion', 'Sort a set of items into groups using their shared characteristics or features', 'Give the dictionary meaning of a key term, with an example'],
        correct: 1,
        explain: '"To what extent" wants a genuine judgement of degree — how far something is true, significant or valid — supported by evidence, not just a yes/no answer.',
        misconception: 'Treating "to what extent" as a simple yes/no question misses the graded judgement the command term is actually asking for.',
        tag: 'AO3'
      }
    ]
  };

})();
