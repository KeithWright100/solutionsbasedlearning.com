/* Travel the Wright Way — destination: Algeria (a Mediterranean coast and the Sahara, desertification and the Green Dam, M'zab oases and traditional water management, oil and gas, and Algerian culture).
 * Climate data: Algiers, 1991–2020 averages (climatestotravel.com).
 * Facts: Algeria is the largest country in Africa; more than four-fifths of it is Sahara desert, and most people live in the narrow, wetter north near the Mediterranean;
 *   the land rises from the coast to the Tell Atlas mountains, the dry High Plateaus (steppe), the Saharan Atlas and then the Sahara;
 *   the Green Dam (Barrage vert), begun in the 1970s, is a belt of trees planted along the Saharan Atlas to slow desertification; many trees died because one species (Aleppo pine) was planted widely;
 *   the M'zab valley, about 600 km south of Algiers, has five fortified towns (ksour) founded in the 11th century and is a UNESCO World Heritage Site;
 *   its people share the water of rare flash floods in the wadi using dams and channels, and draw groundwater from wells to irrigate palm groves;
 *   Tassili n'Ajjer has more than 15,000 rock paintings and engravings recording a wetter Sahara; oil and gas make up the great majority of Algeria's exports, piped and shipped to Europe;
 *   culture: Arabic and Tamazight (Berber) are official languages; couscous; independence from France in 1962.
 */
