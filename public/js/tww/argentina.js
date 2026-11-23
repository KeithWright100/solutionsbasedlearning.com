/* Travel the Wright Way — destination: Argentina (the Pampas and Patagonia).
 * Climate data: Buenos Aires, Observatorio Central (SMN): mean temperature 1991–2020; rainfall long-term average 1906–2023.
 * Facts: the Pampas are temperate grasslands with deep fertile soils, now farmed for soya, wheat, maize and beef;
 *   Argentina is the world's largest exporter of soybean meal and oil; Patagonia lies in the rain shadow of the Andes;
 *   Perito Moreno Glacier (Los Glaciares National Park, a UNESCO World Heritage Site) is fed by the Southern Patagonian Ice Field.
 */
(function () {
  var SHADOW_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section across southern South America from the Pacific Ocean over the Andes to the dry Patagonian steppe and the Atlantic Ocean">' +
  '<rect width="600" height="420" fill="#d6ecfb"/>' +
  '<text x="20" y="24" font-size="13" font-weight="700" fill="#11243b">W (Chile)</text><text x="500" y="24" font-size="13" font-weight="700" fill="#11243b">E (Argentina)</text>' +
  '<rect y="300" width="600" height="120" fill="#2f7fbf"/>' +
  // land
  '<path d="M90 300 L120 280 L150 250 L180 200 L210 140 L235 95 L255 110 L275 80 L300 105 L320 150 L335 246 L400 250 L460 270 L520 300 L520 420 L90 420 Z" fill="#8a8f99"/>' +
  '<path d="M335 246 L400 250 L460 270 L520 300 L520 330 L335 330 Z" fill="#d8c27a"/>' +
  // wet forest on western slope
  '<g fill="#1f6b3a"><circle cx="122" cy="276" r="9"/><circle cx="138" cy="262" r="9"/><circle cx="152" cy="246" r="9"/><circle cx="165" cy="228" r="9"/><circle cx="178" cy="210" r="8"/><circle cx="190" cy="190" r="8"/></g>' +
  // ice field and glacier
  '<path d="M205 150 L235 95 L255 110 L275 80 L300 105 L315 140 L290 130 L260 128 L230 142 Z" fill="#fff"/>' +
  '<path d="M300 112 L318 142 L330 200 L344 246 L330 248 L318 206 L304 160 Z" fill="#e6f6ff" stroke="#8fb8d6" stroke-width="1.5"/>' +
  '<rect x="336" y="244" width="62" height="10" fill="#4aa3d8"/>' +
  // clouds and rain on the windward side
  '<g fill="#9aa3ad"><ellipse cx="160" cy="140" rx="40" ry="14"/><ellipse cx="200" cy="128" rx="34" ry="12"/></g>' +
  '<g class="drip" stroke="#2f7fbf" stroke-width="2.5" stroke-linecap="round"><line x1="140" y1="158" x2="136" y2="172"/><line x1="160" y1="160" x2="156" y2="174"/><line x1="180" y1="156" x2="176" y2="170"/><line x1="200" y1="146" x2="196" y2="160"/></g>' +
  // sheep on the steppe
  '<g fill="#fff" stroke="#555" stroke-width="1"><ellipse cx="430" cy="258" rx="6" ry="4"/><ellipse cx="452" cy="264" rx="6" ry="4"/><ellipse cx="478" cy="276" rx="6" ry="4"/></g>' +
  // westerly wind arrow
  '<g stroke="#11243b" stroke-width="5" fill="#11243b"><path d="M20 112 C 70 112, 110 108, 150 100" fill="none"/><path d="M146 90 L166 98 L150 110 Z"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="264" y1="64" x2="262" y2="96"/><line x1="380" y1="182" x2="330" y2="215"/><line x1="456" y1="258" x2="450" y2="268"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.argentina = {
    id: 'argentina',
    name: 'Argentina',
    short: 'Argentina',
    country: 'Argentina',
    gateway: 'Buenos Aires',
    lonlat: [-63, -36],
    locator: { box: [-76, -52, -56, -21], places: [['Buenos Aires', -58.38, -34.6, 'r'], ['El Calafate', -72.27, -50.34, 'r'], ['Mendoza', -68.83, -32.89, 'r'], ['THE PAMPAS', -64.0, -37.6, 'a'], ['PATAGONIA', -68.5, -45.0, 'a'], ['Atlantic Ocean', -57.5, -49.0, 'a']] },
    stamp: { colour: '#2563c9', icon: '🌾' },
    transport: { name: 'horse', verb: 'Ride', emoji: '🐎' },
    scene: 'pampas',
    photo: { file: 'Glaciar Perito Moreno14 - Argentina.JPG', alt: 'The tall ice front of the Perito Moreno Glacier where it meets a lake in Patagonia', author: 'Diego Delso', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
    intro: {
      ks3: 'You arrive in Buenos Aires and head out onto the Pampas, huge flat grasslands where gauchos (cowboys) herd cattle on horseback. Then it is south to Patagonia, to see a glacier crashing into a lake!',
      adv: 'From Buenos Aires you explore two contrasting regions: the Pampas, a temperate grassland transformed into one of the world’s great farming regions, and Patagonia, a dry steppe in the rain shadow of the Andes with large glaciers.'
    },
    facts: ['Argentina is the eighth-largest country in the world.', 'The Pampas are some of the most fertile farmland on Earth.', 'The Perito Moreno Glacier is about 30 km long and its ice front is around 70 m high above the lake.'],
    climate: {
      place: 'Buenos Aires, Argentina', source: 'SMN Observatorio Central (temp. 1991–2020; rain long-term)', lat: '35°S',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [24.9, 23.8, 22.0, 18.2, 14.8, 12.0, 11.0, 13.0, 14.9, 17.9, 20.9, 23.6],
      rain: [139, 127, 140, 119, 92, 59, 61, 64, 72, 127, 117, 119]
    },
    diagrams: { shadow: SHADOW_SVG },
    stations: [
      {
        id: 'climate', title: 'Seasons south of the Equator', icon: '🌡️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the warmest month in Buenos Aires?', options: ['January', 'July', 'June', 'August'], answer: 0,
              explain: 'January is the warmest (about 25°C). Buenos Aires is in the Southern Hemisphere, so summer is from December to February.' },
            { type: 'mcq', graph: true, q: 'Why is July the coldest month?', options: ['It is winter in the Southern Hemisphere', 'It is the rainy season, so clouds block the sun all month', 'The sea freezes', 'The Sun is overhead'], answer: 0,
              explain: 'When it is summer in the UK, it is winter in Argentina, because the Earth is tilted.' },
            { type: 'mcq', graph: true, q: 'Describe the rainfall in Buenos Aires.', options: ['Rain in every month, a little more in summer and autumn', 'Almost all of the rain falls in a short wet season from June to August', 'It never rains', 'There is a long dry season'], answer: 0,
              explain: 'Every month gets rain, from about 60 mm in winter to about 140 mm in March. This reliable rain helps farming on the Pampas.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Buenos Aires (°C).', answer: 13.9, tol: 0.1, unit: '°C',
              explain: 'Warmest 24.9°C (January) − coolest 11.0°C (July) = 13.9°C, typical of a humid subtropical climate.' },
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall (mm).', answer: 1236, tol: 10, unit: 'mm',
              explain: 'Adding all twelve months gives about 1,236 mm.' },
            { type: 'mcq', q: 'Rainfall decreases from about 1,200 mm near Buenos Aires to under 500 mm in the western Pampas. How does this affect farming?', options: ['Crops in the wetter east; more grazing and irrigation in the drier west', 'Farming is the same everywhere because the soils are equally fertile across the region', 'Rice is grown in the dry west', 'The west is covered in rainforest'], answer: 0,
              explain: 'Moisture from the Atlantic decreases inland, so land use changes from intensive arable farming to more extensive grazing.' }
          ]
        }
      },
      {
        id: 'pampas', title: 'Farming the Pampas', icon: '🐄',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'What type of natural vegetation covered the Pampas?', options: ['Tall grasses with few trees (temperate grassland)', 'Tropical rainforest with tall trees and thick undergrowth', 'Coniferous forest', 'Desert cacti'], answer: 0,
              explain: 'The Pampas were natural grasslands. Dead grass rotted into thick, dark, fertile soil over thousands of years.' },
            { type: 'mcq', q: 'Who are gauchos?', options: ['Cowboys who herd cattle on horseback', 'Fishermen who sail from Buenos Aires', 'Miners', 'Glacier guides'], answer: 0,
              explain: 'Gauchos are an important part of Argentina’s culture, herding cattle across the open grasslands.' },
            { type: 'sort', q: 'Sort these into crops and animals farmed on the Pampas.', bins: ['Crops', 'Animals'],
              items: [['Soya beans', 0], ['Wheat', 0], ['Maize', 0], ['Beef cattle', 1], ['Dairy cows', 1]],
              explain: 'The Pampas mix arable (crop) farming and pastoral (animal) farming. Argentina is famous for its beef.' },
            { type: 'mcq', q: 'Why is the Pampas so good for farming?', options: ['Flat land, fertile soils, mild temperatures and rain', 'It is high and mountainous, so cool air protects crops from pests and disease', 'It is very cold and icy', 'It has no rain'], answer: 0,
              explain: 'These physical factors allow large farms to use machinery and grow crops for export around the world.' },
            { type: 'mcq', q: 'Culture: an asado is a famous Argentine tradition. What is it?', options: ['A barbecue where family and friends grill beef', 'A dance performed by gauchos at harvest festivals across the Pampas', 'A glacier boat trip', 'A football stadium'], answer: 0,
              explain: 'Cattle ranching on the Pampas shaped Argentine food culture. Many families share an asado at weekends, often with yerba mate, a herbal tea sipped through a metal straw.' }
          ],
          adv: [
            { type: 'mcq', q: 'Since the 1990s, soya farming has spread rapidly in Argentina. Which is the main reason?', options: ['High demand for animal feed, especially from China', 'A fall in world food demand, so farmers switched to cheaper crops', 'A ban on cattle', 'Cooler temperatures'], answer: 0,
              explain: 'Argentina became the world’s largest exporter of soybean meal and oil, used mainly to feed livestock abroad.' },
            { type: 'sort', q: 'Evaluate the expansion of soya farming.', bins: ['Benefit', 'Problem'],
              items: [['Export earnings for Argentina', 0], ['Taxes paid to the government', 0], ['High yields using machinery', 0], ['Fewer farm jobs as machines replace workers', 1], ['Forest cleared in the Gran Chaco to the north', 1], ['Soil damage from growing one crop again and again', 1]],
              explain: 'Agribusiness brings wealth but can reduce rural employment, biodiversity and soil health. Crop rotation and forest protection reduce the costs.' },
            { type: 'mcq', q: 'What is a mollisol, the soil type of the Pampas?', options: ['A deep, dark soil rich in organic matter', 'A red, leached tropical soil with very few nutrients left in it', 'A thin, frozen soil', 'Sand with no nutrients'], answer: 0,
              explain: 'Grassland roots die and decay each year, building up humus. These are among the world’s most productive soils.' },
            { type: 'mcq', q: 'Culture: tango, a dance and music that grew up in the port districts of Buenos Aires around 1900, is on UNESCO’s list of Intangible Cultural Heritage. Why did it develop there?', options: ['Migrants from Europe and Africa mixed music and dance in the port', 'It was invented by gauchos in Patagonia and later brought north to the capital', 'It came from Inca temples', 'It was brought by tourists'], answer: 0,
              explain: 'Millions of migrants, especially from Italy and Spain, arrived in Buenos Aires. Cultures blending in cities is a key theme of human geography.' }
          ]
        }
      },
      {
        id: 'patagonia', title: 'Patagonia and the rain shadow', icon: '🏔️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'shadow', prompt: 'Label this cross-section across the southern Andes.',
              spots: [{ x: 14, y: 90, a: 'Pacific Ocean' }, { x: 86, y: 90, a: 'Atlantic Ocean' }, { x: 16, y: 20, a: 'Westerly winds' }, { x: 44, y: 12, a: 'Andes mountains' }, { x: 22, y: 52, a: 'Rainy side' }, { x: 66, y: 40, a: 'Glacier' }, { x: 76, y: 58, a: 'Rain shadow' }],
              extra: [],
              explain: 'Westerly winds bring moist air from the Pacific. It rises over the Andes, cools and drops rain and snow on the Chilean side. The air sinks on the Argentine side, so Patagonia is dry.' },
            { type: 'mcq', q: 'Why is Patagonia so dry?', options: ['The Andes block the wet winds, giving a rain shadow', 'It is close to the Equator, where sinking air stops clouds forming', 'It never has wind', 'It is below sea level'], answer: 0,
              explain: 'Most of the moisture falls on the western side of the mountains. Patagonia gets dry, sinking air.' },
            { type: 'mcq', q: 'Which farm animal is most common on the dry Patagonian grasslands?', options: ['Sheep', 'Water buffalo', 'Camels', 'Pigs'], answer: 0,
              explain: 'Sheep can survive on sparse, dry grass and cold winds. Patagonia is known for wool production.' }
          ],
          adv: [
            { type: 'label', diagram: 'shadow', prompt: 'Label the cross-section. One label does not belong.',
              spots: [{ x: 14, y: 90, a: 'Pacific Ocean' }, { x: 86, y: 90, a: 'Atlantic Ocean' }, { x: 16, y: 20, a: 'Prevailing westerlies' }, { x: 44, y: 12, a: 'Patagonian Ice Field' }, { x: 22, y: 52, a: 'Orographic rainfall' }, { x: 66, y: 40, a: 'Outlet glacier' }, { x: 76, y: 58, a: 'Rain-shadow steppe' }],
              extra: ['Monsoon'],
              explain: 'There is no monsoon here. Moist westerlies are forced up the Andes; orographic precipitation feeds the ice field and its outlet glaciers, while the leeward side receives sinking, warming, dry air.' },
            { type: 'mcq', q: 'Why does air become drier and warmer as it descends the eastern side of the Andes?', options: ['It lost moisture rising, and warms by compression as it sinks', 'It passes over warm volcanoes that heat it up and dry it out', 'It passes over the sea', 'It gains water from glaciers'], answer: 0,
              explain: 'Descending air warms at the dry adiabatic rate, so relative humidity falls and clouds evaporate. This dry, gusty wind is like a föhn wind.' },
            { type: 'mcq', q: 'Patagonia has some of the best wind conditions in the world for wind turbines. Why?', options: ['Strong, steady westerlies blow across open land', 'The air is very still because of high pressure, which keeps turbines steady', 'It has no wind at all', 'Turbines work better in rain'], answer: 0,
              explain: 'Its position in the westerlies, with few obstacles, gives high average wind speeds, a renewable resource for the future.' }
          ]
        }
      },
      {
        id: 'glacier', title: 'Perito Moreno Glacier', icon: '🧊',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'The Perito Moreno Glacier ends in a lake. What happens when big pieces of ice break off the front?', options: ['Calving: they crash into the water as icebergs', 'They melt instantly as soon as they touch the warm lake water', 'They float up into the sky', 'They turn into rock'], answer: 0,
              explain: 'Calving is when ice breaks off the end of a glacier. Tourists watch huge blocks crash into the lake.' },
            { type: 'mcq', q: 'Where does the ice that feeds the glacier come from?', options: ['Snow squashed into ice on the Patagonian Ice Field', 'Rain on the dry steppe that freezes overnight and flows uphill', 'Sea water', 'Underground springs'], answer: 0,
              explain: 'Heavy snowfall high in the Andes is compressed into ice, which slowly flows downhill as a glacier.' },
            { type: 'mcq', q: 'The glacier is in Los Glaciares National Park. Why are national parks created?', options: ['To protect landscapes and wildlife while allowing visits', 'To keep all visitors out so the land is never disturbed', 'To build factories', 'To grow crops'], answer: 0,
              explain: 'Los Glaciares is a UNESCO World Heritage Site, protected for its outstanding natural beauty.' }
          ],
          adv: [
            { type: 'mcq', q: 'Most glaciers in Patagonia are retreating, but Perito Moreno has stayed roughly stable for decades. Which explanation fits best?', options: ['High snowfall balances losses, so accumulation ≈ ablation', 'It sits in a hot desert, so it melts and refreezes at the same rate every day', 'It is not made of ice', 'Tourists add ice to it'], answer: 0,
              explain: 'A glacier’s mass balance compares accumulation (snowfall) with ablation (melting and calving). In recent years scientists have measured faster thinning, so its stability may not last.' },
            { type: 'number', q: 'A glacier front advances about 2 m per day. How far would it move in a year (365 days)? Give your answer in metres.', answer: 730, tol: 0, unit: 'm',
              explain: '2 × 365 = 730 m. Ice keeps moving forward even when the front stays in the same place, because calving removes ice at a similar rate.' },
            { type: 'mcq', q: 'Glacier tourism brings income to El Calafate. Which is a challenge of managing it?', options: ['Balancing visitor numbers and emissions with protection', 'There are too few visitors to pay for roads, hotels and the national park', 'Glaciers are too warm to visit', 'Tourism has no effect'], answer: 0,
              explain: 'Boardwalks, boat limits and park fees help manage impacts while sharing benefits with local people.' }
          ]
        }
      }
    ]
  };
})();
