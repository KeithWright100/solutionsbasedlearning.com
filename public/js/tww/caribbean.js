/* Travel the Wright Way — destination: the Caribbean, focusing on Montserrat (the Lesser Antilles volcanic arc, the Soufrière Hills eruption from 1995, exclusion zones and monitoring, hurricanes, small island economies, and Caribbean culture).
 * Climate data: St John's, Antigua (about 55 km from Montserrat), 1991–2020 averages (climatestotravel.com).
 * Facts: the Lesser Antilles are a chain of volcanic islands formed where Atlantic ocean floor (North and South American plates) subducts beneath the Caribbean Plate;
 *   on 18 July 1995 Montserrat's long-dormant Soufrière Hills volcano began erupting; pyroclastic flows and lahars buried the capital, Plymouth, which was abandoned in 1997;
 *   an eruption on 25 June 1997 killed 19 people; the southern half of the island became an exclusion zone; about two-thirds of the population left, many to the UK (Montserrat is a British Overseas Territory);
 *   the population fell from about 10,500 to around 4,000–5,000; the government moved to Brades in the north, and a new town and port are being built at Little Bay; the Montserrat Volcano Observatory monitors the volcano;
 *   pyroclastic flows built new land into the sea; Hurricane Hugo (1989) had already badly damaged the island; Hurricane Maria (2017) devastated nearby Dominica;
 *   culture: Montserrat is nicknamed the "Emerald Isle of the Caribbean" because of its Irish heritage, and St Patrick's Day is a public holiday; goat water is the national dish; calypso and soca music.
 */
