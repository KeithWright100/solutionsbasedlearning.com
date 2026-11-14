/* Travel the Wright Way — destination: the Panama Canal (locks, world trade, water and climate).
 * Climate data: Panama City, WMO climate normals 1971–2000.
 * Canal facts: opened 15 August 1914; about 82 km long; locks lift ships about 26 m to Gatun Lake (made by damming the Chagres River);
 *   about 200 million litres of fresh water per transit; Gatun and Alhajuela lakes also supply drinking water for about half of Panama;
 *   expanded (Neopanamax) locks opened 26 June 2016 with water-saving basins; 2023–24 drought cut daily transits from about 36 to 24;
 *   run by the USA from 1904 and fully by Panama since 31 December 1999; New York to San Francisco about 9,500 km via the canal vs about 22,500 km round Cape Horn.
 */
(function () {
  var LOCKS_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side view of the Panama Canal from the Caribbean Sea to the Pacific Ocean, showing locks, Gatun Lake and the cut through the hills">' +
  '<rect width="600" height="420" fill="#dff1ff"/>' +
  // hills and continental divide
  '<path d="M60 330 C 150 250, 260 200, 405 120 C 480 190, 530 270, 570 330 Z" fill="#5f9a4a"/>' +
  '<path d="M385 240 L392 150 L418 150 L428 240 Z" fill="#c9a26b"/>' +
  // ground
  '<rect y="345" width="600" height="75" fill="#9b7b4f"/>' +
  // oceans
  '<rect y="330" width="92" height="90" fill="#2f7fbf"/><rect x="540" y="330" width="60" height="90" fill="#2f7fbf"/>' +
  // Gatun locks (3 steps)
  '<rect x="88" y="290" width="116" height="60" fill="#9aa3ad"/>' +
  '<rect x="92" y="300" width="36" height="45" fill="#3d8fc6"/><rect x="128" y="270" width="36" height="75" fill="#3d8fc6"/><rect x="164" y="240" width="36" height="105" fill="#3d8fc6"/>' +
  // Gatun Lake + cut
  '<rect x="200" y="240" width="240" height="105" fill="#4aa3d8"/>' +
  // Pedro Miguel + Miraflores Lake + Miraflores locks
  '<rect x="436" y="236" width="104" height="114" fill="#9aa3ad"/>' +
  '<rect x="440" y="240" width="18" height="105" fill="#4aa3d8"/><rect x="458" y="258" width="34" height="87" fill="#4aa3d8"/>' +
  '<rect x="492" y="282" width="24" height="63" fill="#3d8fc6"/><rect x="516" y="306" width="24" height="39" fill="#3d8fc6"/>' +
  // gates
  '<g fill="#3b434d"><rect x="126" y="268" width="4" height="34"/><rect x="162" y="238" width="4" height="34"/><rect x="198" y="236" width="4" height="10"/><rect x="456" y="236" width="4" height="24"/><rect x="490" y="256" width="4" height="28"/><rect x="514" y="280" width="4" height="28"/><rect x="538" y="304" width="4" height="28"/></g>' +
  // ship on lake
  '<g transform="translate(300 236)"><path d="M-30 -4 L30 -4 L24 6 L-26 6 Z" fill="#b42318"/><rect x="-24" y="-14" width="10" height="10" fill="#2563c9"/><rect x="-14" y="-14" width="10" height="10" fill="#f0b429"/><rect x="-4" y="-14" width="10" height="10" fill="#15803d"/><rect x="14" y="-20" width="10" height="16" fill="#fff" stroke="#11243b"/></g>' +
  // height arrow
  '<g stroke="#11243b" stroke-width="2" fill="#11243b"><line x1="225" y1="248" x2="225" y2="326"/><path d="M219 254 L225 242 L231 254 Z"/><path d="M219 320 L225 332 L231 320 Z"/></g>' +
  '<text x="232" y="330" font-size="13" font-weight="700" fill="#11243b">26 m</text>' +
  '<line x1="0" y1="330" x2="600" y2="330" stroke="#11243b" stroke-width="1" stroke-dasharray="5 4"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="120" y1="228" x2="140" y2="285"/><line x1="420" y1="100" x2="405" y2="160"/><line x1="480" y1="228" x2="505" y2="290"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.panama = {
    id: 'panama',
    name: 'Panama Canal',
    short: 'Panama Canal',
    the: true,
    country: 'Panama',
    gateway: 'Panama City',
    lonlat: [-79.7, 9.1],
    locator: { box: [-81.4, -77.6, 7.4, 10.1], rivers: [[[-79.92, 9.38], [-79.92, 9.27], [-79.85, 9.19], [-79.75, 9.12], [-79.66, 9.05], [-79.58, 8.96]]], places: [['Colón', -79.9, 9.36, 'l'], ['Panama City', -79.52, 8.98, 'r'], ['Caribbean Sea', -79.0, 9.85, 'a'], ['Pacific Ocean', -79.9, 7.75, 'a']] },
    stamp: { colour: '#0369a1', icon: '⚓' },
    transport: { name: 'cargo ship', verb: 'Sail', emoji: '🚢' },
    scene: 'canal',
    photo: { file: 'Panamax ship exiting the Miraflores locks.jpg', alt: 'A large container ship leaving the Miraflores Locks of the Panama Canal', author: 'Dicklyon', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'You arrive in Panama City and climb aboard a giant cargo ship. In about 8 to 10 hours you will cross from one ocean to another, climbing up through locks, across a lake and back down again!',
      adv: 'From Panama City you join a ship transiting the Panama Canal. This expedition covers how the locks work, the canal’s role in world trade, the tropical wet-and-dry climate, and the growing conflict over fresh water.'
    },
    facts: ['The canal is about 82 km long and links the Atlantic and Pacific Oceans.', 'It opened in 1914, and Panama has run it fully since 1999.', 'Every ship that passes through uses about 200 million litres of fresh water.'],
    climate: {
      place: 'Panama City, Panama', source: 'WMO climate normals 1971–2000', lat: '9°N',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [28.1, 28.1, 28.6, 28.9, 28.3, 27.8, 27.8, 27.8, 27.2, 27.0, 27.2, 27.5],
      rain: [29, 10, 13, 65, 225, 235, 169, 220, 254, 331, 252, 105]
    },
    diagrams: { locks: LOCKS_SVG },
    stations: [
      {
        id: 'locks', title: 'Up and over: the locks', icon: '🔒',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'locks', prompt: 'Label this side view of the Panama Canal.',
              spots: [{ x: 14, y: 92, a: 'Caribbean Sea' }, { x: 86, y: 92, a: 'Pacific Ocean' }, { x: 20, y: 52, a: 'Locks' }, { x: 46, y: 72, a: 'Gatun Lake' }, { x: 70, y: 20, a: 'Cut through hills' }],
              extra: [],
              explain: 'Ships enter from one ocean, are lifted up by locks to Gatun Lake, cross the lake and a cutting through the hills, then are lowered back to sea level on the other side.' },
            { type: 'mcq', q: 'Why does the canal need locks?', options: ['The land in the middle is higher, so ships must be lifted and lowered', 'The Pacific Ocean is about 26 m higher than the Atlantic, so ships must climb', 'To stop sea water flowing into Gatun Lake', 'To slow ships down'], answer: 0,
              explain: 'Digging a sea-level canal through the hills was too difficult, so the builders used locks to lift ships about 26 m up to a lake.' },
            { type: 'number', q: 'Look at the diagram. How many metres above sea level is Gatun Lake?', answer: 26, tol: 0, unit: 'm',
              explain: 'Gatun Lake is about 26 m above sea level. The locks lift ships up to it in three steps.' },
            { type: 'mcq', q: 'Gatun Lake is not natural. How was it made?', options: ['A dam was built across the Chagres River', 'A volcanic crater filled with rainwater over thousands of years', 'A glacier melted', 'The sea flooded the land'], answer: 0,
              explain: 'When it was built, Gatun Lake was one of the largest artificial lakes in the world. Rain in the rainforest keeps it full.' }
          ],
          adv: [
            { type: 'label', diagram: 'locks', prompt: 'Label the side view of the canal. One label does not belong.',
              spots: [{ x: 14, y: 92, a: 'Caribbean Sea' }, { x: 86, y: 92, a: 'Pacific Ocean' }, { x: 20, y: 52, a: 'Gatun Locks' }, { x: 46, y: 72, a: 'Gatun Lake' }, { x: 70, y: 20, a: 'Continental divide' }, { x: 80, y: 52, a: 'Miraflores Locks' }],
              extra: ['Glacial trough'],
              explain: 'There are no glaciers here. Locks at each end raise ships to Gatun Lake, and the Culebra Cut crosses the continental divide, the watershed between Atlantic and Pacific drainage.' },
            { type: 'number', q: 'The Gatun Locks lift a ship 26 m in three equal steps. What is the lift of each step, to 1 decimal place?', answer: 8.7, tol: 0.1, unit: 'm',
              explain: '26 ÷ 3 = 8.7 m per chamber.' },
            { type: 'mcq', q: 'Each ship uses about 200 million litres of fresh water from Gatun Lake. Where does that water go?', options: ['It flows out to sea each time a lock empties', 'It is pumped back up to the lake by large electric pumps after each ship passes', 'It evaporates inside the locks', 'It is drunk by the crew'], answer: 0,
              explain: 'The locks work by gravity. Every time a chamber is lowered, lake water drains towards the ocean and is lost.' },
            { type: 'mcq', q: 'The larger Neopanamax locks, opened in 2016, have water-saving basins. Why were they important?', options: ['They reuse about 60% of the water each time', 'They let ships pass through faster, so less water evaporates from the lake', 'They turn salt water into fresh water', 'They store cargo'], answer: 0,
              explain: 'Bigger locks would have used much more water. Side basins store and reuse most of it, helping to protect the lake.' }
          ]
        }
      },
      {
        id: 'trade', title: 'A shortcut for world trade', icon: '🌐',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Which two oceans does the Panama Canal connect?', options: ['Atlantic and Pacific', 'Indian and Pacific', 'Arctic and Atlantic', 'Caribbean and Indian'], answer: 0,
              explain: 'The Caribbean Sea is part of the Atlantic Ocean, so the canal links the Atlantic and the Pacific.' },
            { type: 'number', q: 'A ship sailing from New York to San Francisco travels about 9,500 km through the canal, or about 22,500 km around South America. How many kilometres does the canal save?', answer: 13000, tol: 0, unit: 'km',
              explain: '22,500 − 9,500 = 13,000 km, saving many days at sea and lots of fuel.' },
            { type: 'sort', q: 'Sort these goods by where they mostly come from before passing through the canal.', bins: ['From Asia going to the USA east coast', 'From the USA going to Asia'],
              items: [['Electronics', 0], ['Clothes and toys', 0], ['Car parts', 0], ['Soya beans and grain', 1], ['Natural gas', 1]],
              explain: 'Manufactured goods from factories in Asia travel east; farm products and energy from the USA travel west to Asia.' }
          ],
          adv: [
            { type: 'mcq', q: 'About what share of world seaborne trade passes through the Panama Canal?', options: ['About 5%', 'About 50%', 'About 0.01%', 'About 90%'], answer: 0,
              explain: 'Around 5% of world trade uses the canal, with the USA, China and Japan among its biggest users.' },
            { type: 'number', q: 'In the 2023–24 drought, daily transits were cut from about 36 to 24. What percentage reduction is this?', answer: 33, tol: 1, unit: '%',
              explain: '(36 − 24) ÷ 36 × 100 = 33%. Queues of ships built up and some companies sent goods by other routes.' },
            { type: 'mcq', q: 'The canal is called a “chokepoint”. What does this mean?', options: ['A narrow route that much trade must use, so disruption has global effects', 'A place where all ships are inspected for illegal goods before entering the Pacific', 'A port that charges no fees', 'A canal with no locks'], answer: 0,
              explain: 'Other chokepoints include the Suez Canal and the Strait of Malacca. A blockage pushes up shipping costs and prices worldwide.' },
            { type: 'sort', q: 'Classify these responses to the drought.', bins: ['Short-term', 'Long-term'],
              items: [['Limit the number of ships each day', 0], ['Make ships carry less cargo so they sit higher', 0], ['Auction extra transit slots', 0], ['Build a new reservoir to store more water', 1], ['Make water-saving basins in new locks', 1]],
              explain: 'Short-term measures ration water now; long-term ones increase storage or reduce how much is used.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Rainy season, full lakes', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the driest month in Panama City?', options: ['February', 'October', 'June', 'September'], answer: 0,
              explain: 'February has the shortest bar, only about 10 mm.' },
            { type: 'mcq', graph: true, q: 'Which is the wettest month?', options: ['October', 'February', 'April', 'December'], answer: 0,
              explain: 'October has the tallest bar, about 331 mm.' },
            { type: 'mcq', graph: true, q: 'Describe the temperature in Panama City.', options: ['Hot all year, about 27–29°C', 'Freezing in winter', 'Warm in summer, cold in winter', 'Cooler in March than October'], answer: 0,
              explain: 'Near the Equator the sun is high all year, so temperatures barely change.' },
            { type: 'mcq', q: 'Why is the rainy season so important for the canal?', options: ['Rain refills Gatun Lake, which supplies the locks', 'Rain makes the ships float higher, so they can carry more cargo through the locks', 'Rain cleans the ships', 'It is not important'], answer: 0,
              explain: 'If the rainy season is weak, lake levels fall and fewer ships can pass.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Panama City (mm).', answer: 1908, tol: 10, unit: 'mm',
              explain: 'Adding all twelve months gives about 1,908 mm.' },
            { type: 'mcq', graph: true, q: 'What causes the rainy season from May to November?', options: ['The ITCZ moves north over Panama, bringing storms', 'Cold fronts from Canada sweep south across Central America every few days', 'Monsoon winds from India', 'Snowmelt from the Andes'], answer: 0,
              explain: 'As the overhead sun shifts north, the ITCZ follows it. From December to April, steady trade winds bring drier conditions to the Pacific side.' },
            { type: 'mcq', q: 'Colón, on the Caribbean side, gets well over 3,000 mm a year, much more than Panama City. Why?', options: ['Moist trade winds blow onshore and rise over the hills', 'Colón is at a much higher altitude, so the air is cooler and holds less water', 'Colón is further from the Equator', 'The Pacific is colder than the Caribbean'], answer: 0,
              explain: 'The Caribbean coast is windward, so it gets rain even in the “dry” season; the Pacific side is partly sheltered.' },
            { type: 'mcq', q: 'El Niño years often bring drought to Panama. What happened in 2023–24?', options: ['A very dry rainy season lowered the lake, so transits were cut', 'Hurricanes flooded the canal and closed it for most of the year', 'The canal froze', 'Nothing changed'], answer: 0,
              explain: 'Low rainfall during the 2023 El Niño meant Gatun Lake dropped, and the authority restricted ship numbers and how deep they could sit in the water.' }
          ]
        }
      },
      {
        id: 'people', title: 'People, water and work', icon: '👷',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Which country built the canal and ran it until 1999?', options: ['The United States', 'Brazil', 'The United Kingdom', 'China'], answer: 0,
              explain: 'The USA built and controlled the canal for most of the 20th century. Panama took full control on 31 December 1999.' },
            { type: 'mcq', q: 'Gatun Lake is used by the canal. What else does it supply?', options: ['Drinking water for about half of Panama', 'Salt for cooking', 'Oil for ships', 'Ice for the fishing industry along the Pacific coast'], answer: 0,
              explain: 'The same lakes provide drinking water, so in a drought people and ships compete for the same water.' },
            { type: 'sort', q: 'Sort these Panamanian jobs into economic sectors.', bins: ['Primary', 'Tertiary'],
              items: [['Banana farming', 0], ['Fishing', 0], ['Rice farming', 0], ['Canal pilot', 1], ['Banking in Panama City', 1], ['Tour guide', 1]],
              explain: 'Primary jobs take raw materials from nature. Tertiary jobs provide services, and the canal makes Panama a hub for shipping, banking and trade.' },
            { type: 'mcq', q: 'Culture: the Guna people live on the San Blas islands off Panama’s Caribbean coast. They are famous for molas. What are molas?', options: ['Colourful cloth panels made by layering and cutting fabric', 'Carved wooden canoes used for fishing between the islands', 'Canal locks', 'Rice dishes'], answer: 0,
              explain: 'Guna women sew molas into their blouses. The Guna govern their own territory, Guna Yala, and manage tourism there.' }
          ],
          adv: [
            { type: 'mcq', q: 'Panama’s economy grew quickly in the 2000s and 2010s. Why is the canal so important to it?', options: ['Tolls, ports, logistics and banking bring income and jobs', 'The canal is mainly used for tourist cruises, which bring in most of the money', 'It allows Panama to export snow', 'It has no economic effect'], answer: 0,
              explain: 'The canal pays billions of US dollars a year to the government, and a cluster of shipping and finance businesses has grown around it.' },
            { type: 'mcq', q: 'To secure water, the canal authority plans a new reservoir on the Río Indio. What is the main conflict?', options: ['It would protect canal water, but rural families would lose their land', 'It would flood Panama City and force millions of people to move to Colón', 'It would block ships', 'It would use sea water'], answer: 0,
              explain: 'Large reservoirs often bring national economic benefits but local costs. Who should benefit, and who should pay, is a key geographical question.' },
            { type: 'mcq', q: 'Which is the best long-term way to make the canal more resilient to climate change?', options: ['More storage, water-saving technology and forest protection', 'Charging higher tolls only, so that fewer ships use the canal and less water is needed', 'Making the canal shallower', 'Clearing rainforest to build ports'], answer: 0,
              explain: 'Forests in the catchment help store water and reduce sediment. Combining approaches is more resilient than relying on one solution.' }
          ]
        }
      }
    ]
  };
})();
