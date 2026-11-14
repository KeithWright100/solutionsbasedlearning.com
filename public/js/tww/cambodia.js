/* Travel the Wright Way — destination: Cambodia (the Tonle Sap flood pulse, stilt villages, fishing and rice, threats from upstream dams, a tropical monsoon climate, Angkor and Khmer culture).
 * Climate data: Siem Reap (weather2travel.com, CRU averages; monthly means from average maximum and minimum).
 * Facts: the Tonle Sap is the largest freshwater lake in Southeast Asia and a UNESCO Biosphere Reserve (1997);
 *   in the wet season the swollen Mekong pushes water up the Tonle Sap River, reversing its flow, so the lake grows to about five times its dry-season size and rises by up to about 10 m;
 *   villages such as Kampong Phluk are built on stilts 6–10 m high; others float; the flooded forest is a nursery for fish, which provide much of Cambodians' protein;
 *   upstream dams on the Mekong, overfishing and clearing of the flooded forest threaten the lake; in 2016 it was named the world's "most threatened lake";
 *   Angkor Wat, built in the 12th century by the Khmer Empire, is the world's largest religious monument; the Khmer used huge reservoirs (barays) and canals to manage water;
 *   culture: Khmer is the official language; most people are Theravada Buddhists; fish amok is steamed fish curry; Khmer New Year is in mid-April; Angkor Wat appears on the national flag.
 */
