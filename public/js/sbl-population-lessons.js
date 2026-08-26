/* ============================================================
   SBL Geography Tutor — Changing Population lesson configurations
   One reusable tutor engine (sbl-teach-bot.js) reads this data to
   render the correct lesson-specific tutor for each page. Hrefs
   and titles below are copied verbatim from the site's own
   public/js/sbl-sidebar.js navigation data — not invented.

   LESSON_ORDER defines the fixed syllabus sequence used by the
   spaced retrieval engine to determine which lessons count as
   "previously taught" for a given lesson (cumulative, syllabus
   order — not dependent on individual student completion).
   ============================================================ */
window.SBL_LESSONS = window.SBL_LESSONS || {};
window.SBL_LESSON_ORDER = ['CP01','CP02','CP03','CP04','CP05','CP06','CP07','CP08','CP09','CP10','CP11','CP12','CP13'];

window.SBL_LESSONS.CP01 = {
  id: 'CP01',
  topicNumber: 1,
  topicTitle: 'Population and economic development patterns',
  title: 'Physical and human factors affecting population distribution at the global scale',
  href: '/geography/paper-1/core-1/t1-population-and/l1-physical-and',
  syllabusFocus: 'Global population distribution, density, and the physical and human factors that explain it.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'Distribution vs density', request: 'Explain the difference between population distribution and population density' },
    { label: 'Describe global patterns', request: 'Describe the main global patterns of population distribution' },
    { label: 'Physical factors', request: 'Explain the physical factors affecting population distribution' },
    { label: 'Human factors', request: 'Explain the human factors affecting population distribution' },
    { label: 'Choropleth vs dot maps', request: 'Explain the difference between choropleth maps and dot maps for showing population' },
    { label: 'Help me draw a diagram', request: 'Suggest a simple labelled diagram I could draw for this lesson' }
  ],
  checklist: [
    'I can define population distribution.',
    'I can define population density.',
    'I can distinguish densely and sparsely populated areas.',
    'I can identify major global population patterns.',
    'I can explain physical factors affecting distribution.',
    'I can explain human factors affecting distribution.',
    'I can interpret choropleth and dot maps.'
  ],
  readinessQuestions: [
    'Name two physical factors that affect where people choose to live.',
    'Name two human factors that affect where people choose to live.',
    'Give an example of an area with very high population density and explain why.',
    'Give an example of an area with very low population density and explain why.',
    'Explain how climate can act as both a "pull" and a "push" factor for population distribution.'
  ],
  quiz: [
    { q: 'What does population distribution describe?', options: ['The total population of a country, measured as a single national figure with no spatial detail', 'How population is spread across an area', 'The rate of population growth', 'The average age of a population'], correct: 1, explain: 'Distribution describes the pattern of where people live across a space.', misconception: 'A common confusion is treating "distribution" as a single number (like total population) rather than a spatial pattern.', tag: 'Distribution vs density' },
    { q: 'Population density is best described as:', options: ['Total population divided by area', 'Total births minus total deaths', 'The number of cities in a country', 'The percentage of people over 65'], correct: 0, explain: 'Density is a measure of people per unit area, usually per km\u00b2.', misconception: 'Density is often confused with natural increase (births minus deaths), which is a rate of change, not a spatial measure.', tag: 'Distribution vs density' },
    { q: 'Which is an example of a physical factor affecting population distribution?', options: ['Employment opportunities', 'Government policy', 'Climate', 'Transport links'], correct: 2, explain: 'Climate is a physical factor, alongside relief, water supply and natural resources.', misconception: 'Students sometimes list transport or policy as "physical" because they affect where people live, but these are human, not natural, factors.', tag: 'Physical factors' },
    { q: 'Which is an example of a human factor affecting population distribution?', options: ['Relief and flat land', 'Employment', 'Climate', 'Natural hazards'], correct: 1, explain: 'Employment is a human factor, alongside infrastructure, services and transport.', misconception: 'Relief is sometimes mistaken for a human factor because it affects where cities are built, but it is a physical characteristic of the land itself.', tag: 'Human factors' },
    { q: 'A choropleth map shows population data using:', options: ['One dot per fixed number of people', 'Shaded regions representing value ranges', 'Arrows showing migration flows', 'Contour lines, which show changes in land elevation rather than where people actually live'], correct: 1, explain: 'Choropleth maps use colour shading across defined areas to represent data ranges; dot maps use dots to represent set quantities.', misconception: 'Choropleth and dot maps are often mixed up because both display density-related data, but their visual method is different.', tag: 'Choropleth vs dot maps' },
    { q: 'Which region is typically an example of very high population density?', options: ['The Sahara Desert', 'The Ganges River Valley', 'Antarctica', 'The Amazon rainforest interior'], correct: 1, explain: 'Fertile river valleys like the Ganges support intensive agriculture and have historically attracted very high population densities.', misconception: 'Large physical size (like the Amazon) is sometimes wrongly assumed to mean high density, when in fact many large areas are sparsely populated.', tag: 'Describe global patterns' },
    { q: 'Which of these is most likely to result in a sparsely populated area?', options: ['Fertile flat land near a coast', 'Extreme cold or aridity', 'Good transport infrastructure', 'A large, established city'], correct: 1, explain: 'Extreme physical conditions such as very cold or very dry climates make settlement difficult, resulting in sparse population.', misconception: 'Some students assume any remote area is automatically sparsely populated, when the key cause is the physical difficulty of the environment, not remoteness alone.', tag: 'Physical factors' },
    { q: 'Why might a resource-rich area still have low population density?', options: ['Resources always guarantee high density, regardless of the physical conditions in an area', 'Harsh physical conditions can outweigh the benefit of resources', 'Resources have no effect on distribution', 'Low density areas never contain resources'], correct: 1, explain: 'Even resource-rich areas, such as parts of Siberia, remain sparsely populated because extreme physical conditions make large-scale settlement difficult.', misconception: 'It is a common misconception that valuable resources alone are enough to guarantee dense settlement, ignoring the physical barriers involved.', tag: 'Human factors' },
    { q: 'On a dot map, each dot typically represents:', options: ['One single person', 'A fixed number of people', 'A percentage of the total population', 'A single settlement only'], correct: 1, explain: 'Dot maps assign a fixed value to each dot (for example, one dot = 10,000 people) to represent population quantities spatially.', misconception: 'Students often assume each dot equals exactly one person, when in reality each dot represents a set number defined by the map\u2019s key.', tag: 'Choropleth vs dot maps' },
    { q: 'Which pair correctly matches a factor to its category?', options: ['Climate \u2014 human factor', 'Employment \u2014 physical factor', 'Relief \u2014 physical factor', 'Government policy \u2014 physical factor'], correct: 2, explain: 'Relief (the shape and elevation of land) is a physical factor affecting where people can settle.', misconception: 'Mixing up physical and human categories is common; a useful check is to ask whether a factor exists independently of people (physical) or is created by people (human).', tag: 'Physical factors' }
  ]
};

window.SBL_LESSONS.CP02 = {
  id: 'CP02',
  topicNumber: 1,
  topicTitle: 'Population and economic development patterns',
  title: 'Global patterns and classifications of economic development',
  href: '/geography/paper-1/core-1/t1-population-and/l2-global-patterns',
  syllabusFocus: 'Global patterns of development, common classifications, inequality, and core-periphery theory.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'LICs, MICs and HICs', request: 'Explain the classifications LIC, MIC and HIC' },
    { label: 'What is inequality?', request: 'Explain what is meant by inequality in a development context' },
    { label: 'Global development patterns', request: 'Describe global patterns of development' },
    { label: 'Causes of uneven development', request: 'Explain the causes of uneven development' },
    { label: 'Core-periphery model', request: 'Explain the core-periphery model' },
    { label: 'Apply the model', request: 'Help me apply the core-periphery model to a real example' }
  ],
  checklist: [
    'I can describe global patterns of development.',
    'I can distinguish major economic classifications.',
    'I can define inequality.',
    'I can explain causes of uneven development.',
    'I can explain the core-periphery model.',
    'I can apply the model to examples.',
    'I can connect development and population patterns.'
  ],
  readinessQuestions: [
    'Name three indicators used to classify levels of economic development.',
    'What is the difference between HICs, MICs and LICs?',
    'Give an example of a country in each development category.',
    'Explain what "core" and "periphery" mean in the context of global development patterns.',
    'Give one criticism of using GDP per capita alone to classify development.'
  ],
  quiz: [
    { q: 'LIC stands for:', options: ['Low Income Country', 'Least Industrialised Continent', 'Local Investment Class', 'Low Infrastructure Community'], correct: 0, explain: 'LIC = Low Income Country, one of the common development classifications.', misconception: 'LIC is sometimes confused with a description of infrastructure or geography rather than a strict income-based classification.', tag: 'LICs, MICs and HICs' },
    { q: 'Inequality in a development context refers to:', options: ['Equal access to resources for everyone, regardless of their wealth, location or opportunity', 'Uneven distribution of wealth, resources or opportunity', 'A country with no cities', 'The rate of population growth'], correct: 1, explain: 'Inequality describes uneven distribution of wealth, resources, or opportunities between people or places.', misconception: 'Some students think inequality only refers to income, but it also includes access to healthcare, education and opportunity.', tag: 'What is inequality?' },
    { q: 'In core-periphery theory, the "core" typically refers to:', options: ['Rural, less developed areas', 'Areas of concentrated economic activity and wealth', 'Areas with the lowest population density, typically found far from any economic activity', 'Coastal fishing regions only'], correct: 1, explain: 'The core is the economically dominant region, while the periphery is less developed and often dependent on the core.', misconception: 'Core and periphery are sometimes confused with simple geographic centre/edge, when the terms actually describe economic dominance, not just location.', tag: 'Core-periphery model' },
    { q: 'Which is a common global pattern of development?', options: ['Development is identical in every country, regardless of history, geography or economy', 'A general divide between more and less developed regions', 'All LICs are in the Southern Hemisphere', 'Development never changes over time'], correct: 1, explain: 'While patterns are complex, there is a broad global pattern of unevenness between more and less developed regions.', misconception: 'Assuming all LICs sit neatly in one hemisphere oversimplifies a genuinely complex and changing global pattern.', tag: 'Global development patterns' },
    { q: 'Uneven development can be caused by:', options: ['Historical, economic and political factors', 'Only the size of a country, regardless of its historical, economic or political context', 'Only climate', 'Random chance with no identifiable causes'], correct: 0, explain: 'Uneven development results from a combination of historical, economic, political and social factors.', misconception: 'Reducing development to a single cause (like climate or size alone) ignores the multi-causal nature of real development patterns.', tag: 'Causes of uneven development' },
    { q: 'A country with a mid-range HDI and growing industrial base would most likely be classified as:', options: ['LIC', 'MIC', 'HIC', 'None of these classifications apply'], correct: 1, explain: 'A MIC (Middle Income Country) typically has a growing economy and industrial base between LIC and HIC levels.', misconception: 'Students sometimes assume any growing economy is automatically an HIC, without considering the full range of development indicators.', tag: 'LICs, MICs and HICs' },
    { q: 'The core-periphery model can be applied at which scales?', options: ['Only at the global scale', 'Only within a single city, and never at a national or global scale of analysis', 'At global, national and local scales', 'It cannot be applied to real places'], correct: 2, explain: 'Core-periphery patterns can be observed at multiple scales, from global divides to national and even city-level patterns.', misconception: 'A common error is thinking the model is a fixed, global-only theory, when it is a flexible framework applicable at many scales.', tag: 'Apply the model' },
    { q: 'Which best explains why some regions become an economic "periphery"?', options: ['They choose not to develop, regardless of investment, infrastructure or opportunity available', 'They lack the same investment, infrastructure or opportunities as core regions', 'They have too many natural resources', 'Periphery status is permanent and unchangeable'], correct: 1, explain: 'Peripheral regions typically receive less investment and infrastructure, reinforcing the gap with core regions over time.', misconception: 'It is a misconception that peripheral status reflects a lack of effort or choice, rather than structural economic and historical factors.', tag: 'Causes of uneven development' },
    { q: 'Which indicator is commonly used to help classify a country\u2019s level of development?', options: ['Gross National Income (GNI) per capita', 'Total land area, which does not reflect a country\'s income, health or education levels', 'Number of national holidays', 'Length of coastline'], correct: 0, explain: 'GNI per capita is a widely used economic indicator for classifying development levels, alongside indicators like HDI.', misconception: 'Physical geography facts such as land area or coastline length are sometimes mistaken for development indicators, but they do not measure economic or social development.', tag: 'Global development patterns' },
    { q: 'Inequality between core and periphery regions tends to:', options: ['Disappear naturally over time without intervention, regardless of investment patterns', 'Persist or widen without deliberate policy intervention', 'Only exist in LICs', 'Have no link to investment patterns'], correct: 1, explain: 'Without deliberate policy intervention, core-periphery inequality often persists or widens, since investment tends to concentrate further in already-developed core areas.', misconception: 'Assuming inequality will resolve itself naturally overlooks how investment and opportunity tend to reinforce existing core-periphery patterns.', tag: 'Core-periphery model' }
  ],
  challenge: {
    question: '"Physical geography is the main cause of global inequalities in development." To what extent do you agree — fully, partially, somewhat, or do you not agree at all? You need to justify your answer.',
    intro: 'This is not an essay question — it is designed to develop your own thinking. Decide where you stand on the scale (fully / partially / somewhat / do not agree), then build a justified case: weigh physical factors (climate, resources, location, natural hazards) against human factors (history, colonialism, trade, governance, conflict, investment) to defend your position.'
  }
};

