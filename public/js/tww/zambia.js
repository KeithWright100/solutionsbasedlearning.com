/* Travel the Wright Way — destination: Zambia (Victoria Falls and its gorges, a tropical wet-and-dry climate, the Kariba Dam and the 2024 drought, copper mining, the Zambezi floodplain and the Kuomboka ceremony, and Zambian culture).
 * Climate data: Livingstone (climatsetvoyages.com; monthly means calculated from average minimum and maximum).
 * Facts: Victoria Falls (Mosi-oa-Tunya, "the smoke that thunders") on the Zambezi, on the Zambia–Zimbabwe border, is about 1,708 m wide and 108 m high, the largest sheet of falling water in the world; a UNESCO World Heritage Site;
 *   below the falls the river runs through a zigzag series of gorges, cut as the falls retreated upstream along lines of weakness in the basalt; spray waters a small rainforest opposite the falls;
 *   Lake Kariba, behind the Kariba Dam (built in the 1950s), is the world's largest human-made lake by volume; hydropower supplies more than 80% of Zambia's electricity;
 *   in 2024 an El Niño-linked drought left Kariba so low that Zambia had power cuts of up to 17 hours a day or more, and about half the maize crop failed;
 *   copper from the Copperbelt is Zambia's main export; the Lozi people's Kuomboka ceremony marks the king's move by royal barge from the flooding Zambezi plain to higher ground;
 *   culture: nshima (maize porridge) is the staple food; English is the official language and more than 70 local languages are spoken.
 */
