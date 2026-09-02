/* SBL IGCSE Paper Practice — Economics questions data.
   Loaded before sbl-revision.js on the IGCSE Economics Paper Practice
   page (/igcse/economics). Uses the exact same reusable engine and
   data shape as the IB Geography Revision > Paper Questions page —
   see sbl-revision.js's header comment for the full shape, including
   optional images and labels.

   Shape:
   window.SBL_REVISION_TOPICS.push({
     topic: 'The Market System',
     paper: 1,
     questionNumber: 1,
     questions: [
       {
         question: 'Full IGCSE past paper question text goes here.',
         marks: 6,
         markScheme: 'Marking guidance goes here.',
         label: 'June 2023 — Question 1(a)'
       }
     ]
   });

   Content so far: Pearson Edexcel International GCSE Economics, Paper 1:
   Microeconomics and Business Economics (4EC1/01R), June 2019 — all
   four questions on the paper, each shown as its own topic so they
   render in one ordered "Paper 1" column (Question 1 to Question 4),
   the same layout used on the Geography Paper Practice page. Question 1
   covers oligopoly, costs, luxury goods, price elasticity of supply and
   substitute goods, in the context of a small wood-carving business
   ("Small but successful"). Question 2 covers aims of firms, the
   public/private sector, sectors of the economy, free riders and
   external costs, in the context of UK flu vaccination funding ("Who
   should have the flu injection?"). Question 3 covers economic growth,
   economic wants, total revenue and price elasticity of demand, and the
   production possibility frontier, in the context of a South African
   trade union federation ("South Africa has a new trade union
   federation"). Question 4 covers excess demand, monopoly and barriers
   to entry, in the context of NBC Universal's Olympic broadcasting deal
   and Google's search engine market share in South America. Marking
   guidance for all four questions is drawn from the official Pearson
   mark scheme (4EC1_01R_1906_MS). Diagrams/figures given in the
   question paper (Figures 1-5) are included as images alongside the
   sub-questions that use them.
   Send over more past paper content and it gets added here, topic by
   topic. */

/* This page's topic cards should read "IGCSE Full Past Paper Questions",
   not the engine's IB-page default — see sbl-revision.js. */
window.SBL_REVISION_BUTTON_LABEL = 'IGCSE Full Past Paper Questions';

