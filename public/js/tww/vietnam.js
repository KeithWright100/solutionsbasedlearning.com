/* Travel the Wright Way — destination: Vietnam (Ha Long Bay karst, a monsoon climate with typhoons, rice and the deltas, rapid economic growth, and Vietnamese culture).
 * Climate data: Ha Long, monthly averages (climatestotravel.com).
 * Facts: Ha Long Bay (UNESCO 1994) has around 1,600 limestone islands and islets; it is a drowned tower-karst landscape — sea level rose after the last ice age and flooded the limestone plain;
 *   wave and solution notches are cut at the base of many towers; there are floating fishing villages; Typhoon Yagi (September 2024) was one of the strongest typhoons to hit northern Vietnam, causing major damage in Quang Ninh;
 *   Vietnam is one of the world's largest rice exporters; the Mekong Delta in the south and the Red River Delta in the north are the main rice areas; the Mekong Delta is threatened by sinking land, sea-level rise, saltwater intrusion and less sediment from upstream dams;
 *   Doi Moi reforms from 1986 opened Vietnam's economy; foreign companies such as Samsung make many smartphones in Vietnam; the population is about 100 million;
 *   Tết (Lunar New Year) is the biggest festival; phở is a noodle soup; the nón lá is a conical leaf hat; water puppetry is a traditional art from the Red River Delta; Hanoi is the capital and Ho Chi Minh City is the largest city.
 */
