/* Travel the Wright Way — destination: Hungary (the Danube and Budapest, thermal springs and geothermal energy, a continental climate, the Great Hungarian Plain, and Hungarian culture).
 * Climate data: Budapest, 1991–2020 averages (climatestotravel.com).
 * Facts: Budapest was formed in 1873 by joining Buda, Óbuda and Pest; the Danube flows through or along the borders of ten countries, more than any other river in the world;
 *   Budapest has over 100 thermal springs, rising along a fault line at the foot of the Buda Hills; the Pannonian Basin has thin crust, so hot rock lies close to the surface;
 *   the Great Hungarian Plain (Alföld) covers about half of Hungary; Lake Balaton is the largest lake in Central Europe; the Danube reached a record flood level in Budapest in June 2013;
 *   in October 2010 a reservoir of toxic red sludge from an alumina plant burst near Ajka, flooding villages and reaching the Danube; Hungary joined the EU in 2004 and uses the forint;
 *   the Rubik's Cube was invented by Hungarian architect Ernő Rubik in 1974; Hungarian is a Uralic (Finno-Ugric) language, unlike most European languages; car makers such as Audi (Győr) and Mercedes-Benz (Kecskemét) have large factories in Hungary.
 */
(function () {
  var SPRING_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of Budapest showing the Buda Hills, a fault, thermal springs rising to a spa, the River Danube and the flat plain of Pest above hot rock">' +
  '<rect width="600" height="420" fill="#dbeaf5"/>' +
  // Buda hills (limestone)
  '<path d="M0 220 L0 90 C 40 60, 90 50, 140 80 C 180 100, 210 130, 240 180 L250 220 Z" fill="#8aa36a"/>' +
  '<path d="M0 220 L250 220 L240 180 C 210 130, 180 100, 140 80 C 90 50, 40 60, 0 90 Z" fill="none" stroke="#5f7a42" stroke-width="2"/>' +
  // Pest plain
  '<path d="M330 216 L600 210 L600 230 L330 230 Z" fill="#9cc56a"/>' +
  '<g fill="#c9b79a" stroke="#8a7a62" stroke-width="1">' + (function () { var g = ''; for (var i = 0; i < 9; i++) g += '<rect x="' + (350 + i * 27) + '" y="' + (192 - (i % 3) * 8) + '" width="20" height="' + (20 + (i % 3) * 8) + '"/>'; return g; })() + '</g>' +
  // river
  '<path d="M250 220 L260 240 L320 240 L330 216 Z" fill="#3b7fb8"/>' +
  // rock layers underground
  '<rect y="240" width="600" height="180" fill="#c9b48e"/><path d="M0 220 L250 220 L260 240 L320 240 L330 230 L600 230 L600 250 L0 250 Z" fill="#d6c4a0"/>' +
  '<g stroke="#a8946c" stroke-width="1.5"><line x1="0" y1="290" x2="600" y2="300"/><line x1="0" y1="340" x2="600" y2="352"/></g>' +
  // hot rock
  '<rect y="370" width="600" height="50" fill="#d9603b"/><g fill="#f2a65a">' + (function () { var g = ''; for (var i = 0; i < 12; i++) g += '<ellipse cx="' + (25 + i * 50) + '" cy="' + (392 + (i % 2) * 8) + '" rx="14" ry="5"/>'; return g; })() + '</g>' +
  // fault
  '<path d="M230 410 L250 300 L236 180" fill="none" stroke="#11243b" stroke-width="3" stroke-dasharray="8 5"/>' +
  // rising hot water
  '<path d="M262 396 C 256 340, 252 290, 246 240 C 244 220, 230 206, 222 196" fill="none" stroke="#e8562a" stroke-width="5"/>' +
  '<g fill="none" stroke="#e8562a" stroke-width="2"><path d="M252 360 l-4 -8 l8 0 Z"/><path d="M248 300 l-4 -8 l8 0 Z"/></g>' +
  // spa building with steam
  '<g><rect x="186" y="178" width="44" height="22" fill="#efe6d6" stroke="#8a7a62"/><path d="M186 178 Q 208 158 230 178 Z" fill="#7ab0c9"/></g>' +
  '<g fill="none" stroke="#fff" stroke-width="3" opacity=".9"><path d="M196 172 c -6 -8, 6 -12, 0 -20"/><path d="M212 168 c -6 -8, 6 -12, 0 -20"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="84" y1="74" x2="80" y2="100"/><line x1="208" y1="132" x2="208" y2="152"/><line x1="290" y1="276" x2="290" y2="238"/><line x1="476" y1="160" x2="456" y2="186"/><line x1="174" y1="318" x2="244" y2="300"/><line x1="96" y1="384" x2="96" y2="396"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.hungary = {
    id: 'hungary',
    name: 'Hungary',
    short: 'Hungary',
    country: 'Hungary',
    gateway: 'Budapest',
    lonlat: [19.04, 47.5],
    locator: { box: [15.5, 23.5, 45.2, 49.1], rivers: [[[16.9, 47.95], [17.6, 47.75], [18.75, 47.8], [18.95, 47.75], [19.07, 47.6], [19.04, 47.5], [18.95, 47.0], [18.9, 46.3], [18.85, 45.85]], [[22.4, 48.35], [21.3, 48.2], [20.6, 47.6], [20.2, 47.1], [20.2, 46.5], [20.1, 46.15]]], lakes: [[[17.25, 46.72], [17.6, 46.82], [17.95, 47.02], [18.15, 47.02], [17.95, 46.9], [17.5, 46.72]]], places: [['Budapest', 19.04, 47.5, 'r'], ['Debrecen', 21.63, 47.53, 'r'], ['Szeged', 20.15, 46.25, 'r'], ['Győr', 17.63, 47.68, 't'], ['Lake Balaton', 17.75, 46.62, 'b'], ['GREAT PLAIN', 20.9, 46.95, 'a'], ['AUSTRIA', 16.2, 48.5, 'a'], ['SLOVAKIA', 19.6, 48.7, 'a'], ['ROMANIA', 22.9, 46.4, 'a'], ['SERBIA', 20.2, 45.45, 'a']] },
    stamp: { colour: '#15803d', icon: '♨️' },
    transport: { name: 'Danube river cruise', verb: 'Cruise', emoji: '🚢' },
    scene: 'danube',
    photo: { file: 'Budapest Parliament 4604.JPG', alt: 'The Hungarian Parliament Building with its red dome and white spires on the bank of the River Danube in Budapest', author: 'Dirk Beyer', licence: 'CC BY-SA 2.5', licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.5/' },
    intro: {
      ks3: 'Szia! Welcome to Hungary. Cruise down the Danube through Budapest, past the huge Parliament building, then warm up in a thermal bath fed by hot springs from deep underground.',
      adv: 'Cruise the Danube through Hungary. This expedition covers geothermal springs along the Buda fault, a continental climate, river flooding and the 2010 red sludge disaster, the Great Plain and Lake Balaton, manufacturing and EU membership, and Hungarian culture.'
    },
    facts: ['The Danube flows through ten countries, more than any other river.', 'Budapest has more than 100 thermal springs.', 'The Rubik’s Cube was invented in Hungary.'],
    climate: {
      place: 'Budapest, Hungary', source: '1991–2020 averages (climatestotravel.com)', lat: '47°N', rmax: 100, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-0.6, 1.2, 5.6, 11.1, 15.7, 19.5, 21.4, 21.3, 16.2, 10.7, 5.4, 0.3],
      rain: [35, 30, 30, 35, 55, 60, 55, 50, 45, 45, 45, 40]
    },
    diagrams: { springs: SPRING_SVG },
    stations: [
      {
        id: 'springs', title: 'City of hot springs', icon: '♨️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'springs', prompt: 'Label this cross-section of Budapest.',
              spots: [{ x: 14, y: 16, a: 'Buda Hills' }, { x: 35, y: 30, a: 'Thermal bath' }, { x: 48, y: 68, a: 'River Danube' }, { x: 80, y: 36, a: 'Pest (flat)' }, { x: 22, y: 76, a: 'Fault' }, { x: 16, y: 92, a: 'Hot rock' }],
              extra: [],
              explain: 'Water is heated by hot rock deep underground. It rises up cracks along the fault and comes out as hot springs at the foot of the Buda Hills.' },
            { type: 'mcq', q: 'Budapest is made of two old towns on either side of the Danube. Which are they?', options: ['Buda and Pest', 'Paris and Rome', 'Bud and Apest', 'Vienna and Prague'], answer: 0,
              explain: 'Buda, on the hilly west bank, and Pest, on the flat east bank, joined with Óbuda in 1873 to form Budapest.' },
            { type: 'mcq', q: 'Why is the water in Budapest’s springs hot?', options: ['It is heated by hot rock deep underground', 'It is boiled in kettles', 'The sun heats it', 'It comes from volcanoes erupting in Budapest'], answer: 0,
              explain: 'This heat from inside the Earth is called geothermal energy.' }
          ],
          adv: [
            { type: 'label', diagram: 'springs', prompt: 'Label the geology of Budapest’s springs. One label does not belong.',
              spots: [{ x: 14, y: 16, a: 'Buda Hills (limestone)' }, { x: 35, y: 30, a: 'Spa at spring line' }, { x: 48, y: 68, a: 'Danube valley' }, { x: 80, y: 36, a: 'Pest plain (sediments)' }, { x: 22, y: 76, a: 'Fault (water pathway)' }, { x: 16, y: 92, a: 'Hot rock (thin crust)' }],
              extra: ['Magma chamber'],
              explain: 'There is no magma chamber under Budapest. The Pannonian Basin has thin crust, so temperatures rise quickly with depth.' },
            { type: 'mcq', q: 'Why does the Pannonian Basin have a high geothermal gradient?', options: ['The crust is thin, so hot mantle is closer', 'It sits on a hotspot', 'It is next to an active volcano', 'Rivers carry warm water from the Alps deep into the ground'], answer: 0,
              explain: 'Temperature rises by about 50°C per km in parts of Hungary, compared with a world average of about 25–30°C.' },
            { type: 'mcq', q: 'Hungary heats some towns and greenhouses with geothermal water. Which is a key advantage?', options: ['It is renewable and low-carbon', 'It works in every country', 'It needs no drilling', 'It makes the Danube warmer'], answer: 0,
              explain: 'Used water must be pumped back underground so the reservoir is not used up.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Hot summers, cold winters', icon: '🌡️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the coldest month in Budapest?', options: ['January', 'July', 'May', 'October'], answer: 0,
              explain: 'January averages about −0.6°C, so snow and ice are common.' },
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Budapest?', options: ['June', 'January', 'February', 'March'], answer: 0,
              explain: 'June has about 60 mm. Summer thunderstorms bring heavy showers.' },
            { type: 'mcq', graph: true, q: 'How would you describe Budapest’s summers?', options: ['Warm', 'Freezing cold', 'Snowy', 'Dry and cold'], answer: 0,
              explain: 'July and August average about 21°C, with hot afternoons above 27°C.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Budapest (mm).', answer: 525, tol: 5, unit: 'mm',
              explain: 'Adding the twelve months gives 525 mm, which is fairly dry for Europe.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Budapest (°C). Give one decimal place.', answer: 22, tol: 0.2, unit: '°C',
              explain: 'Warmest 21.4°C − coldest −0.6°C = 22.0°C.' },
            { type: 'mcq', graph: true, q: 'Budapest’s range is larger than London’s (about 13°C). Why?', options: ['It is far from the sea', 'It is much closer to the Equator', 'It is at a high altitude', 'It has a cold ocean current'], answer: 0,
              explain: 'Land heats and cools faster than sea, so inland places have a continental climate with a bigger range.' }
          ]
        }
      },
      {
        id: 'river', title: 'Living with the Danube', icon: '🌊',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'In 2013 the Danube reached its highest level ever recorded in Budapest. How did the city protect itself?', options: ['Sandbags and flood walls', 'It drained the river', 'It moved the river', 'It built a dam in the city'], answer: 0,
              explain: 'Thousands of volunteers filled sandbags to strengthen the river banks.' },
            { type: 'mcq', q: 'What is the large, flat area of farmland in eastern Hungary called?', options: ['The Great Hungarian Plain', 'The Alps', 'The Sahara', 'The Highlands of central Hungary'], answer: 0,
              explain: 'It covers about half of Hungary. Farmers grow wheat, maize, sunflowers and paprika.' },
            { type: 'mcq', q: 'Lake Balaton is popular in summer. What is it known as?', options: ['The Hungarian Sea', 'The Lake of Fire', 'The Frozen Lake', 'The Salt Lake of Asia'], answer: 0,
              explain: 'Hungary is landlocked, so Balaton, the largest lake in Central Europe, is its seaside.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these causes of Danube flooding in Hungary.', bins: ['Physical', 'Human'],
              items: [['Heavy rain over the Alps', 0], ['Snowmelt in spring', 0], ['Flat, low-lying floodplain', 0], ['Building on the floodplain', 1], ['Straightened river channels', 1], ['Draining wetlands', 1]],
              explain: 'Upstream countries now restore wetlands and floodplains to give the river more room.' },
            { type: 'mcq', q: 'In 2010 a reservoir of toxic red sludge burst near Ajka. Where did it come from?', options: ['An alumina (aluminium) plant', 'A nuclear power station on the Danube', 'An oil refinery', 'A coal mine'], answer: 0,
              explain: 'The caustic sludge flooded villages, killed ten people and reached the Danube. It led to stricter waste rules.' },
            { type: 'mcq', q: 'The Danube flows through more countries than any other river. Why does this make it hard to manage?', options: ['Many countries must cooperate on its water', 'It has no source', 'It flows uphill in places, so it needs pumps', 'It is too short to manage'], answer: 0,
              explain: 'The International Commission for the Protection of the Danube River helps countries share data and tackle pollution.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Paprika, puzzles and baths', icon: '🌶️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: which spicy red powder is used in Hungarian goulash?', options: ['Paprika', 'Cinnamon', 'Mint', 'Saffron from Spain'], answer: 0,
              explain: 'Paprika is made from dried red peppers, grown around Szeged and Kalocsa.' },
            { type: 'mcq', q: 'Culture: which famous puzzle was invented in Hungary in 1974?', options: ['The Rubik’s Cube', 'The jigsaw', 'Sudoku', 'The crossword'], answer: 0,
              explain: 'It was invented by Ernő Rubik, an architecture teacher in Budapest.' },
            { type: 'mcq', q: 'Culture: what do many people in Budapest do at the Széchenyi Baths?', options: ['Relax in hot outdoor pools', 'Ice skate on the Danube', 'Ski down the hills', 'Dive for pearls'], answer: 0,
              explain: 'People even play chess in the steaming outdoor pools in winter.' }
          ],
          adv: [
            { type: 'mcq', q: 'Hungarian is unusual in Europe. Why?', options: ['It is not an Indo-European language', 'It has no written form', 'It uses Chinese characters instead of letters', 'Nobody speaks it today'], answer: 0,
              explain: 'It is a Uralic (Finno-Ugric) language, distantly related to Finnish and Estonian.' },
            { type: 'mcq', q: 'Audi, Mercedes-Benz and BMW build cars in Hungary. Which factor attracted them?', options: ['Skilled, lower-cost labour inside the EU', 'Hungary has a long coastline', 'There are no taxes at all', 'It has the largest oil reserves in Europe'], answer: 0,
              explain: 'Hungary joined the EU in 2004, so goods can be sold across the single market without tariffs.' },
            { type: 'mcq', q: 'Hungary’s population is falling. Which is a main cause?', options: ['Low birth rates and emigration', 'Very high birth rates', 'Mass immigration', 'Rising life expectancy and more births'], answer: 0,
              explain: 'The population has fallen from about 10.7 million in 1980 to under 10 million today.' }
          ]
        }
      }
    ]
  };
})();
