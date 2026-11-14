/* Travel the Wright Way — destination: Laos (the Mekong, a tropical monsoon climate, hydropower dams and their impacts, a landlocked country, and Lao culture).
 * Climate data: Luang Prabang, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: Laos is the only landlocked country in Southeast Asia; Luang Prabang is a UNESCO World Heritage town (1995) where the Nam Khan joins the Mekong;
 *   Laos has built many hydropower dams and exports most of the electricity, especially to Thailand — it aims to be the "battery of Southeast Asia"; the Xayaburi Dam on the main Mekong began operating in 2019;
 *   dams trap sediment and block fish migration, affecting fisheries and the Mekong Delta downstream; the Laos–China Railway from Vientiane to Kunming opened in December 2021;
 *   during the Vietnam War era (1964–73) Laos was heavily bombed and became, per person, the most heavily bombed country in history; unexploded ordnance (UXO) still affects farmland;
 *   most Lao people are Theravada Buddhists; each morning in Luang Prabang monks collect alms (tak bat); sticky rice is the staple food; Kuang Si Falls has tiers of travertine (limestone) pools.
 */
(function () {
  var DAM_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side view of a hydropower dam on the Mekong with a reservoir, trapped sediment, turbines, power lines and the river downstream">' +
  '<rect width="600" height="420" fill="#d8ecf7"/>' +
  // hills
  '<path d="M0 150 C 80 100, 160 110, 240 130 L240 420 L0 420 Z" fill="#5f9a4a"/><path d="M360 180 C 440 150, 520 150, 600 170 L600 420 L360 420 Z" fill="#6fae58"/>' +
  // valley floor
  '<path d="M0 360 L600 360 L600 420 L0 420 Z" fill="#8a6a3f"/>' +
  // reservoir
  '<path d="M0 170 L300 170 L300 360 L0 360 Z" fill="#3b7fb8"/><path d="M0 172 C 100 168, 200 176, 300 170" fill="none" stroke="#9fd0f0" stroke-width="3"/>' +
  // sediment
  '<path d="M0 360 L0 310 C 80 300, 170 320, 296 336 L296 360 Z" fill="#b08a55"/><g fill="#8a6a3f">' + (function () { var g = ''; for (var i = 0; i < 18; i++) g += '<circle cx="' + (16 + i * 16) + '" cy="' + (334 + (i % 3) * 6) + '" r="3"/>'; return g; })() + '</g>' +
  // dam
  '<path d="M296 150 L330 150 L370 360 L296 360 Z" fill="#9aa3ad" stroke="#4b5563" stroke-width="2"/>' +
  // turbine house
  '<rect x="350" y="318" width="44" height="42" fill="#6b7280" stroke="#374151" stroke-width="2"/><circle cx="372" cy="340" r="11" fill="none" stroke="#f5c542" stroke-width="3"/><path d="M372 329 L372 351 M361 340 L383 340" stroke="#f5c542" stroke-width="2"/>' +
  '<path d="M300 300 C 320 310, 340 326, 352 336" fill="none" stroke="#9fd0f0" stroke-width="5"/>' +
  // downstream river
  '<path d="M394 352 L600 352 L600 362 L394 362 Z" fill="#7fb6dd"/>' +
  // pylons
  '<g stroke="#374151" stroke-width="2" fill="none"><path d="M430 300 L440 240 L450 300 M434 270 L446 270 M432 254 L448 254"/><path d="M530 280 L540 220 L550 280 M534 250 L546 250 M532 234 L548 234"/><path d="M394 320 Q 418 250 440 240 Q 490 236 540 220 Q 570 216 600 214"/></g>' +
  // fish blocked
  '<g fill="#c2410c"><path d="M246 250 q 12 -8 24 0 q -12 8 -24 0 Z M270 250 l8 -6 l0 12 Z"/></g><path d="M286 240 L294 260 M294 240 L286 260" stroke="#b42318" stroke-width="3"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="120" y1="136" x2="120" y2="196"/><line x1="320" y1="104" x2="318" y2="150"/><line x1="96" y1="384" x2="110" y2="330"/><line x1="410" y1="396" x2="380" y2="352"/><line x1="500" y1="180" x2="490" y2="236"/><line x1="530" y1="390" x2="520" y2="360"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.laos = {
    id: 'laos',
    name: 'Laos',
    short: 'Laos',
    country: 'Laos',
    gateway: 'Luang Prabang',
    lonlat: [102.13, 19.89],
    locator: { box: [99.5, 108, 13.5, 23], rivers: [[[100.1, 20.4], [100.6, 20.1], [101.4, 19.9], [102.13, 19.89], [101.7, 18.6], [102.1, 18.1], [102.6, 17.97], [103.6, 18.3], [104.7, 17.4], [104.8, 16.0], [105.8, 15.1], [105.9, 14.0]]], places: [['Luang Prabang', 102.13, 19.89, 'r'], ['Vientiane', 102.6, 17.97, 'r'], ['Pakse', 105.8, 15.12, 'r'], ['THAILAND', 101.0, 16.3, 'a'], ['VIETNAM', 106.6, 20.6, 'a'], ['CHINA', 101.6, 22.6, 'a'], ['CAMBODIA', 104.6, 13.8, 'a']] },
    stamp: { colour: '#b91c1c', icon: '🛕' },
    transport: { name: 'slow boat on the Mekong', verb: 'Cruise', emoji: '🚤' },
    scene: 'river',
    photo: { file: 'Boats on the Mekong with dark clouds and blue sky in the late afternoon in Luang Prabang Laos.jpg', alt: 'Long wooden boats moored on the muddy brown Mekong at Luang Prabang, with forested hills and dark clouds behind', author: 'Basile Morin', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'Sabaidee! Welcome to Laos, our neighbour across the Mekong from Thailand. Ride a slow boat down the river to Luang Prabang, a town of golden temples where monks walk the streets at dawn, and find out why Laos is building so many dams.',
      adv: 'Cruise the Mekong through Laos. This expedition covers a tropical wet and dry climate, hydropower and the “battery of Southeast Asia”, the costs of dams for people and fish downstream, being landlocked, the legacy of unexploded bombs, and Lao culture.'
    },
    facts: ['Laos is the only landlocked country in Southeast Asia.', 'Laos sells electricity from its dams to its neighbours.', 'Sticky rice is eaten with almost every meal.'],
    climate: {
      place: 'Luang Prabang, Laos', source: 'Long-term averages (CRU / Met Office)', lat: '20°N', rmax: 300, rstep: 50,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [20.0, 22.0, 24.5, 26.5, 28.0, 27.5, 27.0, 26.5, 26.5, 25.0, 22.5, 19.5],
      rain: [16, 20, 33, 110, 161, 257, 241, 299, 182, 121, 40, 12]
    },
    diagrams: { dam: DAM_SVG },
    stations: [
      {
        id: 'mekong', title: 'The mighty Mekong', icon: '🌊',
        tasks: {
          ks3: [
            { type: 'mcq', photo: true, q: 'Look at the photo of the Mekong. Why is the water brown?', options: ['It carries lots of mud and silt', 'It is polluted with oil', 'Brown rocks colour it', 'It is very deep'], answer: 0,
              explain: 'The river picks up sediment as it erodes its banks and bed. In the rainy season it carries even more.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Vientiane from Luang Prabang?', options: ['South', 'North', 'East', 'West'], answer: 0,
              explain: 'Vientiane, the capital, lies to the south, downstream on the Mekong. Laos has no coastline, so it is landlocked.' },
            { type: 'mcq', photo: { file: 'Kuang Si Falls and a turquoise water pool in Luang Prabang province Laos.jpg', alt: 'Water cascading over pale rock steps into a turquoise pool surrounded by jungle', author: 'Basile Morin', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' }, q: 'This photo was taken near Luang Prabang. What landform is shown?', options: ['A waterfall', 'A delta', 'A glacier', 'A sand dune'], answer: 0,
              explain: 'The water drops over steps of limestone into turquoise pools. Minerals in the water give it the colour.' }
          ],
          adv: [
            { type: 'mcq', photo: true, q: 'Study the photo of the Mekong. Which process explains the colour of the water?', options: ['Transport of suspended load', 'Freeze-thaw weathering', 'Longshore drift', 'Glacial plucking'], answer: 0,
              explain: 'Fine silt and clay are carried in suspension. This sediment builds the fertile Mekong Delta in Vietnam.' },
            { type: 'mcq', photo: { file: 'Kuang Si Falls and a turquoise water pool in Luang Prabang province Laos.jpg', alt: 'Water cascading over pale rock steps into a turquoise pool surrounded by jungle', author: 'Basile Morin', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' }, q: 'The pale rock steps at Kuang Si Falls are made of travertine. How do they form?', options: ['Calcium carbonate is deposited', 'Lava cools as it enters the river', 'Glaciers left them behind', 'Waves pile up sand'], answer: 0,
              explain: 'Water that has dissolved limestone upstream deposits calcium carbonate as it splashes over the falls, like at Plitvice in Croatia.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the straight-line distance from Vientiane to Pakse.', options: ['About 450 km', 'About 100 km', 'About 1,500 km', 'About 4,000 km'], answer: 0,
              explain: 'It is about 470 km, heading south-east. Being landlocked, Laos relies on long road, rail and river links to reach ports in Thailand and Vietnam.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Wet season, dry season', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Luang Prabang?', options: ['August', 'January', 'December', 'March'], answer: 0,
              explain: 'August gets about 299 mm. The south-west monsoon brings heavy rain from May to October.' },
            { type: 'mcq', graph: true, q: 'Which months are coolest in Luang Prabang?', options: ['December and January', 'June and July', 'April and May', 'August and September'], answer: 0,
              explain: 'They are cool and dry, with chilly mornings and mist on the river.' },
            { type: 'mcq', graph: true, q: 'Which is the hottest month?', options: ['May', 'January', 'August', 'December'], answer: 0,
              explain: 'May averages 28°C, just before the heavy rains bring cloud.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Luang Prabang (mm).', answer: 1492, tol: 10, unit: 'mm',
              explain: 'Adding the twelve months gives about 1,492 mm.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly rain falls from May to October? Give a whole number.', answer: 85, tol: 1, unit: '%',
              explain: 'May to October = 1,261 mm out of 1,492 mm, which is about 85%.' },
            { type: 'mcq', q: 'Why does almost all of the rain fall from May to October?', options: ['The south-west monsoon brings moist air', 'Cold fronts arrive from the Arctic', 'Snow melts in the Himalayas', 'Trade winds blow from the Sahara'], answer: 0,
              explain: 'In winter, dry north-east winds blow from mainland Asia, so there is a long dry season.' }
          ]
        }
      },
      {
        id: 'dams', title: 'The battery of Asia', icon: '⚡',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'dam', prompt: 'Label this hydropower dam on the Mekong.',
              spots: [{ x: 20, y: 30, a: 'Reservoir' }, { x: 53, y: 22, a: 'Dam wall' }, { x: 16, y: 93, a: 'Trapped mud' }, { x: 70, y: 96, a: 'Turbine' }, { x: 84, y: 40, a: 'Power lines' }, { x: 88, y: 93, a: 'River below dam' }],
              extra: [],
              explain: 'Water from the reservoir spins turbines to make electricity, which is sent along power lines. Mud settles behind the dam instead of travelling downstream.' },
            { type: 'mcq', q: 'Laos sells much of its electricity to other countries. Which country buys the most?', options: ['Thailand', 'Australia', 'Brazil', 'Iceland'], answer: 0,
              explain: 'This is why Laos is called the “battery of Southeast Asia”.' },
            { type: 'mcq', q: 'Why are fish affected by dams on the Mekong?', options: ['Dams block the routes fish swim to breed', 'Dams make the water too salty', 'Fish are scared of the electricity in the water', 'Dams make the river freeze'], answer: 0,
              explain: 'Millions of people in Laos and Cambodia rely on Mekong fish for food.' }
          ],
          adv: [
            { type: 'label', diagram: 'dam', prompt: 'Label the hydropower scheme. One label does not belong.',
              spots: [{ x: 20, y: 30, a: 'Reservoir (stored water)' }, { x: 53, y: 22, a: 'Concrete dam' }, { x: 16, y: 93, a: 'Sediment trapped' }, { x: 70, y: 96, a: 'Turbine and generator' }, { x: 84, y: 40, a: 'Export to Thailand' }, { x: 88, y: 93, a: 'Sediment-starved river' }],
              extra: ['Ox-bow lake'],
              explain: 'Water leaving a dam carries little sediment, so it erodes the bed downstream, and less silt reaches the Mekong Delta.' },
            { type: 'sort', q: 'Classify these impacts of Mekong hydropower dams.', bins: ['Benefit', 'Cost'],
              items: [['Export income for Laos', 0], ['Low-carbon electricity', 0], ['Water stored for the dry season', 0], ['Villages flooded and people resettled', 1], ['Fish migration blocked', 1], ['Less sediment reaching the delta', 1]],
              explain: 'Benefits mostly go to Laos and its electricity buyers, while many costs fall on fishing and farming communities downstream in Cambodia and Vietnam.' },
            { type: 'mcq', q: 'Why does building dams on a river shared by several countries cause disagreement?', options: ['Upstream decisions affect people downstream', 'Rivers can only have one dam', 'Dams make rivers flow uphill', 'Only one country is allowed to fish in the river'], answer: 0,
              explain: 'The Mekong River Commission helps Laos, Thailand, Cambodia and Vietnam share information, but it cannot stop a dam being built.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Temples, monks and sticky rice', icon: '🛕',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: in Luang Prabang, what happens at dawn every morning?', options: ['Monks walk the streets collecting alms', 'A boat race on the Mekong with dragon boats', 'Fireworks over the river', 'A big market on the water'], answer: 0,
              explain: 'People kneel by the road and give sticky rice to the monks. This is called tak bat.' },
            { type: 'mcq', q: 'Culture: what is the main food eaten with most Lao meals?', options: ['Sticky rice', 'Bread', 'Pasta', 'Potatoes'], answer: 0,
              explain: 'It is often served in a small woven basket and eaten with the fingers.' },
            { type: 'mcq', q: 'Why do farmers in Laos still find old bombs in their fields?', options: ['It was heavily bombed in the 1960s–70s', 'There are active volcanoes in the hills of Laos', 'Meteorites fall there often', 'People bury them for fun'], answer: 0,
              explain: 'Teams work to find and safely remove unexploded bombs so land can be farmed.' }
          ],
          adv: [
            { type: 'mcq', q: 'Luang Prabang is a UNESCO World Heritage Site. Which is a risk of rising tourist numbers?', options: ['Traditional life becomes a show for visitors', 'Fewer jobs for local people', 'Temples become less important to local people', 'The Mekong dries up'], answer: 0,
              explain: 'Visitors are asked to watch the alms giving quietly from a distance and not use flash photography.' },
            { type: 'mcq', q: 'Unexploded bombs (UXO) still affect Laos. How does this slow development?', options: ['Land is unsafe to farm or build on', 'It makes the Mekong flood more', 'It stops tourists flying in', 'It raises the price of rice abroad'], answer: 0,
              explain: 'Clearing land is slow and expensive, and accidents still injure people, many of them children.' },
            { type: 'mcq', q: 'The Laos–China Railway opened in 2021. Which is a concern about it?', options: ['Laos took on large debts to build it', 'It only carries animals', 'It runs on coal dug from mines in northern Laos', 'It goes to the sea'], answer: 0,
              explain: 'The railway cuts journey times and costs, but the loans are large compared with the size of the Lao economy.' }
          ]
        }
      }
    ]
  };
})();
