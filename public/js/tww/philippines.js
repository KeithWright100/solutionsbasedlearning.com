/* Travel the Wright Way — destination: The Philippines (Ring of Fire volcanoes, typhoons, a tropical monsoon climate, rice terraces, migration and remittances, and Filipino culture).
 * Climate data: Manila (Ninoy Aquino International Airport), 1991–2020 averages (climatestotravel.com).
 * Facts: the Philippines has over 7,600 islands and lies on the Pacific Ring of Fire, where the Philippine Sea Plate is subducted at the Philippine Trench;
 *   Mayon is the country's most active volcano, famous for its almost perfect cone; Mount Pinatubo's 1991 eruption was one of the largest of the 20th century and cooled global temperatures by about 0.5°C;
 *   on average about 20 tropical cyclones enter the Philippine Area of Responsibility each year; Typhoon Haiyan (Yolanda), November 2013, killed more than 6,000 people, many in Tacloban from the storm surge;
 *   the Ifugao rice terraces in the Cordillera (around Banaue and Batad) were carved into the mountains by hand about 2,000 years ago; the Rice Terraces of the Philippine Cordilleras are a UNESCO site;
 *   millions of Filipinos work overseas and send money home (remittances); call centres and business process outsourcing employ over a million people; Metro Manila is one of the most densely populated urban areas in the world;
 *   most Filipinos are Roman Catholic after more than 300 years of Spanish rule; Filipino and English are official languages; jeepneys began as converted US military jeeps after the Second World War; Christmas celebrations begin in September.
 */
