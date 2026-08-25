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
         markScheme: 'Markbands / question-specific marking guidance goes here.',
         // Optional — leave out entirely if the question has no resource.
         // One entry per photo/graph/map/table that belongs to this question.
         // src is the site path to the image file (see the images/ folder
         // convention noted in the deploy notes) — e.g. an image saved at
         // public/images/revision-ppq/climate-change/2019-may-fig1.jpg is
         // referenced here as '/images/revision-ppq/climate-change/2019-may-fig1.jpg'.
         images: [
           { src: '/images/revision-ppq/climate-change/2019-may-fig1.jpg',
             alt: 'Line graph showing global mean temperature anomaly, 1950-2020',
             caption: 'Figure 1' }
         ]
       }
       // ...more questions for this topic
     ]
   });

   Starts empty on purpose — send over past paper content and it gets
   added here, topic by topic. */

window.SBL_REVISION_TOPICS = [];
