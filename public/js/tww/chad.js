/* Travel the Wright Way — destination: Chad (the Sahel, the shrinking of Lake Chad, a semi-arid climate with one short rainy season, the Ennedi Plateau, and Chadian culture).
 * Climate data: N'Djamena, 1991–2020 averages (climatestotravel.com).
 * Facts: N'Djamena lies where the Chari and Logone rivers meet, about 95 km from Lake Chad; it has a hot, semi-arid climate with rain mainly from June to September;
 *   Lake Chad is very shallow (about 10–11 m at its deepest), so its area changes greatly; it covered about 26,000 km² in 1963 but less than 1,500 km² in recent decades (UNEP);
 *   the Chari River supplies up to about 90% of its water; droughts in the 1970s–80s and water taken for irrigation caused the shrinkage; some researchers point out that the lake has been broadly stable since the 1990s;
 *   the lake basin supports about 30 million people who fish, farm and herd; shrinking water has increased competition and contributed to a humanitarian crisis;
 *   the lake is a major source of wild spirulina (an algae food); Kuri cattle with huge bulb-shaped horns are found around the lake;
 *   the Ennedi Plateau in north-east Chad (UNESCO World Heritage) has sandstone arches and pillars, such as Aloba Arch (about 120 m high), carved by water and wind, and ancient rock art;
 *   culture: Arabic and French are official languages; more than 100 languages are spoken; boule (millet porridge) is a staple.
 */
