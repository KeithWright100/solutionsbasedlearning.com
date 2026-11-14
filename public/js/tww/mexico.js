/* Travel the Wright Way — destination: Mexico City (a sinking megacity).
 * Climate data: Mexico City (international airport), 1991–2020 averages (climatestotravel.com); annual about 710 mm.
 * Subsidence: parts of Mexico City sink by up to about 50 cm a year (Chaussard et al. 2021); about 22 million people live in the
 *   Mexico City Basin; the city is built on soft lake sediments (Eos/AGU). A Metro overpass on Line 12 collapsed in 2021, killing over 20 people.
 */
(function () {
  var BASIN_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the Valley of Mexico showing volcanoes, the city on old lake clay, an aquifer and wells">' +
  '<rect width="600" height="420" fill="#dbeaf5"/>' +
  // volcanoes on each side
  '<path d="M0 220 L60 60 L80 60 L160 220 Z" fill="#7b6f66"/><path d="M60 60 L80 60 L74 74 L66 74 Z" fill="#fff"/>' +
  '<path d="M440 220 L520 50 L540 50 L600 170 L600 220 Z" fill="#7b6f66"/><path d="M520 50 L540 50 L533 66 L526 66 Z" fill="#fff"/>' +
  '<g class="tw-smoke"><circle cx="530" cy="36" r="8" fill="#d8d4d0"/><circle cx="540" cy="24" r="6" fill="#e5e2df"/></g>' +
  // lake clay layer and aquifer
  '<path d="M140 220 L460 220 L440 290 L160 290 Z" fill="#8c7b5e"/>' +
  '<rect y="290" width="600" height="80" fill="#6aa6c9"/><g fill="#9cc9e6"><circle cx="80" cy="320" r="5"/><circle cx="200" cy="340" r="5"/><circle cx="330" cy="315" r="5"/><circle cx="470" cy="345" r="5"/></g>' +
  '<rect y="370" width="600" height="50" fill="#5b4b3e"/>' +
  // city buildings (some tilting)
  '<g fill="#e9c46a" stroke="#7a5c1a" stroke-width="2"><rect x="200" y="170" width="30" height="50"/><rect x="240" y="150" width="26" height="70" transform="rotate(4 253 220)"/><rect x="280" y="180" width="34" height="40"/><rect x="324" y="160" width="24" height="60" transform="rotate(-5 336 220)"/><rect x="356" y="185" width="30" height="35"/></g>' +
  // well
  '<g stroke="#11243b" stroke-width="4"><line x1="410" y1="200" x2="410" y2="320"/></g><rect x="398" y="186" width="24" height="16" fill="#b42318"/>' +
  '<g fill="#2563c9"><path d="M404 330 l6 -12 l6 12 Z"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="100" y1="40" x2="70" y2="58"/><line x1="290" y1="128" x2="270" y2="152"/><line x1="470" y1="210" x2="424" y2="196"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.mexico = {
    id: 'mexico',
    name: 'Mexico City',
    short: 'Mexico City',
    country: 'Mexico',
    gateway: 'Mexico City',
    lonlat: [-99.1, 19.4],
    locator: { box: [-106, -92, 14.5, 24], places: [['Mexico City', -99.13, 19.43, 'r'], ['Puebla', -98.2, 19.04, 'b'], ['Popocatépetl', -98.62, 19.02, 'l'], ['Acapulco', -99.88, 16.86, 'l'], ['Guadalajara', -103.35, 20.66, 'r'], ['Pacific Ocean', -103, 16.2, 'a'], ['Gulf of Mexico', -95, 22.5, 'a']] },
    stamp: { colour: '#15803d', icon: '🌵' },
    transport: { name: 'city bus', verb: 'Ride', emoji: '🚌' },
    scene: 'city',
    photo: { file: 'Paseo de la Reforma Skyline Mexico City.jpg', alt: 'Tall buildings along the Paseo de la Reforma in Mexico City with mountains in the distance', author: 'CliNKer (Flickr)', licence: 'CC BY-SA 2.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/' },
    intro: {
      ks3: 'You land in Mexico City, one of the biggest cities in the world, high in a valley surrounded by volcanoes. Hop on a city bus to explore a megacity that is slowly sinking.',
      adv: 'Mexico City is a megacity in a high mountain basin. This expedition covers subsidence caused by groundwater extraction, earthquake risk on old lake sediments, a tropical highland climate, and the challenges of supplying water and housing to over 20 million people.'
    },
    facts: ['About 22 million people live in the Mexico City Basin.', 'The city is about 2,240 m above sea level.', 'It was built on the site of Tenochtitlan, the Aztec capital, on an island in a lake.'],
    climate: {
      place: 'Mexico City', source: '1991–2020 averages', lat: '19°N',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [14.1, 15.9, 17.6, 19.5, 19.9, 19.5, 18.6, 18.6, 18.2, 17.1, 15.5, 14.4],
      rain: [10, 5, 10, 25, 55, 110, 160, 150, 120, 45, 15, 5]
    },
    diagrams: { basin: BASIN_SVG },
    stations: [
      {
        id: 'sinking', title: 'A sinking city', icon: '📉',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'basin', prompt: 'Label this cross-section of the Valley of Mexico.',
              spots: [{ x: 18, y: 9, a: 'Volcano' }, { x: 50, y: 30, a: 'City buildings' }, { x: 50, y: 61, a: 'Soft lake clay' }, { x: 20, y: 79, a: 'Aquifer (water)' }, { x: 80, y: 50, a: 'Water well' }],
              extra: [],
              explain: 'Mexico City sits in a basin surrounded by volcanoes, on soft clay left by an old lake. Wells pump water from the aquifer below the clay.' },
            { type: 'mcq', q: 'Parts of Mexico City are sinking by up to about 50 cm a year. What is the main cause?', options: ['Pumping water from under the ground, so the soft clay squashes down', 'Earthquakes every day', 'The weight of snow', 'Volcanoes sucking in the ground'], answer: 0,
              explain: 'Most of the city’s water comes from wells. As water is pumped out, the soft, wet lake clay compacts and the ground sinks.' },
            { type: 'mcq', q: 'Which problem does sinking ground cause in Mexico City?', options: ['Cracked buildings, broken pipes and damaged roads and railways', 'More snow in winter', 'Cleaner air', 'Fewer floods'], answer: 0,
              explain: 'The ground sinks unevenly, so buildings tilt, pipes break and railways bend. Broken pipes lose even more water.' }
          ],
          adv: [
            { type: 'label', diagram: 'basin', prompt: 'Label the cross-section. One label does not belong.',
              spots: [{ x: 18, y: 9, a: 'Stratovolcano' }, { x: 50, y: 30, a: 'Urban area' }, { x: 50, y: 61, a: 'Lacustrine clay' }, { x: 20, y: 79, a: 'Aquifer' }, { x: 80, y: 50, a: 'Extraction well' }],
              extra: ['Coral reef'],
              explain: 'There is no coral reef in a high mountain basin. The city sits on lacustrine (lake) clay above an aquifer, ringed by stratovolcanoes such as Popocatépetl.' },
            { type: 'mcq', q: 'Why does the ground sink unevenly (differential subsidence) across Mexico City?', options: ['The lake clay varies in thickness, so areas with thicker clay compact more', 'Gravity is stronger in some places', 'Only the old centre is sinking', 'Volcanic ash is uniform everywhere'], answer: 0,
              explain: 'Where the clay is thick, more compaction occurs; near the basin edges, on firmer ground, there is little. Sharp changes in rate damage structures that cross the boundary.' },
            { type: 'mcq', q: 'In 2021 an elevated Metro section on Line 12 collapsed, killing over 20 people. Studies since have found that subsidence affects parts of the Metro. What does this show?', options: ['Infrastructure must be designed and monitored for differential subsidence', 'Subsidence never affects transport', 'Metro trains cause subsidence', 'Only underground lines are at risk'], answer: 0,
              explain: 'Satellite radar (InSAR) now maps subsidence rates so engineers can prioritise repairs. Elevated and street-level sections are most affected.' },
            { type: 'sort', q: 'Classify these as causes of, or responses to, subsidence in Mexico City.', bins: ['Cause', 'Response'],
              items: [['Over-pumping of the aquifer', 0], ['Impermeable surfaces stopping rain recharging the aquifer', 0], ['Rapid population growth', 0], ['Repairing leaking water pipes', 1], ['Rainwater harvesting', 1], ['Monitoring with satellite radar', 1]],
              explain: 'Reducing extraction, recharging the aquifer and fixing leaks (a large share of water is lost) are key responses.' }
          ]
        }
      },
      {
        id: 'quakes', title: 'Earthquakes on a lake bed', icon: '🏚️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'In 1985 a huge earthquake hit Mexico City even though it started about 350 km away on the Pacific coast. Why was the city so badly damaged?', options: ['The soft, wet lake clay made the shaking much stronger', 'The city is on top of a volcano', 'Buildings were made of ice', 'It was very windy'], answer: 0,
              explain: 'Soft lake sediments shake like jelly, amplifying seismic waves. Thousands of people died and many buildings collapsed.' },
            { type: 'mcq', q: 'Mexico City has an earthquake early-warning alarm. How does it help?', options: ['Sirens and phones give people seconds to get to safety before strong shaking arrives', 'It stops earthquakes', 'It makes buildings stronger', 'It predicts earthquakes years ahead'], answer: 0,
              explain: 'Sensors near the coast detect an earthquake and send a warning faster than the seismic waves travel to the city, giving up to about a minute.' },
            { type: 'mcq', q: 'Why does Mexico have so many earthquakes?', options: ['Ocean plates are sinking beneath Mexico along the Pacific coast', 'It is on a hotspot', 'Plates are moving apart under the city', 'Mexico has no plate boundaries'], answer: 0,
              explain: 'The Cocos plate is subducting beneath the North American plate along the Pacific coast. This also feeds volcanoes like Popocatépetl.' }
          ],
          adv: [
            { type: 'mcq', q: 'In 1985, medium-height buildings (about 6–15 storeys) collapsed more than very low or very tall ones. Which best explains this?', options: ['Their natural frequency matched the amplified shaking of the lake bed (resonance)', 'They were the oldest buildings', 'Tall buildings were made of rubber', 'Low buildings were underground'], answer: 0,
              explain: 'The soft basin resonated at a frequency close to that of mid-rise buildings, which swayed more and more until they failed.' },
            { type: 'mcq', q: 'On 19 September 2017, exactly 32 years after the 1985 quake, a magnitude 7.1 earthquake struck central Mexico. Many people had just taken part in a national earthquake drill. What does this suggest?', options: ['Regular drills improve preparedness and response', 'Drills cause earthquakes', 'Earthquakes can be predicted by date', 'Preparedness has no effect'], answer: 0,
              explain: 'The drill on the anniversary meant procedures were fresh. Stricter building codes since 1985 also reduced collapses, though some buildings still failed.' },
            { type: 'sort', q: 'Classify these factors affecting earthquake impacts in Mexico City.', bins: ['Physical factor', 'Human factor'],
              items: [['Soft lake sediments amplify shaking', 0], ['Distance from the epicentre', 0], ['Depth of the earthquake', 0], ['Quality of building construction', 1], ['Early warning sirens', 1], ['High population density', 1]],
              explain: 'Physical factors set the shaking; human factors decide how much harm it does.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Highland climate', icon: '⛰️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which months are the wet season in Mexico City?', options: ['About June to September', 'About December to March', 'Every month is equally wet', 'Only January'], answer: 0,
              explain: 'June to September have the tallest bars. The rest of the year is mostly dry.' },
            { type: 'mcq', graph: true, q: 'Mexico City is in the tropics, but its temperatures are only around 14–20°C. Why?', options: ['It is very high up, about 2,240 m above sea level', 'It is near the North Pole', 'It is by a cold sea', 'It is always cloudy'], answer: 0,
              explain: 'Temperature falls with height, about 6.5°C for every 1,000 m, so high cities are much cooler than lowlands at the same latitude.' },
            { type: 'mcq', q: 'Mexico City often has bad air pollution. Why does smog get trapped over the city?', options: ['It sits in a basin surrounded by mountains, so polluted air cannot easily escape', 'It is too windy', 'There are no cars', 'The sea blows the smog in'], answer: 0,
              explain: 'Mountains block the wind, and on calm, sunny days a layer of warm air can trap pollution near the ground.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Mexico City (°C).', answer: 5.8, tol: 0.1, unit: '°C',
              explain: 'Warmest 19.9°C (May) − coolest 14.1°C (January) = 5.8°C, typical of a tropical highland climate.' },
            { type: 'mcq', graph: true, q: 'Why is May the warmest month rather than July?', options: ['From June, wet-season cloud cover and rain reduce sunshine and cool the city', 'The sun is lowest in May', 'May has the longest nights', 'Snow falls in July'], answer: 0,
              explain: 'Before the wet season, skies are clear and the sun is high, so May is warmest. Cloud and rain in summer keep temperatures down.' },
            { type: 'mcq', q: 'Temperature inversions trap smog in the Valley of Mexico, especially in the dry season. What is an inversion?', options: ['A layer of warm air above cooler surface air, which stops air rising and mixing', 'A sudden rainstorm', 'Wind blowing upwards', 'A volcanic eruption'], answer: 0,
              explain: 'Normally air cools with height and rises. On clear nights the ground cools fast, so cooler air sits beneath warmer air, a stable lid that traps pollutants.' }
          ]
        }
      },
      {
        id: 'megacity', title: 'Life in a megacity', icon: '🏙️',
        tasks: {
          ks3: [
            { type: 'sort', q: 'Why have millions of people moved to Mexico City? Sort the push and pull factors.', bins: ['Push (from the countryside)', 'Pull (to the city)'],
              items: [['Little work apart from farming', 0], ['Low incomes', 0], ['Few schools or hospitals', 0], ['Jobs in factories, shops and offices', 1], ['Better schools and hospitals', 1], ['Family already living in the city', 1]],
              explain: 'Rural poverty pushes people away; jobs and services pull them to the city.' },
            { type: 'mcq', q: 'Much of Mexico City’s water is pumped from far away and lifted over mountains. Why is this a problem?', options: ['It uses huge amounts of energy and is very expensive', 'The water turns salty', 'It makes the water too cold', 'It is not a problem'], answer: 0,
              explain: 'Some water is piped more than 100 km and lifted over 1,000 m into the valley, which costs a lot of electricity.' },
            { type: 'mcq', q: 'At Xochimilco, farmers still grow vegetables on “chinampas”, small islands built in canals. Who first built them?', options: ['The Aztecs, centuries ago', 'Spanish settlers in the 1900s', 'Modern engineers', 'Tourists'], answer: 0,
              explain: 'Chinampas are an ancient farming system on the old lake. Today they are a UNESCO World Heritage site and a popular place for boat trips.' }
          ],
          adv: [
            { type: 'mcq', q: 'Many newer neighbourhoods on the city’s edge were self-built, often without planning permission. What is the main challenge for these areas?', options: ['Providing water, sewage, roads and services after people have already settled', 'Too many parks', 'They have the best services', 'They are too close to the sea'], answer: 0,
              explain: 'Informal settlements grow faster than infrastructure. Over time many are upgraded, but water supply and transport often remain poor.' },
            { type: 'mcq', q: 'Mexico City suffers both water shortages and flooding. How can that be?', options: ['Heavy rains run off concrete into drains instead of recharging the aquifer, while pumping and leaks drain supplies', 'It never rains in the city', 'The city has too many lakes', 'Floods only happen in the dry season'], answer: 0,
              explain: 'Impermeable surfaces send storm water into sewers and out of the basin, while the aquifer is over-pumped. Sinking ground also damages drains.' },
            { type: 'sort', q: 'Classify these strategies for a more sustainable Mexico City.', bins: ['Water', 'Transport and air quality'],
              items: [['Rainwater harvesting on homes', 0], ['Repairing leaking pipes', 0], ['Wetland parks that recharge the aquifer', 0], ['Metrobús rapid bus lanes', 1], ['Restricting car use on certain days', 1], ['Cable car lines to hillside neighbourhoods', 1]],
              explain: 'Sustainable cities manage water and transport together. Bus rapid transit and cable cars connect poorer outer areas to jobs.' }
          ]
        }
      }
    ]
  };
})();
