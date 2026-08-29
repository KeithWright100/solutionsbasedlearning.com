/* ============================================================
   SBL IGCSE Revision — Business Topic Revision Guides

   Mirrors sbl-igcse-revision-topics.js (used for IGCSE Geography
   topics), but for Edexcel IGCSE Business topics. Adds one synthetic
   "lesson" entry to window.SBL_LESSONS per IGCSE Business topic, so
   the existing Teach Me Bot / Test My Knowledge / Challenge Mode
   modal machinery in sbl-teach-bot.js can be reused as-is.

   Load order on an IGCSE Business revision topic page:
     <script src="/js/sbl-igcse-business-revision-topics.js"></script>
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

  function resampleTopicQuiz(revisionLessonId, count) {
    var lesson = window.SBL_LESSONS && window.SBL_LESSONS[revisionLessonId];
    if (!lesson || !lesson._questionBank) return;
    var n = Math.min(count || 20, lesson._questionBank.length);
    lesson.quiz = shuffle(lesson._questionBank).slice(0, n);
  }

  window.sblStartIgcseTopicQuiz = window.sblStartIgcseTopicQuiz || function (revisionLessonId, count) {
    resampleTopicQuiz(revisionLessonId, count);
    window.openTestMyKnowledge(revisionLessonId);
  };

  window.sblOpenIgcseTopicTeachBot = window.sblOpenIgcseTopicTeachBot || function (revisionLessonId, count) {
    resampleTopicQuiz(revisionLessonId, count);
    window.openTeachBot(revisionLessonId);
  };

  window.SBL_LESSONS = window.SBL_LESSONS || {};

  /* ---------------- Topic 1: Business Activity and Influences on Business ---------------- */

  var BUS1_UNIT_TITLE = 'Topic 1: Business Activity and Influences on Business';

  var BUS1_CHECKLIST = [
    'I can identify and explain the main financial aims and objectives of a business: survival, profit, sales, market share and financial security.',
    'I can identify and explain the main non-financial aims and objectives of a business: social objectives, personal satisfaction, challenge, independence and control.',
    'I can explain why a new business may prioritise survival.',
    'I can explain why established businesses may focus on profit, sales growth or increasing market share.',
    'I can explain how changes in market conditions can cause business aims and objectives to change.',
    'I can explain how technological change can cause business aims and objectives to change.',
    'I can explain how business performance can cause aims and objectives to change.',
    'I can explain how legislation can cause business aims and objectives to change.',
    'I can explain how internal reasons can cause business aims and objectives to change.',
    'I can describe the characteristics of a sole trader.',
    'I can describe the characteristics of a partnership.',
    'I can describe the characteristics of a private limited company.',
    'I can describe the characteristics of a public limited company.',
    'I can explain the concepts of risk, ownership and limited liability.',
    'I can explain reasons for and against public ownership.',
    'I can compare forms of business ownership in terms of ownership and control.',
    'I can compare forms of business ownership in terms of sources of finance.',
    'I can compare forms of business ownership in terms of the use of profits.',
    'I can compare forms of business ownership in terms of stakeholders and shareholders.',
    'I can assess the appropriateness of different forms of business ownership for a given business.',
    'I can explain how a franchise operates as a form of business organisation.',
    'I can explain the advantages and disadvantages of operating as a franchise.',
    'I can explain the purpose and characteristics of a social enterprise.',
    'I can explain the characteristics and importance of multinational businesses.',
    'I can define primary, secondary and tertiary economic activities.',
    'I can explain how the primary sector extracts raw materials from the earth.',
    'I can explain how the secondary sector converts raw materials into finished or semi-finished goods.',
    'I can explain how the tertiary sector provides services.',
    'I can classify examples of businesses into the primary, secondary and tertiary sectors.',
    'I can explain how proximity to markets can influence the location of a business.',
    'I can explain how proximity to labour can influence the location of a business.',
    'I can explain how proximity to materials can influence the location of a business.',
    'I can explain how proximity to competitors can influence the location of a business.',
    'I can explain how the nature of the business activity affects location decisions.',
    'I can explain how e-commerce can affect business location decisions.',
    'I can explain how fixed premises can affect business location decisions.',
    'I can explain how legal controls can influence business location.',
    'I can explain how membership of trade blocs can influence business location.',
    'I can assess the most appropriate location for a business using relevant factors.',
    'I can define globalisation.',
    'I can explain opportunities created by globalisation for businesses.',
    'I can explain threats created by globalisation for businesses.',
    'I can explain why a business may choose to become a multinational.',
    'I can explain the benefits to a business of becoming a multinational.',
    'I can explain the benefits to a country or economy where a multinational company is located.',
    'I can explain possible drawbacks to a country or economy where a multinational company is located.',
    'I can calculate an exchange rate conversion.',
    'I can explain how exchange-rate changes can affect an international business.',
    'I can explain how exchange-rate changes can affect importers.',
    'I can explain how exchange-rate changes can affect exporters.',
    'I can explain why governments spend money to provide public services.',
    'I can explain the role of taxation in government spending.',
    'I can explain how constraints on public spending may affect government decisions.',
    'I can explain how infrastructure provision can affect business activity.',
    'I can explain how legislation can affect business activity.',
    'I can explain how trade policy can affect business activity.',
    'I can explain how membership of trading blocs can affect businesses.',
    'I can explain how tariffs can affect businesses.',
    'I can explain how changes in interest rates can affect businesses.',
    'I can explain how changes in interest rates can affect consumer spending.',
    'I can identify social factors that can affect business decisions.',
    'I can explain how social factors can affect business decisions.',
    'I can identify technological factors that can affect business decisions.',
    'I can explain how technological factors can affect business decisions.',
    'I can identify environmental factors that can affect business decisions.',
    'I can explain how environmental factors can affect business decisions.',
    'I can identify political factors that can affect business decisions.',
    'I can explain how political factors can affect business decisions.',
    'I can assess which external factor is likely to have the greatest impact on a given business.',
    'I can explain how revenue can be used to measure business success.',
    'I can explain how market share can be used to measure business success.',
    'I can explain how customer satisfaction can be used to measure business success.',
    'I can explain how profit can be used to measure business success.',
    'I can explain how growth can be used to measure business success.',
    'I can explain how owner or shareholder satisfaction can be used to measure business success.',
    'I can explain how employee satisfaction can be used to measure business success.',
    'I can explain why cash-flow problems or a lack of finance can cause business failure.',
    'I can explain why a lack of competitiveness can cause business failure.',
    'I can explain why failure to adapt to changes in the market can cause business failure.',
    'I can assess whether a business is successful using a range of appropriate measures.'
  ];

  var BUS1_QUESTION_BANK = [
    { q: 'Which of these is a financial objective a business might set?', options: ['Survival', 'Personal satisfaction', 'Independence', 'Challenge'], correct: 0, explain: 'Survival, profit, sales, market share and financial security are financial objectives — measurable in monetary or numerical terms.', misconception: 'Non-financial objectives such as personal satisfaction, challenge and independence matter to owners but are not measured in money.', tag: 'Business objectives' },
    { q: 'Why might a brand-new business prioritise survival over profit in its first year?', options: ['Because new businesses face high failure risk and must first establish themselves in the market', 'Because survival is a legal requirement for new businesses', 'Because new businesses cannot legally make a profit', 'Because customers refuse to buy from new businesses'], correct: 0, explain: 'New businesses face significant uncertainty and risk of failure, so establishing themselves and surviving in the market often takes priority before profit becomes the main objective.', misconception: 'There is no law preventing a new business from making a profit — profit-seeking is simply often not realistic or the top priority in the earliest stage.', tag: 'Business objectives' },
    { q: "An established, well-known business is most likely to prioritise which objective?", options: ['Survival', 'Profit, sales growth or increasing market share', 'Avoiding all risk', 'Reducing quality to cut costs'], correct: 1, explain: 'Once a business is established, it typically shifts focus toward profit, growing sales, or increasing its market share rather than simply surviving.', misconception: '"Avoiding all risk" is not a realistic business objective — all businesses take on some risk in order to grow.', tag: 'Business objectives' },
    { q: "Which of these could cause a business's aims and objectives to change?", options: ['A change in market conditions, technology, business performance or legislation', 'Only a change in the weather', 'Nothing can ever change a business’s objectives', "Only the age of the founder"], correct: 0, explain: 'Business objectives evolve in response to internal factors, such as performance, and external factors, such as market conditions, technological change, or new legislation.', misconception: 'Objectives are not fixed forever — successful businesses adapt them as circumstances change.', tag: 'Business objectives' },
    { q: 'Which is an example of a non-financial business objective?', options: ['Market share', 'Personal satisfaction', 'Sales', 'Profit'], correct: 1, explain: 'Personal satisfaction, challenge, independence, control and social objectives are non-financial — they relate to an owner’s motivations rather than money.', misconception: 'Market share, sales and profit are financial objectives, measured in monetary or numerical terms.', tag: 'Business objectives' },
    { q: 'What is a key characteristic of a sole trader?', options: ['Unlimited liability and full control by one owner', 'Shares are traded on the stock exchange', 'Ownership is limited to a maximum of 20 partners', 'Liability is always limited'], correct: 0, explain: 'A sole trader is owned and controlled by one person, who has unlimited liability, meaning personal assets are at risk if the business cannot pay its debts.', misconception: 'Sole traders do not have limited liability — that protection belongs to limited companies.', tag: 'Types of organisations' },
    { q: "What does 'limited liability' mean for a shareholder in a limited company?", options: ['They can lose more than they invested', 'Their financial loss is limited to the amount they invested in the business', 'They are personally responsible for all business debts', 'They cannot ever lose their investment'], correct: 1, explain: 'Limited liability means a shareholder’s potential loss is restricted to the amount of money they invested — their personal assets are protected.', misconception: 'Limited liability does not mean no risk at all; it just caps the loss at the amount invested rather than exposing personal assets.', tag: 'Types of organisations' },
    { q: 'What is the main difference between a private limited company (Ltd) and a public limited company (Plc)?', options: ['A Plc can sell shares to the general public via a stock exchange, while an Ltd cannot', 'An Ltd always has more shareholders than a Plc', 'A Plc has unlimited liability', 'Only an Ltd can operate internationally'], correct: 0, explain: 'A Plc can offer its shares for sale to the general public, often via a stock exchange, whereas an Ltd’s shares can only be sold privately with the agreement of existing shareholders.', misconception: 'Company size and shareholder numbers don’t strictly determine Ltd vs Plc status — the key legal difference is how shares can be sold.', tag: 'Types of organisations' },
    { q: 'A key advantage of operating as a franchise for the franchisee is:', options: ['Using an already-established, recognised brand name and business model', 'Complete freedom to change the brand’s products', 'Paying no fees to the franchisor', 'Guaranteed success with no risk'], correct: 0, explain: 'A franchisee benefits from an established brand, a proven business model, and support from the franchisor, which can reduce risk compared with starting an independent business.', misconception: 'Franchisees usually pay fees or royalties and must follow the franchisor’s rules closely, so it isn’t fee-free or risk-free.', tag: 'Types of organisations' },
    { q: 'What is the main purpose of a social enterprise?', options: ['To pursue a social or environmental mission while trading like a business', 'To maximise profit for shareholders above all else', 'To avoid ever making a profit', 'To operate exclusively in the public sector'], correct: 0, explain: 'A social enterprise trades to generate income but reinvests most or all of its profits to pursue a social, environmental or community purpose rather than solely maximising shareholder returns.', misconception: 'Social enterprises can and do make a profit — the distinctive feature is how that profit is used, not an absence of profit.', tag: 'Types of organisations' },
    { q: 'Which best describes a multinational business?', options: ['A business that owns or operates in more than one country', 'A business with only one shop', 'A business that only sells online', 'A business that is always a sole trader'], correct: 0, explain: 'A multinational is a business that owns or operates production or service facilities in more than one country.', misconception: 'Multinationals are usually large limited companies, not sole traders, given the scale of operating across several countries.', tag: 'Types of organisations' },
    { q: "When comparing forms of business ownership, which factor relates to 'control'?", options: ['Who makes the key decisions in the business', 'How much profit is made', 'The location of the business', 'The type of product sold'], correct: 0, explain: 'Control refers to who has the power to make key decisions — for example, a sole trader has full control, while a Plc’s control is spread among shareholders and directors.', misconception: 'Control is about decision-making power, not directly about profit levels, location, or products.', tag: 'Types of organisations' },
    { q: 'A business that extracts raw materials, such as a fishing or mining company, belongs to which sector?', options: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'], correct: 0, explain: 'The primary sector involves the extraction of raw materials from the earth or sea, such as farming, fishing and mining.', misconception: 'The secondary sector processes or manufactures those raw materials rather than extracting them.', tag: 'Classification of businesses' },
    { q: 'A furniture manufacturer, converting timber into finished tables and chairs, is part of which sector?', options: ['Primary', 'Secondary', 'Tertiary', 'None of these'], correct: 1, explain: 'The secondary sector converts raw materials into finished or semi-finished goods, such as manufacturing furniture from timber.', misconception: 'Extracting the timber itself would be a primary sector activity — manufacturing it into furniture is secondary.', tag: 'Classification of businesses' },
    { q: 'A hairdressing salon is an example of which sector?', options: ['Primary', 'Secondary', 'Tertiary', 'Extraction'], correct: 2, explain: 'The tertiary sector provides services rather than extracting materials or manufacturing goods, such as hairdressing, retail and banking.', misconception: 'Providing a service is different from extracting or manufacturing — services fall under the tertiary sector.', tag: 'Classification of businesses' },
    { q: 'Which sector would a coal mine belong to?', options: ['Tertiary', 'Secondary', 'Primary', 'Service'], correct: 2, explain: 'A coal mine extracts a raw material (coal) directly from the earth, making it a primary sector activity.', misconception: 'Mining is often confused with manufacturing, but it is the extraction stage, not the processing stage, so it is primary sector.', tag: 'Classification of businesses' },
    { q: 'Why might a business choose to locate close to its target market?', options: ['To reduce transport costs and respond quickly to customer needs', 'To avoid paying any tax', 'To instantly remove all competition', 'Because the law requires it'], correct: 0, explain: 'Locating near customers can reduce delivery and transport costs and time, and help a business respond quickly to changes in demand.', misconception: 'Proximity to market is not about tax avoidance or eliminating competition — it is about efficiency and customer service.', tag: 'Location decisions' },
    { q: 'Why might a business choose to locate near a pool of skilled labour?', options: ['To reduce recruitment and training costs by accessing workers with relevant skills', 'Because skilled workers are always cheaper everywhere', 'To avoid needing any staff', 'Because it is a legal requirement'], correct: 0, explain: 'Locating near a suitable labour supply can reduce recruitment difficulty and training costs, since workers with relevant skills are already available locally.', misconception: 'Skilled labour is not automatically cheaper — the benefit is availability and reduced recruitment and training costs, not necessarily lower wages.', tag: 'Location decisions' },
    { q: 'How has e-commerce affected business location decisions?', options: ['It has allowed some businesses to operate with less need for expensive high street premises', 'It has made physical location irrelevant for all businesses', 'It has forced all businesses to close their online stores', 'It has eliminated the need for warehouses entirely'], correct: 0, explain: 'E-commerce allows some businesses to sell online and reduce reliance on expensive retail premises, though many still need warehouses or distribution centres.', misconception: 'Location still matters for many businesses, for example for warehousing, distribution, or where face-to-face service is needed — it isn’t irrelevant to all businesses.', tag: 'Location decisions' },
    { q: 'How might membership of a trade bloc influence business location?', options: ['It can make it more attractive to locate within the bloc to avoid tariffs on trade with other member countries', 'It always increases the cost of trading with any country', 'It has no effect on business location', 'It only affects primary sector businesses'], correct: 0, explain: 'Locating within a trade bloc can let a business trade with other member countries free of tariffs, making that location more attractive for exporting.', misconception: 'Trade bloc membership generally reduces trade costs with fellow members, not the opposite, and it can affect businesses in any sector.', tag: 'Location decisions' },
    { q: 'A factor influencing location that relates to needing to be near suppliers of raw materials is:', options: ['Proximity to materials', 'Proximity to competitors', 'Legal controls', 'Fixed premises'], correct: 0, explain: 'Proximity to materials means locating close to the source of raw materials needed for production, which can reduce transport costs and delays.', misconception: 'This is distinct from proximity to competitors, which is about rivalry or clustering, or legal controls, such as planning permission or zoning restrictions.', tag: 'Location decisions' },
    { q: 'Which best defines globalisation?', options: ['The increasing interconnection and interdependence of economies and businesses around the world', 'A business operating in only one country', 'A tax charged on imported goods', 'A type of business ownership'], correct: 0, explain: 'Globalisation refers to the growing integration and interdependence of economies, markets and businesses worldwide.', misconception: 'Globalisation is not a tax or a type of ownership — those are separate business concepts.', tag: 'International economy' },
    { q: 'Which of the following is an opportunity created by globalisation for a business?', options: ['Access to new, larger overseas markets', 'Guaranteed elimination of all competition', 'No need to consider exchange rates', 'Automatic reduction in production costs for every business'], correct: 0, explain: 'Globalisation opens up access to larger international markets, giving businesses opportunities to increase sales and their customer base abroad.', misconception: 'Globalisation actually increases competition, from overseas rivals, and makes exchange rates more relevant, not less.', tag: 'International economy' },
    { q: 'Which of the following is a threat created by globalisation for a domestic business?', options: ['Increased competition from overseas businesses entering the domestic market', 'Reduced choice for consumers', 'Fewer potential customers', 'No exposure to exchange-rate risk'], correct: 0, explain: 'Globalisation can bring increased competition, as overseas businesses can more easily enter and compete in a domestic market.', misconception: 'Globalisation tends to increase consumer choice and expose businesses to exchange-rate risk, not reduce them.', tag: 'International economy' },
    { q: "If the value of a country's currency rises (appreciates) against other currencies, this generally makes:", options: ['Exports more expensive and imports cheaper for that country', 'Exports cheaper and imports more expensive', 'Both exports and imports free', 'Neither exports nor imports affected'], correct: 0, explain: 'When a currency appreciates, goods sold abroad become relatively more expensive for foreign buyers, while goods bought from abroad become relatively cheaper.', misconception: 'It’s easy to mix these up — remember a stronger currency makes what a country sells abroad pricier for foreign buyers, and what it buys from abroad cheaper.', tag: 'International economy' },
    { q: 'An exporter would generally be helped by:', options: ['A fall (depreciation) in the value of their home currency', 'A rise (appreciation) in the value of their home currency', 'Exchange rates never changing', 'Only trading in one country'], correct: 0, explain: 'A depreciation, or fall, in the exporter’s home currency makes their goods cheaper for foreign buyers, which can increase demand for exports.', misconception: 'A stronger, appreciating home currency actually makes exports more expensive abroad, which can hurt export sales.', tag: 'International economy' },
    { q: 'If £1 = $1.30, how many dollars would you receive for £200?', options: ['$260', '$200', '$130', '$460'], correct: 0, explain: '£200 × 1.30 = $260, using the given exchange rate to convert pounds into dollars.', misconception: 'A common error is dividing instead of multiplying, or forgetting to apply the exchange rate to the full amount.', tag: 'International economy' },
    { q: 'Why do governments spend money on public services such as healthcare and education?', options: ['To support the wellbeing of citizens and the wider economy', 'Because businesses are legally required to fund all public services', 'Because public services generate no economic benefit', 'Only because it is required by international law'], correct: 0, explain: 'Governments provide public services such as healthcare and education to support citizens’ wellbeing, which in turn supports a productive, functioning economy.', misconception: 'Businesses contribute through taxation, but they are not directly required to “fund” public services themselves — government spending comes primarily from tax revenue.', tag: 'Government policy' },
    { q: "How might a government's infrastructure provision affect business activity?", options: ['Good infrastructure, such as roads and internet access, can make it easier and cheaper for businesses to operate', 'Infrastructure has no effect on business costs', 'Infrastructure only affects government departments', 'Businesses are legally banned from using public infrastructure'], correct: 0, explain: 'Investment in infrastructure such as transport networks, utilities and internet access can reduce business costs and improve efficiency.', misconception: 'Infrastructure directly affects private businesses’ costs and efficiency — it isn’t limited to government use only.', tag: 'Government policy' },
    { q: 'How can a tariff imposed by a government affect a business that imports goods?', options: ['It increases the cost of importing those goods, making them more expensive', 'It automatically reduces the cost of imported goods', 'It has no effect on the price of imported goods', 'It only affects businesses that export, never those that import'], correct: 0, explain: 'A tariff is a tax on imported goods, so it raises the cost for a business importing those goods, which may then be passed on to customers.', misconception: 'Tariffs increase, not decrease, the cost of imports, and they specifically affect importing businesses.', tag: 'Government policy' },
    { q: 'How might a rise in interest rates affect a business?', options: ['It can increase the cost of borrowing, making loans and overdrafts more expensive', 'It always reduces the cost of borrowing', 'It has no impact on consumer spending', 'It guarantees higher sales for the business'], correct: 0, explain: 'A rise in interest rates increases the cost of borrowing for businesses, such as loans and overdrafts, and can reduce consumer spending as saving becomes more attractive and credit more expensive.', misconception: 'Higher interest rates raise borrowing costs and typically dampen, rather than guarantee, consumer spending and sales.', tag: 'Government policy' },
    { q: 'How might membership of a trading bloc affect a business?', options: ['It can make trading with other member countries easier, often without tariffs', 'It always increases tariffs with every other country in the world', 'It prevents any trade with non-member countries', 'It has no effect on international trade'], correct: 0, explain: 'Membership of a trading bloc typically allows easier, often tariff-free, trade between member countries, which can benefit businesses trading within the bloc.', misconception: 'Trading blocs reduce, rather than increase, trade barriers between their own members — they don’t ban trade with non-members either.', tag: 'Government policy' },
    { q: 'Which of the following is a social factor that could affect business decisions?', options: ['Changes in consumer lifestyles and attitudes', 'A change in interest rates', 'A new invention', 'A change in government spending'], correct: 0, explain: 'Social factors relate to changes in society, such as lifestyles, attitudes, demographics and consumer trends, which can influence what and how businesses sell.', misconception: 'Interest rates and government spending are economic or political factors, and a new invention is a technological factor, not social.', tag: 'External factors' },
    { q: 'Which of the following is an example of a technological factor affecting business decisions?', options: ['The development of new production methods or online sales platforms', 'A rise in unemployment', 'A change in fashion trends', 'A new environmental protection law'], correct: 0, explain: 'Technological factors include new production methods, automation and digital platforms that can change how a business operates or sells.', misconception: 'Unemployment is economic, fashion trends are social, and a new environmental law is political or legal — none of these are technological factors themselves.', tag: 'External factors' },
    { q: 'Which of the following is an example of an environmental factor affecting a business?', options: ['Pressure to reduce carbon emissions and use sustainable materials', 'A rise in the exchange rate', 'An increase in interest rates', 'A change in the retirement age'], correct: 0, explain: 'Environmental factors include pressures around sustainability, climate change and resource use that can affect how a business operates.', misconception: 'Exchange rates and interest rates are economic factors, and retirement age changes relate to government or social policy, not environmental factors.', tag: 'External factors' },
    { q: 'Which of the following is an example of a political factor affecting a business?', options: ['A change in government regulations or trade policy', 'A rise in fashion trends', 'A new smartphone app', 'A change in rainfall patterns'], correct: 0, explain: 'Political factors include government regulations, trade policy and legislation that can directly affect how a business must operate.', misconception: 'Fashion trends are social, apps are technological, and rainfall changes are environmental — political factors specifically relate to government action and policy.', tag: 'External factors' },
    { q: 'Which of these is a common measure used to assess business success?', options: ['Profit', 'The colour of the company logo', "The founder's age", 'The number of competitors in the market'], correct: 0, explain: 'Profit is one of the most common measures of business success, alongside revenue, market share, growth and customer satisfaction.', misconception: 'Superficial factors like logo colour or the founder’s age are not meaningful measures of business performance.', tag: 'Measuring success' },
    { q: 'Why might cash-flow problems cause a business to fail, even if it is profitable on paper?', options: ['A business can run out of cash to pay its day-to-day bills even while recording a profit over the year', 'Profitable businesses can never run out of cash', 'Cash flow and profit always mean exactly the same thing', 'Cash-flow problems only affect very large businesses'], correct: 0, explain: 'Cash flow measures money moving in and out day-to-day, while profit is measured over a longer period — a business can be profitable overall but still run short of cash to pay immediate bills, which can cause failure.', misconception: 'Profit and cash flow are related but different concepts; a profitable business can still fail from poor cash-flow management.', tag: 'Measuring success' },
    { q: 'How can a lack of competitiveness contribute to business failure?', options: ['Customers may switch to rivals offering better value, quality or service', 'It always guarantees higher profit', 'It has no effect on customer choice', 'It only affects businesses in the primary sector'], correct: 0, explain: 'If a business is less competitive than its rivals in price, quality or service, customers may switch away, reducing sales and potentially causing failure.', misconception: 'A lack of competitiveness does not benefit a business — it puts sales and survival at risk by driving customers to rivals.', tag: 'Measuring success' },
    { q: 'Why can failing to adapt to changes in the market lead to business failure?', options: ["Customer needs and preferences change over time, and a business that doesn't respond can lose relevance and sales", 'Markets never change once a business is established', 'Adapting to market changes is illegal', "Businesses that don't change always perform better"], correct: 0, explain: 'Markets, technology and customer preferences change over time; a business that fails to adapt risks becoming outdated and losing customers to more responsive competitors.', misconception: 'Standing still is not a safe strategy — markets do change, and businesses that fail to respond risk decline.', tag: 'Measuring success' },
    { q: 'How could employee satisfaction be linked to business success?', options: ['Satisfied employees are often more productive, motivated and likely to stay, reducing recruitment costs', 'Employee satisfaction has no link to business performance', 'Only customer satisfaction matters for success', 'Employee satisfaction guarantees higher profit regardless of other factors'], correct: 0, explain: 'Satisfied employees tend to be more productive and motivated, and are more likely to stay with the business, which can reduce recruitment and training costs and support overall performance.', misconception: 'Employee satisfaction is one of several linked measures of success — it matters, but it doesn’t guarantee profit on its own regardless of other factors.', tag: 'Measuring success' },
    { q: 'When assessing whether a business is successful, why is it important to use a range of measures rather than just one?', options: ['Different measures, such as profit, market share, and customer and employee satisfaction, give a fuller, more balanced picture of performance', 'Only one measure is ever needed and all others are irrelevant', 'Using multiple measures is against best practice', 'A business can only be judged using its size'], correct: 0, explain: 'Relying on a single measure, such as profit alone, can give a misleading picture — using a range of measures gives a more balanced, complete assessment of how successful a business really is.', misconception: 'Good business assessment considers several indicators together, not just one figure like size or profit in isolation.', tag: 'Measuring success' }
  ];

  window.SBL_LESSONS.IGBUS1REV = {
    id: 'IGBUS1REV',
    title: 'Business Activity and Influences on Business — Full Topic Revision',
    syllabusFocus: 'The whole of Edexcel IGCSE Business, Topic 1: Business Activity and Influences on Business — business objectives, types of business organisation, classification of businesses, location decisions, the international economy, government objectives and policies, external factors, and what makes a business successful.',
    starterButtons: [
      { label: 'Overview of the whole topic', request: 'Give me a full overview of Topic 1: Business Activity and Influences on Business, covering business objectives, types of organisation, classification, location, the international economy, government policy and external factors.' },
      { label: 'Business objectives', request: 'Explain the financial and non-financial aims and objectives businesses might have, and why these can change over time.' },
      { label: 'Types of business organisation', request: 'Compare sole traders, partnerships, private limited companies and public limited companies in terms of ownership, control, finance and risk.' },
      { label: 'Franchises and social enterprises', request: 'Explain how franchises operate, and the purpose of social enterprises and multinational businesses.' },
      { label: 'Location decisions', request: 'Explain the factors that influence where a business chooses to locate, including markets, labour, materials, competitors and e-commerce.' },
      { label: 'Globalisation and exchange rates', request: 'Explain the opportunities and threats globalisation creates for businesses, and how exchange-rate changes affect importers and exporters.' },
      { label: 'External factors (STEP)', request: 'Explain how social, technological, environmental and political factors can affect business decisions.' },
      { label: 'Help me plan an answer', request: 'Help me plan an answer assessing whether a business is successful, using a range of appropriate measures such as profit, market share and customer satisfaction.' }
    ],
    checklist: BUS1_CHECKLIST,
    challenge: {
      question: 'Checklist Q&A: simple, direct questions drawn one at a time from the Business Activity and Influences on Business checklist.',
      intro: 'The Challenge Tutor will ask you simple, direct questions based on the checklist for this topic — for example, “Explain why a new business may prioritise survival.” Answer each one before it moves on to the next; it will briefly correct you if you get one wrong.',
      unitTitle: BUS1_UNIT_TITLE,
      checklistItems: BUS1_CHECKLIST
    },
    _questionBank: BUS1_QUESTION_BANK,
    quiz: BUS1_QUESTION_BANK.slice(0, 20)
  };

})();