(function () {
  var KARST_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Ha Long Bay showing limestone towers rising from the sea, a sea cave, a notch at sea level, the drowned karst plain, a floating village and a junk boat">' +
  '<rect width="600" height="420" fill="#d7e7ec"/>' +
  // seabed (drowned plain)
  '<rect y="300" width="600" height="120" fill="#c9b48e"/><g stroke="#a8946c" stroke-width="1.5"><line x1="0" y1="340" x2="600" y2="340"/><line x1="0" y1="380" x2="600" y2="380"/></g>' +
  // sea
  '<rect y="230" width="600" height="70" fill="#3f8f8a" opacity=".85"/>' +
  // towers
  '<path d="M30 300 L30 150 C 30 90, 60 60, 90 60 C 120 60, 150 90, 150 150 L150 300 Z" fill="#7d8f74"/>' +
  '<path d="M250 300 L250 110 C 250 60, 280 40, 310 40 C 340 40, 370 70, 370 120 L370 300 Z" fill="#6f8268"/>' +
  '<path d="M470 300 L470 170 C 470 130, 490 110, 520 110 C 550 110, 570 130, 570 170 L570 300 Z" fill="#7d8f74"/>' +
  '<g fill="#5f9a4a"><circle cx="70" cy="70" r="12"/><circle cx="100" cy="64" r="14"/><circle cx="290" cy="50" r="14"/><circle cx="330" cy="48" r="12"/><circle cx="510" cy="118" r="12"/><circle cx="540" cy="120" r="10"/></g>' +
  // notches at sea level
  '<path d="M150 222 L136 230 L150 238 Z M250 222 L264 230 L250 238 Z M370 222 L356 230 L370 238 Z M470 222 L484 230 L470 238 Z" fill="#3f8f8a"/>' +
  // cave in middle tower
  '<path d="M286 230 C 286 190, 334 190, 334 230 Z" fill="#2f3b33"/><g fill="#d9d4c7"><path d="M296 198 l3 12 l3 -12 Z"/><path d="M314 196 l3 14 l3 -14 Z"/></g>' +
  // sea level line
  '<line x1="0" y1="230" x2="600" y2="230" stroke="#d6f2ee" stroke-width="2" stroke-dasharray="8 6"/>' +
  // floating village
  '<g><rect x="168" y="222" width="60" height="6" fill="#7a4a24"/><rect x="172" y="206" width="22" height="16" fill="#e9d6b0" stroke="#7a4a24"/><rect x="200" y="210" width="22" height="12" fill="#93c5fd" stroke="#7a4a24"/><path d="M170 206 l13 -8 l13 8 Z M198 210 l13 -8 l13 8 Z" fill="#b45309"/></g>' +
  // junk
  '<g transform="translate(410 228)"><path d="M-30 -2 Q -32 8 -20 8 L24 8 Q 32 6 32 -6 Z" fill="#7a4a24"/><line x1="-6" y1="-2" x2="-6" y2="-44" stroke="#4a2a12" stroke-width="2"/><path d="M-6 -42 Q 10 -34 8 -8 L-6 -8 Z" fill="#c2410c"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="200" y1="96" x2="250" y2="120"/><line x1="310" y1="160" x2="310" y2="200"/><line x1="96" y1="262" x2="138" y2="232"/><line x1="300" y1="384" x2="300" y2="320"/><line x1="198" y1="170" x2="198" y2="204"/><line x1="440" y1="150" x2="412" y2="190"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.vietnam = {
    id: 'vietnam',
    name: 'Vietnam',
    short: 'Vietnam',
    country: 'Vietnam',
    gateway: 'Ha Long',
    lonlat: [107.08, 20.91],
    locator: { box: [101.5, 112, 8, 23.6], rivers: [[[103.9, 22.5], [104.8, 21.7], [105.85, 21.03], [106.6, 20.2]], [[105.0, 10.9], [105.8, 10.2], [106.6, 9.7]]], places: [['Hanoi', 105.85, 21.03, 'l'], ['Ha Long', 107.08, 20.91, 'r'], ['Da Nang', 108.2, 16.05, 'r'], ['Ho Chi Minh City', 106.7, 10.78, 'r'], ['MEKONG DELTA', 108.2, 9.3, 'a'], ['CHINA', 104.5, 23.1, 'a'], ['LAOS', 103.6, 18.8, 'a'], ['CAMBODIA', 104.6, 12.7, 'a'], ['South China Sea', 110.4, 13.5, 'a']] },
    stamp: { colour: '#dc2626', icon: '🍜' },
    transport: { name: 'junk boat in Ha Long Bay', verb: 'Sail', emoji: '⛵' },
    scene: 'junk',
    photo: { file: 'Junk Halong Bay Vietnam.jpg', alt: 'A traditional wooden junk with brown sails on calm water in front of steep, forested limestone islands', author: 'Thomas Schoch', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
    intro: {
      ks3: 'Xin chào! Welcome to Vietnam. Sail a junk boat among the hundreds of steep limestone islands of Ha Long Bay, then find out how Vietnam grows so much rice and how it copes with typhoons.',
      adv: 'Sail through Ha Long Bay. This expedition covers drowned tower karst, a monsoon climate and typhoons, the threats facing the Mekong Delta, rapid economic growth since Doi Moi, and Vietnamese culture.'
    },
    facts: ['Ha Long Bay has about 1,600 limestone islands.', 'Vietnam is one of the world’s biggest rice exporters.', 'About 100 million people live in Vietnam.'],
    climate: {
      place: 'Ha Long, Vietnam', source: 'Monthly averages (climatestotravel.com)', lat: '21°N', rmax: 500, rstep: 100,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [16.6, 17.4, 19.9, 23.8, 27.4, 28.8, 29.0, 28.4, 27.6, 25.5, 22.1, 18.5],
      rain: [25, 25, 40, 90, 170, 300, 325, 445, 280, 160, 35, 20]
    },
    diagrams: { karst: KARST_SVG },
    stations: [
      {
        id: 'bay', title: 'Islands of stone', icon: '🏝️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'karst', prompt: 'Label this cross-section of Ha Long Bay.',
              spots: [{ x: 33, y: 22, a: 'Limestone tower' }, { x: 52, y: 36, a: 'Sea cave' }, { x: 16, y: 63, a: 'Notch' }, { x: 50, y: 92, a: 'Old flooded land' }, { x: 33, y: 39, a: 'Floating village' }, { x: 74, y: 34, a: 'Junk boat' }],
              extra: [],
              explain: 'The towers are made of limestone. Waves and sea water cut notches and caves at sea level, and people live in floating villages between the islands.' },
            { type: 'mcq', photo: true, q: 'Look at the photo. What are the steep islands behind the boat made of?', options: ['Limestone', 'Ice', 'Sand', 'Lava'], answer: 0,
              explain: 'Rainwater slowly dissolved the limestone over millions of years, leaving steep towers.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Hanoi from Ha Long?', options: ['West', 'East', 'North', 'South'], answer: 0,
              explain: 'Hanoi, the capital, is about 130 km west of Ha Long.' }
          ],
          adv: [
            { type: 'label', diagram: 'karst', prompt: 'Label the drowned karst landscape. One label does not belong.',
              spots: [{ x: 33, y: 22, a: 'Karst tower' }, { x: 52, y: 36, a: 'Cave (dissolved joint)' }, { x: 16, y: 63, a: 'Notch at sea level' }, { x: 50, y: 92, a: 'Drowned karst plain' }, { x: 33, y: 39, a: 'Floating fishing village' }, { x: 74, y: 34, a: 'Tourist junk' }],
              extra: ['Volcanic plug'],
              explain: 'The towers are limestone, not volcanic rock. The plain between them was flooded when sea level rose after the last ice age.' },
            { type: 'mcq', photo: true, q: 'Study the photo. Why do the islands in Ha Long Bay have such steep sides?', options: ['Limestone dissolved along joints, leaving towers', 'Glaciers carved them into shape in the last ice age', 'Lava cooled into tall columns', 'Waves built them up from sand'], answer: 0,
              explain: 'In a hot, wet climate, solution is rapid. Weaknesses dissolve first, leaving isolated towers, which the sea later flooded.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the straight-line distance from Hanoi to Ho Chi Minh City.', options: ['About 1,150 km', 'About 300 km', 'About 3,000 km', 'About 6,000 km'], answer: 0,
              explain: 'It is about 1,140 km. Vietnam is long and thin, so the north and south have different climates.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Monsoon and typhoons', icon: '🌀',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Ha Long?', options: ['August', 'January', 'December', 'March'], answer: 0,
              explain: 'August gets about 445 mm. This is also when typhoons are most likely.' },
            { type: 'mcq', graph: true, q: 'How is winter in Ha Long different from summer?', options: ['Cooler and much drier', 'Hotter and wetter', 'Snowy and freezing', 'Exactly the same'], answer: 0,
              explain: 'Winters average 16–19°C with little rain. Summers are hot and very wet.' },
            { type: 'mcq', q: 'In 2024 Typhoon Yagi hit northern Vietnam. What is a typhoon?', options: ['A tropical storm with very strong winds', 'A type of earthquake that happens under the sea', 'A large volcano', 'A cold winter wind'], answer: 0,
              explain: 'Typhoons form over warm seas. Yagi brought winds over 150 km/h, floods and landslides.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Ha Long (mm).', answer: 1915, tol: 10, unit: 'mm',
              explain: 'Adding the twelve months gives 1,915 mm.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Ha Long (°C). Give one decimal place.', answer: 12.4, tol: 0.2, unit: '°C',
              explain: 'Warmest 29.0°C − coolest 16.6°C = 12.4°C, large for the tropics because cold air reaches the north in winter.' },
            { type: 'mcq', graph: true, q: 'Why does northern Vietnam have a cool, dry winter?', options: ['North-east monsoon winds blow from mainland Asia', 'Cold ocean currents from Antarctica', 'It lies in the rain shadow of the Himalayas to the west', 'The ITCZ sits over it in winter'], answer: 0,
              explain: 'In summer the wind reverses, and the south-west monsoon brings warm, moist air off the sea.' }
          ]
        }
      },
      {
        id: 'rice', title: 'Rice and rapid growth', icon: '🌾',
        tasks: {
          ks3: [
            { type: 'mcq', photo: { file: 'CanThoFloatingMarket.jpg', alt: 'Many small boats loaded with fruit and vegetables crowded together on a wide brown river', author: 'Doron', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' }, q: 'This photo was taken in the Mekong Delta. What is happening?', options: ['A floating market on the river', 'A boat race', 'A flood rescue', 'People fishing for sharks from small boats'], answer: 0,
              explain: 'In the delta, rivers and canals are like roads, so farmers sell their fruit and vegetables from boats.' },
            { type: 'mcq', q: 'Which crop grows in the flooded fields of Vietnam’s deltas?', options: ['Rice', 'Wheat', 'Apples', 'Potatoes'], answer: 0,
              explain: 'Vietnam is one of the biggest rice exporters in the world.' },
            { type: 'mcq', q: 'Many smartphones are made in factories in Vietnam. Why do companies build factories there?', options: ['Workers are skilled and wages are lower', 'There is no electricity left in South Korea', 'Phones must be made near the sea', 'Vietnam has no other industries'], answer: 0,
              explain: 'Samsung makes a large share of its phones in Vietnam, creating hundreds of thousands of jobs.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these threats to the Mekong Delta.', bins: ['Natural', 'Human'],
              items: [['Sea-level rise', 0], ['Storm surges from typhoons', 0], ['Drought in the dry season', 0], ['Pumping groundwater so land sinks', 1], ['Dams upstream trapping sediment', 1], ['Sand mining from the river bed', 1]],
              explain: 'As the delta sinks and receives less sediment, salt water pushes further inland, damaging rice crops.' },
            { type: 'mcq', photo: { file: 'CanThoFloatingMarket.jpg', alt: 'Many small boats loaded with fruit and vegetables crowded together on a wide brown river', author: 'Doron', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' }, q: 'This photo shows a floating market in the Mekong Delta. What does it suggest about the delta?', options: ['Waterways are the main transport routes', 'The area is a dry desert', 'There is no farming here', 'Roads are better than rivers for moving goods here'], answer: 0,
              explain: 'The delta is flat and crossed by thousands of channels. Fertile silt makes it Vietnam’s “rice bowl”.' },
            { type: 'mcq', q: 'The Doi Moi reforms began in 1986. What did they do?', options: ['Opened the economy to private business and trade', 'Closed Vietnam to all foreign companies and trade', 'Banned rice exports', 'Moved the capital to Ha Long'], answer: 0,
              explain: 'Vietnam changed from one of the poorest countries to a fast-growing middle-income economy.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Phở, puppets and Tết', icon: '🎎',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what is phở?', options: ['A noodle soup', 'A type of boat', 'A festival dance', 'A rice wine'], answer: 0,
              explain: 'It is made with rice noodles, herbs and beef or chicken broth, often eaten for breakfast.' },
            { type: 'mcq', q: 'Culture: Tết is the biggest festival in Vietnam. What does it celebrate?', options: ['The Lunar New Year', 'The end of the rainy season', 'The rice harvest only', 'The longest day of the year'], answer: 0,
              explain: 'Families clean their homes, visit relatives and give lucky money in red envelopes.' },
            { type: 'mcq', q: 'Culture: water puppetry is a traditional art from the Red River Delta. Where are the puppets performed?', options: ['On a pool of water', 'Up a mountain', 'Inside a cave', 'On a train'], answer: 0,
              explain: 'Puppeteers stand behind a screen, waist-deep in water, and move the puppets with long poles.' }
          ],
          adv: [
            { type: 'mcq', q: 'Ha Long Bay attracts millions of visitors. Which is a sustainable management strategy?', options: ['Limiting boats and banning plastic on cruises', 'Building more resorts and hotels on the islands', 'Allowing unlimited cruise ships', 'Dumping waste in the bay'], answer: 0,
              explain: 'Rubbish and sewage from boats and floating villages have harmed water quality, so rules have been tightened.' },
            { type: 'mcq', q: 'Hanoi is the capital, but which is Vietnam’s largest city?', options: ['Ho Chi Minh City', 'Ha Long', 'Hue', 'Da Lat in the Central Highlands'], answer: 0,
              explain: 'Ho Chi Minh City, in the south, is the main economic centre, with over 9 million people.' },
            { type: 'mcq', q: 'Culture: the nón lá (leaf hat) is useful in Vietnam’s climate. Why?', options: ['It shades from sun and sheds rain', 'It keeps the head warm in snow', 'It protects against sandstorms', 'It is only worn at weddings'], answer: 0,
              explain: 'The cone shape lets heavy monsoon rain run off quickly.' }
          ]
        }
      }
    ]
  };
})();
