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

  /* ---------------- Topic 3: Hazardous Environments ---------------- */

  var HAZ_UNIT_TITLE = 'Topic 3: Hazardous Environments';

  var HAZ_CHECKLIST = [
    'I can define a natural hazard.',
    'I can identify the main characteristics of tropical cyclones.',
    'I can describe the global distribution of tropical cyclones.',
    'I can explain how the strength of tropical cyclones is measured.',
    'I can identify the main characteristics of earthquakes.',
    'I can describe the global distribution of earthquakes.',
    'I can explain how earthquake magnitude and/or intensity is measured.',
    'I can identify the main characteristics of volcanic hazards.',
    'I can describe the global distribution of volcanoes.',
    'I can explain how volcanic activity is measured or monitored.',
    'I can explain how warm ocean temperatures contribute to tropical cyclone formation.',
    'I can explain the role of atmospheric pressure in tropical cyclone formation.',
    'I can explain how wind shear affects tropical cyclone formation and development.',
    'I can explain the role of the Coriolis force in tropical cyclone formation.',
    'I can explain how plate boundaries cause earthquake hazards.',
    'I can explain how plate boundaries cause volcanic hazards.',
    'I can explain how hotspots can produce volcanic hazards.',
    'I can explain why some people continue to live in areas at risk from natural hazards.',
    'I can explain how physical factors can make some countries more vulnerable to natural hazards.',
    'I can explain how social factors can make some countries more vulnerable to natural hazards.',
    'I can explain how economic factors can make some countries more vulnerable to natural hazards.',
    'I can describe the short-term impacts of one named earthquake.',
    'I can describe the longer-term impacts of one named earthquake.',
    'I can describe the short-term impacts of one named volcanic eruption.',
    'I can describe the longer-term impacts of one named volcanic eruption.',
    'I can describe the short-term impacts of one named tropical cyclone.',
    'I can describe the longer-term impacts of one named tropical cyclone.',
    'I can identify a case study of earthquake hazard management in a developed country.',
    'I can identify a case study of earthquake hazard management in a developing country or an emerging country.',
    'For each earthquake case study, I can identify the location and nature of the hazard.',
    'For each earthquake case study, I can explain how the hazard was managed.',
    'I can compare earthquake hazard management in the developed and the developing/emerging country.',
    'I can explain how earthquake warning systems can help people prepare.',
    'I can explain how evacuation planning can reduce earthquake risk.',
    'I can explain how earthquake-resistant building design can reduce impacts.',
    'I can explain how remote sensing can be used in earthquake preparation.',
    'I can explain how GIS can be used in earthquake preparation.',
    'I can explain the role of emergency aid after an earthquake.',
    'I can explain the importance of emergency shelter after an earthquake.',
    'I can explain the importance of emergency supplies after an earthquake.',
    'I can explain how risk assessment contributes to longer-term earthquake planning.',
    'I can explain how hazard mapping contributes to longer-term earthquake planning.',
    'I can explain how rebuilding programmes contribute to longer-term recovery.',
    'I can use world maps to show the distribution of different natural hazards.',
    'I can use maps to identify links between tectonic plate boundaries and hazard type.',
    'I can use social media sources to investigate the impacts of a hazard event.',
    'I can use satellite images to investigate the impacts of a hazard event.',
    'I can use socio-economic data to assess the varying impacts of a hazard event.',
    'I can use GIS to investigate preparation for earthquake hazards.',
    'I can use online data sources to research shorter-term responses to a particular earthquake event.',
    'I can use online data sources to research longer-term responses to a particular earthquake event.'
  ];

  var HAZ_QUESTION_BANK = [
    { q: 'A natural hazard is best defined as:', options: ['Any natural event, whether or not it affects people', 'A natural event that has the potential to threaten life or property', 'Any event caused entirely by human activity', 'A permanent feature of the physical landscape'], correct: 1, explain: 'A natural hazard is a naturally occurring event, such as an earthquake, volcanic eruption or tropical cyclone, that has the potential to cause loss of life, injury or damage to property.', misconception: 'A natural event only becomes a ‘hazard’ when it has the potential to affect people or property — an eruption on an uninhabited island would not usually be classed as a hazard.', tag: 'Defining hazards' },
    { q: 'Tropical cyclones are characterised by:', options: ['Cold air spiralling around a high-pressure centre', 'Strong winds and heavy rainfall spiralling around a low-pressure centre', 'Constant, gentle winds with no rainfall', 'A stationary column of rising cold air'], correct: 1, explain: 'Tropical cyclones are large rotating storm systems with strong winds and heavy rainfall spiralling around a central area of very low atmospheric pressure (the eye).', misconception: 'Tropical cyclones form around low pressure, not high pressure, and are associated with intense rainfall, not calm, dry conditions.', tag: 'Tropical cyclone characteristics' },
    { q: 'Tropical cyclones typically form:', options: ['Between about 5° and 30° north and south of the equator, over warm ocean water', 'Only at the poles', 'Only over land', 'Only between 40° and 60° north and south'], correct: 0, explain: 'Tropical cyclones form over warm tropical oceans, typically between about 5° and 30° north and south of the equator — close enough to the equator for the Coriolis force to operate, but not directly on it.', misconception: 'Cyclones cannot form directly on the equator itself, since the Coriolis force needed to make the storm rotate is too weak there.', tag: 'Tropical cyclone distribution' },
    { q: 'The strength of a tropical cyclone is most commonly measured using:', options: ['The Richter scale', 'The Saffir-Simpson scale', 'The Mercalli scale', 'The Volcanic Explosivity Index'], correct: 1, explain: 'The Saffir-Simpson scale classifies tropical cyclones (hurricanes) into five categories based on their sustained wind speed.', misconception: 'The Richter and Mercalli scales measure earthquakes, and the Volcanic Explosivity Index (VEI) measures volcanic eruptions — each hazard type has its own dedicated measurement scale.', tag: 'Measuring hazards' },
    { q: 'Earthquakes are most commonly measured in terms of magnitude using:', options: ['The Saffir-Simpson scale', 'The Richter or moment magnitude scale', 'The Volcanic Explosivity Index', 'The Beaufort scale'], correct: 1, explain: 'Earthquake magnitude, the amount of energy released, is measured using scales such as the Richter scale or the more modern moment magnitude scale.', misconception: 'The Mercalli scale measures earthquake intensity — its effects on people and buildings at a location — which is a related but different measure from magnitude.', tag: 'Measuring hazards' },
    { q: 'Volcanic eruptions are most commonly measured using:', options: ['The Volcanic Explosivity Index (VEI)', 'The Richter scale', 'The Saffir-Simpson scale', 'The Mercalli scale'], correct: 0, explain: 'The Volcanic Explosivity Index (VEI) is used to measure the relative explosivity of volcanic eruptions, based on factors such as the volume of material ejected and the height of the eruption column.', misconception: 'The Richter, Saffir-Simpson and Mercalli scales are used to measure earthquakes, tropical cyclones and earthquake intensity respectively, not volcanic eruptions.', tag: 'Measuring hazards' },
    { q: 'Warm ocean temperatures (usually above about 26–27°C) are important for tropical cyclone formation because they:', options: ['Cool the surrounding air, preventing storm formation', 'Provide the heat and moisture needed to fuel the storm through evaporation', 'Increase atmospheric pressure directly', 'Reduce wind speed near the surface'], correct: 1, explain: 'Warm ocean water evaporates readily, providing the heat energy and moisture needed to fuel a developing tropical cyclone as this moist air rises and condenses.', misconception: 'Warm water is a source of energy and moisture that drives storm formation; it does not cool the air or directly raise atmospheric pressure.', tag: 'Tropical cyclone formation' },
    { q: 'Low atmospheric pressure is important for tropical cyclone formation because it:', options: ['Prevents air from rising', 'Encourages air to rise rapidly, drawing in more moist air and strengthening the storm', 'Stops evaporation from occurring', 'Increases the Coriolis force'], correct: 1, explain: 'An area of low pressure encourages air to rise rapidly; as this happens, more moist air is drawn in from the surrounding ocean, releasing latent heat and intensifying the developing storm.', misconception: 'Low pressure encourages rising air, which drives storm development, rather than suppressing it.', tag: 'Tropical cyclone formation' },
    { q: 'Strong wind shear (a change in wind speed and/or direction with height) tends to:', options: ['Have no effect on tropical cyclones', 'Weaken or disrupt tropical cyclone formation and development', 'Always strengthen tropical cyclones', 'Cause tropical cyclones to form over land'], correct: 1, explain: 'Strong wind shear can disrupt the vertical structure of a developing storm, tilting or tearing apart its circulation, which weakens it or prevents it from forming in the first place.', misconception: 'Low wind shear, not high wind shear, is generally favourable for tropical cyclone development, since it allows the storm to maintain a well-organised vertical structure.', tag: 'Tropical cyclone formation' },
    { q: 'The Coriolis force is important for tropical cyclone formation because it:', options: ['Heats the ocean surface', 'Causes the developing storm system to rotate', 'Prevents evaporation', 'Increases wind shear'], correct: 1, explain: 'The Coriolis force, caused by the Earth’s rotation, deflects moving air and causes the developing storm system to rotate — anticlockwise in the northern hemisphere and clockwise in the southern hemisphere.', misconception: 'The Coriolis force is a rotational effect from the Earth spinning, not a source of heat or moisture for the storm.', tag: 'Tropical cyclone formation' },
    { q: 'Most earthquake hazards occur:', options: ['Randomly across the Earth’s surface with no pattern', 'Along or near tectonic plate boundaries', 'Only in the centre of continents', 'Only under the oceans'], correct: 1, explain: 'The majority of earthquakes occur along or near tectonic plate boundaries, where plates are moving towards, away from, or past each other, building up and releasing stress in the crust.', misconception: 'Earthquakes are not randomly distributed — their global pattern closely follows the location of plate boundaries, such as the Pacific ‘Ring of Fire’.', tag: 'Plate boundaries and hazards' },
    { q: 'Volcanic hazards away from plate boundaries, such as in Hawaii, are usually explained by:', options: ['Random chance', 'Hotspots, where magma rises from a fixed plume in the mantle through the moving plate above', 'Wind shear', 'The Coriolis force'], correct: 1, explain: 'Hotspots are fixed areas of magma upwelling from deep within the mantle; as a tectonic plate moves over a hotspot, it can produce a chain of volcanoes, such as the Hawaiian Islands, even far from a plate boundary.', misconception: 'Hotspot volcanism is a distinct mechanism from plate-boundary volcanism, explaining why some volcanoes occur in the middle of tectonic plates rather than at their edges.', tag: 'Hotspots' },
    { q: 'Some people continue to live in areas at risk from natural hazards mainly because:', options: ['They are always completely unaware hazards exist', 'Reasons such as economic opportunity, family ties, cultural attachment to the land, or believing the benefits outweigh the risks', 'Governments always force them to remain', 'Hazardous areas are the only habitable places on Earth'], correct: 1, explain: 'People often remain in hazardous areas for reasons such as economic opportunities (e.g. fertile volcanic soil), family and cultural ties to the land, lack of alternative options, or believing the benefits, or a low perceived risk, outweigh the dangers.', misconception: 'This is rarely about people being unaware of risk — many stay for genuine social, economic or cultural reasons even when they understand the hazard exists.', tag: 'Living with hazards' },
    { q: 'Which of the following is a physical factor that can increase a country’s vulnerability to natural hazards?', options: ['Weak or unstable government', 'Location on or near an active plate boundary', 'High levels of national debt', 'Low literacy rates'], correct: 1, explain: 'A physical factor relates to the natural environment — for example, a country’s location on or near an active plate boundary increases its exposure to earthquake and volcanic hazards.', misconception: 'Weak government, high debt and low literacy are social, economic or political factors, not physical ones — it is important to correctly categorise the type of vulnerability factor.', tag: 'Vulnerability factors' },
    { q: 'Which of the following is a social factor that can increase a country’s vulnerability to natural hazards?', options: ['Being located on a tectonic plate boundary', 'High population density and poor-quality housing', 'Low national income', 'High rainfall levels'], correct: 1, explain: 'Social factors relate to a population’s characteristics — for example, high population density and poor-quality or informal housing can increase the number of people exposed and the damage a hazard causes.', misconception: 'Plate boundary location is a physical factor, and low national income is an economic factor — both are related but distinct categories from social vulnerability.', tag: 'Vulnerability factors' },
    { q: 'Which of the following is an economic factor that can increase a country’s vulnerability to natural hazards?', options: ['High rainfall', 'Low national income limiting investment in defences, warning systems and emergency response', 'Close proximity to a plate boundary', 'High population density'], correct: 1, explain: 'Economic factors relate to a country’s wealth and resources — a lower national income can limit investment in hazard-resistant infrastructure, monitoring, warning systems and emergency response capacity.', misconception: 'Physical exposure factors, like plate boundary proximity, and social factors, like population density, are different categories from economic capacity to prepare for and respond to a hazard.', tag: 'Vulnerability factors' },
    { q: 'The short-term impacts of a hazard event, such as an earthquake, are best described as those that:', options: ['Take decades to emerge', 'Happen immediately or within days/weeks of the event, such as deaths, injuries and damaged buildings', 'Only relate to economic recovery', 'Never affect people directly'], correct: 1, explain: 'Short-term impacts happen immediately or soon after a hazard event — for example, deaths, injuries, damaged buildings and disrupted services in the days and weeks that follow.', misconception: 'Longer-term impacts, not short-term ones, are the effects that take months or years to fully emerge, such as economic recovery or infrastructure rebuilding.', tag: 'Impacts of hazards' },
    { q: 'The longer-term impacts of a hazard event are best described as those that:', options: ['Only occur in the first 24 hours', 'Emerge over months or years, such as the economic cost of rebuilding or long-term population displacement', 'Never affect the local economy', 'Are always less significant than short-term impacts'], correct: 1, explain: 'Longer-term impacts unfold over months or years after a hazard event, and can include the economic cost of rebuilding, long-term population displacement, and lasting changes to the local economy or environment.', misconception: 'Longer-term impacts can be just as, or more, significant than short-term impacts, even though they take longer to become apparent.', tag: 'Impacts of hazards' },
    { q: 'When comparing an earthquake hazard management case study from a developed country with one from a developing or emerging country, a key difference often relates to:', options: ['The amount of funding, technology and infrastructure each country can invest in preparation and response', 'The fact that only developed countries experience earthquakes', 'The fact that developing countries never suffer damage from earthquakes', 'Earthquake magnitude, which is always identical in both cases'], correct: 0, explain: 'A key difference between case studies is often the level of funding, technology and infrastructure available, which affects how well each country can prepare for, and respond to, an earthquake.', misconception: 'Earthquakes affect countries at all levels of development; the comparison is about differing capacity to prepare and respond, not about who experiences earthquakes at all.', tag: 'Case studies' },
    { q: 'In an earthquake case study, you should be able to identify:', options: ['Only the earthquake’s date', 'The specific location and the nature of the hazard event', 'Only the name of the country’s president', 'Only the earthquake’s colour on a map'], correct: 1, explain: 'A strong case study identifies the specific location of the earthquake and describes the nature of the hazard itself, such as its magnitude, depth and cause.', misconception: 'Case study knowledge should be specific and located, focused on the hazard event itself, not on incidental details unrelated to the earthquake.', tag: 'Case studies' },
    { q: 'When comparing earthquake hazard management between a developed and a developing/emerging country, you should focus on:', options: ['Which country is larger in land area', 'How effectively each country’s strategies reduced risk and supported recovery, given their available resources', 'Which country has a more attractive flag', 'The number of tourists each country receives'], correct: 1, explain: 'A strong comparison evaluates how effectively each country’s management strategies reduced risk and supported recovery, taking into account the resources and capacity available to each.', misconception: 'A comparison should focus on the effectiveness and resourcing of hazard management, not on unrelated national characteristics.', tag: 'Case studies' },
    { q: 'Earthquake warning systems help people prepare mainly by:', options: ['Preventing earthquakes from happening', 'Giving advance notice so people can take protective action before or during shaking', 'Making buildings immune to damage', 'Increasing the earthquake’s magnitude'], correct: 1, explain: 'Earthquake early warning systems detect the first, faster-travelling seismic waves and can give people seconds to minutes of advance notice to take protective action before the more damaging shaking arrives.', misconception: 'Warning systems reduce harm by giving people time to react — they cannot prevent an earthquake or reduce its magnitude.', tag: 'Earthquake preparation' },
    { q: 'Earthquake-resistant building design helps reduce impacts mainly by:', options: ['Preventing tectonic plates from moving', 'Allowing structures to flex, absorb or dissipate seismic energy so they are less likely to collapse', 'Making buildings taller', 'Removing the need for evacuation planning'], correct: 1, explain: 'Earthquake-resistant design features, such as flexible foundations, reinforced frames and dampers, allow buildings to flex or absorb seismic energy, reducing the likelihood of collapse and protecting occupants.', misconception: 'Building design cannot stop tectonic movement itself; it works by making structures more resilient to the shaking that does occur.', tag: 'Earthquake preparation' },
    { q: 'Remote sensing and GIS can support earthquake preparation by:', options: ['Predicting the exact date of a future earthquake', 'Mapping hazard risk, monitoring ground deformation, and helping to plan evacuation routes and emergency response', 'Preventing plate movement', 'Replacing the need for any emergency planning'], correct: 1, explain: 'Remote sensing, such as satellite data, and GIS (Geographic Information Systems) can be used to map hazard risk and vulnerable areas, monitor ground deformation over time, and support planning for evacuation routes and emergency response.', misconception: 'These technologies cannot predict the exact timing of an earthquake, but they are valuable tools for understanding risk and planning a response.', tag: 'Earthquake preparation' },
    { q: 'After an earthquake, emergency aid, shelter and supplies are important mainly because they:', options: ['Prevent any future earthquakes from occurring', 'Meet the immediate survival needs of people who have lost homes, access to clean water, food or medical care', 'Are only needed in developed countries', 'Replace the need for longer-term rebuilding'], correct: 1, explain: 'In the immediate aftermath of an earthquake, emergency aid, shelter and supplies meet urgent survival needs, such as clean water, food, medical care and safe shelter, for people affected by the disaster.', misconception: 'Emergency response meets immediate needs, while longer-term recovery, like rebuilding programmes, is a separate, later stage of the response.', tag: 'Earthquake response' },
    { q: 'Risk assessment and hazard mapping contribute to longer-term earthquake planning mainly by:', options: ['Identifying which areas and populations are most at risk, to guide long-term land-use and infrastructure decisions', 'Making earthquakes less frequent', 'Replacing the need for building codes', 'Providing entertainment for tourists'], correct: 0, explain: 'Risk assessment and hazard mapping identify which areas and populations are most vulnerable to earthquake hazards, helping governments make informed long-term decisions about land use, building codes and infrastructure investment.', misconception: 'These planning tools don’t change how often earthquakes occur; they help target where and how resources are best used to reduce risk over the long term.', tag: 'Longer-term earthquake planning' },
    { q: 'Rebuilding programmes contribute to longer-term recovery after an earthquake mainly by:', options: ['Restoring homes, infrastructure and services, often with improved, more earthquake-resistant standards', 'Preventing any future earthquakes', 'Only benefiting wealthy residents', 'Removing the need for future warning systems'], correct: 0, explain: 'Rebuilding programmes restore housing, infrastructure and services after an earthquake, and are often an opportunity to rebuild to improved, more earthquake-resistant standards, reducing the impact of future events.', misconception: 'Rebuilding is about restoring and improving communities after an event; it does not prevent future earthquakes or remove the need for continued preparedness, like warning systems.', tag: 'Longer-term earthquake planning' },
    { q: 'Satellite images and social media sources are both useful tools in geography mainly for:', options: ['Predicting the exact strength of a future hazard', 'Investigating and monitoring the impacts of a hazard event as it unfolds or shortly after', 'Preventing hazards from occurring', 'Replacing all other forms of data collection'], correct: 1, explain: 'Satellite images can show the physical scale of damage from above, while social media sources can provide real-time, on-the-ground accounts — both useful for investigating the impacts of a hazard event.', misconception: 'These sources support investigation and monitoring of an event’s impacts; they cannot predict a hazard’s strength in advance or replace other data sources such as official statistics.', tag: 'Integrated skills' },
    { q: 'Maps showing tectonic plate boundaries alongside the location of natural hazards are useful because they help to:', options: ['Prove that hazards occur completely at random', 'Identify links between plate boundary type/location and the pattern of hazard occurrence', 'Predict the exact day a hazard will occur', 'Replace the need for any other hazard data'], correct: 1, explain: 'Overlaying maps of plate boundaries with hazard locations helps geographers identify clear links between the type and location of a plate boundary and the pattern of hazard occurrence, such as earthquakes clustering along boundaries.', misconception: 'These maps reveal spatial patterns and relationships; they cannot predict the exact timing of a future hazard event.', tag: 'Integrated skills' },
    { q: 'Socio-economic data is useful when assessing the impacts of a hazard event because it can help show:', options: ['Only the physical size of the hazard', 'How impacts vary between different groups of people, depending on factors like income and access to resources', 'The exact date of the next hazard event', 'Only which country has the most tourists'], correct: 1, explain: 'Socio-economic data, such as income, employment or access to services, can help show how the impacts of a hazard event vary between different groups of people, since wealthier or better-resourced groups are often able to prepare for and recover from hazards more effectively.', misconception: 'Socio-economic data helps explain uneven human impacts and vulnerability, rather than describing the physical characteristics or timing of the hazard itself.', tag: 'Integrated skills' }
  ];

  window.SBL_LESSONS.IGHAZREV = {
    id: 'IGHAZREV',
    title: 'Hazardous Environments — Full Topic Revision',
    syllabusFocus: 'The whole of Edexcel IGCSE Geography Paper 1, Topic 3: Hazardous Environments — the characteristics, distribution and causes of tropical cyclones, earthquakes and volcanic hazards, the factors affecting vulnerability and impacts, earthquake hazard management case studies, and strategies for managing earthquake hazards.',
    starterButtons: [
      { label: 'Overview of the whole topic', request: 'Give me a full overview of Topic 3: Hazardous Environments, covering tropical cyclones, earthquakes, volcanic hazards, vulnerability, impacts and earthquake management.' },
      { label: 'Tropical cyclones', request: 'Explain the characteristics, global distribution and formation of tropical cyclones, including the role of warm oceans, low pressure, wind shear and the Coriolis force.' },
      { label: 'Earthquakes and volcanoes', request: 'Explain the characteristics, global distribution and causes of earthquakes and volcanic hazards, including the role of plate boundaries and hotspots.' },
      { label: 'Vulnerability to hazards', request: 'Explain the physical, social and economic factors that make some countries more vulnerable to natural hazards, and why people continue to live in hazardous areas.' },
      { label: 'Impacts of hazards', request: 'Compare the short-term and longer-term impacts of a named earthquake, volcanic eruption and tropical cyclone.' },
      { label: 'Managing earthquake hazards', request: 'Explain strategies for managing earthquake hazards, including warning systems, evacuation planning, resistant building design, and longer-term planning like risk assessment and rebuilding.' },
      { label: 'Help me plan an answer', request: 'Help me plan an answer comparing earthquake hazard management case studies in a developed country and a developing or emerging country.' }
    ],
    checklist: HAZ_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Hazardous Environments checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this topic — for example, “Explain how plate boundaries cause earthquake hazards.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: HAZ_UNIT_TITLE,
      checklistItems: HAZ_CHECKLIST
    },
    _questionBank: HAZ_QUESTION_BANK,
    quiz: HAZ_QUESTION_BANK.slice(0, 20)
  };

})();
