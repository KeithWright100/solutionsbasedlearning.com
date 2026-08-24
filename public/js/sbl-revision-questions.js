/* SBL Revision — Full Past Paper Questions data.
   Loaded before sbl-revision.js on the Paper Questions page.

   Add topics/questions here. Each topic becomes one card on the Paper
   Questions page; each question within a topic is markable via the
   same "SBL PPQ Marker" bot used for lesson-level IB-Style Questions.

   Shape:
   window.SBL_REVISION_TOPICS.push({
     topic: 'Climate Change',
     questions: [
       {
         question: 'Full IB past paper question text goes here.',
         marks: 12,
         markScheme: 'Markbands / question-specific marking guidance goes here.'
       }
       // ...more questions for this topic
     ]
   });

   Starts empty on purpose — send over past paper content and it gets
   added here, topic by topic. */

window.SBL_REVISION_TOPICS = [];
