/* Travel the Wright Way — destination: Bangkok, Thailand (the start of the journey).
 * Climate data: Bangkok 1991–2020 averages (monthly mean temperature and rainfall, climatestotravel.com).
 * 2011 floods: 25 July 2011 – 16 January 2012, 65 of 77 provinces, 815 deaths, World Bank estimate US$46.5 billion losses.
 * Subsidence: parts of Bangkok sank up to about 3 cm a year; groundwater controls slowed it to about 1 cm a year. Sea level rising about 4 mm a year.
 * Bangkok and nearby provinces lie about 0.5–2 m above sea level.
 * Primate city: over 14 million people (22.2%) lived in the Bangkok Metropolitan Region at the 2010 census; the BMR produces around half of Thailand's GDP.
 */
(function () {
  var DELTA_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch map of the Chao Phraya river flowing from northern mountains across rice fields to Bangkok and the Gulf of Thailand">' +
  '<rect width="600" height="420" fill="#b9dfa0"/>' +
  // rice paddy grid
  '<g stroke="#8fc276" stroke-width="2">' + (function () { var h = ''; for (var i = 0; i < 12; i++) h += '<line x1="0" y1="' + (100 + i * 24) + '" x2="600" y2="' + (100 + i * 24) + '"/>'; for (var j = 0; j < 14; j++) h += '<line x1="' + (j * 46) + '" y1="95" x2="' + (j * 46) + '" y2="370"/>'; return h; })() + '</g>' +
  // northern mountains
  '<path d="M0 100 L40 50 L80 85 L130 30 L180 80 L230 40 L280 90 L330 35 L380 85 L430 45 L480 90 L530 40 L600 80 L600 100 Z" fill="#6b8e5a"/>' +
  '<path d="M0 100 L60 70 L120 95 L190 65 L260 98 L340 62 L420 96 L500 66 L600 95 L600 104 L0 104 Z" fill="#7fa36b"/>' +
  // Gulf of Thailand
  '<path d="M0 372 C 120 362, 220 380, 300 368 S 480 360, 600 372 L600 420 L0 420 Z" fill="#2f7fbf"/>' +
  // river and delta channels
  '<path class="flow" d="M300 92 C 260 140, 345 170, 300 220 S 255 300, 318 338 L 330 372" fill="none" stroke="#3d8fc6" stroke-width="9" stroke-linecap="round"/>' +
  '<path d="M318 338 C 300 350, 285 360, 270 372 M318 338 C 340 350, 360 360, 380 371" fill="none" stroke="#3d8fc6" stroke-width="5" stroke-linecap="round"/>' +
  // Bangkok
  '<g fill="#8a94a6"><rect x="330" y="300" width="14" height="30"/><rect x="348" y="290" width="12" height="40"/><rect x="364" y="305" width="16" height="25"/><rect x="300" y="310" width="12" height="22"/><rect x="384" y="298" width="10" height="32"/></g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="378" y1="168" x2="322" y2="185"/><line x1="408" y1="306" x2="392" y2="310"/><line x1="204" y1="342" x2="300" y2="362"/><line x1="140" y1="216" x2="190" y2="240"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.bangkok = {
    id: 'bangkok',
    name: 'Bangkok',
    short: 'Bangkok',
    country: 'Thailand',
    gateway: 'Bangkok',
    lonlat: [100.5, 13.75],
    locator: { box: [97.8, 103.4, 11.6, 16.6], rivers: [[[100.12, 15.7], [100.57, 14.35], [100.5, 13.75], [100.58, 13.5]]], places: [['Bangkok', 100.5, 13.75, 'r'], ['Ayutthaya', 100.57, 14.35, 'r'], ['Nakhon Sawan', 100.12, 15.7, 'r'], ['Pattaya', 100.88, 12.93, 'r'], ['Central Plains', 99.2, 15.0, 'a'], ['Gulf of Thailand', 100.6, 12.2, 'a']] },
    stamp: { colour: '#c2410c', icon: '🛕' },
    transport: { name: 'longtail boat along the khlongs', verb: 'Cruise', emoji: '🛶' },
    scene: 'river',
    photo: { file: 'Chao Phraya River in Bangkok 01.jpg', alt: 'Boats on the wide Chao Phraya River in Bangkok, with temples and tall buildings along the banks', author: 'Krzysztof Golik', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    intro: {
      ks3: 'Your journey starts at home in Bangkok! Before you fly anywhere, hop on a longtail boat and explore the city’s canals (khlongs) and the great Chao Phraya River.',
      adv: 'Begin with Bangkok: a primate city on the Chao Phraya delta. This expedition covers delta landforms and flooding, land subsidence, the tropical monsoon climate, urbanisation and rice farming on the Central Plains.'
    },
    facts: ['Bangkok’s full ceremonial name is one of the longest place names in the world.', 'Most of Bangkok lies less than 2 m above sea level.', 'Over 14 million people lived in the Bangkok Metropolitan Region at the 2010 census.'],
    climate: {
      place: 'Bangkok, Thailand', source: '1991–2020 averages', lat: '14°N',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [28.0, 29.2, 30.5, 31.5, 31.0, 30.2, 29.8, 29.6, 29.3, 29.0, 28.9, 27.7],
      rain: [13, 20, 40, 90, 250, 155, 175, 220, 335, 290, 50, 6]
    },
    diagrams: { delta: DELTA_SVG },
    stations: [
      {
        id: 'river', title: 'The Chao Phraya delta', icon: '🌊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'delta', prompt: 'Label this sketch map of central Thailand.',
              spots: [{ x: 20, y: 9, a: 'Mountains' }, { x: 75, y: 40, a: 'Chao Phraya River' }, { x: 80, y: 73, a: 'Bangkok' }, { x: 50, y: 94, a: 'Gulf of Thailand' }, { x: 18, y: 50, a: 'Rice fields' }],
              extra: [],
              explain: 'The Chao Phraya flows south from the northern mountains across the flat Central Plains, where rice is grown, through Bangkok and into the Gulf of Thailand.' },
            { type: 'mcq', q: 'Bangkok is built on a delta. What is a delta?', options: ['Flat land built up from mud and sand dropped where a river meets the sea', 'A steep mountain valley', 'A lake in a volcano', 'A ridge made by a glacier'], answer: 0,
              explain: 'When the river slows down at the sea, it drops its sediment. Over thousands of years this builds flat, fertile, low-lying land.' },
            { type: 'mcq', q: 'In 2011 Thailand had its worst floods in decades. Why is Bangkok so likely to flood?', options: ['It is very flat and low, mostly less than 2 m above sea level', 'It is on top of a mountain', 'It never rains in Bangkok', 'It is far from any river'], answer: 0,
              explain: 'Low, flat land drains slowly. When heavy monsoon rain fills the Chao Phraya and the sea is high, water has nowhere to go.' }
          ],
          adv: [
            { type: 'label', diagram: 'delta', prompt: 'Label the sketch map. One label does not belong.',
              spots: [{ x: 20, y: 9, a: 'Mountains' }, { x: 75, y: 40, a: 'Chao Phraya River' }, { x: 80, y: 73, a: 'Bangkok' }, { x: 50, y: 94, a: 'Gulf of Thailand' }, { x: 18, y: 50, a: 'Rice fields' }, { x: 22, y: 81, a: 'Delta distributaries' }],
              extra: ['Glacier'],
              explain: 'There are no glaciers here. Near the coast the river splits into distributaries that spread sediment across the delta.' },
            { type: 'mcq', q: 'The 2011 floods lasted from July 2011 to January 2012, killed 815 people and caused about US$46.5 billion of losses. Why were the economic losses so high?', options: ['Floods inundated large industrial estates north of Bangkok, disrupting factories and global supply chains', 'Flood water was very deep in the mountains', 'Only farmland was affected', 'The floods lasted one day'], answer: 0,
              explain: 'Industrial estates built on low-lying floodplains in Ayutthaya and Pathum Thani were flooded for weeks, halting production of cars and electronics worldwide.' },
            { type: 'mcq', q: 'Which change in land use most increases flood risk in a growing city like Bangkok?', options: ['Replacing fields, wetlands and canals with concrete, so water runs off faster and has fewer places to go', 'Planting more trees', 'Creating parks that store water', 'Widening canals'], answer: 0,
              explain: 'Impermeable surfaces increase surface runoff and reduce storage. Many of Bangkok’s old khlongs were filled in for roads, removing natural drainage channels.' }
          ]
        }
      },
      {
        id: 'sinking', title: 'A sinking city', icon: '📉',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Parts of Bangkok have been sinking. What was the main cause?', options: ['Pumping too much water out from under the ground', 'Earthquakes', 'Too many trees', 'Volcanoes'], answer: 0,
              explain: 'Bangkok sits on soft clay. Pumping out groundwater made the clay squash down, so the land sank, by up to about 3 cm a year in some places.' },
            { type: 'sort', q: 'Sort these into things that make Bangkok’s flooding worse and things that help.', bins: ['Makes it worse', 'Helps'],
              items: [['Pumping out groundwater', 0], ['Rising sea level', 0], ['Covering land with concrete', 0], ['Flood walls along the river', 1], ['Pumping stations and drainage tunnels', 1], ['Parks that store rainwater', 1]],
              explain: 'Groundwater pumping, sea-level rise and concrete all raise flood risk. Walls, pumps, tunnels and green spaces that soak up water reduce it.' },
            { type: 'mcq', q: 'After rules limited groundwater pumping, what happened?', options: ['The sinking slowed to about 1 cm a year on average', 'The land rose back up by several metres', 'Sinking became much faster', 'Nothing changed at all'], answer: 0,
              explain: 'Controlling groundwater use slowed subsidence, but the weight of buildings means parts of the city are still sinking slowly.' }
          ],
          adv: [
            { type: 'number', q: 'If part of Bangkok sinks 1 cm a year while sea level rises 4 mm a year, how much does the sea rise relative to the land in 50 years? (cm)', answer: 70, tol: 1, unit: 'cm',
              explain: 'Relative rise = 10 mm + 4 mm = 14 mm a year. 14 mm × 50 = 700 mm = 70 cm.' },
            { type: 'mcq', q: 'Why does groundwater extraction cause land to subside in Bangkok?', options: ['Water pressure in the pores of soft clay falls, so the clay compacts permanently', 'The water was holding up the buildings directly', 'Pumps vibrate the ground down', 'Groundwater turns into rock'], answer: 0,
              explain: 'Removing water from aquifers lowers pore pressure. The overlying soft marine clay compresses, and most of that compaction cannot be reversed.' },
            { type: 'sort', q: 'Classify these flood management strategies.', bins: ['Hard engineering', 'Soft engineering / management'],
              items: [['Flood walls and dykes along the Chao Phraya', 0], ['Underground drainage tunnels', 0], ['Pumping stations', 0], ['Water-storing parks and retention areas', 1], ['Controls on groundwater pumping', 1], ['Flood warnings and land-use zoning', 1]],
              explain: 'Hard engineering builds structures to control water. Soft approaches work with natural processes or change how people use land and water.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Monsoon climate', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Bangkok?', options: ['September', 'January', 'December', 'March'], answer: 0,
              explain: 'September has the tallest bar: about 335 mm.' },
            { type: 'mcq', graph: true, q: 'Which months are the dry season?', options: ['About November to April', 'About May to October', 'Every month is equally wet', 'Only July'], answer: 0,
              explain: 'From about November to April the bars are short. Most rain falls from May to October, the wet (monsoon) season.' },
            { type: 'mcq', graph: true, q: 'Which is the hottest month in Bangkok?', options: ['April', 'December', 'August', 'October'], answer: 0,
              explain: 'April is the hottest (about 31.5°C), just before the monsoon rains and clouds arrive and cool things slightly.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Bangkok (°C).', answer: 3.8, tol: 0.1, unit: '°C',
              explain: 'Hottest 31.5°C (April) − coolest 27.7°C (December) = 3.8°C.' },
            { type: 'mcq', graph: true, q: 'What causes Bangkok’s wet season from May to October?', options: ['The south-west monsoon brings moist air from the Indian Ocean as the land heats up', 'Cold winds blow from Siberia', 'Snow melts in the mountains', 'The sun is lowest in the sky'], answer: 0,
              explain: 'As the Asian landmass heats in summer, low pressure draws in moist south-west winds and the ITCZ moves north, bringing heavy rain.' },
            { type: 'mcq', graph: true, q: 'Why is April hotter than June, even though the sun is overhead at noon in both months?', options: ['From May, monsoon cloud and rain block sunshine and cool the ground', 'The Earth is further from the sun in April', 'April has longer nights', 'June has snow'], answer: 0,
              explain: 'Pre-monsoon April has clear skies and strong sunshine. Once the monsoon arrives, cloud cover and evaporation of rainfall reduce temperatures.' }
          ]
        }
      },
      {
        id: 'city', title: 'A primate city', icon: '🏙️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Bangkok is called a “primate city”. What does that mean?', options: ['It is far bigger and more important than any other city in the country', 'It has a large zoo', 'It is the oldest city in the world', 'It is the smallest city in Thailand'], answer: 0,
              explain: 'Bangkok is many times bigger than Thailand’s next largest city, and most government, business and universities are there.' },
            { type: 'sort', q: 'Why do people move from the countryside to Bangkok? Sort the push and pull factors.', bins: ['Push (from the countryside)', 'Pull (to Bangkok)'],
              items: [['Low farm incomes', 0], ['Few jobs outside farming', 0], ['Droughts or floods ruining crops', 0], ['Jobs in factories, shops and offices', 1], ['Better hospitals and universities', 1], ['Higher wages', 1]],
              explain: 'Push factors drive people away from rural areas; pull factors attract them to the city.' },
            { type: 'mcq', q: 'Which problem has Bangkok tried to reduce by building the BTS Skytrain and MRT lines?', options: ['Traffic congestion and air pollution', 'Earthquakes', 'Volcanic ash', 'Snowstorms'], answer: 0,
              explain: 'Mass transit moves large numbers of people without cars, reducing traffic jams and exhaust fumes.' },
            { type: 'mcq', q: 'Tourists flock to the Grand Palace and Wat Arun beside the Chao Phraya. How does this help Bangkok?', options: ['Tourist spending supports jobs in hotels, restaurants, transport and shops', 'It stops the city flooding', 'It lowers the temperature', 'It grows more rice'], answer: 0,
              explain: 'Tourism is a major source of income and jobs for Bangkok, though it also adds to crowding and traffic.' }
          ],
          adv: [
            { type: 'mcq', q: 'At the 2010 census over 14 million people, 22.2% of Thailand’s population, lived in the Bangkok Metropolitan Region, which produces around half of the country’s GDP. What does this suggest?', options: ['Uneven development: wealth and opportunity are concentrated in one core region', 'Thailand’s population is evenly spread', 'Rural areas produce most of the wealth', 'Bangkok is losing importance'], answer: 0,
              explain: 'A core-periphery pattern: the capital region attracts investment and migrants, while regions such as the north-east have lower incomes.' },
            { type: 'sort', q: 'Classify these impacts of rapid urban growth in Bangkok.', bins: ['Social', 'Economic', 'Environmental'],
              items: [['Informal settlements along canals and railways', 0], ['Long commuting times', 0], ['Concentration of jobs and investment', 1], ['High land and housing costs', 1], ['PM2.5 air pollution', 2], ['Loss of green space and wetlands', 2]],
              explain: 'Rapid growth brings opportunity but also housing, transport and environmental pressures.' },
            { type: 'mcq', q: 'Which strategy would best reduce Bangkok’s primacy?', options: ['Investing in regional cities and transport links so jobs and services grow elsewhere', 'Building more offices in central Bangkok', 'Closing regional universities', 'Encouraging all factories to move to Bangkok'], answer: 0,
              explain: 'Decentralisation, such as developing the Eastern Economic Corridor and regional centres, spreads growth and reduces migration pressure on the capital.' }
          ]
        }
      },
      {
        id: 'rice', title: 'Rice on the Central Plains', icon: '🌾',
        tasks: {
          ks3: [
            { type: 'sort', q: 'Sort these into conditions that are good for growing paddy rice and conditions that are not.', bins: ['Good for rice', 'Not good for rice'],
              items: [['Flat land that can be flooded', 0], ['Plenty of water from rain or rivers', 0], ['Hot temperatures', 0], ['Steep, dry slopes', 1], ['Freezing winters', 1], ['Sandy soil that drains quickly', 1]],
              explain: 'Paddy rice grows in flooded fields, so it needs flat land, lots of water, heat and soil that holds water, like the clay soils of the Central Plains.' },
            { type: 'mcq', q: 'Thailand is one of the world’s biggest rice exporters. Why are the Central Plains so good for rice?', options: ['Flat, fertile river soils, monsoon rain and water from the Chao Phraya for irrigation', 'They are cold and dry', 'They are high mountains', 'They are covered in ice'], answer: 0,
              explain: 'River floods have deposited fertile alluvium, and dams and canals from the Chao Phraya let farmers grow more than one crop a year.' },
            { type: 'mcq', q: 'Many young people leave rice-farming villages for jobs in Bangkok. What problem can this cause in the countryside?', options: ['An ageing farm workforce, with fewer young people to farm', 'Too many farmers', 'Rice stops growing', 'Villages become cities overnight'], answer: 0,
              explain: 'When young people migrate, older family members are left to farm, and some farms use more machinery or stop farming altogether.' }
          ],
          adv: [
            { type: 'mcq', q: 'Irrigation allows a second rice crop in the dry season. What is the main risk of this?', options: ['Water shortages in drought years, when reservoirs cannot supply both farms and cities', 'It makes the monsoon stronger', 'It cools the climate', 'It stops floods completely'], answer: 0,
              explain: 'Dry-season rice uses a lot of water. In drought years, farmers, Bangkok’s water supply and salt-water intrusion control all compete for limited river flow.' },
            { type: 'mcq', q: 'Flooded rice paddies release methane. Why does this matter?', options: ['Methane is a powerful greenhouse gas, so rice farming contributes to climate change', 'Methane improves soil fertility', 'Methane cools the atmosphere', 'It is harmless'], answer: 0,
              explain: 'Bacteria in waterlogged soil produce methane. Techniques such as alternate wetting and drying can cut emissions and save water.' },
            { type: 'sort', q: 'Classify these as inputs, processes or outputs of a rice farm system.', bins: ['Input', 'Process', 'Output'],
              items: [['Monsoon rain and irrigation water', 0], ['Seeds and fertiliser', 0], ['Ploughing and planting', 1], ['Harvesting and threshing', 1], ['Rice grain for sale', 2], ['Straw and husks', 2]],
              explain: 'Farms can be studied as systems: inputs are turned into outputs by processes.' }
          ]
        }
      }
    ]
  };
})();
