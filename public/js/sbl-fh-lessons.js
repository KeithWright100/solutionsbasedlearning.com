/* ============================================================
   SBL Geography Tutor — Option F: Food and Health
   (Paper 1, Optional Themes) lesson configurations.
   Same reusable tutor engine (sbl-teach-bot.js) as other units.
   Hrefs and titles copied verbatim from sbl-sidebar.js
   "Option F: Food and Health" (option-f) navigation data.

   IMPORTANT: Food and Health is its own optional theme, separate
   from Population/Climate/Resource Consumption (Paper 1 Core) and
   from Unit 4/5/6 (Paper 3 HL Core Extension). This file defines
   its OWN separate lesson order, SBL_FH_LESSON_ORDER, so Spaced
   Retrieval for Food and Health is a distinct pool and does NOT
   get concatenated onto any other unit's lesson order. Pages in
   this theme should only include this lesson file.

   Lesson IDs: FH01-FH04 (Topic 1: Measuring food and health) follow
   the sidebar's own topic/lesson slugs, prefixed with FH, e.g.
   FH-t1-l1-global-patterns. FH06-FH16 (Topics 2 and 3) use short
   numeric IDs (FH06-FH16). FH05 (Food and Health Checkpoint) and
   FH20 (Managing pandemics case study) are deliberately SKIPPED,
   pending their source content. Topic 4 (FH17-FH19) still to come.
   ============================================================ */
window.SBL_LESSONS = window.SBL_LESSONS || {};
window.SBL_FH_LESSON_ORDER = [
  'FH-t1-l1-global-patterns',
  'FH-t1-l2-the-nutrition',
  'FH-t1-l3-global-patterns',
  'FH-t1-l4-the',
  'FH06',
  'FH07',
  'FH08',
  'FH09',
  'FH10',
  'FH11',
  'FH12',
  'FH13',
  'FH14',
  'FH15',
  'FH16'
];

window.SBL_LESSONS['FH-t1-l1-global-patterns'] = {
  id: 'FH-t1-l1-global-patterns',
  topicNumber: 1,
  topicTitle: 'Measuring food and health',
  title: 'Global patterns of food nutrition indicators',
  href: '/geography/paper-1/option-f/t1-measuring-food/l1-global-patterns',
  syllabusFocus: 'Ways of measuring disparities in food and health between places: global patterns in food/nutrition indicators, including the food security index, the hunger index, calories per person/capita, and indicators of malnutrition.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'What is health?', request: 'Define health and explain the factors that contribute to good health' },
    { label: 'The food security index', request: 'Explain what the food security index measures' },
    { label: 'The hunger index', request: 'Explain what the Global Hunger Index measures' },
    { label: 'Calories per capita', request: 'Explain calories per person/capita as a nutrition indicator' },
    { label: 'Indicators of malnutrition', request: 'Explain the main indicators used to measure malnutrition' },
    { label: 'Trends vs spatial distributions', request: 'Explain the difference between a trend and a spatial distribution, using applicable terminology' },
    { label: 'Help me draw a diagram', request: 'Suggest a simple diagram I could draw for this lesson' }
  ],
  checklist: [
    'I can define what health is and the factors that contribute towards good health.',
    'I can describe the global pattern of food and nutritional intake using a variety of indicators.',
    'I can distinguish between trends and spatial distributions and describe using applicable terminology.'
  ],
  readinessQuestions: [
    'What is health, and what factors contribute to good health?',
    'What does the food security index measure?',
    'What does the Global Hunger Index measure?',
    'What is meant by "calories per capita," and why is it a useful indicator?',
    'What is the difference between a trend and a spatial distribution?'
  ],
  quiz: [
    { q: 'Health is best defined as:', options: ['The complete absence of disease only', 'A state of complete physical, mental and social wellbeing, not merely the absence of disease', 'A term that only applies to physical fitness', 'A fixed characteristic that cannot change over time'], correct: 1, explain: 'Health is widely defined as a state of complete physical, mental and social wellbeing, not simply the absence of disease or infirmity.', misconception: 'Health is sometimes reduced to just "not being sick," when it is a broader concept encompassing physical, mental and social wellbeing together.', tag: 'What is health?' },
    { q: 'Which of these is a factor that contributes to good health?', options: ['Access to clean water and sanitation', 'Living in complete isolation from other people', 'Avoiding all forms of exercise', 'Having no access to healthcare services'], correct: 0, explain: 'Access to clean water and sanitation is a fundamental factor contributing to good health, reducing exposure to waterborne disease and infection.', misconception: 'Health factors are sometimes thought of only in terms of individual lifestyle choices, when access to basic infrastructure like clean water is equally fundamental.', tag: 'What is health?' },
    { q: 'The food security index is used to measure:', options: ['A country\u2019s military capacity', 'The availability, access, and quality of food across countries', 'Only the price of food in a country', 'A country\u2019s land area used for farming'], correct: 1, explain: 'The food security index measures the availability, accessibility, and quality/safety of food across different countries, providing a composite picture of food security.', misconception: 'Food security is sometimes assumed to be only about whether enough food exists, when access and quality are equally important dimensions the index captures.', tag: 'The food security index' },
    { q: 'The Global Hunger Index (GHI) combines indicators relating to:', options: ['Only adult obesity rates', 'Undernourishment, child wasting, child stunting, and child mortality', 'Only a country\u2019s GDP', 'The number of restaurants per capita'], correct: 1, explain: 'The Global Hunger Index combines indicators of undernourishment, child wasting (low weight-for-height), child stunting (low height-for-age), and child mortality to produce an overall score reflecting the severity of hunger in a country.', misconception: 'The GHI is sometimes assumed to be based on a single simple measure, when it is actually a composite index combining several distinct nutrition-related indicators.', tag: 'The hunger index' },
    { q: 'Calories per person/capita is a useful nutrition indicator because it:', options: ['Measures a country\u2019s total population size', 'Gives an estimate of the average daily food energy available per person in a country', 'Only applies to high-income countries', 'Measures the price of food'], correct: 1, explain: 'Calories per capita estimates the average daily food energy available per person in a country, providing a broad indicator of whether a population has sufficient food energy on average.', misconception: 'This indicator is sometimes assumed to show individual food intake precisely, when it is actually a national average that can mask significant inequality in food access within a country.', tag: 'Calories per capita' },
    { q: 'A limitation of using calories per capita as a nutrition indicator is that it:', options: ['Is always perfectly accurate for every individual', 'Is a national average and can hide significant inequality in how food is actually distributed within a country', 'Cannot be calculated for any country', 'Only measures protein intake'], correct: 1, explain: 'Because calories per capita is a national average, it can mask significant inequality in how food is actually distributed within a country \u2014 some groups may have plenty while others go hungry, even where the national average looks adequate.', misconception: 'A high national average is sometimes assumed to mean no one in that country goes hungry, when averages can conceal substantial internal inequality.', tag: 'Calories per capita' },
    { q: 'Stunting, as an indicator of malnutrition, refers to:', options: ['A child being significantly overweight for their height', 'Low height-for-age, resulting from chronic or recurrent undernutrition', 'A temporary illness with no lasting effect', 'An indicator only used for adults'], correct: 1, explain: 'Stunting refers to low height-for-age in children, resulting from chronic or recurrent undernutrition, and is a widely used indicator of long-term malnutrition.', misconception: 'Stunting is sometimes confused with wasting; stunting reflects long-term, chronic undernutrition (low height-for-age), while wasting reflects acute, short-term undernutrition (low weight-for-height).', tag: 'Indicators of malnutrition' },
    { q: 'Wasting, as an indicator of malnutrition, refers to:', options: ['Low weight-for-height, usually resulting from acute, recent undernutrition', 'A child growing taller than average', 'A measure of adult obesity', 'A term unrelated to nutrition'], correct: 0, explain: 'Wasting refers to low weight-for-height, typically resulting from acute, recent undernutrition or illness, and indicates a more immediate nutritional crisis than stunting.', misconception: 'Wasting and stunting are sometimes used interchangeably, but wasting reflects a recent, acute nutritional problem, distinct from the long-term chronic undernutrition reflected by stunting.', tag: 'Indicators of malnutrition' },
    { q: 'A global spatial distribution of a nutrition indicator would typically be shown using:', options: ['A single number with no visual representation', 'A choropleth or thematic world map showing how the indicator varies between countries or regions', 'A list of country names with no data', 'A photograph of food'], correct: 1, explain: 'A spatial distribution is typically shown using a choropleth or other thematic world map, allowing geographers to see how a nutrition indicator varies between countries or regions.', misconception: 'Spatial distribution is sometimes confused with a simple list or ranking of countries; a true spatial distribution specifically shows the geographic pattern, usually via a map.', tag: 'Trends vs spatial distributions' },
    { q: 'A trend, as distinct from a spatial distribution, specifically describes:', options: ['How a value varies across different places at a single point in time', 'How a value changes over time, often at a single place or globally', 'A term unrelated to data analysis', 'Only data collected in the last year'], correct: 1, explain: 'A trend describes how a value changes over time (for example, how the Global Hunger Index score for a country has changed over the last 20 years), while a spatial distribution describes how a value varies across different places at a given point in time.', misconception: 'Trend and spatial distribution are sometimes used interchangeably, but they describe two distinct dimensions of data: change over time (trend) versus variation across places (spatial distribution).', tag: 'Trends vs spatial distributions' }
  ]
};

window.SBL_LESSONS['FH-t1-l2-the-nutrition'] = {
  id: 'FH-t1-l2-the-nutrition',
  topicNumber: 1,
  topicTitle: 'Measuring food and health',
  title: 'The nutrition transition',
  href: '/geography/paper-1/option-f/t1-measuring-food/l2-the-nutrition',
  syllabusFocus: 'The nutrition transition, and associated regional variations of food consumption and nutrition choices, including the five broad patterns identified by Popkin, driven by urbanization, economic growth, technological change and mass media growth.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'What is the nutrition transition?', request: 'Explain what the nutrition transition is' },
    { label: 'Patterns 1 and 2', request: 'Explain Patterns 1 and 2 of the nutrition transition (hunter-gatherers and early settlements)' },
    { label: 'Pattern 3: Receding famine', request: 'Explain Pattern 3 of the nutrition transition (industrialization and receding famine)' },
    { label: 'Pattern 4: Noncommunicable disease', request: 'Explain Pattern 4 of the nutrition transition (noncommunicable disease)' },
    { label: 'Pattern 5: Behavioural change', request: 'Explain Pattern 5 of the nutrition transition (desired societal/behavioural change)' },
    { label: 'Drivers of the transition', request: 'Explain the drivers of the nutrition transition, such as urbanization and mass media growth' },
    { label: 'Help me interpret a graph', request: 'Help me practise interpreting a graph related to the nutrition transition' }
  ],
  checklist: [
    'I can read and interpret graphs relating to the nutrition transition concept.',
    'I can explain the relationship displayed on the graph.',
    'I can interpret and explain the stages of the nutrition transition.'
  ],
  readinessQuestions: [
    'What is the nutrition transition, in your own words?',
    'What characterises Pattern 1 (hunter-gatherers) of the nutrition transition?',
    'What happens to diet and disease patterns in Pattern 4 (noncommunicable disease)?',
    'What are some of the drivers of the nutrition transition, such as urbanization or mass media growth?',
    'What does Pattern 5 (desired societal/behavioural change) suggest about the future of diet and health?'
  ],
  quiz: [
    { q: 'The nutrition transition refers to:', options: ['A sudden, one-off change in a country\u2019s food supply', 'The long-term shift in dietary patterns and nutrition-related disease that occurs as a country develops economically and urbanises', 'A term used only to describe famine relief', 'A transition that only affects high-income countries'], correct: 1, explain: 'The nutrition transition describes the long-term shift in dietary patterns, physical activity, and associated disease that occurs as a country undergoes economic development and urbanisation, moving through a series of identifiable patterns over time.', misconception: 'The nutrition transition is sometimes thought of as a single event, when it describes a gradual, long-term process linked closely to a country\u2019s broader development.', tag: 'What is the nutrition transition?' },
    { q: 'In Pattern 1 (Paleolithic/hunter-gatherers) of the nutrition transition, diet is best characterised by:', options: ['High-fat, highly processed foods', 'Wild plants and animals, requiring labour-intensive food acquisition', 'Cereals dominating the diet', 'Reduced fat and increased fibre intake'], correct: 1, explain: 'In Pattern 1, diet consists of wild plants and animals, obtained through labour-intensive hunting and gathering, associated with a lean, robust population but a high disease rate and low life expectancy.', misconception: 'Early human diets are sometimes assumed to be identical to modern diets, when Pattern 1 diets were fundamentally different, based entirely on wild, unprocessed food sources.', tag: 'Patterns 1 and 2' },
    { q: 'In Pattern 2 (settlements begin/monoculture period) of the nutrition transition, a key change is that:', options: ['Diets become entirely based on hunting wild animals', 'Cereals begin to dominate the diet as settled agriculture develops, and nutritional deficiencies begin to emerge', 'Obesity becomes the dominant health concern', 'Life expectancy increases dramatically'], correct: 1, explain: 'In Pattern 2, as settled agriculture and monoculture farming develop, cereals begin to dominate the diet; this narrower diet is associated with emerging nutritional deficiencies and declining stature, alongside high fertility and high maternal/child mortality.', misconception: 'The shift to settled agriculture is sometimes assumed to have automatically improved nutrition, when Pattern 2 is actually associated with the emergence of new nutritional deficiencies due to a narrower diet.', tag: 'Patterns 1 and 2' },
    { q: 'Pattern 3 (industrialization/receding famine) of the nutrition transition is characterised by a diet that is:', options: ['High in fat and low in fibre', 'Starchy, low in variety, low in fat, and high in fibre, alongside labour-intensive work', 'Dominated by fast food and processed snacks', 'Entirely plant-free'], correct: 1, explain: 'Pattern 3 is characterised by a starchy, low-variety, low-fat, high-fibre diet, alongside labour-intensive work both at home and in emerging industrial jobs, with famine beginning to recede and mortality decline slowing.', misconception: 'Industrialization is sometimes assumed to immediately bring the high-fat, high-sugar diets associated with later patterns, when Pattern 3 diets remain relatively high-fibre and low-fat compared to later stages.', tag: 'Pattern 3: Receding famine' },
    { q: 'Pattern 4 (noncommunicable disease) of the nutrition transition is associated with:', options: ['A decrease in fat and sugar consumption', 'Increased fat, sugar and processed food consumption, alongside a shift in technology affecting work and leisure, leading to emerging obesity', 'A return to a purely plant-based, labour-intensive diet', 'No significant change in disease patterns'], correct: 1, explain: 'Pattern 4 is associated with increased consumption of fat, sugar, processed foods and caloric beverages, alongside technological shifts reducing physical activity in both work and leisure, leading to the emergence of obesity and a range of noncommunicable diseases.', misconception: 'This pattern is sometimes seen only in terms of diet, when the accompanying shift towards more sedentary work and leisure (due to technology) is an equally important driver of the noncommunicable disease patterns that emerge.', tag: 'Pattern 4: Noncommunicable disease' },
    { q: 'Pattern 5 (desired societal/behavioural change) of the nutrition transition represents:', options: ['A continuation of increasing fat and sugar intake with no change', 'A deliberate shift towards reduced fat, increased fruit/vegetable/fibre intake, and replacing sedentary behaviour with purposeful activity', 'A return to Pattern 1 hunter-gatherer diets exactly as they were', 'A pattern that has already been fully achieved by all countries'], correct: 1, explain: 'Pattern 5 represents a desired, deliberate shift towards reduced fat intake, increased fruit, vegetable, carbohydrate and fibre intake, increased water consumption, and replacing sedentary behaviour with purposeful physical activity, aiming to reduce obesity and noncommunicable disease.', misconception: 'Pattern 5 is sometimes assumed to already be the norm everywhere, when it represents a desired future direction that societies are working towards, rather than a pattern that has been universally achieved.', tag: 'Pattern 5: Behavioural change' },
    { q: 'Which of these is identified as a driver of the nutrition transition?', options: ['A decrease in global population', 'Urbanization, economic growth, technological changes for work and leisure, and mass media growth', 'A worldwide ban on food imports', 'The complete elimination of international trade'], correct: 1, explain: 'The nutrition transition is driven by factors such as urbanization, economic growth, technological changes affecting work, leisure and food processing, and the growth of mass media, all of which influence dietary habits and physical activity levels over time.', misconception: 'The nutrition transition is sometimes explained purely in terms of individual food choices, when it is actually driven by much larger structural forces like urbanization and technological change.', tag: 'Drivers of the transition' },
    { q: 'The nutrition transition model illustrates a relationship between:', options: ['Diet patterns and economic/technological development, and their combined effect on disease and mortality patterns over time', 'Only rainfall and crop yields', 'A country\u2019s population size and its land area', 'Random, unrelated changes with no underlying pattern'], correct: 0, explain: 'The nutrition transition model illustrates the relationship between changing diet patterns, driven by economic and technological development, and their combined effect on disease and mortality patterns as a society moves through the identified stages.', misconception: 'The stages are sometimes viewed as separate, unconnected facts to memorise, when the model\u2019s value lies in showing the connected relationship between development, diet and disease over time.', tag: 'What is the nutrition transition?' },
    { q: 'When interpreting a graph relating to the nutrition transition (for example, showing changing fat consumption over time in a developing country), a geographer would look for:', options: ['Only the highest single value on the graph', 'The overall trend, any turning points, and how the pattern relates to the stages of the nutrition transition model', 'The colour scheme used in the graph', 'Nothing \u2014 graphs are not relevant to this topic'], correct: 1, explain: 'When interpreting such a graph, a geographer looks for the overall trend, any significant turning points, and considers how the pattern shown relates to and can be explained by the stages of the nutrition transition model.', misconception: 'Graph interpretation is sometimes reduced to simply reading off individual data points, when the geographical skill involves identifying the overall trend and relating it back to relevant theory, such as the nutrition transition model.', tag: 'Drivers of the transition' },
    { q: 'A country moving from Pattern 3 towards Pattern 4 of the nutrition transition would typically show which change in mortality/health patterns?', options: ['A continued slow decline in mortality with no other change', 'An accelerated increase in life expectancy alongside a shift towards increased disability-related noncommunicable disease and increased disability period', 'A sudden return to low life expectancy', 'No measurable change in health outcomes at all'], correct: 1, explain: 'The shift from Pattern 3 to Pattern 4 is typically associated with an accelerated increase in life expectancy, alongside a shift towards increased disability-related noncommunicable disease (DR-NCD) and an increased disability period, as diets and lifestyles change.', misconception: 'Increasing life expectancy is sometimes assumed to mean uniformly improving health, when the nutrition transition model shows this can be accompanied by a rising burden of noncommunicable disease and disability.', tag: 'Pattern 4: Noncommunicable disease' }
  ]
};

