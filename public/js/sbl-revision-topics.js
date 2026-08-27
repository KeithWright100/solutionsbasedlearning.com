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

  /* ---------------- Option A: Freshwater ---------------- */

  var FW_UNIT_TITLE = 'Option A: Freshwater';

  var FW_CHECKLIST = [
    'I can identify the key features of a drainage basin.',
    'I can explain how a drainage basin is an open system with inputs, outputs, flows and stores.',
    'I can define river discharge, cross-sectional area (CSA), velocity and hydraulic radius.',
    'I can explain the relationship between river discharge, stream flow, channel characteristics and hydraulic radius.',
    'I can explain the Bradshaw model.',
    'I can explain Manning’s roughness coefficient.',
    'I can define and describe the four main types of river erosion.',
    'I can define and describe the four main types of river transportation.',
    'I can define deposition.',
    'I can explain how a river channel’s characteristics affect erosion, transportation and deposition.',
    'I can explain how seasonality affects erosion, transportation and deposition in a river channel.',
    'I can explain the difference between the long profile and the cross profile of a river.',
    'I can explain the Hjulström curve.',
    'I can explain the formation of waterfalls and gorges.',
    'I can explain the formation of floodplains and bluffs.',
    'I can explain the formation of levees.',
    'I can explain the formation of meanders and oxbow lakes.',
    'I can explain the formation of deltas.',
    'I can describe the key features of a flood/storm hydrograph.',
    'I can plot a flood hydrograph using geographical data.',
    'I can explain how the shape of a hydrograph is affected by a number of human and physical factors.',
    'I can describe and explain river regimes.',
    'I can define the key terms ‘flooding’, ‘flood recurrence interval’, ‘flood magnitude’ and ‘flood frequency’.',
    'I can describe attempts to predict flooding using weather forecasting and climate modelling.',
    'I can explain the human factors that affect flooding.',
    'I can explain the physical factors that affect flooding.',
    'I can evaluate different structural methods of flood mitigation, e.g. dams, afforestation, channel modification and levee strengthening.',
    'I can evaluate different planning methods used for flood mitigation, e.g. personal insurance, flood preparation and flood warning technology.',
    'I can discuss the Cockermouth, Cumbria, UK flood management case study.',
    'I can discuss an LIC or MIC flood management case study of my own choice.',
    'I can define physical and economic water scarcity.',
    'I can distinguish the difference between ‘water quality’ and ‘water quantity’.',
    'I can describe the pattern of physical and economic water scarcity globally using a choropleth map.',
    'I can explain the reasons for physical water scarcity in some regions.',
    'I can explain the reasons for economic water scarcity in some regions.',
    'I can explain the physical and human causes of droughts.',
    'I can explain the impacts of drought, using the Horn of Africa 2011 drought as an extended example.',
    'I can identify and describe a number of methods of irrigation.',
    'I can define the key terms ‘eutrophication’, ‘biomagnification’, ‘bioaccumulation’ and ‘salinization’.',
    'I can explain how eutrophication, biomagnification, bioaccumulation and salinization occur.',
    'I can define groundwater.',
    'I can describe the functions and characteristics of lakes.',
    'I can describe the functions and characteristics of aquifers using a diagram.',
    'I can discuss the Lake Chad case study.',
    'I can discuss the California groundwater depletion and contamination case study.',
    'I can describe the difference between groundwater pollution and contamination.',
    'I can describe some sources of groundwater pollution and explain how the issue can be addressed.',
    'I can explain why conflict can arise over shared water resources.',
    'I can discuss conflict in the Nile basin as a case study.',
    'I can explain the difference between large-scale and small-scale water management schemes.',
    'I can explain examples of small-scale water management schemes put in place by WaterAid globally.',
    'I can describe the purpose of dams as multifunctional schemes.',
    'I can examine the costs and benefits of increased dam building.',
    'I can discuss the Colorado River dam system case study.',
    'I can discuss the Three Gorges Dam case study.',
    'I can explain the concept and purpose of integrated drainage basin management (IDBM).',
    'I can discuss America’s Great Watershed Initiative as a case study.',
    'I can define wetland areas.',
    'I can explain why wetland areas need to be managed and protected.',
    'I can summarise the significance of the Ramsar Convention.',
    'I can discuss the Kissimmee River/Everglades case study.',
    'I can discuss the Louisiana wetlands case study.'
  ];

  window.SBL_LESSONS.FWREV = {
    id: 'FWREV',
    title: 'Freshwater — Full Option Revision',
    syllabusFocus: 'The whole of Option A: Freshwater — drainage basin hydrology and geomorphology, flooding and flood mitigation, water scarcity and water quality, and water management futures including dams, integrated drainage basin management and wetland conservation.',
    starterButtons: [
      { label: 'Overview of the whole option', request: 'Give me a full overview of Option A: Freshwater, covering drainage basin hydrology, flooding, water scarcity, and water management futures.' },
      { label: 'River processes', request: 'Explain the processes of erosion, transportation and deposition in a river channel, and how they change along its course.' },
      { label: 'Landform formation', request: 'Explain the formation of one river landform of my choice, such as a meander, waterfall, or delta.' },
      { label: 'Flood hydrographs', request: 'Explain how to interpret a flood hydrograph and the factors that affect its shape.' },
      { label: 'Water scarcity', request: 'Explain the difference between physical and economic water scarcity, with examples.' },
      { label: 'Dams and water management', request: 'Evaluate the costs and benefits of large-scale dam building, using a named case study.' },
      { label: 'Help me plan an essay', request: 'Help me plan an essay evaluating whether large-scale or small-scale water management schemes are more effective, using named examples.' }
    ],
    checklist: FW_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Option A checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this option — for example, “Explain the formation of an oxbow lake.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: FW_UNIT_TITLE,
      checklistItems: FW_CHECKLIST
    },
    quiz: poolQuestions('FW', 'FWREV')
  };

  /* ---------------- Option E: Leisure, Tourism and Sport ---------------- */

  var LT_UNIT_TITLE = 'Option E: Leisure, Tourism and Sport';

  var LT_CHECKLIST = [
    'I can define the key terms: leisure, recreation, tourism and sport.',
    'I can describe how leisure patterns have changed over time and in different places.',
    'I can outline the factors that affect the growth in leisure time (changes in technology, affluence and accessibility).',
    'I can categorise a range of tourist activities by cost, duration and destination.',
    'I can categorise a range of sporting activities by cost, popularity and site.',
    'I can explain the link between economic development and participation in leisure activities.',
    'I can discuss a detailed example of the change in leisure activities in the USA.',
    'I can discuss a detailed example of the change in leisure activities in China.',
    'I can explain a range of factors that affect personal participation in sport, including affluence, gender, stage of life, personality and place of residence.',
    'I can explain a range of factors that affect personal participation in tourism, including affluence, gender, stage of life, personality and place of residence.',
    'I can define tourism hotspots and give examples of both rural and urban hotspots.',
    'I can explain how primary and secondary touristic resources contribute to the development of a tourist location.',
    'I can explain the Butler model of tourism and the associated features of each stage.',
    'I can define the term sphere of influence and related terms to this concept.',
    'I can explain the factors that would influence the size of the sphere of influence of leisure and tourism facilities/locations.',
    'I can apply the above concepts to parks and stadiums in Bangkok.',
    'I can discuss the case study of the English Premier League.',
    'I can explain the costs and benefits of large-scale events such as festivals.',
    'I can discuss the Glastonbury Festival case study.',
    'I can define ‘mass tourism’ and ‘niche tourism’ and give examples of each.',
    'I can discuss the case study of Iceland as a niche tourism destination.',
    'I can outline the role of TNCs in expanding international tourism destinations.',
    'I can discuss the costs and benefits of low cost/budget airlines for a range of stakeholders.',
    'I can explain the concept of enclave tourism, and its costs and benefits for a range of stakeholders.',
    'I can explain how tourism can be used as a development strategy by national governments.',
    'I can discuss the case study of the Maldives’ use of tourism as a national development strategy.',
    'I can explain the costs and benefits of hosting international sporting events such as the Olympics.',
    'I can discuss the case study of the Rio 2016 Olympics.',
    'I can explain the concepts of physical, ecological and perceptual carrying capacity.',
    'I can explain what makes the tourism industry as a whole unsustainable.',
    'I can outline the social, economic, environmental and cultural consequences of unsustainable tourism in a range of locations.',
    'I can discuss the case study of the consequences of unsustainable tourism in Iceland.',
    'I can describe the key concepts and features of ‘sustainable tourism’ and ‘ecotourism’.',
    'I can discuss the case study of sustainable tourism in Rwanda.',
    'I can explain how social media, international security and the influence of diaspora groups may impact tourism in the future.',
    'I can define the key term ‘sports diplomacy’ and explain how governments use sport to exert ‘soft power’.',
    'I can explain how and why sport and politics are linked.',
    'I can discuss the case study of the 2018 Russian doping scandal.',
    'I can describe and explain the growing importance of the Paralympics.',
    'I can outline a range of issues associated with gender and sport.'
  ];

  window.SBL_LESSONS.LTREV = {
    id: 'LTREV',
    title: 'Leisure, Tourism and Sport — Full Option Revision',
    syllabusFocus: 'The whole of Option E: Leisure, Tourism and Sport — changing leisure patterns, tourism and sport at local, national and international scales, and managing tourism and sport sustainably for the future.',
    starterButtons: [
      { label: 'Overview of the whole option', request: 'Give me a full overview of Option E: Leisure, Tourism and Sport, covering changing leisure patterns, tourism and sport at different scales, and managing tourism and sport for the future.' },
      { label: 'The Butler model', request: 'Explain the Butler model of tourism and the features of each stage, with an example.' },
      { label: 'Sphere of influence', request: 'Explain the concept of sphere of influence and the factors that affect its size for a leisure or tourism facility.' },
      { label: 'Mass vs niche tourism', request: 'Compare mass tourism and niche tourism, with examples of each.' },
      { label: 'Sustainable tourism', request: 'Explain what makes tourism unsustainable and how sustainable tourism or ecotourism addresses this, using a case study.' },
      { label: 'Sport and politics', request: 'Explain how sport and politics are linked, using sports diplomacy and a named case study.' },
      { label: 'Help me plan an essay', request: 'Help me plan an essay evaluating the costs and benefits of hosting a large-scale sporting event, using named examples.' }
    ],
    checklist: LT_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Option E checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this option — for example, “Explain the Butler model of tourism.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: LT_UNIT_TITLE,
      checklistItems: LT_CHECKLIST
    },
    quiz: poolQuestions('LT', 'LTREV')
  };

  /* ---------------- Option F: Food and Health ---------------- */

  var FH_UNIT_TITLE = 'Option F: Food and Health';

  var FH_CHECKLIST = [
    'I can define what health is and explain the factors that lead to good health.',
    'I can describe the global pattern of food and nutritional intake using a number of indicators.',
    'I can explain what the Global Hunger Index measures and how it is calculated.',
    'I can define the key terms food security, malnutrition, undernutrition and overnutrition.',
    'I can explain the stages of the nutrition transition model.',
    'I can describe and explain regional variations in food consumption and nutrition choices.',
    'I can define a range of health indicators, including HALE, infant mortality rate, maternal mortality rate and the ratio between doctors/physicians and people.',
    'I can evaluate the effectiveness of these indicators in measuring the overall level of health of a population.',
    'I can describe the spatial distribution of the above indicators.',
    'I can describe and explain the epidemiological transition model.',
    'I can explain the difference between degenerative diseases and infectious diseases.',
    'I can explain the concept of ‘burden of disease’.',
    'I can explain the link between the demographic transition model, epidemiological transition model and nutrition transition model.',
    'I can identify ways in which energy and water are used throughout the food production process.',
    'I can explain food production using a systems diagram for a range of different types of farming.',
    'I can use an example (cornflakes) to illustrate inputs and outputs in a food production system.',
    'I can link food production to the food-water-energy nexus.',
    'I can describe how diseases spread.',
    'I can identify types of disease diffusion.',
    'I can explain the physical and human barriers to disease diffusion.',
    'I can evaluate the strategies used to limit the spread of bird flu.',
    'I can explain what diffusion of agricultural innovations is.',
    'I can describe a range of agricultural innovations.',
    'I can explain the possible advantages and drawbacks of these agricultural innovations for farmers.',
    'I can explain what the ‘Green Revolution’ was and evaluate its effectiveness.',
    'I can describe the diffusion of a vector-borne disease — malaria.',
    'I can analyse the national and local impacts of malaria in Kenya.',
    'I can evaluate the intervention strategies to combat malaria in Kenya.',
    'I can describe the diffusion of a water-borne disease — cholera.',
    'I can analyse the national and local impacts of cholera in the Republic of Congo.',
    'I can evaluate the intervention strategies to combat cholera in the Republic of Congo.',
    'I can describe the role of the World Food Programme, FAO, WHO, governments, and local and international NGOs in combatting disease and hunger.',
    'I can outline a number of specific examples of development projects working in different areas of the world to tackle food insecurity and disease, and evaluate the effectiveness of each.',
    'I can define the key terms TNC, globalization and glocalisation.',
    'I can describe the ways in which TNCs use the media to influence global food consumption.',
    'I can explain the impacts of TNCs on food consumption in LICs and HICs.',
    'I can evaluate the social, environmental and economic impacts of a chosen food TNC.',
    'I can describe some of the gender disparities in health and state possible solutions.',
    'I can explain the link between gender inequality, malnutrition and food production.',
    'I can evaluate some local and national strategies aimed at improving disparities in food production/acquisition and health.',
    'I can explain the difference between food insecurity and famine.',
    'I can examine the human and physical causes of famine (FAD/FED).',
    'I can evaluate the effect of the media and food aid on the severity of famine.',
    'I can discuss a case study of a famine-stricken country — Yemen — its causes and impacts.',
    'I can discuss a case study of food insecurity in Yemen and evaluate attempts to tackle it.',
    'I can explain the problems of food waste globally, including the link between food waste and food insecurity, with examples of strategies attempting to tackle food waste.',
    'I can evaluate a range of contemporary solutions to food insecurity, including in-vitro meat, permaculture, aquaponics, hydroponics and GMOs.',
    'I can explain the difference between curative, preventative and primary health care.',
    'I can identify some examples of preventative care and evaluate their effectiveness.',
    'I can explain and evaluate the success of the preventative health care system in Majiang, China.',
    'I can define pandemic and epidemic.',
    'I can explain the difference between antigenic drift and antigenic shift.',
    'I can describe the pattern and characteristics of the 2013–2016 Ebola outbreak.',
    'I can evaluate the effectiveness of the management of the 2013–2016 Ebola outbreak and suggest lessons learned for future pandemic management.'
  ];

  window.SBL_LESSONS.FHREV = {
    id: 'FHREV',
    title: 'Food and Health — Full Option Revision',
    syllabusFocus: 'The whole of Option F: Food and Health — measuring food and health, food systems and the spread of disease, stakeholders in food and health, and future food security, sustainability and pandemic management.',
    starterButtons: [
      { label: 'Overview of the whole option', request: 'Give me a full overview of Option F: Food and Health, covering measuring food and health, food systems and disease spread, stakeholders, and future food security.' },
      { label: 'Transition models', request: 'Explain the nutrition transition model and the epidemiological transition model, and how they link to the demographic transition model.' },
      { label: 'Disease diffusion', request: 'Explain how diseases spread and the physical and human barriers to disease diffusion, using malaria or cholera as an example.' },
      { label: 'TNCs and food', request: 'Explain the impacts of TNCs on food consumption in LICs and HICs, using a named example.' },
      { label: 'Famine', request: 'Explain the human and physical causes of famine, using Yemen as a case study.' },
      { label: 'Managing pandemics', request: 'Describe the pattern of the 2013-2016 Ebola outbreak and evaluate how effectively it was managed.' },
      { label: 'Help me plan an essay', request: 'Help me plan an essay evaluating contemporary solutions to food insecurity, such as GMOs, hydroponics or in-vitro meat.' }
    ],
    checklist: FH_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Option F checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this option — for example, “Explain the difference between antigenic drift and antigenic shift.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: FH_UNIT_TITLE,
      checklistItems: FH_CHECKLIST
    },
    quiz: poolQuestions('FH', 'FHREV')
  };

  /* ---------------- Unit 4: Power, Places and Networks ---------------- */

  var PPN_UNIT_TITLE = 'Unit 4: Power, Places and Networks';

  var PPN_CHECKLIST = [
    'I can define the key terms ‘globalisation’ and ‘global interactions’.',
    'I can describe at least two different globalisation indices and compare the ways they measure globalisation.',
    'I can define the key term ‘global superpower’.',
    'I can describe the cultural, economic, political and military influence of China as a superpower.',
    'I can describe the cultural, economic, political and military influence of the USA as a superpower.',
    'I can describe and explain the aims and work of the International Monetary Fund (IMF).',
    'I can describe and explain the aims and work of the World Bank.',
    'I can describe and explain the aims and work of the G7/8 and G20.',
    'I can describe and explain the aims and work of the OECD.',
    'I can describe and explain the aims and work of OPEC.',
    'I can describe and explain the aims and work of the New Development Bank (NDB).',
    'I can understand the global networks and flows of trade in materials, manufactured goods and services.',
    'I can understand the global networks and flows of international aid.',
    'I can understand the global networks and flows of loans and debt relief.',
    'I can understand the global networks and flows of international remittances from economic migrants.',
    'I can understand the illegal global networks and flows of human trafficking, drugs and counterfeit goods.',
    'I can define ‘foreign direct investment’, ‘TNCs’ and ‘outsourcing’.',
    'I can explain how FDI and outsourcing have led to increased global interactions.',
    'I can describe and explain the strategies and supply chains of two contrasting TNCs — Tata and Ikea.',
    'I can describe and explain how governments can influence global trade.',
    'I can define the key term ‘multi-governmental organization’ and give a range of examples.',
    'I can define the key terms ‘trading blocs’ and ‘free trade zones’ and explain how each can influence global trade.',
    'I can explain the advantages and disadvantages of trading blocs.',
    'I can describe and explain the ways in which the EU (as an MGO) influences global trade and migration.',
    'I can describe and explain how global interactions are affected by government control and rules around economic migration.',
    'I can explain the concepts of ‘friction of distance’ and ‘time-space convergence’.',
    'I can use the key terms above to explain why the world can be said to have ‘shrunk’ over the past 50 years.',
    'I can describe a range of transport innovations over time, including shipping (containerization), air travel, trains and roads.',
    'I can explain how these transport innovations have contributed to the ‘shrinking world’ concept.',
    'I can describe a range of communication infrastructure and use over time, e.g. the internet, mobile phones and social media.',
    'I can explain how these communication innovations have contributed to the ‘shrinking world’ concept.',
    'I can explain how physical factors such as natural resource availability can influence global interactions in a country.',
    'I can describe and explain the concept of the ‘resource curse’ using examples.',
    'I can explain how physical factors such as location and geographical isolation can influence the global interactions of a country, using examples.',
    'I can understand the structure and assessment criteria for a 12-mark essay.',
    'I can understand the structure and assessment criteria for a 16-mark essay.',
    'I can define and apply all of the key terminology from the HL Paper 3 glossary.'
  ];

  window.SBL_LESSONS.PPNREV = {
    id: 'PPNREV',
    title: 'Power, Places and Networks — Full Unit Revision',
    syllabusFocus: 'The whole of Unit 4: Power, Places and Networks — global interactions and global power, global networks and flows, and the human and physical influences on global interactions, including trade, transport, communication and exam skills for Paper 3.',
    starterButtons: [
      { label: 'Overview of the whole unit', request: 'Give me a full overview of Unit 4: Power, Places and Networks, covering global power, global networks and flows, and the influences on global interactions.' },
      { label: 'Global superpowers', request: 'Compare the cultural, economic, political and military influence of China and the USA as global superpowers.' },
      { label: 'Global organizations', request: 'Explain the aims and work of the IMF, World Bank, G7/8, G20, OECD, OPEC and the New Development Bank.' },
      { label: 'TNCs and FDI', request: 'Explain how foreign direct investment and outsourcing have led to increased global interactions, using Tata and Ikea as case studies.' },
      { label: 'Trading blocs', request: 'Explain the advantages and disadvantages of trading blocs, using the EU as an example.' },
      { label: 'The shrinking world', request: 'Explain the concepts of friction of distance and time-space convergence, and how transport and communication innovations have contributed to a shrinking world.' },
      { label: 'Help me plan an essay', request: 'Help me plan a 16-mark essay evaluating the factors that influence a country’s level of global interaction.' }
    ],
    checklist: PPN_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Unit 4 checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this unit — for example, “Explain the concept of the resource curse.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: PPN_UNIT_TITLE,
      checklistItems: PPN_CHECKLIST
    },
    quiz: poolQuestions('PPN', 'PPNREV')
  };

})();