window.SBL_LESSONS.CP03 = {
  id: 'CP03',
  topicNumber: 1,
  topicTitle: 'Population and economic development patterns',
  title: 'Population distribution and economic development at a national scale',
  href: '/geography/paper-1/core-1/t1-population-and/l3-population',
  syllabusFocus: 'Population distribution and development within a single country, using Thailand as the national-scale example.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'Thailand population patterns', request: 'Describe Thailand\u2019s population distribution' },
    { label: 'Development in Thailand', request: 'Explain patterns of development within Thailand' },
    { label: 'Core and periphery', request: 'Identify Thailand\u2019s core and peripheral regions' },
    { label: 'Push and pull factors', request: 'Explain push and pull factors for internal migration' },
    { label: 'Internal migration', request: 'Explain patterns of voluntary internal migration in Thailand' },
    { label: 'Why Bangkok grows', request: 'Explain why Bangkok has grown so much' },
    { label: 'What is a megacity?', request: 'Define what a megacity is' }
  ],
  checklist: [
    'I can describe Thailand\u2019s population distribution.',
    'I can identify Thailand\u2019s core and peripheral regions.',
    'I can explain voluntary internal migration.',
    'I can distinguish push and pull factors.',
    'I can explain economic concentration in Bangkok.',
    'I can explain how development affects distribution.',
    'I can define a megacity.'
  ],
  readinessQuestions: [
    'Explain why population distribution is often uneven within a single country.',
    'Give an example of a core region and a periphery region within one country.',
    'Explain how physical factors can create uneven development within a country.',
    'Explain how government policy can influence internal population distribution.',
    'Give an example of rural-to-urban migration and explain one cause.'
  ],
  quiz: [
    { q: 'Which city is the main core region of Thailand?', options: ['Chiang Mai', 'Bangkok', 'Phuket', 'Pattaya'], correct: 1, explain: 'Bangkok is Thailand\u2019s primary core region, concentrating population and economic activity.', misconception: 'Tourist-famous cities like Phuket or Pattaya are sometimes assumed to be the economic core, when Bangkok is the true centre of population and economic concentration.', tag: 'Core and periphery' },
    { q: '"Pull factors" in migration are:', options: ['Reasons people are forced to leave a place', 'Reasons that attract people to a new place', 'Government migration bans', 'Natural disasters only'], correct: 1, explain: 'Pull factors attract migrants to a destination, such as jobs or better services; push factors drive them away from their origin.', misconception: 'Push and pull factors are frequently swapped by students; a helpful check is that "pull" always relates to the destination, not the origin.', tag: 'Push and pull factors' },
    { q: 'A megacity is generally defined as a city with a population of at least:', options: ['1 million', '5 million', '10 million', '50 million'], correct: 2, explain: 'A megacity is commonly defined as a city with 10 million or more inhabitants.', misconception: 'Students often underestimate the threshold, assuming 1 or 5 million qualifies, when the standard definition requires at least 10 million.', tag: 'What is a megacity?' },
    { q: 'Internal migration refers to movement:', options: ['Between two different countries', 'Within the same country', 'Only across international borders', 'Only from rural areas abroad'], correct: 1, explain: 'Internal migration is movement of people within the borders of a single country.', misconception: 'Internal migration is sometimes confused with international migration; the defining feature is that it stays within one country\u2019s borders.', tag: 'Internal migration' },
    { q: 'Bangkok\u2019s rapid growth is mainly linked to:', options: ['Its status as a periphery region with limited jobs, services or investment available', 'Concentration of jobs, services and investment', 'A government policy limiting its size', 'Its remote, undeveloped location'], correct: 1, explain: 'Bangkok has grown due to concentrated economic activity, employment opportunities and infrastructure investment.', misconception: 'Some students mistakenly describe Bangkok as peripheral because it is a single city, rather than recognising it as Thailand\u2019s clear economic core.', tag: 'Why Bangkok grows' },
    { q: 'A peripheral region within Thailand is most likely to have:', options: ['High investment and dense population, similar in scale to Bangkok\'s own core region', 'Lower investment, services, and population density than Bangkok', 'The same population density as Bangkok', 'No population at all'], correct: 1, explain: 'Peripheral regions typically receive less investment and have lower population density and service provision compared to the core.', misconception: 'Peripheral does not mean "empty" \u2014 it means relatively less developed and less densely populated compared to the core region, not devoid of people.', tag: 'Core and periphery' },
    { q: 'Which is most likely to be a push factor driving migration to Bangkok?', options: ['Better job opportunities in Bangkok', 'Limited rural employment opportunities', 'Bangkok\'s entertainment options, which mainly attract visitors rather than migrants', 'Bangkok’s international airport'], correct: 1, explain: 'Limited employment opportunities in rural, peripheral areas is a push factor \u2014 it drives people away from their origin.', misconception: 'Attractive features of the destination (like jobs or entertainment in Bangkok) are pull factors, not push factors, even though they relate to the same migration.', tag: 'Push and pull factors' },
    { q: 'National-scale development patterns in Thailand show that development is:', options: ['Evenly spread across the whole country', 'Concentrated strongly around Bangkok', 'Concentrated only in rural areas', 'Impossible to measure'], correct: 1, explain: 'Development within Thailand is heavily concentrated around Bangkok, creating a strong national-scale core-periphery pattern.', misconception: 'It is easy to assume development is evenly spread within a single country, but national-scale inequality is common and well documented in Thailand.', tag: 'Development in Thailand' },
    { q: 'Voluntary internal migration differs from forced displacement because it:', options: ['Always involves crossing a border, regardless of the distance travelled within a country', 'Involves people choosing to move, often for economic reasons', 'Is always caused by conflict', 'Never involves push factors'], correct: 1, explain: 'Voluntary migration involves people choosing to move, commonly for economic opportunity, unlike forced displacement caused by conflict or disaster.', misconception: 'Voluntary migration can still involve push factors like limited opportunity \u2014 "voluntary" refers to the element of choice, not the complete absence of pressure.', tag: 'Internal migration' },
    { q: 'How does economic development typically affect population distribution within a country?', options: ['It has no effect at all on where people choose or are able to live within a country', 'It tends to concentrate population around areas of economic opportunity', 'It always spreads population evenly', 'It only affects rural areas'], correct: 1, explain: 'Economic development tends to draw population towards areas of concentrated opportunity, reinforcing core-periphery patterns.', misconception: 'Development is sometimes assumed to naturally spread population more evenly, when in practice it often concentrates people further around existing opportunity.', tag: 'Development in Thailand' }
  ]
};

window.SBL_LESSONS.CP04 = {
  id: 'CP04',
  topicNumber: 1,
  topicTitle: 'Population and economic development patterns',
  title: 'Lesson 4: Case study \u2014 Two countries with uneven population distributions: Egypt and Thailand',
  href: '/geography/paper-1/core-1/t1-population-and/l4-lesson-4-case',
  syllabusFocus: 'A comparative case study of uneven population distribution in Egypt and Thailand.',
  starterButtons: [
    { label: 'Teach me this case study', request: 'Give me a full overview of this case study' },
    { label: 'Thailand overview', request: 'Give an overview of Thailand\u2019s population distribution' },
    { label: 'Egypt overview', request: 'Give an overview of Egypt\u2019s population distribution' },
    { label: 'Why people live near the Nile', request: 'Explain why population concentrates near the Nile in Egypt' },
    { label: 'Physical factors', request: 'Explain the physical factors behind Egypt\u2019s population distribution' },
    { label: 'Economic development', request: 'Explain how economic development affects distribution in these two countries' },
    { label: 'Internal migration', request: 'Explain internal migration patterns in these two countries' },
    { label: 'Compare Egypt and Thailand', request: 'Compare the population distributions of Egypt and Thailand' }
  ],
  checklist: [
    'I can locate Egypt and Thailand.',
    'I can describe Egypt\u2019s uneven population distribution.',
    'I can explain concentration along the Nile and Delta.',
    'I can explain sparse populations in desert areas.',
    'I can describe Thailand\u2019s uneven distribution.',
    'I can explain the role of Bangkok.',
    'I can compare physical and human controls.',
    'I can compare development and migration patterns.'
  ],
  challenge: {
    question: 'Discuss whether human factors are more important than physical in determining population density and distribution.',
    intro: 'This essay draws on everything from this topic \u2014 physical controls like climate, relief and water availability, and human controls like economic development, migration and government policy \u2014 including the Egypt and Thailand case study.'
  },
  readinessQuestions: [
    'Name one factor that explains Egypt\u2019s population distribution.',
    'Name one factor that explains Thailand\u2019s population distribution.',
    'Compare a core region in Egypt with a core region in Thailand.',
    'Explain one similarity between population distribution patterns in Egypt and Thailand.',
    'Explain one difference between population distribution patterns in Egypt and Thailand.'
  ],
  quiz: [
    { q: 'Most of Egypt\u2019s population is concentrated along:', options: ['The Red Sea coast only, with almost no population found along the River Nile itself', 'The Nile Valley and Delta', 'The Sinai desert', 'The Libyan border'], correct: 1, explain: 'The overwhelming majority of Egypt\u2019s population lives along the fertile Nile Valley and Delta.', misconception: 'Coastal areas are sometimes assumed to hold the largest population, but in Egypt it is the fertile river valley, not the coastline, that dominates.', tag: 'Why people live near the Nile' },
    { q: 'Egypt\u2019s desert regions have low population density mainly because of:', options: ['Government restrictions preventing people from settling in the desert regions of Egypt', 'Lack of water and fertile land', 'High crime rates', 'Cold climate'], correct: 1, explain: 'The desert areas lack reliable water and fertile soil, making them inhospitable for large-scale settlement.', misconception: 'Political or social causes are sometimes wrongly assumed; the primary driver in Egypt\u2019s deserts is a physical lack of water and fertile land.', tag: 'Physical factors' },
    { q: 'Which city dominates Thailand\u2019s population and economic distribution?', options: ['Chiang Mai', 'Bangkok', 'Phuket', 'Ayutthaya'], correct: 1, explain: 'Bangkok is Thailand\u2019s primate city, concentrating population, services and economic activity.', misconception: 'Historic or tourist cities are sometimes assumed to be the population centre, but Bangkok\u2019s modern economic dominance makes it the clear primate city.', tag: 'Thailand overview' },
    { q: 'A key similarity between Egypt and Thailand\u2019s population patterns is:', options: ['Both have evenly spread populations, with no strong concentration in a single region', 'Both show strong concentration in one core region', 'Both have no coastal population', 'Both are entirely desert nations'], correct: 1, explain: 'Both countries show strong core-based concentration \u2014 the Nile Valley/Delta in Egypt and Bangkok in Thailand.', misconception: 'Because Egypt and Thailand look very different physically, students sometimes assume their population patterns must also be very different, missing the shared core-concentration pattern.', tag: 'Compare Egypt and Thailand' },
    { q: 'The Aswan High Dam is significant to Egypt because it:', options: ['Created a new desert region, reducing the amount of land available for agriculture', 'Controls the Nile’s flow and supports irrigation', 'Is the country’s largest city', 'Marks the southern border with Sudan only'], correct: 1, explain: 'The Aswan High Dam regulates the Nile\u2019s flow, supporting irrigation and reducing flooding, shaping settlement patterns.', misconception: 'The dam is sometimes mistaken for a settlement or border feature rather than understood as major water-management infrastructure shaping where people can farm and live.', tag: 'Egypt overview' },
    { q: 'How does economic development in Thailand compare with Egypt in terms of distribution?', options: ['Both show no link between development and distribution across the whole country', 'Both show population concentrating around the main economic core', 'Thailand’s population avoids its core city', 'Egypt’s population avoids the Nile'], correct: 1, explain: 'In both countries, population concentrates strongly around the main economic centre \u2014 Bangkok in Thailand and the Nile Valley/Cairo in Egypt.', misconception: 'Students sometimes think development patterns must differ dramatically between very different countries, when the underlying core-concentration principle is actually similar.', tag: 'Economic development' },
    { q: 'Internal migration in Egypt is most commonly directed towards:', options: ['The Western Desert', 'Cairo and the Nile Delta', 'The Sinai desert interior', 'Uninhabited coastal areas'], correct: 1, explain: 'Internal migration in Egypt is strongly directed towards Cairo and the Nile Delta, where opportunities and services are concentrated.', misconception: 'Migration is sometimes assumed to move toward unpopulated space, but in reality people move toward existing opportunity-rich areas, not empty land.', tag: 'Internal migration' },
    { q: 'Comparing the two countries, what is a key difference in the cause of population concentration?', options: ['Egypt’s concentration is driven mainly by water/fertile land; Thailand’s is driven mainly by economic opportunity in Bangkok', 'Both are driven purely by climate, rather than by resources or economic opportunity, according to most published research on the topic.', 'Both are driven purely by government policy', 'There is no meaningful difference'], correct: 0, explain: 'Egypt\u2019s distribution is strongly shaped by the physical need for water and fertile land, while Thailand\u2019s reflects economic concentration around Bangkok.', misconception: 'It is a common oversimplification to assume the same single cause (e.g. water or economy) explains both countries equally, when the balance of physical vs human factors differs.', tag: 'Compare Egypt and Thailand' },
    { q: 'Which best describes population density in Egypt\u2019s desert interior?', options: ['Very high', 'Moderate', 'Very low', 'Identical to the Nile Valley'], correct: 2, explain: 'Egypt\u2019s vast desert interior has very low population density due to the lack of water and arable land.', misconception: 'Because Egypt is a populous country overall, students sometimes assume density is high everywhere, missing the huge contrast between the Nile Valley and the desert interior.', tag: 'Egypt overview' },
    { q: 'What can this case study demonstrate about population distribution generally?', options: ['All countries have identical population patterns, regardless of their physical geography', 'Physical and human factors interact differently in different national contexts', 'Population distribution is unrelated to physical geography', 'Population is always evenly spread within a country'], correct: 1, explain: 'This case study shows how physical and human factors interact differently across contexts, producing uneven distribution shaped by each country\u2019s specific geography.', misconception: 'A case study\u2019s purpose is sometimes misunderstood as proving a universal rule, rather than illustrating how general concepts (like core-periphery patterns) play out differently in specific real places.', tag: 'Compare Egypt and Thailand' }
  ]
};

