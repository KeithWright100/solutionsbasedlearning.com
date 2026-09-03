/* SBL IGCSE Paper Practice — Business questions data.
   Loaded before sbl-revision.js on the IGCSE Business Paper Practice
   page (/igcse/business). Uses the exact same reusable engine and
   data shape as the IB Geography Revision > Paper Questions page —
   see sbl-revision.js's header comment for the full shape, including
   optional images and labels.

   Shape:
   window.SBL_REVISION_TOPICS.push({
     topic: 'Business Organisation',
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

   Content so far: Pearson Edexcel International GCSE Business, Paper 1:
   Investigating Small Businesses (4BS1/01R), May 2019 — all four
   questions on the paper, each shown as its own topic so they render
   in one ordered "Paper 1" column (Question 1 to Question 4), the same
   layout used on the Geography and Economics Paper Practice pages. All
   four questions are set in the context of Lavender, a Malaysian
   bakery/café/restaurant business (L.café, L.bistro, L.table). Question
   1 covers sources of finance, the product life cycle, fixed costs,
   induction training, currency conversion, cost calculations,
   short-term finance, above the line promotion, internal recruitment,
   discounting and franchising, ending with a 6-mark analysis of
   customer satisfaction. Question 2 covers motivation, the finance
   function, penetration pricing, span of control and diseconomies of
   scale, ending with a 9-mark justify question on batch vs flow
   production. Question 3 uses Figure 1 (an extract from Lavender's
   Statement of Comprehensive Income) to cover current liabilities,
   revenue differences between outlets, gross profit margin
   calculation and analysis of financial statements, ending with a
   9-mark justify question on primary vs secondary market research.
   Question 4 covers the current ratio, a 6-mark analysis of internal
   finance for expansion, and a 12-mark evaluate question on using
   technology to promote products. Marking guidance for all four
   questions is drawn from the official Pearson mark scheme
   (4BS1_01R_MSC_2019).

   Also Paper 2: Investigating Large Businesses (4BS1/02), May 2019 —
   all four questions, rendering in their own ordered "Paper 2" column
   alongside the Paper 1 column above. All four questions are set in
   the context of Tata Motor Company, a large multinational vehicle
   manufacturer. Question 1 covers external finance, discrimination
   legislation, market research, break-even, cost and currency
   calculations, insolvency, the product life cycle, dismissal and
   technology in manufacturing, ending with a 6-mark analysis of public
   relations. Question 2 covers non-financial objectives, casual staff,
   fringe benefits, job production and chain of command, ending with a
   9-mark justify question on cost-plus vs promotional pricing.
   Question 3 uses Figure 2 (Tata Motor Company's revenue, 2011-2017)
   to cover revenue, overdrafts, a percentage-increase calculation and
   analysis of financial information, ending with a 9-mark justify
   question on primary vs secondary research. Question 4 covers an
   average-per-showroom calculation, a 6-mark analysis of induction
   programmes, and a 12-mark evaluate question on factory location
   factors.

   IMPORTANT — Paper 2 marking guidance: no official Pearson mark
   scheme was available for this series (only the Paper 1 mark scheme
   was supplied), so the marking guidance for all of Paper 2 below was
   written in-house, to the same AO-tagged / levels-based standard as
   the genuine Paper 1 scheme above it (see the general marking
   guidance in the official scheme: positive marking, indicative
   content is illustrative not exhaustive, etc.). If the real Pearson
   mark scheme for 4BS1/02 (May 2019) becomes available, it should
   replace the guidance below.

   Send over more past paper content and it gets added here, topic by
   topic. */

/* This page's topic cards should read "IGCSE Full Past Paper Questions",
   not the engine's IB-page default — see sbl-revision.js. */
window.SBL_REVISION_BUTTON_LABEL = 'IGCSE Full Past Paper Questions';

