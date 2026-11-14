/* Travel the Wright Way — destination: Kenya (the Great Rift Valley, two rainy seasons, tea and flowers, Nairobi and Maasai culture).
 * Climate data: Nairobi (about 1,800 m), long-term averages processed from CRU/Met Office/KNMI data (weather2travel.com); mean = average of max and min.
 * Facts: the Rift Valley is forming where the African plate is splitting into the Nubian and Somali plates;
 *   geothermal power, mainly from Olkaria near Lake Naivasha, provides close to half of Kenya's electricity;
 *   Kenya is the world's largest exporter of black tea and a major exporter of cut roses to Europe;
 *   M-Pesa mobile money launched in Kenya in 2007; Kibera in Nairobi is one of Africa's largest informal settlements.
 */
(function () {
  var VALLEY_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Landscape of the Kenyan Rift Valley with high plateaus, steep escarpments, a volcano, a soda lake with flamingos and a geothermal power station">' +
  '<rect width="600" height="420" fill="#d6ecfb"/>' +
  // plateaus and escarpments
  '<path d="M0 110 L120 110 L170 280 L0 280 Z" fill="#7a6a4f"/><path d="M600 120 L470 120 L430 280 L600 280 Z" fill="#7a6a4f"/>' +
  '<g fill="#2f7a3a"><rect y="102" width="120" height="10"/><rect x="470" y="112" width="130" height="10"/></g>' +
  // valley floor
  '<rect y="276" width="600" height="144" fill="#d8b45a"/>' +
  // volcano
  '<path d="M200 280 L255 178 L285 178 L340 280 Z" fill="#6b5b4e"/><path d="M257 178 L283 178 L278 188 L262 188 Z" fill="#3f352d"/>' +
  // soda lake with flamingos
  '<ellipse cx="420" cy="306" rx="70" ry="15" fill="#8cc7d8"/>' +
  '<g fill="#f48fb1">' + (function () { var g = ''; for (var i = 0; i < 14; i++) g += '<circle cx="' + (366 + i * 8) + '" cy="' + (302 + (i % 3) * 4) + '" r="2.6"/>'; return g; })() + '</g>' +
  // geothermal power station
  '<g fill="#e5e7eb" stroke="#4b5563" stroke-width="1.5"><rect x="140" y="300" width="40" height="22"/><rect x="186" y="306" width="24" height="16"/></g>' +
  '<g stroke="#9aa3ad" stroke-width="4" fill="none"><path d="M100 318 L140 318"/><path d="M210 316 L240 316"/></g>' +
  '<g class="tw-smoke"><circle cx="160" cy="290" r="9" fill="#f2f2f2"/><circle cx="168" cy="276" r="7" fill="#f7f7f7"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="84" y1="98" x2="140" y2="180"/><line x1="264" y1="114" x2="268" y2="176"/><line x1="516" y1="90" x2="520" y2="116"/><line x1="396" y1="340" x2="410" y2="318"/><line x1="120" y1="342" x2="150" y2="322"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.kenya = {
    id: 'kenya',
    name: 'Kenya',
    short: 'Kenya',
    country: 'Kenya',
    gateway: 'Nairobi',
    lonlat: [36.8, -1.3],
    locator: { box: [32.5, 43, -5, 5], places: [['Nairobi', 36.82, -1.29, 'r'], ['Lake Naivasha', 36.35, -0.77, 'r'], ['Lake Nakuru', 36.09, -0.36, 'r'], ['Mombasa', 39.67, -4.04, 'l'], ['Maasai Mara', 35.1, -1.5, 'b'], ['Indian Ocean', 41.3, -3.2, 'a']] },
    stamp: { colour: '#b45309', icon: '🦒' },
    transport: { name: 'safari jeep', verb: 'Drive', emoji: '🚙' },
    scene: 'rift',
    photo: { file: 'Great Rift Valley, Kenya - 51951583317.jpg', alt: 'View across the wide floor of the Great Rift Valley at sunrise, with Mount Longonot on the left', author: 'Ninara', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    intro: {
      ks3: 'You land in Nairobi, Kenya’s capital, and drive to the edge of the Great Rift Valley. The road drops down a huge, steep cliff to a valley floor with volcanoes, steaming power stations and lakes full of pink flamingos.',
      adv: 'From Nairobi you explore the Kenyan section of the East African Rift: divergent plate processes and geothermal energy, a bimodal climate, export agriculture, rapid urbanisation and innovation, and Maasai culture.'
    },
    facts: ['The Rift Valley is part of a crack in the Earth’s crust running for thousands of kilometres through East Africa.', 'Kenya is the world’s biggest exporter of black tea.', 'Close to half of Kenya’s electricity comes from geothermal power.'],
    climate: {
      place: 'Nairobi, Kenya', source: 'Long-term averages (CRU / Met Office)', lat: '1°S',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [18.5, 19.0, 19.5, 19.0, 18.0, 16.5, 15.5, 15.5, 17.5, 18.5, 18.0, 18.5],
      rain: [57, 49, 93, 244, 186, 42, 22, 27, 29, 67, 151, 99]
    },
    diagrams: { valley: VALLEY_SVG },
    stations: [
      {
        id: 'rift', title: 'The Great Rift Valley', icon: '🌋',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'valley', prompt: 'Label this view of the Great Rift Valley in Kenya.',
              spots: [{ x: 14, y: 20, a: 'Escarpment' }, { x: 86, y: 18, a: 'Plateau' }, { x: 44, y: 24, a: 'Volcano' }, { x: 66, y: 84, a: 'Flamingo lake' }, { x: 20, y: 84, a: 'Geothermal power station' }],
              extra: [],
              explain: 'As the crust stretches, the valley floor drops between steep escarpments. Magma rises close to the surface, forming volcanoes and heating underground water used for geothermal power.' },
            { type: 'mcq', q: 'What is happening to the plates under the Rift Valley?', options: ['They are moving apart', 'They are colliding', 'They are sliding past each other', 'They are not moving'], answer: 0,
              explain: 'East Africa is slowly splitting away from the rest of Africa, by a few millimetres each year.' },
            { type: 'mcq', q: 'What might happen to East Africa in millions of years?', options: ['The sea could flood the rift, forming a new ocean', 'It will become a mountain range like the Himalaya', 'It will join South America', 'Nothing will change'], answer: 0,
              explain: 'This is how the Red Sea began. One day East Africa could become a separate landmass.' },
            { type: 'mcq', q: 'Why do flamingos gather on lakes like Lake Nakuru?', options: ['The alkaline water grows algae and shrimps they eat', 'The water is very deep and cold, so few predators can reach the birds', 'There are no other birds', 'The water is fresh and clean'], answer: 0,
              explain: 'Volcanic rocks make some rift lakes very alkaline (“soda lakes”). Few fish live there, but algae thrive, feeding huge numbers of flamingos.' }
          ],
          adv: [
            { type: 'label', diagram: 'valley', prompt: 'Label the Rift Valley landscape. One label does not belong.',
              spots: [{ x: 14, y: 20, a: 'Fault scarp' }, { x: 86, y: 18, a: 'Uplifted plateau' }, { x: 44, y: 24, a: 'Volcanic cone' }, { x: 66, y: 84, a: 'Alkaline soda lake' }, { x: 20, y: 84, a: 'Geothermal power station' }, { x: 50, y: 94, a: 'Rift valley floor' }],
              extra: ['Ocean trench'],
              explain: 'Trenches form at destructive margins. Here, divergence produces fault scarps, a subsiding valley floor, volcanoes and high heat flow, which is ideal for geothermal energy.' },
            { type: 'mcq', q: 'Close to half of Kenya’s electricity comes from geothermal power, mostly at Olkaria. Why is the Rift Valley ideal for it?', options: ['Magma near the surface heats water into steam', 'It has very large coal deposits close to the surface that are cheap to dig up', 'It is very windy', 'It gets the most sun in Africa'], answer: 0,
              explain: 'Geothermal power is renewable and runs day and night, unlike solar or wind, though drilling is expensive.' },
            { type: 'mcq', q: 'Which plates are separating along the East African Rift?', options: ['The Nubian and Somali plates', 'The Nazca and South American plates', 'The Pacific and North American plates', 'The Eurasian and Indian plates'], answer: 0,
              explain: 'The African plate is splitting into the Nubian (west) and Somali (east) plates.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Two rainy seasons', icon: '🌦️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Nairobi?', options: ['April', 'July', 'January', 'September'], answer: 0,
              explain: 'April has the tallest bar, about 244 mm. These are the “long rains”.' },
            { type: 'mcq', graph: true, q: 'Nairobi is almost on the Equator. Why is it only about 15–20°C?', options: ['It is about 1,800 m above sea level', 'It is next to a cold ocean current', 'It is always cloudy', 'It is near the North Pole'], answer: 0,
              explain: 'High altitude keeps Nairobi mild all year, which suited early settlement and farming.' },
            { type: 'mcq', graph: true, q: 'When are the “short rains”?', options: ['October to December', 'June to August', 'January to February', 'There are none'], answer: 0,
              explain: 'The short rains peak in November. Two rainy seasons let some farmers grow two crops a year.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Nairobi (mm).', answer: 1066, tol: 10, unit: 'mm',
              explain: 'Adding all twelve months gives about 1,066 mm.' },
            { type: 'number', graph: true, q: 'What percentage of the year’s rain falls in the long rains (March to May)? Give a whole number.', answer: 49, tol: 1, unit: '%',
              explain: '93 + 244 + 186 = 523 mm. 523 ÷ 1,066 × 100 = 49%.' },
            { type: 'mcq', graph: true, q: 'Why is July the coolest month in Nairobi?', options: ['It is the southern winter, with cloudy skies', 'The ITCZ is directly overhead, bringing heavy rain that cools everything down', 'It is the wettest month', 'Snow falls in July'], answer: 0,
              explain: 'In July the overhead sun is near the Tropic of Cancer and cool, overcast conditions are common in the highlands.' }
          ]
        }
      },
      {
        id: 'farming', title: 'Tea, flowers and herders', icon: '🌹',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Kenya is the world’s biggest exporter of black tea. Where is it grown?', options: ['On cool, wet highlands', 'In the hot, dry north near Lake Turkana', 'On the beaches', 'In city centres'], answer: 0,
              explain: 'Tea likes rain all year, mild temperatures and well-drained slopes, like the highlands west of the Rift Valley.' },
            { type: 'mcq', q: 'Around Lake Naivasha, thousands of people work in huge greenhouses. What do they grow for export?', options: ['Cut flowers, especially roses', 'Bananas and pineapples', 'Rice', 'Cotton'], answer: 0,
              explain: 'Flowers are flown overnight to Europe. The industry provides many jobs.' },
            { type: 'mcq', q: 'Culture: the Maasai are famous for their red cloth and jumping dances. How have they traditionally made a living?', options: ['Herding cattle, moving to find grass', 'Fishing on the Indian Ocean coast from wooden dhows', 'Growing rice', 'Mining gold'], answer: 0,
              explain: 'Cattle are central to Maasai life and culture. Today many Maasai also work in tourism or farming as land for grazing becomes scarcer.' }
          ],
          adv: [
            { type: 'sort', q: 'Evaluate the flower industry at Lake Naivasha.', bins: ['Benefit', 'Cost'],
              items: [['Tens of thousands of jobs', 0], ['Foreign income for Kenya', 0], ['Roads and services in the area', 0], ['Lake water used for irrigation', 1], ['Pesticide and fertiliser pollution', 1], ['Fast population growth in informal housing', 1]],
              explain: 'Certification schemes and water management aim to make the industry more sustainable.' },
            { type: 'mcq', q: 'Flying roses to Europe has a carbon footprint. Why might Kenyan roses still have lower emissions than Dutch ones?', options: ['Dutch roses need heated, lit greenhouses in winter', 'Planes produce no emissions when they fly at night over the Sahara desert', 'Kenyan roses are smaller', 'Dutch roses travel further'], answer: 0,
              explain: 'Life-cycle assessments compare total emissions, not just transport. “Food miles” do not tell the whole story.' },
            { type: 'mcq', q: 'Why are Maasai herders facing pressure on their traditional lands?', options: ['Farms, fences and towns reduce grazing land', 'They have too much land and too few cattle, so the grass grows out of control', 'Cattle are banned in Kenya', 'Rainfall has increased'], answer: 0,
              explain: 'Pastoralists need large areas to move with the seasons. Land rights and community conservancies are attempts to balance needs.' }
          ]
        }
      },
      {
        id: 'nairobi', title: 'Nairobi: a growing city', icon: '🏙️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Many people move from the countryside to Nairobi. Which is a “pull” factor?', options: ['More jobs, schools and hospitals', 'Drought and failed harvests on rural farms', 'Lack of land', 'Few jobs'], answer: 0,
              explain: 'Pull factors attract people to a place; push factors (like drought) drive them away from where they live.' },
            { type: 'mcq', q: 'Kibera is one of Africa’s largest informal settlements. What is an informal settlement?', options: ['Homes built on land people don’t legally own, often without services', 'A planned estate of government flats with water, electricity and sewers', 'A national park', 'A factory'], answer: 0,
              explain: 'Residents often lack piped water, toilets and secure homes, but communities are busy with small businesses and enterprise.' },
            { type: 'mcq', q: 'M-Pesa started in Kenya in 2007. What does it let people do?', options: ['Send and receive money by mobile phone', 'Order taxis and food deliveries across Nairobi using an app', 'Grow tea faster', 'Watch films'], answer: 0,
              explain: 'Millions of people without bank accounts can now pay bills and receive money from relatives, a Kenyan innovation copied around the world.' }
          ],
          adv: [
            { type: 'mcq', q: 'Why has mobile money had such a big impact on development in Kenya?', options: ['People without banks can save, pay and receive money safely', 'It replaced all farming jobs with technology jobs in Nairobi and other cities', 'It stopped phone use', 'It only works in cities'], answer: 0,
              explain: 'Studies have linked access to mobile money with reduced poverty, especially for women-headed households.' },
            { type: 'sort', q: 'Classify these approaches to improving informal settlements.', bins: ['Top-down', 'Bottom-up'],
              items: [['Government high-rise housing project', 0], ['New city-wide sewer system', 0], ['Clearing and rebuilding an area', 0], ['Residents’ savings groups to upgrade homes', 1], ['Community-run water kiosks and toilets', 1], ['Youth groups collecting and recycling waste', 1]],
              explain: 'Bottom-up projects often fit local needs better, while top-down projects can deliver large infrastructure. Combining them is often most effective.' },
            { type: 'mcq', q: 'Culture: many of the world’s best distance runners train around Iten, high on the rim of the Rift Valley. Which geographical factor is often given as a reason?', options: ['Training at high altitude builds endurance', 'The flat, cold land below sea level is perfect for fast running all year', 'It has no running tradition', 'Heavy rain every day'], answer: 0,
              explain: 'Altitude, a strong running culture and community support together help explain Kenya’s success.' }
          ]
        }
      }
    ]
  };
})();
