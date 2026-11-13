/* Travel the Wright Way — destination: Hawaii (Kīlauea and the Hawaiian hotspot).
 * Climate data: Hilo International Airport, NOAA 1991–2020 normals (°F and inches, converted to °C and mm).
 * Annual normals (State of Hawaii Data Book 2023, 1991–2020): Hilo 120.39 in, Kahului 16.21 in.
 * Hotspot: Kauaʻi about 5.1 million years old, about 519 km from the hotspot; Pacific plate moves about 10 cm a year to the north-west (USGS).
 * 2018 Kīlauea eruption: began 3 May in Leilani Estates; M6.9 earthquake 4 May; about 700 homes destroyed, over 2,000 people displaced,
 *   about 30 miles of road covered, 875 acres of new land (US National Park Service, USGS HVO).
 */
(function () {
  var HOTSPOT_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a chain of volcanic islands moving over a hotspot">' +
  '<defs><linearGradient id="hwMantle" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9a86a"/><stop offset="1" stop-color="#d9622b"/></linearGradient></defs>' +
  '<rect width="600" height="420" fill="#cfeeff"/>' +
  '<rect y="140" width="600" height="62" fill="#2f7fbf"/>' +
  '<rect y="250" width="600" height="170" fill="url(#hwMantle)"/>' +
  '<rect y="200" width="600" height="50" fill="#8d6e63"/>' +
  // mantle plume
  '<path d="M420 420 C 430 340, 445 290, 455 250 L 485 250 C 495 290, 510 340, 520 420 Z" fill="#ff5722" opacity=".9"/>' +
  '<g class="drip" fill="#ffd166" opacity=".9"><circle cx="470" cy="380" r="6"/><circle cx="462" cy="330" r="5"/><circle cx="476" cy="290" r="4"/></g>' +
  // magma conduit to the active volcano
  '<path d="M466 250 L 468 200 L 470 100" stroke="#ff7a1a" stroke-width="6"/>' +
  // active volcano
  '<path d="M390 202 L 455 102 L 485 102 L 550 202 Z" fill="#4a4440"/><path d="M455 102 L 485 102 L 478 110 L 462 110 Z" fill="#2a2522"/>' +
  '<path d="M470 108 C 480 130, 462 150, 488 170 S 505 190, 512 200" fill="none" stroke="#ff7a1a" stroke-width="5" stroke-linecap="round"/>' +
  '<g class="sway"><circle cx="470" cy="86" r="10" fill="#d8d4d0"/><circle cx="482" cy="72" r="8" fill="#e5e2df"/></g>' +
  // extinct, eroded island
  '<path d="M235 202 L 280 140 L 320 135 L 365 202 Z" fill="#3f8f3a"/><path d="M235 202 L 255 175 L 345 175 L 365 202 Z" fill="#5a4a3e" opacity=".35"/>' +
  // seamount (flat-topped, below sea level)
  '<path d="M60 202 L 100 162 L 140 162 L 180 202 Z" fill="#5a4a3e"/>' +
  // plate movement arrow
  '<g fill="#fff" stroke="#fff"><line x1="380" y1="226" x2="200" y2="226" stroke-width="5"/><path d="M200 216 L 182 226 L 200 236 Z"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="470" y1="56" x2="470" y2="76"/><line x1="300" y1="95" x2="300" y2="134"/><line x1="110" y1="125" x2="118" y2="160"/><line x1="372" y1="360" x2="440" y2="360"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.hawaii = {
    id: 'hawaii',
    name: 'Hawaii',
    short: 'Hawaii',
    country: 'USA',
    gateway: 'Hilo',
    lonlat: [-155.3, 19.4],
    locator: { box: [-160.4, -154.4, 18.7, 22.5], noBase: true, land: [[[-159.79, 22.07], [-159.58, 22.22], [-159.4, 22.23], [-159.29, 21.97], [-159.45, 21.87], [-159.72, 21.95]], [[-158.28, 21.58], [-158.1, 21.6], [-157.97, 21.71], [-157.65, 21.31], [-157.82, 21.25], [-158.1, 21.29], [-158.23, 21.45]], [[-157.31, 21.1], [-156.71, 21.16], [-156.73, 21.06], [-157.25, 21.06]], [[-156.69, 21.03], [-156.52, 20.92], [-156.25, 20.92], [-155.98, 20.73], [-156.1, 20.63], [-156.43, 20.58], [-156.47, 20.78], [-156.64, 20.82]], [[-155.89, 20.27], [-155.58, 20.13], [-155.1, 19.88], [-154.81, 19.5], [-155.0, 19.33], [-155.51, 19.13], [-155.68, 18.91], [-155.92, 19.06], [-155.92, 19.48], [-156.06, 19.73], [-155.83, 20.0]]], places: [['Honolulu', -157.86, 21.31, 'b'], ['Kahului', -156.47, 20.89, 'r'], ['Hilo', -155.09, 19.72, 'r'], ['Kīlauea', -155.29, 19.42, 'b'], ['Mauna Kea', -155.47, 19.82, 'l'], ['Kauaʻi', -159.55, 21.65, 'a'], ['Pacific Ocean', -157.6, 19.15, 'a']] },
    stamp: { colour: '#b8860b', icon: '🌺' },
    transport: { name: 'helicopter', verb: 'Fly', emoji: '🚁' },
    scene: 'heli',
    photo: { file: 'USGS Kīlauea multimediaFile-2062.jpg', alt: 'Channels of glowing lava flowing through forest on Kīlauea, photographed from a helicopter in May 2018', author: 'US Geological Survey', licence: 'Public domain', licenceUrl: 'https://commons.wikimedia.org/wiki/Help:Public_domain' },
    intro: {
      ks3: 'Aloha! You cross the Pacific and land in Hilo on the Big Island of Hawaii. Your helicopter is waiting to fly you over Kīlauea, one of the most active volcanoes on Earth, thousands of kilometres from the nearest plate boundary.',
      adv: 'From Hilo you fly by helicopter over Kīlauea. This expedition covers hotspot volcanism and the Hawaiian–Emperor chain, shield volcanoes and effusive eruptions, the 2018 lower East Rift Zone eruption, and the contrast between windward and leeward climates.'
    },
    facts: ['Hawaii is in the middle of the Pacific plate, far from any plate boundary.', 'Measured from the sea floor, Mauna Kea is over 10,000 m tall, taller than Mount Everest.', 'In 2018 lava from Kīlauea destroyed about 700 homes and added 875 acres of new land to the island.'],
    climate: {
      place: 'Hilo, Hawaii', source: 'NOAA 1991–2020 normals, Hilo Airport', lat: '20°N',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [21.7, 21.7, 22.2, 22.8, 23.3, 23.9, 24.4, 25.0, 25.0, 24.4, 23.3, 22.2],
      rain: [201, 259, 323, 239, 178, 185, 234, 287, 221, 259, 366, 307]
    },
    diagrams: { hotspot: HOTSPOT_SVG },
    stations: [
      {
        id: 'hotspot', title: 'The Hawaiian hotspot', icon: '🔥',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'hotspot', prompt: 'Label this cross-section of the Hawaiian islands.',
              spots: [{ x: 75, y: 10, a: 'Active volcano' }, { x: 50, y: 19, a: 'Extinct volcano' }, { x: 17, y: 26, a: 'Seamount' }, { x: 15, y: 54, a: 'Pacific plate' }, { x: 50, y: 86, a: 'Hotspot' }],
              extra: [],
              explain: 'Hot magma rises from a hotspot deep in the mantle and erupts through the Pacific plate. As the plate moves on, each volcano is carried away from the hotspot, becomes extinct, wears down and finally sinks below the sea as a seamount.' },
            { type: 'mcq', q: 'Hawaii is thousands of kilometres from a plate boundary. Why does it have volcanoes?', options: ['It sits above a hotspot where magma rises from deep in the mantle', 'Two plates are colliding beneath it', 'Earthquakes create the volcanoes', 'The sea is very hot there'], answer: 0,
              explain: 'A hotspot is a fixed place where hot material rises from deep in the mantle. Magma melts its way through the plate above, even in the middle of a plate.' },
            { type: 'mcq', q: 'The Big Island is the youngest Hawaiian island, and the islands get older towards the north-west. Why?', options: ['The Pacific plate moves north-west, carrying older volcanoes away from the hotspot', 'The hotspot moves south-east every year', 'Older islands were built first by people', 'The wind blows islands north-west'], answer: 0,
              explain: 'The hotspot stays roughly still while the plate slides over it, like a sheet of paper moved over a candle. A new volcano forms over the hotspot and the older ones move away.' },
            { type: 'mcq', q: 'A new volcano called Kamaʻehuakanaloa is growing on the sea floor south-east of the Big Island. What might happen to it in the future?', options: ['It could grow tall enough to become a new island', 'It will move towards Japan next year', 'It will sink straight away', 'It will turn into a coral reef tomorrow'], answer: 0,
              explain: 'It sits over the hotspot, so it keeps growing with each eruption. Over many thousands of years it may rise above the sea as the next Hawaiian island.' }
          ],
          adv: [
            { type: 'label', diagram: 'hotspot', prompt: 'Label the cross-section. One label does not belong.',
              spots: [{ x: 75, y: 10, a: 'Active shield volcano' }, { x: 50, y: 19, a: 'Extinct volcano' }, { x: 17, y: 26, a: 'Seamount' }, { x: 15, y: 54, a: 'Pacific plate' }, { x: 50, y: 86, a: 'Mantle plume' }],
              extra: ['Subduction zone'],
              explain: 'There is no subduction here: Hawaii is an intraplate setting. A mantle plume feeds the active volcano, while the plate carries older volcanoes north-west, where they cool, subside and erode into seamounts.' },
            { type: 'number', q: 'Kauaʻi is about 519 km from the hotspot and about 5.1 million years old. Calculate the average speed of the Pacific plate in cm per year. (1 decimal place)', answer: 10.2, tol: 0.3, unit: 'cm/yr',
              explain: '519 km = 51,900,000 cm. 51,900,000 ÷ 5,100,000 years ≈ 10.2 cm a year, close to the measured rate of about 10 cm a year to the north-west.' },
            { type: 'mcq', q: 'The Hawaiian–Emperor chain has a sharp bend, formed about 50 million years ago. What is the most widely accepted explanation?', options: ['The Pacific plate changed direction, possibly with some movement of the hotspot too', 'The hotspot switched off and then restarted', 'A meteorite struck the Pacific', 'Sea level fell by thousands of metres'], answer: 0,
              explain: 'The Emperor seamounts trend north and the Hawaiian chain trends north-west. The bend records a change in plate motion; evidence from the seamounts suggests the hotspot itself also drifted a little.' },
            { type: 'mcq', q: 'Why do older Hawaiian islands become lower and eventually sink below sea level?', options: ['The plate cools and subsides as it moves away from the hotspot, and erosion wears the islands down', 'The lava turns to sand and blows away', 'Sea level is rising by kilometres each year', 'Earthquakes push them down instantly'], answer: 0,
              explain: 'Away from the hotspot the lithosphere cools, becomes denser and subsides. Without new eruptions, waves, rivers and weathering steadily erode the islands.' }
          ]
        }
      },
      {
        id: 'shield', title: 'Shield volcanoes', icon: '🌋',
        tasks: {
          ks3: [
            { type: 'sort', q: 'Sort these features into shield volcanoes (like Kīlauea) and steep composite volcanoes (like Mount Fuji).', bins: ['Shield volcano', 'Composite volcano'],
              items: [['Gentle, wide slopes', 0], ['Runny lava that flows a long way', 0], ['Gentle eruptions of lava', 0], ['Steep, cone-shaped sides', 1], ['Layers of ash and lava', 1], ['Violent, explosive eruptions', 1]],
              explain: 'Runny lava spreads out a long way, building wide volcanoes with gentle slopes. Composite volcanoes have thick, sticky lava and explosive eruptions, building steep cones of ash and lava.' },
            { type: 'mcq', q: 'What kind of lava erupts at Kīlauea?', options: ['Runny basalt lava', 'Thick, sticky lava that hardly moves', 'Only ash and no lava', 'Ice'], answer: 0,
              explain: 'Hawaiian lava is basalt. It is very hot and runny, so it can flow many kilometres, and gas escapes easily instead of exploding.' },
            { type: 'mcq', q: 'Hawaiian has two words for lava: smooth, ropy pāhoehoe and rough, jagged ʻaʻā. Why is pāhoehoe smooth?', options: ['It is hotter and more runny, so a smooth skin forms on top', 'It has been polished by the sea', 'It is made of ash', 'It is colder than ʻaʻā'], answer: 0,
              explain: 'Pāhoehoe is hot and fluid, so a smooth, wrinkled skin forms. As lava cools, loses gas and moves faster down slopes, it can tear into sharp, rubbly ʻaʻā.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these characteristics.', bins: ['Shield volcano (hotspot)', 'Composite volcano (destructive margin)'],
              items: [['Basaltic magma, low silica', 0], ['Low viscosity lava', 0], ['Effusive eruptions, low VEI', 0], ['Andesitic magma, higher silica', 1], ['High viscosity, gas trapped', 1], ['Pyroclastic flows', 1]],
              explain: 'Low-silica basalt has low viscosity, so gases escape and eruptions are effusive. Higher-silica andesitic magma at subduction zones traps gas, giving explosive eruptions and pyroclastic flows.' },
            { type: 'mcq', q: 'Why are eruptions at Kīlauea usually effusive rather than explosive?', options: ['Low-viscosity basalt lets gases escape gradually instead of building up pressure', 'There is no gas in Hawaiian magma at all', 'The sea cools the magma before it can explode', 'Hotspot magma has a very high silica content'], answer: 0,
              explain: 'Viscosity, controlled mainly by silica content and temperature, decides whether gas can escape. Hot, low-silica basalt lets bubbles rise and escape, so lava flows out instead of shattering.' },
            { type: 'mcq', q: 'Mauna Kea is 4,207 m above sea level but over 10,000 m tall from its base on the sea floor. What does this show about shield volcanoes?', options: ['Huge volumes of lava over long periods can build enormous, broad volcanoes from the deep ocean floor', 'They are always taller than fold mountains above sea level', 'They form only on land', 'They grow from the top down'], answer: 0,
              explain: 'Hawaiian shields are built by countless lava flows over hundreds of thousands of years, starting on sea floor about 5,000 m deep.' }
          ]
        }
      },
      {
        id: 'eruption', title: 'Living with lava: 2018', icon: '🏘️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'In May 2018 cracks opened in a housing area called Leilani Estates on Kīlauea, and lava poured out for three months. About how many homes were destroyed?', options: ['About 700', 'About 7', 'About 70,000', 'None'], answer: 0,
              explain: 'Lava flows destroyed about 700 homes, covered about 30 miles (nearly 50 km) of road and forced over 2,000 people from their homes.' },
            { type: 'mcq', q: 'Lava flowed into the sea during the eruption. What happened to the coastline?', options: ['About 875 acres of new land were added to the island', 'The island shrank', 'Nothing changed', 'The beaches turned to ice'], answer: 0,
              explain: 'When lava reaches the sea it cools and hardens into new rock, building new land out into the ocean.' },
            { type: 'sort', q: 'Sort these effects of the 2018 eruption.', bins: ['Effect on people', 'Effect on the environment'],
              items: [['Homes destroyed', 0], ['Roads cut off', 0], ['Families had to move away', 0], ['Forest burned', 1], ['New land formed at the coast', 1], ['Volcanic gas polluted the air', 1]],
              explain: 'Lava destroyed homes and roads and forced people to move. It also burned forest, built new land, and released sulphur dioxide that formed volcanic smog (“vog”).' },
            { type: 'mcq', q: 'Scientists at the Hawaiian Volcano Observatory saw hundreds of small earthquakes before the eruption began. How did this help?', options: ['People were warned and evacuated before lava reached their homes', 'It stopped the eruption', 'It made the lava cooler', 'It moved the lava somewhere else'], answer: 0,
              explain: 'Monitoring earthquakes, ground movement and gases gave warning that magma was moving, so officials could order evacuations.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these impacts of the 2018 lower East Rift Zone eruption.', bins: ['Social', 'Economic', 'Environmental'],
              items: [['Over 2,000 residents displaced', 0], ['Communities split up as subdivisions were buried', 0], ['About 700 homes destroyed', 1], ['About 30 miles of road covered, cutting access', 1], ['875 acres of new land added', 2], ['Sulphur dioxide emissions causing vog', 2]],
              explain: 'Impacts cross categories, but displacement affects people (social), loss of property and infrastructure is economic, and new land and gas emissions are environmental.' },
            { type: 'mcq', q: 'Leilani Estates lies in a high lava-hazard zone, yet people chose to live there. Which is the best explanation?', options: ['Land was cheaper, and the perceived risk was low because eruptions had spared the area for decades', 'Lava never reaches housing areas', 'The government required people to live there', 'High-hazard zones have better insurance'], answer: 0,
              explain: 'Lower land prices, attachment to place and the long gap since the last flows nearby (such as the 1960 Kapoho eruption) reduced the perceived risk. This is a classic risk-perception problem.' },
            { type: 'mcq', q: 'Lava destroyed hundreds of homes in 2018, but the eruption was not a major disaster for loss of life. Why?', options: ['Slow-moving lava flows and good monitoring meant people could evacuate in time', 'Nobody lived on the Big Island', 'The lava was not hot enough to harm people', 'Lava only flows at night'], answer: 0,
              explain: 'Lava flows usually advance slowly enough to outrun, and HVO’s monitoring of earthquakes, ground deformation and gases gave warning. Property cannot move, but people can.' },
            { type: 'mcq', q: 'During the eruption the summit of Kīlauea collapsed, with a magnitude 6.9 earthquake on 4 May. What caused the summit to collapse?', options: ['Magma drained from beneath the summit towards the East Rift Zone, removing support', 'A meteorite impact', 'Heavy rain eroded the summit', 'Mining under the volcano'], answer: 0,
              explain: 'As magma moved down-rift and erupted in lower Puna, the summit reservoir emptied and the crater floor repeatedly collapsed, enlarging Kīlauea’s caldera.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Windward and leeward', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Hilo?', options: ['November', 'May', 'January', 'September'], answer: 0,
              explain: 'November has the tallest bar: about 366 mm. Every month gets well over 150 mm.' },
            { type: 'mcq', graph: true, q: 'What does the temperature line show about Hilo?', options: ['It is warm all year, between about 22°C and 25°C', 'It has freezing winters', 'It is hot in winter and cold in summer', 'Temperatures change by 30°C during the year'], answer: 0,
              explain: 'Hilo is in the tropics and surrounded by ocean, so temperatures barely change through the year.' },
            { type: 'mcq', q: 'Hilo gets about 3,000 mm of rain a year. Kahului, in a sheltered lowland on the island of Maui, gets about 410 mm. Why is Hilo so much wetter?', options: ['Moist trade winds from the north-east rise over the mountains behind Hilo and drop their rain', 'Hilo is closer to the Equator by thousands of kilometres', 'Volcanoes make it rain', 'Hilo is in a desert'], answer: 0,
              explain: 'Hilo faces the trade winds (the windward side). As moist ocean air is forced up the slopes of Mauna Kea and Mauna Loa, it cools and forms clouds and rain.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Hilo (°C).', answer: 3.3, tol: 0.1, unit: '°C',
              explain: 'Warmest months 25.0°C (August and September) − coolest 21.7°C (January and February) = 3.3°C, a typical tropical maritime range.' },
            { type: 'number', q: 'Using 1991–2020 normals, Hilo receives 120.39 inches of rain a year and Kahului 16.21 inches. How many times wetter is Hilo? (1 decimal place)', answer: 7.4, tol: 0.1, unit: 'times',
              explain: '120.39 ÷ 16.21 = 7.4. Kahului sits in the rain shadow of Maui’s mountains, while Hilo faces the moist north-east trade winds.' },
            { type: 'mcq', q: 'On the Big Island, rainfall is very high on the windward slopes but the summits of Mauna Kea and Mauna Loa are dry. Why?', options: ['A trade-wind inversion at around 2,000 m traps moist air below it, so the high summits sit above most clouds', 'The summits are too cold for clouds', 'Volcanic heat evaporates all the rain', 'The summits are in the Southern Hemisphere'], answer: 0,
              explain: 'Sinking air in the subtropical high creates a temperature inversion that caps rising air. Clouds pile up on the slopes below it, leaving the high summits dry and clear, which is why Mauna Kea is a world-class site for telescopes.' }
          ]
        }
      },
      {
        id: 'tourism', title: 'Farming, tourism and island life', icon: '🏄',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'About how many visitors came to Hawaii in 2024?', options: ['About 9.7 million', 'About 9,700', 'About 970 million', 'About 97'], answer: 0,
              explain: '9,689,113 visitors arrived in 2024, and they spent about $20.7 billion.' },
            { type: 'mcq', q: 'About 1.4 million people live in Hawaii, but about 9.7 million visitors came in 2024. What does this mean?', options: ['There were about 7 visitors for every person who lives there', 'There are more residents than visitors', 'Tourists outnumber residents 100 to 1', 'Nobody lives in Hawaii'], answer: 0,
              explain: 'Tourism is huge compared with the number of residents, so it shapes jobs, roads, housing and the environment.' },
            { type: 'mcq', q: 'For over a hundred years much of Hawaii’s farmland was covered by huge sugar cane and pineapple plantations. Most have now closed. Why?', options: ['It became cheaper to grow these crops in countries with lower land and labour costs', 'Volcanoes destroyed every farm', 'Sugar and pineapples stopped growing in warm places', 'Tourists ate all the crops'], answer: 0,
              explain: 'Land and wages in Hawaii are expensive, so plantations could not compete with growers elsewhere. Much of that land is now used for tourism, housing, diversified farming or left empty.' },
            { type: 'sort', q: 'Sort the effects of tourism on Hawaii.', bins: ['Positive', 'Negative'],
              items: [['Jobs in hotels, restaurants and tours', 0], ['Money spent in local shops', 0], ['Money to look after parks and beaches', 0], ['Crowded beaches and roads', 1], ['Higher house prices and rents for local people', 1], ['Damage to coral reefs from sunscreen and trampling', 1]],
              explain: 'Tourism brings jobs and money, but crowds, higher housing costs and damage to fragile places like reefs are big problems for an island.' },
            { type: 'mcq', q: 'Hawaii’s population has fallen slightly since 2020, mainly because people moved to other US states. What is the main reason?', options: ['Very high housing and living costs', 'There are no jobs at all', 'The weather is too cold', 'The volcanoes cover the whole state'], answer: 0,
              explain: 'Houses and everyday goods cost far more than on the US mainland, because land is limited and most goods must be shipped in. Many families move away to afford a home.' }
          ],
          adv: [
            { type: 'number', q: 'In 2024 Hawaii had 9,689,113 visitor arrivals and a resident population of 1,446,146. How many visitor arrivals were there per resident? (1 decimal place)', answer: 6.7, tol: 0.1, unit: 'per resident',
              explain: '9,689,113 ÷ 1,446,146 = 6.7 visitor arrivals per resident in a year.' },
            { type: 'number', q: 'Visitors spent $20.68 billion in 2024. What was the average spending per visitor, to the nearest dollar? (9,689,113 visitors)', answer: 2134, tol: 10, unit: '$',
              explain: '20,680,000,000 ÷ 9,689,113 ≈ $2,134 per visitor.' },
            { type: 'mcq', q: 'Hawaii now imports most of its food by ship and plane. What is the biggest risk of this?', options: ['Food security: a shipping disruption or disaster could quickly cause shortages', 'Food becomes cheaper than anywhere else', 'There is no risk because the islands are isolated', 'Imports increase the number of farms'], answer: 0,
              explain: 'Being about 3,800 km from the US mainland, the islands rely on regular shipments. Growing more food locally improves resilience and cuts food miles.' },
            { type: 'mcq', q: 'Which best explains why high visitor numbers can push up housing costs for residents?', options: ['Homes are converted to holiday rentals and investors buy property, reducing supply on islands with limited land', 'Tourists build new homes for residents', 'Visitors lower demand for land', 'Hotels are built only on lava fields'], answer: 0,
              explain: 'On small islands land is scarce. When homes become short-term rentals or second homes, fewer are left for local families, so prices and rents rise.' },
            { type: 'mcq', q: 'Which is the best example of managing tourism more sustainably?', options: ['Booking systems that limit daily visitor numbers at popular sites, with fees spent on conservation', 'Building more airports to double visitor numbers', 'Banning all residents from beaches', 'Removing reef protections to allow more boats'], answer: 0,
              explain: 'Limiting numbers at fragile sites and putting fees back into conservation reduces damage while keeping the economic benefits.' }
          ]
        }
      }
    ]
  };
})();
