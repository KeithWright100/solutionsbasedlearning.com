/* Travel the Wright Way — destination: Amazon rainforest.
 * Tasks have two tiers: ks3 and adv (IGCSE/IB). Edit questions here; the engine is /js/sbl-tww-engine.js.
 * Climate data: Manaus, INMET 1991–2020 climate normals.
 */
(function () {
  var LAYERS_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of the rainforest showing its layers">' +
  '<defs><linearGradient id="lsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe6ff"/><stop offset="1" stop-color="#e9f7ff"/></linearGradient></defs>' +
  '<rect width="600" height="420" fill="url(#lsky)"/>' +
  // emergent trunks + crowns
  '<g class="sway"><rect x="96" y="80" width="10" height="310" fill="#6b4a2f"/><ellipse cx="101" cy="72" rx="48" ry="26" fill="#2f7d32"/><ellipse cx="85" cy="62" rx="26" ry="16" fill="#3c9a40"/></g>' +
  '<g class="sway s2"><rect x="318" y="58" width="11" height="332" fill="#6b4a2f"/><ellipse cx="323" cy="52" rx="54" ry="27" fill="#2f7d32"/><ellipse cx="342" cy="44" rx="26" ry="15" fill="#3c9a40"/></g>' +
  // canopy trunks
  '<g fill="#7a5638"><rect x="40" y="190" width="7" height="200"/><rect x="170" y="190" width="8" height="200"/><rect x="250" y="195" width="7" height="195"/><rect x="390" y="190" width="8" height="200"/></g>' +
  // canopy band
  '<g class="sway s3" fill="#1f6b2a"><ellipse cx="40" cy="178" rx="50" ry="30"/><ellipse cx="120" cy="170" rx="52" ry="32"/><ellipse cx="200" cy="176" rx="50" ry="30"/><ellipse cx="275" cy="168" rx="50" ry="32"/><ellipse cx="350" cy="176" rx="50" ry="30"/><ellipse cx="415" cy="172" rx="44" ry="30"/></g>' +
  '<g fill="#2a8a36" opacity=".8"><ellipse cx="80" cy="160" rx="30" ry="14"/><ellipse cx="235" cy="156" rx="30" ry="14"/><ellipse cx="385" cy="158" rx="28" ry="13"/></g>' +
  // under-canopy small trees
  '<g fill="#7a5638"><rect x="140" y="285" width="5" height="105"/><rect x="290" y="290" width="5" height="100"/><rect x="420" y="288" width="5" height="102"/></g>' +
  '<g fill="#3f8f3a"><ellipse cx="142" cy="282" rx="30" ry="18"/><ellipse cx="292" cy="286" rx="32" ry="17"/><ellipse cx="422" cy="284" rx="28" ry="17"/><ellipse cx="60" cy="290" rx="26" ry="15"/></g>' +
  // shrub layer
  '<g fill="#5aa64a"><ellipse cx="30" cy="368" rx="26" ry="14"/><ellipse cx="110" cy="364" rx="22" ry="15"/><ellipse cx="200" cy="368" rx="28" ry="13"/><ellipse cx="270" cy="366" rx="22" ry="13"/><ellipse cx="360" cy="365" rx="26" ry="15"/><ellipse cx="440" cy="368" rx="20" ry="12"/></g>' +
  // forest floor
  '<rect y="388" width="460" height="32" fill="#5b3b22"/><g fill="#8a5a2b"><ellipse cx="60" cy="394" rx="12" ry="3"/><ellipse cx="180" cy="398" rx="14" ry="3"/><ellipse cx="300" cy="393" rx="11" ry="3"/><ellipse cx="410" cy="397" rx="13" ry="3"/></g>' +
  // light rays reaching down (thin)
  // leader lines to label boxes
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="378" y1="52" x2="470" y2="60"/><line x1="460" y1="172" x2="470" y2="172"/><line x1="452" y1="284" x2="470" y2="278"/><line x1="460" y1="366" x2="470" y2="352"/><line x1="440" y1="404" x2="470" y2="404"/></g>' +
  '</svg>';

  var ADAPT_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rainforest tree showing its adaptations">' +
  '<rect width="600" height="420" fill="#e6f6ea"/>' +
  '<rect y="392" width="600" height="28" fill="#5b3b22"/>' +
  // crown
  '<g class="sway"><ellipse cx="300" cy="70" rx="150" ry="48" fill="#1f6b2a"/><ellipse cx="240" cy="58" rx="70" ry="28" fill="#2a8a36"/><ellipse cx="370" cy="62" rx="60" ry="24" fill="#2a8a36"/></g>' +
  // trunk (tall, thin, smooth)
  '<path d="M286 100 L314 100 L318 330 L282 330 Z" fill="#8a6a4a"/>' +
  '<path d="M300 100 L300 330" stroke="#a5866a" stroke-width="2"/>' +
  // branch with epiphyte
  '<path d="M312 150 Q360 140 410 120" stroke="#8a6a4a" stroke-width="9" fill="none" stroke-linecap="round"/>' +
  '<g transform="translate(392 112)"><path d="M0 0 L-14 -26 M0 0 L-4 -30 M0 0 L8 -28 M0 0 L18 -20 M0 0 L-20 -14" stroke="#c0392b" stroke-width="5" stroke-linecap="round"/><ellipse cx="0" cy="2" rx="10" ry="6" fill="#7a4a2a"/></g>' +
  // buttress roots
  '<path d="M282 300 Q250 360 200 392 L240 392 Q270 360 286 330 Z" fill="#7a5638"/>' +
  '<path d="M318 300 Q350 360 405 392 L362 392 Q332 360 314 330 Z" fill="#7a5638"/>' +
  '<path d="M292 320 Q285 365 270 392 L300 392 Q300 360 300 330 Z" fill="#6b4a2f"/>' +
  // liana climbing
  '<path class="liana" d="M180 392 Q200 330 260 300 Q330 270 300 230 Q270 190 320 160 Q360 135 330 105" stroke="#4a7a2a" stroke-width="5" fill="none" stroke-linecap="round"/>' +
  // drip-tip leaf callout
  '<circle cx="110" cy="150" r="58" fill="#fff" stroke="#11243b" stroke-width="2"/>' +
  '<path d="M80 120 Q120 110 135 150 Q138 175 118 205 Q100 175 82 150 Q74 135 80 120 Z" fill="#2a8a36"/>' +
  '<path d="M84 124 Q110 150 118 205" stroke="#1f6b2a" stroke-width="2" fill="none"/>' +
  '<path class="drip" d="M118 210 q-4 7 0 10 q4 -3 0 -10 Z" fill="#3fa3dc"/>' +
  '<line x1="168" y1="150" x2="230" y2="90" stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"/>' +
  '</svg>';

  var climate = {
    place: 'Manaus, Brazil', source: 'INMET climate normals 1991–2020', lat: '3°S',
    months: ['J','F','M','A','M','J','J','A','S','O','N','D'],
    monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    temp: [27.1,27.1,27.2,27.1,27.2,27.4,27.6,28.2,28.5,28.5,28.1,27.4],
    rain: [305,297,320,330,234,117,67,56,79,114,188,254]
  };

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.amazon = {
    id: 'amazon',
    name: 'Amazon rainforest',
    the: true,
    country: 'Brazil',
    gateway: 'Manaus',
    lonlat: [-60.0, -3.1],
    locator: { box: [-76, -45, -13, 5], rivers: [[[-73.25, -3.75], [-69.94, -4.25], [-64.7, -3.35], [-60.0, -3.15], [-55.5, -1.9], [-54.7, -2.45], [-52.6, -1.5], [-50.0, -0.2]]], places: [['Manaus', -60.02, -3.12, 'b'], ['Belém', -48.5, -1.45, 'l'], ['Amazon River', -57.5, -1.0, 'a'], ['BRAZIL', -55, -9, 'a'], ['Atlantic Ocean', -50.5, 4.0, 'a']] },
    stamp: { colour: '#1f7a3a', icon: '🦜' },
    transport: { name: 'canoe', verb: 'Paddle', emoji: '🛶' },
    scene: 'river',
    photo: { file: 'Aerial view of the Amazon Rainforest.jpg', alt: 'The Solimões River winding through the Amazon rainforest, seen from a plane', author: 'lubasi', licence: 'CC BY-SA 2.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/' },
    intro: {
      ks3: 'You land in Manaus, a city of over two million people in the middle of the rainforest. From here you travel by canoe along the River Amazon. At each stop, complete the challenges to paddle on to the next one.',
      adv: 'You land in Manaus, about 3° south of the Equator. Your canoe expedition follows the River Amazon. Each station tests the processes behind the biome: structure, adaptation, climate, nutrient cycling and human pressure.'
    },
    facts: ['The Amazon is the largest tropical rainforest on Earth.', 'It spreads across nine countries, but most of it is in Brazil.', 'It is home to roughly one in ten of all known species.'],
    climate: climate,
    diagrams: { layers: LAYERS_SVG, adapt: ADAPT_SVG },
    stations: [
      {
        id: 'layers', title: 'Layers of the forest', icon: '🌳',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'layers', prompt: 'Label the five layers of the rainforest. Tap a label, then tap the box it belongs in.',
              spots: [{ x: 87, y: 14, a: 'Emergent layer' }, { x: 87, y: 41, a: 'Canopy' }, { x: 87, y: 66, a: 'Under-canopy' }, { x: 87, y: 84, a: 'Shrub layer' }, { x: 87, y: 96, a: 'Forest floor' }],
              extra: [],
              explain: 'From the top: emergent trees poke out above the canopy; the canopy is a thick roof of leaves; the under-canopy has younger trees; the shrub layer is close to the ground; the forest floor is dark and covered in leaf litter.' },
            { type: 'mcq', q: 'Which layer gets the least sunlight?', options: ['Forest floor', 'Canopy', 'Emergent layer', 'Under-canopy'], answer: 0,
              explain: 'The canopy blocks most of the light, so only about 2% of sunlight reaches the forest floor.' },
            { type: 'mcq', q: 'Why is the canopy home to so many animals?', options: ['It has lots of fruit, flowers and leaves, and sunlight', 'It is the coolest and darkest layer, so animals can hide from the hot sun', 'It is closest to the river', 'There are no predators up there'], answer: 0,
              explain: 'The canopy gets lots of sunlight, so it is full of leaves, fruit and flowers: plenty of food for animals.' }
          ],
          adv: [
            { type: 'label', diagram: 'layers', prompt: 'Label the vertical structure of the rainforest. Two of the labels do not belong.',
              spots: [{ x: 87, y: 14, a: 'Emergent layer' }, { x: 87, y: 41, a: 'Canopy' }, { x: 87, y: 66, a: 'Under-canopy' }, { x: 87, y: 84, a: 'Shrub layer' }, { x: 87, y: 96, a: 'Forest floor' }],
              extra: ['Permafrost', 'Ground flora of mosses and lichens'],
              explain: 'The rainforest has five layers. Permafrost and moss-and-lichen ground cover belong to the tundra, not the tropics.' },
            { type: 'mcq', q: 'Emergent trees can reach 50 m or more. Which is the best explanation of why trees grow so tall here?', options: ['Intense competition for sunlight', 'Strong winds push them upwards', 'The soils are very deep and fertile', 'There is a long dry season'], answer: 0,
              explain: 'With water and warmth available all year, light is the limiting factor, so trees compete by growing tall to reach it.' },
            { type: 'mcq', q: 'Which statement about light in the rainforest is correct?', options: ['Only about 2% of sunlight reaches the floor, so the shrub layer is sparse', 'Light increases towards the forest floor because the leaves reflect it downwards', 'The under-canopy gets more light than the canopy', 'Light is the same at every level'], answer: 0,
              explain: 'The dense canopy intercepts most incoming light, so the floor is dim and plant growth there is limited.' }
          ]
        }
      },
      {
        id: 'adapt', title: 'Plant adaptations', icon: '🌿',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'adapt', prompt: 'Label the adaptations on this rainforest tree.',
              spots: [{ x: 50, y: 14, a: 'Drip-tip leaves' }, { x: 84, y: 22, a: 'Epiphytes' }, { x: 84, y: 58, a: 'Lianas' }, { x: 16, y: 86, a: 'Buttress roots' }],
              extra: [],
              explain: 'Drip tips let rain run off leaves; epiphytes grow on branches to reach light; lianas are woody vines rooted in the ground that climb to the canopy; buttress roots support tall trees in shallow soil.' },
            { type: 'mcq', q: 'Why do many rainforest leaves have drip tips?', options: ['So rain runs off quickly', 'To catch insects', 'To store water for the dry season', 'To keep the leaf warm'], answer: 0,
              explain: 'Drip tips let heavy rain run off quickly, so the leaf dries and mould and algae cannot grow on it.' },
            { type: 'mcq', q: 'What do buttress roots do?', options: ['Support very tall trees in shallow soil', 'Store water deep underground for the dry season', 'Catch falling leaves', 'Climb up other trees'], answer: 0,
              explain: 'Rainforest soils are shallow, so roots spread out wide. Buttress roots act like giant props to stop tall trees falling over.' }
          ],
          adv: [
            { type: 'label', diagram: 'adapt', prompt: 'Label the adaptations on this rainforest tree. One label does not belong.',
              spots: [{ x: 50, y: 14, a: 'Drip-tip leaves' }, { x: 84, y: 22, a: 'Epiphytes' }, { x: 84, y: 58, a: 'Lianas' }, { x: 16, y: 86, a: 'Buttress roots' }, { x: 63, y: 44, a: 'Thin, smooth bark' }],
              extra: ['Thick, fire-resistant bark'],
              explain: 'Thick fire-resistant bark is a savanna adaptation. Rainforest trees have thin, smooth bark because they do not need protection from cold or fire, and smooth bark stops other plants from climbing them.' },
            { type: 'mcq', q: 'Epiphytes such as bromeliads grow on branches high in the trees. How do they get water and nutrients?', options: ['From rain, humid air and debris around their roots', 'By taking them from the tree they grow on, like a parasite', 'Through roots that reach the forest floor', 'From the river below'], answer: 0,
              explain: 'Epiphytes are not parasites. They take water and nutrients from rain, the humid air and rotting debris that gathers in their leaves and roots.' },
            { type: 'mcq', q: 'Lianas are rooted in the forest floor. What is the advantage of climbing the trunks of trees?', options: ['They reach sunlight without growing a thick trunk', 'They avoid the floods that cover the forest floor for half of every year', 'They get nutrients from the bark', 'Animals cannot reach them'], answer: 0,
              explain: 'Lianas use trees for support, so they put energy into growing upwards to the light instead of building a strong trunk.' },
            { type: 'mcq', q: 'Many plants in the dim under-canopy have very large leaves. Why?', options: ['To capture as much of the limited light as possible', 'To lose water quickly', 'To protect them from heavy rain', 'To scare away herbivores such as monkeys and sloths'], answer: 0,
              explain: 'Large leaves give a bigger surface area to catch what little light gets through the canopy.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Climate', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Look at the climate graph for Manaus. Which is the wettest month?', options: ['April', 'August', 'October', 'June'], answer: 0,
              explain: 'April has the tallest bar: about 330 mm of rain.' },
            { type: 'mcq', graph: true, q: 'Which is the driest month?', options: ['August', 'January', 'April', 'December'], answer: 0,
              explain: 'August has the shortest bar: about 56 mm. Even the driest month still gets some rain.' },
            { type: 'mcq', graph: true, q: 'Describe the temperature in Manaus during the year.', options: ['Hot all year, about 27–28°C', 'Cold in winter and hot in summer', 'Below 20°C most of the year', 'Very changeable, from 10°C to 40°C'], answer: 0,
              explain: 'The red line is almost flat: between 27.1°C and 28.5°C all year. Near the Equator the sun is high in the sky every month.' },
            { type: 'mcq', q: 'Why does it rain on most afternoons in the rainforest?', options: ['Hot sun heats the ground; moist air rises, cools and forms clouds', 'Cold winds blow down from the Andes every afternoon and meet the warm air', 'Rain blows in from the sea', 'The trees shake their leaves to make clouds'], answer: 0,
              explain: 'This is convectional rainfall: the sun heats the ground, moist air rises and cools, water vapour condenses into tall clouds, and heavy rain falls in the afternoon.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Manaus (°C).', answer: 1.4, tol: 0.15, unit: '°C',
              explain: 'Range = highest monthly mean − lowest = 28.5 − 27.1 = 1.4°C. A tiny range is typical of equatorial climates.' },
            { type: 'mcq', graph: true, q: 'Roughly what is the total annual rainfall in Manaus?', options: ['About 2,400 mm', 'About 600 mm', 'About 1,200 mm', 'About 5,000 mm'], answer: 0,
              explain: 'Adding the 12 bars gives about 2,360 mm a year. Anything over 2,000 mm is typical for a tropical rainforest.' },
            { type: 'mcq', graph: true, q: 'Manaus has a drier season from about June to October. Which explanation is best?', options: ['The ITCZ moves north of Manaus, so there is less convection', 'Temperatures fall sharply in winter, so evaporation from the forest stops', 'The Amazon River dries up', 'Trade winds bring cold air from Antarctica'], answer: 0,
              explain: 'The ITCZ (the belt of low pressure and rising air) follows the overhead sun. When it shifts north in the middle of the year, Manaus gets less convectional rain.' },
            { type: 'mcq', q: 'Up to half of the rain in the Amazon is recycled by the forest itself. What does this mean?', options: ['Water transpired by trees forms clouds that rain again', 'Rainwater is collected and piped back into the river by the forest’s roots', 'Rain only falls on cleared land', 'The forest stops rain reaching the ground'], answer: 0,
              explain: 'Trees release huge amounts of water vapour by transpiration, which forms new clouds. Cutting down the forest breaks this cycle and can make the region drier.' }
          ]
        }
      },
      {
        id: 'soils', title: 'Soils and nutrients', icon: '🪱',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Rainforest plants grow so well. Are the soils fertile?', options: ['No, they are thin and poor in nutrients', 'Yes, they are thick and full of nutrients', 'There is no soil in the rainforest', 'Yes, because there is a layer of ice underneath'], answer: 0,
              explain: 'Rainforest soils are surprisingly poor. Most of the nutrients are in the plants themselves, not the soil.' },
            { type: 'mcq', q: 'Heavy rain washes nutrients down through the soil, out of reach of roots. What is this called?', options: ['Leaching', 'Erosion', 'Evaporation', 'Weathering'], answer: 0,
              explain: 'Leaching: heavy rain dissolves nutrients and carries them deep into the ground.' },
            { type: 'mcq', q: 'Why do dead leaves rot so quickly on the forest floor?', options: ['It is hot and wet, ideal for decomposers', 'Animals eat them all as soon as they land on the forest floor', 'The sun burns them up', 'It is too cold for leaves to last'], answer: 0,
              explain: 'Warm, damp conditions let fungi, bacteria and insects break leaves down in weeks, releasing nutrients back to the plants.' },
            { type: 'mcq', q: 'What happens to the soil if the trees are cut down?', options: ['Rain washes nutrients away, so it soon becomes infertile', 'It becomes more fertile for many years because the ash adds lots of nutrients', 'Nothing changes', 'It turns to sand dunes'], answer: 0,
              explain: 'Without trees there are no new dead leaves to add nutrients and nothing to protect the soil, so heavy rain leaches and erodes it. Farmland may only last a few years.' }
          ],
          adv: [
            { type: 'mcq', q: 'In a nutrient cycle diagram for the tropical rainforest, which store is the largest?', options: ['Biomass', 'Litter', 'Soil', 'All three are equal'], answer: 0,
              explain: 'Most nutrients are held in the living biomass. The litter store is small because decomposition is so fast, and the soil store is small because of leaching.' },
            { type: 'mcq', q: 'Why is the litter store so small?', options: ['Hot, humid conditions rot leaves in weeks', 'Very few leaves fall from evergreen rainforest trees', 'Animals carry the leaves away', 'Leaves are washed into rivers'], answer: 0,
              explain: 'Leaves fall all year, but decomposers break them down very quickly in the heat and humidity.' },
            { type: 'mcq', q: 'Rainforest soils are often red. What causes this colour?', options: ['Iron and aluminium oxides left after intense leaching', 'Red volcanic ash from the Andes blown east by strong winds', 'Clay washed in by floods', 'Red-coloured leaf litter'], answer: 0,
              explain: 'Intense weathering and leaching remove most minerals but leave iron and aluminium oxides behind, giving latosols their red colour.' },
            { type: 'mcq', q: 'Which explains why cleared rainforest land often loses fertility within a few years?', options: ['The biomass and litter are removed, and bare soil is leached', 'Crops add far too many nutrients to the soil, which then poisons the next crop', 'The climate becomes colder', 'Rivers flood the land every year'], answer: 0,
              explain: 'Clearing the forest removes the main nutrient store and stops the cycle, so heavy rain soon leaches and erodes the thin soil.' }
          ]
        }
      },
      {
        id: 'people', title: 'People and the forest', icon: '👩‍🌾',
        tasks: {
          ks3: [
            { type: 'sort', q: 'Sort these activities: are they sustainable or unsustainable?', bins: ['Sustainable', 'Unsustainable'],
              items: [['Cattle ranching on cleared land', 1], ['Ecotourism with local guides', 0], ['Large soya farms', 1], ['Collecting Brazil nuts from the forest', 0], ['Illegal gold mining', 1], ['Growing crops under the trees (agroforestry)', 0]],
              explain: 'Sustainable uses keep the forest standing and can carry on for ever. Ranching, soya farming and mining clear or pollute the forest.' },
            { type: 'mcq', q: 'What is the biggest cause of deforestation in the Brazilian Amazon?', options: ['Cattle ranching', 'Building houses', 'Tourism', 'Fishing'], answer: 0,
              explain: 'Most cleared land in the Brazilian Amazon is turned into pasture for cattle.' },
            { type: 'mcq', q: 'Why does cutting down the rainforest matter for the whole world?', options: ['Trees store carbon; clearing them releases CO₂', 'It makes the oceans saltier as more river water flows into the Atlantic', 'It causes earthquakes', 'It stops the Earth spinning'], answer: 0,
              explain: 'The Amazon stores a huge amount of carbon. When trees are burned or rot, carbon dioxide is released, adding to global warming.' }
          ],
          adv: [
            { type: 'sort', q: 'Sort these into causes of deforestation and strategies for sustainable management.', bins: ['Sustainable management', 'Cause of deforestation'],
              items: [['Cattle ranching', 1], ['Extractive reserves (e.g. rubber tapping)', 0], ['Hydroelectric dams flooding forest', 1], ['Selective logging with replanting', 0], ['New roads opening up the forest', 1], ['Debt-for-nature swaps', 0], ['Commercial soya farming', 1], ['Ecotourism', 0]],
              explain: 'Roads, dams, ranching and soya clear or flood forest. Reserves, selective logging, debt-for-nature swaps and ecotourism earn money from the forest while keeping it standing.' },
            { type: 'mcq', q: 'Which statement best explains why selective logging is more sustainable than clear-felling?', options: ['Only mature trees go, so the canopy and soil are largely protected', 'It produces much more timber per hectare, so less forest needs to be cut in total', 'It needs no roads', 'It removes all the trees, but more slowly'], answer: 0,
              explain: 'By taking only some mature trees, the canopy stays mostly closed, protecting soils from leaching and erosion and letting the forest regenerate.' },
            { type: 'mcq', q: 'An extractive reserve such as the Chico Mendes reserve is an example of:', options: ['People earning a living from forest products while it is protected', 'A national park where nobody at all is allowed to live, hunt or collect anything', 'A mine that extracts gold', 'A plantation of non-native trees'], answer: 0,
              explain: 'Extractive reserves allow communities to harvest products such as rubber and Brazil nuts sustainably.' },
            { type: 'mcq', q: 'Scientists warn about a "tipping point" for the Amazon. What do they mean?', options: ['Lose too much forest and parts could turn to savanna for good', 'The Amazon River could suddenly change direction and flow west into the Pacific', 'The forest will grow too fast', 'It will become a desert overnight'], answer: 0,
              explain: 'Losing trees reduces transpiration and rainfall. Beyond a certain level of deforestation, parts of the forest may dry out and shift towards savanna.' }
          ]
        }
      }
    ]
  };
})();
