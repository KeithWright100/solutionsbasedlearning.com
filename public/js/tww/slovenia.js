/* Travel the Wright Way — destination: Slovenia (Postojna Cave and cave formations, the olm, karst groundwater, a wet climate, glacial Lake Bled, forests and green tourism, and Slovenian culture).
 * Climate data: Ljubljana, 1991–2020 averages (climatestotravel.com).
 * Facts: Postojna Cave is a karst cave system over 24 km long, carved by the Pivka river; since 1872 a cave railway has carried visitors inside; stalactites, stalagmites and columns form as dripping water deposits calcite (calcium carbonate);
 *   the olm (proteus), a blind cave salamander found only in the Dinaric karst, can live for around 100 years and survive for years without food; Škocjan Caves, where the Reka river disappears underground, are a UNESCO World Heritage Site;
 *   in karst, water flows quickly through cracks, so pollution on the surface can reach underground water and springs fast; the word "karst" comes from the Kras plateau in Slovenia;
 *   forests cover about 58% of Slovenia, one of the most forested countries in Europe; Lake Bled was shaped by a glacier; Triglav (2,864 m), the highest peak, appears on the national flag;
 *   Ljubljana was European Green Capital in 2016, with a car-free centre; Slovenia proposed World Bee Day (20 May), adopted by the UN; the Carniolan honey bee is native; potica is a rolled nut cake.
 */
