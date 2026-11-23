/* Travel the Wright Way — destination: Oman (wadis and flash floods, the falaj irrigation system, a hot desert climate, water supply and desalination, and Omani culture).
 * Climate data: Muscat, 1991–2020 averages (climatestotravel.com).
 * Facts: Muscat gets about 100 mm of rain a year, falling mostly between December and April; summers are extremely hot;
 *   wadis are dry river valleys that can fill suddenly with flash floods after storms in the Hajar Mountains; Wadi Shab, near Sur, has pools in a narrow limestone gorge;
 *   aflaj (singular falaj) are channels that carry water by gravity from springs, wadis or underground sources to villages and farms; five aflaj became a UNESCO World Heritage Site in 2006, and about 3,000 are still in use;
 *   pumped boreholes are lowering water tables and drying up some aflaj; most drinking water in Muscat now comes from desalination plants;
 *   Cyclone Gonu (2007) and Cyclone Shaheen (2021) brought severe flooding; the Dhofar region around Salalah gets light monsoon rain (khareef) from June to September;
 *   Oman has a long seafaring history; the dhow is a traditional wooden sailing boat; frankincense trees grow in Dhofar; dates are a staple crop.
 */
(function () {
  var FALAJ_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a falaj: rain on the mountains soaks into the ground, a mother well reaches the water table, an underground tunnel with access shafts carries water downhill by gravity to an open channel and date palm gardens in a village">' +
  '<rect width="600" height="420" fill="#e5eef5"/>' +
  // mountains
  '<path d="M0 420 L0 120 L60 60 L120 110 L170 150 L600 250 L600 420 Z" fill="#b08a62"/>' +
  // rain
  '<g stroke="#3b82f6" stroke-width="2">' + (function () { var g = ''; for (var i = 0; i < 8; i++) g += '<line x1="' + (20 + i * 18) + '" y1="20" x2="' + (14 + i * 18) + '" y2="40"/>'; return g; })() + '</g><g fill="#94a3b8"><ellipse cx="80" cy="16" rx="70" ry="12"/></g>' +
  // groundwater
  '<path d="M0 260 C 120 270, 300 300, 600 330 L600 420 L0 420 Z" fill="#7fb6dd" opacity=".75"/>' +
  '<path d="M0 260 C 120 270, 300 300, 600 330" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6 4"/>' +
  // mother well and shafts
  '<rect x="110" y="104" width="10" height="164" fill="#5b4630"/>' +
  '<g fill="#5b4630">' + (function () { var g = ''; for (var i = 0; i < 5; i++) { var x = 170 + i * 50, top = 150 + i * 22, bot = 268 + i * 6; g += '<rect x="' + x + '" y="' + top + '" width="7" height="' + (bot - top) + '"/><ellipse cx="' + (x + 3) + '" cy="' + (top - 2) + '" rx="10" ry="4"/>'; } return g; })() + '</g>' +
  // tunnel
  '<path d="M115 268 C 220 278, 340 290, 430 264 L470 252" fill="none" stroke="#2563eb" stroke-width="6"/>' +
  // open channel and village
  '<path d="M470 252 L600 250" stroke="#2563eb" stroke-width="5"/>' +
  '<g>' + (function () { var g = ''; for (var i = 0; i < 4; i++) { var x = 490 + i * 30; g += '<line x1="' + x + '" y1="248" x2="' + (x + 2) + '" y2="208" stroke="#7a5a32" stroke-width="3"/><path d="M' + (x + 2) + ' 208 l-14 6 M' + (x + 2) + ' 208 l14 6 M' + (x + 2) + ' 208 l-10 -8 M' + (x + 2) + ' 208 l10 -8" stroke="#3f7f2a" stroke-width="3"/>'; } return g; })() + '</g>' +
  '<g fill="#e9dcc2" stroke="#8a7a62"><rect x="440" y="226" width="24" height="20"/><rect x="560" y="222" width="26" height="24"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="200" y1="30" x2="150" y2="30"/><line x1="78" y1="100" x2="112" y2="112"/><line x1="70" y1="330" x2="90" y2="268"/><line x1="320" y1="360" x2="320" y2="290"/><line x1="260" y1="120" x2="273" y2="190"/><line x1="516" y1="176" x2="530" y2="206"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.oman = {
    id: 'oman',
    name: 'Oman',
    short: 'Oman',
    country: 'Oman',
    gateway: 'Muscat',
    lonlat: [58.59, 23.61],
    locator: { box: [51.5, 60.6, 15.8, 26.9], places: [['Muscat', 58.59, 23.61, 'l'], ['Nizwa', 57.53, 22.93, 'l'], ['Sur', 59.53, 22.57, 'b'], ['Salalah', 54.09, 17.02, 'r'], ['HAJAR MTS', 57.0, 24.3, 'a'], ['Arabian Sea', 58.5, 19.0, 'a'], ['RUB AL KHALI', 53.6, 21.0, 'a'], ['UAE', 54.4, 24.3, 'a']] },
    stamp: { colour: '#b45309', icon: '🏜️' },
    transport: { name: 'dhow', verb: 'Sail', emoji: '⛵' },
    scene: 'dhow',
    photo: { file: 'Wadi Shab (14).jpg', alt: 'A narrow rocky gorge with steep pale cliffs and clear green pools of water at the bottom', author: 'Bertil Videt', licence: 'CC BY 2.5', licenceUrl: 'https://creativecommons.org/licenses/by/2.5/' },
    intro: {
      ks3: 'Marhaba! Welcome to Oman. Sail a wooden dhow along the rocky coast, then hike into a wadi, a dry desert valley that can flood in minutes. Find out how Omanis have moved water to their farms for over a thousand years.',
      adv: 'Sail the coast of Oman. This expedition covers a hot desert climate, wadis and flash floods, the falaj irrigation system, falling water tables and desalination, cyclones and the Dhofar monsoon, and Omani culture.'
    },
    facts: ['About 3,000 ancient water channels (aflaj) are still used in Oman.', 'Muscat gets less than 100 mm of rain in a typical year.', 'Frankincense trees grow in the south of Oman.'],
    climate: {
      place: 'Muscat, Oman', source: '1991–2020 averages (climatestotravel.com)', lat: '24°N', rmax: 50, rstep: 10,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [20.9, 22.1, 24.8, 29.3, 34.1, 35.0, 33.6, 32.0, 31.2, 29.4, 25.4, 22.3],
      rain: [13, 14, 16, 11, 0, 11, 3, 2, 0, 1, 2, 16]
    },
    diagrams: { falaj: FALAJ_SVG },
    stations: [
      {
        id: 'wadi', title: 'Wadis and flash floods', icon: '🏞️',
        tasks: {
          ks3: [
            { type: 'mcq', photo: true, q: 'Look at the photo of Wadi Shab. What is a wadi?', options: ['A valley that is usually dry but floods after rain', 'A type of sand dune', 'A large lake in the desert', 'A volcano'], answer: 0,
              explain: 'Some wadis, like Wadi Shab, keep pools all year, fed by springs.' },
            { type: 'mcq', q: 'Why are flash floods in wadis so dangerous?', options: ['Water rises very fast with little warning', 'They only happen in winter', 'The water is always far too cold to swim in', 'They happen every day'], answer: 0,
              explain: 'Rain on bare mountains runs off quickly into narrow wadis. Drivers are warned never to cross a flowing wadi.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Sur from Muscat?', options: ['South-east', 'North-west', 'North-east', 'South-west'], answer: 0,
              explain: 'Sur, a dhow-building town, is about 150 km south-east of Muscat along the coast.' }
          ],
          adv: [
            { type: 'mcq', photo: true, q: 'Study the photo of Wadi Shab. Which process mainly formed this steep-sided gorge?', options: ['Vertical erosion by occasional powerful floods', 'Glaciers grinding the valley floor during the Ice Age', 'Wind carving the cliffs', 'Waves eroding the coast'], answer: 0,
              explain: 'Rare but violent floods carry rocks that cut down into the limestone, deepening the gorge.' },
            { type: 'mcq', q: 'Why do flash floods happen quickly in desert areas like Oman?', options: ['Hard, bare ground lets little water soak in', 'Deserts have deep, wet soils that soak up the rain', 'Forests block the rivers', 'The rain falls very gently'], answer: 0,
              explain: 'Little vegetation and baked soil mean high surface runoff and a short lag time.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the straight-line distance from Muscat to Salalah.', options: ['About 870 km', 'About 150 km', 'About 2,500 km', 'About 5,000 km'], answer: 0,
              explain: 'It is about 870 km south-west, across the desert. Salalah has a very different climate with summer monsoon drizzle.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Hot and dry', icon: '☀️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the hottest month in Muscat?', options: ['June', 'January', 'December', 'March'], answer: 0,
              explain: 'June averages about 35°C, with afternoons often above 40°C.' },
            { type: 'mcq', graph: true, q: 'When does most of Muscat’s rain fall?', options: ['In winter and spring', 'In summer', 'In autumn only', 'Evenly throughout every month'], answer: 0,
              explain: 'Weather systems from the west bring occasional winter storms. Summers are almost completely dry.' },
            { type: 'mcq', graph: true, q: 'What is the temperature in January?', options: ['About 21°C', 'About 0°C', 'About 35°C', 'About −10°C'], answer: 0,
              explain: 'Winters are warm and sunny, the best time for visitors.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Muscat (mm).', answer: 89, tol: 2, unit: 'mm',
              explain: 'Adding the twelve months gives 89 mm, so Muscat has a hot desert climate.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly rain falls from December to April? Give a whole number.', answer: 79, tol: 1, unit: '%',
              explain: 'December to April = 70 mm out of 89 mm, which is about 79%.' },
            { type: 'mcq', q: 'Why is northern Oman so dry?', options: ['It lies under the subtropical high-pressure belt', 'It is too far north for any rain', 'Cold ocean currents freeze the clouds', 'It is in the ITCZ all year'], answer: 0,
              explain: 'Sinking air at about 20–30°N warms and dries, so clouds rarely form. The same belt creates the Sahara.' }
          ]
        }
      },
      {
        id: 'water', title: 'Ancient channels', icon: '💧',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'falaj', prompt: 'Label how a falaj brings water to a village.',
              spots: [{ x: 33, y: 7, a: 'Rain' }, { x: 13, y: 22, a: 'Mother well' }, { x: 12, y: 79, a: 'Groundwater' }, { x: 53, y: 86, a: 'Tunnel' }, { x: 43, y: 28, a: 'Access shaft' }, { x: 86, y: 40, a: 'Date palms' }],
              extra: [],
              explain: 'Rain soaks into the mountains. A well reaches the groundwater, and a gently sloping tunnel carries it downhill to the village, with no pumps.' },
            { type: 'mcq', q: 'How does water move along a falaj?', options: ['By gravity, flowing downhill', 'It is pumped uphill by electric machines', 'It is carried by camels', 'It is blown by the wind'], answer: 0,
              explain: 'The channel slopes very gently all the way, so water flows on its own.' },
            { type: 'mcq', q: 'Today most of Muscat’s drinking water comes from where?', options: ['Sea water with the salt removed', 'Melting glaciers', 'Rivers from Africa', 'Rain collected on roofs and stored in tanks'], answer: 0,
              explain: 'This is called desalination. It uses a lot of energy but gives a reliable supply.' }
          ],
          adv: [
            { type: 'label', diagram: 'falaj', prompt: 'Label the daudi (underground) falaj. One label does not belong.',
              spots: [{ x: 33, y: 7, a: 'Mountain rainfall' }, { x: 13, y: 22, a: 'Mother well (umm al-falaj)' }, { x: 12, y: 79, a: 'Water table' }, { x: 53, y: 86, a: 'Gravity-fed tunnel' }, { x: 43, y: 28, a: 'Access shafts for cleaning' }, { x: 86, y: 40, a: 'Irrigated oasis' }],
              extra: ['Electric pump'],
              explain: 'A falaj needs no pumps. Shafts give access for digging and cleaning the tunnel.' },
            { type: 'mcq', q: 'Why are some aflaj drying up?', options: ['Pumped boreholes are lowering the water table', 'Too much rain is flooding them', 'Sand is filling the sea', 'Glaciers are growing'], answer: 0,
              explain: 'Boreholes can pump faster than rain recharges the aquifer. The government restricts new wells near aflaj.' },
            { type: 'sort', q: 'Classify these ways Oman supplies water.', bins: ['Traditional', 'Modern'],
              items: [['Aflaj channels', 0], ['Hand-dug wells', 0], ['Shared water timetables in villages', 0], ['Desalination plants', 1], ['Pumped boreholes', 1], ['Recharge dams on wadis', 1]],
              explain: 'Recharge dams hold back flash floods so the water soaks into the ground to refill aquifers.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Dhows and frankincense', icon: '⛵',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what is a dhow?', options: ['A traditional wooden sailing boat', 'A desert fox', 'A type of flat bread baked in a clay oven', 'A camel saddle'], answer: 0,
              explain: 'Omani sailors traded across the Indian Ocean to East Africa and India for centuries.' },
            { type: 'mcq', q: 'Culture: which sweet-smelling resin has been collected from trees in southern Oman for thousands of years?', options: ['Frankincense', 'Maple syrup', 'Rubber', 'Honey'], answer: 0,
              explain: 'It is burned as incense and was once worth as much as gold.' },
            { type: 'mcq', q: 'Which fruit grows on the palm trees watered by aflaj?', options: ['Dates', 'Apples', 'Grapes', 'Cherries'], answer: 0,
              explain: 'Dates are served with coffee (kahwa) to welcome guests.' }
          ],
          adv: [
            { type: 'mcq', q: 'Salalah, in the far south, turns green in summer. Why?', options: ['Monsoon winds bring drizzle and mist (khareef)', 'Snow melts in the mountains', 'Rivers flow from the Himalayas', 'Desalination water is sprayed on the hills by trucks'], answer: 0,
              explain: 'People from across the Gulf visit to escape the summer heat.' },
            { type: 'mcq', q: 'In 2021 Cyclone Shaheen hit northern Oman. Why are cyclones so damaging in a desert country?', options: ['Huge rainfall causes flash floods in wadis', 'They bring heavy snow', 'They cool the sea so much that all the fish die', 'They never bring wind'], answer: 0,
              explain: 'A year’s rain can fall in a day. Homes and roads in wadis are especially at risk.' },
            { type: 'mcq', q: 'Oman’s economy depends heavily on oil. Which is a strategy to diversify it?', options: ['Developing tourism and fisheries', 'Closing all ports', 'Banning tourism', 'Stopping all trade with neighbouring countries'], answer: 0,
              explain: 'Oman’s “Vision 2040” aims to reduce reliance on oil and gas, which will eventually run out.' }
          ]
        }
      }
    ]
  };
})();
