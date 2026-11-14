/* Travel the Wright Way — destination: Pakistan (the Karakoram and K2, glaciers and glacial hazards, the Indus, a cold mountain desert climate, the Karakoram Highway, and Pakistani culture).
 * Climate data: Skardu (2,200 m), Gilgit-Baltistan, 1961–2009 averages (climatestotravel.com); monthly values as listed on the page.
 * Facts: K2 (8,611 m), on the Pakistan–China border, is the second-highest mountain in the world; the Karakoram has some of the largest glaciers outside the polar regions, such as the Baltoro and Biafo;
 *   glacial lake outburst floods (GLOFs) are a hazard as glaciers melt; the Shishper Glacier lake outburst in May 2022 destroyed the Hassanabad bridge on the Karakoram Highway;
 *   on 4 January 2010 a huge landslide at Attabad blocked the Hunza River, killing about 20 people and forming Attabad Lake, which flooded villages and a section of the Karakoram Highway;
 *   the Karakoram Highway (completed 1979) links Pakistan with China over the Khunjerab Pass (4,693 m), one of the highest paved border crossings in the world;
 *   the Indus is fed by snow and glacier melt and supplies water for one of the largest irrigation systems in the world; the 2022 floods covered about a third of Pakistan after extreme monsoon rain;
 *   Pakistan has about 240 million people; Urdu is the national language; Pakistani trucks are famous for colourful "truck art"; cricket is the most popular sport; apricots are grown and dried in Hunza.
 */