(function () {
  var LAKE_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section across the Lake Chad basin: sand dunes in the north, dry grassland with herders and cattle, a wide dry former lake bed below the old 1963 shoreline, a small shallow lake with reeds, and a river flowing in from the south past irrigated fields">' +
  '<rect width="600" height="420" fill="#f3e7cf"/>' +
  '<path d="M0 230 Q 30 200 60 230 Q 90 196 120 230 L120 420 L0 420 Z" fill="#e2c48e"/>' +
  '<path d="M120 230 L240 232 L250 250 L470 250 L480 232 L600 232 L600 420 L120 420 Z" fill="#c8a96b"/>' +
  '<path d="M250 250 L340 250 L340 262 L250 262 Z" fill="#b8956a"/><g stroke="#8a6d45" stroke-width="1.5">' + (function () { var g = ''; for (var i = 0; i < 6; i++) g += '<path d="M' + (256 + i * 14) + ' 252 l4 6 l-3 4"/>'; return g; })() + '</g>' +
  '<path d="M340 252 Q 405 280 470 252 Z" fill="#4f8fb8"/>' +
  '<g fill="#7c9a3a">' + (function () { var g = ''; for (var i = 0; i < 6; i++) g += '<path d="M' + (340 + i * 6) + ' 252 l2 -14 l2 14 Z"/>'; return g; })() + '</g>' +
  '<path d="M240 200 L480 200" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="8 5"/>' +
  '<path d="M600 238 C 560 240, 520 244, 470 252" fill="none" stroke="#4f8fb8" stroke-width="6"/>' +
  '<g fill="#65a30d">' + (function () { var g = ''; for (var i = 0; i < 5; i++) g += '<rect x="' + (500 + i * 18) + '" y="226" width="14" height="6"/>'; return g; })() + '</g>' +
  '<g fill="#6b4423">' + (function () { var g = ''; for (var i = 0; i < 3; i++) g += '<ellipse cx="' + (150 + i * 28) + '" cy="224" rx="10" ry="5"/><path d="M' + (142 + i * 28) + ' 218 q -6 -8 0 -10 M' + (158 + i * 28) + ' 218 q 6 -8 0 -10" stroke="#e7e5e4" stroke-width="2.5" fill="none"/>'; return g; })() + '</g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="74" y1="140" x2="66" y2="210"/><line x1="170" y1="150" x2="164" y2="214"/><line x1="200" y1="350" x2="290" y2="258"/><line x1="410" y1="360" x2="406" y2="268"/><line x1="516" y1="330" x2="556" y2="240"/><line x1="530" y1="140" x2="530" y2="224"/></g>' +
  '<text x="250" y="194" font-family="sans-serif" font-size="12" fill="#1d4ed8">1963 shoreline</text>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.chad = {
    id: 'chad',
    name: 'Chad',
    short: 'Chad',
    country: 'Chad',
    gateway: 'N’Djamena',
    lonlat: [15.04, 12.13],
    locator: { box: [12.5, 24.5, 7.5, 18.6], lakes: [[[13.9, 13.6], [14.4, 13.5], [14.6, 13.1], [14.3, 12.8], [13.9, 13.0]]], places: [['N’Djamena', 15.04, 12.13, 'r'], ['Moundou', 16.08, 8.57, 'r'], ['Abéché', 20.83, 13.83, 'r'], ['Fada (Ennedi)', 21.58, 17.19, 'l'], ['Lake Chad', 14.2, 14.0, 'a'], ['SAHARA', 18.0, 17.8, 'a'], ['SAHEL', 18.0, 13.2, 'a']] },
    stamp: { colour: '#b45309', icon: '🐪' },
    transport: { name: 'pirogue', verb: 'Paddle', emoji: '🛶' },
    scene: 'sahel',
    photo: { file: 'Camels in the Labyrinthe (Maze) sandstone area of the Ennedi, Chad (42405451704).jpg', alt: 'Camels resting on sand between tall, rounded towers of orange sandstone in a desert landscape', author: 'Valerian Guillot', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'Lafiya! Welcome to Chad, in the heart of Africa. Paddle a pirogue across Lake Chad, which has shrunk to a fraction of its old size, then visit the giant sandstone towers and arches of the Ennedi desert.',
      adv: 'Explore Chad. This expedition covers the Sahel, a semi-arid climate with one short rainy season, the shrinking of Lake Chad and its causes and impacts, desertification and the Great Green Wall, the Ennedi Plateau’s landforms, and Chadian culture.'
    },
    facts: ['Lake Chad is only about 10 m deep at its deepest point.', 'In 1963 Lake Chad covered about 26,000 km².', 'Aloba Arch in the Ennedi desert is about 120 m high.'],
    climate: {
      place: 'N’Djamena, Chad', source: '1991–2020 averages (climatestotravel.com)', lat: '12°N', rmax: 200, rstep: 40,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [23.7, 27.1, 31.2, 34.0, 33.8, 31.8, 28.8, 27.1, 28.5, 30.0, 28.0, 24.6],
      rain: [0, 0, 0, 10, 25, 50, 145, 175, 85, 20, 0, 0]
    },
    diagrams: { lake: LAKE_SVG },
    stations: [
      {
        id: 'lake', title: 'A shrinking lake', icon: '🛶',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'lake', prompt: 'Label this cross-section of the Lake Chad basin.',
              spots: [{ x: 12.3, y: 33 }, { x: 28, y: 36 }, { x: 33, y: 83 }, { x: 68, y: 86 }, { x: 86, y: 79 }, { x: 88, y: 33 }].map(function (s, i) { s.a = ['Sand dunes', 'Herders and cattle', 'Dried-up lake bed', 'Shallow lake', 'River bringing water', 'Farms using river water'][i]; return s; }),
              extra: [],
              explain: 'The dashed line shows where the shore was in 1963. Much of the old lake is now dry land or marsh.' },
            { type: 'mcq', q: 'Why does Lake Chad change size so easily?', options: ['It is very shallow, so a small fall in level exposes lots of land', 'It is the deepest lake in Africa, so its level hardly ever changes at all', 'It is connected to the ocean', 'It freezes every winter'], answer: 0,
              explain: 'At its deepest it is only about 10 m, so its area changes a lot between wet and dry years.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Lake Chad from N’Djamena?', options: ['North-west', 'South-east', 'North-east', 'South-west'], answer: 0,
              explain: 'The lake is about 165 km north-west, where Chad meets Niger, Nigeria and Cameroon.' }
          ],
          adv: [
            { type: 'label', diagram: 'lake', prompt: 'Label the Lake Chad basin. One label does not belong.',
              spots: [{ x: 12.3, y: 33 }, { x: 28, y: 36 }, { x: 33, y: 83 }, { x: 68, y: 86 }, { x: 86, y: 79 }, { x: 88, y: 33 }].map(function (s, i) { s.a = ['Sahara erg (dunes)', 'Sahel grazing land', 'Exposed former lake bed', 'Remaining open water', 'Chari River (most of the inflow)', 'Irrigation takes river water'][i]; return s; }),
              extra: ['Glacier meltwater'],
              explain: 'The Chari River supplies up to about 90% of the lake’s water, so taking water upstream for irrigation matters.' },
            { type: 'number', q: 'Lake Chad covered about 26,000 km² in 1963 and about 1,500 km² later. By what percentage did its area fall? Give a whole number.', answer: 94, tol: 1, unit: '%',
              explain: '(26,000 − 1,500) ÷ 26,000 × 100 ≈ 94%. This is why it is often described as shrinking by about 90%.' },
            { type: 'mcq', q: 'Some researchers say Lake Chad has been fairly stable since the 1990s. What does this show about using data?', options: ['Results depend on which years you compare', 'Satellites cannot see lakes', 'The lake never shrank at all', 'Only one source should ever be used'], answer: 0,
              explain: 'Comparing a very wet 1960s year with a very dry 1980s year exaggerates the trend. Good geographers check the full record.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Waiting for the rains', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in N’Djamena?', options: ['August', 'January', 'April', 'November'], answer: 0,
              explain: 'August has about 175 mm. Almost all the rain falls in a few summer months.' },
            { type: 'mcq', graph: true, q: 'Which is the hottest month?', options: ['April', 'August', 'December', 'January'], answer: 0,
              explain: 'April averages 34°C, just before the rains arrive and cool things down.' },
            { type: 'mcq', graph: true, q: 'How would you describe the climate?', options: ['Hot all year with one short rainy season', 'Cold winters with snow', 'Wet every month', 'Mild and rainy all year round, with no real dry season at all'], answer: 0,
              explain: 'This is the climate of the Sahel, the strip between the Sahara and the wetter savannas.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in N’Djamena (mm).', answer: 510, tol: 3, unit: 'mm',
              explain: 'Adding the twelve months gives 510 mm.' },
            { type: 'number', graph: true, q: 'What percentage of the yearly rain falls from June to September? Give a whole number.', answer: 89, tol: 1, unit: '%',
              explain: 'June to September = 455 mm. 455 ÷ 510 × 100 ≈ 89%.' },
            { type: 'mcq', q: 'Why does the rain arrive in summer?', options: ['The ITCZ moves north, bringing moist air from the south', 'Cold winds blow south from the Mediterranean Sea every summer instead', 'Snow melts in the Sahara', 'Hurricanes arrive from the Pacific'], answer: 0,
              explain: 'If the ITCZ does not move far enough north, the rains fail and drought follows.' }
          ]
        }
      },
      {
        id: 'people', title: 'Life around the lake', icon: '🐄',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'About how many people depend on the Lake Chad basin?', options: ['About 30 million', 'About 3,000', 'About 300', 'About 3 billion'], answer: 0,
              explain: 'They fish, farm the fertile lake edges and herd cattle across four countries.' },
            { type: 'mcq', q: 'Kuri cattle live around Lake Chad. What is special about them?', options: ['They have huge bulb-shaped horns', 'They have no legs', 'They spend most of the day living underwater among the reeds', 'They are bright blue'], answer: 0,
              explain: 'They swim between islands in the lake to find grazing.' },
            { type: 'mcq', q: 'Why did Lake Chad shrink so much from the 1960s to the 1980s?', options: ['Droughts and water taken for farming', 'An earthquake drained it', 'It was filled in with sand on purpose', 'Too much rain flooded it away'], answer: 0,
              explain: 'Rainfall fell sharply in the Sahel, while more water was taken from rivers for irrigation.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these causes of Lake Chad’s shrinkage.', bins: ['Physical', 'Human'],
              items: [['Droughts in the 1970s and 1980s', 0], ['High evaporation in a hot climate', 0], ['A very shallow lake basin', 0], ['Irrigation schemes taking river water', 1], ['Growing population needing water', 1], ['Overgrazing around the lake', 1]],
              explain: 'Physical and human factors worked together. Rainfall has partly recovered since the 1990s.' },
            { type: 'mcq', q: 'How has the shrinking lake contributed to conflict and a humanitarian crisis?', options: ['Fishers, farmers and herders compete for less water and land', 'More water has made people richer', 'People have moved onto the dry lake bed to build cities', 'It has stopped all migration'], answer: 0,
              explain: 'Poverty and insecurity have made it easier for armed groups to operate, forcing millions from their homes.' },
            { type: 'mcq', q: 'The Great Green Wall is planting a belt of trees and plants across the Sahel. What is its main aim?', options: ['To slow desertification and restore farmland', 'To build a long stone wall to keep wild animals out of farms', 'To create a new river', 'To grow rainforest in the Sahara'], answer: 0,
              explain: 'It now focuses on restoring land with local communities, not just planting a single line of trees.' }
          ]
        }
      },
      {
        id: 'ennedi', title: 'Arches of the Ennedi', icon: '🏜️',
        tasks: {
          ks3: [
            { type: 'mcq', photo: true, q: 'Look at the photo from the Ennedi desert. What are the tall towers made of?', options: ['Sandstone', 'Ice', 'Coral', 'Concrete'], answer: 0,
              explain: 'Water and wind have worn the soft rock into towers, arches and maze-like canyons.' },
            { type: 'mcq', q: 'Culture: which two languages are official in Chad?', options: ['Arabic and French', 'English and Spanish', 'Portuguese and Swahili', 'German and Italian'], answer: 0,
              explain: 'More than 100 local languages are also spoken in Chad.' },
            { type: 'mcq', map: true, q: 'Map skills: in which direction is the Ennedi (near Fada) from N’Djamena?', options: ['North-east', 'South-west', 'South-east', 'North-west'], answer: 0,
              explain: 'It is about 900 km north-east, deep in the Sahara.' }
          ],
          adv: [
            { type: 'mcq', photo: true, q: 'Study the photo. Rock art in the Ennedi shows herds of cattle grazing. What does this tell us about the past?', options: ['The area was once much wetter than today', 'Giraffes once lived in snow and ice that covered the whole desert', 'Cattle were brought by ship', 'People never lived here'], answer: 0,
              explain: 'Thousands of years ago, the Sahara was green, with lakes and grassland.' },
            { type: 'mcq', q: 'Chad earns most of its export income from oil. How does the oil reach the world market?', options: ['Through a pipeline to the coast of Cameroon', 'By ship across Lake Chad', 'By camel caravan across the Sahara desert all the way to Egypt', 'By train to South Africa'], answer: 0,
              explain: 'Chad is landlocked, so it depends on its neighbours to reach the sea.' },
            { type: 'mcq', q: 'Culture: what is boule, a staple food in Chad?', options: ['A thick porridge made from millet or sorghum', 'A spicy fish stew', 'A sweet date cake', 'A flatbread baked on hot stones and eaten with dates at breakfast'], answer: 0,
              explain: 'Millet and sorghum grow well in the Sahel because they need little water.' }
          ]
        }
      }
    ]
  };
})();
