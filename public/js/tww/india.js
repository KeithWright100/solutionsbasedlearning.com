/* Travel the Wright Way — destination: India (Mumbai: the monsoon and relief rainfall, a tropical wet and dry climate, a megacity and its informal economy, farming and Indian culture).
 * Climate data: Mumbai, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: the south-west monsoon arrives in Mumbai in June; moist winds from the Arabian Sea rise over the Western Ghats, giving heavy relief rain, with a rain shadow over the Deccan Plateau;
 *   on 26 July 2005 Santacruz (Mumbai) recorded 944 mm of rain in 24 hours, causing deadly floods; Mumbai's suburban trains carry millions of passengers a day;
 *   Dharavi is one of Asia's largest informal settlements, with thousands of small businesses including recycling, pottery and leatherwork;
 *   Mumbai's dabbawalas deliver around 200,000 home-cooked lunches a day; Ganesh Chaturthi is Mumbai's biggest festival; Mumbai is the home of Bollywood;
 *   kharif crops (such as rice and cotton) are sown with the monsoon rains; rabi crops (such as wheat and chickpeas) are grown in the cooler, drier winter.
 */
(function () {
  var MONSOON_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section showing moist monsoon winds from the Arabian Sea passing over Mumbai, rising over the Western Ghats with heavy rain, and a dry rain shadow beyond">' +
  '<rect width="600" height="420" fill="#cfe0ee"/>' +
  // sea
  '<rect y="272" width="172" height="148" fill="#2f8fcf"/><g stroke="#e6f6ff" stroke-width="2" fill="none" opacity=".8"><path d="M20 300 q10 -6 20 0 t20 0"/><path d="M90 330 q10 -6 20 0 t20 0"/><path d="M30 370 q10 -6 20 0 t20 0"/></g>' +
  '<g stroke="#9fd0f5" stroke-width="2" fill="none"><path d="M40 268 C 44 252, 36 244, 40 230"/><path d="M90 268 C 94 252, 86 244, 90 230"/><path d="M140 268 C 144 252, 136 244, 140 230"/></g>' +
  // land and Western Ghats
  '<path d="M168 272 L232 268 L330 120 L430 228 L600 226 L600 420 L168 420 Z" fill="#5f9a4a"/>' +
  '<path d="M330 120 L430 228 L600 226 L600 420 L330 420 Z" fill="#c9a66b"/>' +
  '<path d="M168 272 L232 268 L330 120 L330 420 L168 420 Z" fill="#4f8f3e"/>' +
  // Mumbai
  '<g fill="#e5e7eb" stroke="#6b7280" stroke-width="1">' + (function () { var g = ''; var hs = [22, 34, 18, 28, 40, 24]; for (var i = 0; i < 6; i++) g += '<rect x="' + (174 + i * 10) + '" y="' + (270 - hs[i]) + '" width="9" height="' + hs[i] + '"/>'; return g; })() + '</g>' +
  // clouds and rain
  '<g fill="#6b7280"><ellipse cx="250" cy="96" rx="60" ry="22"/><ellipse cx="300" cy="80" rx="54" ry="24"/><ellipse cx="200" cy="112" rx="44" ry="16"/></g>' +
  '<g stroke="#3d8fc6" stroke-width="2.5">' + (function () { var g = ''; for (var i = 0; i < 14; i++) g += '<line x1="' + (180 + i * 11) + '" y1="' + (122 + (i % 3) * 4) + '" x2="' + (174 + i * 11) + '" y2="' + (150 + (i % 3) * 10) + '"/>'; return g; })() + '</g>' +
  // moist wind arrow and sinking dry air
  '<g fill="#1d4ed8" stroke="#1d4ed8" stroke-width="5"><path d="M20 210 C 90 206, 170 196, 232 160" fill="none"/><path d="M236 150 L238 172 L220 162 Z" stroke-width="1"/></g>' +
  '<g fill="#b45309" stroke="#b45309" stroke-width="4"><path d="M380 110 C 420 130, 450 160, 470 196" fill="none"/><path d="M462 196 L476 210 L480 190 Z" stroke-width="1"/></g>' +
  '<circle cx="80" cy="40" r="20" fill="#ffd166"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="120" y1="158" x2="140" y2="196"/><line x1="264" y1="48" x2="262" y2="118"/><line x1="200" y1="290" x2="200" y2="262"/><line x1="348" y1="306" x2="300" y2="190"/><line x1="504" y1="182" x2="510" y2="224"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.india = {
    id: 'india',
    name: 'India: Mumbai',
    short: 'Mumbai',
    country: 'India',
    gateway: 'Mumbai',
    lonlat: [72.88, 19.08],
    locator: { box: [67.5, 91, 6.5, 30.5], places: [['Mumbai', 72.88, 19.08, 'l'], ['Delhi', 77.21, 28.61, 'r'], ['Kolkata', 88.36, 22.57, 'l'], ['Chennai', 80.27, 13.08, 'r'], ['Arabian Sea', 69.6, 14.5, 'a'], ['Bay of Bengal', 87.5, 15, 'a'], ['Deccan Plateau', 77.3, 17.5, 'a']] },
    stamp: { colour: '#ea580c', icon: '🌧️' },
    transport: { name: 'train', verb: 'Ride', emoji: '🚆' },
    scene: 'monsoon',
    photo: { file: 'Mumbai monsoon.jpg', alt: 'A flooded street in Bandra, Mumbai, during heavy monsoon rain, with traffic driving through the water', author: 'PlaneMad', licence: 'CC BY-SA 2.5', licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.5/' },
    intro: {
      ks3: 'Namaste! Welcome to Mumbai, one of the biggest cities in the world. The monsoon has just arrived, and heavy rain is sweeping in from the Arabian Sea. Catch a train through the city and out into the green hills of the Western Ghats.',
      adv: 'From Mumbai you travel by train into the Western Ghats. This expedition covers the causes and effects of the monsoon, relief rainfall, a tropical wet and dry climate, megacity growth and the informal economy, monsoon farming, and Indian culture.'
    },
    facts: ['Mumbai gets most of its yearly rain in just four months, June to September.', 'On 26 July 2005, 944 mm of rain fell on Mumbai in a single day.', 'Mumbai’s dabbawalas deliver around 200,000 lunches every day.'],
    climate: {
      place: 'Mumbai, India', source: 'Long-term averages (CRU / Met Office)', lat: '19°N', rmax: 1000, rstep: 200,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [24.5, 24.5, 27.0, 29.0, 30.5, 29.0, 27.5, 27.5, 27.5, 28.5, 27.5, 25.5],
      rain: [0, 1, 0, 1, 13, 576, 967, 621, 347, 83, 11, 3]
    },
    diagrams: { monsoon: MONSOON_SVG },
    stations: [
      {
        id: 'monsoon', title: 'Here comes the monsoon', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'monsoon', prompt: 'Label how the monsoon brings rain to Mumbai.',
              spots: [{ x: 16, y: 34, a: 'Moist wind' }, { x: 44, y: 8, a: 'Heavy rain' }, { x: 33, y: 72, a: 'Mumbai' }, { x: 58, y: 76, a: 'Western Ghats' }, { x: 84, y: 40, a: 'Rain shadow' }, { x: 14, y: 88, a: 'Arabian Sea' }],
              extra: [],
              explain: 'Warm, moist air blows in from the sea. As it is forced up over the Western Ghats it cools and drops heavy rain. Beyond the hills the air sinks and is dry.' },
            { type: 'mcq', q: 'What is a monsoon?', options: ['A seasonal wind change bringing a rainy season', 'A type of tropical storm', 'A flood caused by melting snow', 'A dry wind that blows from the desert for a few days every year'], answer: 0,
              explain: 'In summer the winds blow from the sea, bringing rain. In winter they blow from the land, so it is dry.' },
            { type: 'mcq', q: 'Why does the air cool as it rises over the Western Ghats?', options: ['Air cools as it rises and expands', 'The mountains are covered in ice all year', 'The sea is colder at night', 'Clouds block the sun'], answer: 0,
              explain: 'Cooler air cannot hold as much water vapour, so it condenses into clouds and rain. This is relief rainfall.' }
          ],
          adv: [
            { type: 'label', diagram: 'monsoon', prompt: 'Label the monsoon cross-section. One label does not belong.',
              spots: [{ x: 16, y: 34, a: 'South-west monsoon' }, { x: 44, y: 8, a: 'Relief rainfall' }, { x: 33, y: 72, a: 'Mumbai' }, { x: 58, y: 76, a: 'Windward slope' }, { x: 84, y: 40, a: 'Rain shadow' }, { x: 14, y: 88, a: 'Warm ocean' }],
              extra: ['Cold front'],
              explain: 'Cold fronts belong to mid-latitude depressions. Here the moist south-west monsoon is forced up the windward slope of the Western Ghats.' },
            { type: 'mcq', q: 'Why do the monsoon winds blow from the sea onto India in summer?', options: ['The land heats up, making low pressure', 'The sea becomes much colder than the land, so the air sinks over it', 'The Himalayas push winds south', 'The Earth spins faster in summer'], answer: 0,
              explain: 'The land heats faster than the sea. The ITCZ also moves north over India, pulling in moist south-westerly winds.' },
            { type: 'mcq', q: 'In some El Niño years the Indian monsoon is weaker. Why does this matter so much?', options: ['Much farmland relies on monsoon rain', 'Cities would have too much water', 'Tourism would stop completely', 'It would cause snow to fall in Mumbai and the crops would freeze'], answer: 0,
              explain: 'A weak monsoon can mean drought, lower harvests, higher food prices and water shortages for hundreds of millions of people.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Wet and dry seasons', icon: '☔',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Mumbai?', options: ['July', 'January', 'April', 'December'], answer: 0,
              explain: 'July gets about 967 mm, more than London gets in a whole year.' },
            { type: 'mcq', graph: true, q: 'Which months are almost completely dry in Mumbai?', options: ['December to April', 'June to September', 'July and August', 'May and June'], answer: 0,
              explain: 'For about five months there is almost no rain at all.' },
            { type: 'mcq', graph: true, q: 'Which month is the hottest in Mumbai?', options: ['May', 'July', 'January', 'August'], answer: 0,
              explain: 'May is hottest, just before the monsoon arrives. Thick cloud and rain then cool things down a little.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Mumbai (mm).', answer: 2623, tol: 15, unit: 'mm',
              explain: 'Adding the twelve months gives about 2,623 mm.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly rain falls from June to September? Give a whole number.', answer: 96, tol: 1, unit: '%',
              explain: 'June to September = 2,511 mm out of 2,623 mm, which is about 96%.' },
            { type: 'mcq', graph: true, q: 'Why is May hotter than July in Mumbai?', options: ['In July thick cloud blocks the sun', 'The sun is lower in May', 'Cold winds blow all the way down from the Arctic in July', 'The sea is warmer in July'], answer: 0,
              explain: 'Cloud cover and rain cool the city during the monsoon, so the hottest month comes just before it.' }
          ]
        }
      },
      {
        id: 'city', title: 'Megacity Mumbai', icon: '🏙️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Dharavi is one of Asia’s largest informal settlements. Which industry is it famous for?', options: ['Recycling plastic and metal', 'Building cars', 'Mining diamonds', 'Growing tea on terraces in the hills'], answer: 0,
              explain: 'Thousands of small workshops recycle waste, make pottery, leather goods and clothes, creating a huge informal economy.' },
            { type: 'mcq', q: 'Culture: Mumbai’s dabbawalas deliver home-cooked lunches to office workers. How do they travel across the city?', options: ['By train, bicycle and on foot', 'By helicopter', 'By boat only', 'By self-driving cars, using phone apps'], answer: 0,
              explain: 'A clever colour-coded system means almost every lunch box reaches the right person on time.' },
            { type: 'mcq', q: 'In July 2005, 944 mm of rain fell on Mumbai in one day. Why did it cause such severe flooding?', options: ['Drains were blocked and overwhelmed', 'There was a tsunami', 'A dam burst upstream', 'Snow melted in the Himalaya and rushed down to the city'], answer: 0,
              explain: 'Old drains blocked with plastic waste, and building on mangroves and wetlands, meant water had nowhere to go.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these jobs in Mumbai.', bins: ['Formal economy', 'Informal economy'],
              items: [['Bank worker in a city office', 0], ['Teacher in a government school', 0], ['Engineer in a film studio', 0], ['Street food seller', 1], ['Waste picker collecting plastics', 1], ['Unregistered workshop sewing clothes', 1]],
              explain: 'Informal work is not taxed or regulated. It gives millions a living but often with low pay, no sick pay and unsafe conditions.' },
            { type: 'mcq', q: 'Why do many people move to Mumbai from rural India?', options: ['More jobs and better services', 'Cheaper housing than villages', 'Cleaner air than the countryside', 'Fewer people than villages'], answer: 0,
              explain: 'Push factors in the countryside (poor harvests, few jobs) and pull factors in the city drive rapid urban growth.' },
            { type: 'mcq', q: 'Mumbai has lost many of its mangrove swamps to building. Why does this increase flood risk?', options: ['They absorb surges and floodwater', 'Mangroves make it rain more, so cutting them down floods the city', 'Mangroves raise sea level', 'Mangroves block the trains'], answer: 0,
              explain: 'Mangroves act as a natural barrier along the coast and creeks. Protecting them is now part of Mumbai’s climate plan.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Festivals, films and farming', icon: '🎬',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: Mumbai is the home of a huge film industry. What is it called?', options: ['Bollywood', 'Hollywood', 'Nollywood', 'Tollywood'], answer: 0,
              explain: 'Bollywood makes hundreds of Hindi-language films a year, famous for song and dance.' },
            { type: 'mcq', q: 'Culture: during Ganesh Chaturthi, Mumbai’s biggest festival, which god is celebrated?', options: ['Ganesh, the elephant-headed god', 'Zeus', 'Thor', 'Ra, the ancient Egyptian sun god'], answer: 0,
              explain: 'Huge statues of Ganesh are paraded through the streets with music and dancing, then placed in the sea.' },
            { type: 'mcq', q: 'Why do Indian farmers wait anxiously for the monsoon each year?', options: ['Their crops need the rain', 'It brings tourists', 'It cools down their animals', 'It brings snow for drinking water'], answer: 0,
              explain: 'About half of India’s farmland has no irrigation and depends on monsoon rain.' }
          ],
          adv: [
            { type: 'sort', q: 'Sort these Indian crops by growing season.', bins: ['Kharif (monsoon)', 'Rabi (winter)'],
              items: [['Rice', 0], ['Cotton', 0], ['Soybeans', 0], ['Wheat', 1], ['Chickpeas', 1], ['Mustard', 1]],
              explain: 'Kharif crops are sown when the monsoon arrives. Rabi crops grow in the cooler, drier winter, often with irrigation.' },
            { type: 'mcq', q: 'Pumping groundwater for irrigation has made northern India a major breadbasket. What is the risk?', options: ['Water tables are falling fast', 'The land is becoming too wet', 'Rivers are getting saltier from snowmelt', 'Rainfall is increasing'], answer: 0,
              explain: 'In states like Punjab, farmers pump water faster than rain replaces it, threatening future harvests.' },
            { type: 'mcq', q: 'Climate change may make monsoon rainfall more extreme. What could this mean for Mumbai?', options: ['More intense floods, longer dry spells', 'No more monsoon at all', 'Snow in winter', 'Cooler summers everywhere, with snow in the Western Ghats'], answer: 0,
              explain: 'Warmer air holds more moisture, so heavy downpours become more likely, while gaps between rains may lengthen.' }
          ]
        }
      }
    ]
  };
})();