window.SBL_LESSONS['FH-t1-l3-global-patterns'] = {
  id: 'FH-t1-l3-global-patterns',
  topicNumber: 1,
  topicTitle: 'Measuring food and health',
  title: 'Global patterns of health indicators',
  href: '/geography/paper-1/option-f/t1-measuring-food/l3-global-patterns',
  syllabusFocus: 'Ways of measuring disparities in food and health between places: global patterns in health indicators, including health-adjusted life expectancy (HALE), infant mortality, maternal mortality, access to sanitation, and the ratio between doctors/physicians and people.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'What is HALE?', request: 'Define health-adjusted life expectancy (HALE)' },
    { label: 'Infant mortality', request: 'Define infant mortality rate and explain why it is a useful indicator' },
    { label: 'Maternal mortality', request: 'Define maternal mortality rate and explain why it is a useful indicator' },
    { label: 'Access to sanitation', request: 'Explain access to sanitation as a health indicator' },
    { label: 'Doctors-to-people ratio', request: 'Explain the doctor/physician-to-population ratio as a health indicator' },
    { label: 'Spatial distribution of health indicators', request: 'Describe the global spatial distribution of these health indicators' },
    { label: 'Evaluating these indicators', request: 'Help me evaluate the effectiveness of these indicators in assessing the level of health of a population' }
  ],
  checklist: [
    'I can define HALE, infant mortality rate, maternal mortality, and the ratio between doctors/physicians and people.',
    'I can describe the spatial distribution of these indicators.',
    'I can evaluate their effectiveness in assessing the level of health of a population.'
  ],
  readinessQuestions: [
    'What is HALE, and how does it differ from ordinary life expectancy?',
    'What is the infant mortality rate, and why is it a widely used health indicator?',
    'What is the maternal mortality rate?',
    'Why is the doctor/physician-to-population ratio a useful health indicator?',
    'What is one limitation of using a single indicator to assess a population\u2019s health?'
  ],
  quiz: [
    { q: 'Health-Adjusted Life Expectancy (HALE) is best defined as:', options: ['The total number of years a person is expected to live, regardless of health', 'The average number of years a person can expect to live in full health, adjusting for years lived in poor health or disability', 'A measure of a country\u2019s healthcare spending', 'A term unrelated to life expectancy'], correct: 1, explain: 'HALE measures the average number of years a person can expect to live in full health, by adjusting standard life expectancy to account for years lived in less-than-full health due to disease or disability.', misconception: 'HALE is sometimes confused with ordinary life expectancy; the key difference is that HALE specifically adjusts for time spent in poor health, giving a more health-focused measure.', tag: 'What is HALE?' },
    { q: 'A country could have a similar overall life expectancy to another country but a lower HALE if it has:', options: ['No population at all', 'A higher burden of chronic illness or disability among its population, reducing years lived in full health', 'A larger land area', 'A lower birth rate'], correct: 1, explain: 'If a country has a higher burden of chronic illness or disability, its HALE will be lower than its raw life expectancy figure would suggest, since more of those years are being lived in poor health rather than full health.', misconception: 'Life expectancy and HALE are sometimes assumed to always move together, but a country can have similar life expectancy to another while having a notably lower HALE due to a higher disease/disability burden.', tag: 'What is HALE?' },
    { q: 'The infant mortality rate measures:', options: ['The number of deaths of adults over 65 per 1,000 population', 'The number of deaths of infants under one year old per 1,000 live births', 'The total birth rate of a country', 'The number of hospitals in a country'], correct: 1, explain: 'The infant mortality rate measures the number of deaths of infants under one year of age per 1,000 live births in a given year, and is widely used as a sensitive indicator of a population\u2019s overall health and healthcare quality.', misconception: 'Infant mortality is sometimes confused with child mortality more broadly (which covers a wider age range); infant mortality specifically refers to deaths within the first year of life.', tag: 'Infant mortality' },
    { q: 'Infant mortality rate is considered a particularly sensitive indicator of a population\u2019s health because it:', options: ['Is unrelated to healthcare quality', 'Reflects a combination of factors including maternal health, nutrition, sanitation, and access to healthcare', 'Only reflects a country\u2019s climate', 'Cannot be measured accurately in any country'], correct: 1, explain: 'Infant mortality rate is considered particularly sensitive because it reflects a combination of underlying factors, including maternal health, nutrition, sanitation, and access to quality healthcare, making it a useful summary indicator of overall population health.', misconception: 'Infant mortality is sometimes seen as reflecting only healthcare access, when it is actually influenced by a wider combination of nutritional, sanitary and maternal health factors together.', tag: 'Infant mortality' },
    { q: 'The maternal mortality rate measures:', options: ['The number of women who die during pregnancy, childbirth, or shortly after, per 100,000 live births', 'The total number of births in a country per year', 'The number of male deaths per year', 'The average age of mothers at first childbirth'], correct: 0, explain: 'The maternal mortality rate measures the number of women who die from pregnancy or childbirth-related causes, per 100,000 live births, and is a key indicator of the quality and accessibility of maternal healthcare.', misconception: 'Maternal mortality is sometimes confused with infant mortality; maternal mortality specifically measures deaths of mothers related to pregnancy and childbirth, not deaths of infants.', tag: 'Maternal mortality' },
    { q: 'Access to sanitation, as a health indicator, typically measures:', options: ['The percentage of a population with access to adequate facilities for the safe disposal of human waste', 'The number of restaurants in a country', 'A country\u2019s total rainfall', 'The price of clean water'], correct: 0, explain: 'Access to sanitation measures the percentage of a population with access to adequate facilities for the safe disposal of human waste, which is closely linked to the prevention of waterborne and infectious diseases.', misconception: 'Sanitation access is sometimes assumed to be the same as access to clean drinking water; while related, sanitation specifically refers to waste disposal facilities, a distinct but connected indicator.', tag: 'Access to sanitation' },
    { q: 'The doctor/physician-to-population ratio is a useful health indicator because it:', options: ['Has no relationship to healthcare access', 'Gives an indication of how accessible professional medical care is likely to be for the average person in a country', 'Only measures the number of hospitals, not doctors', 'Is identical in every country regardless of income level'], correct: 1, explain: 'The doctor/physician-to-population ratio gives an indication of how accessible professional medical care is likely to be for the average person, with a lower ratio (fewer doctors per person) generally suggesting reduced healthcare access.', misconception: 'This ratio is sometimes assumed to directly measure healthcare quality, when it more specifically indicates the potential accessibility of professional medical care, which is related to but distinct from quality of care.', tag: 'Doctors-to-people ratio' },
    { q: 'Global patterns of health indicators such as infant mortality and doctor-to-population ratios generally show:', options: ['No meaningful variation between countries', 'Significant variation, often correlated with a country\u2019s level of economic development', 'Identical figures across all continents', 'Variation that is completely unrelated to a country\u2019s income level'], correct: 1, explain: 'Global patterns of these health indicators generally show significant variation between countries, often correlated with a country\u2019s level of economic development \u2014 higher-income countries typically show lower infant/maternal mortality and higher doctor-to-population ratios, though there are important exceptions and nuances.', misconception: 'It is sometimes assumed development level perfectly predicts every health indicator, when there can be significant exceptions and the relationship, while strong, is not perfectly uniform.', tag: 'Spatial distribution of health indicators' },
    { q: 'A limitation of using a single health indicator (such as only infant mortality) to assess a population\u2019s overall health is that it:', options: ['Provides a completely comprehensive picture on its own', 'May not capture other important dimensions of health, such as chronic disease burden or mental health, requiring multiple indicators for a fuller picture', 'Is always the most accurate indicator available', 'Cannot be measured in any country'], correct: 1, explain: 'Relying on a single indicator, such as infant mortality alone, may not capture other important dimensions of a population\u2019s health, such as chronic disease burden, mental health, or health inequality within a country \u2014 geographers generally recommend using multiple indicators together for a fuller picture.', misconception: 'A single strong indicator is sometimes treated as sufficient on its own, when geographers emphasise that a combination of indicators is needed to properly evaluate a population\u2019s overall health.', tag: 'Evaluating these indicators' },
    { q: 'When evaluating the effectiveness of health indicators like HALE, infant mortality, and doctor-to-population ratio together, geographers would consider that:', options: ['They are entirely unrelated to each other and should never be compared', 'Each indicator captures a different dimension of health, so using them together provides a more complete and reliable picture than any single indicator alone', 'Only one of these indicators is ever considered valid', 'These indicators cannot be compared between countries'], correct: 1, explain: 'A strong evaluation recognises that each indicator (HALE, infant mortality, maternal mortality, sanitation access, doctor-to-population ratio) captures a different dimension of population health, so using them together, rather than relying on just one, provides geographers with a more complete and reliable overall picture.', misconception: 'Evaluation is sometimes treated as simply naming a limitation, when a stronger evaluative response recognises how combining multiple indicators together addresses the limitations of relying on any single one.', tag: 'Evaluating these indicators' }
  ]
};

window.SBL_LESSONS['FH-t1-l4-the'] = {
  id: 'FH-t1-l4-the',
  topicNumber: 1,
  topicTitle: 'Measuring food and health',
  title: 'The epidemiological transition model',
  href: '/geography/paper-1/option-f/t1-measuring-food/l4-the',
  syllabusFocus: 'The epidemiological transition, the diseases continuum (diseases of poverty to diseases of affluence), and the implications of a global ageing population for disease burden, including key terms such as disease of affluence, disease of poverty, communicable disease, non-communicable disease, prevalence, incidence, pandemic disease and endemic disease.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'Key terms', request: 'Define disease of affluence, disease of poverty, communicable disease, non-communicable disease, prevalence, incidence, pandemic disease and endemic disease' },
    { label: 'What is the epidemiological transition?', request: 'Explain what the epidemiological transition model (ETM) is' },
    { label: 'The diseases continuum', request: 'Explain the diseases continuum from diseases of poverty to diseases of affluence' },
    { label: 'Reading the ETM', request: 'Help me read and interpret the epidemiological transition model' },
    { label: 'Ageing population and disease burden', request: 'Explain the implications of a global ageing population for disease burden' },
    { label: 'Prevalence vs incidence', request: 'Explain the difference between prevalence and incidence with an example' },
    { label: 'Pandemic vs endemic', request: 'Explain the difference between a pandemic disease and an endemic disease' }
  ],
  checklist: [
    'I can define key terms relating to disease such as infectious and degenerative.',
    'I can read, interpret and explain the epidemiological transition model (ETM).',
    'I can explain the concept of the burden of disease.'
  ],
  readinessQuestions: [
    'What is the difference between a disease of poverty and a disease of affluence?',
    'What is the difference between a communicable and a non-communicable disease?',
    'What is the difference between prevalence and incidence?',
    'What is the difference between a pandemic disease and an endemic disease?',
    'How might a global ageing population affect a country\u2019s disease burden?'
  ],
  quiz: [
    { q: 'A "disease of poverty" typically refers to a disease that is:', options: ['Strongly associated with affluent, high-income lifestyles', 'Strongly associated with conditions of poverty, such as poor sanitation, malnutrition and limited healthcare access', 'Only found in high-income countries', 'A term with no meaningful geographical pattern'], correct: 1, explain: 'A disease of poverty is a disease strongly associated with conditions of poverty, such as poor sanitation, malnutrition, overcrowding and limited access to healthcare, and is more commonly found in lower-income settings.', misconception: 'Diseases of poverty and diseases of affluence are sometimes confused; diseases of poverty are linked to deprivation-related conditions, the opposite association to diseases of affluence.', tag: 'Key terms' },
    { q: 'A "disease of affluence" typically refers to a disease that is:', options: ['Associated with poor sanitation and malnutrition', 'Associated with wealthier, more sedentary lifestyles, such as high-fat diets and reduced physical activity', 'Only found in low-income countries', 'A disease that has been eliminated worldwide'], correct: 1, explain: 'A disease of affluence is associated with wealthier, more sedentary lifestyles, including diets high in fat and sugar and reduced physical activity, and includes many noncommunicable diseases such as type 2 diabetes and heart disease.', misconception: 'It is sometimes assumed all diseases become less common as a country develops, when diseases of affluence actually tend to become more prevalent as countries develop economically.', tag: 'Key terms' },
    { q: 'A communicable disease is one that:', options: ['Cannot be transmitted between people', 'Can be transmitted from one person (or organism) to another, such as through infection', 'Is always caused by lifestyle factors alone', 'Only affects a single individual and never spreads'], correct: 1, explain: 'A communicable disease is one that can be transmitted from one person or organism to another, typically through infection by a pathogen such as a virus, bacterium or parasite.', misconception: 'Communicable and non-communicable diseases are sometimes confused; communicable diseases are specifically those that can spread between people or organisms, unlike non-communicable diseases.', tag: 'Key terms' },
    { q: 'A non-communicable disease is one that:', options: ['Spreads easily between people through infection', 'Cannot be transmitted between people, such as many chronic conditions linked to lifestyle or genetics', 'Is always caused by a virus', 'Only occurs in low-income countries'], correct: 1, explain: 'A non-communicable disease cannot be transmitted between people; these are often chronic conditions linked to lifestyle, environmental or genetic factors, such as heart disease, diabetes or many cancers.', misconception: 'Non-communicable diseases are sometimes assumed to be less serious because they don\u2019t spread, when many are actually significant causes of death and disability worldwide.', tag: 'Key terms' },
    { q: 'Prevalence, as a disease measure, refers to:', options: ['The number of new cases of a disease occurring in a given time period', 'The total number of existing cases of a disease in a population at a given time', 'A term unrelated to disease measurement', 'The number of deaths caused by a disease only'], correct: 1, explain: 'Prevalence refers to the total number (or proportion) of existing cases of a disease within a population at a given point in time, including both new and long-standing cases.', misconception: 'Prevalence and incidence are very commonly confused; prevalence is a "snapshot" of all existing cases, while incidence specifically measures new cases over a period of time.', tag: 'Key terms' },
    { q: 'Incidence, as a disease measure, refers to:', options: ['The total number of existing cases of a disease at a single point in time', 'The number of new cases of a disease occurring within a population during a specified time period', 'A measure only used for non-communicable diseases', 'The geographic location where a disease first appeared'], correct: 1, explain: 'Incidence refers specifically to the number of new cases of a disease occurring within a population during a defined time period, distinguishing it from prevalence, which counts all existing cases.', misconception: 'A useful way to remember the distinction: incidence counts new cases arriving, while prevalence counts everyone currently affected, whether newly diagnosed or long-standing.', tag: 'Key terms' },
    { q: 'A pandemic disease is one that:', options: ['Is confined to a single small local area', 'Has spread across multiple countries or continents, affecting a large number of people globally', 'Only affects animals, never humans', 'Has a constant, stable presence in one specific region only'], correct: 1, explain: 'A pandemic disease is one that has spread across multiple countries or continents, affecting a large number of people over a wide geographic area, representing the largest scale of disease outbreak.', misconception: 'Pandemic is sometimes used loosely to describe any serious disease outbreak, when it specifically refers to widespread international or global spread, distinct from a more geographically contained epidemic or endemic disease.', tag: 'Key terms' },
    { q: 'An endemic disease is one that:', options: ['Has spread suddenly across the entire world', 'Is consistently and predictably present within a particular population or region, at a relatively stable level', 'Has never occurred anywhere in the world', 'Only occurs once and then disappears permanently'], correct: 1, explain: 'An endemic disease is one that is consistently and predictably present within a particular population or geographic region, maintaining a relatively stable baseline level, as opposed to sudden widespread outbreaks.', misconception: 'Endemic is sometimes confused with pandemic; endemic specifically describes a disease\u2019s constant, regular presence in a specific area, the opposite of the sudden, wide-scale spread implied by pandemic.', tag: 'Key terms' },
    { q: 'The epidemiological transition model describes:', options: ['A random, unpredictable pattern of disease with no relationship to development', 'The long-term shift in the leading causes of death and disease within a population, typically moving from infectious/communicable diseases towards noncommunicable/degenerative diseases as a country develops', 'A model used only to predict future population size', 'A model unrelated to the nutrition transition'], correct: 1, explain: 'The epidemiological transition model describes the long-term shift in the leading causes of death and disease within a population, typically moving from a predominance of infectious and communicable diseases towards a predominance of noncommunicable and degenerative diseases as a country develops economically, closely linked to the nutrition transition.', misconception: 'The epidemiological transition is sometimes treated as an isolated topic, when it is closely connected to the nutrition transition studied earlier in this unit \u2014 both describe interconnected patterns of change linked to development.', tag: 'What is the epidemiological transition?' },
    { q: 'A global ageing population is likely to increase a country\u2019s overall disease burden particularly in relation to:', options: ['Only childhood infectious diseases', 'Noncommunicable and degenerative diseases, which tend to become more common with increasing age', 'A country\u2019s birth rate', 'Diseases that only affect young people'], correct: 1, explain: 'As populations age, the overall disease burden tends to shift further towards noncommunicable and degenerative diseases (such as heart disease, cancer, and dementia), which become more common with increasing age, placing greater pressure on healthcare systems designed around this changing need.', misconception: 'The implications of ageing populations are sometimes considered only in terms of pension costs or workforce size, when the associated shift in disease burden towards chronic, noncommunicable conditions is an equally significant geographical and healthcare planning consideration.', tag: 'Ageing population and disease burden' }
  ]
};

