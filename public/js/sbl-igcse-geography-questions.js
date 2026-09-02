/* SBL IGCSE Paper Practice — Geography questions data.
   Loaded before sbl-revision.js on the IGCSE Geography Paper Practice
   page (/igcse/geography). Uses the exact same reusable engine and
   data shape as the IB Geography Revision > Paper Questions page —
   see sbl-revision.js's header comment for the full shape, including
   optional images and labels.

   Shape:
   window.SBL_REVISION_TOPICS.push({
     topic: 'The Water Cycle',
     questions: [
       {
         question: 'Full IGCSE past paper question text goes here.',
         marks: 6,
         markScheme: 'Marking guidance goes here.',
         label: 'June 2023 — Question 1(a)'
       }
     ]
   });

   Content so far: Pearson Edexcel International GCSE Geography, Paper 1
   (4GE1/01R), June 2019 — Question 5, "Investigating Coastal
   Environments" (Section B, 20 marks); Paper 2 (4GE1/02R), June
   2019 — Question 5, "Investigating Rural Environments" (Section B,
   20 marks); Paper 1 (4GE1/01), June 2021 — Question 5,
   "Investigating Coastal Environments" (Section B, 12 marks — this
   paper's Section B question was restructured to a shorter 12-mark
   format, unlike the 20-mark June 2019 version above). Marking
   guidance for the June 2021 Paper 1 entry was written in-house (no
   official Pearson mark scheme was available for that series) — if
   the real mark scheme becomes available later it should replace
   this. And Paper 2 (4GE1/02), June 2021 — Question 1, "Economic
   Activity and Energy" (Section A, 25 marks), Question 2, "Rural
   Environments" (Section A, 25 marks), and Question 5, "Investigating
   Rural Environments" (Section B, 12 marks), and Question 9,
   "Development and Human Welfare" (Section C, 35 marks) — all four
   Paper 2 topics with marking guidance grounded in the official
   Pearson mark scheme.
   Send over more past paper content and it gets added here, topic by
   topic. */

/* This page's topic cards should read "IGCSE Full Past Paper Questions",
   not the engine's IB-page default — see sbl-revision.js. */
window.SBL_REVISION_BUTTON_LABEL = 'IGCSE Full Past Paper Questions';

