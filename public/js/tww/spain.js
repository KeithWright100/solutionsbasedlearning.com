/* Travel the Wright Way — destination: Spain (the Mediterranean coast: mass tourism, a Mediterranean climate, water shortages, and Spanish culture).
 * Climate data: Málaga, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: Spain receives more than 90 million international tourists a year, among the most of any country;
 *   Benidorm grew from a fishing village in the 1950s into a high-rise resort; in 2024 protests against overtourism took place in cities including Barcelona and Málaga;
 *   the greenhouses of Almería ("the sea of plastic") cover tens of thousands of hectares and are visible from space;
 *   Spain has more desalination capacity than any other European country; over-pumping of coastal aquifers can draw in seawater;
 *   illegal wells for farming threaten the Doñana wetlands; flamenco was added to UNESCO's Intangible Cultural Heritage list in 2010;
 *   the Alhambra in Granada is a palace built during the Moorish (Muslim) rule of southern Spain, which ended in 1492.
 */
(function () {
  var COAST_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of a Spanish Mediterranean coast with a reservoir in the hills, a golf course, plastic greenhouses, high-rise hotels, a desalination plant, a beach and the sea">' +
  '<rect width="600" height="420" fill="#cfe8ff"/>' +
  // hills and reservoir
  '<path d="M0 150 L0 70 C 80 40, 160 60, 240 50 S 420 30, 600 60 L600 150 Z" fill="#b8925a"/>' +
  '<path d="M60 112 C 80 92, 150 92, 170 110 C 150 124, 80 124, 60 112 Z" fill="#3d8fc6"/><rect x="166" y="100" width="8" height="22" fill="#6b7280"/>' +
  // land
  '<rect y="140" width="600" height="190" fill="#e6cf95"/>' +
  // golf course
  '<path d="M110 200 C 130 186, 220 186, 240 204 C 230 226, 130 230, 110 214 Z" fill="#4caf50"/><circle cx="200" cy="206" r="3" fill="#222"/><line x1="200" y1="206" x2="200" y2="188" stroke="#222" stroke-width="1.5"/><path d="M200 188 L212 192 L200 196 Z" fill="#dc2626"/>' +
  // greenhouses
  '<g fill="#f5f7fa" stroke="#b9c2cc" stroke-width="1">' + (function () { var g = ''; for (var r = 0; r < 3; r++) for (var c = 0; c < 5; c++) g += '<rect x="' + (370 + c * 38) + '" y="' + (152 + r * 22) + '" width="34" height="18"/>'; return g; })() + '</g>' +
  // hotels
  '<g fill="#f2f2f2" stroke="#7a828c" stroke-width="1.5">' + (function () { var g = ''; var hs = [52, 66, 44, 70, 58]; for (var i = 0; i < 5; i++) g += '<rect x="' + (40 + i * 46) + '" y="' + (322 - hs[i]) + '" width="34" height="' + hs[i] + '"/>'; return g; })() + '</g>' +
  '<g fill="#7cc3ef">' + (function () { var g = ''; var hs = [52, 66, 44, 70, 58]; for (var i = 0; i < 5; i++) for (var y = 328 - hs[i]; y < 314; y += 9) g += '<rect x="' + (46 + i * 46) + '" y="' + y + '" width="22" height="3"/>'; return g; })() + '</g>' +
  // desalination plant
  '<g fill="#d9dee5" stroke="#5b6573" stroke-width="1.5"><rect x="456" y="286" width="70" height="36"/><circle cx="545" cy="304" r="16"/></g><path d="M490 322 L490 360" stroke="#5b6573" stroke-width="4"/>' +
  // beach and sea
  '<rect y="322" width="600" height="24" fill="#f4dfa6"/><g fill="#e76f51">' + (function () { var g = ''; for (var i = 0; i < 8; i++) g += '<path d="M' + (30 + i * 52) + ' 334 l8 -10 l8 10 Z"/>'; return g; })() + '</g>' +
  '<rect y="346" width="600" height="74" fill="#2f8fcf"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="84" y1="48" x2="100" y2="100"/><line x1="120" y1="180" x2="150" y2="200"/><line x1="480" y1="122" x2="460" y2="152"/><line x1="300" y1="250" x2="270" y2="262"/><line x1="492" y1="256" x2="490" y2="286"/><line x1="100" y1="372" x2="110" y2="336"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.spain = {
    id: 'spain',
    name: 'Spain',
    short: 'Spain',
    country: 'Spain',
    gateway: 'Málaga',
    lonlat: [-4.4, 36.7],
    locator: { box: [-10, 4.5, 35.5, 44], places: [['Madrid', -3.7, 40.42, 'r'], ['Barcelona', 2.17, 41.39, 'l'], ['Málaga', -4.42, 36.72, 'l'], ['Benidorm', -0.13, 38.54, 'r'], ['Almería', -2.46, 36.84, 'r'], ['Granada', -3.6, 37.18, 't'], ['Mediterranean', 1.4, 37.4, 'a']] },
    stamp: { colour: '#dc2626', icon: '🏖️' },
    transport: { name: 'coach tour', verb: 'Drive', emoji: '🚌' },
    scene: 'coast',
    photo: { file: 'Playa de Levante, Benidorm, España, 2014-07-02, DD 86.JPG', alt: 'High-rise hotels behind the crowded Levante beach in Benidorm on the Mediterranean coast', author: 'Diego Delso', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
    intro: {
      ks3: '¡Hola! You land in Málaga on Spain’s sunny Costa del Sol. Hop on a coach and tour the Mediterranean coast, past beaches, high-rise hotels and a sea of plastic greenhouses, and find out why water is running short.',
      adv: 'Tour Spain’s Mediterranean coast by coach. This expedition covers the growth and impacts of mass tourism, a Mediterranean climate, water scarcity and its management, and Spain’s Moorish and Andalusian heritage.'
    },
    facts: ['Spain welcomes more than 90 million international tourists a year.', 'Almería’s greenhouses are so big they can be seen from space.', 'Flamenco, from Andalusia, is on UNESCO’s list of world cultural heritage.'],
    climate: {
      place: 'Málaga, Spain', source: 'Long-term averages (CRU / Met Office)', lat: '37°N',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [10.0, 11.5, 12.5, 14.5, 17.5, 21.5, 24.5, 24.5, 22.0, 17.5, 13.5, 11.0],
      rain: [79, 74, 60, 47, 30, 17, 4, 6, 18, 58, 97, 89]
    },
    diagrams: { coast: COAST_SVG },
    stations: [
      {
        id: 'tourism', title: 'Sun, sea and tourists', icon: '🏖️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'coast', prompt: 'Label this stretch of the Spanish coast.',
              spots: [{ x: 14, y: 8, a: 'Reservoir' }, { x: 18, y: 40, a: 'Golf course' }, { x: 80, y: 26, a: 'Greenhouses' }, { x: 50, y: 57, a: 'Hotels' }, { x: 82, y: 58, a: 'Desalination plant' }, { x: 16, y: 91, a: 'Beach' }],
              extra: [],
              explain: 'Hotels, golf courses and greenhouse farms all need lots of water. Reservoirs store rain, and desalination plants turn seawater into fresh water.' },
            { type: 'mcq', q: 'Why do so many tourists from northern Europe visit Spain’s coast?', options: ['Hot, sunny summers and sandy beaches', 'Snow for skiing on the beaches', 'It is the cheapest country in the world, with free hotels for families', 'Rainforests and volcanoes'], answer: 0,
              explain: 'Reliable sunshine, warm sea, cheap flights and package holidays made Spain one of the world’s top tourist destinations.' },
            { type: 'mcq', q: 'Benidorm was a small fishing village in the 1950s. What is it like now?', options: ['A high-rise resort for millions', 'Still a quiet fishing village', 'A ski resort', 'A farming town that grows rice in flooded fields'], answer: 0,
              explain: 'Mass tourism transformed the coast. Benidorm now has one of the highest numbers of skyscrapers per person in the world.' }
          ],
          adv: [
            { type: 'label', diagram: 'coast', prompt: 'Label the coast. One label does not belong.',
              spots: [{ x: 14, y: 8, a: 'Reservoir' }, { x: 18, y: 40, a: 'Irrigated golf course' }, { x: 80, y: 26, a: 'Intensive greenhouses' }, { x: 50, y: 57, a: 'Mass-tourism resort' }, { x: 82, y: 58, a: 'Desalination plant' }, { x: 16, y: 91, a: 'Beach' }],
              extra: ['Glacier'],
              explain: 'Every land use here competes for the same scarce water, especially in summer when rainfall is lowest.' },
            { type: 'mcq', q: 'In 2024 residents in cities such as Barcelona and Málaga protested against overtourism. What was a main complaint?', options: ['Holiday lets pushing up rents for local people', 'Too few tourists visiting in summer', 'A lack of hotels', 'Tourists refusing to spend any money in local shops or restaurants'], answer: 0,
              explain: 'Short-term holiday lets reduce housing for residents. Cities are now limiting new licences and raising tourist taxes.' },
            { type: 'mcq', q: 'A new hotel creates jobs for builders, cleaners, farmers and taxi drivers. What is this called?', options: ['The multiplier effect', 'Leakage', 'Counter-urbanisation', 'The resource curse, which affects countries with valuable minerals'], answer: 0,
              explain: 'Money spent by tourists circulates through the local economy. Leakage is the opposite: profits flowing out to foreign companies.' }
          ]
        }
      },
      {
        id: 'climate', title: 'A Mediterranean climate', icon: '☀️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Málaga?', options: ['November', 'July', 'August', 'May'], answer: 0,
              explain: 'November has the tallest bar, about 97 mm.' },
            { type: 'mcq', graph: true, q: 'Which season is hot and dry in Málaga?', options: ['Summer', 'Winter', 'Autumn', 'Spring, when the rivers flood every year'], answer: 0,
              explain: 'July and August are about 24°C on average, with almost no rain. That is exactly when most tourists arrive.' },
            { type: 'mcq', q: 'Málaga has hot, dry summers and mild, wet winters. What is this type of climate called?', options: ['Mediterranean', 'Tropical rainforest', 'Polar', 'Hot desert'], answer: 0,
              explain: 'The same climate is found around the Mediterranean Sea and in places like California and Cape Town.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'What percentage of Málaga’s yearly rain falls from October to March? Give a whole number.', answer: 79, tol: 1, unit: '%',
              explain: 'October to March = 457 mm out of 579 mm, which is about 79%.' },
            { type: 'mcq', q: 'Why are Mediterranean summers so dry?', options: ['High pressure moves north and blocks depressions', 'The sea is far too warm for any clouds to form in summer', 'Trade winds blow from the Sahara all year', 'The jet stream stays over Spain in summer'], answer: 0,
              explain: 'In winter the high pressure retreats south, letting Atlantic depressions bring rain.' },
            { type: 'mcq', graph: true, q: 'Why is water stress worst in summer on the Costa del Sol?', options: ['Demand peaks just as rainfall is lowest', 'Rivers freeze in summer', 'Reservoirs are emptied for cleaning every summer', 'Fewer people live there in summer'], answer: 0,
              explain: 'Tourists, swimming pools, golf courses and irrigated crops all use the most water when it hardly rains.' }
          ]
        }
      },
      {
        id: 'water', title: 'Running out of water', icon: '💧',
        tasks: {
          ks3: [
            { type: 'sort', q: 'Sort these ways of managing water shortages.', bins: ['Increase supply', 'Reduce demand'],
              items: [['Desalination plants', 0], ['Building reservoirs', 0], ['Piping water from wetter regions', 0], ['Drip irrigation for crops', 1], ['Fixing leaking pipes', 1], ['Water-saving showers in hotels', 1]],
              explain: 'Increasing supply is often expensive. Reducing demand is usually cheaper and more sustainable.' },
            { type: 'mcq', q: 'Almería grows fruit and vegetables in a “sea of plastic” greenhouses. Where does much of the food go?', options: ['To supermarkets across northern Europe', 'Only to local markets', 'It is thrown away', 'To South America, by cargo ship across the Atlantic'], answer: 0,
              explain: 'Winter tomatoes, peppers and cucumbers in UK shops often come from Almería, using scarce local water.' },
            { type: 'mcq', q: 'How does a desalination plant make fresh water?', options: ['It removes salt from seawater', 'It melts glaciers', 'It collects water from clouds', 'It cleans the water in swimming pools after the tourists leave'], answer: 0,
              explain: 'Desalination works even in drought, but it uses a lot of energy.' }
          ],
          adv: [
            { type: 'mcq', q: 'Farmers near the coast have pumped too much groundwater. What problem can this cause?', options: ['Seawater seeps into the aquifer', 'The aquifer overflows', 'Crops grow too fast', 'The water becomes warmer and is then too hot to use'], answer: 0,
              explain: 'This is saltwater intrusion. Once an aquifer turns salty, it can be ruined for drinking or irrigation for decades.' },
            { type: 'mcq', q: 'What is the main environmental drawback of desalination?', options: ['High energy use and salty brine waste', 'It makes the sea colder', 'It only works in winter', 'It uses up rainwater stored in reservoirs, leaving rivers dry'], answer: 0,
              explain: 'Powering plants with solar energy and diluting brine carefully can reduce the impacts.' },
            { type: 'mcq', q: 'Doñana, one of Europe’s most important wetlands, is drying out. What is a major cause?', options: ['Illegal wells to irrigate strawberry farms', 'Too much rain', 'Tourists swimming in it', 'Glaciers melting nearby, which floods it with cold water'], answer: 0,
              explain: 'Groundwater pumping for berry farms has lowered water tables. Doñana is a vital stop for millions of migrating birds.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Flamenco and the Alhambra', icon: '💃',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: flamenco comes from Andalusia in southern Spain. What is it?', options: ['Music, song and dance', 'A seafood rice dish', 'A type of bull', 'A long Spanish afternoon nap, usually after lunch'], answer: 0,
              explain: 'Flamenco combines guitar, singing, clapping and dance. It is on UNESCO’s list of Intangible Cultural Heritage.' },
            { type: 'mcq', q: 'Culture: what are tapas?', options: ['Small dishes of food to share', 'Traditional Spanish shoes', 'Festival fireworks', 'Spanish football clubs that play in the summer'], answer: 0,
              explain: 'Tapas are small snacks, like olives, tortilla or patatas bravas, often shared with friends in the evening.' },
            { type: 'mcq', q: 'Culture: the Alhambra in Granada is a famous palace. Who built it?', options: ['Muslim rulers of southern Spain', 'The Romans', 'The Vikings', 'Tourist companies in the 1960s to attract visitors'], answer: 0,
              explain: 'Muslim rulers (the Moors) governed much of Spain for centuries until 1492. Their influence shows in buildings, words and food.' }
          ],
          adv: [
            { type: 'mcq', q: 'Many Spanish words, such as “aceite” (oil) and “azúcar” (sugar), come from which language?', options: ['Arabic', 'German', 'Greek', 'Japanese'], answer: 0,
              explain: 'Centuries of Moorish rule left thousands of Arabic-origin words in Spanish.' },
            { type: 'sort', q: 'Classify these impacts of mass tourism on the Spanish coast.', bins: ['Positive', 'Negative'],
              items: [['Jobs in hotels and restaurants', 0], ['Money for roads and airports', 0], ['Income that funds heritage sites', 0], ['Seasonal, low-paid work', 1], ['Coastline covered in concrete', 1], ['Pressure on water in summer', 1]],
              explain: 'Tourism brings wealth but needs careful planning to be sustainable.' },
            { type: 'mcq', q: 'Spanish resorts are trying to attract visitors outside summer. Why?', options: ['To spread jobs and income through the year', 'To stop all summer tourism', 'Because beaches close in summer', 'Because it never rains in winter, so the water problem disappears completely'], answer: 0,
              explain: 'Year-round tourism gives workers steadier jobs and eases peak pressure on water and infrastructure.' }
          ]
        }
      }
    ]
  };
})();
