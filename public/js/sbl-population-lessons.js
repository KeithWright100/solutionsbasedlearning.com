/* ============================================================
   SBL Geography Tutor — Changing Population lesson configurations
   One reusable tutor engine (sbl-teach-bot.js) reads this data to
   render the correct lesson-specific tutor for each page. Hrefs
   and titles below are copied verbatim from the site's own
   public/js/sbl-sidebar.js navigation data — not invented.
   ============================================================ */
window.SBL_LESSONS = window.SBL_LESSONS || {};

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
  quiz: [
    { q: 'What does population distribution describe?', options: ['The total population of a country', 'How population is spread across an area', 'The rate of population growth', 'The average age of a population'], correct: 1, explain: 'Distribution describes the pattern of where people live across a space.', tag: 'Distribution vs density' },
    { q: 'Population density is best described as:', options: ['Total population divided by area', 'Total births minus total deaths', 'The number of cities in a country', 'The percentage of people over 65'], correct: 0, explain: 'Density is a measure of people per unit area, usually per km\u00b2.', tag: 'Distribution vs density' },
    { q: 'Which is an example of a physical factor affecting population distribution?', options: ['Employment opportunities', 'Government policy', 'Climate', 'Transport links'], correct: 2, explain: 'Climate is a physical factor, alongside relief, water supply and natural resources.', tag: 'Physical factors' },
    { q: 'Which is an example of a human factor affecting population distribution?', options: ['Relief and flat land', 'Employment', 'Climate', 'Natural hazards'], correct: 1, explain: 'Employment is a human factor, alongside infrastructure, services and transport.', tag: 'Human factors' },
    { q: 'A choropleth map shows population data using:', options: ['One dot per fixed number of people', 'Shaded regions representing value ranges', 'Arrows showing migration flows', 'Contour lines'], correct: 1, explain: 'Choropleth maps use colour shading across defined areas to represent data ranges; dot maps use dots to represent set quantities.', tag: 'Choropleth vs dot maps' }
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
  quiz: [
    { q: 'LIC stands for:', options: ['Low Income Country', 'Least Industrialised Continent', 'Local Investment Class', 'Low Infrastructure Community'], correct: 0, explain: 'LIC = Low Income Country, one of the common development classifications.', tag: 'LICs, MICs and HICs' },
    { q: 'Inequality in a development context refers to:', options: ['Equal access to resources for everyone', 'Uneven distribution of wealth, resources or opportunity', 'A country with no cities', 'The rate of population growth'], correct: 1, explain: 'Inequality describes uneven distribution of wealth, resources, or opportunities between people or places.', tag: 'What is inequality?' },
    { q: 'In core-periphery theory, the "core" typically refers to:', options: ['Rural, less developed areas', 'Areas of concentrated economic activity and wealth', 'Areas with the lowest population density', 'Coastal fishing regions only'], correct: 1, explain: 'The core is the economically dominant region, while the periphery is less developed and often dependent on the core.', tag: 'Core-periphery model' },
    { q: 'Which is a common global pattern of development?', options: ['Development is identical in every country', 'A general divide between more and less developed regions', 'All LICs are in the Southern Hemisphere', 'Development never changes over time'], correct: 1, explain: 'While patterns are complex, there is a broad global pattern of unevenness between more and less developed regions.', tag: 'Global development patterns' },
    { q: 'Uneven development can be caused by:', options: ['Historical, economic and political factors', 'Only the size of a country', 'Only climate', 'Random chance with no identifiable causes'], correct: 0, explain: 'Uneven development results from a combination of historical, economic, political and social factors.', tag: 'Causes of uneven development' }
  ]
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
  quiz: [
    { q: 'Which city is the main core region of Thailand?', options: ['Chiang Mai', 'Bangkok', 'Phuket', 'Pattaya'], correct: 1, explain: 'Bangkok is Thailand\u2019s primary core region, concentrating population and economic activity.', tag: 'Core and periphery' },
    { q: '"Pull factors" in migration are:', options: ['Reasons people are forced to leave a place', 'Reasons that attract people to a new place', 'Government migration bans', 'Natural disasters only'], correct: 1, explain: 'Pull factors attract migrants to a destination, such as jobs or better services; push factors drive them away from their origin.', tag: 'Push and pull factors' },
    { q: 'A megacity is generally defined as a city with a population of at least:', options: ['1 million', '5 million', '10 million', '50 million'], correct: 2, explain: 'A megacity is commonly defined as a city with 10 million or more inhabitants.', tag: 'What is a megacity?' },
    { q: 'Internal migration refers to movement:', options: ['Between two different countries', 'Within the same country', 'Only across international borders', 'Only from rural areas abroad'], correct: 1, explain: 'Internal migration is movement of people within the borders of a single country.', tag: 'Internal migration' },
    { q: 'Bangkok\u2019s rapid growth is mainly linked to:', options: ['Its status as a periphery region', 'Concentration of jobs, services and investment', 'A government policy limiting its size', 'Its remote, undeveloped location'], correct: 1, explain: 'Bangkok has grown due to concentrated economic activity, employment opportunities and infrastructure investment.', tag: 'Why Bangkok grows' }
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
  quiz: [
    { q: 'Most of Egypt\u2019s population is concentrated along:', options: ['The Red Sea coast only', 'The Nile Valley and Delta', 'The Sinai desert', 'The Libyan border'], correct: 1, explain: 'The overwhelming majority of Egypt\u2019s population lives along the fertile Nile Valley and Delta.', tag: 'Why people live near the Nile' },
    { q: 'Egypt\u2019s desert regions have low population density mainly because of:', options: ['Government restrictions', 'Lack of water and fertile land', 'High crime rates', 'Cold climate'], correct: 1, explain: 'The desert areas lack reliable water and fertile soil, making them inhospitable for large-scale settlement.', tag: 'Physical factors' },
    { q: 'Which city dominates Thailand\u2019s population and economic distribution?', options: ['Chiang Mai', 'Bangkok', 'Phuket', 'Ayutthaya'], correct: 1, explain: 'Bangkok is Thailand\u2019s primate city, concentrating population, services and economic activity.', tag: 'Thailand overview' },
    { q: 'A key similarity between Egypt and Thailand\u2019s population patterns is:', options: ['Both have evenly spread populations', 'Both show strong concentration in one core region', 'Both have no coastal population', 'Both are entirely desert nations'], correct: 1, explain: 'Both countries show strong core-based concentration \u2014 the Nile Valley/Delta in Egypt and Bangkok in Thailand.', tag: 'Compare Egypt and Thailand' },
    { q: 'The Aswan High Dam is significant to Egypt because it:', options: ['Created a new desert region', 'Controls the Nile\u2019s flow and supports irrigation', 'Is the country\u2019s largest city', 'Marks the southern border with Sudan only'], correct: 1, explain: 'The Aswan High Dam regulates the Nile\u2019s flow, supporting irrigation and reducing flooding, shaping settlement patterns.', tag: 'Egypt overview' }
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
  quiz: [
    { q: 'Crude birth rate measures:', options: ['Births per 1,000 people per year', 'Births per woman over her lifetime', 'The total number of births ever recorded', 'Births compared to deaths only'], correct: 0, explain: 'Crude birth rate is the number of live births per 1,000 people in a population per year.', tag: 'Birth and death rates' },
    { q: 'Natural increase is calculated as:', options: ['Birth rate + death rate', 'Birth rate \u2212 death rate', 'Immigration \u2212 emigration', 'Fertility rate \u00d7 population'], correct: 1, explain: 'Natural increase is the birth rate minus the death rate, excluding migration.', tag: 'Natural increase' },
    { q: 'In DTM Stage 2, population grows rapidly mainly because:', options: ['Birth rates fall faster than death rates', 'Death rates fall while birth rates stay high', 'Both rates fall together', 'Migration increases sharply'], correct: 1, explain: 'In Stage 2, death rates fall due to improved healthcare and sanitation, while birth rates remain high, causing rapid growth.', tag: 'Stages 1 to 5' },
    { q: 'A population pyramid with a wide base and narrow top typically indicates:', options: ['An ageing population', 'A young, fast-growing population', 'A declining population', 'A population with no children'], correct: 1, explain: 'A wide base shows a large proportion of young people, typical of a fast-growing population.', tag: 'Population pyramids' },
    { q: 'A common limitation of the DTM is that it:', options: ['Applies perfectly to every country', 'Was based on the experience of Western European countries', 'Cannot be used to explain any country', 'Only applies to Africa'], correct: 1, explain: 'The DTM was developed from the historical experience of Western European countries, so it does not perfectly predict every country\u2019s pattern.', tag: 'Strengths and limitations' }
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
  quiz: [
    { q: 'A dependency ratio compares:', options: ['Working-age people to non-working-age people', 'Men to women in a population', 'Rural to urban population', 'Births to deaths'], correct: 0, explain: 'The dependency ratio compares the economically dependent population (young and old) to the working-age population.', tag: 'What is dependency?' },
    { q: 'Thailand\u2019s population structure is best described as:', options: ['Youthful, with high fertility', 'Ageing, with declining fertility', 'Static with no change since 1950', 'Entirely rural'], correct: 1, explain: 'Thailand has undergone rapid demographic transition and now has an ageing population structure.', tag: 'Thailand' },
    { q: 'The Gambia\u2019s population structure is best described as:', options: ['Ageing, with low fertility', 'Youthful, with high fertility', 'Declining in total size', 'Identical to Thailand\u2019s'], correct: 1, explain: 'The Gambia remains at an earlier stage of demographic transition with a young, fast-growing population.', tag: 'The Gambia' },
    { q: 'A key challenge for an ageing population like Thailand\u2019s is:', options: ['Overcrowded schools', 'Rising demand for pensions and elderly care', 'Too few working-age adults being born historically', 'None \u2014 ageing has no economic impact'], correct: 1, explain: 'Ageing populations place increasing demand on pensions, healthcare and elderly care services.', tag: 'Problems and responses' },
    { q: 'A key challenge for a youthful population like the Gambia\u2019s is:', options: ['Providing enough schools, jobs and services for a growing young population', 'A shrinking total population', 'Too many elderly care homes', 'Falling birth rates'], correct: 0, explain: 'Youthful populations create pressure to provide sufficient education, healthcare, and future employment.', tag: 'Problems and responses' }
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
  quiz: [
    { q: 'Urbanisation refers to:', options: ['The physical growth of a city\u2019s built-up area', 'An increasing proportion of a population living in urban areas', 'A decrease in city population', 'Only international migration to cities'], correct: 1, explain: 'Urbanisation is the increase in the proportion of a population living in urban areas.', tag: 'Urbanisation vs urban growth' },
    { q: 'Urban growth refers to:', options: ['The increase in the absolute number of people living in urban areas', 'A decline in a city\u2019s population', 'Only rural population change', 'A country\u2019s total GDP'], correct: 0, explain: 'Urban growth is the increase in the total number of people living in urban areas, which can occur even without urbanisation.', tag: 'Urbanisation vs urban growth' },
    { q: 'Megacity growth is driven by:', options: ['Migration only', 'Natural increase only', 'Both migration and natural increase', 'Neither \u2014 megacities appear randomly'], correct: 2, explain: 'Megacities grow through a combination of rural-to-urban migration and natural increase (births exceeding deaths) within the city.', tag: 'Migration and natural increase' },
    { q: 'A common social consequence of megacity growth is:', options: ['Improved housing for all residents automatically', 'Growth of informal settlements and slums', 'Elimination of poverty', 'Reduced traffic congestion'], correct: 1, explain: 'Rapid, unplanned growth often outpaces housing supply, leading to informal settlements and slums.', tag: 'Social consequences' },
    { q: 'Mumbai is used as a case study because it demonstrates:', options: ['A city with almost no population growth', 'The social, economic and environmental effects of rapid megacity growth', 'A city entirely without informal settlements', 'A purely rural region'], correct: 1, explain: 'Mumbai is a widely used real-world example of the opportunities and challenges created by rapid megacity growth.', tag: 'Mumbai case study' }
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
  quiz: [
    { q: 'An internally displaced person (IDP) is someone who:', options: ['Has crossed an international border seeking safety', 'Has been forced to flee but remains within their own country', 'Has migrated voluntarily for work', 'Is a tourist visiting temporarily'], correct: 1, explain: 'An IDP is forced to flee their home but stays within their own country\u2019s borders, unlike a refugee.', tag: 'Refugee vs IDP' },
    { q: 'A refugee is legally defined as someone who:', options: ['Has crossed an international border due to fear of persecution', 'Moves for better job opportunities', 'Is displaced but remains in their home country', 'Travels for tourism'], correct: 0, explain: 'A refugee has crossed an international border and cannot return due to a well-founded fear of persecution.', tag: 'Refugee vs IDP' },
    { q: 'An asylum seeker is someone who:', options: ['Has been granted refugee status', 'Has applied for protection but whose claim has not yet been decided', 'Is an internal migrant only', 'Cannot ever apply for refugee status'], correct: 1, explain: 'An asylum seeker has applied for international protection, but their claim has not yet been formally decided.', tag: 'What is an asylum seeker?' },
    { q: 'The displacement of the Rohingya from Burma is primarily linked to:', options: ['Voluntary economic migration', 'Political and ethnic persecution', 'A natural disaster', 'International tourism policy'], correct: 1, explain: 'The Rohingya crisis stems from political and ethnic persecution and violence within Burma (Myanmar).', tag: 'Why the Rohingya were displaced' },
    { q: 'A consequence for places receiving large numbers of displaced Rohingya has been:', options: ['No noticeable impact at all', 'Pressure on housing, services and resources in refugee camps', 'Immediate full integration with no challenges', 'A decrease in population in receiving areas'], correct: 1, explain: 'Receiving areas, such as refugee camps in Bangladesh, have faced significant pressure on housing, services and resources.', tag: 'Consequences for receiving places' }
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
  quiz: [
    { q: 'The 2010 Haiti earthquake caused mass internal displacement mainly because:', options: ['Homes and infrastructure were destroyed', 'The government banned people from staying in cities', 'It caused a drought', 'People chose to migrate for work'], correct: 0, explain: 'Widespread destruction of homes and infrastructure forced huge numbers of people from their homes.', tag: 'Why people were displaced' },
    { q: 'A short-term consequence of the earthquake was:', options: ['Full economic recovery within days', 'Emergency displacement camps and loss of shelter', 'Permanent population decline to zero', 'Immediate rebuilding of all infrastructure'], correct: 1, explain: 'Immediately after the earthquake, huge numbers of people were left without shelter, relying on emergency camps.', tag: 'Short-term consequences' },
    { q: 'A common problem within displacement camps was:', options: ['Overcrowding and poor sanitation', 'Excess space and resources', 'No need for aid', 'Complete safety with no risks'], correct: 0, explain: 'Displacement camps often suffered from overcrowding, poor sanitation, and disease risk, including cholera outbreaks.', tag: 'Displacement camps' },
    { q: 'Hurricane Matthew affected Haiti\u2019s recovery by:', options: ['Having no impact since it happened years later', 'Causing further destruction and setting back rebuilding efforts', 'Improving infrastructure', 'Ending displacement entirely'], correct: 1, explain: 'Hurricane Matthew (2016) caused further destruction, compounding Haiti\u2019s ongoing recovery challenges.', tag: 'Hurricane Matthew' },
    { q: 'A key reason rebuilding was difficult in Haiti was:', options: ['Haiti had unlimited government funding', 'Limited government capacity and resources', 'No international aid was offered', 'The earthquake caused no damage to infrastructure'], correct: 1, explain: 'Haiti\u2019s limited government capacity and resources made long-term rebuilding especially challenging.', tag: 'Government and rebuilding challenges' }
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
  quiz: [
    { q: 'A sex ratio is usually expressed as:', options: ['The number of males per 100 females', 'The total male population only', 'The birth rate of a country', 'The percentage of the elderly population'], correct: 0, explain: 'A sex ratio is commonly expressed as the number of males per 100 females in a population.', tag: 'Sex ratios' },
    { q: 'A sex ratio above 100 means:', options: ['There are more females than males', 'There are more males than females', 'The population is exactly balanced', 'The population is shrinking'], correct: 1, explain: 'A ratio above 100 means there are more males than females per 100 in that population.', tag: 'Why sex ratios vary' },
    { q: 'An "ageing" or "greying" population refers to:', options: ['A population with an increasing proportion of older people', 'A population with rapidly rising birth rates', 'A population moving to cities', 'A population with equal numbers at every age'], correct: 0, explain: 'An ageing population has a growing proportion of older people, usually linked to falling fertility and rising life expectancy.', tag: 'Ageing and greying' },
    { q: 'Falling family size is closely linked to:', options: ['Rising fertility rates', 'Falling fertility rates', 'Increasing birth rates only', 'No demographic connection at all'], correct: 1, explain: 'Falling family size is closely connected to declining fertility rates.', tag: 'Family size' },
    { q: 'A challenge associated with an ageing population is:', options: ['Too many young workers', 'Increased demand for pensions and healthcare', 'Falling demand for elderly care', 'A shrinking dependency ratio'], correct: 1, explain: 'Ageing populations increase demand for pensions, healthcare and elderly support services.', tag: 'Opportunities and challenges' }
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
  quiz: [
    { q: 'A pro-natalist policy aims to:', options: ['Decrease birth rates', 'Increase birth rates', 'Increase death rates', 'Reduce migration'], correct: 1, explain: 'A pro-natalist policy is designed to encourage higher birth rates.', tag: 'Pro-natalist policies' },
    { q: 'An anti-natalist policy aims to:', options: ['Increase birth rates', 'Decrease birth rates', 'Increase life expectancy', 'Encourage migration'], correct: 1, explain: 'An anti-natalist policy is designed to reduce birth rates.', tag: 'Anti-natalist policies' },
    { q: 'China\u2019s One Child Policy is an example of:', options: ['A pro-natalist policy', 'An anti-natalist policy', 'A migration policy', 'A trade policy'], correct: 1, explain: 'The One Child Policy was an anti-natalist policy aimed at slowing China\u2019s population growth.', tag: 'China\u2019s One Child Policy' },
    { q: 'A common strategy used in pro-natalist policies is:', options: ['Financial incentives for having children', 'Fines for having children', 'Forced sterilisation', 'Banning marriage'], correct: 0, explain: 'Pro-natalist policies commonly use financial incentives, such as child benefits or parental leave, to encourage births.', tag: 'Common strategies' },
    { q: 'A long-term consequence linked to China\u2019s One Child Policy has been:', options: ['A rapidly increasing birth rate', 'A skewed sex ratio and an ageing population', 'No demographic impact at all', 'A sudden population decline to zero'], correct: 1, explain: 'The policy contributed to a skewed sex ratio and an ageing population structure over the long term.', tag: 'China after the policy' }
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
  quiz: [
    { q: 'Gender inequality refers to:', options: ['Equal treatment of all genders', 'Unequal treatment or opportunity based on gender', 'A country\u2019s birth rate', 'A type of population pyramid'], correct: 1, explain: 'Gender inequality describes unequal treatment, rights, or opportunity based on a person\u2019s gender.', tag: 'Gender equality vs inequality' },
    { q: 'SDG 5 is the Sustainable Development Goal focused on:', options: ['Clean water', 'Gender equality', 'Climate action', 'No poverty'], correct: 1, explain: 'SDG 5 is the United Nations Sustainable Development Goal aiming to achieve gender equality and empower women and girls.', tag: 'SDG 5' },
    { q: 'The key difference between trafficking and smuggling is:', options: ['They are exactly the same thing', 'Trafficking involves exploitation and coercion; smuggling is a paid transport agreement', 'Smuggling always involves violence, trafficking never does', 'Trafficking only happens across oceans'], correct: 1, explain: 'Smuggling is typically a paid arrangement to facilitate illegal border crossing, while trafficking involves coercion, deception or force for exploitation.', tag: 'Trafficking vs smuggling' },
    { q: 'People are often more vulnerable to trafficking when they experience:', options: ['Financial security and strong legal protection', 'Poverty, conflict, or limited legal protection', 'High levels of education only', 'Living in a wealthy, stable country'], correct: 1, explain: 'Poverty, conflict, discrimination and weak legal protections increase vulnerability to trafficking.', tag: 'Why people are vulnerable' },
    { q: 'An example of a trafficking prevention strategy is:', options: ['Reducing awareness campaigns', 'International cooperation and victim support services', 'Ignoring the issue at a policy level', 'Removing all legal protections for victims'], correct: 1, explain: 'Effective prevention includes international cooperation, law enforcement, awareness, and support services for victims.', tag: 'Prevention and victim support' }
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
  quiz: [
    { q: 'The demographic dividend refers to:', options: ['Economic growth potential from a large working-age population', 'A government subsidy for having children', 'A tax on elderly citizens', 'A decrease in total population'], correct: 0, explain: 'The demographic dividend is the potential for economic growth when a country has a large working-age population relative to dependents.', tag: 'What is the demographic dividend?' },
    { q: 'To benefit from a demographic dividend, a country generally needs:', options: ['A shrinking working-age population', 'Falling fertility alongside investment in education, health and jobs', 'No investment in education', 'A rapidly ageing population only'], correct: 1, explain: 'Realising the dividend requires falling fertility combined with strong investment in education, health and employment.', tag: 'Conditions needed' },
    { q: 'The "first" demographic dividend refers to:', options: ['Economic growth from a larger working-age share of the population', 'Growth driven entirely by increased saving among the elderly', 'A decline in the total population', 'The effects of an ageing population'], correct: 0, explain: 'The first dividend comes from having a larger share of the population in working age relative to dependents.', tag: 'First demographic dividend' },
    { q: 'A barrier to achieving a demographic dividend is:', options: ['Strong investment in education', 'Insufficient job creation for a growing workforce', 'Falling fertility rates', 'Rising life expectancy'], correct: 1, explain: 'If enough jobs are not created for a growing working-age population, the potential dividend cannot be realised.', tag: 'Barriers' },
    { q: 'South Korea is often used as an example of:', options: ['A country that failed to benefit from demographic change', 'A country that successfully captured demographic dividend benefits', 'A country with no population change', 'A purely agricultural economy'], correct: 1, explain: 'South Korea is commonly cited as a country that successfully leveraged demographic change to support rapid economic development.', tag: 'South Korea case study' }
  ]
};
