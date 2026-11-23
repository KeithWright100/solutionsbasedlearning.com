/* Travel the Wright Way — destination: Austria (the Grossglockner and the shrinking Pasterze glacier, glacial landforms, an Alpine climate, snow, skiing and avalanches, hydropower, the Danube and Austrian culture).
 * Climate data: Innsbruck, 1991–2020 averages (climatestotravel.com).
 * Facts: the Grossglockner (3,798 m) is Austria's highest mountain; the Pasterze, below it, is Austria's longest glacier (about 8 km) and has lost about half of its volume since measurements began in 1851;
 *   a medial moraine is a band of rock debris on a glacier, formed where two glaciers join; the Grossglockner High Alpine Road opened in 1935, is 48 km long with 36 hairpin bends and reaches 2,504 m at the Hochtor;
 *   the Galtür avalanche in Tyrol in February 1999 killed 31 people, after which large avalanche barriers were built; protection forests and snow fences help hold snow on slopes;
 *   lower ski resorts depend more and more on artificial snow, which uses large amounts of water and energy; more than half of Austria's electricity comes from hydropower;
 *   Mozart was born in Salzburg in 1756; the Danube flows through Linz and Vienna; Vienna is often ranked among the world's most liveable cities; "Grüß Gott" and "Servus" are common greetings; Sachertorte is a Viennese chocolate cake.
 */
