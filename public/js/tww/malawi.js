/* Travel the Wright Way — destination: Malawi (a rift valley lake, farming, development and culture).
 * Climate data: Lilongwe, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: Lake Malawi lies in the southern part of the East African Rift and holds more fish species than any other lake
 *   (hundreds of cichlids, most found nowhere else); Lake Malawi National Park is a UNESCO World Heritage Site;
 *   maize (eaten as nsima) is the staple food and tobacco the main export; Malawi is landlocked;
 *   Cyclone Freddy caused deadly floods and landslides in southern Malawi in March 2023;
 *   Gule Wamkulu, the masked dance of the Chewa people, is on UNESCO's list of Intangible Cultural Heritage.
 */
(function () {
  var RIFT_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a rift valley: a block of land has dropped down between two faults, forming a valley with a lake, with plateaus on either side">' +
  '<rect width="600" height="420" fill="#d6ecfb"/>' +
  // blocks
  '<path d="M0 150 L200 150 L250 420 L0 420 Z" fill="#b88a5a"/>' +
  '<path d="M400 160 L600 160 L600 420 L350 420 Z" fill="#b88a5a"/>' +
  '<path d="M222 270 L379 270 L350 420 L250 420 Z" fill="#a8774a"/>' +
  // rock layers (offset across the faults)
  '<g stroke="#7a5a32" stroke-width="3"><line x1="0" y1="200" x2="209" y2="200"/><line x1="0" y1="250" x2="219" y2="250"/><line x1="392" y1="210" x2="600" y2="210"/><line x1="383" y1="260" x2="600" y2="260"/><line x1="226" y1="300" x2="374" y2="300"/><line x1="235" y1="350" x2="364" y2="350"/></g>' +
  // green tops
  '<g fill="#5f9a4a"><rect y="142" width="200" height="10"/><rect x="400" y="152" width="200" height="10"/></g>' +
  // lake in the rift
  '<path d="M209 200 L392 200 L379 270 L222 270 Z" fill="#3d8fc6"/>' +
  // faults
  '<g stroke="#b42318" stroke-width="3" stroke-dasharray="8 5"><line x1="200" y1="150" x2="250" y2="420"/><line x1="400" y1="160" x2="350" y2="420"/></g>' +
  '<g fill="#b42318"><path d="M228 300 l6 14 l6 -14 Z"/><path d="M360 300 l6 14 l6 -14 Z"/></g>' +
  // tension arrows
  '<g stroke="#11243b" stroke-width="5" fill="#11243b"><line x1="150" y1="392" x2="70" y2="392"/><path d="M74 382 L54 392 L74 402 Z"/><line x1="450" y1="392" x2="530" y2="392"/><path d="M526 382 L546 392 L526 402 Z"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="84" y1="132" x2="84" y2="146"/><line x1="264" y1="64" x2="204" y2="172"/><line x1="384" y1="328" x2="368" y2="330"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.malawi = {
    id: 'malawi',
    name: 'Malawi',
    short: 'Malawi',
    country: 'Malawi',
    gateway: 'Lilongwe',
    lonlat: [34.6, -13.5],
    locator: { box: [31.5, 37.5, -17.5, -9], lakes: [[[34.0, -9.5], [34.35, -10.0], [34.6, -11.0], [34.85, -12.2], [34.95, -13.3], [35.25, -14.0], [35.25, -14.45], [34.95, -14.25], [34.55, -13.6], [34.45, -12.6], [34.3, -11.2], [34.0, -10.2], [33.9, -9.7]]], places: [['Lilongwe', 33.79, -13.96, 'l'], ['Blantyre', 35.0, -15.79, 'r'], ['Cape Maclear', 34.84, -14.02, 'r'], ['Lake Malawi', 34.6, -11.9, 'a'], ['ZAMBIA', 32.4, -12.2, 'a'], ['MOZAMBIQUE', 36.4, -16.8, 'a']] },
    stamp: { colour: '#0e7490', icon: '🐟' },
    transport: { name: 'dugout canoe', verb: 'Paddle', emoji: '🛶' },
    scene: 'lake',
    photo: { file: 'Boats at the shore of the malawi lake.jpg', alt: 'Wooden dugout canoes pulled up on a sandy beach beside Lake Malawi', author: 'i_pinz', licence: 'CC BY-SA 2.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/' },
    intro: {
      ks3: 'You land in Lilongwe, the capital of Malawi, known as “the Warm Heart of Africa”. Head east to the shore of Lake Malawi, hop into a dugout canoe carved from a single tree trunk, and paddle out over water full of colourful fish.',
      adv: 'From Lilongwe you explore one of the world’s least developed countries. This expedition covers rift valley formation, a seasonal tropical climate, subsistence and cash-crop farming, food and energy security, and Malawi’s culture.'
    },
    facts: ['Lake Malawi covers about one-fifth of the country.', 'The lake has more species of fish than any other lake in the world.', 'Malawi is landlocked: it has no coastline.'],
    climate: {
      place: 'Lilongwe, Malawi', source: 'Long-term averages (CRU / Met Office)', lat: '14°S',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [22.5, 22.5, 22.0, 21.0, 19.0, 16.5, 16.5, 17.5, 20.5, 23.0, 24.0, 23.0],
      rain: [223, 188, 129, 45, 9, 1, 1, 0, 1, 8, 59, 179]
    },
    diagrams: { rift: RIFT_SVG },
    stations: [
      {
        id: 'lake', title: 'A lake in a rift valley', icon: '🏞️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'rift', prompt: 'Label this cross-section of the rift valley that holds Lake Malawi.',
              spots: [{ x: 14, y: 28, a: 'Plateau' }, { x: 44, y: 12, a: 'Steep escarpment' }, { x: 50, y: 56, a: 'Lake Malawi' }, { x: 76, y: 78, a: 'Fault line' }, { x: 22, y: 82, a: 'Plates pulling apart' }],
              extra: [],
              explain: 'As the plates pull apart, the land cracks along faults. A block sinks between them, forming a deep valley with steep sides, which fills with water.' },
            { type: 'mcq', q: 'How did the valley holding Lake Malawi form?', options: ['Land sank between faults as the crust stretched', 'A huge glacier carved it out during the last ice age, leaving a deep trough', 'A river slowly eroded it', 'A meteorite made a crater'], answer: 0,
              explain: 'Lake Malawi is part of the East African Rift, where Africa is slowly splitting apart.' },
            { type: 'mcq', q: 'Lake Malawi has more kinds of fish than any other lake. Which colourful fish are most famous there?', options: ['Cichlids', 'Salmon', 'Cod', 'Piranhas'], answer: 0,
              explain: 'Hundreds of cichlid species live in the lake, and most are found nowhere else. Lake Malawi National Park is a UNESCO World Heritage Site.' }
          ],
          adv: [
            { type: 'label', diagram: 'rift', prompt: 'Label the rift valley. One label does not belong.',
              spots: [{ x: 14, y: 28, a: 'Horst (plateau)' }, { x: 44, y: 12, a: 'Fault scarp' }, { x: 50, y: 56, a: 'Rift lake' }, { x: 76, y: 78, a: 'Normal fault' }, { x: 22, y: 82, a: 'Tensional forces' }, { x: 50, y: 86, a: 'Graben' }],
              extra: ['Subduction zone'],
              explain: 'There is no subduction here. Tension at a divergent boundary produces normal faults; the graben drops between upstanding horsts, and the fault scarps form the steep valley sides.' },
            { type: 'mcq', q: 'Lake Malawi is over 700 m deep. Why are rift lakes so deep compared with most lakes?', options: ['The floor keeps sinking along active faults', 'Glaciers dug them out, and then rivers filled them with water from the mountains', 'They are filled with sea water', 'Rivers raised the water level'], answer: 0,
              explain: 'Continuing subsidence keeps the graben deep, and the lake fills it. Lake Tanganyika, in the same rift system, is even deeper.' },
            { type: 'mcq', q: 'Which other hazard is linked to the active rift in Malawi?', options: ['Earthquakes, such as at Karonga in 2009', 'Tsunamis from the Pacific Ocean travelling up the Shire River', 'Hurricanes', 'Avalanches from glaciers'], answer: 0,
              explain: 'Movement on rift faults causes earthquakes. Mud-brick homes are especially vulnerable to shaking.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Wet season, dry season', icon: '🌦️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Lilongwe?', options: ['January', 'July', 'August', 'May'], answer: 0,
              explain: 'January has the tallest bar, about 223 mm.' },
            { type: 'mcq', graph: true, q: 'Which months make up the dry season?', options: ['About May to October', 'About November to April', 'Every month is dry', 'Only December'], answer: 0,
              explain: 'From May to October there is almost no rain. Farmers plant maize when the rains arrive in November.' },
            { type: 'mcq', graph: true, q: 'When is it hottest in Lilongwe?', options: ['October and November, before the rains', 'June and July, in the middle of the southern winter', 'January', 'It is the same every month'], answer: 0,
              explain: 'The sun is high and skies are clear before the rains. Once the clouds and rain arrive, temperatures drop slightly.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Lilongwe (mm).', answer: 843, tol: 5, unit: 'mm',
              explain: 'Adding all twelve months gives about 843 mm.' },
            { type: 'number', graph: true, q: 'What percentage of the year’s rain falls from December to March? Give a whole number.', answer: 85, tol: 1, unit: '%',
              explain: '179 + 223 + 188 + 129 = 719 mm. 719 ÷ 843 × 100 = 85%. Farming depends on this short wet season, so a late or failed rainy season can cause hunger.' },
            { type: 'mcq', graph: true, q: 'Malawi has one wet season, but Nairobi, nearer the Equator, has two. Why?', options: ['Near the Equator the ITCZ passes over twice; further south only once', 'Malawi is in a desert, so it only has time for one short wet season each year', 'Nairobi is by the sea', 'Malawi has monsoon winds from India'], answer: 0,
              explain: 'The ITCZ follows the overhead sun. At about 14°S, Malawi gets one long wet season during the southern summer.' }
          ]
        }
      },
      {
        id: 'farming', title: 'Maize, tobacco and food', icon: '🌽',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Most Malawians eat nsima every day. What is it made from?', options: ['Maize flour', 'Rice', 'Potatoes', 'Wheat bread'], answer: 0,
              explain: 'Maize is the main crop. Most families grow their own on small plots: subsistence farming.' },
            { type: 'mcq', q: 'Which crop is Malawi’s main export?', options: ['Tobacco', 'Coffee', 'Bananas', 'Oil'], answer: 0,
              explain: 'Tobacco is a cash crop grown to sell abroad. Tea, sugar and nuts are also exported.' },
            { type: 'sort', q: 'Sort these into subsistence and commercial farming.', bins: ['Subsistence (grown to eat)', 'Commercial (grown to sell)'],
              items: [['Maize for the family', 0], ['Beans and groundnuts for meals', 0], ['Vegetables in a home garden', 0], ['Tobacco for export', 1], ['Tea on large estates', 1], ['Sugar cane for factories', 1]],
              explain: 'Many families do both: growing food to eat and a cash crop to earn money for school fees and clothes.' }
          ],
          adv: [
            { type: 'mcq', q: 'Why is relying on tobacco risky for Malawi’s economy?', options: ['World demand is falling, and prices can crash', 'Tobacco cannot grow in Malawi’s climate, so it all has to be imported first', 'It is only sold within Malawi', 'It earns too much money'], answer: 0,
              explain: 'Dependence on one primary export leaves a country exposed to price changes. Diversifying exports reduces this risk.' },
            { type: 'mcq', q: 'Most Malawians cook with firewood or charcoal. What is a major consequence?', options: ['Deforestation, soil erosion and silt in rivers', 'More rainfall, because burning wood releases water vapour into the air', 'Cleaner air indoors', 'More fish in the lake'], answer: 0,
              explain: 'Silt reduces the output of hydro-electric dams on the Shire River, causing power cuts: an example of linked human and physical systems.' },
            { type: 'mcq', q: 'In March 2023 Cyclone Freddy brought extreme rain to southern Malawi. Why were the impacts so severe?', options: ['Mud-brick homes on steep, deforested slopes led to landslides', 'Malawi has a long coastline, so huge waves hit coastal towns and cities', 'There was no rain', 'All buildings were made of steel'], answer: 0,
              explain: 'Hundreds of people died and many more lost homes. Poverty and land degradation turned a hazard into a disaster.' }
          ]
        }
      },
      {
        id: 'people', title: 'People and culture', icon: '🥁',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Malawi is landlocked. What problem does this cause?', options: ['Goods must cross other countries to reach a port', 'It has no rivers, so water must be brought in from neighbouring countries', 'It cannot have lakes', 'It has no neighbours'], answer: 0,
              explain: 'Exports and imports travel by road or rail to ports in Mozambique or Tanzania, adding time and cost.' },
            { type: 'mcq', q: 'Culture: Gule Wamkulu is a famous tradition of the Chewa people. What is it?', options: ['A masked dance performed at ceremonies', 'A type of fishing net used on Lake Malawi at night', 'A football team', 'A maize dish'], answer: 0,
              explain: 'Dancers in masks and costumes represent spirits and ancestors. It is on UNESCO’s list of Intangible Cultural Heritage.' },
            { type: 'mcq', q: 'Many people living by the lake catch chambo and usipa fish. Why are chambo numbers falling?', options: ['Overfishing with fine nets that catch young fish', 'The lake water is getting colder each year, so the fish swim away to the sea', 'Tourists eat them all', 'Crocodiles have disappeared'], answer: 0,
              explain: 'A growing population needs food and income. Fishing seasons, net rules and fish farming help stocks recover.' }
          ],
          adv: [
            { type: 'mcq', q: 'Over 80% of Malawians live in rural areas. Which factor most limits development there?', options: ['Low farm incomes and poor access to power, markets and schools', 'Too many large factories that pollute the countryside and take farmland', 'Very high wages', 'Overcrowded cities'], answer: 0,
              explain: 'Rural poverty is linked to small plot sizes, dependence on rain-fed farming and limited infrastructure.' },
            { type: 'sort', q: 'Classify these strategies for development in Malawi.', bins: ['Top-down', 'Bottom-up'],
              items: [['A national hydro-electric dam', 0], ['A new highway to a port', 0], ['Government fertiliser subsidies', 0], ['A village savings and loans group', 1], ['A community tree nursery', 1], ['Farmers sharing seeds and conservation methods', 1]],
              explain: 'Top-down projects are planned by governments or large organisations; bottom-up projects are led by local communities. Both have strengths and weaknesses.' },
            { type: 'mcq', q: 'Tourism at Lake Malawi is growing. Which approach best spreads the benefits?', options: ['Community-run lodges and guides that keep income local', 'Large foreign-owned resorts only, as they bring in the most visitors and money', 'Banning visitors from the lake', 'Removing fishing villages'], answer: 0,
              explain: 'Community-based tourism can reduce leakage of profits and give people a reason to conserve the lake.' }
          ]
        }
      }
    ]
  };
})();
