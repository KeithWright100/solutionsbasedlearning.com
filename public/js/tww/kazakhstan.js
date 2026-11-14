/* Travel the Wright Way — destination: Kazakhstan (the shrinking Aral Sea, irrigation and its impacts, the Kok-Aral Dam and the North Aral Sea recovery, an extreme continental desert climate, and Kazakh culture).
 * Climate data: Aral (formerly Aralsk), 1991–2020 averages (climatestotravel.com).
 * Facts: the Aral Sea was once the fourth-largest lake in the world; from the 1960s the Amu Darya and Syr Darya rivers were diverted to irrigate cotton and rice in the Soviet Union, and the sea shrank and split;
 *   the town of Aral was a fishing port; abandoned ships now lie on the dry seabed; the exposed seabed (the Aralkum Desert) produces dust storms carrying salt and farm chemicals;
 *   the Kok-Aral Dam, completed in 2005 with World Bank support, raised the level of the North (Small) Aral Sea, and fish and fishing have returned; the remaining lake is now about 15 km from Aral;
 *   Kazakhstan is the largest landlocked country in the world; the Baikonur Cosmodrome, leased to Russia, launched Yuri Gagarin in 1961; Astana has been the capital since 1997; oil from the Caspian region is a major export;
 *   Kazakh traditions include the yurt (kiiz üi), the two-stringed dombra, eagle hunting, beshbarmak, and Nauryz, the spring new year festival in March.
 */
