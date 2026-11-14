/* Travel the Wright Way — destination: Namibia (the Namib, a coastal fog desert caused by the cold Benguela Current, giant dunes, desert adaptations, water scarcity, and Namibian culture).
 * Climate data: Swakopmund, monthly averages (climatestotravel.com); the page notes rain is practically absent (about 10 mm a year), with frequent fog.
 * Facts: the Namib is one of the oldest deserts in the world; the cold Benguela Current flows north along the coast, cooling the air so it is too stable to rise and form rain clouds, but creating frequent coastal fog;
 *   the red dunes around Sossusvlei are among the tallest in the world (some over 300 m); Deadvlei is a white clay pan where camel thorn trees died roughly 600–700 years ago after dunes cut off the Tsauchab River;
 *   the Namib fog-basking beetle collects drinking water from fog on its back; the welwitschia plant can live for over 1,000 years; the Skeleton Coast is famous for shipwrecks;
 *   Namibia is one of the least densely populated countries in the world (about 3 million people); it became independent from South Africa in 1990 and was a German colony from 1884 to 1915;
 *   Windhoek has recycled waste water into drinking water since 1968, the first city in the world to do so directly; uranium is mined near Swakopmund; the Himba people of the north-west use red ochre (otjize) on their skin and hair.
 */
