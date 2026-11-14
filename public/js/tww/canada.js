/* Travel the Wright Way — destination: Canada (the Rockies at Banff and the boreal forest).
 * Climate data: Banff, 1991–2020 averages (monthly mean temperature and precipitation, climatestotravel.com).
 * Forests: about 35–40% of Canada is forest; Canada has about 9% of the world's forests; the boreal zone holds over three-quarters of
 *   Canada's forest (Statistics Canada); only about 0.2% of Canada's boreal forest is harvested each year; Canada holds about 30% of the
 *   world's boreal zone and about 1 in 13 Canadians live in it (Natural Resources Canada).
 */
(function () {
  var TAIGA_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A coniferous tree in the boreal forest with its adaptations">' +
  '<rect width="600" height="420" fill="#dcecf8"/>' +
  // background trees
  '<g fill="#5f8f6a" opacity=".6"><path d="M40 330 L70 200 L100 330 Z"/><path d="M500 330 L530 190 L560 330 Z"/><path d="M110 330 L130 240 L150 330 Z"/><path d="M450 330 L470 230 L490 330 Z"/></g>' +
  // ground with snow
  '<rect y="330" width="600" height="90" fill="#7a5a3a"/><rect y="322" width="600" height="12" fill="#fff"/>' +
  // roots
  '<g stroke="#5b3b22" stroke-width="6" stroke-linecap="round" fill="none"><path d="M300 332 C 260 340, 230 345, 190 350"/><path d="M300 332 C 340 340, 370 346, 410 350"/><path d="M300 334 C 280 346, 262 356, 240 362"/><path d="M300 334 C 320 346, 340 356, 362 360"/></g>' +
  // trunk
  '<rect x="288" y="200" width="24" height="132" fill="#6b4226"/><g stroke="#4a2c17" stroke-width="2"><line x1="292" y1="215" x2="292" y2="325"/><line x1="300" y1="210" x2="300" y2="328"/><line x1="308" y1="218" x2="308" y2="324"/></g>' +
  // conical crown in tiers
  '<g fill="#1f5f3a"><path d="M300 30 L340 110 L260 110 Z"/><path d="M300 70 L360 170 L240 170 Z"/><path d="M300 120 L380 240 L220 240 Z"/></g>' +
  // snow on branches
  '<g fill="#fff"><path d="M300 30 L314 58 L286 58 Z"/><path d="M262 108 L282 100 L300 108 L318 100 L338 108 Z"/><path d="M242 168 L270 158 L300 168 L330 158 L358 168 Z"/><path d="M222 238 L260 226 L300 238 L340 226 L378 238 Z"/></g>' +
  // needles detail and cone
  '<g stroke="#2f7d4a" stroke-width="2"><line x1="190" y1="178" x2="205" y2="168"/><line x1="195" y1="186" x2="210" y2="178"/></g>' +
  '<ellipse cx="380" cy="206" rx="8" ry="14" fill="#8b5a2b" stroke="#5b3b22" stroke-width="2"/>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="420" y1="70" x2="340" y2="90"/><line x1="160" y1="150" x2="250" y2="165"/><line x1="408" y1="262" x2="314" y2="280"/><line x1="200" y1="370" x2="230" y2="352"/><line x1="420" y1="180" x2="388" y2="200"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.canada = {
    id: 'canada',
    name: 'Canada',
    short: 'Canada',
    country: 'Canada',
    gateway: 'Calgary',
    lonlat: [-116, 51.4],
    locator: { box: [-125, -106, 47, 58], places: [['Banff', -115.57, 51.18, 'r'], ['Lake Louise', -116.18, 51.43, 'l'], ['Calgary', -114.07, 51.05, 'r'], ['Vancouver', -123.12, 49.28, 'r'], ['Edmonton', -113.49, 53.55, 'r'], ['Rocky Mountains', -119.5, 53.7, 'a'], ['Prairies', -109.5, 50.2, 'a']] },
    stamp: { colour: '#b42318', icon: '🍁' },
    transport: { name: 'canoe', verb: 'Paddle', emoji: '🛶' },
    scene: 'river',
    photo: { file: 'Moraine Lake-Banff NP.JPG', alt: 'Turquoise Moraine Lake surrounded by coniferous forest and steep rocky peaks in Banff National Park', author: 'Tobias Alt', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'You land in Calgary and head west into the Rocky Mountains. Grab a paddle: you are canoeing through Banff National Park, past turquoise lakes and endless forests of spruce and pine.',
      adv: 'From Calgary you head into Banff National Park. This expedition covers boreal forest adaptations, fold mountains and glaciation in the Rockies, a cold continental mountain climate, forestry and resources, and managing tourism in a national park.'
    },
    facts: ['Canada has about 9% of the world’s forests.', 'Banff, founded in 1885, is Canada’s oldest national park.', 'Moraine Lake gets its turquoise colour from fine “rock flour” ground up by glaciers.'],
    climate: {
      place: 'Banff, Canada', source: '1991–2020 averages', lat: '51°N',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [-8.5, -6.6, -2.2, 2.8, 7.4, 11.1, 14.6, 14.0, 9.4, 3.4, -3.8, -9.0],
      rain: [19, 19, 29, 39, 50, 73, 47, 47, 45, 36, 28, 22]
    },
    diagrams: { taiga: TAIGA_SVG },
    stations: [
      {
        id: 'taiga', title: 'The boreal forest', icon: '🌲',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'taiga', prompt: 'Label how this conifer is adapted to long, snowy winters.',
              spots: [{ x: 82, y: 15, a: 'Cone shape' }, { x: 15, y: 35, a: 'Needle leaves' }, { x: 80, y: 62, a: 'Thick bark' }, { x: 25, y: 88, a: 'Shallow roots' }, { x: 82, y: 42, a: 'Seed cones' }],
              extra: [],
              explain: 'A cone shape lets snow slide off. Thin, waxy needles lose little water and survive frost. Thick bark protects against cold and fire. Shallow roots spread in the thin soil above frozen ground, and seeds grow in cones.' },
            { type: 'mcq', q: 'Why do most boreal trees keep their needles all year (evergreen)?', options: ['They can make food as soon as it is warm, without growing new leaves', 'Their needles stay on because they are frozen solidly in place all through the winter', 'The needles keep animals such as moose away', 'They live where there are no seasons'], answer: 0,
              explain: 'The growing season is short. Keeping needles means trees can photosynthesise straight away in spring rather than spending energy on new leaves.' },
            { type: 'mcq', q: 'Most of Canada’s forest is boreal forest (taiga). Where is it found?', options: ['Across the north, south of the Arctic tundra', 'Only along the Pacific coast of British Columbia', 'In the deserts of the far south', 'On the Arctic islands'], answer: 0,
              explain: 'The boreal forest is a huge belt across Canada between the tundra to the north and grasslands and mixed forest to the south. It holds over three-quarters of Canada’s forest.' }
          ],
          adv: [
            { type: 'label', diagram: 'taiga', prompt: 'Label the adaptations. One label does not belong.',
              spots: [{ x: 82, y: 15, a: 'Conical shape' }, { x: 15, y: 35, a: 'Waxy needles' }, { x: 80, y: 62, a: 'Thick bark' }, { x: 25, y: 88, a: 'Shallow roots' }, { x: 82, y: 42, a: 'Seed cones' }],
              extra: ['Buttress roots'],
              explain: 'Buttress roots belong to tall rainforest trees on shallow tropical soils. Conifers have shallow, spreading roots because soils are thin, cold and often frozen below.' },
            { type: 'mcq', q: 'Boreal soils are often podzols, acidic and low in nutrients. Why?', options: ['Needle litter decays slowly in the cold, and leaching washes nutrients down', 'Rapid decomposition releases the nutrients too quickly for any of the plants to use them', 'Volcanic ash covers the soil', 'Rainforest plants take all the nutrients'], answer: 0,
              explain: 'Cold temperatures slow decomposition, conifer needles make the soil acidic, and water percolating down leaches minerals, leaving a grey, nutrient-poor layer.' },
            { type: 'mcq', q: 'Natural Resources Canada says forest fires and insect outbreaks are part of a healthy boreal forest. Why?', options: ['They clear old trees and let new ones grow; some cones open only after fire', 'They permanently replace the forest with open grassland, which then stores more carbon', 'They stop the forest storing carbon for ever', 'They only affect tropical forests'], answer: 0,
              explain: 'Disturbance renews the forest. Jack pine, for example, has cones sealed with resin that open in the heat of a fire.' }
          ]
        }
      },
      {
        id: 'rockies', title: 'The Rocky Mountains', icon: '🏔️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'How were the Rocky Mountains formed?', options: ['Rocks were squeezed and folded as plates pushed together', 'A huge chain of volcanoes erupted along the edge of the continent', 'Rivers piled up layers of mud', 'Glaciers built them up'], answer: 0,
              explain: 'The Rockies are fold mountains. Compression from plate movements crumpled layers of rock upwards over millions of years.' },
            { type: 'mcq', q: 'Lakes like Moraine Lake are bright turquoise. Why?', options: ['Fine “rock flour” from glaciers floats in the water and reflects light', 'The water is warm enough in summer for bright blue-green algae to grow across the lake', 'It is dyed by the park to attract tourists', 'Coral grows on the bottom of the lake'], answer: 0,
              explain: 'Meltwater carries tiny rock particles into the lake. They stay suspended and scatter blue-green light.' },
            { type: 'sort', q: 'Sort these mountain landforms by what made them.', bins: ['Made by glaciers', 'Made by folding'],
              items: [['U-shaped valley', 0], ['Corrie lake', 0], ['Moraine', 0], ['Anticline (upfold)', 1], ['Syncline (downfold)', 1], ['Tilted rock layers', 1]],
              explain: 'Plate collision folded the rocks; later, ice ages carved valleys, corries and moraines into the mountains.' }
          ],
          adv: [
            { type: 'mcq', q: 'Which process formed the Canadian Rockies?', options: ['Compression and thrust faulting as terranes joined North America', 'Hotspot volcanism as the plate moved slowly over a deep mantle plume', 'Divergence at a mid-ocean ridge', 'Erosion by rivers alone'], answer: 0,
              explain: 'Collisions of island arcs and microcontinents with the North American plate compressed sedimentary rocks, stacking them by folding and thrust faulting.' },
            { type: 'mcq', q: 'Moraine Lake is dammed by a pile of rock. Which landform process is most likely?', options: ['Glacial deposition or a rockfall', 'A lava flow from a nearby volcano', 'Coral reef growth', 'Wind-blown sand dunes'], answer: 0,
              explain: 'Debris left by glaciers or rockfalls from steep, glacially oversteepened valley sides can dam valleys and create lakes.' },
            { type: 'mcq', q: 'Glaciers in the Rockies are retreating. What is a key downstream impact?', options: ['Lower late-summer river flow once meltwater declines', 'Much more snow falling each winter on nearby cities such as Calgary', 'Lake levels rising for ever', 'No effect on the rivers'], answer: 0,
              explain: 'Glaciers act as water towers, releasing meltwater in hot, dry late summer. As they shrink, that buffer is lost.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Mountain climate', icon: '❄️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the warmest month in Banff?', options: ['July', 'January', 'October', 'March'], answer: 0,
              explain: 'July is warmest at about 14.6°C, still cool because Banff is high in the mountains (about 1,400 m).' },
            { type: 'mcq', graph: true, q: 'How many months have average temperatures below 0°C?', options: ['5', '2', '9', '0'], answer: 0,
              explain: 'November, December, January, February and March are below freezing.' },
            { type: 'mcq', graph: true, q: 'Which month has the most precipitation?', options: ['June', 'January', 'November', 'March'], answer: 0,
              explain: 'June has the tallest bar (about 73 mm). Summer storms bring more rain than winter snow.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Banff (°C).', answer: 23.6, tol: 0.1, unit: '°C',
              explain: 'Warmest 14.6°C (July) − coldest −9.0°C (December) = 23.6°C.' },
            { type: 'mcq', graph: true, q: 'Banff is much drier (about 455 mm a year) than the Pacific coast of British Columbia. Why?', options: ['Pacific air drops its moisture on the western ranges, leaving a rain shadow', 'Banff is much closer to the sea, so the air there is cooler and holds less water vapour', 'The Rockies are too high for clouds', 'Banff lies in the tropics'], answer: 0,
              explain: 'Westerly winds rise over several mountain ranges, cooling and losing moisture. By the time they reach Banff, much of the moisture has fallen.' },
            { type: 'mcq', q: 'Calgary sometimes has warm, dry “chinook” winds in winter that melt snow quickly. Which process causes them?', options: ['Air descending the Rockies warms by compression (a föhn)', 'Cold, dry air blowing south from the Arctic across the Prairies', 'Warm ocean currents on the east coast', 'Volcanic heat'], answer: 0,
              explain: 'After losing moisture on the windward side, air warms at the dry adiabatic rate as it descends, raising temperatures by many degrees in hours.' }
          ]
        }
      },
      {
        id: 'forestry', title: 'Forests and resources', icon: '🪓',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Only about 0.2% of Canada’s boreal forest is harvested each year. What happens after trees are cut?', options: ['By law, harvested public forest must be regrown', 'The land is always turned into wheat and canola farms afterwards', 'The land becomes desert', 'Nothing ever grows back'], answer: 0,
              explain: 'Sustainable forestry means cutting no faster than the forest regrows, and replanting or letting trees regenerate.' },
            { type: 'sort', q: 'Sort these uses of Canada’s forests.', bins: ['Timber and products', 'Other benefits'],
              items: [['Wood for houses', 0], ['Paper and cardboard', 0], ['Wood pellets for fuel', 0], ['Storing carbon', 1], ['Habitat for moose and bears', 1], ['Tourism and recreation', 1]],
              explain: 'Forests provide timber and paper, but also wildlife habitat, carbon storage, clean water and places to visit.' },
            { type: 'mcq', q: 'Which crop is most widely grown on the Canadian Prairies, east of the Rockies?', options: ['Wheat (and canola)', 'Rice and sugar cane', 'Bananas', 'Coffee'], answer: 0,
              explain: 'The flat Prairies of Alberta, Saskatchewan and Manitoba are one of the world’s great grain-growing regions.' }
          ],
          adv: [
            { type: 'mcq', q: 'Which practice best supports sustainable forest management?', options: ['Harvesting below the growth rate, replanting and protecting old growth', 'Clear-cutting all old-growth forest first, then replanting with one fast-growing species', 'Never planting new trees', 'Harvesting faster than the forest regrows'], answer: 0,
              explain: 'Sustainability balances economic use with long-term forest health, biodiversity and the rights of Indigenous communities.' },
            { type: 'mcq', q: 'Alberta’s oil sands, north of Banff, are a major resource. Which is a key environmental concern?', options: ['Clearing forest and peatland, high water use and emissions', 'They make the boreal forest grow faster because of the extra warmth', 'They reduce Canada’s emissions', 'They have no impact'], answer: 0,
              explain: 'Surface mining removes forest and wetlands, and extracting oil from sand uses large amounts of energy and water.' },
            { type: 'mcq', q: 'Wildfires in Canada’s boreal forest have become larger in recent years. Which is the best explanation?', options: ['Warmer, drier summers and longer fire seasons', 'More summer rain helping vegetation to grow thicker', 'Fewer lightning strikes', 'Colder winters'], answer: 0,
              explain: 'Hotter, drier conditions dry out fuels; longer seasons give more time for fires to start and spread.' }
          ]
        }
      },
      {
        id: 'park', title: 'People and the national park', icon: '🦌',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Banff became Canada’s first national park in 1885. What is the main purpose of a national park?', options: ['To protect nature while letting people enjoy it', 'To keep all visitors out so that wildlife is never disturbed', 'To grow crops', 'To mine for oil'], answer: 0,
              explain: 'National parks conserve wildlife and landscapes, while allowing visitors to enjoy them in ways that do not damage them.' },
            { type: 'mcq', q: 'Banff built bridges covered in plants over the Trans-Canada Highway. Why?', options: ['So animals can cross safely without being hit by cars', 'To give tourists better places to stop and take photographs of the mountains', 'To grow vegetables', 'To slow down traffic'], answer: 0,
              explain: 'Wildlife overpasses and fencing have greatly cut collisions between vehicles and animals.' },
            { type: 'mcq', q: 'Who were the first people to live in the Rocky Mountain region?', options: ['First Nations peoples, for thousands of years', 'French fur traders, who arrived from Europe in the 1600s', 'European settlers in 1885', 'Nobody has ever lived there'], answer: 0,
              explain: 'First Nations such as the Stoney Nakoda, Blackfoot and Ktunaxa have lived in and used these lands for thousands of years.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these tourism impacts in Banff National Park.', bins: ['Positive', 'Negative'],
              items: [['Jobs in hotels, guiding and ski resorts', 0], ['Visitor fees fund conservation', 0], ['Raises awareness of conservation', 0], ['Traffic congestion and parking pressure', 1], ['Wildlife disturbance and road deaths', 1], ['Housing costs too high for local workers', 1]],
              explain: 'Tourism funds conservation and jobs but puts pressure on wildlife, infrastructure and affordable housing in park towns.' },
            { type: 'mcq', q: 'Which is the best example of managing visitor pressure at popular sites like Moraine Lake?', options: ['Restricting private cars and running shuttle buses', 'Building a much bigger car park right beside the lakeshore', 'Removing all of the trails', 'Doubling visitor numbers'], answer: 0,
              explain: 'Shuttles reduce congestion and parking damage while keeping access for visitors.' },
            { type: 'mcq', q: 'Why is conservation in national parks increasingly done in partnership with Indigenous communities?', options: ['Indigenous knowledge and land rights improve how ecosystems are managed', 'Indigenous people no longer use the land, so it is easier to protect if they help', 'It is cheaper to exclude them', 'Parks have no wildlife'], answer: 0,
              explain: 'Traditional ecological knowledge, for example of fire and wildlife, adds to science, and recognises Indigenous rights in their traditional territories.' }
          ]
        }
      }
    ]
  };
})();
