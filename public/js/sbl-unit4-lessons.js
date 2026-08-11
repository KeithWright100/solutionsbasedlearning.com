/* ============================================================
   SBL Geography Tutor — Unit 4: Power, Places and Networks
   (Paper 3, HL Core Extension) lesson configurations.
   Same reusable tutor engine (sbl-teach-bot.js) as Population
   and Climate Change. Hrefs and titles copied verbatim from
   sbl-sidebar.js "Unit 4: Power, Places and Networks" (hl-1)
   navigation data.

   IMPORTANT: Unit 4 is a DIFFERENT PAPER (Paper 3: HL Core
   Extension) from Population/Climate Change (Paper 2: Core).
   This file defines its OWN separate lesson order,
   SBL_PPN_LESSON_ORDER, so Spaced Retrieval for Unit 4 is a
   distinct pool and does NOT get concatenated onto the shared
   window.SBL_LESSON_ORDER used by Population/Climate. Pages in
   this unit should only include this lesson file (not
   sbl-population-lessons.js or sbl-climate-lessons.js).

   Lesson IDs follow the sidebar's own topic/lesson slugs,
   prefixed with PPN (Power, Places and Networks) to avoid any
   collision with CP/CC ids, e.g. PPN-t1-l1-globalization.
   ============================================================ */
window.SBL_LESSONS = window.SBL_LESSONS || {};
window.SBL_PPN_LESSON_ORDER = [
  'PPN-t1-l1-globalization',
  'PPN-t1-l2-global',
  'PPN-t1-l3-powerful',
  'PPN-t2-l1-an-overview-of',
  'PPN-t2-l2-foreign-direct',
  'PPN-t2-l3-case-study-two',
  'PPN-t3-l1-political',
  'PPN-t3-l2-our-shrinking',
  'PPN-t3-l3-transport',
  'PPN-t3-l4-patterns-and',
  'PPN-t3-l5-the-influence'
];

