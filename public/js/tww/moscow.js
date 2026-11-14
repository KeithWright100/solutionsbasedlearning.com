/* Travel the Wright Way — destination: Moscow (a megacity and its urban structure, the Moscow Metro, a cold continental climate, urban change, and Russian culture).
 * Climate data: Moscow, 1991–2020 averages (climatestotravel.com).
 * Facts: Moscow is the largest city in Europe, with about 13 million people in the city; it grew outward in rings around the Kremlin — the Boulevard Ring, the Garden Ring, the Third Ring and the MKAD motorway ring;
 *   the Moscow Metro opened in 1935 and many of its stations are decorated with chandeliers, mosaics and marble; it is one of the busiest metro systems in the world; the Moscow Central Circle rail line opened in 2016;
 *   the Kremlin and Red Square are a UNESCO World Heritage Site (1990); St Basil's Cathedral, with its coloured onion domes, was built in the 1550s–60s;
 *   much housing is in Soviet-era apartment blocks; a renovation programme launched in 2017 is replacing many five-storey 1950s–60s blocks (khrushchyovki); in 2012 the city boundary was expanded to the south-west ("New Moscow"), more than doubling its area;
 *   Moscow has a humid continental (Dfb) climate; in 2010 a severe heatwave and peat fires brought smog to the city; many families have a dacha (country cottage) outside the city;
 *   Maslenitsa is a festival with blini (pancakes) at the end of winter; Orthodox Christmas is celebrated on 7 January; the Bolshoi Theatre is famous for ballet; Russia spans 11 time zones.
 */
