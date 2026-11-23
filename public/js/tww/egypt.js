/* Travel the Wright Way — destination: Egypt (the Nile valley and delta, the Aswan High Dam, a hot desert climate, Cairo and ancient culture).
 * Climate data: Cairo, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: about 95% of Egyptians live on roughly 5% of the land, along the Nile valley and delta;
 *   most of the Nile's water reaching Egypt comes from the Ethiopian Highlands via the Blue Nile and Atbara;
 *   the Aswan High Dam was completed in 1970, creating Lake Nasser; the temples of Abu Simbel were moved in the 1960s to escape the rising water;
 *   the dam traps silt, so farmers use more fertiliser and the delta coast is eroding; the Grand Ethiopian Renaissance Dam (GERD) on the Blue Nile began filling in 2020;
 *   the Great Pyramid of Giza (about 4,500 years old) is the only one of the Seven Wonders of the Ancient World still standing; the Suez Canal opened in 1869.
 */
(function () {
  var NILE_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map-style diagram of the Nile in Egypt showing the Mediterranean Sea, the delta with its distributaries, a narrow strip of farmland through the desert, the Aswan High Dam and Lake Nasser">' +
  '<rect width="600" height="420" fill="#ecd29b"/>' +
  '<g fill="#e0bf7c" opacity=".8"><path d="M30 240 q40 -24 80 0 Z"/><path d="M470 170 q40 -22 90 0 Z"/><path d="M60 300 q30 -18 70 0 Z"/></g>' +
  // sea
  '<path d="M0 0 L600 0 L600 48 C 480 52, 420 60, 380 62 C 340 66, 260 66, 220 62 C 180 58, 100 50, 0 46 Z" fill="#2f7fbf"/>' +
  // delta farmland
  '<path d="M300 152 L200 62 C 250 68, 350 68, 400 62 Z" fill="#5f9a3a"/>' +
  // valley farmland strip
  '<path d="M290 152 C 282 200, 300 250, 292 330 L312 330 C 320 250, 302 200, 312 152 Z" fill="#5f9a3a"/>' +
  // lake nasser
  '<path d="M296 336 C 286 360, 262 380, 240 420 L310 420 C 318 392, 316 362, 306 336 Z" fill="#3d8fc6"/>' +
  // river and distributaries
  '<path d="M301 336 C 306 280, 296 220, 304 152" fill="none" stroke="#1f6fb2" stroke-width="6"/>' +
  '<g fill="none" stroke="#1f6fb2" stroke-width="4"><path d="M302 152 C 280 120, 250 90, 226 64"/><path d="M302 152 C 320 120, 350 90, 372 64"/></g>' +
  '<g fill="none" stroke="#1f6fb2" stroke-width="2"><path d="M290 132 C 290 110, 292 90, 296 66"/><path d="M262 104 C 254 90, 248 80, 244 66"/></g>' +
  // dam
  '<rect x="284" y="330" width="34" height="8" fill="#4b5563"/>' +
  // Cairo
  '<circle cx="304" cy="156" r="6" fill="#b42318" stroke="#fff" stroke-width="2"/><text x="318" y="168" font-size="13" font-weight="700" fill="#11243b">Cairo</text>' +
  '<text x="324" y="300" font-size="12" font-style="italic" fill="#11243b">River Nile</text>' +
  // pyramids
  '<g fill="#c49a45"><path d="M246 176 L258 158 L270 176 Z"/><path d="M262 176 L270 164 L278 176 Z"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="466" y1="96" x2="350" y2="96"/><line x1="160" y1="104" x2="256" y2="94"/><line x1="404" y1="218" x2="312" y2="220"/><line x1="404" y1="320" x2="318" y2="334"/><line x1="200" y1="368" x2="282" y2="380"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.egypt = {
    id: 'egypt',
    name: 'Egypt',
    short: 'Egypt',
    country: 'Egypt',
    gateway: 'Cairo',
    lonlat: [31.2, 27],
    locator: { box: [24.5, 37.5, 21, 32.5], rivers: [[[31.4, 21.0], [32.0, 22.0], [32.9, 24.09], [32.64, 25.69], [31.9, 26.3], [31.18, 27.18], [30.75, 28.1], [31.24, 30.04], [30.42, 31.45]], [[31.24, 30.04], [31.82, 31.45]]], lakes: [[[32.9, 23.95], [33.15, 23.4], [32.6, 22.6], [31.75, 21.8], [31.35, 21.9], [31.95, 22.65], [32.6, 23.5]]], places: [['Cairo', 31.24, 30.04, 'r'], ['Luxor', 32.64, 25.69, 'r'], ['Aswan', 32.9, 24.09, 'r'], ['Alexandria', 29.92, 31.2, 'l'], ['Red Sea', 35.6, 25.0, 'a'], ['Western Desert', 27.6, 26.0, 'a']] },
    stamp: { colour: '#ca8a04', icon: '🐫' },
    transport: { name: 'Nile felucca', verb: 'Sail', emoji: '⛵' },
    scene: 'nile',
    photo: { file: 'Nile River, Feluccas, Aswan, Egypt.jpg', alt: 'White-sailed feluccas on the River Nile at Aswan, with granite rocks and palm trees on the banks', author: 'Vyacheslav Argenberg', licence: 'CC BY 4.0', licenceUrl: 'https://creativecommons.org/licenses/by/4.0/' },
    intro: {
      ks3: 'Welcome to Egypt! A thin green ribbon of farmland follows the River Nile through one of the driest deserts on Earth. Hop on a felucca, a traditional sailing boat, and travel from the great dam at Aswan to the pyramids near Cairo.',
      adv: 'Sail the Nile from Aswan to Cairo. This expedition covers population distribution, a hot desert climate, the costs and benefits of the Aswan High Dam, water conflict over the Nile, urban growth in Cairo, and Egypt’s ancient and living culture.'
    },
    facts: ['About 95% of Egyptians live on about 5% of the land, close to the Nile.', 'Cairo gets only about 20 mm of rain in a whole year.', 'The Great Pyramid is the only one of the Seven Wonders of the Ancient World still standing.'],
    climate: {
      place: 'Cairo, Egypt', source: 'Long-term averages (CRU / Met Office)', lat: '30°N',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      rmax: 20, rstep: 5,
      temp: [13.5, 15.0, 17.5, 21.5, 24.5, 27.5, 28.0, 28.0, 26.5, 23.5, 19.0, 15.5],
      rain: [5, 3, 2, 1, 1, 0, 0, 0, 0, 1, 3, 4]
    },
    diagrams: { nile: NILE_SVG },
    stations: [
      {
        id: 'river', title: 'The gift of the Nile', icon: '🌾',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'nile', prompt: 'Label the River Nile in Egypt.',
              spots: [{ x: 50, y: 5, a: 'Mediterranean Sea' }, { x: 84, y: 23, a: 'Delta' }, { x: 14, y: 50, a: 'Desert' }, { x: 80, y: 52, a: 'Farmland' }, { x: 80, y: 76, a: 'Dam' }, { x: 22, y: 88, a: 'Reservoir' }],
              extra: [],
              explain: 'Farmland hugs the river and fans out across the delta, where the Nile reaches the sea. Everywhere else is desert. The dam at Aswan holds back a huge reservoir, Lake Nasser.' },
            { type: 'mcq', q: 'Almost all Egyptians live close to the Nile. Why?', options: ['It provides water for farming, drinking and transport', 'The land near the river is cooler than anywhere else in Africa', 'It is the law that people must live there', 'The desert is too crowded'], answer: 0,
              explain: 'In a country with almost no rain, the Nile is the source of life. About 95% of people live on about 5% of the land.' },
            { type: 'mcq', q: 'Egypt gets almost no rain. Where does the Nile’s water come from?', options: ['Rain in the highlands of East Africa', 'Melting glaciers', 'The Mediterranean Sea', 'Underground caves beneath the Sahara that fill up every year'], answer: 0,
              explain: 'Most of the water comes from summer rain on the Ethiopian Highlands (the Blue Nile), with more from Lake Victoria (the White Nile).' }
          ],
          adv: [
            { type: 'label', diagram: 'nile', prompt: 'Label the Nile. One label does not belong.',
              spots: [{ x: 50, y: 5, a: 'Mediterranean Sea' }, { x: 84, y: 23, a: 'Delta' }, { x: 20, y: 24, a: 'Distributary' }, { x: 80, y: 52, a: 'Irrigated floodplain' }, { x: 80, y: 76, a: 'Aswan High Dam' }, { x: 22, y: 88, a: 'Lake Nasser' }],
              extra: ['Tributary'],
              explain: 'In Egypt the Nile has no tributaries; it gains no water at all, and loses water to evaporation and irrigation. In the delta it splits into distributaries.' },
            { type: 'mcq', q: 'The Nile flows over 1,000 km through Egypt without a single tributary. What happens to its flow?', options: ['It falls, through evaporation and irrigation', 'It rises steadily because of groundwater from the desert', 'It stays exactly the same from Aswan to the sea', 'It doubles, because of winter rain on the Mediterranean coast'], answer: 0,
              explain: 'An exotic river flows from a wet area through a dry one, so it loses water downstream.' },
            { type: 'mcq', q: 'Which best describes Egypt’s population distribution?', options: ['Linear and clustered along the Nile, densest in the delta', 'Evenly spread across the whole country', 'Mostly in small oasis towns scattered evenly across the whole of the Western Desert', 'Concentrated on the Red Sea coast'], answer: 0,
              explain: 'Population density in the Nile valley and delta is among the highest in the world, while most of the country is almost empty.' }
          ]
        }
      },
      {
        id: 'climate', title: 'A hot desert climate', icon: '☀️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which months are the hottest in Cairo?', options: ['July and August', 'January and February', 'March and April', 'November and December'], answer: 0,
              explain: 'July and August average about 28°C, and days are often much hotter.' },
            { type: 'mcq', graph: true, q: 'About how much rain falls in Cairo in a whole year?', options: ['About 20 mm', 'About 200 mm', 'About 2,000 mm', 'About 1,000 mm'], answer: 0,
              explain: 'Adding the bars gives about 20 mm, less rain in a year than London gets in a typical week or two of winter.' },
            { type: 'mcq', q: 'What kind of climate does Cairo have?', options: ['Hot desert', 'Tropical rainforest', 'Polar', 'Temperate maritime, like the UK, with rain in every season'], answer: 0,
              explain: 'Very low rainfall and hot summers make this a hot desert climate.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Cairo (°C).', answer: 14.5, tol: 0.5, unit: '°C',
              explain: 'Hottest month (28°C) minus coolest month (13.5°C) = 14.5°C.' },
            { type: 'mcq', q: 'Why does Cairo, at 30°N, receive so little rain?', options: ['Sinking air creates high pressure, so clouds rarely form', 'It is too far from any sea for moisture to arrive', 'Mountains to the west of the city block all the rain-bearing winds from the Atlantic', 'The Nile absorbs the moisture from the air'], answer: 0,
              explain: 'Air rising at the Equator descends around 20–30° north and south (the Hadley cell). Sinking air warms and dries, creating the world’s great hot deserts.' },
            { type: 'mcq', graph: true, q: 'Cairo’s small amount of rain falls mostly in winter. Why?', options: ['Occasional winter storms from the Mediterranean', 'The ITCZ moves over Cairo in January', 'Monsoon winds from India arrive in winter and bring heavy rain across the Middle East', 'Snow melts in the Sahara in winter'], answer: 0,
              explain: 'Cairo is on the southern edge of the Mediterranean climate zone, so the odd winter storm brings a little rain.' }
          ]
        }
      },
      {
        id: 'dam', title: 'The Aswan High Dam', icon: '🏗️',
        tasks: {
          ks3: [
            { type: 'sort', q: 'Sort the effects of the Aswan High Dam (completed 1970).', bins: ['Benefit', 'Problem'],
              items: [['Hydro-electric power', 0], ['No more damaging floods', 0], ['Water for farming all year round', 0], ['Fertile silt trapped behind the dam', 1], ['The delta coastline is eroding', 1], ['Nubian villages flooded by the lake', 1]],
              explain: 'The dam controls the river, but the silt that once fertilised fields and built up the delta is now trapped in Lake Nasser.' },
            { type: 'mcq', q: 'Culture: the giant temples of Abu Simbel were going to be flooded by Lake Nasser. What happened?', options: ['They were cut up and moved to higher ground', 'They were left to sink beneath the waters of the new lake for ever', 'They were copied in plastic', 'They were shipped to a museum in London'], answer: 0,
              explain: 'In the 1960s a huge UNESCO campaign cut the temples into blocks and rebuilt them above the water. It inspired the idea of World Heritage Sites.' },
            { type: 'mcq', q: 'Before the dam, the Nile flooded every year. Why did farmers welcome the flood?', options: ['It spread fertile silt over their fields', 'It washed away all the pests and weeds from their fields for ever', 'It brought fish into their houses', 'It was cooler than the summer heat'], answer: 0,
              explain: 'For thousands of years the flood renewed the soil. Ancient Egypt’s calendar was even built around it.' }
          ],
          adv: [
            { type: 'mcq', q: 'Year-round irrigation and high evaporation have caused which soil problem?', options: ['Salinisation', 'Leaching', 'Podzolisation', 'Laterisation'], answer: 0,
              explain: 'Without the annual flood to flush the soil, salts left behind as water evaporates build up and reduce yields. Drainage systems help.' },
            { type: 'mcq', q: 'Why is the Grand Ethiopian Renaissance Dam (GERD) a source of tension?', options: ['Egypt fears less Nile water will reach it, especially in drought years', 'It will flood the pyramids of Giza', 'Ethiopia plans to divert the Nile into the Red Sea, away from Sudan and Egypt', 'It blocks ships travelling to the Suez Canal'], answer: 0,
              explain: 'Ethiopia needs electricity for development; Egypt depends on the Nile for almost all its water. Agreements on filling and releases are key.' },
            { type: 'mcq', q: 'The delta is shrinking in places as the sea advances. Which two factors are most responsible?', options: ['Silt trapped by the dam and rising sea level', 'More rainfall in the delta and stronger winds blowing from the sea', 'Tourism and fishing', 'Earthquakes and volcanoes'], answer: 0,
              explain: 'With little new sediment and land also sinking, the low-lying delta, home to tens of millions of people, is very vulnerable.' }
          ]
        }
      },
      {
        id: 'people', title: 'Cairo, pyramids and people', icon: '🔺',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: the Pyramids of Giza were built about 4,500 years ago. What were they?', options: ['Tombs for pharaohs', 'Royal palaces', 'Grain stores', 'Temples for the river god, used for festivals every year'], answer: 0,
              explain: 'The pyramids were tombs for kings. The Great Pyramid was the tallest building on Earth for over 3,800 years.' },
            { type: 'mcq', q: 'Culture: which language do most Egyptians speak today?', options: ['Arabic', 'English', 'French', 'Ancient Egyptian, written in hieroglyphs'], answer: 0,
              explain: 'Egyptian Arabic is spoken across the country. Hieroglyphs were used thousands of years ago.' },
            { type: 'mcq', q: 'Cairo has over 20 million people. Why is building new homes on its edge a problem?', options: ['It covers some of Egypt’s scarce farmland', 'The ground there is too cold', 'Nobody wants to live close to the pyramids or the tourist areas', 'The houses keep blowing away'], answer: 0,
              explain: 'Every field lost to buildings is hard to replace, because almost all fertile land is in the valley and delta.' }
          ],
          adv: [
            { type: 'mcq', q: 'Egypt is building a New Administrative Capital in the desert east of Cairo. What is one main aim?', options: ['To relieve congestion and overcrowding in Cairo', 'To be closer to the Mediterranean coast and its cooler summer weather', 'To move the government onto farmland', 'To reduce tourism'], answer: 0,
              explain: 'New desert cities aim to draw people and jobs away from the crowded Nile valley, though critics question their cost and who benefits.' },
            { type: 'sort', q: 'Which of these depend directly on the Nile, and which on other resources?', bins: ['Nile', 'Other resources'],
              items: [['Cotton and rice farming', 0], ['Felucca and cruise-boat tourism', 0], ['Hydro-electric power at Aswan', 0], ['Suez Canal shipping fees', 1], ['Red Sea beach resorts', 1], ['Natural gas fields offshore', 1]],
              explain: 'Egypt’s economy is diversifying, but food and water still depend almost entirely on the Nile.' },
            { type: 'mcq', q: 'The Suez Canal opened in 1869. Why does it matter for world trade?', options: ['Ships between Europe and Asia avoid sailing around Africa', 'It carries fresh water from the Nile across to the Sinai desert for farming', 'It is the only route for oil from the Americas', 'It links the Nile to the Red Sea'], answer: 0,
              explain: 'Around 12% of world trade normally passes through the canal, and fees are a major source of income for Egypt.' }
          ]
        }
      }
    ]
  };
})();
