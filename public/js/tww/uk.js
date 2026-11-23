/* Travel the Wright Way — destination: the United Kingdom (northern England: the Holderness coast, a temperate maritime climate, river flooding in York, and British culture).
 * Climate data: York, 1991–2020 normals (climatestotravel.com).
 * Facts: the Holderness coast is one of the fastest-eroding coastlines in Europe, losing on average around 2 m a year, because its cliffs are soft boulder clay (till);
 *   longshore drift carries sediment south, building Spurn Head spit; rock groynes and a revetment at Mappleton (1991) protected the village but increased erosion further south;
 *   York lies where the River Foss joins the River Ouse; in the Boxing Day floods of 2015 the Foss Barrier had to be raised because its pumping station was at risk of flooding;
 *   the "Slowing the Flow" project at Pickering used leaky dams and tree planting (natural flood management);
 *   York was founded by the Romans as Eboracum in AD 71 and later became the Viking town of Jorvik;
 *   the Notting Hill Carnival in London celebrates Caribbean culture.
 */
(function () {
  var COAST_SVG = '' +
  '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map-style diagram of an eroding coastline with clay cliffs, a town protected by a sea wall and groynes, a beach, longshore drift, a spit and a salt marsh">' +
  '<rect width="600" height="420" fill="#3f8fcf"/>' +
  // land
  '<path d="M0 0 L300 0 C 304 100, 312 220, 322 330 C 340 360, 380 380, 404 392 L400 400 C 370 392, 340 380, 316 360 L0 420 Z" fill="#8fbf6a"/>' +
  '<path d="M0 360 L316 360 L0 420 Z" fill="#8fbf6a"/>' +
  // beach
  '<path d="M300 0 C 304 100, 312 220, 322 330 L332 330 C 322 220, 314 100, 312 0 Z" fill="#f4dfa6"/>' +
  // spit
  '<path d="M322 330 C 350 350, 380 372, 408 392 C 412 398, 404 402, 398 398 C 372 382, 344 364, 318 344 Z" fill="#f4dfa6"/>' +
  // salt marsh
  '<path d="M322 352 C 340 366, 362 380, 384 392 L340 398 C 330 386, 320 372, 318 358 Z" fill="#6f8f4a"/><g stroke="#3d8fc6" stroke-width="1.5" fill="none"><path d="M330 372 q8 6 18 6"/><path d="M336 384 q10 4 22 2"/></g>' +
  // cliffs (hatched)
  '<g stroke="#7a5a32" stroke-width="2">' + (function () { var g = ''; for (var y = 6; y < 110; y += 8) g += '<line x1="' + (290 + y * 0.03) + '" y1="' + y + '" x2="' + (300 + y * 0.04) + '" y2="' + (y + 5) + '"/>'; return g; })() + '</g>' +
  '<g stroke="#7a5a32" stroke-width="2">' + (function () { var g = ''; for (var y = 200; y < 320; y += 8) g += '<line x1="' + (300 + (y - 200) * 0.1) + '" y1="' + y + '" x2="' + (310 + (y - 200) * 0.1) + '" y2="' + (y + 5) + '"/>'; return g; })() + '</g>' +
  // farms near the cliff edge
  '<g fill="#e8e1d0" stroke="#7a6a52" stroke-width="1"><rect x="262" y="40" width="14" height="10"/><rect x="250" y="70" width="12" height="9"/></g>' +
  // town with sea wall
  '<g fill="#d6c7b0" stroke="#7a6a52" stroke-width="1">' + (function () { var g = ''; for (var r = 0; r < 4; r++) for (var c = 0; c < 4; c++) g += '<rect x="' + (232 + c * 17) + '" y="' + (120 + r * 16) + '" width="12" height="11"/>'; return g; })() + '</g>' +
  '<path d="M304 116 C 305 140, 306 160, 307 186" stroke="#4b5563" stroke-width="7" fill="none"/>' +
  // groynes
  '<g stroke="#5b4630" stroke-width="5">' + (function () { var g = ''; for (var y = 196; y < 250; y += 18) g += '<line x1="' + (312 + (y - 196) * 0.08) + '" y1="' + y + '" x2="' + (346 + (y - 196) * 0.08) + '" y2="' + (y + 4) + '"/>'; return g; })() + '</g>' +
  '<g stroke="#5b4630" stroke-width="5"><line x1="309" y1="128" x2="340" y2="132"/><line x1="310" y1="150" x2="341" y2="154"/><line x1="310" y1="172" x2="342" y2="176"/></g>' +
  // longshore drift arrow
  '<g stroke="#fff" stroke-width="4" fill="#fff"><line x1="380" y1="196" x2="388" y2="292"/><path d="M380 290 L389 308 L398 290 Z"/></g>' +
  '<g stroke="#fff" stroke-width="2" fill="none" opacity=".8"><path d="M360 230 l18 -10 l-10 24"/><path d="M362 260 l18 -10 l-10 24"/></g>' +
  '<text x="560" y="30" font-size="14" font-weight="700" fill="#fff" text-anchor="middle">N ↑</text><text x="470" y="30" font-size="13" font-style="italic" fill="#e6f6ff" text-anchor="middle">North Sea</text>' +
  // leader lines
  '<g stroke="#11243b" stroke-width="1.5" stroke-dasharray="4 3"><line x1="200" y1="40" x2="294" y2="44"/><line x1="420" y1="104" x2="308" y2="140"/><line x1="420" y1="178" x2="344" y2="176"/><line x1="420" y1="262" x2="396" y2="252"/><line x1="200" y1="254" x2="316" y2="254"/><line x1="444" y1="340" x2="396" y2="388"/><line x1="200" y1="380" x2="334" y2="378"/></g>' +
  '</svg>';

  window.TWW_DEST = window.TWW_DEST || {};
  window.TWW_DEST.uk = {
    id: 'uk',
    name: 'United Kingdom',
    short: 'the UK',
    the: true,
    country: 'United Kingdom',
    gateway: 'York',
    lonlat: [-1.08, 53.96],
    locator: { box: [-8.5, 2.5, 49.8, 59], places: [['York', -1.08, 53.96, 'l'], ['Hull', -0.33, 53.74, 'r'], ['London', -0.13, 51.51, 'r'], ['Edinburgh', -3.19, 55.95, 'r'], ['Cardiff', -3.18, 51.48, 'l'], ['Belfast', -5.93, 54.6, 'l'], ['North Sea', 1.4, 56.4, 'a']] },
    stamp: { colour: '#1e3a8a', icon: '🌧️' },
    transport: { name: 'train', verb: 'Ride', emoji: '🚆' },
    scene: 'brit',
    photo: { file: 'Coastal erosion at Far Grange Park, Holderness - geograph.org.uk - 3778766.jpg', alt: 'A crumbling clay cliff with fallen soil and debris on the beach on the Holderness coast in Yorkshire', author: 'Ian S', licence: 'CC BY-SA 2.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/' },
    intro: {
      ks3: 'Welcome to the United Kingdom! Catch the train to the historic city of York, then out to the Yorkshire coast, where whole fields are falling into the sea. Explore crumbling cliffs, flooded rivers and very changeable British weather.',
      adv: 'Travel by train across northern England. This expedition covers coastal processes and management on the Holderness coast, a temperate maritime climate, river flooding and its management in York, and the UK’s changing people and culture.'
    },
    facts: ['The Holderness coast is one of the fastest-eroding coastlines in Europe.', 'York was founded by the Romans almost 2,000 years ago, then ruled by the Vikings.', 'The UK is made up of four countries: England, Scotland, Wales and Northern Ireland.'],
    climate: {
      place: 'York, England', source: 'Averages 1991–2020', lat: '54°N', rmax: 100, rstep: 20,
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      temp: [4.2, 4.6, 6.4, 8.8, 11.8, 14.6, 16.7, 16.5, 13.9, 10.5, 6.8, 4.3],
      rain: [50, 40, 40, 50, 45, 55, 55, 65, 55, 60, 60, 60]
    },
    diagrams: { coast: COAST_SVG },
    stations: [
      {
        id: 'coast', title: 'The crumbling coast', icon: '🌊',
        tasks: {
          ks3: [
            { type: 'label', diagram: 'coast', prompt: 'Label this stretch of the Holderness coast.',
              spots: [{ x: 18, y: 10, a: 'Cliff' }, { x: 82, y: 25, a: 'Sea wall' }, { x: 82, y: 42, a: 'Groyne' }, { x: 82, y: 63, a: 'Longshore drift' }, { x: 18, y: 61, a: 'Beach' }, { x: 84, y: 80, a: 'Spit' }, { x: 18, y: 90, a: 'Salt marsh' }],
              extra: [],
              explain: 'Waves move sand along the coast by longshore drift and drop it to build a spit. Sea walls and groynes protect the town.' },
            { type: 'mcq', q: 'Why does the Holderness coast erode so quickly?', options: ['Its cliffs are made of soft clay', 'It has very calm seas', 'The cliffs are made of hard granite', 'Too many people visit the beach'], answer: 0,
              explain: 'The cliffs are boulder clay left by glaciers. Powerful North Sea waves wash it away at about 2 m a year on average.' },
            { type: 'mcq', q: 'What do groynes do?', options: ['Trap sand to keep a wide beach', 'Stop all waves reaching the coast', 'Carry sewage out to sea', 'Help boats land on the beach safely at high tide'], answer: 0,
              explain: 'Groynes slow longshore drift. A wide beach absorbs wave energy before it reaches the cliffs.' }
          ],
          adv: [
            { type: 'label', diagram: 'coast', prompt: 'Label the coastline. One label does not belong.',
              spots: [{ x: 18, y: 10, a: 'Boulder-clay cliff' }, { x: 82, y: 25, a: 'Sea wall' }, { x: 82, y: 42, a: 'Rock groyne' }, { x: 82, y: 63, a: 'Longshore drift' }, { x: 84, y: 80, a: 'Spit' }, { x: 18, y: 61, a: 'Beach' }, { x: 18, y: 90, a: 'Salt marsh' }],
              extra: ['Arête'],
              explain: 'Arêtes are glacial landforms. Salt marsh develops in the sheltered water behind a spit, where fine mud settles.' },
            { type: 'mcq', q: 'Rock groynes built at Mappleton in 1991 protected the village. What happened further south?', options: ['Erosion speeded up because less sand arrived', 'A new beach formed', 'The cliffs stopped eroding', 'The sea level fell, leaving the old cliffs high and dry'], answer: 0,
              explain: 'Groynes trap sediment updrift, starving beaches downdrift. Protecting one place can shift the problem to another.' },
            { type: 'mcq', q: 'For most of the Holderness coast, the shoreline plan is “no active intervention”. Why?', options: ['Defences would cost more than the land is worth', 'Erosion there has already stopped naturally because of the groynes further north', 'It is illegal to build defences', 'The land there is all owned by the sea'], answer: 0,
              explain: 'Cost–benefit analysis decides where to “hold the line”. Mostly farmland is left to erode, which also feeds sand to beaches further south.' }
          ]
        }
      },
      {
        id: 'climate', title: 'British weather', icon: '🌦️',
        tasks: {
          ks3: [
            { type: 'mcq', graph: true, q: 'Which is the wettest month in York?', options: ['August', 'February', 'March', 'May'], answer: 0,
              explain: 'August has the tallest bar, about 65 mm, partly from summer thunderstorms.' },
            { type: 'mcq', graph: true, q: 'Describe the rainfall in York.', options: ['Some rain in every month', 'A long dry season', 'No rain in summer', 'Heavy monsoon rain in summer, then months of drought'], answer: 0,
              explain: 'Every month gets 40–65 mm. There is no real dry season.' },
            { type: 'mcq', q: 'The UK has mild winters, cool summers and rain all year. What is this climate called?', options: ['Temperate maritime', 'Hot desert', 'Tropical rainforest', 'Polar'], answer: 0,
              explain: '“Maritime” means influenced by the sea, which keeps temperatures mild in both winter and summer.' }
          ],
          adv: [
            { type: 'number', graph: true, q: 'Calculate the total annual rainfall in York (mm).', answer: 635, tol: 10, unit: 'mm',
              explain: 'Adding the twelve months gives about 635 mm.' },
            { type: 'mcq', q: 'The Lake District gets over 2,000 mm of rain a year, but York gets about 635 mm. Why?', options: ['York is in the Pennines’ rain shadow', 'York is closer to the Equator', 'York is beside the Atlantic', 'York is much higher above sea level than the Lake District fells'], answer: 0,
              explain: 'Prevailing south-westerly winds drop most of their rain over western hills, so air sinking on the eastern side is drier.' },
            { type: 'mcq', q: 'The UK is much milder in winter than places at the same latitude in Canada. Why?', options: ['A warm ocean current, the North Atlantic Drift', 'The UK is closer to the sun', 'The Pennines block cold Arctic winds from reaching most of the country', 'The UK has many large cities'], answer: 0,
              explain: 'This warm ocean current, part of the Gulf Stream system, and the prevailing westerly winds keep UK winters mild.' }
          ]
        }
      },
      {
        id: 'floods', title: 'York’s rivers in flood', icon: '🌧️',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Why does building more roads and car parks increase flood risk?', options: ['Rain cannot soak into concrete, so it runs off quickly', 'Cars make it rain more', 'Roads make rivers deeper', 'Concrete soaks up rainwater and then releases it slowly over many weeks'], answer: 0,
              explain: 'Impermeable surfaces send water rapidly into drains and rivers, so they rise faster and higher.' },
            { type: 'sort', q: 'Sort these flood defences.', bins: ['Hard engineering', 'Soft engineering'],
              items: [['Flood walls', 0], ['A flood barrier', 0], ['Making the river channel deeper', 0], ['Planting trees upstream', 1], ['Not building on the floodplain', 1], ['Letting fields flood on purpose', 1]],
              explain: 'Hard engineering uses structures; soft engineering works with natural processes and is usually cheaper and greener.' },
            { type: 'mcq', q: 'York is built where two rivers meet. What is the meeting point of two rivers called?', options: ['A confluence', 'A source', 'A mouth', 'An estuary'], answer: 0,
              explain: 'The River Foss joins the River Ouse in the centre of York, which is why the city floods so often.' }
          ],
          adv: [
            { type: 'mcq', q: 'On a flood hydrograph, what is the lag time?', options: ['Time from peak rainfall to peak discharge', 'How long a flood lasts', 'The time it takes to build defences', 'The time between two floods in the same year'], answer: 0,
              explain: 'A short lag time means a “flashy” river that rises quickly, giving people less warning.' },
            { type: 'mcq', q: 'In the 2015 Boxing Day floods, York’s Foss Barrier was raised and homes flooded. Why was it raised?', options: ['Floodwater threatened its pumps', 'It was being cleaned', 'Nobody had warned the engineers that heavy rain was on its way', 'The River Foss had dried up'], answer: 0,
              explain: 'The barrier has since been upgraded with more powerful pumps and the pumping station has been raised.' },
            { type: 'mcq', q: 'In Pickering, the “Slowing the Flow” project built leaky wooden dams and planted trees upstream. What was the aim?', options: ['To make the river peak lower and later', 'Speed water through the town', 'Create a new reservoir for drinking', 'Stop all rain from reaching the river by covering the fields'], answer: 0,
              explain: 'Natural flood management reduces peak discharge and lengthens lag time, and has helped protect Pickering since it was built.' }
          ]
        }
      },
      {
        id: 'people', title: 'Romans, Vikings and carnival', icon: '🏰',
        tasks: {
          ks3: [
            { type: 'mcq', q: 'Culture: York was once a Viking town. What did the Vikings call it?', options: ['Jorvik', 'Londinium', 'Valhalla', 'Edinburgh'], answer: 0,
              explain: 'The Romans called it Eboracum. Later Viking settlers named it Jorvik, which over time became York.' },
            { type: 'mcq', q: 'Which four countries make up the United Kingdom?', options: ['England, Scotland, Wales and Northern Ireland', 'England, France, Wales and Ireland', 'England, Scotland, Wales, Northern Ireland and the Republic of Ireland', 'London, York, Cardiff and Belfast'], answer: 0,
              explain: 'The Republic of Ireland is a separate country. Northern Ireland is part of the UK.' },
            { type: 'mcq', q: 'Culture: the Notting Hill Carnival in London is one of the biggest street festivals in Europe. Which culture does it celebrate?', options: ['Caribbean', 'Japanese', 'Viking', 'Roman'], answer: 0,
              explain: 'Carnival began with Caribbean communities who came to Britain after the Second World War. Steel bands, costumes and food fill the streets.' }
          ],
          adv: [
            { type: 'mcq', q: 'Building new homes on brownfield sites is often preferred to greenfield sites. Why?', options: ['It reuses land and protects countryside', 'It is always cheaper', 'Brownfield sites have no pollution', 'Greenfield sites are too far from any town'], answer: 0,
              explain: 'Brownfield land may need cleaning up first, but redevelopment can regenerate run-down areas.' },
            { type: 'mcq', q: 'Incomes and house prices are generally higher in south-east England than in the north. What is this pattern often called?', options: ['The north–south divide', 'The Brandt line', 'The rain shadow', 'Counter-urbanisation, as people move from cities'], answer: 0,
              explain: 'London’s finance and service jobs draw investment south. Governments have tried to “level up” northern regions.' },
            { type: 'mcq', q: 'Tourism is a major industry in York. Which is the best example of sustainable tourism there?', options: ['Park-and-ride buses into the historic centre', 'Building car parks inside the city walls', 'Knocking down old buildings for hotels', 'Encouraging large cruise ships to sail up the River Ouse'], answer: 0,
              explain: 'Park-and-ride reduces congestion and air pollution around fragile heritage sites like York Minster.' }
          ]
        }
      }
    ]
  };
})();
