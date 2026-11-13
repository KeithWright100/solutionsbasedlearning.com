/* Travel the Wright Way — destination: Singapore (land, water, housing, climate).
 * Climate data: Changi climate station, National Environment Agency (NEA), 1991–2020 normals.
 */
(function () {
  var TAPS_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four pictures showing where Singapore gets its water">' +
  '<rect width="600" height="420" fill="#f3f8fd"/>' +
  '<line x1="300" y1="0" x2="300" y2="420" stroke="#c5d3e0" stroke-width="3"/><line x1="0" y1="210" x2="600" y2="210" stroke="#c5d3e0" stroke-width="3"/>' +
  // 1 rain into reservoir
  '<g><ellipse cx="150" cy="60" rx="70" ry="22" fill="#9aa7b4"/><g stroke="#3fa3dc" stroke-width="3" class="drip"><line x1="110" y1="85" x2="104" y2="100"/><line x1="140" y1="88" x2="134" y2="103"/><line x1="170" y1="85" x2="164" y2="100"/><line x1="195" y1="88" x2="189" y2="103"/></g>' +
  '<path d="M40 150 Q150 110 260 150 L260 165 L40 165 Z" fill="#3d8fc6"/><g fill="#2f7d32"><circle cx="40" cy="140" r="16"/><circle cx="262" cy="140" r="16"/></g></g>' +
  // 2 pipeline from Malaysia
  '<g><rect x="320" y="40" width="80" height="60" fill="#d9f0d4" stroke="#2f7d32" stroke-width="2"/><text x="360" y="75" text-anchor="middle" font-size="13" font-weight="800" fill="#2f7d32">Johor</text>' +
  '<rect x="400" y="62" width="160" height="16" rx="8" fill="#7a8794"/><path d="M548 70 l14 -10 v20 Z" fill="#3fa3dc"/><text x="480" y="115" text-anchor="middle" font-size="12" fill="#4b6378">pipeline across the strait</text></g>' +
  // 3 recycling plant
  '<g><rect x="50" y="280" width="90" height="70" fill="#b8c4cf"/><rect x="150" y="300" width="110" height="50" fill="#cfd8e0"/><circle cx="95" cy="315" r="20" fill="#3fa3dc" stroke="#fff" stroke-width="3"/>' +
  '<path d="M85 315 a10 10 0 1 1 10 10" stroke="#fff" stroke-width="3" fill="none"/><path d="M95 325 l-6 -3 6 -4" fill="#fff"/><rect x="170" y="240" width="18" height="60" fill="#9aa7b4"/></g>' +
  // 4 desalination by the sea
  '<g><path d="M300 330 Q330 320 360 330 T420 330 T480 330 T540 330 T600 330 L600 420 L300 420 Z" fill="#3d8fc6"/>' +
  '<rect x="440" y="250" width="120" height="70" fill="#cfd8e0"/><g fill="#7a8794"><rect x="455" y="265" width="20" height="40"/><rect x="485" y="265" width="20" height="40"/><rect x="515" y="265" width="20" height="40"/></g><text x="380" y="300" text-anchor="middle" font-size="12" fill="#4b6378">sea water</text></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.singapore = {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    gateway: 'Singapore Changi Airport',
    lonlat: [103.8, 1.35],
    stamp: { colour: '#c2410c', icon: '🏙️' },
    transport: { name: 'MRT train', verb: 'Ride', emoji: '🚇' },
    scene: 'rail',
    photo: { file: 'Marina Bay Singapore-3499.jpg', alt: 'The skyline of Singapore’s Central Business District across Marina Bay', author: 'Bijay Chaurasia', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'Welcome to Singapore, a country that is also a city! It is a small island with lots of people, so it has to be clever about land, water and housing. Hop on the MRT train to explore.',
      adv: 'Singapore is a small, wealthy, densely populated island state. This expedition looks at how it manages scarce land and water, how it houses its people, and its equatorial climate.'
    },
    facts: ['Singapore is about 1° north of the Equator.', 'It has no large rivers, lakes or underground water stores.', 'Land reclamation has made the country about a fifth bigger since 1960.'],
    climate: {
      place: 'Singapore (Changi)', source: 'NEA climate normals 1991–2020', lat: '1°N',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [26.8, 27.3, 27.8, 28.2, 28.6, 28.5, 28.2, 28.1, 28.0, 27.9, 27.2, 26.8],
      rain: [222, 105, 152, 164, 164, 135, 147, 147, 125, 168, 252, 332]
    },
    diagrams: { taps: TAPS_SVG },
    stations: [
      {
        id: 'land', title: 'Making new land', icon: '🏗️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Singapore has run out of space. How has it made the country bigger?', options: ['Land reclamation: building new land out into the sea', 'Buying land from Antarctica', 'Draining the ocean', 'Building on clouds'], answer: 0,
              explain: 'Singapore fills in areas of shallow sea with sand, soil and rock to create new land. This is called land reclamation.' },
            { type: 'mcq', q: 'Singapore’s land area was about 582 km² in 1960 and about 726 km² in 2019. Roughly how much bigger is that?', options: ['About a quarter bigger', 'About twice as big', 'About 10 times bigger', 'It has not changed'], answer: 0,
              explain: '726 − 582 = 144 km² more, which is about a quarter of the 1960 size.' },
            { type: 'mcq', q: 'Which of these was built on reclaimed land?', options: ['Changi Airport', 'Mount Everest', 'The Amazon River', 'Lake Toba'], answer: 0,
              explain: 'Changi Airport was built partly on reclaimed land along Singapore’s east coast.' }
          ],
          adv: [
            { type: 'number', q: 'Singapore grew from 581.5 km² (1960) to 725.7 km² (2019). Calculate the percentage increase (to the nearest whole number).', answer: 24.8, tol: 1.3, unit: '%',
              explain: '(725.7 − 581.5) ÷ 581.5 × 100 ≈ 24.8%, so about 25%.' },
            { type: 'mcq', q: 'Singapore now often builds polders instead of filling the sea with sand. Why?', options: ['Sand has become scarce, and some countries have banned sand exports', 'Polders are cheaper because they need no pumps', 'Sand makes the sea too salty', 'Polders are only used for farming'], answer: 0,
              explain: 'Polders (land enclosed by walls and drained, as in the Netherlands) need far less sand. Several neighbouring countries have restricted sand exports.' },
            { type: 'mcq', q: 'Which is a likely environmental cost of land reclamation?', options: ['Loss of coral reefs, mangroves and sea-grass habitats', 'More rainfall', 'Fewer earthquakes', 'Higher sea temperatures everywhere'], answer: 0,
              explain: 'Filling in shallow coasts destroys marine habitats, and dredging sand damages the places it comes from.' }
          ]
        }
      },
      {
        id: 'water', title: 'The Four National Taps', icon: '🚰',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'taps', prompt: 'Singapore gets its water from four "taps". Label each picture.',
              spots: [{ x: 25, y: 46, a: 'Local catchment' }, { x: 75, y: 37, a: 'Imported water' }, { x: 25, y: 92, a: 'NEWater' }, { x: 63, y: 92, a: 'Desalination' }],
              extra: [],
              explain: 'Rain is collected in reservoirs (local catchment); water is piped in from Malaysia (imported); used water is cleaned and recycled (NEWater); and sea water has its salt removed (desalination).' },
            { type: 'mcq', q: 'What is NEWater?', options: ['Used water cleaned so well it can be used again', 'Water from melted icebergs', 'Bottled water from France', 'Rainwater from the roof'], answer: 0,
              explain: 'NEWater is used water treated with membranes and UV light until it is ultra-clean. Most goes to factories, and some is added to reservoirs.' },
            { type: 'mcq', q: 'Why does Singapore need four different water sources?', options: ['It has no big rivers or lakes, and wants a secure supply', 'It rains too much', 'It wants to sell water to Thailand', 'Its people drink four times more than anyone else'], answer: 0,
              explain: 'A small island with no big rivers has to collect, import, recycle and desalinate water to be sure it never runs out.' }
          ],
          adv: [
            { type: 'label', diagram: 'taps', prompt: 'Label Singapore’s Four National Taps. One label does not belong.',
              spots: [{ x: 25, y: 46, a: 'Local catchment' }, { x: 75, y: 37, a: 'Imported water' }, { x: 25, y: 92, a: 'NEWater' }, { x: 63, y: 92, a: 'Desalination' }],
              extra: ['Groundwater aquifer'],
              explain: 'Singapore has no significant aquifers. Its four taps are local catchment, imported water from Malaysia, NEWater and desalination.' },
            { type: 'mcq', q: 'Why is Singapore expanding NEWater and desalination in particular?', options: ['They do not depend on rainfall or another country, so they make supply more secure', 'They are the cheapest options', 'They use no energy', 'They are required by the UN'], answer: 0,
              explain: 'Rainfall varies and the water agreement with Malaysia runs only until 2061. Recycling and desalination are "weather-resilient", though they use a lot of energy.' },
            { type: 'mcq', q: 'Which is the main drawback of desalination?', options: ['It uses a lot of energy and produces salty brine', 'It makes water radioactive', 'It only works in winter', 'It needs glaciers'], answer: 0,
              explain: 'Removing salt (usually by reverse osmosis) is energy-intensive, and the leftover brine must be disposed of carefully.' }
          ]
        }
      },
      {
        id: 'housing', title: 'Living in the sky', icon: '🏢',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'About how many Singapore residents live in public HDB flats?', options: ['About 8 in 10', 'About 1 in 10', 'Nobody', 'About 1 in 100'], answer: 0,
              explain: 'Around 80% of Singapore residents live in flats built by the Housing and Development Board (HDB).' },
            { type: 'mcq', q: 'Why are most homes in Singapore in tall blocks of flats?', options: ['There is little land, so building upwards fits more people in', 'Tall buildings are cooler', 'It is the law to live above the 10th floor', 'There are no builders who can build houses'], answer: 0,
              explain: 'With so little land, high-rise flats let many people live in a small area.' },
            { type: 'mcq', q: 'Singapore calls itself a "City in Nature". What does that mean?', options: ['Parks, gardens and green roofs are built into the city', 'There are no buildings at all', 'Everyone lives in the rainforest', 'The city is under the sea'], answer: 0,
              explain: 'Singapore adds parks, park connectors, green roofs and vertical gardens to cool the city and support wildlife.' }
          ],
          adv: [
            { type: 'mcq', q: 'Which statement best describes Singapore’s housing policy?', options: ['The government builds most homes and helps people buy them on long leases', 'All homes are rented from private landlords', 'People must build their own houses', 'There is no planning'], answer: 0,
              explain: 'HDB builds most homes and sells them on 99-year leases, with grants that make home ownership affordable.' },
            { type: 'mcq', q: 'Dense cities like Singapore can suffer from the urban heat island effect. Which strategy helps reduce it?', options: ['Green roofs, trees and parks that shade and cool the city', 'More dark tarmac', 'Removing all trees', 'Building more car parks'], answer: 0,
              explain: 'Vegetation provides shade and cools the air through evapotranspiration, lowering city temperatures.' },
            { type: 'mcq', q: 'Why might Singapore’s approach be hard to copy in a city like Lagos or Mumbai?', options: ['Singapore is wealthy, small and has strong central planning and land ownership', 'Singapore has a cold climate', 'Singapore has no population', 'Other cities have too much land'], answer: 0,
              explain: 'Singapore’s wealth, small size, state land ownership and strong governance make large-scale public housing possible.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Equatorial climate', icon: '🌦️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Singapore?', options: ['December', 'February', 'June', 'September'], answer: 0,
              explain: 'December has the tallest bar, about 332 mm, during the north-east monsoon.' },
            { type: 'mcq', graph: true, q: 'Which is the driest month?', options: ['February', 'December', 'November', 'April'], answer: 0,
              explain: 'February has the shortest bar: about 105 mm.' },
            { type: 'mcq', graph: true, q: 'Which word best describes Singapore’s temperature?', options: ['Hot all year', 'Freezing in winter', 'Cool all year', 'Very changeable'], answer: 0,
              explain: 'Every month averages between about 27°C and 29°C.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate Singapore’s annual temperature range (°C).', answer: 1.8, tol: 0.15, unit: '°C',
              explain: 'Highest monthly mean 28.6°C (May) − lowest 26.8°C (December and January) = 1.8°C.' },
            { type: 'mcq', graph: true, q: 'Singapore’s wettest months are November to January. Which explains this?', options: ['The north-east monsoon brings moist winds and heavy rain', 'The Sahara sends dust storms', 'Snow melts in the hills', 'Typhoons hit Singapore every December'], answer: 0,
              explain: 'From about December to March, north-east monsoon winds bring heavy rain, with the wettest spell at the start.' },
            { type: 'mcq', graph: true, q: 'Compare Singapore with Kuala Lumpur (about 2,850 mm a year). Singapore gets about 2,100 mm. Which is the best comparison?', options: ['Both are very wet, but Kuala Lumpur gets roughly a third more rain', 'Singapore is much wetter', 'Both get the same', 'Kuala Lumpur is a desert'], answer: 0,
              explain: '2,850 is about 35% more than 2,100. Both are wet equatorial climates, but local factors such as nearby mountains affect totals.' }
          ]
        }
      }
    ]
  };
})();
