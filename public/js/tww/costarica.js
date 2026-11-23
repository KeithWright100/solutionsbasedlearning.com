/* Travel the Wright Way — destination: Costa Rica (cloud forest, ecotourism and renewable energy).
 * Climate data: San José, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Renewable electricity about 95% in 2023, 74% from hydropower (Canadian Trade Commissioner Service); forest cover doubled to over 50% by 2016
 *   and is now nearly 60%; Payments for Environmental Services (PES) since 1997; about 6% of the world's biodiversity; army abolished in the late 1940s.
 */
(function () {
  var RELIEF_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section across Costa Rica from the Pacific Ocean to the Caribbean Sea showing trade winds, cloud forest and a rain shadow">' +
  '<rect width="600" height="420" fill="#d6ecfb"/>' +
  // seas
  '<rect y="300" width="120" height="120" fill="#2f7fbf"/><rect x="480" y="300" width="120" height="120" fill="#2f7fbf"/>' +
  // land profile with volcano
  '<path d="M110 300 L160 280 L220 220 L270 130 L290 90 L310 90 L330 130 L380 200 L440 270 L490 300 L490 420 L110 420 Z" fill="#6b8e5a"/>' +
  '<path d="M110 300 L160 280 L220 220 L250 175 L250 420 L110 420 Z" fill="#c9b072"/>' +
  '<path d="M290 90 L310 90 L304 100 L296 100 Z" fill="#4a4440"/>' +
  // cloud forest band and clouds on windward (right) side
  '<path d="M300 100 L330 130 L380 200 L350 205 L318 160 Z" fill="#1f5f3a"/>' +
  '<g fill="#fff" opacity=".95"><ellipse cx="380" cy="150" rx="46" ry="16"/><ellipse cx="420" cy="170" rx="40" ry="14"/><ellipse cx="350" cy="122" rx="34" ry="12"/></g>' +
  '<g class="drip" stroke="#2f7fbf" stroke-width="2.5" stroke-linecap="round"><line x1="390" y1="182" x2="386" y2="196"/><line x1="410" y1="186" x2="406" y2="200"/><line x1="430" y1="184" x2="426" y2="198"/></g>' +
  // trade wind arrow from Caribbean
  '<g stroke="#11243b" stroke-width="5" fill="#11243b"><path d="M590 250 C 520 240, 460 220, 420 190" fill="none"/><path d="M418 176 L410 196 L430 192 Z"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="330" y1="62" x2="345" y2="150"/><line x1="180" y1="236" x2="200" y2="262"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.costarica = {
    id: 'costarica',
    name: 'Costa Rica',
    short: 'Costa Rica',
    country: 'Costa Rica',
    gateway: 'San José',
    lonlat: [-84.1, 9.9],
    locator: { box: [-86.3, -82.2, 7.9, 11.4], places: [['San José', -84.09, 9.93, 'r'], ['Monteverde', -84.82, 10.3, 'l'], ['Arenal Volcano', -84.7, 10.46, 'r'], ['Limón', -83.03, 10.0, 'l'], ['Pacific Ocean', -85.3, 8.6, 'a'], ['Caribbean Sea', -82.9, 11.0, 'a']] },
    stamp: { colour: '#15803d', icon: '🐸' },
    transport: { name: 'zip line', verb: 'Zip', emoji: '🌿' },
    scene: 'zip',
    photo: { file: 'Monteverde Cloud Forest 01.jpg', alt: 'Misty green cloud forest canopy at Monteverde seen from a suspension bridge', author: 'Cephas', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'You land in San José, the capital of Costa Rica, and head up into the mountains to Monteverde. Clip on your harness: you are zip-lining through the cloud forest canopy!',
      adv: 'From San José you travel to the Monteverde cloud forest. This expedition covers relief rainfall and cloud forests, a tropical wet-and-dry climate, deforestation and its reversal, and Costa Rica’s renewable energy and ecotourism.'
    },
    facts: ['Costa Rica has about 6% of the world’s biodiversity.', 'About 95% of its electricity came from renewable sources in 2023.', 'Costa Rica abolished its army in the late 1940s.'],
    climate: {
      place: 'San José, Costa Rica', source: 'Long-term averages (CRU / Met Office)', lat: '10°N',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [19.0, 19.5, 20.5, 20.5, 21.0, 21.0, 20.5, 20.5, 20.5, 20.5, 20.0, 19.5],
      rain: [6, 7, 9, 56, 261, 296, 205, 282, 372, 343, 155, 36]
    },
    diagrams: { relief: RELIEF_SVG },
    stations: [
      {
        id: 'cloud', title: 'Cloud forest', icon: '☁️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'relief', prompt: 'Label this cross-section across Costa Rica.',
              spots: [{ x: 14, y: 90, a: 'Pacific Ocean' }, { x: 86, y: 90, a: 'Caribbean Sea' }, { x: 85, y: 50, a: 'Trade winds' }, { x: 55, y: 13, a: 'Cloud forest' }, { x: 28, y: 52, a: 'Drier side' }],
              extra: [],
              explain: 'Moist trade winds blow in from the Caribbean. As they rise over the mountains, the air cools and clouds form, feeding the cloud forest near the top. The Pacific side is drier.' },
            { type: 'mcq', q: 'What makes a cloud forest special?', options: ['It is nearly always in cloud, so plants take water from the mist', 'It grows so high on the mountains that snow covers the trees most of the year', 'It has no trees, only mosses and grasses', 'It only rains there once every few years'], answer: 0,
              explain: 'Mist drips off leaves and mosses, adding water even when it is not raining. Mosses, orchids and ferns cover the trees.' },
            { type: 'mcq', q: 'Many plants in the cloud forest grow on the branches of trees, not in the ground. What are they called?', options: ['Epiphytes', 'Buttress roots', 'Cacti', 'Conifers'], answer: 0,
              explain: 'Epiphytes such as orchids, bromeliads and mosses perch on branches to reach light, taking water from rain and mist.' }
          ],
          adv: [
            { type: 'label', diagram: 'relief', prompt: 'Label the cross-section. One label does not belong.',
              spots: [{ x: 14, y: 90, a: 'Pacific Ocean' }, { x: 86, y: 90, a: 'Caribbean Sea' }, { x: 85, y: 50, a: 'NE trade winds' }, { x: 55, y: 13, a: 'Montane cloud forest' }, { x: 28, y: 52, a: 'Rain shadow' }],
              extra: ['Glacier'],
              explain: 'There are no glaciers here. Orographic uplift of the NE trades produces cloud and rain on the windward Caribbean slopes; the Pacific side lies partly in a rain shadow.' },
            { type: 'mcq', q: 'Why does cloud form at a particular height on the windward slope?', options: ['Rising air cools until it reaches its dew point', 'Clouds are heavier than air, so they collect at one height on the mountain side', 'The mountains release water vapour from the rocks', 'Air warms as it rises up the slope'], answer: 0,
              explain: 'As air rises it expands and cools. At the dew point, water vapour condenses, giving a persistent cloud belt.' },
            { type: 'mcq', q: 'Scientists worry that warming could lift the cloud base higher up the mountains. What would this mean for cloud forest species?', options: ['Drier habitats, pushing species uphill until there is no land left', 'More mist at lower levels, so the cloud forest would spread down into the valleys', 'No effect on the wildlife at all', 'More snow on the mountaintops'], answer: 0,
              explain: 'Cloud forest species depend on mist. If the cloud belt rises, habitats shrink; species at mountaintops have nowhere left to go.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Wet and dry seasons', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in San José?', options: ['September', 'January', 'March', 'December'], answer: 0,
              explain: 'September has the tallest bar (about 372 mm).' },
            { type: 'mcq', graph: true, q: 'Which months are the dry season?', options: ['About December to April', 'About May to November', 'June to August only', 'There is no dry season'], answer: 0,
              explain: 'From December to April the bars are very short. This is when most tourists visit.' },
            { type: 'mcq', graph: true, q: 'What does the temperature line show?', options: ['It is mild all year, about 19–21°C', 'It is hot in December and cold in July', 'It changes by about 30°C', 'It is freezing in winter'], answer: 0,
              explain: 'San José is in the tropics but about 1,100 m up in the Central Valley, so it is mild all year.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in San José (°C).', answer: 2.0, tol: 0.1, unit: '°C',
              explain: 'Warmest 21.0°C (May and June) − coolest 19.0°C (January) = 2.0°C. Tropical locations have very small ranges.' },
            { type: 'mcq', graph: true, q: 'What mainly causes San José’s wet season from May to November?', options: ['The ITCZ moves north, bringing rising air and storms', 'Cold fronts from Canada sweep south across Central America every week', 'Snowmelt from the volcanoes', 'The subtropical high moves overhead'], answer: 0,
              explain: 'As the overhead sun and ITCZ shift north in the northern summer, moist air rises and heavy afternoon storms occur.' },
            { type: 'mcq', graph: true, q: 'Notice the slight dip in rainfall in July. Locals call it the “veranillo” (little summer). What causes it?', options: ['Stronger high pressure and trade winds in mid-summer', 'A volcanic eruption each July that blocks the rain clouds from reaching the city', 'Snow falling instead of rain in July', 'The rainy season ending early'], answer: 0,
              explain: 'This mid-summer drought is common across Central America, when stronger trade winds and high pressure briefly reduce rainfall on the Pacific side and Central Valley.' }
          ]
        }
      },
      {
        id: 'forest', title: 'Losing and regrowing forest', icon: '🌳',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'In the 1900s Costa Rica lost much of its forest. What was the main reason?', options: ['Clearing land for cattle ranches and farms', 'Volcanic eruptions burning large areas of forest', 'Too many tourists', 'Glaciers advancing'], answer: 0,
              explain: 'Large areas were cleared for cattle pasture and crops such as bananas and coffee.' },
            { type: 'mcq', q: 'By 2016 Costa Rica’s forest cover had doubled to over half the country. How did it happen?', options: ['Paying landowners to protect and replant forest, plus national parks', 'Banning all farming and moving rural families into the cities', 'Planting only fast-growing foreign trees', 'Waiting for forest to regrow by itself'], answer: 0,
              explain: 'From 1997 the government paid landowners to keep or regrow forest (Payments for Environmental Services), alongside national parks and reserves.' },
            { type: 'sort', q: 'Sort these into reasons to protect the rainforest.', bins: ['Helps people', 'Helps the planet and wildlife'],
              items: [['Jobs in ecotourism', 0], ['Clean water supplies', 0], ['Medicines from plants', 0], ['Habitat for thousands of species', 1], ['Stores carbon', 1], ['Protects soil from erosion', 1]],
              explain: 'Forests provide many “ecosystem services” to people as well as wildlife habitat and climate benefits.' }
          ],
          adv: [
            { type: 'mcq', q: 'Costa Rica was the first country to run a national Payments for Environmental Services (PES) scheme. Which services are landowners paid for?', options: ['Carbon storage, water, biodiversity and scenic beauty', 'Clearing forest for cattle pasture and growing pineapples for export', 'Building roads through reserves', 'Mining gold'], answer: 0,
              explain: 'PES recognises that forests provide services that markets usually ignore, and pays landowners to keep them.' },
            { type: 'mcq', q: 'Studies find forest regrew on land enrolled in PES, but cannot always prove PES caused it. Why is attribution difficult?', options: ['Other factors also changed, such as falling cattle prices', 'Forests cannot be measured accurately from satellites or on the ground', 'PES has never been used', 'Forests grow too slowly to study'], answer: 0,
              explain: 'Forest recovery also followed a fall in beef prices and people leaving farming. Separating each cause requires careful comparison with land outside the scheme.' },
            { type: 'mcq', q: 'Costa Rica is often described as the only tropical country to have reversed deforestation. Which lesson could other countries learn?', options: ['Combine payments with protected areas and strong laws', 'Ban tourism so that visitors cannot damage the forests and their wildlife', 'Rely only on voluntary action', 'Convert forest to cattle ranches'], answer: 0,
              explain: 'Its success combined payments, protection and an economy (ecotourism) that values standing forest.' }
          ]
        }
      },
      {
        id: 'energy', title: 'Green energy and ecotourism', icon: '♻️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'About how much of Costa Rica’s electricity came from renewable sources in 2023?', options: ['About 95%', 'About 5%', 'About 50%', 'None'], answer: 0,
              explain: 'Most comes from hydro-electric power, with geothermal energy from volcanoes, wind and solar.' },
            { type: 'mcq', q: 'What is ecotourism?', options: ['Responsible travel that protects nature and benefits local people', 'Building large resorts in rainforests so more visitors can see wildlife up close', 'Hunting holidays', 'Holidays in big cities'], answer: 0,
              explain: 'Ecotourists pay to see wildlife and forests, which gives local people a reason to protect them.' },
            { type: 'mcq', q: 'Which crops are major farm exports from Costa Rica’s lowlands?', options: ['Bananas, pineapples and coffee', 'Wheat, barley and oats from large farms', 'Apples and pears', 'Potatoes and oats'], answer: 0,
              explain: 'Hot, wet lowlands suit bananas and pineapples; coffee grows on cooler, volcanic slopes.' }
          ],
          adv: [
            { type: 'mcq', q: 'In 2024 Costa Rica warned it might need to ration electricity. Why is relying heavily on hydro-electric power a risk?', options: ['Droughts reduce river flow and reservoir levels', 'Hydro power stations stop working at night when the sun goes down', 'Dams produce as much greenhouse gas as coal', 'Rivers flow faster in droughts'], answer: 0,
              explain: 'About three-quarters of the electricity is hydro. Diversifying into wind, solar and geothermal improves energy security.' },
            { type: 'sort', q: 'Evaluate ecotourism in Costa Rica.', bins: ['Advantage', 'Disadvantage'],
              items: [['Income gives a reason to protect forests', 0], ['Jobs for local guides', 0], ['Funds for national parks', 0], ['Carbon emissions from international flights', 1], ['Crowding and disturbance at popular sites', 1], ['Profits may go to foreign-owned companies', 1]],
              explain: 'Ecotourism can support conservation, but it must be managed to limit impacts and keep benefits local.' },
            { type: 'mcq', q: 'Costa Rica’s electricity is almost all renewable, yet transport remains its biggest source of emissions. Which policy would most reduce them?', options: ['Electric buses and cars, powered by the renewable grid', 'Building more coal power stations to charge electric vehicles more cheaply', 'Importing more petrol', 'Cutting forests for fuel'], answer: 0,
              explain: 'Its decarbonisation plan aims to electrify public transport, using the clean grid to cut emissions.' }
          ]
        }
      }
    ]
  };
})();
