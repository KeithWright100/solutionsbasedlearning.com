/* Travel the Wright Way — destination: Colombia (altitude zones in the tropical Andes, coffee farming and fair trade, Medellín's urban transformation and the Metrocable, a tropical highland climate with two rainy seasons, and Colombian culture).
 * Climate data: Medellín, about 1,500 m, 1991–2020 averages (climatestotravel.com).
 * Facts: temperatures fall with height, so Colombia has altitude zones: tierra caliente (hot lowlands), tierra templada (temperate, the coffee belt), tierra fría (cold, potatoes and dairy, e.g. Bogotá) and páramo (high grassland) below the snow line;
 *   Medellín lies in the Aburrá valley at about 1,500 m and is called the "city of eternal spring"; it has two rainy seasons because the ITCZ passes over Colombia twice a year;
 *   Colombia is one of the world's biggest coffee producers; arabica coffee grows best on steep, cool slopes at about 1,200–2,000 m; the Coffee Cultural Landscape is a UNESCO World Heritage Site; Willys jeeps carry coffee in the hills;
 *   Medellín's Metrocable (opened 2004) was the first cable car built as public transport to link poor hillside districts (comunas) to the metro; with library parks and outdoor escalators it is linked to falling crime;
 *   the Quindío wax palm, the national tree, is the world's tallest palm; Colombia has more bird species than any other country; culture: arepas, cumbia music, the Feria de las Flores in Medellín, writer Gabriel García Márquez.
 */
