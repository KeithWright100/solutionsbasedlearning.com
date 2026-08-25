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
         images: [
           { src: '/images/revision-ppq/climate-change/2019-may-fig1.jpg',
             alt: 'Line graph showing global mean temperature anomaly, 1950-2020',
             caption: 'Figure 1' }
         ]
       }
       // ...more questions for this topic
     ]
   });

   Topics use the same names as the site's Paper 2 — Core units
   (Changing Population / Global Climate / Resource Consumption and
   Security) so past paper questions from any session file in
   alongside each other under one card per theme. */

window.SBL_REVISION_TOPICS = [];

/* ============================================================
   May 2019, Paper 2, Time Zone 0 (M19/3/GEOGR/BP2/ENG/TZ0/XX)
   Source: IB Geography HL/SL Paper 2 question booklet, resource
   booklet and markscheme, May 2019. Reproduced here for Patana
   School's own students as part of their IB revision programme.
   ============================================================ */

window.SBL_REVISION_TOPICS.push({
  topic: 'Changing Population',
  questions: [
    {
      question: 'The graph shows actual and projected changes in the median population age of three countries between 1960 and 2080. State the median age for Country B in the year 2000.',
      marks: 1,
      markScheme: 'Correct answer is 29 years (allow 28–29, given normal graph-reading tolerance). Award the mark for any value in that range; no explanation is required.',
      label: 'May 2019 P2 — Question 1(a)',
      images: [
        { src: '/images/revision-ppq/paper-2-may-2019/q1-median-age-graph.jpg',
          alt: 'Line graph showing actual and projected median population age for three countries, A, B and C, from 1960 to 2080',
          caption: 'Median population age, 1960–2080 [Source: © International Baccalaureate Organization 2019]' }
      ]
    },
    {
      question: 'Using the graph, state which country has the greatest projected increase in median age between 2010 and 2040.',
      marks: 1,
      markScheme: 'Correct answer is Country B — its line rises most steeply of the three between 2010 and 2040. Award the mark for naming Country B only.',
      label: 'May 2019 P2 — Question 1(b)',
      images: [
        { src: '/images/revision-ppq/paper-2-may-2019/q1-median-age-graph.jpg',
          alt: 'Line graph showing actual and projected median population age for three countries, A, B and C, from 1960 to 2080',
          caption: 'Median population age, 1960–2080 [Source: © International Baccalaureate Organization 2019]' }
      ]
    },
    {
      question: 'Explain one reason why the median age of a population could decrease.',
      marks: 2,
      markScheme: 'Award 1 mark for a valid reason for a decrease in median age, and 1 mark for explaining how that reason affects the median age. Valid reasons include: in-migration of youthful people or out-migration of elderly people; a high or rising birth/fertility rate increasing the proportion of younger people; increased mortality among the elderly or decreased life expectancy; an increased death rate due to conflict reducing the proportion of the older/independent population. Example: "the arrival of youthful economic migrants [1] means proportionately more younger people, reducing the median age [1]."',
      label: 'May 2019 P2 — Question 1(c)'
    },
    {
      question: 'Explain one environmental consequence of one named forced migration.',
      marks: 3,
      markScheme: 'Award 1 mark for correctly identifying and locating a named example of forced migration (internal displacement or refugees), 1 mark for identifying a valid environmental consequence, and 1 mark for further developed explanation. Accept a broad interpretation of "environmental", including the built environment/landscape. Valid consequences include deforestation, soil erosion, contamination of water supplies, depletion of water resources, waste disposal problems, aesthetic damage, disease-breeding environments, loss of biodiversity, air pollution and land degradation. A strong answer names and locates a real case and links it clearly to one specific, developed consequence.',
      label: 'May 2019 P2 — Question 1(d)'
    },
    {
      question: 'Explain one policy designed to prevent human trafficking.',
      marks: 3,
      markScheme: 'Award 1 mark for identifying a valid policy at societal, NGO, national or international level; 1 mark for development with details of how it operates/operated; 1 mark for further development, which may include why it was introduced or the scale of the problem it addresses. Valid policy types include accreditation/ethical trade schemes, education campaigns targeting demand, national anti-trafficking agencies, travel restrictions for children, community vigilance groups, prosecution of traffickers, government anti-trafficking legislation, border controls, international cooperation/protocols, and programmes improving the livelihoods of vulnerable groups. A named, located, well-explained example scores highly.',
      label: 'May 2019 P2 — Question 1(e)'
    },
    {
      question: 'The infographic shows Syrian refugees in the US. Estimate the number of Syrian refugees that have settled in Pennsylvania (labelled X).',
      marks: 1,
      markScheme: 'Correct answer is approximately 102 (allow a range of 101–103), read from the pictogram where each icon represents 10 people.',
      label: 'May 2019 P2 — Question 4(a)(i)',
      images: [
        { src: '/images/revision-ppq/paper-2-may-2019/q4-syrian-refugees-numbers.jpg',
          alt: 'Infographic showing estimated Syrians displaced, refugees registered by the UN, an age/gender population pyramid, Syrian refugees admitted to the US by year, and the top five US states resettling Syrian refugees in 2016',
          caption: 'Syrian refugee crisis by the numbers (1 of 2)' }
      ]
    },
    {
      question: 'Determine the increase in the number of Syrian refugees admitted to the US between 2013 and 2014.',
      marks: 1,
      markScheme: 'Correct answer is 204 (accept only this figure) — the difference between the 2014 bar (249) and the 2013 bar (45) on the "Syrian refugees admitted to US by year" chart.',
      label: 'May 2019 P2 — Question 4(a)(ii)',
      images: [
        { src: '/images/revision-ppq/paper-2-may-2019/q4-syrian-refugees-numbers.jpg',
          alt: 'Infographic showing estimated Syrians displaced, refugees registered by the UN, an age/gender population pyramid, Syrian refugees admitted to the US by year, and the top five US states resettling Syrian refugees in 2016',
          caption: 'Syrian refugee crisis by the numbers (1 of 2)' }
      ]
    },
    {
      question: 'Using evidence from the population pyramid only, explain one possible challenge faced by the US government in resettling Syrian refugees.',
      marks: 2,
      markScheme: 'Award 1 mark for identifying a valid challenge shown in the pyramid, and 1 mark for quantifying it with evidence from the pyramid. Accept challenges such as: education/schooling pressure, since over 50% of refugees (51.1%, or 33.8% aged 5–17) are under 17; employment/job-creation pressure, since 46% are of working age; or a high dependency ratio (approximately 50%, 54%) placing strain on services. The answer must use pyramid evidence only — general reasoning without a supporting figure from the pyramid should not gain the second mark.',
      label: 'May 2019 P2 — Question 4(b)',
      images: [
        { src: '/images/revision-ppq/paper-2-may-2019/q4-syrian-refugees-numbers.jpg',
          alt: 'Infographic showing estimated Syrians displaced, refugees registered by the UN, an age/gender population pyramid, Syrian refugees admitted to the US by year, and the top five US states resettling Syrian refugees in 2016',
          caption: 'Syrian refugee crisis by the numbers (1 of 2)' }
      ]
    },
    {
      question: 'To what extent does the infographic offer a flawed representation of the scale of Syrian resettlement in the US?',
      marks: 6,
      markScheme: 'This is a point-based evaluation, not an essay band. Award 1 mark for each valid flaw or strength identified (up to 5 marks for flaws and strengths combined), with up to 2 further marks per point for supported development/explanation. Award a final 1 mark for a supported overall appraisal that weighs up the infographic as a whole (e.g. "the infographic has some strengths but mainly demonstrates flaws"). Cap the total at 4 marks if only one perspective (only flaws, or only strengths) is given. Possible flaws: the choropleth resettlement map shows banded categories, not true/absolute numbers; it uses emotive/relative language such as "high" when actual numbers are small; it only shows official figures and may miss undocumented arrivals; the yearly bar chart omits 2016 data, which may show a decrease rather than a continued increase; the map only shows a general state-level picture, not distribution within states; the pyramid age bands are uneven and imprecise. Possible strengths: it shows actual admitted numbers, allowing comparison against the 12 million total displaced (showing US resettlement is a very small share); the bar chart shows a genuine trend in scale over time; the map gives an accurate overview of where refugees have settled, showing many states have low or no refugees; the sources cited are reputable.',
      label: 'May 2019 P2 — Question 4(c)',
      images: [
        { src: '/images/revision-ppq/paper-2-may-2019/q4-syrian-refugees-numbers.jpg',
          alt: 'Infographic showing estimated Syrians displaced, refugees registered by the UN, an age/gender population pyramid, Syrian refugees admitted to the US by year, and the top five US states resettling Syrian refugees in 2016',
          caption: 'Syrian refugee crisis by the numbers (1 of 2)' },
        { src: '/images/revision-ppq/paper-2-may-2019/q4-syrian-refugees-us-map.jpg',
          alt: 'Choropleth map of the United States showing the level of Syrian refugee resettlement — high, medium, low or none — by state',
          caption: 'Syrian refugees in the US, by state (2 of 2) [Source: adapted from latimes.com, migrationpolicy.org, defenseone.com]' }
      ]
    },
    {
      question: '"Of all the demographic challenges nations face, ageing is the most serious." To what extent do you agree with this statement?',
      marks: 10,
      markScheme: 'Mark holistically against the IB Paper 2 Section C markbands (0 / 1–2 / 3–4 / 5–6 / 7–8 / 9–10), which assess: knowledge, understanding, application and analysis of relevant demographic themes (e.g. the socio-economic impacts of ageing such as dependency, pensions, healthcare costs and the "grey economy"; other demographic challenges such as youthful populations, gender imbalance, forced or voluntary migration, rapid urban growth, or population/resource pressure, used as comparison); synthesis and evaluation — a critical, well-evidenced conclusion on relative seriousness that weighs ageing against other challenges, informed by named, located real-world examples; and structure — logically grouped points and correct use of geographic terminology and case studies throughout. Higher bands require named/located examples, a balanced argument covering more than one demographic challenge, and a clear, justified conclusion — not just a description of ageing alone.',
      label: 'May 2019 P2 — Question 5 (Section C)'
    }
  ]
});

