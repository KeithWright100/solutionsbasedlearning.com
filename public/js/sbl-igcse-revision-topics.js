/* ============================================================
   SBL IGCSE Revision — Topic Revision Guides
   Mirrors sbl-revision-topics.js (used for the IB Geography Learning
   Hub), but for Edexcel IGCSE Geography topics. IGCSE lesson pages
   don't yet have their own per-lesson multiple-choice quiz banks to
   pool from the way IB lessons do, so each IGCSE topic here carries
   its own self-authored question bank directly, and a fresh random
   set is drawn from that bank on every attempt.

   Adds one synthetic "lesson" entry to window.SBL_LESSONS per IGCSE
   topic, so the existing Teach Me Bot / Test My Knowledge / Challenge
   Mode modal machinery in sbl-teach-bot.js can be reused as-is.

   Load order on an IGCSE revision topic page:
     <script src="/js/sbl-igcse-revision-topics.js"></script>
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

  /* Re-samples a fresh random set of `count` questions from a topic's
     full question bank (lesson._questionBank) and assigns it to the
     revision lesson's .quiz. Shared by both entry points below so the
     modal's own "Test My Knowledge" button (inside Teach Me Bot) and
     the page's standalone quiz button always agree on the question
     count. Falls back to the whole bank if it has fewer than `count`
     questions. */
  function resampleTopicQuiz(revisionLessonId, count) {
    var lesson = window.SBL_LESSONS && window.SBL_LESSONS[revisionLessonId];
    if (!lesson || !lesson._questionBank) return;
    var n = Math.min(count || 20, lesson._questionBank.length);
    lesson.quiz = shuffle(lesson._questionBank).slice(0, n);
  }

  /* Entry point: standalone "Test My Knowledge" card on the revision
     topic page — re-samples then jumps straight into the quiz. */
  window.sblStartIgcseTopicQuiz = function (revisionLessonId, count) {
    resampleTopicQuiz(revisionLessonId, count);
    window.openTestMyKnowledge(revisionLessonId);
  };

  /* Entry point: "Teach Me Bot" card on the revision topic page —
     re-samples first so that if the student launches the quiz from
     *inside* the Teach Bot modal instead, it's still a fresh random
     set of `count` questions, and the modal's own question-count text
     (driven by lesson.quiz.length) reads correctly. */
  window.sblOpenIgcseTopicTeachBot = function (revisionLessonId, count) {
    resampleTopicQuiz(revisionLessonId, count);
    window.openTeachBot(revisionLessonId);
  };

  window.SBL_LESSONS = window.SBL_LESSONS || {};

  /* ---------------- Topic 2: Coastal Environments ---------------- */

  var CE_UNIT_TITLE = 'Topic 2: Coastal Environments';

  var CE_CHECKLIST = [
    'I can explain wave action as a marine process operating on the coast.',
    'I can explain erosion as a marine process operating on the coast.',
    'I can explain deposition as a marine process operating on the coast.',
    'I can explain transportation along the coast, including longshore drift.',
    'I can explain mechanical weathering on the coast.',
    'I can explain chemical weathering on the coast.',
    'I can explain biological weathering on the coast.',
    'I can explain mass movement on the coast, including sliding and slumping.',
    'I can explain how geology influences coastal environments and landforms.',
    'I can explain how vegetation influences coastal environments.',
    'I can explain how people influence coastal environments.',
    'I can explain how sea-level change influences coastal environments.',
    'I can explain how erosional and depositional processes form headlands and bays.',
    'I can explain how cliffs and wave-cut platforms develop.',
    'I can explain how caves, arches, stacks and stumps develop.',
    'I can explain how beaches develop.',
    'I can explain how spits develop.',
    'I can explain how bars develop.',
    'I can describe the global distribution of coral reefs.',
    'I can describe the main features of coral reef ecosystems.',
    'I can describe the global distribution of mangroves.',
    'I can describe the main features of mangrove ecosystems.',
    'I can describe the distribution and features of sand dune ecosystems.',
    'I can describe the distribution and features of salt marsh ecosystems.',
    'I can describe the abiotic characteristics of one named coastal ecosystem.',
    'I can describe the biotic characteristics of one named coastal ecosystem.',
    'I can explain how small-scale coastal ecosystems are threatened by people and their activities.',
    'I can explain how large-scale coastal ecosystems are threatened by people and their activities.',
    'I can explain how industrialisation can threaten coastal ecosystems.',
    'I can explain how agricultural practices can threaten coastal ecosystems.',
    'I can explain how tourism can threaten coastal ecosystems.',
    'I can explain how deforestation can threaten coastal ecosystems.',
    'I can identify a coastal management case study in a developed country.',
    'I can identify a coastal management case study in a developing country or an emerging country.',
    'For each case study, I can identify the location and the coastal problems being managed.',
    'For each case study, I can explain the management strategies used.',
    'For each case study, I can assess the successes and limitations of the management.',
    'I can explain why coastal environments are important to people.',
    'I can explain why coastal environments need to be managed sustainably.',
    'I can explain why conflicts can occur between different users of the coast.',
    'I can compare conservation and development viewpoints in coastal management.',
    'I can explain the causes of coastal flooding from storm surges.',
    'I can explain the causes of coastal flooding from tsunamis.',
    'I can explain how climate change can increase coastal flooding risk.',
    'I can explain how forecasting can help predict and reduce the impacts of coastal flooding.',
    'I can explain how building design can reduce the impacts of coastal flooding.',
    'I can explain how planning can reduce the impacts of coastal flooding.',
    'I can explain how education can reduce the impacts of coastal flooding.',
    'I can explain beach replenishment as a soft-engineering strategy.',
    'I can explain cliff regrading as a soft-engineering strategy.',
    'I can explain ecosystem rehabilitation and revegetation as a soft-engineering strategy.',
    'I can explain managed retreat as a soft-engineering strategy.',
    'I can explain groynes as a hard-engineering strategy.',
    'I can explain revetments as a hard-engineering strategy.',
    'I can explain sea walls as a hard-engineering strategy.',
    'I can explain gabions and riprap as hard-engineering strategies.',
    'I can explain shoreline management plans.',
    'I can compare the advantages and disadvantages of different coastal management strategies.'
  ];

  var CE_QUESTION_BANK = [
    { q: 'Which type of wave is associated with erosion on the coast — steep, high frequency, and formed by local strong winds?', options: ['Constructive wave', 'Destructive wave', 'Tidal wave', 'Longshore wave'], correct: 1, explain: 'Destructive waves are steep, high energy and high frequency (10–14 per minute), with a strong backwash that removes material from the beach, causing erosion.', misconception: 'Constructive waves are often confused with destructive waves; constructive waves are low, long and low frequency, with a strong swash that builds up beaches through deposition.', tag: 'Wave types' },
    { q: 'Which erosional process describes air being compressed into cracks in a cliff face, then expanding explosively as waves retreat?', options: ['Abrasion', 'Attrition', 'Hydraulic action', 'Solution'], correct: 2, explain: 'Hydraulic action is the sheer force of waves crashing against the coastline, including the compression and explosive release of trapped air in cracks and joints.', misconception: 'Abrasion (corrasion) is when sediment carried by waves scrapes and grinds against the coastline like sandpaper — a distinct process from hydraulic action.', tag: 'Erosion processes' },
    { q: 'Which erosional process wears down the size of rock particles themselves as they collide with each other?', options: ['Abrasion', 'Attrition', 'Solution', 'Hydraulic action'], correct: 1, explain: 'Attrition happens when rock particles being transported collide with each other, breaking off fragments and becoming smaller and more rounded over time.', misconception: 'Abrasion wears down the coastline itself using transported material as a tool, while attrition wears down the transported material.', tag: 'Erosion processes' },
    { q: 'Which type of transportation moves the smallest, lightest sediment, carried within the body of the water?', options: ['Traction', 'Saltation', 'Suspension', 'Solution'], correct: 2, explain: 'Suspension carries small, light particles such as silt and clay within the flow of water rather than along the bed.', misconception: 'Saltation involves particles bouncing along the sea bed, and traction involves the largest particles being rolled or dragged along the bed — both are distinct from material suspended in the water itself.', tag: 'Transportation' },
    { q: 'Longshore drift moves sediment along a beach in a zig-zag pattern mainly because of:', options: ['The angle of the prevailing wind and swash', 'Tidal range alone', 'Wave height alone', 'River discharge into the sea'], correct: 0, explain: 'Swash moves up the beach at the angle of the prevailing wind, while backwash returns straight down the beach under gravity, creating a zig-zag movement of sediment known as longshore drift.', misconception: 'Longshore drift is driven by the angle of approaching waves and wind, not simply by tidal range or wave height on their own.', tag: 'Longshore drift' },
    { q: 'Freeze-thaw weathering is an example of which type of weathering?', options: ['Chemical', 'Biological', 'Mechanical', 'Marine'], correct: 2, explain: 'Freeze-thaw weathering is mechanical (physical) weathering, where water enters cracks, freezes and expands, widening the crack until the rock eventually breaks apart.', misconception: 'Chemical weathering involves a chemical reaction changing the rock’s composition (e.g. carbonation), which is different from the physical breakdown caused by freeze-thaw.', tag: 'Weathering' },
    { q: 'Which landform forms where a resistant band of rock creates a protruding coastline, with bays forming in the softer rock either side?', options: ['Spit', 'Headland and bay', 'Wave-cut platform', 'Bar'], correct: 1, explain: 'Differential erosion, where softer rock erodes faster than more resistant rock, creates headlands (resistant rock) and bays (softer rock eroded into a curve) along a coastline.', misconception: 'A wave-cut platform is the gently sloping rocky surface left behind as a cliff retreats — a different, related landform.', tag: 'Erosional landforms' },
    { q: 'What is the correct sequence of landform development caused by erosion of a headland?', options: ['Stack, arch, cave, stump', 'Cave, arch, stack, stump', 'Stump, cave, arch, stack', 'Arch, cave, stump, stack'], correct: 1, explain: 'Waves first exploit weaknesses to form a cave, which may be eroded through to form an arch; the arch’s roof eventually collapses to leave an isolated stack, which is further eroded down to a stump.', misconception: 'It’s easy to reverse the order — remember erosion works progressively from a crack/cave through to the final remnant, a stump.', tag: 'Erosional landforms' },
    { q: 'A spit is a depositional landform that forms where:', options: ['The coastline changes direction and longshore drift continues to deposit material out into open water', 'Two headlands are joined together by a continuous ridge of sediment', 'A river deposits sediment at its mouth', 'Waves erode a headland into two separate stacks'], correct: 0, explain: 'A spit forms where longshore drift transports sediment past a change in coastline direction (such as a river mouth), depositing it in open water and building a narrow ridge that often curves at the end due to a secondary wind/wave direction.', misconception: 'A bar, not a spit, is what forms when a ridge of sediment grows all the way across a bay to join two headlands, trapping a lagoon behind it.', tag: 'Depositional landforms' },
    { q: 'Coral reefs are mostly found:', options: ['In cold, deep waters near the poles', 'In warm, shallow, clear tropical waters', 'Along temperate mudflats', 'In freshwater river estuaries'], correct: 1, explain: 'Coral reefs need warm water (around 23–29°C) and shallow, clear water so sunlight can reach the symbiotic algae (zooxanthellae) living within the coral polyps.', misconception: 'Coral relies on sunlight for its algae to photosynthesise, so it cannot survive in deep, cold or turbid (cloudy) water.', tag: 'Coral reefs' },
    { q: 'Mangrove ecosystems are best adapted to survive in:', options: ['Freshwater mountain streams', 'Saline, waterlogged, low-oxygen coastal mud', 'Dry, sandy deserts', 'Cold rocky shorelines'], correct: 1, explain: 'Mangroves have adaptations such as stilt/prop roots and pneumatophores (breathing roots) that let them survive in salty, waterlogged, oxygen-poor tidal mud found on tropical and subtropical coastlines.', misconception: 'Mangroves are salt-tolerant (halophytic) specialists; they are not found in freshwater or desert environments.', tag: 'Mangroves' },
    { q: 'On a sand dune system, succession typically progresses from the sea inland in which order?', options: ['Climax dune, embryo dune, yellow dune', 'Embryo dune, yellow dune, climax dune', 'Yellow dune, embryo dune, climax dune', 'Climax dune, yellow dune, embryo dune'], correct: 1, explain: 'Dune succession moves from newly formed embryo dunes near the sea, through yellow (and grey) dunes as vegetation and soil develop, to a mature climax dune community furthest from the sea.', misconception: 'It’s easy to reverse the sequence — remember succession moves away from the sea as conditions become more stable and less exposed to salt and wind.', tag: 'Sand dune ecosystems' },
    { q: 'Salt marshes are dominated by vegetation that is:', options: ['Intolerant of any salt water', 'Halophytic (salt-tolerant)', 'Found only in freshwater lakes', 'Entirely made up of coral'], correct: 1, explain: 'Salt marshes form on sheltered, low-energy coastlines where mud accumulates; the vegetation there is halophytic, meaning it is specially adapted to tolerate regular flooding by salt water.', misconception: 'Salt marsh vegetation must tolerate, not avoid, regular exposure to salt water and waterlogged mud.', tag: 'Salt marsh ecosystems' },
    { q: 'Which human activity is most directly associated with the large-scale destruction of mangrove ecosystems for shrimp/prawn farming?', options: ['Deforestation', 'Coral bleaching', 'Longshore drift', 'Freeze-thaw weathering'], correct: 0, explain: 'Large areas of mangrove forest have been cleared (deforested) worldwide, especially in South-East Asia, to create ponds for commercial shrimp and prawn farming (aquaculture).', misconception: 'Coral bleaching is a threat to coral reef ecosystems caused by rising sea temperatures, not the clearing of mangrove forest for aquaculture.', tag: 'Threats to ecosystems' },
    { q: 'Coastal tourism can threaten ecosystems such as coral reefs mainly through:', options: ['Increased river discharge', 'Physical damage from divers/boats and pollution from resorts', 'Freeze-thaw weathering', 'Longshore drift reversing direction'], correct: 1, explain: 'Tourism can damage coral reefs through physical contact (diving, boat anchors) and through pollution and sewage from coastal hotels and resorts, which can harm sensitive marine ecosystems.', misconception: 'Freeze-thaw weathering and longshore drift are physical coastal processes, not human threats linked to tourism.', tag: 'Threats to ecosystems' },
    { q: 'Agricultural practices can threaten coastal ecosystems mainly by:', options: ['Fertiliser and pesticide run-off causing pollution and eutrophication', 'Increasing wave energy directly', 'Causing sea-level rise directly', 'Reducing longshore drift'], correct: 0, explain: 'Agricultural run-off carrying fertilisers and pesticides into rivers and the sea can cause eutrophication and pollution, harming sensitive coastal ecosystems such as coral reefs and mangroves.', misconception: 'Agriculture is a source of chemical/nutrient pollution reaching the coast via run-off and rivers, not a driver of wave energy or sea-level change itself.', tag: 'Threats to ecosystems' },
    { q: 'When comparing coastal management case studies, why might a developing or emerging country rely more on soft-engineering or low-cost strategies than a developed country?', options: ['Because sea levels are lower in developing countries', 'Because of limited funding and resources compared with a developed country', 'Because they experience no coastal hazards', 'Because hard engineering is banned worldwide'], correct: 1, explain: 'Developing and emerging countries often have less funding and infrastructure capacity, so they may rely more on cheaper, soft-engineering or community-based approaches, whereas developed countries can often afford large-scale hard-engineering schemes.', misconception: 'The choice of strategy comes down to relative funding, expertise and resources, not the physical scale of sea-level rise or a global ban on any one approach.', tag: 'Case studies' },
    { q: 'In a coastal management case study, what should you be able to identify about the location?', options: ['Only the country’s population size', 'The specific place and the coastal problems being managed there', 'The country’s main exports', 'The average national income only'], correct: 1, explain: 'A good case study identifies the specific location and explains the particular coastal problems (e.g. erosion, flooding) that management strategies are trying to address there.', misconception: 'Case study knowledge needs to be specific and located, not just general national statistics unrelated to the coastal issue itself.', tag: 'Case studies' },
    { q: 'When assessing the success of a coastal management case study, you should consider:', options: ['Only how expensive the scheme was', 'The successes and limitations of the strategies used', 'Only how popular the scheme was with tourists', 'Only the age of the scheme'], correct: 1, explain: 'A strong evaluation of a coastal management case study weighs up both the successes (what worked well) and the limitations (what didn’t work, or unintended consequences) of the strategies used.', misconception: 'A one-sided answer that only lists benefits or only lists costs is not a full assessment; both successes and limitations should be considered together.', tag: 'Case studies' },
    { q: 'Coastal environments are important to people mainly because they provide:', options: ['No economic value', 'Opportunities such as fishing, tourism, trade and settlement', 'Only recreational value', 'Only a source of freshwater'], correct: 1, explain: 'Coastal environments are important because they support many human activities, including fishing, tourism, trade/ports and settlement, as well as providing natural resources and ecosystem services.', misconception: 'Coastlines provide a wide range of economic, social and environmental value, not just one narrow use.', tag: 'Importance of coasts' },
    { q: 'Conflict can occur between different users of the coast because:', options: ['All coastal users always want exactly the same thing', 'Groups such as tourists, fishers, developers and conservationists often have competing priorities for the same space', 'The coast is legally owned by only one group', 'There is no competition for coastal space'], correct: 1, explain: 'Conflicts arise because different users, such as tourism developers, fishing communities and conservation groups, often want to use or protect the same limited coastal space in different, sometimes incompatible, ways.', misconception: 'Coastal conflict comes from competing priorities over shared, limited space, not from a single legal owner controlling the coast.', tag: 'Conflict and management viewpoints' },
    { q: 'A ‘conservation’ viewpoint on coastal management is most likely to prioritise:', options: ['Maximising short-term economic development', 'Protecting natural ecosystems and long-term sustainability', 'Building as many hotels as possible', 'Removing all natural vegetation'], correct: 1, explain: 'A conservation viewpoint tends to prioritise protecting natural coastal ecosystems and their long-term sustainability, sometimes limiting or restricting development to achieve this.', misconception: 'A development viewpoint, not a conservation one, tends to prioritise short-term economic growth, even where this may risk long-term environmental damage.', tag: 'Conflict and management viewpoints' },
    { q: 'Coastal flooding from a storm surge is mainly caused by:', options: ['A large underwater earthquake', 'Low pressure and strong onshore winds pushing sea water towards the coast', 'Freeze-thaw weathering', 'Longshore drift reversing'], correct: 1, explain: 'A storm surge is caused by low atmospheric pressure (raising sea level) combined with strong onshore winds pushing water towards the coast, often during severe storms.', misconception: 'A tsunami, not a storm surge, is typically triggered by an underwater earthquake or other seismic/volcanic event.', tag: 'Coastal flooding causes' },
    { q: 'Coastal flooding from a tsunami is most commonly caused by:', options: ['Heavy rainfall inland', 'An undersea earthquake, volcanic eruption or landslide displacing a large volume of water', 'Strong onshore winds', 'High tide alone'], correct: 1, explain: 'Tsunamis are usually triggered by a sudden displacement of water, most commonly from an undersea earthquake, but also possibly from volcanic eruptions or submarine landslides.', misconception: 'A storm surge, not a tsunami, is linked to weather conditions such as strong onshore winds and low pressure.', tag: 'Coastal flooding causes' },
    { q: 'Climate change is likely to increase the risk of coastal flooding mainly because it:', options: ['Reduces sea levels globally', 'Causes sea-level rise and more frequent/intense storms', 'Stops all erosion', 'Reduces rainfall everywhere'], correct: 1, explain: 'Climate change contributes to rising sea levels (through thermal expansion and melting ice) and can increase the frequency and intensity of storms, both of which raise the risk of coastal flooding.', misconception: 'Climate change is linked to rising, not falling, sea levels, and to more, not less, extreme weather in many coastal regions.', tag: 'Climate change and coastal flooding' },
    { q: 'Which of the following is an example of a ‘soft-engineering’ strategy for managing coastal flooding or erosion?', options: ['Sea wall', 'Beach replenishment', 'Rock armour (riprap)', 'Groynes'], correct: 1, explain: 'Beach replenishment (also called beach nourishment) is a soft-engineering strategy that adds sand or shingle to a beach to build it up naturally, working with coastal processes rather than hard structures.', misconception: 'Sea walls, rock armour and groynes are all examples of hard-engineering strategies, which use artificial structures rather than working with natural processes.', tag: 'Soft engineering' },
    { q: 'Managed retreat as a coastal management strategy involves:', options: ['Building the highest possible sea wall', 'Allowing the coastline to retreat naturally in some areas, often relocating people/infrastructure away from risk', 'Permanently reclaiming land from the sea', 'Banning all human use of the coast'], correct: 1, explain: 'Managed retreat is a soft-engineering strategy that allows the coastline to move inland naturally in low-value areas, sometimes with breached defences, and may involve relocating people and infrastructure to reduce long-term risk and cost.', misconception: 'Managed retreat is about strategically stepping back from the coast in lower-priority areas, not about building the strongest possible defences everywhere.', tag: 'Soft engineering' },
    { q: 'Which of the following is an example of a ‘hard-engineering’ strategy?', options: ['Ecosystem rehabilitation', 'Cliff regrading', 'Groynes', 'Managed retreat'], correct: 2, explain: 'Groynes are wooden or rock structures built out from the beach to trap sediment moved by longshore drift, making them a hard-engineering strategy.', misconception: 'Ecosystem rehabilitation, cliff regrading and managed retreat are all soft-engineering approaches that work with natural processes rather than using rigid artificial structures.', tag: 'Hard engineering' },
    { q: 'Gabions and riprap are both examples of coastal defences that work by:', options: ['Absorbing wave energy using rock or wire-mesh cages of stone at the base of a cliff or beach', 'Planting vegetation to stabilise sand dunes', 'Relocating buildings away from the coast', 'Adding sand to a beach'], correct: 0, explain: 'Riprap (rock armour) is loose boulders piled at the base of a cliff or sea wall, and gabions are wire-mesh cages filled with rocks; both absorb and dissipate wave energy to reduce erosion.', misconception: 'Vegetation planting, relocation and beach nourishment are different, generally softer, strategies rather than rock/gabion-based hard defences.', tag: 'Hard engineering' },
    { q: 'A Shoreline Management Plan (SMP) is best described as:', options: ['A single fixed sea wall built along an entire coastline', 'A document setting out a long-term strategy for managing coastal risks along a stretch of coast, considering options like hold the line or managed retreat', 'A ban on any coastal development', 'A plan only for managing coral reefs'], correct: 1, explain: 'A Shoreline Management Plan sets out a long-term policy for a length of coastline, weighing options such as hold the line, advance the line, managed retreat, or no active intervention, based on the value and risk of different areas.', misconception: 'An SMP is a planning document covering a whole strategy for a stretch of coast, not a single physical structure or a blanket ban on development.', tag: 'Shoreline management plans' }
  ];

  window.SBL_LESSONS.IGCSTREV = {
    id: 'IGCSTREV',
    title: 'Coastal Environments — Full Topic Revision',
    syllabusFocus: 'The whole of Edexcel IGCSE Geography Paper 1, Topic 2: Coastal Environments — coastal processes and characteristic landforms, distinctive coastal ecosystems, coastal management case studies, and the importance, hazards and sustainable management of coastal environments.',
    starterButtons: [
      { label: 'Overview of the whole topic', request: 'Give me a full overview of Topic 2: Coastal Environments, covering coastal processes, ecosystems, case studies and coastal management.' },
      { label: 'Erosion and landforms', request: 'Explain the main processes of erosion and transportation on the coast, and how they create erosional landforms like headlands, caves, arches, stacks and stumps.' },
      { label: 'Depositional landforms', request: 'Explain how beaches, spits and bars form through deposition and longshore drift.' },
      { label: 'Coastal ecosystems', request: 'Compare the distribution and features of two coastal ecosystems, such as coral reefs and mangroves, and explain how they are threatened.' },
      { label: 'Coastal flooding', request: 'Explain the causes of coastal flooding from storm surges and tsunamis, and how climate change increases the risk.' },
      { label: 'Coastal management', request: 'Compare hard-engineering and soft-engineering strategies for managing coastal erosion and flooding.' },
      { label: 'Help me plan an answer', request: 'Help me plan an answer comparing the successes and limitations of a coastal management case study in a developed country with one in a developing or emerging country.' }
    ],
    checklist: CE_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Coastal Environments checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this topic — for example, “Explain how a spit forms.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: CE_UNIT_TITLE,
      checklistItems: CE_CHECKLIST
    },
    _questionBank: CE_QUESTION_BANK,
    quiz: CE_QUESTION_BANK.slice(0, 20)
  };

})();