window.SBL_REVISION_TOPICS = [
  {
    topic: 'Question 1 — May 2019 Paper 1',
    paper: 1,
    questionNumber: 1,
    questions: [
      {
        label: 'May 2019 P1 — Question 1(a)(i)',
        question:
          'Lavender, a Malaysian business, started with bakery, patisserie and takeaway shops. It has now developed into several other businesses. L.café is a self-serve café selling a variety of cakes and drinks. L.bistro is a casual dining place with a selection of Asian foods. L.table is a formal restaurant that uses high quality and organic ingredients. Which one of the following would be a source of finance that could be used for a cash flow problem? A Venture capital. B Overdraft. C Debenture. D Leasing.',
        marks: 1,
        markScheme:
          'B — Overdraft is correct, as an overdraft is a short-term, flexible source of finance well suited to covering a temporary cash flow problem. A, C and D are longer-term sources of finance not primarily used to solve short-term cash flow problems, so A, C and D are incorrect.'
      },
      {
        label: 'May 2019 P1 — Question 1(a)(ii)',
        question: 'Which one of the following is a phase of the product life cycle? A Star. B Place. C Maturity. D Branding.',
        marks: 1,
        markScheme:
          'C — Maturity is correct, as it is one of the stages of the product life cycle (introduction, growth, maturity, decline). A is a category from the Boston Matrix, and B and D relate to the marketing mix/branding rather than the product life cycle, so A, B and D are incorrect.'
      },
      {
        label: 'May 2019 P1 — Question 1(a)(iii)',
        question: 'Which one of the following is an example of a fixed cost for Lavender? A Flour used in the cakes. B Packaging used for Lavender’s cakes. C Sugar used in production. D Rent for Lavender’s businesses.',
        marks: 1,
        markScheme:
          'D — Rent for Lavender’s businesses is correct, as rent does not change with the level of output. A, B and C are all variable costs, as they rise and fall directly with how many cakes are produced, so A, B and C are incorrect.'
      },
      {
        label: 'May 2019 P1 — Question 1(a)(iv)',
        question: 'When a business employs a new member of staff, part of their induction training would include: A Health and safety. B Total Quality Management. C Off-the-job training. D Government schemes.',
        marks: 1,
        markScheme:
          'A — Health and safety is correct, as covering health and safety procedures is a standard, essential part of inducting a new member of staff. B, C and D are not standard components of induction training specifically, so B, C and D are incorrect.'
      },
      {
        label: 'May 2019 P1 — Question 1(a)(v)',
        question:
          'Lavender buys 150 kilograms (kgs) of yeast from Germany at a cost of €2,250. The exchange rate is €1 = 5 Malaysian Ringgits (MYR). How much does Lavender pay in MYR for the yeast? A 750. B 2,250. C 11,250. D 337,500.',
        marks: 1,
        markScheme:
          'C — 11,250 is correct (2,250 × 5 = 11,250). A divides instead of multiplying, B simply restates the euro figure, and D multiplies by an incorrect factor, so A, B and D are incorrect.'
      },
      {
        label: 'May 2019 P1 — Question 1(a)(vi)',
        question:
          'Lavender calculates the cost of the cakes it makes. The weekly fixed cost is 759 MYR. The variable cost per cake is 4.70 MYR. Calculate the total cost of selling 1,650 cakes in a week. A 2,413.70. B 3,567.30. C 7,755.00. D 8,514.00.',
        marks: 1,
        markScheme:
          'D — 8,514.00 is correct (total cost = fixed cost + (variable cost × quantity) = 759 + (4.70 × 1,650) = 759 + 7,755 = 8,514). A, B and C each contain an error in the calculation, so A, B and C are incorrect.'
      },
      {
        label: 'May 2019 P1 — Question 1(b)',
        question: 'Define the term short-term finance.',
        marks: 1,
        markScheme: 'Award 1 mark for a correct definition of short-term finance, e.g. money borrowed that must be paid back within 12 months.'
      },
      {
        label: 'May 2019 P1 — Question 1(c)',
        question: 'Define the term above the line promotion.',
        marks: 1,
        markScheme: 'Award 1 mark for a correct definition of above the line promotion, e.g. the use of mass media methods to promote to a large audience.'
      },
      {
        label: 'May 2019 P1 — Question 1(d)',
        question: 'State one reason Lavender would recruit internally.',
        marks: 1,
        markScheme:
          'Award 1 mark for a correct reason why Lavender would recruit internally in the context of the business, e.g. employees will already know how the different outlets operate, such as L.café (1); or an employee will already have knowledge of the cakes made by the business (1). Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P1 — Question 1(e)',
        question: 'Lavender are offering a discount of 15% if customers buy 25 cakes. Each cake costs 12 MYR. Calculate the cost of buying 25 cakes. You are advised to show your working.',
        marks: 2,
        markScheme:
          'Award 1 mark for correctly substituting numbers into the calculation (25 × 12 = 300, then 15/100 × 300 = 45), and 1 further mark for the correct final answer, 300 − 45 = 255. Award full marks for the correct numerical answer (255) without working.'
      },
      {
        label: 'May 2019 P1 — Question 1(f)',
        question: 'Explain one advantage of being a franchisee.',
        marks: 3,
        markScheme:
          'Award 1 mark for identification of an advantage, plus 2 further marks for explaining how this advantage will affect the business, for a maximum of 3 marks. E.g. the franchisee invests in a tried and tested business (1) and gets advice and training from the franchisor (1), this reduces the risk of failure (1). Answers that list more than one advantage with no explanation get a maximum of 1 mark. Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P1 — Question 1(g)',
        question: 'Analyse why customer satisfaction might be important to Lavender.',
        marks: 6,
        markScheme:
          'Marked as a levels-based extended answer assessing AO2 (application, 3 marks) and AO3 (analysis, 3 marks) together. Level 1 (1–2 marks): limited application of business concepts to the context, with limited connections found between points. Level 2 (3–4 marks): sound application of business concepts to the context although there may be some inconsistencies, deconstructing the information with interconnected points and chains of reasoning although there may be some logical inconsistencies. Level 3 (5–6 marks): detailed application of business concepts to the context throughout, deconstructing the information with detailed interconnected points and logical chains of reasoning. Relevant points (AO2) include: satisfied customers are more likely to repeat purchase cakes from Lavender bakery; Lavender is expanding into different types of food outlets such as L.bistro, L.café and L.table. Developed (AO3) into: this leads to an increase in sales and customer loyalty, so Lavender could end up spending less on promoting their products as satisfied customers will recommend other Lavender businesses to their friends and family through word of mouth; and customer satisfaction in one outlet may lead to customers trying other outlets, leading to improved revenues.'
      }
    ]
  },
  {
    topic: 'Question 2 — May 2019 Paper 1',
    paper: 1,
    questionNumber: 2,
    questions: [
      {
        label: 'May 2019 P1 — Question 2(a)',
        question: 'State one non-financial method of motivating staff at Lavender.',
        marks: 1,
        markScheme:
          'Award 1 mark for any valid method of motivation in the context of the business, e.g. job rotation between L.café, L.bistro and L.table (1); or job enrichment to give more complex tasks other than just serving customers (1). Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P1 — Question 2(b)',
        question: 'State one function of the finance area in Lavender.',
        marks: 1,
        markScheme:
          'Award 1 mark for any valid responsibility of the finance function in the context of the business, e.g. calculate and pay the wages/salaries of the staff in L.table (1); or pay suppliers of baking ingredients on time (1). Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P1 — Question 2(c)',
        question: 'Explain one way a business can use penetration pricing.',
        marks: 3,
        markScheme:
          'Award 1 mark for identification of a way a business can use penetration pricing, plus 2 further marks for explaining this way, for a maximum of 3 marks. E.g. a business can offer a low price for a new product (1), this will entice customers to try the new product in its introduction stage (1) and stop them from buying from the competitors (1). Answers that list three ways with no explanation get a maximum of 1 mark. Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P1 — Question 2(d)',
        question: 'Explain one reason why a business would have a short span of control.',
        marks: 3,
        markScheme:
          'Award 1 mark for identification of a reason why a business would have a short span of control, plus 2 further marks for explaining this reason, for a maximum of 3 marks. E.g. this will allow the business to have better communication with its employees (1), as messages have fewer levels to go through (1), leading to a more productive workforce (1). Answers that list three reasons with no explanation get a maximum of 1 mark. Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P1 — Question 2(e)',
        question: 'Explain one reason why diseconomies of scale may occur in a business.',
        marks: 3,
        markScheme:
          'Award 1 mark for identification of a reason why diseconomies of scale may occur, plus 2 further marks for explaining this reason, for a maximum of 3 marks. E.g. the business gets too big (1), employees can become demotivated (1), which could result in falling productivity levels (1). Answers that list more than one reason with no explanation get a maximum of 1 mark. Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P1 — Question 2(f)',
        question:
          'Lavender has eight L.café outlets operating across Malaysia. It is planning to open eight more outlets. To maintain the standards of its bakery products across all outlets, it needs to consider the most suitable method of production. The following two options are being considered: Option 1 — batch production. Option 2 — flow production. Justify which one of these two options Lavender should use.',
        marks: 9,
        markScheme:
          'Marked as a levels-based extended answer assessing AO2 (application, 3 marks), AO3 (analysis, 3 marks) and AO4 (evaluation, 3 marks) together. Level 1 (1–3 marks): limited application and analysis, with a simple justification based on limited evaluation. Level 2 (4–6 marks): sound application and analysis with some inconsistencies, and a justification based on sound evaluation. Level 3 (7–9 marks): detailed application and analysis throughout, and a clear justification based on a thorough evaluation of the choice made. Indicative content — AO2: Option 1, each outlet could match the needs of local customers; Option 2, Lavender could use flow production to make all its cakes the same for all outlets. AO3: Option 1, the needs of customers from that area will be met and sales will increase; Option 2, Lavender could produce more cakes in less time, ensuring supplies to all its outlets. AO4: Option 1, however there will not be consistency across all outlets, making the movement of employees difficult; Option 2, however flow production is very difficult to change and cannot take regional tastes into account, and if the cakes do not sell there is potential for the business to make a loss.'
      }
    ]
  },
  {
    topic: 'Question 3 — May 2019 Paper 1',
    paper: 1,
    questionNumber: 3,
    questions: [
      {
        label: 'May 2019 P1 — Question 3(a)',
        question:
          'Figure 1 is an extract from Lavender’s Statement of Comprehensive Income (000s MYR): Bakery — Revenue 149, Cost of sales 83, Gross profit 66, Gross profit margin 44.3%. L.café — Revenue 75, Cost of sales 51, Gross profit 24, Gross profit margin (to be calculated — see part (c)). L.bistro — Revenue 65, Cost of sales 33, Gross profit 32, Gross profit margin 49.2%. Define the term current liabilities.',
        marks: 1,
        markScheme: 'Award 1 mark for a correct definition of current liabilities, e.g. the amounts owed by a business that must be paid within twelve months.'
      },
      {
        label: 'May 2019 P1 — Question 3(b)',
        question: 'Using Figure 1 (see part (a)), outline one reason why the revenue is higher for the Bakery shops rather than for L.café and L.bistro.',
        marks: 2,
        markScheme:
          'Award 1 mark for identifying a reason why revenue is higher for the Bakery shops rather than L.café and L.bistro, plus 1 further mark for linking it to the context of the question. E.g. bakeries are used on a daily basis, buying the same kind of products, i.e. bread and cakes (1), whereas L.bistro and L.café are more for special occasions (1). Do not accept a reason that is not in the context of Lavender. Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P1 — Question 3(c)',
        question: 'Using Figure 1 (see part (a)), calculate the gross profit margin for L.café. You are advised to show your working.',
        marks: 2,
        markScheme:
          'Award 1 mark for correctly substituting numbers into the formula (24/75 × 100), and 1 further mark for the correct final answer, 32%. Award full marks for the correct numerical answer (32%) without working.'
      },
      {
        label: 'May 2019 P1 — Question 3(d)',
        question: 'Analyse how the Statement of Comprehensive Income can be used by Lavender when considering its expansion.',
        marks: 6,
        markScheme:
          'Marked as a levels-based extended answer assessing AO2 (application, 3 marks) and AO3 (analysis, 3 marks) together, on the same level descriptors as Question 1(g). Indicative content (AO2): Lavender is able to see if they have enough money to expand into other parts of Malaysia; Lavender can use these figures to show investors how successful they are as a business and are capable of expanding. Developed (AO3): as Lavender want to expand they need to take into account other factors such as overheads and outgoings, as these may be higher, so the net profit figure may be low and they will not have enough to expand; Lavender also needs to consider other factors such as the location of competition in the areas they are looking to expand into, and whether they can survive as a new business entering the area, or comparing the figures to last year’s figures to see if they have performed better or worse.'
      },
      {
        label: 'May 2019 P1 — Question 3(e)',
        question:
          'To expand by opening new outlets, Lavender will need to know what its customers’ needs and wants are. In order to do this, Lavender are considering the following two options: Option 1 — primary market research. Option 2 — secondary market research. Justify which one of these two methods Lavender should use.',
        marks: 9,
        markScheme:
          'Marked as a levels-based extended answer assessing AO2 (application, 3 marks), AO3 (analysis, 3 marks) and AO4 (evaluation, 3 marks) together, on the same level descriptors as Question 2(f). Indicative content — AO2: Option 1, primary market research, such as questionnaires, will allow Lavender to approach existing and potential customers face to face to ask their opinions of its food and menu; Option 2, secondary market research, such as the internet, will allow Lavender to gain wider sources of information about the area it wishes to expand into and see if there are other similar restaurants. AO3: Option 1, this gives Lavender detailed feedback specific to its business about its food products and from people within the area it is looking to expand into; Option 2, it is less time-consuming for Lavender because other people have put the information together, and they can find out other information such as local bakeries as opposed to just customers’ needs and wants, such as local competition and suppliers in the area. AO4: Option 1, however not all the feedback gained may be relevant to the menu they have, or some people may not want to fill in the questionnaire, so they do not gather all the information they require; Option 2, however secondary research could mean spending a lot of time looking at other factors and not gaining the information actually needed about food products, and some information might not be relevant to Lavender or could be outdated.'
      }
    ]
  },
  {
    topic: 'Question 4 — May 2019 Paper 1',
    paper: 1,
    questionNumber: 4,
    questions: [
      {
        label: 'May 2019 P1 — Question 4(a)',
        question: 'In 2017 one of Lavender’s outlets had current assets of 120,000 MYR and current liabilities of 90,000 MYR. Calculate, to 2 significant figures, the current ratio for 2017. You are advised to show your working.',
        marks: 2,
        markScheme:
          'Award 1 mark for correctly substituting numbers into the formula (120,000/90,000), and 1 further mark for the correct final answer, 1.33. Award full marks for the correct numerical answer (1.33) without working.'
      },
      {
        label: 'May 2019 P1 — Question 4(b)',
        question: 'Analyse the benefits to Lavender of using internal sources of finance for its expansion plans.',
        marks: 6,
        markScheme:
          'Marked as a levels-based extended answer assessing AO2 (application, 3 marks) and AO3 (analysis, 3 marks) together, on the same level descriptors as Question 1(g). Indicative content (AO2): Lavender will know the amount of internal finance they have available; the money does not have to be borrowed/negotiated. Developed (AO3): by using internal sources of finance, Lavender has the money straight away in its restaurants and does not have to go through a lengthy process to get the money; Lavender will not have to pay the money back, so does not need to worry about any monthly repayments or interest associated with external sources of finance.'
      },
      {
        label: 'May 2019 P1 — Question 4(c)',
        question: 'Lavender already uses a website to promote its products. Evaluate the benefits to Lavender of using other forms of technology to promote its products.',
        marks: 12,
        markScheme:
          'Marked as a levels-based extended answer assessing AO1 (knowledge and terminology), AO2 (application), AO3 (analysis) and AO4 (evaluation), 3 marks each. Level 1 (1–4 marks): demonstrates elements of knowledge with limited terminology, limited application, and attempts to deconstruct information with limited connections, reaching a simple justification based on limited evaluation. Level 2 (5–8 marks): demonstrates mostly accurate knowledge with appropriate terminology in places, sound application although there may be some inconsistencies, and a justification based on sound evaluation. Level 3 (9–12 marks): demonstrates accurate knowledge throughout with appropriate terminology, detailed application throughout, deconstructs information with detailed interconnected points and logical chains of reasoning, and a clear justification based on a thorough evaluation. Indicative content (AO1): social media can be used to gain a wider target market; e-newsletters can keep customers up to date with new products. Applied (AO2): Lavender could target a particular audience based on their food preferences to advertise directly to; Lavender could get the email addresses of its customers or complete questionnaires. Developed (AO3): using technology in promotion, Lavender can personalise information to the customer based on what they have searched for online or previously purchased from the bakery; Lavender can reach out to current customers and encourage them to repeat purchase or try its other outlets or recipes. Evaluated (AO4): however Lavender would need employees with the necessary technological skills to use this as a method of promotion, and some people ignore emails or website banners so may not pay attention to the promotion, and it could be difficult to reach new customers in new areas as they do not yet know who they are; also a lot of time might be spent using technology but some customers may prefer traditional methods such as leaflets inside the bakery, which give a more personalised service and the chance to speak to customers face to face to gain feedback.'
      }
    ]
  },
  {
    topic: 'Question 1 — May 2019 Paper 2',
    paper: 2,
    questionNumber: 1,
    questions: [
      {
        label: 'May 2019 P2 — Question 1(a)(i)',
        question:
          'Tata Motor Company began trading in 1868, and is now part of a large group of companies estimated to be worth $100 billion. Tata Motor Company manufactures a wide range of cars, buses and trucks. It is India’s largest maker of vehicles, with manufacturing centres in many countries including Korea, Italy and the UK. One of the main aims of Tata Motor Company is to produce goods that the public want and need. It is currently working on electric cars that are more environmentally friendly. Tata Motor Company plays an active role in community development, such as building schools, houses and investing in the health and welfare of local people. Which one of the following is an external source of finance? A Retained profit. B Selling assets. C Sales revenue. D Share capital.',
        marks: 1,
        markScheme:
          '[In-house guidance — see the header comment: no official mark scheme was supplied for Paper 2, so this answer follows standard IGCSE Business definitions.] D — Share capital is correct, as it is raised from outside investors external to the business. A, B and C (retained profit, selling assets and trading income) are all generated from within the business itself, so A, B and C are internal rather than external sources and are incorrect.'
      },
      {
        label: 'May 2019 P2 — Question 1(a)(ii)',
        question: 'Which one of the following forms of discrimination is covered by legislation? A Ability. B Age. C Ethical. D Political.',
        marks: 1,
        markScheme:
          '[In-house guidance — see header comment.] B — Age is correct, as age is one of the characteristics protected by anti-discrimination legislation. A, C and D are not standard legally protected characteristics in this specification, so A, C and D are incorrect.'
      },
      {
        label: 'May 2019 P2 — Question 1(a)(iii)',
        question: 'Which one of the following could be used to gather data for a business? A Market research. B Market orientation. C Market segmentation. D Market place.',
        marks: 1,
        markScheme:
          '[In-house guidance — see header comment.] A — Market research is correct, as it is the process businesses use to gather data on customers and markets. B is a business philosophy, C is a way of dividing up a market, and D is where goods are sold, so B, C and D are incorrect.'
      },
      {
        label: 'May 2019 P2 — Question 1(a)(iv)',
        question: 'In a break-even graph, the break-even point is when: A total costs and fixed costs are the same. B fixed costs and variable costs are the same. C total costs and revenue are the same. D fixed costs and revenue are the same.',
        marks: 1,
        markScheme:
          '[In-house guidance — see header comment.] C — total costs and revenue are the same is correct, as break-even is the output level at which total revenue exactly covers total costs. A, B and D do not describe the break-even point, so A, B and D are incorrect.'
      },
      {
        label: 'May 2019 P2 — Question 1(a)(v)',
        question:
          'Figure 1 gives details of one of the many suppliers of tyres to Tata Motor Company: Production each month 2,400; Average price per tyre €27; Variable costs per tyre €12; Fixed costs per month €6,000. What are the monthly total costs for the business? A €8,412. B €34,800. C €74,400. D €204,000.',
        marks: 1,
        markScheme:
          '[In-house guidance — see header comment.] B — €34,800 is correct (total cost = fixed cost + (variable cost × quantity) = 6,000 + (12 × 2,400) = 6,000 + 28,800 = 34,800). A, C and D each contain an error in the calculation, so A, C and D are incorrect.'
      },
      {
        label: 'May 2019 P2 — Question 1(a)(vi)',
        question:
          'A customer in Germany wishes to buy a Tata Nano car from India. The cost of this vehicle is 465,000 Indian Rupees (RS). The exchange rate is €1.00 = RS78. What would the German customer pay, to the nearest euro, for the car? A €3,621. B €4,650. C €5,962. D €36,270.',
        marks: 1,
        markScheme:
          '[In-house guidance — see header comment.] C — €5,962 is correct (465,000 ÷ 78 = 5,961.54, which rounds to €5,962). A, B and D each contain an error in the calculation, so A, B and D are incorrect.'
      },
      {
        label: 'May 2019 P2 — Question 1(b)',
        question: 'Define the term insolvency.',
        marks: 1,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for a correct definition of insolvency, e.g. when a business is unable to pay its debts as they fall due because its liabilities exceed its assets.'
      },
      {
        label: 'May 2019 P2 — Question 1(c)',
        question: 'Define the term product life cycle.',
        marks: 1,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for a correct definition of product life cycle, e.g. the stages a product passes through from launch to withdrawal from the market, typically introduction, growth, maturity and decline.'
      },
      {
        label: 'May 2019 P2 — Question 1(d)',
        question: 'State one reason why a Tata Motor Company employee could be dismissed.',
        marks: 1,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for any valid reason for dismissal in the context of the business, e.g. gross misconduct (1); or persistent poor performance/breach of contract (1). Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P2 — Question 1(e)',
        question: 'In December 2016 the global vehicle sales for Tata Motor Company were 89,841. In December 2017 the global vehicle sales figure was 23% higher. Calculate the global vehicle sales for Tata Motor Company in December 2017. You are advised to show your working.',
        marks: 2,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for correctly substituting numbers into the calculation (89,841 × 1.23), and 1 further mark for the correct final answer, 110,504 (accept 110,504.43 or a rounded 110,505). Award full marks for the correct numerical answer without working.'
      },
      {
        label: 'May 2019 P2 — Question 1(f)',
        question: 'Explain one impact of technology on the manufacture of vehicles.',
        marks: 3,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for identification of an impact, plus 2 further marks for explaining how this impact will affect the business, for a maximum of 3 marks. E.g. technology such as robotics/automation can be used on the production line (1), this increases the speed and consistency of production (1), reducing labour costs per vehicle and improving quality control (1). Answers that list more than one impact with no explanation get a maximum of 1 mark. Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P2 — Question 1(g)',
        question: 'Analyse the importance of good public relations for Tata Motor Company.',
        marks: 6,
        markScheme:
          '[In-house guidance — see header comment, written to the same AO2/AO3 levels-based standard as the genuine Paper 1 mark scheme.] Marked as a levels-based extended answer assessing AO2 (application, 3 marks) and AO3 (analysis, 3 marks) together, on the same level descriptors as Paper 1, Question 1(g). Indicative content (AO2): Tata Motor Company plays an active role in community development, such as building schools and houses and investing in local health and welfare; Tata Motor Company is developing more environmentally friendly electric cars. Developed (AO3): positive PR from community investment builds trust and a favourable reputation with the public, which can increase sales and customer loyalty towards Tata Motor Company’s vehicles; being seen to invest in environmentally friendly technology can attract environmentally conscious customers and investors, and can help protect the business’s reputation against criticism of the wider motor industry’s environmental impact.'
      }
    ]
  },
  {
    topic: 'Question 2 — May 2019 Paper 2',
    paper: 2,
    questionNumber: 2,
    questions: [
      {
        label: 'May 2019 P2 — Question 2(a)',
        question: 'Tata Motor Company has employees across the world. It prides itself on looking after all its employees and ensuring that their needs are met. State one non-financial objective for Tata Motor Company.',
        marks: 1,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for any valid non-financial objective in the context of the business, e.g. to produce goods that the public want and need (1); or to play an active role in community development (1). Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P2 — Question 2(b)',
        question: 'State one reason why Tata Motor Company would employ casual staff.',
        marks: 1,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for any valid reason for employing casual staff in the context of the business, e.g. to cover a short-term or seasonal increase in demand without a long-term commitment (1). Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P2 — Question 2(c)',
        question: 'Explain one reason why a business uses fringe benefits.',
        marks: 3,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for identification of a reason, plus 2 further marks for explaining this reason, for a maximum of 3 marks. E.g. fringe benefits such as health insurance or a company car can be offered to staff (1), this helps motivate and retain employees (1), which can lead to higher productivity and lower staff turnover (1). Answers that list three reasons with no explanation get a maximum of 1 mark. Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P2 — Question 2(d)',
        question: 'Explain one reason why a business would use job production.',
        marks: 3,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for identification of a reason, plus 2 further marks for explaining this reason, for a maximum of 3 marks. E.g. job production allows a business to make a single, bespoke item to a customer’s exact specification (1), this means the product closely matches what the individual customer wants (1), allowing the business to charge a higher price for this level of customisation (1). Answers that list three reasons with no explanation get a maximum of 1 mark. Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P2 — Question 2(e)',
        question: 'Explain one benefit to a business of having a short chain of command.',
        marks: 3,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for identification of a benefit, plus 2 further marks for explaining this benefit, for a maximum of 3 marks. E.g. a short chain of command means there are fewer levels of management between the top and bottom of the business (1), so communication between senior managers and employees is faster and clearer (1), which can lead to quicker decision-making (1). Answers that list three benefits with no explanation get a maximum of 1 mark. Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P2 — Question 2(f)',
        question:
          'Tata Motor Company uses different pricing strategies. It is considering two options for the launch of a new vehicle: Option 1 — cost plus. Option 2 — promotional. Justify which one of these two options Tata Motor Company should use.',
        marks: 9,
        markScheme:
          '[In-house guidance — see header comment, written to the same AO2/AO3/AO4 levels-based standard as the genuine Paper 1 mark scheme.] Marked as a levels-based extended answer assessing AO2 (application, 3 marks), AO3 (analysis, 3 marks) and AO4 (evaluation, 3 marks) together, on the same level descriptors as Paper 1, Question 2(f). Indicative content — AO2: Option 1, Tata Motor Company could add a fixed percentage mark-up onto the cost of producing each vehicle; Option 2, Tata Motor Company could set a temporarily lower launch price, or spend heavily on advertising, to generate interest in the new vehicle. AO3: Option 1, this guarantees that all costs are covered and a profit margin is made on every vehicle sold; Option 2, this can generate a high volume of early sales and awareness, helping the new vehicle gain market share quickly against competitors. AO4: Option 1, however cost-plus pricing does not take into account what competitors are charging or what customers are willing to pay, and may result in the vehicle being overpriced or underpriced compared with the market; Option 2, however heavy promotional spending or discounting reduces the profit margin on each vehicle in the short term, and may only have a temporary effect on sales once the promotion ends.'
      }
    ]
  },
  {
    topic: 'Question 3 — May 2019 Paper 2',
    paper: 2,
    questionNumber: 3,
    questions: [
      {
        label: 'May 2019 P2 — Question 3(a)',
        question:
          'The Chairman of Tata Motor Company works closely with the Finance Department to ensure that the company maintains its financial position. Figure 2 shows the revenue for Tata Motor Company, 2011–2017 (US$ millions): 2011: 18,441; 2013: 28,508; 2015: 39,737; 2017: 42,839. Define the term revenue.',
        marks: 1,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for a correct definition of revenue, e.g. the income a business receives from selling its goods or services over a period of time (price × quantity sold).'
      },
      {
        label: 'May 2019 P2 — Question 3(b)',
        question: 'Outline one reason why Tata Motor Company uses overdrafts.',
        marks: 2,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for identifying a reason why Tata Motor Company uses overdrafts, plus 1 further mark for linking it to the context of the question. E.g. an overdraft is a flexible, short-term source of finance (1), which allows Tata Motor Company to cover short-term cash flow shortfalls, such as a temporary gap between paying suppliers and receiving payment from customers, while only paying interest on the amount actually used (1). Accept any other appropriate response.'
      },
      {
        label: 'May 2019 P2 — Question 3(c)',
        question: 'Using Figure 2 (see part (a)), calculate, to 2 decimal places, the percentage increase in revenue from 2011 to 2017. You are advised to show your working.',
        marks: 2,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for correctly substituting numbers into the formula ((42,839 − 18,441) / 18,441 × 100), and 1 further mark for the correct final answer, 132.30% (2 d.p.). Award full marks for the correct numerical answer without working.'
      },
      {
        label: 'May 2019 P2 — Question 3(d)',
        question: 'Analyse how Tata Motor Company could use the financial information in Figure 2.',
        marks: 6,
        markScheme:
          '[In-house guidance — see header comment, written to the same AO2/AO3 levels-based standard as the genuine Paper 1 mark scheme.] Marked as a levels-based extended answer assessing AO2 (application, 3 marks) and AO3 (analysis, 3 marks) together, on the same level descriptors as Paper 1, Question 1(g). Indicative content (AO2): the figures show that Tata Motor Company’s revenue has grown consistently between 2011 and 2017; Tata Motor Company can use this trend to support decisions about further investment or expansion. Developed (AO3): the steady growth in revenue can be used to reassure investors and lenders that the company is performing well, making it easier to raise further finance for expansion; however, Tata Motor Company would also need to compare revenue against costs and profit over the same period, since rising revenue alone does not guarantee that the business is becoming more profitable.'
      },
      {
        label: 'May 2019 P2 — Question 3(e)',
        question:
          'Tata Motor Company gathers data to help it promote its vehicles. It is considering two options: Option 1 — primary research. Option 2 — secondary research. Justify which one of these two options Tata Motor Company should use.',
        marks: 9,
        markScheme:
          '[In-house guidance — see header comment, written to the same AO2/AO3/AO4 levels-based standard as the genuine Paper 1 mark scheme.] Marked as a levels-based extended answer assessing AO2 (application, 3 marks), AO3 (analysis, 3 marks) and AO4 (evaluation, 3 marks) together, on the same level descriptors as Paper 1, Question 2(f). Indicative content — AO2: Option 1, primary research such as surveys or focus groups could gather opinions directly from current and potential customers about new vehicle features; Option 2, secondary research such as industry reports or government data could give Tata Motor Company wider information about vehicle market trends across different countries. AO3: Option 1, this gives Tata Motor Company detailed, up-to-date feedback specific to its own vehicles and customers; Option 2, this is quicker and cheaper to obtain, since the information has already been collected and published by others, and can cover a much wider geographic market than primary research alone. AO4: Option 1, however primary research on a global scale would be expensive and time-consuming to carry out consistently across every country Tata Motor Company sells in; Option 2, however secondary research may be out of date or not specific enough to Tata Motor Company’s own vehicles and customers, and may not fully answer the questions the company actually needs answered.'
      }
    ]
  },
  {
    topic: 'Question 4 — May 2019 Paper 2',
    paper: 2,
    questionNumber: 4,
    questions: [
      {
        label: 'May 2019 P2 — Question 4(a)',
        question: 'Tata Motor Company employs over 60,000 employees around the world. In 2017 the turnover was $42 billion, with 9 million car sales. Tata Motor Company has 6,000 car showrooms around the world. Calculate the average number of vehicles sold in each car showroom. You are advised to show your working.',
        marks: 2,
        markScheme:
          '[In-house guidance — see header comment.] Award 1 mark for correctly substituting numbers into the calculation (9,000,000 ÷ 6,000), and 1 further mark for the correct final answer, 1,500. Award full marks for the correct numerical answer without working.'
      },
      {
        label: 'May 2019 P2 — Question 4(b)',
        question: 'Analyse why Tata Motor Company ensures that its staff have a detailed induction programme.',
        marks: 6,
        markScheme:
          '[In-house guidance — see header comment, written to the same AO2/AO3 levels-based standard as the genuine Paper 1 mark scheme.] Marked as a levels-based extended answer assessing AO2 (application, 3 marks) and AO3 (analysis, 3 marks) together, on the same level descriptors as Paper 1, Question 1(g). Indicative content (AO2): Tata Motor Company employs over 60,000 employees across many different countries; a detailed induction programme would cover health and safety and company-specific procedures for new starters. Developed (AO3): a thorough induction helps new employees become productive more quickly and reduces the likelihood of workplace accidents, which is especially important on a manufacturing production line; it also helps new staff understand Tata Motor Company’s aims, such as producing environmentally friendly vehicles and playing an active role in community development, so they represent the company consistently wherever in the world they are based.'
      },
      {
        label: 'May 2019 P2 — Question 4(c)',
        question: 'Tata Motor Company is always looking to find the right location for its new factories. Evaluate the factors Tata Motor Company would have to take into account when making decisions about where to locate new factories. You should use the information provided as well as your own knowledge of business.',
        marks: 12,
        markScheme:
          '[In-house guidance — see header comment, written to the same AO1/AO2/AO3/AO4 levels-based standard as the genuine Paper 1 mark scheme.] Marked as a levels-based extended answer assessing AO1 (knowledge and terminology), AO2 (application), AO3 (analysis) and AO4 (evaluation), 3 marks each, on the same level descriptors as Paper 1, Question 4(c). Indicative content (AO1): location factors for a manufacturer include the cost and availability of land, the availability of a suitably skilled workforce, transport links/access to suppliers and markets, and government incentives or regulations. Applied (AO2): Tata Motor Company is a large, global manufacturer producing cars, buses and trucks across many countries including Korea, Italy and the UK; it needs sites able to support large-scale manufacturing and to reach international markets. Developed (AO3): a location with good transport links (ports, roads, rail) reduces the cost and time of importing components and exporting finished vehicles, and a location with a skilled or trainable local workforce reduces recruitment and training costs; government grants or lower tax rates in some countries can also reduce the cost of setting up a new factory. Evaluated (AO4): however, the cheapest location is not always the best, as it may lack the necessary infrastructure, skills or political stability, and moving or opening manufacturing in a new country brings additional risks such as exchange rate movements, differing employment laws, and the time and cost of building relationships with new local suppliers, so Tata Motor Company must weigh these risks against the potential cost savings and access to new markets.'
      }
    ]
  }
];