(function () {
  var VOLCANO_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a subduction zone: an oceanic plate sinking at a trench beneath the Philippines, magma rising to a cone-shaped volcano with an ash cloud and a pyroclastic flow">' +
  '<rect width="600" height="420" fill="#cfe7f6"/>' +
  // ocean
  '<path d="M600 150 L360 150 L360 170 L600 170 Z" fill="#1f8fbf"/>' +
  // oceanic plate subducting
  '<path d="M600 170 L380 170 C 330 190, 260 250, 180 330 L150 380 L210 380 C 270 300, 330 236, 380 210 L600 210 Z" fill="#6b7a8a"/>' +
  '<g fill="none" stroke="#11243b" stroke-width="2"><path d="M560 190 l-24 0 m6 -5 l-6 5 l6 5"/><path d="M470 190 l-24 0 m6 -5 l-6 5 l6 5"/></g>' +
  // continental / island crust
  '<path d="M0 150 L120 150 L170 60 L180 54 L190 60 L240 150 L360 150 L380 170 C 330 190, 260 250, 180 330 L0 330 Z" fill="#b9a68a"/>' +
  '<path d="M0 330 L180 330 L150 380 L0 380 Z" fill="#d9603b"/>' +
  // trench
  '<path d="M356 150 L372 172 L384 150 Z" fill="#14547a"/>' +
  // magma
  '<path d="M200 300 C 196 250, 186 160, 180 66" fill="none" stroke="#e8562a" stroke-width="7"/><ellipse cx="204" cy="300" rx="26" ry="14" fill="#e8562a"/>' +
  // ash cloud
  '<g fill="#8a8f98" opacity=".85"><circle cx="180" cy="40" r="18"/><circle cx="200" cy="28" r="16"/><circle cx="162" cy="26" r="14"/><circle cx="214" cy="12" r="12"/></g>' +
  // pyroclastic flow
  '<path d="M190 64 C 210 90, 220 120, 244 150 L230 150 C 214 124, 200 98, 186 72 Z" fill="#a8a29e"/>' +
  // rice terrace on left
  '<g stroke="#4f7a32" stroke-width="3">' + (function () { var g = ''; for (var i = 0; i < 5; i++) g += '<line x1="' + (40 + i * 12) + '" y1="' + (150 - i * 0) + '" x2="' + (40 + i * 12) + '" y2="150"/>'; return g; })() + '</g>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="372" y1="110" x2="370" y2="152"/><line x1="470" y1="262" x2="440" y2="206"/><line x1="96" y1="248" x2="190" y2="200"/><line x1="96" y1="96" x2="166" y2="80"/><line x1="268" y1="30" x2="220" y2="28"/><line x1="300" y1="100" x2="226" y2="120"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.philippines = {
    id: 'philippines',
    name: 'The Philippines',
    short: 'the Philippines',
    the: true,
    country: 'Philippines',
    gateway: 'Manila',
    lonlat: [120.98, 14.6],
    locator: { box: [115.5, 128.5, 4.5, 21], places: [['Manila', 120.98, 14.6, 'l'], ['Banaue', 121.06, 16.92, 'r'], ['Mayon', 123.69, 13.26, 'r'], ['Tacloban', 125.0, 11.24, 'r'], ['Davao', 125.6, 7.07, 'l'], ['Philippine Sea', 126.4, 14.9, 'a'], ['South China Sea', 117.6, 12.0, 'a']] },
    stamp: { colour: '#1d4ed8', icon: '🌋' },
    transport: { name: 'jeepney and bangka boat', verb: 'Sail', emoji: '⛵' },
    scene: 'bangka',
    photo: { file: 'Mayon1984.jpg', alt: 'A tall, steep, cone-shaped volcano rising above green fields and the ruins of an old church', author: 'Randy C. Bunney', licence: 'CC BY-SA 2.5', licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.5/' },
    intro: {
      ks3: 'Mabuhay! Welcome to the Philippines, a country of more than 7,000 islands. Sail a bangka outrigger boat beneath Mayon Volcano, climb the 2,000-year-old rice terraces of Banaue, and find out how people live with volcanoes and typhoons.',
      adv: 'Island-hop across the Philippines. This expedition covers subduction and composite volcanoes, typhoons and Haiyan, a tropical monsoon climate, the Ifugao rice terraces, migration and remittances, and Filipino culture.'
    },
    facts: ['The Philippines has more than 7,600 islands.', 'About 20 typhoons and tropical storms reach the Philippines each year.', 'Jeepneys were first made from old army jeeps.'],
    climate: {
      place: 'Manila, Philippines', source: '1991–2020 averages (climatestotravel.com)', lat: '15°N', rmax: 500, rstep: 100,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [26.5, 27.0, 28.3, 29.8, 30.0, 29.2, 28.2, 27.9, 28.0, 28.0, 27.8, 27.0],
      rain: [20, 20, 20, 25, 160, 255, 430, 475, 395, 220, 120, 100]
    },
    diagrams: { volcano: VOLCANO_SVG },
    stations: [
      {
        id: 'volcano', title: 'Ring of Fire', icon: '🌋',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'volcano', prompt: 'Label how volcanoes form in the Philippines.',
              spots: [{ x: 62, y: 22, a: 'Trench' }, { x: 80, y: 66, a: 'Sinking plate' }, { x: 14, y: 60, a: 'Magma' }, { x: 14, y: 22, a: 'Volcano' }, { x: 46, y: 8, a: 'Ash cloud' }, { x: 52, y: 26, a: 'Hot ash flow' }],
              extra: [],
              explain: 'An ocean plate sinks under the Philippines at a deep trench. It melts, and magma rises to form volcanoes like Mayon.' },
            { type: 'mcq', photo: true, q: 'Look at the photo of Mayon. What shape is this volcano?', options: ['A steep cone', 'A flat shield', 'A deep crater lake', 'A long ridge'], answer: 0,
              explain: 'Mayon is famous for its almost perfect cone. It is the most active volcano in the Philippines.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Mayon volcano from Manila?', options: ['South-east', 'North-west', 'North-east', 'South-west'], answer: 0,
              explain: 'Mayon is about 330 km south-east of Manila, near the city of Legazpi.' }
          ],
          adv: [
            { type: 'label', diagram: 'volcano', prompt: 'Label the subduction zone. One label does not belong.',
              spots: [{ x: 62, y: 22, a: 'Philippine Trench' }, { x: 80, y: 66, a: 'Subducting oceanic plate' }, { x: 14, y: 60, a: 'Rising magma' }, { x: 14, y: 22, a: 'Composite volcano' }, { x: 46, y: 8, a: 'Eruption column' }, { x: 52, y: 26, a: 'Pyroclastic flow' }],
              extra: ['Mid-ocean ridge'],
              explain: 'Mid-ocean ridges form where plates pull apart. Here plates converge: the denser oceanic plate is subducted and partly melts.' },
            { type: 'mcq', photo: true, q: 'Study the photo of Mayon. Which feature shows it is a composite (strato) volcano?', options: ['Steep sides built of layers of ash and lava', 'A very wide, gentle shield shape', 'Lava flowing out in a long, flat, gentle sheet', 'It stands on a mid-ocean ridge'], answer: 0,
              explain: 'Sticky, gas-rich magma erupts explosively, building steep layers of ash and lava. The ruins in the photo are from an 1814 eruption.' },
            { type: 'mcq', q: 'Mount Pinatubo’s 1991 eruption lowered world temperatures by about 0.5°C. Why?', options: ['Sulphur gases in the stratosphere reflected sunlight', 'The lava cooled the oceans', 'The eruption blocked the trade winds', 'It used up heat stored deep in the Earth’s core and mantle'], answer: 0,
              explain: 'Tiny droplets of sulphuric acid spread around the world and stayed in the stratosphere for about two years.' }
          ]
        }
      },
      {
        id: 'climate', title: 'Typhoon season', icon: '🌀',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in Manila?', options: ['August', 'January', 'March', 'February'], answer: 0,
              explain: 'August gets about 475 mm, during the south-west monsoon and typhoon season.' },
            { type: 'mcq', graph: true, q: 'How much does Manila’s temperature change through the year?', options: ['Very little', 'From freezing to hot', 'About 30°C', 'It changes every day by 40°C'], answer: 0,
              explain: 'It stays between about 26°C and 30°C all year, because Manila is in the tropics.' },
            { type: 'mcq', q: 'In 2013 Typhoon Haiyan hit Tacloban. What caused most of the deaths?', options: ['A storm surge of sea water', 'Snow and ice', 'A volcanic eruption', 'A heatwave'], answer: 0,
              explain: 'Winds pushed the sea several metres above normal, flooding the city. More than 6,000 people died.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in Manila (mm).', answer: 2240, tol: 10, unit: 'mm',
              explain: 'Adding the twelve months gives about 2,240 mm.' },
            { type: 'number', graph: true, q: 'Calculate the annual temperature range in Manila (°C). Give one decimal place.', answer: 3.5, tol: 0.1, unit: '°C',
              explain: 'Warmest 30.0°C − coolest 26.5°C = 3.5°C, a small range typical of the tropics.' },
            { type: 'mcq', map: true, q: 'Map skills: use the scale bar to estimate the straight-line distance from Manila to Tacloban, where Haiyan made landfall.', options: ['About 575 km', 'About 100 km', 'About 2,000 km', 'About 5,000 km'], answer: 0,
              explain: 'It is about 570 km south-east. Typhoons usually approach from the Philippine Sea to the east.' }
          ]
        }
      },
      {
        id: 'terraces', title: 'Stairways to the sky', icon: '🌾',
        tasks: {
          ks3: [
            { type: 'mcq', photo: { file: 'Banaue Philippines Batad-Rice-Terraces-02.jpg', alt: 'Steep green mountainsides cut into hundreds of narrow, curving flat fields, with a small village in the valley', author: 'CEphoto, Uwe Aranas', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' }, q: 'This photo was taken near Banaue. What has been built on the mountainside?', options: ['Rice terraces', 'Ski slopes', 'Sand dunes', 'Glaciers'], answer: 0,
              explain: 'The Ifugao people carved these terraces by hand about 2,000 years ago.' },
            { type: 'mcq', q: 'Why are terraces built on steep slopes?', options: ['To make flat land and stop soil washing away', 'To make the slopes steeper so water runs off faster', 'To keep animals out', 'To collect snow'], answer: 0,
              explain: 'Each flat step holds water for rice and stops heavy rain from eroding the soil.' },
            { type: 'mcq', map: true, q: 'Map skills: use the north arrow. In which direction is Banaue from Manila?', options: ['North', 'South', 'East', 'West'], answer: 0,
              explain: 'Banaue is in the mountains of northern Luzon, about 260 km north of Manila.' }
          ],
          adv: [
            { type: 'mcq', photo: { file: 'Banaue Philippines Batad-Rice-Terraces-02.jpg', alt: 'Steep green mountainsides cut into hundreds of narrow, curving flat fields, with a small village in the valley', author: 'CEphoto, Uwe Aranas', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' }, q: 'Study the photo. Why do the terrace walls follow curved lines around the hills?', options: ['They follow the contours to keep each field level', 'They were built to look like the waves on the sea at Manila', 'They mark property boundaries only', 'They follow old river channels'], answer: 0,
              explain: 'Following the contours keeps each step flat, so water can be held evenly across the field.' },
            { type: 'mcq', q: 'Some terraces are being abandoned. Which is a main reason?', options: ['Young people migrate to cities for work', 'The rice grows too fast', 'There is too much flat land in the mountains', 'Tourists are banned'], answer: 0,
              explain: 'Without people to repair them, walls collapse. Tourism and heritage projects help pay for repairs.' },
            { type: 'mcq', q: 'Millions of Filipinos work abroad and send money home. What are these payments called?', options: ['Remittances', 'Subsidies', 'Tariffs', 'Quotas'], answer: 0,
              explain: 'Remittances are a large part of the economy and pay for school fees, housing and healthcare.' }
          ]
        }
      },
      {
        id: 'culture', title: 'Jeepneys and fiestas', icon: '🚌',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: what was the first jeepney made from?', options: ['Old army jeeps', 'Boats', 'Railway carriages', 'Tractors'], answer: 0,
              explain: 'After the Second World War, Filipinos turned left-over US army jeeps into colourful shared taxis.' },
            { type: 'mcq', q: 'Culture: when do Christmas celebrations start in the Philippines?', options: ['In September', 'On 24 December', 'In January', 'In June'], answer: 0,
              explain: 'The “ber months” (September to December) are full of Christmas songs and decorations.' },
            { type: 'mcq', q: 'Which two languages are official in the Philippines?', options: ['Filipino and English', 'Spanish and French', 'Chinese and Thai', 'Malay and Arabic'], answer: 0,
              explain: 'There are also more than 100 local languages, such as Cebuano and Ilocano.' }
          ],
          adv: [
            { type: 'mcq', q: 'Why are most Filipinos Roman Catholic?', options: ['Spain ruled the islands for over 300 years', 'The religion began there', 'It was brought by traders from India', 'It was chosen in a recent vote'], answer: 0,
              explain: 'Spanish rule lasted from 1565 to 1898, leaving churches, festivals and many Spanish words.' },
            { type: 'mcq', q: 'Call centres in Manila answer phone calls for companies in the USA and UK. Why there?', options: ['Many workers speak fluent English', 'Phone calls are free there', 'It is in the same time zone as London', 'There are no other jobs in Manila'], answer: 0,
              explain: 'Business process outsourcing employs over a million Filipinos, often working night shifts to match American hours.' },
            { type: 'mcq', q: 'Metro Manila is one of the most crowded cities on Earth. Which is a typical problem?', options: ['Informal settlements in flood-prone areas', 'Too few people to fill all of the jobs available', 'Too much empty land', 'Cold winters'], answer: 0,
              explain: 'Many poorer families live on riverbanks and coasts, where floods and typhoons hit hardest.' }
          ]
        }
      }
    ]
  };
})();
