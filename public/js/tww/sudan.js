/* Travel the Wright Way — destination: Sudan (where the Blue and White Niles meet, a hot desert/Sahel climate, the Nile as a lifeline, Nubian heritage and a humanitarian crisis).
 * Climate data: Khartoum, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: the Blue Nile (from Lake Tana, Ethiopia) and White Nile (from the Lake Victoria region) meet at Khartoum; the Blue Nile carries most of the water and silt in the flood season;
 *   northern Sudan is Sahara desert, the south and centre are Sahel and savanna; haboobs are large dust storms; Sudan is one of the world's main producers of gum arabic;
 *   the pyramids of Meroë were built by the Kingdom of Kush; Sudan has more pyramids than Egypt (over 200); the Merowe Dam on the Nile was completed in 2009;
 *   since April 2023 a war between the Sudanese Armed Forces and the Rapid Support Forces has forced millions from their homes — described by the UN as the world's largest displacement crisis.
 */
(function () {
  var CONFLUENCE_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of the confluence of the Blue Nile and White Nile at Khartoum, with desert to the north and farmland along the rivers">' +
  '<rect width="600" height="420" fill="#e9cf98"/>' +
  // desert dunes in north
  '<g fill="#dfbd7c">' + (function () { var g = ''; for (var i = 0; i < 6; i++) g += '<path d="M' + (20 + i * 100) + ' 70 q 30 -26 60 0 Z"/>'; return g; })() + '</g>' +
  // savanna in south
  '<path d="M0 330 L600 330 L600 420 L0 420 Z" fill="#c4c47a"/><g fill="#6f8a3a">' + (function () { var g = ''; for (var i = 0; i < 9; i++) g += '<circle cx="' + (30 + i * 66) + '" cy="' + (366 + (i % 2) * 18) + '" r="9"/>'; return g; })() + '</g>' +
  // farmland strips
  '<path d="M246 0 L354 0 L346 200 L254 200 Z" fill="#9cc56a" opacity=".85"/>' +
  // rivers
  '<path d="M300 0 C 296 60, 304 130, 300 200" fill="none" stroke="#3b7fb8" stroke-width="16"/>' +
  '<path d="M300 200 C 260 250, 220 320, 180 420" fill="none" stroke="#9fc7e8" stroke-width="14"/>' +
  '<path d="M300 200 C 360 240, 430 300, 500 420" fill="none" stroke="#7a5a3a" stroke-width="14"/>' +
  // Khartoum
  '<circle cx="300" cy="206" r="9" fill="#b42318" stroke="#fff" stroke-width="2"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="300" y1="40" x2="300" y2="58"/><line x1="216" y1="286" x2="234" y2="302"/><line x1="444" y1="306" x2="430" y2="320"/><line x1="320" y1="180" x2="306" y2="198"/><line x1="96" y1="58" x2="80" y2="54"/><line x1="96" y1="346" x2="96" y2="372"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.sudan = {
    id: 'sudan',
    name: 'Sudan',
    short: 'Sudan',
    country: 'Sudan',
    gateway: 'Khartoum',
    lonlat: [32.53, 15.6],
    locator: { box: [21, 40, 8, 23], rivers: [[[35.1, 11.2], [34.4, 12.6], [33.6, 13.8], [32.53, 15.6]], [[31.4, 9.5], [32.4, 12.0], [32.6, 14.0], [32.53, 15.6]], [[32.53, 15.6], [33.0, 17.0], [33.9, 18.0], [32.0, 19.0], [31.2, 20.5], [31.4, 22.0]]], places: [['Khartoum', 32.53, 15.6, 'l'], ['Meroë', 33.75, 16.94, 'r'], ['Port Sudan', 37.22, 19.62, 'l'], ['SAHARA', 26.5, 19.5, 'a'], ['EGYPT', 29.5, 22.4, 'a'], ['ETHIOPIA', 37.8, 10.2, 'a'], ['Red Sea', 38.4, 21.0, 'a']] },
    stamp: { colour: '#b45309', icon: '🏜️' },
    transport: { name: 'Nile ferry', verb: 'Sail', emoji: '⛴️' },
    scene: 'nile',
    photo: { file: 'Sudan Meroe Pyramids 30sep2005.jpg', alt: 'Steep-sided ancient pyramids of Meroë standing on desert sand in Sudan', author: 'Fabrizio Demartis', licence: 'CC BY-SA 2.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/' },
    intro: {
      ks3: 'Welcome to Sudan, where two great rivers, the Blue Nile and the White Nile, meet to become the River Nile. Sail north past date palms and desert to the pyramids of Meroë, which are older than many people expect.',
      adv: 'Sail the Nile through Sudan. This expedition covers the Blue and White Nile confluence, a hot desert and Sahel climate, water use and dams, desertification, the ancient Kingdom of Kush, and the human impact of conflict.'
    },
    facts: ['The Blue Nile and the White Nile meet at Khartoum.', 'Sudan has more pyramids than Egypt.', 'Sudan is one of the world’s biggest producers of gum arabic.'],
    climate: {
      place: 'Khartoum, Sudan', source: 'Long-term averages (CRU / Met Office)', lat: '16°N', rmax: 100, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [23.0, 24.5, 28.5, 31.5, 34.0, 34.0, 32.0, 31.0, 32.5, 32.0, 27.5, 24.5],
      rain: [0, 0, 0, 0, 3, 6, 46, 68, 22, 3, 0, 0]
    },
    diagrams: { confluence: CONFLUENCE_SVG },
    stations: [
      {
        id: 'niles', title: 'Where two Niles meet', icon: '🌊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'confluence', prompt: 'Label the meeting of the Niles.',
              spots: [{ x: 50, y: 8, a: 'River Nile' }, { x: 34, y: 66, a: 'White Nile' }, { x: 74, y: 70, a: 'Blue Nile' }, { x: 56, y: 40, a: 'Khartoum' }, { x: 16, y: 12, a: 'Desert' }, { x: 16, y: 80, a: 'Savanna' }],
              extra: [],
              explain: 'The White Nile flows from the south and the Blue Nile from Ethiopia. They join at Khartoum and flow north through the desert as the River Nile.' },
            { type: 'mcq', q: 'Where the two rivers meet, the Blue Nile looks darker than the White Nile. Why?', options: ['It carries lots of mud from Ethiopia', 'It is much colder', 'It is polluted with oil', 'It flows over blue rocks that colour the water'], answer: 0,
              explain: 'Heavy summer rain in the Ethiopian Highlands washes silt into the Blue Nile, making it dark and muddy.' },
            { type: 'mcq', q: 'What is the place where two rivers join called?', options: ['A confluence', 'A source', 'A mouth', 'A meander'], answer: 0,
              explain: 'The confluence of the Blue and White Niles is at Khartoum, the capital.' }
          ],
          adv: [
            { type: 'label', diagram: 'confluence', prompt: 'Label the Nile confluence. One label does not belong.',
              spots: [{ x: 50, y: 8, a: 'Main Nile (to Egypt)' }, { x: 34, y: 66, a: 'White Nile' }, { x: 74, y: 70, a: 'Blue Nile (silt-laden)' }, { x: 56, y: 40, a: 'Confluence at Khartoum' }, { x: 16, y: 12, a: 'Sahara desert' }, { x: 16, y: 80, a: 'Sahel / savanna' }],
              extra: ['Ox-bow lake'],
              explain: 'No ox-bow lake is shown. The irrigated green strip shows how farming depends on the river in a desert.' },
            { type: 'mcq', q: 'The White Nile is longer, but the Blue Nile supplies most of the water in the flood season. Why?', options: ['Monsoon rain falls on the Ethiopian Highlands', 'The White Nile is frozen', 'The Blue Nile has more tributaries in the desert', 'The White Nile flows uphill'], answer: 0,
              explain: 'Much White Nile water also evaporates in the Sudd, a huge wetland in South Sudan.' },
            { type: 'mcq', q: 'Why does Sudan worry about the Grand Ethiopian Renaissance Dam upstream?', options: ['It changes the timing of Blue Nile flows', 'It will flood Khartoum permanently every summer', 'It blocks fish from the Red Sea', 'It diverts the White Nile'], answer: 0,
              explain: 'Sudan may gain from steadier flows and less flooding, but needs data sharing to run its own dams safely.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Hot, dry and dusty', icon: '☀️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the hottest month in Khartoum?', options: ['May (and June)', 'January', 'December', 'August'], answer: 0,
              explain: 'May and June average about 34°C, before the short rains bring a little cloud.' },
            { type: 'mcq', graph: true, q: 'How many months have no rain at all?', options: ['Six', 'One', 'Three', 'Twelve'], answer: 0,
              explain: 'November to April (six months) have no rain at all. Almost all the rain falls in July and August.' },
            { type: 'mcq', q: 'A haboob is a common weather hazard in Sudan. What is it?', options: ['A huge wall of dust and sand', 'A snowstorm', 'A hurricane that blows in from the Red Sea', 'A type of flood'], answer: 0,
              explain: 'Strong winds from thunderstorms pick up dust and can turn day into night for an hour or more.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Khartoum (mm).', answer: 148, tol: 3, unit: 'mm',
              explain: 'Adding the twelve months gives about 148 mm, so Khartoum has a hot desert climate (BWh).' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Khartoum (°C). Give one decimal place.', answer: 11, tol: 0.2, unit: '°C',
              explain: 'Hottest 34.0°C − coolest 23.0°C = 11.0°C.' },
            { type: 'mcq', graph: true, q: 'Why does the little rain Khartoum receives fall in July to September?', options: ['The ITCZ reaches its most northerly position', 'Winter depressions arrive from the Atlantic', 'Sea breezes from the Red Sea', 'Snow melts in the mountains'], answer: 0,
              explain: 'Further south, where the ITCZ stays longer, the rainy season is longer and the land becomes savanna.' }
          ]
        }
      },
      {
        id: 'land', title: 'Living at the desert edge', icon: '🌳',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Gum arabic comes from acacia trees in Sudan. Where might you find it?', options: ['In sweets, fizzy drinks and medicines', 'In petrol', 'In concrete', 'In glass windows and mirrors in old buildings'], answer: 0,
              explain: 'It is a natural thickener. Collecting it gives an income to farmers in the Sahel.' },
            { type: 'mcq', q: 'Why do most people in northern Sudan live close to the Nile?', options: ['It gives water for drinking and farming', 'The desert away from the river is cooler and greener', 'The desert has more jobs', 'They are forced to by law'], answer: 0,
              explain: 'Away from the river, the desert has almost no rain, so farming depends on irrigation.' },
            { type: 'mcq', q: 'Since 2023, war in Sudan has caused a huge crisis. What has happened to millions of people?', options: ['They have had to leave their homes', 'They have moved to Antarctica to escape the heat', 'They have all become farmers', 'They have moved to the Moon'], answer: 0,
              explain: 'The UN describes it as the largest displacement crisis in the world, with many people needing food aid.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these causes of desertification in the Sahel.', bins: ['Physical', 'Human'],
              items: [['Long droughts', 0], ['Rising temperatures', 0], ['Wind erosion of dry soil', 0], ['Overgrazing by livestock', 1], ['Cutting trees for fuel', 1], ['Over-cultivation', 1]],
              explain: 'Planting acacia belts and managing grazing can help restore land and give income from gum arabic.' },
            { type: 'mcq', q: 'Refugees fleeing Sudan have crossed into Chad, Egypt and South Sudan. Which is a push factor?', options: ['Fighting and loss of food supplies', 'Better jobs in neighbouring countries', 'Family living abroad', 'Free education overseas'], answer: 0,
              explain: 'Push factors force people to leave; pull factors attract them to a destination.' },
            { type: 'mcq', q: 'The Merowe Dam (2009) more than doubled Sudan’s electricity supply. What was a negative impact?', options: ['Tens of thousands of people were resettled', 'It made the river saltier than the sea', 'It caused the Sahara to spread south', 'It stopped all rain'], answer: 0,
              explain: 'Large dams bring power and irrigation but flood villages, farmland and archaeological sites.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Kush, Nubia and hospitality', icon: '🏺',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: who built the pyramids of Meroë?', options: ['The Kingdom of Kush', 'The Romans', 'The Vikings, sailing up the Nile from Europe', 'The Aztecs'], answer: 0,
              explain: 'Kush was a powerful kingdom along the Nile. Its kings even ruled Egypt for about a century.' },
            { type: 'mcq', q: 'How are Sudan’s pyramids different from Egypt’s famous pyramids at Giza?', options: ['They are smaller and steeper', 'They are made of ice', 'They are underwater', 'They are perfectly round and covered in gold'], answer: 0,
              explain: 'There are over 200 of them, more than in Egypt, but each one is much smaller.' },
            { type: 'mcq', q: 'Culture: which of these is a popular Sudanese drink, often made with spices like ginger?', options: ['Jebena coffee', 'Hot chocolate with marshmallows', 'Iced bubble tea', 'Maple syrup milkshake'], answer: 0,
              explain: 'Coffee is brewed in a clay pot called a jebena and served to guests as a sign of welcome.' }
          ],
          adv: [
            { type: 'mcq', q: 'Sudan has over 500 ethnic groups and many languages. What is the main official language?', options: ['Arabic', 'French', 'Portuguese', 'Swahili'], answer: 0,
              explain: 'English is also an official language, and Nubian languages are spoken in the north.' },
            { type: 'mcq', q: 'South Sudan became independent from Sudan in 2011. What did Sudan lose as a result?', options: ['Most of its oil fields', 'Its capital city', 'Its access to the Nile', 'Its coastline'], answer: 0,
              explain: 'Around three-quarters of the oil was in the south, so Sudan’s government lost much of its income.' },
            { type: 'mcq', q: 'Port Sudan is the country’s main port. Why is it important?', options: ['It is Sudan’s main link to world trade', 'It is the source of the Nile', 'It is the largest desert oasis in the Sahara', 'It is on the Mediterranean'], answer: 0,
              explain: 'It lies on the Red Sea and handles most of Sudan’s imports and exports, including aid supplies.' }
          ]
        }
      }
    ]
  };
})();
