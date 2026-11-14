/* Travel the Wright Way — destination: Kiruna, Sweden (a subarctic climate, polar day and night, the world's largest underground iron ore mine, ground subsidence and moving a whole town, the Sámi and reindeer herding, fossil-free steel, and Swedish culture).
 * Climate data: Kiruna, 1991–2020 averages (climatestotravel.com).
 * Facts: Kiruna lies about 145 km north of the Arctic Circle, at about 500 m; it has polar night in midwinter and midnight sun in summer;
 *   it sits on the world's largest underground iron ore mine, run by the state-owned company LKAB, now mining about 1,365 m below the original surface;
 *   mining has weakened the ground, so the town centre is being moved about 3–5 km east; in August 2025 the 672-tonne wooden Kiruna Church was moved 5 km on trailers at about 0.5 km per hour;
 *   LKAB produces most of the iron ore mined in Europe, and in 2023 announced Europe's largest known deposit of rare earth elements near Kiruna; Sámi reindeer herders worry that new mines block migration routes;
 *   ore trains carry iron ore to Narvik in Norway (ice-free all year, thanks to the North Atlantic Drift) and to Luleå on the Baltic (which freezes in winter);
 *   Swedish companies are developing fossil-free steel using hydrogen instead of coal; culture: the Icehotel at Jukkasjärvi is rebuilt from river ice every winter; fika (coffee break); Midsummer; the right to roam (allemansrätten).
 */