window.SBL_LESSONS.CP05 = {
  id: 'CP05',
  topicNumber: 2,
  topicTitle: 'Changing populations and places',
  title: 'Population change and demographic transition',
  href: '/geography/paper-1/core-1/t2-changing/l1-population',
  syllabusFocus: 'Demographic indicators, population pyramids, and the Demographic Transition Model (DTM).',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'Demographic indicators', request: 'Explain the key demographic indicators used in population geography' },
    { label: 'Birth and death rates', request: 'Explain crude birth rate and crude death rate' },
    { label: 'Natural increase', request: 'Explain natural increase' },
    { label: 'Fertility rate', request: 'Explain fertility rate' },
    { label: 'Population pyramids', request: 'Explain how to interpret a population pyramid' },
    { label: 'The DTM', request: 'Explain what the Demographic Transition Model is' },
    { label: 'Stages 1 to 5', request: 'Explain each stage of the Demographic Transition Model' },
    { label: 'Fertility decline', request: 'Explain the causes of fertility decline' },
    { label: 'Strengths and limitations', request: 'Explain the strengths and limitations of the Demographic Transition Model' }
  ],
  checklist: [
    'I can define crude birth rate.',
    'I can define crude death rate.',
    'I can explain natural increase.',
    'I can define fertility rate.',
    'I can explain life expectancy.',
    'I can interpret a population pyramid.',
    'I can identify population cohorts.',
    'I can describe each DTM stage.',
    'I can connect DTM stages and pyramid shapes.',
    'I can explain fertility decline.',
    'I can identify strengths and limitations of the DTM.'
  ],
  ibQuestions: [
    {
      question: 'Outline what is meant by "fertility rate".',
      marks: 2,
      markScheme: 'The number of children/number of births per 1000 women [1] a woman gives birth to during her lifetime/fertile years/reproductive age/below 50 [1].'
    }
  ],
  readinessQuestions: [
    'What is the difference between crude birth rate and total fertility rate?',
    'Explain what natural increase measures.',
    'Describe what a population pyramid with a wide base and narrow top tells you about a population.',
    'Name the five stages of the Demographic Transition Model and briefly describe Stage 2.',
    'Give one limitation of the Demographic Transition Model.'
  ],
  quiz: [
    { q: 'Crude birth rate measures:', options: ['Births per 1,000 people per year', 'Births per woman over her lifetime', 'The total number of births ever recorded', 'Births compared to deaths only'], correct: 0, explain: 'Crude birth rate is the number of live births per 1,000 people in a population per year.', misconception: 'Crude birth rate is often confused with total fertility rate, which measures average births per woman, not per 1,000 people.', tag: 'Birth and death rates' },
    { q: 'Natural increase is calculated as:', options: ['Birth rate + death rate', 'Birth rate \u2212 death rate', 'Immigration \u2212 emigration', 'Fertility rate \u00d7 population'], correct: 1, explain: 'Natural increase is the birth rate minus the death rate, excluding migration.', misconception: 'Students sometimes add birth and death rates together instead of subtracting, or confuse natural increase with net migration.', tag: 'Natural increase' },
    { q: 'In DTM Stage 2, population grows rapidly mainly because:', options: ['Birth rates fall faster than death rates, causing the total population to shrink quickly', 'Death rates fall while birth rates stay high', 'Both rates fall together', 'Migration increases sharply'], correct: 1, explain: 'In Stage 2, death rates fall due to improved healthcare and sanitation, while birth rates remain high, causing rapid growth.', misconception: 'A common error is assuming birth rates fall first, when actually the death rate drop precedes any fall in birth rate in the classic model.', tag: 'Stages 1 to 5' },
    { q: 'A population pyramid with a wide base and narrow top typically indicates:', options: ['An ageing population', 'A young, fast-growing population', 'A declining population, with fewer children being born than in previous generations', 'A population with no children'], correct: 1, explain: 'A wide base shows a large proportion of young people, typical of a fast-growing population.', misconception: 'Pyramid shape is sometimes read backwards; remember a wide base means many young people, not an ageing population.', tag: 'Population pyramids' },
    { q: 'A common limitation of the DTM is that it:', options: ['Applies perfectly to every country', 'Was based on the experience of Western European countries', 'Cannot be used to explain any country, including those it was originally based on', 'Only applies to Africa'], correct: 1, explain: 'The DTM was developed from the historical experience of Western European countries, so it does not perfectly predict every country\u2019s pattern.', misconception: 'The DTM is sometimes treated as a universal law rather than a generalised model with real limitations for countries that developed differently.', tag: 'Strengths and limitations' },
    { q: 'Total fertility rate (TFR) measures:', options: ['The number of births per 1,000 people', 'The average number of children a woman would have in her lifetime', 'The number of deaths per 1,000 people', 'The total population of a country, counted at a single point in time each year'], correct: 1, explain: 'TFR estimates the average number of children a woman would have over her reproductive lifetime, based on current birth rates.', misconception: 'TFR is often confused with crude birth rate; TFR is per woman over a lifetime, while crude birth rate is per 1,000 people per year.', tag: 'Fertility rate' },
    { q: 'A "youthful" population cohort refers to people typically aged:', options: ['0\u201314', '15\u201364', '65 and over', 'All ages equally'], correct: 0, explain: 'The youthful/dependent cohort is typically defined as ages 0\u201314, shown at the base of a population pyramid.', misconception: 'Cohort age ranges are sometimes guessed rather than known precisely; the standard youthful cohort cut-off is 14, not a rounder number like 18.', tag: 'Population pyramids' },
    { q: 'In DTM Stage 5, some demographers argue that a country may experience:', options: ['Rapid population growth', 'Natural decrease, where deaths exceed births', 'The highest birth rate of any stage, driven by continued high fertility across society', 'No demographic change at all'], correct: 1, explain: 'Some models extend the DTM to a Stage 5, where very low fertility can cause natural decrease as deaths exceed births.', misconception: 'Stage 5 is sometimes forgotten or confused with Stage 4 (stable, low growth); the key difference is Stage 5 can show actual population decline.', tag: 'Stages 1 to 5' },
    { q: 'A key cause of fertility decline in many developing countries has been:', options: ['Declining access to education for women', 'Increased access to education and employment for women', 'Rising infant mortality, which typically increases rather than decreases fertility', 'Government bans on all healthcare'], correct: 1, explain: 'Increased education and employment opportunities for women are strongly linked to declining fertility rates worldwide.', misconception: 'It is sometimes wrongly assumed that fertility decline is driven mainly by government force, when broader social and economic changes (like education) are the dominant global driver.', tag: 'Fertility decline' },
    { q: 'Life expectancy is best defined as:', options: ['The average age people currently are', 'The average number of years a newborn is expected to live', 'The maximum possible human age, a fixed biological limit that does not vary by place', 'The retirement age in a country'], correct: 1, explain: 'Life expectancy is a statistical estimate of the average number of years a newborn can expect to live, based on current mortality patterns.', misconception: 'Life expectancy is sometimes confused with the maximum lifespan or current average age of the population, rather than a forward-looking statistical estimate.', tag: 'Demographic indicators' }
  ]
};

