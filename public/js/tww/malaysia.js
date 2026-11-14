/* Travel the Wright Way — destination: Malaysia (rainforest, Cameron Highlands, palm oil).
 * Climate data: Kuala Lumpur, WMO climate normals 1991–2020.
 */
(function () {
  var ALT_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A mountain in Malaysia showing how land use changes with height">' +
  '<defs><linearGradient id="msky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a9d8f5"/><stop offset="1" stop-color="#eaf7ff"/></linearGradient></defs>' +
  '<rect width="600" height="420" fill="url(#msky)"/>' +
  '<path d="M0 400 L60 380 L200 220 L280 120 L330 90 L380 130 L470 260 L600 360 L600 420 L0 420 Z" fill="#2f7d32"/>' +
  // mossy cloud forest at top
  '<path d="M240 160 L280 120 L330 90 L380 130 L405 165 Z" fill="#4f6f52"/>' +
  '<g fill="#c9d6cc" opacity=".8"><ellipse class="sway" cx="300" cy="120" rx="70" ry="14"/></g>' +
  // tea terraces mid slope
  '<path d="M150 280 L200 220 L240 170 L405 170 L450 230 L480 280 Z" fill="#7cc14a"/>' +
  '<g stroke="#4f8a2b" stroke-width="3" fill="none"><path d="M180 255 Q300 245 465 262"/><path d="M200 232 Q300 222 452 240"/><path d="M222 205 Q300 196 436 214"/><path d="M240 182 Q320 175 418 190"/></g>' +
  // lowland: rainforest left, oil palm right
  '<g fill="#1f6b2a">' + [40, 75, 110, 145].map(function (x, i) { return '<circle cx="' + x + '" cy="' + (360 - i * 14) + '" r="20"/>'; }).join('') + '</g>' +
  '<g>' + [430, 470, 510, 550, 585].map(function (x, i) { return '<g transform="translate(' + x + ' ' + (330 + (i % 2) * 18) + ')"><rect x="-2" y="0" width="4" height="40" fill="#7a5638"/><path d="M0 0 L-22 8 M0 0 L22 8 M0 0 L-16 -12 M0 0 L16 -12 M0 0 L0 -18" stroke="#3f8f3a" stroke-width="5" stroke-linecap="round"/></g>'; }).join('') + '</g>' +
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="320" y1="110" x2="410" y2="58"/><line x1="350" y1="220" x2="440" y2="190"/><line x1="100" y1="340" x2="80" y2="300"/><line x1="520" y1="345" x2="520" y2="300"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.malaysia = {
    id: 'malaysia',
    name: 'Malaysia',
    country: 'Malaysia',
    gateway: 'Kuala Lumpur',
    lonlat: [101.4, 4.5],
    locator: { box: [98.3, 106.2, 0.6, 7.2], places: [['Kuala Lumpur', 101.69, 3.14, 'r'], ['Cameron Highlands', 101.38, 4.47, 'b'], ['Taman Negara', 102.4, 4.75, 'r'], ['Singapore', 103.82, 1.35, 'l'], ['Strait of Malacca', 99.9, 2.2, 'a']] },
    stamp: { colour: '#2563c9', icon: '🌴' },
    transport: { name: 'longboat', verb: 'Cruise', emoji: '🚣' },
    scene: 'river',
    photo: { file: 'Cameron Highlands Boh Tea Plantation.jpg', alt: 'Rows of tea bushes covering the hills of the Cameron Highlands, Malaysia', author: 'Tinu711', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'Your first stop after Thailand! You land in Kuala Lumpur, then travel by longboat and up into the Cameron Highlands. Find out about Malaysia’s rainforest, its tea-growing hills and its palm oil plantations.',
      adv: 'From Kuala Lumpur you head into the interior. This expedition looks at equatorial climate, how temperature changes with altitude, and the costs and benefits of palm oil, one of Malaysia’s biggest exports.'
    },
    facts: ['Malaysia is split into two parts: Peninsular Malaysia and East Malaysia on the island of Borneo.', 'Its rainforests are among the oldest in the world.', 'The Cameron Highlands are about 1,500 m above sea level, cool enough to grow tea.'],
    climate: {
      place: 'Kuala Lumpur, Malaysia', source: 'WMO climate normals 1991–2020', lat: '3°N',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [27.3, 27.8, 28.1, 28.1, 28.5, 28.4, 28.0, 28.0, 27.7, 27.5, 27.1, 27.1],
      rain: [227, 193, 270, 302, 230, 146, 165, 174, 220, 284, 356, 281]
    },
    diagrams: { alt: ALT_SVG },
    stations: [
      {
        id: 'rainforest', title: 'Rainforest wildlife', icon: '🦧',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Wild orangutans live on only two islands in the world. Which ones?', options: ['Borneo and Sumatra', 'Java and Bali', 'Sri Lanka and Madagascar', 'Phuket and Langkawi'], answer: 0,
              explain: 'Orangutans live only in the rainforests of Borneo (shared by Malaysia, Indonesia and Brunei) and Sumatra (Indonesia).' },
            { type: 'mcq', q: 'Why is the biggest threat to orangutans the loss of their forest?', options: ['They live in trees and need the forest for food and shelter', 'They are hunted for meat more than any other animal in Asia', 'They can only survive at high altitude in cool cloud forest', 'They need to migrate long distances across open grassland'], answer: 0,
              explain: 'Orangutans spend most of their lives in the trees, eating fruit. When forest is cleared for farms and plantations, they lose their homes and food.' },
            { type: 'mcq', q: 'Malaysia’s rainforest has a similar climate to the Amazon. Why?', options: ['Both are close to the Equator', 'Both are near the sea', 'Both are very high up', 'Both are in the southern hemisphere'], answer: 0,
              explain: 'Both lie close to the Equator, so they are hot and wet all year.' }
          ],
          adv: [
            { type: 'mcq', q: 'Which best explains why Malaysia’s rainforests have such high biodiversity?', options: ['They are very old and stable, with warmth and water all year', 'They are cool and dry, so few species compete for space', 'They have long, cold winters that kill off many of the predators', 'They have fertile volcanic soils across the whole country'], answer: 0,
              explain: 'A long, stable history with year-round warmth, light and water has allowed many species to evolve and specialise.' },
            { type: 'mcq', q: 'Species found only in one place are called:', options: ['Endemic', 'Invasive', 'Migratory', 'Domesticated'], answer: 0,
              explain: 'Endemic species live naturally in only one area. Borneo has many endemic plants and animals.' },
            { type: 'mcq', q: 'Wildlife corridors link patches of forest together. Why do they help?', options: ['Animals can move between patches to find food and mates', 'They let tourists drive through the forest more easily', 'They make palm oil plantations much more profitable for farmers', 'They stop heavy rain washing soil off nearby farms'], answer: 0,
              explain: 'Fragmented forest isolates populations. Corridors reconnect them, so animals can move, feed and breed.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Equatorial climate', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Kuala Lumpur?', options: ['November', 'June', 'February', 'July'], answer: 0,
              explain: 'November has the tallest bar: about 356 mm.' },
            { type: 'mcq', graph: true, q: 'Which is the driest month?', options: ['June', 'November', 'April', 'October'], answer: 0,
              explain: 'June has the shortest bar, about 146 mm, but that is still a lot of rain.' },
            { type: 'mcq', graph: true, q: 'Does Kuala Lumpur have a cold season?', options: ['No: it is about 27–28°C every month', 'Yes: it falls below 10°C in December', 'Yes: it is cool from June to August', 'No: it is below 15°C all year round'], answer: 0,
              explain: 'The temperature line is almost flat. Near the Equator it is hot all year.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Kuala Lumpur (°C).', answer: 1.4, tol: 0.15, unit: '°C',
              explain: 'Highest monthly mean 28.5°C (May) − lowest 27.1°C (November and December) = 1.4°C.' },
            { type: 'mcq', graph: true, q: 'Roughly what is Kuala Lumpur’s total annual rainfall?', options: ['About 2,850 mm', 'About 850 mm', 'About 1,500 mm', 'About 6,000 mm'], answer: 0,
              explain: 'The 12 bars add up to about 2,850 mm.' },
            { type: 'mcq', graph: true, q: 'The graph has two wetter peaks, around April and around November. Which is the best explanation?', options: ['The rain belt (ITCZ) passes over twice a year, following the sun', 'Two large typhoons cross the Malay Peninsula at those times every year', 'The monsoon winds stop completely in April and November', 'Air pollution from fires makes rain fall twice a year'], answer: 0,
              explain: 'The ITCZ follows the overhead sun north and south across the Equator, crossing Malaysia twice a year and bringing two rainier periods.' }
          ]
        }
      },
      {
        id: 'highlands', title: 'Cameron Highlands', icon: '🍵',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'alt', prompt: 'Label how the land is used at different heights.',
              spots: [{ x: 80, y: 13, a: 'Cloud forest' }, { x: 82, y: 45, a: 'Tea plantations' }, { x: 13, y: 70, a: 'Lowland rainforest' }, { x: 86, y: 70, a: 'Oil palm plantation' }],
              extra: [],
              explain: 'The lowlands are hot (rainforest and oil palm). Higher up it is cooler, which suits tea. Near the top, the air is so cool and damp that clouds cover a mossy cloud forest.' },
            { type: 'mcq', q: 'Why is tea grown in the Cameron Highlands instead of the lowlands?', options: ['It is cooler higher up, which suits tea bushes', 'There is almost no rain in Malaysia’s lowlands', 'Tea needs frost and snow to grow its best leaves', 'The highlands are closer to the ports on the coast'], answer: 0,
              explain: 'Temperature falls as you go up a mountain. The cooler highlands suit tea, vegetables and strawberries.' },
            { type: 'mcq', q: 'Temperature falls about 6.5°C for every 1,000 m you climb. Kuala Lumpur is about 28°C. Roughly how warm is it in the Cameron Highlands, about 1,500 m up?', options: ['About 18°C', 'About 28°C', 'About 5°C', 'About 35°C'], answer: 0,
              explain: '1,500 m × 6.5°C per 1,000 m ≈ 10°C cooler. 28 − 10 ≈ 18°C.' }
          ],
          adv: [
            { type: 'label', diagram: 'alt', prompt: 'Label the land uses at different altitudes. One label does not belong.',
              spots: [{ x: 80, y: 13, a: 'Cloud forest' }, { x: 82, y: 45, a: 'Tea plantations' }, { x: 13, y: 70, a: 'Lowland rainforest' }, { x: 86, y: 70, a: 'Oil palm plantation' }],
              extra: ['Coniferous forest'],
              explain: 'Malaysia’s highlands do not reach the cold conditions where coniferous forest grows. The sequence is lowland rainforest and oil palm, then tea, then mossy cloud forest.' },
            { type: 'number', q: 'Using a lapse rate of 6.5°C per 1,000 m, estimate the temperature at 1,500 m if it is 28°C at sea level (°C).', answer: 18.25, tol: 1, unit: '°C',
              explain: '1.5 × 6.5 = 9.75°C cooler, so 28 − 9.75 ≈ 18.3°C.' },
            { type: 'mcq', q: 'Farms and resorts have spread up the steep slopes of the Cameron Highlands. Which problem is most likely?', options: ['Soil erosion, landslides and muddy rivers', 'Small glaciers forming on the cleared hilltops', 'Sea water flooding the highland valleys', 'Desert sand dunes spreading over farms'], answer: 0,
              explain: 'Clearing vegetation on steep slopes exposes soil to heavy tropical rain, causing erosion, landslides and sediment in rivers.' }
          ]
        }
      },
      {
        id: 'palmoil', title: 'Palm oil', icon: '🌴',
        tasks: {
          ks3: [
            { type: 'sort', q: 'Sort these into benefits and problems of palm oil plantations.', bins: ['Benefit', 'Problem'],
              items: [['Jobs for local people', 0], ['Rainforest is cleared', 1], ['Money from exports', 0], ['Orangutans lose their homes', 1], ['Used in lots of foods and soaps', 0], ['Burning to clear land causes haze', 1]],
              explain: 'Palm oil brings jobs and money, but clearing and burning forest destroys habitats and causes smoky haze.' },
            { type: 'mcq', q: 'Which two countries produce most of the world’s palm oil?', options: ['Indonesia and Malaysia', 'Brazil and Colombia', 'Thailand and the Philippines', 'Nigeria and Ghana'], answer: 0,
              explain: 'Indonesia and Malaysia grow most of the world’s palm oil.' },
            { type: 'mcq', q: 'What could shoppers do to help?', options: ['Choose products with certified sustainable palm oil', 'Buy products with as much palm oil as possible', 'Choose products made with oil from new plantations', 'Avoid reading labels as they do not make a difference'], answer: 0,
              explain: 'Certified sustainable palm oil comes from plantations that are not allowed to clear new rainforest.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these impacts of palm oil as economic, or environmental and social costs.', bins: ['Economic benefit', 'Environmental or social cost'],
              items: [['Export earnings', 0], ['Loss of biodiversity', 1], ['Rural employment', 0], ['Peat fires releasing CO₂', 1], ['Smallholder incomes', 0], ['Land disputes with Indigenous communities', 1], ['Soil erosion and river pollution', 1]],
              explain: 'Palm oil supports exports and rural incomes, but it is linked to deforestation, peat fires, pollution and land conflicts.' },
            { type: 'mcq', q: 'Why is draining and burning peat swamp forest especially bad for the climate?', options: ['Peat stores huge amounts of carbon, released as CO₂ when it burns', 'Peat fires make the sea level fall around the Malaysian coast', 'Peat reflects sunlight, so removing it cools the whole planet quickly', 'Burning peat produces oxygen, which speeds up global warming'], answer: 0,
              explain: 'Peat soils have built up carbon over thousands of years. Draining and burning them releases it quickly.' },
            { type: 'mcq', q: 'Which is the best example of a more sustainable approach to palm oil?', options: ['Certification that bans clearing primary forest and peat', 'Replacing old rainforest with new, faster-growing oil palms', 'Burning land to clear it quickly between harvests', 'Moving all plantations onto drained peat swamps'], answer: 0,
              explain: 'Certification (such as the RSPO) sets rules on deforestation and peat. Its success depends on how strictly it is enforced.' }
          ]
        }
      }
    ]
  };
})();