(function () {
  var MINE_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Kiruna: an iron ore mountain on the left with a sloping body of iron ore going deep underground beneath the town, mine tunnels at several levels, cracked and sinking ground above the mine, the old town centre being cleared, and a new town centre further east with the moved church, plus a railway carrying ore away">' +
  '<rect width="600" height="420" fill="#e2e8f0"/>' +
  '<path d="M0 200 L40 120 L110 90 L170 140 L200 200 L600 200 L600 420 L0 420 Z" fill="#a8a29e"/>' +
  '<path d="M200 200 L210 210 L240 214 L270 208 L300 200 Z" fill="#78716c"/>' +
  '<path d="M110 100 L150 120 L330 420 L270 420 Z" fill="#334155"/>' +
  '<g stroke="#facc15" stroke-width="4"><line x1="60" y1="260" x2="200" y2="260"/><line x1="60" y1="320" x2="236" y2="320"/><line x1="60" y1="380" x2="272" y2="380"/></g><line x1="60" y1="196" x2="60" y2="384" stroke="#facc15" stroke-width="5"/>' +
  '<g stroke="#1f2937" stroke-width="2" fill="none"><path d="M215 200 l6 14 l-4 10"/><path d="M245 200 l-4 16 l6 12"/><path d="M275 200 l5 12 l-3 14"/></g>' +
  '<g fill="#e5e7eb" stroke="#64748b">' + (function () { var g = ''; for (var i = 0; i < 4; i++) g += '<rect x="' + (310 + i * 24) + '" y="' + (176 + (i % 2) * 6) + '" width="18" height="' + (24 - (i % 2) * 6) + '"/>'; return g; })() + '</g>' +
  '<g stroke="#dc2626" stroke-width="2.5">' + (function () { var g = ''; for (var i = 0; i < 2; i++) { var x = 310 + i * 24; g += '<line x1="' + x + '" y1="178" x2="' + (x + 18) + '" y2="198"/><line x1="' + (x + 18) + '" y1="178" x2="' + x + '" y2="198"/>'; } return g; })() + '</g>' +
  '<g fill="#f8fafc" stroke="#475569">' + (function () { var g = ''; for (var i = 0; i < 4; i++) g += '<rect x="' + (460 + i * 22) + '" y="' + (170 + (i % 2) * 8) + '" width="18" height="' + (30 - (i % 2) * 8) + '"/>'; return g; })() + '</g>' +
  '<path d="M560 200 L560 176 L572 166 L584 176 L584 200 Z" fill="#b91c1c"/><path d="M566 166 L572 150 L578 166 Z" fill="#7f1d1d"/>' +
  '<path d="M0 204 L200 204" stroke="#1f2937" stroke-width="3" stroke-dasharray="10 4"/><g>' + (function () { var g = ''; for (var i = 0; i < 3; i++) g += '<rect x="' + (14 + i * 26) + '" y="192" width="22" height="10" fill="#7c2d12"/>'; return g; })() + '</g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="342" y1="300" x2="246" y2="300"/><line x1="100" y1="400" x2="140" y2="382"/><line x1="216" y1="110" x2="244" y2="206"/><line x1="366" y1="110" x2="350" y2="176"/><line x1="522" y1="110" x2="500" y2="168"/><line x1="78" y1="168" x2="40" y2="192"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.sweden = {
    id: 'sweden',
    name: 'Kiruna',
    short: 'Kiruna',
    country: 'Sweden',
    gateway: 'Kiruna',
    lonlat: [20.22, 67.86],
    locator: { box: [14.0, 25.5, 64.6, 69.4], places: [['Kiruna', 20.22, 67.86, 'r'], ['Narvik', 17.43, 68.44, 'l'], ['Luleå', 22.15, 65.58, 'r'], ['Abisko', 18.83, 68.35, 't'], ['NORWAY', 15.6, 67.3, 'a'], ['FINLAND', 24.2, 68.6, 'a'], ['Arctic Circle', 19.0, 66.4, 'a'], ['Gulf of Bothnia', 23.3, 64.9, 'a']] },
    stamp: { colour: '#ca8a04', icon: '⛏️' },
    transport: { name: 'iron ore train', verb: 'Ride', emoji: '🚂' },
    scene: 'orerail',
    photo: { file: 'Kiruna September 2017 01.jpg', alt: 'A small town of houses and apartment blocks among birch trees, with a large mountain behind it that has been dug away by a mine, with mine buildings on its slopes', author: 'Arild Vågen', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'Hej! Welcome to Kiruna, Sweden’s northernmost town, far above the Arctic Circle. Ride an iron ore train through the snow and discover a town that is being picked up and moved, church and all, because the giant mine beneath it is making the ground crack.',
      adv: 'Ride the ore line to Kiruna. This expedition covers a subarctic climate and polar day and night, the world’s largest underground iron ore mine, subsidence and the relocation of a town, impacts on Sámi reindeer herding, ice-free ports, fossil-free steel, and Swedish culture.'
    },
    facts: ['Kiruna’s 672-tonne church was moved 5 km in August 2025.', 'The iron ore mine is now about 1,365 m deep.', 'The Icehotel near Kiruna is rebuilt from river ice every winter.'],
    climate: {
      place: 'Kiruna, Sweden', source: '1991–2020 averages (climatestotravel.com)', lat: '68°N', rmax: 120, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-11.6, -11.5, -7.7, -2.1, 4.4, 9.9, 13.4, 11.1, 6.3, -1.0, -7.1, -9.7],
      rain: [30, 30, 20, 30, 55, 60, 115, 65, 45, 40, 40, 30]
    },
    diagrams: { mine: MINE_SVG },
    stations: [
      {
        id: 'mine', title: 'A town on the move', icon: '⛏️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'mine', prompt: 'Label what is happening beneath and around Kiruna.',
              spots: [{ x: 57, y: 71 }, { x: 17, y: 95 }, { x: 36, y: 26 }, { x: 61, y: 26 }, { x: 87, y: 26 }, { x: 13, y: 40 }].map(function (s, i) { s.a = ['Iron ore', 'Mine tunnels', 'Cracking ground', 'Old town', 'New town', 'Ore train'][i]; return s; }),
              extra: [],
              explain: 'As the mine goes deeper under the town, the ground above cracks and sinks, so buildings must be moved east.' },
            { type: 'mcq', photo: true, q: 'Look at the photo. What has happened to the mountain behind the town?', options: ['Much of it has been dug away by mining', 'It has been completely covered by a glacier', 'It is an erupting volcano', 'It has been planted with forest'], answer: 0,
              explain: 'This is Kiirunavaara, an iron ore mountain mined since the 1890s.' },
            { type: 'mcq', q: 'Why is Kiruna’s town centre being moved?', options: ['The mine beneath it is making the ground crack', 'The whole town is flooding badly every single spring', 'A volcano is about to erupt', 'The town has run out of snow'], answer: 0,
              explain: 'In 2025 the wooden church was moved 5 km east on giant trailers, at about walking pace or slower.' }
          ],
          adv: [
            { type: 'label', diagram: 'mine', prompt: 'Label the cross-section of Kiruna. One label does not belong.',
              spots: [{ x: 57, y: 71 }, { x: 17, y: 95 }, { x: 36, y: 26 }, { x: 61, y: 26 }, { x: 87, y: 26 }, { x: 13, y: 40 }].map(function (s, i) { s.a = ['Iron ore body dipping under the town', 'Haulage levels (to 1,365 m)', 'Deformation zone (subsidence)', 'Old centre being cleared', 'New centre 3–5 km east', 'Ore railway to Narvik and Luleå'][i]; return s; }),
              extra: ['Open-pit coal mine'],
              explain: 'Kiruna’s ore is mined underground by sublevel caving, which causes the rock above to collapse in a controlled way.' },
            { type: 'sort', q: 'Classify these effects of the Kiruna mine.', bins: ['Benefit', 'Cost'],
              items: [['Thousands of well-paid jobs', 0], ['Iron ore for European steel', 0], ['A brand-new town centre paid for by LKAB', 0], ['Historic homes demolished', 1], ['Reindeer migration routes blocked', 1], ['Families forced to move', 1]],
              explain: 'LKAB pays for the move, but many residents and Sámi herders feel their views were not heard.' },
            { type: 'mcq', q: 'In 2023 a huge deposit of rare earth elements was found near Kiruna. Why does Europe see this as important?', options: ['They are needed for wind turbines, electric cars and phones', 'They are used to make salt', 'They are a type of fuel for coal power', 'They are only used for jewellery'], answer: 0,
              explain: 'Europe imports most rare earths, mainly from China. A local supply could reduce that dependence.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Polar night and midnight sun', icon: '🌌',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the coldest month in Kiruna?', options: ['January', 'July', 'May', 'September'], answer: 0,
              explain: 'January averages about −12°C. In midwinter the sun does not rise above the horizon.' },
            { type: 'mcq', graph: true, q: 'Which is the wettest month?', options: ['July', 'January', 'March', 'December'], answer: 0,
              explain: 'Summer brings the most rain. Winter snow adds up to less water than you might think.' },
            { type: 'mcq', q: 'What is the “midnight sun”?', options: ['In summer the sun does not set at night', 'The full moon shining very brightly in winter', 'Northern lights in winter', 'A sunset at midday'], answer: 0,
              explain: 'North of the Arctic Circle, the sun stays up all night for weeks around midsummer.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Kiruna (°C).', answer: 25, tol: 0.2, unit: '°C',
              explain: 'July 13.4°C − January −11.6°C = 25.0°C, a large range typical of a continental climate.' },
            { type: 'number', graph: true, q: 'In how many months is the average temperature below 0°C?', answer: 7, tol: 0, unit: 'months',
              explain: 'October to April are all below freezing, so the ground is frozen and snow-covered for most of the year.' },
            { type: 'mcq', q: 'Ore is shipped from Narvik in Norway all winter, but Luleå’s port on the Baltic freezes. Why?', options: ['The North Atlantic Drift keeps Narvik’s sea ice-free', 'Narvik is much further south than Luleå', 'Luleå is on a salty ocean', 'Icebreaker ships clear the ice at Narvik every single day'], answer: 0,
              explain: 'The Baltic is less salty and cut off from warm Atlantic water, so it freezes more easily.' }
          ]
        }
      },
      {
        id: 'sami', title: 'Reindeer and the Sámi', icon: '🦌',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: the Sámi people have herded which animal for centuries?', options: ['Reindeer', 'Camels', 'Kangaroos', 'Llamas'], answer: 0,
              explain: 'Herders move with their reindeer between winter forests and summer mountain pastures.' },
            { type: 'mcq', q: 'Why do reindeer herders worry about new mines?', options: ['Mines and roads block the reindeer’s migration routes', 'Reindeer like to eat iron ore', 'Mines make the winters warmer', 'Reindeer cannot hear trains'], answer: 0,
              explain: 'Land used for mines, railways and wind farms breaks up the pastures reindeer need.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Narvik from Kiruna?', options: ['North-west', 'South-east', 'North-east', 'South-west'], answer: 0,
              explain: 'The ore railway runs about 130 km north-west across the mountains to the Norwegian coast.' }
          ],
          adv: [
            { type: 'mcq', q: 'Rising winter temperatures cause rain to fall on snow, which then freezes into ice. Why is this a problem for reindeer?', options: ['They cannot dig through the ice to reach lichen', 'The ice makes their thick fur coats far too warm', 'They prefer to eat ice', 'It stops them from swimming'], answer: 0,
              explain: 'Climate change is making winter grazing harder, so some herders must buy extra food.' },
            { type: 'mcq', q: 'Swedish companies are making “fossil-free steel”. What replaces coal in the process?', options: ['Hydrogen made with renewable electricity', 'More iron ore', 'Natural gas piped from fields in the North Sea', 'Wood from the forests'], answer: 0,
              explain: 'Steelmaking is one of the world’s biggest sources of CO₂, so this could cut emissions a lot.' },
            { type: 'mcq', map: true, q: 'Map skills: Stockholm is about 950 km away. In which direction is it from Kiruna?', options: ['South', 'North', 'East', 'West'], answer: 0,
              explain: 'Sweden is a long country. Most Swedes live in the south, far from the mines of Lapland.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Fika and the Icehotel', icon: '🧊',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what is fika in Sweden?', options: ['A coffee and cake break', 'A winter sport', 'A sled pulled by reindeer', 'A type of boat'], answer: 0,
              explain: 'Many workplaces stop for fika once or twice a day.' },
            { type: 'mcq', q: 'Culture: the Icehotel near Kiruna is built from what?', options: ['Blocks of ice from the river', 'Recycled plastic', 'Iron and steel from the Kiruna mine', 'Glass bottles'], answer: 0,
              explain: 'It melts each spring and is rebuilt every winter with new designs.' },
            { type: 'mcq', q: 'Culture: Midsummer is a big festival in Sweden. Why is it so special in the north?', options: ['The sun shines all night', 'It is the coldest day of the year', 'It snows heavily', 'It is completely dark all day'], answer: 0,
              explain: 'People dance around a maypole and eat pickled herring and new potatoes.' }
          ],
          adv: [
            { type: 'mcq', q: 'Culture: Sweden’s allemansrätten (“right of public access”) allows people to do what?', options: ['Walk and camp on most land, even if privately owned', 'Hunt any animal at any time', 'Build houses anywhere', 'Drive anywhere off-road'], answer: 0,
              explain: 'People must not disturb or destroy, but they can enjoy nature freely.' },
            { type: 'mcq', q: 'Kiruna’s population fell from its peak in the 1970s. Which factor would most likely attract young people back?', options: ['New jobs in mining, space research and tourism', 'Longer, darker and much colder winters every year', 'Closing the railway', 'Fewer schools'], answer: 0,
              explain: 'Kiruna has a rocket launch site, Esrange, as well as Arctic tourism.' },
            { type: 'mcq', q: 'Northern lights are often seen over Kiruna in winter. What causes them?', options: ['Particles from the Sun hitting the upper atmosphere', 'Moonlight reflecting off the fresh snow and frozen lakes', 'Volcanic eruptions in Iceland', 'Lights from the mine'], answer: 0,
              explain: 'Kiruna lies under the auroral oval, so clear, dark winter nights often bring the aurora.' }
          ]
        }
      }
    ]
  };
})();
