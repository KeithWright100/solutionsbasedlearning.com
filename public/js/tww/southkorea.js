/* Travel the Wright Way — destination: South Korea (rapid development, Seoul's urban structure, a monsoon climate with cold winters, an ageing population, Jeju's volcanoes and Korean culture).
 * Climate data: Seoul, 1991–2020 averages (climatestotravel.com).
 * Facts: in the early 1960s South Korea was one of the poorest countries in the world; it is now a high-income country (one of the "Asian Tigers");
 *   firms such as Samsung and Hyundai grew from exports of manufactured goods; about half of the population lives in the Seoul Capital Area;
 *   Seoul has a green belt to limit urban sprawl and planned satellite new towns; the KTX high-speed train opened in 2004 (Seoul to Busan in under 3 hours);
 *   South Korea has the world's lowest fertility rate (about 0.7 children per woman); the Demilitarised Zone (DMZ) separates it from North Korea;
 *   Jeju is a volcanic island; Seongsan Ilchulbong is a tuff cone formed about 5,000 years ago by an eruption in shallow sea water, and is a UNESCO site;
 *   Hangul, the Korean alphabet, was created in the 15th century under King Sejong; kimchi is fermented vegetables; Chuseok is the autumn harvest festival.
 */
(function () {
  var CITY_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section across Seoul: forested mountains in the north, the old city centre with palaces and office towers, the wide Han River, high-rise apartment blocks, a green belt of farmland and forest, and a satellite new town beyond">' +
  '<rect width="600" height="420" fill="#e0ecf8"/>' +
  '<path d="M0 300 L0 150 L40 110 L80 160 L110 130 L140 300 Z" fill="#3f6f3a"/>' +
  '<rect y="300" width="600" height="120" fill="#c8b98f"/>' +
  // CBD + palace
  '<g fill="#94a3b8" stroke="#475569"><rect x="150" y="200" width="22" height="100"/><rect x="176" y="170" width="24" height="130"/><rect x="204" y="215" width="18" height="85"/></g>' +
  '<path d="M140 300 L140 286 L164 286 L164 300 Z M136 288 L168 288 L160 278 L144 278 Z" fill="#b91c1c"/>' +
  // river
  '<path d="M232 300 L312 300 L312 330 L232 330 Z" fill="#3b82f6"/>' +
  // apartments
  '<g fill="#e5e7eb" stroke="#64748b">' + (function () { var g = ''; for (var i = 0; i < 5; i++) g += '<rect x="' + (322 + i * 22) + '" y="' + (200 + (i % 2) * 18) + '" width="18" height="' + (100 - (i % 2) * 18) + '"/>'; return g; })() + '</g>' +
  // green belt
  '<g fill="#3f7f3a">' + (function () { var g = ''; for (var i = 0; i < 5; i++) g += '<circle cx="' + (446 + i * 14) + '" cy="292" r="9"/>'; return g; })() + '</g><rect x="436" y="296" width="76" height="6" fill="#86a65a"/>' +
  // new town
  '<g fill="#cbd5e1" stroke="#64748b"><rect x="526" y="240" width="16" height="60"/><rect x="546" y="226" width="16" height="74"/><rect x="566" y="248" width="16" height="52"/></g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="70" y1="60" x2="60" y2="130"/><line x1="170" y1="110" x2="186" y2="170"/><line x1="200" y1="370" x2="270" y2="318"/><line x1="360" y1="140" x2="360" y2="200"/><line x1="460" y1="370" x2="470" y2="300"/><line x1="528" y1="170" x2="550" y2="226"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.southkorea = {
    id: 'southkorea',
    name: 'South Korea',
    short: 'South Korea',
    country: 'South Korea',
    gateway: 'Seoul',
    lonlat: [126.98, 37.57],
    locator: { box: [124.3, 130.6, 32.9, 39.4], places: [['Seoul', 126.98, 37.57, 'r'], ['Daejeon', 127.38, 36.35, 'r'], ['Busan', 129.08, 35.18, 'l'], ['Jeju', 126.53, 33.5, 'r'], ['Pyongyang', 125.75, 39.03, 'b'], ['NORTH KOREA', 128.4, 38.95, 'a'], ['Yellow Sea', 124.95, 36.0, 'a']] },
    stamp: { colour: '#1e40af', icon: '🏙️' },
    transport: { name: 'KTX high-speed train', verb: 'Ride', emoji: '🚄' },
    scene: 'ktx',
    photo: { file: '동녘의 빛을 받는 성산일출봉.jpg', alt: 'A steep-sided, flat-topped green hill with a bowl-shaped crater, rising from the sea next to a coastal village, lit by early-morning sun', author: 'Hijun', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
    intro: {
      ks3: 'Annyeonghaseyo! Welcome to South Korea. Ride the KTX bullet train out of Seoul, a city of skyscrapers and palaces, then visit a volcano rising out of the sea on Jeju Island. Find out how one of the world’s poorest countries became one of the richest in just 60 years.',
      adv: 'Ride the KTX across South Korea. This expedition covers rapid economic development, Seoul’s urban structure and green belt, a monsoon climate with harsh winters, a very low birth rate and ageing population, Jeju’s volcanic landforms, and Korean culture.'
    },
    facts: ['About half of all South Koreans live in and around Seoul.', 'In 1960 South Korea was one of the poorest countries on Earth.', 'The Korean alphabet, Hangul, has just 24 basic letters.'],
    climate: {
      place: 'Seoul, South Korea', source: '1991–2020 averages (climatestotravel.com)', lat: '38°N', rmax: 450, rstep: 50,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-2.1, 0.6, 6.1, 12.6, 18.3, 22.9, 25.5, 26.3, 21.6, 15.0, 7.2, 0.0],
      rain: [15, 30, 35, 75, 105, 130, 415, 350, 140, 50, 50, 25]
    },
    diagrams: { city: CITY_SVG },
    stations: [
      {
        id: 'seoul', title: 'Mega-city Seoul', icon: '🏙️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'city', prompt: 'Label this cross-section across Seoul.',
              spots: [{ x: 12, y: 13 }, { x: 28, y: 25 }, { x: 33, y: 88 }, { x: 60, y: 32 }, { x: 77, y: 88 }, { x: 88, y: 39 }].map(function (s, i) { s.a = ['Mountains', 'City centre (CBD)', 'Han River', 'Apartment blocks', 'Green belt', 'New town'][i]; return s; }),
              extra: [],
              explain: 'Most people in Seoul live in tall apartment blocks. The green belt stops the city spreading over the countryside.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Busan from Seoul?', options: ['South-east', 'North-west', 'South-west', 'North-east'], answer: 0,
              explain: 'Busan, South Korea’s biggest port, is about 330 km south-east. The KTX gets there in under 3 hours.' },
            { type: 'mcq', q: 'About how much of South Korea’s population lives in and around Seoul?', options: ['About half', 'About a tenth', 'Almost nobody', 'Exactly a quarter'], answer: 0,
              explain: 'Jobs, top universities and big companies are concentrated in the capital region.' }
          ],
          adv: [
            { type: 'label', diagram: 'city', prompt: 'Label the urban structure of Seoul. One label does not belong.',
              spots: [{ x: 12, y: 13 }, { x: 28, y: 25 }, { x: 33, y: 88 }, { x: 60, y: 32 }, { x: 77, y: 88 }, { x: 88, y: 39 }].map(function (s, i) { s.a = ['Forested granite mountains', 'CBD and historic palaces', 'Han River', 'High-density apartments', 'Green belt', 'Satellite new town'][i]; return s; }),
              extra: ['Shanty town on the river bank'],
              explain: 'Satellite new towns such as Bundang were planned beyond the green belt to house people and reduce crowding.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar. About how far is Pyongyang, the capital of North Korea, from Seoul?', options: ['About 200 km', 'About 20 km', 'About 1,000 km', 'About 2,000 km'], answer: 0,
              explain: 'It is about 195 km to the north-west, across the heavily guarded DMZ.' },
            { type: 'mcq', q: 'Why does the government try to move jobs away from Seoul, for example to the new city of Sejong?', options: ['To reduce overcrowding and regional inequality', 'Because Seoul runs short of clean water every summer', 'To make Seoul’s population grow faster', 'Because no one wants to work in Seoul'], answer: 0,
              explain: 'Many ministries moved to Sejong. High house prices and congestion in Seoul are major problems.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Monsoon and freezing winters', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Seoul?', options: ['July', 'January', 'October', 'March'], answer: 0,
              explain: 'The monsoon rains (jangma) arrive in summer. July has about 415 mm.' },
            { type: 'mcq', graph: true, q: 'What is the average temperature in January?', options: ['About −2°C', 'About 15°C', 'About 26°C', 'About −20°C'], answer: 0,
              explain: 'Freezing winds blow from Siberia in winter, so the Han River can freeze over.' },
            { type: 'mcq', graph: true, q: 'Describe the rainfall pattern.', options: ['Wet summers and dry winters', 'Dry summers and wet winters', 'The same rain every month', 'No rain all year'], answer: 0,
              explain: 'This seasonal pattern is typical of a monsoon climate.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Seoul (°C).', answer: 28.4, tol: 0.2, unit: '°C',
              explain: 'August 26.3°C − January −2.1°C = 28.4°C, a large range for a city near the coast.' },
            { type: 'number', graph: true, q: 'Total rainfall is 1,420 mm. What percentage falls from June to September? Give a whole number.', answer: 73, tol: 1, unit: '%',
              explain: 'June to September = 1,035 mm. 1,035 ÷ 1,420 × 100 ≈ 73%.' },
            { type: 'mcq', q: 'Why are Seoul’s winters so much colder than London’s, even though Seoul is further south?', options: ['Cold, dry winds blow from the Siberian high in winter', 'Seoul is much higher above sea level', 'A warm ocean current flows past Seoul', 'Seoul has more cloud cover in winter'], answer: 0,
              explain: 'Seoul is on the east side of a huge continent. London is warmed by westerly winds from the Atlantic and the North Atlantic Drift.' }
          ]
        }
      },
      {
        id: 'economy', title: 'From poverty to high-tech', icon: '📱',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Which South Korean company is one of the world’s biggest makers of phones and computer chips?', options: ['Samsung', 'Toyota', 'Nike', 'Nestlé'], answer: 0,
              explain: 'Samsung, Hyundai and LG grew by exporting manufactured goods around the world.' },
            { type: 'mcq', q: 'How did South Korea become rich so quickly?', options: ['Making and exporting manufactured goods', 'Selling huge amounts of oil', 'Growing only rice and selling it to other countries', 'Mining gold in the mountains'], answer: 0,
              explain: 'It has few natural resources, so it invested in education, factories and technology.' },
            { type: 'mcq', q: 'South Korea has very few babies being born. What problem does this cause?', options: ['Fewer young workers to support older people', 'Too many new schools are being built in every town', 'Cities becoming far too crowded', 'More children than teachers'], answer: 0,
              explain: 'Women have on average fewer than one child each, the lowest rate in the world.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these factors in South Korea’s rapid development.', bins: ['Cause of growth', 'Problem today'],
              items: [['Heavy investment in education', 0], ['Export-led manufacturing', 0], ['Government support for big firms (chaebol)', 0], ['World’s lowest fertility rate', 1], ['Very high house prices in Seoul', 1], ['Long working hours and stress', 1]],
              explain: 'Growth was fast, but its social costs help explain why many young couples have few or no children.' },
            { type: 'mcq', q: 'South Korea’s fertility rate is about 0.7. What does this mean for its population pyramid by 2050?', options: ['A narrow base and a wide top', 'A very wide base', 'The same width at every age', 'A wide middle with no elderly'], answer: 0,
              explain: 'Without migration the population will shrink and the share of over-65s will rise sharply.' },
            { type: 'mcq', q: 'Which policy is South Korea using to try to raise the birth rate?', options: ['Cash payments and longer parental leave', 'Limiting every family to one child, as China once did', 'Closing nurseries to save money', 'Banning people from moving to Seoul'], answer: 0,
              explain: 'The government has spent huge sums since 2006, but the rate has stayed very low.' }
          ]
        }
      },
      {
        id: 'jeju', title: 'Volcanoes and kimchi', icon: '🌋',
        tasks: {
          ks3: [
            { type: 'mcq', photo: true, q: 'Look at the photo of Seongsan Ilchulbong on Jeju Island. What kind of landform is it?', options: ['An old volcano with a crater', 'A sand dune', 'A glacier', 'A coral reef growing up from the sea floor'], answer: 0,
              explain: 'It formed about 5,000 years ago when an eruption happened in shallow sea water.' },
            { type: 'mcq', map: true, q: 'Map skills: in which direction is Jeju Island from Seoul?', options: ['South', 'North', 'East', 'West'], answer: 0,
              explain: 'Jeju is about 450 km south of Seoul. The Seoul to Jeju flight is one of the busiest air routes in the world.' },
            { type: 'mcq', q: 'Culture: what is kimchi?', options: ['Spicy fermented vegetables', 'A type of sweet rice cake eaten at New Year', 'A traditional dance', 'A fishing boat'], answer: 0,
              explain: 'Families traditionally make huge batches in autumn, called kimjang, to last the winter.' }
          ],
          adv: [
            { type: 'mcq', photo: true, q: 'Study the photo. Why are the sides of Seongsan Ilchulbong so steep where it meets the sea?', options: ['Waves have eroded the soft volcanic rock into cliffs', 'Glaciers carved the slopes', 'Lava is still flowing down them', 'Rivers deposited sand there'], answer: 0,
              explain: 'The cliffs show layers of volcanic ash. It is part of a UNESCO World Natural Heritage site.' },
            { type: 'mcq', q: 'Culture: the Korean alphabet, Hangul, was created in the 1400s. Why?', options: ['So ordinary people could learn to read and write', 'To make writing harder to learn', 'To replace spoken Korean with English', 'For use by the army only'], answer: 0,
              explain: 'King Sejong wanted a simple script. Before that, only a few people could read Chinese characters.' },
            { type: 'mcq', q: 'Culture: Korean pop music and TV dramas are popular worldwide. This spread of culture is called what?', options: ['The Korean Wave (Hallyu)', 'Urban sprawl', 'Counter-urbanisation of culture', 'Deindustrialisation'], answer: 0,
              explain: 'It boosts tourism and exports and is an example of cultural globalisation.' }
          ]
        }
      }
    ]
  };
})();