(function () {
  var ISLAND_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified map of Montserrat: a small island with a green safe zone in the north containing the new capital and airport, and an exclusion zone covering the south with the Soufrière Hills volcano, the buried old capital Plymouth on the west coast, and new land built out into the sea by volcanic flows on the east coast">' +
  '<rect width="600" height="420" fill="#7cc0e6"/>' +
  '<path d="M300 30 C 360 40, 410 90, 420 160 C 430 230, 440 280, 410 340 C 380 390, 320 405, 270 390 C 220 375, 200 320, 205 260 C 210 190, 200 120, 230 70 C 250 40, 275 28, 300 30 Z" fill="#5f9e4a"/>' +
  '<path d="M206 230 L428 230 C 438 280, 440 290, 410 340 C 380 390, 320 405, 270 390 C 220 375, 200 320, 206 230 Z" fill="#a8a29e"/>' +
  '<path d="M206 230 L428 230" stroke="#dc2626" stroke-width="3" stroke-dasharray="10 6"/>' +
  '<g stroke="#dc2626" stroke-width="1.2" opacity=".5">' + (function () { var g = ''; for (var i = 0; i < 14; i++) g += '<line x1="' + (200 + i * 18) + '" y1="234" x2="' + (240 + i * 18) + '" y2="394"/>'; return g; })() + '</g>' +
  '<path d="M300 300 L330 250 L360 300 Z" fill="#57534e" stroke="#292524" stroke-width="2"/><path d="M330 250 C 326 230, 340 220, 334 200" fill="none" stroke="#e7e5e4" stroke-width="5"/>' +
  '<path d="M420 300 C 450 296, 462 320, 436 336 Z" fill="#78716c"/>' +
  '<g fill="#475569">' + (function () { var g = ''; for (var i = 0; i < 6; i++) g += '<rect x="' + (216 + (i % 3) * 12) + '" y="' + (296 + Math.floor(i / 3) * 12) + '" width="9" height="8"/>'; return g; })() + '</g>' +
  '<g fill="#f8fafc" stroke="#334155"><rect x="252" y="102" width="12" height="10"/><rect x="266" y="98" width="12" height="14"/></g>' +
  '<path d="M340 66 L392 74" stroke="#334155" stroke-width="5"/>' +
  '<g font-family="sans-serif" font-size="13" fill="#0f172a"><text x="520" y="40">N</text></g><path d="M524 80 L524 46 M516 56 L524 46 L532 56" stroke="#0f172a" stroke-width="2" fill="none"/>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="470" y1="210" x2="350" y2="270"/><line x1="530" y1="390" x2="400" y2="360"/><line x1="90" y1="300" x2="214" y2="304"/><line x1="500" y1="140" x2="400" y2="150"/><line x1="100" y1="110" x2="250" y2="106"/><line x1="500" y1="300" x2="448" y2="318"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.caribbean = {
    id: 'caribbean',
    name: 'Montserrat',
    short: 'Montserrat',
    country: 'Montserrat (UK)',
    gateway: 'Antigua',
    lonlat: [-62.19, 16.74],
    locator: { box: [-63.4, -60.4, 14.9, 17.9], places: [['Montserrat', -62.19, 16.74, 'l'], ['Antigua', -61.8, 17.07, 'r'], ['Guadeloupe', -61.55, 16.25, 'r'], ['Dominica', -61.37, 15.41, 'r'], ['Nevis', -62.6, 17.15, 'l'], ['Caribbean Sea', -62.7, 15.6, 'a'], ['Atlantic Ocean', -60.95, 17.6, 'a']] },
    stamp: { colour: '#be123c', icon: '🌋' },
    transport: { name: 'island-hopper plane', verb: 'Fly', emoji: '🛩️' },
    scene: 'antilles',
    photo: { file: 'Plymouth City & Volcano.jpg', alt: 'The roofs of an abandoned town half-buried in grey volcanic ash and mud, with a steaming volcano rising behind it', author: 'Mike Schinkel', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'Welcome to the Caribbean! Hop on a small plane from Antigua to Montserrat, an island whose capital city was buried by its own volcano. Find out how people live alongside an active volcano, and why these islands are a chain of volcanoes in the first place.',
      adv: 'Island-hop to Montserrat. This expedition covers the Lesser Antilles volcanic arc, the Soufrière Hills eruption from 1995, exclusion zones and volcano monitoring, the island’s long-term recovery, hurricane risk, small island economies, and Caribbean culture.'
    },
    facts: ['Montserrat’s capital, Plymouth, was buried by volcanic flows in 1997.', 'About two-thirds of Montserrat’s people left after the eruption.', 'St Patrick’s Day is a public holiday on Montserrat.'],
    climate: {
      place: 'St John’s, Antigua', source: '1991–2020 averages (climatestotravel.com)', lat: '17°N', rmax: 150, rstep: 25,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [25.4, 25.4, 25.8, 26.5, 27.3, 28.0, 28.1, 28.4, 28.2, 27.6, 27.0, 26.1],
      rain: [55, 39, 38, 67, 90, 63, 81, 100, 126, 128, 135, 81]
    },
    diagrams: { island: ISLAND_SVG },
    stations: [
      {
        id: 'volcano', title: 'A buried capital', icon: '🌋',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'island', prompt: 'Label this map of Montserrat.',
              spots: [{ x: 78, y: 50 }, { x: 88, y: 93 }, { x: 15, y: 71 }, { x: 83, y: 33 }, { x: 17, y: 26 }, { x: 83, y: 71 }].map(function (s, i) { s.a = ['Volcano', 'Danger zone', 'Buried old capital', 'Safe zone', 'New capital', 'New land from the volcano'][i]; return s; }),
              extra: [],
              explain: 'Nobody is allowed to live in the south of the island. Everyone now lives in the north, away from the volcano.' },
            { type: 'mcq', photo: true, q: 'Look at the photo of Plymouth. What has happened to the town?', options: ['It has been buried by volcanic ash and mud', 'It has been flooded by the sea', 'It has been covered by snow', 'It has been knocked down to build a new city'], answer: 0,
              explain: 'Plymouth was the capital and only port. It was abandoned in 1997 and is still empty today.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Antigua from Montserrat?', options: ['North-east', 'South-west', 'North-west', 'South-east'], answer: 0,
              explain: 'Antigua is about 55 km north-east. Most visitors fly or take the ferry from there.' }
          ],
          adv: [
            { type: 'label', diagram: 'island', prompt: 'Label the map of Montserrat after the eruption. One label does not belong.',
              spots: [{ x: 78, y: 50 }, { x: 88, y: 93 }, { x: 15, y: 71 }, { x: 83, y: 33 }, { x: 17, y: 26 }, { x: 83, y: 71 }].map(function (s, i) { s.a = ['Soufrière Hills (lava dome)', 'Exclusion zone', 'Plymouth, buried by pyroclastic flows', 'Inhabited northern zone', 'Brades (temporary capital)', 'New land from flow deposits'][i]; return s; }),
              extra: ['Coral atoll lagoon'],
              explain: 'Pyroclastic flows and lahars carried so much material to the coast that they built new land into the sea.' },
            { type: 'mcq', q: 'Why are the Lesser Antilles a chain of volcanic islands?', options: ['Ocean floor is subducting beneath the Caribbean Plate', 'The plates are moving apart under the islands, like in Iceland today', 'A hot spot sits under every island', 'They were built from coral reefs'], answer: 0,
              explain: 'As the plate sinks it melts, and the magma rises to form a curved arc of volcanoes.' },
            { type: 'mcq', q: 'Which was the most dangerous hazard in the Montserrat eruption?', options: ['Pyroclastic flows of hot gas, ash and rock', 'Slow lava flows', 'Tsunamis set off by earthquakes far out in the Atlantic', 'Hurricane winds'], answer: 0,
              explain: 'They travel at over 100 km/h and are hot enough to burn everything in their path. They killed 19 people on 25 June 1997.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Hurricane season', icon: '🌀',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Antigua?', options: ['November', 'March', 'February', 'January'], answer: 0,
              explain: 'The wettest months fall in the hurricane season, from June to November.' },
            { type: 'mcq', graph: true, q: 'What do you notice about the temperature?', options: ['It is warm all year, about 25–28°C', 'It drops below freezing in winter', 'It is very hot in winter and cold in summer', 'It changes by 20°C during the year'], answer: 0,
              explain: 'The islands are in the tropics and surrounded by warm sea.' },
            { type: 'mcq', q: 'Hurricane Hugo hit Montserrat in 1989. What makes hurricanes so dangerous for small islands?', options: ['Strong winds, storm surges and heavy rain hit the whole island', 'They bring snow and ice', 'They only affect the open ocean', 'They cause every volcano on the island to stop erupting for many years'], answer: 0,
              explain: 'On a small island, nowhere is far from the coast, so the whole population is affected.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in St John’s (mm).', answer: 1003, tol: 5, unit: 'mm',
              explain: 'Adding the twelve months gives 1,003 mm.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly rain falls in the hurricane season (June to November)? Give a whole number.', answer: 63, tol: 1, unit: '%',
              explain: 'June to November = 633 mm. 633 ÷ 1,003 × 100 ≈ 63%.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range (°C).', answer: 3, tol: 0.2, unit: '°C',
              explain: 'August 28.4°C − January and February 25.4°C = 3.0°C, a tiny range typical of a tropical island.' }
          ]
        }
      },
      {
        id: 'living', title: 'Living with a volcano', icon: '🔭',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'About how much of Montserrat’s population left after the eruption?', options: ['About two-thirds', 'About a tenth', 'Nobody left', 'Everyone left for ever'], answer: 0,
              explain: 'Many moved to the UK, because Montserrat is a British Overseas Territory.' },
            { type: 'mcq', q: 'Scientists at the Montserrat Volcano Observatory watch the volcano every day. Why?', options: ['To warn people if a big eruption is coming', 'To make the volcano erupt', 'To stop tourists visiting the island', 'To dig for gold'], answer: 0,
              explain: 'They measure earthquakes, gases and ground movement to spot changes early.' },
            { type: 'mcq', q: 'Why do some people still choose to live on volcanic islands?', options: ['The soil is fertile and it is their home', 'Volcanoes keep hurricanes away', 'There is no other land in the world', 'Volcanoes make the sea warmer'], answer: 0,
              explain: 'Volcanic ash breaks down into rich soil, and many families have lived there for generations.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these effects of the Soufrière Hills eruption.', bins: ['Short-term', 'Long-term'],
              items: [['Evacuation of Plymouth', 0], ['Ash falls damaging crops', 0], ['Deaths from pyroclastic flows', 0], ['Population fell to under half', 1], ['A new capital built in the north', 1], ['Volcano tourism and observatory jobs', 1]],
              explain: 'Some long-term effects are positive: tourists now visit to view the buried capital from a safe distance.' },
            { type: 'mcq', q: 'Why was it so hard for Montserrat to recover after losing Plymouth?', options: ['It lost its capital, port, hospital and best farmland at once', 'It had far too much flat land in the north to build anything new on', 'It had no volcano monitoring at all', 'The eruption only lasted one day'], answer: 0,
              explain: 'The island depends on aid from the UK and has had to rebuild almost everything in the north.' },
            { type: 'mcq', q: 'Hurricane Maria (2017) destroyed much of nearby Dominica. Why are small island economies especially vulnerable to hazards?', options: ['One event can damage most of the country’s buildings and income', 'They have the largest populations of any countries anywhere in the world', 'They are far from the tropics', 'They never rely on tourism'], answer: 0,
              explain: 'Maria’s damage on Dominica was greater than the value of the island’s whole economy for a year.' }
          ]
        }
      },
      {
        id: 'culture', title: 'The Emerald Isle', icon: '🍀',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: Montserrat is called the “Emerald Isle of the Caribbean”. Why?', options: ['Its green hills and Irish heritage', 'Emeralds are mined there', 'The sea is green', 'It is shaped like a jewel'], answer: 0,
              explain: 'Many early settlers came from Ireland, and an Irish shamrock appears on the island’s passport stamp.' },
            { type: 'mcq', q: 'Culture: what is goat water, Montserrat’s national dish?', options: ['A spicy goat stew', 'A drink made from coconuts', 'A cake with goat’s cheese', 'Sea water with herbs'], answer: 0,
              explain: 'It is a thick, peppery stew, often served at festivals and celebrations.' },
            { type: 'mcq', q: 'Culture: which musical styles, famous across the Caribbean, are played at Montserrat’s festivals?', options: ['Calypso and soca', 'Opera and ballet', 'Flamenco and fado', 'Polka and waltz'], answer: 0,
              explain: 'The big Christmas and New Year festival features calypso competitions and street parades.' }
          ],
          adv: [
            { type: 'mcq', q: 'Culture: Montserrat is one of the few places outside Ireland where St Patrick’s Day is a public holiday. What else does it commemorate there?', options: ['An uprising by enslaved people in 1768', 'The 1995 eruption', 'A famous cricket match', 'The arrival of the first cruise ships and tourists'], answer: 0,
              explain: 'The week-long festival celebrates both Irish and African heritage.' },
            { type: 'mcq', q: 'Many Caribbean islands depend on tourism. Why is this a risk?', options: ['Hazards and global events can stop visitors suddenly', 'Tourists never spend money', 'Tourism creates no jobs', 'The islands have no beaches, so tourists only come for the volcanoes'], answer: 0,
              explain: 'Hurricanes, volcanic eruptions and events like the COVID-19 pandemic can all stop tourism overnight.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the distance from Montserrat to Dominica.', options: ['About 170 km', 'About 17 km', 'About 1,000 km', 'About 3,000 km'], answer: 0,
              explain: 'Dominica, another volcanic island in the arc, is about 170 km south-east.' }
          ]
        }
      }
    ]
  };
})();