window.SBL_REVISION_TOPICS = [
  {
    topic: 'Investigating Coastal Environments — June 2019 Paper 1',
    questions: [
      {
        label: 'June 2019 P1 — Question 5(a)(i)',
        question:
          'A group of students investigated processes and landforms along a stretch of coastline. Identify one risk that the students may have identified when carrying out a risk assessment for this investigation.',
        marks: 1,
        markScheme:
          'Any sensible risk for fieldwork on a coastline, e.g. falling into the sea/drowning, sunburn or exposure, slips/trips on rocks, fast-flowing currents or tides, infection from polluted water, animals in the water, unstable cliffs/rockfalls, deep water, or getting lost. Any other reasonable risk for this environment is acceptable.'
      },
      {
        label: 'June 2019 P1 — Question 5(a)(ii)',
        question:
          'State one way that the risk you identified could be managed.',
        marks: 1,
        markScheme:
          'Must sensibly manage the risk given in part (i), e.g. wearing appropriate footwear, wearing warm/waterproof layers, checking the weather forecast, checking tide times, working in groups, wearing a life jacket, staying away from the base of cliffs, or choosing a safer location to work in. A mismatched answer that does not address the stated risk should not be credited.'
      },
      {
        label: 'June 2019 P1 — Question 5(a)(iii)',
        question:
          'Figure 5a shows sample data about shingle size collected by students along a stretch of coastline. Calculate the mean shingle size across the five sites. Give your answer to one decimal place and show your working.',
        marks: 2,
        markScheme:
          'One mark for correct working (adding the five values: 8.1 + 14.5 + 16.1 + 15.0 + 30.0 = 83.7). One mark for the correct mean, 16.7mm, written to one decimal place. An answer given to two decimal places (16.74) should not receive the final mark.',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2019-p1/q5-shingle-size-data.jpg',
            alt: 'Table showing mean shingle size in millimetres at five coastal sites: Site 1, 8.1; Site 2, 14.5; Site 3, 16.1; Site 4, 15.0; Site 5, 30.0',
            caption: 'Figure 5a — Coastal data collected by a group of students' }
        ]
      },
      {
        label: 'June 2019 P1 — Question 5(a)(iv)',
        question:
          'Using the data in Figure 5a, state the mean shingle size values that should be plotted for Site 1 and Site 4 on a bar chart of shingle size along the coastline.',
        marks: 2,
        markScheme:
          'One mark for Site 1 = 8.1mm. One mark for Site 4 = 15.0mm. (On the original bar chart the Site 1 bar should sit between the 8 and 9 gridlines, and the Site 4 bar should sit exactly on the 15 gridline.)',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2019-p1/q5-shingle-size-data.jpg',
            alt: 'Table showing mean shingle size in millimetres at five coastal sites: Site 1, 8.1; Site 2, 14.5; Site 3, 16.1; Site 4, 15.0; Site 5, 30.0',
            caption: 'Figure 5a — Coastal data collected by a group of students' }
        ]
      },
      {
        label: 'June 2019 P1 — Question 5(a)(v)',
        question:
          'Site 5 shows an anomalous result in Figure 5a. Suggest one possible explanation for this.',
        marks: 2,
        markScheme:
          'One mark for an initial reason, a second mark for developing/explaining it. E.g. human error measuring or calculating the mean (1) which made the sediment appear larger than it really was (1); the sample was taken somewhere sheltered from wave action, such as near a groyne (1), which would give a different energy profile (1); a recent rockfall at Site 5 (1) meant the sediment was larger/less eroded than at other sites (1); a change in the direction of the coast (1) causing different sediment sizes to be deposited (1); or human activity such as beach replenishment (1) moving sediment from one location to another (1). Any other reasonable, developed explanation is acceptable.',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2019-p1/q5-shingle-size-data.jpg',
            alt: 'Table showing mean shingle size in millimetres at five coastal sites: Site 1, 8.1; Site 2, 14.5; Site 3, 16.1; Site 4, 15.0; Site 5, 30.0',
            caption: 'Figure 5a — Coastal data collected by a group of students' }
        ]
      },
      {
        label: 'June 2019 P1 — Question 5(b)',
        question:
          'To extend the coastal study, students were asked to use one additional quantitative technique and one additional qualitative technique. Describe the two additional fieldwork techniques the students may have selected.',
        marks: 4,
        markScheme:
          'One mark for identifying a suitable technique and a second mark for a developed description, for both the quantitative and the qualitative technique (4 marks total). Quantitative example: completing a beach profile at each site (1), using ranging poles placed at the top and bottom of the beach to measure the gradient (1). Qualitative example: field sketches to record the main features of the beach at different sites (1), which helps identify differences between sites (1). Any other appropriate quantitative/qualitative technique, properly developed, is acceptable.'
      },
      {
        label: 'June 2019 P1 — Question 5(c)',
        question:
          'Thinking about a coastal environment you have studied as part of your own geographical enquiry, evaluate the effectiveness of the data collection methods used in responding to the purpose of the study. Include your enquiry question if you can remember it.',
        marks: 8,
        markScheme:
          'Marked as a levels-based extended answer (Level 1: 1–3 marks, Level 2: 4–6 marks, Level 3: 7–8 marks). Strong answers give a balanced, well-developed evaluation that links clearly back to the student\'s own coastal enquiry throughout — considering the range and depth of data collection techniques used, whether the methods matched the purpose of the study, any equipment or human error, whether the sampling design (number/location of sites, time of year) was appropriate, how accurate and reliable the results were, and how the methods could have been improved. Weaker answers describe techniques generically without evaluating them or without clearly linking to the student\'s own enquiry. Do not penalise a missing enquiry question — credit is for the quality of the evaluation.'
      }
    ]
  },
  /* ---------------- Investigating Rural Environments — June 2019 Paper 2 ---------------- */
  {
    topic: 'Investigating Rural Environments — June 2019 Paper 2',
    questions: [
      {
        label: 'June 2019 P2 — Question 5(a)(i)',
        question:
          'You have studied rural environments as part of your own geographical enquiry. State one type of secondary data you used in your geographical enquiry.',
        marks: 1,
        markScheme:
          'Any one type of secondary data source, e.g. newspapers, a GIS map or paper map, a book or magazine, a government report or policy document, or a blog/forum/social media post. Any other reasonable secondary data source is acceptable.'
      },
      {
        label: 'June 2019 P2 — Question 5(a)(ii)',
        question:
          'Explain one way this secondary data helped you when investigating rural environments.',
        marks: 2,
        markScheme:
          'One mark for a reason and a second mark for developing/explaining it, up to 2 marks. E.g. it allowed the student to find out about the spatial variation in the area of study (1), so they knew they would get good spatial coverage to minimise bias (1); or population/census data was used to design a fair sampling frame for the questionnaire (1), ensuring the sample reflected the community being studied (1). No credit for simply restating the type of secondary data used.'
      },
      {
        label: 'June 2019 P2 — Question 5(b)',
        question:
          'State the title of your geographical enquiry. Explain one reason why this title was suitable for your geographical enquiry.',
        marks: 2,
        markScheme:
          'Award 1 mark for identifying a reason why the enquiry title was suitable and a further mark for development, up to 2 marks. Reasons should link to how well the location and/or a theory or model matched the title, or to how manageable and achievable the title was, e.g. the enquiry was linked to a location such as a village close to the school (1), so the data collected would help answer the enquiry title (1); or a model such as the rural-urban fringe, or a theory of rural change, allowed the student to test an idea (1), so the title and focus of the enquiry were established to challenge the assumptions of the model (1); or the title was both manageable and achievable (1), meaning the primary data could be designed to fully answer the title set (1). No credit for simply restating the title of the enquiry.'
      },
      {
        label: 'June 2019 P2 — Question 5(c)',
        question:
          'Explain one limitation of a method that you used to collect quantitative data.',
        marks: 3,
        markScheme:
          'One mark for identifying a limitation of a method used to collect quantitative data, and up to two further marks for explaining the consequence, to a maximum of 3 marks. E.g. an Environmental Quality Assessment (EQA) scale only runs from -5 to +5 and is uncalibrated (1), so scores recorded by different people can vary (1), which causes inaccuracies when comparing sites (1); or a poorly designed closed-question questionnaire has the potential for errors to be introduced (1), for example through an inappropriate sequencing of questions (1), which would cause inaccurate findings to be recorded (1). Any other reasonable, developed limitation of a quantitative method is acceptable. (Interviews and photographs are qualitative methods and should not be credited here; questionnaires may be credited as quantitative.)'
      },
      {
        label: 'June 2019 P2 — Question 5(d)',
        question:
          'Explain two methods you used to analyse some of your fieldwork data.',
        marks: 4,
        markScheme:
          'One mark for identifying a method used to analyse fieldwork data and a second mark for developing it, for each of two methods (4 marks total). E.g. quantitative tools such as the mean and median were used (1) so the student could find measures of centrality in the data (1); annotated sketches based on fieldwork photographs were used (1), with the selected annotations highlighting processes operating in the area (1); or a computer spreadsheet was used to calculate the spread and range in questionnaire data (1), allowing the student to compare outcomes between the two sample sites (1). Any other reasonable analysis method, properly developed, is acceptable — presentation techniques may be credited where clearly used in the context of analysis.'
      },
      {
        label: 'June 2019 P2 — Question 5(e)',
        question:
          'Study Figures 5a and 5b in the Resource Booklet. They show two different data presentation techniques from a student\'s fieldwork into the use of rural environments. The aim of the student\'s investigation was to identify attitudes towards the plans for a new tourist development in the New Territories, Hong Kong. The student carried out two different types of surveys into people\'s opinions and attitudes towards the proposed tourist development. Evaluate the student\'s data presentation techniques.',
        marks: 8,
        markScheme:
          'Marked as a levels-based extended answer (Level 1: 1–3 marks, Level 2: 4–6 marks, Level 3: 7–8 marks). Strong answers evaluate both data presentation techniques with clear, well-developed judgements supported by evidence throughout, referring specifically to Figures 5a and 5b and to the aim of the enquiry (attitudes to a proposed tourist development in the New Territories, Hong Kong). Relevant points include: both figures do show real outcomes from the fieldwork surveys, so some sense can be made of the student\'s findings; Figure 5a\'s table has no column showing the total responses in each opinion category (only totals per question are given), no "strongly agree" category is offered, and the colour coding may be a poor choice for this type of data; Figure 5b (the two speech-bubble quotes) shows only two opinions when there may have been more, gives no indication of how the two people were selected, and shows nothing about where or when the interviews took place — so both techniques may be biased, incomplete, or otherwise limited in how far they can be trusted. Weaker answers describe the figures generically without evaluating their strengths or limitations, or without linking clearly to the enquiry\'s aim.',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2019-p2/q5-fig5a-5b-tourist-survey-interview.png',
            alt: 'Figure 5a: a table of questionnaire survey responses (strongly disagree, slight disagreement, not sure, slight agreement) for 8 questions about a proposed tourist development, with a total for each question. Figure 5b: two speech-bubble quotes from an interview — a resident worried about noise and the development going wrong, and a local businessman wanting more visitors from Hong Kong to grow local businesses.',
            caption: 'Figures 5a and 5b — Resource Booklet, questionnaire and interview results on a proposed tourist development in the New Territories, Hong Kong' }
        ]
      }
    ]
  },
  /* ---------------- Investigating Coastal Environments — June 2021 Paper 1 ----------------
     No official Pearson mark scheme was available for this series, so the
     marking guidance below was written in-house to a similar standard —
     see the file header comment. */
  {
    topic: 'Investigating Coastal Environments — June 2021 Paper 1',
    questions: [
      {
        label: 'June 2021 P1 — Question 5(a)(i)',
        question:
          'Identify the correct definition of systematic sampling. A Collecting data at random sites along a coastline. B Collecting data every 100m along a coastline. C Collecting data from two different coastlines. D Collecting data from three sites along a coastline.',
        marks: 1,
        markScheme:
          'The correct answer is B. Systematic sampling means collecting data at regular, evenly-spaced intervals (e.g. every 100m) along a coastline, rather than at random locations (A), from multiple different coastlines (C), or from a fixed small number of sites regardless of spacing (D). Award the mark for identifying B, or for clearly describing sampling at even/regular fixed intervals along the coastline.'
      },
      {
        label: 'June 2021 P1 — Question 5(a)(ii)',
        question:
          'Name one piece of equipment you would use to measure beach gradient.',
        marks: 1,
        markScheme:
          'Any one valid piece of equipment used to measure the slope/gradient of a beach, e.g. a clinometer, ranging poles used together with a clinometer, a surveyor’s/Abney level, or a smartphone clinometer app. A quadrat, tape measure alone, or callipers should not be credited, as these measure sediment or distance rather than gradient/angle.'
      },
      {
        label: 'June 2021 P1 — Question 5(a)(iii)',
        question:
          'Describe one health and safety risk it is important to be aware of when carrying out fieldwork in a coastal environment.',
        marks: 2,
        markScheme:
          'One mark for identifying a plausible risk specific to a coastal environment, e.g. slipping on wet rocks or seaweed, being cut off by an incoming tide, strong currents/rip tides, falling from unstable cliffs, sunburn/heat exhaustion, or cold-water shock. A second mark for describing/developing that risk with a specific consequence or detail, e.g. ‘an incoming tide can cut off the route back to shore, trapping students on rocks or in a cove’, or ‘wet rocks and seaweed are very slippery underfoot, which could cause a student to fall and be injured’. A risk named with no development scores 1 mark only.'
      },
      {
        label: 'June 2021 P1 — Question 5(b)',
        question:
          'Study Figure 5 in the Resource Booklet. It shows information about some design, some data collection methods used, data presentation and a conclusion. The aim of the student’s investigation was to examine change in beach characteristics along the stretch of coastline. Evaluate how far the design and the data collection methods provided reliable evidence for the student’s conclusions.',
        marks: 8,
        markScheme:
          'Marked as a levels-based extended answer (Level 1: 1–3 marks, Level 2: 4–6 marks, Level 3: 7–8 marks). Strong answers give a balanced, well-developed evaluation that refers specifically to Figure 5a (the data collection methods) and Figure 5b (the beach profiles and conclusions), and link clearly back to the stated aim throughout. Relevant points include: only two sites were used, which is a very small sample for a whole ‘stretch of coastline’ and is unlikely to be representative, so Conclusion 1 (that characteristics changed along the coastline) is not strongly supported by only two data points; gradient, sediment shape and sediment size were all collected, which is an appropriate range of quantitative/qualitative techniques for a beach investigation, giving some support to Conclusion 2; however, no information is given about how the two sites were chosen, how many measurement points were taken across each profile, what specific equipment was used, or whether the same method/person was used at both sites, all of which affect reliability and repeatability; the beach profile graphs (Figure 5b) show the two sites to be broadly similar in overall shape, which reasonably supports Conclusion 2, though Site 2 shows a more irregular profile with a dip around 12–16m that is not explained, raising questions about measurement accuracy or a genuine feature being under-investigated; Conclusion 3 (little difference in sediment size) cannot actually be evaluated from Figure 5b at all, since no sediment size data is shown or presented there, so this conclusion is not well supported by the evidence given; weather conditions, tide state, and possible human/measurement error are not mentioned anywhere in the design, which further limits confidence in the results. Weaker answers describe the figures or the conclusions generically without evaluating whether the design/methods actually support them, or without referring to the resource booklet at all.',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p1/q5-fig5a-data-collection.png',
            alt: 'Extract from data collection methods: at two different sites along a beach chosen at random on a map, measure gradient of the beach at set distances, record sediment shape, and measure sediment size.',
            caption: 'Figure 5a — Extract from data collection methods' },
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p1/q5-fig5b-beach-profiles-conclusions.png',
            alt: 'Two beach profile line graphs (height in metres against distance from the sea in metres, 0-20m) for Site 1 and Site 2, both rising from the sea before flattening and rising again near the back of the beach, plus a table of three conclusions about how beach characteristics and sediment size changed along the coastline.',
            caption: 'Figure 5b — An extract from the student’s data presentation and conclusion' }
        ]
      }
    ]
  },
  /* ---------------- Economic Activity and Energy — June 2021 Paper 2 ----------------
     Pearson Edexcel IGCSE Geography Paper 2 (4GE1/02), June 2021, Question 1
     (Section A, 25 marks). Marking guidance is grounded in the official
     Pearson mark scheme (4GE1_02_2106_MS). Figure 1a (a photograph of an
     adapted house) is described in the question text rather than shown as
     an image, since it is a copyrighted exam photograph — the description
     covers everything a student needs to answer part (b). Figures 1b and
     1c are data charts, recreated as clean graphics from the exact figures
     and data printed in the question paper/resource booklet. */
  {
    topic: 'Economic Activity and Energy — June 2021 Paper 2',
    questions: [
      {
        label: 'June 2021 P2 — Question 1(a)(i)',
        question: 'Define the term ‘energy security’.',
        marks: 1,
        markScheme:
          'Award 1 mark for a suitable definition, e.g. ‘the ability to provide sufficient, affordable and consistent energy supplies to match demand’, or ‘the ability of a country to secure sufficient, affordable and consistent energy supplies’. Accept any other appropriate response which refers to just one aspect of energy security (sufficiency, affordability, or consistency/reliability of supply).'
      },
      {
        label: 'June 2021 P2 — Question 1(a)(ii)',
        question:
          'Identify the two forms of non-renewable energy. A Coal. B Hydroelectric. C Geothermal. D Oil. E Solar. F Wind.',
        marks: 2,
        markScheme:
          'A – Coal (1) and D – Oil (1). B, C, E and F are incorrect as they are all renewable sources of energy. Award 1 mark for each correct option identified, up to a maximum of 2.'
      },
      {
        label: 'June 2021 P2 — Question 1(b)',
        question:
          'Figure 1a in the Resource Booklet is a photograph of a two-storey detached house adapted for more sustainable energy consumption. The roof, which faces the camera at an angle, is covered along most of its length by a bank of dark solar photovoltaic panels, with a couple of small roof windows/skylights set into it. The ground floor has a very large area of floor-to-ceiling glazing (tall windows and glass doors) across the rear/side of the house, and the upper floor has ordinary-sized windows and a small balcony with railings. The house sits on a well-kept lawn with mature trees around it. Suggest one way this house has been adapted to manage energy consumption.',
        marks: 2,
        markScheme:
          'Award 1 mark for identification of an adaptation method evident from the description of the photograph, and a further 1 mark for extension through explanation, up to a maximum of 2 marks. E.g. ‘Solar panels (1) have been installed to reduce reliance on energy from the national grid (1).’ ‘Large/floor-to-ceiling windows (1) to maximise temperature/light gains from sunlight during the day (1).’ ‘Roof windows/skylights (1) to bring in natural daylight and reduce the need for electric lighting (1).’ Accept any other appropriate response plausibly inferred from the description, e.g. reference to the windows likely being double-glazed to reduce heat loss.'
      },
      {
        label: 'June 2021 P2 — Question 1(c)(i)',
        question: 'State one characteristic of the tertiary economic sector.',
        marks: 1,
        markScheme:
          'Award 1 mark for any of the following: usually involves provision of services; can involve selling goods and products from primary and secondary industries; dominant in developed countries; workers usually need to be highly skilled/qualified; white-collar workers. Do not accept a job that would usually be found in the tertiary sector unless it is linked to a characteristic, e.g. ‘a teacher working in a school, providing education’. Accept any other appropriate response.'
      },
      {
        label: 'June 2021 P2 — Question 1(c)(ii)',
        question: 'Explain two factors that affect the location of tertiary sector activities.',
        marks: 4,
        markScheme:
          'Award 1 mark for a suitable factor that affects the location of tertiary industries, and a further mark for a development of this point, up to a maximum of 2 marks per factor (4 marks total). E.g. ‘Transport links (1) to ensure workers can access the site (1).’ ‘Fast communications provision (1) as usually telecommunications are an important component of operations (1).’ ‘Access to skilled labour (1) to ensure suitable workers are available (1).’ ‘Reliable power supply (1) as often this is needed for the technology involved (1).’ ‘Access to market (1) to ensure it remains profitable (1).’ Accept any other appropriate response. Both factors must be different and each must be developed separately to gain full credit.'
      },
      {
        label: 'June 2021 P2 — Question 1(d)(i)',
        question:
          'Study Figure 1b. It shows employment structures (primary, secondary and tertiary/quaternary) for the United Kingdom, Brazil and India in 1991 and 2018. Identify which pie chart shows the largest percentage for secondary sector employment. State the country, the year, and the percentage.',
        marks: 1,
        markScheme:
          'Award 1 mark for identifying India, 2018, 42% as the pie chart with the largest percentage for secondary sector employment. For reference, the secondary (manufacturing) percentages shown across all six pie charts are: United Kingdom 1991 = 31%, United Kingdom 2018 = 18%, Brazil 1991 = 20%, Brazil 2018 = 21%, India 1991 = 15%, India 2018 = 42%. Only India 2018 (42%) should be credited as the correct answer.',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p2/q1-fig1b-employment-pie-charts.png',
            alt: 'Six pie charts showing employment structures (primary, secondary, tertiary/quaternary) for the United Kingdom, Brazil and India in 1991 and 2018. United Kingdom: 1991 primary 2%, secondary 31%, tertiary/quaternary 67%; 2018 primary 1%, secondary 18%, tertiary/quaternary 81%. Brazil: 1991 primary 28%, secondary 20%, tertiary/quaternary 52%; 2018 primary 10%, secondary 21%, tertiary/quaternary 69%. India: 1991 primary 63%, secondary 15%, tertiary/quaternary 22%; 2018 primary 24%, secondary 42%, tertiary/quaternary 34%.',
            caption: 'Figure 1b — Employment structures for selected countries in 1991 and 2018' }
        ]
      },
      {
        label: 'June 2021 P2 — Question 1(d)(ii)',
        question:
          'Study Figure 1b again. Identify which one of the following is correct. A Brazil’s employment in the tertiary/quaternary sectors has increased by 12 percentage points. B India’s employment in the tertiary/quaternary sectors has increased by 12 percentage points. C The UK’s employment in the primary sector has decreased by 12 percentage points. D India’s employment in the primary sector has decreased by 12 percentage points.',
        marks: 1,
        markScheme:
          'B is correct — India’s employment in the tertiary/quaternary sectors increased from 22% in 1991 to 34% in 2018, a rise of 12 percentage points. All the other options are incorrect: Brazil’s tertiary/quaternary share rose from 52% to 69% (a 17-point rise, not 12); the UK’s primary sector fell from 2% to 1% (a 1-point fall, not 12); India’s primary sector fell from 63% to 24% (a 39-point fall, not 12).',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p2/q1-fig1b-employment-pie-charts.png',
            alt: 'Six pie charts showing employment structures (primary, secondary, tertiary/quaternary) for the United Kingdom, Brazil and India in 1991 and 2018. United Kingdom: 1991 primary 2%, secondary 31%, tertiary/quaternary 67%; 2018 primary 1%, secondary 18%, tertiary/quaternary 81%. Brazil: 1991 primary 28%, secondary 20%, tertiary/quaternary 52%; 2018 primary 10%, secondary 21%, tertiary/quaternary 69%. India: 1991 primary 63%, secondary 15%, tertiary/quaternary 22%; 2018 primary 24%, secondary 42%, tertiary/quaternary 34%.',
            caption: 'Figure 1b — Employment structures for selected countries in 1991 and 2018' }
        ]
      },
      {
        label: 'June 2021 P2 — Question 1(d)(iii)',
        question:
          'Using Figure 1b, state one reason for the decline in primary sector employment shown for India between 1991 and 2018.',
        marks: 1,
        markScheme:
          'Award 1 mark for a suitable reason: increased mechanisation; industrialisation; rural to urban migration; exhaustion of raw materials; increased level of education for the local population. Accept any other appropriate response.',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p2/q1-fig1b-employment-pie-charts.png',
            alt: 'Six pie charts showing employment structures (primary, secondary, tertiary/quaternary) for the United Kingdom, Brazil and India in 1991 and 2018. India: 1991 primary 63%, secondary 15%, tertiary/quaternary 22%; 2018 primary 24%, secondary 42%, tertiary/quaternary 34%.',
            caption: 'Figure 1b — Employment structures for selected countries in 1991 and 2018' }
        ]
      },
      {
        label: 'June 2021 P2 — Question 1(e)',
        question: 'For a named megacity, explain two advantages of informal employment.',
        marks: 4,
        markScheme:
          'Award 1 mark for identification of an advantage of informal employment and an additional 1 mark for development through further explanation or exemplification, up to a maximum of 2 marks per advantage (4 marks total). Maximum of 2 marks awarded overall when no named megacity is given. Responses will vary depending on the megacity chosen. E.g. [Mumbai]: ‘Working as a rickshaw driver provides opportunity for income (1) without having to pay taxes (1).’ ‘Selling street food in Dharavi (1) without needing a fixed building to sell produce, which means they don’t need to pay rent (1).’ Accept any other appropriate response, provided a real megacity is named and the advantages are plausibly linked to informal employment there.'
      },
      {
        label: 'June 2021 P2 — Question 1(f)',
        question:
          'Study Figure 1c. It is a graph showing energy use (kg of oil equivalent per capita) and GDP per capita (US$) in China between 1980 and 2014, alongside a note that China’s population grew from 0.98 billion in 1980 to 1.371 billion in 2014. Analyse the possible reasons why energy consumption has grown.',
        marks: 8,
        markScheme:
          'Marked as a levels-based extended answer combining AO3 (understanding/analysis) and AO4 (use of the figure), worth 4 marks each within an overall level (Level 1: 1–3 marks, Level 2: 4–6 marks, Level 3: 7–8 marks). The indicative content below is not prescriptive — other relevant, well-explained points must also be credited. AO3 (understanding): as an emerging country, China’s energy use has been increasing at a rapid rate to fuel industrialisation and expansion of the economy — as countries develop, their need for energy grows; China has also experienced rapid growth in population over the last few decades (0.98 billion in 1980 to 1.371 billion in 2014), and such growth in population will cause an increase in energy demand; as the country industrialises it has a greater need for energy for industry and technology, from coal power plants to high-tech industries; as the country’s income rises, as indicated by GDP per capita, populations often desire more consumer goods, many of which require energy in their manufacture; increased wealth is often associated with increased car ownership, for example, which creates more demand for energy which, given the size of China’s population, gives good justification for the rate of growth shown in energy use. AO4 (use of Figure 1c): Figure 1c shows an increase in energy use and GDP per capita in China across several decades; the two pieces of data follow a similar trend of slow growth in the 1980s and 1990s; energy use begins to rapidly increase from 2000, followed by GDP from 2005; Figure 1c shows how the rate of growth of GDP has been rapid for China since 2005; the rate of growth for energy use has slowed down slightly between 2010 and 2014. Strong (Level 3) answers apply understanding to deconstruct the figure with logical connections between concepts throughout, giving a balanced, well-developed analysis that uses accurate information from Figure 1c to support all aspects of the argument. Weaker (Level 1) answers make limited, flawed, or unbalanced connections and use the figure only superficially.',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p2/q1-fig1c-energy-gdp-graph.png',
            alt: 'Dual-axis line graph showing energy use (kg of oil equivalent per capita, rising from about 610 in 1980 to 2250 in 2014, with the steepest rise from 2000 onwards) and GDP per capita in US dollars (rising from about 100 in 1980 to 7600 in 2014, with the steepest rise from 2005 onwards) in China between 1980 and 2014, alongside a note that China’s population grew from 0.98 billion in 1980 to 1.371 billion in 2014.',
            caption: 'Figure 1c — Energy use and GDP per capita in China, 1980–2014' }
        ]
      }
    ]
  },
  /* ---------------- Rural Environments — June 2021 Paper 2 ----------------
     Pearson Edexcel IGCSE Geography Paper 2 (4GE1/02), June 2021, Question 2
     (Section A, 25 marks). Marking guidance is grounded in the official
     Pearson mark scheme (4GE1_02_2106_MS). Figure 2a (a photograph of a
     dairy farm) is described in the question text rather than shown as an
     image, since it is a copyrighted exam photograph. Figures 2b and 2c
     are data charts, recreated as clean graphics from the exact figures
     and data printed in the question paper/resource booklet. */
  {
    topic: 'Rural Environments — June 2021 Paper 2',
    questions: [
      {
        label: 'June 2021 P2 — Question 2(a)(i)',
        question: 'Define the term ‘organic farming’.',
        marks: 1,
        markScheme:
          'Award 1 mark for a suitable definition, e.g. ‘farming processes that do not use artificial chemicals’, or ‘using organic fertilisers and pesticides to grow food’. Accept any other appropriate response. Do not accept ‘farming organically’ (circular/no definition given).'
      },
      {
        label: 'June 2021 P2 — Question 2(a)(ii)',
        question:
          'Identify the two forms of farm diversification. A Buying more land. B Buying more tractors. C Creating a farm shop. D Increasing irrigation. E Using more fertiliser. F Opening a bed and breakfast for tourists.',
        marks: 2,
        markScheme:
          'C – Creating a farm shop (1) and F – Opening a bed and breakfast for tourists (1). A, B, D and E are all incorrect as they focus on increasing agricultural production rather than diversifying the farm’s income. Award 1 mark for each correct option identified, up to a maximum of 2.'
      },
      {
        label: 'June 2021 P2 — Question 2(b)',
        question:
          'Figure 2a in the Resource Booklet is a photograph of a dairy farm. It shows three people (an older man, a woman and a young girl) standing in a field of low, leafy crop rows, each holding a small punnet/box of freshly picked strawberries, with open green fields and trees in the background. Suggest one way this dairy farm has diversified its income.',
        marks: 2,
        markScheme:
          'Award 1 mark for a suitable way relevant to the description of the photograph, and a further 1 mark for extension through explanation, up to a maximum of 2 marks. E.g. ‘Allowing people to visit the farm to pick strawberries (1) to gain additional income not provided by cows (1).’ ‘Switched to producing/growing other crops such as strawberries alongside dairy farming (1) to protect against falls in the price of dairy products (1).’ Accept any other appropriate response plausibly inferred from the description, e.g. that there are no longer cows visible/mentioned, or that this looks like a pick-your-own/farm-shop type activity.'
      },
      {
        label: 'June 2021 P2 — Question 2(c)(i)',
        question: 'State one factor leading to rural isolation.',
        marks: 1,
        markScheme:
          'Award 1 mark for any of the following: rural decline; shortage of workers in some rural areas; increased need for technology; closure of village services / closure of village post office / closure of local school; loss of bus routes; poor internet access. Accept any other appropriate response.'
      },
      {
        label: 'June 2021 P2 — Question 2(c)(ii)',
        question: 'Explain two ways tourist pressure is affecting rural areas.',
        marks: 4,
        markScheme:
          'Award 1 mark for each suitable way tourists are affecting rural areas, with a further mark for explanation, up to a maximum of 2 marks for each (4 marks total). E.g. ‘Increased number of tourists are causing pressures on services (1) which means local people’s lives are affected (1).’ ‘In national parks footpaths are being damaged (1) which means increased costs for maintenance (1).’ ‘Increased traffic in small villages (1) causing congestion (1).’ ‘Litter being left by tourists (1) damaging the natural beauty (1).’ Accept any other appropriate response. Both ways must be different and each must be developed separately to gain full credit.'
      },
      {
        label: 'June 2021 P2 — Question 2(d)(i)',
        question:
          'Study Figure 2b. It shows global urban and rural populations as percentages, 1980–2017. Identify the year with the largest urban population percentage, and state that percentage.',
        marks: 1,
        markScheme:
          'Award 1 mark for identifying 2017 (64.7% urban) as the year with the largest urban population percentage shown in Figure 2b. For reference, the urban percentages shown are: 1980 = 42.8%, 1985 = 45.3%, 1990 = 47.9%, 1995 = 51.1%, 2000 = 54.4%, 2005 = 57.5%, 2010 = 60.6%, 2015 = 63.5%, 2017 = 64.7%. Only 2017 should be credited as the correct answer, since the urban percentage rises steadily throughout the whole time series.',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p2/q2-fig2b-urban-rural-population.png',
            alt: '100% stacked bar chart of global urban (dark) and rural (white) population percentages for 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015 and 2017. Urban percentage rises steadily from 42.8% in 1980 to 64.7% in 2017, while rural percentage falls from 57.2% to 35.3% over the same period, with urban overtaking rural between 1990 (47.9% urban) and 1995 (51.1% urban).',
            caption: 'Figure 2b — Global urban and rural populations, 1980–2017' }
        ]
      },
      {
        label: 'June 2021 P2 — Question 2(d)(ii)',
        question:
          'Study Figure 2b again. Identify the year in which the urban population first becomes larger than the rural population. A 1985. B 1995. C 2005. D 2017.',
        marks: 1,
        markScheme:
          'B is correct — 1995 (51.1% urban, 48.9% rural) is the first year shown in which the urban percentage exceeds the rural percentage; in 1990 urban was still smaller than rural (47.9% vs 52.1%). A is incorrect because in 1985 the rural area/population is still larger than urban. C and D are incorrect because they are later years, after urban had already overtaken rural.',
          images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p2/q2-fig2b-urban-rural-population.png',
            alt: '100% stacked bar chart of global urban (dark) and rural (white) population percentages, 1980-2017. Urban overtakes rural between 1990 (47.9% urban, 52.1% rural) and 1995 (51.1% urban, 48.9% rural).',
            caption: 'Figure 2b — Global urban and rural populations, 1980–2017' }
        ]
      },
      {
        label: 'June 2021 P2 — Question 2(d)(iii)',
        question: 'State one factor leading to rural-urban migration.',
        marks: 1,
        markScheme:
          'Award 1 mark for any of the following: lack of employment; rural decline/isolation; better jobs in the city; lack of access to education; lack of transport. Accept any other appropriate response.'
      },
      {
        label: 'June 2021 P2 — Question 2(e)',
        question: 'For a named developing or emerging country, explain two environmental challenges facing rural areas.',
        marks: 4,
        markScheme:
          'Award 1 mark for each initial explanation of an environmental challenge facing rural areas and an additional mark for development through further explanation or exemplification, up to a maximum of 2 marks per challenge (4 marks total). Maximum of 2 marks awarded overall when no named developing/emerging country is given. A range of countries could be used. E.g. [Kenya]: ‘Increasing frequency of droughts (1) has led to reduced food supplies (1).’ ‘Environmental degradation (1) due to poverty (1).’ [China]: ‘Rural areas have been damaged by natural disasters such as floods and earthquakes (1) and often emergency aid for rural areas is limited as priority is given to urban areas (1).’ ‘Salination of water supplies due to over irrigation (1) is reducing rice yields (1).’ Accept any other appropriate response, provided a real developing/emerging country is named.'
      },
      {
        label: 'June 2021 P2 — Question 2(f)',
        question:
          'Study Figure 2c. It shows the production (million tons) and export value (million US$) of natural rubber extracted from forests in Indonesia, 2008–2016. Analyse the importance of natural ecosystems for providing goods and services.',
        marks: 8,
        markScheme:
          'Marked as a levels-based extended answer combining AO3 (understanding/analysis) and AO4 (use of the figure), worth 4 marks each within an overall level (Level 1: 1–3 marks, Level 2: 4–6 marks, Level 3: 7–8 marks). The indicative content below is not prescriptive — other relevant, well-explained points must also be credited. AO3 (understanding): natural ecosystems provide a wide variety of goods and services which can provide significant economic benefit to a country; goods from natural ecosystems that may be discussed include timber for building, fuelwood, food (for humans and animals), ingredients for medicine, and water; for many developing and emerging countries these goods provide an important proportion of the economy’s income, fuelling the development process; while the economic benefit of goods from natural ecosystems (such as natural rubber) are more easily measured, the services they provide are less easy to measure but could be argued to be more important; natural ecosystem services that may be discussed include removal of air pollutants, emission of oxygen, recycling of nutrients, recycling water, and maintaining biodiversity — some services can even provide a more direct economic benefit, such as leisure opportunities through tourism. AO4 (use of Figure 2c): Figure 2c shows the gradual increase in natural rubber production over time from forests in Indonesia; Figure 2c shows how the export value of natural rubber has varied but with an overall decrease since 2008; Figure 2c shows how, despite increases in production, the value of goods from natural ecosystems (in this case natural rubber) can vary quite significantly from year to year; Figure 2c shows a significant drop in the export value of natural rubber after 2011; Figure 2c indicates that the export value of natural rubber is not constant despite increases in production. Strong (Level 3) answers apply understanding to deconstruct the figure with logical connections between concepts throughout, giving a balanced, well-developed analysis that uses accurate information from Figure 2c to support all aspects of the argument. Weaker (Level 1) answers make limited, flawed, or unbalanced connections and use the figure only superficially.',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p2/q2-fig2c-rubber-production-export.png',
            alt: 'Dual-axis line graph showing natural rubber production in million tons (rising fairly steadily from about 2.7 in 2008 to about 3.65 in 2016, with a dip in 2009) and export value of natural rubber in million US dollars (rising from about 6.7 in 2008 to a peak of about 11.8 in 2011, then falling fairly steadily to about 3.5 by 2016) for forests in Indonesia, 2008-2016.',
            caption: 'Figure 2c — Production and export value of natural rubber extracted from forests in Indonesia, 2008–2016' }
        ]
      }
    ]
  },
  /* ---------------- Investigating Rural Environments — June 2021 Paper 2 ----------------
     Pearson Edexcel IGCSE Geography Paper 2 (4GE1/02), June 2021, Question 5
     (Section B, "Geographical enquiry", 12 marks). Marking guidance is
     grounded in the official Pearson mark scheme (4GE1_02_2106_MS).
     Figure 5a (a photograph of a new rural development) is described in
     the question text rather than shown as an image, since it is a
     copyrighted exam photograph. Figures 5b (the Resource Booklet data
     table) and 5c (the bar chart printed in the question paper, which
     students had to complete using Figure 5b) are recreated together as
     one clean, fully-completed chart. */
  {
    topic: 'Investigating Rural Environments — June 2021 Paper 2',
    questions: [
      {
        label: 'June 2021 P2 — Question 5(a)(i)',
        question:
          'Figure 5a in the Resource Booklet is an aerial photograph of a rural area. It shows a river bending through open green fields on one side, with scattered older houses nearby, while on the other side of the river a cluster of tall, multi-storey apartment/residential buildings is under construction, surrounded by construction equipment, access roads and bare earth. State one piece of secondary data that would be useful to investigate this rural environment.',
        marks: 1,
        markScheme:
          'Award 1 mark for a suitable piece of secondary data, e.g. newspaper articles about the area; local data on rural populations; census data; a leaflet from an interested pressure group; planning application documents/maps for the new development. Accept any other appropriate response.'
      },
      {
        label: 'June 2021 P2 — Question 5(a)(ii)',
        question: 'Explain why photographs are a useful source of primary data.',
        marks: 2,
        markScheme:
          'Award 1 mark for an initial point and a further mark for explanation, up to 2 marks. E.g. ‘Can capture lots of detail (1) which means they can be examined properly after the fieldtrip has ended (1).’ ‘Provides an accurate representation of the site (1) at that point in time (1).’ ‘Can be used to capture the state of the site at the present time (1) which can be used to compare to historical photographs (1).’ ‘Easy to annotate to show details (1) so can help with analysis (1).’ Accept any other appropriate response. Do not accept ‘easy to take’ on its own.'
      },
      {
        label: 'June 2021 P2 — Question 5(b)(i)',
        question:
          'Figure 5c below shows data from an environmental quality survey carried out in five sites around a new development in a rural area, using the environmental quality indicators (building condition, road quality, noise, litter and air pollution) shown in Figure 5b in the Resource Booklet, each scored from 1 (poor) to 5 (good). State the total environmental quality score values that should be plotted for Site 1 and Site 2 on the bar chart in Figure 5c, using the data in Figure 5b.',
        marks: 2,
        markScheme:
          'Award 1 mark for each correctly stated value: Site 1 = 20 (1); Site 2 = 15 (1).',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p2/q5-fig5b-5c-quality-survey.png',
            alt: 'Table of an environmental quality survey (building condition, road quality, noise, litter, air pollution, each scored 1-5) for five sites around a new rural development, with total scores Site 1 = 20, Site 2 = 15, Site 3 = 13, Site 4 = 23, Site 5 = 10, plus a completed bar chart of these five total scores.',
            caption: 'Figures 5b and 5c — Environmental quality survey data for a new development in a rural area' }
        ]
      },
      {
        label: 'June 2021 P2 — Question 5(b)(ii)',
        question: 'Identify the type of graph shown in Figure 5c. A Bar. B Line. C Pie. D Scatter.',
        marks: 1,
        markScheme: 'A – Bar is correct. All the other options are incorrect, as Figure 5c is a bar chart.'
      },
      {
        label: 'June 2021 P2 — Question 5(b)(iii)',
        question: 'Identify the site in Figure 5c that has the highest environmental quality score.',
        marks: 1,
        markScheme: 'Site 4 (score of 23) is correct — this is the highest of the five total environmental quality scores shown (Site 1 = 20, Site 2 = 15, Site 3 = 13, Site 4 = 23, Site 5 = 10).',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p2/q5-fig5b-5c-quality-survey.png',
            alt: 'Bar chart of total environmental quality scores for five sites around a new rural development: Site 1 = 20, Site 2 = 15, Site 3 = 13, Site 4 = 23, Site 5 = 10.',
            caption: 'Figure 5c — Environmental quality survey scores by site' }
        ]
      },
      {
        label: 'June 2021 P2 — Question 5(b)(iv)',
        question: 'Calculate the range in environmental quality scores. Show all your workings.',
        marks: 2,
        markScheme:
          'Award 1 mark for the calculation of the correct answer, range = 13 (1). Award 1 mark for correct method to calculate the range, 23 − 10 (1), or working out with similar numbers showing understanding of the idea of difference/subtraction between the highest and lowest values (Site 4 = 23 is the highest, Site 5 = 10 is the lowest).'
      },
      {
        label: 'June 2021 P2 — Question 5(c)',
        question: 'Explain one way you could manage a risk during fieldwork in a rural area with a new development.',
        marks: 3,
        markScheme:
          'Award 1 mark for a correct suggested way to manage a risk, with a further 2 marks for expansion, up to a maximum of 3 marks. E.g. ‘Remain alert (1) to ensure awareness for traffic/construction vehicles (1) to prevent accident (1).’ ‘Wear appropriate clothing, such as a hi-vis vest and sturdy footwear (1) to ensure visibility and safety near a construction site (1) and reduce the chance of injury (1).’ ‘Work in groups (1) to ensure safety (1) against unexpected events (1).’ Accept any other appropriate response. Note: credit ideas related to the risk of poor data collection as well as personal safety risks.'
      }
    ]
  },
  /* ---------------- Development and Human Welfare — June 2021 Paper 2 ----------------
     Pearson Edexcel IGCSE Geography Paper 2 (4GE1/02), June 2021, Question 9
     (Section C, "Global issues", 35 marks). Marking guidance is grounded
     in the official Pearson mark scheme (4GE1_02_2106_MS). Figure 9b (a
     world choropleth map of the Food Security Index) is described in the
     question text rather than shown as an image, since accurately
     redrawing a detailed country-by-country world map is not something
     that can be done reliably here — the description covers the pattern
     needed to answer parts (e) and (f). Figures 9a and 9c are data/diagram
     figures, recreated as clean graphics from the exact figures and data
     printed in the resource booklet. */
  {
    topic: 'Development and Human Welfare — June 2021 Paper 2',
    questions: [
      {
        label: 'June 2021 P2 — Question 9(a)(i)',
        question:
          'Identify the main characteristic of top down development. A Usually involves decisions at the local level. B Usually involves government decisions. C Usually involves small amounts of funding. D Usually involves the ideas of local people.',
        marks: 1,
        markScheme: 'B – Usually involves government decisions is correct. A, C and D are incorrect as they are not characteristics of top down development (they instead describe bottom-up development).'
      },
      {
        label: 'June 2021 P2 — Question 9(a)(ii)',
        question: 'Explain what is meant by the term ‘international aid’.',
        marks: 2,
        markScheme:
          'Award 2 marks for a suitable explanation. E.g. ‘Aid given from one international government or organisation to another country (1), this could be in the form of money or goods (1).’ ‘Aid given from one country to another (1) which can have conditions attached (1).’ Accept any other appropriate response.'
      },
      {
        label: 'June 2021 P2 — Question 9(a)(iii)',
        question:
          'Identify one type of project that could be created by a non-governmental organisation (NGO). A Large investments in high speed rail network. B Facilitating increases in trade between two national governments. C Improving water supplies in an informal settlement. D Large investments in national agricultural development.',
        marks: 1,
        markScheme: 'C – Improving water supplies in an informal settlement is correct. A, B and D are incorrect as they are not projects that an NGO would typically engage in (they are more typical of governments or large-scale international investment).'
      },
      {
        label: 'June 2021 P2 — Question 9(b)(i)',
        question: 'Study Figure 9a. Identify the age group with the largest population in 2015.',
        marks: 1,
        markScheme: '45–49 is correct (this age group has the largest combined male and female population bars in the 2015 pyramid in Figure 9a).',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p2/q9-fig9a-population-pyramids.png',
            alt: 'Two population pyramids for the United Kingdom, 1980 and 2015, by 5-year age group and sex, in millions. The 1980 pyramid has a wide base narrowing towards the top with a bulge around 15-19. The 2015 pyramid is more barrel-shaped/columnar with a bulge in the 45-54 age groups and a wider 80+ group than 1980, reflecting an ageing population.',
            caption: 'Figure 9a — Population pyramids for the United Kingdom, 1980 and 2015' }
        ]
      },
      {
        label: 'June 2021 P2 — Question 9(b)(ii)',
        question: 'Compare the population structures of the United Kingdom in 1980 and 2015.',
        marks: 2,
        markScheme:
          'Award 1 mark for a comparison using Figure 9a, and a further mark for additional development, up to a maximum of 2 marks. E.g. ‘The population sizes in all age groups are larger in 2015 than in 1980 (1). In 1980 only a couple of age groups for males or females reached over 2 million, whereas in 2015 there are many groups that reach over this amount (1).’ ‘There are significantly more older females in the UK in 2015 (over 2 million) (1) compared to just over 1 million in 1980 (1).’ ‘The shape of the population pyramid has changed (1) with a greater proportion of the population in older age categories as well as the younger in 2015 (1).’ Use of data is not required to obtain marks. Accept any other appropriate comparison.',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p2/q9-fig9a-population-pyramids.png',
            alt: 'Two population pyramids for the United Kingdom, 1980 and 2015. The 2015 pyramid shows larger population bars across almost every age group than 1980, is more columnar in shape, and has a noticeably wider top (older age groups, including 80+) than 1980.',
            caption: 'Figure 9a — Population pyramids for the United Kingdom, 1980 and 2015' }
        ]
      },
      {
        label: 'June 2021 P2 — Question 9(b)(iii)',
        question: 'Identify one reason for the changes in population structure between 1980 and 2015.',
        marks: 2,
        markScheme:
          'Award 1 mark for identification of a reason and a further mark for development of the reason, up to 2 marks. E.g. ‘Increased life expectancy (1) due to increases in healthcare (1).’ ‘Reduced infant mortality rate (1) which means greater amounts of the population reach the older age groups (1).’ ‘Migration of young migrants, often male (1), may shift the gender balance in younger groups (1).’ Accept any other appropriate response.'
      },
      {
        label: 'June 2021 P2 — Question 9(b)(iv)',
        question: 'Suggest one reason population structure can be an indicator of the level of development.',
        marks: 2,
        markScheme:
          'Award 1 mark for identification of a reason and a further mark for development, up to 2 marks. E.g. ‘Population structures in developing countries tend to be more pyramid shaped (1) as they usually have higher birth rates (1).’ ‘Population structures in developed countries tend to have greater proportions in older age groups (1) as health care services and medical provision can increase life expectancy (1).’ Accept any other appropriate response.'
      },
      {
        label: 'June 2021 P2 — Question 9(c)',
        question: 'State two reasons why development can be uneven within a country.',
        marks: 2,
        markScheme:
          'Award 1 mark for each reason, up to a maximum of 2 marks. E.g. transport infrastructure; provision of healthcare/education services; investment; physical landscape; government investment/establishment of enterprise zones. Accept any other appropriate response.'
      },
      {
        label: 'June 2021 P2 — Question 9(d)',
        question:
          'Explain one advantage and one disadvantage of a bottom-up development project in a named developing or emerging country.',
        marks: 4,
        markScheme:
          'Award 1 mark for initial identification of an advantage or disadvantage and an additional 1 mark for development through further explanation or exemplification, up to a maximum of 2 marks each (4 marks total). A range of country examples could be used. Advantages, e.g. ‘More likely to suit the needs of local people (1) and use appropriate technology (1).’ ‘More likely to use local people and local skills (1) which means they are more likely to be involved in maintenance later (1).’ Disadvantages, e.g. ‘Usually projects are small scale (1) so do not necessarily impact large numbers of people (1).’ ‘Cannot have a large scale impact on national systems (1) and so their potential to create long term change is minimised (1).’ Accept any other appropriate response, provided a real developing/emerging country is named.'
      },
      {
        label: 'June 2021 P2 — Question 9(e)',
        question:
          'Figure 9b is a world map showing each country’s Food Security Index score for 2017 (a higher score means a country is more food secure), grouped into bands: Below 40, 40–50, 51–60, 61–70, 71–80, and Above 80. Most of Sub-Saharan Africa and parts of South and Southeast Asia and Central America fall into the lowest bands (below 50, ‘less food secure’). Most of North America, Western Europe, and Australia fall into the highest band (above 80, ‘more food secure’). Much of South America, Eastern Europe, Russia, China and parts of the Middle East fall into the middle bands (61–70). Assess the importance of food security on the global pattern of human welfare.',
        marks: 6,
        markScheme:
          'Marked as a levels-based extended answer combining AO3 (understanding/analysis) and AO4 (use of the figure), (Level 1: 1–3 marks, Level 2: 4–6 marks). The indicative content below is not prescriptive — other relevant, well-explained points must also be credited. AO3 (understanding): food security is an important element of human welfare as it affects the ability of populations to prosper; much like many resources, the distribution of food is uneven, leading to some areas of the world being more prosperous than others; low food security is likely to lead to low human welfare, as it is a basic need — poor access to food suggests the possibility of malnutrition and poor health, which overall leads to poor standards of human welfare; food security is just one element of human welfare, which can be affected by other economic, social and environmental aspects of societies; human welfare is a complex subject which can affect the overall pattern globally, so food security alone cannot fully explain the pattern. AO4 (use of the figure): the described pattern shows the global distribution of food security; it shows how there are low levels of food security in most of Africa, South East Asia and some parts of Latin America; it shows how most of the northern hemisphere (North America, Europe) is considered more secure according to the Food Security Index; it shows how the pattern of food security broadly fits with the global north/south development divide. Strong (Level 2) answers give a balanced, well-developed assessment that synthesises understanding coherently, leading to judgements supported by evidence throughout, referring specifically to the described pattern in Figure 9b. Weaker (Level 1) answers provide a limited, unbalanced, or incomplete assessment with limited use of the figure.'
      },
      {
        label: 'June 2021 P2 — Question 9(f)',
        question:
          'Discuss the view: ‘Demographic characteristics are the most important factors that can affect economic development.’ Use Figure 9a (the UK population pyramids for 1980 and 2015 — see the earlier question in this topic for the full description) and Figure 9c (below), and your own knowledge and understanding, to support your answer.',
        marks: 12,
        markScheme:
          'Marked as a levels-based extended answer combining AO2 (understanding of concepts/interrelationships), AO3 (analysis/argument) and AO4 (use of the figures), 4 marks each within an overall level (Level 1: 1–4 marks, Level 2: 5–8 marks, Level 3: 9–12 marks). The indicative content below is not prescriptive — other relevant, well-explained points must also be credited, and a good answer should discuss both sides (demographic characteristics vs other factors) before reaching a judgement. AO2 (understanding): demographic characteristics including birth rate, death rate, infant mortality rate, maternal mortality rate etc. are important factors that can affect a population’s development pathway; demographic characteristics are often used as an indicator of stage of development in the demographic transition model, but they are more a consequence of development stage rather than a factor affecting the development itself; some demographic characteristics act as a barrier to development processes, including high death rates and low life expectancy. AO3 (analysis/argument): there is a wide range of other factors that can affect economic development, from the availability of resources (natural resources, technology, enterprise, innovation and labour), to external boosters (globalisation, the presence of TNCs, and geopolitics), and internal situations (government policies, business culture); the Human Development Index is comprised of a number of indicators (life expectancy, education, per capita income) — demographics are a key part of this but only as a component of a more complex system, so it is difficult to argue demographic characteristics alone are ‘the most important’ factor. AO4 (use of the figures): Figure 9a shows demographic change for the population of the UK through population pyramids; it shows how there is an ageing population in the UK, with higher proportions of the population in older age groups in 2015 than in 1980; Figure 9c shows a selection of factors that can affect global development in rank order — while demographic factors (ranked 1st) are shown as important, it highlights the need to acknowledge a wider range of factors also including literacy rate, political corruption, natural resources, employment and technology. Strong (Level 3) answers apply understanding to deconstruct the view with logical connections between concepts throughout, giving a balanced, well-developed argument that synthesises relevant understanding coherently, leading to a judgement supported by evidence from both figures throughout. Weaker (Level 1) answers demonstrate only isolated elements of understanding, with limited, unbalanced use of the figures.',
        images: [
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p2/q9-fig9c-development-factors-hexagons.png',
            alt: 'A central hexagon labelled "Global Development Factors" surrounded by six ranked hexagons: 1. Demographic change, 2. Literacy rate, 3. Political corruption, 4. Natural resources, 5. Employment, 6. Technology.',
            caption: 'Figure 9c — Selected factors that affect development in rank order' },
          { src: '/images/revision-ppq/igcse-geography/jun-2021-p2/q9-fig9a-population-pyramids.png',
            alt: 'Two population pyramids for the United Kingdom, 1980 and 2015, showing the population becoming more columnar in shape and older overall by 2015, with larger bars across almost every age group and a wider 80+ group than in 1980.',
            caption: 'Figure 9a — Population pyramids for the United Kingdom, 1980 and 2015' }
        ]
      }
    ]
  },
  /* ---------------- Coming soon ---------------- */
  { topic: 'Hazardous Environments', comingSoon: true },
  { topic: 'Coastal Fieldwork', comingSoon: true }
];
