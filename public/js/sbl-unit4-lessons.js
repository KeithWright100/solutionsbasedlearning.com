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