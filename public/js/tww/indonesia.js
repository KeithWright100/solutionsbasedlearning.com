/* Travel the Wright Way — destination: Indonesia (Mount Merapi, Java).
 * Merapi 2010: more than 350 deaths and over 350,000 people evacuated.
 */
(function () {
  var VOLCANO_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section through a composite volcano">' +
  '<rect width="600" height="420" fill="#dcefff"/>' +
  // ash cloud
  '<g class="sway s2" fill="#9a958f"><circle cx="300" cy="70" r="34"/><circle cx="335" cy="52" r="30"/><circle cx="270" cy="50" r="26"/><circle cx="310" cy="28" r="24"/></g>' +
  // ground/crust
  '<rect y="330" width="600" height="90" fill="#8a6b4f"/>' +
  // cone with layers
  '<path d="M60 330 L270 120 L330 120 L540 330 Z" fill="#6b5b4e"/>' +
  '<g stroke="#8c7b6d" stroke-width="7" fill="none"><path d="M100 330 L280 150"/><path d="M500 330 L320 150"/><path d="M140 330 L288 182"/><path d="M460 330 L312 182"/><path d="M180 330 L295 215"/><path d="M420 330 L305 215"/></g>' +
  // crater
  '<path d="M270 120 Q300 140 330 120 Z" fill="#3d2f26"/>' +
  // vent + chamber
  '<path d="M292 128 L308 128 L312 360 L288 360 Z" fill="#e2591f"/>' +
  '<ellipse cx="300" cy="380" rx="80" ry="28" fill="#e2591f"/><ellipse cx="300" cy="380" rx="56" ry="17" fill="#ffb347" opacity=".7"/>' +
  // lava flow
  '<path class="drip" d="M332 124 Q360 170 380 210 Q395 240 420 260" stroke="#ff7a1a" stroke-width="9" fill="none" stroke-linecap="round"/>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="345" y1="58" x2="450" y2="40"/><line x1="285" y1="124" x2="150" y2="90"/><line x1="190" y1="250" x2="95" y2="235"/><line x1="312" y1="290" x2="450" y2="300"/><line x1="380" y1="384" x2="470" y2="395"/><line x1="410" y1="250" x2="500" y2="190"/></g>' +
  '</svg>';

  var SUBDUCT_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a destructive plate boundary">' +
  '<rect width="600" height="420" fill="#eef6ff"/>' +
  '<rect y="0" width="600" height="150" fill="#cfe8ff"/>' +
  // sea on left
  '<path d="M0 150 L330 150 L330 175 L0 175 Z" fill="#3d8fc6"/>' +
  // oceanic plate sinking
  '<path d="M0 175 L300 175 L360 200 L560 380 L520 400 L330 230 L280 205 L0 205 Z" fill="#5b6b7a"/>' +
  '<g fill="#fff" opacity=".7"><path d="M120 190 l24 0 -6 -5 M144 190 l-6 5" stroke="#fff" stroke-width="3"/></g>' +
  // continental plate
  '<path d="M330 150 L600 150 L600 260 L460 260 L360 200 L330 175 Z" fill="#a0805f"/>' +
  // trench
  '<path d="M300 175 L330 175 L345 192 Z" fill="#1d4f80"/>' +
  // magma rising + volcano
  '<path d="M470 300 Q455 230 450 150" stroke="#e2591f" stroke-width="10" fill="none" class="drip"/>' +
  '<path d="M400 150 L445 95 L465 95 L510 150 Z" fill="#6b5b4e"/><g fill="#9a958f" class="sway"><circle cx="455" cy="70" r="16"/><circle cx="470" cy="56" r="12"/></g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="100" y1="195" x2="90" y2="255"/><line x1="560" y1="200" x2="540" y2="250"/><line x1="320" y1="182" x2="250" y2="110"/><line x1="462" y1="250" x2="390" y2="320"/><line x1="490" y1="110" x2="545" y2="70"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.indonesia = {
    id: 'indonesia',
    name: 'Indonesia: Mount Merapi',
    short: 'Indonesia',
    country: 'Indonesia',
    gateway: 'Yogyakarta',
    lonlat: [110.4, -7.5],
    locator: { box: [104.5, 116.5, -10, -4], places: [['Jakarta', 106.85, -6.2, 't'], ['Mount Merapi', 110.44, -7.54, 't'], ['Yogyakarta', 110.37, -7.8, 'l'], ['Surabaya', 112.75, -7.25, 'r'], ['JAVA', 107.6, -7.35, 'a'], ['Indian Ocean', 110.5, -9.4, 'a']] },
    stamp: { colour: '#b42318', icon: '🌋' },
    transport: { name: 'volcano hike', verb: 'Hike', emoji: '🥾' },
    scene: 'trail',
    photo: { file: 'GUNUNG MERAPI.jpg', alt: 'Mount Merapi, a cone-shaped volcano on the island of Java', author: 'Abidrahmatulloh22', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'You land in Yogyakarta on the island of Java. Looming over the city is Mount Merapi, one of the most active volcanoes in the world. Lace up your boots: you are hiking up it!',
      adv: 'Mount Merapi (about 2,930 m) towers over Yogyakarta in Central Java. This expedition covers plate tectonics, volcanic hazards, why people live near volcanoes, and how eruptions are monitored.'
    },
    facts: ['Indonesia has more active volcanoes than any other country.', 'Merapi means "mountain of fire".', 'In 2010 more than 350,000 people were evacuated from around Merapi.'],
    diagrams: { volcano: VOLCANO_SVG, subduct: SUBDUCT_SVG },
    stations: [
      {
        id: 'structure', title: 'Inside a volcano', icon: '🌋',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'volcano', prompt: 'Label the parts of the volcano.',
              spots: [{ x: 84, y: 9, a: 'Ash cloud' }, { x: 17, y: 21, a: 'Crater' }, { x: 13, y: 56, a: 'Layers of ash and lava' }, { x: 84, y: 45, a: 'Lava flow' }, { x: 84, y: 71, a: 'Vent' }, { x: 87, y: 94, a: 'Magma chamber' }],
              extra: [],
              explain: 'Magma collects in the magma chamber, rises up the vent and erupts from the crater as lava and ash. Merapi is a composite volcano, built from layers of ash and lava.' },
            { type: 'mcq', q: 'What is the difference between magma and lava?', options: ['Magma is underground; lava is molten rock that has reached the surface', 'Lava is underground; magma is on the surface', 'They are completely different materials', 'Magma is cold and lava is hot'], answer: 0,
              explain: 'It is the same molten rock. Underground it is called magma; once it erupts onto the surface it is lava.' },
            { type: 'mcq', q: 'Indonesia is part of the "Ring of Fire". What is that?', options: ['A ring of volcanoes and earthquakes around the Pacific Ocean', 'A ring of deserts around Africa', 'A festival in Jakarta', 'A ring of forest fires in Australia'], answer: 0,
              explain: 'The Ring of Fire is a horseshoe of plate boundaries around the Pacific, with most of the world’s active volcanoes.' }
          ],
          adv: [
            { type: 'label', diagram: 'subduct', prompt: 'Label the destructive plate boundary under Java. Two labels do not belong.',
              spots: [{ x: 15, y: 61, a: 'Oceanic plate' }, { x: 90, y: 60, a: 'Continental plate' }, { x: 41, y: 26, a: 'Ocean trench' }, { x: 64, y: 77, a: 'Rising magma' }, { x: 90, y: 16, a: 'Composite volcano' }],
              extra: ['Mid-ocean ridge', 'Hotspot'],
              explain: 'Denser oceanic crust is subducted beneath the continental plate at an ocean trench. It melts as it sinks, and the magma rises to form composite volcanoes like Merapi. Mid-ocean ridges and hotspots are different settings.' },
            { type: 'mcq', q: 'Which plates meet beneath Java?', options: ['The Indo-Australian plate is subducted beneath the Eurasian plate', 'The Pacific plate moves apart from the Nazca plate', 'The African plate collides with the Eurasian plate', 'The North American and Pacific plates slide past each other'], answer: 0,
              explain: 'The Indo-Australian plate moves north and is subducted beneath the Eurasian plate along the Java Trench, forming the Sunda arc of volcanoes.' },
            { type: 'mcq', q: 'Why are volcanoes at destructive boundaries usually explosive?', options: ['Their magma is thick and gas-rich, so pressure builds up', 'Their magma is runny and low in gas', 'They are under the sea', 'They only erupt steam'], answer: 0,
              explain: 'Melting crust produces viscous, silica-rich magma that traps gas, so pressure builds until it erupts explosively.' }
          ]
        }
      },
      {
        id: 'hazards', title: 'Volcanic hazards', icon: '⚠️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Most people killed by Merapi in 2010 died from pyroclastic flows. What is a pyroclastic flow?', options: ['A fast-moving cloud of very hot gas, ash and rock', 'A slow river of lava', 'A small earthquake', 'A shower of rain'], answer: 0,
              explain: 'Pyroclastic flows rush down the slopes at hundreds of kilometres per hour and are hundreds of degrees hot. There is no time to escape.' },
            { type: 'mcq', q: 'Heavy rain mixes with loose ash on the slopes and flows downhill like wet concrete. What is this called?', options: ['A lahar', 'A tsunami', 'A tornado', 'A glacier'], answer: 0,
              explain: 'Lahars are volcanic mudflows. In Java’s heavy rains they can happen long after an eruption.' },
            { type: 'mcq', q: 'In the 2010 eruption, roughly how many people were evacuated?', options: ['Over 350,000', 'About 35', 'About 3,500', 'Nobody'], answer: 0,
              explain: 'More than 350,000 people were moved to safety, but over 350 people still died.' }
          ],
          adv: [
            { type: 'sort', q: 'Sort the effects of the 2010 Merapi eruption into primary and secondary effects.', bins: ['Primary effect', 'Secondary effect'],
              items: [['Pyroclastic flows destroy villages', 0], ['Ash falls on crops and roofs', 0], ['Lahars after heavy rain', 1], ['Flights cancelled across Java', 1], ['Overcrowded evacuation camps', 1], ['Ash clouds over the volcano', 0]],
              explain: 'Primary effects come directly from the eruption (flows, ash fall). Secondary effects follow later or as a knock-on result (lahars, transport disruption, camp conditions).' },
            { type: 'mcq', q: 'Why are lahars a hazard for months or years after an eruption?', options: ['Loose ash stays on the slopes and is remobilised by each rainy season', 'Lava keeps flowing for years', 'Ash turns into ice', 'The volcano keeps shaking'], answer: 0,
              explain: 'Huge volumes of fresh ash and debris sit in river valleys. Each heavy rain can turn them into fast, destructive mudflows.' },
            { type: 'mcq', q: 'Which factor most increased the death toll in 2010?', options: ['Dense population living high on the slopes, and some people refusing to leave', 'The eruption happened in the Sahara', 'There was no monitoring at all', 'The volcano was asleep for a million years'], answer: 0,
              explain: 'Merapi was well monitored and warnings were issued, but many people live close to the summit and some stayed or returned, for example to protect livestock.' }
          ]
        }
      },
      {
        id: 'living', title: 'Living with a volcano', icon: '🌾',
        tasks: {
          ks3: [
            { type: 'sort', q: 'Why do people live near Merapi? Sort these into reasons to live there and risks.', bins: ['Reason to live there', 'Risk'],
              items: [['Very fertile soils for rice and vegetables', 0], ['Pyroclastic flows', 1], ['Tourists bring money', 0], ['Ash falls on houses', 1], ['Sand and stone to sell for building', 0], ['Lahars (mudflows)', 1]],
              explain: 'Volcanic ash weathers into rich soil, and tourism and quarrying bring money, but the volcano can erupt with deadly flows, ash and mudflows.' },
            { type: 'mcq', q: 'Why are volcanic soils so good for farming?', options: ['Weathered ash adds lots of minerals and nutrients', 'They are always frozen', 'They contain no water', 'They are made of sand dunes'], answer: 0,
              explain: 'Ash and lava break down into soils rich in minerals, which is why so many people farm on volcano slopes in Java.' },
            { type: 'mcq', q: 'Which of these is a way that volcanoes can provide energy?', options: ['Geothermal power from hot rocks underground', 'Wind turbines on the crater', 'Burning lava like coal', 'Solar panels powered by ash'], answer: 0,
              explain: 'Heat from underground can turn water into steam to drive turbines. Indonesia is one of the world’s biggest users of geothermal energy.' }
          ],
          adv: [
            { type: 'mcq', q: 'Which statement best explains why population density is high on Java’s volcanic slopes?', options: ['Fertile andosol soils support intensive rice farming that can feed many people', 'Land on volcanoes is free and safe', 'Volcanic slopes are cooler and never erupt', 'The government forces people to live there'], answer: 0,
              explain: 'Andosols from volcanic ash are fertile and hold water well, supporting several rice harvests a year and dense rural populations.' },
            { type: 'mcq', q: 'After 2010, the government created zones where nobody may live. What is this an example of?', options: ['Land-use zoning to reduce vulnerability', 'Prediction', 'Ecotourism', 'Afforestation'], answer: 0,
              explain: 'Hazard zoning reduces exposure by keeping homes out of the most dangerous areas, although moving whole villages is difficult.' },
            { type: 'mcq', q: 'Why do some people choose to return to dangerous areas near Merapi?', options: ['Their land, livestock, income and cultural ties are there', 'The volcano has stopped erupting for ever', 'They are paid to live in danger', 'There are no other places in Java'], answer: 0,
              explain: 'Livelihoods, land ownership, family and strong cultural and spiritual links to the mountain can outweigh the perceived risk.' }
          ]
        }
      },
      {
        id: 'monitor', title: 'Predicting eruptions', icon: '📡',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Which instrument detects the small earthquakes that happen when magma moves?', options: ['A seismometer', 'A thermometer', 'A rain gauge', 'An anemometer'], answer: 0,
              explain: 'Seismometers record tremors. More frequent small earthquakes can mean magma is rising.' },
            { type: 'mcq', q: 'Which of these is a warning sign that a volcano may erupt soon?', options: ['The ground starts to bulge and more gas comes out', 'Birds start singing', 'It gets colder at the summit', 'The volcano turns green'], answer: 0,
              explain: 'Rising magma makes the ground swell and releases gases such as sulphur dioxide. Scientists measure both.' },
            { type: 'mcq', q: 'Why did scientists raise Merapi’s alert to the highest level in October 2010?', options: ['So people would leave the danger zone before the big eruption', 'To start a festival', 'Because the volcano had stopped', 'To attract more tourists'], answer: 0,
              explain: 'Raising the alert triggered evacuations, which saved many thousands of lives.' }
          ],
          adv: [
            { type: 'sort', q: 'Match the monitoring method to what it measures. Is it measuring ground movement and shaking, or gas and heat?', bins: ['Ground movement or shaking', 'Gas or heat'],
              items: [['Seismometer', 0], ['Tiltmeter', 0], ['GPS stations', 0], ['Sulphur dioxide spectrometer', 1], ['Thermal satellite images', 1]],
              explain: 'Seismometers, tiltmeters and GPS track tremors and deformation. Gas sensors and thermal imaging track gas output and heat as magma approaches the surface.' },
            { type: 'mcq', q: 'Merapi was one of the best-monitored volcanoes in the world, yet over 350 people still died in 2010. What does this suggest?', options: ['Prediction alone is not enough; communication, evacuation and people’s choices matter too', 'Monitoring is useless', 'The deaths were caused by an earthquake', 'Volcanoes cannot be studied'], answer: 0,
              explain: 'Effective risk reduction combines prediction with clear warnings, trusted communication, evacuation plans and support for livelihoods.' },
            { type: 'mcq', q: 'Which best describes the 2010 eruption on the Volcanic Explosivity Index (VEI)?', options: ['VEI 4: a large explosive eruption', 'VEI 0: gentle lava only', 'VEI 8: a super-eruption', 'VEI 1: a tiny eruption'], answer: 0,
              explain: 'The 2010 eruption was VEI 4, Merapi’s largest since 1872.' }
          ]
        }
      }
    ]
  };
})();