window.SBL_LESSONS.CP06 = {
  id: 'CP06',
  topicNumber: 2,
  topicTitle: 'Changing populations and places',
  title: 'Comparing demographic transition: Thailand and the Gambia',
  href: '/geography/paper-1/core-1/t2-changing/l2-comparing',
  syllabusFocus: 'A comparative case study of demographic transition in Thailand (ageing) and the Gambia (youthful).',
  starterButtons: [
    { label: 'Teach me this case study', request: 'Give me a full overview of this case study' },
    { label: 'What is dependency?', request: 'Explain what a dependency ratio is' },
    { label: 'Youthful populations', request: 'Explain what causes a youthful population structure' },
    { label: 'Ageing populations', request: 'Explain what causes an ageing population structure' },
    { label: 'Thailand', request: 'Describe Thailand\u2019s demographic transition' },
    { label: 'The Gambia', request: 'Describe the Gambia\u2019s demographic transition' },
    { label: 'Compare the countries', request: 'Compare Thailand and the Gambia\u2019s demographic transition' },
    { label: 'Problems and responses', request: 'Explain the problems and possible responses linked to these population structures' }
  ],
  checklist: [
    'I can identify the likely DTM stage of Thailand.',
    'I can identify the likely DTM stage of The Gambia.',
    'I can compare fertility rates.',
    'I can compare population growth.',
    'I can compare life expectancy.',
    'I can compare age structures.',
    'I can compare dependency patterns.',
    'I can explain Thailand\u2019s ageing challenge.',
    'I can explain The Gambia\u2019s youthful population.',
    'I can suggest appropriate responses.'
  ],
  ibQuestions: [
    {
      question: 'Suggest two reasons why fertility rates decline when the status of women is improved.',
      marks: 4,
      markScheme: 'In each case, award [1] for a valid reason and [1] for development of how it impacts upon the fertility rate.\n\nPossibilities include:\n- Employment – delayed marriage and delayed childbirth.\n- Access to family planning services.\n- Education for women – delays marriage/childbirth.\n- Reduced child mortality rates – fewer replacement births.\n- Societal status of women – women have more freedom and rights, thus giving them more decision-making powers\n\nFor example: One reason is because women have more access to contraception and birth control advice [1] which means they have more control over the number of children in their families [1].'
    }
  ],
  readinessQuestions: [
    'What does a dependency ratio measure?',
    'Explain why Thailand\u2019s population structure is described as ageing.',
    'Explain why the Gambia\u2019s population structure is described as youthful.',
    'Give one challenge linked to an ageing population and one linked to a youthful population.',
    'Suggest one policy response a government could use to manage an ageing population.'
  ],
  quiz: [
    { q: 'A dependency ratio compares:', options: ['Working-age people to non-working-age people', 'Men to women in a population, expressed as a ratio at a single point in time', 'Rural to urban population', 'Births to deaths'], correct: 0, explain: 'The dependency ratio compares the economically dependent population (young and old) to the working-age population.', misconception: 'Dependency ratio is sometimes confused with the sex ratio or urban/rural split, but it specifically relates to economic dependency by age.', tag: 'What is dependency?' },
    { q: 'Thailand\u2019s population structure is best described as:', options: ['Youthful, with high fertility', 'Ageing, with declining fertility', 'Static with no change since 1950', 'Entirely rural'], correct: 1, explain: 'Thailand has undergone rapid demographic transition and now has an ageing population structure.', misconception: 'Because Thailand is in Southeast Asia, students sometimes assume it must still have a youthful structure like many LICs, missing its rapid demographic transition.', tag: 'Thailand' },
    { q: 'The Gambia\u2019s population structure is best described as:', options: ['Ageing, with low fertility', 'Youthful, with high fertility', 'Declining in total size, as fertility falls below the level needed to replace it', 'Identical to Thailand’s'], correct: 1, explain: 'The Gambia remains at an earlier stage of demographic transition with a young, fast-growing population.', misconception: 'It is a common error to assume all countries follow demographic transition at the same pace; the Gambia and Thailand are at very different stages.', tag: 'The Gambia' },
    { q: 'A key challenge for an ageing population like Thailand\u2019s is:', options: ['Overcrowded schools', 'Rising demand for pensions and elderly care', 'Too few working-age adults being born historically', 'None \u2014 ageing has no economic impact'], correct: 1, explain: 'Ageing populations place increasing demand on pensions, healthcare and elderly care services.', misconception: 'Ageing is sometimes wrongly assumed to have no economic consequences, when it creates significant pressure on health and pension systems.', tag: 'Problems and responses' },
    { q: 'A key challenge for a youthful population like the Gambia\u2019s is:', options: ['Providing enough schools, jobs and services for a growing young population', 'A shrinking total population, caused by falling fertility across every age group', 'Too many elderly care homes', 'Falling birth rates'], correct: 0, explain: 'Youthful populations create pressure to provide sufficient education, healthcare, and future employment.', misconception: 'Youthful population challenges are sometimes confused with ageing-population challenges; the pressure here is on schools and future jobs, not elderly care.', tag: 'Problems and responses' },
    { q: 'Which DTM stage is Thailand most likely to be in?', options: ['Stage 1', 'Stage 2', 'Stage 4 or 5', 'Thailand is outside the DTM model'], correct: 2, explain: 'Thailand\u2019s low fertility and slowing/ageing population place it at Stage 4, with some indicators approaching Stage 5.', misconception: 'Thailand is sometimes mistakenly placed in an early DTM stage because it is not classified as an HIC, but its demographic indicators are much more advanced.', tag: 'Thailand' },
    { q: 'Which DTM stage is the Gambia most likely to be in?', options: ['Stage 1', 'Stage 2', 'Stage 4', 'Stage 5'], correct: 1, explain: 'The Gambia\u2019s combination of falling death rates and still-high birth rates is typical of DTM Stage 2.', misconception: 'Students sometimes place LICs in Stage 1, forgetting that very few countries remain in Stage 1 today due to widespread improvements in healthcare lowering death rates.', tag: 'The Gambia' },
    { q: 'A rising dependency ratio linked to an ageing population puts pressure mainly on:', options: ['The working-age population supporting more dependents', 'The youngest cohort only, who make up a smaller share of a rapidly ageing population', 'International trade', 'Migration policy only'], correct: 0, explain: 'A rising dependency ratio means a smaller working-age population must economically support a larger dependent (often elderly) population.', misconception: 'Dependency pressure is sometimes seen as an abstract statistic rather than understood as a real economic burden on the working population.', tag: 'What is dependency?' },
    { q: 'One possible policy response to an ageing population is:', options: ['Restricting healthcare access, reducing the cost of supporting an ageing population', 'Encouraging higher birth rates or later retirement ages', 'Banning immigration entirely', 'Reducing pension provision to zero'], correct: 1, explain: 'Governments facing ageing populations sometimes encourage higher birth rates, support immigration, or raise retirement ages to manage dependency pressures.', misconception: 'Reducing services (like healthcare or pensions) is sometimes assumed to be the standard policy response, when most strategies aim to sustainably manage rather than cut support.', tag: 'Problems and responses' },
    { q: 'Comparing life expectancy, we would expect:', options: ['The Gambia to have higher life expectancy than Thailand', 'Thailand to have higher life expectancy than the Gambia', 'Both countries to have identical life expectancy', 'Life expectancy to be unrelated to development stage'], correct: 1, explain: 'Thailand\u2019s more advanced stage of demographic and economic development is associated with higher life expectancy than the Gambia\u2019s.', misconception: 'Life expectancy is sometimes assumed to be similar across all developing regions, when it actually varies significantly with a country\u2019s stage of development.', tag: 'Compare the countries' }
  ]
};

window.SBL_LESSONS.CP07 = {
  id: 'CP07',
  topicNumber: 2,
  topicTitle: 'Changing populations and places',
  title: 'The consequences of megacity growth for individuals and societies',
  href: '/geography/paper-1/core-1/t2-changing/l3-the',
  syllabusFocus: 'Megacity growth, urbanisation vs urban growth, and the social, economic and environmental consequences, using Mumbai as the case study.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'What is a megacity?', request: 'Define what a megacity is' },
    { label: 'Urbanisation vs urban growth', request: 'Explain the difference between urbanisation and urban growth' },
    { label: 'Why megacities grow', request: 'Explain why megacities grow' },
    { label: 'Migration and natural increase', request: 'Explain the role of migration and natural increase in megacity growth' },
    { label: 'Global megacity patterns', request: 'Describe global patterns of megacity distribution' },
    { label: 'Social consequences', request: 'Explain the social consequences of megacity growth' },
    { label: 'Economic consequences', request: 'Explain the economic consequences of megacity growth' },
    { label: 'Environmental consequences', request: 'Explain the environmental consequences of megacity growth' },
    { label: 'Mumbai case study', request: 'Teach me the Mumbai megacity case study' }
  ],
  checklist: [
    'I can define megacity.',
    'I can define urbanisation.',
    'I can define urban growth.',
    'I can distinguish urbanisation and urban growth.',
    'I can explain rural-to-urban migration.',
    'I can explain natural increase.',
    'I can describe global megacity patterns.',
    'I can explain social consequences.',
    'I can explain economic consequences.',
    'I can explain environmental consequences.',
    'I can recall one detailed megacity example.'
  ],
  readinessQuestions: [
    'Explain the difference between urbanisation and urban growth.',
    'Give two factors that drive megacity growth.',
    'Describe one social consequence of rapid megacity growth.',
    'Describe one economic and one environmental consequence of megacity growth.',
    'Why is Mumbai used as a case study for this topic?'
  ],
  quiz: [
    { q: 'Urbanisation refers to:', options: ['The physical growth of a city’s built-up area', 'An increasing proportion of a population living in urban areas', 'A decrease in city population, as residents move away towards rural areas instead', 'Only international migration to cities'], correct: 1, explain: 'Urbanisation is the increase in the proportion of a population living in urban areas.', misconception: 'Urbanisation is often confused with the physical spread of a city (which is closer to urban growth) rather than the proportional shift in where people live.', tag: 'Urbanisation vs urban growth' },
    { q: 'Urban growth refers to:', options: ['The increase in the absolute number of people living in urban areas', 'A decline in a city\'s population, as residents move away towards rural areas instead', 'Only rural population change', 'A country’s total GDP'], correct: 0, explain: 'Urban growth is the increase in the total number of people living in urban areas, which can occur even without urbanisation.', misconception: 'Urban growth and urbanisation are often used interchangeably by mistake, but they measure different things \u2014 absolute numbers versus proportion.', tag: 'Urbanisation vs urban growth' },
    { q: 'Megacity growth is driven by:', options: ['Migration only', 'Natural increase only', 'Both migration and natural increase', 'Neither \u2014 megacities appear randomly'], correct: 2, explain: 'Megacities grow through a combination of rural-to-urban migration and natural increase (births exceeding deaths) within the city.', misconception: 'Megacity growth is sometimes attributed to migration alone, overlooking those born within the city as a significant growth driver too.', tag: 'Migration and natural increase' },
    { q: 'A common social consequence of megacity growth is:', options: ['Improved housing for all residents automatically', 'Growth of informal settlements and slums', 'Elimination of poverty', 'Reduced traffic congestion'], correct: 1, explain: 'Rapid, unplanned growth often outpaces housing supply, leading to informal settlements and slums.', misconception: 'Rapid growth is sometimes assumed to automatically bring improved living standards, when in reality it often outpaces infrastructure and housing supply.', tag: 'Social consequences' },
    { q: 'Mumbai is used as a case study because it demonstrates:', options: ['A city with almost no population growth, despite being a major national capital', 'The social, economic and environmental effects of rapid megacity growth', 'A city entirely without informal settlements', 'A purely rural region'], correct: 1, explain: 'Mumbai is a widely used real-world example of the opportunities and challenges created by rapid megacity growth.', misconception: 'Mumbai is sometimes wrongly assumed to be an entirely negative example, when the case study also shows genuine economic opportunity alongside real challenges.', tag: 'Mumbai case study' },
    { q: 'Which is a common economic consequence of megacity growth?', options: ['Increased economic opportunity and productivity concentrated in the city', 'Guaranteed equal income for all residents, regardless of their occupation or location', 'A total absence of informal employment', 'No effect on national GDP'], correct: 0, explain: 'Megacities often concentrate economic opportunity and productivity, contributing significantly to national GDP, even alongside inequality.', misconception: 'It is easy to focus only on the negative consequences of megacities and overlook that they also concentrate significant economic opportunity and output.', tag: 'Economic consequences' },
    { q: 'A common environmental consequence of rapid megacity growth is:', options: ['Improved air quality, as fewer vehicles and factories operate within the city centre', 'Increased air and water pollution', 'A reduction in waste production', 'No change to local ecosystems'], correct: 1, explain: 'Rapid, often unplanned growth strains infrastructure, commonly leading to increased air and water pollution.', misconception: 'Some students assume environmental impact is limited to rural areas; rapid urban growth creates significant, concentrated environmental pressures too.', tag: 'Environmental consequences' },
    { q: 'Rural-to-urban migration towards megacities is often driven by:', options: ['A desire to reduce access to services such as healthcare, education and transport', 'The search for employment and better opportunities', 'Government bans on rural life', 'Random chance'], correct: 1, explain: 'People commonly migrate to megacities in search of employment, education and improved access to services.', misconception: 'Migration decisions are sometimes portrayed as random or forced, when in most megacity contexts they reflect a genuine search for economic opportunity.', tag: 'Migration and natural increase' },
    { q: 'Which region contains the largest number of the world\u2019s megacities today?', options: ['Europe', 'Asia', 'Antarctica', 'Oceania'], correct: 1, explain: 'Asia contains the largest number of the world\u2019s megacities, reflecting rapid urbanisation and large populations in the region.', misconception: 'Europe is sometimes assumed to have the most megacities due to its historical urban development, but the largest concentration today is in Asia.', tag: 'Global megacity patterns' },
    { q: 'Informal settlements in megacities like Mumbai typically develop because:', options: ['Formal housing supply cannot keep pace with rapid population growth', 'Residents prefer informal housing over all alternatives, regardless of cost or safety', 'Government housing is unlimited', 'Land is completely unavailable everywhere'], correct: 0, explain: 'Informal settlements develop largely because formal housing and planning cannot keep up with the pace of rapid urban population growth.', misconception: 'Informal settlements are sometimes framed simply as a matter of preference, when they usually result from a genuine shortage of affordable formal housing.', tag: 'Social consequences' }
  ]
};