(function () {
  var ZONES_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a tropical mountain in Colombia from hot lowlands at the bottom, through a coffee belt and a valley city at about 1,500 metres, to cold potato fields, high páramo grassland and snowy peaks at the top">' +
  '<rect width="600" height="420" fill="#dbeafe"/>' +
  '<path d="M0 420 L0 380 L120 360 L240 300 L330 230 L400 160 L460 100 L500 60 L520 50 L540 62 L600 120 L600 420 Z" fill="#a3a3a3"/>' +
  '<path d="M0 380 L120 360 L180 330 L190 420 L0 420 Z" fill="#65a30d"/>' +
  '<path d="M180 330 L240 300 L300 254 L310 420 L190 420 Z" fill="#3f7f3a"/>' +
  '<path d="M300 254 L330 230 L380 180 L390 420 L310 420 Z" fill="#8a9a5b"/>' +
  '<path d="M380 180 L400 160 L460 100 L470 420 L390 420 Z" fill="#b8b07a"/>' +
  '<path d="M460 100 L500 60 L520 50 L540 62 L560 82 L540 90 L500 92 Z" fill="#fff"/>' +
  '<g>' + (function () { var g = ''; for (var i = 0; i < 4; i++) { var x = 40 + i * 32; g += '<line x1="' + x + '" y1="378" x2="' + (x + 2) + '" y2="352" stroke="#7a5a32" stroke-width="3"/><path d="M' + (x + 2) + ' 352 l-10 4 M' + (x + 2) + ' 352 l10 4 M' + (x + 2) + ' 352 l-6 -6 M' + (x + 2) + ' 352 l6 -6" stroke="#4d7c0f" stroke-width="3"/>'; } return g; })() + '</g>' +
  '<g fill="#14532d">' + (function () { var g = ''; for (var r = 0; r < 3; r++) for (var i = 0; i < 4; i++) g += '<circle cx="' + (200 + i * 22 + r * 10) + '" cy="' + (334 - i * 14 - r * 8 + 20) + '" r="4"/>'; return g; })() + '</g>' +
  '<g fill="#e5e7eb" stroke="#64748b"><rect x="236" y="290" width="12" height="14"/><rect x="250" y="282" width="12" height="22"/><rect x="264" y="288" width="12" height="16"/></g>' +
  '<g stroke="#7c5b2e" stroke-width="2">' + (function () { var g = ''; for (var i = 0; i < 4; i++) g += '<line x1="' + (320 + i * 12) + '" y1="' + (250 - i * 12) + '" x2="' + (340 + i * 12) + '" y2="' + (250 - i * 12) + '"/>'; return g; })() + '</g>' +
  '<g fill="#d9c27a">' + (function () { var g = ''; for (var i = 0; i < 5; i++) g += '<path d="M' + (410 + i * 9) + ' ' + (160 - i * 12) + ' l3 -10 l3 10 Z"/>'; return g; })() + '</g>' +
  '<g font-family="sans-serif" font-size="12" fill="#1e293b"><text x="6" y="412">0 m</text><text x="548" y="44">5,000 m+</text></g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="70" y1="300" x2="70" y2="352"/><line x1="160" y1="230" x2="220" y2="310"/><line x1="260" y1="380" x2="256" y2="306"/><line x1="290" y1="140" x2="340" y2="230"/><line x1="522" y1="200" x2="430" y2="140"/><line x1="440" y1="30" x2="510" y2="62"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.colombia = {
    id: 'colombia',
    name: 'Colombia',
    short: 'Colombia',
    country: 'Colombia',
    gateway: 'Medellín',
    lonlat: [-75.57, 6.25],
    locator: { box: [-79.6, -71.0, 1.5, 12.0], places: [['Medellín', -75.57, 6.25, 'l'], ['Bogotá', -74.07, 4.71, 'r'], ['Cartagena', -75.51, 10.39, 'r'], ['Cali', -76.53, 3.45, 'r'], ['Manizales', -75.52, 5.07, 'l'], ['Caribbean Sea', -77.2, 11.4, 'a'], ['Pacific Ocean', -78.8, 4.0, 'a'], ['ANDES', -73.6, 6.8, 'a']] },
    stamp: { colour: '#ca8a04', icon: '☕' },
    transport: { name: 'Willys jeep', verb: 'Drive', emoji: '🚙' },
    scene: 'coffee',
    photo: { file: 'Metrocable - Reaching the least developed suburban areas of Medellín (5083096780).jpg', alt: 'A cable car gondola travelling on a cable high above densely packed red-brick houses that cover a steep hillside', author: 'Jorge Láscar', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: '¡Bienvenidos! Welcome to Colombia. Bounce up steep mountain roads in a Willys jeep loaded with coffee sacks, then ride the cable car over Medellín, the “city of eternal spring”. Find out why the climate changes so much as you climb.',
      adv: 'Explore Colombia. This expedition covers altitude zones in the tropical Andes, a highland climate with two rainy seasons, coffee farming and fair trade, Medellín’s urban transformation through the Metrocable, and Colombian culture.'
    },
    facts: ['Medellín is called the “city of eternal spring”.', 'Colombia has more kinds of bird than any other country.', 'Colombia’s national tree, the wax palm, is the tallest palm in the world.'],
    climate: {
      place: 'Medellín, Colombia (1,500 m)', source: '1991–2020 averages (climatestotravel.com)', lat: '6°N', rmax: 250, rstep: 50,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [22.8, 23.1, 23.2, 22.8, 23.0, 23.0, 23.1, 23.1, 22.9, 22.3, 22.2, 22.5],
      rain: [65, 80, 125, 160, 200, 160, 120, 150, 180, 210, 145, 95]
    },
    diagrams: { zones: ZONES_SVG },
    stations: [
      {
        id: 'zones', title: 'Climbing the Andes', icon: '⛰️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'zones', prompt: 'Label the zones as you climb a mountain in Colombia.',
              spots: [{ x: 12, y: 71 }, { x: 27, y: 55 }, { x: 43, y: 90 }, { x: 48, y: 33 }, { x: 87, y: 48 }, { x: 73, y: 7 }].map(function (s, i) { s.a = ['Hot lowlands (bananas)', 'Coffee farms', 'Medellín', 'Potato fields', 'Páramo grassland', 'Snow and ice'][i]; return s; }),
              extra: [],
              explain: 'It gets about 6°C colder for every 1,000 m you climb, so farmers grow different crops at each height.' },
            { type: 'mcq', q: 'Why can farmers grow bananas, coffee and potatoes in the same part of Colombia?', options: ['Temperature changes with height up the mountains', 'Each farm has its own rain', 'The soil is the same everywhere', 'It snows on the coffee farms'], answer: 0,
              explain: 'Hot lowlands suit bananas, mild slopes suit coffee and cold uplands suit potatoes.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Cartagena from Medellín?', options: ['North', 'South', 'East', 'West'], answer: 0,
              explain: 'Cartagena is on the hot Caribbean coast, about 460 km north.' }
          ],
          adv: [
            { type: 'label', diagram: 'zones', prompt: 'Label the altitude zones (pisos térmicos). One label does not belong.',
              spots: [{ x: 12, y: 71 }, { x: 27, y: 55 }, { x: 43, y: 90 }, { x: 48, y: 33 }, { x: 87, y: 48 }, { x: 73, y: 7 }].map(function (s, i) { s.a = ['Tierra caliente (0–1,000 m)', 'Tierra templada coffee belt', 'Medellín, about 1,500 m', 'Tierra fría (2,000–3,000 m)', 'Páramo (above 3,000 m)', 'Permanent snow'][i]; return s; }),
              extra: ['Desert sand dunes'],
              explain: 'The páramo stores water like a sponge and supplies rivers for cities such as Bogotá.' },
            { type: 'number', q: 'Medellín (1,500 m) averages 23°C. Temperature falls about 6°C per 1,000 m. Estimate the temperature at Bogotá, about 2,600 m.', answer: 16.4, tol: 0.6, unit: '°C',
              explain: '1,100 m higher × 6°C per 1,000 m ≈ 6.6°C colder, so about 23 − 6.6 = 16.4°C. Bogotá’s actual average is close to 14–15°C.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Medellín to Bogotá, the capital.', options: ['About 240 km', 'About 24 km', 'About 1,000 km', 'About 2,400 km'], answer: 0,
              explain: 'Bogotá is about 240 km south-east, but the mountain road takes around 9 hours.' }
          ]
        }
      },
      {
        id: 'climate', title: 'City of eternal spring', icon: '🌸',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Look at the temperature line. What do you notice?', options: ['It stays at about 23°C all year', 'It is very hot in summer and freezing in winter', 'It rises steadily all year', 'It drops below 0°C in July'], answer: 0,
              explain: 'Near the Equator, temperatures barely change through the year. Height keeps it mild.' },
            { type: 'mcq', graph: true, q: 'Which is the wettest month?', options: ['October', 'January', 'July', 'December'], answer: 0,
              explain: 'October has about 210 mm, closely followed by May.' },
            { type: 'mcq', graph: true, q: 'Which months are the driest?', options: ['January and February', 'May and October', 'April, May and September', 'June and August'], answer: 0,
              explain: 'December to February is the best time to visit, with the least rain.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Medellín (mm).', answer: 1690, tol: 10, unit: 'mm',
              explain: 'Adding the twelve months gives 1,690 mm.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 1.0, tol: 0.1, unit: '°C',
              explain: 'March 23.2°C − November 22.2°C = 1.0°C. That is a tiny range, typical of places near the Equator.' },
            { type: 'mcq', graph: true, q: 'The graph shows two rainy seasons (April–May and September–November). Why?', options: ['The ITCZ passes over Colombia twice a year', 'Two monsoons blow from Asia', 'Hurricanes hit the city of Medellín twice every year', 'Snow melts twice a year'], answer: 0,
              explain: 'The band of rising air follows the overhead sun north and then south again, crossing Colombia twice.' }
          ]
        }
      },
      {
        id: 'coffee', title: 'The coffee belt', icon: '☕',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Why do Colombian farmers grow coffee on mountain slopes rather than in the hot lowlands?', options: ['Coffee grows best in mild, cooler temperatures', 'The lowlands are covered by the sea', 'Coffee needs snow to grow', 'Mountain slopes are flat, wide and very easy to farm'], answer: 0,
              explain: 'Arabica coffee likes temperatures of about 18–24°C, found at about 1,200–2,000 m.' },
            { type: 'mcq', q: 'Why are coffee beans picked by hand in Colombia?', options: ['The slopes are too steep for machines', 'Machines are banned in Colombia', 'The beans grow underground', 'The trees are far too short for anyone to reach'], answer: 0,
              explain: 'Pickers choose only ripe red cherries, which helps make high-quality coffee.' },
            { type: 'mcq', q: 'How does buying Fairtrade coffee help farmers?', options: ['They get a fairer, more stable price', 'They no longer have to pick any coffee by hand', 'Their coffee grows faster', 'They pay less tax'], answer: 0,
              explain: 'An extra premium also pays for community projects such as schools and clean water.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these challenges for small coffee farmers in Colombia.', bins: ['Economic', 'Environmental'],
              items: [['World coffee prices go up and down', 0], ['Middlemen take much of the profit', 0], ['Young people leave for the cities', 0], ['Warmer temperatures push coffee uphill', 1], ['Coffee leaf rust disease', 1], ['Soil erosion on steep slopes', 1]],
              explain: 'As the climate warms, the best coffee land moves higher, where there is less space.' },
            { type: 'mcq', q: 'Colombia’s Coffee Cultural Landscape is a UNESCO World Heritage Site. Why?', options: ['A farming tradition adapted to steep mountains', 'It has the world’s largest and most modern coffee factory', 'It is a modern flat-land plantation', 'It is the only place where coffee grows'], answer: 0,
              explain: 'Small family farms, towns with colourful houses and Willys jeeps make it unique.' },
            { type: 'mcq', q: 'Most coffee is roasted and packaged in Europe and North America, not Colombia. Why does this matter?', options: ['Most of the profit is made after the beans leave Colombia', 'Roasting makes the coffee taste worse', 'Colombia has no electricity for roasting', 'It means farmers earn the most money'], answer: 0,
              explain: 'Adding value at home, for example by roasting and branding, keeps more income in Colombia.' }
          ]
        }
      },
      {
        id: 'medellin', title: 'Medellín transformed', icon: '🚡',
        tasks: {
          ks3: [
            { type: 'mcq', photo: true, q: 'Look at the photo. How does the Metrocable help people living on these steep hillsides?', options: ['It links them quickly to the city centre and jobs', 'It carries water to the hilltops', 'It is only used by tourists', 'It moves rubbish out of the city'], answer: 0,
              explain: 'A climb that took over an hour on foot now takes a few minutes, linked to the metro.' },
            { type: 'mcq', q: 'Culture: what are arepas?', options: ['Flat corn cakes', 'A type of dance', 'Mountain goats', 'Coffee cups'], answer: 0,
              explain: 'They are eaten at almost every meal, with cheese, eggs or meat.' },
            { type: 'mcq', q: 'Culture: what language is spoken in Colombia?', options: ['Spanish', 'Portuguese', 'English', 'French'], answer: 0,
              explain: 'Colombia has more Spanish speakers than any country except Mexico.' }
          ],
          adv: [
            { type: 'mcq', photo: true, q: 'Study the photo. Why was a cable car chosen rather than a road or railway?', options: ['The slopes are too steep and crowded for roads or rails', 'Cable cars are the cheapest form of transport on flat land', 'Medellín has no roads at all', 'Cable cars carry more goods than lorries'], answer: 0,
              explain: 'Few homes had to be demolished, as only the towers needed space.' },
            { type: 'sort', q: 'Classify these parts of Medellín’s transformation.', bins: ['Transport', 'Social projects'],
              items: [['Metrocable cable cars', 0], ['Outdoor escalators in Comuna 13', 0], ['Metro linked to bus routes', 0], ['Library parks in poor districts', 1], ['New schools and sports centres', 1], ['Street art and community tourism', 1]],
              explain: 'This approach is called social urbanism: investing first in the poorest areas.' },
            { type: 'mcq', q: 'Culture: which Colombian writer won the Nobel Prize for Literature in 1982?', options: ['Gabriel García Márquez', 'Miguel de Cervantes Saavedra', 'Pablo Neruda', 'Jorge Luis Borges'], answer: 0,
              explain: 'His novel One Hundred Years of Solitude is set in a fictional Colombian town.' }
          ]
        }
      }
    ]
  };
})();