window.SBL_LESSONS['PPN-t1-l1-globalization'] = {
  id: 'PPN-t1-l1-globalization',
  topicNumber: 1,
  topicTitle: 'Global interactions and global power',
  title: 'Globalization Indices',
  href: '/geography/paper-2/hl-1/t1-global/l1-globalization',
  syllabusFocus: 'Globalization indices showing how countries participate in global interactions, including how the KOF Globalisation Index measures economic, social and political globalisation, and how it compares to the older Kearney Globalization Index.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'What is globalisation?', request: 'Define globalisation and global interactions' },
    { label: 'The KOF Index', request: 'Explain what the KOF Globalisation Index is and how it is measured' },
    { label: 'KOF\u2019s three dimensions', request: 'Explain the economic, social and political dimensions of the KOF Index' },
    { label: 'De facto vs de jure', request: 'Explain the difference between de facto and de jure globalisation in the KOF Index' },
    { label: 'The Kearney Index', request: 'Explain what the Kearney Globalization Index was and how it worked' },
    { label: 'KOF vs Kearney', request: 'Compare the KOF and Kearney globalisation indices' },
    { label: 'Evaluating globalisation indices', request: 'Explain some strengths and weaknesses of using indices to measure globalisation' }
  ],
  checklist: [
    'I can define globalisation and global interactions.',
    'I can explain how global interactions are measured using the KOF Index.',
    'I can describe the three dimensions of the KOF Index.',
    'I can explain the difference between de facto and de jure globalisation.',
    'I can make a brief comparison between the KOF and Kearney indices.',
    'I can provide a basic evaluation of indices used to measure global interactions.'
  ],
  readinessQuestions: [
    'What is globalisation, in your own words?',
    'What does the KOF Index measure, and what scale does it use?',
    'What is the difference between de facto and de jure globalisation? Can you give an example of each?',
    'How does the Kearney Index differ from the KOF Index?',
    'What is one limitation of using an index to measure how globalised a country is?'
  ],
  quiz: [
    { q: 'Globalisation is best defined as:', options: ['The process by which countries become more isolated from one another', 'The growing interconnectedness and interdependence of countries through economic, social and political ties', 'A term only used to describe international trade', 'A process that only affects high-income countries'], correct: 1, explain: 'Globalisation describes the increasing interconnectedness and interdependence of countries and people worldwide, through flows of trade, investment, people, information and ideas.', misconception: 'Globalisation is sometimes reduced to just "trade" or "the economy," when it actually spans economic, social and political dimensions of interaction between countries.', tag: 'What is globalisation?' },
    { q: 'The KOF Globalisation Index measures globalisation across which three dimensions?', options: ['Military, cultural, environmental', 'Economic, social and political', 'Trade, tourism and language', 'Population, migration and urbanisation'], correct: 1, explain: 'The KOF Globalisation Index measures globalisation along three dimensions: economic, social and political.', misconception: 'Some students assume the KOF Index includes an environmental dimension, but it specifically does not cover environmental globalisation.', tag: 'The KOF Index' },
    { q: 'The KOF Index is produced by aggregating how many underlying variables?', options: ['Around 10', 'Around 42', 'Around 100', 'Around 5'], correct: 1, explain: 'The current KOF Globalisation Index aggregates around 42 different variables across its three dimensions to produce an overall score.', misconception: 'Students sometimes assume indices like KOF are based on just a handful of headline statistics, when they are actually built from a large number of underlying variables combined together.', tag: 'The KOF Index' },
    { q: 'On the KOF Index scale, a country with a higher score (closer to 100) is:', options: ['Less globalised', 'More globalised', 'Unrelated to globalisation levels', 'Always a low-income country'], correct: 1, explain: 'The KOF Index runs on a scale of 1 to 100, where a higher score indicates a greater degree of globalisation.', misconception: 'It is worth double-checking the direction of the scale rather than assuming; on the KOF Index, higher numbers mean more globalised, not less.', tag: 'The KOF Index' },
    { q: '"De facto" globalisation, as measured by the KOF Index, refers to:', options: ['A country\u2019s laws and formal policies relating to openness', 'Actual, real-world flows and interactions, such as trade volumes and international travel', 'A country\u2019s military spending', 'A country\u2019s population size'], correct: 1, explain: 'De facto globalisation measures actual, observed international flows and interactions, such as real trade volumes, capital flows, and personal contacts like tourism.', misconception: 'De facto and de jure are easy to mix up; de facto is about what actually happens, while de jure is about the formal rules and policies in place.', tag: 'De facto vs de jure' },
    { q: '"De jure" globalisation, as measured by the KOF Index, refers to:', options: ['Actual trade flows between countries', 'A country\u2019s formal policies, laws and regulatory openness to international interaction', 'The number of tourists visiting a country', 'Internet usage rates'], correct: 1, explain: 'De jure globalisation captures a country\u2019s formal legal and policy framework, such as trade restrictions, tariffs, and international treaties, rather than the actual flows themselves.', misconception: 'A country can have open policies (high de jure globalisation) without necessarily having high actual flows (de facto globalisation), so it is useful to keep the two concepts distinct.', tag: 'De facto vs de jure' },
    { q: 'The A.T. Kearney/Foreign Policy Globalization Index grouped its variables into which four "baskets"?', options: ['Economic integration, personal contact, technological connectivity, political engagement', 'Trade, migration, language, religion', 'Economic, social, political, environmental', 'GDP, population, land area, climate'], correct: 0, explain: 'The Kearney/Foreign Policy Globalization Index measured globalisation using four baskets of variables: economic integration, personal contact, technological connectivity, and political engagement.', misconception: 'The Kearney Index\u2019s four-basket structure is sometimes confused with the KOF Index\u2019s three-dimension structure; they are related but organised differently.', tag: 'The Kearney Index' },
    { q: 'A key difference between the KOF Index and the Kearney Index is that:', options: ['The Kearney Index covers more countries than the KOF Index', 'The KOF Index covers a much larger number of countries and is still updated annually, whereas the Kearney Index only ever covered around 62 countries and is no longer produced', 'They measure exactly the same variables in exactly the same way', 'The KOF Index has never been updated since it was created'], correct: 1, explain: 'The KOF Index covers around 195 countries and continues to be published annually, while the Kearney Index only ever ranked about 62 countries and stopped being produced some years ago.', misconception: 'Students sometimes assume both indices are equally current and equally comprehensive, but the KOF Index has much broader country coverage and remains actively maintained.', tag: 'KOF vs Kearney' },
    { q: 'One limitation of using an index like KOF to measure globalisation is that:', options: ['It provides no useful information at all', 'A single composite score can hide important differences between a country\u2019s economic, social and political globalisation levels', 'It only measures the size of a country\u2019s population', 'It cannot be used to compare countries over time'], correct: 1, explain: 'Because indices like KOF combine many variables into one overall score, a country could rank moderately overall while being very high in one dimension (e.g. economic) and very low in another (e.g. political), which the single headline score can obscure.', misconception: 'A single composite ranking is sometimes treated as the full picture, when it is important to also look at the separate dimension scores to understand a country\u2019s specific pattern of globalisation.', tag: 'Evaluating globalisation indices' },
    { q: 'Which of these is most likely to be included as a variable under the KOF Index\u2019s social globalisation dimension?', options: ['Government military spending', 'International tourism and internet usage', 'GDP growth rate', 'Number of embassies a country hosts'], correct: 1, explain: 'Social globalisation in the KOF Index includes variables relating to personal contact and information flows, such as international tourism, telephone traffic, and internet usage.', misconception: 'Variables like embassies or UN treaty memberships relate to political globalisation, and are sometimes wrongly grouped with social globalisation, which instead focuses on personal contact and information flows.', tag: 'KOF\u2019s three dimensions' }
  ]
};