(function () {
  var FALLS_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Victoria Falls: the wide Zambezi River flowing across a flat basalt plateau, dropping over the lip into a deep, narrow gorge with a plunge pool at the bottom, a cloud of spray rising, and rainforest on the opposite cliff kept green by the spray">' +
  '<rect width="600" height="420" fill="#dbeef7"/>' +
  '<path d="M0 150 L262 150 L262 420 L0 420 Z" fill="#57534e"/><path d="M0 138 L262 138 L262 152 L0 152 Z" fill="#2f86c2"/>' +
  '<path d="M340 150 L600 150 L600 420 L340 420 Z" fill="#57534e"/>' +
  '<path d="M262 140 C 270 200, 272 300, 276 372" fill="none" stroke="#e0f2fe" stroke-width="12"/>' +
  '<path d="M262 372 L340 372 L340 420 L262 420 Z" fill="#1e5f8c"/><path d="M262 372 Q 300 360 340 372" fill="none" stroke="#e0f2fe" stroke-width="2"/>' +
  '<g fill="#fff" opacity=".85"><ellipse cx="300" cy="120" rx="60" ry="24"/><ellipse cx="300" cy="84" rx="46" ry="22"/><ellipse cx="292" cy="52" rx="30" ry="16"/></g>' +
  '<g fill="#2f6a2c">' + (function () { var g = ''; for (var i = 0; i < 7; i++) g += '<circle cx="' + (360 + i * 26) + '" cy="' + (140 - (i % 2) * 6) + '" r="13"/>'; return g; })() + '</g>' +
  '<g stroke="#44403c" stroke-width="1.5">' + (function () { var g = ''; for (var i = 0; i < 4; i++) g += '<line x1="0" y1="' + (200 + i * 50) + '" x2="262" y2="' + (200 + i * 50) + '"/><line x1="340" y1="' + (200 + i * 50) + '" x2="600" y2="' + (200 + i * 50) + '"/>'; return g; })() + '</g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="80" y1="90" x2="100" y2="142"/><line x1="160" y1="250" x2="258" y2="156"/><line x1="200" y1="20" x2="276" y2="50"/><line x1="500" y1="70" x2="440" y2="130"/><line x1="460" y1="270" x2="320" y2="250"/><line x1="170" y1="390" x2="290" y2="384"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.zambia = {
    id: 'zambia',
    name: 'Zambia',
    short: 'Zambia',
    country: 'Zambia',
    gateway: 'Livingstone',
    lonlat: [25.85, -17.85],
    locator: { box: [21.5, 31.5, -19.2, -11.6], lakes: [[[26.8, -18.0], [27.6, -17.2], [28.5, -16.6], [29.0, -16.5], [28.8, -16.9], [27.9, -17.5], [27.0, -18.1]]], rivers: [[[22.0, -13.0], [23.0, -15.0], [23.4, -16.6], [24.4, -17.6], [25.85, -17.92], [26.8, -18.0]], [[29.0, -16.5], [30.4, -15.6], [31.4, -15.6]]], places: [['Livingstone', 25.85, -17.85, 'b'], ['Lusaka', 28.28, -15.42, 'r'], ['Kariba Dam', 28.76, -16.52, 'l'], ['Ndola', 28.63, -12.96, 'r'], ['Mongu', 23.13, -15.25, 'r'], ['Zambezi', 22.5, -14.6, 'a']] },
    stamp: { colour: '#047857', icon: '🌊' },
    transport: { name: 'microlight', verb: 'Fly', emoji: '🪂' },
    scene: 'falls',
    photo: { file: 'Lascar Victoria falls from a helicopter (4548273362).jpg', alt: 'Aerial view of a wide river plunging over a long cliff into a narrow chasm, with clouds of spray rising and a zigzag gorge beyond', author: 'Jorge Láscar', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'Mwabonwa! Welcome to Zambia. Fly a microlight over Victoria Falls, “the smoke that thunders”, where the mighty Zambezi drops more than 100 m into a narrow gorge. Then find out why a drought turned off the country’s lights.',
      adv: 'Fly over the Zambezi. This expedition covers waterfall and gorge formation at Victoria Falls, a tropical wet-and-dry climate, the Kariba Dam and the 2024 drought, energy insecurity, copper dependency, and the Kuomboka ceremony on the Zambezi floodplain.'
    },
    facts: ['Victoria Falls is about 1,708 m wide and 108 m high.', 'Lake Kariba is the largest human-made lake in the world by volume.', 'Mosi-oa-Tunya means “the smoke that thunders”.'],
    climate: {
      place: 'Livingstone, Zambia', source: 'Monthly means from average minimum and maximum (climatsetvoyages.com)', lat: '18°S', rmax: 200, rstep: 40,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [25.0, 25.0, 24.5, 23.0, 20.0, 17.0, 17.0, 20.5, 24.5, 27.5, 27.0, 26.0],
      rain: [175, 135, 85, 20, 0, 0, 0, 0, 0, 10, 80, 140]
    },
    diagrams: { falls: FALLS_SVG },
    stations: [
      {
        id: 'falls', title: 'The smoke that thunders', icon: '🌊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'falls', prompt: 'Label this cross-section of Victoria Falls.',
              spots: [{ x: 13, y: 21 }, { x: 27, y: 60 }, { x: 33, y: 5 }, { x: 83, y: 17 }, { x: 77, y: 64 }, { x: 28, y: 93 }].map(function (s, i) { s.a = ['Zambezi River', 'Edge of the falls', 'Spray cloud', 'Rainforest', 'Gorge', 'Plunge pool'][i]; return s; }),
              extra: [],
              explain: 'The whole river drops into a narrow crack in the rock. The spray can be seen from 30 km away.' },
            { type: 'mcq', photo: true, q: 'Look at the photo. What is rising from the waterfall?', options: ['A cloud of spray', 'Smoke from a fire', 'Steam from a volcano', 'Dust from a desert'], answer: 0,
              explain: 'This is why the local name, Mosi-oa-Tunya, means “the smoke that thunders”.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Lusaka from Livingstone?', options: ['North-east', 'South-west', 'North-west', 'South-east'], answer: 0,
              explain: 'The capital, Lusaka, is about 375 km north-east.' }
          ],
          adv: [
            { type: 'label', diagram: 'falls', prompt: 'Label the features of Victoria Falls. One label does not belong.',
              spots: [{ x: 13, y: 21 }, { x: 27, y: 60 }, { x: 33, y: 5 }, { x: 83, y: 17 }, { x: 77, y: 64 }, { x: 28, y: 93 }].map(function (s, i) { s.a = ['Wide Zambezi on a basalt plateau', 'Lip of the falls', 'Spray cloud', 'Rainforest watered by spray', 'Gorge cut along a line of weakness', 'Plunge pool'][i]; return s; }),
              extra: ['Ox-bow lake'],
              explain: 'Ox-bow lakes form on meandering floodplains, not at waterfalls.' },
            { type: 'mcq', photo: true, q: 'Study the photo. Below the falls, the river flows through a zigzag series of gorges. How did they form?', options: ['The falls retreated upstream along lines of weakness in the rock', 'Glaciers carved them out slowly during the last Ice Age, about 20,000 years ago', 'Earthquakes split the ground in one day', 'People dug them to make a canal'], answer: 0,
              explain: 'Each gorge marks a former position of the falls. Over thousands of years they have moved upstream.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Livingstone to Mongu, on the Zambezi floodplain.', options: ['About 410 km', 'About 40 km', 'About 1,500 km', 'About 4,000 km'], answer: 0,
              explain: 'Mongu is about 410 km north-west, near where the Kuomboka ceremony takes place.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Wet season, dry season', icon: '☀️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Livingstone?', options: ['January', 'July', 'September', 'May'], answer: 0,
              explain: 'January has about 175 mm. The rains fall from November to March.' },
            { type: 'mcq', graph: true, q: 'Which is the hottest month?', options: ['October', 'June', 'July', 'February'], answer: 0,
              explain: 'October is hot and dry, just before the rains arrive.' },
            { type: 'mcq', graph: true, q: 'When is Victoria Falls likely to have the most water?', options: ['After the rainy season, around March to May', 'In October and November, at the very end of the long dry season', 'In June only', 'It never changes'], answer: 0,
              explain: 'Water takes time to flow down the Zambezi, so the falls peak a few months after the heaviest rain.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Livingstone (mm).', answer: 645, tol: 3, unit: 'mm',
              explain: 'Adding the twelve months gives 645 mm.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly rain falls from November to March? Give a whole number.', answer: 95, tol: 1, unit: '%',
              explain: 'November to March = 615 mm out of 645 mm, which is about 95%.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 10.5, tol: 0.2, unit: '°C',
              explain: 'October 27.5°C − June and July 17.0°C = 10.5°C.' }
          ]
        }
      },
      {
        id: 'kariba', title: 'When the lights went out', icon: '⚡',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Where does most of Zambia’s electricity come from?', options: ['Hydropower from dams on rivers', 'Nuclear power stations built along the Copperbelt', 'Coal mines', 'Wind farms'], answer: 0,
              explain: 'More than 80% comes from hydropower, mainly the Kariba Dam on the Zambezi.' },
            { type: 'mcq', q: 'In 2024 a drought hit Zambia. What happened to the electricity supply?', options: ['There were power cuts for most of the day', 'Electricity became free', 'Power stations made extra electricity', 'Nothing changed'], answer: 0,
              explain: 'With Lake Kariba so low, homes and businesses had power cuts of up to 17 hours a day or more.' },
            { type: 'mcq', q: 'Lake Kariba is famous because it is what?', options: ['The largest human-made lake by volume', 'The deepest natural lake on Earth', 'A salt lake in the desert', 'A lake that freezes every winter'], answer: 0,
              explain: 'The dam was built in the 1950s on the border between Zambia and Zimbabwe.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these impacts of the 2024 drought in Zambia.', bins: ['Economic', 'Social'],
              items: [['Small businesses could not operate', 0], ['Economic growth forecast cut', 0], ['Electricity had to be imported', 0], ['Children studying by candlelight', 1], ['About half the maize crop failed', 1], ['Families short of food', 1]],
              explain: 'The drought was linked to El Niño. Depending on one energy source made Zambia very vulnerable.' },
            { type: 'mcq', q: 'Which strategy would most reduce Zambia’s energy insecurity?', options: ['Adding solar power so it does not rely on one river', 'Building even more large dams further along the very same river', 'Using less electricity in hospitals', 'Stopping all electricity imports'], answer: 0,
              explain: 'Zambia has strong sunshine, and solar output is highest in the dry season when rivers are low.' },
            { type: 'mcq', q: 'Copper is Zambia’s main export. Why is this risky?', options: ['Income falls when world copper prices drop', 'Copper never sells abroad', 'Copper is only ever used inside Zambia, so it cannot be exported', 'Mines create too many jobs'], answer: 0,
              explain: 'Demand for copper is growing for electric cars and wiring, but prices still go up and down.' }
          ]
        }
      },
      {
        id: 'culture', title: 'The Kuomboka', icon: '🛶',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what is nshima, the staple food of Zambia?', options: ['A thick porridge made from maize', 'A sweet fruit cake', 'A grilled fish', 'A type of bread roll baked with wheat flour'], answer: 0,
              explain: 'It is eaten with the hands, with vegetables, beans, meat or fish.' },
            { type: 'mcq', q: 'Culture: what is the official language of Zambia?', options: ['English', 'French', 'Portuguese', 'Arabic'], answer: 0,
              explain: 'More than 70 local languages are also spoken, such as Bemba and Nyanja.' },
            { type: 'mcq', q: 'In the Kuomboka ceremony, the Lozi king travels by royal barge. Why?', options: ['The Zambezi floods the plain, so he moves to higher ground', 'To go fishing on Lake Kariba with all the chiefs of the kingdom', 'To visit Victoria Falls', 'To cross into Zimbabwe'], answer: 0,
              explain: 'Kuomboka means “to get out of the water”. Thousands of people come to watch.' }
          ],
          adv: [
            { type: 'mcq', q: 'The Lozi people farm the Zambezi floodplain and move each year as it floods. What does this show?', options: ['People adapting their lives to a natural flood cycle', 'Floods have no effect on people who live on floodplains at all', 'The floodplain is a desert', 'The river never changes level'], answer: 0,
              explain: 'The flood leaves fertile silt, so farming the plain is worth the yearly move.' },
            { type: 'mcq', q: 'Building the Kariba Dam in the 1950s forced many Tonga people to move. Which is a long-term impact on them?', options: ['Loss of fertile riverside land and traditional homes', 'Better access to the river for farming', 'More floods on their farms each year', 'They gained electricity before everyone else'], answer: 0,
              explain: 'Many were resettled on poorer land, and some communities still lacked electricity decades later.' },
            { type: 'mcq', q: 'Tourism at Victoria Falls brings jobs. Which management strategy helps keep it sustainable?', options: ['Limiting building close to the falls in the World Heritage Site', 'Building more large hotels right on the lip of the falls for better views', 'Damming the river above the falls', 'Allowing unlimited helicopter flights'], answer: 0,
              explain: 'The falls are shared by Zambia and Zimbabwe, so both must work together to protect them.' }
          ]
        }
      }
    ]
  };
})();