window.SBL_REVISION_TOPICS.push({
  topic: 'Global Climate',
  questions: [
    {
      question: 'The map shows total greenhouse gas emissions from agriculture. Describe the regional distribution of high total greenhouse gas emissions from agriculture.',
      marks: 2,
      markScheme: 'Award 1 mark for each valid, specific statement about the pattern shown by the red ("High") areas on the map, up to 2 marks. Valid observations include: concentration in East Asia, South East Asia and South Asia; concentration in Western/Northern Europe; concentration in Central/Eastern USA; the pattern is almost entirely in the northern hemisphere. Answers must describe the map pattern, not just list place names with no locational detail.',
      label: 'May 2019 P2 — Question 2(a)',
      images: [
        { src: '/images/revision-ppq/paper-2-may-2019/q2-ghg-emissions-map.jpg',
          alt: 'World map showing total greenhouse gas emissions from agriculture by region, categorised as negligible, low, medium or high',
          caption: 'Total greenhouse gas emissions from agriculture [Source: data from Carlson et al. 2016, Nature Climate Change / UMN – Institute on the Environment]' }
      ]
    },
    {
      question: 'Explain two reasons why increased trade by emerging economies has led to increased greenhouse gas emissions.',
      marks: 4,
      markScheme: 'Award 1 mark for identifying each valid reason (up to two reasons) and 1 further mark for developing/exemplifying each — 2+2 marks total. Valid reasons include: increased export of manufactured goods raising factory/industrial emissions; TNCs locating manufacturing in emerging economies where environmental regulations may be more lax; increased transport emissions from shipping, aircraft or road freight carrying traded goods; rising living standards from trade increasing per-capita consumption of meat and fossil fuels; reliance of emerging economies on fossil fuels to power export industries. Both reasons must be clearly linked to increased trade, not general development.',
      label: 'May 2019 P2 — Question 2(b)'
    },
    {
      question: 'Explain how carbon offset schemes and carbon trading might lead to a global reduction in greenhouse gas emissions.',
      marks: 4,
      markScheme: 'Award 1 mark for explaining what carbon offsetting is and 1 mark for how it could reduce global emissions; then 1 mark for explaining what carbon trading is and 1 mark for how it could reduce global emissions (2+2 — both schemes required). Carbon offsetting: funding emission-reducing projects elsewhere (e.g. tree planting, renewable energy) to counterbalance a source of emissions. Carbon trading: a market in tradable emission permits/allowances set by governments, where firms that exceed their limit must buy permits from firms that stay under theirs, creating a financial incentive to cut emissions. A description of either scheme with no explanation of how it reduces global emissions caps at 2 marks for that scheme.',
      label: 'May 2019 P2 — Question 2(c)'
    },
    {
      question: '"Responding to climate change is more important than working towards the UN Sustainable Development Goals." To what extent do you agree with this statement?',
      marks: 10,
      markScheme: 'Mark holistically against the same IB Paper 2 Section C markbands as other extended-response questions (0 / 1–2 / 3–4 / 5–6 / 7–8 / 9–10). Look for: knowledge and application of climate change impacts (sea level change, extreme weather, changing agriculture and hydrology, impacts on people and places, migration and health hazards) and understanding of the UN Sustainable Development Goals (e.g. gender equity, reducing hunger and poverty) and how climate change and the SDGs interact; critical evaluation of the relative importance of responding to climate change versus SDG progress, at different places, scales or timeframes, reaching a justified conclusion (an answer that argues the two are interlinked rather than genuinely competing can also score well if well argued); and logical structure with correct terminology throughout. Higher bands require named examples and a balanced, well-evidenced argument, not just a description of climate change or the SDGs in isolation.',
      label: 'May 2019 P2 — Question 6 (Section C)'
    }
  ]
});

