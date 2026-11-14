/* Travel the Wright Way — destination: Peru, the Andes (fold mountains, altitude, Inca terraces and melting tropical glaciers).
 * Climate data: Cusco (about 3,300 m), averages 1991–2020 (climatestotravel.com).
 * Glaciers: Peru has about 70% of the world's tropical glaciers and has lost roughly 40% of its glacier area since the 1960s–70s (INAIGEM national inventory);
 *   most Cordillera Blanca catchments studied have passed "peak water" (Baraer et al., 2012); in 1941 a flood from Lake Palcacocha destroyed part of Huaraz.
 * The 1970 Ancash earthquake set off an avalanche from Huascarán that buried the town of Yungay.
 */
(function () {
  var PLATES_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the Nazca plate sinking beneath the South American plate, forming a trench, the Andes fold mountains and volcanoes">' +
  '<rect width="600" height="420" fill="#d6ecfb"/>' +
  '<rect y="235" width="600" height="185" fill="#f0a35e"/>' +
  // ocean
  '<rect y="160" width="230" height="60" fill="#2f7fbf"/>' +
  // Nazca plate (oceanic)
  '<path d="M0 215 L205 215 L225 236 L440 420 L370 420 L205 262 L0 262 Z" fill="#56677a"/>' +
  // South American plate (continental crust) with mountains
  '<path d="M228 236 L240 205 L262 175 L290 130 L318 92 L332 70 L346 88 L372 58 L398 82 L424 66 L452 108 L496 146 L548 158 L600 160 L600 320 L340 330 Z" fill="#b88a5a"/>' +
  '<g fill="#fff"><path d="M323 82 L332 70 L340 80 Z"/><path d="M364 68 L372 58 L381 68 Z"/><path d="M416 75 L424 66 L432 77 Z"/></g>' +
  // fold lines
  '<g fill="none" stroke="#8a5e35" stroke-width="2.5"><path d="M270 200 C 300 140, 340 140, 360 190 S 420 230, 450 170"/><path d="M290 230 C 320 170, 360 170, 380 220 S 450 260, 490 200"/><path d="M320 270 C 350 220, 390 220, 410 260 S 480 290, 540 240"/></g>' +
  // magma rising to volcano
  '<path d="M372 360 C 360 300, 340 240, 332 150 L 332 80" fill="none" stroke="#d62828" stroke-width="6" stroke-linecap="round"/>' +
  '<path d="M326 72 L332 66 L338 72 Z" fill="#ff7a1a"/><g class="tw-smoke"><circle cx="333" cy="54" r="8" fill="#d8d4d0"/><circle cx="340" cy="42" r="6" fill="#e5e2df"/></g>' +
  // plate movement arrows
  '<g stroke="#11243b" stroke-width="4" fill="#11243b"><line x1="60" y1="240" x2="130" y2="240"/><path d="M128 232 L144 240 L128 248 Z"/><line x1="580" y1="200" x2="520" y2="200"/><path d="M522 192 L506 200 L522 208 Z"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="180" y1="356" x2="222" y2="236"/><line x1="240" y1="80" x2="326" y2="74"/><line x1="456" y1="64" x2="400" y2="100"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.andes = {
    id: 'andes',
    name: 'Peru: the Andes',
    short: 'the Andes',
    country: 'Peru',
    gateway: 'Cusco',
    lonlat: [-72.5, -13.2],
    locator: { box: [-81.5, -68.5, -18.5, -3.5], places: [['Lima', -77.04, -12.05, 'r'], ['Cusco', -71.97, -13.53, 'r'], ['Machu Picchu', -72.55, -13.16, 't'], ['Huaraz', -77.53, -9.53, 'r'], ['PERU', -74.6, -8.0, 'a'], ['Pacific Ocean', -79.2, -15.5, 'a']] },
    stamp: { colour: '#6536b4', icon: '⛰️' },
    transport: { name: 'llama trek', verb: 'Trek', emoji: '🦙' },
    scene: 'terrace',
    photo: { file: 'Peru - Sacred Valley & Incan Ruins 191 - Pisac (8114559846).jpg', alt: 'Inca farming terraces curving around a steep mountainside above the Sacred Valley at Pisac, Peru', author: 'McKay Savage', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'You fly into Cusco, 3,300 m up in the Andes, the old capital of the Inca Empire. Take it slowly, the air is thin! Your llama is ready to trek past ancient terraces towards snowy peaks.',
      adv: 'From Cusco you explore the tropical Andes. This expedition covers fold mountain formation at a destructive plate margin, altitude and vertical zonation, Inca terraces and modern farming, and the hazards and water risks of retreating tropical glaciers.'
    },
    facts: ['The Andes are the longest mountain range on land, about 7,000 km long.', 'Peru has about 70% of the world’s tropical glaciers.', 'Potatoes were first farmed in the Andes, and Peru grows thousands of varieties.'],
    climate: {
      place: 'Cusco, Peru (3,300 m)', source: 'Averages 1991–2020', lat: '14°S', rmax: 200,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [14.2, 14.1, 14.1, 13.6, 12.4, 11.3, 10.8, 12.0, 13.3, 14.4, 14.9, 14.5],
      rain: [160, 135, 110, 45, 9, 2, 4, 8, 20, 45, 80, 120]
    },
    diagrams: { plates: PLATES_SVG },
    stations: [
      {
        id: 'mountains', title: 'Building the Andes', icon: '🌋',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'plates', prompt: 'Label this cross-section showing how the Andes formed.',
              spots: [{ x: 14, y: 46, a: 'Pacific Ocean' }, { x: 16, y: 70, a: 'Nazca Plate' }, { x: 80, y: 66, a: 'South American Plate' }, { x: 30, y: 85, a: 'Trench' }, { x: 40, y: 19, a: 'Volcano' }, { x: 76, y: 15, a: 'Fold mountains' }],
              extra: [],
              explain: 'The Nazca Plate moves east and sinks beneath the South American Plate. The rocks are squeezed and folded into the Andes, and melting rock rises to form volcanoes.' },
            { type: 'mcq', q: 'What type of plate boundary formed the Andes?', options: ['Destructive (convergent): two plates move towards each other', 'Constructive: plates move apart', 'Conservative: plates slide past each other', 'There is no plate boundary'], answer: 0,
              explain: 'Where plates collide, layers of rock are crumpled upwards into fold mountains.' },
            { type: 'mcq', q: 'Why does the Nazca Plate sink under the South American Plate?', options: ['Oceanic plate is denser (heavier) than continental plate', 'It is lighter', 'It is made of ice', 'It is pushed by the wind'], answer: 0,
              explain: 'Oceanic crust is thinner but denser, so it is forced down into the mantle. This is called subduction.' },
            { type: 'mcq', q: 'Which other hazard is common in the Andes because of the plate boundary?', options: ['Earthquakes', 'Hurricanes', 'Tsunamis from icebergs', 'Sandstorms'], answer: 0,
              explain: 'As the plates grind together, pressure builds and is released as earthquakes.' }
          ],
          adv: [
            { type: 'label', diagram: 'plates', prompt: 'Label the cross-section. One label does not belong.',
              spots: [{ x: 14, y: 46, a: 'Pacific Ocean' }, { x: 16, y: 70, a: 'Nazca Plate (oceanic)' }, { x: 80, y: 66, a: 'South American Plate' }, { x: 30, y: 85, a: 'Peru–Chile Trench' }, { x: 40, y: 19, a: 'Composite volcano' }, { x: 76, y: 15, a: 'Fold mountains' }, { x: 62, y: 88, a: 'Subduction zone' }],
              extra: ['Mid-ocean ridge'],
              explain: 'A mid-ocean ridge forms at a constructive margin, not here. The oceanic Nazca Plate subducts at the trench; compression folds the continental crust, and melting releases magma that feeds composite volcanoes.' },
            { type: 'mcq', q: 'Why does magma form above the subducting Nazca Plate?', options: ['Water released from the sinking plate lowers the melting point of the mantle above it', 'Friction melts the whole continent', 'The Sun heats the rocks', 'The ocean boils the crust'], answer: 0,
              explain: 'As the slab sinks it releases water, which helps the mantle wedge above to melt. The magma is sticky and gas-rich, so eruptions can be explosive.' },
            { type: 'mcq', q: 'In 1970 a huge earthquake in Peru set off an avalanche from Huascarán, the country’s highest mountain. What happened?', options: ['Ice and rock buried the town of Yungay', 'A new island formed', 'The Amazon reversed direction', 'Nothing happened'], answer: 0,
              explain: 'Earthquakes in mountains often trigger secondary hazards such as landslides and avalanches, which can be deadlier than the shaking itself.' }
          ]
        }
      },
      {
        id: 'altitude', title: 'High and cool', icon: '🌡️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Cusco is in the tropics, but the temperature is only about 11–15°C. Why?', options: ['It is very high up, and temperature falls with altitude', 'It is near the North Pole', 'It is always cloudy', 'The Sun never shines'], answer: 0,
              explain: 'At 3,300 m the air is thinner and holds less heat. Temperature falls by about 6.5°C for every 1,000 m you climb.' },
            { type: 'mcq', graph: true, q: 'Which is the driest month in Cusco?', options: ['June', 'January', 'February', 'December'], answer: 0,
              explain: 'June has almost no rain, only about 2 mm. May to August is the dry season and the busiest time for trekkers.' },
            { type: 'number', q: 'Temperature falls about 6.5°C for every 1,000 m. Cusco is about 3,300 m above the coast. About how many °C cooler is it because of altitude?', answer: 21.5, tol: 0.6, unit: '°C',
              explain: '3.3 × 6.5 = 21.45, so about 21.5°C cooler than at sea level.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Cusco (°C).', answer: 4.1, tol: 0.1, unit: '°C',
              explain: 'Warmest 14.9°C (November) − coolest 10.8°C (July) = 4.1°C. The range is small, but nights in the dry season can drop below freezing because clear skies let heat escape.' },
            { type: 'mcq', graph: true, q: 'What brings Cusco’s wet season from December to March?', options: ['Moist air from the Amazon rising over the mountains as the ITCZ and the South American monsoon move south', 'Cold fronts from Antarctica', 'Westerly winds from the Pacific', 'Hurricanes'], answer: 0,
              explain: 'In the southern summer, moisture from the Amazon basin is drawn towards the Andes and rises, giving afternoon storms.' },
            { type: 'sort', q: 'Vertical zonation: sort these land uses by altitude in the Peruvian Andes.', bins: ['Warm valleys (below 2,500 m)', 'Cool slopes (2,500–3,800 m)', 'High puna (above 3,800 m)'],
              items: [['Coffee', 0], ['Tropical fruit', 0], ['Maize', 1], ['Wheat and barley', 1], ['Alpaca and llama herding', 2], ['Frost-hardy bitter potatoes', 2]],
              explain: 'Climate changes with height, so farmers use different zones for different crops and animals. Many Andean families farm land at several levels.' }
          ]
        }
      },
      {
        id: 'farming', title: 'Terraces and llamas', icon: '🦙',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Why did the Inca build terraces on steep mountainsides?', options: ['To make flat land for crops and stop soil washing away', 'To build roads for cars', 'To stop volcanoes erupting', 'As steps for tourists'], answer: 0,
              explain: 'Terraces create flat fields, hold rainwater and reduce soil erosion. Many are still farmed today.' },
            { type: 'mcq', q: 'What are llamas and alpacas mainly used for?', options: ['Wool, carrying loads and meat', 'Ploughing rice paddies', 'Pulling sledges on ice', 'Racing'], answer: 0,
              explain: 'Alpacas give fine wool, llamas carry loads on mountain paths, and both can live on high grasslands where crops struggle.' },
            { type: 'mcq', q: 'Machu Picchu is one of the world’s most famous ancient sites. Who built it?', options: ['The Inca', 'The Romans', 'The Aztecs', 'The Vikings'], answer: 0,
              explain: 'The Inca built Machu Picchu in the 1400s, high on a ridge above the Urubamba River. It is now a World Heritage Site.' },
            { type: 'mcq', q: 'Culture: millions of Peruvians speak Quechua, the language of the Inca. Every June, Cusco holds Inti Raymi. What is it?', options: ['A festival of the Sun, held at the winter solstice', 'A football final', 'A llama race', 'A snow festival in December'], answer: 0,
              explain: 'Inti Raymi was the Inca festival honouring the Sun god Inti. Today it is re-enacted at Sacsayhuamán, attracting both local people and tourists.' }
          ],
          adv: [
            { type: 'mcq', q: 'Apart from flat land, how do terraces help farming at high altitude?', options: ['Stone walls absorb heat by day and release it at night, reducing frost damage', 'They make the air thicker', 'They attract more sunlight', 'They stop all rain'], answer: 0,
              explain: 'Terraces create warmer microclimates and improve drainage and irrigation, letting crops grow higher than they otherwise could.' },
            { type: 'mcq', q: 'Peru is now one of the world’s top exporters of blueberries and avocados, grown in the desert on the coast. What makes this possible?', options: ['Irrigation using rivers fed by Andean rain and glacier melt', 'Heavy coastal rainfall', 'Snow on the beaches', 'Rainforest soils'], answer: 0,
              explain: 'The coast is a desert, so export farms depend on water flowing down from the Andes. This links farming to the mountains’ glaciers.' },
            { type: 'mcq', q: 'Peru limits the number of daily visitors to Machu Picchu. Why?', options: ['To reduce erosion and damage to the site and its fragile mountain environment', 'Because tourists bring no money', 'Because it is closed to Peruvians', 'To make it easier to find parking'], answer: 0,
              explain: 'Tourism brings vital income but also crowding, erosion and waste. Timed tickets spread visitors out to protect the site.' }
          ]
        }
      },
      {
        id: 'glaciers', title: 'Disappearing glaciers', icon: '🧊',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'About how much of the world’s tropical glaciers are in Peru?', options: ['About 70%', 'About 1%', 'About 10%', 'None'], answer: 0,
              explain: 'Tropical glaciers only survive on very high mountains. Most of them are in the Peruvian Andes.' },
            { type: 'mcq', q: 'Why are the glaciers so important to people living below them?', options: ['Meltwater keeps rivers flowing in the dry season', 'They keep the towns warm', 'They are used for skating', 'They block earthquakes'], answer: 0,
              explain: 'In the dry season, when there is little rain, glaciers release water that people use for drinking, farming and hydro-electric power.' },
            { type: 'mcq', q: 'Peru has lost about 40% of its glacier area since the 1960s and 70s. What is the main cause?', options: ['Rising temperatures due to climate change', 'Volcanoes melting them', 'People collecting ice', 'Too much snow'], answer: 0,
              explain: 'Warmer air means the glaciers melt faster than snowfall can replace them, so they shrink up the mountains.' }
          ],
          adv: [
            { type: 'mcq', q: 'Scientists say most river catchments in the Cordillera Blanca have passed “peak water”. What does this mean?', options: ['Meltwater flow rose as glaciers shrank, but has now started to fall as there is less ice left', 'Rivers have reached their highest flood level', 'Glaciers have stopped melting', 'The rivers are full of salt water'], answer: 0,
              explain: 'At first, melting releases extra water. As the ice runs out, dry-season flow declines, threatening water supplies.' },
            { type: 'mcq', q: 'In 1941 a flood from Lake Palcacocha destroyed part of the city of Huaraz. What type of hazard was this?', options: ['A glacial lake outburst flood, when a lake held back by loose moraine suddenly bursts', 'A tsunami', 'A lahar from a volcano', 'A hurricane storm surge'], answer: 0,
              explain: 'Lakes grow as glaciers retreat. If ice or rock falls into one, a wave can breach its moraine dam. Palcacocha is still monitored and partly drained.' },
            { type: 'sort', q: 'Classify these responses to glacier retreat.', bins: ['Reducing hazard', 'Securing water supply'],
              items: [['Lowering lake levels with pipes and siphons', 0], ['Early warning sensors on glacial lakes', 0], ['Hazard maps to stop building in flood paths', 0], ['Building reservoirs to store wet-season rain', 1], ['Restoring traditional water channels and wetlands', 1]],
              explain: 'Communities need to manage both the sudden risk of floods and the slow loss of dry-season water.' }
          ]
        }
      }
    ]
  };
})();