window.SBL_LESSONS['PPN-t1-l2-global'] = {
  id: 'PPN-t1-l2-global',
  topicNumber: 1,
  topicTitle: 'Global interactions and global power',
  title: 'Global Superpowers',
  href: '/geography/paper-2/hl-1/t1-global/l2-global',
  syllabusFocus: 'Global superpowers and their economic, geopolitical and cultural influence, including detailed examples of at least two actual or potential global superpowers: the USA and China.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'What is a global superpower?', request: 'Define what a global superpower is, using applicable terminology' },
    { label: 'USA and China characteristics', request: 'Explain the characteristics that make the USA and China global superpowers' },
    { label: 'Economic influence', request: 'Compare the economic influence of the USA and China' },
    { label: 'Military/geopolitical influence', request: 'Compare the military and geopolitical influence of the USA and China' },
    { label: 'Cultural influence', request: 'Compare the cultural influence of the USA and China' },
    { label: 'Comparative analysis', request: 'Produce a comparative analysis of the USA and China relating to their similarities and differences' },
    { label: 'Help me structure a presentation', request: 'Suggest how I could structure a short presentation comparing USA and China as global superpowers' }
  ],
  checklist: [
    'I can define what a global superpower is using applicable terminology.',
    'I can explain the characteristics that make the USA and China global superpowers.',
    'I can produce a comparative analysis of the USA and China relating to their similarities and differences.'
  ],
  readinessQuestions: [
    'What is a global superpower, and what characteristics does a country need to be considered one?',
    'How do the USA and China compare in terms of economic influence?',
    'How do the USA and China compare in terms of military/geopolitical influence?',
    'How do the USA and China compare in terms of cultural influence?',
    'Which category do you think shows the biggest difference between the USA and China, and why?'
  ],
  quiz: [
    { q: 'A global superpower is best defined as:', options: ['Any country with a large population', 'A state with significant economic, military, political and cultural influence that extends globally, not just regionally', 'A country that has never been involved in a conflict', 'A country with the largest land area in the world'], correct: 1, explain: 'A global superpower is a state with the economic, military, political and cultural influence to project power on a worldwide scale, rather than being limited to its own region.', misconception: 'Superpower status is sometimes assumed to rest on a single factor like population or land area, when it actually depends on a combination of economic, military, political and cultural influence acting together.', tag: 'What is a global superpower?' },
    { q: 'In terms of military spending, which best describes the USA and China\u2019s positions globally?', options: ['China spends more on its military than the USA', 'The USA is the world\u2019s largest military spender, with China spending significantly less, though still among the highest globally', 'Neither country ranks among the top global military spenders', 'The USA and China spend identical amounts on their militaries'], correct: 1, explain: 'The USA has consistently been the world\u2019s largest military spender by a wide margin, while China\u2019s military spending, though considerably lower, still ranks among the highest in the world.', misconception: 'Given China\u2019s growing global influence, it is sometimes assumed its military spending has overtaken the USA\u2019s, when the USA still spends substantially more in absolute terms.', tag: 'Military/geopolitical influence' },
    { q: 'Which trading organisation are both the USA and China members of?', options: ['NAFTA', 'The World Trade Organization (WTO)', 'The European Union', 'ASEAN'], correct: 1, explain: 'Both the USA and China are members of the World Trade Organization (WTO), which shapes global rules around international trade.', misconception: 'NAFTA (now USMCA) is a regional agreement involving the USA, Canada and Mexico, not China, and is sometimes wrongly assumed to include other major economies.', tag: 'Economic influence' },
    { q: 'China\u2019s rapid economic growth in recent decades has been closely linked to:', options: ['A shrinking population and declining urbanisation', 'Urban growth, rising disposable incomes, and becoming a major target for foreign TNC investment', 'A complete absence of international trade', 'A fixed, unchanging economy with no growth'], correct: 1, explain: 'China\u2019s fast economic growth has been closely tied to rapid urbanisation, the emergence of a large urban middle class with rising disposable income, and becoming a major destination for foreign direct investment by transnational corporations.', misconception: 'China\u2019s superpower status is sometimes attributed only to its population size, when the specific pattern of urban growth, rising incomes, and inward FDI investment is the more precise driver geographers point to.', tag: 'Economic influence' },
    { q: '"Americanisation" refers to:', options: ['The process of American culture, media and consumer brands spreading and influencing other countries', 'A trade agreement between the USA and China', 'A term describing Chinese investment in the USA', 'A military alliance in North America'], correct: 0, explain: 'Americanisation describes the global spread and influence of American culture, media, and consumer brands (such as fast food, film and music), illustrating the USA\u2019s cultural influence as a superpower.', misconception: 'Americanisation is sometimes confused with economic or political influence specifically, when it refers more precisely to the spread of American cultural products and lifestyle.', tag: 'Cultural influence' },
    { q: 'The Chinese diaspora is significant to China\u2019s cultural influence because:', options: ['It has no meaningful cultural impact outside China', 'Long-standing communities of overseas Chinese people around the world help spread Chinese cultural traditions, language and cuisine globally', 'It refers only to Chinese citizens who have never left China', 'It is a term unrelated to cultural globalisation'], correct: 1, explain: 'The Chinese diaspora refers to the large, long-established communities of people of Chinese heritage living around the world, who have helped spread Chinese cultural traditions, language, and cuisine internationally.', misconception: 'Cultural influence via diaspora communities is sometimes underweighted compared to media/consumer brand influence, but geographers highlight both routes as important for a superpower\u2019s global cultural reach.', tag: 'Cultural influence' },
    { q: 'Which best compares the USA and China\u2019s membership in international organisations?', options: ['Neither country belongs to any international organisations', 'Both the USA and China are members of the UN Security Council, though the USA holds full membership in more international organisations overall than China', 'China is a member of more international organisations than the USA', 'Only the USA is a member of the United Nations'], correct: 1, explain: 'Both the USA and China are permanent members of the UN Security Council, but the USA holds full membership status in a larger overall number of international organisations, while China has full membership or observer status in a somewhat smaller number.', misconception: 'It is sometimes assumed both countries participate identically in international organisations, when there are measurable differences in the extent and type of their formal international memberships.', tag: 'Military/geopolitical influence' },
    { q: 'A currency being widely held as an international reserve currency is significant for superpower status because:', options: ['It has no real economic significance', 'It reflects global confidence in a country\u2019s currency and economy, giving that country significant influence over international finance', 'It means the currency can no longer be used domestically', 'It only affects a country\u2019s tourism industry'], correct: 1, explain: 'A currency that is widely held as a reserve currency (like the US dollar) reflects strong global confidence in that country\u2019s economic stability, giving it considerable influence over international trade and finance.', misconception: 'Reserve currency status is sometimes overlooked as a form of power, when it is actually a significant source of economic and geopolitical influence for a superpower.', tag: 'Economic influence' },
    { q: 'Comparing the USA and China\u2019s technological influence, which statement is most accurate?', options: ['China has no significant technology sector', 'Both countries have major, globally influential technology sectors, though they differ in their specific strengths and the companies that dominate them', 'Only the USA has any technology companies with global reach', 'Technological influence is not relevant to superpower status'], correct: 1, explain: 'Both the USA and China have major, globally significant technology sectors with internationally recognised companies, though their specific strengths (for example in social media, e-commerce, or hardware manufacturing) differ.', misconception: 'Older narratives sometimes assumed only the USA had globally significant tech companies, when China has developed several technology firms with substantial global reach and influence.', tag: 'USA and China characteristics' },
    { q: 'When producing a comparative analysis of the USA and China as global superpowers, geographers would expect students to:', options: ['Only list facts about one country without comparing them', 'Identify genuine similarities and differences across categories such as economic, military and cultural influence, supported by specific evidence', 'Ignore all evidence and rely only on opinion', 'Focus only on population size as the sole point of comparison'], correct: 1, explain: 'A strong comparative analysis identifies genuine similarities and differences between the USA and China across relevant categories (economic, military, cultural, political), and supports each point with specific evidence rather than generalisation.', misconception: 'A comparison is sometimes treated as simply describing each country separately one after another, when a genuine comparative analysis explicitly draws out similarities and differences between them.', tag: 'Comparative analysis' }
  ]
};

