/* Travel the Wright Way — destination: Lima and the coast of Peru (a coastal desert, the cold Humboldt Current and upwelling, El Niño, fishing, water supply and informal settlements in a desert city, and Peruvian culture).
 * Climate data: Lima, 1991–2020 averages (climatsetvoyages.com / climatestotravel.com).
 * Facts: Lima has a desert climate made mild by the cold Humboldt (Peru) Current; it almost never rains, but winter mist (garúa) is common;
 *   under normal conditions trade winds blow west across the Pacific, pushing warm water towards Asia, and cold, nutrient-rich water wells up off Peru, supporting one of the world's largest fisheries (anchoveta);
 *   in an El Niño year the trade winds weaken, warm water spreads east, upwelling weakens, fish catches fall and heavy rain and floods hit northern Peru (e.g. 1998, 2017);
 *   Lima is the world's second largest desert city after Cairo; rivers from the Andes (e.g. the Rímac) supply its water; hundreds of thousands of people lack piped water and buy it from tanker trucks;
 *   many people live in informal settlements (pueblos jóvenes) on the desert hills, built by migrants from the Andes; fog-catcher nets collect water from mist;
 *   reed boats (caballitos de totora) have been used by fishermen on the north coast for thousands of years; ceviche is raw fish cured in lime juice; Spanish and Quechua are official languages.
 */
