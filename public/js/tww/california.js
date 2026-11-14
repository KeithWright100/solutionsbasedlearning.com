/* Travel the Wright Way — destination: California (San Andreas Fault, Los Angeles and the Central Valley).
 * Climate data: Los Angeles Downtown (USC), NOAA 1991–2020 normals (°F and inches, converted to °C and mm); annual 14.25 in.
 *   92% of Los Angeles' precipitation falls between 1 November and 30 April.
 * San Andreas Fault: about 1,200 km long; average slip about 20–35 mm a year; 1906 San Francisco earthquake M7.8 (USGS), about 300 miles of rupture.
 * Northridge 1994: M6.7, 57 deaths. Central Valley: about 1% of US farmland, about a quarter of the nation's food and about half of its
 *   fruits, nuts and vegetables (USGS); parts of the San Joaquin Valley sank 8.5 m in the four decades before 1970 (USGS). About 80% of world almonds.
 */
(function () {
  var FAULT_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map of California showing the San Andreas Fault between the Pacific plate and the North American plate">' +
  '<rect width="600" height="420" fill="#4a90d9"/>' +
  // land
  '<path d="M120 0 L600 0 L600 420 L350 420 C 330 380, 300 350, 280 330 C 250 300, 220 250, 190 200 C 160 150, 130 90, 110 40 Z" fill="#e8d8a8"/>' +
  // Pacific plate land strip shading (west of fault)
  '<path d="M150 40 L420 400 L350 420 C 330 380, 300 350, 280 330 C 250 300, 220 250, 190 200 C 160 150, 130 90, 110 40 Z" fill="#d6c48e"/>' +
  // the fault
  '<path d="M150 40 L420 400" stroke="#b42318" stroke-width="5" stroke-dasharray="12 7"/>' +
  // relative motion arrows
  '<g fill="#11243b" stroke="#11243b" stroke-width="5"><line x1="110" y1="300" x2="60" y2="234"/><path d="M50 222 L72 230 L58 244 Z"/><line x1="470" y1="210" x2="520" y2="276"/><path d="M530 288 L508 280 L522 266 Z"/></g>' +
  // cities
  '<g fill="#11243b" stroke="#fff" stroke-width="3"><circle cx="225" cy="120" r="8"/><circle cx="318" cy="334" r="8"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="260" y1="104" x2="232" y2="116"/><line x1="312" y1="372" x2="318" y2="344"/><line x1="396" y1="336" x2="375" y2="336"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.california = {
    id: 'california',
    name: 'California',
    short: 'California',
    country: 'USA',
    gateway: 'Los Angeles',
    lonlat: [-118.2, 34.1],
    locator: { box: [-125, -113.5, 32, 42.2], places: [['San Francisco', -122.42, 37.77, 'l'], ['Los Angeles', -118.24, 34.05, 'l'], ['Sacramento', -121.49, 38.58, 'r'], ['Fresno', -119.79, 36.74, 'r'], ['Central Valley', -120.6, 37.6, 'a'], ['Pacific Ocean', -122.8, 33.6, 'a']] },
    stamp: { colour: '#d97706', icon: '☀️' },
    transport: { name: 'road trip', verb: 'Drive', emoji: '🚗' },
    scene: 'road',
    photo: { file: 'Aerial-SanAndreas-CarrizoPlain.jpg', alt: 'Aerial view of the San Andreas Fault cutting a straight line across the Carrizo Plain', author: 'John Wiley', licence: 'Free to use (Wikimedia VRT permission)', licenceUrl: 'https://commons.wikimedia.org/wiki/File:Aerial-SanAndreas-CarrizoPlain.jpg' },
    intro: {
      ks3: 'You land in Los Angeles, one of the biggest cities in the USA. Jump in the car for a road trip along the coast and inland, following one of the most famous faults on Earth, the San Andreas.',
      adv: 'From Los Angeles you drive north along California’s plate boundary. This expedition covers the San Andreas transform fault, earthquake risk and preparedness, a Mediterranean climate, wildfire and drought, and farming and water in the Central Valley.'
    },
    facts: ['The San Andreas Fault is about 1,200 km long.', 'The 1906 San Francisco earthquake ruptured about 300 miles (480 km) of the fault.', 'California grows about 80% of the world’s almonds.'],
    climate: {
      place: 'Los Angeles, USA', source: 'NOAA 1991–2020 normals, Downtown LA', lat: '34°N',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [14.7, 15.0, 16.2, 17.6, 18.8, 20.7, 22.9, 23.7, 23.1, 20.7, 17.2, 14.3],
      rain: [84, 92, 57, 18, 8, 2, 1, 0, 3, 15, 20, 63]
    },
    diagrams: { fault: FAULT_SVG },
    stations: [
      {
        id: 'fault', title: 'The San Andreas Fault', icon: '〰️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'fault', prompt: 'Label this map of California’s plate boundary.',
              spots: [{ x: 15, y: 62, a: 'Pacific plate' }, { x: 78, y: 30, a: 'North American plate' }, { x: 78, y: 80, a: 'San Andreas Fault' }, { x: 48, y: 22, a: 'San Francisco' }, { x: 45, y: 92, a: 'Los Angeles' }],
              extra: [],
              explain: 'The San Andreas Fault separates the Pacific plate (west) from the North American plate (east). Los Angeles sits on the Pacific plate side; San Francisco sits just east of the fault.' },
            { type: 'mcq', q: 'The two plates at the San Andreas Fault slide past each other. What type of plate boundary is this?', options: ['Conservative (transform)', 'Destructive', 'Constructive', 'Collision'], answer: 0,
              explain: 'At a conservative boundary, crust is neither made nor destroyed. The plates grind past each other, getting stuck and then suddenly slipping, which causes earthquakes.' },
            { type: 'mcq', q: 'Why are there no volcanoes along the San Andreas Fault?', options: ['The plates slide sideways, so no magma is produced', 'It is too cold', 'There is too much water', 'Volcanoes are not allowed'], answer: 0,
              explain: 'Volcanoes form where plates move apart or where one sinks beneath another. Sideways movement does not melt rock.' }
          ],
          adv: [
            { type: 'label', diagram: 'fault', prompt: 'Label the map. One label does not belong.',
              spots: [{ x: 15, y: 62, a: 'Pacific plate' }, { x: 78, y: 30, a: 'North American plate' }, { x: 78, y: 80, a: 'San Andreas Fault' }, { x: 48, y: 22, a: 'San Francisco' }, { x: 45, y: 92, a: 'Los Angeles' }],
              extra: ['Ocean trench'],
              explain: 'There is no trench here: this is a transform boundary. The Pacific plate moves north-west relative to the North American plate.' },
            { type: 'number', q: 'The San Andreas slips on average about 35 mm a year in its central section. How far would Los Angeles move along the fault in 10,000 years, in metres?', answer: 350, tol: 2, unit: 'm',
              explain: '35 mm × 10,000 = 350,000 mm = 350 m. Over millions of years this movement has shifted rocks hundreds of kilometres.' },
            { type: 'mcq', q: 'Why do large earthquakes occur on the San Andreas rather than steady, gentle movement everywhere?', options: ['Friction locks sections of the fault; stress builds until the rocks suddenly rupture', 'Magma pushes the plates apart', 'The plates stop moving between earthquakes', 'Earthquakes happen only at night'], answer: 0,
              explain: 'This is elastic rebound: locked sections store strain for decades or centuries, then release it in seconds. Some central sections “creep” instead, with fewer large quakes.' }
          ]
        }
      },
      {
        id: 'quakes', title: 'Living with earthquakes', icon: '🏚️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'In 1906 a magnitude 7.8 earthquake struck San Francisco. What caused most of the destruction?', options: ['Shaking, and huge fires that burned for days after gas pipes and chimneys broke', 'A volcanic eruption', 'A hurricane', 'Snow avalanches'], answer: 0,
              explain: 'Shaking wrecked buildings, then fires spread across the city because broken water mains meant firefighters had little water.' },
            { type: 'sort', q: 'Sort these into things done before an earthquake and things done during or after.', bins: ['Before (prepare)', 'During or after (respond)'],
              items: [['Building earthquake-resistant structures', 0], ['Practising “Drop, Cover, Hold On” drills', 0], ['Keeping an emergency kit with water and food', 0], ['Searching collapsed buildings for survivors', 1], ['Setting up emergency shelters', 1], ['Turning off gas supplies to prevent fires', 1]],
              explain: 'Preparation saves lives before a quake; rescue and shelter matter after it.' },
            { type: 'mcq', q: 'The 1994 Northridge earthquake in Los Angeles was magnitude 6.7 and killed 57 people. Why was the death toll fairly low for a big city?', options: ['Strict building codes and good emergency services', 'It happened in the middle of the ocean', 'Nobody lives in Los Angeles', 'The earthquake lasted one second'], answer: 0,
              explain: 'California has strong building rules and well-trained emergency services. It also struck at 4:30 am, when roads and offices were nearly empty.' }
          ],
          adv: [
            { type: 'mcq', q: 'Northridge (1994, M6.7) killed 57 people but caused enormous economic losses. Which best explains this pattern for a high-income country?', options: ['Strong building codes save lives, but high-value buildings and infrastructure make repair costs huge', 'Poor buildings cause high deaths and low costs', 'Earthquakes cause no damage in rich countries', 'Insurance stops damage happening'], answer: 0,
              explain: 'HICs typically see lower death tolls but higher absolute economic losses, because so much valuable property and infrastructure is exposed.' },
            { type: 'sort', q: 'Classify these earthquake management strategies.', bins: ['Mitigation (reduce the impact)', 'Preparedness', 'Response'],
              items: [['Retrofitting bridges and buildings', 0], ['Land-use rules near faults', 0], ['ShakeAlert early warning on phones', 1], ['Statewide ShakeOut drills', 1], ['Urban search and rescue teams', 2], ['Emergency shelters and water supplies', 2]],
              explain: 'Mitigation reduces vulnerability long-term; preparedness gets people and systems ready; response deals with the immediate aftermath.' },
            { type: 'mcq', q: 'Parts of San Francisco built on filled-in bay land suffered worse shaking in earthquakes. Why?', options: ['Loose, water-saturated ground amplifies shaking and can liquefy', 'Filled land is made of solid granite', 'It is further from the fault', 'Water absorbs all earthquake energy'], answer: 0,
              explain: 'Soft, saturated sediments amplify seismic waves and can lose strength (liquefaction), as seen in the Marina District in 1989.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Mediterranean climate', icon: '☀️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Los Angeles?', options: ['February', 'July', 'August', 'May'], answer: 0,
              explain: 'February has the tallest bar: about 92 mm. Almost no rain falls in summer.' },
            { type: 'mcq', graph: true, q: 'What does the graph show about summers in Los Angeles?', options: ['Warm and almost completely dry', 'Cold and wet', 'Snowy', 'Very stormy'], answer: 0,
              explain: 'June to September are warm (over 20°C) with almost no rain. This is a Mediterranean climate: hot, dry summers and mild, wet winters.' },
            { type: 'mcq', q: 'Which other parts of the world have the same climate type as Los Angeles?', options: ['Around the Mediterranean Sea, e.g. Spain and Italy', 'The Amazon rainforest', 'Antarctica', 'Central Siberia'], answer: 0,
              explain: 'Mediterranean climates occur on the west sides of continents, about 30–40° from the Equator.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Los Angeles (°C).', answer: 9.4, tol: 0.1, unit: '°C',
              explain: 'Warmest 23.7°C (August) − coolest 14.3°C (December) = 9.4°C.' },
            { type: 'mcq', graph: true, q: 'Why are Los Angeles summers so dry?', options: ['The subtropical high-pressure belt (Pacific High) shifts north in summer, bringing sinking, stable air', 'The ITCZ is overhead in summer', 'Monsoon winds blow from the sea', 'Cold fronts arrive every week'], answer: 0,
              explain: 'In summer the subtropical high blocks rain-bearing depressions. In winter it moves south, letting mid-latitude storms bring rain.' },
            { type: 'number', q: 'Los Angeles averages 14.25 inches of precipitation a year, and 92% falls between November and April. How many inches fall in those six months? (1 decimal place)', answer: 13.1, tol: 0.1, unit: 'inches',
              explain: '14.25 × 0.92 = 13.1 inches, leaving only about 1.1 inches for May to October.' }
          ]
        }
      },
      {
        id: 'fire', title: 'Wildfire and drought', icon: '🔥',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Why are wildfires common in California in late summer and autumn?', options: ['Months without rain dry out plants, and hot, strong winds spread flames', 'It snows heavily', 'There are no plants to burn', 'Volcanoes start them'], answer: 0,
              explain: 'After a long dry summer, grass and shrubs are like tinder. Strong Santa Ana winds can turn a small fire into a huge one.' },
            { type: 'sort', q: 'Sort these into causes that make wildfires worse and ways to reduce the risk.', bins: ['Makes fires worse', 'Reduces risk'],
              items: [['Long droughts', 0], ['Hot, dry winds', 0], ['Homes built right next to forests', 0], ['Clearing dry plants around homes', 1], ['Controlled burning of undergrowth', 1], ['Fire-resistant building materials', 1]],
              explain: 'Drought, wind and building in fire-prone areas increase risk. Clearing fuel and using fire-resistant materials reduce it.' },
            { type: 'mcq', q: 'California’s chaparral shrubs have small, tough, waxy leaves. Why?', options: ['To reduce water loss during the long, dry summer', 'To catch snow', 'To float on water', 'To attract monkeys'], answer: 0,
              explain: 'Small, leathery leaves lose little water. Many chaparral plants also regrow quickly after fire.' }
          ],
          adv: [
            { type: 'mcq', q: 'Santa Ana winds blow from the interior towards the coast in autumn. Why are they so dangerous for fire?', options: ['Air descending from high deserts warms and dries, giving very low humidity and strong gusts', 'They bring heavy rain', 'They are cold and damp', 'They only blow at sea'], answer: 0,
              explain: 'Sinking air warms adiabatically and its relative humidity drops sharply. Combined with strong gusts, this dries fuels and drives fires rapidly.' },
            { type: 'mcq', q: 'Which human factor has most increased wildfire losses in California?', options: ['Expansion of homes into the wildland–urban interface', 'Fewer people living near forests', 'Removing all roads', 'Planting rice fields'], answer: 0,
              explain: 'More homes in fire-prone landscapes means more ignitions (from power lines, vehicles and people) and more property exposed.' },
            { type: 'mcq', q: 'Many California plants are “fire-adapted”. Which is an example?', options: ['Seeds that germinate after exposure to heat or smoke, and shrubs that resprout from roots', 'Leaves that catch fire more easily to spread seeds', 'Trees that grow only in water', 'Plants that never burn'], answer: 0,
              explain: 'Fire is a natural part of Mediterranean ecosystems. Many species need it to regenerate.' }
          ]
        }
      },
      {
        id: 'valley', title: 'Farming and water', icon: '🥕',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'California’s Central Valley uses about 1% of US farmland. About how much of the country’s food does it grow?', options: ['About a quarter', 'Almost none', 'About 1%', 'All of it'], answer: 0,
              explain: 'The valley grows about a quarter of the nation’s food, including about half of its fruits, nuts and vegetables.' },
            { type: 'mcq', q: 'The Central Valley has very little summer rain. How do farmers water their crops?', options: ['Irrigation from rivers, reservoirs, canals and groundwater wells', 'They wait for snow', 'Crops do not need water', 'They use sea water'], answer: 0,
              explain: 'Snowmelt from the Sierra Nevada fills reservoirs and canals; wells pump groundwater, especially in droughts.' },
            { type: 'mcq', q: 'Hollywood, in Los Angeles, and Silicon Valley, near San Francisco, are both famous. What are they known for?', options: ['Films and entertainment, and technology companies', 'Rice farming and fishing', 'Coal mining and steel', 'Oil drilling and shipbuilding'], answer: 0,
              explain: 'California’s economy is huge and varied: entertainment, technology, tourism and farming all matter.' }
          ],
          adv: [
            { type: 'mcq', q: 'Pumping groundwater in the San Joaquin Valley made parts of the land sink by about 8.5 m in the four decades before 1970. Why?', options: ['Removing water from aquifers allowed clay layers to compact permanently', 'Earthquakes pushed the land down', 'Rivers eroded the valley floor', 'Rising sea level flooded it'], answer: 0,
              explain: 'As with Bangkok, falling water pressure lets fine-grained sediments compress. This permanently reduces aquifer storage and damages canals.' },
            { type: 'mcq', q: 'California grows about 80% of the world’s almonds. Why has almond farming been criticised during droughts?', options: ['Almond trees need water every year and cannot be left unplanted in dry years like annual crops', 'Almonds need no water', 'Almonds grow only in winter', 'Almonds are not exported'], answer: 0,
              explain: 'Permanent tree crops lock in water demand. In droughts, farmers pump more groundwater to keep orchards alive, worsening aquifer depletion.' },
            { type: 'sort', q: 'Classify these responses to water scarcity in California.', bins: ['Increase supply', 'Reduce demand'],
              items: [['Desalination plants', 0], ['Recycling wastewater', 0], ['Recharging aquifers with flood water', 0], ['Drip irrigation instead of flooding fields', 1], ['Limits on lawn watering', 1], ['Groundwater pumping limits (SGMA)', 1]],
              explain: 'Sustainable water management combines new supplies with using less. California’s 2014 Sustainable Groundwater Management Act aims to end overdraft.' }
          ]
        }
      }
    ]
  };
})();