window.SBL_LESSONS.CP08 = {
  id: 'CP08',
  topicNumber: 2,
  topicTitle: 'Changing populations and places',
  title: 'The causes and consequences of forced migration and internal displacement \u2014 The Rohingya, Burma',
  href: '/geography/paper-1/core-1/t2-changing/l4-the-causes-and',
  syllabusFocus: 'Forced migration terminology and the Rohingya case study of displacement from Burma (Myanmar).',
  starterButtons: [
    { label: 'Teach me this case study', request: 'Give me a full overview of this case study' },
    { label: 'What is forced migration?', request: 'Define forced migration' },
    { label: 'Refugee vs IDP', request: 'Explain the difference between a refugee and an internally displaced person (IDP)' },
    { label: 'What is an asylum seeker?', request: 'Define asylum seeker' },
    { label: 'Political push factors', request: 'Explain political push factors behind forced migration' },
    { label: 'Why the Rohingya were displaced', request: 'Explain why the Rohingya were displaced from Burma' },
    { label: 'Consequences for people', request: 'Explain the consequences of this displacement for the Rohingya people' },
    { label: 'Consequences for Burma', request: 'Explain the consequences of this displacement for Burma' },
    { label: 'Consequences for receiving places', request: 'Explain the consequences for places receiving displaced Rohingya people' }
  ],
  checklist: [
    'I can define forced migration.',
    'I can distinguish a refugee and an IDP.',
    'I can define asylum seeker.',
    'I can explain political push factors.',
    'I can explain why the Rohingya were displaced.',
    'I can explain consequences for displaced people.',
    'I can explain consequences for origin areas.',
    'I can explain consequences for receiving places.',
    'I can recall accurate case-study evidence.'
  ],
  readinessQuestions: [
    'Explain the difference between a refugee and an internally displaced person (IDP).',
    'What is an asylum seeker?',
    'Give one political push factor that can cause forced migration.',
    'Explain why the Rohingya were displaced from Burma.',
    'Give one consequence of displacement for the people affected and one for the receiving area.'
  ],
  quiz: [
    { q: 'An internally displaced person (IDP) is someone who:', options: ['Has crossed an international border seeking safety, and is legally recognised abroad', 'Has been forced to flee but remains within their own country', 'Has migrated voluntarily for work', 'Is a tourist visiting temporarily'], correct: 1, explain: 'An IDP is forced to flee their home but stays within their own country\u2019s borders, unlike a refugee.', misconception: 'IDP and refugee are very commonly confused; the key distinguishing feature is whether an international border has been crossed.', tag: 'Refugee vs IDP' },
    { q: 'A refugee is legally defined as someone who:', options: ['Has crossed an international border due to fear of persecution', 'Moves for better job opportunities, rather than fleeing persecution or conflict at home', 'Is displaced but remains in their home country', 'Travels for tourism'], correct: 0, explain: 'A refugee has crossed an international border and cannot return due to a well-founded fear of persecution.', misconception: 'Economic migrants are sometimes mislabelled as refugees; the legal definition of refugee specifically requires fear of persecution, not economic motivation.', tag: 'Refugee vs IDP' },
    { q: 'An asylum seeker is someone who:', options: ['Has been granted refugee status, and no longer requires any further legal assessment', 'Has applied for protection but whose claim has not yet been decided', 'Is an internal migrant only', 'Cannot ever apply for refugee status'], correct: 1, explain: 'An asylum seeker has applied for international protection, but their claim has not yet been formally decided.', misconception: 'Asylum seeker and refugee are sometimes used interchangeably, but an asylum seeker\u2019s status is still pending a decision.', tag: 'What is an asylum seeker?' },
    { q: 'The displacement of the Rohingya from Burma is primarily linked to:', options: ['Voluntary economic migration, chosen freely in search of better job opportunities', 'Political and ethnic persecution', 'A natural disaster', 'International tourism policy'], correct: 1, explain: 'The Rohingya crisis stems from political and ethnic persecution and violence within Burma (Myanmar).', misconception: 'Forced displacement is sometimes wrongly generalised as economic migration; the Rohingya case is specifically driven by persecution, not economic choice.', tag: 'Why the Rohingya were displaced' },
    { q: 'A consequence for places receiving large numbers of displaced Rohingya has been:', options: ['No noticeable impact at all on housing, services or resources in the receiving area', 'Pressure on housing, services and resources in refugee camps', 'Immediate full integration with no challenges', 'A decrease in population in receiving areas'], correct: 1, explain: 'Receiving areas, such as refugee camps in Bangladesh, have faced significant pressure on housing, services and resources.', misconception: 'Receiving large refugee populations is sometimes assumed to have minimal impact, when in practice it creates substantial pressure on local infrastructure and services.', tag: 'Consequences for receiving places' },
    { q: 'Political push factors that can cause forced migration include:', options: ['Persecution based on ethnicity or religion', 'Better job availability elsewhere, encouraging people to move away from their home area', 'A desire for a change of climate', 'Access to better shopping facilities'], correct: 0, explain: 'Persecution based on ethnicity, religion or political belief is a classic political push factor forcing people to flee.', misconception: 'Push factors relating to lifestyle preference (climate, shopping) are sometimes confused with the serious political and safety-related push factors behind forced migration.', tag: 'Political push factors' },
    { q: 'A consequence for Burma (Myanmar) itself following the Rohingya displacement has been:', options: ['International criticism and scrutiny', 'Universal international praise for its handling of the Rohingya displacement crisis', 'No diplomatic consequences at all', 'Increased tourism revenue'], correct: 0, explain: 'Burma has faced significant international criticism and diplomatic scrutiny in response to the treatment and displacement of the Rohingya.', misconception: 'It is sometimes assumed that displacement crises have no consequences for the country of origin, but they often carry major diplomatic and reputational consequences.', tag: 'Consequences for Burma' },
    { q: 'A key consequence for displaced Rohingya people has been:', options: ['Guaranteed immediate citizenship in host countries, with full legal rights on arrival', 'Loss of home, livelihood, and access to basic services', 'Improved legal status compared to before displacement', 'No change to daily life'], correct: 1, explain: 'Displaced Rohingya people have commonly lost their homes, livelihoods and access to basic services and legal protections.', misconception: 'Displacement is sometimes assumed to quickly resolve into stable new citizenship, when in reality many displaced people face prolonged uncertainty and hardship.', tag: 'Consequences for people' },
    { q: 'Which best distinguishes forced migration from voluntary migration?', options: ['Forced migration always involves crossing an ocean, regardless of the distance travelled, regardless of location.', 'Forced migration happens due to compulsion, such as persecution or conflict, not free choice', 'Voluntary migration never has any push factors', 'There is no real difference between the two'], correct: 1, explain: 'Forced migration occurs due to compulsion \u2014 people are made to leave through persecution, conflict or disaster \u2014 rather than through free choice.', misconception: 'The line between forced and voluntary migration is sometimes oversimplified; the key distinction is the presence of genuine compulsion, not the distance travelled.', tag: 'What is forced migration?' },
    { q: 'Statelessness is a risk that can affect displaced groups like the Rohingya when:', options: ['They are automatically granted citizenship elsewhere', 'They are not recognised as citizens by any country', 'They return home immediately', 'They never leave their home region'], correct: 1, explain: 'Displaced groups can become stateless when they are not recognised as citizens by their country of origin or any other state, leaving them without legal protection.', misconception: 'Statelessness is sometimes assumed to be rare or automatic to resolve, when in cases like the Rohingya it can persist as a serious, long-term legal problem.', tag: 'Consequences for people' }
  ]
};