(function () {
  var CAVE_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a limestone cave chamber: stalactites hanging from the roof, a stalagmite rising from the floor, a column where the two have joined, an underground river with a pale olm in the water, and a small cave train on rails on the cave floor">' +
  '<rect width="600" height="420" fill="#8b8178"/>' +
  '<g stroke="#6b625a" stroke-width="1.5"><line x1="0" y1="30" x2="600" y2="30"/><line x1="0" y1="56" x2="600" y2="56"/><line x1="0" y1="396" x2="600" y2="396"/></g>' +
  '<path d="M10 300 L10 110 Q 60 74 140 84 Q 220 70 300 86 Q 380 72 460 84 Q 540 76 590 110 L590 330 L330 330 L330 300 Z" fill="#2e2a27"/>' +
  '<path d="M330 330 L590 330 L590 386 L330 386 Z" fill="#1d4f6e"/><path d="M330 330 Q 460 324 590 330" fill="none" stroke="#7dd3fc" stroke-width="2"/>' +
  '<g fill="#e7dcc4"><path d="M132 84 L140 150 L148 84 Z"/><path d="M196 78 L201 116 L206 78 Z"/><path d="M90 82 L94 112 L98 82 Z"/><path d="M500 82 L505 120 L510 82 Z"/></g>' +
  '<path d="M244 300 Q 258 230 272 300 Z" fill="#e7dcc4"/><path d="M200 300 Q 206 270 212 300 Z" fill="#e7dcc4"/>' +
  '<path d="M410 84 L432 84 L428 160 Q 436 220 430 330 L412 330 Q 406 220 414 160 Z" fill="#e7dcc4"/>' +
  '<path d="M472 360 C 484 352, 500 352, 512 360 C 500 366, 484 366, 472 360 Z" fill="#fbcfe8"/><path d="M512 360 L522 356 M512 360 L522 364 M480 364 L476 370 M500 364 L504 370" stroke="#fbcfe8" stroke-width="2"/>' +
  '<line x1="10" y1="304" x2="330" y2="304" stroke="#57534e" stroke-width="4"/>' +
  '<g><rect x="94" y="284" width="26" height="14" rx="2" fill="#facc15" stroke="#713f12" stroke-width="1.5"/><rect x="124" y="280" width="24" height="18" rx="3" fill="#15803d" stroke="#14532d" stroke-width="1.5"/><circle cx="100" cy="300" r="3" fill="#1f2937"/><circle cx="114" cy="300" r="3" fill="#1f2937"/><circle cx="130" cy="300" r="3" fill="#1f2937"/><circle cx="142" cy="300" r="3" fill="#1f2937"/></g>' +
  '<g stroke="#f8fafc" stroke-width="1.5" stroke-dasharray="4 3"><line x1="80" y1="170" x2="138" y2="140"/><line x1="240" y1="175" x2="258" y2="262"/><line x1="520" y1="150" x2="432" y2="180"/><line x1="500" y1="260" x2="440" y2="345"/><line x1="480" y1="405" x2="492" y2="366"/><line x1="100" y1="380" x2="118" y2="304"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.slovenia = {
    id: 'slovenia',
    name: 'Slovenia',
    short: 'Slovenia',
    country: 'Slovenia',
    gateway: 'Ljubljana',
    lonlat: [14.2, 45.78],
    locator: { box: [12.6, 16.6, 44.9, 47.1], noBase: true, land: [[[12.5, 45.5], [12.88, 45.6], [13.13, 45.68], [13.38, 45.7], [13.53, 45.79], [13.62, 45.76], [13.75, 45.66], [13.77, 45.6], [13.73, 45.55], [13.6, 45.53], [13.52, 45.48], [13.5, 45.3], [13.6, 45.1], [13.65, 44.95], [13.8, 44.85], [13.95, 44.8], [14.1, 44.95], [14.15, 45.1], [14.25, 45.25], [14.35, 45.33], [14.5, 45.3], [14.7, 45.2], [14.9, 45.0], [15.0, 44.8], [16.8, 44.8], [16.8, 47.3], [12.5, 47.3]]], borders: [[[13.8, 45.59], [13.9, 45.64], [13.62, 45.86], [13.58, 45.98], [13.66, 46.18], [13.42, 46.21], [13.72, 46.52], [12.5, 46.66]], [[13.72, 46.52], [14.4, 46.43], [14.9, 46.6], [15.6, 46.68], [16.0, 46.68], [16.11, 46.87], [16.8, 46.9]], [[16.11, 46.87], [16.35, 46.64], [16.6, 46.48], [16.8, 46.38]], [[16.6, 46.48], [16.3, 46.37], [15.65, 46.2], [15.6, 45.85], [15.35, 45.75], [15.25, 45.47], [14.9, 45.48], [14.6, 45.65], [14.4, 45.48], [14.1, 45.48], [13.8, 45.47], [13.58, 45.48]]], places: [['AUSTRIA', 14.6, 46.85, 'a'], ['ITALY', 12.95, 46.2, 'a'], ['CROATIA', 15.7, 45.2, 'a'], ['Postojna', 14.20, 45.78, 'r'], ['Ljubljana', 14.51, 46.06, 'r'], ['Bled', 14.11, 46.37, 'r'], ['Triglav', 13.84, 46.38, 'l'], ['Škocjan Caves', 13.99, 45.66, 'b'], ['Adriatic Sea', 13.05, 45.25, 'a']] },
    stamp: { colour: '#0f766e', icon: '🦎' },
    transport: { name: 'cave train', verb: 'Ride', emoji: '🚂' },
    scene: 'cave',
    photo: { file: 'Postojna (22206343750).jpg', alt: 'Inside a lit cave, with clusters of pale stalactites hanging from the roof and stalagmites rising from the floor', author: 'Ivan Ivankovic', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'Dober dan! Welcome to Slovenia. Ride a little train deep into Postojna Cave to see stalactites, stalagmites and the strange pale olm. Then climb back into the daylight to explore one of the greenest countries in Europe.',
      adv: 'Ride into Postojna Cave. This expedition covers cave formations and karst groundwater, the olm and cave ecosystems, a wet temperate climate, glacial Lake Bled, forests and green tourism, and Slovenian culture.'
    },
    facts: ['Postojna Cave is over 24 km long, and visitors ride a train inside.', 'An olm can live for around 100 years.', 'Forests cover about 58% of Slovenia.'],
    climate: {
      place: 'Ljubljana, Slovenia', source: '1991–2020 averages (climatestotravel.com)', lat: '46°N', rmax: 160, rstep: 40,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [1.2, 2.9, 7.3, 11.7, 16.2, 20.1, 21.9, 21.7, 16.7, 12.0, 6.8, 1.6],
      rain: [65, 85, 85, 100, 115, 125, 120, 130, 155, 150, 140, 100]
    },
    diagrams: { cave: CAVE_SVG },
    stations: [
      {
        id: 'cave', title: 'Underground Slovenia', icon: '🦎',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'cave', prompt: 'Label this cross-section of a cave.',
              spots: [{ x: 13.3, y: 40.5 }, { x: 40, y: 41.7 }, { x: 86.7, y: 35.7 }, { x: 83.3, y: 61.9 }, { x: 80, y: 96.4 }, { x: 16.7, y: 90.5 }].map(function (s, i) { s.a = ['Stalactite', 'Stalagmite', 'Column', 'Underground river', 'Olm', 'Cave train'][i]; return s; }),
              extra: [],
              explain: 'Stalactites hang down from the roof. Stalagmites grow up from the floor. When they meet, they make a column.' },
            { type: 'mcq', photo: true, q: 'Look at the photo. What made these cave formations?', options: ['Dripping water leaving behind tiny amounts of rock', 'Ice that froze long ago and has never melted since the Ice Age', 'Lava from a volcano', 'People carving the rock'], answer: 0,
              explain: 'Each drop leaves a thin layer of calcite. Some formations here have taken hundreds of thousands of years to grow.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Ljubljana from Postojna?', options: ['North-east', 'South-west', 'North-west', 'South-east'], answer: 0,
              explain: 'The capital, Ljubljana, is about 40 km north-east.' }
          ],
          adv: [
            { type: 'label', diagram: 'cave', prompt: 'Label the features of a karst cave. One label does not belong.',
              spots: [{ x: 13.3, y: 40.5 }, { x: 40, y: 41.7 }, { x: 86.7, y: 35.7 }, { x: 83.3, y: 61.9 }, { x: 80, y: 96.4 }, { x: 16.7, y: 90.5 }].map(function (s, i) { s.a = ['Stalactite', 'Stalagmite', 'Column (stalactite and stalagmite joined)', 'Pivka river, still widening the cave', 'Olm in its dark habitat', 'Cave railway (since 1872)'][i]; return s; }),
              extra: ['Lava tube'],
              explain: 'Lava tubes form in volcanic basalt. Karst caves form when slightly acidic water dissolves limestone.' },
            { type: 'mcq', q: 'How do stalactites form?', options: ['Water that dissolved limestone loses CO₂ and leaves calcite', 'Hot magma cools and hardens as it slowly drips from the roof of the cave', 'Wind blows sand into hanging shapes', 'Ice slowly turns into rock'], answer: 0,
              explain: 'As drips meet the cave air, carbon dioxide escapes and calcium carbonate is left behind.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Postojna to Lake Bled.', options: ['About 65 km', 'About 6 km', 'About 300 km', 'About 1,000 km'], answer: 0,
              explain: 'Lake Bled lies about 65 km north, in the foothills of the Julian Alps.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Wet and green', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Ljubljana?', options: ['September', 'January', 'March', 'July'], answer: 0,
              explain: 'September has about 155 mm. Autumn storms often come in from the Adriatic.' },
            { type: 'mcq', graph: true, q: 'Which is the coldest month?', options: ['January', 'July', 'May', 'October'], answer: 0,
              explain: 'January averages 1.2°C, and fog often fills the Ljubljana basin in winter.' },
            { type: 'mcq', graph: true, q: 'What does the graph show about rainfall in Ljubljana?', options: ['It rains a lot in every month', 'It never rains in summer', 'It only rains in winter', 'It is a desert climate'], answer: 0,
              explain: 'Plenty of rain all year keeps Slovenia’s forests green and its caves full of water.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual precipitation in Ljubljana (mm).', answer: 1370, tol: 5, unit: 'mm',
              explain: 'Adding the twelve months gives 1,370 mm, about twice as much as London.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 20.7, tol: 0.2, unit: '°C',
              explain: 'July 21.9°C − January 1.2°C = 20.7°C.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly precipitation falls from September to November? Give a whole number.', answer: 32, tol: 1, unit: '%',
              explain: 'September to November = 445 mm. 445 ÷ 1,370 × 100 ≈ 32%, nearly a third in three months.' }
          ]
        }
      },
      {
        id: 'olm', title: 'Life in the dark', icon: '🔦',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'The olm lives only in caves. How is it adapted to life in the dark?', options: ['It is blind and senses food with smell and touch', 'It glows to light up the cave', 'It has huge eyes so that it can see clearly in the dark', 'It flies to find food'], answer: 0,
              explain: 'Its eyes are covered by skin, and it has no colour because there is no sunlight to protect against.' },
            { type: 'mcq', q: 'An olm can live for about how long?', options: ['Around 100 years', 'About 1 week', 'About 1 year', 'About 5 years'], answer: 0,
              explain: 'It moves slowly and uses very little energy. It can survive for years without eating.' },
            { type: 'mcq', q: 'The Reka river disappears underground at the Škocjan Caves. Why?', options: ['It flows into cracks and caves in the limestone', 'It evaporates in the sun', 'It is pumped away to supply drinking water to Ljubljana', 'It freezes into a glacier'], answer: 0,
              explain: 'Rivers that vanish underground are common in karst. The word “karst” comes from the Kras region of Slovenia.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these as threats to cave ecosystems or ways to protect them.', bins: ['Threat', 'Protection'],
              items: [['Farm fertiliser washing into cracks', 0], ['Rubbish dumped in sinkholes', 0], ['Heat and light from visitors', 0], ['Limiting visitor numbers on tours', 1], ['Treating sewage before it enters rivers', 1], ['Breeding olms in protected tanks', 1]],
              explain: 'The olm is protected across Europe, and its habitats are part of the Natura 2000 network.' },
            { type: 'mcq', q: 'Why does pollution spread so quickly in karst areas?', options: ['Water flows fast through open cracks with little natural filtering', 'Limestone soaks up all of the pollution like a sponge, so it builds up in one place', 'There is no water underground', 'The rock is too hard for water to enter'], answer: 0,
              explain: 'Many Slovenians drink water from karst springs, so protecting the surface protects their water supply.' },
            { type: 'mcq', q: 'Postojna Cave has welcomed tourists for over 200 years. Which is a sustainable way to manage it?', options: ['Using LED lighting and fixed paths to limit damage', 'Letting visitors break off small pieces of stalactite as souvenirs', 'Building hotels inside the cave', 'Opening every passage to the public'], answer: 0,
              explain: 'Only about 5 km of the 24 km system is open to visitors, which protects the rest.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Green Slovenia', icon: '🐝',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: Slovenia asked the United Nations to create a special day on 20 May. What is it?', options: ['World Bee Day', 'World Cave Day', 'World Ski Day', 'World Bread Day'], answer: 0,
              explain: 'Beekeeping is a proud tradition, and the Carniolan honey bee comes from Slovenia.' },
            { type: 'mcq', q: 'Culture: Lake Bled has a tiny island with a church on it. How did the lake form?', options: ['A glacier carved the hollow', 'A meteorite hit the ground', 'A volcano erupted', 'People dug it out'], answer: 0,
              explain: 'The glacier melted at the end of the last Ice Age, leaving the lake behind.' },
            { type: 'mcq', q: 'Culture: which mountain appears on Slovenia’s flag?', options: ['Triglav, the highest peak', 'Mont Blanc', 'The Matterhorn in the Swiss Alps', 'Mount Etna'], answer: 0,
              explain: 'Triglav is 2,864 m high and gives its name to Slovenia’s only national park.' }
          ],
          adv: [
            { type: 'mcq', q: 'Ljubljana was European Green Capital in 2016. Which change helped it win?', options: ['Making the city centre car-free', 'Building a new motorway through the centre', 'Closing all its parks', 'Banning bicycles'], answer: 0,
              explain: 'The riverside centre was closed to traffic, and electric shuttles carry people who need help.' },
            { type: 'mcq', q: 'Forests cover about 58% of Slovenia. Which is a benefit for the country?', options: ['Timber, tourism and protection from soil erosion', 'Forests stop it raining', 'They make the country much hotter and drier in summer', 'They have no economic value'], answer: 0,
              explain: 'Forests also store carbon and help to clean the water that soaks into the karst.' },
            { type: 'mcq', q: 'Culture: potica is a festive Slovenian cake. What is it usually like?', options: ['A rolled dough filled with walnuts or other fillings', 'A deep-fried fish', 'A frozen fruit ice that is eaten on very hot summer days', 'A spicy rice dish'], answer: 0,
              explain: 'It is baked for Christmas and Easter in a round mould with a hole in the middle.' }
          ]
        }
      }
    ]
  };
})();