(function () {
  var NINO_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the Pacific Ocean in a normal year: trade winds blow west from Peru towards Asia, warm surface water piles up in the west where rain clouds form, air sinks over the dry coast of Peru, and cold water rises near Peru bringing nutrients for fish">' +
  '<rect width="600" height="420" fill="#e6f0f7"/>' +
  '<path d="M0 200 L40 190 L60 210 L60 420 L0 420 Z" fill="#7aa35f"/>' +
  '<path d="M540 200 L560 150 L600 130 L600 420 L540 420 Z" fill="#d6b77f"/>' +
  '<rect x="60" y="200" width="480" height="220" fill="#2f74b5"/>' +
  '<path d="M60 200 L540 200 L540 230 C 400 236, 250 260, 60 300 Z" fill="#ef7d57" opacity=".75"/>' +
  '<path d="M60 300 C 250 260, 400 236, 540 230" fill="none" stroke="#f8fafc" stroke-width="2" stroke-dasharray="6 4"/>' +
  '<g fill="#94a3b8"><ellipse cx="110" cy="96" rx="60" ry="22"/><ellipse cx="150" cy="84" rx="44" ry="18"/></g><g stroke="#2563eb" stroke-width="2">' + (function () { var g = ''; for (var i = 0; i < 6; i++) g += '<line x1="' + (80 + i * 14) + '" y1="122" x2="' + (74 + i * 14) + '" y2="146"/>'; return g; })() + '</g>' +
  '<path d="M480 180 L200 180" stroke="#1e293b" stroke-width="4"/><path d="M200 180 L216 172 L216 188 Z" fill="#1e293b"/>' +
  '<path d="M150 150 C 150 60, 500 60, 500 150" fill="none" stroke="#64748b" stroke-width="2.5" stroke-dasharray="7 5"/><path d="M500 150 L492 136 L508 136 Z" fill="#64748b"/>' +
  '<path d="M520 360 C 520 320, 530 270, 532 230" fill="none" stroke="#bae6fd" stroke-width="5"/><path d="M532 222 L524 236 L540 236 Z" fill="#bae6fd"/>' +
  '<g fill="#cbd5e1">' + (function () { var g = ''; for (var i = 0; i < 4; i++) g += '<path d="M' + (470 + (i % 2) * 18) + ' ' + (250 + i * 10) + ' l10 -4 l0 8 Z M' + (460 + (i % 2) * 18) + ' ' + (250 + i * 10) + ' a6 4 0 1 0 12 0 a6 4 0 1 0 -12 0"/>'; return g; })() + '</g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="340" y1="140" x2="340" y2="178"/><line x1="120" y1="380" x2="120" y2="262"/><line x1="70" y1="40" x2="100" y2="74"/><line x1="486" y1="390" x2="522" y2="330"/><line x1="510" y1="70" x2="566" y2="140"/><line x1="312" y1="390" x2="470" y2="270"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.peru = {
    id: 'peru',
    name: 'Lima',
    short: 'Lima',
    country: 'Peru',
    gateway: 'Lima',
    lonlat: [-77.04, -12.05],
    locator: { box: [-82.0, -69.5, -18.6, -3.2], places: [['Lima', -77.04, -12.05, 'l'], ['Trujillo', -79.03, -8.11, 'l'], ['Piura', -80.63, -5.19, 'r'], ['Arequipa', -71.54, -16.41, 'l'], ['Cusco', -71.97, -13.53, 'r'], ['Pacific Ocean', -79.6, -14.6, 'a'], ['ANDES', -74.6, -9.6, 'a']] },
    stamp: { colour: '#b45309', icon: '🐟' },
    transport: { name: 'reed boat', verb: 'Paddle', emoji: '⛵' },
    scene: 'totora',
    photo: { file: 'Lima PuebloJov 4.jpg', alt: 'Small brick and wooden houses spread across a bare, sandy desert hillside on the edge of Lima, with no trees or grass', author: 'Håkan Svensson (Xauxa)', licence: 'CC BY 2.5', licenceUrl: 'https://creativecommons.org/licenses/by/2.5/' },
    intro: {
      ks3: '¡Hola! Welcome to Lima, a city of 10 million people in one of the driest deserts on Earth. Paddle a reed boat like Peruvian fishermen have for thousands of years, and find out how a cold ocean current makes the coast so dry and the sea so full of fish.',
      adv: 'Explore Lima and the coast of Peru. This expedition covers a coastal desert climate, the Humboldt Current and upwelling, El Niño and its impacts, the anchoveta fishery, water supply and informal settlements in a desert megacity, and Peruvian culture.'
    },
    facts: ['Lima gets only about 5 mm of rain in a typical year.', 'Lima is the second biggest desert city in the world, after Cairo.', 'Fishermen near Trujillo still use reed boats like their ancestors.'],
    climate: {
      place: 'Lima, Peru', source: '1991–2020 averages (climatsetvoyages.com)', lat: '12°S', rmax: 10, rstep: 2,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [23.4, 24.3, 23.8, 21.8, 19.9, 18.5, 17.7, 17.2, 17.5, 18.2, 19.7, 21.5],
      rain: [1, 0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 0]
    },
    diagrams: { nino: NINO_SVG },
    stations: [
      {
        id: 'ocean', title: 'Cold sea, dry land', icon: '🌊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'nino', prompt: 'Label what happens across the Pacific Ocean in a normal year.',
              spots: [{ x: 57, y: 33 }, { x: 20, y: 90 }, { x: 12, y: 10 }, { x: 81, y: 93 }, { x: 85, y: 17 }, { x: 52, y: 93 }].map(function (s, i) { s.a = ['Winds blow west', 'Warm water', 'Rain over Asia', 'Cold water rises', 'Dry coast of Peru', 'Fish feed here'][i]; return s; }),
              extra: [],
              explain: 'Winds push warm surface water towards Asia. Cold water rises off Peru, bringing nutrients for fish, and the air above it is too cool and stable to make rain.' },
            { type: 'mcq', photo: true, q: 'Look at the photo taken on the edge of Lima. What does the land around the houses show?', options: ['It is a desert with almost no plants', 'It is a thick, steamy tropical rainforest full of trees', 'It is covered in snow and ice', 'It is green farmland with crops'], answer: 0,
              explain: 'Lima is built in a coastal desert. Water has to come from rivers flowing down from the Andes.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Trujillo from Lima?', options: ['North-west', 'South-east', 'North-east', 'South-west'], answer: 0,
              explain: 'Trujillo is about 490 km north-west along the coast. Fishermen there still use reed boats.' }
          ],
          adv: [
            { type: 'label', diagram: 'nino', prompt: 'Label normal (non-El Niño) conditions in the Pacific. One label does not belong.',
              spots: [{ x: 57, y: 33 }, { x: 20, y: 90 }, { x: 12, y: 10 }, { x: 81, y: 93 }, { x: 85, y: 17 }, { x: 52, y: 93 }].map(function (s, i) { s.a = ['Easterly trade winds', 'Warm pool in the western Pacific', 'Rising air and heavy rain', 'Upwelling of cold water', 'Sinking dry air over Peru', 'Rich anchoveta fishing grounds'][i]; return s; }),
              extra: ['Warm water piling up off Peru'],
              explain: 'In an El Niño year the trade winds weaken, warm water spreads east towards Peru and the upwelling slows down.' },
            { type: 'mcq', q: 'Why is Lima a desert even though it is next to the ocean?', options: ['The cold Humboldt Current cools the air, so few rain clouds form', 'It is in the rain shadow of Africa', 'The ocean there is too salty to evaporate', 'Hot winds blow from the Amazon every day'], answer: 0,
              explain: 'Cold water cools the air above it, creating a temperature inversion. Low cloud and mist form, but rarely rain.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Lima to Arequipa.', options: ['About 770 km', 'About 77 km', 'About 2,500 km', 'About 7,700 km'], answer: 0,
              explain: 'Arequipa is about 770 km south-east, in a valley below the volcano El Misti.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Mist but no rain', icon: '🌫️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the warmest month in Lima?', options: ['February', 'August', 'June', 'October'], answer: 0,
              explain: 'Lima is in the Southern Hemisphere, so February is summer. It averages about 24°C.' },
            { type: 'mcq', graph: true, q: 'How much rain does Lima get in a typical month?', options: ['Almost none', 'About 100 mm', 'About 300 mm', 'About 50 mm'], answer: 0,
              explain: 'Most months have 0 or 1 mm. Winter brings grey mist called garúa, but hardly any rain.' },
            { type: 'mcq', graph: true, q: 'What is the temperature in August?', options: ['About 17°C', 'About 30°C', 'About 0°C', 'About 5°C'], answer: 0,
              explain: 'Winters are cool and cloudy, even though Lima is only 12° south of the Equator.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Lima (mm).', answer: 6, tol: 1, unit: 'mm',
              explain: 'Adding the twelve months gives about 6 mm, one of the lowest totals of any big city.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 7.1, tol: 0.2, unit: '°C',
              explain: 'February 24.3°C − August 17.2°C = 7.1°C. The ocean keeps the range small.' },
            { type: 'mcq', q: 'Lima is 12° south of the Equator, yet its winters average only about 17°C. Why?', options: ['The cold ocean current cools the coast', 'It is high up in the Andes', 'Snow falls on the city for weeks every winter', 'It is far from the sea'], answer: 0,
              explain: 'Lima is near sea level, so the cool Humboldt Current is the main reason.' }
          ]
        }
      },
      {
        id: 'nino', title: 'El Niño', icon: '🐟',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'In an El Niño year, the sea off Peru becomes what?', options: ['Warmer than usual', 'Colder than usual', 'Frozen solid', 'Saltier than usual'], answer: 0,
              explain: 'Warm water spreads across the Pacific towards South America.' },
            { type: 'mcq', q: 'Why do fishermen in Peru catch fewer fish in an El Niño year?', options: ['Less cold, food-rich water rises to the surface', 'The fish are all eaten by whales', 'Boats are banned from the sea', 'The sea becomes far too shallow for any boats to fish'], answer: 0,
              explain: 'Anchovies feed on plankton that grows in the cold, nutrient-rich water.' },
            { type: 'mcq', q: 'What happens in the deserts of northern Peru during a strong El Niño?', options: ['Heavy rain causes floods and mudslides', 'It snows for months', 'The rivers all dry up', 'Huge sand dunes blow in and cover the cities'], answer: 0,
              explain: 'In 1998 and 2017, normally dry rivers burst their banks, destroying homes, roads and bridges.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these impacts of a strong El Niño on Peru.', bins: ['Social and economic', 'Environmental'],
              items: [['Fishermen lose income', 0], ['Roads and bridges washed away', 0], ['Disease spreads after floods', 0], ['Anchovy numbers collapse', 1], ['Seabirds starve', 1], ['Desert briefly turns green', 1]],
              explain: 'El Niño affects weather worldwide, bringing drought to Australia and Indonesia while Peru floods.' },
            { type: 'mcq', q: 'What causes an El Niño event to start?', options: ['The trade winds weaken or reverse', 'An earthquake under the Pacific', 'The Humboldt Current gets stronger', 'More rain falls over Asia'], answer: 0,
              explain: 'Without strong easterly winds, warm water slides back east and upwelling off Peru slows.' },
            { type: 'mcq', q: 'Peru’s anchoveta catch is mostly turned into fishmeal. What is fishmeal mainly used for?', options: ['Feeding farmed fish and animals around the world', 'Making plastic bottles', 'Building houses', 'Producing electricity'], answer: 0,
              explain: 'Peru is the world’s biggest producer of fishmeal, so El Niño affects food prices globally.' }
          ]
        }
      },
      {
        id: 'city', title: 'A desert megacity', icon: '🏘️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Many people living on Lima’s desert hills have no water pipes. How do they get water?', options: ['They buy it from tanker trucks', 'From wells in their gardens', 'From rain collected on roofs', 'From the sea, without treatment'], answer: 0,
              explain: 'Tanker water costs much more than piped water, so the poorest people pay the most.' },
            { type: 'mcq', q: 'Culture: what is ceviche, a famous Peruvian dish?', options: ['Raw fish cured in lime juice', 'A sweet chocolate cake', 'A type of potato soup', 'Grilled beef served on a wooden stick'], answer: 0,
              explain: 'It uses fresh fish from the cold, rich waters off the coast.' },
            { type: 'mcq', q: 'Culture: which ancient language, spoken by the Inca, is still official in Peru?', options: ['Quechua', 'Latin', 'Greek', 'Arabic'], answer: 0,
              explain: 'Millions of Peruvians speak Quechua, especially in the Andes. Spanish is also official.' }
          ],
          adv: [
            { type: 'mcq', photo: true, q: 'Study the photo. This pueblo joven was built by migrants. Where did most of them come from?', options: ['Rural villages in the Andes', 'Cities in Europe', 'Small islands far out in the Pacific', 'The Amazon only'], answer: 0,
              explain: 'People moved to Lima for jobs and services, and built homes on unused desert land.' },
            { type: 'mcq', q: 'Fog-catcher nets are put up on the hills above Lima. How do they help?', options: ['Water droplets in the mist collect on the mesh', 'They stop sand blowing into houses', 'They make electricity from the wind', 'They keep birds away from crops'], answer: 0,
              explain: 'The water drips into tanks and is used for gardens and trees. It is a cheap, low-tech solution.' },
            { type: 'mcq', q: 'Lima’s rivers are fed by glaciers in the Andes. Why is this a long-term risk?', options: ['Glaciers are shrinking as the climate warms', 'The glaciers are getting much bigger every single year', 'The rivers flow uphill', 'Glacier water is too salty to drink'], answer: 0,
              explain: 'Meltwater keeps rivers flowing in the dry season. As glaciers shrink, dry-season flow will fall.' }
          ]
        }
      }
    ]
  };
})();