window.SBL_LESSONS.CP09 = {
  id: 'CP09',
  topicNumber: 2,
  topicTitle: 'Changing populations and places',
  title: 'Internal displacement in Haiti',
  href: '/geography/paper-1/core-1/t2-changing/l5-internal',
  syllabusFocus: 'The 2010 Haiti earthquake, internal displacement, and long-term consequences including Hurricane Matthew.',
  starterButtons: [
    { label: 'Teach me this case study', request: 'Give me a full overview of this case study' },
    { label: 'Haiti earthquake overview', request: 'Give an overview of the 2010 Haiti earthquake' },
    { label: 'Why people were displaced', request: 'Explain why people were displaced after the earthquake' },
    { label: 'Short-term consequences', request: 'Explain the short-term consequences of the earthquake' },
    { label: 'Long-term consequences', request: 'Explain the long-term consequences of the earthquake' },
    { label: 'Impacts on public services', request: 'Explain the impacts on public services in Haiti' },
    { label: 'Displacement camps', request: 'Explain the problems within displacement camps' },
    { label: 'Hurricane Matthew', request: 'Explain how Hurricane Matthew affected Haiti\u2019s recovery' },
    { label: 'Government and rebuilding challenges', request: 'Explain the challenges Haiti faced in rebuilding' }
  ],
  checklist: [
    'I can outline the 2010 earthquake context.',
    'I can explain why internal displacement occurred.',
    'I can distinguish short-term and long-term effects.',
    'I can explain problems within displacement camps.',
    'I can explain impacts on public services.',
    'I can explain effects on the state.',
    'I can explain why rebuilding was difficult.',
    'I can explain how later hazards increased vulnerability.'
  ],
  ibQuestions: [
    {
      question: 'Explain one environmental consequence of one named forced migration.',
      marks: 3,
      markScheme: 'The example could be internal displacement or refugees. Accept a broad interpretation of "environmental", to include the built environment and landscape.\n\nIdentified and located example of a forced migration [1]. Identified environmental consequence [1]. Further developed explanation [1].\n\nEnvironmental consequence of migration may include:\n- Deforestation\n- Soil erosion\n- Contamination of water supplies \u2013 rivers/groundwater\n- Depletion of water resources\n- Waste disposal\n- Aesthetic damage\n- Production of environments that breed disease\n- Loss of biodiversity\n- Air pollution\n- Land degradation.\n\nFor example: Northern Cameroon hosts Nigerian refugees who have escaped violence [1] this has caused rapid deforestation [1] as refugees need firewood for cooking [1].\n\nFor example: Lebanon has many Syrian refugees escaping war [1] the waste from informal settlements is often dumped in an uncontrolled manner [1] this leads to soil and water pollution [1].'
    }
  ],
  readinessQuestions: [
    'Why did the 2010 earthquake cause mass internal displacement in Haiti?',
    'Give one short-term consequence and one long-term consequence of the earthquake.',
    'Describe one problem commonly found within displacement camps.',
    'Explain how Hurricane Matthew affected Haiti\u2019s recovery.',
    'Give one reason rebuilding was particularly difficult in Haiti.'
  ],
  quiz: [
    { q: 'The 2010 Haiti earthquake caused mass internal displacement mainly because:', options: ['Homes and infrastructure were destroyed', 'The government banned people from staying in cities', 'It caused a drought', 'People chose to migrate for work'], correct: 0, explain: 'Widespread destruction of homes and infrastructure forced huge numbers of people from their homes.', misconception: 'Displacement after a natural disaster is sometimes framed as a policy choice, when it is directly caused by the physical destruction of homes and infrastructure.', tag: 'Why people were displaced' },
    { q: 'A short-term consequence of the earthquake was:', options: ['Full economic recovery within days, with no lasting disruption to daily life', 'Emergency displacement camps and loss of shelter', 'Permanent population decline to zero', 'Immediate rebuilding of all infrastructure'], correct: 1, explain: 'Immediately after the earthquake, huge numbers of people were left without shelter, relying on emergency camps.', misconception: 'Recovery timescales are sometimes assumed to be fast; in reality, the immediate aftermath involved emergency shelter needs, not rapid full recovery.', tag: 'Short-term consequences' },
    { q: 'A common problem within displacement camps was:', options: ['Overcrowding and poor sanitation', 'Excess space and resources, with far more shelter and supplies than were actually needed', 'No need for aid', 'Complete safety with no risks'], correct: 0, explain: 'Displacement camps often suffered from overcrowding, poor sanitation, and disease risk, including cholera outbreaks.', misconception: 'Displacement camps are sometimes imagined as adequately resourced, when in reality overcrowding and inadequate sanitation were major, well-documented problems.', tag: 'Displacement camps' },
    { q: 'Hurricane Matthew affected Haiti\u2019s recovery by:', options: ['Having no impact since it happened years later, well after recovery had been completed', 'Causing further destruction and setting back rebuilding efforts', 'Improving infrastructure', 'Ending displacement entirely'], correct: 1, explain: 'Hurricane Matthew (2016) caused further destruction, compounding Haiti\u2019s ongoing recovery challenges.', misconception: 'Later hazards are sometimes assumed to be unrelated to earlier recovery efforts, when in Haiti\u2019s case Hurricane Matthew significantly compounded existing vulnerability.', tag: 'Hurricane Matthew' },
    { q: 'A key reason rebuilding was difficult in Haiti was:', options: ['Haiti had unlimited government funding', 'Limited government capacity and resources', 'No international aid was offered', 'The earthquake caused no damage to infrastructure'], correct: 1, explain: 'Haiti\u2019s limited government capacity and resources made long-term rebuilding especially challenging.', misconception: 'Rebuilding difficulty is sometimes attributed only to the disaster\u2019s scale, but limited pre-existing government capacity was also a major contributing factor.', tag: 'Government and rebuilding challenges' },
    { q: 'A long-term consequence of the earthquake for Haiti\u2019s public services was:', options: ['Immediate full restoration of all hospitals and schools within weeks of the earthquake', 'Prolonged strain on damaged hospitals, schools and infrastructure', 'No impact on public services at all', 'Public services became unnecessary'], correct: 1, explain: 'Public services such as hospitals and schools were severely damaged, and their restoration remained a long-term challenge well beyond the initial disaster.', misconception: 'It is sometimes assumed that damaged infrastructure is quickly repaired, when in Haiti\u2019s case the strain on public services was a long-term, ongoing issue.', tag: 'Impacts on public services' },
    { q: 'Which best describes the difference between short-term and long-term consequences in this case study?', options: ['There is no meaningful difference', 'Short-term effects relate to immediate survival needs; long-term effects relate to lasting structural and economic challenges', 'Short-term effects last for decades, while long-term effects fade away within days, according to most published research on the topic.', 'Long-term effects only affect the government'], correct: 1, explain: 'Short-term consequences involve immediate survival needs like shelter, while long-term consequences involve lasting structural, economic and governance challenges.', misconception: 'Students sometimes blur short-term and long-term consequences together, rather than distinguishing between immediate emergency needs and lasting structural impacts.', tag: 'Long-term consequences' },
    { q: 'The vulnerability of Haiti to disasters like the 2010 earthquake is increased by:', options: ['Strong existing infrastructure and high government capacity to respond to hazards', 'Limited infrastructure, poverty, and limited government capacity', 'Complete isolation from natural hazards', 'Excess emergency resources'], correct: 1, explain: 'Haiti\u2019s vulnerability to disasters is heightened by limited infrastructure, widespread poverty, and constrained government capacity to respond and rebuild.', misconception: 'Vulnerability is sometimes seen as caused only by the hazard itself, when underlying social and economic conditions significantly shape how severely a disaster affects a place.', tag: 'Government and rebuilding challenges' },
    { q: 'International aid after the Haiti earthquake illustrates that disaster recovery often depends on:', options: ['A single country acting entirely alone', 'A combination of domestic capacity and international support', 'No outside support being necessary, since domestic capacity alone was sufficient', 'Aid always being immediately effective with no challenges'], correct: 1, explain: 'Recovery after major disasters like Haiti\u2019s earthquake typically depends on a combination of domestic government capacity and international aid, though coordinating aid effectively is itself a challenge.', misconception: 'International aid is sometimes assumed to instantly solve recovery challenges, when coordinating aid effectively alongside limited domestic capacity remains genuinely difficult.', tag: 'Government and rebuilding challenges' },
    { q: 'Disease outbreaks, such as cholera, following the Haiti earthquake were made more likely by:', options: ['Excellent sanitation in displacement camps, reducing the risk of any disease outbreak', 'Overcrowding and poor sanitation in displacement camps', 'A complete absence of displaced people', 'Cold weather conditions'], correct: 1, explain: 'Overcrowded camps with inadequate sanitation created conditions in which disease, including cholera, could spread rapidly among displaced populations.', misconception: 'Disease outbreaks after disasters are sometimes seen as random bad luck, when they are closely linked to identifiable conditions like overcrowding and poor sanitation.', tag: 'Displacement camps' }
  ]
};

window.SBL_LESSONS.CP10 = {
  id: 'CP10',
  topicNumber: 3,
  topicTitle: 'Challenges and opportunities',
  title: 'Trends in family size, sex ratios and ageing',
  href: '/geography/paper-1/core-1/t3-challenges-and/l1-trends-in',
  syllabusFocus: 'Global and regional trends in family size, sex ratios, and population ageing.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'Family size', request: 'Explain trends in family size' },
    { label: 'Fertility patterns', request: 'Explain global fertility patterns' },
    { label: 'Sex ratios', request: 'Explain what a sex ratio is' },
    { label: 'Why sex ratios vary', request: 'Explain why sex ratios vary between countries' },
    { label: 'Ageing and greying', request: 'Explain what is meant by an ageing or greying population' },
    { label: 'Why populations age', request: 'Explain why populations age' },
    { label: 'Regional differences', request: 'Explain regional differences in these population trends' },
    { label: 'Opportunities and challenges', request: 'Explain the opportunities and challenges created by these trends' }
  ],
  checklist: [
    'I can define family size.',
    'I can connect family size and fertility.',
    'I can define sex ratio.',
    'I can interpret a ratio above or below 100.',
    'I can define ageing or greying.',
    'I can explain why populations age.',
    'I can describe global and regional patterns.',
    'I can explain opportunities created by these trends.',
    'I can explain challenges created by these trends.'
  ],
  ibQuestions: [
    {
      question: 'Explain why some places have an uneven sex ratio as a result of: (i) migration; (ii) an ageing society.',
      marks: 4,
      markScheme: '(i) Migration\n\nAnswers may refer to source or destination places and can be based on international/regional/rural:urban migration.\n\nAward [1] for a basic explanatory comment and [1] for further valid explanation/exemplification linked to a valid and identified uneven sex ratio.\n\nValid reasons may include:\n- Migration of males to find work gives higher proportion of males in working in destination countries/gives lower proportion of males in origin countries.\n- Inability of male labourers to bring families with them gives higher proportion of males.\n- Migration of female domestic and care labour eg Sri Lanka leaves a gap in the middle age female groups.\n- Migration of males of fighting age to join armies, leaves places with a higher proportion of young females.\n\nFor example: Influx of male construction workers into an oil rich nation such as UAE [1] so there tends to be a larger proportion of men than women [1]\n\n(ii) An ageing society\n\nAward [1] for a basic explanatory comment and [1] for further explanation/exemplification linked to a valid and identified uneven sex ratio.\n\nValid reasons may include:\n- Macho culture encourages risky behaviour meaning higher mortality as the population ages.\n- Males occupy dangerous jobs that lead to a higher mortality leaving a smaller proportion of males in older age groups.\n- Child mortality is higher amongst boys, more females survive until old age.\n- Biological difference in chromosomes and hormones, females are advantaged [less fat surrounding organs] and live longer.\n- Females more willing to consult medical advice, live longer.\n\nFor example: Women tend to have higher life expectancies than men [1], so in the over 65s there tends to be a greater proportion of women than men [1].'
    }
  ],
  readinessQuestions: [
    'What is meant by a sex ratio, and what does a ratio above 100 tell you?',
    'Explain what is meant by an "ageing" or "greying" population.',
    'Give one reason family size has been falling in many countries.',
    'Which world region shows the most advanced population ageing, and why?',
    'Give one opportunity and one challenge linked to these population trends.'
  ],
  quiz: [
    { q: 'A sex ratio is usually expressed as:', options: ['The number of males per 100 females', 'The total male population only', 'The birth rate of a country', 'The percentage of the elderly population'], correct: 0, explain: 'A sex ratio is commonly expressed as the number of males per 100 females in a population.', misconception: 'Sex ratio is sometimes confused with a simple percentage of males in the total population, rather than a ratio relative to females specifically.', tag: 'Sex ratios' },
    { q: 'A sex ratio above 100 means:', options: ['There are more females than males', 'There are more males than females', 'The population is exactly balanced', 'The population is shrinking'], correct: 1, explain: 'A ratio above 100 means there are more males than females per 100 in that population.', misconception: 'Direction of the ratio is sometimes read backwards; above 100 always means more males, since the ratio is males per 100 females.', tag: 'Why sex ratios vary' },
    { q: 'An "ageing" or "greying" population refers to:', options: ['A population with an increasing proportion of older people', 'A population with rapidly rising birth rates and a growing share of young children', 'A population moving to cities', 'A population with equal numbers at every age'], correct: 0, explain: 'An ageing population has a growing proportion of older people, usually linked to falling fertility and rising life expectancy.', misconception: '"Ageing population" is sometimes assumed to simply mean "getting older individually," rather than referring to a structural shift in the population\u2019s overall age profile.', tag: 'Ageing and greying' },
    { q: 'Falling family size is closely linked to:', options: ['Rising fertility rates', 'Falling fertility rates', 'Increasing birth rates only', 'No demographic connection at all'], correct: 1, explain: 'Falling family size is closely connected to declining fertility rates.', misconception: 'Family size and fertility rate are sometimes treated as unrelated statistics, when they are directly and closely connected.', tag: 'Family size' },
    { q: 'A challenge associated with an ageing population is:', options: ['Too many young workers relative to the number of dependents needing support', 'Increased demand for pensions and healthcare', 'Falling demand for elderly care', 'A shrinking dependency ratio'], correct: 1, explain: 'Ageing populations increase demand for pensions, healthcare and elderly support services.', misconception: 'Dependency ratio direction is sometimes confused; ageing typically increases (not shrinks) the dependency ratio as more elderly dependents need support.', tag: 'Opportunities and challenges' },
    { q: 'A skewed sex ratio at birth (favouring males) in some countries is often linked to:', options: ['Random natural variation with no social cause, occurring equally in every country', 'Cultural son preference and gender-selective practices', 'Higher life expectancy for men', 'Lower birth rates overall'], correct: 1, explain: 'In some countries, cultural son preference has contributed to skewed sex ratios at birth through gender-selective practices.', misconception: 'Skewed sex ratios at birth are sometimes assumed to be purely biological or random, when social and cultural factors are a significant documented cause in some regions.', tag: 'Why sex ratios vary' },
    { q: 'Which region generally shows the most advanced population ageing today?', options: ['Sub-Saharan Africa', 'Western Europe and East Asia', 'South America\u2019s Amazon Basin', 'Central Africa'], correct: 1, explain: 'Western Europe and parts of East Asia (such as Japan) show some of the most advanced population ageing globally, linked to very low fertility and high life expectancy.', misconception: 'Ageing is sometimes assumed to be evenly distributed globally, when it is in fact heavily concentrated in specific high-income regions with long-established low fertility.', tag: 'Regional differences' },
    { q: 'An "opportunity" that can arise from a shift toward smaller family sizes is:', options: ['Increased strain on family resources', 'More resources potentially available per child, such as for education', 'Guaranteed higher national income, regardless of how those resources are actually used', 'Automatic population decline to zero'], correct: 1, explain: 'Smaller family sizes can allow families to invest more resources, such as education and healthcare, per child.', misconception: 'Falling family size is sometimes framed only as a future problem (e.g. ageing), overlooking real potential benefits like increased investment per child in the near term.', tag: 'Opportunities and challenges' },
    { q: 'Rising life expectancy contributes to population ageing because:', options: ['It has no relationship to ageing, regardless of how long people are living for, regardless of location.', 'More people survive into older age groups, increasing their share of the population', 'It automatically increases birth rates', 'It only affects countries with high fertility'], correct: 1, explain: 'As life expectancy rises, more people survive into older age, increasing the proportion of elderly people within the total population.', misconception: 'Life expectancy and fertility are sometimes conflated; life expectancy affects ageing through survival into old age, not through any direct effect on birth rates.', tag: 'Why populations age' },
    { q: 'A country facing both a youthful population in some regions and an ageing population in others illustrates that:', options: ['Demographic trends are always uniform across a whole country', 'Demographic trends can vary significantly at a sub-national scale', 'Ageing and youthful structures can never coexist in the same country', 'Regional demographic data is never useful'], correct: 1, explain: 'Demographic trends such as ageing and youthful structures can vary significantly within a single country, highlighting the importance of examining data at a sub-national scale.', misconception: 'National averages are sometimes assumed to apply evenly everywhere within a country, when regional demographic variation can be substantial.', tag: 'Regional differences' }
  ]
};