window.SBL_REVISION_TOPICS.push({
  topic: 'Resource Consumption and Security',
  questions: [
    {
      question: 'Describe what is meant by "embedded water".',
      marks: 2,
      markScheme: 'Award 1 mark for identifying that embedded (virtual) water is water used in the production of food and manufactured goods in one country/place, and 1 mark for explaining that it is effectively transferred to other, often water-scarce, countries or regions via trade in those goods.',
      label: 'May 2019 P2 — Question 3(a)'
    },
    {
      question: 'Explain two reasons why diets are changing in middle-income countries.',
      marks: 4,
      markScheme: 'Award 1 mark for identifying and describing each valid reason (up to two reasons) and 1 further mark for explanatory development of each — 2+2 marks total. Valid reasons include: rising incomes giving more people disposable income to include more meat at the expense of vegetables and grains; growing health awareness; advertising, especially by multinational food companies; growing environmental awareness; a shift towards global/Westernized food systems; rapid urbanization shifting people towards more energy-dense diets; a real-terms fall in the cost of many foodstuffs; globalization, Westernization, cultural homogenization and the role of TNCs.',
      label: 'May 2019 P2 — Question 3(b)'
    },
    {
      question: 'Suggest two ways in which declining water availability might threaten a country’s energy security.',
      marks: 4,
      markScheme: 'Award 1 mark for identifying and describing each valid way (up to two ways) and 1 further mark for explanatory development of each — 2+2 marks total. Valid ways include: less water available for hydroelectric power (HEP) generation; the need to safeguard scarce potable water supplies leading to fracking being restricted or banned; falling water availability increasing reliance on energy-intensive desalination plants; lack of water for cooling in thermal or nuclear power plants; lack of water for geothermal energy production, including water needed for enhanced geothermal systems; lack of water leading to a decline in biofuel production. Example: declining water availability might reduce the water available for hydroelectric reservoirs [1], so a country dependent on HEP may be unable to generate enough electricity to meet demand [1].',
      label: 'May 2019 P2 — Question 3(c)'
    }
  ]
});