window.SBL_LESSONS.FH06 = {
  id: 'FH06',
  topicNumber: 2,
  topicTitle: 'Food systems and spread of diseases',
  title: 'Energy and water footprints in food production',
  href: '/geography/paper-1/option-f/t2-food-systems/l1-energy-and',
  syllabusFocus: 'The merits of a systems approach (inputs, stores, transfers, outputs) to compare energy efficiency and water footprints in food production, and relative sustainability in different places.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'What is a systems approach?', request: 'Explain what a systems approach is, including inputs, stores, transfers and outputs' },
    { label: 'How to read a systems diagram', request: 'Explain how to interpret a systems diagram' },
    { label: 'Energy inputs in food production', request: 'Explain the energy inputs involved in food production' },
    { label: 'Water footprints', request: 'Explain what a water footprint is in the context of food production' },
    { label: 'The cornflakes example', request: 'Explain the cornflakes example of energy inputs and outputs in a food production system' },
    { label: 'Linking back to the nexus', request: 'Explain how this lesson links back to the water-food-energy nexus' },
    { label: 'Comparing sustainability', request: 'Explain how energy efficiency and water footprints can be used to compare sustainability in different places' }
  ],
  checklist: [
    'I can describe and interpret a systems diagram.',
    'I can identify inputs, stores, transfers and outputs.',
    'I can identify energy inputs in food production.',
    'I can identify water inputs in food production.',
    'I can apply the cornflakes example to explain energy inputs and outputs.',
    'I can link this lesson to the water-food-energy nexus.',
    'I can compare energy efficiency and water footprints between places.'
  ],
  readinessQuestions: [
    'What are the four components of a systems approach?',
    'Give one energy input and one water input involved in food production.',
    'Explain how the cornflakes example illustrates energy inputs and outputs.',
    'How does this lesson link back to the water-food-energy nexus studied previously?',
    'Explain how energy efficiency and water footprints can be used to compare the sustainability of food production in different places.'
  ],
  quiz: [
    { q: 'In a systems approach, "inputs" refer to:', options: ['The final products leaving the system', 'The resources entering a system, such as energy, water or raw materials', 'A place where materials are held before being processed', 'The movement of materials between parts of the system'], correct: 1, explain: 'Inputs are the resources that enter a system, such as energy, water, seeds or fertiliser in a food production system.', misconception: 'Inputs are sometimes confused with outputs; a helpful check is that inputs go INTO the system, while outputs come OUT of it.', tag: 'What is a systems approach?' },
    { q: 'In a systems approach, "outputs" refer to:', options: ['Resources entering the system', 'Products or materials leaving the system, such as food products or waste', 'A place where materials are held within the system', 'The transfer of energy between two stores'], correct: 1, explain: 'Outputs are the products or materials that leave a system, such as the finished food product, waste heat, or emissions.', misconception: 'Outputs are sometimes assumed to only mean the "useful" final product; waste and by-products leaving the system are also outputs.', tag: 'What is a systems approach?' },
    { q: 'A "store" within a systems approach refers to:', options: ['A place where resources are held or accumulated within the system for a period of time', 'The movement of energy or materials from one part of a system to another', 'Only the initial resources used to start a process', 'A physical shop selling food'], correct: 0, explain: 'A store is a point within a system where resources are held, such as grain in a silo or water in a reservoir, before moving on to the next stage.', misconception: 'Stores are sometimes confused with transfers; a store is where something is held, while a transfer is the movement between stores.', tag: 'How to read a systems diagram' },
    { q: 'A "transfer" within a systems approach refers to:', options: ['A resource being held in one place indefinitely', 'The movement of energy or materials from one store to another within the system', 'The final product of the system', 'A resource entering the system for the first time'], correct: 1, explain: 'A transfer describes the movement of energy or materials between stores within a system, such as water being pumped from a reservoir to a field.', misconception: 'Transfers are sometimes confused with inputs; transfers occur between parts of the system, while inputs are resources entering the system from outside.', tag: 'How to read a systems diagram' },
    { q: 'A key energy input in modern food production is:', options: ['Sunlight only, with no other energy sources involved', 'Fuel used for machinery, fertiliser manufacture, processing and transport', 'Food production requires no energy input at all', 'Only the energy contained within the final food product'], correct: 1, explain: 'Modern food production requires significant energy inputs beyond sunlight, including fuel for machinery, energy used to manufacture fertiliser, and energy for processing and transporting food.', misconception: 'Energy input to food production is sometimes assumed to be limited to sunlight for plant growth, overlooking the substantial fossil fuel energy used throughout modern industrial food systems.', tag: 'Energy inputs in food production' },
    { q: 'A water footprint, in the context of food production, measures:', options: ['The physical size of a farm', 'The total volume of water used directly and indirectly to produce a food item', 'Only the water a plant absorbs from rainfall', 'The amount of water contained within the final food product'], correct: 1, explain: 'A water footprint measures the total volume of water used, both directly and indirectly, throughout the entire production process of a food item, not just the water contained in the final product.', misconception: 'Water footprint is sometimes confused with the literal water content of a food item; it actually measures the full water used across the whole production process, which is often much higher than the water visibly present in the product itself.', tag: 'Water footprints' },
    { q: 'Using cornflakes as a systems example, the "inputs" would include:', options: ['The finished box of cornflakes on a supermarket shelf', 'Water, energy, and raw maize used to grow and process the crop', 'Only the cardboard packaging', 'Consumer waste after eating the cereal'], correct: 1, explain: 'In the cornflakes systems example, inputs include the water and energy used to grow the maize, plus the raw maize crop itself, before any processing occurs.', misconception: 'It is easy to mix up the stage being described; inputs specifically refer to what goes into the system at the start (growing the crop), not what comes out at the end.', tag: 'The cornflakes example' },
    { q: 'Using cornflakes as a systems example, an "output" would include:', options: ['The seeds planted at the very start', 'The finished cornflakes product, along with waste products such as husks or wastewater', 'The soil used to grow the maize', 'The rainfall received by the crop'], correct: 1, explain: 'Outputs in the cornflakes system example include the finished cornflakes product itself, as well as waste products generated during growing and processing, such as husks or wastewater.', misconception: 'Outputs are sometimes assumed to only be the desirable final product; waste generated at any stage of the system is also a valid output.', tag: 'The cornflakes example' },
    { q: 'This lesson links back to the water-food-energy nexus studied previously because:', options: ['It has no connection to the nexus concept', 'It shows in concrete detail how energy and water are interlinked inputs required throughout the food production system', 'The nexus only applies to industrial manufacturing, not food', 'Food production uses energy but never uses water'], correct: 1, explain: 'This lesson provides a detailed, concrete example of the water-food-energy nexus in action, showing specifically how energy and water are interlinked inputs required at every stage of food production.', misconception: 'The nexus concept can feel abstract when first introduced; this lesson demonstrates it with a specific, traceable example (like cornflakes) to make the interconnection concrete.', tag: 'Linking back to the nexus' },
    { q: 'Comparing the energy efficiency and water footprints of food production between different places can help geographers:', options: ['Prove that food production is identical everywhere in the world', 'Assess and compare the relative sustainability of food production systems in different places', 'Determine only the financial cost of food, with no environmental relevance', 'Show that sustainability has no connection to resource use'], correct: 1, explain: 'Comparing energy efficiency and water footprints across different food production systems and places allows geographers to assess and compare their relative environmental sustainability.', misconception: 'Sustainability comparisons are sometimes reduced to a single factor (like cost); a systems approach with energy and water data provides a more rigorous, comparable basis for assessing genuine sustainability.', tag: 'Comparing sustainability' }
  ]
};

window.SBL_LESSONS.FH07 = {
  id: 'FH07',
  topicNumber: 2,
  topicTitle: 'Food systems and spread of diseases',
  title: 'Disease diffusion and barriers',
  href: '/geography/paper-1/option-f/t2-food-systems/l2-disease',
  syllabusFocus: 'The importance of diffusion (including adoption/acquisition, expansion, relocation) in the spread of diseases, and the role of geographic factors (including physical, economic and political barriers) in the rate of diffusion.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'How diseases spread', request: 'Explain the different ways diseases can spread' },
    { label: 'Types of diffusion', request: 'Explain the different types of diffusion relevant to disease spread' },
    { label: 'Physical barriers', request: 'Explain physical barriers to disease transmission' },
    { label: 'Economic and political barriers', request: 'Explain economic and political barriers to disease transmission' },
    { label: 'Bird flu strategies', request: 'Explain the strategies used to limit the spread of bird flu' },
    { label: 'Evaluating bird flu strategies', request: 'Help me evaluate the effectiveness of strategies used to limit bird flu' }
  ],
  checklist: [
    'I can describe how diseases are spread.',
    'I can identify the type of disease diffusion in a given example.',
    'I can explain physical barriers to disease transmission.',
    'I can explain economic barriers to disease transmission.',
    'I can explain political barriers to disease transmission.',
    'I can describe strategies used to limit the spread of bird flu.',
    'I can evaluate the effectiveness of these strategies.'
  ],
  readinessQuestions: [
    'Describe how diseases can be spread from person to person.',
    'Name the three main types of diffusion covered in this lesson.',
    'Give one physical barrier and one economic or political barrier to disease transmission.',
    'Explain one strategy used to limit the spread of bird flu.',
    'How would you evaluate whether a strategy to limit bird flu has been effective?'
  ],
  quiz: [
    { q: '"Expansion diffusion" describes a pattern in which a disease:', options: ['Spreads outward from its origin, with the origin area remaining affected as new areas also become affected', 'Disappears entirely from its area of origin as it spreads', 'Only ever affects a single fixed location', 'Skips over neighbouring areas entirely'], correct: 0, explain: 'Expansion diffusion describes a disease spreading outward from its origin, with the original area remaining affected as new, nearby areas also become affected.', misconception: 'Expansion diffusion is sometimes confused with relocation diffusion; the key feature of expansion is that the origin area remains affected throughout the spread.', tag: 'Types of diffusion' },
    { q: '"Relocation diffusion" describes a pattern in which a disease:', options: ['Spreads outward while the origin area remains affected', 'Moves with people from one location to a new location, sometimes leaving the origin area behind', 'Never involves any human movement', 'Only spreads through animals, never humans'], correct: 1, explain: 'Relocation diffusion occurs when a disease moves with people (or animals) from one place to a new place, such as through migration or travel, and can leave the origin area unaffected as the disease moves elsewhere.', misconception: 'Relocation diffusion is sometimes confused with expansion diffusion; the defining feature of relocation is that spread is tied to movement of people/animals to a new location, not gradual outward spread.', tag: 'Types of diffusion' },
    { q: '"Adoption/acquisition" in this context refers to:', options: ['A government policy banning disease spread', 'The process by which a new area or population becomes exposed to and affected by a disease', 'A type of vaccine', 'A method of measuring rainfall'], correct: 1, explain: 'Adoption/acquisition refers to the process by which a new area or population becomes exposed to and subsequently affected by a disease as it diffuses.', misconception: 'This term is sometimes assumed to only apply to positive innovations (like technology); in a disease context, it describes how a place or population becomes affected by the disease itself.', tag: 'Types of diffusion' },
    { q: 'A physical barrier to disease transmission would be:', options: ['A mountain range or ocean that limits contact between populations', 'A government border closure', 'A trade tariff', 'A public health awareness campaign'], correct: 0, explain: 'Physical barriers are natural geographic features, such as mountain ranges, deserts or oceans, that limit contact between populations and can slow disease spread.', misconception: 'Physical barriers are sometimes confused with political barriers (like border closures); physical barriers are natural geographic features, not human decisions or policies.', tag: 'Physical barriers' },
    { q: 'A political barrier to disease transmission would be:', options: ['A mountain range separating two countries', 'Government-imposed border closures or travel restrictions', 'The natural water cycle', 'The distance between two cities'], correct: 1, explain: 'Political barriers involve government decisions and policy, such as border closures or travel restrictions, deliberately imposed to limit disease transmission between areas.', misconception: 'Political and physical barriers can both slow disease spread, but political barriers specifically involve human governmental decisions, while physical barriers are natural geographic features.', tag: 'Economic and political barriers' },
    { q: 'An economic barrier to disease transmission might include:', options: ['A country\u2019s inability to afford widespread vaccination or monitoring programmes, allowing a disease to spread more easily', 'A trade agreement that has no relevance to disease spread', 'The height of a mountain range', 'A country\u2019s national holidays'], correct: 0, explain: 'Economic barriers relate to a country or region\u2019s financial capacity to prevent, monitor or respond to disease, such as being unable to afford widespread vaccination, healthcare access or surveillance systems.', misconception: 'Economic factors are sometimes assumed to only affect the severity of a disease\u2019s impact, when limited economic resources can also directly affect a region\u2019s capacity to prevent and control its spread in the first place.', tag: 'Economic and political barriers' },
    { q: 'Strategies used to limit the spread of bird flu have commonly included:', options: ['Culling infected poultry and restricting movement of birds/poultry products', 'Ignoring the outbreak entirely', 'Increasing international travel to affected areas', 'Removing all disease surveillance systems'], correct: 0, explain: 'Common strategies to limit bird flu have included culling infected poultry flocks and restricting the movement of birds and poultry products between farms and regions to prevent further spread.', misconception: 'Disease control strategies are sometimes assumed to focus only on treating infected individuals; for diseases like bird flu, preventing further spread through culling and movement restrictions is often the primary strategy.', tag: 'Bird flu strategies' },
    { q: 'Surveillance and early detection systems are important strategies for limiting bird flu because they:', options: ['Have no real impact on controlling an outbreak', 'Allow outbreaks to be identified and responded to quickly, before the disease can spread further', 'Are only useful after an outbreak has already spread globally', 'Replace the need for any other control measures'], correct: 1, explain: 'Surveillance and early detection systems allow authorities to identify outbreaks quickly and respond before the disease has the opportunity to spread further, making them a key preventative strategy.', misconception: 'Surveillance is sometimes undervalued compared to more visible measures like culling; early detection is actually crucial for enabling a fast, effective response before wider spread occurs.', tag: 'Bird flu strategies' },
    { q: 'When evaluating the effectiveness of strategies to limit bird flu, geographers would consider:', options: ['Only whether the strategy received media attention', 'Whether the measurable spread and impact of the disease were reduced as a result of the strategy', 'The strategy\u2019s cost alone, regardless of outcomes', 'Whether the strategy was used in every country in an identical way'], correct: 1, explain: 'Evaluating effectiveness requires assessing whether the strategy genuinely reduced the measurable spread and impact of the disease, rather than judging by cost or public attention alone.', misconception: 'Effectiveness evaluation sometimes focuses only on cost or visibility; a genuine evaluation requires evidence that the specific strategy measurably reduced disease spread or impact.', tag: 'Evaluating bird flu strategies' },
    { q: 'Overall, this lesson demonstrates that the spread of disease, like the spread of innovations, is best understood through:', options: ['A single, universal pattern with no variation between diseases or places', 'The interaction between different diffusion types (expansion, relocation) and geographic barriers (physical, economic, political) that shape the pace and pattern of spread', 'Physical geography alone, with no role for economic or political factors', 'Random chance with no identifiable pattern'], correct: 1, explain: 'This lesson shows that disease spread is best understood through the interaction between diffusion type (how it moves) and geographic barriers (physical, economic, political) that shape the pace and pattern of that spread \u2014 the same framework used to study the diffusion of agricultural innovations.', misconception: 'Disease spread is sometimes analysed only in medical/biological terms; this lesson emphasises the specifically geographical framework of diffusion types and barriers that shapes how and where diseases actually spread.', tag: 'How diseases spread' }
  ]
};

