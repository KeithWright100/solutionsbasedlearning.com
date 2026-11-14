/* Travel the Wright Way — destination: the Arctic (Svalbard, Norway: tundra and permafrost, a polar climate, Arctic warming, and life in the far north including Sámi culture on the Norwegian mainland).
 * Climate data: Svalbard Airport, Longyearbyen, 1991–2020 normals (climatestotravel.com).
 * Facts: Longyearbyen (78°N) has midnight sun from about 20 April to 25 August and polar night from about 26 October to 15 February;
 *   Svalbard is one of the fastest-warming places on Earth; continuous permafrost underlies it, with an active layer that thaws each summer;
 *   pingos (ice-cored hills) occur in Adventdalen near Longyearbyen; buildings stand on piles so their heat does not thaw the ground;
 *   the Svalbard Global Seed Vault (opened 2008) is dug into the permafrost; Longyearbyen's cemetery stopped taking burials in 1950 because bodies do not decompose in frozen ground;
 *   about 3,000 polar bears live in the Barents Sea region; Svalbard reindeer and Arctic foxes live on the tundra;
 *   the Sámi are the Indigenous people of northern Norway, Sweden, Finland and Russia's Kola Peninsula; reindeer herding and joik singing are central to their culture.
 */
(function () {
  var PERMA_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section through Arctic tundra showing a building on stilts, an ice wedge, a lake, a pingo, the active layer and permafrost below">' +
  '<rect width="600" height="420" fill="#d6e8f7"/>' +
  // active layer and permafrost
  '<rect y="170" width="600" height="46" fill="#8a6b4a"/>' +
  '<rect y="216" width="600" height="204" fill="#9fb3c8"/>' +
  '<g fill="#e6f4ff" opacity=".8"><ellipse cx="80" cy="300" rx="30" ry="5"/><ellipse cx="300" cy="360" rx="40" ry="6"/><ellipse cx="460" cy="320" rx="34" ry="5"/><ellipse cx="560" cy="390" rx="30" ry="5"/><ellipse cx="170" cy="380" rx="26" ry="4"/></g>' +
  // tundra plants
  '<g fill="#5f8a3a">' + (function () { var g = ''; for (var i = 0; i < 26; i++) { var x = 8 + i * 23; if (x > 225 && x < 335) continue; g += '<path d="M' + x + ' 172 q3 -10 6 0 q3 -8 6 0 Z"/>'; } return g; })() + '</g>' +
  // building on stilts
  '<g stroke="#4b5563" stroke-width="5"><line x1="54" y1="150" x2="54" y2="240"/><line x1="96" y1="150" x2="96" y2="240"/><line x1="138" y1="150" x2="138" y2="240"/></g>' +
  '<rect x="40" y="108" width="112" height="42" fill="#c0392b" stroke="#7a1d14" stroke-width="2"/><path d="M36 108 L96 82 L156 108 Z" fill="#5b6573"/><g fill="#fde68a"><rect x="56" y="118" width="14" height="12"/><rect x="122" y="118" width="14" height="12"/></g>' +
  // ice wedge
  '<path d="M174 170 L196 170 L186 268 Z" fill="#e6f4ff" stroke="#9fc6dd" stroke-width="1.5"/>' +
  // lake in a hollow
  '<path d="M226 170 C 240 196, 316 196, 334 170 Z" fill="#5fb3e0"/>' +
  // pingo with ice core
  '<path d="M380 172 C 420 150, 440 92, 460 88 C 480 92, 500 150, 540 172 Z" fill="#8a6b4a"/><path d="M400 172 C 430 156, 446 110, 460 108 C 474 110, 490 156, 520 172 Z" fill="#e6f4ff"/>' +
  '<g fill="#5f8a3a"><path d="M440 98 q3 -8 6 0 Z"/><path d="M466 94 q3 -8 6 0 Z"/><path d="M420 140 q3 -8 6 0 Z"/><path d="M500 146 q3 -8 6 0 Z"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="96" y1="48" x2="96" y2="84"/><line x1="280" y1="48" x2="280" y2="178"/><line x1="490" y1="48" x2="468" y2="100"/><line x1="120" y1="250" x2="130" y2="194"/><line x1="240" y1="270" x2="188" y2="246"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.arctic = {
    id: 'arctic',
    name: 'Arctic Svalbard',
    short: 'the Arctic',
    country: 'Norway',
    gateway: 'Longyearbyen',
    lonlat: [15.6, 78.2],
    locator: { box: [2, 38, 67.5, 81.5], land: [[[11.0, 78.9], [11.8, 79.8], [13.8, 79.9], [16.0, 80.0], [18.0, 79.6], [18.5, 79.0], [21.0, 78.7], [19.0, 77.9], [17.0, 77.4], [16.5, 76.6], [15.5, 76.9], [14.5, 77.4], [13.6, 77.9], [13.0, 78.3], [11.8, 78.5]], [[18.5, 79.9], [20.5, 80.4], [24.0, 80.4], [27.0, 80.1], [25.0, 79.4], [21.0, 79.3]], [[21.0, 78.0], [22.5, 78.3], [24.0, 78.0], [23.5, 77.3], [22.0, 77.4]]], places: [['Longyearbyen', 15.63, 78.22, 'r'], ['Tromsø', 18.96, 69.65, 'r'], ['SVALBARD', 13, 76.2, 'a'], ['Barents Sea', 30, 74.5, 'a'], ['Norwegian Sea', 8, 72, 'a']] },
    stamp: { colour: '#3a8fb7', icon: '❄️' },
    transport: { name: 'dog sled', verb: 'Mush', emoji: '🛷' },
    scene: 'sled',
    photo: { file: 'Svalbard DSCF1400 (23849118591).jpg', alt: 'Green northern lights over the snowy Adventdalen valley near Longyearbyen in the polar night', author: 'Frode Bjørshol', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'Welcome to Longyearbyen on Svalbard, one of the most northerly towns on Earth. Harness the huskies and race across the frozen tundra, where the ground stays frozen all year and the sun disappears for months in winter.',
      adv: 'From Longyearbyen you cross the tundra by dog sled. This expedition covers periglacial processes and landforms, a polar climate, the causes and impacts of rapid Arctic warming, adaptations of tundra ecosystems, and the lives of Arctic peoples.'
    },
    facts: ['In Longyearbyen the sun does not rise from late October to mid-February.', 'Svalbard is one of the fastest-warming places on Earth.', 'The Global Seed Vault stores seeds from around the world deep in the frozen ground.'],
    climate: {
      place: 'Longyearbyen, Svalbard', source: 'Averages 1991–2020', lat: '78°N', rmax: 30, rstep: 10,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-11.0, -11.7, -12.2, -8.9, -2.0, 3.9, 7.4, 6.3, 2.2, -3.8, -6.5, -9.2],
      rain: [20, 15, 15, 10, 5, 10, 20, 25, 25, 15, 20, 25]
    },
    diagrams: { perma: PERMA_SVG },
    stations: [
      {
        id: 'permafrost', title: 'Frozen ground', icon: '🧊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'perma', prompt: 'Label this cross-section through the tundra.',
              spots: [{ x: 16, y: 8, a: 'Building on stilts' }, { x: 47, y: 8, a: 'Lake' }, { x: 82, y: 8, a: 'Pingo' }, { x: 16, y: 62, a: 'Active layer' }, { x: 50, y: 66, a: 'Ice wedge' }, { x: 82, y: 84, a: 'Permafrost' }],
              extra: [],
              explain: 'Permafrost is ground frozen all year. Only the top layer, the active layer, thaws in summer. Buildings stand on stilts so their warmth does not melt the ground.' },
            { type: 'mcq', q: 'What is permafrost?', options: ['Ground that stays frozen all year', 'Snow that never melts on mountains', 'Ice floating on the sea', 'A type of Arctic plant that stays green all winter'], answer: 0,
              explain: 'Ground must stay at or below 0°C for at least two years in a row to count as permafrost. On Svalbard it is hundreds of metres deep.' },
            { type: 'mcq', q: 'Why are houses in Longyearbyen built on stilts?', options: ['So their heat does not thaw the ground', 'To escape polar bears', 'To see the northern lights', 'Because rivers flood the town every summer when the snow melts'], answer: 0,
              explain: 'If permafrost thaws, the ground turns soft and buildings sink and crack.' }
          ],
          adv: [
            { type: 'label', diagram: 'perma', prompt: 'Label the periglacial features. One label does not belong.',
              spots: [{ x: 16, y: 8, a: 'Pile foundations' }, { x: 47, y: 8, a: 'Thermokarst lake' }, { x: 82, y: 8, a: 'Pingo' }, { x: 16, y: 62, a: 'Active layer' }, { x: 50, y: 66, a: 'Ice wedge' }, { x: 82, y: 84, a: 'Permafrost' }],
              extra: ['Oasis'],
              explain: 'Oases are hot-desert features. A pingo is a hill with a core of ice; an ice wedge forms as water fills cracks made by frost and freezes, year after year.' },
            { type: 'mcq', q: 'How does an ice wedge grow?', options: ['Frost cracks fill with water that freezes, every year', 'Glaciers push ice down into the ground', 'Sea water seeps in at high tide', 'Snow is buried by sand dunes, then compressed into ice'], answer: 0,
              explain: 'Intense winter cold makes the ground contract and crack. Repeated cycles build wedges several metres deep, forming polygon patterns on the surface.' },
            { type: 'mcq', q: 'In 2016 meltwater got into the entrance of the Global Seed Vault, which was built in permafrost. Why is this a warning?', options: ['Ground thought to be frozen for ever is thawing', 'The seeds were growing too fast', 'Polar bears had damaged the door', 'It proves the Arctic is getting colder, so the vault must be heated'], answer: 0,
              explain: 'The seeds were safe, but the entrance has since been waterproofed. Thawing permafrost threatens buildings, roads and pipelines across the Arctic.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Polar night and midnight sun', icon: '🌌',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'How many months have an average temperature above 0°C?', options: ['Four', 'Eight', 'Twelve', 'None'], answer: 0,
              explain: 'Only June to September are above freezing, giving a very short summer for plants to grow.' },
            { type: 'mcq', graph: true, q: 'Svalbard gets about 205 mm of precipitation a year. What does this show?', options: ['It is as dry as some deserts', 'It is wetter than a rainforest', 'It rains every day', 'It is very humid and wet all year, like Singapore'], answer: 0,
              explain: 'Cold air holds very little moisture, so the high Arctic is a “polar desert”.' },
            { type: 'mcq', q: 'In Longyearbyen the sun does not set from late April to late August. What is this called?', options: ['The midnight sun', 'The polar night', 'An eclipse', 'The northern lights'], answer: 0,
              explain: 'Because the Earth is tilted, places this far north face the sun all day in summer, and away from it for months in winter (the polar night).' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Longyearbyen (°C).', answer: 19.6, tol: 0.2, unit: '°C',
              explain: 'July (7.4°C) minus March (−12.2°C) = 19.6°C. The coldest month is March, not January.' },
            { type: 'mcq', q: 'The Arctic is warming about four times faster than the global average. What is one key reason?', options: ['Less ice, so the dark sea absorbs more heat', 'The Arctic is closer to the sun', 'There are many more active volcanoes in the Arctic than elsewhere', 'Polar bears produce greenhouse gases'], answer: 0,
              explain: 'This positive feedback is called the albedo effect: less white ice means less sunlight reflected back to space.' },
            { type: 'mcq', q: 'Why could thawing permafrost speed up global warming?', options: ['It releases carbon dioxide and methane', 'It makes the oceans saltier', 'It blocks sunlight', 'It reduces the number of clouds over the Arctic in summer'], answer: 0,
              explain: 'Permafrost stores huge amounts of frozen plant material. As it thaws and rots, greenhouse gases escape, causing more warming.' }
          ]
        }
      },
      {
        id: 'wildlife', title: 'Tundra survivors', icon: '🐻‍❄️',
        tasks: {
          ks3: [
            { type: 'sort', q: 'Sort these adaptations to the tundra.', bins: ['Animals', 'Plants'],
              items: [['Thick white fur', 0], ['Fat stored under the skin', 0], ['Small ears to lose less heat', 0], ['Growing low to the ground', 1], ['Flowering quickly in the short summer', 1], ['Small, waxy leaves', 1]],
              explain: 'Short summers, freezing winds and thin soil mean plants grow low and fast, and animals need insulation.' },
            { type: 'mcq', q: 'Polar bears hunt seals from the sea ice. Why are they threatened by climate change?', options: ['There is less sea ice to hunt from', 'They cannot swim', 'It is too cold for them', 'There are far too many seals for the bears to catch and eat'], answer: 0,
              explain: 'With less sea ice, bears must swim further and go longer without food.' },
            { type: 'mcq', q: 'Why do tundra plants grow so slowly?', options: ['Short, cold summers and frozen ground', 'Too much shade from tall trees', 'Too much rainfall', 'Animals eat them all every summer before they can grow'], answer: 0,
              explain: 'Plants only have a few weeks above freezing to grow, and roots cannot go down into the permafrost.' }
          ],
          adv: [
            { type: 'mcq', q: 'Why does the tundra have low biodiversity and a slow nutrient cycle?', options: ['Cold slows decomposition and nutrient release', 'Too many animals compete for food', 'Fires burn the vegetation every year', 'The soil is too rich in nutrients for most plants'], answer: 0,
              explain: 'Dead plant matter builds up as peat because decomposers work so slowly in the cold.' },
            { type: 'mcq', q: 'As the Arctic warms, shrubs are spreading north into the tundra. What feedback can this cause?', options: ['Dark shrubs absorb more heat', 'More snow reflects more sunlight', 'Permafrost becomes thicker', 'Reindeer populations always increase, cooling the land'], answer: 0,
              explain: 'Shrubs poke through snow and lower the albedo, and they trap insulating snow that keeps the ground warmer in winter.' },
            { type: 'mcq', q: 'Svalbard reindeer survive winter on very little food. Which adaptation helps most?', options: ['Storing fat and saving energy', 'Migrating to Africa', 'Hibernating in caves', 'Eating seals and fish when the plants are covered in snow'], answer: 0,
              explain: 'They are short-legged, stocky and move as little as possible in winter, living partly on stored fat.' }
          ]
        }
      },
      {
        id: 'people', title: 'Life in the far north', icon: '🦌',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: the Sámi are the Indigenous people of northern Norway, Sweden, Finland and part of Russia. Which animal is central to their traditional way of life?', options: ['Reindeer', 'Camels', 'Elephants', 'Horses'], answer: 0,
              explain: 'Many Sámi families still herd reindeer, moving with them between winter and summer pastures.' },
            { type: 'mcq', q: 'Culture: a traditional Sámi song, often about a person or a place, is called a…', options: ['joik', 'haka', 'flamenco', 'calypso'], answer: 0,
              explain: 'A joik is often said to “be” the person or place it describes, rather than being about them.' },
            { type: 'mcq', q: 'In Longyearbyen, people are no longer buried in the town’s cemetery. Why?', options: ['Bodies do not decay in permafrost', 'There is no space left', 'It is too dark to dig', 'Polar bears guard the cemetery and will not let anyone in'], answer: 0,
              explain: 'Burials stopped in 1950 after scientists found that bodies stayed preserved in the frozen ground.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these opportunities and threats in a warming Arctic.', bins: ['Opportunity', 'Threat'],
              items: [['New shipping routes as sea ice melts', 0], ['Easier access to oil, gas and minerals', 0], ['Longer tourist season', 0], ['Thawing ground damaging buildings', 1], ['Loss of hunting and herding grounds', 1], ['Oil spills in fragile ecosystems', 1]],
              explain: 'Some opportunities, such as more oil extraction and shipping, also increase the risks to ecosystems and Indigenous livelihoods.' },
            { type: 'mcq', q: 'Many Sámi herders oppose new wind farms and mines in northern Norway. What is their main concern?', options: ['Losing grazing land and migration routes', 'Too much electricity being produced for the small number of people who live there', 'More tourists arriving', 'Higher taxes on reindeer meat'], answer: 0,
              explain: 'In 2021 Norway’s Supreme Court ruled that wind farms at Fosen violated Sámi herders’ cultural rights.' },
            { type: 'mcq', q: 'Why is tourism in Svalbard carefully controlled?', options: ['Tundra recovers very slowly from damage', 'There are no hotels', 'Tourists are banned from Norway', 'It is too warm for visitors in winter, so they damage the melting snow'], answer: 0,
              explain: 'Plants trampled or tyre tracks left on tundra can remain for decades. Most of Svalbard is protected as national parks and nature reserves.' }
          ]
        }
      }
    ]
  };
})();