(function () {
  var FOG_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section from the Atlantic Ocean to the Namibian plateau: a cold current offshore, a fog bank drifting inland over coastal dunes, the Great Escarpment and the high plateau inland">' +
  '<rect width="600" height="420" fill="#e5eef5"/><circle cx="520" cy="60" r="26" fill="#ffd166"/>' +
  // ocean
  '<path d="M0 240 L170 240 L170 420 L0 420 Z" fill="#2f7fb8"/><path d="M0 250 L170 250" stroke="#bfe3f7" stroke-width="2" stroke-dasharray="8 6"/>' +
  // cold current arrows
  '<g fill="#bfe3f7"><path d="M30 320 l20 -12 l0 8 l40 0 l0 8 l-40 0 l0 8 Z"/><path d="M70 370 l20 -12 l0 8 l40 0 l0 8 l-40 0 l0 8 Z"/></g>' +
  // fog bank
  '<g fill="#f8fafc" opacity=".92"><ellipse cx="110" cy="210" rx="110" ry="24"/><ellipse cx="220" cy="214" rx="90" ry="20"/><ellipse cx="300" cy="222" rx="60" ry="14"/></g>' +
  '<g fill="none" stroke="#11243b" stroke-width="2.5"><path d="M60 170 L180 170 m-12 -8 l12 8 l-12 8"/></g>' +
  // dunes
  '<path d="M170 240 L170 420 L600 420 L600 250 L420 250 L400 240 C 360 200, 330 250, 300 236 C 270 190, 240 250, 210 232 C 190 210, 180 240, 170 240 Z" fill="#d9763b"/>' +
  '<path d="M300 236 C 330 250, 360 200, 400 240" fill="none" stroke="#b5562a" stroke-width="2"/>' +
  // escarpment and plateau
  '<path d="M420 250 L460 130 L600 120 L600 420 L420 420 Z" fill="#a08460"/><path d="M460 130 L600 120" stroke="#6f9a4a" stroke-width="5"/>' +
  '<g fill="#6f9a4a"><circle cx="500" cy="118" r="7"/><circle cx="560" cy="114" r="7"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="110" y1="386" x2="100" y2="346"/><line x1="160" y1="136" x2="150" y2="192"/><line x1="320" y1="300" x2="310" y2="244"/><line x1="380" y1="140" x2="440" y2="180"/><line x1="540" y1="80" x2="540" y2="112"/><line x1="54" y1="276" x2="40" y2="252"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.namibia = {
    id: 'namibia',
    name: 'Namibia',
    short: 'Namibia',
    country: 'Namibia',
    gateway: 'Swakopmund',
    lonlat: [15.3, -24.73],
    locator: { box: [9.4, 25.5, -29.2, -16.4], places: [['Windhoek', 17.08, -22.56, 't'], ['Swakopmund', 14.53, -22.68, 'b'], ['Sossusvlei', 15.3, -24.73, 'r'], ['ETOSHA', 17.4, -18.7, 'a'], ['Skeleton Coast', 12.9, -19.0, 'a'], ['Atlantic Ocean', 12.6, -27.4, 'a'], ['BOTSWANA', 23.0, -22.6, 'a'], ['ANGOLA', 17.5, -16.9, 'a'], ['SOUTH AFRICA', 21.0, -28.6, 'a']] },
    stamp: { colour: '#ea580c', icon: '🏜️' },
    transport: { name: 'four-by-four across the dunes', verb: 'Drive', emoji: '🚙' },
    scene: 'namib',
    photo: { file: 'Sossusvlei, Namibia, 2018-08-06, DD 017.jpg', alt: 'Tall red-orange sand dunes with sharp crests and deep shadows under a blue sky in the Namib Desert', author: 'Diego Delso', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'Welcome to Namibia, home of the Namib, one of the oldest deserts on Earth. Drive across giant red dunes, find out how fog keeps beetles and plants alive where it almost never rains, and discover why the coast is called the Skeleton Coast.',
      adv: 'Drive across the Namib. This expedition covers how the cold Benguela Current creates a coastal fog desert, dune landforms and Deadvlei, desert adaptations, water scarcity and recycling in Windhoek, a sparsely populated country, and Namibian culture.'
    },
    facts: ['Some dunes near Sossusvlei are over 300 m tall.', 'Namibia is one of the least crowded countries in the world.', 'Windhoek turns waste water into drinking water.'],
    climate: {
      place: 'Swakopmund, Namibia', source: 'Monthly averages (climatestotravel.com)', lat: '23°S', rmax: 20, rstep: 5,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [17.5, 18.5, 17.5, 15.5, 14.5, 15.5, 13.5, 12.5, 13.0, 13.5, 15.5, 16.5],
      rain: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    diagrams: { fog: FOG_SVG },
    stations: [
      {
        id: 'dunes', title: 'Sea of sand', icon: '🏜️',
        tasks: {
          ks3: [
            { type: 'mcq', photo: true, q: 'Look at the photo near Sossusvlei. What landform is shown?', options: ['Sand dunes', 'Glaciers', 'Volcanoes', 'Rice terraces'], answer: 0,
              explain: 'Wind piles sand into huge dunes. Iron oxide (rust) on the grains makes them red.' },
            { type: 'mcq', photo: { file: 'Dead Vlei, Sossusvlei, Namibia, 2018-08-06, DD 101-104 PAN.jpg', alt: 'Dead black trees standing on a flat white clay pan surrounded by tall orange dunes', author: 'Diego Delso', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' }, q: 'This photo shows Deadvlei. Why did these trees die hundreds of years ago?', options: ['Dunes blocked the river, so water stopped coming', 'A volcano erupted nearby', 'They were all cut down by local farmers for firewood', 'Snow froze them'], answer: 0,
              explain: 'The air is so dry that the dead trees have not rotted away, even after about 600–700 years.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Swakopmund from Windhoek?', options: ['West', 'East', 'North', 'South'], answer: 0,
              explain: 'Swakopmund is on the Atlantic coast, west of the capital, Windhoek.' }
          ],
          adv: [
            { type: 'mcq', photo: true, q: 'Study the photo. The dunes have sharp crests and one steep face. What does the steep face show?', options: ['The sheltered slip face', 'Where water erodes the dune', 'Where plants hold the sand', 'The oldest part of the dune'], answer: 0,
              explain: 'Wind blows sand up the gentle slope; it avalanches down the steep slip face on the sheltered side, so the dune moves.' },
            { type: 'mcq', photo: { file: 'Dead Vlei, Sossusvlei, Namibia, 2018-08-06, DD 101-104 PAN.jpg', alt: 'Dead black trees standing on a flat white clay pan surrounded by tall orange dunes', author: 'Diego Delso', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' }, q: 'Deadvlei is a white clay pan. How did the clay get there?', options: ['A river once flooded here and left fine sediment', 'It was blown in from the sea as salt and dust long ago', 'It is volcanic ash', 'It was laid down by a glacier'], answer: 0,
              explain: 'The Tsauchab River used to flood the pan. When dunes blocked its path, the pan dried out and the trees died.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the straight-line distance from Windhoek to Sossusvlei.', options: ['About 300 km', 'About 50 km', 'About 1,000 km', 'About 2,500 km'], answer: 0,
              explain: 'It is about 300 km to the south-west, across the escarpment and down into the desert.' }
          ]
        }
      },
      {
        id: 'fog', title: 'The fog desert', icon: '🌫️',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'fog', prompt: 'Label how the Namib’s fog forms.',
              spots: [{ x: 18, y: 92, a: 'Cold current' }, { x: 27, y: 32, a: 'Fog' }, { x: 53, y: 71, a: 'Sand dunes' }, { x: 63, y: 33, a: 'Steep slope' }, { x: 90, y: 19, a: 'High plateau' }, { x: 9, y: 66, a: 'Ocean' }],
              extra: [],
              explain: 'A cold ocean current cools the air above it, making fog. The wind blows the fog inland over the dunes, but it hardly ever rains.' },
            { type: 'mcq', q: 'How does the fog-basking beetle get water in the desert?', options: ['It collects fog droplets on its back', 'It digs deep wells', 'It drinks sea water from rock pools on the coast', 'It eats snow'], answer: 0,
              explain: 'It tilts its body into the foggy wind, and water droplets run down into its mouth.' },
            { type: 'mcq', graph: true, q: 'Look at the climate graph for Swakopmund. What is unusual about it?', options: ['There is almost no rain all year', 'It is freezing in summer', 'It rains every day', 'It is hotter than 40°C all year'], answer: 0,
              explain: 'Swakopmund gets about 10 mm of rain a year, but fog is common on many mornings.' }
          ],
          adv: [
            { type: 'label', diagram: 'fog', prompt: 'Label the coastal desert cross-section. One label does not belong.',
              spots: [{ x: 18, y: 92, a: 'Cold Benguela Current' }, { x: 27, y: 32, a: 'Advection fog' }, { x: 53, y: 71, a: 'Coastal dune sea' }, { x: 63, y: 33, a: 'Great Escarpment' }, { x: 90, y: 19, a: 'Inland plateau' }, { x: 9, y: 66, a: 'South Atlantic' }],
              extra: ['Warm current'],
              explain: 'The Benguela is cold. Air cooled from below is stable, so it does not rise to form rain clouds.' },
            { type: 'mcq', graph: true, q: 'Swakopmund is at 23°S, yet the warmest month averages only about 18°C. Why?', options: ['The cold Benguela Current cools the coast', 'It is high in the mountains', 'It is near the South Pole', 'It is cloudy and rainy all through the year'], answer: 0,
              explain: 'Inland at the same latitude, temperatures often pass 35°C. The range is small (about 6°C) because the sea controls the temperature.' },
            { type: 'mcq', q: 'Why does the cold current make the Namib a desert?', options: ['Cooled air is stable, so it does not rise', 'It freezes the clouds into ice', 'It blows all the clouds out to sea', 'It makes the land too salty for rain to fall'], answer: 0,
              explain: 'The same pattern makes the Atacama Desert in Chile, beside the cold Humboldt Current.' }
          ]
        }
      },
      {
        id: 'water', title: 'Every drop counts', icon: '💧',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Windhoek has a famous way of getting more drinking water. What is it?', options: ['Cleaning used water to drink again', 'Melting icebergs', 'Collecting water from volcanoes', 'Buying water from Europe'], answer: 0,
              explain: 'Windhoek has recycled waste water into safe drinking water since 1968, the first city in the world to do this directly.' },
            { type: 'mcq', q: 'The welwitschia is a desert plant. How long can it live?', options: ['Over 1,000 years', 'About 1 week', 'About 1 year', 'About 10 years'], answer: 0,
              explain: 'It has just two long leaves that keep growing and soak up moisture from fog.' },
            { type: 'mcq', q: 'Why is the coast of northern Namibia called the Skeleton Coast?', options: ['Many ships were wrecked there in the fog', 'Dinosaur bones are found all along the beach', 'It is shaped like a skeleton', 'Nobody has ever been there'], answer: 0,
              explain: 'Thick fog, strong currents and rough seas wrecked ships, and sailors were stranded in the desert.' }
          ],
          adv: [
            { type: 'sort', q: 'Classify these ways Namibia manages water scarcity.', bins: ['Increasing supply', 'Reducing demand'],
              items: [['Recycling waste water in Windhoek', 0], ['Desalination plant near the coast', 0], ['Pumping groundwater from aquifers', 0], ['Water-saving rules in droughts', 1], ['Drip irrigation on farms', 1], ['Higher prices for heavy users', 1]],
              explain: 'Uranium mines near the coast use desalinated sea water so they do not take scarce groundwater.' },
            { type: 'mcq', q: 'Namibia has about 3 million people in an area larger than France and Germany combined. Why is the population density so low?', options: ['Much of the land is too dry to farm', 'It has no towns at all', 'It is covered in ice', 'People are not allowed to live there'], answer: 0,
              explain: 'Most people live in the wetter north and on the central plateau around Windhoek.' },
            { type: 'mcq', q: 'Which resource found near Swakopmund is mined for nuclear power stations?', options: ['Uranium', 'Coal', 'Gold', 'Copper'], answer: 0,
              explain: 'Namibia is one of the world’s largest uranium producers, bringing jobs but also using a lot of water.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Himba, history and stars', icon: '✨',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: the Himba people of north-west Namibia are known for covering their skin and hair with…', options: ['A red ochre paste', 'Blue paint', 'White chalk from the river', 'Gold dust'], answer: 0,
              explain: 'The paste, called otjize, is made from butterfat and red ochre. It protects against the sun and is part of Himba identity.' },
            { type: 'mcq', q: 'Namibia has very dark skies at night. Why is it great for star-gazing?', options: ['Dry air and very little light pollution', 'The stars are much closer to Earth there', 'It is always night there', 'It is near the North Pole'], answer: 0,
              explain: 'There are few towns and little cloud, so the Milky Way is easy to see.' },
            { type: 'mcq', q: 'In which year did Namibia become independent?', options: ['1990', '1890', '1950', '2010'], answer: 0,
              explain: 'Before that it was ruled by South Africa, and before 1915 it was a German colony.' }
          ],
          adv: [
            { type: 'mcq', q: 'Swakopmund has many old German-style buildings. Why?', options: ['Namibia was a German colony from 1884 to 1915', 'German is the only official language there today', 'German tourists built them recently', 'It was settled by Vikings'], answer: 0,
              explain: 'English is the official language today, but German is still spoken by some families, alongside Oshiwambo, Afrikaans and others.' },
            { type: 'mcq', q: 'Some languages in Namibia, such as Khoekhoegowab, use click sounds. Where else are click languages found?', options: ['Other parts of southern Africa', 'Northern Europe, especially Norway', 'South America', 'Japan'], answer: 0,
              explain: 'Click consonants are a feature of Khoisan languages and some Bantu languages such as isiXhosa.' },
            { type: 'mcq', q: 'Namibia has strong sunshine and wind on the coast. Which new industry is it planning?', options: ['Green hydrogen from renewable power', 'Large-scale rice farming in the desert', 'Glacier tourism', 'Rainforest logging'], answer: 0,
              explain: 'Solar and wind power could split water into hydrogen fuel for export, though the projects raise questions about water use and protected land.' }
          ]
        }
      }
    ]
  };
})();