window.SBL_LESSONS.FH08 = {
  id: 'FH08',
  topicNumber: 2,
  topicTitle: 'Food systems and spread of diseases',
  title: 'The role of diffusion in agriculture',
  href: '/geography/paper-1/option-f/t2-food-systems/l3-the-role-of',
  syllabusFocus: 'The importance of diffusion (including adoption/acquisition, expansion, relocation) in the spread of agricultural innovations.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'What is diffusion of agricultural innovation?', request: 'Explain what is meant by the diffusion of agricultural innovations' },
    { label: 'Key agricultural innovations', request: 'Describe several key agricultural innovations' },
    { label: 'How innovations spread', request: 'Explain how agricultural innovations spread between farmers and places' },
    { label: 'Advantages for farmers', request: 'Explain the advantages of adopting agricultural innovations for farmers' },
    { label: 'Possible drawbacks', request: 'Explain the possible drawbacks of agricultural innovations for farmers' },
    { label: 'Comparing to disease diffusion', request: 'Compare the diffusion of agricultural innovations to the diffusion of disease' }
  ],
  checklist: [
    'I can explain what diffusion of agricultural innovations means.',
    'I can describe several key agricultural innovations.',
    'I can explain how innovations spread between farmers and places.',
    'I can explain advantages of adopting agricultural innovations.',
    'I can explain possible drawbacks for farmers.',
    'I can compare innovation diffusion to disease diffusion.'
  ],
  readinessQuestions: [
    'What is meant by the diffusion of agricultural innovations?',
    'Name one key agricultural innovation and briefly describe it.',
    'Explain one advantage of adopting an agricultural innovation for a farmer.',
    'Explain one possible drawback of adopting an agricultural innovation for a farmer.',
    'How is the diffusion of agricultural innovations similar to the diffusion of disease, studied in the previous lesson?'
  ],
  quiz: [
    { q: 'The diffusion of agricultural innovations refers to:', options: ['The process by which new farming technologies, techniques or crop varieties spread between farmers and places over time', 'A single farmer inventing a new technique with no wider spread', 'The complete disappearance of traditional farming methods', 'A term unrelated to agriculture'], correct: 0, explain: 'The diffusion of agricultural innovations describes the process by which new farming technologies, techniques or crop varieties spread from their point of origin to other farmers and places over time.', misconception: 'Diffusion is sometimes thought of as a single, instant event; in reality it is typically a gradual process spreading over time and distance, following the same diffusion concepts (expansion, relocation) studied for disease spread.', tag: 'What is diffusion of agricultural innovation?' },
    { q: 'Which of these is an example of an agricultural innovation?', options: ['High-yield crop varieties developed during the Green Revolution', 'A traditional farming method unchanged for centuries', 'A natural weather pattern', 'A geological feature of the land'], correct: 0, explain: 'High-yield crop varieties, developed and spread during the Green Revolution, are a well-known example of an agricultural innovation that diffused widely and significantly increased global food production.', misconception: 'Long-standing traditional methods are sometimes mistakenly labelled as innovations; an innovation specifically refers to something new that then diffuses and is adopted more widely.', tag: 'Key agricultural innovations' },
    { q: 'Precision agriculture (using GPS, sensors and data to guide farming decisions) is an example of:', options: ['A traditional farming method with no technological element', 'A modern agricultural innovation using technology to improve efficiency', 'A physical barrier to diffusion', 'A type of disease affecting crops'], correct: 1, explain: 'Precision agriculture is a modern agricultural innovation that uses technology such as GPS, sensors and data analysis to help farmers make more efficient, targeted decisions about their land and crops.', misconception: 'Agricultural innovation is sometimes assumed to only refer to crop varieties; technological and data-driven approaches like precision agriculture are equally significant modern innovations.', tag: 'Key agricultural innovations' },
    { q: 'Agricultural innovations often spread between farmers through:', options: ['Word of mouth, agricultural extension services, and observing neighbouring farms', 'Complete isolation, with no communication between farmers', 'Random chance with no identifiable pathway', 'Only through government mandate, never voluntary adoption'], correct: 0, explain: 'Innovations commonly spread through informal communication (word of mouth), formal agricultural extension services providing advice and training, and farmers observing and learning from the success of neighbouring farms.', misconception: 'The spread of innovation is sometimes assumed to be a purely top-down, government-driven process; much diffusion actually happens through informal networks and observed success among farmers themselves.', tag: 'How innovations spread' },
    { q: 'A key advantage of adopting an agricultural innovation, such as a high-yield crop variety, can be:', options: ['Guaranteed elimination of all farming risk', 'Increased crop yields and potentially higher income for the farmer', 'A guaranteed reduction in the need for any water or fertiliser', 'No effect on farming outcomes whatsoever'], correct: 1, explain: 'A key advantage of adopting agricultural innovations, such as high-yield crop varieties, is the potential for significantly increased crop yields, which can improve farmer income and food security.', misconception: 'Benefits of innovation are sometimes assumed to be guaranteed and risk-free; while yields can increase substantially, real-world adoption still carries genuine risks and trade-offs.', tag: 'Advantages for farmers' },
    { q: 'A possible drawback of adopting an agricultural innovation for farmers can be:', options: ['Guaranteed higher income with no downside', 'The upfront cost of new seeds, equipment or technology, which may be unaffordable for some farmers', 'Complete elimination of all agricultural risk', 'No effect on a farmer\u2019s existing practices'], correct: 1, explain: 'A significant possible drawback is the upfront financial cost of adopting new seeds, equipment or technology, which some farmers, particularly smaller-scale or lower-income farmers, may struggle to afford.', misconception: 'Innovation is sometimes presented as an unambiguous benefit for all farmers; in practice, cost and access barriers can mean wealthier or larger-scale farmers benefit disproportionately compared to smaller or poorer farmers.', tag: 'Possible drawbacks' },
    { q: 'A further possible drawback of certain agricultural innovations, such as high-yield crop varieties, can be:', options: ['Increased dependency on purchased inputs such as specific fertilisers, pesticides or seeds each season', 'A guaranteed reduction in all farming costs', 'Complete independence from any external inputs', 'No change to a farmer\u2019s existing costs or practices'], correct: 0, explain: 'Some agricultural innovations, particularly certain high-yield crop varieties, can increase a farmer\u2019s dependency on specific purchased inputs (such as particular fertilisers, pesticides, or seeds that must be bought fresh each season), creating an ongoing cost and reliance on suppliers.', misconception: 'The drawbacks of agricultural innovation are sometimes seen only in terms of the initial cost; ongoing dependency on repeated purchases of specific inputs is a separate, longer-term consideration.', tag: 'Possible drawbacks' },
    { q: 'Comparing the diffusion of agricultural innovations to the diffusion of disease, a key similarity is that both:', options: ['Have no meaningful similarities at all', 'Can be analysed using the same diffusion concepts, such as expansion and relocation diffusion, and are shaped by geographic barriers', 'Only ever spread instantly, with no gradual process', 'Are entirely unrelated to geography as a subject'], correct: 1, explain: 'Both the diffusion of agricultural innovations and the diffusion of disease can be analysed using the same underlying geographic concepts \u2014 expansion diffusion, relocation diffusion, and the role of physical, economic and political barriers in shaping the pace and pattern of spread.', misconception: 'Innovation diffusion and disease diffusion might seem like very different topics, but geographers deliberately study them together because they share the same underlying spatial diffusion framework.', tag: 'Comparing to disease diffusion' },
    { q: 'A key difference between the diffusion of agricultural innovations and disease diffusion is:', options: ['Innovation diffusion is generally a voluntary process chosen by farmers, while disease diffusion is not a matter of choice', 'There is no meaningful difference between the two processes', 'Disease diffusion always happens faster than innovation diffusion', 'Agricultural innovations never face any barriers to their spread'], correct: 0, explain: 'A key difference is that farmers generally choose whether to adopt an agricultural innovation (a voluntary decision weighing costs and benefits), whereas disease diffusion is not a matter of individual choice in the same way.', misconception: 'It is tempting to treat these two diffusion processes as identical simply because they use the same framework; the voluntary versus involuntary nature of adoption/exposure is an important distinguishing feature.', tag: 'Comparing to disease diffusion' },
    { q: 'Overall, understanding how agricultural innovations spread helps geographers to:', options: ['Predict and potentially influence how quickly new farming practices reach farmers who could benefit from them, and identify barriers preventing wider adoption', 'Have no practical use in the real world', 'Guarantee identical adoption rates in every country', 'Replace the need to study disease diffusion separately'], correct: 0, explain: 'Understanding the diffusion of agricultural innovations helps geographers and policymakers predict and potentially influence how quickly beneficial new farming practices reach farmers, and identify the specific barriers preventing wider adoption in certain places.', misconception: 'This topic is sometimes seen as purely theoretical; in practice, understanding diffusion patterns has real practical value for organisations trying to support wider adoption of beneficial agricultural innovations.', tag: 'How innovations spread' }
  ]
};

window.SBL_LESSONS.FH09 = {
  id: 'FH09',
  topicNumber: 2,
  topicTitle: 'Food systems and spread of diseases',
  title: 'Malaria in Kenya \u2014 a vector-borne disease case study',
  href: '/geography/paper-1/option-f/t2-food-systems/l4-malaria-in',
  syllabusFocus: 'Geographic factors contributing to the incidence, diffusion and impacts (demographic and socio-economic) of vector-borne diseases, using malaria in Kenya as a detailed example.',
  starterButtons: [
    { label: 'Teach me this case study', request: 'Give me a full overview of this case study' },
    { label: 'What is a vector-borne disease?', request: 'Explain what a vector-borne disease is' },
    { label: 'Malaria diffusion in Kenya', request: 'Describe the diffusion of malaria in Kenya' },
    { label: 'Geographic factors for incidence', request: 'Explain the geographic factors contributing to malaria incidence in Kenya' },
    { label: 'Demographic impacts', request: 'Explain the demographic impacts of malaria in Kenya' },
    { label: 'Socio-economic impacts', request: 'Explain the socio-economic impacts of malaria in Kenya' },
    { label: 'National and local impacts', request: 'Analyse the national and local impacts of malaria in Kenya' },
    { label: 'Intervention strategies', request: 'Evaluate the intervention strategies used to combat malaria in Kenya' }
  ],
  checklist: [
    'I can define a vector-borne disease.',
    'I can describe the diffusion of malaria in Kenya.',
    'I can explain geographic factors contributing to malaria incidence.',
    'I can explain demographic impacts of malaria.',
    'I can explain socio-economic impacts of malaria.',
    'I can analyse national and local impacts.',
    'I can evaluate intervention strategies used to combat malaria.'
  ],
  readinessQuestions: [
    'What is a vector-borne disease, and what is the vector for malaria?',
    'Explain one geographic factor contributing to the incidence of malaria in Kenya.',
    'Give one demographic and one socio-economic impact of malaria in Kenya.',
    'Describe one national and one local impact of malaria in Kenya.',
    'Evaluate one intervention strategy used to combat malaria in Kenya.'
  ],
  quiz: [
    { q: 'A vector-borne disease is best defined as:', options: ['A disease spread directly from person to person through the air', 'A disease transmitted to humans through a living organism such as a mosquito', 'A disease caused entirely by poor water quality', 'A disease that only affects animals, never humans'], correct: 1, explain: 'A vector-borne disease is transmitted to humans through a living organism (a vector), such as a mosquito, which carries the disease-causing pathogen between hosts.', misconception: 'Vector-borne disease is sometimes confused with airborne or water-borne disease; the defining feature of a vector-borne disease is transmission via a living carrier organism.', tag: 'What is a vector-borne disease?' },
    { q: 'The vector responsible for transmitting malaria is:', options: ['The tsetse fly', 'The Anopheles mosquito', 'The common housefly', 'A species of tick'], correct: 1, explain: 'Malaria is transmitted by the Anopheles mosquito, which carries the Plasmodium parasite responsible for the disease.', misconception: 'Different disease vectors are sometimes confused with one another; it is important to know the specific vector (Anopheles mosquito) associated with malaria specifically.', tag: 'What is a vector-borne disease?' },
    { q: 'A key geographic factor contributing to malaria incidence in parts of Kenya is:', options: ['High altitude and consistently cold, dry conditions', 'Warm temperatures and standing water providing ideal mosquito breeding conditions', 'A complete absence of any water sources', 'Year-round freezing temperatures'], correct: 1, explain: 'Warm temperatures combined with standing water (such as in areas with heavy rainfall, poor drainage, or near lakes) provide ideal breeding conditions for Anopheles mosquitoes, increasing malaria incidence in affected regions of Kenya.', misconception: 'Malaria risk is sometimes assumed to be uniform across an entire country; in Kenya, incidence varies significantly with altitude and climate, being generally lower in cooler highland areas.', tag: 'Geographic factors for incidence' },
    { q: 'Altitude affects malaria risk in Kenya because:', options: ['Higher altitudes have no effect on mosquito populations', 'Higher, cooler altitudes are generally less favourable for mosquito breeding, reducing malaria risk compared to warmer lowland areas', 'Malaria risk increases uniformly with altitude', 'Mosquitoes cannot survive at any altitude'], correct: 1, explain: 'Higher altitude areas in Kenya tend to be cooler, which is generally less favourable for Anopheles mosquito breeding and survival, resulting in lower malaria risk compared to warmer lowland regions.', misconception: 'It is sometimes assumed malaria risk is the same everywhere within a country; altitude-related temperature differences create genuine, significant variation in risk within Kenya itself.', tag: 'Geographic factors for incidence' },
    { q: 'A demographic impact of malaria in affected areas of Kenya can include:', options: ['No effect on population structure whatsoever', 'Increased child mortality in severely affected areas', 'A guaranteed increase in life expectancy', 'A reduction in the need for healthcare services'], correct: 1, explain: 'Malaria disproportionately affects young children, and in severely affected areas can contribute to increased child mortality, a significant demographic impact.', misconception: 'The demographic impact of malaria is sometimes underestimated; in high-incidence areas it can be a leading cause of child mortality, significantly shaping local population structure.', tag: 'Demographic impacts' },
    { q: 'A socio-economic impact of malaria in Kenya can include:', options: ['Reduced worker productivity due to illness, and increased household healthcare costs', 'A guaranteed increase in national income', 'No effect on the economy at any scale', 'Complete elimination of the need for healthcare spending'], correct: 0, explain: 'Malaria can reduce worker productivity due to illness and recovery time, and increase household healthcare costs, creating genuine socio-economic impacts at both individual and community levels.', misconception: 'Malaria\u2019s impact is sometimes seen purely as a health issue, when it also has significant, measurable socio-economic consequences through lost productivity and healthcare costs.', tag: 'Socio-economic impacts' },
    { q: 'At the national scale, malaria can impact Kenya\u2019s development by:', options: ['Having no measurable effect on national development', 'Placing a burden on the national healthcare system and reducing overall economic productivity', 'Guaranteeing increased foreign investment', 'Eliminating the need for any government health spending'], correct: 1, explain: 'At a national scale, the cumulative burden of malaria on the healthcare system and its effect on workforce productivity can act as a genuine drag on Kenya\u2019s broader economic development.', misconception: 'National-scale impacts of disease are sometimes overlooked in favour of individual/local impacts; the cumulative national economic burden of a widespread disease like malaria is a significant, separate consideration.', tag: 'National and local impacts' },
    { q: 'At the local scale, malaria can impact specific communities in Kenya by:', options: ['Straining local health clinics and reducing school attendance due to illness', 'Having no effect on local schools or clinics', 'Guaranteeing improved local infrastructure', 'Only affecting communities located far from any water source'], correct: 0, explain: 'At the local scale, malaria outbreaks can strain the capacity of local health clinics and reduce school attendance as children fall ill, directly affecting community wellbeing and development.', misconception: 'It is useful to distinguish local-scale impacts (specific clinics, schools, households) from national-scale impacts (overall healthcare system, national economy) when analysing disease impact at different geographic scales.', tag: 'National and local impacts' },
    { q: 'Insecticide-treated bed nets are an intervention strategy used to combat malaria in Kenya, working by:', options: ['Eliminating all mosquitoes in a region instantly', 'Providing a physical and chemical barrier that reduces mosquito bites during sleep, when transmission risk is highest', 'Having no measurable effect on malaria transmission', 'Only protecting infrastructure, not people'], correct: 1, explain: 'Insecticide-treated bed nets provide both a physical barrier and a chemical deterrent against mosquitoes, significantly reducing the risk of bites (and therefore transmission) during sleep, when Anopheles mosquitoes are typically most active.', misconception: 'Bed nets are sometimes assumed to work purely as a physical barrier; the insecticide treatment adds an additional chemical deterrent effect that significantly increases their overall effectiveness.', tag: 'Intervention strategies' },
    { q: 'When evaluating intervention strategies to combat malaria in Kenya, geographers would consider factors such as:', options: ['Only the strategy\u2019s cost, with no attention to actual health outcomes', 'The strategy\u2019s measurable effect on malaria incidence, its cost, and its accessibility to affected communities', 'Whether the strategy received international media coverage', 'Whether the strategy has ever been used anywhere else in the world'], correct: 1, explain: 'A genuine evaluation of malaria intervention strategies considers their measurable effect on reducing malaria incidence, their cost-effectiveness, and how accessible they are to the communities most affected, rather than judging by cost or publicity alone.', misconception: 'Evaluation is sometimes reduced to a single dimension (like cost); a strong geographical evaluation weighs multiple factors together, including genuine health outcomes and accessibility.', tag: 'Intervention strategies' }
  ]
};