window.SBL_REVISION_TOPICS = [
  {
    topic: 'Question 1 — June 2019 Paper 1',
    paper: 1,
    questionNumber: 1,
    questions: [
      {
        label: 'June 2019 P1 — Question 1(a)',
        question:
          'Which one of the following is a feature of an oligopoly? A Large firms dominate. B Unique product. C One firm dominates. D No barriers to entry.',
        marks: 1,
        markScheme:
          'A — Large firms dominate is correct. This is a key feature of an oligopoly, where a small number of large firms dominate the market. B describes monopolistic competition/a differentiated market, C describes a monopoly, and D describes perfect competition, so B, C and D are incorrect.'
      },
      {
        label: 'June 2019 P1 — Question 1(b)',
        question:
          'A firm has monthly total costs of $150,000 and monthly fixed costs of $90,000. If it produces 1,000 units, what are the monthly total variable costs for the firm? A $60. B $90. C $60,000. D $240,000.',
        marks: 1,
        markScheme:
          'C — $60,000 is correct (total variable cost = total cost − fixed cost = $150,000 − $90,000 = $60,000). A and B give a per-unit figure rather than the total variable cost, and D incorrectly adds the two figures together, so A, B and D are incorrect.'
      },
      {
        label: 'June 2019 P1 — Question 1(c)',
        question: 'What is meant by the term luxury good?',
        marks: 2,
        markScheme:
          'Award 1 mark for reference to a good for which the rise in demand is proportionally more than that of income, and 1 mark for reference to income elasticity of demand being greater than one. E.g. a good for which income elasticity of demand is greater than 1 (1), where the proportionate change in demand is greater than the proportionate change in income (1). OR: luxury goods are products that are not essential (1) but are highly desired and associated with wealthy people (1).'
      },
      {
        label: 'June 2019 P1 — Question 1(d)',
        question: 'State one factor that would affect price elasticity of supply (PES).',
        marks: 1,
        markScheme:
          'Award 1 mark for one correct factor: factors of production, availability of stocks, spare capacity, or time.'
      },
      {
        label: 'June 2019 P1 — Question 1(e)',
        question: 'Define the term substitute good.',
        marks: 1,
        markScheme:
          'Award 1 mark for reference to a good bought as an alternative to another good, e.g. goods which are used as an alternative to another good.'
      },
      {
        label: 'June 2019 P1 — Question 1(f)',
        question:
          '‘Small but successful’ — Robert has been running a small business from a workshop in his own house for nine years. He has been carving door signs and gifts out of locally sourced wood. Rather than producing identical, standard items, he decided to only make products to meet the personal requirements of his customers. Each order is made specifically for them and reviews are very positive. Robert’s success is due to a growing trend across the country as consumers increasingly prefer to buy locally sourced products. Calculate the price elasticity of supply for Robert’s wooden door signs when the price increases by 5.2% and quantity supplied increases by 3.9%. You are advised to show your working.',
        marks: 2,
        markScheme:
          'Award 1 mark for showing the correct calculation, 3.9 ÷ 5.2. Award 1 mark for the correct price elasticity of supply (PES) = 0.75. Award 2 marks if PES is correctly calculated even if no calculation is shown. Do not award marks for the formula alone.'
      },
      {
        label: 'June 2019 P1 — Question 1(g)',
        question:
          'Using the diagram in Figure 1, draw the effects on the market for locally sourced goods of more customers preferring to buy from local firms. Label the new curve, new equilibrium price and new equilibrium quantity.',
        marks: 3,
        markScheme:
          'Award 1 mark for a rightward shift of demand, labelled. Award 1 mark for a higher equilibrium price, labelled. Award 1 mark for a higher equilibrium quantity, labelled.',
        images: [
          { src: '/images/revision-ppq/igcse-economics/jun-2019-p1/q1-fig1-market-diagram.png',
            alt: 'Blank supply and demand diagram for the market for locally sourced goods, with axes labelled Price and Quantity, a downward-sloping demand curve D and an upward-sloping supply curve S crossing at equilibrium price Pe and equilibrium quantity Qe.',
            caption: 'Figure 1 — Market for locally sourced goods' }
        ]
      },
      {
        label: 'June 2019 P1 — Question 1(h)',
        question:
          'Robert is the only business specialising in handmade door signs in the local area. Explain one disadvantage for customers of Robert being the only local firm specialising in handmade door signs.',
        marks: 3,
        markScheme:
          'Award 1 mark for identifying a relevant disadvantage, 1 mark for developing the disadvantage, and 1 mark for the response being in the context of Robert’s wood carving business. E.g. one disadvantage is that the price may be higher (1), this is due to a lack of choice (1) because there are no other local wood carvers that customers can use (1). OR: one disadvantage is that it may take a long time to receive the order (1) because Robert is a small business and he is working alone (1), and it takes time for him to make each individual door sign (1). Accept any other appropriate response.'
      },
      {
        label: 'June 2019 P1 — Question 1(i)',
        question:
          'Despite his success, Robert has decided to keep his business small and not expand. With reference to the data in ‘Small but successful’ and your knowledge of economics, analyse why Robert might have decided not to expand his business.',
        marks: 6,
        markScheme:
          'Marked as a levels-based extended answer assessing AO2 (application) and AO3 (analysis) together: Level 1 (1–2 marks) demonstrates basic knowledge and understanding with limited application and a lack of analysis; Level 2 (3–4 marks) demonstrates partial knowledge and understanding with partial application and some analysis; Level 3 (5–6 marks) demonstrates clear knowledge and understanding with appropriate application and a thorough analysis. Relevant points include: Robert may have decided it could be too time-consuming and difficult to obtain additional finance in order to expand; Robert is operating in a niche market, meaning he can specialise in the requirements of his customers rather than mass production; as the door signs and gifts are made to order, and to the requirements of the customer, Robert prefers to stay small and focus on their individual needs; Robert is an entrepreneur and may have different aims to the more typical profit maximisation of some firms; he may feel that working from home, providing a high quality specialised customer service, is more important; and the size of the market for speciality carvings may not warrant expansion.'
      }
    ]
  },
  {
    topic: 'Question 2 — June 2019 Paper 1',
    paper: 1,
    questionNumber: 2,
    questions: [
      {
        label: 'June 2019 P1 — Question 2(a)',
        question:
          'Which one of the following might be an aim of a firm in the private sector? A Maximise costs. B Reduce interest rates. C Maximise profits. D Reduce economies of scale.',
        marks: 1,
        markScheme:
          'C — Maximise profits is correct, as this is a common aim of firms operating in the private sector. A, B and D are not aims that a private sector firm would pursue, so they are incorrect.'
      },
      {
        label: 'June 2019 P1 — Question 2(b)',
        question:
          'Cyprus has a mixed economy. Which one of the following is most likely to be provided by the public sector in Cyprus? A Cars. B Roads. C Driving lessons. D Petrol.',
        marks: 1,
        markScheme:
          'B — Roads is correct, as roads are typically provided by the public sector (government) as part of a country’s infrastructure. A, C and D are goods and services usually provided by the private sector, so they are incorrect.'
      },
      {
        label: 'June 2019 P1 — Question 2(c)',
        question:
          'France is a developed country. On the blank pie chart in Figure 2, draw and label the approximate sizes of the primary (P), secondary (S) and tertiary (T) sectors for a developed country such as France.',
        marks: 3,
        markScheme:
          'Award 1 mark for the tertiary sector (T) being the biggest. Award 1 mark for the secondary sector (S) being the second biggest. Award 1 mark for the primary sector (P) being the smallest.',
        images: [
          { src: '/images/revision-ppq/igcse-economics/jun-2019-p1/q2-fig2-blank-pie-chart.png',
            alt: 'A blank circle (pie chart outline) with one radius line drawn from the centre to the top edge, ready to be divided into primary, secondary and tertiary sector segments.',
            caption: 'Figure 2 — Blank pie chart for the primary, secondary and tertiary sectors' }
        ]
      },
      {
        label: 'June 2019 P1 — Question 2(d)',
        question: 'Define the term free rider.',
        marks: 1,
        markScheme:
          'Award 1 mark for reference to a person using a common resource they have not paid for, e.g. a person who takes advantage of a common resource without paying for it.'
      },
      {
        label: 'June 2019 P1 — Question 2(e)',
        question: 'Describe one reason why congestion is an example of an external cost.',
        marks: 2,
        markScheme:
          'Award 1 mark for reference to the reason and 1 mark for development of the reason. E.g. congestion causes pollution (1) which harms the health of third parties such as pedestrians (1). Accept any other appropriate response.'
      },
      {
        label: 'June 2019 P1 — Question 2(f)',
        question:
          '‘Who should have the flu injection?’ — Flu is an unpredictable virus that can cause mild or unpleasant illness in most people. It can cause severe illness and even death among vulnerable groups, including older people, pregnant women and people with other health problems. These groups may, therefore, receive a free vaccination in the UK, to ensure they are protected against the virus. Although most people receive their vaccination from a public sector doctor, the UK Government has to pay private sector pharmacies to also provide this service. The cost to the UK Government of funding these vaccinations is over £100m per year. (Source: adapted from nhs.uk) Explain one possible reason why the UK Government pays private sector pharmacies to provide the flu vaccination.',
        marks: 3,
        markScheme:
          'Award 1 mark for identifying a relevant reason, 1 mark for developing the reason, and 1 mark for the response being in the context of health care. E.g. one reason is that there may not be enough doctors available in the public sector to administer the vaccination (1) meaning pharmacies in the private sector are needed to help meet the high demand (1) if the government is to fulfil its aim of protecting the vulnerable groups (1). Accept any other appropriate response.'
      },
      {
        label: 'June 2019 P1 — Question 2(g)',
        question:
          'With reference to the data in ‘Who should have the flu injection?’ and your knowledge of economics, assess whether the cost to the UK Government of funding the flu vaccination can be justified.',
        marks: 9,
        markScheme:
          'Marked as a levels-based extended answer assessing AO2, AO3 and AO4 together: Level 1 (1–3 marks) offers one viewpoint with limited application and analysis; Level 2 (4–6 marks) offers more than one viewpoint but the argument may lack balance; Level 3 (7–9 marks) offers more than one viewpoint in a well balanced, coherent argument. AO2/AO3 points include: private benefits plus external benefits equal social benefits; the flu injection is given to the most vulnerable groups because they are more likely to require further healthcare if they became ill from flu; this further healthcare would also be a cost to the UK Government, so it may be cheaper to prevent the problem with the vaccination in the first place; by reducing the number of people who become ill from the flu, further health care costs may be avoided as there is less risk of the illness spreading; and by keeping people healthy, they are more likely to be able to continue working and contribute to the output of the economy. AO4 (evaluation) points include: the money spent on the vaccinations could be used for other healthcare needs; it may be difficult to distinguish between the groups most in need of the vaccination, so not everyone receives the injection; the vaccination may not work so health care costs may still rise; it is difficult to quantify the costs and external benefits; and it depends on other factors whether people become ill.'
      }
    ]
  },
  {
    topic: 'Question 3 — June 2019 Paper 1',
    paper: 1,
    questionNumber: 3,
    questions: [
      {
        label: 'June 2019 P1 — Question 3(a)',
        question:
          'Which one of the following may result in economic growth? A Increasing unemployment. B Decreasing government spending. C Decreasing productivity. D Increasing technological advancements.',
        marks: 1,
        markScheme:
          'D — Increasing technological advancements is correct, as this can increase productive capacity and lead to economic growth. A, B and C would all be more likely to reduce output or economic growth, so they are incorrect.'
      },
      {
        label: 'June 2019 P1 — Question 3(b)',
        question:
          'Which one of the following is an example of an economic want? A Food. B Water. C Shelter. D Education.',
        marks: 1,
        markScheme:
          'D — Education is correct, as it is a want (something desired but not essential for survival). A, B and C (food, water and shelter) are examples of economic needs, essential for survival, so they are incorrect.'
      },
      {
        label: 'June 2019 P1 — Question 3(c)',
        question:
          'The total revenue of a printing firm is $75,000 per month when it sells 100,000 newspapers. The price of a newspaper increases to $0.85 and demand falls to 95,000 newspapers per month. Calculate the new total revenue. You are advised to show your working.',
        marks: 2,
        markScheme:
          'Award 1 mark for showing the correct calculation, 0.85 × 95,000. Award 1 mark for the correct total revenue (TR) = $80,750. Award 2 marks if TR is correctly calculated even if no calculation is shown. Do not award marks for the formula alone.'
      },
      {
        label: 'June 2019 P1 — Question 3(d)',
        question: 'Using your answer to 3(c), state the price elasticity of demand for newspapers.',
        marks: 1,
        markScheme:
          'Inelastic. Own figure rule (OFR) applies — e.g. if the answer to 3(c) is less than $75,000, award 1 mark for elastic.'
      },
      {
        label: 'June 2019 P1 — Question 3(e)',
        question:
          'Figure 3 shows an outward shift in the production possibility frontier (PPF) for an economy, from PPF1 to PPF2. Analyse why the economy has moved from PPF1 to PPF2.',
        marks: 6,
        markScheme:
          'Marked as a levels-based extended answer assessing AO2 and AO3 together: Level 1 (1–2 marks), Level 2 (3–4 marks), Level 3 (5–6 marks) — as with Question 1(i). Relevant points include: the PPF shows the combinations of goods which can be produced with all available resources; an increase in the ability to produce both capital and consumer goods is shown in Figure 3 due to the outward shift of the PPF; economic growth would allow this to happen as there is likely to be an increase in economic resources and improvements in technology over time; and with the increase in resources and efficiency, it would be possible to increase production of both capital and consumer goods without the sacrifice of the other.',
        images: [
          { src: '/images/revision-ppq/igcse-economics/jun-2019-p1/q3-fig3-ppf-diagram.png',
            alt: 'Production possibility frontier diagram with Capital goods on the vertical axis and Consumer goods on the horizontal axis, showing an inner curve PPF1 and an outer curve PPF2, with an arrow pointing outward from PPF1 to PPF2.',
            caption: 'Figure 3 — Outward shift in the production possibility frontier' }
        ]
      },
      {
        label: 'June 2019 P1 — Question 3(f)',
        question:
          '‘South Africa has a new trade union federation’ — The newly formed trade union group, the South African Federation of Trade Unions (SAFTU), aims to represent workers in the country. In the past, trade unions in South Africa have played an important role, but the influence of trade unions has declined globally in recent years. SAFTU has nearly 700,000 members and is the second largest group of trade unions in South Africa. (Source: adapted from theconversation.com) With reference to the data above and your knowledge of economics, assess how trade unions, such as those in the SAFTU, might have an impact on the labour market.',
        marks: 9,
        markScheme:
          'Marked as a levels-based extended answer assessing AO2, AO3 and AO4 together (Level 1: 1–3 marks, Level 2: 4–6 marks, Level 3: 7–9 marks — as with Question 2(g)). AO2/AO3 points include: trade unions can help raise wages and improve working conditions for workers by putting pressure on employers during negotiations; SAFTU has nearly 700,000 members and is the second largest federation in South Africa, meaning it could have a lot of influence on employers; SAFTU is a new trade union group and so may have new ideas with which to push for workers’ rights; the higher wages may reduce the quantity of labour that firms can afford to employ, thus meaning fewer workers are employed in the industry but those remaining receive higher wages; and the use of a quantity/wage of labour diagram may support this analysis. AO4 (evaluation) points include: the influence of trade unions has been decreasing all over the world; the effectiveness of the trade unions may depend on whether their power and influence is restricted by legislation; when wage rates increase, if productivity also rises, firms may not have to reduce the number of workers they employ due to higher labour costs; there isn’t enough information in the data to know whether 700,000 is a large proportion of the workforce and therefore how influential they might be; and how effective trade unions are in influencing the price and quantity of labour may depend on whether firms can pass on increased costs through increased prices or reduced profit margins.'
      }
    ]
  },
  {
    topic: 'Question 4 — June 2019 Paper 1',
    paper: 1,
    questionNumber: 4,
    questions: [
      {
        label: 'June 2019 P1 — Question 4(a)',
        question:
          'Figure 4 shows the quantity of a good supplied and demanded at different price levels. Using the information in Figure 4, calculate the excess demand of goods in the market at a price of $20. You are advised to show your working.',
        marks: 2,
        markScheme:
          'Award 1 mark for showing quantity demanded is 50 and quantity supplied is 20, and 1 mark for the correct calculation of excess demand: 50 − 20 (1) = 30 (1). Award 2 marks if excess demand is correctly calculated to be 30, even if no lines are shown on the diagram or calculation shown.',
        images: [
          { src: '/images/revision-ppq/igcse-economics/jun-2019-p1/q4-fig4-supply-demand-graph.png',
            alt: 'Gridded graph with Price ($) from 0 to 70 on the vertical axis and Quantity from 0 to 70 on the horizontal axis, showing a downward-sloping demand curve D from (5,65) to (65,5) and an upward-sloping supply curve S from (5,5) to (65,65), crossing at equilibrium price $35 and equilibrium quantity 35.',
            caption: 'Figure 4 — Quantity of a good supplied and demanded at different price levels' }
        ]
      },
      {
        label: 'June 2019 P1 — Question 4(b)',
        question:
          '‘NBC Universal pays $7.75bn for Olympics through to 2032’ — The International Olympic Committee (IOC) announced it had agreed a $7.75bn deal with the USA television network, NBC Universal. This will extend its broadcasting rights to the Olympic Games up until 2032. The deal gives NBC Universal total control over all media platforms in the USA, including television, internet and mobile. A spokesman for NBC Universal said they were confident they would get back the high cost through advertising. (Source: adapted from eu.usatoday.com) With reference to the data above and your knowledge of economics, analyse the benefits to NBC Universal of agreeing this deal with the IOC.',
        marks: 6,
        markScheme:
          'Marked as a levels-based extended answer assessing AO2 and AO3 together (Level 1: 1–2 marks, Level 2: 3–4 marks, Level 3: 5–6 marks — as with Question 1(i)). Relevant points include: in the USA, NBC Universal is the only network allowed to televise the Olympic Games until 2032, making it a monopoly; as a result, NBC Universal has a unique product; this means it is a price-maker and so can set high prices for the advertising on its platforms; and by agreeing the rights with the IOC, a legal agreement has been made, creating a barrier to entry for any potential competitors.'
      },
      {
        label: 'June 2019 P1 — Question 4(c)',
        question:
          'Figure 5 shows the market share in South America of search engine providers, between October 2016 and October 2017: Google 94.33%, Bing 1.30%, Other 4.37%. Consumers do not pay to use search engines but firms pay to advertise on them. Google, because of the size of its market share, is considered to be a monopoly. With reference to the data above and your knowledge of economics, evaluate the extent to which firms can benefit from advertising on Google.',
        marks: 12,
        markScheme:
          'Marked as a levels-based extended answer assessing AO2, AO3 and AO4 together: Level 1 (1–4 marks) demonstrates isolated elements of relevant knowledge, offers only one viewpoint; Level 2 (5–8 marks) demonstrates partial selectivity and accurate knowledge, offers more than one viewpoint but the argument may lack balance; Level 3 (9–12 marks) demonstrates specific and accurate knowledge, chain of reasoning is coherent and logical, offers more than one viewpoint in a well balanced, coherent argument with a supported judgement or conclusion. AO2/AO3 points include: a monopoly occurs when one seller dominates the market; Google had a 94.33% market share in South America; Google’s dominance could mean they are able to spend their profits on research and developing the search engine; therefore the firms which advertise on Google can benefit from improvements to it, through innovation; due to its size, Google may be able to benefit from economies of scale; these lower average costs could be passed on to the firms which advertise through cheaper prices; as the industry is fast moving, Google will need to provide a good service in order to remain so dominant, which may encourage them to maintain quality in the service offered; and as a result of Google’s dominance, firms advertising can be more confident that their adverts will be seen by more people if they advertise on Google, meaning they are more likely to recoup their advertising costs through higher customer levels. AO4 (evaluation) points include: however, due to its dominance, Google could choose to charge high prices to the advertisers because it has a lack of competition; there is a lack of choice for firms advertising on search engines; although Bing and a small percentage of others provide some choice, it only amounted to 5.67% during the period; Google may feel complacent about their strong position and not develop the service to the satisfaction of the advertisers; without more competition, Google may not be concerned with rising costs, as they could pass them on; it may depend on whether the competitors such as Bing, and those in other countries outside South America, can develop a stronger following; and it may depend on whether search engines remain so prominent in internet advertising.',
        images: [
          { src: '/images/revision-ppq/igcse-economics/jun-2019-p1/q4-fig5-search-engine-market-share.png',
            alt: 'Pie chart showing the South America search engine market share, October 2016 to October 2017: Google 94.33%, Bing 1.30%, Other 4.37%.',
            caption: 'Figure 5 — Search engine market share in South America' }
        ]
      }
    ]
  }
];
