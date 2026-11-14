/* Travel the Wright Way — destination: France (the French Alps around Chamonix and Mont Blanc: glacial landforms, a mountain climate, retreating glaciers, Alpine tourism and culture).
 * Climate data: Chamonix (about 1,000 m), 1991–2020 normals (climatestotravel.com).
 * Facts: Mont Blanc (about 4,806 m) is the highest mountain in western Europe; it was first climbed in 1786;
 *   the Mer de Glace is France's longest glacier (about 7 km); it has thinned by well over 100 m near Montenvers since the 1800s, and visitors
 *   now climb hundreds of steps down to reach its ice cave; the Aiguille du Midi cable car reaches 3,842 m;
 *   Chamonix hosted the first Winter Olympic Games in 1924; Savoyard dishes include fondue, raclette and tartiflette.
 */
(function () {
  var GLACIAL_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Glaciated mountain landscape with a pyramidal peak, arêtes, a corrie with a small lake, a glacier, a hanging valley with a waterfall, a U-shaped valley and a moraine">' +
  '<rect width="600" height="420" fill="#d8ecfb"/>' +
  // mountains
  '<path d="M0 260 L0 150 L80 120 L150 60 L210 120 L250 40 L300 20 L350 60 L400 110 L470 70 L540 120 L600 110 L600 260 Z" fill="#8a96a8"/>' +
  '<g fill="#fff"><path d="M280 34 L300 20 L322 40 L310 50 L292 46 Z"/><path d="M140 70 L150 60 L162 74 L150 78 Z"/><path d="M460 78 L470 70 L482 82 L470 86 Z"/></g>' +
  // aretes highlight
  '<g stroke="#5b6573" stroke-width="3" fill="none"><path d="M210 120 L250 40 L300 20"/><path d="M300 20 L350 60 L400 110"/></g>' +
  // corrie with tarn
  '<path d="M90 190 C 90 150, 170 140, 190 190 Z" fill="#b8c2cf"/><ellipse cx="140" cy="186" rx="34" ry="8" fill="#5fb3e0"/>' +
  // glacier
  '<path d="M262 60 C 250 120, 280 170, 300 250 L380 250 C 350 180, 330 110, 330 62 Z" fill="#eef8ff" stroke="#9fc6dd" stroke-width="2"/>' +
  '<g stroke="#9fc6dd" stroke-width="1.5"><line x1="290" y1="120" x2="320" y2="116"/><line x1="296" y1="160" x2="334" y2="156"/><line x1="304" y1="200" x2="348" y2="196"/></g>' +
  // hanging valley + waterfall
  '<path d="M470 150 L560 140 L560 200 L470 206 Z" fill="#7d9b6a"/><path d="M472 200 L470 290" stroke="#bfe6ff" stroke-width="5"/>' +
  // U-shaped valley
  '<path d="M0 260 C 60 260, 120 300, 180 340 L420 340 C 480 300, 540 260, 600 260 L600 420 L0 420 Z" fill="#6aa04a"/>' +
  '<path d="M180 340 C 220 410, 380 410, 420 340" fill="none" stroke="#3f6f32" stroke-width="2" stroke-dasharray="6 4"/>' +
  '<path d="M240 372 C 280 378, 320 368, 360 376" fill="none" stroke="#3d8fc6" stroke-width="4"/>' +
  // moraine
  '<path d="M290 252 C 310 236, 370 236, 390 252 L392 262 L288 262 Z" fill="#a08a6a"/><g fill="#7a6a52"><circle cx="310" cy="250" r="3"/><circle cx="330" cy="246" r="4"/><circle cx="356" cy="249" r="3"/><circle cx="374" cy="252" r="3"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="420" y1="34" x2="304" y2="24"/><line x1="160" y1="90" x2="228" y2="84"/><line x1="96" y1="230" x2="120" y2="188"/><line x1="200" y1="150" x2="290" y2="150"/><line x1="520" y1="236" x2="500" y2="196"/><line x1="96" y1="342" x2="200" y2="356"/><line x1="460" y1="300" x2="384" y2="256"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.france = {
    id: 'france',
    name: 'French Alps',
    short: 'the French Alps',
    the: true,
    country: 'France',
    gateway: 'Chamonix',
    lonlat: [6.87, 45.92],
    locator: { box: [4.5, 9.5, 44.2, 47.6], places: [['Chamonix', 6.87, 45.92, 'r'], ['Mont Blanc', 6.86, 45.83, 'l'], ['Geneva', 6.14, 46.2, 'l'], ['Grenoble', 5.72, 45.19, 'r'], ['Lake Geneva', 6.55, 46.45, 'a'], ['SWITZERLAND', 8.2, 46.8, 'a'], ['ITALY', 8.4, 45.2, 'a']], lakes: [[[6.14, 46.21], [6.4, 46.38], [6.8, 46.46], [6.93, 46.38], [6.6, 46.4], [6.3, 46.3], [6.17, 46.2]]] },
    stamp: { colour: '#1d4ed8', icon: '🎿' },
    transport: { name: 'cable car', verb: 'Ride', emoji: '🚡' },
    scene: 'cable',
    photo: { file: 'Mer de Glace Glacier in France - 2009-08-06.jpg', alt: 'The Mer de Glace glacier winding down a valley between rocky peaks near Chamonix', author: 'SNappa2006', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'Bonjour! Welcome to Chamonix, at the foot of Mont Blanc, the highest mountain in western Europe. Ride the cable cars high into the Alps to see glaciers, jagged peaks and the valleys that ice carved out.',
      adv: 'From Chamonix you ride cable cars into the Mont Blanc massif. This expedition covers glacial erosion and landforms, a mountain climate, glacier mass balance and retreat, and the opportunities and pressures of Alpine tourism.'
    },
    facts: ['Mont Blanc is about 4,806 m high, the highest mountain in western Europe.', 'Chamonix hosted the very first Winter Olympics, in 1924.', 'The Mer de Glace, “sea of ice”, is France’s longest glacier.'],
    climate: {
      place: 'Chamonix, France (1,000 m)', source: 'Averages 1991–2020', lat: '46°N', rmax: 200,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-1.8, -0.2, 3.9, 7.4, 11.8, 15.1, 16.8, 16.4, 12.8, 9.0, 3.4, -1.1],
      rain: [95, 85, 85, 90, 120, 130, 120, 125, 105, 115, 100, 110]
    },
    diagrams: { glacial: GLACIAL_SVG },
    stations: [
      {
        id: 'landforms', title: 'Carved by ice', icon: '🏔️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'glacial', prompt: 'Label this glaciated landscape.',
              spots: [{ x: 80, y: 8, a: 'Pyramidal peak' }, { x: 16, y: 21, a: 'Arête' }, { x: 16, y: 56, a: 'Corrie' }, { x: 22, y: 36, a: 'Glacier' }, { x: 16, y: 82, a: 'U-shaped valley' }, { x: 86, y: 56, a: 'Hanging valley' }, { x: 80, y: 72, a: 'Moraine' }],
              extra: [],
              explain: 'Ice wears away the land to make corries, arêtes and pyramidal peaks, then carves deep U-shaped valleys. Moraine is the rock it drops.' },
            { type: 'mcq', q: 'How did the deep, U-shaped valley at Chamonix form?', options: ['A glacier eroded it', 'A river cut it', 'An earthquake split the land', 'People dug it out for farming and railways'], answer: 0,
              explain: 'Rivers make V-shaped valleys. A thick glacier scrapes the sides and floor, making them steep and the floor wide and flat.' },
            { type: 'mcq', q: 'What is moraine?', options: ['Rock and soil carried and dropped by a glacier', 'A lake left by melting ice', 'A type of mountain goat', 'Fresh snow that falls on the highest peaks in winter'], answer: 0,
              explain: 'Glaciers carry huge amounts of broken rock, from sand to boulders, and drop it in ridges as the ice melts.' }
          ],
          adv: [
            { type: 'label', diagram: 'glacial', prompt: 'Label the glacial landforms. One label does not belong.',
              spots: [{ x: 80, y: 8, a: 'Pyramidal peak' }, { x: 16, y: 21, a: 'Arête' }, { x: 16, y: 56, a: 'Corrie with tarn' }, { x: 22, y: 36, a: 'Valley glacier' }, { x: 86, y: 56, a: 'Hanging valley' }, { x: 80, y: 72, a: 'Terminal moraine' }, { x: 16, y: 82, a: 'Glacial trough' }],
              extra: ['Stack'],
              explain: 'Stacks are coastal landforms. A hanging valley was carved by a smaller tributary glacier, so it is left high above the main valley, often with a waterfall.' },
            { type: 'mcq', q: 'Which two processes do glaciers use to erode rock?', options: ['Plucking and abrasion', 'Attrition and solution', 'Deflation and saltation', 'Longshore drift and swash, which also shape beaches'], answer: 0,
              explain: 'Plucking pulls out frozen rock; abrasion grinds the bed with rock fragments frozen into the base of the ice.' },
            { type: 'mcq', q: 'An arête forms when…', options: ['two corries erode back towards each other', 'a glacier drops a long, narrow ridge of rock and soil as it melts', 'lava cools on a mountain ridge', 'a river cuts down through soft rock'], answer: 0,
              explain: 'When three or more corries erode back to back, a pyramidal peak forms, like the Matterhorn.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Mountain weather', icon: '❄️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which months have an average temperature below 0°C in Chamonix?', options: ['December to February', 'June, July and August', 'March, April and May', 'None of them: it stays above freezing all year'], answer: 0,
              explain: 'The bars for December, January and February fall below the zero line, so snow lies in the valley.' },
            { type: 'mcq', graph: true, q: 'How does rainfall change through the year in Chamonix?', options: ['It is wet in every month', 'It is dry in summer', 'It only rains in winter', 'It never rains, it only snows all year round'], answer: 0,
              explain: 'Every month gets 85–130 mm. In winter much of it falls as snow.' },
            { type: 'mcq', q: 'Why is it colder at the top of Mont Blanc than in Chamonix?', options: ['Temperature falls with height', 'The sun is further away', 'There is more wind in the valley', 'Snow makes the air colder'], answer: 0,
              explain: 'Air cools by about 6°C for every 1,000 m. The summit is nearly 4,000 m higher than the town.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Chamonix (°C).', answer: 18.6, tol: 0.2, unit: '°C',
              explain: 'July (16.8°C) minus January (−1.8°C) = 18.6°C.' },
            { type: 'number', graph: true, q: 'Calculate the total annual precipitation in Chamonix (mm).', answer: 1280, tol: 10, unit: 'mm',
              explain: 'Adding the twelve months gives about 1,280 mm, about double London’s yearly rainfall.' },
            { type: 'mcq', q: 'Why do the Alps receive so much precipitation?', options: ['Moist air rises over them and cools', 'They are close to the Equator', 'Sinking air over the mountains creates high pressure and storms', 'Glaciers release water vapour'], answer: 0,
              explain: 'This is relief (orographic) precipitation. Above the snowline it falls as snow, feeding the glaciers.' }
          ]
        }
      },
      {
        id: 'glacier', title: 'The shrinking Mer de Glace', icon: '🧊',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Visitors to the Mer de Glace ice cave must climb down more steps every few years. Why?', options: ['The glacier is melting and getting thinner', 'The cave is sinking into the ground', 'The steps are wearing away', 'More snow falls on top of the glacier every winter'], answer: 0,
              explain: 'The ice surface has dropped by well over 100 m since the 1800s. Signs on the path show where the ice used to be.' },
            { type: 'mcq', q: 'What is the main reason Alpine glaciers are shrinking?', options: ['Rising temperatures', 'Too many skiers', 'Earthquakes', 'Animals eating the ice'], answer: 0,
              explain: 'Warmer summers melt more ice than winter snow replaces. Alpine glaciers have lost a large share of their ice since 1900.' },
            { type: 'mcq', q: 'Why do glaciers matter to people living far away?', options: ['Their meltwater feeds rivers in summer', 'They make the sea saltier', 'They stop volcanoes erupting', 'They give off oxygen for the whole of Europe to breathe'], answer: 0,
              explain: 'Glaciers are frozen stores of fresh water. Rivers like the Rhône depend on their meltwater in hot, dry summers.' }
          ],
          adv: [
            { type: 'mcq', q: 'A glacier retreats when…', options: ['ablation is greater than accumulation', 'accumulation is greater than ablation', 'ablation equals accumulation', 'the glacier moves faster downhill'], answer: 0,
              explain: 'Mass balance compares snow gained (accumulation) with ice lost (ablation). A negative balance means the snout retreats.' },
            { type: 'mcq', q: 'As Alpine glaciers melt, summer river flow first rises, then falls. Why does it eventually fall?', options: ['Glaciers become too small to supply much meltwater', 'Rainfall stops completely', 'Rivers freeze in summer', 'Dams store all the water upstream and release it only in the winter'], answer: 0,
              explain: 'This is called “peak water”. It threatens summer water supplies, hydro-electric power and river transport.' },
            { type: 'mcq', q: 'Which new hazard can form as glaciers retreat?', options: ['Glacial lake outburst floods', 'Tsunamis', 'Tropical storms', 'Volcanic eruptions under the melting ice'], answer: 0,
              explain: 'Meltwater can pool behind loose moraine. If the moraine fails, a sudden flood can rush down the valley.' }
          ]
        }
      },
      {
        id: 'tourism', title: 'Skiing, climbing and cheese', icon: '🧀',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Chamonix hosted the first ever Winter Olympic Games. In which year?', options: ['1924', '2024', '1824', '1966'], answer: 0,
              explain: 'The 1924 Games made Chamonix famous as a centre for winter sports.' },
            { type: 'mcq', q: 'Culture: fondue and raclette are famous Alpine dishes. What is their main ingredient?', options: ['Melted cheese', 'Fish', 'Rice', 'Chocolate and fresh mountain berries'], answer: 0,
              explain: 'Cows graze high meadows in summer, and their milk makes cheeses like Beaufort and Reblochon.' },
            { type: 'mcq', q: 'The Aiguille du Midi cable car climbs to 3,842 m. Why are cable cars useful in the mountains?', options: ['They climb slopes too steep for roads', 'They are much cheaper than walking or driving up the mountain', 'They work underwater', 'They only run in the dark'], answer: 0,
              explain: 'Cable cars carry skiers, climbers and sightseers up thousands of metres in minutes.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these impacts of tourism in the Chamonix valley.', bins: ['Benefit', 'Cost'],
              items: [['Year-round jobs in hotels and ski schools', 0], ['Money for cable cars and roads', 0], ['Mountain farms selling cheese to visitors', 0], ['Traffic jams and air pollution in the valley', 1], ['Housing too expensive for local workers', 1], ['Erosion of popular footpaths', 1]],
              explain: 'The narrow valley traps pollution from traffic, including lorries heading to the Mont Blanc Tunnel.' },
            { type: 'mcq', q: 'Ski seasons at lower resorts are getting shorter. How are many resorts adapting?', options: ['Growing summer tourism like hiking', 'Building resorts at lower altitudes', 'Closing in winter', 'Banning all snow machines and artificial snow'], answer: 0,
              explain: 'Diversifying into summer activities reduces dependence on reliable snow, though snow-making is also widely used.' },
            { type: 'mcq', q: 'Mont Blanc was first climbed in 1786. How does this history still shape Chamonix today?', options: ['It is a centre for mountaineering', 'It became a major car factory town after the first climbers left', 'It is France’s capital city', 'It is a port for ocean liners'], answer: 0,
              explain: 'Chamonix’s guides’ company, founded in 1821, is one of the oldest in the world.' }
          ]
        }
      }
    ]
  };
})();