window.SBL_LESSONS.FH10 = {
  id: 'FH10',
  topicNumber: 2,
  topicTitle: 'Food systems and spread of diseases',
  title: 'Cholera \u2014 a water-borne disease case study',
  href: '/geography/paper-1/option-f/t2-food-systems/l5-cholera-a-water',
  syllabusFocus: 'Geographic factors contributing to the incidence, diffusion and impacts (demographic and socio-economic) of water-borne diseases, using cholera in the Democratic Republic of the Congo as a detailed example.',
  starterButtons: [
    { label: 'Teach me this case study', request: 'Give me a full overview of this case study' },
    { label: 'What is a water-borne disease?', request: 'Explain what a water-borne disease is' },
    { label: 'Cholera diffusion', request: 'Describe the diffusion of cholera' },
    { label: 'Geographic factors for incidence', request: 'Explain the geographic factors contributing to cholera incidence' },
    { label: 'National and local impacts in the Congo', request: 'Analyse the national and local impacts of cholera in the Congo' },
    { label: 'Demographic and socio-economic impacts', request: 'Explain the demographic and socio-economic impacts of cholera' },
    { label: 'Intervention strategies', request: 'Evaluate the intervention strategies used to combat cholera' },
    { label: 'Comparing to malaria', request: 'Compare cholera as a water-borne disease to malaria as a vector-borne disease' }
  ],
  checklist: [
    'I can define a water-borne disease.',
    'I can describe the diffusion of cholera.',
    'I can explain geographic factors contributing to cholera incidence.',
    'I can analyse national and local impacts of cholera in the Congo.',
    'I can explain demographic and socio-economic impacts of cholera.',
    'I can evaluate intervention strategies used to combat cholera.',
    'I can compare cholera and malaria as contrasting disease types.'
  ],
  readinessQuestions: [
    'What is a water-borne disease, and how is cholera typically transmitted?',
    'Explain one geographic factor contributing to the incidence of cholera.',
    'Describe one national and one local impact of cholera in the Congo.',
    'Give one demographic or socio-economic impact of cholera.',
    'Evaluate one intervention strategy used to combat cholera.'
  ],
  quiz: [
    { q: 'A water-borne disease is best defined as:', options: ['A disease transmitted through contact with a living carrier organism such as an insect', 'A disease caused by consuming or contacting water contaminated with harmful pathogens', 'A disease spread only through the air', 'A disease that has no connection to sanitation or water quality'], correct: 1, explain: 'A water-borne disease is caused by consuming or contacting water that has been contaminated with harmful pathogens, such as bacteria, unlike vector-borne diseases which require a living carrier organism.', misconception: 'Water-borne and vector-borne diseases are sometimes confused; water-borne diseases like cholera are transmitted directly through contaminated water, not through a living carrier like a mosquito.', tag: 'What is a water-borne disease?' },
    { q: 'Cholera is caused by:', options: ['A virus spread through the air', 'A bacterium typically transmitted through water or food contaminated with faecal matter', 'A parasite carried by mosquitoes', 'Poor diet alone, with no infectious cause'], correct: 1, explain: 'Cholera is caused by the bacterium Vibrio cholerae, typically transmitted through water or food that has been contaminated with faecal matter containing the bacterium.', misconception: 'Cholera is sometimes vaguely assumed to be "caused by dirty water" without understanding the specific mechanism: contamination with the Vibrio cholerae bacterium, most commonly via faecal contamination of water or food sources.', tag: 'What is a water-borne disease?' },
    { q: 'A key geographic factor contributing to cholera incidence is:', options: ['Access to fully treated, safe drinking water', 'Inadequate sanitation infrastructure and lack of access to clean water sources', 'High altitude, cold climates', 'Low population density in remote rural areas only'], correct: 1, explain: 'Inadequate sanitation infrastructure and lack of access to clean, safe drinking water are the primary geographic factors contributing to cholera incidence, as they increase the risk of water contamination.', misconception: 'Cholera risk is sometimes assumed to be primarily a climate-related issue; the dominant driver is actually infrastructure \u2014 specifically sanitation and access to clean water \u2014 rather than physical climate factors.', tag: 'Geographic factors for incidence' },
    { q: 'Conflict or political instability can increase cholera incidence in a region such as parts of the Democratic Republic of the Congo because:', options: ['Conflict has no effect on water or sanitation infrastructure', 'Conflict can damage water and sanitation infrastructure and displace populations into overcrowded, under-resourced settings', 'Conflict always improves access to clean water', 'Political instability guarantees improved public health outcomes'], correct: 1, explain: 'Conflict and political instability can damage existing water and sanitation infrastructure, and force population displacement into overcrowded camps or settlements with inadequate facilities, significantly increasing cholera risk.', misconception: 'The link between conflict and disease outbreak is sometimes overlooked; damaged infrastructure and forced displacement created by conflict are major, well-documented drivers of increased disease incidence, including cholera.', tag: 'Geographic factors for incidence' },
    { q: 'A national-scale impact of cholera outbreaks in the Congo can include:', options: ['No effect on the national healthcare system', 'Significant strain on national healthcare resources and international reputation/aid relationships', 'A guaranteed improvement in national infrastructure', 'Complete elimination of the need for any healthcare funding'], correct: 1, explain: 'National-scale impacts of cholera outbreaks can include significant strain on already limited national healthcare resources, alongside effects on the country\u2019s international reputation and relationships with aid organisations.', misconception: 'National impacts are sometimes considered only in economic terms; the strain on healthcare capacity and international/diplomatic dimensions are equally significant at the national scale.', tag: 'National and local impacts in the Congo' },
    { q: 'A local-scale impact of a cholera outbreak on a specific community can include:', options: ['Overwhelmed local health facilities and disruption to daily community life and livelihoods', 'No noticeable local effect at all', 'A guaranteed improvement in local sanitation within days', 'Only affecting communities located far from any water source'], correct: 0, explain: 'At the local scale, a cholera outbreak can overwhelm local health facilities and significantly disrupt daily community life, including access to safe food and water and normal livelihood activities.', misconception: 'Local-scale disease impact is sometimes treated as simply a smaller version of national impact; specific local disruptions (like overwhelmed local clinics) are worth analysing as their own distinct consequence.', tag: 'National and local impacts in the Congo' },
    { q: 'A demographic impact of cholera outbreaks can include:', options: ['Increased mortality, particularly among young children and vulnerable populations with limited access to treatment', 'No effect on population structure whatsoever', 'A guaranteed increase in average life expectancy', 'Only affecting elderly populations, never children'], correct: 0, explain: 'Cholera outbreaks can cause increased mortality, particularly among young children and other vulnerable groups with limited access to rapid rehydration treatment, which is critical for survival.', misconception: 'It is sometimes assumed disease impacts are evenly spread across all age groups; young children and other vulnerable groups are often disproportionately affected by cholera mortality.', tag: 'Demographic and socio-economic impacts' },
    { q: 'A socio-economic impact of cholera outbreaks can include:', options: ['Disruption to local markets, trade and daily economic activity due to illness and fear of contamination', 'A guaranteed boost to local economic activity', 'No effect on trade or markets', 'Complete elimination of the need for economic recovery efforts'], correct: 0, explain: 'Cholera outbreaks can disrupt local markets and trade, both through illness reducing economic participation and through fear of contamination affecting the sale of food and water in affected areas.', misconception: 'The socio-economic impact of disease outbreaks is sometimes underestimated when attention focuses only on health statistics; disruption to trade, markets and daily economic life is a significant, connected consequence.', tag: 'Demographic and socio-economic impacts' },
    { q: 'A key intervention strategy to combat cholera involves:', options: ['Improving access to clean water and sanitation infrastructure', 'Culling livestock', 'Insecticide-treated bed nets', 'Altitude-based population relocation'], correct: 0, explain: 'Since cholera is fundamentally linked to contaminated water and inadequate sanitation, improving access to clean water and proper sanitation infrastructure is a key, foundational intervention strategy.', misconception: 'Intervention strategies for cholera are sometimes confused with those used for vector-borne diseases (like bed nets for malaria); cholera control specifically requires addressing water and sanitation infrastructure.', tag: 'Intervention strategies' },
    { q: 'Comparing cholera and malaria as case studies illustrates that geographic factors influencing disease incidence:', options: ['Are identical for every disease, regardless of type', 'Differ significantly depending on how a disease is transmitted, requiring different, tailored intervention strategies', 'Have no real influence on disease incidence at all', 'Only apply to vector-borne diseases, never water-borne diseases'], correct: 1, explain: 'Comparing cholera (water-borne, linked to sanitation/water infrastructure) and malaria (vector-borne, linked to climate/mosquito breeding conditions) shows that the specific geographic factors influencing incidence differ significantly by disease type, requiring correspondingly different, tailored intervention strategies.', misconception: 'It is tempting to assume a single, universal set of factors explains all disease incidence; comparing these two contrasting case studies shows why understanding a disease\u2019s specific transmission mechanism is essential to identifying the right geographic factors and interventions.', tag: 'Comparing to malaria' }
  ]
};

window.SBL_LESSONS.FH11 = {
  "id": "FH11",
  "topicNumber": 3,
  "topicTitle": "Stakeholders in food and health",
  "title": "The role of international organisations in combatting food insecurity and disease",
  "href": "/geography/paper-1/option-f/t3-stakeholders-in/l1-the-role-of",
  "syllabusFocus": "The role of international organisations (such as the World Food Programme, the Food and Agriculture Organization of the United Nations, and the World Health Organization), governments and NGOs in combatting food insecurity and disease.",
  "starterButtons": [
    {
      "label": "Teach me this lesson",
      "request": "Give me a full overview of this lesson"
    },
    {
      "label": "What does the WFP do?",
      "request": "Explain the role of the World Food Programme"
    },
    {
      "label": "What does the FAO do?",
      "request": "Explain the role of the Food and Agriculture Organization of the United Nations"
    },
    {
      "label": "What does the WHO do?",
      "request": "Explain the role of the World Health Organization"
    },
    {
      "label": "Government aid and USAID",
      "request": "Explain the role of national government aid agencies, using USAID as an example"
    },
    {
      "label": "Oxfam and Save the Children",
      "request": "Explain the role of NGOs such as Oxfam and Save the Children"
    },
    {
      "label": "Evaluating these organisations",
      "request": "Help me evaluate the effectiveness and limitations of these organisations"
    }
  ],
  "checklist": [
    "I can describe the role of the World Food Programme (WFP).",
    "I can describe the role of the Food and Agriculture Organization (FAO).",
    "I can describe the role of the World Health Organization (WHO).",
    "I can describe the role of a national government aid agency, using USAID as an example.",
    "I can describe the role of NGOs such as Oxfam and Save the Children.",
    "I can link each organisation's work to relevant Sustainable Development Goals (SDGs).",
    "I can evaluate the effectiveness and limitations of these organisations."
  ],
  "readinessQuestions": [
    "What is the difference between the role of the WFP and the role of the FAO?",
    "Give one example of a WHO-led response to a disease outbreak or health issue.",
    "What happened to USAID in 2025, and why does this matter for global food security?",
    "Give one limitation faced by an NGO such as Oxfam or Save the Children.",
    "Evaluate the effectiveness of one international organisation studied in this lesson."
  ],
  "quiz": [
    {
      "q": "The primary role of the World Food Programme (WFP) is best described as:",
      "options": [
        "Setting binding international health regulations for all countries",
        "The United Nations' frontline agency for delivering food assistance, including emergency relief, school feeding and nutrition support",
        "A private company that trades food commodities on international markets",
        "Providing only agricultural technical advice, with no direct food distribution"
      ],
      "correct": 1,
      "explain": "The WFP is the food-assistance branch of the United Nations, delivering in-kind food, cash and voucher assistance, school feeding programmes and targeted nutrition support, particularly in emergencies such as conflict or famine.",
      "misconception": "The WFP is sometimes confused with the FAO; the WFP focuses on delivering food and nutrition assistance directly, whereas the FAO focuses on technical and advisory support to improve food systems.",
      "tag": "What does the WFP do?"
    },
    {
      "q": "Which of the following best distinguishes the FAO from the WFP?",
      "options": [
        "The FAO focuses mainly on technical and advisory support to improve agricultural productivity and food security data, rather than direct emergency food distribution",
        "The FAO only operates in high-income countries",
        "The FAO has no connection to agriculture at all",
        "The FAO and WFP have identical roles with no meaningful difference"
      ],
      "correct": 0,
      "explain": "The FAO (Food and Agriculture Organization of the United Nations) focuses on technical and advisory work — improving agricultural productivity, sustainable farming practices, and collecting global food security data — rather than distributing emergency food aid directly, which is the WFP's role.",
      "misconception": "It is easy to assume all UN food-related agencies do the same thing; the FAO and WFP are deliberately distinct, with FAO working ‘upstream’ on production and data, and WFP working ‘downstream’ on direct distribution.",
      "tag": "What does the FAO do?"
    },
    {
      "q": "A key role of the World Health Organization (WHO) in relation to food and health is to:",
      "options": [
        "Coordinate international responses to disease outbreaks and set global health standards",
        "Distribute emergency food parcels directly to affected households",
        "Manufacture vaccines for private sale",
        "Set global food prices"
      ],
      "correct": 0,
      "explain": "The WHO coordinates international responses to disease outbreaks (such as cholera or measles outbreaks), sets global health standards and guidelines, and supports countries in strengthening their health systems.",
      "misconception": "The WHO's role is sometimes confused with direct aid delivery; its core function is coordination, standard-setting and technical guidance for health systems and outbreak response, rather than distributing food or supplies itself.",
      "tag": "What does the WHO do?"
    },
    {
      "q": "Historically, USAID's Feed the Future and Food for Peace programmes worked to:",
      "options": [
        "Tackle global hunger and food insecurity through agricultural development and emergency food assistance funded by the US government",
        "Restrict food trade between countries",
        "Fund only infrastructure projects unrelated to food or health",
        "Operate exclusively within the United States"
      ],
      "correct": 0,
      "explain": "USAID historically ran programmes such as Feed the Future (supporting agricultural development and food security in partner countries) and Food for Peace (emergency and development food assistance), funded by the US government as part of its foreign aid.",
      "misconception": "It is easy to assume government aid agencies work identically to NGOs like Oxfam; USAID's programmes were funded and directed by a single national government, which is a significant difference discussed further in this lesson.",
      "tag": "Government aid and USAID"
    },
    {
      "q": "As of 2025, USAID's status changed significantly because:",
      "options": [
        "It merged with the FAO to form a new UN agency",
        "It was dissolved as an independent US government agency, with its remaining functions absorbed into the State Department, leading to major cuts and disruption to global humanitarian and food security programmes",
        "It doubled its funding for global food security programmes",
        "It relocated its headquarters but continued operating exactly as before"
      ],
      "correct": 1,
      "explain": "In 2025, USAID ceased operating as an independent agency after nearly 60 years, with its remaining functions absorbed into the US State Department. This led to major cuts to programmes such as Feed the Future and Food for Peace, with significant, well-documented disruption to global humanitarian and health aid.",
      "misconception": "This is a genuinely recent and significant change; it is worth remembering as a real, current example of how a single government's policy decisions can rapidly reshape the global humanitarian landscape — directly illustrating the ‘governance’ factor studied later in this topic.",
      "tag": "Government aid and USAID"
    },
    {
      "q": "Oxfam's role in combatting food insecurity typically includes:",
      "options": [
        "Emergency relief such as water, sanitation and hygiene (WASH) programmes, alongside campaigning on poverty and inequality",
        "Setting international trade tariffs",
        "Manufacturing agricultural machinery",
        "Only operating in high-income countries"
      ],
      "correct": 0,
      "explain": "Oxfam is an international confederation of NGOs that provides emergency relief (such as clean water, sanitation and hygiene programmes) and campaigns on the underlying causes of poverty and inequality that contribute to food insecurity.",
      "misconception": "NGOs like Oxfam are sometimes seen purely as aid deliverers; much of their work also involves advocacy and campaigning aimed at addressing the root causes of poverty and inequality, not just responding to immediate need.",
      "tag": "Oxfam and Save the Children"
    },
    {
      "q": "Save the Children's role in relation to food and health particularly focuses on:",
      "options": [
        "Adult employment programmes only",
        "Child-focused nutrition, health and education support, including emergency response in crises such as Yemen",
        "Setting global health regulations",
        "Distributing food only to the elderly"
      ],
      "correct": 1,
      "explain": "Save the Children focuses specifically on children's welfare, including nutrition programmes for malnourished children, health and education support, and emergency response in crises such as the ongoing situation in Yemen.",
      "misconception": "It is useful to distinguish NGOs by their specific focus; Save the Children's distinguishing feature compared to broader organisations like Oxfam is its specific focus on children's rights and welfare.",
      "tag": "Oxfam and Save the Children"
    },
    {
      "q": "A common limitation shared by many of the organisations studied in this lesson is that they:",
      "options": [
        "Have unlimited funding with no constraints",
        "Depend on funding from donor governments or the public, meaning their work can be disrupted by changing political priorities or funding shortfalls",
        "Have no legal or political constraints anywhere in the world",
        "Never face any access difficulties in conflict-affected areas"
      ],
      "correct": 1,
      "explain": "International organisations and NGOs typically depend on funding from donor governments, international bodies or public donations. This means their work can be significantly disrupted by changing political priorities (as seen with USAID) or funding shortfalls, and access can be restricted in conflict zones.",
      "misconception": "It is tempting to see large, well-known organisations as having limitless resources and reach; in reality, funding dependency and access constraints are shared limitations across almost all of them.",
      "tag": "Evaluating these organisations"
    },
    {
      "q": "Which Sustainable Development Goal (SDG) is most directly linked to the work of the WFP and FAO?",
      "options": [
        "SDG 2: Zero Hunger",
        "SDG 13: Climate Action, exclusively",
        "SDG 5: Gender Equality, exclusively",
        "None of the SDGs relate to food organisations"
      ],
      "correct": 0,
      "explain": "SDG 2 (Zero Hunger) is the most directly linked goal to the work of the WFP and FAO, though their work also connects to other goals such as SDG 1 (No Poverty) and SDG 3 (Good Health and Well-being).",
      "misconception": "SDGs often interconnect, and it is worth recognising that food security work links to multiple goals simultaneously, even where one goal (like SDG 2) is the clearest primary link.",
      "tag": "Evaluating these organisations"
    },
    {
      "q": "When evaluating the effectiveness of an international organisation, geographers should consider:",
      "options": [
        "Only how well-known the organisation is",
        "Its measurable impact on food security or health outcomes, alongside its funding stability, access constraints and any political limitations on its work",
        "Only the size of its annual budget",
        "Whether it has an attractive logo"
      ],
      "correct": 1,
      "explain": "A genuine evaluation of an organisation's effectiveness requires looking at its measurable impact on food security or health outcomes, alongside practical constraints such as funding stability, access to affected populations, and political limitations — as illustrated by the USAID case.",
      "misconception": "Effectiveness is sometimes judged only by an organisation's stated mission or public profile; a rigorous geographical evaluation instead weighs measurable outcomes against the real-world constraints the organisation operates under.",
      "tag": "Evaluating these organisations"
    }
  ]
};

