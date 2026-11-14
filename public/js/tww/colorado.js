/* Travel the Wright Way — destination: the Colorado River and the Grand Canyon (USA).
 * Climate data: Las Vegas (Harry Reid/McCarran Airport), NOAA 1991–2020 normals via NWS Las Vegas (°F and inches, converted); annual 4.18 in.
 * Grand Canyon: 277 river miles (446 km), up to 18 miles wide, about 1,857 m deep; oldest (Vishnu Basement) rocks about 1.75–1.84 billion years;
 *   canyon carved over about 5–6 million years.
 * Colorado River: about 40 million people, 5.5 million acres of farmland, 7 US states, 30 tribal nations and Mexico; 1922 Compact gave each basin
 *   7.5 million acre-feet a year; the river now rarely reaches the sea; Hoover Dam completed in the mid-1930s formed Lake Mead.
 *   Las Vegas grew from about 2,000 people in 1922 to nearly 2 million (National Geographic).
 */
(function () {
  var CANYON_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section through the Grand Canyon showing rock layers and the Colorado River">' +
  '<rect width="600" height="420" fill="#fbe3c6"/>' +
  // rock layers (left and right walls), stepped profile
  '<path d="M0 90 L190 90 L205 130 L225 130 L235 190 L255 195 L265 270 L280 300 L320 300 L335 270 L345 195 L365 190 L375 130 L395 130 L410 90 L600 90 L600 420 L0 420 Z" fill="#c96a3a"/>' +
  '<path d="M0 90 L190 90 L205 130 L0 130 Z M600 90 L410 90 L395 130 L600 130 Z" fill="#e8d3a2"/>' +
  '<path d="M0 130 L225 130 L235 190 L0 190 Z M600 130 L375 130 L365 190 L600 190 Z" fill="#c4553a"/>' +
  '<path d="M0 190 L255 195 L265 270 L0 270 Z M600 190 L345 195 L335 270 L600 270 Z" fill="#9b6b4a"/>' +
  '<path d="M0 270 L265 270 L280 300 L320 300 L335 270 L600 270 L600 420 L0 420 Z" fill="#4b3b44"/>' +
  // river
  '<path d="M280 300 L320 300 L318 312 L282 312 Z" fill="#3d8f8a"/>' +
  // rim trees and visitor
  '<g fill="#3f7d3a"><path d="M40 90 l8 -22 l8 22 Z"/><path d="M80 90 l7 -18 l7 18 Z"/><path d="M520 90 l8 -22 l8 22 Z"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="300" y1="356" x2="300" y2="314"/><line x1="130" y1="62" x2="150" y2="88"/><line x1="470" y1="62" x2="470" y2="102"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.colorado = {
    id: 'colorado',
    name: 'Colorado River',
    short: 'Colorado River',
    the: true,
    country: 'USA',
    gateway: 'Las Vegas',
    lonlat: [-112.1, 36.1],
    locator: { box: [-118.5, -105, 31, 41.5], rivers: [[[-106.6, 40.4], [-108.5, 39.1], [-110.1, 38.4], [-111.5, 36.9], [-112.2, 36.1], [-113.8, 36.0], [-114.7, 36.0], [-114.6, 35.0], [-114.5, 33.5], [-114.7, 32.7], [-114.9, 31.8]]], places: [['Las Vegas', -115.14, 36.17, 'l'], ['Grand Canyon', -112.11, 36.06, 'b'], ['Lake Mead', -114.4, 36.25, 't'], ['Phoenix', -112.07, 33.45, 'r'], ['Denver', -104.99, 39.74, 'l'], ['Gulf of California', -113.4, 31.4, 'a']] },
    stamp: { colour: '#c2410c', icon: '🏜️' },
    transport: { name: 'white-water raft', verb: 'Paddle', emoji: '🚣' },
    scene: 'canyon',
    photo: { file: 'Grand Canyon Horseshoe Bend.jpg', alt: 'The Colorado River curving around Horseshoe Bend, deep below red sandstone cliffs', author: 'Thomas Wolf, www.foto-tw.de', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
    intro: {
      ks3: 'You land in Las Vegas, a city in the middle of the desert. Head east to the Grand Canyon, climb into a raft and paddle through the white water of the Colorado River, the river that carved the canyon.',
      adv: 'From Las Vegas you raft the Colorado River through the Grand Canyon. This expedition covers how the canyon formed, a hot desert climate, water scarcity and the over-allocated river, and the dams, cities and farms that depend on it.'
    },
    facts: ['The Grand Canyon is 277 miles (446 km) long and over 1.8 km deep.', 'The oldest rocks at the bottom are about 1.8 billion years old.', 'About 40 million people depend on Colorado River water.'],
    climate: {
      place: 'Las Vegas, USA', source: 'NOAA 1991–2020 normals, Las Vegas Airport', lat: '36°N',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [9.7, 11.9, 16.0, 19.8, 25.2, 30.9, 34.0, 33.2, 28.7, 21.3, 14.0, 9.0],
      rain: [14, 20, 11, 5, 2, 1, 10, 8, 8, 8, 8, 11]
    },
    diagrams: { canyon: CANYON_SVG },
    stations: [
      {
        id: 'canyon', title: 'The Grand Canyon', icon: '🪨',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'canyon', prompt: 'Label this cross-section of the Grand Canyon.',
              spots: [{ x: 50, y: 88, a: 'Colorado River' }, { x: 20, y: 12, a: 'Canyon rim' }, { x: 78, y: 12, a: 'Youngest rocks' }, { x: 15, y: 82, a: 'Oldest rocks' }, { x: 82, y: 54, a: 'Rock layers' }],
              extra: [],
              explain: 'The river flows at the bottom of the canyon. The walls show layers of rock, with the oldest at the bottom and the youngest at the rim.' },
            { type: 'mcq', q: 'How was the Grand Canyon made?', options: ['The Colorado River cut down through the rock as the land was slowly pushed up', 'A giant earthquake split the ground open', 'A glacier dug it out', 'People dug it'], answer: 0,
              explain: 'Over about 5–6 million years the river eroded downwards while the Colorado Plateau was being uplifted, carving the canyon deeper and deeper.' },
            { type: 'mcq', q: 'Why are the oldest rocks at the bottom of the canyon?', options: ['Layers of sediment were laid down one on top of another, so lower layers are older', 'Old rocks are heavier and sink', 'The river made new rocks at the top', 'Rocks get younger as they get hotter'], answer: 0,
              explain: 'In undisturbed layers, each new layer is deposited on top of older ones. The canyon walls are like the pages of a history book.' }
          ],
          adv: [
            { type: 'label', diagram: 'canyon', prompt: 'Label the cross-section. One label does not belong.',
              spots: [{ x: 50, y: 88, a: 'Colorado River' }, { x: 20, y: 12, a: 'Canyon rim' }, { x: 78, y: 12, a: 'Kaibab Limestone (youngest)' }, { x: 15, y: 82, a: 'Vishnu rocks (oldest)' }, { x: 82, y: 54, a: 'Sedimentary strata' }],
              extra: ['Delta'],
              explain: 'A delta forms at a river mouth, not in a canyon. The Kaibab Limestone at the rim is about 270 million years old; the Vishnu Basement Rocks in the inner gorge are about 1.75–1.84 billion years old.' },
            { type: 'number', q: 'The canyon is about 1,857 m deep and was carved in about 6 million years. What is the average rate of downcutting in mm per year? (2 decimal places)', answer: 0.31, tol: 0.01, unit: 'mm/yr',
              explain: '1,857 m = 1,857,000 mm. 1,857,000 ÷ 6,000,000 ≈ 0.31 mm a year, slow, but over millions of years it adds up.' },
            { type: 'mcq', q: 'Why are the Grand Canyon’s walls so steep and stepped?', options: ['The dry climate means little weathering on the walls, and hard and soft layers erode at different rates', 'Heavy rain smooths the slopes', 'Glaciers polished the walls', 'The walls are made of one type of rock'], answer: 0,
              explain: 'In an arid climate there is little vegetation or chemical weathering to wear slopes back. Resistant limestones and sandstones form cliffs; weaker shales form gentler slopes.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Desert climate', icon: '🌵',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the hottest month in Las Vegas?', options: ['July', 'January', 'April', 'December'], answer: 0,
              explain: 'July averages about 34°C, and afternoons are often well over 40°C.' },
            { type: 'mcq', graph: true, q: 'Las Vegas gets only about 106 mm of rain a year. What type of climate is this?', options: ['Hot desert', 'Tropical rainforest', 'Polar', 'Temperate maritime'], answer: 0,
              explain: 'Less than 250 mm a year is a desert. Las Vegas is in the Mojave Desert.' },
            { type: 'mcq', q: 'Desert plants such as cacti have thick, waxy stems and spines instead of leaves. Why?', options: ['To store water and lose as little as possible', 'To catch insects', 'To keep warm', 'To grow faster in the shade'], answer: 0,
              explain: 'Spines reduce water loss and protect the plant; thick stems store water collected after rare rainstorms.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Las Vegas (°C).', answer: 25.0, tol: 0.1, unit: '°C',
              explain: 'Warmest 34.0°C (July) − coldest 9.0°C (December) = 25.0°C. Deserts have large ranges because clear skies let heat escape in winter and at night.' },
            { type: 'mcq', q: 'Which two factors best explain why Las Vegas is so dry?', options: ['Sinking air in the subtropical high-pressure belt, and the rain shadow of the Sierra Nevada', 'Cold ocean currents and the ITCZ', 'Monsoon winds and high altitude', 'Being on the Equator'], answer: 0,
              explain: 'Descending, warming air suppresses cloud formation, and Pacific storms lose most of their moisture crossing California’s mountains.' },
            { type: 'mcq', graph: true, q: 'There is a small rise in rainfall in July and August. What causes it?', options: ['The North American monsoon brings moist air and thunderstorms in late summer', 'Snow melting from the mountains', 'Winter storms from the Pacific', 'Hurricanes reaching Nevada every year'], answer: 0,
              explain: 'In late summer, moist air flows north from the Gulf of California and Gulf of Mexico, triggering short, intense thunderstorms and flash floods.' }
          ]
        }
      },
      {
        id: 'water', title: 'A river in demand', icon: '💧',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'About how many people depend on water from the Colorado River?', options: ['About 40 million', 'About 4,000', 'About 400 million', 'Nobody'], answer: 0,
              explain: 'The river supplies about 40 million people in seven US states and Mexico, including cities such as Las Vegas, Phoenix, Los Angeles and Denver.' },
            { type: 'mcq', q: 'Today the Colorado River rarely reaches the sea. Why?', options: ['So much water is taken out for cities and farms that little is left at the end', 'It flows into a volcano', 'It freezes before reaching the sea', 'The sea is too high'], answer: 0,
              explain: 'Dams, canals and pipelines divert most of the water before the river reaches the Gulf of California in Mexico.' },
            { type: 'sort', q: 'Sort these into things that increase water use and ways to save water.', bins: ['Uses more water', 'Saves water'],
              items: [['Green lawns and golf courses in the desert', 0], ['Growing thirsty crops like alfalfa', 0], ['Fast-growing desert cities', 0], ['Replacing lawns with desert plants', 1], ['Recycling wastewater', 1], ['Drip irrigation on farms', 1]],
              explain: 'In a desert, lawns, thirsty crops and population growth all raise demand. Desert landscaping, recycling and efficient irrigation reduce it.' }
          ],
          adv: [
            { type: 'mcq', q: 'The 1922 Colorado River Compact gave the Upper and Lower Basins 7.5 million acre-feet each per year. Why is the river now over-allocated?', options: ['The agreement was based on unusually wet years, and drought and warming have since reduced flow', 'The river has become longer', 'Mexico takes all the water', 'Rainfall has doubled'], answer: 0,
              explain: 'Flow measurements in the early 1900s came from a wet period. More was promised than the river normally carries, and higher temperatures now reduce runoff further.' },
            { type: 'sort', q: 'Classify these responses to water scarcity in the Colorado basin.', bins: ['Increase supply', 'Manage demand'],
              items: [['Cloud seeding over the Rockies', 0], ['Desalination plants on the coast', 0], ['Water recycling for drinking supply', 0], ['Paying farmers to leave fields fallow', 1], ['Cash rebates for removing lawns', 1], ['Agreed cuts when Lake Mead falls low', 1]],
              explain: 'Supply-side options add water; demand management uses less. Most experts argue demand cuts, especially in agriculture, are essential.' },
            { type: 'mcq', q: 'Who has the strongest claim to be included in future decisions about the river?', options: ['All stakeholders, including 30 tribal nations, Mexico, farmers, cities and ecosystems', 'Only the largest city', 'Only farmers', 'Only the state where the river starts'], answer: 0,
              explain: 'Water conflicts involve many stakeholders. Tribal nations hold senior water rights, and the delta ecosystem in Mexico depends on flows too.' }
          ]
        }
      },
      {
        id: 'dams', title: 'Dams, cities and farms', icon: '🏗️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Hoover Dam was finished in the 1930s and created Lake Mead. What does it do?', options: ['Stores water, controls floods and generates hydro-electric power', 'Stops fish swimming', 'Makes the river saltier on purpose', 'Turns the desert into a forest'], answer: 0,
              explain: 'Lake Mead stores water for Las Vegas, Arizona and California, and the dam produces electricity for millions of people.' },
            { type: 'mcq', q: 'Las Vegas had about 2,000 people in 1922 and has nearly 2 million today. What made this growth possible in a desert?', options: ['Water and electricity from the Colorado River and Hoover Dam', 'Heavy rainfall', 'Underground lakes of fresh water everywhere', 'Snow every winter'], answer: 0,
              explain: 'Without the river’s water and the dam’s power, a city this size could not exist in the Mojave Desert.' },
            { type: 'mcq', q: 'Colorado River water helps grow most of the USA’s winter vegetables, in places like California’s Imperial Valley. Why can farmers grow crops there in winter?', options: ['Warm, sunny winters plus irrigation water from the river', 'It rains heavily all winter', 'The soil is frozen', 'Greenhouses cover the whole valley'], answer: 0,
              explain: 'The desert is warm and sunny in winter. Canals bring river water, so lettuce and other vegetables grow when much of the USA is too cold.' }
          ],
          adv: [
            { type: 'sort', q: 'Evaluate the large dams on the Colorado River.', bins: ['Benefit', 'Cost'],
              items: [['Reliable water supply for cities and farms', 0], ['Renewable hydro-electric power', 0], ['Flood control downstream', 0], ['Sediment trapped behind dams, starving the delta', 1], ['Evaporation losses from large reservoirs', 1], ['Colder, clearer water harming native fish', 1]],
              explain: 'Dams transformed the Southwest but changed the river’s temperature, sediment load and ecology, and lose large amounts of water to evaporation in desert heat.' },
            { type: 'mcq', q: 'As Lake Mead’s level falls, Hoover Dam produces less electricity. Why?', options: ['Lower water means less pressure (head) driving the turbines', 'The turbines freeze', 'The dam gets wider', 'Evaporation adds energy'], answer: 0,
              explain: 'Hydro-electric output depends on the volume of water and the height it falls. Lower reservoir levels reduce both.' },
            { type: 'mcq', q: 'Grand Canyon rafting trips and tourism bring money but need careful management. Which is the best example of sustainable management?', options: ['Permit systems that limit the number of rafting trips each season', 'Unlimited motorboats on the river', 'Building hotels on the canyon floor', 'Removing all visitor rules'], answer: 0,
              explain: 'Limiting numbers protects beaches, campsites and wildlife while keeping the economic benefits of tourism.' }
          ]
        }
      }
    ]
  };
})();