(function () {
  var PULSE_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the edge of the Tonle Sap lake: rice fields on higher ground, a house on tall stilts, trees of the flooded forest, a floating house and a fishing boat, with the low dry-season water level and the much higher wet-season level marked">' +
  '<rect width="600" height="420" fill="#e8f1f5"/>' +
  '<path d="M0 230 L120 236 L600 330 L600 420 L0 420 Z" fill="#9c7f55"/>' +
  '<path d="M0 230 L120 236 L120 226 L0 220 Z" fill="#84cc16"/><g stroke="#4d7c0f" stroke-width="2">' + (function () { var g = ''; for (var i = 0; i < 10; i++) g += '<line x1="' + (6 + i * 11) + '" y1="226" x2="' + (8 + i * 11) + '" y2="214"/>'; return g; })() + '</g>' +
  '<path d="M150 256 L600 256 L600 330 L150 242 Z" fill="#60a5fa" opacity=".35"/>' +
  '<path d="M150 256 L600 256" stroke="#1d4ed8" stroke-width="2.5" stroke-dasharray="8 5"/>' +
  '<path d="M430 296 L600 330 L600 300 Z" fill="#2563eb" opacity=".8"/>' +
  '<path d="M430 300 L600 300" stroke="#1e3a8a" stroke-width="2.5"/>' +
  '<g stroke="#5b4630" stroke-width="3"><line x1="216" y1="170" x2="216" y2="250"/><line x1="256" y1="170" x2="256" y2="258"/></g><rect x="206" y="146" width="60" height="26" fill="#c9a36b" stroke="#5b4630"/><path d="M200 148 L236 126 L272 148 Z" fill="#9a3412"/>' +
  '<g>' + (function () { var g = ''; for (var i = 0; i < 4; i++) { var x = 316 + i * 26, b = 274 + i * 5; g += '<line x1="' + x + '" y1="' + b + '" x2="' + x + '" y2="' + (b - 70) + '" stroke="#6b4423" stroke-width="4"/><circle cx="' + x + '" cy="' + (b - 76) + '" r="16" fill="#3f7f3a"/>'; } return g; })() + '</g>' +
  '<g><rect x="470" y="282" width="56" height="18" fill="#d6b98a" stroke="#5b4630"/><path d="M464 284 L498 266 L532 284 Z" fill="#64748b"/><rect x="464" y="298" width="68" height="6" fill="#7c5b2e"/></g>' +
  '<path d="M546 300 Q 566 308 590 300 L586 296 L550 296 Z" fill="#1e3a8a"/>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="78" y1="150" x2="70" y2="214"/><line x1="150" y1="92" x2="210" y2="150"/><line x1="380" y1="110" x2="350" y2="196"/><line x1="522" y1="200" x2="560" y2="256"/><line x1="440" y1="390" x2="496" y2="306"/><line x1="200" y1="380" x2="470" y2="302"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.cambodia = {
    id: 'cambodia',
    name: 'Cambodia',
    short: 'Cambodia',
    country: 'Cambodia',
    gateway: 'Siem Reap',
    lonlat: [104.92, 11.56],
    locator: { box: [102.2, 107.8, 10.2, 14.9], lakes: [[[103.55, 13.1], [103.9, 13.12], [104.3, 12.85], [104.55, 12.55], [104.4, 12.42], [104.0, 12.6], [103.7, 12.85], [103.5, 13.0]]], rivers: [[[105.95, 14.9], [105.95, 13.6], [105.6, 12.5], [104.92, 11.56], [105.1, 11.1], [105.3, 10.6]], [[104.55, 12.5], [104.75, 12.0], [104.92, 11.56]]], places: [['Siem Reap', 103.86, 13.36, 't'], ['Phnom Penh', 104.92, 11.56, 'r'], ['Battambang', 103.2, 13.1, 'b'], ['Tonle Sap', 104.0, 12.4, 'a'], ['Mekong', 106.25, 13.3, 'a'], ['THAILAND', 102.9, 14.5, 'a'], ['VIETNAM', 107.0, 11.3, 'a']] },
    stamp: { colour: '#0f766e', icon: '🛕' },
    transport: { name: 'river boat', verb: 'Sail', emoji: '🛶' },
    scene: 'tonle',
    photo: { file: 'Tonlé Sap Floating Village (6202545932).jpg', alt: 'Wooden houses standing on tall stilts above brown water at the edge of a lake, with boats moored below', author: 'Jorge Láscar', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'Choum reap suor! Welcome to Cambodia, right next door to Thailand. Sail across the Tonle Sap, a lake that grows to five times its size every rainy season, and visit villages built on stilts as tall as a house. Then explore the temples of Angkor.',
      adv: 'Sail across Cambodia’s Tonle Sap. This expedition covers a tropical monsoon climate, the flood pulse and the reversing Tonle Sap River, stilt villages and adaptation, fishing and rice, threats from Mekong dams, the water engineering of Angkor, and Khmer culture.'
    },
    facts: ['The Tonle Sap River flows backwards for part of every year.', 'Some Cambodian houses stand on stilts up to 10 m tall.', 'Angkor Wat is the largest religious monument in the world.'],
    climate: {
      place: 'Siem Reap, Cambodia', source: 'CRU averages (weather2travel.com)', lat: '13°N', rmax: 250, rstep: 50,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [25.0, 27.5, 29.5, 30.0, 29.5, 28.5, 28.0, 28.0, 27.5, 27.5, 26.5, 25.0],
      rain: [1, 9, 28, 64, 146, 166, 186, 224, 250, 215, 61, 7]
    },
    diagrams: { pulse: PULSE_SVG },
    stations: [
      {
        id: 'lake', title: 'The lake that breathes', icon: '🌊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'pulse', prompt: 'Label life at the edge of the Tonle Sap.',
              spots: [{ x: 13, y: 36 }, { x: 25, y: 22 }, { x: 63, y: 26 }, { x: 87, y: 48 }, { x: 73, y: 93 }, { x: 33, y: 90 }].map(function (s, i) { s.a = ['Rice fields', 'Stilt house', 'Flooded forest', 'Wet-season level', 'Floating house', 'Dry-season level'][i]; return s; }),
              extra: [],
              explain: 'In the wet season the water rises several metres, right up to the stilt houses. In the dry season it drops far below them.' },
            { type: 'mcq', photo: true, q: 'Look at the photo. Why are these houses built on tall stilts?', options: ['The lake rises many metres in the wet season', 'To keep them warm and dry in the deep winter snow', 'Because the ground is made of ice', 'To be close to aeroplanes'], answer: 0,
              explain: 'This is an adaptation to the yearly flood. Under the house is used as a workspace in the dry season.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Phnom Penh from Siem Reap?', options: ['South-east', 'North-west', 'North-east', 'South-west'], answer: 0,
              explain: 'The capital is about 230 km south-east, where the Tonle Sap River meets the Mekong.' }
          ],
          adv: [
            { type: 'label', diagram: 'pulse', prompt: 'Label the Tonle Sap flood pulse. One label does not belong.',
              spots: [{ x: 13, y: 36 }, { x: 25, y: 22 }, { x: 63, y: 26 }, { x: 87, y: 48 }, { x: 73, y: 93 }, { x: 33, y: 90 }].map(function (s, i) { s.a = ['Flood-recession rice fields', 'Stilt house (6–10 m)', 'Flooded forest (fish nursery)', 'Maximum wet-season level', 'Floating house moves with the water', 'Minimum dry-season level'][i]; return s; }),
              extra: ['Concrete flood wall'],
              explain: 'Rather than stopping the flood, people adapt to it. Fertile silt left behind feeds the rice fields.' },
            { type: 'mcq', q: 'Why does the Tonle Sap River reverse its flow each wet season?', options: ['The flooding Mekong is higher than the lake, so water is pushed upstream', 'Strong winds blow the water backwards', 'An earthquake tilts the land every year', 'Snowmelt from Cambodia’s mountains flows uphill'], answer: 0,
              explain: 'When the Mekong falls in the dry season, the lake drains back out through the same river.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Siem Reap to Phnom Penh.', options: ['About 230 km', 'About 23 km', 'About 900 km', 'About 2,300 km'], answer: 0,
              explain: 'Boats cross the lake between the two cities in the wet season, when the water is deep enough.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Wet and dry', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Siem Reap?', options: ['September', 'January', 'March', 'December'], answer: 0,
              explain: 'September has about 250 mm. Thailand next door has a similar pattern.' },
            { type: 'mcq', graph: true, q: 'Which is the hottest month?', options: ['April', 'August', 'November', 'January'], answer: 0,
              explain: 'April averages about 30°C, just before the monsoon rains arrive and cool things down.' },
            { type: 'mcq', graph: true, q: 'How would you describe the climate?', options: ['Hot all year with a wet season and a dry season', 'Cold winters with heavy snow and freezing summers', 'Wet every single month', 'Dry all year round'], answer: 0,
              explain: 'This is a tropical monsoon (wet and dry) climate.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Siem Reap (mm).', answer: 1357, tol: 5, unit: 'mm',
              explain: 'Adding the twelve months gives 1,357 mm.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly rain falls from May to October? Give a whole number.', answer: 87, tol: 1, unit: '%',
              explain: 'May to October = 1,187 mm. 1,187 ÷ 1,357 × 100 ≈ 87%.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 5, tol: 0.2, unit: '°C',
              explain: 'April 30.0°C − January and December 25.0°C = 5.0°C.' }
          ]
        }
      },
      {
        id: 'fish', title: 'Fish, rice and dams', icon: '🐟',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Why is the Tonle Sap so important for food in Cambodia?', options: ['It provides huge amounts of fish', 'It is used to grow apples', 'It is where sheep are kept', 'It provides salt that is dried from the sea'], answer: 0,
              explain: 'Fish and rice are the two main foods of Cambodia.' },
            { type: 'mcq', q: 'Why do fish breed in the flooded forest?', options: ['It gives young fish food and shelter', 'The water there is frozen', 'There are no plants or animals there at all', 'Fishermen feed them there'], answer: 0,
              explain: 'Cutting down the flooded forest means fewer places for young fish to grow.' },
            { type: 'mcq', map: true, q: 'Map skills: which big river does the Tonle Sap River join at Phnom Penh?', options: ['The Mekong', 'The Nile', 'The Amazon', 'The Thames'], answer: 0,
              explain: 'The Mekong flows from China through Laos, Thailand and Cambodia to Vietnam.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these threats to the Tonle Sap.', bins: ['Caused within Cambodia', 'Caused upstream (other countries)'],
              items: [['Overfishing with illegal nets', 0], ['Clearing the flooded forest', 0], ['Pollution from floating villages', 0], ['Hydropower dams on the Mekong in Laos', 1], ['Dams on the upper Mekong in China', 1], ['Less sediment reaching the lake', 1]],
              explain: 'Dams hold back water and sediment, weakening the flood pulse that the lake depends on.' },
            { type: 'mcq', q: 'In 2016 the Tonle Sap was named the world’s “most threatened lake”. Why might a weaker flood pulse cause food shortages?', options: ['Fewer fish breed, and less silt reaches the rice fields', 'More snow falls on the farms', 'The lake becomes too salty for rice', 'Tourists eat all the fish'], answer: 0,
              explain: 'Millions of people depend on the lake’s fish for most of their protein.' },
            { type: 'mcq', q: 'The Mekong flows through six countries. Why does this make managing it difficult?', options: ['Decisions upstream affect people downstream', 'Each country uses a different river', 'Only one country is allowed to use it', 'The river changes its name in each country it flows through'], answer: 0,
              explain: 'The Mekong River Commission tries to help countries cooperate, but China is not a full member.' }
          ]
        }
      },
      {
        id: 'angkor', title: 'Temples of Angkor', icon: '🛕',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: Angkor Wat appears on Cambodia’s flag. What is it?', options: ['A huge ancient temple', 'A mountain', 'A river boat', 'A modern glass skyscraper'], answer: 0,
              explain: 'It was built in the 12th century and is the largest religious monument in the world.' },
            { type: 'mcq', q: 'Culture: what is the main language of Cambodia?', options: ['Khmer', 'Thai', 'Japanese', 'Spanish'], answer: 0,
              explain: 'Khmer has its own alphabet, which inspired the Thai alphabet.' },
            { type: 'mcq', q: 'Culture: fish amok is a famous Cambodian dish. How is it cooked?', options: ['Steamed in banana leaves', 'Frozen on a stick', 'Baked slowly inside a pie crust', 'Boiled in milk'], answer: 0,
              explain: 'It is a mild curry made with coconut milk and freshwater fish from the lake.' }
          ],
          adv: [
            { type: 'mcq', q: 'The Khmer Empire built huge reservoirs called barays around Angkor. Why?', options: ['To store monsoon rain for the long dry season', 'To keep crocodiles and other animals for the king', 'To make salt from sea water', 'To stop ships reaching the city'], answer: 0,
              explain: 'Managing water let them grow rice all year and support a city of perhaps a million people.' },
            { type: 'mcq', q: 'Millions of tourists visit Angkor each year. Which is a negative impact?', options: ['Wear on the temples and pumping of groundwater', 'More jobs in Siem Reap', 'Money to repair the temples', 'More flights to Cambodia'], answer: 0,
              explain: 'Pumping groundwater for hotels may cause the ground under some temples to sink.' },
            { type: 'mcq', q: 'Culture: Khmer New Year is celebrated in mid-April. Why does it fall at this time?', options: ['It marks the end of the harvest, before the rains', 'It is the coldest week of the year', 'It is when the lake is at its very biggest and deepest', 'It is the start of winter snow'], answer: 0,
              explain: 'Farmers have finished harvesting and can rest before planting in the wet season.' }
          ]
        }
      }
    ]
  };
})();