window.SBL_LESSONS['PPN-t1-l3-powerful'] = {
  id: 'PPN-t1-l3-powerful',
  topicNumber: 1,
  topicTitle: 'Global interactions and global power',
  title: 'Powerful organizations and global groups',
  href: '/geography/paper-2/hl-1/t1-global/l3-powerful',
  syllabusFocus: 'Powerful organizations and global groups, including the G7/8, G20 and Organization for Economic Cooperation and Development (OECD) groups; the Organization of the Petroleum Exporting Countries\u2019 (OPEC) influence over energy policies; and global lending institutions, including the International Monetary Fund (IMF) and New Development Bank (NDB).',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of this lesson' },
    { label: 'G7/G8 explained', request: 'Explain what the G7 (and former G8) is, and name its member countries' },
    { label: 'G20 explained', request: 'Explain what the G20 is, and name its member countries' },
    { label: 'The OECD', request: 'Explain what the OECD is and its role' },
    { label: 'OPEC and energy policy', request: 'Explain what OPEC is and its influence over global energy policy' },
    { label: 'The IMF', request: 'Explain the role of the IMF' },
    { label: 'The New Development Bank', request: 'Explain the role of the New Development Bank (NDB)' },
    { label: 'Evaluating these organisations', request: 'Help me evaluate the need for organisations like the G7, G20, OECD, OPEC, IMF and NDB' }
  ],
  checklist: [
    'I can name the member countries of the G7/8, G20, OECD and OPEC.',
    'I can explain the purpose and roles of each of these organisations.',
    'I can explain the role of the IMF and the NDB.',
    'I can evaluate the need for each of these organisations.'
  ],
  readinessQuestions: [
    'What is the difference between the G7 and the G20?',
    'What is the OECD, and what kind of countries tend to be members?',
    'How does OPEC influence global energy policy?',
    'What is the role of the IMF?',
    'Why might a country like Brazil, Russia, India, China or South Africa want an alternative to the IMF, such as the New Development Bank?'
  ],
  quiz: [
    { q: 'The G7 is best described as:', options: ['A formal treaty organisation with a permanent secretariat', 'An informal group of seven major advanced economies that meets to discuss global political and economic issues', 'A military alliance', 'An organisation exclusively focused on oil production'], correct: 1, explain: 'The G7 is an informal grouping of seven major advanced economies (Canada, France, Germany, Italy, Japan, the UK and the USA) that meets to discuss global political, security and economic issues; it has no treaty basis or permanent secretariat.', misconception: 'The G7 is sometimes assumed to be a formal international organisation like the UN, when it is actually an informal forum without a binding treaty or permanent administrative body.', tag: 'G7/G8 explained' },
    { q: 'The G20 differs from the G7 mainly because it:', options: ['Has fewer member countries than the G7', 'Includes a much broader range of major economies, including large emerging economies, alongside the EU and African Union', 'Focuses only on military cooperation', 'Was created before the G7'], correct: 1, explain: 'The G20 includes 19 individual countries plus the European Union and African Union, bringing in major emerging economies (such as Brazil, China, India and South Africa) alongside the advanced economies already in the G7, making it a broader forum for economic cooperation.', misconception: 'The G20 is sometimes assumed to simply be "a bigger version of the G7 with similar countries," when it specifically brings in major emerging economies that are not part of the G7.', tag: 'G20 explained' },
    { q: 'The OECD (Organization for Economic Cooperation and Development) primarily exists to:', options: ['Coordinate global oil production', 'Promote policies that improve economic and social wellbeing through cooperation, research and shared standards among member countries', 'Provide emergency loans to countries in financial crisis', 'Act as a military alliance'], correct: 1, explain: 'The OECD is an intergovernmental organisation that promotes policies to improve economic and social wellbeing, largely through research, data, shared standards and policy cooperation among its member countries, which are mostly high-income, developed economies.', misconception: 'The OECD is sometimes confused with the IMF, but the OECD focuses on policy research, standards and cooperation rather than providing loans or emergency financial assistance.', tag: 'The OECD' },
    { q: 'OPEC (Organization of the Petroleum Exporting Countries) primarily aims to:', options: ['Reduce global reliance on oil entirely', 'Coordinate the petroleum production policies of its member countries in order to help stabilise oil prices and secure a steady income for producers', 'Provide development loans to non-oil-producing countries', 'Act as a forum for advanced economies only'], correct: 1, explain: 'OPEC coordinates the oil production policies of its member countries, aiming to stabilise the global petroleum market and secure steady prices and income for oil-producing member states.', misconception: 'OPEC is sometimes assumed to control all global oil production, when it specifically represents and coordinates a group of oil-exporting member countries, alongside other non-OPEC producers like Russia (as part of the wider "OPEC+" coalition).', tag: 'OPEC and energy policy' },
    { q: 'OPEC can influence global energy policy and prices mainly by:', options: ['Setting global interest rates', 'Agreeing collective production quotas among member states, which affects global oil supply and therefore price', 'Directly setting the retail price of petrol worldwide', 'Controlling renewable energy production'], correct: 1, explain: 'By agreeing collective production quotas among its member countries, OPEC can influence the overall global supply of oil, which in turn affects global oil prices.', misconception: 'It is sometimes assumed OPEC can directly dictate prices at the pump worldwide, when its actual mechanism of influence is coordinating production levels, which affects global supply and price indirectly.', tag: 'OPEC and energy policy' },
    { q: 'The IMF (International Monetary Fund) primarily exists to:', options: ['Promote global tourism', 'Provide financial assistance and policy advice to countries facing balance of payments or economic crises, and promote international monetary cooperation', 'Coordinate global oil production', 'Act as a military alliance'], correct: 1, explain: 'The IMF works to promote international monetary cooperation and provides financial assistance and policy advice to member countries experiencing economic difficulties, such as balance of payments crises.', misconception: 'The IMF is sometimes confused with the World Bank; while related, the IMF specifically focuses on monetary cooperation and short-to-medium term financial stability, rather than long-term development project financing.', tag: 'The IMF' },
    { q: 'The New Development Bank (NDB) was established by which group of countries?', options: ['The G7', 'The BRICS countries (Brazil, Russia, India, China and South Africa)', 'OPEC member states', 'The European Union'], correct: 1, explain: 'The New Development Bank was established by the BRICS countries (Brazil, Russia, India, China and South Africa) to fund infrastructure and sustainable development projects, partly as an alternative to existing institutions like the World Bank and IMF.', misconception: 'The NDB is sometimes confused with older global lending institutions like the World Bank, when it was specifically created by the BRICS group as a newer, alternative source of development finance.', tag: 'The New Development Bank' },
    { q: 'A key reason some countries have supported the creation of the NDB as an alternative to institutions like the IMF is:', options: ['They believe global lending institutions are unnecessary altogether', 'A wish for more influence over lending decisions and financing terms, rather than institutions historically dominated by a smaller group of advanced economies', 'The NDB offers no loans at all', 'The IMF and NDB are identical in every respect'], correct: 1, explain: 'Some emerging economies have supported creating alternative institutions like the NDB partly to gain greater influence over lending decisions and terms, rather than relying solely on institutions where voting power has historically been concentrated among a smaller number of advanced economies.', misconception: 'It is sometimes assumed institutions like the IMF and NDB are interchangeable, when the motivation behind newer institutions like the NDB is partly about rebalancing influence over global lending decisions.', tag: 'The New Development Bank' },
    { q: 'A genuine criticism sometimes made of organisations like the G7 or OECD is that:', options: ['They have too many member countries to be effective', 'Their membership is concentrated among a relatively small group of wealthy, advanced economies, raising questions about how representative their decisions are of the wider world', 'They have no influence on global affairs at all', 'They focus exclusively on environmental issues'], correct: 1, explain: 'A common critique of groups like the G7 or OECD is that their membership is concentrated among a small number of wealthy, advanced economies, which raises questions about how representative or inclusive their decision-making is of the broader global community, including LICs and emerging economies.', misconception: 'Evaluation questions about these organisations are sometimes skipped in favour of simply describing what they do, when geographers are also expected to consider limitations such as representativeness.', tag: 'Evaluating these organisations' },
    { q: 'Evaluating the need for organisations such as the G20, OECD or IMF involves considering that:', options: ['These organisations serve no useful purpose and could be abolished with no consequence', 'They provide valuable forums for cooperation and coordination, though their effectiveness and inclusiveness can be debated depending on whose interests are best represented', 'They are universally regarded as perfect and beyond criticism', 'Only economic factors are relevant when evaluating them'], correct: 1, explain: 'A balanced evaluation recognises that organisations like the G20, OECD or IMF provide genuinely valuable forums for international cooperation and coordination, while also acknowledging legitimate debates about how effectively and inclusively they represent different countries\u2019 interests.', misconception: 'Evaluation is sometimes treated as simply picking one extreme position (either fully positive or fully negative), when geographers are expected to weigh up genuine strengths and limitations together.', tag: 'Evaluating these organisations' }
  ]
};