(function () {
  var TRANSECT_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="North-to-south cross-section of Algeria: the Mediterranean Sea and coastal city, the Tell Atlas mountains, dry steppe on the High Plateaus, the Saharan Atlas with a belt of planted trees, then the sand dunes of the Sahara with a palm oasis">' +
  '<rect width="600" height="420" fill="#eaf2f8"/>' +
  '<path d="M0 300 L60 300 L60 420 L0 420 Z" fill="#2f86c2"/>' +
  '<path d="M60 300 L100 296 L140 220 L170 180 L200 230 L230 260 L320 266 L350 220 L380 200 L410 250 L450 290 L600 300 L600 420 L60 420 Z" fill="#c9a66b"/>' +
  '<path d="M140 220 L170 180 L200 230 L180 236 L160 230 Z" fill="#3f7f3a"/>' +
  '<g fill="#e5e7eb" stroke="#64748b"><rect x="70" y="276" width="12" height="22"/><rect x="86" y="268" width="12" height="30"/></g>' +
  '<g fill="#a3a36b">' + (function () { var g = ''; for (var i = 0; i < 8; i++) g += '<circle cx="' + (238 + i * 11) + '" cy="' + (258 + (i % 2) * 3) + '" r="3"/>'; return g; })() + '</g>' +
  '<g fill="#2f6a2c">' + (function () { var g = ''; for (var i = 0; i < 5; i++) g += '<path d="M' + (352 + i * 12) + ' ' + (230 - (i < 3 ? i * 8 : (4 - i) * 8)) + ' l6 -18 l6 18 Z"/>'; return g; })() + '</g>' +
  '<g fill="#e9c27a">' + (function () { var g = ''; for (var i = 0; i < 4; i++) g += '<path d="M' + (450 + i * 36) + ' 296 Q ' + (468 + i * 36) + ' 270 ' + (486 + i * 36) + ' 296 Z"/>'; return g; })() + '</g>' +
  '<g>' + (function () { var g = ''; for (var i = 0; i < 3; i++) { var x = 540 + i * 16; g += '<line x1="' + x + '" y1="300" x2="' + (x + 2) + '" y2="276" stroke="#7a5a32" stroke-width="3"/><path d="M' + (x + 2) + ' 276 l-9 5 M' + (x + 2) + ' 276 l9 5 M' + (x + 2) + ' 276 l-6 -6 M' + (x + 2) + ' 276 l6 -6" stroke="#3f7f2a" stroke-width="2.5"/>'; } return g; })() + '</g>' +
  '<g font-family="sans-serif" font-size="12" fill="#1e293b"><text x="6" y="22">N</text><text x="580" y="22">S</text></g><path d="M20 18 L570 18" stroke="#64748b" stroke-width="1"/>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="70" y1="380" x2="84" y2="290"/><line x1="140" y1="110" x2="166" y2="190"/><line x1="270" y1="350" x2="270" y2="262"/><line x1="380" y1="110" x2="372" y2="210"/><line x1="470" y1="370" x2="474" y2="292"/><line x1="530" y1="200" x2="550" y2="276"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.algeria = {
    id: 'algeria',
    name: 'Algeria',
    short: 'Algeria',
    country: 'Algeria',
    gateway: 'Algiers',
    lonlat: [3.67, 32.49],
    locator: { box: [-3.0, 10.5, 29.5, 38.2], places: [['Algiers', 3.06, 36.75, 't'], ['Oran', -0.64, 35.7, 'r'], ['Constantine', 6.61, 36.37, 'b'], ['Ghardaïa', 3.67, 32.49, 'r'], ['Hassi Messaoud', 6.07, 31.67, 'b'], ['Mediterranean Sea', 4.5, 37.8, 'a'], ['SAHARA', 1.5, 30.6, 'a'], ['ATLAS', 1.4, 34.4, 'a']] },
    stamp: { colour: '#047857', icon: '🌴' },
    transport: { name: 'desert bus', verb: 'Ride', emoji: '🚌' },
    scene: 'mzab',
    photo: { file: 'M’zab Valley, Algeria.jpg', alt: 'False-colour satellite image of a winding desert valley: bare rock shows beige and peach, towns show grey, and vegetation in the oases shows bright red along the valley floor', author: 'NASA Earth Observatory', licence: 'Public domain', licenceUrl: 'https://creativecommons.org/publicdomain/mark/1.0/' },
    intro: {
      ks3: 'Salam! Welcome to Algeria, the biggest country in Africa. Take the desert bus from the Mediterranean coast over the Atlas Mountains to the M’zab, where ancient towns grow palm trees in the middle of the Sahara.',
      adv: 'Travel south through Algeria. This expedition covers the contrast between the Mediterranean north and the Sahara, desertification and the Green Dam, traditional oasis water management in the M’zab, Saharan rock art as evidence of climate change, oil and gas dependency, and Algerian culture.'
    },
    facts: ['Algeria is the largest country in Africa.', 'More than four-fifths of Algeria is desert.', 'Rock art at Tassili n’Ajjer shows giraffes and cattle in what is now the Sahara.'],
    climate: {
      place: 'Algiers, Algeria', source: '1991–2020 averages (climatestotravel.com)', lat: '37°N', rmax: 100, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [11.2, 11.4, 13.5, 15.4, 18.7, 22.5, 25.7, 26.6, 23.8, 20.3, 15.5, 12.4],
      rain: [80, 75, 55, 60, 40, 9, 5, 8, 30, 60, 90, 90]
    },
    diagrams: { transect: TRANSECT_SVG },
    stations: [
      {
        id: 'transect', title: 'From sea to Sahara', icon: '🏜️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'transect', prompt: 'Label this journey from the coast to the Sahara.',
              spots: [{ x: 12, y: 90 }, { x: 23, y: 26 }, { x: 45, y: 83 }, { x: 63, y: 26 }, { x: 78, y: 88 }, { x: 88, y: 48 }].map(function (s, i) { s.a = ['Coast and cities', 'Mountains', 'Dry grassland', 'Tree belt', 'Sand dunes', 'Oasis'][i]; return s; }),
              extra: [],
              explain: 'It gets drier the further south you go. Most Algerians live in the green north near the coast.' },
            { type: 'mcq', q: 'Where do most people in Algeria live?', options: ['In the north, near the coast', 'In the middle of the Sahara', 'On top of the highest mountains', 'Evenly spread across the country'], answer: 0,
              explain: 'The north gets enough rain for farming and has the big cities, such as Algiers and Oran.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Ghardaïa from Algiers?', options: ['South', 'North', 'East', 'West'], answer: 0,
              explain: 'Ghardaïa is about 480 km south, on the edge of the Sahara.' }
          ],
          adv: [
            { type: 'label', diagram: 'transect', prompt: 'Label the north–south transect. One label does not belong.',
              spots: [{ x: 12, y: 90 }, { x: 23, y: 26 }, { x: 45, y: 83 }, { x: 63, y: 26 }, { x: 78, y: 88 }, { x: 88, y: 48 }].map(function (s, i) { s.a = ['Mediterranean coastal plain', 'Tell Atlas', 'High Plateaus steppe', 'Green Dam on the Saharan Atlas', 'Erg (sand sea)', 'Irrigated palm oasis'][i]; return s; }),
              extra: ['Tropical rainforest'],
              explain: 'Rainfall drops from about 600 mm a year on the coast to almost nothing in the central Sahara.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Algiers to the Hassi Messaoud oil field.', options: ['About 630 km', 'About 60 km', 'About 2,000 km', 'About 6,000 km'], answer: 0,
              explain: 'Hassi Messaoud is about 630 km south-east. Pipelines carry its oil and gas north to the coast.' },
            { type: 'mcq', q: 'The Green Dam was planted to slow desertification. Why did many of its trees die?', options: ['One species was planted widely and suffered from drought and pests', 'Too much rain flooded the roots', 'The trees grew too tall for the wind', 'Farmers watered them too often'], answer: 0,
              explain: 'Mixed native species and involving local herders works better. Algeria relaunched the project in the 2020s.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Mediterranean north', icon: '🌦️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'When does most of Algiers’ rain fall?', options: ['In winter', 'In summer', 'Evenly all year', 'Only in July'], answer: 0,
              explain: 'This is a Mediterranean climate: mild, wet winters and hot, dry summers.' },
            { type: 'mcq', graph: true, q: 'Which is the hottest month?', options: ['August', 'January', 'April', 'November'], answer: 0,
              explain: 'August averages about 27°C. Hot sirocco winds from the Sahara can push it much higher.' },
            { type: 'mcq', graph: true, q: 'How much rain falls in July?', options: ['About 5 mm', 'About 90 mm', 'About 200 mm', 'About 50 mm'], answer: 0,
              explain: 'Summers are almost completely dry, so farmers need irrigation.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Algiers (mm).', answer: 602, tol: 3, unit: 'mm',
              explain: 'Adding the twelve months gives 602 mm.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 15.4, tol: 0.2, unit: '°C',
              explain: 'August 26.6°C − January 11.2°C = 15.4°C.' },
            { type: 'mcq', q: 'Why are Algiers’ summers so dry?', options: ['The subtropical high pressure moves north over the coast', 'Cold ocean currents freeze the clouds', 'The Atlas Mountains block all summer sun', 'Monsoon winds blow from the Sahara'], answer: 0,
              explain: 'In winter the high pressure moves south, letting rain-bearing depressions reach the coast.' }
          ]
        }
      },
      {
        id: 'oasis', title: 'Oases of the M’zab', icon: '🌴',
        tasks: {
          ks3: [
            { type: 'mcq', photo: true, q: 'Look at the satellite image of the M’zab valley. In this image, plants show up red. Where are the plants growing?', options: ['Along the valley floor', 'On the bare plateau', 'Only in the towns', 'Nowhere at all in the image'], answer: 0,
              explain: 'The palm groves follow the wadi, where water from rare floods and wells can reach them.' },
            { type: 'mcq', q: 'What is an oasis?', options: ['A place in the desert with water', 'A very tall sand dune shaped by the wind', 'A dry mountain peak', 'A hot desert wind'], answer: 0,
              explain: 'Water comes from underground or from a river, so palms and crops can grow.' },
            { type: 'mcq', q: 'Culture: what is couscous?', options: ['Steamed grains of wheat', 'A spicy soup made of fish', 'A traditional dance', 'A camel saddle'], answer: 0,
              explain: 'It is served with vegetables and meat, especially on Fridays and at celebrations.' }
          ],
          adv: [
            { type: 'mcq', photo: true, q: 'Study the false-colour satellite image. Why are the towns and palm groves all along the wadi?', options: ['Groundwater and flood water collect along the valley', 'The plateau is too wet to build on', 'The wadi is the only place where there is any shade from the sun', 'Sand dunes cover the valley floor'], answer: 0,
              explain: 'Rare flash floods in the wadi are shared using dams and channels, and wells tap groundwater.' },
            { type: 'mcq', q: 'The M’zab towns are a UNESCO World Heritage Site. Why?', options: ['A thousand-year-old way of life adapted to the desert', 'They have the tallest skyscrapers anywhere in the whole of Africa', 'They are the newest towns in Algeria', 'They are built from glass and steel'], answer: 0,
              explain: 'The five ksour were founded from the 11th century, with houses built close together for shade.' },
            { type: 'mcq', q: 'Rock art at Tassili n’Ajjer shows cattle and giraffes, then later camels. What does this show?', options: ['The Sahara was once wetter and then dried out', 'Camels were brought from Australia', 'The Sahara is slowly turning into a tropical rainforest', 'Giraffes once lived in snow'], answer: 0,
              explain: 'This is evidence of natural climate change. The Sahara was green until about 5,000 years ago.' }
          ]
        }
      },
      {
        id: 'economy', title: 'Oil, gas and independence', icon: '🛢️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'What does Algeria sell most to other countries?', options: ['Oil and gas', 'Cars', 'Coffee', 'Computers'], answer: 0,
              explain: 'Pipelines under the Mediterranean carry Algerian gas to Spain and Italy.' },
            { type: 'mcq', q: 'Culture: which two languages are official in Algeria?', options: ['Arabic and Tamazight (Berber)', 'Spanish and Portuguese, as in South America', 'English and Hindi', 'Russian and Chinese'], answer: 0,
              explain: 'French is also widely spoken because Algeria was a French colony.' },
            { type: 'mcq', map: true, q: 'Map skills: in which direction is Oran from Algiers?', options: ['West', 'East', 'North', 'South'], answer: 0,
              explain: 'Oran, Algeria’s second city, is about 350 km west along the coast.' }
          ],
          adv: [
            { type: 'mcq', q: 'Why is depending on oil and gas exports risky for Algeria?', options: ['Income falls sharply when world prices drop', 'Oil and gas never run out', 'Other countries will never need to buy energy from abroad', 'It creates too many farming jobs'], answer: 0,
              explain: 'Algeria is trying to diversify, for example through farming in the south and solar power.' },
            { type: 'mcq', q: 'Why does the Sahara have huge potential for solar power?', options: ['Clear skies and strong sunshine almost every day', 'Heavy cloud cover all year', 'Long, dark winters', 'Frequent snowfall'], answer: 0,
              explain: 'The challenge is building the panels and power lines and keeping them free of dust.' },
            { type: 'mcq', q: 'Culture: Algeria became independent in 1962. From which country?', options: ['France', 'Britain', 'Spain', 'Italy'], answer: 0,
              explain: 'It followed a long war of independence. Many Algerians later migrated to France.' }
          ]
        }
      }
    ]
  };
})();
