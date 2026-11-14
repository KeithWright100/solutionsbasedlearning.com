/* Travel the Wright Way — destination: Morocco (the High Atlas and the desert edge: relief and rain shadow, a semi-arid climate, water, energy and hazards, and Amazigh and Moroccan culture).
 * Climate data: Marrakech, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: Jebel Toubkal (4,167 m) in the High Atlas is the highest mountain in North Africa; winter rain comes mainly from Atlantic depressions,
 *   so the mountains' north-western slopes are wetter and the south-east lies in a rain shadow leading to the Sahara;
 *   khettaras are traditional underground channels bringing groundwater to fields; the Noor Ouarzazate complex is one of the world's largest concentrated solar power plants;
 *   the Al Haouz earthquake (magnitude 6.8) in September 2023 killed nearly 3,000 people, many in mud-brick villages in the High Atlas;
 *   Amazigh (Berber) became an official language of Morocco in 2011; Jemaa el-Fnaa square in Marrakech is recognised by UNESCO for its storytellers and performers;
 *   the Ksar of Aït-Ben-Haddou is a UNESCO World Heritage Site and a popular film location.
 */
(function () {
  var ATLAS_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section from the Marrakech plain over the snowy High Atlas, with a terraced village and rain on the wet side, and an oasis and sand dunes on the dry side">' +
  '<rect width="600" height="420" fill="#cfe6f7"/>' +
  // clouds and rain on windward side
  '<g fill="#7b8794"><ellipse cx="190" cy="110" rx="56" ry="20"/><ellipse cx="236" cy="96" rx="44" ry="20"/></g>' +
  '<g stroke="#3d8fc6" stroke-width="2.5">' + (function () { var g = ''; for (var i = 0; i < 9; i++) g += '<line x1="' + (160 + i * 11) + '" y1="' + (126 + (i % 3) * 3) + '" x2="' + (154 + i * 11) + '" y2="' + (150 + (i % 3) * 6) + '"/>'; return g; })() + '</g>' +
  '<g fill="#1d4ed8" stroke="#1d4ed8" stroke-width="5"><path d="M10 120 C 60 116, 110 112, 140 106" fill="none"/><path d="M140 98 L156 105 L142 114 Z" stroke-width="1"/></g>' +
  // land
  '<path d="M0 300 L170 298 L300 70 L430 262 L600 280 L600 420 L0 420 Z" fill="#b5835a"/>' +
  '<path d="M0 300 L170 298 L200 252 L0 420 Z" fill="#6aa84f" opacity="0"/>' +
  '<rect y="300" width="172" height="120" fill="#7aa64a"/><g fill="#4f7f2a">' + (function () { var g = ''; for (var i = 0; i < 14; i++) g += '<circle cx="' + (10 + i * 12) + '" cy="' + (312 + (i % 2) * 10) + '" r="5"/>'; return g; })() + '</g>' +
  '<path d="M276 112 L300 70 L326 108 L312 116 L290 116 Z" fill="#fff"/>' +
  // terraced village
  '<g stroke="#6b8f3a" stroke-width="3"><line x1="206" y1="250" x2="250" y2="250"/><line x1="214" y1="236" x2="256" y2="236"/><line x1="222" y1="222" x2="262" y2="222"/></g>' +
  '<g fill="#c9a06a" stroke="#7a4b1c" stroke-width="1">' + (function () { var g = ''; for (var i = 0; i < 4; i++) g += '<rect x="' + (226 + i * 10) + '" y="' + (204 - i * 4) + '" width="9" height="10"/>'; return g; })() + '</g>' +
  // dry side: oasis and kasbah, dunes
  '<rect x="430" y="262" width="170" height="158" fill="#d9b27a"/>' +
  '<g>' + (function () { var g = ''; [446, 468, 490].forEach(function (x) { g += '<path d="M' + x + ' 278 L' + (x + 2) + ' 246" stroke="#7a5a32" stroke-width="3"/><path d="M' + (x + 2) + ' 246 q-12 0 -18 8 M' + (x + 2) + ' 246 q12 0 18 8 M' + (x + 2) + ' 246 q-6 -10 -16 -10 M' + (x + 2) + ' 246 q6 -10 16 -10" stroke="#2f7a3a" stroke-width="3" fill="none"/>'; }); return g; })() + '</g>' +
  '<rect x="500" y="250" width="22" height="26" fill="#c08850" stroke="#7a4b1c" stroke-width="1"/>' +
  '<path d="M520 300 C 540 270, 570 270, 590 300 Z" fill="#f2c26b" stroke="#c98a3c" stroke-width="1.5"/><path d="M540 330 C 560 304, 590 306, 600 320 L600 330 Z" fill="#f2c26b" stroke="#c98a3c" stroke-width="1.5"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="360" y1="30" x2="304" y2="72"/><line x1="156" y1="204" x2="222" y2="226"/><line x1="440" y1="348" x2="462" y2="282"/><line x1="530" y1="256" x2="556" y2="282"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.morocco = {
    id: 'morocco',
    name: 'Morocco',
    short: 'Morocco',
    country: 'Morocco',
    gateway: 'Marrakech',
    lonlat: [-7.99, 31.63],
    locator: { box: [-13.5, -1, 27.5, 36], places: [['Marrakech', -7.99, 31.63, 'l'], ['Toubkal', -7.92, 31.06, 'b'], ['Ouarzazate', -6.9, 30.92, 'r'], ['Rabat', -6.84, 34.02, 'l'], ['Fez', -5.0, 34.03, 'r'], ['Atlantic Ocean', -11.5, 32.5, 'a'], ['Sahara', -4.0, 29.3, 'a']] },
    stamp: { colour: '#b91c1c', icon: '🕌' },
    transport: { name: 'mule trek in the Atlas Mountains', verb: 'Trek', emoji: '🫏' },
    scene: 'mule',
    photo: { file: 'Ait Ben Haddou.jpg', alt: 'The mud-brick fortified village of Aït Benhaddou climbing a hillside above a dry river valley', author: 'Wonker', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'Salam! Welcome to Marrakech, the “Red City”, with the snowy High Atlas mountains on the horizon. Load up a mule and trek over the mountains, through Amazigh villages, to the oases and dunes on the edge of the Sahara.',
      adv: 'From Marrakech you trek across the High Atlas to the desert edge. This expedition covers relief rainfall and rain shadows, a semi-arid climate, water scarcity and renewable energy, the 2023 Al Haouz earthquake, and Amazigh and Moroccan culture.'
    },
    facts: ['Jebel Toubkal, 4,167 m, is the highest mountain in North Africa.', 'The Noor Ouarzazate solar plant is one of the largest in the world.', 'Amazigh (Berber) has been an official language of Morocco since 2011.'],
    climate: {
      place: 'Marrakech, Morocco', source: 'Long-term averages (CRU / Met Office)', lat: '32°N', rmax: 40, rstep: 10,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [12.0, 14.0, 15.5, 17.5, 20.5, 23.5, 28.0, 28.0, 25.0, 21.0, 16.0, 12.5],
      rain: [32, 35, 31, 29, 14, 4, 1, 2, 6, 22, 38, 35]
    },
    diagrams: { atlas: ATLAS_SVG },
    stations: [
      {
        id: 'atlas', title: 'Over the High Atlas', icon: '⛰️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'atlas', prompt: 'Label this journey across the Atlas Mountains.',
              spots: [{ x: 16, y: 18, a: 'Moist wind' }, { x: 70, y: 6, a: 'Snowy peak' }, { x: 14, y: 48, a: 'Terraced village' }, { x: 16, y: 86, a: 'Farmland plain' }, { x: 70, y: 86, a: 'Oasis' }, { x: 86, y: 58, a: 'Sand dunes' }],
              extra: [],
              explain: 'Moist air from the Atlantic drops rain and snow as it rises over the mountains. Beyond them the land is much drier, and people farm only where there is water, in oases.' },
            { type: 'mcq', q: 'Why is the land south of the High Atlas so much drier than the north?', options: ['It is in the mountains’ rain shadow', 'It is closer to the sea', 'It is higher up', 'It gets more wind from the Atlantic'], answer: 0,
              explain: 'The air has already lost most of its moisture on the northern slopes, so it is dry when it sinks on the southern side.' },
            { type: 'mcq', q: 'Why do Amazigh villagers build terraces on steep slopes?', options: ['To create flat land and stop soil washing away', 'To keep goats out', 'To collect snow', 'To make the mountains look tidier for visitors'], answer: 0,
              explain: 'Terraces hold soil and water, so crops like barley, walnuts and apples can grow on the mountainside.' }
          ],
          adv: [
            { type: 'label', diagram: 'atlas', prompt: 'Label the transect across the Atlas. One label does not belong.',
              spots: [{ x: 16, y: 18, a: 'Winter Atlantic depressions' }, { x: 70, y: 6, a: 'High Atlas (Toubkal)' }, { x: 14, y: 48, a: 'Terraced Amazigh village' }, { x: 16, y: 86, a: 'Irrigated plain' }, { x: 70, y: 86, a: 'Date-palm oasis' }, { x: 86, y: 58, a: 'Erg (sand sea)' }],
              extra: ['Coral reef'],
              explain: 'Coral reefs need warm, clear tropical seas. This transect runs from a relatively wet, irrigated plain over the mountains into the rain shadow and the desert.' },
            { type: 'mcq', q: 'Snowmelt from the High Atlas is vital for farms on the Marrakech plain. Why might climate change threaten this?', options: ['Less snow means less summer river flow', 'More snow would block the rivers', 'Warmer winters bring more rain to the desert instead', 'Glaciers would grow and dam the valleys'], answer: 0,
              explain: 'Morocco suffered six years of drought up to 2024, emptying many reservoirs and forcing water rationing.' },
            { type: 'mcq', q: 'Which best describes the climate change along this transect, from the plain to the far side of the mountains?', options: ['Semi-arid, then wetter and colder, then arid', 'Hot desert all the way across', 'Wet everywhere, because the mountains catch rain on both sides', 'Tropical, then polar, then tropical'], answer: 0,
              explain: 'Altitude brings cooler, wetter conditions. Beyond the mountains, the rain shadow and the Sahara bring true desert.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Sunny and semi-arid', icon: '☀️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Marrakech?', options: ['November', 'July', 'August', 'June'], answer: 0,
              explain: 'November gets about 38 mm. Almost no rain falls in summer.' },
            { type: 'mcq', graph: true, q: 'Which months are the hottest?', options: ['July and August', 'December and January', 'March and April', 'October and November'], answer: 0,
              explain: 'They average about 28°C, with daytime highs often over 36°C.' },
            { type: 'mcq', q: 'Marrakech is called “semi-arid”. What does this mean?', options: ['Dry, but not quite a desert', 'Very wet all year', 'Frozen in winter', 'Hot and wet in summer, like a rainforest'], answer: 0,
              explain: 'It gets a little more rain than a true desert, mostly in winter.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Marrakech (mm).', answer: 249, tol: 3, unit: 'mm',
              explain: 'Adding the months gives about 249 mm, right on the 250 mm boundary often used to define a desert.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Marrakech (°C).', answer: 16, tol: 0.2, unit: '°C',
              explain: 'July and August (28°C) minus January (12°C) = 16°C.' },
            { type: 'mcq', graph: true, q: 'Why does Marrakech get most of its rain in winter?', options: ['Atlantic depressions reach it in winter', 'Monsoon winds blow in summer', 'The ITCZ moves north in winter', 'Snow melts in the mountains in winter and falls as rain'], answer: 0,
              explain: 'In summer the subtropical high pressure sits over the region and blocks rain-bearing systems, as in other Mediterranean-type climates.' }
          ]
        }
      },
      {
        id: 'water', title: 'Water, sun and shaking ground', icon: '💧',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'A khettara is a traditional Moroccan water system. What is it?', options: ['An underground channel to fields', 'A large modern dam', 'A tank on a roof', 'A deep well powered by small wind turbines on the roof'], answer: 0,
              explain: 'Khettaras use gravity to carry groundwater many kilometres, without pumps, to farms and villages.' },
            { type: 'mcq', q: 'Near Ouarzazate, Morocco built one of the world’s largest solar power plants. Why there?', options: ['Clear skies and strong sunshine', 'It is the windiest place in the whole of Africa', 'It has lots of rivers', 'Coal is mined nearby'], answer: 0,
              explain: 'The Noor complex helps Morocco cut its reliance on imported fossil fuels.' },
            { type: 'mcq', q: 'In September 2023 an earthquake struck the High Atlas. Why were so many homes destroyed?', options: ['Many were made of mud brick and stone', 'They were too tall', 'They were made of steel', 'They were built on small islands in the rivers'], answer: 0,
              explain: 'Traditional buildings without reinforcement collapsed. Nearly 3,000 people died, mostly in remote mountain villages.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these responses to drought in Morocco.', bins: ['Increase supply', 'Reduce demand'],
              items: [['Desalination plants on the coast', 0], ['New dams and water transfers', 0], ['Restoring khettaras', 0], ['Drip irrigation on farms', 1], ['Banning lawns and car washes in drought', 1], ['Growing less thirsty crops', 1]],
              explain: 'Morocco now plans for desalination to supply much of its drinking water, while farms switch to drip irrigation.' },
            { type: 'mcq', q: 'Why was it so hard to get aid to villages after the 2023 earthquake?', options: ['Landslides blocked narrow mountain roads', 'The villages were on islands', 'There was too much snow in September', 'Nobody knew where the villages were'], answer: 0,
              explain: 'Remote, steep terrain made rescue difficult. Rebuilding aims to combine traditional styles with earthquake-resistant design.' },
            { type: 'mcq', q: 'Morocco plans to export solar and wind power to Europe. What is the main geographical advantage?', options: ['Strong sun and wind, close to Europe', 'It has the world’s biggest oil reserves', 'It has no deserts', 'It shares a land border with France'], answer: 0,
              explain: 'Morocco is only about 14 km from Spain across the Strait of Gibraltar, and already exports electricity through undersea cables.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Souks, storytellers and kasbahs', icon: '🫖',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what drink is famously offered to guests in Morocco?', options: ['Sweet mint tea', 'Coffee with milk', 'Hot chocolate', 'Iced lemonade made with snow from the Atlas'], answer: 0,
              explain: 'Green tea with fresh mint and sugar is poured from high above the glass to make it frothy.' },
            { type: 'mcq', q: 'Culture: a tagine is both a dish and the pot it is cooked in. What shape is the lid?', options: ['A tall cone', 'Flat', 'A square box', 'A dome with holes, like a sieve'], answer: 0,
              explain: 'The cone shape traps steam, which drips back down so slow-cooked food stays moist.' },
            { type: 'mcq', q: 'Culture: Jemaa el-Fnaa in Marrakech is a famous square. What is it best known for?', options: ['Storytellers, music and food stalls', 'A huge car park', 'A football stadium built for the 2030 World Cup', 'A ski slope'], answer: 0,
              explain: 'UNESCO recognises the square for keeping alive traditions such as storytelling, music and performance.' }
          ],
          adv: [
            { type: 'mcq', q: 'In 2011 Morocco made Amazigh an official language alongside Arabic. Why is this significant?', options: ['It recognises the original inhabitants', 'Amazigh is spoken only by tourists', 'It replaced Arabic in schools', 'It is a brand-new language that was invented in 2011'], answer: 0,
              explain: 'Millions of Moroccans speak Amazigh languages, written in the ancient Tifinagh script, now seen on road signs and in schools.' },
            { type: 'mcq', q: 'Aït-Ben-Haddou is a UNESCO site and a popular film set. What is a likely cost of its fame?', options: ['Many residents moved out', 'It became too wet', 'It is now a ski resort with lifts up the hills behind it', 'It has no visitors'], answer: 0,
              explain: 'Most families now live in the newer village across the river, raising questions about keeping heritage sites living communities.' },
            { type: 'mcq', q: 'Money sent home by Moroccans working abroad is an important part of the economy. What are these payments called?', options: ['Remittances', 'Tariffs', 'Subsidies', 'Royalties paid by film companies to villages'], answer: 0,
              explain: 'Remittances support families, pay for houses and schooling, and bring in foreign currency.' }
          ]
        }
      }
    ]
  };
})();
