/* Travel the Wright Way — destination: Ethiopia (the highlands and the Blue Nile, a highland climate with long rains, farming and development, and Ethiopian culture).
 * Climate data: Addis Ababa (about 2,350 m), long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: the Ethiopian Highlands are often called the "water tower of Africa"; the Blue Nile (Abay) flows out of Lake Tana and supplies most of the Nile's water during the flood season;
 *   the Grand Ethiopian Renaissance Dam (GERD) on the Blue Nile, the largest hydro-electric dam in Africa, was inaugurated in 2025;
 *   the Danakil Depression lies below sea level and is one of the hottest places on Earth; the Great Rift Valley runs through Ethiopia;
 *   the main rains (kiremt) fall from June to September, with smaller belg rains in spring; teff, the grain used for injera, is native to Ethiopia;
 *   coffee is believed to have originated in Ethiopia; the coffee ceremony is a central part of social life; Lalibela's rock-hewn churches are a UNESCO World Heritage Site;
 *   Ethiopia uses its own calendar with 13 months; the fossil "Lucy" (about 3.2 million years old) was found at Hadar in 1974; Addis Ababa is the headquarters of the African Union.
 */
(function () {
  var HIGHLAND_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map-style diagram of Ethiopia showing the highlands, Lake Tana, the Blue Nile flowing to a large dam, the Great Rift Valley and the Danakil Depression">' +
  '<rect width="600" height="420" fill="#e3c88f"/>' +
  // highlands
  '<path d="M120 60 L400 40 L470 160 L430 300 L300 380 L150 330 L90 200 Z" fill="#7fae5a" stroke="#5f8a3a" stroke-width="2"/>' +
  '<g fill="none" stroke="#5f8a3a" stroke-width="1.5" opacity=".7"><path d="M150 90 L380 70 L430 160 L400 270 L300 340 L170 300 L120 200 Z"/><path d="M190 120 L350 104 L390 170 L360 250 L290 300 L200 270 L160 200 Z"/></g>' +
  // Danakil Depression
  '<path d="M470 40 L590 30 L590 150 L500 150 Z" fill="#f1e6a8"/><g fill="#e8c547">' + (function () { var g = ''; for (var i = 0; i < 12; i++) g += '<circle cx="' + (490 + (i * 23) % 90) + '" cy="' + (60 + (i * 17) % 80) + '" r="4"/>'; return g; })() + '</g>' +
  // Rift Valley
  '<path d="M470 170 L500 180 L380 420 L340 420 Z" fill="#c9a66b"/><g fill="#5fb3e0"><ellipse cx="440" cy="260" rx="10" ry="18"/><ellipse cx="410" cy="320" rx="9" ry="16"/><ellipse cx="385" cy="380" rx="9" ry="14"/></g>' +
  // Lake Tana and Blue Nile
  '<ellipse cx="222" cy="118" rx="30" ry="22" fill="#3d8fc6"/>' +
  '<path d="M224 140 C 250 165, 252 190, 232 210 C 210 228, 170 226, 140 206 C 120 192, 100 180, 74 174 L0 168" fill="none" stroke="#1f6fb2" stroke-width="7" stroke-linecap="round"/>' +
  '<rect x="66" y="160" width="10" height="28" fill="#4b5563"/>' +
  // Addis Ababa
  '<circle cx="320" cy="258" r="6" fill="#b42318" stroke="#fff" stroke-width="2"/><text x="330" y="262" font-size="12" font-weight="700" fill="#11243b">Addis Ababa</text>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="228" y1="56" x2="222" y2="96"/><line x1="520" y1="48" x2="530" y2="86"/><line x1="84" y1="140" x2="70" y2="160"/><line x1="120" y1="256" x2="150" y2="214"/><line x1="440" y1="280" x2="420" y2="296"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.ethiopia = {
    id: 'ethiopia',
    name: 'Ethiopia',
    short: 'Ethiopia',
    country: 'Ethiopia',
    gateway: 'Addis Ababa',
    lonlat: [38.74, 9.03],
    locator: { box: [32, 48.5, 3, 16.5], rivers: [[[37.4, 11.6], [37.9, 10.6], [37.4, 10.1], [36.2, 10.4], [35.1, 11.2], [34.0, 11.5], [33.0, 12.5]]], lakes: [[[37.1, 12.2], [37.6, 12.2], [37.6, 11.65], [37.1, 11.7]]], places: [['Addis Ababa', 38.74, 9.03, 'r'], ['Lalibela', 39.04, 12.03, 'r'], ['Simien Mts', 38.4, 13.2, 'r'], ['Danakil', 40.6, 14.4, 'r'], ['ERITREA', 38.0, 15.6, 'a'], ['SUDAN', 33.8, 13.8, 'a'], ['KENYA', 37.8, 3.6, 'a']] },
    stamp: { colour: '#16a34a', icon: '☕' },
    transport: { name: 'trek in the Simien Mountains', verb: 'Trek', emoji: '🥾' },
    scene: 'simien',
    photo: { file: 'Gelada Baboons, Simien Mountains, Ethiopia (2457852901).jpg', alt: 'A troop of gelada monkeys grazing on a grassy hillside in the Simien Mountains of Ethiopia', author: 'A. Davey', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'Selam! Welcome to Ethiopia, a land of high mountains, deep gorges and the source of the Blue Nile. Trek along the Simien escarpment, where gelada monkeys graze on cliff tops, and find out why Ethiopia is called the water tower of Africa.',
      adv: 'Trek through the Ethiopian Highlands. This expedition covers relief and the Rift Valley, a highland climate with seasonal rains, the Blue Nile and the Grand Ethiopian Renaissance Dam, land degradation and food security, and Ethiopia’s ancient culture.'
    },
    facts: ['Ethiopia is often called the “water tower of Africa”.', 'Coffee is believed to have first come from Ethiopia.', 'Ethiopia uses its own calendar, which has 13 months.'],
    climate: {
      place: 'Addis Ababa, Ethiopia (2,350 m)', source: 'Long-term averages (CRU / Met Office)', lat: '9°N', rmax: 300, rstep: 50,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [13.5, 15.0, 16.0, 16.0, 16.0, 15.5, 15.0, 14.5, 14.5, 14.0, 13.0, 12.5],
      rain: [23, 47, 74, 97, 93, 127, 274, 281, 176, 43, 13, 11]
    },
    diagrams: { highland: HIGHLAND_SVG },
    stations: [
      {
        id: 'water', title: 'The water tower of Africa', icon: '💧',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'highland', prompt: 'Label this map of Ethiopia.',
              spots: [{ x: 38, y: 10, a: 'Lake Tana' }, { x: 84, y: 8, a: 'Danakil Depression' }, { x: 14, y: 30, a: 'Dam' }, { x: 40, y: 50, a: 'Highlands' }, { x: 16, y: 64, a: 'Blue Nile' }, { x: 82, y: 66, a: 'Rift Valley' }],
              extra: [],
              explain: 'The Blue Nile flows out of Lake Tana and through a deep gorge to a huge dam near the border. The Rift Valley cuts through the highlands, and the Danakil Depression is a hot desert below sea level.' },
            { type: 'mcq', q: 'Why are the Ethiopian Highlands called the “water tower of Africa”?', options: ['Heavy rain there feeds great rivers', 'They have the most water towers', 'They are covered in glaciers', 'They are surrounded by sea on every side'], answer: 0,
              explain: 'Summer rain on the highlands feeds the Blue Nile and other rivers that flow to Sudan, Egypt, Somalia and Kenya.' },
            { type: 'mcq', q: 'Ethiopia has built Africa’s largest hydro-electric dam on the Blue Nile. What is its main purpose?', options: ['To generate electricity', 'To stop all water reaching Egypt', 'To make a ski resort', 'To grow rice in the lake'], answer: 0,
              explain: 'Millions of Ethiopians had no electricity. The Grand Ethiopian Renaissance Dam was inaugurated in 2025.' }
          ],
          adv: [
            { type: 'label', diagram: 'highland', prompt: 'Label the physical geography of Ethiopia. One label does not belong.',
              spots: [{ x: 38, y: 10, a: 'Lake Tana (source)' }, { x: 84, y: 8, a: 'Danakil Depression' }, { x: 14, y: 30, a: 'GERD hydro dam' }, { x: 40, y: 50, a: 'Ethiopian Highlands' }, { x: 16, y: 64, a: 'Blue Nile gorge' }, { x: 82, y: 66, a: 'Great Rift Valley' }],
              extra: ['Delta'],
              explain: 'Deltas form where rivers reach the sea. Ethiopia is landlocked; the Blue Nile’s delta is far away in Egypt.' },
            { type: 'mcq', q: 'The Danakil Depression lies below sea level and has active volcanoes and hot springs. Why?', options: ['Plates are pulling apart there', 'A meteorite struck it', 'Glaciers carved it out during the last ice age', 'Rivers eroded it'], answer: 0,
              explain: 'It lies near the Afar Triple Junction, where three plates are diverging and new crust is forming.' },
            { type: 'mcq', q: 'Why is the GERD a cause of tension with Egypt and Sudan?', options: ['They depend on Nile water flowing from Ethiopia', 'It blocks the main shipping route between Asia and Europe', 'It makes the Nile saltier', 'It floods the Sahara'], answer: 0,
              explain: 'Ethiopia argues it needs power for development; downstream countries want agreements on filling and drought releases.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Big rains in the highlands', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Addis Ababa?', options: ['August', 'December', 'January', 'November'], answer: 0,
              explain: 'August gets about 281 mm. The big rains fall from June to September.' },
            { type: 'mcq', graph: true, q: 'Addis Ababa is near the Equator, but its temperature is only about 12–16°C. Why?', options: ['It is very high above sea level', 'It is close to the North Pole and the Arctic Circle', 'It is cloudy all year', 'Cold sea currents cool it'], answer: 0,
              explain: 'At about 2,350 m, Addis Ababa is one of the highest capital cities in the world, so it is mild all year.' },
            { type: 'mcq', graph: true, q: 'Which months are driest in Addis Ababa?', options: ['November to January', 'June to August', 'April and May', 'July to September'], answer: 0,
              explain: 'The dry season is sunny and cool, with very little rain.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Addis Ababa (mm).', answer: 1259, tol: 10, unit: 'mm',
              explain: 'Adding the twelve months gives about 1,259 mm.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly rain falls in the main rains, June to September? Give a whole number.', answer: 68, tol: 1, unit: '%',
              explain: 'June to September = 858 mm out of 1,259 mm, which is about 68%.' },
            { type: 'mcq', q: 'Why do the main rains (kiremt) come in June to September?', options: ['The ITCZ moves north over Ethiopia', 'Atlantic depressions arrive in summer', 'Snow melts on the mountains', 'Winds blow from the Sahara'], answer: 0,
              explain: 'Moist air is pulled in and forced up over the highlands, giving heavy relief and convectional rain.' }
          ]
        }
      },
      {
        id: 'land', title: 'Farming the highlands', icon: '🌾',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Teff is a tiny grain grown in Ethiopia. What is it used to make?', options: ['Injera, a spongy flatbread', 'Pasta', 'Chocolate', 'Rice wine for festivals and weddings'], answer: 0,
              explain: 'Injera is eaten with stews called wat and is the centre of most Ethiopian meals.' },
            { type: 'mcq', q: 'Heavy rain on steep, bare slopes causes which problem?', options: ['Soil erosion', 'Glaciers', 'Earthquakes', 'Tsunamis'], answer: 0,
              explain: 'Farmers build terraces and stone walls, and plant trees, to hold the soil in place.' },
            { type: 'mcq', q: 'Since 2019, Ethiopia’s Green Legacy campaign has planted billions of seedlings. Why?', options: ['To restore forests and protect soil and water', 'To build more roads', 'To grow more coffee beans for export to Europe and Asia', 'To block the wind'], answer: 0,
              explain: 'Forests reduce erosion, store carbon and help rainfall soak into the ground.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these causes of food insecurity in Ethiopia.', bins: ['Physical', 'Human'],
              items: [['Failed or late rains', 0], ['Soil erosion on steep slopes', 0], ['Locust swarms', 0], ['Conflict disrupting farming', 1], ['Small, divided farm plots', 1], ['Poor roads to markets', 1]],
              explain: 'Ethiopia has greatly reduced poverty since the 1990s, but droughts and conflict can still cause severe food shortages.' },
            { type: 'mcq', q: 'Ethiopia has the second-largest population in Africa. Which is a key opportunity of a young population?', options: ['A large future workforce', 'Fewer schools needed', 'Lower demand for food, water and housing', 'An ageing population'], answer: 0,
              explain: 'If there are enough jobs and education, a large young workforce can boost economic growth: a demographic dividend.' },
            { type: 'mcq', q: 'Coffee is one of Ethiopia’s most important exports. Why is depending on it risky?', options: ['World coffee prices go up and down', 'Coffee does not grow in Ethiopia', 'Coffee needs snow', 'Nobody drinks coffee'], answer: 0,
              explain: 'Falling prices can cut farmers’ incomes overnight. Diversifying exports, such as flowers and manufacturing, spreads the risk.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Coffee, churches and Lucy', icon: '☕',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what happens in a traditional Ethiopian coffee ceremony?', options: ['Beans are roasted, ground and brewed for guests', 'Coffee is thrown at a wall', 'Coffee is drunk only by children', 'Coffee beans are planted in the garden as a gift for each guest'], answer: 0,
              explain: 'The ceremony can last an hour or more and is a time to talk with family and neighbours.' },
            { type: 'mcq', q: 'Culture: the churches of Lalibela are famous. How were they built?', options: ['Carved out of solid rock', 'Made of glass', 'Built from blocks of ice in winter', 'Made of bamboo'], answer: 0,
              explain: 'Around 800 years ago, the churches were cut down into the rock. They are a UNESCO World Heritage Site and still used for worship.' },
            { type: 'mcq', q: 'In 1974 a famous fossil of an early human ancestor was found in Ethiopia. What is she called?', options: ['Lucy', 'Rosie', 'Daisy', 'Polly'], answer: 0,
              explain: 'Lucy lived about 3.2 million years ago. Ethiopia is sometimes called the cradle of humankind.' }
          ],
          adv: [
            { type: 'mcq', q: 'Addis Ababa hosts the headquarters of which organisation?', options: ['The African Union', 'The United Nations', 'The European Union', 'NATO'], answer: 0,
              explain: 'Addis Ababa is sometimes called the political capital of Africa.' },
            { type: 'mcq', q: 'Ethiopia was never colonised, apart from a short Italian occupation (1936–41). How is this reflected today?', options: ['It kept its own script, calendar and traditions', 'Everyone speaks Italian', 'It uses the British calendar and drives on the left', 'It has no capital city'], answer: 0,
              explain: 'Amharic is written in the Ge’ez script, and the Ethiopian calendar is about seven to eight years behind the Western one.' },
            { type: 'mcq', q: 'Why might a new railway to Djibouti be important for landlocked Ethiopia?', options: ['It gives faster access to a seaport', 'It replaces all roads', 'It reduces the need for exports', 'It carries water to the coast'], answer: 0,
              explain: 'The electric railway, opened in 2018, links Addis Ababa to the port of Djibouti, cutting the cost of trade.' }
          ]
        }
      }
    ]
  };
})();
