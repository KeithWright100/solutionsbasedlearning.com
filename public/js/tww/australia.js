/* Travel the Wright Way — destination: the Great Barrier Reef, Australia.
 * Climate data: Cairns Aero, Bureau of Meteorology (BOM), all years of record (1942 onwards).
 * Monthly mean temperature = average of mean maximum and mean minimum.
 */
(function () {
  var REEF_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section from the coast out to the open ocean across a coral reef">' +
  '<rect width="600" height="420" fill="#cfeeff"/>' +
  // sea water
  '<path d="M80 150 L600 150 L600 420 L80 420 Z" fill="#7fd3e6"/>' +
  '<path d="M330 150 L600 150 L600 420 L330 420 Z" fill="#2f7fbf"/>' +
  // land and beach
  '<path d="M0 120 L70 128 L95 150 L110 190 L0 190 Z" fill="#e8d39a"/><path d="M0 60 L60 70 L80 125 L0 125 Z" fill="#3f8f3a"/>' +
  '<g fill="#2f7d32"><circle cx="20" cy="62" r="16"/><circle cx="48" cy="68" r="14"/></g>' +
  // sea floor: shallow lagoon then reef then slope down
  '<path d="M95 150 L110 190 L240 200 L290 175 L320 160 L345 175 L380 300 L440 420 L0 420 L0 190 Z" fill="#e6cf8f"/>' +
  // corals on crest and slope
  '<g fill="#ff8a65"><circle cx="300" cy="168" r="10"/><circle cx="318" cy="162" r="8"/><circle cx="336" cy="172" r="9"/></g>' +
  '<g fill="#ba68c8"><circle cx="352" cy="200" r="9"/><circle cx="362" cy="232" r="8"/></g><g fill="#ffd54f"><circle cx="372" cy="262" r="8"/><circle cx="282" cy="180" r="7"/></g>' +
  '<g fill="#66bb6a"><path d="M200 196 q4 -18 8 0 M214 197 q4 -14 8 0" stroke="#43a047" stroke-width="3" fill="none"/></g>' +
  // breaking waves on crest
  '<g class="sway" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"><path d="M290 146 q10 -10 20 0 q10 -10 20 0"/></g>' +
  // fish
  '<g class="sway s2" fill="#ffb347"><path d="M470 250 q10 -7 20 0 q-10 7 -20 0 Z M490 250 l7 -5 v10 Z"/><path d="M180 175 q8 -5 16 0 q-8 5 -16 0 Z M196 175 l5 -4 v8 Z"/></g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="50" y1="105" x2="60" y2="70"/><line x1="180" y1="165" x2="180" y2="105"/><line x1="315" y1="148" x2="330" y2="85"/><line x1="370" y1="250" x2="430" y2="320"/><line x1="520" y1="200" x2="520" y2="150"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.australia = {
    id: 'australia',
    name: 'Great Barrier Reef',
    the: true,
    short: 'Great Barrier Reef',
    country: 'Australia',
    gateway: 'Cairns',
    lonlat: [147, -18],
    stamp: { colour: '#0f8a83', icon: '🐠' },
    transport: { name: 'dive boat', verb: 'Sail', emoji: '🤿' },
    scene: 'sea',
    photo: { file: 'Aerial View of Great Barrier Reef (Ank Kumar) 04.jpg', alt: 'Turquoise coral reefs in deep blue sea, seen from the air near Cairns', author: 'Ank Kumar', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'You land in Cairns in tropical north Queensland, Australia. Climb aboard the dive boat: you are heading out to the Great Barrier Reef, the largest coral reef system in the world.',
      adv: 'From Cairns you head out across the reef lagoon. This expedition covers how coral reefs form and what they need, Cairns’ tropical wet-dry climate, the threats facing the reef, and how it is managed.'
    },
    facts: ['The reef stretches about 2,300 km along the coast of Queensland.', 'It is made of more than 2,900 individual reefs.', 'It became a UNESCO World Heritage Site in 1981.'],
    climate: {
      place: 'Cairns, Australia', source: 'Bureau of Meteorology, Cairns Aero', lat: '17°S',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [27.7, 27.6, 27.0, 25.6, 23.9, 22.1, 21.6, 22.1, 23.5, 25.2, 26.6, 27.5],
      rain: [405, 438, 422, 202, 92, 46, 33, 27, 34, 47, 88, 194]
    },
    diagrams: { reef: REEF_SVG },
    stations: [
      {
        id: 'reef', title: 'What is a coral reef?', icon: '🪸',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'reef', prompt: 'Label this cross-section from the coast out to the open ocean.',
              spots: [{ x: 10, y: 14, a: 'Coastline' }, { x: 30, y: 23, a: 'Lagoon' }, { x: 56, y: 18, a: 'Reef crest' }, { x: 74, y: 79, a: 'Reef slope' }, { x: 87, y: 33, a: 'Open ocean' }],
              extra: [],
              explain: 'Between the coast and the reef is a calm, shallow lagoon. Waves break on the reef crest. Behind it the reef slope drops away into the deep open ocean.' },
            { type: 'mcq', q: 'What builds a coral reef?', options: ['Tiny animals called coral polyps', 'Seaweed', 'Rocks from volcanoes', 'Sand washed in by rivers'], answer: 0,
              explain: 'Corals are animals. Each polyp builds a hard skeleton of calcium carbonate (limestone), and over thousands of years these build up into reefs.' },
            { type: 'mcq', q: 'Corals have tiny algae living inside them. What do the algae give the coral?', options: ['Food made by photosynthesis, and their colour', 'Protection from sharks', 'Extra salt', 'Warmth at night'], answer: 0,
              explain: 'The algae (zooxanthellae) use sunlight to make food, which they share with the coral. They also give corals their bright colours.' }
          ],
          adv: [
            { type: 'label', diagram: 'reef', prompt: 'Label the cross-section. One label does not belong.',
              spots: [{ x: 10, y: 14, a: 'Coastline' }, { x: 30, y: 23, a: 'Lagoon' }, { x: 56, y: 18, a: 'Reef crest' }, { x: 74, y: 79, a: 'Reef slope' }, { x: 87, y: 33, a: 'Open ocean' }],
              extra: ['Atoll'],
              explain: 'An atoll is a ring of reef around a lagoon, formed where a volcanic island has sunk. This diagram shows a barrier-type reef separated from the coast by a lagoon.' },
            { type: 'mcq', q: 'The relationship between coral polyps and zooxanthellae is described as:', options: ['Symbiotic: both benefit', 'Parasitic: the algae harm the coral', 'Competitive: they fight for light', 'Predatory: the coral eats the algae'], answer: 0,
              explain: 'The algae get shelter and nutrients; the coral gets most of its energy from the algae’s photosynthesis. Both benefit.' },
            { type: 'mcq', q: 'Coral reefs cover a tiny fraction of the ocean floor but hold a huge share of marine species. Which is the best explanation?', options: ['The complex 3D structure provides many habitats and high primary productivity', 'Reef water is very cold and nutrient-rich', 'Few predators live on reefs', 'Reefs are found in deep, dark water'], answer: 0,
              explain: 'Reefs create a maze of niches (caves, branches and crevices), and the coral-algae partnership supports a rich food web even in nutrient-poor tropical water.' }
          ]
        }
      },
      {
        id: 'conditions', title: 'What corals need', icon: '☀️',
        tasks: {
          ks3: [
            { type: 'sort', q: 'Sort these into conditions that are good or bad for coral reefs.', bins: ['Good for corals', 'Bad for corals'],
              items: [['Warm water', 0], ['Clear water', 0], ['Lots of sunlight', 0], ['Muddy water from rivers', 1], ['Very deep, dark water', 1], ['Fresh water from a river mouth', 1]],
              explain: 'Corals need warm, clear, salty, shallow water so the algae get plenty of sunlight. Mud blocks light and fresh water is not salty enough.' },
            { type: 'mcq', q: 'Why do coral reefs only grow in shallow water?', options: ['The algae inside need sunlight to photosynthesise', 'Corals cannot swim', 'Deep water is too salty', 'Sharks live in deep water'], answer: 0,
              explain: 'Light fades quickly with depth. Most reef-building corals grow where sunlight can reach the algae.' },
            { type: 'mcq', q: 'Coral reefs are mostly found between the Tropics. Why?', options: ['The sea is warm enough there all year', 'There are no waves there', 'The water is fresh there', 'It never rains there'], answer: 0,
              explain: 'Reef-building corals need water that stays warm all year, roughly above 18°C, which is found in tropical seas.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these as limiting factors for coral growth, or as factors that help reefs grow.', bins: ['Helps reef growth', 'Limits reef growth'],
              items: [['Water temperature of about 23–29°C', 0], ['Low turbidity (clear water)', 0], ['Normal ocean salinity', 0], ['Sediment from coastal erosion', 1], ['Nutrient-rich farm runoff', 1], ['Water temperature below 18°C', 1], ['Prolonged exposure at low tide', 1]],
              explain: 'Corals thrive in warm, clear, salty, low-nutrient water. Sediment, nutrient pollution, cold water and drying out at low tide all limit growth.' },
            { type: 'mcq', q: 'There are few coral reefs on the west coasts of tropical continents. Why?', options: ['Cold ocean currents and upwelling keep the water too cool', 'The west coasts are too sunny', 'There is too much coral there already', 'The water is too clear'], answer: 0,
              explain: 'Cold currents and upwelling along west coasts (such as Peru or Namibia) lower sea temperatures below what reef corals tolerate.' },
            { type: 'mcq', q: 'Why does extra nitrogen from farm fertiliser harm reefs?', options: ['It feeds algae that smother corals and can trigger crown-of-thorns starfish outbreaks', 'It makes the water too cold', 'It turns sea water fresh', 'It dissolves the reef overnight'], answer: 0,
              explain: 'Nutrient runoff boosts plankton and algae. Fast-growing algae outcompete corals, and more plankton helps crown-of-thorns starfish larvae survive.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Wet and dry seasons', icon: '🌦️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Cairns?', options: ['February', 'August', 'June', 'October'], answer: 0,
              explain: 'February has the tallest bar: about 438 mm.' },
            { type: 'mcq', graph: true, q: 'Which months make up the dry season?', options: ['About May to November', 'About December to March', 'Every month is equally wet', 'Only January'], answer: 0,
              explain: 'From about May to November the bars are short. Most rain falls from December to April.' },
            { type: 'mcq', graph: true, q: 'How is Cairns’ climate different from the Amazon’s?', options: ['It has a clear wet season and dry season, and a cooler winter', 'It is much colder all year', 'It gets no rain at all', 'It is exactly the same'], answer: 0,
              explain: 'Cairns is further from the Equator (17°S), so it has a wet summer and a dry, slightly cooler winter, unlike the Amazon, which is wet all year.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Cairns (°C).', answer: 6.1, tol: 0.2, unit: '°C',
              explain: 'Warmest month 27.7°C (January) − coolest 21.6°C (July) = 6.1°C. That is far bigger than Manaus (1.4°C) because Cairns is further from the Equator.' },
            { type: 'mcq', graph: true, q: 'Which explains Cairns’ wet season from December to March?', options: ['The ITCZ and monsoon move south in the southern summer, bringing moist air and storms', 'Snow melts on nearby mountains', 'Cold currents bring rain from Antarctica', 'The sun is lowest in the sky then'], answer: 0,
              explain: 'In the southern summer the overhead sun, the ITCZ and the north-west monsoon shift south over northern Australia, bringing heavy convectional and monsoon rain.' },
            { type: 'mcq', graph: true, q: 'The wet season is also tropical cyclone season. Why is this a problem for the reef?', options: ['Cyclone waves break corals, and floods carry sediment and nutrients onto reefs', 'Cyclones cool the water too much for fish', 'Cyclones add too much salt', 'Cyclones only affect land'], answer: 0,
              explain: 'Cyclones physically smash reefs, and the heavy rain washes mud and fertiliser from farmland out to sea.' }
          ]
        }
      },
      {
        id: 'threats', title: 'Threats to the reef', icon: '🌡️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'What is coral bleaching?', options: ['Corals turn white when hot water makes them lose their algae', 'People paint the reef white', 'Sand covers the reef', 'Corals grow white flowers in spring'], answer: 0,
              explain: 'When the sea gets too warm, corals push out their algae and turn white. If the heat lasts too long, the corals starve and die.' },
            { type: 'sort', q: 'Sort these threats to the reef into natural and human causes.', bins: ['Mainly natural', 'Caused or made worse by people'],
              items: [['Tropical cyclones', 0], ['Rising sea temperatures from climate change', 1], ['Fertiliser washing off farms', 1], ['Overfishing', 1], ['Damage from boat anchors', 1]],
              explain: 'Cyclones are natural (though climate change may make them stronger). Warming seas, pollution, overfishing and careless boats are caused by people.' },
            { type: 'mcq', q: 'Which animal eats coral and can damage large areas of reef when numbers explode?', options: ['Crown-of-thorns starfish', 'Clownfish', 'Sea turtle', 'Dolphin'], answer: 0,
              explain: 'Crown-of-thorns starfish eat coral polyps. Outbreaks can strip whole reefs.' }
          ],
          adv: [
            { type: 'mcq', q: 'Mass bleaching hit the Great Barrier Reef in 2016, 2017, 2020, 2022 and 2024. What does this pattern suggest?', options: ['Bleaching is becoming more frequent, leaving less time for corals to recover between events', 'Bleaching happens exactly every two years', 'The reef has become immune to heat', 'Bleaching only affects the southern reef'], answer: 0,
              explain: 'Five mass bleaching events in eight years leave little recovery time. Fast-growing corals can take about a decade to recover, and slow-growing ones much longer.' },
            { type: 'mcq', q: 'Ocean acidification is a second threat from rising CO₂. How does it harm corals?', options: ['More acidic water makes it harder to build calcium carbonate skeletons', 'It makes the water too clear', 'It warms the water', 'It adds too many nutrients'], answer: 0,
              explain: 'The ocean absorbs CO₂, forming carbonic acid. This reduces the carbonate available for corals to build and repair their skeletons.' },
            { type: 'mcq', q: 'Which is a positive feedback that makes reef decline worse?', options: ['Dead coral is colonised by algae, which stops new coral larvae settling', 'Bleaching cools the sea', 'Fewer fish means more coral growth', 'Cyclones plant new corals'], answer: 0,
              explain: 'When algae take over dead coral, new corals struggle to settle and grow, so the reef shifts from coral-dominated towards algae-dominated.' }
          ]
        }
      },
      {
        id: 'protect', title: 'Protecting the reef', icon: '🛟',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Parts of the reef are "green zones". What does that mean?', options: ['No fishing or collecting is allowed', 'Only green boats can go there', 'The coral is green', 'Anyone can fish as much as they like'], answer: 0,
              explain: 'Green zones are no-take areas. You can visit, swim and dive, but you cannot fish or take anything.' },
            { type: 'mcq', q: 'In 2004, green zones were increased from less than 5% to about what share of the Marine Park?', options: ['About a third (33%)', 'All of it (100%)', 'About 1%', 'Half of the world’s oceans'], answer: 0,
              explain: 'The 2004 zoning plan increased no-take green zones from under 5% to about 33% of the Marine Park.' },
            { type: 'mcq', q: 'Which is the best way a tourist can help protect the reef?', options: ['Don’t touch or stand on coral, and use reef-friendly tour operators', 'Take a piece of coral home', 'Feed the fish bread', 'Drop the anchor on the coral'], answer: 0,
              explain: 'Touching or kicking coral damages the living polyps. Responsible operators use moorings instead of anchors and teach visitors how to behave.' }
          ],
          adv: [
            { type: 'mcq', q: 'Scientists compared reefs inside and outside no-take zones after the 2004 rezoning. Which finding supports the zoning?', options: ['Coral trout biomass was much higher and crown-of-thorns outbreaks fewer in no-take zones', 'Fish numbers were the same everywhere', 'No-take zones had more pollution', 'Zoning made bleaching stop'], answer: 0,
              explain: 'AIMS monitoring found far more coral trout and fewer crown-of-thorns outbreaks on no-take reefs. Zoning cannot stop bleaching, though, because that is driven by global warming.' },
            { type: 'mcq', q: 'Why can local management alone not save the reef?', options: ['The biggest threat, ocean warming, is caused by global greenhouse gas emissions', 'Local managers have no boats', 'The reef is too small to manage', 'Tourists are the only threat'], answer: 0,
              explain: 'Zoning, water-quality rules and starfish culls build resilience, but only cutting global emissions can tackle marine heatwaves.' },
            { type: 'mcq', q: 'The reef supports tourism and fishing jobs worth billions of dollars a year. Which statement best evaluates this?', options: ['It gives a strong economic reason to protect the reef, but tourism itself must be managed to avoid damage', 'Tourism is the main cause of bleaching', 'Economic value means protection is not needed', 'Tourism has no impact at all'], answer: 0,
              explain: 'A healthy reef is worth more in the long term than one damaged for short-term gain, but visitor numbers, boats and coastal development still need careful management.' }
          ]
        }
      }
    ]
  };
})();
