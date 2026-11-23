/* Travel the Wright Way — destination: the Congo (Democratic Republic of the Congo: the Congo River and basin, rainforest, Kinshasa, cobalt and culture).
 * Climate data: Kinshasa, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: the Congo has the second-largest discharge of any river after the Amazon and is the deepest river measured (over 200 m);
 *   its basin crosses the Equator, so part of it is always in a wet season; it has no delta (sediment is carried into a submarine canyon);
 *   the Congo Basin holds the second-largest tropical rainforest; peatlands of the Cuvette Centrale store about 30 billion tonnes of carbon;
 *   bonobos live only in the DRC; Virunga (1925) is Africa's oldest national park; the DRC mines about 70% of the world's cobalt;
 *   Congolese rumba was added to UNESCO's Intangible Cultural Heritage list in 2021.
 */
(function () {
  var BASIN_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map-style diagram of the Congo drainage basin showing the source, tributaries, confluence, watershed, rapids and mouth at the Atlantic Ocean">' +
  '<rect width="600" height="420" fill="#f4ecd8"/>' +
  '<rect width="64" height="420" fill="#2f7fbf"/>' +
  // basin
  '<path d="M80 200 C 120 60, 300 30, 480 60 S 590 220, 520 330 S 300 400, 160 360 S 60 300, 80 200 Z" fill="#cfe6c2" stroke="#8a5a33" stroke-width="2.5" stroke-dasharray="9 6"/>' +
  '<g fill="#2f8a4a" opacity=".55"><circle cx="300" cy="150" r="40"/><circle cx="360" cy="190" r="36"/><circle cx="250" cy="200" r="30"/><circle cx="410" cy="150" r="28"/></g>' +
  // tributaries
  '<g fill="none" stroke="#3d8fc6" stroke-width="5" stroke-linecap="round"><path d="M330 352 C 300 320, 250 280, 200 236"/><path d="M330 40 C 310 70, 290 95, 262 112"/><path d="M520 200 C 480 190, 450 160, 425 140"/></g>' +
  // main river
  '<path d="M470 342 C 480 260, 440 170, 400 120 S 300 80, 255 118 S 195 210, 160 238 S 100 252, 64 250" fill="none" stroke="#1f6fb2" stroke-width="9" stroke-linecap="round"/>' +
  // source, confluence, rapids, Kinshasa
  '<circle cx="470" cy="342" r="7" fill="#1d4f91"/>' +
  '<circle cx="196" cy="230" r="7" fill="#fff" stroke="#11243b" stroke-width="2"/>' +
  '<path d="M100 243 l6 6 l6 -6 l6 6 l6 -6" fill="none" stroke="#fff" stroke-width="3"/>' +
  '<circle cx="168" cy="236" r="4" fill="#b42318"/><text x="172" y="262" font-size="12" font-weight="700" fill="#11243b">Kinshasa</text>' +
  '<text x="300" y="132" font-size="13" font-style="italic" fill="#11243b" text-anchor="middle">Congo River</text>' +
  // equator
  '<line x1="64" y1="150" x2="600" y2="150" stroke="#b42318" stroke-width="1.5" stroke-dasharray="3 5"/><text x="590" y="144" font-size="11" fill="#b42318" text-anchor="end">Equator</text>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="504" y1="372" x2="474" y2="348"/><line x1="300" y1="322" x2="290" y2="306"/><line x1="140" y1="160" x2="192" y2="226"/><line x1="480" y1="73" x2="476" y2="62"/><line x1="84" y1="288" x2="70" y2="254"/><line x1="150" y1="212" x2="112" y2="244"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.congo = {
    id: 'congo',
    name: 'Congo',
    the: true,
    short: 'the Congo',
    country: 'Democratic Republic of the Congo',
    gateway: 'Kinshasa',
    lonlat: [23.5, -1],
    locator: { box: [10, 31.5, -13.5, 6], rivers: [[[12.3, -6.0], [13.5, -5.6], [15.3, -4.3], [16.2, -2.2], [17.6, -0.7], [18.3, 0.05], [20.2, 1.4], [22.4, 1.2], [24.4, 0.7], [25.2, 0.5], [25.4, -0.6], [25.9, -2.5], [26.6, -5.0], [27.0, -7.0]]], places: [['Kinshasa', 15.31, -4.32, 'r'], ['Mbandaka', 18.27, 0.05, 'l'], ['Kisangani', 25.2, 0.52, 't'], ['Virunga', 29.4, -0.9, 'l'], ['Atlantic', 11.9, -9, 'a'], ['Congo Basin', 22.0, -3.0, 'a']] },
    stamp: { colour: '#166534', icon: '🦍' },
    transport: { name: 'river barge', verb: 'Sail', emoji: '⛴️' },
    scene: 'barge',
    photo: { file: 'Pirogue sur le fleuve Congo.jpg', alt: 'Long wooden pirogue canoes on the wide Congo River at Brazzaville', author: 'Happiraphael', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'You land in Kinshasa, one of the biggest cities in Africa, on the banks of the mighty Congo River. Climb aboard a river barge piled high with goods and people, and head upstream into Africa’s great rainforest.',
      adv: 'From Kinshasa you travel up the Congo River. This expedition covers drainage basins and river regimes, an equatorial and tropical wet-and-dry climate, the Congo Basin as a carbon store, the resource curse and cobalt, rapid urbanisation, and Congolese culture.'
    },
    facts: ['The Congo River carries more water than any river except the Amazon.', 'It is the deepest river ever measured, over 200 m deep in places.', 'Kinshasa and Brazzaville face each other across the river: two capital cities just a few kilometres apart.'],
    climate: {
      place: 'Kinshasa, DR Congo', source: 'Long-term averages (CRU / Met Office)', lat: '4°S',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [26.0, 26.5, 26.5, 26.5, 26.0, 23.5, 22.5, 23.5, 25.5, 25.5, 25.0, 25.5],
      rain: [154, 136, 170, 196, 124, 7, 1, 4, 34, 136, 254, 171]
    },
    diagrams: { basin: BASIN_SVG },
    stations: [
      {
        id: 'river', title: 'The mighty Congo', icon: '🌊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'basin', prompt: 'Label this drainage basin of the Congo River.',
              spots: [{ x: 84, y: 91, a: 'Source' }, { x: 50, y: 78, a: 'Tributary' }, { x: 22, y: 36, a: 'Confluence' }, { x: 80, y: 14, a: 'Watershed' }, { x: 14, y: 70, a: 'Mouth' }, { x: 14, y: 94, a: 'Atlantic Ocean' }],
              extra: [],
              explain: 'A river starts at its source. Tributaries join it at confluences. The watershed is the high ground around the edge of the basin, and the river ends at its mouth.' },
            { type: 'mcq', q: 'What is a drainage basin?', options: ['The area of land drained by a river and its tributaries', 'The deepest stretch of a river, where large ships and barges can sail safely', 'A man-made lake that stores water for cities', 'The point where a river meets the sea'], answer: 0,
              explain: 'All the rain that falls inside the watershed eventually drains into the same river system.' },
            { type: 'mcq', q: 'The Congo carries more water than any river except one. Which?', options: ['The Amazon', 'The Nile', 'The Thames', 'The Mekong'], answer: 0,
              explain: 'The Nile is longer, but the Amazon and Congo carry far more water because they drain huge, rainy rainforest basins.' }
          ],
          adv: [
            { type: 'label', diagram: 'basin', prompt: 'Label the drainage basin. One label does not belong.',
              spots: [{ x: 84, y: 91, a: 'Source' }, { x: 50, y: 78, a: 'Tributary' }, { x: 22, y: 36, a: 'Confluence' }, { x: 80, y: 14, a: 'Watershed' }, { x: 14, y: 70, a: 'Mouth' }, { x: 24, y: 50, a: 'Rapids' }],
              extra: ['Delta'],
              explain: 'The Congo has no delta. Its sediment is carried out through a deep submarine canyon. Near the coast the river drops through rapids, such as Inga Falls, which have huge hydro-electric potential.' },
            { type: 'mcq', q: 'The Congo’s flow stays high all year, unlike most tropical rivers. Why?', options: ['Its basin crosses the Equator, so part is always in a wet season', 'Snowmelt from high mountains feeds it through every summer and every winter', 'It is fed mainly by groundwater from the Sahara', 'Large dams release water evenly through the year'], answer: 0,
              explain: 'When the northern half is dry, the southern half is wet, and vice versa. This gives a remarkably steady river regime.' },
            { type: 'mcq', q: 'Rapids stop large ships sailing from the sea to Kinshasa. What is the main economic effect?', options: ['Goods must switch between river, rail and road, raising transport costs', 'Kinshasa cannot trade with anyone at all, so it must grow and make everything it needs', 'Ships simply sail around the rapids through the rainforest', 'It has no effect because the river is too shallow anyway'], answer: 0,
              explain: 'Breaks of bulk add cost and time. A railway links Kinshasa to the port of Matadi below the rapids.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Wet and dry near the Equator', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Kinshasa?', options: ['November', 'July', 'June', 'August'], answer: 0,
              explain: 'November has the tallest bar, about 254 mm.' },
            { type: 'mcq', graph: true, q: 'Which months are almost completely dry?', options: ['June to August', 'November to January', 'March to May', 'October to December'], answer: 0,
              explain: 'June, July and August get only a few millimetres of rain.' },
            { type: 'mcq', graph: true, q: 'Describe the temperature in Kinshasa.', options: ['Hot all year, about 22–27°C', 'Below freezing in winter', 'Cool in summer and very hot in winter', 'It changes by about 30°C'], answer: 0,
              explain: 'Kinshasa is close to the Equator, so the sun is high all year.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Kinshasa (mm).', answer: 1387, tol: 10, unit: 'mm',
              explain: 'Adding all twelve months gives about 1,387 mm.' },
            { type: 'mcq', graph: true, q: 'Kinshasa is 4° south of the Equator but has a long dry season from June to September. Why?', options: ['The ITCZ moves north, so drier sinking air dominates', 'Cold ocean currents off the coast bring heavy fog instead of rain', 'Winds from the Sahara blow south every winter and dry out the city', 'The rainforest stops growing in June, so less water is recycled'], answer: 0,
              explain: 'Places right on the Equator, like Mbandaka, get rain all year; a few degrees away, the seasonal shift of the ITCZ creates a dry season.' },
            { type: 'mcq', q: 'About half the rain over the Congo Basin is recycled from the forest itself. What could happen if large areas were cleared?', options: ['Less transpiration, so rainfall could fall across the basin', 'More rain, because bare ground heats up and makes larger storms', 'No change, because rain comes only from the Atlantic', 'The river would flood all year round'], answer: 0,
              explain: 'Forests pump water back into the air. Clearing them can weaken the water cycle, affecting farming and river flow far away.' }
          ]
        }
      },
      {
        id: 'forest', title: 'Africa’s great rainforest', icon: '🦍',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Bonobos are great apes found in only one country in the world. Which?', options: ['DR Congo', 'Brazil', 'Indonesia', 'India'], answer: 0,
              explain: 'Bonobos live only in the rainforest south of the Congo River, which they cannot swim across.' },
            { type: 'mcq', q: 'Virunga, in the east of the country, is Africa’s oldest national park. Which famous animals does it protect?', options: ['Mountain gorillas', 'Polar bears', 'Kangaroos', 'Snow leopards and red pandas'], answer: 0,
              explain: 'Virunga, created in 1925, protects mountain gorillas on the forested slopes of its volcanoes.' },
            { type: 'mcq', q: 'Which is the main cause of deforestation in the Congo Basin?', options: ['Small farms and cutting wood for charcoal', 'Huge cattle ranches run by large companies for export beef', 'Building ski resorts in the mountains', 'Flooding from the sea'], answer: 0,
              explain: 'Unlike the Amazon, most clearance here is by poor families who need land for food and wood for cooking fuel.' }
          ],
          adv: [
            { type: 'mcq', q: 'Peat swamps in the central Congo Basin store about 30 billion tonnes of carbon. Why are they so important?', options: ['If drained or burned, they would release huge amounts of CO₂', 'They produce most of the world’s oxygen supply each day, so cutting them would cause breathing problems', 'They are the main source of fresh water for the Sahara', 'They make the river flow faster towards the sea'], answer: 0,
              explain: 'Waterlogged peat stores carbon for thousands of years. Protecting it is one of the cheapest ways to avoid emissions.' },
            { type: 'mcq', q: 'Which approach is most likely to slow deforestation driven by charcoal?', options: ['Efficient cooking stoves, tree plantations and access to electricity', 'Banning all cooking with wood overnight, with heavy fines for families', 'Encouraging more charcoal exports to Europe', 'Cutting down the remaining old trees first'], answer: 0,
              explain: 'Solutions must meet people’s real need for cooking fuel, or the pressure on the forest continues.' },
            { type: 'mcq', q: 'Conflict in eastern DR Congo has made conservation difficult in places like Virunga. Why?', options: ['Armed groups and illegal charcoal and mining thrive', 'There is far too much tourism, and the crowds of visitors frighten the gorillas away into other countries', 'The parks are too small to be noticed by anyone', 'Gorillas move to cities during conflicts'], answer: 0,
              explain: 'Rangers risk their lives protecting the park. Peace, jobs and local benefits are vital for long-term conservation.' }
          ]
        }
      },
      {
        id: 'people', title: 'Kinshasa, cobalt and culture', icon: '🎶',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Your phone battery probably contains cobalt. About how much of the world’s cobalt is mined in DR Congo?', options: ['About 70%', 'About 7%', 'About 17%', 'About 40%'], answer: 0,
              explain: 'Cobalt is used in lithium-ion batteries for phones, laptops and electric cars, so demand is rising fast.' },
            { type: 'mcq', q: 'Culture: Congolese rumba is on UNESCO’s list of Intangible Cultural Heritage. What is it?', options: ['A style of music and dance, famous across Africa', 'A type of river boat used for fishing', 'A traditional method of hunting in the rainforest, using nets and spears', 'A spicy cassava dish'], answer: 0,
              explain: 'Rumba blends African rhythms with influences from Cuba. Its guitar-led style spread across the continent.' },
            { type: 'mcq', q: 'Kinshasa is growing very fast. Which is a likely problem for newcomers?', options: ['Finding a home with clean water and power', 'Too many empty houses and flats waiting for people to move in and fill them', 'Snow blocking the roads in winter', 'Having too many jobs to choose from'], answer: 0,
              explain: 'Services struggle to keep up with rapid growth, so many people live in informal neighbourhoods.' }
          ],
          adv: [
            { type: 'mcq', q: 'DR Congo is rich in minerals but most people are poor. What is this paradox often called?', options: ['The resource curse', 'The demographic dividend', 'The multiplier effect', 'The trickle-down effect'], answer: 0,
              explain: 'Valuable resources can fuel corruption and conflict, while profits flow abroad instead of into schools and services.' },
            { type: 'sort', q: 'Classify these impacts of cobalt mining in DR Congo.', bins: ['Benefit', 'Cost'],
              items: [['Export earnings for the government', 0], ['Jobs in mining towns', 0], ['Investment in roads and power', 0], ['Dangerous work, including by children, in small mines', 1], ['Polluted water and soil', 1], ['Profits going to foreign companies', 1]],
              explain: 'Supply-chain checks, formalising small-scale mining and recycling batteries can reduce the costs.' },
            { type: 'mcq', q: 'The Inga Falls could produce enormous hydro-electric power, yet most Congolese have no electricity. Which is the main barrier?', options: ['The huge cost of dams and power lines, and weak governance', 'The river does not flow fast or steadily enough to turn the turbines for most of the year', 'Hydro power does not work in the tropics', 'People do not want electricity'], answer: 0,
              explain: 'Large projects need billions in investment and stable institutions; small solar and mini-hydro schemes can reach villages sooner.' }
          ]
        }
      }
    ]
  };
})();