(function () {
  var RINGS_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan of Moscow as rings: the Kremlin at the centre, the Garden Ring, the Moscow River, zones of Soviet apartment blocks, the MKAD ring motorway and forest with dachas outside">' +
  '<rect width="600" height="420" fill="#6f9a4a"/>' +
  '<g fill="#4f7a32">' + (function () { var g = ''; for (var i = 0; i < 40; i++) g += '<circle cx="' + ((i * 67) % 600) + '" cy="' + ((i * 41) % 420) + '" r="9"/>'; return g; })() + '</g>' +
  '<g fill="#e9dcc2" stroke="#8a7a62" stroke-width="1">' + (function () { var g = ''; var pts = [[40, 40], [560, 60], [60, 380], [540, 370], [30, 210], [575, 220]]; for (var i = 0; i < pts.length; i++) g += '<rect x="' + pts[i][0] + '" y="' + pts[i][1] + '" width="12" height="10"/><path d="M' + (pts[i][0] - 1) + ' ' + pts[i][1] + ' l7 -6 l7 6 Z" fill="#a33b2a"/>'; return g; })() + '</g>' +
  // MKAD and suburbs
  '<circle cx="300" cy="210" r="180" fill="#d9d4c7"/><circle cx="300" cy="210" r="180" fill="none" stroke="#4b5563" stroke-width="8"/>' +
  '<g fill="#a9b3c1">' + (function () { var g = ''; for (var i = 0; i < 26; i++) { var a = i * 0.24, r = 150; g += '<rect x="' + (300 + Math.cos(a) * r - 8) + '" y="' + (210 + Math.sin(a) * r - 12) + '" width="16" height="24"/>'; } return g; })() + '</g>' +
  // inner city
  '<circle cx="300" cy="210" r="95" fill="#e9dcc2"/>' +
  '<circle cx="300" cy="210" r="70" fill="none" stroke="#d97706" stroke-width="7"/>' +
  // river
  '<path d="M60 120 C 160 130, 230 170, 270 220 C 300 256, 350 250, 380 230 C 420 200, 460 250, 560 320" fill="none" stroke="#3b7fb8" stroke-width="10"/>' +
  // Kremlin
  '<path d="M280 196 L318 190 L322 222 L284 228 Z" fill="#b42318" stroke="#7f1d1d" stroke-width="2"/><g fill="#f5c542"><circle cx="296" cy="204" r="4"/><circle cx="308" cy="210" r="4"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="300" y1="136" x2="300" y2="192"/><line x1="300" y1="262" x2="300" y2="278"/><line x1="96" y1="134" x2="100" y2="124"/><line x1="456" y1="300" x2="420" y2="300"/><line x1="480" y1="66" x2="428" y2="84"/><line x1="78" y1="292" x2="66" y2="368"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.moscow = {
    id: 'moscow',
    name: 'Moscow',
    short: 'Moscow',
    country: 'Russia',
    gateway: 'Moscow',
    lonlat: [37.62, 55.75],
    locator: { box: [27, 46, 52, 61], rivers: [[[33.0, 57.1], [35.9, 56.85], [37.2, 56.75], [38.5, 57.5], [39.9, 57.6], [41.0, 57.45], [43.0, 56.3], [44.0, 56.33], [46.5, 56.1]]], places: [['Moscow', 37.62, 55.75, 'r'], ['St Petersburg', 30.32, 59.94, 'r'], ['Smolensk', 32.05, 54.78, 'r'], ['Yaroslavl', 39.87, 57.63, 'r'], ['Volga', 44.6, 55.7, 'a'], ['BELARUS', 28.6, 53.4, 'a'], ['FINLAND', 28.6, 60.8, 'a']] },
    stamp: { colour: '#991b1b', icon: '🏰' },
    transport: { name: 'Moscow Metro', verb: 'Ride', emoji: '🚇' },
    scene: 'metro',
    photo: { file: 'Komsomolskaya (Koltsevaya Line) (19341949774).jpg', alt: 'The grand hall of Komsomolskaya Metro station in Moscow, with a yellow decorated ceiling, chandeliers and arches', author: 'Jorge Láscar', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'Privet! Welcome to Moscow, the biggest city in Europe. Ride the Moscow Metro, where some stations look like palaces with chandeliers, then come up to Red Square and the colourful onion domes of St Basil’s Cathedral.',
      adv: 'Ride the Metro across Moscow. This expedition covers the city’s ring-shaped urban structure, megacity growth and housing renewal, a cold continental climate, urban heat and air quality, and Russian culture.'
    },
    facts: ['Moscow is the largest city in Europe.', 'Some Moscow Metro stations have chandeliers.', 'Russia stretches across 11 time zones.'],
    climate: {
      place: 'Moscow, Russia', source: '1991–2020 averages (climatestotravel.com)', lat: '56°N', rmax: 100, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-7.3, -6.8, -1.7, 6.1, 12.8, 16.5, 19.1, 17.1, 11.5, 5.1, -1.4, -5.4],
      rain: [55, 45, 40, 40, 65, 80, 95, 85, 70, 75, 55, 55]
    },
    diagrams: { rings: RINGS_SVG },
    stations: [
      {
        id: 'city', title: 'A city of rings', icon: '🎯',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'rings', prompt: 'Label this plan of Moscow.',
              spots: [{ x: 50, y: 30, a: 'Kremlin' }, { x: 50, y: 60, a: 'Garden Ring road' }, { x: 16, y: 34, a: 'Moscow River' }, { x: 78, y: 72, a: 'Tower blocks' }, { x: 84, y: 14, a: 'Ring motorway' }, { x: 13, y: 66, a: 'Forest and dachas' }],
              extra: [],
              explain: 'Moscow grew outwards in rings from the Kremlin. Soviet tower blocks fill the outer city, and beyond the motorway are forests and country cottages called dachas.' },
            { type: 'mcq', q: 'What is the Kremlin?', options: ['A walled fortress in the centre', 'A type of Russian soup', 'A ski resort in Siberia', 'A ring road around the edge of the city'], answer: 0,
              explain: 'It contains palaces and cathedrals and is the official home of Russia’s president. It stands next to Red Square.' },
            { type: 'mcq', q: 'Moscow is a megacity. What does this mean?', options: ['It has over 10 million people', 'It has very tall buildings', 'It is the capital city', 'It has a metro system'], answer: 0,
              explain: 'About 13 million people live in the city, and more than 20 million in the wider region.' }
          ],
          adv: [
            { type: 'label', diagram: 'rings', prompt: 'Label Moscow’s urban structure. One label does not belong.',
              spots: [{ x: 50, y: 30, a: 'Kremlin / historic core' }, { x: 50, y: 60, a: 'Garden Ring (inner city)' }, { x: 16, y: 34, a: 'Moscow River' }, { x: 78, y: 72, a: 'Soviet microdistricts' }, { x: 84, y: 14, a: 'MKAD orbital motorway' }, { x: 13, y: 66, a: 'Green belt and dachas' }],
              extra: ['Favela'],
              explain: 'Moscow’s outer zones were planned as microdistricts of high-rise flats with schools and shops, not informal settlements.' },
            { type: 'mcq', q: 'How is Moscow’s structure different from many Western cities?', options: ['Tower blocks are on the edge', 'It has no CBD', 'Wealthy suburbs ring the city', 'It has no public transport'], answer: 0,
              explain: 'In Soviet times the state built huge estates of flats on the edge, so density stays high far from the centre.' },
            { type: 'mcq', q: 'Since 2017 Moscow has been demolishing thousands of 1950s–60s five-storey blocks. What is this an example of?', options: ['Urban renewal', 'Counter-urbanisation', 'Suburbanisation', 'Rural depopulation'], answer: 0,
              explain: 'Residents are moved to new high-rise flats, though some have opposed losing their homes and green space.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Long, freezing winters', icon: '❄️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'How many months have an average temperature below 0°C?', options: ['Five', 'One', 'Nine', 'Twelve'], answer: 0,
              explain: 'November to March are below freezing, so snow usually covers the ground all winter.' },
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Moscow?', options: ['July', 'January', 'March', 'April'], answer: 0,
              explain: 'July gets about 95 mm, mostly from summer thunderstorms.' },
            { type: 'mcq', graph: true, q: 'What is the temperature in January?', options: ['About −7°C', 'About 7°C', 'About −30°C', 'About 19°C'], answer: 0,
              explain: 'Cold snaps can bring −25°C or lower.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual precipitation in Moscow (mm).', answer: 760, tol: 5, unit: 'mm',
              explain: 'Adding the twelve months gives 760 mm.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Moscow (°C). Give one decimal place.', answer: 26.4, tol: 0.2, unit: '°C',
              explain: 'Warmest 19.1°C − coldest −7.3°C = 26.4°C, a typical continental range.' },
            { type: 'mcq', q: 'Moscow is warmer than the countryside around it, especially at night. Why?', options: ['The urban heat island effect', 'Moscow is nearer the Equator', 'Warm ocean currents', 'Moscow is at a higher altitude'], answer: 0,
              explain: 'Buildings and roads store heat, and heating, traffic and industry release more.' }
          ]
        }
      },
      {
        id: 'metro', title: 'Palaces underground', icon: '🚇',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'The Moscow Metro opened in 1935. Why are some stations famous?', options: ['They are decorated like palaces', 'They are all outdoors', 'They are made of ice', 'Trains there run on water instead of rails'], answer: 0,
              explain: 'Stations such as Komsomolskaya have chandeliers, mosaics and marble.' },
            { type: 'mcq', q: 'Why is a metro important for a megacity like Moscow?', options: ['It moves millions without jamming roads', 'It is the only way to cross the river', 'Cars are banned in Moscow', 'It keeps the city cool'], answer: 0,
              explain: 'The Metro carries millions of passengers every day.' },
            { type: 'mcq', q: 'Many Moscow families have a dacha. What is it?', options: ['A country cottage with a garden', 'A type of hat', 'A Metro ticket that lasts for a whole month', 'A winter coat'], answer: 0,
              explain: 'People go there at weekends in summer to relax and grow fruit and vegetables.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these problems faced by Moscow as a megacity.', bins: ['Environmental', 'Social or economic'],
              items: [['Air pollution from traffic', 0], ['Smog from peat fires in 2010', 0], ['Loss of green space', 0], ['Long commutes from outer districts', 1], ['High housing costs in the centre', 1], ['Ageing Soviet-era flats', 1]],
              explain: 'New Metro lines and the Moscow Central Circle (2016) aim to cut commuting times from outer districts.' },
            { type: 'mcq', q: 'In 2012 Moscow’s boundary was extended to the south-west, more than doubling its area. Why?', options: ['To give room for new housing and offices', 'To include a new coastline', 'To reach the Ural Mountains and their minerals', 'To join with St Petersburg'], answer: 0,
              explain: '“New Moscow” was planned to take pressure off the crowded centre.' },
            { type: 'mcq', q: 'Moscow attracts migrants from across Russia and Central Asia. Which is a key pull factor?', options: ['Higher wages and more jobs', 'A warmer climate', 'Cheaper housing than elsewhere', 'Fewer people'], answer: 0,
              explain: 'Moscow is Russia’s main economic centre, with much higher average incomes than most regions.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Domes, ballet and blini', icon: '🩰',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: St Basil’s Cathedral on Red Square is famous for its…', options: ['Colourful onion domes', 'Glass pyramid', 'Leaning tower', 'Golden statue of a lion'], answer: 0,
              explain: 'It was built in the 1550s–60s and is part of a UNESCO World Heritage Site.' },
            { type: 'mcq', q: 'Culture: what are matryoshka dolls?', options: ['Wooden dolls that nest inside each other', 'Dolls made of snow', 'Puppets on strings', 'Dolls that can talk and sing Russian songs'], answer: 0,
              explain: 'They are painted by hand and are a popular Russian souvenir.' },
            { type: 'mcq', q: 'Culture: during Maslenitsa, at the end of winter, people eat lots of…', options: ['Blini (pancakes)', 'Ice cream', 'Pizza', 'Curry and rice'], answer: 0,
              explain: 'The round, golden blini are said to represent the returning sun.' }
          ],
          adv: [
            { type: 'mcq', q: 'Culture: why do many Russians celebrate Christmas on 7 January?', options: ['The Orthodox Church uses the Julian calendar', 'It is far too cold to celebrate in late December', 'Shops are closed in December', 'It is the start of the school year'], answer: 0,
              explain: 'The Julian calendar is now 13 days behind the Gregorian calendar used in most countries.' },
            { type: 'mcq', q: 'Culture: Moscow’s Bolshoi Theatre is world-famous for…', options: ['Ballet and opera', 'Football', 'Car racing', 'Video games and esports tournaments'], answer: 0,
              explain: 'Ballets such as Tchaikovsky’s Swan Lake have been performed there.' },
            { type: 'mcq', q: 'Russia spans 11 time zones. What does this tell you?', options: ['It is very wide from west to east', 'It is close to the North Pole and the Arctic', 'It is a very small country', 'It has no clocks'], answer: 0,
              explain: 'When it is morning in Moscow, it is already evening on the Pacific coast.' }
          ]
        }
      }
    ]
  };
})();
