/* Travel the Wright Way — destination: Madagascar (unique wildlife, rainforest and dry west, deforestation and soil erosion, rice, vanilla and culture).
 * Climate data: Antananarivo (about 1,280 m), long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: about 90% of its wildlife is found nowhere else; forest cover fell by about 44% between 1953 and 2014 (Vieilledent et al., 2018);
 *   Madagascar produces most of the world's natural vanilla (often quoted as about 80%); the Malagasy language is Austronesian, linked to languages of Borneo;
 *   Cyclone Freddy (2023) hit Madagascar twice.
 */
(function () {
  var ISLAND_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section across Madagascar from the dry west and the Mozambique Channel, over the central highlands, to the rainforest escarpment and the Indian Ocean">' +
  '<rect width="600" height="420" fill="#d6ecfb"/>' +
  '<text x="20" y="24" font-size="13" font-weight="700" fill="#11243b">W</text><text x="566" y="24" font-size="13" font-weight="700" fill="#11243b">E</text>' +
  '<rect y="300" width="600" height="120" fill="#2f7fbf"/>' +
  // land
  '<path d="M80 300 L200 286 L290 252 L320 196 L340 178 L380 170 L425 176 L440 200 L462 250 L490 284 L520 300 L520 420 L80 420 Z" fill="#c2703d"/>' +
  '<path d="M80 300 L200 286 L290 252 L290 300 Z" fill="#d6a85a"/>' +
  // lavaka gullies on the highland edge
  '<g fill="#8a3a22"><path d="M300 236 L308 214 L314 240 Z"/><path d="M318 206 L326 186 L330 212 Z"/><path d="M350 186 L356 174 L362 190 Z"/></g>' +
  // rice paddies near the capital
  '<g fill="#7fb24a"><rect x="372" y="168" width="14" height="4"/><rect x="390" y="168" width="14" height="4"/></g><circle cx="384" cy="160" r="4" fill="#b42318"/>' +
  // baobabs in the dry west
  (function () { var g = ''; [120, 160, 200, 240].forEach(function (x, i) { var base = 296 - i * 12, top = base - 40; g += '<path d="M' + (x - 6) + ' ' + base + ' L' + (x - 4) + ' ' + top + ' L' + (x + 4) + ' ' + top + ' L' + (x + 6) + ' ' + base + ' Z" fill="#9a7b66"/><ellipse cx="' + x + '" cy="' + (top - 4) + '" rx="12" ry="5" fill="#4f7a2a"/>'; }); return g; })() +
  // rainforest on the eastern escarpment
  '<g fill="#1f6b3a"><circle cx="440" cy="206" r="9"/><circle cx="450" cy="226" r="10"/><circle cx="462" cy="246" r="10"/><circle cx="474" cy="264" r="9"/><circle cx="488" cy="280" r="8"/><circle cx="432" cy="192" r="8"/></g>' +
  // clouds and rain
  '<g fill="#9aa3ad"><ellipse cx="470" cy="168" rx="40" ry="13"/><ellipse cx="440" cy="156" rx="30" ry="11"/></g>' +
  '<g class="drip" stroke="#2f7fbf" stroke-width="2.5" stroke-linecap="round"><line x1="450" y1="184" x2="446" y2="198"/><line x1="470" y1="184" x2="466" y2="198"/><line x1="490" y1="182" x2="486" y2="196"/></g>' +
  // trade wind arrow from the east
  '<g stroke="#11243b" stroke-width="5" fill="#11243b"><path d="M590 160 C 560 160, 540 162, 520 166" fill="none"/><path d="M524 156 L504 168 L526 176 Z"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="312" y1="106" x2="380" y2="166"/><line x1="504" y1="140" x2="540" y2="160"/><line x1="156" y1="232" x2="160" y2="252"/><line x1="470" y1="222" x2="452" y2="226"/><line x1="312" y1="238" x2="312" y2="228"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.madagascar = {
    id: 'madagascar',
    name: 'Madagascar',
    short: 'Madagascar',
    country: 'Madagascar',
    gateway: 'Antananarivo',
    lonlat: [47.5, -18.9],
    locator: { box: [39.5, 52, -26.5, -11.5], places: [['Antananarivo', 47.52, -18.91, 'r'], ['Morondava', 44.28, -20.28, 'r'], ['Toamasina', 49.4, -18.15, 'l'], ['Mozambique Channel', 42.3, -19.5, 'a'], ['Indian Ocean', 50.3, -23.5, 'a']] },
    stamp: { colour: '#166534', icon: '🐒' },
    transport: { name: 'taxi-brousse', verb: 'Ride', emoji: '🚐' },
    scene: 'redroad',
    photo: { file: 'Avenue of Baobabs, Madagascar (22558139260).jpg', alt: 'Giant baobab trees lining a red dirt road near Morondava, with a zebu cart', author: 'Rod Waddington', licence: 'CC BY-SA 2.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/' },
    intro: {
      ks3: 'You land in Antananarivo, high in the middle of Madagascar, the world’s fourth-largest island. Squeeze into a taxi-brousse (a shared minibus) with bags piled on the roof and bump along red dirt roads, looking for lemurs and giant baobab trees.',
      adv: 'From Antananarivo you explore an island biodiversity hotspot. This expedition covers endemism and isolation, the contrast between the wet east and dry west, deforestation and soil erosion, and the livelihoods, risks and culture of one of the world’s poorest countries.'
    },
    facts: ['About 90% of Madagascar’s wildlife is found nowhere else on Earth.', 'Most of the world’s natural vanilla is grown in Madagascar.', 'The Malagasy language is related to languages spoken in Borneo, over 6,000 km away.'],
    climate: {
      place: 'Antananarivo, Madagascar (1,280 m)', source: 'Long-term averages (CRU / Met Office)', lat: '19°S',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [21.0, 21.5, 20.5, 20.0, 17.5, 15.0, 15.0, 15.0, 17.0, 19.0, 20.5, 21.0],
      rain: [279, 260, 201, 61, 27, 14, 19, 20, 15, 69, 171, 310]
    },
    diagrams: { island: ISLAND_SVG },
    stations: [
      {
        id: 'wildlife', title: 'A world of its own', icon: '🐒',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Lemurs live in the wild only in one place on Earth. Where?', options: ['Madagascar', 'The Amazon', 'Australia', 'Antarctica'], answer: 0,
              explain: 'There are over 100 kinds of lemur, and every one is found only in Madagascar.' },
            { type: 'mcq', q: 'Why does Madagascar have so many animals found nowhere else?', options: ['It split from Africa and India long ago, so wildlife evolved in isolation', 'Zoos and traders released many unusual animals there in the 1800s and 1900s', 'It is still joined to Africa', 'It is very cold'], answer: 0,
              explain: 'Cut off by the sea for millions of years, species evolved in their own way. Scientists call species found in only one place “endemic”.' },
            { type: 'mcq', q: 'The Avenue of the Baobabs near Morondava is one of Madagascar’s most famous sights. How do baobab trees survive the long dry season?', options: ['They store water in their huge trunks', 'Their roots reach down to rivers deep underground below the dry soil', 'They keep their leaves all year', 'They drink sea water'], answer: 0,
              explain: 'A baobab trunk can hold thousands of litres of water, and the trees drop their leaves in the dry season to save water.' }
          ],
          adv: [
            { type: 'mcq', q: 'Madagascar is called a “biodiversity hotspot”. Which two conditions define a hotspot?', options: ['Many endemic species and large habitat loss', 'Hot temperatures all year and many active volcanoes across the island', 'Many tourists and big cities', 'Few species and lots of forest'], answer: 0,
              explain: 'Hotspots are both irreplaceable and threatened, so they are priorities for conservation.' },
            { type: 'mcq', q: 'Why does isolation on an island lead to high endemism?', options: ['Populations can’t mix with mainland ones, so they evolve separately', 'Islands get more sunlight, so species grow larger and different from mainland ones', 'Animals swim between islands every day', 'Islands never have predators'], answer: 0,
              explain: 'Over millions of years, a few ancestors that arrived adapted to many habitats, a process called adaptive radiation.' },
            { type: 'mcq', q: 'Which approach is most likely to protect lemurs in the long term?', options: ['Protected areas run with local communities who benefit from them', 'Fencing off all the forests and banning local people from entering them at all', 'Moving all lemurs to zoos', 'Clearing forest for farmland'], answer: 0,
              explain: 'Conservation succeeds when local people gain from it. Without this, poverty pushes people to clear forest or hunt.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Wet east, dry west', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'island', prompt: 'Label this cross-section across Madagascar from west to east.',
              spots: [{ x: 14, y: 90, a: 'Mozambique Channel' }, { x: 86, y: 90, a: 'Indian Ocean' }, { x: 84, y: 30, a: 'Trade winds' }, { x: 52, y: 22, a: 'Central highlands' }, { x: 86, y: 56, a: 'Rainforest' }, { x: 26, y: 52, a: 'Dry forest' }],
              extra: [],
              explain: 'Trade winds blow moist air from the Indian Ocean. It rises up the steep east side, giving heavy rain and rainforest. The west is much drier, with baobabs and dry forest.' },
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Antananarivo?', options: ['December', 'June', 'August', 'September'], answer: 0,
              explain: 'December has the tallest bar, about 310 mm. The wet season runs from about November to March.' },
            { type: 'mcq', graph: true, q: 'Antananarivo is in the tropics, but its winter is only about 15°C. Why?', options: ['It is about 1,280 m above sea level', 'It is next to a cold ocean current', 'It is near the South Pole', 'It is covered in ice'], answer: 0,
              explain: 'Temperature falls with altitude, so the highlands are much cooler than the coast.' }
          ],
          adv: [
            { type: 'label', diagram: 'island', prompt: 'Label the cross-section. One label does not belong.',
              spots: [{ x: 14, y: 90, a: 'Mozambique Channel' }, { x: 86, y: 90, a: 'Indian Ocean' }, { x: 84, y: 30, a: 'SE trade winds' }, { x: 52, y: 22, a: 'Highland plateau' }, { x: 86, y: 56, a: 'Escarpment rainforest' }, { x: 26, y: 52, a: 'Rain-shadow dry forest' }, { x: 52, y: 60, a: 'Lavaka (erosion gullies)' }],
              extra: ['Glacier'],
              explain: 'There are no glaciers. Orographic rain on the windward escarpment supports rainforest; the leeward west is drier. Lavaka are huge gullies where bare highland soils have eroded.' },
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Antananarivo (mm).', answer: 1446, tol: 10, unit: 'mm',
              explain: 'Adding all twelve months gives about 1,446 mm, mostly falling between November and March.' },
            { type: 'mcq', graph: true, q: 'What brings Antananarivo’s wet season from November to March?', options: ['The ITCZ moves south over Madagascar', 'Cold fronts from Antarctica that sweep north every summer', 'Snowmelt from the mountains', 'Winds from the Sahara'], answer: 0,
              explain: 'As the overhead sun moves south, the ITCZ brings rising air and storms. This is also the cyclone season.' }
          ]
        }
      },
      {
        id: 'forest', title: 'Disappearing forests', icon: '🔥',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Many farmers in Madagascar clear forest using “tavy”. What is it?', options: ['Slash-and-burn: cutting and burning forest to plant crops', 'Planting new trees on old farmland to restore the forest for the lemurs', 'Fishing with nets', 'Building terraces in the desert'], answer: 0,
              explain: 'Ash briefly fertilises the soil, but after a few years the soil is worn out and farmers clear more forest.' },
            { type: 'mcq', q: 'Madagascar is called the “Red Island”. Why?', options: ['Red soils are exposed when forest is cleared', 'It is covered in red flowers for most of the year, especially in the highlands', 'Its sea is red', 'It has red snow'], answer: 0,
              explain: 'Without tree roots, heavy rain washes the soil away. Astronauts have said rivers look like the island is bleeding into the sea.' },
            { type: 'sort', q: 'Sort these into causes and effects of deforestation.', bins: ['Cause', 'Effect'],
              items: [['Slash-and-burn farming', 0], ['Cutting trees for charcoal', 0], ['Growing population needing land', 0], ['Soil erosion', 1], ['Lemurs losing their homes', 1], ['Rivers filling with mud', 1]],
              explain: 'Poverty and a growing population drive forest clearance, which harms soils, rivers and wildlife.' }
          ],
          adv: [
            { type: 'number', q: 'A study found Madagascar’s forest cover fell by about 44% between 1953 and 2014. If there were 16 million hectares in 1953, about how many hectares remained in 2014 (in millions)?', answer: 9, tol: 0.1, unit: 'million ha',
              explain: '16 × (1 − 0.44) = 8.96, so about 9 million hectares.' },
            { type: 'mcq', q: 'Most households cook with charcoal. Why does this put pressure on forests?', options: ['Charcoal is made by burning wood, so many trees are cut', 'Charcoal is dug from coal mines under the forest, which kills the tree roots', 'Charcoal comes from the sea', 'It uses no wood at all'], answer: 0,
              explain: 'Few people have access to electricity or gas. Fast-growing tree plantations and efficient stoves can reduce the demand on natural forest.' },
            { type: 'mcq', q: 'Why is sediment from eroded highlands a problem at the coast?', options: ['It smothers reefs and mangroves and silts up ports', 'It makes beaches whiter and attracts tourists, who then damage the coast', 'It cleans the sea', 'It has no effect'], answer: 0,
              explain: 'Land degradation upstream has knock-on effects downstream, showing how physical systems are linked.' }
          ]
        }
      },
      {
        id: 'people', title: 'Rice, vanilla and culture', icon: '🍚',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'What is the main food eaten in Madagascar, often at every meal?', options: ['Rice', 'Bread', 'Potatoes', 'Pasta'], answer: 0,
              explain: 'Rice is grown in flooded paddy fields and terraces, especially in the highlands, a farming style similar to South-East Asia.' },
            { type: 'mcq', q: 'Madagascar grows most of the world’s natural vanilla. What is vanilla?', options: ['The cured seed pod of an orchid', 'The dried root of a tropical vine', 'A type of nut', 'A sea plant'], answer: 0,
              explain: 'Each vanilla flower is pollinated by hand, and the pods are dried for months, which is why vanilla is so expensive.' },
            { type: 'mcq', q: 'Culture: the first people to settle Madagascar sailed from South-East Asia about 1,500 years ago. Which evidence shows this?', options: ['Malagasy is related to languages spoken in Borneo', 'Everyone in Madagascar speaks Thai as their first language, especially on the coast', 'There are Inca ruins', 'The buildings are igloos'], answer: 0,
              explain: 'Malagasy culture mixes South-East Asian and East African roots, seen in language, rice farming and music.' },
            { type: 'mcq', q: 'What are zebu?', options: ['Humped cattle that pull carts', 'Small lemurs that live in baobab trees', 'Fishing boats', 'Baobab fruits'], answer: 0,
              explain: 'Zebu are central to rural life and ceremonies in Madagascar.' }
          ],
          adv: [
            { type: 'mcq', q: 'Vanilla prices swing wildly. Why is depending on one export crop risky for farmers?', options: ['A price crash, cyclone or theft can wipe out income', 'Vanilla never changes price, so farmers can never earn more however hard they work', 'Nobody buys it', 'It grows everywhere'], answer: 0,
              explain: 'Diversifying crops, cooperatives and fair-trade contracts can make incomes more stable.' },
            { type: 'mcq', q: 'In 2023 Cyclone Freddy, one of the longest-lasting tropical cyclones on record, hit Madagascar twice. Why are poorer countries often worse affected by such hazards?', options: ['Weaker buildings, fewer warnings and less money to recover', 'Cyclones only ever hit poor countries because of where they are on the map', 'Poor countries have stronger winds', 'They are always on the coast'], answer: 0,
              explain: 'Vulnerability depends on wealth, infrastructure and preparation as much as the hazard itself.' },
            { type: 'mcq', q: 'Culture: in the highlands, some families hold famadihana, when relatives re-wrap the remains of their ancestors in new cloth and celebrate with music and dancing. What does this show about Malagasy culture?', options: ['Ancestors and family ties are very important', 'Families rarely meet, so they only gather for ceremonies once every generation', 'Music is not valued', 'Traditions have disappeared'], answer: 0,
              explain: 'Respect for ancestors (razana) shapes land ownership, tombs and community life. Understanding culture helps explain how people use land.' }
          ]
        }
      }
    ]
  };
})();
