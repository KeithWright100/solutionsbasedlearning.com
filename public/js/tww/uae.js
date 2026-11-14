/* Travel the Wright Way — destination: the United Arab Emirates (Dubai: artificial islands, a hot desert climate, rapid growth and diversification, Emirati culture and sustainability).
 * Climate data: Dubai, long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: Palm Jumeirah was built from 2001 using sand dredged from the sea floor and rock for a crescent breakwater; the Palm Monorail runs along its trunk;
 *   the Burj Khalifa (828 m, opened 2010) is the world's tallest building; the Dubai Metro opened in 2009 and is driverless;
 *   oil was discovered off Dubai in 1966 but now provides only a small share of Dubai's economy; Jebel Ali is the largest port in the Middle East;
 *   most of the UAE's population are foreign nationals; in April 2024 the UAE had its heaviest rainfall since records began in 1949, flooding roads and Dubai airport;
 *   falconry is on UNESCO's Intangible Cultural Heritage list (with the UAE among the nominating countries); abras (water taxis) cross Dubai Creek;
 *   Dubai hosted the COP28 climate conference in 2023.
 */
(function () {
  var PALM_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan view of a palm-shaped artificial island with a trunk, fronds, a monorail, a sheltered lagoon and a crescent breakwater, joined to the mainland">' +
  '<rect width="600" height="420" fill="#2f9fbf"/>' +
  '<path d="M300 150 m0 0" />' +
  '<path d="M110 340 C 100 120, 200 60, 300 56 C 400 60, 500 120, 490 340 L466 340 C 474 140, 390 84, 300 82 C 210 84, 126 140, 134 340 Z" fill="#e9c98a" stroke="#c9a463" stroke-width="2"/>' +
  '<path d="M134 340 C 126 140, 210 84, 300 82 C 390 84, 474 140, 466 340 Z" fill="#5fc0dc"/>' +
  // fronds
  '<g fill="#e9c98a" stroke="#c9a463" stroke-width="1.5">' + (function () { var g = ''; for (var i = 0; i < 4; i++) { var y = 180 + i * 42; g += '<path d="M282 ' + y + ' C 240 ' + (y - 6) + ', 200 ' + (y - 22) + ', 166 ' + (y - 44) + ' L172 ' + (y - 52) + ' C 206 ' + (y - 32) + ', 244 ' + (y - 18) + ', 282 ' + (y - 14) + ' Z"/><path d="M318 ' + y + ' C 360 ' + (y - 6) + ', 400 ' + (y - 22) + ', 434 ' + (y - 44) + ' L428 ' + (y - 52) + ' C 394 ' + (y - 32) + ', 356 ' + (y - 18) + ', 318 ' + (y - 14) + ' Z"/>'; } return g; })() + '</g>' +
  '<g fill="#fff" opacity=".9">' + (function () { var g = ''; for (var i = 0; i < 4; i++) { var y = 176 + i * 42; for (var j = 0; j < 4; j++) { g += '<rect x="' + (250 - j * 22) + '" y="' + (y - 14 - j * 6) + '" width="6" height="5"/><rect x="' + (344 + j * 22) + '" y="' + (y - 14 - j * 6) + '" width="6" height="5"/>'; } } return g; })() + '</g>' +
  // trunk
  '<rect x="280" y="140" width="40" height="230" fill="#e9c98a" stroke="#c9a463" stroke-width="1.5"/>' +
  '<circle cx="300" cy="140" r="24" fill="#e9c98a" stroke="#c9a463" stroke-width="1.5"/><rect x="290" y="126" width="20" height="18" fill="#f4f1de" stroke="#9aa3ad"/>' +
  '<line x1="300" y1="150" x2="300" y2="372" stroke="#374151" stroke-width="3" stroke-dasharray="8 4"/>' +
  // mainland
  '<path d="M0 360 C 150 352, 450 368, 600 356 L600 420 L0 420 Z" fill="#e6c27a"/>' +
  '<g fill="#cbd5e1">' + (function () { var g = ''; for (var i = 0; i < 12; i++) { if (i === 5 || i === 6) continue; g += '<rect x="' + (14 + i * 50) + '" y="' + (378 - (i * 13) % 20) + '" width="18" height="' + (30 + (i * 13) % 20) + '"/>'; } return g; })() + '</g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="440" y1="50" x2="410" y2="96"/><line x1="156" y1="172" x2="200" y2="196"/><line x1="168" y1="280" x2="210" y2="306"/><line x1="432" y1="232" x2="322" y2="250"/><line x1="432" y1="304" x2="304" y2="320"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.uae = {
    id: 'uae',
    name: 'Dubai',
    short: 'Dubai',
    country: 'United Arab Emirates',
    gateway: 'Dubai',
    lonlat: [55.27, 25.2],
    locator: { box: [51, 57.2, 22.5, 26.6], places: [['Dubai', 55.27, 25.2, 'r'], ['Abu Dhabi', 54.37, 24.45, 'l'], ['Al Ain', 55.76, 24.21, 'r'], ['The Gulf', 53.3, 25.7, 'a'], ['OMAN', 56.7, 23.1, 'a'], ['SAUDI ARABIA', 52.4, 23.2, 'a']] },
    stamp: { colour: '#0f766e', icon: '🏙️' },
    transport: { name: 'metro', verb: 'Ride', emoji: '🚇' },
    scene: 'dubai',
    photo: { file: 'Palm Jumeirah on 8 May 2008 Pict 1.jpg', alt: 'Aerial view of the palm-shaped artificial island of Palm Jumeirah in Dubai, with its curved breakwater and fronds', author: 'Imre Solt', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
    intro: {
      ks3: 'Marhaba! Welcome to Dubai, a city that has grown from a small fishing and pearl-diving town into a global hub in just a few decades. Ride the driverless metro past the world’s tallest building and out to islands built in the shape of a palm tree.',
      adv: 'Ride the Dubai Metro across a city transformed in one lifetime. This expedition covers land reclamation and its impacts, a hot desert climate and extreme weather, economic diversification away from oil, migration, and the sustainability of a desert megacity.'
    },
    facts: ['The Burj Khalifa in Dubai is 828 m tall, the tallest building in the world.', 'Palm Jumeirah was built from sand pumped up from the sea floor.', 'Most people living in the UAE were born in other countries.'],
    climate: {
      place: 'Dubai, UAE', source: 'Long-term averages (CRU / Met Office)', lat: '25°N', rmax: 40, rstep: 10,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [18.5, 19.5, 22.5, 26.5, 30.0, 32.5, 35.0, 35.0, 32.5, 29.5, 24.5, 20.5],
      rain: [11, 34, 24, 7, 1, 0, 0, 0, 0, 0, 2, 14]
    },
    diagrams: { palm: PALM_SVG },
    stations: [
      {
        id: 'palm', title: 'Islands made by people', icon: '🌴',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'palm', prompt: 'Label this palm-shaped artificial island.',
              spots: [{ x: 16, y: 10, a: 'The Gulf' }, { x: 84, y: 10, a: 'Breakwater' }, { x: 14, y: 40, a: 'Frond' }, { x: 84, y: 55, a: 'Trunk' }, { x: 16, y: 66, a: 'Lagoon' }, { x: 84, y: 72, a: 'Monorail' }, { x: 16, y: 94, a: 'Mainland' }],
              extra: [],
              explain: 'The curved breakwater protects the island from waves. Each frond is lined with homes, so the island adds lots of new beachfront.' },
            { type: 'mcq', q: 'How was Palm Jumeirah built?', options: ['Sand was pumped up from the sea floor', 'A volcano erupted', 'Coral grew into that shape', 'Rubbish was dumped into the sea and then covered with grass'], answer: 0,
              explain: 'Ships dredged huge amounts of sand and sprayed it into place. Millions of tonnes of rock form the breakwater.' },
            { type: 'mcq', q: 'Why build islands shaped like a palm tree rather than a simple circle?', options: ['It creates far more beachfront', 'It is easier to build', 'Palm trees are Dubai’s flag', 'It stops the sea getting warmer in summer'], answer: 0,
              explain: 'Every frond has two long beaches, so many more homes and hotels can be built right on the sea.' }
          ],
          adv: [
            { type: 'label', diagram: 'palm', prompt: 'Label the land-reclamation project. One label does not belong.',
              spots: [{ x: 16, y: 10, a: 'The Gulf' }, { x: 84, y: 10, a: 'Crescent breakwater' }, { x: 14, y: 40, a: 'Reclaimed frond' }, { x: 84, y: 55, a: 'Trunk' }, { x: 16, y: 66, a: 'Sheltered lagoon' }, { x: 84, y: 72, a: 'Monorail' }, { x: 16, y: 94, a: 'Mainland coast' }],
              extra: ['Spit'],
              explain: 'A spit is a natural landform built by longshore drift. Here, all the land has been reclaimed from the sea by people.' },
            { type: 'mcq', q: 'Which is a likely environmental impact of building the Palm islands?', options: ['Sediment smothered seabed habitats', 'The Gulf became less salty', 'Rainfall increased over Dubai', 'Sea level fell along the whole coast of the Gulf'], answer: 0,
              explain: 'Dredging clouded the water and buried seagrass and coral. The islands also changed currents and the way sand moves along the coast.' },
            { type: 'mcq', q: 'The lagoons inside the breakwater can suffer from poor water quality. Why?', options: ['The breakwater slows the flushing', 'Rivers bring in far too much fresh water from the mountains', 'Ice melts into them in winter', 'The water is too deep for sunlight'], answer: 0,
              explain: 'Gaps were cut into the breakwater to let tides circulate the water more freely.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Heat, humidity and rare storms', icon: '☀️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which months have no rain at all in Dubai?', options: ['May to October', 'January to April', 'November and December', 'None: it rains in every month'], answer: 0,
              explain: 'From June to October the bars disappear completely, and May has only about 1 mm.' },
            { type: 'mcq', graph: true, q: 'Which month is the wettest in Dubai?', options: ['February', 'July', 'August', 'October'], answer: 0,
              explain: 'February has about 34 mm. The little rain Dubai gets falls in winter.' },
            { type: 'mcq', q: 'Dubai’s summers feel even hotter than in inland deserts. Why?', options: ['The sea makes the air very humid', 'There is no wind at all', 'The sun is closer to Dubai', 'The tall glass buildings reflect all the sunlight down onto the streets'], answer: 0,
              explain: 'Sweat cannot evaporate well in humid air, so the body struggles to cool down.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Dubai (mm).', answer: 93, tol: 2, unit: 'mm',
              explain: 'Adding the twelve months gives about 93 mm, so Dubai is a hot desert.' },
            { type: 'mcq', q: 'In April 2024 the UAE had its heaviest rainfall since records began in 1949. Why did Dubai flood so badly?', options: ['Few storm drains in a dry city', 'The sea level rose by several metres during the storm', 'Snow melted in the mountains', 'Its rivers burst their banks'], answer: 0,
              explain: 'Rain that falls on hard, impermeable surfaces runs off fast. Roads and even the airport flooded, and Dubai is now building major new drainage.' },
            { type: 'mcq', q: 'The UAE uses cloud seeding. What is it?', options: ['Spraying particles into clouds', 'Planting trees to make clouds', 'Pumping seawater into the sky', 'Painting all the roofs white so that the air above cools and rain falls'], answer: 0,
              explain: 'Aircraft release salt particles into suitable clouds. How much extra rain it produces is still debated by scientists.' }
          ]
        }
      },
      {
        id: 'growth', title: 'From pearls to a global hub', icon: '✈️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Before oil was found, how did many people in Dubai make a living?', options: ['Pearl diving, fishing and trading', 'Growing rice', 'Making cars', 'Mining coal and copper in the desert hills'], answer: 0,
              explain: 'Divers collected pearls from the Gulf seabed. Dubai Creek was a busy trading harbour for dhows.' },
            { type: 'mcq', q: 'Most people living in the UAE were born in other countries. Why did so many move there?', options: ['To work in its fast-growing economy', 'To escape the cold', 'To study in its rainforests', 'Because the UAE has the cheapest houses in the world'], answer: 0,
              explain: 'Workers from South Asia, the Philippines, Europe and elsewhere build, run and staff the city.' },
            { type: 'mcq', q: 'The Dubai Metro opened in 2009. What is special about its trains?', options: ['They have no drivers', 'They float on water', 'They are pulled by camels', 'They only run at night'], answer: 0,
              explain: 'Automatic trains run every few minutes, helping to reduce traffic in a car-dependent city.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these parts of Dubai’s economy.', bins: ['Diversified sectors', 'Oil and gas'],
              items: [['Emirates airline and the airport', 0], ['Jebel Ali port and free zone', 0], ['Tourism, hotels and shopping', 0], ['Offshore oil fields found in 1966', 1], ['Crude oil exports', 1], ['Gas-fired power stations', 1]],
              explain: 'Dubai had much less oil than Abu Dhabi, so it diversified early. Oil now makes up only a small share of Dubai’s economy.' },
            { type: 'mcq', q: 'Why is Dubai well placed to be a global air and shipping hub?', options: ['It lies between Europe, Asia and Africa', 'It is on the Equator', 'It has many large rivers', 'It is in the centre of the Pacific, between Asia and America'], answer: 0,
              explain: 'Most of the world’s population lives within an eight-hour flight of the Gulf.' },
            { type: 'mcq', q: 'Many migrant construction workers in the Gulf have faced difficult conditions. Which issue has been widely reported?', options: ['Working outdoors in extreme heat', 'Too many holidays', 'Living in very cold housing in the winter months', 'Being paid too much'], answer: 0,
              explain: 'The UAE enforces a midday work ban in summer for outdoor workers, but heat stress remains a concern.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Falcons, abras and the future', icon: '🦅',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: falconry is an important Emirati tradition. What is it?', options: ['Training falcons to hunt', 'A type of boat race', 'A traditional song', 'Weaving baskets from palm leaves'], answer: 0,
              explain: 'Falcons were used to hunt in the desert. Falconry is on UNESCO’s list of Intangible Cultural Heritage.' },
            { type: 'mcq', q: 'Culture: what is an abra?', options: ['A small wooden water taxi on Dubai Creek', 'A tall tower', 'A sweet pastry', 'A desert festival held every spring to celebrate the date harvest'], answer: 0,
              explain: 'For a tiny fare, abras carry thousands of people across the creek every day, as they have for generations.' },
            { type: 'mcq', q: 'Dubai has an indoor ski slope in the middle of the desert. Why is this controversial?', options: ['Keeping snow frozen uses lots of energy', 'Nobody visits it', 'It melts the desert sand', 'Skiing is banned in the UAE, so it is only used for snowball fights'], answer: 0,
              explain: 'In a hot climate, cooling buildings is one of the biggest sources of energy use and carbon emissions.' }
          ],
          adv: [
            { type: 'mcq', q: 'The UAE has one of the world’s highest carbon footprints per person. What is a major reason?', options: ['Cooling and desalination use lots of energy', 'Large forests are burned every year', 'Most people walk everywhere', 'Coal is used to heat homes in winter'], answer: 0,
              explain: 'Nearly all fresh water comes from energy-hungry desalination, and buildings need cooling most of the year.' },
            { type: 'mcq', q: 'Dubai hosted the COP28 climate conference in 2023. Why did this attract criticism?', options: ['It is a major oil and gas producer', 'Dubai has no hotels', 'It was held in winter', 'The UAE has no airport, so delegates had to travel by ship'], answer: 0,
              explain: 'Supporters argued that big fossil-fuel producers must be part of any agreement. COP28 ended with a call to transition away from fossil fuels.' },
            { type: 'mcq', q: 'Which is the best example of Dubai trying to become more sustainable?', options: ['Huge solar parks in the desert', 'Building more indoor ski slopes', 'More car parks in the city', 'Burning more gas for power'], answer: 0,
              explain: 'The Mohammed bin Rashid Al Maktoum Solar Park is one of the largest solar sites in the world.' }
          ]
        }
      }
    ]
  };
})();
