/* Travel the Wright Way — destination: Alaska (Denali, Fairbanks and the far north).
 * Climate data: Fairbanks International Airport, NOAA 1991–2020 normals (°F and inches, converted to °C and mm).
 * Permafrost: about 80–85% of Alaska is underlain by permafrost (EPA; Alaska DGGS); near-surface permafrost under 38% of mainland Alaska,
 *   16–24% of it projected to disappear by 2100 (USGS, Pastick et al. 2015).
 * Trans-Alaska Pipeline: 800 miles (1,287 km), Prudhoe Bay to Valdez, first oil June 1977; about 420 miles elevated because of permafrost (Alyeska).
 */
(function () {
  var PERMA_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section through tundra showing the active layer, permafrost, an ice wedge and a pipeline raised on supports">' +
  '<rect width="600" height="420" fill="#d6ecfb"/>' +
  // permafrost and active layer
  '<rect y="200" width="600" height="220" fill="#9fb4c7"/>' +
  '<g stroke="#c6d6e4" stroke-width="2" opacity=".7">' + (function () { var h = ''; for (var i = 0; i < 9; i++) h += '<line x1="0" y1="' + (220 + i * 22) + '" x2="600" y2="' + (220 + i * 22) + '"/>'; return h; })() + '</g>' +
  '<rect y="150" width="600" height="50" fill="#8a6a45"/>' +
  // ice wedge
  '<path d="M90 200 L150 200 L120 330 Z" fill="#f4fbff" stroke="#9cc9e6" stroke-width="2"/>' +
  // tundra surface plants
  '<rect y="144" width="600" height="8" fill="#7d8f4e"/>' +
  '<g fill="#5f7a3a">' + (function () { var h = ''; for (var i = 0; i < 30; i++) { var x = i * 20 + 6; h += '<path d="M' + x + ' 146 q4 -12 8 0 Z"/>'; } return h; })() + '</g>' +
  '<g fill="#c0392b"><circle cx="64" cy="140" r="3"/><circle cx="210" cy="140" r="3"/></g>' +
  // pipeline on supports
  '<g stroke="#5b6573" stroke-width="6"><line x1="380" y1="150" x2="380" y2="108"/><line x1="520" y1="150" x2="520" y2="108"/></g>' +
  '<rect x="330" y="96" width="270" height="14" rx="7" fill="#c7ced6" stroke="#5b6573" stroke-width="2"/>' +
  '<g fill="#5b6573"><rect x="372" y="104" width="16" height="6"/><rect x="512" y="104" width="16" height="6"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="120" y1="122" x2="120" y2="138"/><line x1="450" y1="74" x2="450" y2="94"/><line x1="120" y1="355" x2="120" y2="332"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.alaska = {
    id: 'alaska',
    name: 'Alaska',
    short: 'Alaska',
    country: 'USA',
    gateway: 'Fairbanks',
    lonlat: [-149.9, 63.5],
    locator: { box: [-168, -140, 54, 71.5], places: [['Fairbanks', -147.72, 64.84, 'r'], ['Anchorage', -149.9, 61.22, 'l'], ['Denali', -151.0, 63.07, 'l'], ['Prudhoe Bay', -148.34, 70.25, 'b'], ['Valdez', -146.35, 61.13, 'r'], ['Arctic Ocean', -156, 71.2, 'a'], ['Gulf of Alaska', -146, 57.5, 'a']], rivers: [[[-148.34, 70.25], [-149.0, 67.5], [-147.72, 64.84], [-145.7, 63.4], [-146.35, 61.13]]] },
    stamp: { colour: '#1e3a8a', icon: '🐻' },
    transport: { name: 'bush plane', verb: 'Fly', emoji: '🛩️' },
    scene: 'plane',
    photo: { file: 'Parque nacional y reserva Denali, Alaska, Estados Unidos, 2017-08-30, DD 72.jpg', alt: 'Wide view of tundra, braided rivers and the snowy Alaska Range in Denali National Park', author: 'Diego Delso', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'You land in Fairbanks, deep in the Alaskan interior. A small bush plane is waiting to fly you over the tundra, the Alaska Range and the frozen north, where few roads go.',
      adv: 'From Fairbanks you fly by bush plane over interior and Arctic Alaska. This expedition covers permafrost and periglacial landscapes, an extreme continental climate, oil and the Trans-Alaska Pipeline, and how people and communities are adapting to a warming Arctic.'
    },
    facts: ['Denali, in the Alaska Range, is the highest mountain in North America at 6,190 m.', 'About 80% of Alaska has permafrost underneath it.', 'The Trans-Alaska Pipeline carries oil 800 miles (1,287 km) from the Arctic coast to Valdez.'],
    climate: {
      place: 'Fairbanks, Alaska', source: 'NOAA 1991–2020 normals, Fairbanks Airport', lat: '65°N',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-22.2, -17.8, -11.7, 1.1, 10.0, 16.1, 17.2, 13.9, 7.8, -3.3, -15.6, -20.0],
      rain: [15, 13, 10, 8, 13, 38, 58, 53, 36, 20, 18, 15]
    },
    diagrams: { perma: PERMA_SVG },
    stations: [
      {
        id: 'permafrost', title: 'Frozen ground', icon: '🧊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'perma', prompt: 'Label this cross-section of the Alaskan tundra.',
              spots: [{ x: 20, y: 26, a: 'Tundra plants' }, { x: 75, y: 14, a: 'Raised pipeline' }, { x: 50, y: 42, a: 'Active layer' }, { x: 55, y: 70, a: 'Permafrost' }, { x: 20, y: 88, a: 'Ice wedge' }],
              extra: [],
              explain: 'Low tundra plants grow in the thin active layer, which thaws each summer. Below is permafrost, ground that stays frozen all year, sometimes containing wedges of solid ice. Pipelines are raised so their heat does not thaw it.' },
            { type: 'mcq', q: 'What is permafrost?', options: ['Ground that stays frozen for at least two years in a row', 'Snow that falls every winter', 'A glacier on a mountain', 'Ice floating on the sea'], answer: 0,
              explain: 'Permafrost is soil or rock that stays at or below 0°C for at least two years. In Alaska some of it has been frozen for thousands of years.' },
            { type: 'mcq', q: 'Why are many buildings and pipelines in Alaska built on stilts or posts?', options: ['So their heat does not melt the permafrost and make the ground sink', 'To keep away bears', 'Because of flooding from the sea', 'To get a better view'], answer: 0,
              explain: 'Heat from a building or warm oil pipe can thaw the ice in the ground, which turns it to mud, so the ground sinks and structures crack.' }
          ],
          adv: [
            { type: 'label', diagram: 'perma', prompt: 'Label the periglacial cross-section. One label does not belong.',
              spots: [{ x: 20, y: 26, a: 'Tundra vegetation' }, { x: 75, y: 14, a: 'Elevated pipeline' }, { x: 50, y: 42, a: 'Active layer' }, { x: 55, y: 70, a: 'Permafrost' }, { x: 20, y: 88, a: 'Ice wedge' }],
              extra: ['Glacier'],
              explain: 'There is no glacier here. Periglacial areas are cold but not ice-covered: the active layer thaws each summer above permanently frozen ground, and ice wedges form as water fills frost cracks and refreezes year after year.' },
            { type: 'number', q: 'About 420 miles of the 800-mile Trans-Alaska Pipeline is raised above ground because of permafrost. What percentage is that? (1 decimal place)', answer: 52.5, tol: 0.2, unit: '%',
              explain: '420 ÷ 800 × 100 = 52.5%. Where the ground is ice-rich, the warm pipe sits on supports fitted with heat pipes that help keep the ground frozen.' },
            { type: 'mcq', q: 'Thawing permafrost releases carbon dioxide and methane from long-frozen plant material. Why do scientists call this a positive feedback?', options: ['The extra greenhouse gases cause more warming, which thaws more permafrost', 'It cools the climate and stops thawing', 'It has no link to climate', 'It makes the active layer thinner'], answer: 0,
              explain: 'Warming → thaw → greenhouse gas release → more warming. Feedbacks like this can amplify climate change.' },
            { type: 'mcq', q: 'USGS scientists project that 16–24% of Alaska’s near-surface permafrost could disappear by 2100. Which impact is most likely?', options: ['Ground subsidence damaging roads, buildings and pipelines, and thermokarst lakes forming', 'More glaciers forming in the lowlands', 'A thicker active layer making roads more stable', 'Sea ice expanding'], answer: 0,
              explain: 'As ice-rich ground thaws it collapses, creating uneven thermokarst terrain and ponds, and damaging infrastructure built on it.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Extreme cold', icon: '🥶',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the coldest month in Fairbanks?', options: ['January', 'July', 'April', 'September'], answer: 0,
              explain: 'January averages about −22°C. The red line drops far below zero in winter.' },
            { type: 'mcq', graph: true, q: 'Which months have average temperatures above 0°C?', options: ['April to September', 'October to March', 'All year', 'None'], answer: 0,
              explain: 'Only from April to September is the line above zero, so the growing season is short.' },
            { type: 'mcq', graph: true, q: 'Fairbanks gets only about 300 mm of precipitation a year. What does the graph show about when it falls?', options: ['Most falls in summer, especially July and August', 'Most falls in January', 'It is the same every month', 'None falls in summer'], answer: 0,
              explain: 'The tallest bars are in July and August. In winter the air is so cold it holds very little moisture, so snowfall is light but stays on the ground for months.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Fairbanks (°C).', answer: 39.4, tol: 0.2, unit: '°C',
              explain: 'Warmest 17.2°C (July) − coldest −22.2°C (January) = 39.4°C, an extreme continental range.' },
            { type: 'mcq', graph: true, q: 'Why is Fairbanks’ temperature range so large?', options: ['It is far inland at a high latitude, with long, dark winters and long summer days', 'It is next to a warm ocean current', 'It is on the Equator', 'It is very high above sea level'], answer: 0,
              explain: 'At 65°N, winter days are only about 3–4 hours long and summer days about 21 hours. Being far from the sea, there is no ocean to moderate temperatures.' },
            { type: 'mcq', q: 'Precipitation in Fairbanks is about 300 mm a year, similar to some semi-arid areas. Why is the ground still often waterlogged in summer?', options: ['Permafrost stops water draining down, and low temperatures mean little evaporation', 'It rains every day', 'Glaciers melt over the town', 'The sea floods inland'], answer: 0,
              explain: 'The frozen layer below is impermeable, so meltwater and rain collect in the active layer, creating bogs and many small lakes.' }
          ]
        }
      },
      {
        id: 'oil', title: 'Oil and the pipeline', icon: '🛢️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Oil is drilled at Prudhoe Bay on the Arctic coast. Why was an 800-mile pipeline built to Valdez in the south?', options: ['The Arctic Ocean is frozen for much of the year, so tankers load oil at Valdez, an ice-free port', 'Valdez is closer to the oil wells', 'Pipelines are cheaper than wells', 'Nobody lives at Prudhoe Bay'], answer: 0,
              explain: 'Sea ice makes shipping from the north coast very difficult. Valdez, on the south coast, stays ice-free all year.' },
            { type: 'sort', q: 'Sort these effects of the oil industry in Alaska.', bins: ['Benefit', 'Problem'],
              items: [['Jobs and money for the state', 0], ['Roads and services built for workers', 0], ['Payments to residents from oil income', 0], ['Risk of oil spills', 1], ['Disturbing caribou migration routes', 1], ['Burning oil adds to climate change', 1]],
              explain: 'Oil has brought wealth and jobs, but it brings risks to wildlife and fragile tundra, and adds to the greenhouse effect that is thawing Alaska.' },
            { type: 'mcq', q: 'In 1989 the tanker Exxon Valdez ran aground and spilled oil into Prince William Sound. What was the main effect?', options: ['Thousands of seabirds, sea otters and fish were killed, and coastlines were polluted', 'The oil helped fish grow', 'There was no effect', 'The sea froze over'], answer: 0,
              explain: 'Oil coats feathers and fur and poisons wildlife. The spill harmed fisheries and wildlife for many years and led to stricter tanker rules.' }
          ],
          adv: [
            { type: 'mcq', q: 'Why were parts of the pipeline buried and others raised above ground?', options: ['It was buried where the ground was thaw-stable rock or gravel, and raised where permafrost was ice-rich', 'It was buried in towns only', 'It was raised only over rivers', 'Engineers chose randomly'], answer: 0,
              explain: 'Ice-rich permafrost would thaw and subside under a warm buried pipe, so those sections were elevated on supports. Stable ground allowed burial.' },
            { type: 'sort', q: 'Classify these impacts of oil development on Alaska’s North Slope.', bins: ['Economic', 'Social', 'Environmental'],
              items: [['State revenue from oil royalties and taxes', 0], ['High-paid but temporary construction jobs', 0], ['Changes to traditional ways of life', 1], ['Population growth in Fairbanks and Anchorage', 1], ['Habitat fragmentation for caribou', 2], ['Risk of spills in a slow-recovering ecosystem', 2]],
              explain: 'Oil transformed Alaska’s economy, but it also brought social change and environmental risk in fragile Arctic ecosystems, where cold slows the breakdown of pollution.' },
            { type: 'mcq', q: 'Why does an oil spill do longer-lasting damage in the Arctic than in the tropics?', options: ['Low temperatures slow evaporation and the bacterial breakdown of oil, and food webs are simple', 'Arctic water is warmer', 'There is no wildlife in the Arctic', 'Ice absorbs oil instantly'], answer: 0,
              explain: 'In cold water oil breaks down slowly, it can get trapped under ice, and Arctic food chains have few species, so losing one affects many others.' }
          ]
        }
      },
      {
        id: 'people', title: 'People of the north', icon: '🎣',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Many Alaska Native communities live by “subsistence”. What does that mean?', options: ['Hunting, fishing and gathering food for the family and community', 'Working in offices in big cities', 'Growing crops to sell abroad', 'Buying all food from supermarkets'], answer: 0,
              explain: 'Fishing for salmon, hunting caribou, moose and seals, and gathering berries remain important for food and culture in rural Alaska.' },
            { type: 'mcq', q: 'Why is there very little farming in most of Alaska?', options: ['The growing season is short and much of the ground is frozen', 'It is too hot', 'There is no rain at all', 'Farming is not allowed'], answer: 0,
              explain: 'Only a few months are warm enough, and permafrost and poor soils limit crops. A few valleys near Anchorage do grow vegetables, helped by very long summer days.' },
            { type: 'mcq', q: 'Some villages on Alaska’s west coast are planning to move. Why?', options: ['Thawing permafrost and coastal erosion are destroying land under homes', 'They want to be nearer shops', 'Volcanoes are erupting under them', 'The sea is freezing permanently'], answer: 0,
              explain: 'With less sea ice to protect the coast from storms, and thawing ground, the shoreline is eroding fast. Some communities have had to relocate.' }
          ],
          adv: [
            { type: 'mcq', q: 'Shrinking sea ice increases coastal erosion in western Alaska. What is the main reason?', options: ['Without sea ice, autumn storm waves reach the coast and erode thawing, ice-rich cliffs', 'Sea ice causes erosion when it melts', 'Rivers stop flowing', 'The land is rising'], answer: 0,
              explain: 'Sea ice used to buffer the coast during autumn storms. Longer open-water seasons and warmer permafrost cliffs mean much faster erosion.' },
            { type: 'mcq', q: 'Relocating a village threatened by erosion is very expensive. Which factor makes it especially difficult in rural Alaska?', options: ['Remote locations with no roads, so everything must be flown or shipped in, plus a short building season', 'Too many roads to build', 'Land is free and easy to use', 'There are no people to move'], answer: 0,
              explain: 'Many villages have no road links, so materials arrive by barge or plane, and construction is limited to a few summer months on unstable ground.' },
            { type: 'mcq', q: 'Which is the best example of adapting to a warming Arctic?', options: ['Using heat pipes (thermosyphons) to keep permafrost frozen under buildings and the pipeline', 'Building heavier houses directly on ice-rich ground', 'Removing all tundra plants', 'Ignoring the changes'], answer: 0,
              explain: 'Thermosyphons draw heat out of the ground in winter, keeping foundations frozen. Raised and adjustable foundations are other adaptations.' }
          ]
        }
      }
    ]
  };
})();