(function () {
  var GLACIER_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of a Karakoram valley: a mountain peak, a retreating glacier, a meltwater lake held back by a moraine dam, a river and a village on the valley floor downstream">' +
  '<rect width="600" height="420" fill="#d5e8f6"/>' +
  // mountains
  '<path d="M0 260 L60 120 L110 170 L180 40 L240 150 L300 90 L360 200 L420 150 L480 230 L600 220 L600 420 L0 420 Z" fill="#8a8f98"/>' +
  '<path d="M156 84 L180 40 L204 84 L194 92 L180 80 L166 92 Z M284 120 L300 90 L316 120 L306 126 Z" fill="#fff"/>' +
  // glacier
  '<path d="M150 110 C 170 140, 200 170, 220 210 L250 250 L200 260 C 180 220, 160 180, 140 140 Z" fill="#e8f4fb" stroke="#9cc4dd" stroke-width="2"/>' +
  '<g stroke="#9cc4dd" stroke-width="1.5"><line x1="170" y1="160" x2="190" y2="156"/><line x1="182" y1="190" x2="204" y2="186"/><line x1="196" y1="222" x2="220" y2="218"/></g>' +
  // lake
  '<path d="M200 260 L250 250 C 280 252, 300 262, 310 274 L210 282 Z" fill="#2bb3a3"/>' +
  // moraine dam
  '<path d="M300 262 C 312 262, 328 270, 336 290 L300 296 L290 280 Z" fill="#a39074"/><g fill="#7d6b52"><circle cx="306" cy="276" r="3"/><circle cx="318" cy="284" r="3"/><circle cx="312" cy="290" r="2"/></g>' +
  // river and valley floor
  '<path d="M0 420 L0 340 C 150 330, 300 320, 600 330 L600 420 Z" fill="#b8a07a"/>' +
  '<path d="M336 292 C 370 312, 420 330, 480 344 S 560 360, 600 362" fill="none" stroke="#5fa8d3" stroke-width="8"/>' +
  // village
  '<g fill="#e9dcc2" stroke="#7a5a32" stroke-width="1"><rect x="470" y="356" width="18" height="12"/><rect x="494" y="360" width="16" height="10"/><rect x="516" y="354" width="18" height="12"/></g><g fill="#6f9a4a"><circle cx="460" cy="370" r="8"/><circle cx="546" cy="366" r="8"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="120" y1="30" x2="170" y2="48"/><line x1="96" y1="190" x2="164" y2="170"/><line x1="200" y1="320" x2="240" y2="274"/><line x1="380" y1="250" x2="320" y2="276"/><line x1="420" y1="396" x2="440" y2="334"/><line x1="560" y1="300" x2="510" y2="352"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.pakistan = {
    id: 'pakistan',
    name: 'Pakistan',
    short: 'Pakistan',
    country: 'Pakistan',
    gateway: 'Hunza Valley',
    lonlat: [74.66, 36.32],
    locator: { box: [70.8, 78.2, 33.2, 37.4], rivers: [[[76.6, 34.9], [75.63, 35.3], [74.9, 35.6], [74.6, 35.76], [74.0, 35.6], [73.4, 35.3], [72.9, 34.9], [72.7, 34.1]], [[74.66, 36.32], [74.5, 36.0], [74.6, 35.76]]], places: [['Hunza', 74.66, 36.32, 'l'], ['Gilgit', 74.31, 35.92, 'l'], ['Skardu', 75.63, 35.3, 'b'], ['K2', 76.51, 35.88, 'r'], ['Islamabad', 73.05, 33.69, 'r'], ['CHINA', 76.2, 37.05, 'a'], ['AFGHANISTAN', 72.4, 36.85, 'a'], ['KARAKORAM', 76.3, 36.35, 'a']] },
    stamp: { colour: '#15803d', icon: '🏔️' },
    transport: { name: 'Karakoram Highway by truck', verb: 'Ride', emoji: '🚚' },
    scene: 'kkh',
    photo: { file: 'Borith Lake by Azim Tajik.jpg', alt: 'A small lake beside a grey, rubble-covered glacier, with jagged snowy peaks behind in the Hunza valley', author: 'Azim Tajik', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'Assalam-o-Alaikum! Welcome to northern Pakistan, land of some of the highest mountains on Earth. Ride a brightly painted truck along the Karakoram Highway, past huge glaciers and the mighty Indus, towards the border with China.',
      adv: 'Ride the Karakoram Highway. This expedition covers glaciers and glacial hazards (GLOFs and landslides), a cold mountain desert climate in the rain shadow, the Indus as Pakistan’s lifeline, the 2022 floods, the highway as a trade link with China, and Pakistani culture.'
    },
    facts: ['K2, in Pakistan, is the second-highest mountain in the world.', 'The Karakoram has some of the biggest glaciers outside the polar regions.', 'Pakistani trucks are famous for their colourful art.'],
    climate: {
      place: 'Skardu (2,200 m), Pakistan', source: '1961–2009 averages (climatestotravel.com)', lat: '35°N', rmax: 50, rstep: 10,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-2.4, 0.8, 7.0, 12.7, 16.5, 21.0, 24.0, 23.6, 19.3, 12.4, 5.6, 0.5],
      rain: [28, 26, 37, 31, 25, 9, 10, 12, 9, 7, 6, 16]
    },
    diagrams: { glacier: GLACIER_SVG },
    stations: [
      {
        id: 'ice', title: 'Rivers of ice', icon: '🧊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'glacier', prompt: 'Label this Karakoram valley.',
              spots: [{ x: 20, y: 7, a: 'Peak' }, { x: 16, y: 45, a: 'Glacier' }, { x: 33, y: 76, a: 'Meltwater lake' }, { x: 63, y: 60, a: 'Pile of rocks (dam)' }, { x: 70, y: 94, a: 'River' }, { x: 93, y: 71, a: 'Village' }],
              extra: [],
              explain: 'As the glacier melts, water collects in a lake held back by a pile of rocks. If the rocks give way, a flood rushes down to the village.' },
            { type: 'mcq', photo: true, q: 'Look at the photo from the Hunza valley. What is the long grey feature beside the lake?', options: ['A glacier covered in rocks', 'A road', 'A sand dune blown in from the desert', 'A lava flow'], answer: 0,
              explain: 'Many Karakoram glaciers are covered in rock and dirt that fell from the steep mountains above.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is K2 from Skardu?', options: ['North-east', 'South-west', 'North-west', 'South-east'], answer: 0,
              explain: 'K2 is about 100 km north-east of Skardu. Climbers trek up the Baltoro Glacier to reach it.' }
          ],
          adv: [
            { type: 'label', diagram: 'glacier', prompt: 'Label the glacial hazard. One label does not belong.',
              spots: [{ x: 20, y: 7, a: 'Snow-capped peak' }, { x: 16, y: 45, a: 'Retreating glacier' }, { x: 33, y: 76, a: 'Proglacial lake' }, { x: 63, y: 60, a: 'Unstable moraine dam' }, { x: 70, y: 94, a: 'Meltwater river' }, { x: 93, y: 71, a: 'Settlement at risk' }],
              extra: ['Ox-bow lake'],
              explain: 'If the moraine dam fails, a glacial lake outburst flood (GLOF) can surge down the valley in minutes.' },
            { type: 'mcq', photo: true, q: 'Study the photo. Why are many Karakoram glaciers covered in rock debris?', options: ['Freeze-thaw drops rock from steep slopes', 'Rivers carry gravel uphill and onto the ice', 'Volcanoes erupt rock over them', 'People dump rubble on them'], answer: 0,
              explain: 'The debris layer can slow melting by shading the ice, one reason some Karakoram glaciers have been stable or advancing.' },
            { type: 'mcq', q: 'In 2022 a glacial lake outburst from the Shishper Glacier destroyed a bridge on the Karakoram Highway. Which strategy reduces GLOF risk?', options: ['Early warning systems and draining risky lakes', 'Building many more homes down on the valley floor', 'Removing all bridges permanently', 'Planting trees on the glacier'], answer: 0,
              explain: 'Sensors and sirens give villages time to move to higher ground. Some lakes are lowered by cutting channels.' }
          ]
        }
      },
      {
        id: 'climate', title: 'A mountain desert', icon: '🌨️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the coldest month in Skardu?', options: ['January', 'July', 'May', 'September'], answer: 0,
              explain: 'January averages about −2°C. Nights can be −10°C or colder.' },
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Skardu?', options: ['March', 'July', 'October', 'November'], answer: 0,
              explain: 'March has about 37 mm, mostly snow and rain from weather systems coming from the west.' },
            { type: 'mcq', graph: true, q: 'How would you describe Skardu’s summers?', options: ['Warm and dry', 'Freezing and snowy', 'Hot and very wet', 'Cold and foggy'], answer: 0,
              explain: 'July averages 24°C with only about 10 mm of rain. Farms need irrigation from glacier meltwater.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual precipitation in Skardu (mm), using the monthly figures.', answer: 216, tol: 3, unit: 'mm',
              explain: 'Adding the twelve months gives 216 mm, so Skardu is a cold desert.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Skardu (°C). Give one decimal place.', answer: 26.4, tol: 0.2, unit: '°C',
              explain: 'Warmest 24.0°C − coldest −2.4°C = 26.4°C, a large continental range.' },
            { type: 'mcq', graph: true, q: 'Most of Pakistan gets its rain in the summer monsoon, but Skardu does not. Why?', options: ['The mountains block the monsoon', 'It is too far north for any rain', 'The sea is too cold nearby', 'Skardu is below sea level'], answer: 0,
              explain: 'Skardu’s small amount of precipitation comes in winter and spring from western disturbances, weather systems that travel from the Mediterranean.' }
          ]
        }
      },
      {
        id: 'indus', title: 'The Indus and the highway', icon: '🛣️',
        tasks: {
          ks3: [
            { type: 'mcq', photo: { file: 'Landslide Attaabad.jpg', alt: 'A huge pile of rock and earth filling a narrow mountain valley, blocking the river', author: 'Shakeelgilgity', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' }, q: 'This photo shows the Attabad landslide in 2010. What did it do to the Hunza River?', options: ['It blocked the river and made a lake', 'It made the river flow uphill', 'It dried the river up for ever', 'It turned the river into a glacier'], answer: 0,
              explain: 'Water built up behind the landslide, forming Attabad Lake and flooding villages and part of the highway.' },
            { type: 'mcq', q: 'The Karakoram Highway links Pakistan with which country?', options: ['China', 'India', 'Iran', 'Russia'], answer: 0,
              explain: 'It crosses the Khunjerab Pass at 4,693 m, one of the highest paved border crossings in the world.' },
            { type: 'mcq', q: 'Where does most of the water in the Indus River come from?', options: ['Melting snow and glaciers', 'The sea', 'Underground volcanoes', 'Desert oases'], answer: 0,
              explain: 'The Indus supplies water for farms across Pakistan, one of the largest irrigation systems in the world.' }
          ],
          adv: [
            { type: 'mcq', photo: { file: 'Landslide Attaabad.jpg', alt: 'A huge pile of rock and earth filling a narrow mountain valley, blocking the river', author: 'Shakeelgilgity', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' }, q: 'Study the photo of the Attabad landslide. Which factor made the valley sides likely to fail?', options: ['Steep, cracked slopes in rising mountains', 'Gentle slopes covered in thick, old forest', 'Deep tropical soils', 'Thick ice holding the rock'], answer: 0,
              explain: 'The Karakoram is still rising as the Indian and Eurasian plates collide, so slopes are steep, cracked and shaken by earthquakes.' },
            { type: 'sort', q: 'Classify these impacts of Pakistan’s 2022 floods.', bins: ['Social', 'Economic'],
              items: [['More than 1,700 deaths', 0], ['Millions of people displaced', 0], ['Schools and clinics destroyed', 0], ['Crops and livestock lost', 1], ['Roads and bridges washed away', 1], ['Billions of dollars of damage', 1]],
              explain: 'Extreme monsoon rain and glacier melt put about a third of the country under water, affecting over 30 million people.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the straight-line distance from Gilgit to Skardu.', options: ['About 140 km', 'About 20 km', 'About 600 km', 'About 1,500 km'], answer: 0,
              explain: 'It is about 140 km south-east, but the winding mountain road along the Indus is much longer.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Truck art and apricots', icon: '🚚',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: Pakistani trucks are famous for what?', options: ['Colourful painted decorations', 'Being made of wood only', 'Having no wheels', 'Being painted all black'], answer: 0,
              explain: 'Truck art includes flowers, birds, poems and bells. Drivers spend a lot of money decorating their trucks.' },
            { type: 'mcq', q: 'Culture: which sport is the most popular in Pakistan?', options: ['Cricket', 'Ice hockey', 'Baseball', 'Skiing'], answer: 0,
              explain: 'Pakistan won the Cricket World Cup in 1992.' },
            { type: 'mcq', q: 'Culture: which fruit is grown and dried in the Hunza valley?', options: ['Apricots', 'Bananas', 'Pineapples', 'Coconuts'], answer: 0,
              explain: 'Apricot orchards turn the valley pink with blossom in spring. The fruit is dried on rooftops for winter.' }
          ],
          adv: [
            { type: 'mcq', q: 'The Karakoram Highway is part of the China–Pakistan Economic Corridor (CPEC). What is its main aim?', options: ['Linking western China to the Arabian Sea by land', 'Building ski resorts on glaciers', 'Moving all the people out of the mountains to cities', 'Exporting ice to China'], answer: 0,
              explain: 'Roads, railways and a port at Gwadar aim to boost trade, though costs, debt and local benefits are debated.' },
            { type: 'mcq', q: 'Pakistan has about 240 million people. Which is a challenge of such rapid population growth?', options: ['Providing enough water, jobs and schools', 'Too few young people', 'Too much spare farmland for everyone to use', 'Falling demand for food'], answer: 0,
              explain: 'Pakistan is one of the most populous countries in the world, with a very young population.' },
            { type: 'mcq', q: 'Culture: what is Pakistan’s national language?', options: ['Urdu', 'Arabic', 'Persian', 'Turkish'], answer: 0,
              explain: 'English is also official, and many regional languages are spoken, such as Punjabi, Pashto and Burushaski in Hunza.' }
          ]
        }
      }
    ]
  };
})();
