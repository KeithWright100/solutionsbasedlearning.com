/* Travel the Wright Way — destination: Barbados (coral island, Caribbean climate, hurricanes and tourism).
 * Climate data: Bridgetown area, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Hurricane Beryl, 1–2 July 2024: passed about 150 km south of Barbados as a Category 4; earliest Category 5 on record in the Atlantic;
 *   about 64 fishing boats destroyed and about 240 affected; about one-third of the Bridgetown Fishing Harbour breakwater destroyed.
 * Barbados is not volcanic: it sits on a wedge of uplifted sediments at the Lesser Antilles subduction zone, mostly capped by coral limestone.
 * Economy: shifted from sugar cane to tourism and financial services; high-income country; became a republic on 30 November 2021.
 */
(function () {
  var ISLAND_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section across Barbados from the calm Caribbean coast in the west to the rough Atlantic coast in the east">' +
  '<rect width="600" height="420" fill="#d6ecfb"/>' +
  '<text x="20" y="24" font-size="13" font-weight="700" fill="#11243b">W</text><text x="566" y="24" font-size="13" font-weight="700" fill="#11243b">E</text>' +
  // seas
  '<rect y="280" width="600" height="140" fill="#2f8fcf"/>' +
  '<path d="M0 280 L150 280 L150 420 L0 420 Z" fill="#48b3e0"/>' +
  // land (older rocks)
  '<path d="M140 280 L150 277 L185 273 L205 264 L240 258 L255 242 L285 236 L300 216 L330 208 L350 192 L382 180 L402 188 L420 228 L448 236 L470 258 L494 262 L506 280 L506 420 L140 420 Z" fill="#8b8579"/>' +
  // coral limestone cap
  '<path d="M185 273 L205 264 L240 258 L255 242 L285 236 L300 216 L330 208 L350 192 L382 180 L402 188 L410 206 L380 206 L352 218 L332 234 L302 242 L288 262 L258 268 L242 284 L206 290 L190 296 Z" fill="#efe3c2" stroke="#c9b98f" stroke-width="1.5"/>' +
  // beach and hotels
  '<path d="M140 280 L150 277 L185 273 L190 283 L150 286 Z" fill="#f6dd9a"/>' +
  '<g fill="#fff" stroke="#4b5563" stroke-width="1"><rect x="192" y="250" width="14" height="16"/><rect x="210" y="246" width="12" height="18"/><rect x="226" y="248" width="12" height="12"/></g>' +
  '<g fill="#2f8a4a"><circle cx="270" cy="232" r="7"/><circle cx="318" cy="204" r="7"/><circle cx="360" cy="186" r="7"/><circle cx="440" cy="228" r="7"/><circle cx="465" cy="250" r="6"/></g>' +
  // fringing reef
  '<g><circle cx="100" cy="292" r="7" fill="#ff8a65"/><circle cx="112" cy="296" r="6" fill="#f06292"/><circle cx="124" cy="291" r="7" fill="#ffb74d"/><circle cx="136" cy="296" r="5" fill="#ba68c8"/></g>' +
  // calm west waves, rough east waves
  '<g stroke="#e6f6ff" stroke-width="2" fill="none"><path d="M20 276 q8 -3 16 0 M60 276 q8 -3 16 0"/></g>' +
  '<g stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"><path d="M520 274 q12 -18 26 -4"/><path d="M552 276 q12 -20 28 -4"/><path d="M508 268 q6 -10 14 -4"/></g>' +
  '<g fill="#6b6459"><ellipse cx="514" cy="282" rx="8" ry="10"/><ellipse cx="530" cy="284" rx="6" ry="8"/></g>' +
  // trade wind arrow
  '<g stroke="#11243b" stroke-width="5" fill="#11243b"><path d="M590 110 C 560 112, 520 118, 470 128" fill="none"/><path d="M474 118 L456 131 L477 138 Z"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="132" y1="100" x2="165" y2="272"/><line x1="96" y1="266" x2="112" y2="288"/><line x1="276" y1="200" x2="300" y2="236"/><line x1="516" y1="258" x2="514" y2="274"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.barbados = {
    id: 'barbados',
    name: 'Barbados',
    short: 'Barbados',
    country: 'Barbados',
    gateway: 'Bridgetown',
    lonlat: [-59.55, 13.1],
    locator: { box: [-59.9, -59.25, 12.95, 13.42], noBase: true,
      land: [[[-59.63, 13.33], [-59.59, 13.32], [-59.56, 13.29], [-59.52, 13.23], [-59.5, 13.19], [-59.43, 13.16], [-59.43, 13.13], [-59.48, 13.08], [-59.52, 13.05], [-59.56, 13.06], [-59.6, 13.07], [-59.62, 13.09], [-59.63, 13.12], [-59.64, 13.18], [-59.65, 13.24], [-59.65, 13.3]]],
      places: [['Bridgetown', -59.62, 13.1, 'r'], ['Bathsheba', -59.52, 13.21, 'l'], ['Caribbean Sea', -59.76, 13.02, 'a'], ['Atlantic Ocean', -59.38, 13.36, 'a']] },
    stamp: { colour: '#0e7490', icon: '🏝️' },
    transport: { name: 'catamaran', verb: 'Sail', emoji: '⛵' },
    scene: 'sea',
    sceneLabel: 'catamaran trip along the west-coast reef',
    photo: { file: 'Barbados, Karibik - View from the New Edgewater Hotel Bathsheba on the Atlantic Coast - panoramio.jpg', alt: 'Waves breaking on rocks along the rugged Atlantic coast at Bathsheba, Barbados', author: 'giggel', licence: 'CC BY 3.0', licenceUrl: 'https://creativecommons.org/licenses/by/3.0/' },
    intro: {
      ks3: 'You land in Bridgetown, the capital of Barbados. Hop on a catamaran and sail along the calm west coast, past coral reefs, then cross the island to the wild Atlantic waves at Bathsheba.',
      adv: 'From Bridgetown you explore a small island developing state. This expedition covers coral island landforms and coasts, the tropical maritime climate, hurricane hazards such as Beryl in 2024, and the shift from a sugar economy to tourism.'
    },
    facts: ['Barbados is a coral island, not a volcanic one like many of its neighbours.', 'It is about 34 km long and 23 km wide.', 'Tourism has replaced sugar cane as the biggest part of the economy.'],
    climate: {
      place: 'Bridgetown, Barbados', source: 'Long-term averages (CRU / Met Office)', lat: '13°N', rmax: 200,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [24.5, 25.0, 25.5, 26.0, 27.0, 27.0, 26.5, 27.0, 26.5, 26.5, 26.0, 25.5],
      rain: [63, 39, 37, 45, 57, 98, 135, 154, 159, 178, 177, 96]
    },
    diagrams: { island: ISLAND_SVG },
    stations: [
      {
        id: 'coasts', title: 'A coral island', icon: '🐠',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'island', prompt: 'Label this cross-section across Barbados from west to east.',
              spots: [{ x: 14, y: 90, a: 'Caribbean Sea' }, { x: 86, y: 90, a: 'Atlantic Ocean' }, { x: 22, y: 20, a: 'Sandy beach' }, { x: 16, y: 60, a: 'Coral reef' }, { x: 46, y: 44, a: 'Coral limestone' }, { x: 84, y: 58, a: 'Big waves' }],
              extra: [],
              explain: 'The west coast faces the calm Caribbean Sea, with sandy beaches and coral reefs. The east coast faces the Atlantic, where strong winds make big waves.' },
            { type: 'mcq', q: 'Why is the west coast calmer than the east coast?', options: ['The wind usually blows from the east, so the west is sheltered', 'The west coast has a long sea wall that stops the waves', 'Sharks stop the waves', 'The Caribbean Sea is frozen'], answer: 0,
              explain: 'Trade winds blow from the north-east across the Atlantic, building big waves on the east coast. The west coast is in the shelter of the island.' },
            { type: 'mcq', q: 'Coral reefs only grow in certain conditions. Which is correct?', options: ['Warm, clear, shallow, salty water', 'Cold, deep, muddy water', 'Fresh water in rivers and lakes', 'Ice-covered seas'], answer: 0,
              explain: 'Corals need sunlight for the tiny algae living inside them, so they grow in warm, clear, shallow sea water.' },
            { type: 'mcq', q: 'Most of Barbados’s white sand beaches are made from…', options: ['broken-up coral and shells', 'volcanic ash from St Vincent', 'melted glaciers', 'river mud'], answer: 0,
              explain: 'Waves break down coral and shells into fine white sand, which is why healthy reefs matter for beaches.' }
          ],
          adv: [
            { type: 'label', diagram: 'island', prompt: 'Label the cross-section. One label does not belong.',
              spots: [{ x: 14, y: 90, a: 'Caribbean Sea' }, { x: 86, y: 90, a: 'Atlantic Ocean' }, { x: 22, y: 20, a: 'Leeward coast' }, { x: 16, y: 60, a: 'Fringing reef' }, { x: 46, y: 44, a: 'Coral limestone cap' }, { x: 84, y: 58, a: 'Windward coast' }, { x: 82, y: 16, a: 'NE trade winds' }],
              extra: ['Active volcano'],
              explain: 'Barbados has no volcano. It is uplifted sediment capped by coral limestone; the leeward west coast has fringing reefs, while the windward east coast takes the full force of the trade winds and Atlantic swell.' },
            { type: 'mcq', q: 'Unlike nearby St Vincent, Barbados is not volcanic. How did it form?', options: ['Sediments were pushed up at a subduction zone, then capped with coral', 'It is the top of a mid-ocean ridge where new crust forms between two plates', 'It was left by a glacier', 'It is a hotspot volcano like Hawaii'], answer: 0,
              explain: 'Barbados lies east of the volcanic arc, on a wedge of sediment pushed up as the Atlantic plate sinks beneath the Caribbean plate. Coral reefs grew on it as it rose.' },
            { type: 'mcq', q: 'In the north-east, the coral cap has been worn away, exposing softer rocks. What problem does this area face?', options: ['Landslides and soil erosion', 'Volcanic eruptions', 'Glacial floods', 'Desertification by sand dunes'], answer: 0,
              explain: 'This hilly area, called the Scotland District, has clays and sandstones that slip and erode easily, especially after heavy rain.' },
            { type: 'mcq', q: 'Healthy fringing reefs protect the west coast. How?', options: ['They break up waves offshore, reducing erosion', 'They make the sea warmer, which slows down the waves near the beach', 'They stop the tide', 'They push hurricanes away'], answer: 0,
              explain: 'Reefs absorb much of a wave’s energy. Damaged reefs, from warming seas, pollution or boat anchors, leave beaches and hotels more exposed.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Sunshine and showers', icon: '🌦️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Bridgetown?', options: ['October', 'March', 'January', 'May'], answer: 0,
              explain: 'October has the tallest bar, about 178 mm, with November close behind.' },
            { type: 'mcq', graph: true, q: 'Which months are the driest?', options: ['About February to April', 'About August to October', 'Only December', 'Every month is the same'], answer: 0,
              explain: 'February to April have the shortest bars. This dry season is the peak time for tourists.' },
            { type: 'mcq', graph: true, q: 'What is the temperature like all year?', options: ['Warm all year, about 24–27°C', 'Below freezing in winter', 'Very hot, over 40°C', 'It changes by 20°C'], answer: 0,
              explain: 'Barbados is in the tropics and surrounded by warm sea, so temperatures stay warm and steady.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Bridgetown (°C).', answer: 2.5, tol: 0.1, unit: '°C',
              explain: 'Warmest 27.0°C − coolest 24.5°C (January) = 2.5°C. The surrounding ocean keeps the range very small.' },
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall (mm).', answer: 1238, tol: 10, unit: 'mm',
              explain: 'Adding the twelve months gives about 1,238 mm.' },
            { type: 'mcq', graph: true, q: 'The wettest months, June to November, match the Atlantic hurricane season. Why?', options: ['Sea temperatures are highest, fuelling tropical storms', 'The ITCZ is furthest south then, bringing cold air from the Southern Ocean', 'It is winter in Barbados', 'Snow melts in the Andes'], answer: 0,
              explain: 'Warm late-summer seas and the ITCZ further north bring tropical waves, storms and occasionally hurricanes.' }
          ]
        }
      },
      {
        id: 'hurricane', title: 'Hurricane Beryl', icon: '🌀',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Hurricanes form over sea that is at least about…', options: ['26–27°C', '5°C', '15°C', '35–40°C'], answer: 0,
              explain: 'Warm sea water evaporates and the rising, condensing air releases energy that powers the storm.' },
            { type: 'sort', q: 'Sort these effects of a hurricane.', bins: ['Primary (caused directly)', 'Secondary (happen later)'],
              items: [['Roofs blown off', 0], ['Fishing boats smashed by waves', 0], ['Coastal flooding from storm surge', 0], ['Fishers lose their income', 1], ['Tourists cancel holidays', 1], ['Food prices rise', 1]],
              explain: 'Primary effects come straight from the wind, rain and waves. Secondary effects follow afterwards.' },
            { type: 'mcq', q: 'In July 2024 Hurricane Beryl passed south of Barbados. Which group of workers was hit hardest?', options: ['Fishers, as dozens of boats were destroyed', 'Sugar factory workers, as all the cane fields were flooded', 'Coal miners', 'Glacier guides'], answer: 0,
              explain: 'Huge waves wrecked about 64 fishing boats and damaged many more, as well as part of the harbour wall.' }
          ],
          adv: [
            { type: 'mcq', q: 'Beryl became the earliest Category 5 hurricane ever recorded in the Atlantic. What was the main reason?', options: ['Record-high sea temperatures for early summer', 'Cold air from the Arctic meeting warm air over the Caribbean', 'A volcanic eruption', 'An earthquake'], answer: 0,
              explain: 'Unusually warm water gave Beryl extra energy, so it strengthened very quickly. Scientists expect warming seas to make rapid intensification more common.' },
            { type: 'sort', q: 'Classify these ways Barbados manages hurricane risk.', bins: ['Before the storm', 'After the storm'],
              items: [['Building codes and hurricane straps for roofs', 0], ['Early warnings and shelters', 0], ['Catastrophe insurance shared with other Caribbean countries', 0], ['Rebuilding the fishing harbour', 1], ['Insurance payouts to fund recovery', 1]],
              explain: 'Preparation reduces damage; recovery measures help people return to normal more quickly.' },
            { type: 'mcq', q: 'Barbados added “hurricane clauses” to its government debts. What do they do?', options: ['Pause repayments after a disaster so money goes to recovery', 'Make tourists pay a special tax whenever a hurricane hits the island', 'Ban hurricanes', 'Cancel all debts forever'], answer: 0,
              explain: 'Small island states can lose a large share of their GDP in one storm, so pausing repayments helps them recover faster.' }
          ]
        }
      },
      {
        id: 'tourism', title: 'From sugar to tourism', icon: '🏖️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'For about 300 years, Barbados’s economy was based on which crop, grown on plantations?', options: ['Sugar cane', 'Tobacco', 'Coffee', 'Cotton and tea'], answer: 0,
              explain: 'Sugar plantations used the labour of enslaved Africans until slavery was abolished in the 1830s. Sugar is now a small part of the economy.' },
            { type: 'mcq', q: 'What is the biggest industry in Barbados today?', options: ['Tourism', 'Car manufacturing', 'Coal mining', 'Forestry'], answer: 0,
              explain: 'Beaches, warm weather and reefs attract visitors, many from the UK, USA and Canada.' },
            { type: 'sort', q: 'Sort the effects of tourism in Barbados.', bins: ['Positive', 'Negative'],
              items: [['Jobs in hotels and restaurants', 0], ['Money to protect reefs and beaches', 0], ['Better roads and airports', 0], ['Pollution damaging coral reefs', 1], ['Seasonal jobs with low pay', 1], ['Heavy use of fresh water', 1]],
              explain: 'Tourism brings income and jobs but needs careful management to protect the environment that visitors come to see.' },
            { type: 'mcq', q: 'Culture: Crop Over is Barbados’s biggest festival, with costumes, music and parades. What did it originally celebrate?', options: ['The end of the sugar cane harvest', 'The first hurricane of the season passing safely', 'The opening of an airport', 'The first snowfall'], answer: 0,
              explain: 'Crop Over began on the sugar plantations and is now a summer carnival of calypso and soca music that attracts many visitors.' }
          ],
          adv: [
            { type: 'mcq', q: 'Why is relying on tourism risky for a small island economy like Barbados?', options: ['Shocks like COVID-19 or a hurricane can make income collapse', 'Tourists rarely spend money on the island because most holidays are prepaid abroad', 'Tourism uses no workers', 'There is no risk'], answer: 0,
              explain: 'In 2020 international travel almost stopped, and the economy shrank sharply. Diversifying, for example into financial services, reduces this risk.' },
            { type: 'mcq', q: 'The Folkestone Marine Reserve on the west coast is a protected area. Why create one?', options: ['To limit fishing, anchoring and pollution so reefs recover', 'To build more hotels on the reef so tourists can see the corals from their rooms', 'To ban all tourists from Barbados', 'To mine coral for building'], answer: 0,
              explain: 'Marine protected areas zone different activities, protecting reefs that support both tourism and fishing.' },
            { type: 'mcq', q: 'Barbados is a high-income country, yet it is classed as a Small Island Developing State. Why?', options: ['Its small size and isolation make it vulnerable to shocks', 'It has a very low income per person compared with other Caribbean countries', 'It has no tourism', 'It is landlocked'], answer: 0,
              explain: 'SIDS share challenges such as small markets, high import costs and exposure to climate hazards, whatever their income level.' }
          ]
        }
      }
    ]
  };
})();