window.SBL_LESSONS.CP11 = {
  id: 'CP11',
  topicNumber: 3,
  topicTitle: 'Challenges and opportunities',
  title: 'Population policies',
  href: '/geography/paper-1/core-1/t3-challenges-and/l2-population',
  syllabusFocus: 'Pro-natalist and anti-natalist population policies, strategies, and evaluation using real examples.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'What is a population policy?', request: 'Define what a population policy is' },
    { label: 'Pro-natalist policies', request: 'Explain what a pro-natalist policy is' },
    { label: 'Anti-natalist policies', request: 'Explain what an anti-natalist policy is' },
    { label: 'Common strategies', request: 'Explain common population policy strategies' },
    { label: 'France or Sweden', request: 'Teach me the pro-natalist example of France or Sweden' },
    { label: 'China\u2019s One Child Policy', request: 'Explain China\u2019s One Child Policy' },
    { label: 'China after the policy', request: 'Explain what happened in China after the One Child Policy' },
    { label: 'Measuring effectiveness', request: 'Explain how to judge the effectiveness of a population policy' }
  ],
  checklist: [
    'I can define population policy.',
    'I can distinguish pro-natalist and anti-natalist policies.',
    'I can identify common strategies.',
    'I can explain why governments adopt policies.',
    'I can describe one pro-natalist example.',
    'I can describe one anti-natalist example.',
    'I can explain short-term impacts.',
    'I can explain long-term impacts.',
    'I can judge effectiveness using demographic evidence.'
  ],
  readinessQuestions: [
    'Explain the difference between a pro-natalist and an anti-natalist policy.',
    'Give one strategy commonly used in a pro-natalist policy.',
    'Why is China\u2019s One Child Policy considered an anti-natalist policy?',
    'Give one long-term consequence linked to China\u2019s One Child Policy.',
    'How would a geographer judge whether a population policy has been effective?'
  ],
  quiz: [
    { q: 'A pro-natalist policy aims to:', options: ['Decrease birth rates', 'Increase birth rates', 'Increase death rates', 'Reduce migration'], correct: 1, explain: 'A pro-natalist policy is designed to encourage higher birth rates.', misconception: 'The "pro" prefix is sometimes read as "against"; pro-natalist means promoting (encouraging) births, not restricting them.', tag: 'Pro-natalist policies' },
    { q: 'An anti-natalist policy aims to:', options: ['Increase birth rates', 'Decrease birth rates', 'Increase life expectancy', 'Encourage migration'], correct: 1, explain: 'An anti-natalist policy is designed to reduce birth rates.', misconception: 'Anti-natalist and pro-natalist terms are often swapped by students; anti-natalist always aims to reduce, not increase, births.', tag: 'Anti-natalist policies' },
    { q: 'China\u2019s One Child Policy is an example of:', options: ['A pro-natalist policy encouraging families to have as many children as possible', 'An anti-natalist policy', 'A migration policy', 'A trade policy'], correct: 1, explain: 'The One Child Policy was an anti-natalist policy aimed at slowing China\u2019s population growth.', misconception: 'Because it involves families and children, the One Child Policy is sometimes mislabelled pro-natalist, when its explicit goal was to reduce birth rates.', tag: 'China\u2019s One Child Policy' },
    { q: 'A common strategy used in pro-natalist policies is:', options: ['Financial incentives for having children', 'Fines for having children, discouraging families from having more than one child', 'Forced sterilisation', 'Banning marriage'], correct: 0, explain: 'Pro-natalist policies commonly use financial incentives, such as child benefits or parental leave, to encourage births.', misconception: 'Coercive strategies (fines, forced measures) are typically anti-natalist tools, not pro-natalist ones, which usually rely on incentives rather than punishment.', tag: 'Common strategies' },
    { q: 'A long-term consequence linked to China\u2019s One Child Policy has been:', options: ['A rapidly increasing birth rate', 'A skewed sex ratio and an ageing population', 'No demographic impact at all, despite decades of strict enforcement across the country', 'A sudden population decline to zero'], correct: 1, explain: 'The policy contributed to a skewed sex ratio and an ageing population structure over the long term.', misconception: 'Policy effects are sometimes assumed to be immediate and short-lived, when the One Child Policy\u2019s demographic consequences unfolded and compounded over decades.', tag: 'China after the policy' },
    { q: 'Why might a government choose an anti-natalist policy?', options: ['To increase rapid population growth, by encouraging families to have more children', 'To manage resource pressure linked to rapid population growth', 'To reduce life expectancy', 'To encourage large families'], correct: 1, explain: 'Governments often adopt anti-natalist policies to manage resource, infrastructure or economic pressures linked to rapid population growth.', misconception: 'Motivations for anti-natalist policy are sometimes assumed to be arbitrary, when they typically respond to genuine, identifiable resource and development pressures.', tag: 'What is a population policy?' },
    { q: 'France and Sweden are commonly cited as examples of countries with:', options: ['Strict anti-natalist policies, discouraging families from having more than one child', 'Pro-natalist policies supporting families and childcare', 'No population policy at all', 'Forced migration policies'], correct: 1, explain: 'France and Sweden are known for pro-natalist-style policies, such as generous parental leave and childcare support, aiming to support birth rates.', misconception: 'High-income countries are sometimes assumed to have no need for population policy, when several actively use pro-natalist measures to address low fertility.', tag: 'France or Sweden' },
    { q: 'To judge whether a population policy has been "effective," geographers typically look at:', options: ['Whether the policy matched its stated demographic goals over time', 'Only how popular the policy was with voters, regardless of its demographic outcomes', 'Only its cost in the first year', 'Whether it was mentioned in the news'], correct: 0, explain: 'Effectiveness is generally judged by comparing actual demographic outcomes (like birth rate change) against the policy\u2019s original goals over time.', misconception: 'Effectiveness is sometimes judged by popularity or short-term reaction alone, rather than by measuring genuine demographic outcomes against the stated policy goals.', tag: 'Measuring effectiveness' },
    { q: 'A potential unintended consequence of coercive anti-natalist policy can include:', options: ['Perfectly balanced population structures with no side effects on society at all', 'Social and demographic side effects, such as skewed sex ratios', 'Guaranteed economic growth with no trade-offs', 'Complete elimination of an ageing population risk'], correct: 1, explain: 'Coercive anti-natalist policies can produce unintended social and demographic side effects, such as skewed sex ratios, as seen in China.', misconception: 'Policies are sometimes evaluated only against their primary stated goal, without considering genuine unintended consequences that can arise alongside it.', tag: 'China after the policy' },
    { q: 'Population policies are best evaluated using:', options: ['Opinion alone, without any demographic data, evidence or measurable outcomes, regardless of location.', 'A combination of demographic evidence and consideration of social consequences', 'Only the policy’s original press announcement', 'The policy’s length in years, regardless of outcomes'], correct: 1, explain: 'Effective evaluation of population policy combines hard demographic evidence (birth rates, dependency ratios) with an assessment of wider social consequences.', misconception: 'Evaluation is sometimes reduced to a single data point or opinion, when a fair assessment requires weighing both demographic outcomes and social side effects together.', tag: 'Measuring effectiveness' }
  ]
};

