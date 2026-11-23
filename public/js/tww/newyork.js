/* Travel the Wright Way — destination: New York (a world city, migration and diversity, a humid continental/subtropical climate, coastal flood risk after Hurricane Sandy, urban change, and New York culture).
 * Climate data: New York, Central Park, 1991–2020 averages (climatestotravel.com).
 * Facts: New York City has about 8.3 million people, the largest city in the USA; about 36% of residents were born outside the USA, and hundreds of languages are spoken;
 *   Ellis Island processed about 12 million immigrants between 1892 and 1954; the Statue of Liberty was a gift from France (1886);
 *   Hurricane (post-tropical cyclone) Sandy in October 2012 brought a record storm surge to Lower Manhattan, flooding subway tunnels and cutting power; resilience projects since include raised parks and flood walls on the East Side;
 *   the subway runs 24 hours a day and has over 470 stations; Central Park opened in 1858; the High Line (opened 2009) is a park built on an old elevated railway, linked with rising property prices nearby (gentrification);
 *   Wall Street and the New York Stock Exchange make the city a global financial centre; hip hop began in the Bronx in the 1970s; the New Year ball drop takes place in Times Square.
 */
(function () {
  var SURGE_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a storm surge flooding low-lying Lower Manhattan, with normal sea level, the surge, a sea wall, flooded subway tunnel, skyscrapers and hurricane winds">' +
  '<rect width="600" height="420" fill="#d5e3ee"/>' +
  // storm clouds and wind
  '<g fill="#8a94a3"><ellipse cx="90" cy="40" rx="80" ry="24"/><ellipse cx="200" cy="30" rx="70" ry="20"/><ellipse cx="140" cy="60" rx="60" ry="16"/></g>' +
  '<g fill="none" stroke="#11243b" stroke-width="3"><path d="M40 100 L150 100 m-12 -8 l12 8 l-12 8"/><path d="M60 130 L170 130 m-12 -8 l12 8 l-12 8"/></g>' +
  // sea
  '<path d="M0 260 L230 260 L230 420 L0 420 Z" fill="#2f7fb8"/>' +
  // normal sea level line
  '<line x1="0" y1="300" x2="230" y2="300" stroke="#e6f6ff" stroke-width="2" stroke-dasharray="8 6"/>' +
  // surge water over land
  '<path d="M0 260 C 100 250, 200 262, 230 258 L360 258 L360 300 L230 300 L230 260 Z" fill="#4d97c9" opacity=".9"/>' +
  // land
  '<path d="M230 300 L600 300 L600 420 L230 420 Z" fill="#9b8a6c"/><path d="M230 300 L600 300" stroke="#6b5a44" stroke-width="2"/>' +
  // sea wall
  '<rect x="224" y="276" width="12" height="40" fill="#6b7280"/>' +
  // skyscrapers
  '<g fill="#7a8899">' + (function () { var g = '', xs = [300, 350, 410, 470, 530], hs = [170, 210, 150, 230, 190]; for (var i = 0; i < 5; i++) g += '<rect x="' + xs[i] + '" y="' + (300 - hs[i]) + '" width="40" height="' + hs[i] + '"/>'; return g; })() + '</g>' +
  '<g fill="#dbe7f2" opacity=".6">' + (function () { var g = '', xs = [300, 350, 410, 470, 530], hs = [170, 210, 150, 230, 190]; for (var i = 0; i < 5; i++) for (var y = 310 - hs[i]; y < 290; y += 14) g += '<rect x="' + (xs[i] + 6) + '" y="' + y + '" width="28" height="5"/>'; return g; })() + '</g>' +
  // subway tunnel
  '<path d="M250 380 L600 380 L600 340 L250 340 Q 236 360 250 380 Z" fill="#3b3b3b"/><path d="M252 370 L600 370 L600 360 L256 360 Z" fill="#4d97c9"/><rect x="430" y="346" width="60" height="16" rx="4" fill="#1d4ed8"/>' +
  '<path d="M300 300 L300 340" stroke="#4d97c9" stroke-width="6"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="120" y1="196" x2="150" y2="254"/><line x1="96" y1="330" x2="120" y2="302"/><line x1="230" y1="224" x2="230" y2="274"/><line x1="456" y1="396" x2="456" y2="366"/><line x1="560" y1="90" x2="530" y2="114"/><line x1="290" y1="150" x2="200" y2="110"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.newyork = {
    id: 'newyork',
    name: 'New York',
    short: 'New York',
    country: 'USA',
    gateway: 'New York City',
    lonlat: [-74.0, 40.71],
    locator: { box: [-80.5, -68.5, 36.6, 44.6], rivers: [[[-73.95, 42.75], [-73.93, 41.7], [-73.97, 40.85], [-74.02, 40.7]]], places: [['New York', -74.0, 40.71, 'b'], ['Boston', -71.06, 42.36, 'r'], ['Philadelphia', -75.16, 39.95, 'l'], ['Washington DC', -77.04, 38.9, 'r'], ['Albany', -73.76, 42.65, 'l'], ['Atlantic Ocean', -71.5, 39.4, 'a'], ['CANADA', -75.5, 44.25, 'a']] },
    stamp: { colour: '#ca8a04', icon: '🗽' },
    transport: { name: 'yellow cab and subway', verb: 'Ride', emoji: '🚕' },
    scene: 'nyc',
    photo: { file: 'Lower Manhattan from Staten Island Ferry Jan 2006.jpg', alt: 'A wide view across the harbour to the skyscrapers of Lower Manhattan on a clear day', author: 'Diliff', licence: 'CC BY 2.5', licenceUrl: 'https://creativecommons.org/licenses/by/2.5/' },
    intro: {
      ks3: 'Welcome to New York, one of the world’s great cities. Ride a yellow cab past the skyscrapers of Manhattan, find out why millions of people from around the world have made New York their home, and see how the city is preparing for storms and rising seas.',
      adv: 'Ride across New York City. This expedition covers a world city and its global links, international migration and diversity, a humid continental climate, coastal flood risk after Hurricane Sandy, regeneration and gentrification, and New York culture.'
    },
    facts: ['More than 8 million people live in New York City.', 'About one in three New Yorkers was born in another country.', 'The subway runs 24 hours a day.'],
    climate: {
      place: 'New York (Central Park), USA', source: '1991–2020 averages (climatestotravel.com)', lat: '41°N', rmax: 150, rstep: 50,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [0.8, 1.8, 5.7, 11.6, 17.0, 22.2, 25.3, 24.6, 20.6, 14.4, 8.8, 3.8],
      rain: [90, 80, 110, 105, 100, 115, 115, 115, 110, 110, 90, 110]
    },
    diagrams: { surge: SURGE_SVG },
    stations: [
      {
        id: 'city', title: 'A world city', icon: '🏙️',
        tasks: {
          ks3: [
            { type: 'mcq', photo: true, q: 'Look at the photo of Lower Manhattan. Why are the buildings so tall?', options: ['Land is scarce and very expensive', 'Tall buildings stay cooler in the hot summers', 'It stops them flooding', 'Laws ban small buildings'], answer: 0,
              explain: 'Manhattan is a narrow island. Building upwards fits more offices and homes onto expensive land.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Boston from New York?', options: ['North-east', 'South-west', 'North-west', 'South-east'], answer: 0,
              explain: 'Boston is about 300 km north-east of New York, along the Atlantic coast.' },
            { type: 'mcq', q: 'Wall Street in New York is famous around the world. What is it known for?', options: ['Banks and the stock exchange', 'Farming', 'Car factories and steel mills by the river', 'Ski resorts'], answer: 0,
              explain: 'Decisions made in New York’s banks affect money and jobs all over the world. This makes it a world city.' }
          ],
          adv: [
            { type: 'mcq', photo: true, q: 'Study the photo. Lower Manhattan is a CBD. Which feature in the photo shows this?', options: ['A dense cluster of high-rise offices', 'Large detached houses with gardens', 'Farmland around the edge', 'Heavy industry with chimneys'], answer: 0,
              explain: 'High land values in the CBD lead to high-rise buildings, mostly offices for finance and business services.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the straight-line distance from New York to Washington DC.', options: ['About 330 km', 'About 50 km', 'About 1,200 km', 'About 3,000 km'], answer: 0,
              explain: 'It is about 330 km to the south-west. This chain of cities along the coast is called a megalopolis.' },
            { type: 'mcq', q: 'Which best explains why New York is called a “world city”?', options: ['A hub for global finance, media and migration', 'It is the capital of the USA', 'It is the oldest city anywhere in the Americas', 'It has the largest area of any city'], answer: 0,
              explain: 'Washington DC is the capital. New York’s power comes from its global economic and cultural links, such as the United Nations headquarters.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Hot summers, snowy winters', icon: '🌡️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the warmest month in New York?', options: ['July', 'January', 'April', 'October'], answer: 0,
              explain: 'July averages about 25°C and often feels hot and humid.' },
            { type: 'mcq', graph: true, q: 'Which statement about rain in New York is true?', options: ['Rain and snow fall in every month', 'It never rains in summer', 'It only rains in winter', 'There is a long dry season'], answer: 0,
              explain: 'Every month gets 80 mm or more. In winter some of it falls as snow.' },
            { type: 'mcq', graph: true, q: 'What is the average temperature in January?', options: ['About 1°C', 'About 15°C', 'About −20°C', 'About 25°C'], answer: 0,
              explain: 'Winters are cold. Snowstorms called nor’easters can bring the city to a stop.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual precipitation in New York (mm).', answer: 1250, tol: 5, unit: 'mm',
              explain: 'Adding the twelve months gives 1,250 mm, spread fairly evenly through the year.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in New York (°C). Give one decimal place.', answer: 24.5, tol: 0.2, unit: '°C',
              explain: 'Warmest 25.3°C − coldest 0.8°C = 24.5°C, much larger than London’s, despite New York being on the coast.' },
            { type: 'mcq', graph: true, q: 'New York is further south than London but has much colder winters. Why?', options: ['Winds blow from the cold continent, not the sea', 'It is at a higher altitude', 'It has no ocean nearby', 'The Gulf Stream flows away from Europe in winter'], answer: 0,
              explain: 'Prevailing westerly winds reach New York after crossing frozen North America, while London gets mild air from the Atlantic.' }
          ]
        }
      },
      {
        id: 'sandy', title: 'Storm surge', icon: '🌊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'surge', prompt: 'Label how a storm surge floods Lower Manhattan.',
              spots: [{ x: 20, y: 46, a: 'Storm surge' }, { x: 16, y: 79, a: 'Normal sea level' }, { x: 38, y: 53, a: 'Sea wall' }, { x: 76, y: 94, a: 'Flooded subway' }, { x: 87, y: 20, a: 'Skyscrapers' }, { x: 50, y: 34, a: 'Strong winds' }],
              extra: [],
              explain: 'Hurricane winds and low pressure push sea water above its normal level. It pours over the sea wall and down into the subway tunnels.' },
            { type: 'mcq', q: 'In 2012 Hurricane Sandy flooded parts of New York. Which was a major impact?', options: ['Subway tunnels flooded and power was cut', 'The city was covered in snow', 'An earthquake destroyed the bridges to Brooklyn', 'The Hudson River dried up'], answer: 0,
              explain: 'Millions of people lost power, and some subway lines were closed for days.' },
            { type: 'mcq', q: 'Why is Lower Manhattan at risk from flooding?', options: ['It is low-lying and surrounded by water', 'It is on a mountain', 'It is a long way from the sea and the rivers', 'It has no rivers nearby'], answer: 0,
              explain: 'Sea levels are rising, so storm surges will reach higher in the future.' }
          ],
          adv: [
            { type: 'label', diagram: 'surge', prompt: 'Label the storm surge cross-section. One label does not belong.',
              spots: [{ x: 20, y: 46, a: 'Storm surge (raised sea level)' }, { x: 16, y: 79, a: 'Mean high tide level' }, { x: 38, y: 53, a: 'Overtopped sea wall' }, { x: 76, y: 94, a: 'Flooded subway tunnel' }, { x: 87, y: 20, a: 'High-value CBD' }, { x: 50, y: 34, a: 'Onshore hurricane winds' }],
              extra: ['Tsunami wave'],
              explain: 'A tsunami is caused by an earthquake or landslide. A storm surge is caused by wind and low pressure in a storm.' },
            { type: 'sort', q: 'Classify these responses to flood risk in New York.', bins: ['Hard engineering', 'Soft or management'],
              items: [['Flood walls and gates', 0], ['Raising parks along the river', 0], ['Barriers at subway entrances', 0], ['Flood warnings and evacuation zones', 1], ['Restoring salt marshes and oyster reefs', 1], ['Stricter building rules in flood zones', 1]],
              explain: 'After Sandy, the city began the East Side Coastal Resiliency project, raising waterfront parkland to protect homes behind it.' },
            { type: 'mcq', q: 'Why will storm surges become a bigger threat to New York in future?', options: ['Sea levels are rising as the climate warms', 'The city is moving closer to the Equator', 'Hurricanes are becoming smaller', 'The Atlantic is cooling'], answer: 0,
              explain: 'Higher sea level means the same storm pushes water further inland. Warmer seas may also make storms wetter and stronger.' }
          ]
        }
      },
      {
        id: 'culture', title: 'A city of immigrants', icon: '🗽',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Between 1892 and 1954, about 12 million immigrants arrived through which island?', options: ['Ellis Island', 'Long Island', 'Rhode Island', 'Easter Island'], answer: 0,
              explain: 'Many came from Italy, Ireland, Germany and Eastern Europe, hoping for a better life.' },
            { type: 'mcq', q: 'Culture: which country gave the Statue of Liberty to the USA?', options: ['France', 'Britain', 'Spain', 'Japan'], answer: 0,
              explain: 'It arrived in 1886 and became a symbol of welcome for immigrants arriving by ship.' },
            { type: 'mcq', q: 'Culture: which style of music began in the Bronx, New York, in the 1970s?', options: ['Hip hop', 'Reggae', 'Opera', 'Country'], answer: 0,
              explain: 'DJs at block parties mixed beats and MCs rapped over them, creating a global music culture.' }
          ],
          adv: [
            { type: 'mcq', q: 'The High Line is a park built on an old elevated railway. Which change followed nearby?', options: ['Rising rents and new luxury flats', 'Factories moving into the area', 'Falling house prices', 'People leaving for the countryside'], answer: 0,
              explain: 'This is gentrification. Regeneration can improve an area but push out long-term, lower-income residents.' },
            { type: 'mcq', q: 'About one in three New Yorkers was born abroad. Which is a benefit of this migration?', options: ['Workers and businesses that grow the economy', 'Fewer languages spoken', 'Less demand for housing, schools and hospitals', 'Lower population'], answer: 0,
              explain: 'Migrants fill jobs in health care, construction and services, and start many small businesses.' },
            { type: 'mcq', q: 'Culture: where does New York’s famous New Year ball drop take place?', options: ['Times Square', 'Central Park', 'Brooklyn Bridge', 'Ellis Island'], answer: 0,
              explain: 'Around a million people pack the streets around Times Square to count down to midnight.' }
          ]
        }
      }
    ]
  };
})();