(function () {
  var GLACIER_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch of an Alpine valley glacier: a sharp pyramid-shaped peak, a knife-edged ridge, a valley glacier flowing down from the mountains with a dark stripe of rock along its middle, the front end of the glacier, and a meltwater lake in front of it">' +
  '<rect width="600" height="420" fill="#d6e8f6"/>' +
  '<path d="M0 270 L60 190 L150 60 L215 140 L250 108 L300 150 L360 112 L430 88 L520 130 L600 100 L600 270 Z" fill="#78716c"/>' +
  '<path d="M120 116 L150 60 L182 114 L164 104 L150 120 L136 104 Z M232 122 L250 108 L268 124 Z M410 106 L430 88 L452 100 L440 112 Z M582 112 L600 100 L600 124 Z" fill="#fff"/>' +
  '<path d="M0 270 L600 270 L600 420 L0 420 Z" fill="#6aa84f"/><path d="M0 330 C 150 320, 300 345, 450 335 S 560 330, 600 336 L600 420 L0 420 Z" fill="#5b9a43"/>' +
  '<path d="M368 140 Q 436 100 516 138 Q 470 220 436 322 Q 366 342 292 324 Q 350 240 368 140 Z" fill="#a8a29e"/>' +
  '<path d="M382 142 Q 436 114 500 142 Q 460 222 426 316 Q 366 330 306 318 Q 360 240 382 142 Z" fill="#eaf6ff" stroke="#93c5fd" stroke-width="2"/>' +
  '<path d="M440 132 Q 404 236 364 326" fill="none" stroke="#44403c" stroke-width="8" stroke-linecap="round"/>' +
  '<ellipse cx="360" cy="368" rx="104" ry="22" fill="#5aa9e6"/><path d="M300 366 Q 360 360 420 368" fill="none" stroke="#e0f2fe" stroke-width="2"/>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="72" y1="44" x2="146" y2="70"/><line x1="300" y1="50" x2="232" y2="122"/><line x1="530" y1="230" x2="468" y2="214"/><line x1="530" y1="298" x2="386" y2="266"/><line x1="150" y1="298" x2="300" y2="322"/><line x1="510" y1="384" x2="440" y2="370"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.austria = {
    id: 'austria',
    name: 'Austria',
    short: 'Austria',
    country: 'Austria',
    gateway: 'Innsbruck',
    lonlat: [12.72, 47.08],
    locator: { box: [9.2, 17.4, 46.15, 49.25],
      rivers: [[[13.46, 48.57], [14.29, 48.31], [15.0, 48.2], [15.6, 48.38], [16.37, 48.21], [17.0, 48.15]]],
      places: [['GERMANY', 11.6, 48.55, 'a'], ['ITALY', 11.6, 46.4, 'a'], ['CZECHIA', 15.2, 49.05, 'a'], ['Grossglockner', 12.69, 47.07, 'b'], ['Innsbruck', 11.39, 47.27, 't'], ['Salzburg', 13.04, 47.81, 'r'], ['Linz', 14.29, 48.31, 't'], ['Vienna', 16.37, 48.21, 't'], ['Danube', 15.35, 48.0, 'a']] },
    stamp: { colour: '#b91c1c', icon: '⛷️' },
    transport: { name: 'Postbus on the Grossglockner High Alpine Road', verb: 'Ride', emoji: '🚌' },
    scene: 'glockner',
    photo: { file: 'Johannisberg (Hohe Tauern) 2.jpg', alt: 'The wide Pasterze glacier below snowy peaks, with a dark stripe of rock running along the ice and a rocky outcrop rising out of the glacier', author: 'TCole', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
    intro: {
      ks3: 'Servus! Welcome to Austria. Ride a Postbus up a mountain road with 36 hairpin bends to see the Pasterze, Austria’s longest glacier. Then find out about snow and avalanches, mountain power stations, the River Danube and the city of Vienna.',
      adv: 'Ride the Grossglockner High Alpine Road. This expedition covers glacial landforms and glacier retreat, an Alpine climate, avalanche hazards and winter tourism, hydropower, and Austrian culture.'
    },
    facts: ['The Grossglockner, at 3,798 m, is Austria’s highest mountain.', 'The Pasterze glacier has lost about half its ice since 1851.', 'More than half of Austria’s electricity comes from hydropower.'],
    climate: {
      place: 'Innsbruck, Austria', source: '1991–2020 averages (climatestotravel.com)', lat: '47°N', rmax: 160, rstep: 40,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-0.5, 1.5, 6.0, 10.0, 14.4, 17.7, 19.3, 19.0, 14.8, 10.4, 4.6, 0.2],
      rain: [45, 35, 60, 60, 90, 125, 135, 145, 90, 70, 60, 50]
    },
    diagrams: { glacier: GLACIER_SVG },
    stations: [
      {
        id: 'glacier', title: 'The shrinking glacier', icon: '🧊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'glacier', prompt: 'Label this sketch of an Alpine glacier.',
              spots: [{ x: 10, y: 9.5 }, { x: 50, y: 10.5 }, { x: 89, y: 54.8 }, { x: 89, y: 71 }, { x: 22, y: 71 }, { x: 87, y: 92 }].map(function (s, i) { s.a = ['Pyramidal peak', 'Arête', 'Glacier', 'Medial moraine', 'Snout', 'Meltwater lake'][i]; return s; }),
              extra: [],
              explain: 'A glacier is a river of ice. Its front end is called the snout, and the meltwater from it often collects in a lake.' },
            { type: 'mcq', photo: true, q: 'Look at the photo. What is the dark stripe running along the glacier?', options: ['Rock and stones carried by the ice (a moraine)', 'A road built across the glacier for the buses to use', 'A river of oil', 'The shadow of a cloud'], answer: 0,
              explain: 'When two glaciers join, the rock on their edges joins up to make a dark stripe called a medial moraine.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Vienna from Innsbruck?', options: ['East', 'West', 'North', 'South'], answer: 0,
              explain: 'Vienna, the capital, is at the eastern end of Austria, on the River Danube.' }
          ],
          adv: [
            { type: 'label', diagram: 'glacier', prompt: 'Label the glacial landforms. One label does not belong.',
              spots: [{ x: 10, y: 9.5 }, { x: 50, y: 10.5 }, { x: 89, y: 54.8 }, { x: 89, y: 71 }, { x: 22, y: 71 }, { x: 87, y: 92 }].map(function (s, i) { s.a = ['Pyramidal peak (three or more corries cut back)', 'Arête (ridge between two corries)', 'Valley glacier (the Pasterze)', 'Medial moraine', 'Retreating snout', 'Proglacial lake'][i]; return s; }),
              extra: ['Drumlin'],
              explain: 'Drumlins are smooth, egg-shaped hills formed beneath large ice sheets in lowland areas, not in a steep Alpine valley like this.' },
            { type: 'mcq', q: 'The Pasterze has lost about half of its ice since 1851. What is the main reason?', options: ['Warmer summers melt more ice than winter snow adds', 'Tourists walking on the ice wear it away', 'The mountain is sinking into the ground', 'Volcanic heat from beneath the Alps'], answer: 0,
              explain: 'A glacier shrinks when ablation (melting) is greater than accumulation (new snow). Rising temperatures have tipped this balance.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Innsbruck to Vienna.', options: ['About 390 km', 'About 39 km', 'About 1,500 km', 'About 4,000 km'], answer: 0,
              explain: 'In a straight line it is about 390 km. Austria is long from west to east but narrow from north to south.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Alpine weather', icon: '🌦️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Innsbruck?', options: ['August', 'February', 'December', 'April'], answer: 0,
              explain: 'August has about 145 mm. Summer thunderstorms build up over the mountains on hot afternoons.' },
            { type: 'mcq', graph: true, q: 'Which month has an average temperature below 0°C?', options: ['January', 'July', 'May', 'October'], answer: 0,
              explain: 'January averages −0.5°C, so precipitation often falls as snow.' },
            { type: 'mcq', graph: true, q: 'In which season does Innsbruck get the most rain?', options: ['Summer', 'Winter', 'It is the same all year', 'It never rains'], answer: 0,
              explain: 'June, July and August are the wettest months. Winter is drier, but what falls is often snow.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual precipitation in Innsbruck (mm).', answer: 965, tol: 5, unit: 'mm',
              explain: 'Adding the twelve months gives 965 mm.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 19.8, tol: 0.2, unit: '°C',
              explain: 'July 19.3°C − January −0.5°C = 19.8°C. Take care when subtracting a negative number.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly precipitation falls in June, July and August? Give a whole number.', answer: 42, tol: 1, unit: '%',
              explain: 'June to August = 405 mm. 405 ÷ 965 × 100 ≈ 42%, a summer maximum typical of inland mountain areas.' }
          ]
        }
      },
      {
        id: 'snow', title: 'Snow and avalanches', icon: '❄️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Millions of people visit the Austrian Alps every winter. What do most of them come to do?', options: ['Ski and snowboard', 'Sunbathe on beaches', 'Visit rainforests', 'Go on safari'], answer: 0,
              explain: 'Winter sports bring jobs to mountain villages, in hotels, ski schools, lifts and restaurants.' },
            { type: 'mcq', q: 'What usually causes an avalanche?', options: ['A thick layer of snow sliding down a steep slope', 'An earthquake under the sea', 'Too much rain in a desert', 'Strong winds blowing over a flat field'], answer: 0,
              explain: 'Avalanches are most likely after heavy snowfall, when the new snow does not stick well to the layer below.' },
            { type: 'mcq', q: 'How do Alpine villages protect themselves from avalanches?', options: ['Fences and walls on the slopes, and planting trees', 'Building houses at the bottom of steep, open slopes', 'Cutting down all the forests', 'Ignoring warnings'], answer: 0,
              explain: 'Protection forests and snow fences hold the snow in place, and walls can turn an avalanche away from houses.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these impacts of winter tourism in the Alps.', bins: ['Positive', 'Negative'],
              items: [['Year-round jobs in hotels and lifts', 0], ['Income that keeps young people in mountain villages', 0], ['Money for roads and services', 0], ['Forest cleared for ski runs', 1], ['Traffic jams and air pollution in valleys', 1], ['Water and energy used for artificial snow', 1]],
              explain: 'Tourism brings wealth to remote valleys, but it puts pressure on fragile mountain environments.' },
            { type: 'mcq', q: 'In February 1999 an avalanche hit the village of Galtür in Tyrol, killing 31 people. How did Austria respond?', options: ['It built large avalanche barriers and improved warnings', 'It banned all visitors from the Alps', 'It moved every village to the lowlands', 'It did nothing because avalanches cannot be managed'], answer: 0,
              explain: 'Galtür now has a long avalanche wall, which also houses a museum about living with the risk.' },
            { type: 'mcq', q: 'Why are lower ski resorts in Austria most at risk from climate change?', options: ['Warmer winters bring less reliable natural snow at lower altitudes', 'Mountains are getting smaller', 'Higher resorts are closing down for good', 'Snow is falling at lower altitudes than before'], answer: 0,
              explain: 'Many lower resorts now rely on snow cannons, which are expensive and use large amounts of water and energy.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Power, the Danube and Vienna', icon: '🎻',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'More than half of Austria’s electricity comes from one renewable source. Which one?', options: ['Hydropower (fast-flowing water)', 'Coal', 'Oil', 'Nuclear power'], answer: 0,
              explain: 'Steep mountains, plenty of rain and summer meltwater from glaciers make Austria ideal for hydropower.' },
            { type: 'mcq', q: 'Culture: the famous composer Mozart was born in which Austrian city in 1756?', options: ['Salzburg', 'Paris', 'London', 'Rome'], answer: 0,
              explain: 'You can still visit his birthplace in the old town of Salzburg.' },
            { type: 'mcq', map: true, q: 'Map skills: which major river flows through Linz and Vienna?', options: ['The Danube', 'The Nile', 'The Thames', 'The Amazon'], answer: 0,
              explain: 'The Danube flows east across Europe and into the Black Sea.' }
          ],
          adv: [
            { type: 'mcq', q: 'Why is Austria so well suited to hydropower?', options: ['High relief, high precipitation and glacial meltwater', 'It has the longest coastline in Europe', 'It has very large coal reserves', 'It has a hot desert climate'], answer: 0,
              explain: 'Water falling from high reservoirs to low power stations turns turbines. Some reservoirs are also used to store energy.' },
            { type: 'mcq', q: 'Which is a disadvantage of building dams in Alpine valleys?', options: ['Valleys are flooded and fish cannot migrate', 'They release large amounts of carbon dioxide every day', 'They only work at night', 'They make the climate much drier'], answer: 0,
              explain: 'Fish ladders and controlled water releases help to reduce the impact on rivers.' },
            { type: 'mcq', q: 'Culture: Vienna is often ranked as one of the world’s most liveable cities. Which is a reason?', options: ['Good public transport, green space and affordable housing', 'It has no public transport', 'It has a tropical climate', 'It has no parks'], answer: 0,
              explain: 'Around half of the people in Vienna live in social or city-subsidised housing, which helps keep homes affordable.' }
          ]
        }
      }
    ]
  };
})();
