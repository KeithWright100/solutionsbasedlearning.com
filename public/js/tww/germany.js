/* Travel the Wright Way — destination: Germany (the Rhine and Cologne, a temperate climate, industry and the energy transition, population and migration, and German culture).
 * Climate data: Cologne, 1991–2020 averages (climatestotravel.com).
 * Facts: the Rhine is one of the busiest inland waterways in the world; the Upper Middle Rhine Valley (Rhine Gorge, with the Loreley rock and many castles) is a UNESCO World Heritage Site (2002);
 *   the Ruhr was Germany's main coal and steel region and has had to deindustrialise; Germany shut its last three nuclear power stations in April 2023 and plans to end coal power by 2038;
 *   renewables supplied more than half of Germany's electricity in 2023; Garzweiler is a large open-cast lignite (brown coal) mine west of Cologne; low water on the Rhine in 2018 and 2022 limited barge loads;
 *   the July 2021 floods in western Germany (Ahr valley) killed more than 180 people; Germany has the largest population in the EU (about 84 million) and an ageing population;
 *   from the 1960s "guest workers" came from Turkey and southern Europe; about a million asylum seekers arrived in 2015; Cologne Cathedral, begun in 1248 and completed in 1880, is a UNESCO site;
 *   the Berlin Wall fell in 1989 and Germany reunified in 1990; Cologne's Carnival season officially begins at 11:11 on 11 November.
 */