(function () {
  var ARAL_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map-style diagram of the Aral Sea showing its 1960 shoreline, the dry seabed, the North Aral Sea held back by a dam, the Syr Darya river, irrigated cotton fields and the town of Aral">' +
  '<rect width="600" height="420" fill="#e8dcb8"/>' +
  // 1960 shoreline
  '<path d="M120 60 C 220 30, 380 40, 450 90 C 520 150, 520 280, 440 350 C 360 410, 220 400, 160 330 C 100 260, 70 150, 120 60 Z" fill="#f1e9cf" stroke="#2f7fb8" stroke-width="3" stroke-dasharray="10 6"/>' +
  // salt crust on dry seabed
  '<g fill="#fff" opacity=".7">' + (function () { var g = ''; for (var i = 0; i < 18; i++) g += '<ellipse cx="' + (170 + (i * 47) % 260) + '" cy="' + (180 + (i * 31) % 170) + '" rx="16" ry="4"/>'; return g; })() + '</g>' +
  // North Aral Sea
  '<path d="M150 80 C 210 60, 300 66, 320 100 C 330 130, 280 150, 230 148 C 180 146, 140 120, 150 80 Z" fill="#2f7fb8"/>' +
  // dam
  '<rect x="300" y="118" width="40" height="10" fill="#4b5563" transform="rotate(30 320 123)"/>' +
  // south remnant
  '<path d="M190 250 C 200 220, 230 220, 236 260 C 240 300, 220 340, 200 330 C 186 320, 184 280, 190 250 Z" fill="#2f7fb8" opacity=".85"/>' +
  // Syr Darya
  '<path d="M600 160 C 520 150, 440 130, 380 128 C 350 126, 330 124, 318 116" fill="none" stroke="#3b82f6" stroke-width="6"/>' +
  // irrigated cotton fields
  '<g fill="#9cc56a" stroke="#6f9a4a">' + (function () { var g = ''; for (var i = 0; i < 6; i++) g += '<rect x="' + (470 + (i % 3) * 36) + '" y="' + (176 + Math.floor(i / 3) * 28) + '" width="30" height="22"/>'; return g; })() + '</g>' +
  '<g stroke="#3b82f6" stroke-width="2"><line x1="490" y1="156" x2="490" y2="176"/><line x1="526" y1="154" x2="526" y2="176"/></g>' +
  // town of Aral
  '<circle cx="320" cy="44" r="7" fill="#b42318" stroke="#fff" stroke-width="2"/><text x="332" y="48" font-size="13" font-weight="700" fill="#11243b">Aral</text>' +
  // ship
  '<g transform="translate(330 250)"><path d="M-22 0 L22 0 L16 -10 L-18 -10 Z" fill="#8b4513"/><rect x="-6" y="-20" width="12" height="10" fill="#a0522d"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="560" y1="110" x2="540" y2="152"/><line x1="560" y1="300" x2="540" y2="232"/><line x1="70" y1="196" x2="96" y2="196"/><line x1="380" y1="300" x2="350" y2="270"/><line x1="380" y1="60" x2="330" y2="112"/><line x1="96" y1="60" x2="160" y2="96"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.kazakhstan = {
    id: 'kazakhstan',
    name: 'Kazakhstan',
    short: 'Kazakhstan',
    country: 'Kazakhstan',
    gateway: 'Aral',
    lonlat: [61.67, 46.8],
    locator: { box: [50, 73, 40, 52], places: [['Aral', 61.67, 46.8, 'l'], ['Kyzylorda', 65.5, 44.85, 'r'], ['Baikonur', 63.3, 45.62, 'l'], ['Astana', 71.43, 51.13, 'l'], ['Caspian Sea', 51.3, 45.5, 'a'], ['UZBEKISTAN', 63.5, 41.6, 'a'], ['RUSSIA', 58.0, 51.2, 'a']] },
    stamp: { colour: '#0e7490', icon: '💧' },
    transport: { name: 'jeep to the Aral Sea', verb: 'Drive', emoji: '🚙' },
    scene: 'aral',
    photo: { file: 'Aralship2.jpg', alt: 'A rusting fishing ship stranded on dry, sandy ground where the Aral Sea used to be', author: 'Staecker', licence: 'Public domain', licenceUrl: 'https://creativecommons.org/publicdomain/mark/1.0/' },
    intro: {
      ks3: 'Sälem! Welcome to Kazakhstan, the largest landlocked country in the world. Drive a jeep across land that was once the bottom of the Aral Sea, past rusting ships stranded in the desert, and find out how one part of the sea is being brought back to life.',
      adv: 'Drive across the former Aral Sea. This expedition covers how irrigation shrank the Aral Sea, its environmental, social and economic impacts, the Kok-Aral Dam and the recovery of the North Aral Sea, an extreme continental desert climate, and Kazakh culture.'
    },
    facts: ['Kazakhstan is the largest landlocked country in the world.', 'The Aral Sea was once the fourth-largest lake on Earth.', 'The first person in space launched from Kazakhstan.'],
    climate: {
      place: 'Aral, Kazakhstan', source: '1991–2020 averages (climatestotravel.com)', lat: '47°N', rmax: 50, rstep: 10,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-10.6, -9.2, 0.5, 12.0, 19.6, 25.5, 27.4, 25.6, 18.2, 9.6, -0.1, -7.7],
      rain: [11, 11, 16, 14, 13, 12, 8, 6, 4, 11, 14, 13]
    },
    diagrams: { aral: ARAL_SVG },
    stations: [
      {
        id: 'sea', title: 'The vanishing sea', icon: '🚢',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'aral', prompt: 'Label this map of the Aral Sea.',
              spots: [{ x: 93, y: 26, a: 'River' }, { x: 93, y: 71, a: 'Cotton fields' }, { x: 12, y: 47, a: 'Old shoreline' }, { x: 63, y: 71, a: 'Dry seabed' }, { x: 63, y: 14, a: 'Dam' }, { x: 16, y: 14, a: 'North Aral Sea' }],
              extra: [],
              explain: 'River water was taken to irrigate cotton fields, so the sea shrank far below its old shoreline. A dam now holds water in the North Aral Sea.' },
            { type: 'mcq', photo: true, q: 'Look at the photo. Why is this ship stranded in the desert?', options: ['The sea dried up around it', 'A storm threw it inland', 'It was built there as a museum', 'It sank in quicksand'], answer: 0,
              explain: 'The town of Aral used to be a busy fishing port. As the sea shrank, ships were left behind on the dry seabed.' },
            { type: 'mcq', photo: { file: 'Aral Sea 1989-2008.jpg', alt: 'Two satellite images side by side: on the left a large blue lake in 1989, on the right only small separate patches of water in 2008', author: 'NASA (edited by Zafiroblue05)', licence: 'Public domain', licenceUrl: 'https://creativecommons.org/publicdomain/mark/1.0/' }, q: 'These satellite images show the Aral Sea in 1989 and 2008. What happened?', options: ['The lake shrank to small pieces', 'The lake grew much bigger', 'The lake froze solid', 'The lake turned into a forest'], answer: 0,
              explain: 'Satellite images let geographers measure change over time. By 2014 the eastern part of the southern sea had dried up completely.' }
          ],
          adv: [
            { type: 'label', diagram: 'aral', prompt: 'Label the Aral Sea basin. One label does not belong.',
              spots: [{ x: 93, y: 26, a: 'Syr Darya' }, { x: 93, y: 71, a: 'Irrigated cotton' }, { x: 12, y: 47, a: '1960 shoreline' }, { x: 63, y: 71, a: 'Aralkum (dry seabed)' }, { x: 63, y: 14, a: 'Kok-Aral Dam' }, { x: 16, y: 14, a: 'Recovering North Aral Sea' }],
              extra: ['Mangrove swamp'],
              explain: 'There are no mangroves in a cold desert. The dam (2005) raised the North Aral Sea, while the southern sea kept shrinking.' },
            { type: 'mcq', photo: { file: 'Aral Sea 1989-2008.jpg', alt: 'Two satellite images side by side: on the left a large blue lake in 1989, on the right only small separate patches of water in 2008', author: 'NASA (edited by Zafiroblue05)', licence: 'Public domain', licenceUrl: 'https://creativecommons.org/publicdomain/mark/1.0/' }, q: 'Study the satellite images. Which human action caused most of this change?', options: ['Diverting rivers for irrigation', 'Building new cities along the shore', 'Drilling for oil in the lake', 'Cutting down forests nearby'], answer: 0,
              explain: 'In the Soviet era, the Amu Darya and Syr Darya were diverted to grow cotton. Inflow fell so much that evaporation was greater than input.' },
            { type: 'mcq', photo: true, q: 'Study the photo. What does it show about the impact on the local economy?', options: ['The fishing industry collapsed', 'Shipbuilding is booming', 'Tourism has ended completely', 'Farming has stopped everywhere'], answer: 0,
              explain: 'Tens of thousands of fishing and fish-canning jobs were lost, and many people left the region.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Hot summers, frozen winters', icon: '🌡️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the hottest month in Aral?', options: ['July', 'January', 'April', 'October'], answer: 0,
              explain: 'July averages about 27°C, with afternoons well over 30°C.' },
            { type: 'mcq', graph: true, q: 'How much rain does Aral get in most months?', options: ['Very little, under 20 mm', 'About 100 mm, like London', 'About 300 mm', 'Over 500 mm'], answer: 0,
              explain: 'Aral is in a desert. Without the sea, the land around it has become even drier and dustier.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Kyzylorda from Aral?', options: ['South-east', 'North-west', 'North-east', 'South-west'], answer: 0,
              explain: 'Kyzylorda is about 370 km south-east of Aral, along the Syr Darya river.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual precipitation in Aral (mm).', answer: 133, tol: 3, unit: 'mm',
              explain: 'Adding the twelve months gives 133 mm, so Aral has a cold desert climate.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Aral (°C). Give one decimal place.', answer: 38, tol: 0.2, unit: '°C',
              explain: 'Warmest 27.4°C − coldest −10.6°C = 38.0°C, an extreme continental range.' },
            { type: 'mcq', q: 'Local people say summers are hotter and winters colder since the sea shrank. Why might this be?', options: ['The sea no longer moderates it', 'The Earth’s orbit changed', 'The town moved north', 'The sea was replaced by a forest'], answer: 0,
              explain: 'Large bodies of water heat and cool slowly. Without them, the local climate becomes more extreme.' }
          ]
        }
      },
      {
        id: 'impacts', title: 'Dust, salt and hope', icon: '🌪️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Wind blows dust from the dry seabed. Why is this dust harmful?', options: ['It contains salt and farm chemicals', 'It is radioactive', 'It is made of sugar from the cotton fields', 'It is very cold'], answer: 0,
              explain: 'People breathing in the dust suffer more lung problems, and salt damages crops.' },
            { type: 'mcq', q: 'In 2005 a dam was built to save the North Aral Sea. What has happened since?', options: ['The water rose and fish returned', 'The sea dried up completely', 'The dam made the water saltier', 'It turned into a glacier'], answer: 0,
              explain: 'Fishing has restarted, and the water is now about 15 km from Aral, much closer than before.' },
            { type: 'mcq', q: 'Which crop needed the most river water in the Aral Sea basin?', options: ['Cotton', 'Apples', 'Potatoes', 'Coffee'], answer: 0,
              explain: 'Cotton is a thirsty crop. Much water was also lost from leaky, open irrigation canals.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these impacts of the shrinking Aral Sea.', bins: ['Environmental', 'Social or economic'],
              items: [['Salt and dust storms', 0], ['Loss of native fish species', 0], ['More extreme local climate', 0], ['Collapse of the fishing industry', 1], ['Health problems from polluted dust', 1], ['Out-migration from Aral', 1]],
              explain: 'It is often called one of the world’s worst human-made environmental disasters.' },
            { type: 'mcq', q: 'The Kok-Aral Dam saved the North Aral Sea but not the South. Why?', options: ['It keeps Syr Darya water in the north', 'It pumps the extra water south to Uzbekistan', 'It stopped all evaporation', 'It blocked the Amu Darya'], answer: 0,
              explain: 'The southern sea, fed mainly by the Amu Darya in Uzbekistan, still receives very little inflow.' },
            { type: 'mcq', q: 'Which management strategy would help the most without stopping farming?', options: ['Lining canals and using drip irrigation', 'Growing more cotton', 'Building more open canals', 'Draining the North Aral Sea to irrigate fields'], answer: 0,
              explain: 'Using water more efficiently means more river water can reach the sea.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Eagles, dombras and rockets', icon: '🦅',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: some Kazakh hunters train which bird to hunt foxes and hares?', options: ['Golden eagles', 'Penguins', 'Parrots', 'Pigeons'], answer: 0,
              explain: 'Eagle hunting is an ancient tradition, kept alive by festivals in the mountains.' },
            { type: 'mcq', q: 'Culture: the dombra is a Kazakh musical instrument. How many strings does it have?', options: ['Two', 'Six', 'Twelve', 'None'], answer: 0,
              explain: 'It is played at celebrations and to tell stories and legends.' },
            { type: 'mcq', q: 'In 1961 Yuri Gagarin became the first person in space. Where did his rocket launch from?', options: ['Baikonur, in Kazakhstan', 'Florida, USA', 'Moscow, the capital of Russia', 'Beijing, China'], answer: 0,
              explain: 'Baikonur Cosmodrome is near the Syr Darya, south-east of Aral. Russia still leases it.' }
          ],
          adv: [
            { type: 'mcq', q: 'Kazakhstan is the largest landlocked country. Which is a challenge of this for exporting oil?', options: ['It must export through other countries', 'It has no oil at all', 'Oil cannot be moved by rail, road or ship', 'It has no neighbours'], answer: 0,
              explain: 'Pipelines carry oil to Russia’s Black Sea ports and to China, so Kazakhstan relies on its neighbours.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the straight-line distance from Aral to the capital, Astana.', options: ['About 850 km', 'About 150 km', 'About 2,500 km', 'About 5,000 km'], answer: 0,
              explain: 'It is about 860 km to the north-east. Kazakhstan is the ninth-largest country in the world.' },
            { type: 'mcq', q: 'Culture: Nauryz is celebrated in Kazakhstan in March. What does it mark?', options: ['The spring new year', 'The harvest of cotton', 'The first snow', 'The end of summer'], answer: 0,
              explain: 'Families visit each other, set up yurts and share a special dish called nauryz kozhe.' }
          ]
        }
      }
    ]
  };
})();