window.SBL_LESSONS.FH12 = {
  "id": "FH12",
  "topicNumber": 3,
  "topicTitle": "Stakeholders in food and health",
  "title": "The influence of TNCs in shaping food consumption",
  "href": "/geography/paper-1/option-f/t3-stakeholders-in/l2-the-influence",
  "syllabusFocus": "The influence of TNCs (agribusiness and the media) in shaping food consumption habits.",
  "starterButtons": [
    {
      "label": "Teach me this lesson",
      "request": "Give me a full overview of this lesson"
    },
    {
      "label": "What is agribusiness?",
      "request": "Define agribusiness and explain how it differs from traditional farming"
    },
    {
      "label": "Vertical vs horizontal integration",
      "request": "Explain the difference between vertical integration and horizontal integration"
    },
    {
      "label": "Why TNCs operate at lower cost",
      "request": "Explain why TNCs in the food industry can often operate at lower costs than smaller producers"
    },
    {
      "label": "How TNCs influence consumption",
      "request": "Explain how TNCs influence food consumption habits, including through the media"
    },
    {
      "label": "What is food sovereignty?",
      "request": "Define food sovereignty and explain how TNCs can threaten it"
    },
    {
      "label": "Outcomes for consumers",
      "request": "Explain the positive and negative outcomes of TNC dominance for consumers"
    },
    {
      "label": "Outcomes for local producers",
      "request": "Explain the outcomes of TNC dominance for local producers"
    }
  ],
  "checklist": [
    "I can define agribusiness.",
    "I can define vertical integration.",
    "I can define horizontal integration.",
    "I can explain why TNCs can often operate at lower cost than smaller producers.",
    "I can explain how TNCs use the media to influence food consumption habits.",
    "I can define food sovereignty and explain how TNCs can threaten it.",
    "I can evaluate positive and negative outcomes of TNC dominance for consumers and for local producers."
  ],
  "readinessQuestions": [
    "Define agribusiness, vertical integration and horizontal integration.",
    "Explain one reason why large food TNCs can often produce and sell food more cheaply than smaller producers.",
    "Explain two ways TNCs use the media to influence food consumption habits.",
    "What is food sovereignty, and how can TNC dominance threaten it?",
    "Evaluate one positive and one negative outcome of TNC dominance in the food industry, for either consumers or local producers."
  ],
  "quiz": [
    {
      "q": "Agribusiness is best defined as:",
      "options": [
        "Small-scale subsistence farming carried out by a single family",
        "The large-scale, industrialised business of food production, encompassing farming, processing, distribution and marketing, often run by transnational corporations",
        "A government department responsible for agricultural policy",
        "A term with no real meaning in geography"
      ],
      "correct": 1,
      "explain": "Agribusiness refers to the large-scale, industrialised business of food production — spanning farming, processing, distribution and marketing — and is typically associated with transnational corporations operating at a global scale.",
      "misconception": "Agribusiness is sometimes used loosely to mean ‘any farming’, but it specifically refers to industrialised, corporate-scale food production rather than small-scale or subsistence farming.",
      "tag": "What is agribusiness?"
    },
    {
      "q": "Vertical integration in the food industry refers to a company:",
      "options": [
        "Merging with a direct competitor selling the same product",
        "Owning or controlling multiple stages of the supply chain, such as growing, processing, and retailing its own products",
        "Only ever operating in a single country",
        "Reducing the number of products it sells"
      ],
      "correct": 1,
      "explain": "Vertical integration occurs when a company owns or controls multiple stages of the supply chain — for example, growing crops, processing them, and then retailing the final product — giving it greater control over cost and quality at every stage.",
      "misconception": "Vertical and horizontal integration are commonly confused; vertical integration is about controlling different stages of the SAME supply chain, while horizontal integration is about controlling more of the SAME stage.",
      "tag": "Vertical vs horizontal integration"
    },
    {
      "q": "Horizontal integration in the food industry refers to a company:",
      "options": [
        "Controlling multiple different stages of the supply chain",
        "Merging with or acquiring competitors operating at the same stage of production, increasing its market share",
        "Only selling products directly to farmers",
        "Reducing its overall size and market share"
      ],
      "correct": 1,
      "explain": "Horizontal integration occurs when a company merges with or acquires competitors operating at the same stage of the supply chain (for example, one food processing company buying another), increasing its market share and reducing competition.",
      "misconception": "It can help to remember: vertical integration moves UP or DOWN the supply chain (different stages); horizontal integration moves ACROSS the same stage (same type of business, bigger market share).",
      "tag": "Vertical vs horizontal integration"
    },
    {
      "q": "A key reason TNCs in the food industry can often operate at lower cost than smaller producers is:",
      "options": [
        "They are legally required to charge lower prices",
        "Economies of scale — large-scale production, bulk purchasing and integrated supply chains reduce the cost per unit produced",
        "They receive no scrutiny from any government",
        "Smaller producers always choose to charge higher prices deliberately"
      ],
      "correct": 1,
      "explain": "Economies of scale allow large TNCs to reduce their cost per unit through bulk purchasing of inputs, large-scale production, and integrated (often vertically integrated) supply chains — cost advantages that smaller, independent producers usually cannot match.",
      "misconception": "Lower TNC prices are sometimes assumed to reflect unfair practices alone; economies of scale are a genuine, structural cost advantage that comes from scale itself, separate from any pricing strategy.",
      "tag": "Why TNCs operate at lower cost"
    },
    {
      "q": "TNCs commonly use the media to influence food consumption habits by:",
      "options": [
        "Advertising and branding that shapes consumer preferences and normalises certain diets or products",
        "Refusing to advertise their products at all",
        "Only communicating with governments, never consumers",
        "Publishing scientific research with no marketing purpose"
      ],
      "correct": 0,
      "explain": "TNCs use advertising, branding and media presence (including social media and sponsorship) to shape consumer preferences, build brand loyalty, and normalise the consumption of particular products or diets, often on a global scale.",
      "misconception": "The influence of advertising is sometimes underestimated; sustained, global-scale media presence by TNCs can meaningfully shift entire populations' food consumption habits over time, contributing to processes like the nutrition transition studied earlier in this unit.",
      "tag": "How TNCs influence consumption"
    },
    {
      "q": "Food sovereignty is best defined as:",
      "options": [
        "A country's total food import value",
        "The right of people and communities to define their own food and agriculture systems, including what is grown and how it is distributed, rather than this being controlled by external forces",
        "A measure of a country's total food production",
        "A synonym for food security with no distinct meaning"
      ],
      "correct": 1,
      "explain": "Food sovereignty refers to the right of people and communities to define and control their own food and agriculture systems — including what is grown, how, and for whom — rather than these decisions being made by external corporations or forces.",
      "misconception": "Food sovereignty is sometimes confused with food security (having enough food); food sovereignty is specifically about who has control and decision-making power over food systems, which is a distinct concept.",
      "tag": "What is food sovereignty?"
    },
    {
      "q": "TNC dominance in the food industry can threaten food sovereignty by:",
      "options": [
        "Increasing local communities' control over what food is grown and how",
        "Encouraging dependency on TNC-supplied seeds, inputs or imported foods, reducing local communities' control over their own food systems",
        "Having no effect on local food systems whatsoever",
        "Guaranteeing that local diets remain unchanged"
      ],
      "correct": 1,
      "explain": "When TNCs dominate a food system, local communities can become dependent on TNC-supplied seeds, fertilisers or imported foods, reducing their own control over what is grown, how, and for whose benefit — undermining food sovereignty.",
      "misconception": "It is easy to see TNC involvement purely as adding choice; when it creates dependency and shifts decision-making away from local communities, it can specifically undermine food sovereignty rather than simply adding options.",
      "tag": "What is food sovereignty?"
    },
    {
      "q": "A positive outcome for consumers from TNC dominance in the food industry can include:",
      "options": [
        "Guaranteed elimination of all unhealthy food products",
        "Greater variety, convenience and often lower prices due to economies of scale",
        "Complete elimination of consumer choice",
        "No effect on consumers whatsoever"
      ],
      "correct": 1,
      "explain": "TNC dominance can bring consumers genuine benefits, including greater product variety, convenience, and often lower prices, resulting from the economies of scale and efficient supply chains TNCs can achieve.",
      "misconception": "TNC influence is sometimes framed as entirely negative; a balanced evaluation recognises genuine consumer benefits alongside the negative outcomes covered elsewhere in this lesson.",
      "tag": "Outcomes for consumers"
    },
    {
      "q": "A negative outcome for consumers from TNC dominance in the food industry can include:",
      "options": [
        "Increased availability of processed, energy-dense foods, contributing to the nutrition transition and rising rates of diseases of affluence",
        "A guaranteed increase in traditional diets",
        "Complete elimination of food advertising",
        "No connection to consumer health at all"
      ],
      "correct": 0,
      "explain": "TNC-driven marketing of processed, energy-dense foods has been linked to the nutrition transition studied earlier in this unit, contributing to rising rates of diseases of affluence such as obesity and type 2 diabetes in many populations.",
      "misconception": "This links directly back to earlier lessons in this course; TNC influence on diets is a key driver behind the nutrition transition and epidemiological transition, rather than an isolated, unconnected topic.",
      "tag": "Outcomes for consumers"
    },
    {
      "q": "For local producers, TNC dominance in the food industry can result in:",
      "options": [
        "A uniformly positive outcome with no downsides for any producer",
        "Both potential benefits (such as access to larger markets through contracts) and potential harms (such as being undercut on price or losing bargaining power to larger competitors)",
        "Guaranteed increased profits for every local producer",
        "No effect on local producers whatsoever"
      ],
      "correct": 1,
      "explain": "TNC dominance creates a mixed picture for local producers: some gain access to larger markets through supply contracts with TNCs, while others are undercut on price or lose bargaining power and market access to larger, more efficient competitors.",
      "misconception": "Outcomes for local producers are sometimes assumed to be uniformly negative; in practice, the impact varies depending on whether producers are integrated into TNC supply chains as partners or forced to compete directly against them.",
      "tag": "Outcomes for local producers"
    }
  ]
};

window.SBL_LESSONS.FH13 = {
  "id": "FH13",
  "topicNumber": 3,
  "topicTitle": "Stakeholders in food and health",
  "title": "Gender roles related to food and health",
  "href": "/geography/paper-1/option-f/t3-stakeholders-in/l3-gender-roles",
  "syllabusFocus": "Gender roles related to food and health, including food production/acquisition and disparities in health.",
  "starterButtons": [
    {
      "label": "Teach me this lesson",
      "request": "Give me a full overview of this lesson"
    },
    {
      "label": "Gender disparities in food production",
      "request": "Explain gender disparities in access to resources for food production"
    },
    {
      "label": "The gender gap in agriculture",
      "request": "Explain how closing the gender gap in agriculture could reduce global hunger"
    },
    {
      "label": "Gender and household food security",
      "request": "Explain the link between women's role in the household and food security"
    },
    {
      "label": "Gender disparities in health access",
      "request": "Explain gender disparities in access to healthcare"
    },
    {
      "label": "Masculinity and men's health risks",
      "request": "Explain how social norms around masculinity can affect men's health"
    },
    {
      "label": "Strategies to close the gender gap",
      "request": "Evaluate strategies aimed at reducing gender disparities in food and health"
    }
  ],
  "checklist": [
    "I can describe gender disparities in access to agricultural resources.",
    "I can explain how closing the gender gap in agriculture could reduce global hunger.",
    "I can explain the link between women's control of household income and children's health.",
    "I can describe barriers preventing women from accessing healthcare in some LICs.",
    "I can explain how social norms around masculinity can increase health risks for men.",
    "I can evaluate strategies aimed at reducing gender disparities in food production and health."
  ],
  "readinessQuestions": [
    "What proportion of the world's undernourished people are estimated to be women or girls?",
    "Explain how closing the gender gap in access to agricultural resources could reduce global hunger.",
    "Explain one barrier that can prevent women in LICs from accessing healthcare.",
    "Explain one way that social norms around masculinity can negatively affect men's health.",
    "Evaluate one strategy aimed at reducing gender disparities in food production or health."
  ],
  "quiz": [
    {
      "q": "According to UN estimates, approximately what proportion of the world's undernourished people are women or girls?",
      "options": [
        "10%",
        "35%",
        "60%",
        "90%"
      ],
      "correct": 2,
      "explain": "UN estimates suggest that around 60% of the undernourished globally are women or girls, reflecting persistent gender inequalities that constrain women's access to food, resources and economic opportunity.",
      "misconception": "It is sometimes assumed hunger affects men and women equally; global data shows a clear gender imbalance, with women and girls disproportionately affected.",
      "tag": "Gender disparities in food production"
    },
    {
      "q": "Gender inequities identified as agricultural gender gaps include:",
      "options": [
        "Guaranteed equal access to land and credit for men and women in all countries",
        "Unequal access to rural resources and services, undervaluation of women's roles, gender-neutral policies that ignore real disparities, and a lack of gender-specific data",
        "A complete absence of any gender-based differences in agriculture",
        "Women having greater legal land rights than men in most countries"
      ],
      "correct": 1,
      "explain": "Documented agricultural gender gaps include unequal access to land, credit, labour markets and services; the undervaluation of women's roles and contributions; policies that claim to be gender-neutral but fail to address real disparities; and a lack of gender-specific data to identify and address these gaps.",
      "misconception": "‘Gender-neutral’ policy is sometimes assumed to be automatically fair; if underlying disparities already exist, a gender-neutral approach can fail to address them and even reinforce existing inequality.",
      "tag": "Gender disparities in food production"
    },
    {
      "q": "According to FAO research, closing the gender gap in access to productive agricultural resources (such as land, credit, machinery or chemicals) could:",
      "options": [
        "Have no measurable effect on global hunger",
        "Eliminate yield gaps of 20-30% between men and women, increase domestic agricultural output by 2.5-4%, and result in around 100 million fewer people living in hunger",
        "Reduce global agricultural output significantly",
        "Only benefit women, with no wider economic effect"
      ],
      "correct": 1,
      "explain": "FAO research estimates that closing the gender gap in access to productive resources could eliminate yield gaps of 20-30% between men and women farmers, increase domestic agricultural output by 2.5-4%, and result in approximately 100 million fewer people living in hunger worldwide.",
      "misconception": "Gender equality in agriculture is sometimes framed as a purely social justice issue disconnected from food security outcomes; this data shows it also has a very large, measurable effect on global hunger.",
      "tag": "The gender gap in agriculture"
    },
    {
      "q": "Research on household food security has found that when women control the household budget:",
      "options": [
        "Children's chances of survival decrease significantly",
        "Children's chances of survival rise by around 20%, as women are more likely to spend income on food and children's needs",
        "There is no measurable effect on children",
        "Household food spending decreases substantially"
      ],
      "correct": 1,
      "explain": "FAO research suggests that children's chances of survival rise by about 20% when women control the household budget, since women are statistically more likely than men to spend income received on food and children's needs.",
      "misconception": "Household decision-making is sometimes assumed to have little bearing on nutrition outcomes; research shows who controls spending within a household can have a very direct, measurable effect on child survival.",
      "tag": "Gender and household food security"
    },
    {
      "q": "The World Food Programme estimates that the proportion of time spent preparing household food that is done by women globally is approximately:",
      "options": [
        "10-15%",
        "85-90%",
        "50%, split equally with men",
        "This has never been measured"
      ],
      "correct": 1,
      "explain": "The WFP estimates that 85-90% of the time spent preparing household food is done by women globally, reflecting the significant, often unrecognised role women play in household food security.",
      "misconception": "Domestic food preparation is sometimes treated as a minor detail; given the scale of time women dedicate to it, it is directly relevant to understanding household-level food and nutrition outcomes.",
      "tag": "Gender and household food security"
    },
    {
      "q": "A specific barrier that can prevent women in some LICs from accessing healthcare is:",
      "options": [
        "An abundance of female doctors and paramedics in every country",
        "Low levels of female education meaning most paramedics and doctors are male, which can be culturally inappropriate for treating women's gynaecological health problems, especially in rural areas",
        "Free and unrestricted healthcare access for all women",
        "Healthcare systems designed specifically around women's needs in every country"
      ],
      "correct": 1,
      "explain": "In many LICs, low levels of female education have historically meant that most paramedics and doctors are male. In many traditional societies, it is considered inappropriate for an unrelated man to examine a woman, which is a particular problem for the gynaecological health issues many women experience, especially in rural areas.",
      "misconception": "Healthcare access barriers are sometimes assumed to be purely about distance or cost; cultural and social barriers, such as the gender of available medical staff, can be just as significant.",
      "tag": "Gender disparities in health access"
    },
    {
      "q": "Globally, women in the workforce are reported to earn approximately how much less than men, with a large proportion working in the informal economy?",
      "options": [
        "23% less, with 75% of women in developing regions working in the informal economy",
        "They earn more than men on average globally",
        "Exactly the same as men in every country",
        "2% less, a negligible difference"
      ],
      "correct": 0,
      "explain": "Globally, women earn approximately 23% less than men, and 75% of women in developing regions work in the informal economy, where they are less likely to have employment contracts, legal rights or healthcare, and are often not paid enough to escape poverty — a major barrier to good health.",
      "misconception": "The gender pay gap and informal employment are sometimes seen as separate issues from health; poverty resulting from both is one of the biggest barriers to accessing healthy food and adequate healthcare.",
      "tag": "Gender disparities in health access"
    },
    {
      "q": "Social norms around masculinity can negatively affect men's health because:",
      "options": [
        "Men are biologically unable to become unwell",
        "Taking action on health is sometimes viewed as ‘unmanly’ in some communities, reducing men's willingness to seek health services, and masculinity can be expressed through risky behaviours such as violence or unsafe practices",
        "Masculinity has no connection to health-seeking behaviour anywhere in the world",
        "Men are statistically less likely to die from any cause than women"
      ],
      "correct": 1,
      "explain": "In many communities, seeking healthcare is viewed as ‘unmanly’, reducing men's willingness to access health services. Masculinity can also be expressed through risky behaviours, such as violence or unsafe sexual practices, that increase men's exposure to health risks including tuberculosis, road traffic deaths, and HIV/AIDS.",
      "misconception": "Gender disparities in health are sometimes assumed to disadvantage only women; men can also face specific, gendered health risks linked to social expectations of masculinity and reduced health-seeking behaviour.",
      "tag": "Masculinity and men's health risks"
    },
    {
      "q": "A strategy identified for improving gender disparities in food production and health is to:",
      "options": [
        "Remove all family planning and sexual health programmes",
        "Tackle discriminatory laws around land ownership, boost gender equality in agriculture and the labour market, update education and employment policies to be more gender-sensitive, and expand access to reproductive health services",
        "Reduce funding for all women's education programmes",
        "Increase gender-based restrictions on women's employment"
      ],
      "correct": 1,
      "explain": "Recommended strategies include tackling discriminatory land ownership laws, initiating programmes to boost gender equality in agriculture and the labour market, updating education and employment policies to be more gender-sensitive, developing food security strategies that improve women's access to childcare and credit, and expanding reproductive health services for the poorest women.",
      "misconception": "Effective strategies typically need to address multiple interlinked barriers (legal, economic, educational and health-related) together, rather than any single intervention in isolation.",
      "tag": "Strategies to close the gender gap"
    },
    {
      "q": "Family planning programmes can help reduce gender disparities in health because they:",
      "options": [
        "Have no effect on maternal health outcomes",
        "Reduce the number of unplanned pregnancies and maternal deaths (including deaths associated with unsafe abortions), and can empower women with greater control over their own lives",
        "Are only relevant to men's health",
        "Increase maternal mortality rates"
      ],
      "correct": 1,
      "explain": "Family planning programmes reduce the number of unplanned pregnancies and decrease maternal deaths, including those associated with unsafe abortions in cases of unwanted pregnancy. Family planning and sexual health counselling can also empower women, giving them greater control over their own lives, alongside similar education and counselling for men and boys.",
      "misconception": "Family planning is sometimes framed narrowly as being only about limiting births; it also has direct, measurable effects on reducing maternal mortality and on wider women's empowerment.",
      "tag": "Strategies to close the gender gap"
    }
  ]
};

