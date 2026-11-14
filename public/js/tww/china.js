/* Travel the Wright Way — destination: China (the Yangtze River and the Three Gorges Dam, a monsoon climate, flooding, energy, resettlement and Chinese culture).
 * Climate data: Yichang, near the Three Gorges Dam (weather2travel.com, CRU averages; monthly means from average maximum and minimum).
 * Facts: the Yangtze is the longest river in Asia, about 6,300 km; the Three Gorges Dam at Sandouping, Hubei, is about 2.3 km long and 181 m high;
 *   it has the largest installed capacity of any power station (22,500 MW); its reservoir stretches about 600 km upstream towards Chongqing;
 *   over 1.3 million people were moved to make way for it; it was built to control floods (e.g. 1998 floods killed thousands),
 *   generate electricity and improve navigation (ship locks and a ship lift); problems include trapped sediment, landslides around the reservoir, loss of habitat
 *   (the Yangtze river dolphin, baiji, was declared functionally extinct in 2006) and lost heritage sites.
 *   Culture: Chinese New Year (Spring Festival), Mandarin Chinese, chopsticks, rice in the south and wheat noodles in the north, the giant panda (Sichuan).
 */
(function () {
  var DAM_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the Three Gorges Dam: a deep reservoir upstream with sediment settling on the bottom, a tall concrete dam wall with intake pipes leading to turbines and generators, power lines carrying electricity away, and the river flowing on downstream">' +
  '<rect width="600" height="420" fill="#dbeafe"/>' +
  // valley floor
  '<path d="M0 360 L600 380 L600 420 L0 420 Z" fill="#8b6f4e"/>' +
  // reservoir
  '<path d="M0 120 L300 120 L300 365 L0 360 Z" fill="#3b82f6" opacity=".8"/>' +
  '<path d="M0 340 C 80 330, 180 344, 300 346 L300 365 L0 360 Z" fill="#a16207" opacity=".85"/>' +
  // dam
  '<path d="M300 90 L340 90 L400 372 L300 366 Z" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>' +
  // intake pipe and turbine
  '<path d="M300 260 L360 320" stroke="#1e3a8a" stroke-width="10"/>' +
  '<circle cx="372" cy="330" r="16" fill="#f59e0b" stroke="#78350f" stroke-width="2"/><rect x="360" y="300" width="24" height="16" fill="#64748b"/>' +
  // downstream river
  '<path d="M400 340 L600 340 L600 380 L400 372 Z" fill="#60a5fa"/>' +
  '<path d="M396 344 C 440 336, 480 352, 520 342" fill="none" stroke="#e0f2fe" stroke-width="2"/>' +
  // power lines
  '<g stroke="#334155" stroke-width="2"><line x1="470" y1="120" x2="470" y2="340"/><line x1="456" y1="140" x2="484" y2="140"/><line x1="560" y1="140" x2="560" y2="340"/><line x1="546" y1="160" x2="574" y2="160"/></g><path d="M384 300 L470 140 L560 160" fill="none" stroke="#334155" stroke-width="1.5"/>' +
  // ship on reservoir
  '<path d="M120 116 L180 116 L172 126 L128 126 Z" fill="#f8fafc" stroke="#1e3a5f"/>' +
  '<g font-size="12" fill="#1e293b" font-family="sans-serif"><text x="306" y="84">181 m</text></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="80" y1="200" x2="120" y2="220"/><line x1="140" y1="400" x2="150" y2="345"/><line x1="240" y1="40" x2="320" y2="120"/><line x1="460" y1="300" x2="390" y2="330"/><line x1="504" y1="90" x2="518" y2="150"/><line x1="480" y1="390" x2="500" y2="360"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.china = {
    id: 'china',
    name: 'China',
    short: 'China',
    country: 'China',
    gateway: 'Yichang',
    lonlat: [111.0, 30.82],
    locator: { box: [104.5, 122.5, 26.0, 35.0], rivers: [[[104.6, 28.8], [106.55, 29.56], [108.4, 30.8], [110.3, 31.0], [111.0, 30.82], [111.29, 30.7], [112.3, 30.3], [114.3, 30.59], [116.0, 29.8], [117.0, 30.5], [118.8, 32.05], [120.3, 31.9], [121.8, 31.4]]], places: [['Three Gorges Dam', 111.0, 30.82, 't'], ['Chongqing', 106.55, 29.56, 'b'], ['Wuhan', 114.3, 30.59, 'b'], ['Shanghai', 121.47, 31.23, 't'], ['Yangtze', 117.8, 28.6, 'a']] },
    stamp: { colour: '#b91c1c', icon: '🐉' },
    transport: { name: 'river cruise', verb: 'Cruise', emoji: '🛳️' },
    scene: 'yangtze',
    photo: { file: 'Three Gorges Dam (12280456164).jpg', alt: 'The long concrete wall of the Three Gorges Dam stretching across the Yangtze valley, with green hills on either side', author: 'jocovett', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'Nǐ hǎo! Welcome to China. Cruise down the mighty Yangtze through steep gorges to the Three Gorges Dam, the most powerful power station on Earth. Was building it a good idea?',
      adv: 'Cruise the Yangtze to the Three Gorges Dam. This expedition covers a monsoon climate and river flooding, the costs and benefits of a mega-dam, energy, resettlement, and Chinese culture.'
    },
    facts: ['The Yangtze is the longest river in Asia, about 6,300 km.', 'The Three Gorges Dam has the largest generating capacity of any power station.', 'Over a million people moved home to make way for the reservoir.'],
    climate: {
      place: 'Yichang, China', source: 'CRU averages (weather2travel.com)', lat: '31°N', rmax: 220, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [5.0, 6.4, 11.1, 17.0, 21.7, 25.6, 28.1, 28.1, 23.1, 18.1, 12.5, 7.0],
      rain: [20, 31, 61, 99, 127, 150, 203, 178, 122, 86, 48, 23]
    },
    diagrams: { dam: DAM_SVG },
    stations: [
      {
        id: 'river', title: 'The mighty Yangtze', icon: '🌊',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'The Yangtze is the longest river in which continent?', options: ['Asia', 'Africa', 'Europe', 'South America'], answer: 0,
              explain: 'It flows about 6,300 km from the Tibetan Plateau to the East China Sea at Shanghai.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction does the Yangtze flow from the dam to Shanghai?', options: ['East', 'West', 'North', 'South'], answer: 0,
              explain: 'Shanghai is almost due east of the dam, where the river reaches the sea.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar. About how far is Shanghai from the dam in a straight line?', options: ['About 1,000 km', 'About 100 km', 'About 5,000 km', 'About 20 km'], answer: 0,
              explain: 'It is about 1,000 km in a straight line, and much further along the winding river.' }
          ],
          adv: [
            { type: 'mcq', q: 'Why did the middle Yangtze flood so badly in 1998?', options: ['Heavy monsoon rain fell on a huge, deforested drainage basin', 'An earthquake broke the dam', 'Snow fell in summer', 'A tsunami came up the river'], answer: 0,
              explain: 'Thousands died. Deforestation upstream increased runoff and sediment, and lakes that once stored floodwater had been drained for farmland.' },
            { type: 'mcq', map: true, q: 'Map skills: the reservoir stretches upstream to Chongqing. In which direction is Chongqing from the dam?', options: ['West', 'East', 'North', 'South'], answer: 0,
              explain: 'Chongqing is about 450 km west. Large ships can now sail all the way there.' },
            { type: 'mcq', photo: true, q: 'Study the photo. Why was this site, in a narrow gorge, chosen for the dam?', options: ['Steep, hard rock walls make a short, strong dam possible', 'The river is widest here', 'The land is flat and easy to flood', 'It is close to the sea'], answer: 0,
              explain: 'Narrow valleys with strong granite foundations are ideal sites for large dams.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Monsoon rains', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Yichang?', options: ['July', 'January', 'October', 'March'], answer: 0,
              explain: 'July has about 203 mm. The summer monsoon brings heavy rain, and the Yangtze rises.' },
            { type: 'mcq', graph: true, q: 'What is the temperature in July?', options: ['About 28°C', 'About 5°C', 'About 15°C', 'About 40°C'], answer: 0,
              explain: 'Summers are hot and humid. January is cool, about 5°C.' },
            { type: 'mcq', graph: true, q: 'When is the river most likely to flood?', options: ['In summer', 'In winter', 'In spring only', 'Never'], answer: 0,
              explain: 'Monsoon rain from June to August fills the river and its tributaries.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Yichang (mm).', answer: 1148, tol: 5, unit: 'mm',
              explain: 'Adding the twelve months gives 1,148 mm.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly rain falls from May to September? Give a whole number.', answer: 68, tol: 1, unit: '%',
              explain: 'May to September = 780 mm out of 1,148 mm, which is about 68%.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 23.1, tol: 0.2, unit: '°C',
              explain: '28.1 − 5.0 = 23.1°C. Cold winters and hot summers show the continental influence.' }
          ]
        }
      },
      {
        id: 'dam', title: 'The Three Gorges Dam', icon: '⚡',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'dam', prompt: 'Label the parts of the Three Gorges Dam.',
              spots: [{ x: 13, y: 48 }, { x: 23, y: 95 }, { x: 40, y: 10 }, { x: 77, y: 71 }, { x: 84, y: 21 }, { x: 80, y: 93 }].map(function (s, i) { s.a = ['Reservoir', 'Mud (sediment)', 'Dam wall', 'Turbine', 'Power lines', 'River downstream'][i]; return s; }),
              extra: [],
              explain: 'Water from the reservoir falls through pipes and spins turbines. Generators turn this into electricity.' },
            { type: 'mcq', photo: true, q: 'Look at the photo of the dam. What is its main job?', options: ['Controlling floods and making electricity', 'Storing oil', 'Making salt from sea water pumped in from the coast', 'Growing rice'], answer: 0,
              explain: 'It also helps ships travel upstream, using locks and a giant ship lift.' },
            { type: 'mcq', q: 'About how many people had to move to make way for the reservoir?', options: ['Over 1 million', 'About 100', 'About 1,000 people', 'Nobody'], answer: 0,
              explain: 'Over 1.3 million people were moved as towns and farmland were flooded.' }
          ],
          adv: [
            { type: 'label', diagram: 'dam', prompt: 'Label the cross-section. One label does not belong.',
              spots: [{ x: 13, y: 48 }, { x: 23, y: 95 }, { x: 40, y: 10 }, { x: 77, y: 71 }, { x: 84, y: 21 }, { x: 80, y: 93 }].map(function (s, i) { s.a = ['Reservoir (stored water)', 'Trapped sediment', 'Concrete gravity dam', 'Turbine and generator', 'Transmission lines', 'Regulated downstream flow'][i]; return s; }),
              extra: ['Spawning salmon ladder'],
              explain: 'Sediment that once reached the delta now settles in the reservoir, so the coast near Shanghai gets less new mud.' },
            { type: 'sort', q: 'Classify these effects of the Three Gorges Dam.', bins: ['Advantage', 'Disadvantage'],
              items: [['Reduced flood risk downstream', 0], ['Low-carbon electricity', 0], ['Larger ships reach Chongqing', 0], ['1.3 million people relocated', 1], ['Sediment trapped behind the dam', 1], ['Landslides on reservoir slopes', 1]],
              explain: 'The dam replaces coal-fired power but cost about 200 billion yuan, and its effects on people and wildlife are still debated.' },
            { type: 'mcq', q: 'The baiji, a Yangtze river dolphin, was declared functionally extinct in 2006. Which pressure is linked to dams and river traffic?', options: ['Loss and splitting up of river habitats', 'Too much sea ice', 'Desert expansion', 'Volcanic eruptions along the whole river valley'], answer: 0,
              explain: 'Pollution, fishing, ships and dams all reduced the habitat. The Yangtze finless porpoise is still endangered.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Pandas and festivals', icon: '🏮',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: which festival is the biggest holiday in China?', options: ['Chinese New Year (Spring Festival)', 'Halloween', 'Thanksgiving', 'Bonfire Night and fireworks in November'], answer: 0,
              explain: 'Families gather, eat dumplings and give red envelopes of money.' },
            { type: 'mcq', q: 'Culture: what do most people in China eat with?', options: ['Chopsticks', 'Only their hands', 'Knife and fork only', 'Spoons only'], answer: 0,
              explain: 'Rice is the main food in the south, and wheat noodles in the north.' },
            { type: 'mcq', q: 'Which animal, found in mountain forests upstream of the gorges, is a symbol of China?', options: ['Giant panda', 'Kangaroo', 'Polar bear', 'Lion'], answer: 0,
              explain: 'Wild pandas live in bamboo forests in Sichuan, Shaanxi and Gansu.' }
          ],
          adv: [
            { type: 'mcq', q: 'Culture: which language has the most native speakers in the world?', options: ['Mandarin Chinese', 'English, as spoken around the world', 'Spanish', 'French'], answer: 0,
              explain: 'Mandarin uses characters, and tones change the meaning of words.' },
            { type: 'mcq', q: 'Many people resettled from the gorges moved to new towns like Chongqing. Which is a likely challenge for them?', options: ['Finding new jobs after losing farmland', 'Too much farmland', 'Learning to fish in the sea', 'Living in the desert'], answer: 0,
              explain: 'Many farmers were given land on steeper, poorer slopes higher up, or moved to cities.' },
            { type: 'mcq', q: 'China is the world’s largest emitter of CO₂. How does the Three Gorges Dam help?', options: ['It replaces electricity that would come from coal', 'It stores CO₂ deep under the water of the reservoir', 'It stops all car use', 'It plants forests underwater'], answer: 0,
              explain: 'Its output saves tens of millions of tonnes of coal each year, though China still relies mostly on coal.' }
          ]
        }
      }
    ]
  };
})();
