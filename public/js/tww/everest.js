/* Travel the Wright Way — destination: Mount Everest (Nepal: how the Himalaya formed, altitude and a monsoon mountain climate, Sherpa culture and tourism, glaciers and hazards).
 * Climate data: Namche Bazaar (about 3,440 m), long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: Everest is 8,848.86 m high (2020 survey by Nepal and China); the Himalaya formed as the Indian plate collided with the Eurasian plate, beginning about 50 million years ago;
 *   marine fossils are found in limestone near the summit; there are few volcanoes because continental crust is too buoyant to sink deep into the mantle;
 *   the 2015 Gorkha earthquake (magnitude 7.8) triggered an avalanche that killed climbers at Everest Base Camp;
 *   at the summit, air pressure is about a third of that at sea level; the zone above about 8,000 m is called the "death zone";
 *   Tenzing Norgay and Edmund Hillary made the first ascent on 29 May 1953; Sherpa people are mostly Tibetan Buddhists and are well adapted to high altitude;
 *   Nepal requires climbers to bring back rubbish or lose a deposit; Imja Tsho glacial lake was lowered by about 3.4 m in 2016 to reduce the risk of an outburst flood.
 */
(function () {
  var PLATE_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the collision between the Indian plate and the Eurasian plate, forming the fold mountains of the Himalaya and the Tibetan Plateau above the mantle">' +
  '<rect width="600" height="420" fill="#cfe6f7"/>' +
  '<rect y="230" width="600" height="190" fill="#e07a3f"/>' +
  // Indian plate
  '<path d="M0 210 L200 214 C 260 230, 420 290, 600 320 L600 362 C 420 332, 260 282, 200 262 L0 258 Z" fill="#f2b45c" stroke="#8a5a2b" stroke-width="2"/>' +
  // Eurasian plate with mountains
  '<path d="M200 214 L230 176 L262 96 L300 54 L336 96 L364 122 L600 118 L600 320 C 420 290, 260 230, 200 214 Z" fill="#a97c5a" stroke="#5b4630" stroke-width="2"/>' +
  '<g fill="none" stroke="#7a5638" stroke-width="2.5"><path d="M224 196 C 250 160, 280 186, 300 150 S 340 170, 360 140"/><path d="M228 214 C 256 186, 286 210, 310 176 S 350 196, 380 166"/><path d="M240 230 C 270 206, 300 228, 330 200 S 380 214, 420 190"/></g>' +
  '<path d="M286 64 L300 54 L316 68 L306 74 Z" fill="#fff"/><path d="M254 108 L262 96 L272 110 Z" fill="#fff"/>' +
  // Ganges plain
  '<rect x="0" y="202" width="200" height="10" fill="#6aa84f"/>' +
  // movement arrows
  '<g fill="#1e3a8a" stroke="#1e3a8a" stroke-width="4"><line x1="40" y1="236" x2="110" y2="238"/><path d="M110 230 L126 238 L110 246 Z" stroke-width="1"/><line x1="560" y1="200" x2="500" y2="200"/><path d="M500 192 L484 200 L500 208 Z" stroke-width="1"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="300" y1="38" x2="300" y2="56"/><line x1="504" y1="90" x2="480" y2="118"/><line x1="100" y1="156" x2="100" y2="202"/><line x1="240" y1="298" x2="214" y2="222"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.everest = {
    id: 'everest',
    name: 'Mount Everest',
    short: 'Everest',
    country: 'Nepal',
    gateway: 'Lukla',
    lonlat: [86.93, 27.99],
    locator: { box: [83.6, 88.6, 26.3, 29.3], places: [['Everest', 86.93, 27.99, 'r'], ['Namche Bazaar', 86.71, 27.8, 'b'], ['Kathmandu', 85.32, 27.71, 'l'], ['NEPAL', 85.4, 27.0, 'a'], ['TIBET (CHINA)', 86.4, 28.9, 'a'], ['INDIA', 87.3, 26.6, 'a']] },
    stamp: { colour: '#3b5ba8', icon: '🏔️' },
    transport: { name: 'trek with Sherpa guides', verb: 'Trek', emoji: '🧗' },
    scene: 'himal',
    photo: { file: 'View of Mt. Everest from Kala Patthar.jpg', alt: 'The dark summit pyramid of Mount Everest rising above snowy ridges, seen from Kala Patthar', author: 'Niklassletteland', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
    intro: {
      ks3: 'Namaste! Your tiny plane lands at Lukla, one of the most exciting airports in the world. With your Sherpa guides, trek up through Namche Bazaar towards Everest, the highest mountain on Earth, where the air gets thinner with every step.',
      adv: 'From Lukla you trek with Sherpa guides towards Everest Base Camp. This expedition covers collision plate boundaries and fold mountains, altitude and a monsoon mountain climate, Sherpa culture and the impacts of tourism, and glacial hazards in a warming Himalaya.'
    },
    facts: ['Everest is 8,849 m high, measured in 2020.', 'Fossils of sea creatures have been found near the top of Everest.', 'Tenzing Norgay and Edmund Hillary first climbed Everest in 1953.'],
    climate: {
      place: 'Namche Bazaar, Nepal (3,440 m)', source: 'Long-term averages (CRU / Met Office)', lat: '28°N', rmax: 200, rstep: 50,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-6.0, -5.0, -1.5, 2.0, 5.5, 9.5, 10.0, 10.0, 8.0, 3.0, -1.0, -3.5],
      rain: [11, 18, 22, 28, 34, 96, 154, 145, 81, 37, 6, 13]
    },
    diagrams: { plates: PLATE_SVG },
    stations: [
      {
        id: 'plates', title: 'Where continents collide', icon: '🌏',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'plates', prompt: 'Label how the Himalaya formed.',
              spots: [{ x: 50, y: 6, a: 'Himalayas' }, { x: 84, y: 18, a: 'Tibetan Plateau' }, { x: 16, y: 34, a: 'Ganges plain' }, { x: 16, y: 60, a: 'Indian plate' }, { x: 84, y: 52, a: 'Eurasian plate' }, { x: 40, y: 74, a: 'Plate boundary' }, { x: 50, y: 93, a: 'Mantle' }],
              extra: [],
              explain: 'The Indian plate is pushing north into the Eurasian plate. The rock between them has been crumpled up into the highest mountains on Earth.' },
            { type: 'mcq', q: 'Fossils of sea creatures have been found near the top of Everest. How did they get there?', options: ['Rock from an old sea floor was pushed up', 'Birds carried them up', 'Climbers left them there', 'The sea once covered the whole mountain, right up to its summit'], answer: 0,
              explain: 'The limestone at the summit formed on the floor of an ancient ocean between India and Asia, then was folded and lifted up.' },
            { type: 'mcq', q: 'Is Everest still growing?', options: ['Yes, by a few millimetres a year', 'No, it stopped long ago', 'Yes, by about a metre every single year', 'No, it is shrinking fast'], answer: 0,
              explain: 'India is still pushing north, so the Himalaya are still rising slowly, although erosion wears them down too.' }
          ],
          adv: [
            { type: 'label', diagram: 'plates', prompt: 'Label the collision boundary. One label does not belong.',
              spots: [{ x: 50, y: 6, a: 'Fold mountains' }, { x: 84, y: 18, a: 'Tibetan Plateau' }, { x: 16, y: 34, a: 'Ganges plain' }, { x: 16, y: 60, a: 'Indian plate' }, { x: 84, y: 52, a: 'Eurasian plate' }, { x: 40, y: 74, a: 'Collision boundary' }, { x: 50, y: 93, a: 'Mantle' }],
              extra: ['Mid-ocean ridge'],
              explain: 'Mid-ocean ridges form at divergent boundaries. Here two continental plates are converging, folding and thickening the crust.' },
            { type: 'mcq', q: 'Why are there almost no volcanoes in the Himalaya?', options: ['Continental crust is too buoyant to sink', 'The mountains are far too cold for any magma to reach the surface', 'There is no mantle beneath Asia', 'Glaciers put out all the eruptions'], answer: 0,
              explain: 'At ocean–continent boundaries, dense oceanic crust sinks and melts, feeding volcanoes. Two continental plates simply crumple and thicken.' },
            { type: 'mcq', q: 'In 2015 a magnitude 7.8 earthquake struck Nepal. Why are earthquakes common here?', options: ['Stress builds as the plates push together', 'The mountains are sinking', 'Volcanoes erupt nearby', 'Glaciers sliding downhill make the ground shake'], answer: 0,
              explain: 'The Gorkha earthquake killed nearly 9,000 people and set off an avalanche that hit Everest Base Camp.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Thin air and monsoon clouds', icon: '🌨️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Namche Bazaar?', options: ['July', 'November', 'January', 'April'], answer: 0,
              explain: 'The monsoon reaches the Himalaya in summer, bringing cloud, rain and snow higher up.' },
            { type: 'mcq', graph: true, q: 'Most climbers try for the summit in May. Looking at the graph, why?', options: ['It is warmer, before the monsoon', 'It is the wettest month', 'It is the coldest month', 'It is the middle of winter, when the snow is frozen hard'], answer: 0,
              explain: 'Late spring has calmer winds and drier weather before the monsoon snows arrive in June.' },
            { type: 'mcq', q: 'Why is it so cold at the top of Everest?', options: ['Temperature falls with height', 'It is near the North Pole', 'The sun never shines there because of the clouds', 'It is always night time'], answer: 0,
              explain: 'Air cools by about 6°C for every 1,000 m. The summit can be below −30°C even in May.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'What percentage of Namche Bazaar’s yearly precipitation falls from June to September? Give a whole number.', answer: 74, tol: 1, unit: '%',
              explain: 'June to September = 476 mm out of 645 mm, which is about 74%.' },
            { type: 'mcq', q: 'At the summit of Everest the air pressure is about a third of that at sea level. Why is this dangerous?', options: ['Each breath holds much less oxygen', 'Climbers become too heavy', 'Water starts to freeze inside the body', 'The sun is much weaker'], answer: 0,
              explain: 'Above about 8,000 m, the “death zone”, the body cannot adjust. Most climbers use bottled oxygen.' },
            { type: 'mcq', q: 'In winter, very strong winds blast the summit of Everest. What causes them?', options: ['The jet stream sits over the Himalaya', 'Monsoon winds blow in from the sea all winter', 'Hot air rising from India', 'Warm winds from the Sahara'], answer: 0,
              explain: 'In summer the jet stream moves north, giving short windows of calmer weather for climbing.' }
          ]
        }
      },
      {
        id: 'sherpa', title: 'Sherpas and trekkers', icon: '🙏',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: who first reached the top of Everest, in 1953?', options: ['Tenzing Norgay and Edmund Hillary', 'Neil Armstrong and Buzz Aldrin', 'George Mallory and Andrew Irvine', 'Ernest Shackleton and Roald Amundsen'], answer: 0,
              explain: 'Tenzing Norgay was a Sherpa from Nepal and Hillary was a New Zealander.' },
            { type: 'mcq', q: 'Culture: what do the colourful flags strung across Himalayan paths carry?', options: ['Buddhist prayers', 'Climbers’ names', 'Weather warnings', 'Adverts for hotels and shops'], answer: 0,
              explain: 'Most Sherpas are Buddhist. Prayer flags are believed to spread blessings on the wind.' },
            { type: 'mcq', q: 'Why are Sherpas so good at working at high altitude?', options: ['Generations living high up adapted them', 'They take special medicine', 'They breathe more slowly', 'They are always younger than other climbers'], answer: 0,
              explain: 'Scientists have found that many Sherpas use oxygen more efficiently, after thousands of years living in the mountains.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify the impacts of Everest tourism.', bins: ['Benefit', 'Cost'],
              items: [['Jobs for guides, porters and lodge owners', 0], ['Money for schools and health posts', 0], ['Permit fees for the government', 0], ['Rubbish left on the mountain', 1], ['Dangerous work for Sherpa guides', 1], ['Crowding on the summit route', 1]],
              explain: 'Nepal now requires climbers to bring rubbish back down, and limits are debated to reduce crowding.' },
            { type: 'mcq', q: 'Many Sherpa families depend on Everest expeditions. What does this make them vulnerable to?', options: ['Sudden drops in tourism', 'Too much rainfall', 'Rising sea levels', 'Cheaper flights abroad for Nepali families'], answer: 0,
              explain: 'The 2015 earthquake and the COVID-19 pandemic stopped expeditions, cutting incomes overnight.' },
            { type: 'mcq', q: 'Sagarmatha (Everest) National Park is a UNESCO World Heritage Site. Which management approach best fits it?', options: ['Limit numbers and fund conservation', 'Build a road to the summit', 'Ban all local people', 'Allow unlimited climbing permits to raise as much money as possible'], answer: 0,
              explain: 'Sustainable tourism balances local livelihoods, culture and the fragile mountain environment.' }
          ]
        }
      },
      {
        id: 'glaciers', title: 'Ice, lakes and hazards', icon: '🧊',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'The Khumbu Glacier flows down from Everest. What is happening to Himalayan glaciers?', options: ['Most are shrinking', 'Most are growing fast', 'They have all disappeared', 'They are turning into volcanoes'], answer: 0,
              explain: 'Warmer temperatures are melting the ice faster than snow can replace it.' },
            { type: 'mcq', q: 'Why are the Himalaya called the “water towers of Asia”?', options: ['Their snow and ice feed great rivers', 'They have the tallest buildings', 'They are covered in water tanks', 'They make clouds for the whole world'], answer: 0,
              explain: 'Rivers such as the Ganges, Indus and Brahmaputra supply water to hundreds of millions of people.' },
            { type: 'mcq', q: 'The Khumbu Icefall is one of the most dangerous parts of the climb. Why?', options: ['Ice blocks can collapse without warning', 'It is very hot', 'There are wild animals such as snow leopards hiding in the ice', 'It is underwater'], answer: 0,
              explain: 'The glacier is constantly moving, so towers of ice called seracs can topple at any time.' }
          ],
          adv: [
            { type: 'mcq', q: 'Imja Tsho is a lake that formed as a glacier melted. Why is it a hazard?', options: ['Its moraine dam could burst', 'It could freeze solid', 'It might become salty', 'It attracts too many tourists who swim in the cold water'], answer: 0,
              explain: 'In 2016 engineers lowered the lake by about 3.4 m with a channel, reducing the risk of a glacial lake outburst flood.' },
            { type: 'mcq', q: 'As Himalayan glaciers shrink, what is likely to happen to river flow downstream?', options: ['Rising at first, then falling in dry seasons', 'It will stay exactly the same, because rainfall replaces the lost ice', 'Rivers will flow backwards', 'Rivers will freeze'], answer: 0,
              explain: 'Extra meltwater boosts flow for a while, but as glaciers disappear, dry-season flow falls, threatening water supplies and hydro-power.' },
            { type: 'mcq', q: 'Rubbish and human waste on Everest are a growing problem. Why does waste last so long there?', options: ['Cold slows decomposition', 'There is too much rain to collect it', 'Animals eat it', 'The sun is too strong'], answer: 0,
              explain: 'Frozen waste barely breaks down. Clean-up expeditions and rules on carrying waste down are trying to tackle it.' }
          ]
        }
      }
    ]
  };
})();