window.SBL_LESSONS.FH14 = {
  "id": "FH14",
  "topicNumber": 3,
  "topicTitle": "Stakeholders in food and health",
  "title": "Factors affecting the severity of famine",
  "href": "/geography/paper-1/option-f/t3-stakeholders-in/l4-factors",
  "syllabusFocus": "Factors affecting the severity of famine, including governance, the power of the media and access to international aid.",
  "starterButtons": [
    {
      "label": "Teach me this lesson",
      "request": "Give me a full overview of this lesson"
    },
    {
      "label": "Food insecurity vs famine",
      "request": "Explain the difference between food insecurity and famine"
    },
    {
      "label": "Food Availability Deficit (FAD)",
      "request": "Explain what a Food Availability Deficit is, with examples"
    },
    {
      "label": "Food Entitlement Deficit (FED)",
      "request": "Explain what a Food Entitlement Deficit is, with examples"
    },
    {
      "label": "The role of governance",
      "request": "Explain how governance affects the severity of famine"
    },
    {
      "label": "The power of the media",
      "request": "Explain how the media affects the severity of famine"
    },
    {
      "label": "Access to international aid",
      "request": "Explain how access to international aid affects the severity of famine"
    },
    {
      "label": "The 2008 food price spike",
      "request": "Explain the causes and consequences of the 2008 global food price spike"
    }
  ],
  "checklist": [
    "I can explain the difference between food insecurity and famine.",
    "I can explain what a Food Availability Deficit (FAD) is, with an example.",
    "I can explain what a Food Entitlement Deficit (FED) is, with an example.",
    "I can explain how governance can affect the severity of famine.",
    "I can explain how the media can affect the severity of famine.",
    "I can explain how access to international aid can affect the severity of famine.",
    "I can use the 2008 global food price spike as an example of these factors interacting."
  ],
  "readinessQuestions": [
    "What is the difference between food insecurity and famine?",
    "Explain the difference between a Food Availability Deficit (FAD) and a Food Entitlement Deficit (FED), using one example of each.",
    "Explain how poor governance can worsen the severity of a famine.",
    "Explain how the media can affect the international response to a famine.",
    "Explain how the 2008 global food price spike illustrates the causes of food insecurity."
  ],
  "quiz": [
    {
      "q": "Famine is best distinguished from ongoing food insecurity as:",
      "options": [
        "Exactly the same thing, with no meaningful distinction",
        "An extreme, geographically specific event involving widespread acute malnutrition and mortality due to a severe lack of food access, rather than a chronic, ongoing condition",
        "A term only used to describe drought",
        "A condition that only ever affects wealthy countries"
      ],
      "correct": 1,
      "explain": "Famine refers to an extreme, geographically specific event involving widespread acute malnutrition and significant mortality due to a severe lack of food access, distinguishing it from the broader, more chronic condition of food insecurity.",
      "misconception": "Food insecurity and famine are sometimes used interchangeably; famine specifically describes an extreme, acute crisis, while food insecurity can describe a more chronic, lower-severity condition.",
      "tag": "Food insecurity vs famine"
    },
    {
      "q": "A Food Availability Deficit (FAD) refers to famine caused primarily by:",
      "options": [
        "A physical shortage of food itself, such as crop failure caused by drought, pests or land degradation",
        "People being unable to afford food that is otherwise available",
        "Government policy alone, with no physical cause",
        "A surplus of food with no distribution problems"
      ],
      "correct": 0,
      "explain": "A Food Availability Deficit (FAD) describes famine driven primarily by a physical shortage of food itself — for example, crop failure caused by drought, pest outbreaks, or land degradation reducing the amount of food that is physically available.",
      "misconception": "FAD and FED are commonly confused; FAD is about there simply not being enough food available (a physical cause), while FED is about food being available but people lacking the means to access it (an economic/political cause).",
      "tag": "Food Availability Deficit (FAD)"
    },
    {
      "q": "A Food Entitlement Deficit (FED) refers to famine caused primarily by:",
      "options": [
        "A total physical absence of food anywhere in the region",
        "People lacking the economic or political means (income, rights or access) to obtain food that is otherwise available, such as due to poverty or unequal distribution",
        "Excess food production with no other factors involved",
        "A term with no real application to famine"
      ],
      "correct": 1,
      "explain": "A Food Entitlement Deficit (FED) describes famine driven primarily by people lacking the economic or political means to access food that is otherwise available — for example, due to poverty, unemployment, unequal distribution, or being excluded from markets — rather than a physical absence of food.",
      "misconception": "It is a common exam error to assume famine always means ‘no food exists’; FED-driven famines show that food can be physically present in a country or region while many people still cannot access it.",
      "tag": "Food Entitlement Deficit (FED)"
    },
    {
      "q": "During the 2008 global food price spike, staple food prices increased dramatically; wheat prices rose by approximately:",
      "options": [
        "5%",
        "130%",
        "1000%",
        "They fell during this period"
      ],
      "correct": 1,
      "explain": "During the 2008 food price spike, wheat prices rose by around 130%, with sorghum rising by 87% and rice by 74%, contributing to riots in 36 countries and, in Haiti, the toppling of the government.",
      "misconception": "The scale of the 2008 price spike is easy to underestimate; increases of this size had severe, immediate political and social consequences in many countries simultaneously.",
      "tag": "The 2008 food price spike"
    },
    {
      "q": "The 2008 food price spike caused riots or civil unrest in a number of countries, including:",
      "options": [
        "Only wealthy, high-income countries",
        "Countries including Yemen, Somalia, Pakistan, Egypt, Indonesia and several others",
        "No countries at all",
        "Only countries in Europe"
      ],
      "correct": 1,
      "explain": "The 2008 food price spike caused riots or civil unrest in a number of countries, including Yemen, Somalia, Senegal, Pakistan, Mozambique, Indonesia, India, Egypt, Ivory Coast, Cameroon, Burkina Faso, the Philippines and Bangladesh — illustrating how a Food Entitlement Deficit can spark widespread instability.",
      "misconception": "It is worth noting Yemen's appearance on this list even in 2008, well before the conflict that began in 2014 — a useful piece of context for the Yemen case study covered later in this topic.",
      "tag": "The 2008 food price spike"
    },
    {
      "q": "Water stress is a significant physical factor affecting food availability because:",
      "options": [
        "Farming has no meaningful water requirements",
        "Farming accounts for around 70% of the world's freshwater use, and 2.8 billion people already live in areas of water stress, a figure predicted to rise significantly by 2030",
        "All countries have unlimited access to fresh water",
        "Water stress only affects countries with no agriculture"
      ],
      "correct": 1,
      "explain": "Farming accounts for around 70% of the world's use of fresh water extracted for human use. An estimated 2.8 billion people currently live in areas of water stress, a figure predicted to rise to 3.9 billion by 2030 as irrigation demand increases by 50-100% by 2025, directly threatening food availability.",
      "misconception": "Water stress is sometimes seen as a distant future problem; the scale of current water stress already directly threatens present-day food production in many regions.",
      "tag": "Food Availability Deficit (FAD)"
    },
    {
      "q": "The Striga weed illustrates a Food Availability Deficit factor because it:",
      "options": [
        "Improves soil fertility for neighbouring crops",
        "Is a parasitic weed that competes with crops for nutrients, with seeds remaining viable in soil for up to 20 years, causing yield losses of 40-100% across around 100 million hectares of infested land in Africa",
        "Has no effect on crop yields",
        "Only affects crops grown in Europe"
      ],
      "correct": 1,
      "explain": "The Striga weed is a parasitic plant that competes with crops for nutrients. Its seeds can lie viable in soil for up to 20 years, and it infests around 100 million hectares of land in Africa, causing yield losses of 40-100% where it takes hold — a clear physical (FAD) threat to food availability.",
      "misconception": "Pests and weeds are sometimes treated as a minor agricultural nuisance; examples like Striga show they can cause total or near-total crop loss across huge areas, directly threatening food security.",
      "tag": "Food Availability Deficit (FAD)"
    },
    {
      "q": "Governance can affect the severity of a famine because:",
      "options": [
        "Government decisions have no bearing on famine outcomes",
        "Decisions such as how aid and resources are distributed, whether conflict is allowed to continue, and how food security policy is prioritised can significantly worsen or lessen a famine's impact",
        "All governments respond to famine identically",
        "Famine severity is determined only by rainfall"
      ],
      "correct": 1,
      "explain": "Governance — including how effectively (and fairly) a government distributes aid and resources, whether it allows or resolves conflict, and how it prioritises food security policy — can significantly worsen or reduce the severity of a famine, independent of the underlying physical or economic causes.",
      "misconception": "Famine severity is sometimes seen as determined purely by physical shocks like drought; governance decisions about response and distribution can be just as decisive in how severe the resulting crisis becomes.",
      "tag": "The role of governance"
    },
    {
      "q": "The media can affect the severity of famine and the international response to it by:",
      "options": [
        "Having no influence on international aid decisions",
        "Raising international awareness and pressure for a response to a famine, meaning under-reported crises can receive comparatively less international aid and attention",
        "Guaranteeing equal aid to every famine, regardless of media coverage",
        "Only reporting on famines after they have fully ended"
      ],
      "correct": 1,
      "explain": "Media coverage can raise international awareness and generate pressure for a humanitarian response. This means famines or crises that receive less media attention (sometimes called ‘forgotten crises’) can receive comparatively less international aid and funding than more widely reported events.",
      "misconception": "It is tempting to assume aid is distributed purely based on need; in practice, the level of media attention a crisis receives can significantly shape how much international support it actually attracts.",
      "tag": "The power of the media"
    },
    {
      "q": "Access to international aid can affect the severity of famine because:",
      "options": [
        "Aid delivery is always guaranteed and unaffected by local conditions",
        "Conflict, insecurity or blocked access routes can prevent aid from reaching the people who need it most, worsening the severity of a famine even where aid has been pledged",
        "Famine severity is entirely unrelated to aid access",
        "International aid is never needed to address famine"
      ],
      "correct": 1,
      "explain": "Even where international aid has been pledged, conflict, insecurity, damaged infrastructure or blocked access routes can prevent that aid from actually reaching the people who need it most, worsening the severity of a famine — a factor explored in detail in the Yemen case study later in this topic.",
      "misconception": "Pledged aid is sometimes assumed to be equivalent to delivered aid; the practical ability to physically access affected populations is a separate and often decisive factor in famine severity.",
      "tag": "Access to international aid"
    }
  ]
};