(function () {
  var GORGE_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the Rhine Gorge showing a plateau, steep vineyard slopes, a castle, railway lines on both banks and a barge on the river">' +
  '<rect width="600" height="420" fill="#dbeaf5"/>' +
  // plateau and gorge
  '<path d="M0 420 L0 110 L170 110 C 200 140, 230 230, 250 300 L350 300 C 370 230, 400 140, 430 110 L600 110 L600 420 Z" fill="#7d6a58"/>' +
  '<path d="M0 110 L170 110 L172 116 L0 116 Z M430 110 L600 110 L600 116 L428 116 Z" fill="#6f9a4a"/>' +
  '<g fill="#5f8a3a">' + (function () { var g = ''; for (var i = 0; i < 6; i++) g += '<circle cx="' + (20 + i * 26) + '" cy="104" r="10"/><circle cx="' + (450 + i * 26) + '" cy="104" r="10"/>'; return g; })() + '</g>' +
  // slate layers
  '<g stroke="#5e4f42" stroke-width="1.5" opacity=".7"><line x1="0" y1="170" x2="600" y2="150"/><line x1="0" y1="230" x2="600" y2="210"/><line x1="0" y1="300" x2="600" y2="280"/><line x1="0" y1="360" x2="600" y2="340"/></g>' +
  // vineyard terraces on left (south-facing) slope
  '<g stroke="#4f7a32" stroke-width="3">' + (function () { var g = ''; for (var i = 0; i < 7; i++) { var y = 130 + i * 22, x = 176 + i * 9; g += '<line x1="' + (x - 26) + '" y1="' + y + '" x2="' + x + '" y2="' + y + '"/>'; } return g; })() + '</g>' +
  '<g fill="#3e6b26">' + (function () { var g = ''; for (var i = 0; i < 7; i++) { var y = 126 + i * 22, x = 166 + i * 9; g += '<circle cx="' + x + '" cy="' + y + '" r="4"/><circle cx="' + (x - 12) + '" cy="' + y + '" r="4"/>'; } return g; })() + '</g>' +
  // castle on right slope
  '<g fill="#b9a68a" stroke="#6b5a44" stroke-width="1.5"><rect x="412" y="128" width="46" height="26"/><rect x="404" y="114" width="12" height="40"/><rect x="452" y="118" width="12" height="36"/></g><g fill="#a33b2a"><path d="M402 114 l8 -12 l8 12 Z"/><path d="M450 118 l8 -12 l8 12 Z"/></g>' +
  // river, railways
  '<path d="M250 300 L350 300 L344 330 L256 330 Z" fill="#3b7fb8"/>' +
  '<rect x="214" y="290" width="36" height="6" fill="#4b5563"/><rect x="350" y="290" width="36" height="6" fill="#4b5563"/>' +
  '<g fill="#f4f4f5" stroke="#4b5563" stroke-width="1"><rect x="216" y="280" width="30" height="10" rx="2"/><rect x="354" y="280" width="30" height="10" rx="2"/></g>' +
  // barge
  '<path d="M270 300 L330 300 L326 308 L274 308 Z" fill="#1f2937"/><g fill="#d62828"><rect x="278" y="290" width="12" height="10"/></g><g fill="#2563c9"><rect x="292" y="290" width="12" height="10"/></g><rect x="312" y="286" width="12" height="14" fill="#f4f1de"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="84" y1="66" x2="84" y2="96"/><line x1="140" y1="196" x2="170" y2="180"/><line x1="490" y1="80" x2="460" y2="112"/><line x1="160" y1="300" x2="214" y2="290"/><line x1="300" y1="250" x2="300" y2="284"/><line x1="300" y1="370" x2="300" y2="330"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.germany = {
    id: 'germany',
    name: 'Germany',
    short: 'Germany',
    country: 'Germany',
    gateway: 'Cologne',
    lonlat: [6.95, 50.94],
    locator: { box: [3.6, 16, 47, 55.3], rivers: [[[7.6, 47.56], [7.8, 48.3], [8.2, 48.95], [8.45, 49.5], [8.27, 50.0], [7.9, 50.05], [7.6, 50.36], [7.1, 50.73], [6.95, 50.94], [6.76, 51.43], [6.1, 51.83]]], places: [['Cologne', 6.95, 50.94, 'l'], ['Loreley', 7.73, 50.14, 'r'], ['Berlin', 13.4, 52.52, 'r'], ['Hamburg', 10.0, 53.55, 'r'], ['Munich', 11.58, 48.14, 'r'], ['RUHR', 8.2, 51.6, 'a'], ['North Sea', 6.6, 54.4, 'a'], ['Baltic Sea', 12.6, 54.95, 'a'], ['FRANCE', 5.8, 48.3, 'a']] },
    stamp: { colour: '#374151', icon: '🏭' },
    transport: { name: 'Rhine barge', verb: 'Sail', emoji: '🚢' },
    scene: 'rhine',
    photo: { file: 'Hohenzollernbrücke Kölner Dom.jpg', alt: 'Cologne Cathedral’s twin spires and the arched Hohenzollern railway bridge over the River Rhine at dusk', author: 'Thomas Wolf', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
    intro: {
      ks3: 'Hallo! Welcome to Germany. Ride a barge up the River Rhine from Cologne, past its great cathedral, into a steep gorge lined with castles and vineyards. Find out how Germany is changing from coal to wind and solar power.',
      adv: 'Sail the Rhine through Germany. This expedition covers the Rhine Gorge and river management, a temperate maritime climate, deindustrialisation and the energy transition (Energiewende), migration and an ageing population, and German culture.'
    },
    facts: ['The Rhine is one of the busiest rivers in the world for shipping.', 'Cologne Cathedral took over 600 years to finish.', 'Germany has the largest population in the European Union.'],
    climate: {
      place: 'Cologne, Germany', source: '1991–2020 averages (climatestotravel.com)', lat: '51°N', rmax: 100, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [3.0, 3.6, 6.7, 10.3, 13.9, 17.0, 19.1, 18.6, 15.0, 11.0, 6.6, 3.8],
      rain: [60, 55, 55, 50, 60, 85, 85, 85, 65, 65, 65, 70]
    },
    diagrams: { gorge: GORGE_SVG },
    stations: [
      {
        id: 'rhine', title: 'The Rhine Gorge', icon: '🏰',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'gorge', prompt: 'Label this cross-section of the Rhine Gorge.',
              spots: [{ x: 14, y: 12, a: 'Flat plateau' }, { x: 20, y: 48, a: 'Vineyards' }, { x: 84, y: 16, a: 'Castle' }, { x: 22, y: 72, a: 'Railway' }, { x: 50, y: 56, a: 'Barge' }, { x: 50, y: 90, a: 'River Rhine' }],
              extra: [],
              explain: 'The Rhine has cut a deep, steep-sided gorge. Railways and roads squeeze along both banks, and grapes grow on the sunny slopes.' },
            { type: 'mcq', q: 'Why were so many castles built above the Rhine Gorge?', options: ['To control and tax river traffic', 'To keep the grapes warm', 'To stop the river flooding the towns below', 'They were built as hotels'], answer: 0,
              explain: 'Lords charged tolls on boats passing through. The gorge is now a UNESCO World Heritage Site.' },
            { type: 'mcq', q: 'Why are barges used to carry goods on the Rhine?', options: ['They carry huge loads cheaply', 'They are faster than planes', 'They never need fuel', 'Roads are banned in Germany'], answer: 0,
              explain: 'One large barge can carry as much as about 100 lorries, which also cuts pollution.' }
          ],
          adv: [
            { type: 'label', diagram: 'gorge', prompt: 'Label the Rhine Gorge landscape. One label does not belong.',
              spots: [{ x: 14, y: 12, a: 'Upland plateau' }, { x: 20, y: 48, a: 'South-facing vineyards' }, { x: 84, y: 16, a: 'Medieval castle' }, { x: 22, y: 72, a: 'Railway on each bank' }, { x: 50, y: 56, a: 'Container barge' }, { x: 50, y: 90, a: 'Incised river channel' }],
              extra: ['Ox-bow lake'],
              explain: 'The river cut down as the land slowly rose, forming an incised gorge rather than a wide floodplain with ox-bow lakes.' },
            { type: 'mcq', q: 'In 2018 and 2022 barges on the Rhine could only carry part loads. Why?', options: ['Drought lowered the river level', 'The river froze solid', 'The river flooded the ports', 'New laws banned barges'], answer: 0,
              explain: 'At Kaub, in the gorge, very low water forced barges to carry less, raising transport costs for industry.' },
            { type: 'mcq', q: 'In July 2021 floods in western Germany killed more than 180 people. Which factor made them so deadly?', options: ['Extreme rain fell on narrow, steep valleys', 'A tsunami travelled up the rivers from the North Sea', 'Melting glaciers burst a dam', 'A hurricane hit the coast'], answer: 0,
              explain: 'In valleys such as the Ahr, water rose very quickly with little warning, sweeping away homes and bridges.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Mild and wet all year', icon: '🌦️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the warmest month in Cologne?', options: ['July', 'January', 'April', 'December'], answer: 0,
              explain: 'July averages about 19°C.' },
            { type: 'mcq', graph: true, q: 'Which statement about rain in Cologne is true?', options: ['It rains in every month', 'It never rains in summer', 'It only rains in winter', 'There is a long dry season'], answer: 0,
              explain: 'Every month has at least 50 mm. Summer is slightly wetter because of thunderstorms.' },
            { type: 'mcq', graph: true, q: 'What is the temperature in January?', options: ['About 3°C', 'About −20°C', 'About 19°C', 'About 30°C'], answer: 0,
              explain: 'Winters are cool but not usually freezing, as mild air comes from the Atlantic.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Cologne (mm).', answer: 800, tol: 5, unit: 'mm',
              explain: 'Adding the twelve months gives 800 mm.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Cologne (°C). Give one decimal place.', answer: 16.1, tol: 0.2, unit: '°C',
              explain: 'Warmest 19.1°C − coldest 3.0°C = 16.1°C.' },
            { type: 'mcq', graph: true, q: 'Cologne’s range (16°C) is smaller than Budapest’s (22°C). Why?', options: ['It is closer to the Atlantic', 'It is much further south', 'It is higher above sea level', 'It is in a rain shadow behind the Alps'], answer: 0,
              explain: 'Moving east across Europe, climates become more continental: colder winters, warmer summers and less rain.' }
          ]
        }
      },
      {
        id: 'energy', title: 'From coal to wind', icon: '⚡',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'The Ruhr region near Cologne was once famous for which industries?', options: ['Coal and steel', 'Tea and rice', 'Tourism and skiing', 'Fishing and whaling'], answer: 0,
              explain: 'The mines have closed. Old works are now museums, parks and offices.' },
            { type: 'mcq', q: 'In 2023 Germany closed its last nuclear power stations. What is it using more of instead?', options: ['Wind and solar power', 'Oil from its own wells', 'Peat from bogs', 'Hydro power from glaciers'], answer: 0,
              explain: 'In 2023 renewables made more than half of Germany’s electricity for the first time.' },
            { type: 'mcq', q: 'Near Cologne, whole villages have been knocked down. Why?', options: ['To dig huge open-cast coal mines', 'To build a new airport', 'To stop the Rhine flooding the city of Cologne', 'To make a national park'], answer: 0,
              explain: 'Brown coal (lignite) is dug from giant pits like Garzweiler, which has led to protests.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these impacts of Germany’s energy transition (Energiewende).', bins: ['Benefit', 'Challenge'],
              items: [['Lower carbon emissions', 0], ['New jobs in renewable energy', 0], ['Less need for imported fuel', 0], ['Wind is not constant, so backup is needed', 1], ['New power lines from north to south', 1], ['Job losses in coal regions', 1]],
              explain: 'Most wind farms are in the windy north, but much industry is in the south, so new grid links are needed.' },
            { type: 'mcq', q: 'The Ruhr has deindustrialised. Which is a typical effect on a former mining town?', options: ['High unemployment and empty buildings', 'A rapid rise in coal exports and mining jobs', 'More farmland than before', 'A fall in service jobs'], answer: 0,
              explain: 'The region has regenerated with universities, logistics and culture, such as the Zollverein UNESCO site.' },
            { type: 'mcq', q: 'Germany plans to stop burning coal by 2038. Why is lignite especially bad?', options: ['It releases more CO₂ per unit of energy', 'It is radioactive', 'It is imported by ship all the way from Antarctica', 'It cannot be burned at all'], answer: 0,
              explain: 'Lignite is wet, low-grade coal, so more must be burned to make the same electricity.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Cathedrals, carnival and change', icon: '⛪',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: when does Cologne’s Carnival season begin?', options: ['At 11:11 on 11 November', 'At midnight on 1 January', 'On Christmas Day', 'On the first day of summer'], answer: 0,
              explain: 'People dress up in costumes, sing and parade. The main celebrations are just before Lent.' },
            { type: 'mcq', q: 'Culture: Cologne Cathedral was started in 1248. When was it finished?', options: ['1880', '1250', '2020', '1300'], answer: 0,
              explain: 'Work stopped for centuries. It is now a UNESCO World Heritage Site.' },
            { type: 'mcq', q: 'Which wall came down in 1989, leading to Germany reuniting in 1990?', options: ['The Berlin Wall', 'Hadrian’s Wall', 'The Great Wall', 'The Wailing Wall'], answer: 0,
              explain: 'Germany had been split into East and West after the Second World War.' }
          ],
          adv: [
            { type: 'mcq', q: 'From the 1960s, West Germany invited “guest workers” from Turkey and southern Europe. Why?', options: ['There was a shortage of labour', 'There were too many workers', 'To build the Berlin Wall', 'To work on farms abroad'], answer: 0,
              explain: 'Many stayed, and today about 3 million people in Germany have Turkish roots.' },
            { type: 'mcq', q: 'Germany has an ageing population. Which policy could help?', options: ['Encouraging skilled immigration', 'Lowering the pension age for all workers', 'Banning new houses', 'Closing universities'], answer: 0,
              explain: 'Germany has eased rules for skilled workers from outside the EU to fill gaps in care, IT and building.' },
            { type: 'mcq', q: 'Germany has a federal system. What does this mean?', options: ['Power is shared with 16 states (Länder)', 'It has a king and queen', 'Only Berlin makes laws', 'It has no national government, only city councils'], answer: 0,
              explain: 'States such as Bavaria and North Rhine-Westphalia run their own schools and police.' }
          ]
        }
      }
    ]
  };
})();
