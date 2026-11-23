/* Travel the Wright Way — destination: Croatia (karst landscapes and Plitvice Lakes, a Mediterranean climate, the Dalmatian coast and tourism, and Croatian culture).
 * Climate data: Split, 1991–2018 averages (climatestotravel.com).
 * Facts: much of Croatia is karst (limestone) landscape — the word "karst" comes from the Kras region nearby; Plitvice Lakes National Park (UNESCO 1979) has 16 terraced lakes separated by travertine (tufa) barriers;
 *   Croatia has over 1,000 islands along the Adriatic coast; Dubrovnik's old town is a UNESCO site that has struggled with overtourism, including limits on cruise ships;
 *   klapa a cappella singing was inscribed by UNESCO in 2012; the necktie (cravat) is named after Croatian soldiers in 17th-century France;
 *   Croatia joined the EU in 2013, and the euro and the Schengen area on 1 January 2023; tourism is a major part of the economy; many young people have emigrated to other EU countries.
 */
(function () {
  var KARST_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a karst limestone landscape with a swallow hole, a cave, an underground river, a spring, and travertine barriers between lakes">' +
  '<rect width="600" height="420" fill="#d8eef9"/>' +
  // limestone block with bedding planes and joints
  '<path d="M0 120 L120 120 L150 150 L180 120 L600 120 L600 420 L0 420 Z" fill="#d6d0bd"/>' +
  '<g stroke="#a89f86" stroke-width="1.5"><line x1="0" y1="180" x2="600" y2="180"/><line x1="0" y1="250" x2="600" y2="250"/><line x1="0" y1="330" x2="600" y2="330"/>' + (function () { var g = ''; for (var i = 0; i < 12; i++) { var x = 30 + i * 50; g += '<line x1="' + x + '" y1="' + (i % 2 ? 180 : 120) + '" x2="' + x + '" y2="' + (i % 2 ? 250 : 180) + '"/>'; } return g; })() + '</g>' +
  // grass top
  '<path d="M0 120 L120 120 L150 150 L180 120 L360 120" fill="none" stroke="#7fae5a" stroke-width="6"/>' +
  // surface stream disappearing into swallow hole
  '<path d="M0 112 L120 116 L148 146" fill="none" stroke="#3d8fc6" stroke-width="5"/>' +
  // underground river and cave
  '<path d="M150 150 L156 210 L170 270 L260 284 L360 282 L440 260" fill="none" stroke="#3d8fc6" stroke-width="6"/>' +
  '<path d="M220 250 C 230 222, 330 222, 340 250 L340 290 L220 290 Z" fill="#6b6455"/>' +
  '<g fill="#efe7cf"><path d="M240 232 l4 18 l4 -18 Z"/><path d="M270 228 l3 24 l3 -24 Z"/><path d="M300 230 l4 16 l4 -16 Z"/><path d="M256 290 l4 -14 l4 14 Z"/><path d="M314 290 l4 -12 l4 12 Z"/></g>' +
  '<path d="M220 280 L340 280" stroke="#3d8fc6" stroke-width="5"/>' +
  // valley with terraced lakes on right
  '<path d="M360 120 L400 200 L600 200 L600 120 Z" fill="#d8eef9"/>' +
  '<path d="M440 260 C 420 230, 410 214, 400 200" fill="none" stroke="#3d8fc6" stroke-width="5"/>' +
  '<path d="M400 200 L470 200 L470 216 L540 216 L540 236 L600 236 L600 250 L400 250 Z" fill="#d6d0bd"/>' +
  '<rect x="404" y="186" width="62" height="14" fill="#2bb3a3"/><rect x="474" y="202" width="62" height="14" fill="#2bb3a3"/><rect x="544" y="222" width="56" height="14" fill="#2bb3a3"/>' +
  '<g fill="#efe7cf" stroke="#bfb08a"><rect x="466" y="186" width="8" height="30"/><rect x="536" y="202" width="8" height="34"/></g>' +
  '<g stroke="#e6f6ff" stroke-width="2"><line x1="470" y1="196" x2="472" y2="214"/><line x1="540" y1="212" x2="542" y2="232"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="160" y1="96" x2="148" y2="140"/><line x1="280" y1="200" x2="280" y2="226"/><line x1="200" y1="330" x2="230" y2="282"/><line x1="398" y1="290" x2="420" y2="244"/><line x1="500" y1="160" x2="470" y2="190"/><line x1="84" y1="200" x2="70" y2="178"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.croatia = {
    id: 'croatia',
    name: 'Croatia',
    short: 'Croatia',
    country: 'Croatia',
    gateway: 'Split',
    lonlat: [16.44, 43.51],
    locator: { box: [12.5, 20.5, 41.8, 46.8], places: [['Zagreb', 15.98, 45.81, 'r'], ['Plitvice Lakes', 15.6, 44.88, 'r'], ['Split', 16.44, 43.51, 'b'], ['Dubrovnik', 18.09, 42.65, 'r'], ['Adriatic Sea', 14.6, 43.2, 'a'], ['BOSNIA & HERZ.', 17.9, 44.3, 'a'], ['HUNGARY', 18.4, 46.4, 'a'], ['ITALY', 13.3, 42.4, 'a']] },
    stamp: { colour: '#1d4ed8', icon: '⛵' },
    transport: { name: 'island-hopping ferry', verb: 'Sail', emoji: '⛴️' },
    scene: 'adriatic',
    photo: { file: 'Plitvice Lakes1.jpg', alt: 'Waterfalls tumbling between turquoise lakes surrounded by forest at Plitvice Lakes National Park, Croatia', author: 'Tesla Delacroix', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'Dobrodošli! Welcome to Croatia. Hop by ferry between islands on the sparkling Adriatic Sea, then head inland to Plitvice, where turquoise lakes spill over natural limestone dams in hundreds of waterfalls.',
      adv: 'Island-hop along the Dalmatian coast. This expedition covers karst landforms and the Plitvice travertine barriers, a Mediterranean climate, coastal tourism and overtourism in Dubrovnik, EU membership and emigration, and Croatian culture.'
    },
    facts: ['Croatia has over 1,000 islands.', 'The necktie is named after Croatian soldiers.', 'Croatia started using the euro in 2023.'],
    climate: {
      place: 'Split, Croatia', source: '1991–2018 averages (climatestotravel.com)', lat: '44°N', rmax: 150, rstep: 50,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [8.3, 8.6, 11.4, 15.0, 19.9, 24.1, 26.9, 26.9, 21.8, 17.6, 13.1, 9.4],
      rain: [70, 70, 60, 65, 55, 50, 25, 35, 80, 80, 125, 90]
    },
    diagrams: { karst: KARST_SVG },
    stations: [
      {
        id: 'karst', title: 'Limestone and lakes', icon: '🏞️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'karst', prompt: 'Label this limestone (karst) landscape.',
              spots: [{ x: 27, y: 20, a: 'Swallow hole' }, { x: 47, y: 46, a: 'Cave' }, { x: 33, y: 80, a: 'Underground river' }, { x: 66, y: 70, a: 'Spring' }, { x: 84, y: 36, a: 'Waterfall' }, { x: 14, y: 50, a: 'Limestone' }],
              extra: [],
              explain: 'A river disappears down a swallow hole, flows through caves underground, and comes back out at a spring. At Plitvice it tumbles over waterfalls between lakes.' },
            { type: 'mcq', q: 'Rainwater is a weak acid. What does it do to limestone?', options: ['Slowly dissolves it', 'Turns it into sand', 'Makes it grow taller', 'Freezes it'], answer: 0,
              explain: 'This is chemical weathering called carbonation. Over thousands of years it makes caves and swallow holes.' },
            { type: 'mcq', q: 'Why are rivers rare on the surface in karst areas?', options: ['Water sinks into cracks in the rock', 'It never rains there', 'The rivers are all frozen', 'Farmers drink all the water before it reaches the sea'], answer: 0,
              explain: 'Limestone has joints and bedding planes. Water seeps down them and flows underground.' }
          ],
          adv: [
            { type: 'label', diagram: 'karst', prompt: 'Label the karst landforms. One label does not belong.',
              spots: [{ x: 27, y: 20, a: 'Swallow hole (sinkhole)' }, { x: 47, y: 46, a: 'Cave with stalactites' }, { x: 33, y: 80, a: 'Underground drainage' }, { x: 66, y: 70, a: 'Resurgence (spring)' }, { x: 84, y: 36, a: 'Travertine barrier' }, { x: 14, y: 50, a: 'Jointed limestone' }],
              extra: ['Moraine'],
              explain: 'Moraine is glacial deposition. At Plitvice, calcium carbonate is deposited as travertine, helped by mosses and algae, building natural dams.' },
            { type: 'mcq', q: 'The travertine barriers at Plitvice are still growing. How do they form?', options: ['Calcium carbonate is deposited on mosses', 'Glaciers push up rock walls', 'Beavers build dams from wood', 'Volcanic lava cools in the river and hardens into walls'], answer: 0,
              explain: 'Water rich in dissolved limestone loses carbon dioxide at waterfalls, so calcium carbonate is deposited.' },
            { type: 'mcq', q: 'Which equation shows carbonation of limestone?', options: ['CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂', 'H₂O → H₂ + O₂', 'NaCl + H₂O → salt water', 'C + O₂ → CO₂'], answer: 0,
              explain: 'Calcium carbonate reacts with carbonic acid to form soluble calcium bicarbonate, which is carried away in solution.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Mediterranean sunshine', icon: '☀️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the driest month in Split?', options: ['July', 'November', 'December', 'January'], answer: 0,
              explain: 'July gets only about 25 mm. Summers are hot, sunny and dry.' },
            { type: 'mcq', graph: true, q: 'Which season is wettest in Split?', options: ['Autumn and winter', 'Summer', 'Spring only', 'It is the same all year'], answer: 0,
              explain: 'November is the wettest month, with about 125 mm.' },
            { type: 'mcq', graph: true, q: 'What is the temperature in July and August?', options: ['About 27°C', 'About 8°C', 'About 15°C', 'About 40°C'], answer: 0,
              explain: 'Warm sea and sunshine make summer the busiest time for tourists.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Split (mm).', answer: 805, tol: 5, unit: 'mm',
              explain: 'Adding the twelve months gives 805 mm.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Split (°C). Give one decimal place.', answer: 18.6, tol: 0.2, unit: '°C',
              explain: 'Warmest 26.9°C − coolest 8.3°C = 18.6°C.' },
            { type: 'mcq', q: 'Why are Split’s summers dry and its winters wet?', options: ['High pressure in summer, depressions in winter', 'Monsoon winds in summer', 'Snowmelt from the Alps in winter and floods in spring', 'The ITCZ in winter'], answer: 0,
              explain: 'This is the classic Mediterranean (Csa) pattern, found on the west sides of continents at about 30–45°.' }
          ]
        }
      },
      {
        id: 'coast', title: 'Islands and tourists', icon: '🏖️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Dubrovnik’s old town gets very crowded with tourists. What has the city done?', options: ['Limited cruise ships and visitor numbers', 'Closed the beaches and the old town for ever', 'Banned all tourists', 'Built a giant theme park'], answer: 0,
              explain: 'Too many visitors can damage old buildings and make life hard for local people. This is called overtourism.' },
            { type: 'mcq', q: 'Which is a benefit of tourism for Croatia?', options: ['Jobs in hotels, restaurants and boats', 'More traffic jams', 'Higher house prices for local people and families', 'More litter on the beaches'], answer: 0,
              explain: 'Tourism brings money and jobs, but most of them are only in summer.' },
            { type: 'mcq', q: 'Croatia has over 1,000 islands. How do most people travel between them?', options: ['By ferry', 'By train', 'By bridge only', 'By cable car'], answer: 0,
              explain: 'Ferries and catamarans link the islands to Split, Zadar and Dubrovnik.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these impacts of tourism on the Dalmatian coast.', bins: ['Positive', 'Negative'],
              items: [['Jobs and income', 0], ['Money to restore old towns', 0], ['Better ferries and airports', 0], ['Seasonal unemployment', 1], ['Locals priced out of housing', 1], ['Water shortages on islands in summer', 1]],
              explain: 'Short-term holiday lets can push up rents so local families move away from old towns.' },
            { type: 'mcq', q: 'Croatia joined the EU in 2013. Since then many young Croatians have moved abroad. Why?', options: ['Free movement and higher wages in the EU', 'Croatia closed its universities', 'It became illegal to work in Croatia after joining', 'The islands sank'], answer: 0,
              explain: 'Emigration has led to an ageing population, and Croatia now recruits workers from Asia for tourism and building.' },
            { type: 'mcq', q: 'In 2023 Croatia joined the euro and the Schengen area. How does this help tourism?', options: ['No currency exchange or border checks', 'Tourists pay no tax', 'Flights become free', 'Hotels have to close in winter to save energy'], answer: 0,
              explain: 'Visitors from other Schengen countries can cross the border without passport checks.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Klapa, cravats and coast', icon: '🎶',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: klapa is a Croatian tradition from Dalmatia. What is it?', options: ['Group singing without instruments', 'A boat race', 'A type of cheese made from sheep’s milk', 'A card game'], answer: 0,
              explain: 'Klapa singing is on UNESCO’s list of Intangible Cultural Heritage (2012).' },
            { type: 'mcq', q: 'Culture: which item of clothing is named after Croatian soldiers?', options: ['The tie (cravat)', 'The hat', 'The sock', 'The scarf'], answer: 0,
              explain: 'In the 1600s Croatian soldiers in France wore scarves at their necks. The French called them “cravates”.' },
            { type: 'mcq', q: 'Which sea lies along Croatia’s coast?', options: ['The Adriatic Sea', 'The Baltic Sea', 'The North Sea', 'The Black Sea'], answer: 0,
              explain: 'The Adriatic is an arm of the Mediterranean between Italy and the Balkans.' }
          ],
          adv: [
            { type: 'mcq', q: 'Dubrovnik’s walls and old town are a UNESCO World Heritage Site. Why are they protected?', options: ['They are outstanding historic architecture', 'They are the tallest city walls in the whole world', 'They were built last year', 'They are made of gold'], answer: 0,
              explain: 'The city was a rich trading republic. Protection limits new building and helps fund repairs.' },
            { type: 'mcq', q: 'Culture: the Dalmatian dog breed is named after which region?', options: ['Dalmatia, on Croatia’s coast', 'Dalston, an area in east London', 'Dallas in Texas', 'Delhi in India'], answer: 0,
              explain: 'Dalmatia is the coastal region around Split, Zadar and Dubrovnik.' },
            { type: 'mcq', q: 'Cities like Zagreb were damaged by an earthquake in 2020. Why does Croatia get earthquakes?', options: ['The African and Eurasian plates are colliding nearby', 'It sits on a hotspot', 'Plates are pulling apart beneath it, just like in Iceland', 'Mining causes all of them'], answer: 0,
              explain: 'The Adriatic microplate is being pushed under the Dinaric Alps, building mountains and causing earthquakes.' }
          ]
        }
      }
    ]
  };
})();