window.SBL_LESSONS.FH15 = {
  "id": "FH15",
  "topicNumber": 3,
  "topicTitle": "Stakeholders in food and health",
  "title": "Case study: Causes of famine and food insecurity in Yemen",
  "href": "/geography/paper-1/option-f/t3-stakeholders-in/l5-case-study-a",
  "syllabusFocus": "One case study of a famine-stricken country or area, evaluating the human and physical factors causing food insecurity and famine: Yemen.",
  "starterButtons": [
    {
      "label": "Teach me this case study",
      "request": "Give me a full overview of this case study"
    },
    {
      "label": "Background to the Yemen conflict",
      "request": "Outline the background to the conflict in Yemen since 2014"
    },
    {
      "label": "Human/conflict-related causes",
      "request": "Explain how conflict has caused food insecurity in Yemen"
    },
    {
      "label": "The scale of malnutrition in Yemen",
      "request": "Describe the scale of malnutrition among children and women in Yemen"
    },
    {
      "label": "Healthcare collapse",
      "request": "Explain how the collapse of healthcare has worsened the crisis in Yemen"
    },
    {
      "label": "Measuring the crisis: the IPC scale",
      "request": "Explain how the Integrated Food Security Phase Classification is used to measure famine severity"
    },
    {
      "label": "Which governorates are worst affected?",
      "request": "Explain which governorates in Yemen are most at risk of famine and why"
    }
  ],
  "checklist": [
    "I can outline the background to the conflict in Yemen since 2014.",
    "I can explain how conflict has driven food insecurity in Yemen.",
    "I can describe the scale of malnutrition among children and women in Yemen.",
    "I can explain how healthcare collapse has worsened the crisis.",
    "I can describe how the Integrated Food Security Phase Classification (IPC) is used to measure severity.",
    "I can identify the governorates in Yemen most at risk of famine and explain why."
  ],
  "readinessQuestions": [
    "Briefly outline the background to the conflict in Yemen since 2014.",
    "Explain two ways the conflict has caused food insecurity in Yemen.",
    "What proportion of children under five are chronically malnourished (stunted) in the worst-affected governorates of Yemen?",
    "Explain how the collapse of the healthcare system has worsened Yemen's food and nutrition crisis.",
    "Why are Taiz and Hodeidah governorates considered to be at particularly high risk of famine?"
  ],
  "quiz": [
    {
      "q": "The conflict in Yemen, which is central to this case study, began when:",
      "options": [
        "Houthi Shiite rebels swept into the capital Sana'a in September 2014, overthrowing President Abed-Rabbo Mansour Hadi's internationally recognised government",
        "Yemen experienced a natural disaster with no political dimension",
        "A trade dispute escalated into armed conflict in 2020",
        "The conflict has no clear starting point"
      ],
      "correct": 0,
      "explain": "Yemen has been engulfed in civil war since September 2014, when Houthi Shiite rebels swept into the capital, Sana'a, and overthrew President Abed-Rabbo Mansour Hadi's internationally recognised government.",
      "misconception": "The Yemen crisis is sometimes assumed to be purely a natural disaster or purely economic; its roots lie specifically in this 2014 political and military takeover.",
      "tag": "Background to the Yemen conflict"
    },
    {
      "q": "In March 2015, the conflict in Yemen escalated significantly when:",
      "options": [
        "The United Nations declared Yemen independent",
        "A Saudi-led coalition, backed by the United States, began a military campaign against Houthi forces allied with ousted former president Ali Abdullah Saleh",
        "All fighting in Yemen ceased entirely",
        "Yemen's government relocated permanently to Sana'a"
      ],
      "correct": 1,
      "explain": "In March 2015, a Saudi-led coalition, backed by the United States, began a campaign against Houthi forces (who were allied with ousted former president Ali Abdullah Saleh) in support of Hadi's government, significantly escalating the conflict into a wider regional war.",
      "misconception": "It is easy to see this as a purely internal Yemeni conflict; the 2015 escalation shows how external, regional powers became directly involved militarily.",
      "tag": "Background to the Yemen conflict"
    },
    {
      "q": "The conflict in Yemen has driven food insecurity primarily by:",
      "options": [
        "Having no effect on people's ability to buy food",
        "Destroying people's livelihoods and ability to purchase food, disrupting markets, and damaging infrastructure needed to produce and distribute food",
        "Increasing everyone's income across the country",
        "Improving access to healthcare and food distribution networks"
      ],
      "correct": 1,
      "explain": "The conflict has destroyed people's livelihoods and their ability to purchase food, making it difficult for many Yemenis to meet even minimal food and nutrition needs — a clear illustration of a Food Entitlement Deficit driven by conflict.",
      "misconception": "It is worth explicitly linking this case study to the FAD/FED framework from the previous lesson: Yemen's crisis is driven overwhelmingly by a Food Entitlement Deficit (conflict destroying access and livelihoods), rather than a simple physical shortage of food.",
      "tag": "Human/conflict-related causes"
    },
    {
      "q": "In some of the worst-affected governorates of Yemen, the proportion of children under five who are chronically malnourished (stunted) reaches:",
      "options": [
        "Around 5%",
        "Up to 67%",
        "100%, with no exceptions",
        "This has never been measured in Yemen"
      ],
      "correct": 1,
      "explain": "In some governorates of Yemen, up to 67% of children under five are chronically malnourished (stunted), while rates of acute malnutrition (wasting) exceed 25% in some areas — placing their physical and mental development at severe, often irreversible risk.",
      "misconception": "The scale of these figures is easy to underestimate; malnutrition at this level affects the majority of children in the worst-affected areas, not a small minority.",
      "tag": "The scale of malnutrition in Yemen"
    },
    {
      "q": "Among women of reproductive age (15-49) in Yemen, the nutrition situation is also serious: an estimated 25% are underweight, and what proportion are anaemic?",
      "options": [
        "Under 5%",
        "More than four-fifths (over 80%)",
        "Exactly half",
        "Anaemia is not a recorded issue in Yemen"
      ],
      "correct": 1,
      "explain": "Among women of reproductive age in Yemen, around 25% are underweight and more than four-fifths (over 80%) are anaemic, which can lead to maternal death and disabling health complications, and increases risks during pregnancy and breastfeeding.",
      "misconception": "Malnutrition impacts are sometimes discussed only in relation to children; the scale of anaemia and underweight status among women of reproductive age in Yemen shows the crisis affects multiple demographic groups severely.",
      "tag": "The scale of malnutrition in Yemen"
    },
    {
      "q": "The collapse of Yemen's healthcare system has worsened the crisis because:",
      "options": [
        "All health facilities in Yemen remained fully functional throughout the conflict",
        "An estimated 14.8 million people lack access to basic healthcare, and only around 45% of surveyed health facilities were found to be fully functional, facing severe shortages of medicine, equipment and staff",
        "Healthcare access has no connection to malnutrition outcomes",
        "Yemen's healthcare system was unaffected by the conflict"
      ],
      "correct": 1,
      "explain": "An estimated 14.8 million people in Yemen lack access to basic healthcare, and a November 2016 survey found only around 45% of 3,507 health facilities were fully functional, with most facing severe shortages of medicine, equipment and staff — compounding the effects of malnutrition.",
      "misconception": "Famine crises are sometimes analysed purely in terms of food supply; the collapse of healthcare infrastructure is a critical, compounding factor that worsens outcomes for those already malnourished.",
      "tag": "Healthcare collapse"
    },
    {
      "q": "The Integrated Food Security Phase Classification (IPC) is used by organisations responding to crises like Yemen's to:",
      "options": [
        "Set global food prices",
        "Provide a standard, five-point international scale for classifying the severity of food insecurity in a given area, from minimal to famine",
        "Measure only rainfall levels",
        "Replace the need for any on-the-ground assessment"
      ],
      "correct": 1,
      "explain": "The Integrated Food Security Phase Classification (IPC) is the standard international five-point scale used to classify the severity of food insecurity, ranging from minimal, through stressed, crisis and emergency, to famine — allowing responses to be prioritised and compared consistently across countries.",
      "misconception": "Without a standardised scale like the IPC, comparing the severity of different crises (or tracking how one crisis changes over time) would be far less consistent and harder to act on.",
      "tag": "Measuring the crisis: the IPC scale"
    },
    {
      "q": "At the time of the data used in this case study, Yemen's crisis on the IPC scale included approximately:",
      "options": [
        "No people classified as food insecure at any level",
        "17 million people facing severe food insecurity, including 6.8 million in the ‘emergency’ phase (one step from famine) and a further 10.2 million in ‘crisis’",
        "Only a few thousand people affected nationally",
        "The entire population equally affected with no variation by area"
      ],
      "correct": 1,
      "explain": "At the time of this data, around 17 million people in Yemen were facing severe food insecurity, with 6.8 million classified in the IPC ‘emergency’ phase (one step from famine) and a further 10.2 million in ‘crisis’ — reflecting a 21% increase in hunger levels since the previous year.",
      "misconception": "It is worth remembering the IPC phases are not just descriptive labels; ‘emergency’ specifically means a population is one classification step away from famine itself, which is the most severe possible IPC phase.",
      "tag": "Measuring the crisis: the IPC scale"
    },
    {
      "q": "Taiz and Hodeidah governorates are considered to be at particularly heightened risk of famine in Yemen because they:",
      "options": [
        "Have experienced no conflict at all",
        "Are home to almost 25% of Yemen's population and have been the scene of intense conflict since the outbreak of civil war in 2015",
        "Are the wealthiest regions of Yemen with no food insecurity",
        "Have no connection to the wider national food security crisis"
      ],
      "correct": 1,
      "explain": "Taiz and Hodeidah governorates are home to almost 25% of Yemen's roughly 28 million-strong population and have been the scene of particularly intense conflict since the civil war began, placing them at heightened risk of famine compared to less directly conflict-affected areas.",
      "misconception": "Famine risk within a single country is rarely uniform; identifying which specific governorates face the highest risk (and why) is an important geographical skill this case study develops.",
      "tag": "Which governorates are worst affected?"
    },
    {
      "q": "Overall, this case study shows that Yemen's food insecurity crisis is best explained as:",
      "options": [
        "A purely physical (FAD) crisis with no human causes",
        "A largely human-driven (FED) crisis, in which conflict has destroyed livelihoods, healthcare and infrastructure, severely reducing people's ability to access food that may otherwise be available",
        "A crisis with no identifiable causes at all",
        "A crisis entirely unrelated to governance or conflict"
      ],
      "correct": 1,
      "explain": "Yemen's crisis is overwhelmingly a Food Entitlement Deficit (FED): conflict has destroyed livelihoods, healthcare and infrastructure, severely limiting people's economic and physical ability to access food, rather than there being a simple absence of food in the country.",
      "misconception": "This ties the whole case study back to the FAD/FED framework introduced in the previous lesson — Yemen is a clear real-world example of a human-driven, conflict-based Food Entitlement Deficit.",
      "tag": "Human/conflict-related causes"
    }
  ]
};

window.SBL_LESSONS.FH16 = {
  "id": "FH16",
  "topicNumber": 3,
  "topicTitle": "Stakeholders in food and health",
  "title": "Case study: Attempts to tackle food insecurity in Yemen",
  "href": "/geography/paper-1/option-f/t3-stakeholders-in/l6-case-study",
  "syllabusFocus": "One case study of attempts to tackle food insecurity, and the difficulties faced in the shorter and longer term: Yemen.",
  "starterButtons": [
    {
      "label": "Teach me this case study",
      "request": "Give me a full overview of this case study"
    },
    {
      "label": "The WFP's Emergency Operation",
      "request": "Describe the WFP's Emergency Operation in Yemen"
    },
    {
      "label": "Cash and voucher assistance",
      "request": "Explain how cash and voucher assistance works as a strategy in Yemen"
    },
    {
      "label": "Targeted nutrition programmes",
      "request": "Describe the targeted nutrition programmes used for malnourished children and mothers in Yemen"
    },
    {
      "label": "How the WFP decides who receives aid",
      "request": "Explain how the WFP prioritises which households receive support in Yemen"
    },
    {
      "label": "Short-term difficulties: funding",
      "request": "Explain the shorter-term difficulties faced in tackling food insecurity in Yemen"
    },
    {
      "label": "Long-term difficulties: conflict and scale",
      "request": "Explain the longer-term difficulties faced in tackling food insecurity in Yemen"
    }
  ],
  "checklist": [
    "I can describe the WFP's Emergency Operation in Yemen.",
    "I can explain how cash and voucher assistance works as a strategy.",
    "I can describe the targeted nutrition programmes used for malnourished children and mothers.",
    "I can explain how the WFP decides which households receive priority support.",
    "I can explain the shorter-term difficulties faced in tackling food insecurity in Yemen.",
    "I can explain the longer-term difficulties faced in tackling food insecurity in Yemen."
  ],
  "readinessQuestions": [
    "Describe one strategy used by the WFP to tackle food insecurity in Yemen.",
    "Explain how the Cash Voucher through Traders Network (CV-TN) scheme works.",
    "Which group of people receives the highest-priority share of household targeting under the WFP's criteria, and why?",
    "Explain one shorter-term difficulty faced in tackling food insecurity in Yemen.",
    "Explain one longer-term difficulty faced in tackling food insecurity in Yemen."
  ],
  "quiz": [
    {
      "q": "The WFP's Emergency Operation in Yemen aimed to provide General Food Assistance and nutrition support to approximately:",
      "options": [
        "A few thousand people only",
        "6.8 million people through General Food Assistance and 2.9 million through critical nutrition support",
        "The entire population of the Arabian Peninsula",
        "Only people living in the capital city"
      ],
      "correct": 1,
      "explain": "The WFP's Emergency Operation aimed to assist 6.8 million people through General Food Assistance (an in-kind food basket and commodity vouchers) and 2.9 million people through critical nutrition support, focusing on those classified as severely food insecure.",
      "misconception": "It is worth noting the WFP explicitly targeted only the most severely food-insecure people with this operation, rather than Yemen's entire food-insecure population, due to limited resources.",
      "tag": "The WFP's Emergency Operation"
    },
    {
      "q": "The WFP's Cash Voucher through Traders Network (CV-TN) scheme in Yemen works by:",
      "options": [
        "Distributing only raw cash with no restrictions on its use",
        "Providing beneficiaries with commodity vouchers that can be redeemed for food entitlements at participating local retail outlets linked to WFP's food service provider",
        "Requiring beneficiaries to travel to a different country to redeem support",
        "Replacing all other forms of assistance in Yemen entirely"
      ],
      "correct": 1,
      "explain": "Under the CV-TN scheme, beneficiaries redeem commodity vouchers distributed by WFP's cooperating partners for food entitlements at the closest participating retail outlet linked to WFP's food service provider — a market-based transfer modality identified as suitable and cost-effective for the Yemeni context.",
      "misconception": "Voucher-based assistance is sometimes assumed to be identical to cash assistance; vouchers specifically restrict spending to food entitlements at approved outlets, rather than being usable for any purpose.",
      "tag": "Cash and voucher assistance"
    },
    {
      "q": "The WFP's targeted supplementary feeding programme in Yemen treats moderate acute malnutrition in children aged 6 to 59 months using:",
      "options": [
        "No specific nutritional product, only general food aid",
        "A ready-to-use supplementary food called Plumpy'Sup, providing 535 kcal per day for an average of 90 days",
        "A programme that only accepts children over the age of 10",
        "Only medical treatment with no nutritional component"
      ],
      "correct": 1,
      "explain": "The WFP's targeted supplementary feeding programme treats moderate acute malnutrition in children aged 6 to 59 months using Plumpy'Sup, a ready-to-use supplementary food providing 535 kcal per day for an average of 90 days.",
      "misconception": "Nutrition interventions are sometimes assumed to be generic food aid; targeted programmes like this use specific, ready-to-use therapeutic products designed for the particular nutritional needs of young children.",
      "tag": "Targeted nutrition programmes"
    },
    {
      "q": "Acutely malnourished pregnant and breastfeeding women in Yemen receive support from the WFP in the form of:",
      "options": [
        "No specific support of any kind",
        "A monthly 6 kg take-home ration of a fortified blended flour called SuperCereal, from the beginning of the second trimester through to six months of breastfeeding",
        "A one-off payment with no follow-up",
        "Support only available to women in urban areas"
      ],
      "correct": 1,
      "explain": "Acutely malnourished pregnant and breastfeeding women receive a monthly 6 kg take-home ration of SuperCereal, a fortified blended flour, provided from the beginning of the second trimester of pregnancy through to six months of breastfeeding.",
      "misconception": "This programme specifically targets a nutritionally vulnerable group (pregnant and breastfeeding women) separately from the child-focused Plumpy'Sup programme, reflecting their distinct nutritional needs.",
      "tag": "Targeted nutrition programmes"
    },
    {
      "q": "The WFP prioritises which districts receive support in Yemen mainly based on:",
      "options": [
        "Random selection with no clear method",
        "The percentage of severely food-insecure households in a district, using a 20% threshold, with some districts slightly below this also included to minimise the risk of excluding vulnerable people",
        "Which districts have the largest population, regardless of need",
        "Which districts request support first, on a first-come-first-served basis"
      ],
      "correct": 1,
      "explain": "District prioritisation is based mainly on the percentage of severely food-insecure households, using a 20% threshold — any district with 20% or more severely food-insecure households is included, and some districts slightly below this threshold are also included to minimise the risk of excluding genuinely vulnerable people.",
      "misconception": "Targeting decisions might seem arbitrary from the outside; in practice, they follow a defined, data-driven method designed to balance limited resources against the risk of missing vulnerable households.",
      "tag": "How the WFP decides who receives aid"
    },
    {
      "q": "Under the WFP's household targeting criteria in Yemen, the single highest-priority group (around 35% of the estimated share) is:",
      "options": [
        "Elderly-headed households with no income",
        "Households with pregnant and lactating women and/or children under five registered in curative treatment for severe or moderate acute malnutrition (SAM/MAM)",
        "Households headed by physically-challenged persons",
        "Child-headed households"
      ],
      "correct": 1,
      "explain": "Households with pregnant and lactating women (PLW) and/or children under five registered in curative activities for Severe Acute Malnutrition (SAM) or Moderate Acute Malnutrition (MAM) are given the highest household targeting priority, at an estimated 35% share, reflecting the severe nutritional vulnerability of these groups.",
      "misconception": "It is worth linking this back to the nutrition programmes covered earlier in this lesson; the highest-priority targeting category is directly tied to the same malnutrition treatment programmes (Plumpy'Sup and SuperCereal).",
      "tag": "How the WFP decides who receives aid"
    },
    {
      "q": "A significant shorter-term difficulty faced by the WFP in tackling food insecurity in Yemen is:",
      "options": [
        "Having guaranteed, unlimited funding for every planned activity",
        "The risk of funding shortfalls, which could force the WFP to prioritise only those most at risk of dying from starvation, rather than meeting all its planned life-saving objectives",
        "No difficulties exist in the shorter term",
        "Having too much funding relative to the scale of need"
      ],
      "correct": 1,
      "explain": "A key shorter-term difficulty is the risk of funding shortfalls: the WFP has acknowledged it may not be able to raise the resources needed to support all 6.8 million people planned for assistance, and if funding is insufficient, it would have no option but to prioritise within the most vulnerable, focusing on those most at risk of dying from starvation.",
      "misconception": "It is tempting to assume a well-known operation like this is always fully funded; the WFP's own assessment shows funding shortfalls are a genuine, acknowledged risk with direct, life-threatening consequences.",
      "tag": "Short-term difficulties: funding"
    },
    {
      "q": "A significant longer-term difficulty in tackling food insecurity in Yemen is that:",
      "options": [
        "The crisis has been fully resolved and no longer requires attention",
        "Despite ongoing humanitarian assistance, hunger levels continued to rise (a 21% increase was recorded over one year), reflecting that the underlying conflict driving the crisis has not been resolved",
        "Humanitarian aid alone has completely eliminated the root causes of the crisis",
        "Yemen's food insecurity has no connection to the ongoing conflict"
      ],
      "correct": 1,
      "explain": "A major longer-term difficulty is that, despite significant humanitarian assistance, hunger levels in Yemen continued to rise (a 21% increase was recorded over one year), showing that humanitarian aid alone cannot resolve a crisis whose root cause — ongoing conflict — remains unaddressed.",
      "misconception": "Humanitarian assistance is sometimes assumed to be a complete solution; this case study shows that without addressing the underlying political and conflict-related causes, aid can only limit, not resolve, the severity of a crisis.",
      "tag": "Long-term difficulties: conflict and scale"
    },
    {
      "q": "The scale of need in Yemen (around 17 million people facing severe food insecurity) relative to any single humanitarian operation illustrates:",
      "options": [
        "That humanitarian operations can always meet 100% of need with no difficulty",
        "That the scale of a crisis can far outstrip what any single operation or organisation can realistically deliver, requiring sustained, coordinated, long-term international support",
        "That the scale of need has no bearing on how a crisis is managed",
        "That smaller operations are always sufficient regardless of the scale of the crisis"
      ],
      "correct": 1,
      "explain": "The scale of need in Yemen (around 17 million people facing severe food insecurity) far outstrips what a single operation like the WFP's Emergency Operation (targeting 6.8 million) can address alone, illustrating the need for sustained, coordinated, long-term international support rather than a single short-term response.",
      "misconception": "It is easy to assume one well-resourced humanitarian operation can solve a national-scale crisis; the mismatch in scale here shows why sustained, multi-year, multi-organisation responses are usually necessary.",
      "tag": "Long-term difficulties: conflict and scale"
    },
    {
      "q": "Overall, this case study of Yemen demonstrates that lasting solutions to famine and food insecurity in a conflict-affected country ultimately require:",
      "options": [
        "Humanitarian food aid alone, with no other intervention needed",
        "Addressing the underlying political and conflict-related causes of the crisis, alongside continued humanitarian assistance to meet immediate needs",
        "No international involvement of any kind",
        "Ignoring the affected population until the conflict ends naturally"
      ],
      "correct": 1,
      "explain": "This case study demonstrates that while humanitarian assistance (food, vouchers, targeted nutrition support) is essential for meeting immediate needs, lasting solutions to a conflict-driven food security crisis ultimately require addressing the underlying political and conflict-related causes — humanitarian aid can limit suffering but cannot substitute for a political resolution.",
      "misconception": "This is the key evaluative conclusion of the whole case study: short-term humanitarian strategies and long-term structural solutions are both necessary, but they are not the same thing and cannot substitute for one another.",
      "tag": "Long-term difficulties: conflict and scale"
    }
  ]
};