window.SBL_LESSONS.CP12 = {
  id: 'CP12',
  topicNumber: 3,
  topicTitle: 'Challenges and opportunities',
  title: 'Gender Equality and Human Trafficking',
  href: '/geography/paper-1/core-1/t3-challenges-and/l3-gender-equality',
  syllabusFocus: 'Two linked sections: gender equality (causes, patterns, SDG 5) and human trafficking (definitions, vulnerability, prevention).',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson, covering both gender equality and human trafficking' },
    { label: 'Gender equality vs inequality', request: 'Explain the difference between gender equality and gender inequality' },
    { label: 'Why the gender gap exists', request: 'Explain the causes of the gender gap' },
    { label: 'Why equality matters', request: 'Explain why gender equality matters for development' },
    { label: 'Global gender patterns', request: 'Describe global patterns of gender inequality' },
    { label: 'How inequality is measured', request: 'Explain how gender inequality is measured' },
    { label: 'SDG 5', request: 'Explain Sustainable Development Goal 5' },
    { label: 'Trafficking vs smuggling', request: 'Explain the difference between human trafficking and people smuggling' },
    { label: 'Types of trafficking', request: 'Explain the main forms of human trafficking' },
    { label: 'Why people are vulnerable', request: 'Explain why some people are more vulnerable to trafficking' },
    { label: 'Prevention and victim support', request: 'Explain prevention strategies and victim support for trafficking' }
  ],
  checklist: [
    'I can define gender equality.',
    'I can define gender inequality.',
    'I can explain causes of the gender gap.',
    'I can explain why equality matters.',
    'I can describe global inequality patterns.',
    'I can explain how inequality is measured.',
    'I can define human trafficking.',
    'I can distinguish trafficking and smuggling.',
    'I can identify major trafficking forms.',
    'I can explain vulnerability.',
    'I can describe prevention strategies.',
    'I can explain victim support.',
    'I can evaluate one policy project.'
  ],
  ibQuestions: [
    {
      question: 'Explain one policy designed to prevent human trafficking.',
      marks: 3,
      markScheme: 'Identification of a valid policy at societal, NGO, national or international level [1]; development with details on how it operated/operates [1] further development which may include why it was introduced or magnitude of the problem [1].\n\nPolicies may include:\n- Accreditation schemes such as Fair Trade, Global Organic Textile Standard, Ethical Trading initiative decrease demand for cheap clothes that cause trafficking of labour in LICs\n- Education of individuals to decrease demand for services provided by trafficked populations – “John Schools” in USA that are aimed at changing attitudes of sex buyers\n- National Agency against Trafficking in Persons in Romania educates target groups to increase their awareness\n- Travel restrictions – children not travel without parents’/parent’s signature eg Brazil\n- Community activities such as vigilance groups in India that detect trafficked population in villages\n- Prosecution of individuals/firms that use trafficked labour or groups that organize the trafficking of people by the National Crime Agency in UK\n- Government legislation intended to curb trafficking eg Danish Criminal Code, Modern Slavery Act in UK\n- Border controls such as border patrols by South African National Defence Force on SA’s northern borders\n- International co-operation – UN Protocol against trafficking\n- Improve the lives of vulnerable groups of people in LICs eg National Referral Mechanism (UK agency) improving women’s accessibility to work in Albania.\n\nFor example:\n- Cambodia passed legislation in 2008 [1] that criminalizes all forms of trafficking for men, women and children [1]. Fines and prison sentences are applied to those convicted [1].'
    }
  ],
  readinessQuestions: [
    'Explain the difference between gender equality and gender inequality.',
    'What is SDG 5 focused on?',
    'Explain the difference between human trafficking and people smuggling.',
    'Give one factor that increases someone\u2019s vulnerability to trafficking.',
    'Give one example of a trafficking prevention strategy.'
  ],
  quiz: [
    { q: 'Gender inequality refers to:', options: ['Equal treatment of all genders, regardless of a country\'s laws, culture or economy', 'Unequal treatment or opportunity based on gender', 'A country’s birth rate', 'A type of population pyramid'], correct: 1, explain: 'Gender inequality describes unequal treatment, rights, or opportunity based on a person\u2019s gender.', misconception: 'Gender equality and inequality are sometimes swapped in written answers; equality means fairness, inequality means the opposite \u2014 unequal treatment.', tag: 'Gender equality vs inequality' },
    { q: 'SDG 5 is the Sustainable Development Goal focused on:', options: ['Clean water', 'Gender equality', 'Climate action', 'No poverty, a separate Sustainable Development Goal focused on income, not gender'], correct: 1, explain: 'SDG 5 is the United Nations Sustainable Development Goal aiming to achieve gender equality and empower women and girls.', misconception: 'SDG numbers are easy to mix up; SDG 5 specifically targets gender equality, distinct from other numbered goals like clean water (SDG 6) or climate action (SDG 13).', tag: 'SDG 5' },
    { q: 'The key difference between trafficking and smuggling is:', options: ['They are exactly the same thing, both involving identical methods and outcomes, regardless of location.', 'Trafficking involves exploitation and coercion; smuggling is a paid transport agreement', 'Smuggling always involves violence, trafficking never does', 'Trafficking only happens across oceans'], correct: 1, explain: 'Smuggling is typically a paid arrangement to facilitate illegal border crossing, while trafficking involves coercion, deception or force for exploitation.', misconception: 'Trafficking and smuggling are frequently treated as synonyms; the crucial distinction is the presence of ongoing coercion and exploitation in trafficking.', tag: 'Trafficking vs smuggling' },
    { q: 'People are often more vulnerable to trafficking when they experience:', options: ['Financial security and strong legal protection', 'Poverty, conflict, or limited legal protection', 'High levels of education only', 'Living in a wealthy, stable country'], correct: 1, explain: 'Poverty, conflict, discrimination and weak legal protections increase vulnerability to trafficking.', misconception: 'Vulnerability to trafficking is sometimes seen as random, when it is strongly linked to identifiable factors like poverty, conflict and weak legal protection.', tag: 'Why people are vulnerable' },
    { q: 'An example of a trafficking prevention strategy is:', options: ['Reducing awareness campaigns, leaving fewer people able to recognise the warning signs', 'International cooperation and victim support services', 'Ignoring the issue at a policy level', 'Removing all legal protections for victims'], correct: 1, explain: 'Effective prevention includes international cooperation, law enforcement, awareness, and support services for victims.', misconception: 'Prevention is sometimes thought of as solely a law-enforcement issue, when effective strategies also include victim support, awareness and international cooperation.', tag: 'Prevention and victim support' },
    { q: 'A common way gender inequality is measured is:', options: ['The Gender Inequality Index (GII)', 'Total population size, which does not measure how equally opportunity is distributed', 'Average annual rainfall', 'Coastline length'], correct: 0, explain: 'The Gender Inequality Index (GII) is a widely used measure combining indicators such as reproductive health, empowerment and labour market participation.', misconception: 'Unrelated physical statistics are sometimes mistaken for social indicators; gender inequality is measured through specific composite indices like the GII, not physical geography data.', tag: 'How inequality is measured' },
    { q: 'A common form of human trafficking is:', options: ['Voluntary labour migration with full legal protection', 'Forced labour or sexual exploitation', 'Legal international adoption', 'Tourism'], correct: 1, explain: 'Forced labour and sexual exploitation are among the most common recognised forms of human trafficking.', misconception: 'Legal, protected forms of movement (like regulated labour migration) are sometimes confused with trafficking, but trafficking specifically involves coercion and exploitation.', tag: 'Types of trafficking' },
    { q: 'Why does gender equality matter for wider development?', options: ['It has no link to development outcomes, regardless of a country\'s income or policies, regardless of location.', 'Greater gender equality is linked to improved economic and social development outcomes', 'It only benefits one gender', 'It slows down economic growth'], correct: 1, explain: 'Evidence shows that greater gender equality is linked to improved economic productivity, health outcomes, and broader social development.', misconception: 'Gender equality is sometimes framed as a purely social issue disconnected from economics, when there is strong evidence linking it to development outcomes.', tag: 'Why equality matters' },
    { q: 'Victim support services for trafficking survivors typically include:', options: ['Immediate deportation with no support, regardless of the harm already experienced', 'Legal assistance, safe housing and psychological support', 'No support at all', 'Return to the trafficker'], correct: 1, explain: 'Effective victim support typically includes legal assistance, safe housing, and psychological and medical support for survivors.', misconception: 'Victim support is sometimes underestimated as a simple, one-step process, when it usually requires coordinated legal, housing and psychological support.', tag: 'Prevention and victim support' },
    { q: 'A key reason gender equality and human trafficking are studied together in this lesson is that:', options: ['They are entirely unrelated topics with no connection between vulnerability and risk', 'Gender inequality can increase vulnerability to trafficking', 'Trafficking only ever affects one gender', 'Gender equality guarantees the elimination of trafficking'], correct: 1, explain: 'Gender inequality is one of several factors that can increase vulnerability to trafficking, which is why the two topics are studied together in this lesson.', misconception: 'The two topics are sometimes seen as unrelated because they cover different vocabulary, when gender inequality is actually a recognised contributing factor to trafficking vulnerability.', tag: 'Why people are vulnerable' }
  ]
};

window.SBL_LESSONS.CP13 = {
  id: 'CP13',
  topicNumber: 3,
  topicTitle: 'Challenges and opportunities',
  title: 'The demographic dividend',
  href: '/geography/paper-1/core-1/t3-challenges-and/l4-the-demographic',
  syllabusFocus: 'The demographic dividend concept, its conditions, benefits, barriers, and real-world examples including Thailand.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'What is the demographic dividend?', request: 'Define the demographic dividend' },
    { label: 'Conditions needed', request: 'Explain the conditions needed for a demographic dividend' },
    { label: 'First demographic dividend', request: 'Explain the first demographic dividend' },
    { label: 'Second demographic dividend', request: 'Explain the second demographic dividend' },
    { label: 'Economic and social benefits', request: 'Explain the potential economic and social benefits of the demographic dividend' },
    { label: 'Barriers', request: 'Explain the barriers to achieving a demographic dividend' },
    { label: 'Thailand case study', request: 'Apply the demographic dividend concept to Thailand' },
    { label: 'South Korea case study', request: 'Explain South Korea as an example of the demographic dividend' },
    { label: 'Future opportunities and challenges', request: 'Explain future opportunities and challenges linked to the demographic dividend' }
  ],
  checklist: [
    'I can define demographic dividend.',
    'I can explain the age structure needed.',
    'I can distinguish first and second demographic dividends.',
    'I can explain potential economic benefits.',
    'I can explain possible social benefits.',
    'I can identify education, health and employment conditions.',
    'I can explain barriers.',
    'I can apply the concept to Thailand.',
    'I can recall one successful example.',
    'I can discuss future opportunities and challenges.'
  ],
  readinessQuestions: [
    'What is the demographic dividend?',
    'What conditions does a country generally need to benefit from a demographic dividend?',
    'Explain the difference between the first and second demographic dividend.',
    'Give one barrier that could prevent a country from capturing a demographic dividend.',
    'Why is South Korea often used as a successful example of the demographic dividend?'
  ],
  quiz: [
    { q: 'The demographic dividend refers to:', options: ['Economic growth potential from a large working-age population', 'A government subsidy for having children, paid regardless of the size of the workforce', 'A tax on elderly citizens', 'A decrease in total population'], correct: 0, explain: 'The demographic dividend is the potential for economic growth when a country has a large working-age population relative to dependents.', misconception: 'The demographic dividend is sometimes confused with a specific government payment or subsidy, when it actually describes a structural economic growth opportunity.', tag: 'What is the demographic dividend?' },
    { q: 'To benefit from a demographic dividend, a country generally needs:', options: ['A shrinking working-age population, unable to support growing numbers of dependents', 'Falling fertility alongside investment in education, health and jobs', 'No investment in education', 'A rapidly ageing population only'], correct: 1, explain: 'Realising the dividend requires falling fertility combined with strong investment in education, health and employment.', misconception: 'A favourable age structure alone is sometimes assumed to be sufficient; without investment in jobs and education, the potential dividend is not automatically realised.', tag: 'Conditions needed' },
    { q: 'The "first" demographic dividend refers to:', options: ['Economic growth from a larger working-age share of the population', 'Growth driven entirely by increased saving among the elderly population instead', 'A decline in the total population', 'The effects of an ageing population'], correct: 0, explain: 'The first dividend comes from having a larger share of the population in working age relative to dependents.', misconception: 'First and second dividends are sometimes confused; the first is about the working-age share of the population, while the second relates more to capital and savings accumulation.', tag: 'First demographic dividend' },
    { q: 'A barrier to achieving a demographic dividend is:', options: ['Strong investment in education, preparing a growing workforce for skilled employment', 'Insufficient job creation for a growing workforce', 'Falling fertility rates', 'Rising life expectancy'], correct: 1, explain: 'If enough jobs are not created for a growing working-age population, the potential dividend cannot be realised.', misconception: 'Falling fertility and rising life expectancy are conditions that can support a dividend, not barriers to it; the real barrier here is a lack of matching job creation.', tag: 'Barriers' },
    { q: 'South Korea is often used as an example of:', options: ['A country that failed to benefit from demographic change despite rapid fertility decline', 'A country that successfully captured demographic dividend benefits', 'A country with no population change', 'A purely agricultural economy'], correct: 1, explain: 'South Korea is commonly cited as a country that successfully leveraged demographic change to support rapid economic development.', misconception: 'South Korea is sometimes wrongly grouped with countries that failed to capture the dividend, when it is in fact one of the most cited success stories.', tag: 'South Korea case study' },
    { q: 'The "second" demographic dividend is most closely linked to:', options: ['Increased savings and capital investment as people plan for longer retirement', 'A sudden spike in the birth rate, reversing decades of declining fertility rates', 'The complete disappearance of the elderly population', 'A decline in working-age population share'], correct: 0, explain: 'The second demographic dividend relates to increased saving and capital investment as populations plan for longer life expectancy and retirement.', misconception: 'The second dividend is sometimes confused with simply "more workers," when it is actually linked to capital accumulation and saving behaviour over a longer lifespan.', tag: 'Second demographic dividend' },
    { q: 'Which is a possible social benefit of successfully capturing a demographic dividend?', options: ['Reduced investment in healthcare and education, freeing up funds for other priorities', 'Improved living standards and reduced dependency pressures', 'Guaranteed elimination of all poverty', 'No effect on quality of life'], correct: 1, explain: 'Successfully capturing the demographic dividend can improve living standards and ease dependency pressures through a larger productive workforce.', misconception: 'Social benefits are sometimes overlooked in favour of focusing only on GDP growth, when improved living standards and reduced dependency pressure are equally important outcomes.', tag: 'Economic and social benefits' },
    { q: 'Applying the demographic dividend concept to Thailand, we would look at:', options: ['Whether Thailand had a large working-age population and matching investment when its fertility fell', 'Only Thailand\'s coastline length, regardless of its working-age population or investment, regardless of location.', 'Only Thailand’s climate', 'Whether Thailand banned migration'], correct: 0, explain: 'Applying the concept to Thailand means examining whether its working-age population bulge was matched with sufficient investment in jobs, education and health as fertility declined.', misconception: 'Applying a concept to a case study is sometimes done by listing unrelated facts about the country, rather than directly connecting the country\u2019s data to the specific concept being tested.', tag: 'Thailand case study' },
    { q: 'A future challenge linked to the demographic dividend "window" is that it:', options: ['Lasts forever once achieved, with no risk of the working-age population ageing later', 'Is time-limited, as the working-age population eventually ages too', 'Has no connection to future population ageing', 'Only applies to LICs'], correct: 1, explain: 'The demographic dividend window is time-limited \u2014 the same working-age population that creates the opportunity will eventually age, requiring forward planning.', misconception: 'The dividend is sometimes assumed to be a permanent, one-time economic boost, when it is actually a temporary window that requires planning for the population\u2019s eventual ageing.', tag: 'Future opportunities and challenges' },
    { q: 'Which best summarises the overall link between demographic transition and the demographic dividend?', options: ['They are unrelated concepts studied separately, with no connection between the two ideas, according to the overwhelming weight of available scientific evidence and data.', 'The window for a demographic dividend typically opens during the middle stages of demographic transition, as fertility falls but the workforce is still large', 'The dividend only occurs in DTM Stage 1', 'The dividend prevents demographic transition from happening'], correct: 1, explain: 'The demographic dividend window typically opens during the middle stages of demographic transition, when fertility has fallen but the working-age population built up during earlier high-fertility years is still large.', misconception: 'The demographic dividend and the DTM are sometimes treated as separate, unrelated topics, when the dividend window is directly explained by a country\u2019s position in the demographic transition.', tag: 'Conditions needed' }
  ]
};