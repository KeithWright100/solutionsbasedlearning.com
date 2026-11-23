/* SBL — Edexcel IGCSE Geography lesson config.
   Read by sbl-teach-bot.js (Test My Knowledge + Spaced Retrieval) and
   by the admin Lesson Resources page and the teacher Class Sheet.
   Spaced Retrieval only draws on lessons EARLIER in the same topic's
   order array (each IGCSE topic has its own isolated order array). */
window.SBL_LESSONS = window.SBL_LESSONS || {};
window.SBL_IGCSE_GEO_LESSON_ORDER = ["IGCO01", "IGCO02", "IGCO03", "IGCO04", "IGCO05", "IGCO06", "IGCO07", "IGCO08", "IGCO09", "IGCO10", "IGCO11", "IGCO12", "IGCO13", "IGCO14", "IGCO15"];
window.SBL_IGCSE_GEO_HAZ_LESSON_ORDER = ["IGHZ01", "IGHZ02", "IGHZ03", "IGHZ04", "IGHZ05", "IGHZ06", "IGHZ07", "IGHZ08", "IGHZ09", "IGHZ10", "IGHZ11", "IGHZ12"];
window.SBL_IGCSE_GEO_CFW_LESSON_ORDER = ["IGCF01", "IGCF02", "IGCF03", "IGCF04", "IGCF05", "IGCF06", "IGCF07"];
window.SBL_IGCSE_GEO_RUR_LESSON_ORDER = ["IGRU01", "IGRU02", "IGRU03", "IGRU04", "IGRU05", "IGRU06", "IGRU07", "IGRU08", "IGRU09", "IGRU10", "IGRU11"];
window.SBL_IGCSE_GEO_DEV_LESSON_ORDER = ["IGDV01", "IGDV02", "IGDV03", "IGDV04", "IGDV05", "IGDV06", "IGDV07", "IGDV08", "IGDV09"];
window.SBL_IGCSE_GEO_ECO_LESSON_ORDER = ["IGEC01", "IGEC02", "IGEC03", "IGEC04", "IGEC05", "IGEC06", "IGEC07", "IGEC08", "IGEC09", "IGEC10"];
window.SBL_IGCSE_GEO_RFW_LESSON_ORDER = ["IGRF01", "IGRF02", "IGRF03", "IGRF04", "IGRF05", "IGRF06", "IGRF07"];

window.SBL_LESSONS["IGCO01"] = {
 "id": "IGCO01",
 "topicNumber": 1,
 "topicTitle": "2.1 Coastal processes and landforms (IGCSE)",
 "title": "What are the characteristics of waves?",
 "href": "/igcse/geography/learn/coastal-environments/l01-characteristics-of-waves",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Characteristics of waves.",
 "checklist": [
  "I can describe and explain why coasts are important",
  "I can describe the features of constructive and destructive waves, with reference to height, frequency, wavelength and the swash and backwash",
  "I can describe and explain how waves break on the shoreline",
  "I can explain how wind speed and fetch influence the size of waves"
 ],
 "quiz": [
  {
   "q": "Roughly what share of the world’s population lives within about 100 km of the coast?",
   "options": [
    "About 5%",
    "About 40%",
    "About 75%",
    "Almost 100%"
   ],
   "correct": 1,
   "explain": "Around 40% of people live near the coast, including many megacities.",
   "tag": "Importance of coasts"
  },
  {
   "q": "Which is a way that coastal ecosystems protect people?",
   "options": [
    "They absorb wave energy and reduce storm damage",
    "They stop heavy rain from falling on coastal towns and farmland",
    "They raise the height of the tide",
    "They make waves travel faster towards the land"
   ],
   "correct": 0,
   "explain": "Reefs, mangroves, dunes and beaches absorb wave energy.",
   "tag": "Importance of coasts"
  },
  {
   "q": "What is the frequency of a wave?",
   "options": [
    "Its height from trough to crest",
    "The number of waves per minute",
    "The distance between two crests",
    "How far the swash travels"
   ],
   "correct": 1,
   "explain": "Frequency is how many waves break per minute.",
   "tag": "Wave features"
  },
  {
   "q": "Which describes a constructive wave?",
   "options": [
    "High and steep, with a strong backwash",
    "Low and long, with a strong swash",
    "High frequency, 10–14 per minute",
    "Short wavelength and a weak swash"
   ],
   "correct": 1,
   "explain": "Constructive waves have a strong swash that builds the beach up.",
   "tag": "Wave features"
  },
  {
   "q": "Why do destructive waves remove material from beaches?",
   "options": [
    "Their backwash is stronger than their swash",
    "They only break when the tide is very low",
    "They never carry any sediment at all",
    "Their swash is stronger than their backwash"
   ],
   "correct": 0,
   "explain": "A strong backwash drags material back down the beach.",
   "tag": "Wave features"
  },
  {
   "q": "In deep water, how does the water in a wave move?",
   "options": [
    "In a circular (orbital) motion",
    "Straight forward towards the coast",
    "Only up and down in a straight line",
    "Backwards, away from the coast"
   ],
   "correct": 0,
   "explain": "Energy moves forward, but the water itself moves in circles.",
   "tag": "Breaking waves"
  },
  {
   "q": "Why does a wave break as it reaches the shore?",
   "options": [
    "Friction slows its base, so the crest topples forward",
    "The wind suddenly stops blowing as the wave nears the beach",
    "Salt water becomes heavier in shallow water",
    "The tide pulls the top of the wave backwards out to sea"
   ],
   "correct": 0,
   "explain": "The base slows in shallow water while the top keeps going.",
   "tag": "Breaking waves"
  },
  {
   "q": "What happens to a wave as the water gets shallower?",
   "options": [
    "It becomes taller and steeper",
    "It becomes longer and flatter",
    "It gets faster and smaller",
    "It stops moving completely"
   ],
   "correct": 0,
   "explain": "The wavelength shortens and the wave height increases.",
   "tag": "Breaking waves"
  },
  {
   "q": "What is fetch?",
   "options": [
    "The distance of open water the wind blows over",
    "The length of time that the wind has been blowing for",
    "The height of a wave when it breaks",
    "The speed at which a wave travels towards the coast"
   ],
   "correct": 0,
   "explain": "A longer fetch means bigger waves.",
   "tag": "Wind and fetch"
  },
  {
   "q": "Which coast would receive the most powerful waves?",
   "options": [
    "An Atlantic-facing coast with a long fetch",
    "A sheltered bay with a short fetch and calm winds",
    "A small lake on a calm day",
    "An estuary protected by a long spit and a salt marsh"
   ],
   "correct": 0,
   "explain": "A long fetch and strong winds create large, powerful waves.",
   "tag": "Wind and fetch"
  }
 ]
};

window.SBL_LESSONS["IGCO02"] = {
 "id": "IGCO02",
 "topicNumber": 1,
 "topicTitle": "2.1 Coastal processes and landforms (IGCSE)",
 "title": "Processes of erosion, transportation and deposition",
 "href": "/igcse/geography/learn/coastal-environments/l02-erosion-transportation-deposition",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Erosion, transportation and deposition.",
 "checklist": [
  "I can describe and explain the four processes of coastal erosion",
  "I can describe and explain the four processes of coastal transportation",
  "I can describe and explain the process of longshore drift",
  "I can understand the meaning of coastal deposition"
 ],
 "quiz": [
  {
   "q": "Which erosion process involves air being compressed in cracks?",
   "options": [
    "Abrasion",
    "Attrition",
    "Hydraulic action",
    "Solution"
   ],
   "correct": 2,
   "explain": "Compressed air expands as the wave retreats, widening cracks.",
   "tag": "Erosion"
  },
  {
   "q": "What is abrasion?",
   "options": [
    "Rocks knocking into each other and becoming smaller",
    "Sediment thrown at the cliff, wearing it away",
    "Sea water dissolving chalk and limestone",
    "Air pressure widening cracks in a cliff face"
   ],
   "correct": 1,
   "explain": "Abrasion works like sandpaper on the cliff.",
   "tag": "Erosion"
  },
  {
   "q": "Attrition makes pebbles:",
   "options": [
    "Larger and more angular",
    "Smaller and more rounded",
    "Dissolve completely into the sea",
    "Stick together into new rock"
   ],
   "correct": 1,
   "explain": "Collisions knock off corners.",
   "tag": "Erosion"
  },
  {
   "q": "Which rock is most affected by solution?",
   "options": [
    "Granite",
    "Chalk",
    "Basalt",
    "Slate"
   ],
   "correct": 1,
   "explain": "Chalk and limestone dissolve in slightly acidic water.",
   "tag": "Erosion"
  },
  {
   "q": "Which transport process rolls large boulders along the sea bed?",
   "options": [
    "Traction",
    "Saltation",
    "Suspension",
    "Solution"
   ],
   "correct": 0,
   "explain": "Traction moves the largest material.",
   "tag": "Transportation"
  },
  {
   "q": "How are pebbles bounced along the sea bed?",
   "options": [
    "Traction",
    "Saltation",
    "Suspension",
    "Solution"
   ],
   "correct": 1,
   "explain": "Saltation is a bouncing motion.",
   "tag": "Transportation"
  },
  {
   "q": "In longshore drift, which way does the backwash flow?",
   "options": [
    "At the same angle as the swash",
    "Straight down the beach due to gravity",
    "Along the beach in the direction of the wind",
    "Up the beach towards the cliffs"
   ],
   "correct": 1,
   "explain": "Gravity pulls the backwash straight down the beach.",
   "tag": "Longshore drift"
  },
  {
   "q": "What controls the direction of longshore drift?",
   "options": [
    "The time of the tides",
    "The prevailing wind",
    "The rock type of the cliffs",
    "The depth of the sea bed"
   ],
   "correct": 1,
   "explain": "Waves follow the prevailing wind.",
   "tag": "Longshore drift"
  },
  {
   "q": "What is deposition?",
   "options": [
    "When the sea drops material because it has lost energy",
    "When waves wear away the base of a cliff by hydraulic action",
    "When rocks are broken down by the weather",
    "When material slides down a cliff under the pull of gravity"
   ],
   "correct": 0,
   "explain": "Waves drop material when they cannot carry it any further.",
   "tag": "Deposition"
  },
  {
   "q": "Where is deposition most likely?",
   "options": [
    "On an exposed headland",
    "In a sheltered bay",
    "At the base of a cliff in a storm",
    "Where the fetch is longest"
   ],
   "correct": 1,
   "explain": "Bays spread wave energy out.",
   "tag": "Deposition"
  }
 ]
};

window.SBL_LESSONS["IGCO03"] = {
 "id": "IGCO03",
 "topicNumber": 1,
 "topicTitle": "2.1 Coastal processes and landforms (IGCSE)",
 "title": "Weathering and mass movement",
 "href": "/igcse/geography/learn/coastal-environments/l03-weathering-and-mass-movement",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Weathering and mass movement.",
 "checklist": [
  "I can define weathering and mass movement",
  "I can describe and explain the processes of mechanical, chemical and biological weathering",
  "I can describe and explain the mass movement types of sliding and slumping"
 ],
 "quiz": [
  {
   "q": "What is weathering?",
   "options": [
    "The breakdown of rock in situ",
    "The movement of sediment along a beach",
    "The removal of rock by waves",
    "The downhill movement of soil"
   ],
   "correct": 0,
   "explain": "Weathering breaks rock down where it lies.",
   "tag": "Definitions"
  },
  {
   "q": "What is mass movement?",
   "options": [
    "Downhill movement of material under gravity",
    "The movement of sediment along the beach by longshore drift",
    "The dissolving of rock by rain",
    "The transport of sand inland by strong onshore winds"
   ],
   "correct": 0,
   "explain": "Gravity drives mass movement.",
   "tag": "Definitions"
  },
  {
   "q": "How does freeze–thaw weathering break rock?",
   "options": [
    "Salt crystals dissolve the rock chemically from the inside",
    "Water in cracks freezes, expands and widens them",
    "Plant roots push the rock apart",
    "Rain wears the surface of the rock away by friction"
   ],
   "correct": 1,
   "explain": "Water expands by about 9% when it freezes.",
   "tag": "Mechanical weathering"
  },
  {
   "q": "Which is an example of chemical weathering?",
   "options": [
    "Rainwater dissolving chalk or limestone",
    "Waves throwing pebbles and sand against the cliff face",
    "Rocks falling from a cliff face",
    "Roots growing into a crack and splitting the rock"
   ],
   "correct": 0,
   "explain": "Rainwater is a weak carbonic acid.",
   "tag": "Chemical weathering"
  },
  {
   "q": "What causes salt weathering?",
   "options": [
    "Salt crystals growing in cracks as sea spray evaporates",
    "Salt water freezing into ice on the cliff top during cold winter nights",
    "Salt making the sea water more acidic over time",
    "Salt attracting animals that burrow into the cliff face"
   ],
   "correct": 0,
   "explain": "Growing crystals force the rock apart.",
   "tag": "Mechanical weathering"
  },
  {
   "q": "Which is an example of biological weathering?",
   "options": [
    "Freeze–thaw in winter",
    "Plant roots widening cracks",
    "Rainwater dissolving limestone",
    "Waves hitting the cliff"
   ],
   "correct": 1,
   "explain": "Roots and burrowing animals break rock apart.",
   "tag": "Biological weathering"
  },
  {
   "q": "What type of rock is most affected by slumping?",
   "options": [
    "Hard granite",
    "Soft clay",
    "Resistant limestone",
    "Solid basalt"
   ],
   "correct": 1,
   "explain": "Saturated clay slides down a curved surface.",
   "tag": "Slumping"
  },
  {
   "q": "Why does heavy rain make slumping more likely?",
   "options": [
    "It makes the clay heavier and reduces friction",
    "It freezes inside the clay so that the cliff splits apart",
    "It dissolves the clay completely",
    "It stops waves from reaching the base of the cliff"
   ],
   "correct": 0,
   "explain": "Saturated material is heavier and slips more easily.",
   "tag": "Slumping"
  },
  {
   "q": "How is sliding different from slumping?",
   "options": [
    "Sliding moves along a flat slip plane; slumping is rotational",
    "Sliding only happens underwater, while slumping happens on land",
    "Sliding is caused by wind, slumping by waves",
    "There is no real difference between the two processes"
   ],
   "correct": 0,
   "explain": "Slumping happens on a curved surface; sliding on a flat plane.",
   "tag": "Sliding"
  },
  {
   "q": "What happens to the debris at the foot of a cliff after mass movement?",
   "options": [
    "It is removed by waves, so the cliff stays steep",
    "It always stays there and protects the cliff for good",
    "It turns straight into sand dunes",
    "It is carried back up the cliff by the swash"
   ],
   "correct": 0,
   "explain": "Waves remove the debris and the cycle repeats.",
   "tag": "Mass movement"
  }
 ]
};

window.SBL_LESSONS["IGCO04"] = {
 "id": "IGCO04",
 "topicNumber": 1,
 "topicTitle": "2.1 Coastal processes and landforms (IGCSE)",
 "title": "Geology, vegetation, people and sea level rise",
 "href": "/igcse/geography/learn/coastal-environments/l04-geology-vegetation-people-sea-level",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Geology, vegetation, people and sea level.",
 "checklist": [
  "I can define geology",
  "I can describe and explain how rock structure influences the rate of erosion",
  "I can describe and explain how vegetation influences weathering and erosion",
  "I can describe and explain how numbers of people impact the natural coastline",
  "I can explain how changes in the sea level can affect the coastline"
 ],
 "quiz": [
  {
   "q": "What is geology?",
   "options": [
    "The study of rocks: their type, structure and formation",
    "The study of waves, tides and how they break on the coast",
    "The study of plants growing on cliffs",
    "The study of how people use and manage the coast"
   ],
   "correct": 0,
   "explain": "Geology is the study of rocks.",
   "tag": "Geology"
  },
  {
   "q": "Which rock would erode fastest?",
   "options": [
    "Granite",
    "Boulder clay",
    "Basalt",
    "Hard limestone"
   ],
   "correct": 1,
   "explain": "Soft clay erodes quickly.",
   "tag": "Rock structure"
  },
  {
   "q": "Why do joints and faults increase erosion?",
   "options": [
    "They are lines of weakness that waves can exploit",
    "They make the rock harder and more resistant to wave attack",
    "They stop water from entering the rock",
    "They reflect waves back out to sea before they break"
   ],
   "correct": 0,
   "explain": "Hydraulic action widens cracks.",
   "tag": "Rock structure"
  },
  {
   "q": "How does marram grass protect sand dunes?",
   "options": [
    "Its roots bind the sand together",
    "It makes the sand heavier and wetter",
    "It attracts animals that dig the sand away",
    "It reflects waves back out to sea"
   ],
   "correct": 0,
   "explain": "Roots stabilise the dunes.",
   "tag": "Vegetation"
  },
  {
   "q": "How can vegetation increase weathering?",
   "options": [
    "Roots grow into cracks and widen them",
    "Leaves keep the cliff completely dry",
    "Plants stop all rain reaching the rock",
    "Vegetation lowers the sea level"
   ],
   "correct": 0,
   "explain": "This is biological weathering.",
   "tag": "Vegetation"
  },
  {
   "q": "How can building on a cliff top increase mass movement?",
   "options": [
    "It adds weight and increases surface run-off",
    "It makes the cliff top lighter, drier and more stable",
    "It stops waves reaching the cliff base",
    "It plants extra vegetation that holds the slope together"
   ],
   "correct": 0,
   "explain": "Extra weight and water make collapse more likely.",
   "tag": "People"
  },
  {
   "q": "How can coastal defences affect other places?",
   "options": [
    "They can starve beaches further along of sediment",
    "They always increase the supply of sediment everywhere along the coast",
    "They stop the tide along the whole coast",
    "They have no effect beyond where they are built"
   ],
   "correct": 0,
   "explain": "Trapping sediment in one place reduces supply elsewhere.",
   "tag": "People"
  },
  {
   "q": "What is a eustatic change in sea level?",
   "options": [
    "A global change in the volume of ocean water",
    "The land slowly rising up after the weight of an ice sheet melts",
    "Daily changes caused by the tides",
    "Waves becoming larger in a storm"
   ],
   "correct": 0,
   "explain": "Eustatic change is global, e.g. melting ice or warming water.",
   "tag": "Sea level"
  },
  {
   "q": "Which is an effect of rising sea levels on the coast?",
   "options": [
    "More flooding and erosion",
    "More raised beaches forming",
    "Less salt water in farmland",
    "Wider beaches everywhere"
   ],
   "correct": 0,
   "explain": "Higher seas reach further inland.",
   "tag": "Sea level"
  },
  {
   "q": "Which country is especially vulnerable to sea level rise?",
   "options": [
    "Switzerland",
    "The Maldives",
    "Mongolia",
    "Nepal"
   ],
   "correct": 1,
   "explain": "Low-lying island nations are most at risk.",
   "tag": "Sea level"
  }
 ]
};

window.SBL_LESSONS["IGCO05"] = {
 "id": "IGCO05",
 "topicNumber": 1,
 "topicTitle": "2.1 Coastal processes and landforms (IGCSE)",
 "title": "Role of erosion and deposition in creating coastal landforms – Part 1",
 "href": "/igcse/geography/learn/coastal-environments/l05-headlands-bays-coves",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Landforms 1: headlands, bays and coves.",
 "checklist": [
  "I can describe and explain how headlands and bays are created",
  "I can describe and explain how coves are formed",
  "I can describe and explain the difference between discordant and concordant coastlines"
 ],
 "quiz": [
  {
   "q": "Why do bays form?",
   "options": [
    "Soft rock is eroded faster than hard rock",
    "Hard rock is eroded faster than soft rock",
    "Deposition builds land out into the sea",
    "Rivers carve inlets into the cliffs"
   ],
   "correct": 0,
   "explain": "Soft rock erodes quickly; hard rock is left as headlands.",
   "tag": "Headlands and bays"
  },
  {
   "q": "Why is a beach often found in a bay?",
   "options": [
    "Bays receive the most powerful waves",
    "Waves lose energy in the sheltered bay and deposit sand",
    "Cliffs in bays are always made of sand",
    "Longshore drift is much stronger inside bays than elsewhere"
   ],
   "correct": 1,
   "explain": "Wave energy is spread out in bays.",
   "tag": "Headlands and bays"
  },
  {
   "q": "Why do headlands receive more erosion once formed?",
   "options": [
    "They stick out into the sea and receive more wave energy",
    "They are made of softer rock than the bays beside them",
    "They are protected by wide sandy beaches that absorb energy",
    "Longshore drift deposits sand on them"
   ],
   "correct": 0,
   "explain": "Waves concentrate their energy on headlands.",
   "tag": "Headlands and bays"
  },
  {
   "q": "What is a cove?",
   "options": [
    "A small, rounded bay with a narrow entrance",
    "A ridge of sand joining an island to the land",
    "A pillar of rock separated from the cliff",
    "A flat rocky area exposed at low tide"
   ],
   "correct": 0,
   "explain": "Coves form where hard rock is breached.",
   "tag": "Coves"
  },
  {
   "q": "What has to happen for a cove to form?",
   "options": [
    "The sea breaks through a band of hard rock",
    "A spit grows right across the mouth of a river estuary",
    "A stack collapses into a stump",
    "Sand dunes grow at the back of a beach"
   ],
   "correct": 0,
   "explain": "Once breached, the soft rock behind erodes quickly.",
   "tag": "Coves"
  },
  {
   "q": "Lulworth Cove is an example of a landform on a:",
   "options": [
    "Concordant coast",
    "Discordant coast",
    "Depositional coast",
    "Coral coast"
   ],
   "correct": 0,
   "explain": "The rock bands run parallel to the coast.",
   "tag": "Coves"
  },
  {
   "q": "On a discordant coast, rock bands run:",
   "options": [
    "At right angles to the coast",
    "Parallel to the coast",
    "Only underneath the sea bed, out of sight",
    "In circles around the bays and headlands"
   ],
   "correct": 0,
   "explain": "Alternating rocks meet the sea at right angles.",
   "tag": "Discordant and concordant"
  },
  {
   "q": "What kind of coastline does a discordant coast produce?",
   "options": [
    "An irregular coast of headlands and bays",
    "A perfectly straight coast with no inlets",
    "A coast made only of sand dunes",
    "A coast with no cliffs at all"
   ],
   "correct": 0,
   "explain": "Different erosion rates create an indented coast.",
   "tag": "Discordant and concordant"
  },
  {
   "q": "Swanage Bay lies between which two headlands?",
   "options": [
    "Ballard Point and Durlston Head",
    "Spurn Head and Flamborough Head",
    "Old Harry and Durdle Door",
    "Mappleton and Hornsea"
   ],
   "correct": 0,
   "explain": "Chalk at Ballard Point and limestone at Durlston Head.",
   "tag": "Case study"
  },
  {
   "q": "On a concordant coast, what protects the soft rock?",
   "options": [
    "A band of hard rock running parallel to the sea",
    "A wide spit built across the front of the bay",
    "Coral reefs growing offshore",
    "Groynes and sea walls built along the whole beach"
   ],
   "correct": 0,
   "explain": "The hard outer band shields the softer rock.",
   "tag": "Discordant and concordant"
  }
 ]
};

window.SBL_LESSONS["IGCO06"] = {
 "id": "IGCO06",
 "topicNumber": 1,
 "topicTitle": "2.1 Coastal processes and landforms (IGCSE)",
 "title": "Role of erosion and deposition in creating coastal landforms – Part 2",
 "href": "/igcse/geography/learn/coastal-environments/l06-cliffs-caves-arches-stacks",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Landforms 2: cliffs, caves, arches, stacks.",
 "checklist": [
  "I can apply and use relevant terminology related to types of erosion, including hydraulic action, abrasion, attrition and solution (corrosion)",
  "I can describe and explain how erosion creates wave-cut notches and wave-cut platforms",
  "I can describe and explain how erosion creates cracks, caves, arches, stacks and stumps"
 ],
 "quiz": [
  {
   "q": "Which term describes waves forcing air into cracks?",
   "options": [
    "Hydraulic action",
    "Abrasion",
    "Attrition",
    "Solution"
   ],
   "correct": 0,
   "explain": "Air pressure widens the cracks.",
   "tag": "Erosion terms"
  },
  {
   "q": "Which term describes pebbles being thrown at a cliff?",
   "options": [
    "Attrition",
    "Abrasion",
    "Solution",
    "Traction"
   ],
   "correct": 1,
   "explain": "Abrasion is like sandpaper.",
   "tag": "Erosion terms"
  },
  {
   "q": "What is solution (corrosion)?",
   "options": [
    "Acidic sea water dissolving chalk or limestone",
    "Rocks colliding with each other and becoming smaller and rounder",
    "Air pressure breaking open cracks",
    "Sediment rolling along the sea bed"
   ],
   "correct": 0,
   "explain": "Soluble rocks are dissolved.",
   "tag": "Erosion terms"
  },
  {
   "q": "Where does a wave-cut notch form?",
   "options": [
    "At the cliff base between high and low tide",
    "At the very top of the cliff where rain falls",
    "Behind the highest berm on the beach",
    "Far offshore on the sea bed"
   ],
   "correct": 0,
   "explain": "Erosion is concentrated at the cliff base.",
   "tag": "Wave-cut platforms"
  },
  {
   "q": "What happens after a cliff is undercut?",
   "options": [
    "The overhanging cliff collapses",
    "The cliff grows taller as sediment builds up",
    "A spit forms at its base",
    "The waves stop reaching it"
   ],
   "correct": 0,
   "explain": "Unsupported rock falls under gravity.",
   "tag": "Wave-cut platforms"
  },
  {
   "q": "What is left behind as a cliff retreats?",
   "options": [
    "A spit",
    "A wave-cut platform",
    "A tombolo",
    "A salt marsh"
   ],
   "correct": 1,
   "explain": "The rocky platform is exposed at low tide.",
   "tag": "Wave-cut platforms"
  },
  {
   "q": "Why does the retreat of a cliff slow down over time?",
   "options": [
    "A wider platform makes waves lose energy before reaching the cliff",
    "The cliff becomes made of softer and softer rock",
    "The tide stops reaching the cliff",
    "The fetch gets longer and the waves become far more powerful"
   ],
   "correct": 0,
   "explain": "Waves break further out on the platform.",
   "tag": "Wave-cut platforms"
  },
  {
   "q": "What is the correct order of formation?",
   "options": [
    "Cave, crack, stack, arch, stump",
    "Crack, cave, arch, stack, stump",
    "Arch, cave, stump, stack, crack",
    "Stack, arch, cave, crack, stump"
   ],
   "correct": 1,
   "explain": "Crack → cave → arch → stack → stump.",
   "tag": "Caves to stumps"
  },
  {
   "q": "What turns an arch into a stack?",
   "options": [
    "The arch roof collapses",
    "Sand is deposited and fills the arch",
    "Sea level falls",
    "Plants grow over it and pull it down"
   ],
   "correct": 0,
   "explain": "The roof is weakened until it falls.",
   "tag": "Caves to stumps"
  },
  {
   "q": "Durdle Door in Dorset is an example of:",
   "options": [
    "An arch",
    "A stack",
    "A spit",
    "A cove"
   ],
   "correct": 0,
   "explain": "It is a limestone arch.",
   "tag": "Case study"
  }
 ]
};

window.SBL_LESSONS["IGCO07"] = {
 "id": "IGCO07",
 "topicNumber": 1,
 "topicTitle": "2.1 Coastal processes and landforms (IGCSE)",
 "title": "Role of erosion and deposition in creating coastal landforms – Part 3",
 "href": "/igcse/geography/learn/coastal-environments/l07-beaches-spits-bars",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Landforms 3: beaches, spits, bars, tombolos.",
 "checklist": [
  "I can define what a beach is and describe the different types of beaches",
  "I can define what a spit is",
  "I can describe the conditions required for a spit to develop",
  "I can explain how a spit is formed",
  "I can describe and explain the formation of bars and tombolos"
 ],
 "quiz": [
  {
   "q": "What is a beach?",
   "options": [
    "An accumulation of sand and shingle on the coast",
    "A ridge of sand and shingle joining an island to the mainland",
    "A rocky platform exposed at low tide",
    "A wall built across the beach to stop longshore drift"
   ],
   "correct": 0,
   "explain": "Beaches are deposits of sand and shingle.",
   "tag": "Beaches"
  },
  {
   "q": "Why are shingle beaches usually steeper than sandy ones?",
   "options": [
    "Water drains through the pebbles, so the backwash is weak",
    "Pebbles are lighter than sand, so waves throw them higher up",
    "Shingle beaches only form in the winter months",
    "Sand always lies on top of pebbles"
   ],
   "correct": 0,
   "explain": "A weak backwash leaves the pebbles piled up.",
   "tag": "Beaches"
  },
  {
   "q": "What is a spit?",
   "options": [
    "A narrow ridge of sediment attached to the land at one end",
    "A ridge of sediment joining two headlands right across a bay",
    "An isolated pillar of rock in the sea",
    "A small rounded bay"
   ],
   "correct": 0,
   "explain": "Spits stick out from the land.",
   "tag": "Spits"
  },
  {
   "q": "Which condition is needed for a spit to form?",
   "options": [
    "A change in the direction of the coastline",
    "A coastline made only of hard, resistant granite cliffs",
    "A very strong river current",
    "No longshore drift at all along the coast"
   ],
   "correct": 0,
   "explain": "Sediment is deposited where the coast changes direction.",
   "tag": "Spit conditions"
  },
  {
   "q": "Which process supplies sediment to a spit?",
   "options": [
    "Longshore drift",
    "Freeze–thaw",
    "Slumping",
    "Hydraulic action"
   ],
   "correct": 0,
   "explain": "Longshore drift moves sediment along the coast.",
   "tag": "Spit formation"
  },
  {
   "q": "What causes the recurved end of a spit?",
   "options": [
    "Changes in wind and wave direction",
    "A river depositing mud on the end of it",
    "Plants pulling the sand round",
    "People building groynes along the spit"
   ],
   "correct": 0,
   "explain": "Secondary winds curve the tip.",
   "tag": "Spit formation"
  },
  {
   "q": "What forms behind a spit?",
   "options": [
    "A salt marsh",
    "A wave-cut platform",
    "A stack",
    "A coral reef"
   ],
   "correct": 0,
   "explain": "Calm water lets mud settle.",
   "tag": "Spit formation"
  },
  {
   "q": "What is a bar?",
   "options": [
    "A ridge of sediment across a bay, trapping a lagoon",
    "A rocky platform left behind by a retreating cliff",
    "A ridge of sand joining an offshore island to the mainland",
    "A sand dune at the back of the beach"
   ],
   "correct": 0,
   "explain": "E.g. Slapton Ley.",
   "tag": "Bars and tombolos"
  },
  {
   "q": "Chesil Beach is an example of:",
   "options": [
    "A spit",
    "A tombolo",
    "A stack",
    "A cove"
   ],
   "correct": 1,
   "explain": "It links the mainland to the Isle of Portland.",
   "tag": "Bars and tombolos"
  },
  {
   "q": "Where does Spurn Head’s sediment come from?",
   "options": [
    "Eroding boulder-clay cliffs of Holderness",
    "Coral reefs growing in the warm, shallow North Sea",
    "Rivers in the Lake District",
    "Chalk stacks on the Dorset coast"
   ],
   "correct": 0,
   "explain": "Longshore drift carries it south.",
   "tag": "Case study"
  }
 ]
};

window.SBL_LESSONS["IGCO08"] = {
 "id": "IGCO08",
 "topicNumber": 2,
 "topicTitle": "2.2 Coastal ecosystems (IGCSE)",
 "title": "Distinctive ecosystems develop along particular stretches of coastline",
 "href": "/igcse/geography/learn/coastal-environments/l08-coastal-ecosystems",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Coastal ecosystems: distribution and value.",
 "checklist": [
  "I can define the following ecosystems: coral reefs, mangroves, sand dunes and salt marshes",
  "I can describe the global distribution of these ecosystems",
  "I can explain the reasons for the distribution of these four types of coastal ecosystems",
  "I can explain the value of each ecosystem"
 ],
 "quiz": [
  {
   "q": "What is a mangrove?",
   "options": [
    "Salt-tolerant trees growing in tropical intertidal mud",
    "An underwater ridge built by coral polyps in warm, clear seas",
    "A hill of wind-blown sand at the back of a beach",
    "A ridge of sand joining an island to the mainland"
   ],
   "correct": 0,
   "explain": "Mangroves grow on muddy tropical coasts.",
   "tag": "Definitions"
  },
  {
   "q": "What builds coral reefs?",
   "options": [
    "Tiny animals called coral polyps",
    "Sand blown inland from the beach by the wind",
    "Mud deposited by rivers",
    "Salt-tolerant grasses"
   ],
   "correct": 0,
   "explain": "Polyps build calcium carbonate skeletons.",
   "tag": "Definitions"
  },
  {
   "q": "Between which latitudes are most coral reefs found?",
   "options": [
    "About 30°N and 30°S",
    "About 50°N and 70°N",
    "Only near the poles",
    "About 40°S and 60°S"
   ],
   "correct": 0,
   "explain": "Reefs need warm water.",
   "tag": "Distribution"
  },
  {
   "q": "Which country has the largest area of mangroves?",
   "options": [
    "Indonesia",
    "Iceland",
    "Canada",
    "Egypt"
   ],
   "correct": 0,
   "explain": "Indonesia has the most mangroves.",
   "tag": "Distribution"
  },
  {
   "q": "Where are salt marshes most typical?",
   "options": [
    "Sheltered temperate coasts such as the UK",
    "Exposed tropical headlands",
    "The middle of hot deserts far from the sea",
    "Deep ocean floors well away from any coastline"
   ],
   "correct": 0,
   "explain": "They form in calm, temperate estuaries.",
   "tag": "Distribution"
  },
  {
   "q": "Why are coral reefs rarely found near large river mouths?",
   "options": [
    "Fresh water and sediment harm the coral",
    "Rivers make the sea water far too warm for coral",
    "Rivers bring too much sunlight",
    "Rivers make the sea saltier"
   ],
   "correct": 0,
   "explain": "Coral needs clear, salty water.",
   "tag": "Reasons"
  },
  {
   "q": "What do sand dunes need to form?",
   "options": [
    "A large sand supply and strong onshore winds",
    "Warm, clear, shallow water with plenty of sunlight",
    "Deep, muddy estuaries with no wind",
    "Coral polyps and algae"
   ],
   "correct": 0,
   "explain": "Wind blows dry sand inland.",
   "tag": "Reasons"
  },
  {
   "q": "Why can mangroves not grow in the UK?",
   "options": [
    "It is too cold – mangroves cannot survive frost",
    "The UK has no muddy coasts or estuaries at all",
    "The sea around the UK is not salty",
    "There are no tides anywhere around the UK coast"
   ],
   "correct": 0,
   "explain": "Mangroves need warm, frost-free conditions.",
   "tag": "Reasons"
  },
  {
   "q": "How do mangroves help coastal communities?",
   "options": [
    "They protect coasts from storm surges and erosion",
    "They increase the height of storm waves",
    "They stop rain falling on farmland",
    "They raise the local sea level and cause flooding inland"
   ],
   "correct": 0,
   "explain": "Roots absorb wave energy and trap sediment.",
   "tag": "Value"
  },
  {
   "q": "Which is a value of salt marshes?",
   "options": [
    "They absorb wave energy and provide bird habitats",
    "They are the main source of the world’s timber",
    "They produce most of the world’s coral reefs and atolls",
    "They create large waves for surfing"
   ],
   "correct": 0,
   "explain": "Salt marshes reduce flooding and support wildlife.",
   "tag": "Value"
  }
 ]
};

window.SBL_LESSONS["IGCO09"] = {
 "id": "IGCO09",
 "topicNumber": 2,
 "topicTitle": "2.2 Coastal ecosystems (IGCSE)",
 "title": "Coral reefs: a named coastal ecosystem",
 "href": "/igcse/geography/learn/coastal-environments/l09-coral-reefs",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Coral reefs: a named ecosystem.",
 "checklist": [
  "I can retrieve information on coral reefs from previous learning",
  "I can define coral reefs",
  "I can describe the global distribution of coral reefs",
  "I can explain the reasons for the distribution of coral reefs",
  "I can explain the different types of reefs",
  "I can explain the abiotic and biotic characteristics",
  "I can explain the value of coral reefs"
 ],
 "quiz": [
  {
   "q": "What lives inside coral polyps and gives them food?",
   "options": [
    "Zooxanthellae algae",
    "Marram grass",
    "Plankton nets",
    "Mangrove roots"
   ],
   "correct": 0,
   "explain": "The algae photosynthesise and share food with the coral.",
   "tag": "Definition"
  },
  {
   "q": "What fraction of the ocean floor do coral reefs cover?",
   "options": [
    "Less than 1%",
    "About 10%",
    "About 25%",
    "Over 50%"
   ],
   "correct": 0,
   "explain": "Tiny area, but about a quarter of marine species.",
   "tag": "Definition"
  },
  {
   "q": "Why are reefs mostly on the eastern sides of continents?",
   "options": [
    "Warm currents flow there; cold currents cool western coasts",
    "Eastern coasts have far more large rivers reaching the sea",
    "Western coasts have no sunlight",
    "Coral cannot live anywhere in the Atlantic Ocean, east or west"
   ],
   "correct": 0,
   "explain": "Ocean currents control water temperature.",
   "tag": "Distribution"
  },
  {
   "q": "Why do reefs need clear, shallow water?",
   "options": [
    "So sunlight reaches the algae for photosynthesis",
    "So that waves can break over them and bring food",
    "So fish cannot reach them",
    "So that they can dry out completely at every low tide"
   ],
   "correct": 0,
   "explain": "The algae need light.",
   "tag": "Reasons"
  },
  {
   "q": "What is the ideal water temperature for coral?",
   "options": [
    "About 18–29°C",
    "About 0–10°C",
    "About 35–45°C",
    "Below freezing"
   ],
   "correct": 0,
   "explain": "Too warm and the coral bleaches.",
   "tag": "Reasons"
  },
  {
   "q": "Which type of reef grows close to the shore?",
   "options": [
    "Fringing reef",
    "Barrier reef",
    "Atoll",
    "Offshore bar"
   ],
   "correct": 0,
   "explain": "Fringing reefs grow right next to the land.",
   "tag": "Types of reef"
  },
  {
   "q": "What is an atoll?",
   "options": [
    "A ring of coral around a central lagoon",
    "A reef growing right next to the beach",
    "A reef separated from land by a deep lagoon",
    "A ridge of sand joining two islands"
   ],
   "correct": 0,
   "explain": "Formed as a volcanic island sinks.",
   "tag": "Types of reef"
  },
  {
   "q": "Which is an abiotic characteristic of a coral reef?",
   "options": [
    "Warm water temperature",
    "Parrotfish feeding on algae",
    "Zooxanthellae inside the polyps",
    "Sharks hunting smaller fish"
   ],
   "correct": 0,
   "explain": "Abiotic means non-living.",
   "tag": "Abiotic and biotic"
  },
  {
   "q": "Roughly how long is the Great Barrier Reef?",
   "options": [
    "About 2,300 km",
    "About 23 km",
    "About 230 km",
    "About 23,000 km"
   ],
   "correct": 0,
   "explain": "It runs along the Queensland coast.",
   "tag": "Case study"
  },
  {
   "q": "Which is a value of coral reefs?",
   "options": [
    "They protect coasts by breaking up waves",
    "They make the sea water much colder",
    "They increase coastal erosion along nearby beaches",
    "They stop rivers flowing into the sea"
   ],
   "correct": 0,
   "explain": "Reefs absorb wave energy.",
   "tag": "Value"
  }
 ]
};

window.SBL_LESSONS["IGCO10"] = {
 "id": "IGCO10",
 "topicNumber": 2,
 "topicTitle": "2.2 Coastal ecosystems (IGCSE)",
 "title": "Threats to coastal ecosystems",
 "href": "/igcse/geography/learn/coastal-environments/l10-threats-to-coastal-ecosystems",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Threats to coastal ecosystems.",
 "checklist": [
  "I can retrieve prior learning on the conditions required for development of the four coastal ecosystems",
  "I can describe and explain the threats to coastal ecosystems",
  "I can apply examination technique to an 8 mark 'Analyse' PPQ"
 ],
 "quiz": [
  {
   "q": "How does fertiliser run-off threaten coral reefs?",
   "options": [
    "It causes algal blooms that block sunlight",
    "It makes the sea water too cold for coral polyps to survive",
    "It increases the salt content of the sea",
    "It makes waves larger"
   ],
   "correct": 0,
   "explain": "Nutrients feed algae that shade the coral.",
   "tag": "Agriculture"
  },
  {
   "q": "Why are mangroves cleared in South-East Asia?",
   "options": [
    "For shrimp farms, rice and building land",
    "Because they cause too much flooding inland",
    "To increase coral growth offshore",
    "Because they block the tides from reaching the beach"
   ],
   "correct": 0,
   "explain": "Aquaculture and development replace mangroves.",
   "tag": "Deforestation"
  },
  {
   "q": "How does dredging damage reefs?",
   "options": [
    "It stirs up sediment that blocks light",
    "It adds extra oxygen to the water",
    "It cools the sea down until the coral freezes",
    "It creates new lagoons"
   ],
   "correct": 0,
   "explain": "Sediment smothers coral and blocks light.",
   "tag": "Industrialisation"
  },
  {
   "q": "How does tourism threaten sand dunes?",
   "options": [
    "Trampling destroys vegetation that holds the sand",
    "Tourists bring extra sand to the beach",
    "Tourism reduces the wind speed",
    "Hotels plant too much marram grass, which smothers the sand"
   ],
   "correct": 0,
   "explain": "Without plants, sand blows away.",
   "tag": "Tourism"
  },
  {
   "q": "Which is a large-scale threat to coral reefs?",
   "options": [
    "Mass bleaching caused by warming seas",
    "A single boat anchor dropped on one reef",
    "One diver touching coral",
    "A small beach café"
   ],
   "correct": 0,
   "explain": "Bleaching can affect whole reef systems.",
   "tag": "Scale"
  },
  {
   "q": "How does inland deforestation affect coral reefs?",
   "options": [
    "More soil is washed into rivers and onto reefs",
    "It lowers the sea temperature around the coast",
    "It stops rivers reaching the sea",
    "It increases the amount of sunlight"
   ],
   "correct": 0,
   "explain": "Eroded soil becomes sediment.",
   "tag": "Deforestation"
  },
  {
   "q": "What does the command word “Analyse” require?",
   "options": [
    "Break down the parts, explain links and judge importance",
    "Simply list as many facts as possible without explaining them",
    "Draw a labelled diagram only",
    "Give a one-word answer"
   ],
   "correct": 0,
   "explain": "Analyse needs explanation and judgement.",
   "tag": "Exam technique"
  },
  {
   "q": "What should an 8-mark answer end with?",
   "options": [
    "A supported judgement on which factor matters most",
    "A list of new key terms",
    "A word-for-word copy of the question as the conclusion",
    "A diagram with no labels"
   ],
   "correct": 0,
   "explain": "Top-level answers reach a judgement.",
   "tag": "Exam technique"
  },
  {
   "q": "Which is a threat from industrialisation?",
   "options": [
    "Oil and chemical pollution",
    "Trampling of dunes",
    "Fertiliser run-off from farms",
    "Divers breaking coral"
   ],
   "correct": 0,
   "explain": "Ports, refineries and factories pollute.",
   "tag": "Industrialisation"
  },
  {
   "q": "Which condition does an algal bloom change?",
   "options": [
    "The amount of light reaching the coral",
    "The latitude of the reef",
    "The type of rock on the coast nearby",
    "The direction and speed of longshore drift along the beach"
   ],
   "correct": 0,
   "explain": "Algae shade out the coral.",
   "tag": "Retrieval"
  }
 ]
};

window.SBL_LESSONS["IGCO11"] = {
 "id": "IGCO11",
 "topicNumber": 3,
 "topicTitle": "2.3 People and coastal management (IGCSE)",
 "title": "Conflicts between users of the coast",
 "href": "/igcse/geography/learn/coastal-environments/l11-coastal-conflicts",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Conflicts on the coast.",
 "checklist": [
  "I can identify and describe the different stakeholders along a stretch of coastline",
  "I can produce a conflict matrix explaining specific conflicts between the different stakeholders",
  "I can apply conflict learning to a specific case study",
  "I can begin to suggest solutions to the conflict issues"
 ],
 "quiz": [
  {
   "q": "What is a stakeholder?",
   "options": [
    "A person or group with an interest in how an area is used",
    "A wooden post used to build groynes and fences on the beach",
    "A type of coastal landform",
    "A government tax on beach use"
   ],
   "correct": 0,
   "explain": "Stakeholders have an interest in a place.",
   "tag": "Stakeholders"
  },
  {
   "q": "What is the main conflict on many coastlines?",
   "options": [
    "Development versus conservation",
    "Erosion versus weathering",
    "Spits versus bars and tombolos",
    "Tides versus waves"
   ],
   "correct": 0,
   "explain": "Economic use versus protection.",
   "tag": "Stakeholders"
  },
  {
   "q": "Which stakeholder most wants reefs and mangroves protected as fish nurseries?",
   "options": [
    "Fishing communities",
    "Port developers",
    "Sand miners",
    "Hotel builders"
   ],
   "correct": 0,
   "explain": "Fish breed in reefs and mangroves.",
   "tag": "Stakeholders"
  },
  {
   "q": "What does a conflict matrix show?",
   "options": [
    "Where each pair of stakeholders agrees or disagrees",
    "The rate of erosion along the coast",
    "The order in which coastal landforms are formed over time",
    "The height of waves at high tide"
   ],
   "correct": 0,
   "explain": "It compares stakeholders pair by pair.",
   "tag": "Conflict matrix"
  },
  {
   "q": "Why might tourism conflict with fishing?",
   "options": [
    "Hotels take over beaches used to land boats",
    "Tourists catch all of the fish",
    "Fishing boats cause coastal flooding",
    "Fishermen build hotels on the dunes behind the beach"
   ],
   "correct": 0,
   "explain": "Space and reef damage cause conflict.",
   "tag": "Conflict matrix"
  },
  {
   "q": "Why have coral reefs been mined in Sri Lanka?",
   "options": [
    "To make lime for building",
    "To create new beaches for tourists",
    "To feed fishing communities",
    "To build sea walls"
   ],
   "correct": 0,
   "explain": "Coral was burnt to produce lime.",
   "tag": "Case study"
  },
  {
   "q": "How does coral mining increase erosion?",
   "options": [
    "It removes the natural barrier that absorbs waves",
    "It adds extra sand and shingle to nearby beaches",
    "It slows longshore drift",
    "It makes waves smaller"
   ],
   "correct": 0,
   "explain": "Reefs break up waves before they reach the beach.",
   "tag": "Case study"
  },
  {
   "q": "What is a setback zone?",
   "options": [
    "An area near the shore where new building is not allowed",
    "A wall built in front of hotels to stop waves",
    "A section of reef used for diving",
    "A type of fishing boat"
   ],
   "correct": 0,
   "explain": "It keeps development away from the shoreline.",
   "tag": "Solutions"
  },
  {
   "q": "How can mooring buoys reduce conflict?",
   "options": [
    "Boats tie up to them instead of dropping anchors on coral",
    "They stop tourists visiting the coast",
    "They increase the size of waves",
    "They allow more sand mining because boats can stay longer"
   ],
   "correct": 0,
   "explain": "Anchors break coral.",
   "tag": "Solutions"
  },
  {
   "q": "Which approach plans a whole coastline together?",
   "options": [
    "Integrated Coastal Zone Management",
    "Beach nourishment only",
    "Building a single groyne",
    "Coral mining"
   ],
   "correct": 0,
   "explain": "ICZM avoids one area harming another.",
   "tag": "Solutions"
  }
 ]
};

window.SBL_LESSONS["IGCO12"] = {
 "id": "IGCO12",
 "topicNumber": 3,
 "topicTitle": "2.3 People and coastal management (IGCSE)",
 "title": "Coastal flooding: causes, prediction and prevention",
 "href": "/igcse/geography/learn/coastal-environments/l12-coastal-flooding",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Coastal flooding: causes and prevention.",
 "checklist": [
  "I can describe and explain the causes of coastal flooding",
  "I can describe and explain a variety of strategies to predict and prevent flooding in coastal areas",
  "I can make decisions relating to the importance of these strategies"
 ],
 "quiz": [
  {
   "q": "What causes a storm surge?",
   "options": [
    "Low pressure and strong winds piling water onshore",
    "An undersea earthquake",
    "Melting glaciers suddenly sliding into the sea in a single day",
    "Heavy rain falling on the sea"
   ],
   "correct": 0,
   "explain": "Low pressure raises the sea; wind pushes it inland.",
   "tag": "Causes"
  },
  {
   "q": "What usually causes a tsunami?",
   "options": [
    "An undersea earthquake displacing water",
    "A deep low-pressure storm with strong winds",
    "A very high spring tide",
    "Strong onshore winds"
   ],
   "correct": 0,
   "explain": "Sudden displacement of the sea bed or water.",
   "tag": "Causes"
  },
  {
   "q": "Roughly how many people died in the 2004 Indian Ocean tsunami?",
   "options": [
    "About 230,000",
    "About 2,300",
    "About 23,000",
    "About 2.3 million"
   ],
   "correct": 0,
   "explain": "Around 230,000 in 14 countries.",
   "tag": "Causes"
  },
  {
   "q": "How does climate change increase coastal flood risk?",
   "options": [
    "Sea levels rise and storms may become stronger",
    "It makes the land rise higher",
    "It stops tsunamis from forming anywhere in the world",
    "It reduces the height of the tides"
   ],
   "correct": 0,
   "explain": "Higher seas reach further inland.",
   "tag": "Causes"
  },
  {
   "q": "When is a storm surge most dangerous?",
   "options": [
    "When it coincides with high tide",
    "When it happens at low tide",
    "When the wind blows offshore, away from the land",
    "When air pressure is very high"
   ],
   "correct": 0,
   "explain": "Surge plus high tide gives the highest water.",
   "tag": "Causes"
  },
  {
   "q": "Which is a forecasting method?",
   "options": [
    "Satellites and tide gauges",
    "Building on stilts",
    "Planting mangroves",
    "Teaching evacuation routes"
   ],
   "correct": 0,
   "explain": "Data is used to predict surges.",
   "tag": "Prediction"
  },
  {
   "q": "How does building design reduce flood damage?",
   "options": [
    "Raising buildings on stilts above flood level",
    "Building houses closer to the beach",
    "Using cheaper, lighter materials that are quicker to build",
    "Removing coastal vegetation"
   ],
   "correct": 0,
   "explain": "Water flows underneath raised buildings.",
   "tag": "Prevention"
  },
  {
   "q": "What is the purpose of a coastal buffer zone?",
   "options": [
    "To keep development away from the highest-risk areas",
    "To create new beaches for tourists",
    "To build more hotels by the sea",
    "To store flood water inside homes until it drains away"
   ],
   "correct": 0,
   "explain": "Planning keeps people out of danger.",
   "tag": "Prevention"
  },
  {
   "q": "Why is education especially important for tsunamis?",
   "options": [
    "Waves can arrive within minutes, so people must act fast",
    "Tsunamis can be stopped by teaching",
    "Education raises the level of the land",
    "Tsunamis only happen to schools"
   ],
   "correct": 0,
   "explain": "Knowing the warning signs saves lives.",
   "tag": "Prevention"
  },
  {
   "q": "Which strategy is usually cheapest and saves the most lives in a poor country?",
   "options": [
    "Warnings, education and raised shelters",
    "A large tidal barrier like the Thames Barrier",
    "A continuous concrete sea wall",
    "Relocating every coastal city"
   ],
   "correct": 0,
   "explain": "Low-cost measures protect lives effectively.",
   "tag": "Decision making"
  }
 ]
};

window.SBL_LESSONS["IGCO13"] = {
 "id": "IGCO13",
 "topicNumber": 3,
 "topicTitle": "2.3 People and coastal management (IGCSE)",
 "title": "Coastal management strategies: hard and soft engineering",
 "href": "/igcse/geography/learn/coastal-environments/l13-hard-and-soft-engineering",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Hard and soft engineering.",
 "checklist": [
  "I can define hard and soft engineering",
  "I can describe and explain how various coastal management schemes work",
  "I can evaluate hard and soft engineering techniques in their ability to defend coastlines and the impacts they have"
 ],
 "quiz": [
  {
   "q": "What is soft engineering?",
   "options": [
    "Working with natural processes to manage the coast",
    "Building large concrete structures along the beach",
    "Removing all sand from the beach",
    "Stopping all tourism on the coast"
   ],
   "correct": 0,
   "explain": "Soft engineering works with nature.",
   "tag": "Definitions"
  },
  {
   "q": "Which of these is hard engineering?",
   "options": [
    "Gabions",
    "Beach replenishment",
    "Managed retreat",
    "Revegetation"
   ],
   "correct": 0,
   "explain": "Gabions are rock-filled wire cages.",
   "tag": "Definitions"
  },
  {
   "q": "How does a sea wall protect the coast?",
   "options": [
    "It reflects wave energy back out to sea",
    "It traps sand moving by longshore drift",
    "It lets the land flood naturally",
    "It plants vegetation on the cliff"
   ],
   "correct": 0,
   "explain": "Curved walls reflect waves.",
   "tag": "How schemes work"
  },
  {
   "q": "What do groynes do?",
   "options": [
    "Trap sediment moving by longshore drift",
    "Reflect waves back out to sea",
    "Reshape the cliff to a gentler slope",
    "Add sand dredged from offshore"
   ],
   "correct": 0,
   "explain": "They build up a wider beach.",
   "tag": "How schemes work"
  },
  {
   "q": "What is cliff regrading?",
   "options": [
    "Reshaping a cliff to a gentler slope",
    "Building a concrete wall at the base of the cliff",
    "Adding sand to the beach",
    "Planting mangroves offshore"
   ],
   "correct": 0,
   "explain": "A gentler slope is more stable.",
   "tag": "How schemes work"
  },
  {
   "q": "What is managed retreat?",
   "options": [
    "Allowing low-value land to flood or erode",
    "Building higher sea walls",
    "Moving the beach further out to sea",
    "Pumping water off the land and back into the sea"
   ],
   "correct": 0,
   "explain": "It creates natural salt marsh defences.",
   "tag": "How schemes work"
  },
  {
   "q": "Which SMP policy means keeping defences where they are?",
   "options": [
    "Hold the line",
    "Advance the line",
    "Managed realignment",
    "No active intervention"
   ],
   "correct": 0,
   "explain": "Hold the line maintains the current shoreline.",
   "tag": "SMPs"
  },
  {
   "q": "What is a disadvantage of groynes?",
   "options": [
    "They starve beaches further along of sediment",
    "They make the local beach narrower",
    "They are the most expensive form of defence available",
    "They encourage salt marsh to grow"
   ],
   "correct": 0,
   "explain": "Less sediment reaches downdrift areas.",
   "tag": "Evaluation"
  },
  {
   "q": "Why must beach replenishment be repeated?",
   "options": [
    "Waves and longshore drift remove the added sand",
    "The sand slowly turns into solid rock over time",
    "Tourists take the sand home",
    "The sea level falls each year"
   ],
   "correct": 0,
   "explain": "Natural processes keep moving sediment.",
   "tag": "Evaluation"
  },
  {
   "q": "Which group is most likely to object to managed retreat?",
   "options": [
    "Landowners and farmers who lose land",
    "Conservationists who want new habitats",
    "Birdwatchers",
    "Scientists studying salt marshes"
   ],
   "correct": 0,
   "explain": "They lose land and property.",
   "tag": "Evaluation"
  }
 ]
};

window.SBL_LESSONS["IGCO14"] = {
 "id": "IGCO14",
 "topicNumber": 3,
 "topicTitle": "2.3 People and coastal management (IGCSE)",
 "title": "Coastal management case study: Sri Lanka",
 "href": "/igcse/geography/learn/coastal-environments/l14-sri-lanka-coastal-management",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Case study: Sri Lanka (CZMP).",
 "checklist": [
  "I can apply knowledge of hard and soft engineering schemes to the Sri Lanka case study",
  "I can summarise relevant information from the CZMP for Sri Lanka",
  "I can describe and explain the need for coastal management in Sri Lanka, applying the CZMP concept",
  "I can apply critical thinking relating to the need for coastal management"
 ],
 "quiz": [
  {
   "q": "What does CZMP stand for?",
   "options": [
    "Coastal Zone Management Plan",
    "Coral Zone Mining Permit",
    "Coastal Zoning for Marine Ports",
    "Climate Zone Monitoring Programme"
   ],
   "correct": 0,
   "explain": "It is Sri Lanka’s national coastal plan.",
   "tag": "CZMP"
  },
  {
   "q": "Which law set up coastal management in Sri Lanka?",
   "options": [
    "The Coast Conservation Act, 1981",
    "The Clean Air Act, 1956",
    "The Paris Agreement, 2015",
    "The Kyoto Protocol, 1997"
   ],
   "correct": 0,
   "explain": "Act No. 57 of 1981 created the framework.",
   "tag": "CZMP"
  },
  {
   "q": "How is Sri Lanka’s coastal zone defined?",
   "options": [
    "300 m inland and 2 km out to sea",
    "3 km inland and 20 km out to sea",
    "The whole island and its waters",
    "30 m inland and 200 m out to sea"
   ],
   "correct": 0,
   "explain": "300 m landward of high water and 2 km seaward of low water.",
   "tag": "CZMP"
  },
  {
   "q": "Which hazard is most common in Sri Lanka’s disaster records?",
   "options": [
    "Floods",
    "Tsunamis",
    "Earthquakes",
    "Volcanic eruptions"
   ],
   "correct": 0,
   "explain": "Monsoon floods are the most frequent hazard.",
   "tag": "Need for management"
  },
  {
   "q": "Why did some areas suffer less damage in the 2004 tsunami?",
   "options": [
    "Mangroves absorbed wave energy",
    "The tsunami arrived at low tide only",
    "Hotels acted as a sea wall",
    "Coral mining had deepened the sea"
   ],
   "correct": 0,
   "explain": "Healthy mangroves reduced the waves’ energy.",
   "tag": "Need for management"
  },
  {
   "q": "Which is an ENVIRONMENTAL reason for coastal management?",
   "options": [
    "Coral reefs degraded by mining",
    "Hotels earning tourist income",
    "Fishing families losing homes",
    "Coastal railway threatened by erosion"
   ],
   "correct": 0,
   "explain": "Reef damage is an environmental issue.",
   "tag": "Need for management"
  },
  {
   "q": "Where is Sri Lanka’s population most concentrated?",
   "options": [
    "West and south-west, near Colombo",
    "North-central dry zone",
    "Central highland forests",
    "East coast lagoons only"
   ],
   "correct": 0,
   "explain": "Density is highest in the Western Province.",
   "tag": "Population"
  },
  {
   "q": "Which is one of the 2018 CZMP objectives?",
   "options": [
    "End coral mining and control sand mining",
    "Build a sea wall round the whole island",
    "Move all hotels inland by 5 km",
    "Ban fishing along the west coast"
   ],
   "correct": 0,
   "explain": "Beach stability depends on controlling mining.",
   "tag": "CZMP"
  },
  {
   "q": "What is a setback area?",
   "options": [
    "A zone where building near the shore is restricted",
    "A wall built in front of hotels to stop waves",
    "A reef set aside only for diving tourists",
    "A harbour where fishing boats shelter"
   ],
   "correct": 0,
   "explain": "It keeps development back from the sea.",
   "tag": "CZMP"
  },
  {
   "q": "Which describes Special Area Management?",
   "options": [
    "Communities and government managing resources together",
    "Engineers building defences at selected sites",
    "Closing selected beaches to all visitors",
    "Government selling coral mining permits"
   ],
   "correct": 0,
   "explain": "Community-based, integrated management.",
   "tag": "CZMP"
  }
 ]
};

window.SBL_LESSONS["IGCO15"] = {
 "id": "IGCO15",
 "topicNumber": 3,
 "topicTitle": "2.3 People and coastal management (IGCSE)",
 "title": "Coastal management case study: the Holderness coast, UK",
 "href": "/igcse/geography/learn/coastal-environments/l15-holderness-coastal-management",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Environments: Case study: Holderness, UK.",
 "checklist": [
  "I can describe the location of the Holderness coast",
  "I can describe the physical geography (lithology, climate and coastal conditions) of the Holderness coast",
  "I can explain the need for coastal management",
  "I can make informed decisions relating to why coastal management is required",
  "I can evaluate the effectiveness of these decisions with reference to different stakeholders"
 ],
 "quiz": [
  {
   "q": "Where is the Holderness coast?",
   "options": [
    "East Yorkshire, facing the North Sea",
    "Dorset, facing the English Channel",
    "Cornwall, facing the Atlantic Ocean",
    "North Wales, facing the Irish Sea"
   ],
   "correct": 0,
   "explain": "It runs from Flamborough Head to Spurn Head.",
   "tag": "Location"
  },
  {
   "q": "What are most Holderness cliffs made of?",
   "options": [
    "Soft boulder clay",
    "Hard granite",
    "Resistant limestone",
    "Volcanic basalt"
   ],
   "correct": 0,
   "explain": "Glacial till erodes easily.",
   "tag": "Physical geography"
  },
  {
   "q": "About how fast does the Holderness coast retreat on average?",
   "options": [
    "About 1.8 m a year",
    "About 1.8 mm a year",
    "About 18 m a year",
    "About 180 m a year"
   ],
   "correct": 0,
   "explain": "One of Europe’s fastest-eroding coasts.",
   "tag": "Physical geography"
  },
  {
   "q": "Why are Holderness beaches narrow?",
   "options": [
    "Eroded clay is fine and carried away in suspension",
    "The tides never go out far enough to expose the sand",
    "Sand is mined for building",
    "Coral reefs trap the sand offshore"
   ],
   "correct": 0,
   "explain": "Little coarse material stays on the beach.",
   "tag": "Physical geography"
  },
  {
   "q": "Which direction do the most powerful waves come from?",
   "options": [
    "North-east, across the North Sea",
    "South-west, across the Atlantic",
    "West, across the Irish Sea",
    "Directly from the land"
   ],
   "correct": 0,
   "explain": "A long fetch across the North Sea.",
   "tag": "Physical geography"
  },
  {
   "q": "Why is the Easington gas terminal protected?",
   "options": [
    "It supplies a significant share of UK gas",
    "It is a historic castle",
    "It is a nature reserve",
    "It is the most popular tourist beach in Yorkshire"
   ],
   "correct": 0,
   "explain": "Energy security is a national priority.",
   "tag": "Need for management"
  },
  {
   "q": "What was built at Mappleton in 1991?",
   "options": [
    "Two rock groynes and rock revetment",
    "A tidal barrier",
    "A new spit",
    "An offshore wind farm with its own sea wall"
   ],
   "correct": 0,
   "explain": "About £2 million was spent.",
   "tag": "Decisions"
  },
  {
   "q": "What happened at Cowden after Mappleton was protected?",
   "options": [
    "Erosion increased",
    "A new beach formed",
    "Erosion stopped completely",
    "A coral reef grew"
   ],
   "correct": 0,
   "explain": "Sediment was trapped at Mappleton.",
   "tag": "Evaluation"
  },
  {
   "q": "Why are many isolated farms not protected?",
   "options": [
    "The cost would be greater than the value of the land",
    "Farmers asked for no protection",
    "Farmland never erodes",
    "The law forbids defences there"
   ],
   "correct": 0,
   "explain": "Cost–benefit decisions guide management.",
   "tag": "Decisions"
  },
  {
   "q": "Why might conservationists worry about defences at Holderness?",
   "options": [
    "They reduce the sediment that feeds Spurn Head",
    "They increase the size of the spit",
    "They create too many new beaches",
    "They stop all birds visiting"
   ],
   "correct": 0,
   "explain": "Spurn depends on eroded sediment.",
   "tag": "Evaluation"
  }
 ]
};

window.SBL_LESSONS["IGHZ01"] = {
 "id": "IGHZ01",
 "topicNumber": 1,
 "topicTitle": "Hazards and plate tectonics (IGCSE)",
 "title": "What is a hazard?",
 "href": "/igcse/geography/learn/hazardous-environments/l01-what-is-a-hazard",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Hazardous Environments: What is a hazard?.",
 "checklist": [
  "I can understand the different types of hazards",
  "I can know where different hazards occur",
  "I can identify some factors influencing their severity"
 ],
 "quiz": [
  {
   "q": "What is a natural hazard?",
   "options": [
    "A natural event that threatens people",
    "Any very large storm that forms far out at sea",
    "Damage caused only by humans",
    "A disaster that has already happened"
   ],
   "correct": 0,
   "explain": "A threat to people and property.",
   "tag": "Definitions"
  },
  {
   "q": "When does a hazard become a disaster?",
   "options": [
    "When it causes serious loss a community cannot cope with",
    "Whenever it happens anywhere on Earth, even with nobody nearby",
    "Only when it is an earthquake",
    "When it is measured by scientists"
   ],
   "correct": 0,
   "explain": "Impact on people makes it a disaster.",
   "tag": "Definitions"
  },
  {
   "q": "Which is a tectonic hazard?",
   "options": [
    "Tsunami",
    "Drought",
    "Tropical cyclone",
    "Locust swarm"
   ],
   "correct": 0,
   "explain": "Caused by plate movement.",
   "tag": "Types"
  },
  {
   "q": "Which is an atmospheric hazard?",
   "options": [
    "Tropical cyclone",
    "Volcanic eruption",
    "Earthquake",
    "Landslide"
   ],
   "correct": 0,
   "explain": "Caused by weather.",
   "tag": "Types"
  },
  {
   "q": "Where are most earthquakes and volcanoes found?",
   "options": [
    "Along plate boundaries",
    "In the middle of continents",
    "Near the North and South Poles",
    "Only in tropical countries"
   ],
   "correct": 0,
   "explain": "Especially the Ring of Fire.",
   "tag": "Distribution"
  },
  {
   "q": "Roughly what share of earthquakes occur on the Ring of Fire?",
   "options": [
    "About 90%",
    "About 10%",
    "About 50%",
    "About 25%"
   ],
   "correct": 0,
   "explain": "Around the Pacific.",
   "tag": "Distribution"
  },
  {
   "q": "Between which latitudes do tropical cyclones form?",
   "options": [
    "5° and 30° north and south",
    "0° and 5° only",
    "40° and 60° north and south",
    "Within the Arctic Circle"
   ],
   "correct": 0,
   "explain": "Not on the Equator itself.",
   "tag": "Distribution"
  },
  {
   "q": "Which is a HUMAN factor affecting severity?",
   "options": [
    "Quality of buildings",
    "Depth of the earthquake",
    "Magnitude of the event",
    "Type of rock"
   ],
   "correct": 0,
   "explain": "People control building quality.",
   "tag": "Severity"
  },
  {
   "q": "Why did Haiti 2010 kill more than Japan 2011?",
   "options": [
    "Haiti was poorer and less prepared",
    "Haiti’s earthquake was much stronger",
    "Japan had no people near the coast",
    "Japan’s earthquake was very deep"
   ],
   "correct": 0,
   "explain": "Vulnerability matters.",
   "tag": "Severity"
  },
  {
   "q": "What is vulnerability?",
   "options": [
    "How likely people are to be harmed",
    "The magnitude of the hazard",
    "The distance between two tectonic plates",
    "The number of hazards each year"
   ],
   "correct": 0,
   "explain": "Depends on wealth and preparation.",
   "tag": "Definitions"
  }
 ]
};

window.SBL_LESSONS["IGHZ02"] = {
 "id": "IGHZ02",
 "topicNumber": 1,
 "topicTitle": "Hazards and plate tectonics (IGCSE)",
 "title": "Structure of the Earth",
 "href": "/igcse/geography/learn/hazardous-environments/l02-structure-of-the-earth",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Hazardous Environments: Structure of the Earth.",
 "checklist": [
  "I can use the correct terminology in describing the different components of the Earth’s structure",
  "I can identify some of the world’s tectonic plates and give reasons for their movement",
  "I can refer to evidence supporting the continental drift theory"
 ],
 "quiz": [
  {
   "q": "Which layer is liquid?",
   "options": [
    "Outer core",
    "Inner core",
    "Crust",
    "Lithosphere"
   ],
   "correct": 0,
   "explain": "Liquid iron and nickel.",
   "tag": "Layers"
  },
  {
   "q": "Why is the inner core solid?",
   "options": [
    "Enormous pressure",
    "It is very cold",
    "It is made of granite",
    "It contains water ice"
   ],
   "correct": 0,
   "explain": "Pressure stops it melting.",
   "tag": "Layers"
  },
  {
   "q": "How does oceanic crust differ from continental crust?",
   "options": [
    "Thinner and denser",
    "Thicker and lighter",
    "Older and made of granite",
    "Exactly the same"
   ],
   "correct": 0,
   "explain": "Basalt, 5–10 km thick.",
   "tag": "Layers"
  },
  {
   "q": "What is the lithosphere?",
   "options": [
    "Crust and rigid upper mantle",
    "The liquid outer core",
    "The whole of the mantle",
    "The atmosphere above the crust"
   ],
   "correct": 0,
   "explain": "It forms the plates.",
   "tag": "Layers"
  },
  {
   "q": "Which is a major tectonic plate?",
   "options": [
    "Pacific",
    "Mediterranean",
    "Himalayan",
    "Sahara"
   ],
   "correct": 0,
   "explain": "One of seven major plates.",
   "tag": "Plates"
  },
  {
   "q": "What is slab pull?",
   "options": [
    "A sinking plate edge pulling the plate",
    "Magma pushing upwards inside a volcano",
    "Wind pushing the continents",
    "Tides pulling the sea floor"
   ],
   "correct": 0,
   "explain": "Cold, dense plate sinks.",
   "tag": "Movement"
  },
  {
   "q": "What drives convection currents?",
   "options": [
    "Heat from the core",
    "Heat from the Sun warming the crust",
    "Ocean currents",
    "Earthquakes"
   ],
   "correct": 0,
   "explain": "Hot rock rises, cool rock sinks.",
   "tag": "Movement"
  },
  {
   "q": "Who proposed continental drift?",
   "options": [
    "Alfred Wegener",
    "Charles Darwin",
    "Isaac Newton",
    "Charles Richter"
   ],
   "correct": 0,
   "explain": "In 1912.",
   "tag": "Drift"
  },
  {
   "q": "Which is evidence for continental drift?",
   "options": [
    "Matching fossils on different continents",
    "Different languages spoken on each continent",
    "Rivers flowing into the sea",
    "Hurricanes crossing oceans"
   ],
   "correct": 0,
   "explain": "e.g. Mesosaurus.",
   "tag": "Drift"
  },
  {
   "q": "Why was Wegener’s idea first rejected?",
   "options": [
    "He could not explain how continents moved",
    "There were no fossils at all",
    "The continents did not fit",
    "He had studied the rocks of only one country"
   ],
   "correct": 0,
   "explain": "No mechanism until the 1960s.",
   "tag": "Drift"
  }
 ]
};

window.SBL_LESSONS["IGHZ03"] = {
 "id": "IGHZ03",
 "topicNumber": 1,
 "topicTitle": "Hazards and plate tectonics (IGCSE)",
 "title": "Plate boundaries",
 "href": "/igcse/geography/learn/hazardous-environments/l03-plate-boundaries",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Hazardous Environments: Plate boundaries.",
 "checklist": [
  "I can understand the types of plate boundaries",
  "I can explain why earthquakes and volcanoes occur in certain locations"
 ],
 "quiz": [
  {
   "q": "At which boundary do plates move apart?",
   "options": [
    "Constructive",
    "Destructive",
    "Conservative",
    "Collision"
   ],
   "correct": 0,
   "explain": "Divergent boundary.",
   "tag": "Boundaries"
  },
  {
   "q": "What happens at a destructive boundary?",
   "options": [
    "The denser plate subducts",
    "Plates slide past each other",
    "New crust is formed",
    "Nothing moves at all"
   ],
   "correct": 0,
   "explain": "Oceanic plate sinks and melts.",
   "tag": "Boundaries"
  },
  {
   "q": "Which boundary has earthquakes but no volcanoes?",
   "options": [
    "Conservative",
    "Constructive",
    "Destructive (ocean–continent)",
    "Hotspot"
   ],
   "correct": 0,
   "explain": "No magma is produced.",
   "tag": "Boundaries"
  },
  {
   "q": "Which is an example of a constructive boundary?",
   "options": [
    "Mid-Atlantic Ridge",
    "San Andreas Fault",
    "Himalayas",
    "Andes mountains (South America)"
   ],
   "correct": 0,
   "explain": "Iceland sits on it.",
   "tag": "Examples"
  },
  {
   "q": "Which plates formed the Himalayas?",
   "options": [
    "Indo-Australian and Eurasian",
    "Nazca and South American",
    "Pacific and North American plates",
    "African and South American"
   ],
   "correct": 0,
   "explain": "Continental collision.",
   "tag": "Examples"
  },
  {
   "q": "Why are there no volcanoes in the Himalayas?",
   "options": [
    "Neither continental plate subducts",
    "The mountains are far too high for magma to reach",
    "It is too cold there",
    "The plates move apart"
   ],
   "correct": 0,
   "explain": "No melting, no magma.",
   "tag": "Explain"
  },
  {
   "q": "Where do the most powerful earthquakes happen?",
   "options": [
    "Destructive boundaries",
    "Constructive boundaries",
    "Hotspots",
    "The centre of plates"
   ],
   "correct": 0,
   "explain": "Huge locked areas.",
   "tag": "Explain"
  },
  {
   "q": "Which boundary affects Haiti?",
   "options": [
    "Conservative",
    "Constructive",
    "Collision",
    "Hotspot"
   ],
   "correct": 0,
   "explain": "Caribbean and North American plates.",
   "tag": "Examples"
  },
  {
   "q": "What type of eruptions occur at constructive boundaries?",
   "options": [
    "Gentle, effusive eruptions",
    "Very explosive eruptions only",
    "No eruptions ever",
    "Only underwater ash clouds"
   ],
   "correct": 0,
   "explain": "Runny basalt lava.",
   "tag": "Explain"
  },
  {
   "q": "What creates volcanoes in Hawai‘i?",
   "options": [
    "A hotspot",
    "A conservative boundary",
    "A collision boundary",
    "A subduction zone"
   ],
   "correct": 0,
   "explain": "Mantle plume under the Pacific plate.",
   "tag": "Explain"
  }
 ]
};

window.SBL_LESSONS["IGHZ04"] = {
 "id": "IGHZ04",
 "topicNumber": 2,
 "topicTitle": "Earthquakes (IGCSE)",
 "title": "Earthquakes",
 "href": "/igcse/geography/learn/hazardous-environments/l04-earthquakes",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Hazardous Environments: Earthquakes.",
 "checklist": [
  "I can use the correct terminology when describing earthquakes and their measurement"
 ],
 "quiz": [
  {
   "q": "What is the focus of an earthquake?",
   "options": [
    "Where the rock breaks underground",
    "The point on the surface above",
    "The city that suffers the most damage",
    "The seismometer that records it"
   ],
   "correct": 0,
   "explain": "Also called the hypocentre.",
   "tag": "Terms"
  },
  {
   "q": "What is the epicentre?",
   "options": [
    "The point on the surface above the focus",
    "The deepest point reached by the fault line",
    "The edge of the tectonic plate",
    "The place where waves end"
   ],
   "correct": 0,
   "explain": "Directly above the focus.",
   "tag": "Terms"
  },
  {
   "q": "Why do earthquakes happen?",
   "options": [
    "Stress builds until rocks slip",
    "Magma cooling and shrinking inside a volcano",
    "The tides pull on the crust",
    "Heavy rain soaks the ground"
   ],
   "correct": 0,
   "explain": "Friction then sudden slip.",
   "tag": "Causes"
  },
  {
   "q": "Which seismic waves arrive first?",
   "options": [
    "P-waves",
    "S-waves",
    "Surface waves",
    "Tsunami waves"
   ],
   "correct": 0,
   "explain": "Primary waves are fastest.",
   "tag": "Terms"
  },
  {
   "q": "Which earthquakes usually cause most surface damage?",
   "options": [
    "Shallow-focus ones",
    "Deep-focus ones",
    "Those under the open ocean far away",
    "Those with a high Mercalli number only"
   ],
   "correct": 0,
   "explain": "Less energy is lost on the way up.",
   "tag": "Terms"
  },
  {
   "q": "What does the moment magnitude scale measure?",
   "options": [
    "Energy released",
    "Damage caused",
    "Number of deaths",
    "Length of shaking only"
   ],
   "correct": 0,
   "explain": "Magnitude, not intensity.",
   "tag": "Measurement"
  },
  {
   "q": "How much more energy is magnitude 7 than magnitude 6?",
   "options": [
    "About 32 times",
    "About 2 times",
    "About 10 times",
    "About 1,000 times"
   ],
   "correct": 0,
   "explain": "Each step ≈ 32×.",
   "tag": "Measurement"
  },
  {
   "q": "What does the Mercalli scale measure?",
   "options": [
    "Effects and damage",
    "Energy released",
    "Depth of the focus",
    "Plate speed"
   ],
   "correct": 0,
   "explain": "Intensity, I–XII.",
   "tag": "Measurement"
  },
  {
   "q": "Which instrument records earthquakes?",
   "options": [
    "Seismometer",
    "Barometer",
    "Anemometer (wind gauge)",
    "Tiltmeter"
   ],
   "correct": 0,
   "explain": "Produces a seismogram.",
   "tag": "Measurement"
  },
  {
   "q": "What is an aftershock?",
   "options": [
    "A smaller quake after the main one",
    "The first small warning tremor before a quake",
    "A tsunami reaching the coast",
    "A volcanic eruption"
   ],
   "correct": 0,
   "explain": "Can last for weeks.",
   "tag": "Terms"
  }
 ]
};

window.SBL_LESSONS["IGHZ05"] = {
 "id": "IGHZ05",
 "topicNumber": 2,
 "topicTitle": "Earthquakes (IGCSE)",
 "title": "Earthquake hazards and tsunamis",
 "href": "/igcse/geography/learn/hazardous-environments/l05-earthquake-hazards-and-tsunamis",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Hazardous Environments: Earthquake hazards and tsunamis.",
 "checklist": [
  "I can identify and describe the main primary and secondary hazards, in particular tsunamis",
  "I can describe the factors affecting the impact of an earthquake"
 ],
 "quiz": [
  {
   "q": "Which is a primary earthquake hazard?",
   "options": [
    "Ground shaking",
    "Tsunami",
    "Cholera outbreak",
    "Landslide"
   ],
   "correct": 0,
   "explain": "Caused directly by the earthquake.",
   "tag": "Hazards"
  },
  {
   "q": "Which is a secondary hazard?",
   "options": [
    "Fire from broken gas pipes",
    "Ground shaking",
    "Ground rupture",
    "Building collapse during shaking"
   ],
   "correct": 0,
   "explain": "Results from the primary effects.",
   "tag": "Hazards"
  },
  {
   "q": "What is liquefaction?",
   "options": [
    "Wet soil behaving like a liquid",
    "Lava flowing quickly down a steep slope",
    "Rain falling after a quake",
    "Melting rock under a plate"
   ],
   "correct": 0,
   "explain": "Buildings sink or tilt.",
   "tag": "Hazards"
  },
  {
   "q": "What usually triggers a tsunami?",
   "options": [
    "The sea floor jerking upwards",
    "A strong onshore wind",
    "A very high spring tide reaching the coast",
    "Heavy rain over the sea"
   ],
   "correct": 0,
   "explain": "Undersea earthquake.",
   "tag": "Tsunami"
  },
  {
   "q": "How fast can a tsunami travel in deep ocean?",
   "options": [
    "700–900 km/h",
    "7–9 km/h",
    "70–90 km/h",
    "7,000–9,000 km/h"
   ],
   "correct": 0,
   "explain": "As fast as a jet plane.",
   "tag": "Tsunami"
  },
  {
   "q": "Why do tsunami waves grow taller near the coast?",
   "options": [
    "The water becomes shallower",
    "The wind gets stronger near the land",
    "The tide always rises",
    "Rivers add extra water"
   ],
   "correct": 0,
   "explain": "Waves slow and pile up.",
   "tag": "Tsunami"
  },
  {
   "q": "What is a natural warning sign of a tsunami?",
   "options": [
    "The sea retreating",
    "Heavy rain",
    "Strong winds",
    "A rise in temperature"
   ],
   "correct": 0,
   "explain": "Drawback.",
   "tag": "Tsunami"
  },
  {
   "q": "Which makes an earthquake MORE deadly?",
   "options": [
    "A shallow focus near a city",
    "A deep focus under the ocean",
    "Strict building codes",
    "Regular earthquake drills"
   ],
   "correct": 0,
   "explain": "Shallow and near people.",
   "tag": "Factors"
  },
  {
   "q": "Why does geology affect impact?",
   "options": [
    "Soft ground shakes more",
    "Hard rock creates tsunamis",
    "Granite causes fires",
    "Clay stops seismic waves"
   ],
   "correct": 0,
   "explain": "And may liquefy.",
   "tag": "Factors"
  },
  {
   "q": "How many people did the 2004 tsunami kill?",
   "options": [
    "About 230,000",
    "About 2,300",
    "About 23,000",
    "About 2.3 million"
   ],
   "correct": 0,
   "explain": "In 14 countries.",
   "tag": "Tsunami"
  }
 ]
};

window.SBL_LESSONS["IGHZ06"] = {
 "id": "IGHZ06",
 "topicNumber": 2,
 "topicTitle": "Earthquakes (IGCSE)",
 "title": "Earthquake management",
 "href": "/igcse/geography/learn/hazardous-environments/l06-earthquake-management",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Hazardous Environments: Earthquake management.",
 "checklist": [
  "I can understand how people can prepare for earthquakes",
  "I can know short-term and long-term responses and relief",
  "I can understand why people continue to live in areas at risk",
  "I can apply this knowledge to case studies"
 ],
 "quiz": [
  {
   "q": "Why does management focus on preparation?",
   "options": [
    "Earthquakes cannot be predicted accurately",
    "Earthquakes always happen at night",
    "Preparation is never expensive",
    "Warning systems always give several hours of notice"
   ],
   "correct": 0,
   "explain": "Prediction is not yet possible.",
   "tag": "Prepare"
  },
  {
   "q": "What does a base isolator do?",
   "options": [
    "Absorbs ground movement",
    "Measures earthquake magnitude",
    "Warns people by text message",
    "Stops tsunamis reaching land"
   ],
   "correct": 0,
   "explain": "Rubber pads under the building.",
   "tag": "Prepare"
  },
  {
   "q": "What is retrofitting?",
   "options": [
    "Strengthening existing buildings",
    "Building new sea walls",
    "Moving a whole city to a safer location",
    "Rebuilding after a quake"
   ],
   "correct": 0,
   "explain": "Upgrading older buildings.",
   "tag": "Prepare"
  },
  {
   "q": "What should you do in an earthquake?",
   "options": [
    "Drop, cover and hold on",
    "Run outside immediately",
    "Stand next to windows",
    "Use the lift to escape"
   ],
   "correct": 0,
   "explain": "Standard advice.",
   "tag": "Prepare"
  },
  {
   "q": "Which is a short-term response?",
   "options": [
    "Search and rescue",
    "New building codes",
    "Rebuilding schools",
    "Creating new jobs"
   ],
   "correct": 0,
   "explain": "Immediate relief.",
   "tag": "Responses"
  },
  {
   "q": "Which is a long-term response?",
   "options": [
    "Rebuilding to higher standards",
    "Handing out tents",
    "Field hospitals",
    "Rescuing people trapped in collapsed buildings"
   ],
   "correct": 0,
   "explain": "Recovery takes years.",
   "tag": "Responses"
  },
  {
   "q": "Why do richer countries recover faster?",
   "options": [
    "They can afford to rebuild quickly",
    "Their earthquakes are always much weaker",
    "They have no tectonic plates",
    "They never need any aid"
   ],
   "correct": 0,
   "explain": "Money, insurance and planning.",
   "tag": "Responses"
  },
  {
   "q": "Why might people stay near volcanoes?",
   "options": [
    "Fertile soils",
    "Free housing",
    "No earthquakes",
    "Colder climate"
   ],
   "correct": 0,
   "explain": "Rich in minerals.",
   "tag": "Living at risk"
  },
  {
   "q": "Why might poor people stay in a risky area?",
   "options": [
    "They cannot afford to move",
    "They are paid by the government to stay",
    "It is the safest place",
    "There are no hazards"
   ],
   "correct": 0,
   "explain": "Poverty limits choice.",
   "tag": "Living at risk"
  },
  {
   "q": "Which is an example of land-use planning?",
   "options": [
    "Keeping hospitals off unstable ground",
    "Handing out food parcels to families after a quake",
    "Running school drills",
    "Measuring magnitude"
   ],
   "correct": 0,
   "explain": "Deciding where to build.",
   "tag": "Prepare"
  }
 ]
};

window.SBL_LESSONS["IGHZ07"] = {
 "id": "IGHZ07",
 "topicNumber": 2,
 "topicTitle": "Earthquakes (IGCSE)",
 "title": "Earthquake case study (HIC): Japan 2011",
 "href": "/igcse/geography/learn/hazardous-environments/l07-japan-2011-earthquake",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Hazardous Environments: Case study: Japan 2011 (HIC).",
 "checklist": [
  "I can understand the cause of the Japan 2011 earthquake and tsunami",
  "I can understand the impacts of the 2011 earthquake",
  "I can explain the long- and short-term impacts of the earthquake",
  "I can know the hazard management plan in Japan"
 ],
 "quiz": [
  {
   "q": "When did the Tōhoku earthquake happen?",
   "options": [
    "11 March 2011",
    "12 January 2010",
    "26 December 2004",
    "8 November 2013"
   ],
   "correct": 0,
   "explain": "At 14:46 local time.",
   "tag": "Cause"
  },
  {
   "q": "What was its magnitude?",
   "options": [
    "9.0–9.1",
    "7.0",
    "6.9",
    "8.0 (Richter)"
   ],
   "correct": 0,
   "explain": "Japan’s strongest recorded.",
   "tag": "Cause"
  },
  {
   "q": "Which plate subducts beneath northern Japan?",
   "options": [
    "Pacific",
    "Caribbean",
    "Indo-Australian",
    "Nazca"
   ],
   "correct": 0,
   "explain": "At the Japan Trench.",
   "tag": "Cause"
  },
  {
   "q": "What type of plate boundary caused it?",
   "options": [
    "Destructive",
    "Constructive",
    "Conservative",
    "Hotspot"
   ],
   "correct": 0,
   "explain": "Subduction zone.",
   "tag": "Cause"
  },
  {
   "q": "What caused most of the deaths?",
   "options": [
    "The tsunami",
    "Collapsing tall buildings",
    "Volcanic ash",
    "Forest fires"
   ],
   "correct": 0,
   "explain": "Buildings mostly survived the shaking.",
   "tag": "Impacts"
  },
  {
   "q": "Roughly how high did the tsunami reach?",
   "options": [
    "About 40 m",
    "About 4 m",
    "About 400 m",
    "About 1 m"
   ],
   "correct": 0,
   "explain": "Up to 40.5 m at Miyako.",
   "tag": "Impacts"
  },
  {
   "q": "Which nuclear plant was damaged?",
   "options": [
    "Fukushima Daiichi",
    "Chernobyl",
    "Three Mile Island",
    "Sellafield"
   ],
   "correct": 0,
   "explain": "Three reactors melted down.",
   "tag": "Impacts"
  },
  {
   "q": "Why was it so costly?",
   "options": [
    "Japan is rich with lots of infrastructure",
    "Japan had no building codes before 2011",
    "It lasted for several weeks",
    "It hit only farmland"
   ],
   "correct": 0,
   "explain": "High-value property and industry.",
   "tag": "Impacts"
  },
  {
   "q": "Which is a long-term response in Japan?",
   "options": [
    "Building higher sea walls",
    "Search and rescue",
    "Opening evacuation centres",
    "Stopping bullet trains"
   ],
   "correct": 0,
   "explain": "Recovery over years.",
   "tag": "Responses"
  },
  {
   "q": "When is Japan’s Disaster Prevention Day?",
   "options": [
    "1 September",
    "11 March",
    "1 January",
    "25 December"
   ],
   "correct": 0,
   "explain": "Remembers the 1923 Kantō earthquake.",
   "tag": "Management"
  }
 ]
};

window.SBL_LESSONS["IGHZ08"] = {
 "id": "IGHZ08",
 "topicNumber": 2,
 "topicTitle": "Earthquakes (IGCSE)",
 "title": "Earthquake case study (LIC): Haiti 2010",
 "href": "/igcse/geography/learn/hazardous-environments/l08-haiti-2010-earthquake",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Hazardous Environments: Case study: Haiti 2010 (LIC).",
 "checklist": [
  "I can understand the cause of the Haiti 2010 earthquake",
  "I can understand the impacts of the 2010 earthquake",
  "I can explain the long- and short-term impacts of the earthquake",
  "I can know the hazard management plan in Haiti before and after 2010"
 ],
 "quiz": [
  {
   "q": "When did the Haiti earthquake happen?",
   "options": [
    "12 January 2010",
    "11 March 2011",
    "8 November 2013",
    "3 May 2018"
   ],
   "correct": 0,
   "explain": "At 16:53 local time.",
   "tag": "Cause"
  },
  {
   "q": "What was its magnitude?",
   "options": [
    "7.0",
    "9.1",
    "5.5",
    "8.8"
   ],
   "correct": 0,
   "explain": "Weaker than Japan 2011.",
   "tag": "Cause"
  },
  {
   "q": "Which type of boundary caused it?",
   "options": [
    "Conservative",
    "Destructive",
    "Constructive",
    "Collision"
   ],
   "correct": 0,
   "explain": "Caribbean plate sliding past North American.",
   "tag": "Cause"
  },
  {
   "q": "Why was the earthquake so destructive?",
   "options": [
    "Shallow focus near the capital",
    "Very deep focus far out at sea",
    "It caused a 40 m tsunami",
    "It happened in the middle of winter"
   ],
   "correct": 0,
   "explain": "About 13 km deep, 25 km from Port-au-Prince.",
   "tag": "Cause"
  },
  {
   "q": "Roughly how many people were made homeless?",
   "options": [
    "1.5 million",
    "15,000",
    "150,000",
    "About 15 million"
   ],
   "correct": 0,
   "explain": "About 1.5 million.",
   "tag": "Impacts"
  },
  {
   "q": "How did the damage compare with Haiti’s GDP?",
   "options": [
    "It was more than a whole year’s GDP",
    "It was about 1% of GDP",
    "It was less than Japan’s per person",
    "It was fully insured"
   ],
   "correct": 0,
   "explain": "About $8 billion.",
   "tag": "Impacts"
  },
  {
   "q": "Which disease broke out later in 2010?",
   "options": [
    "Cholera",
    "Malaria",
    "Ebola",
    "Measles"
   ],
   "correct": 0,
   "explain": "Spread through water.",
   "tag": "Impacts"
  },
  {
   "q": "Why was aid slow to arrive?",
   "options": [
    "Damaged port, roads and congested airport",
    "No other country offered to help Haiti at all",
    "The weather was too cold",
    "Aid was not needed"
   ],
   "correct": 0,
   "explain": "Infrastructure was destroyed.",
   "tag": "Responses"
  },
  {
   "q": "What did Haiti lack before 2010?",
   "options": [
    "Building codes",
    "Tectonic plates",
    "A capital city",
    "A coastline"
   ],
   "correct": 0,
   "explain": "Buildings were poorly built.",
   "tag": "Management"
  },
  {
   "q": "What did the 2021 earthquake show?",
   "options": [
    "Haiti is still very vulnerable",
    "Haiti is now fully prepared",
    "Earthquakes have stopped there",
    "The plates no longer move"
   ],
   "correct": 0,
   "explain": "Over 2,000 killed.",
   "tag": "Management"
  }
 ]
};

window.SBL_LESSONS["IGHZ09"] = {
 "id": "IGHZ09",
 "topicNumber": 3,
 "topicTitle": "Volcanoes (IGCSE)",
 "title": "Volcanoes",
 "href": "/igcse/geography/learn/hazardous-environments/l09-volcanoes",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Hazardous Environments: Volcanoes.",
 "checklist": [
  "I can describe the distribution of volcanoes with reference to plate boundaries",
  "I can identify and label key features of a volcano",
  "I can identify and describe the main hazards associated with volcanoes",
  "I can understand how different countries manage volcanoes"
 ],
 "quiz": [
  {
   "q": "Where are most volcanoes found?",
   "options": [
    "Around the Pacific Ring of Fire",
    "In the middle of Africa",
    "Along conservative plate boundaries",
    "Near the North Pole"
   ],
   "correct": 0,
   "explain": "About three-quarters.",
   "tag": "Distribution"
  },
  {
   "q": "At which boundary are there NO volcanoes?",
   "options": [
    "Conservative",
    "Constructive",
    "Destructive",
    "Above a hotspot"
   ],
   "correct": 0,
   "explain": "No magma is produced.",
   "tag": "Distribution"
  },
  {
   "q": "What is the magma chamber?",
   "options": [
    "Store of molten rock below the volcano",
    "The opening at the top of the volcano",
    "A small cone on the side",
    "The cloud of ash above"
   ],
   "correct": 0,
   "explain": "Feeds the eruption.",
   "tag": "Features"
  },
  {
   "q": "Which describes a composite volcano?",
   "options": [
    "Steep with layers of ash and lava",
    "Wide with gentle slopes",
    "Formed only over hotspots in the middle of plates",
    "Erupts runny basalt lava"
   ],
   "correct": 0,
   "explain": "e.g. Mount Fuji.",
   "tag": "Features"
  },
  {
   "q": "Which is a shield volcano?",
   "options": [
    "Kīlauea",
    "Mount Fuji",
    "Mount St Helens",
    "Vesuvius"
   ],
   "correct": 0,
   "explain": "Wide and gentle.",
   "tag": "Features"
  },
  {
   "q": "What is a pyroclastic flow?",
   "options": [
    "A fast avalanche of hot gas and ash",
    "A slow stream of runny lava",
    "A mudflow after heavy rain",
    "A cloud of steam rising over the sea after an eruption"
   ],
   "correct": 0,
   "explain": "The deadliest hazard.",
   "tag": "Hazards"
  },
  {
   "q": "What is a lahar?",
   "options": [
    "A volcanic mudflow",
    "A volcanic bomb thrown out",
    "A type of lava",
    "A gas cloud"
   ],
   "correct": 0,
   "explain": "e.g. Armero 1985.",
   "tag": "Hazards"
  },
  {
   "q": "What does the VEI measure?",
   "options": [
    "How explosive an eruption is",
    "How many people died in the eruption",
    "How deep the magma is",
    "The temperature of the lava"
   ],
   "correct": 0,
   "explain": "Scale 0–8.",
   "tag": "Measurement"
  },
  {
   "q": "Which shows magma is rising?",
   "options": [
    "The ground swelling",
    "Falling sea levels",
    "More rainfall",
    "Fewer earthquakes"
   ],
   "correct": 0,
   "explain": "Measured by tiltmeters and GPS.",
   "tag": "Management"
  },
  {
   "q": "How was lava managed in Heimaey in 1973?",
   "options": [
    "Cooling it with sea water",
    "Bombing it from aircraft",
    "Building a dam of sandbags",
    "Covering it with ash"
   ],
   "correct": 0,
   "explain": "Pumped sea water.",
   "tag": "Management"
  }
 ]
};

window.SBL_LESSONS["IGHZ10"] = {
 "id": "IGHZ10",
 "topicNumber": 3,
 "topicTitle": "Volcanoes (IGCSE)",
 "title": "Volcano case study: Mount Kīlauea 2018",
 "href": "/igcse/geography/learn/hazardous-environments/l10-kilauea-2018",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Hazardous Environments: Case study: Kīlauea 2018.",
 "checklist": [
  "I can describe the location of Mount Kīlauea",
  "I can explain how hotspots cause volcanoes",
  "I can classify the impacts of the 2018 eruption into social, economic and environmental",
  "I can explain the long- and short-term impacts of the eruption",
  "I can explain why people choose to live beside this volcano"
 ],
 "quiz": [
  {
   "q": "On which island is Kīlauea?",
   "options": [
    "The Island of Hawai‘i (Big Island)",
    "Maui (Hawaiian Islands)",
    "Iceland",
    "Honshu"
   ],
   "correct": 0,
   "explain": "The largest Hawaiian island.",
   "tag": "Location"
  },
  {
   "q": "What type of volcano is Kīlauea?",
   "options": [
    "Shield",
    "Composite",
    "Caldera only",
    "Cinder cone"
   ],
   "correct": 0,
   "explain": "Wide with runny lava.",
   "tag": "Location"
  },
  {
   "q": "What causes volcanoes in Hawai‘i?",
   "options": [
    "A hotspot",
    "A destructive boundary",
    "A conservative boundary",
    "A collision boundary"
   ],
   "correct": 0,
   "explain": "Mantle plume.",
   "tag": "Hotspot"
  },
  {
   "q": "Why do the Hawaiian islands get older to the north-west?",
   "options": [
    "The plate moves over a still hotspot",
    "The hotspot itself moves south-east every year",
    "Sea level is falling",
    "Erosion creates new islands"
   ],
   "correct": 0,
   "explain": "Plate moves north-west.",
   "tag": "Hotspot"
  },
  {
   "q": "When did the 2018 eruption begin?",
   "options": [
    "3 May 2018",
    "11 March 2018",
    "1 January 2018",
    "8 November 2018"
   ],
   "correct": 0,
   "explain": "Fissures in Leilani Estates.",
   "tag": "Impacts"
  },
  {
   "q": "Roughly how many homes were destroyed?",
   "options": [
    "Over 700",
    "About 70",
    "About 7,000",
    "About 70,000"
   ],
   "correct": 0,
   "explain": "Over 700.",
   "tag": "Impacts"
  },
  {
   "q": "Which is an ENVIRONMENTAL impact?",
   "options": [
    "Kapoho Bay filled with lava",
    "Over 700 homes destroyed",
    "Tourism fell sharply",
    "About 2,000 people evacuated"
   ],
   "correct": 0,
   "explain": "Change to the landscape.",
   "tag": "Impacts"
  },
  {
   "q": "What is vog?",
   "options": [
    "Volcanic smog",
    "A lava fountain",
    "A volcanic mudflow",
    "A tsunami"
   ],
   "correct": 0,
   "explain": "Sulfur dioxide haze.",
   "tag": "Impacts"
  },
  {
   "q": "How many people died in the 2018 eruption?",
   "options": [
    "None",
    "About 70",
    "About 700",
    "About 2,000"
   ],
   "correct": 0,
   "explain": "About 24 were injured.",
   "tag": "Impacts"
  },
  {
   "q": "Why did many people live in Leilani Estates?",
   "options": [
    "Land there was cheap",
    "There were no volcanic hazards",
    "It was the capital city",
    "The government paid them"
   ],
   "correct": 0,
   "explain": "Affordable land in lava zones.",
   "tag": "Living at risk"
  }
 ]
};

window.SBL_LESSONS["IGHZ11"] = {
 "id": "IGHZ11",
 "topicNumber": 4,
 "topicTitle": "Tropical cyclones (IGCSE)",
 "title": "Tropical storms",
 "href": "/igcse/geography/learn/hazardous-environments/l11-tropical-storms",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Hazardous Environments: Tropical storms.",
 "checklist": [
  "I can describe the distribution of tropical cyclones and their characteristics",
  "I can understand how tropical cyclones are measured",
  "I can identify the components needed for a tropical cyclone to form",
  "I can understand the vulnerability of countries to these hazards"
 ],
 "quiz": [
  {
   "q": "What is a tropical cyclone called in the north-west Pacific?",
   "options": [
    "Typhoon",
    "Hurricane",
    "Tornado",
    "Monsoon"
   ],
   "correct": 0,
   "explain": "e.g. Typhoon Haiyan.",
   "tag": "Distribution"
  },
  {
   "q": "Why do cyclones not form on the Equator?",
   "options": [
    "The Coriolis effect is too weak",
    "The sea is too cold",
    "There is no wind at all near the Equator",
    "The air pressure is too low"
   ],
   "correct": 0,
   "explain": "Needs at least 5° latitude to spin.",
   "tag": "Formation"
  },
  {
   "q": "What sea temperature is needed?",
   "options": [
    "At least 26.5°C",
    "At least 10°C at the surface",
    "Below 15°C",
    "Exactly 20°C"
   ],
   "correct": 0,
   "explain": "Warm water supplies energy.",
   "tag": "Formation"
  },
  {
   "q": "What is the eye of a storm?",
   "options": [
    "The calm centre",
    "The strongest winds",
    "The outer rain bands",
    "The storm surge"
   ],
   "correct": 0,
   "explain": "Sinking air.",
   "tag": "Characteristics"
  },
  {
   "q": "Why do cyclones weaken over land?",
   "options": [
    "They lose heat and moisture",
    "Mountains reflect the wind",
    "The Coriolis effect stops",
    "They gain too much energy"
   ],
   "correct": 0,
   "explain": "No warm ocean below.",
   "tag": "Characteristics"
  },
  {
   "q": "What does the Saffir–Simpson scale measure?",
   "options": [
    "Sustained wind speed",
    "Total rainfall during the storm",
    "Number of deaths",
    "Size of the eye"
   ],
   "correct": 0,
   "explain": "Categories 1–5.",
   "tag": "Measurement"
  },
  {
   "q": "What wind speed is a category 5?",
   "options": [
    "252 km/h or more",
    "119–153 km/h",
    "50–100 km/h",
    "178–208 km/h"
   ],
   "correct": 0,
   "explain": "The most severe.",
   "tag": "Measurement"
  },
  {
   "q": "What is a storm surge?",
   "options": [
    "A rise in sea level pushed onshore",
    "A sudden drop in air pressure only",
    "Heavy rain on mountains",
    "A tornado over the sea"
   ],
   "correct": 0,
   "explain": "Causes most deaths.",
   "tag": "Vulnerability"
  },
  {
   "q": "Which makes a place more vulnerable?",
   "options": [
    "Low-lying coasts and poverty",
    "High mountains far inland",
    "Strict building codes",
    "Good warning systems and storm shelters"
   ],
   "correct": 0,
   "explain": "e.g. Bangladesh.",
   "tag": "Vulnerability"
  },
  {
   "q": "What is low wind shear?",
   "options": [
    "Similar wind speeds at different heights",
    "Very strong winds blowing at the sea surface",
    "No wind anywhere",
    "Winds blowing from the poles"
   ],
   "correct": 0,
   "explain": "Stops the storm being torn apart.",
   "tag": "Formation"
  }
 ]
};

window.SBL_LESSONS["IGHZ12"] = {
 "id": "IGHZ12",
 "topicNumber": 4,
 "topicTitle": "Tropical cyclones (IGCSE)",
 "title": "Tropical storm case study: Typhoon Haiyan 2013",
 "href": "/igcse/geography/learn/hazardous-environments/l12-typhoon-haiyan-2013",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Hazardous Environments: Case study: Typhoon Haiyan 2013.",
 "checklist": [
  "I can understand the cause of Typhoon Haiyan",
  "I can understand the short- and long-term impacts of the typhoon",
  "I can explain why people continue to live in areas at risk from hazards",
  "I can understand that some countries are more vulnerable than others to tropical storms"
 ],
 "quiz": [
  {
   "q": "What was Haiyan called in the Philippines?",
   "options": [
    "Yolanda",
    "Katrina",
    "Nargis",
    "Sandy"
   ],
   "correct": 0,
   "explain": "Local name.",
   "tag": "Cause"
  },
  {
   "q": "When did Haiyan make landfall?",
   "options": [
    "8 November 2013",
    "11 March 2011",
    "12 January 2010",
    "3 May 2018"
   ],
   "correct": 0,
   "explain": "At Guiuan, Eastern Samar.",
   "tag": "Cause"
  },
  {
   "q": "What category was Haiyan?",
   "options": [
    "Category 5",
    "Category 1",
    "Category 2",
    "Category 3"
   ],
   "correct": 0,
   "explain": "A super typhoon.",
   "tag": "Cause"
  },
  {
   "q": "Which city was worst hit?",
   "options": [
    "Tacloban",
    "Manila",
    "Cebu",
    "Davao"
   ],
   "correct": 0,
   "explain": "On Leyte.",
   "tag": "Impacts"
  },
  {
   "q": "What caused most deaths?",
   "options": [
    "The storm surge",
    "Volcanic ash falling",
    "An earthquake",
    "Snowfall"
   ],
   "correct": 0,
   "explain": "Over 5 m high in Tacloban.",
   "tag": "Impacts"
  },
  {
   "q": "Roughly how many people died?",
   "options": [
    "About 6,300",
    "About 630",
    "About 63,000",
    "About 630,000"
   ],
   "correct": 0,
   "explain": "NDRRMC figure.",
   "tag": "Impacts"
  },
  {
   "q": "Roughly how many people were displaced?",
   "options": [
    "About 4.1 million",
    "About 41,000",
    "About 410,000",
    "About 41 million"
   ],
   "correct": 0,
   "explain": "Displaced from homes.",
   "tag": "Impacts"
  },
  {
   "q": "Which is a long-term impact?",
   "options": [
    "Coconut farmers losing income for years",
    "Search and rescue",
    "Airport closed for a day",
    "Power cuts that lasted during the storm itself"
   ],
   "correct": 0,
   "explain": "Trees take years to regrow.",
   "tag": "Impacts"
  },
  {
   "q": "Why do fishing families live on the coast?",
   "options": [
    "Their livelihoods depend on it",
    "There are no storms there",
    "Land there is the most expensive",
    "The government forces them"
   ],
   "correct": 0,
   "explain": "Jobs and income.",
   "tag": "Living at risk"
  },
  {
   "q": "Why is the Philippines vulnerable to typhoons?",
   "options": [
    "It lies in the path of Pacific typhoons",
    "It is far from any ocean so storms build over land",
    "It has cold seas around it",
    "It is on the Equator"
   ],
   "correct": 0,
   "explain": "About 20 a year enter its waters.",
   "tag": "Vulnerability"
  }
 ]
};

window.SBL_LESSONS["IGCF01"] = {
 "id": "IGCF01",
 "topicNumber": 1,
 "topicTitle": "Planning the enquiry (IGCSE)",
 "title": "Why is fieldwork important in geography?",
 "href": "/igcse/geography/learn/coastal-fieldwork/l01-why-fieldwork",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Fieldwork: Why fieldwork? The enquiry process.",
 "checklist": [
  "I can explain what fieldwork is and why it is important in geography",
  "I can describe the six stages of a geographical enquiry",
  "I can state our coastal enquiry question, location and hypotheses"
 ],
 "quiz": [
  {
   "q": "What is fieldwork?",
   "options": [
    "Collecting primary data outside the classroom",
    "Reading textbooks at home",
    "Watching documentaries about geography in class",
    "Copying data from a website"
   ],
   "correct": 0,
   "explain": "Primary data, in the field.",
   "tag": "Fieldwork"
  },
  {
   "q": "What is a hypothesis?",
   "options": [
    "A testable statement",
    "A list of equipment needed",
    "A type of graph used to show data",
    "The final conclusion of a study"
   ],
   "correct": 0,
   "explain": "Accepted or rejected with data.",
   "tag": "Planning"
  },
  {
   "q": "Which stage comes first in an enquiry?",
   "options": [
    "Introduction and planning",
    "Data analysis and presentation",
    "Evaluation",
    "Conclusions"
   ],
   "correct": 0,
   "explain": "Question, hypotheses, location.",
   "tag": "Enquiry"
  },
  {
   "q": "In which stage do you identify anomalies?",
   "options": [
    "Data analysis",
    "Introduction and planning",
    "Risk assessment",
    "Methods and data collection"
   ],
   "correct": 0,
   "explain": "Describe and explain patterns and anomalies.",
   "tag": "Enquiry"
  },
  {
   "q": "In which stage do you accept or reject hypotheses?",
   "options": [
    "Conclusions",
    "Data presentation",
    "Methods",
    "Planning"
   ],
   "correct": 0,
   "explain": "Using your evidence.",
   "tag": "Enquiry"
  },
  {
   "q": "What was our fieldwork focus?",
   "options": [
    "Human intervention and coastal processes",
    "Rural settlement size and the services provided",
    "River velocity and discharge",
    "Urban land use and traffic"
   ],
   "correct": 0,
   "explain": "The coastal enquiry.",
   "tag": "Our enquiry"
  },
  {
   "q": "Which is secondary data in our study?",
   "options": [
    "Historical photographs",
    "Beach width measurements",
    "Wave frequency counts",
    "Our own field sketches"
   ],
   "correct": 0,
   "explain": "Collected by others.",
   "tag": "Our enquiry"
  },
  {
   "q": "Which is a qualitative method we used?",
   "options": [
    "Field sketches",
    "Beach gradient",
    "Wave frequency",
    "Longshore drift"
   ],
   "correct": 0,
   "explain": "Recorded in pictures/words.",
   "tag": "Our enquiry"
  },
  {
   "q": "Where was our coastal study?",
   "options": [
    "Sam Roi Yot National Park",
    "Hua Hin town centre",
    "Khao Yai National Park (Nakhon Ratchasima)",
    "Pattaya beach"
   ],
   "correct": 0,
   "explain": "On the Gulf of Thailand.",
   "tag": "Our enquiry"
  },
  {
   "q": "Why is fieldwork important?",
   "options": [
    "It applies theory to real places",
    "It replaces all classroom learning",
    "It avoids collecting any data",
    "It is only for physical geography"
   ],
   "correct": 0,
   "explain": "Skills and understanding.",
   "tag": "Fieldwork"
  }
 ]
};

window.SBL_LESSONS["IGCF02"] = {
 "id": "IGCF02",
 "topicNumber": 1,
 "topicTitle": "Planning the enquiry (IGCSE)",
 "title": "Planning: types of data, pilot surveys and risk assessment",
 "href": "/igcse/geography/learn/coastal-fieldwork/l02-planning-data-and-risk",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Fieldwork: Data types, pilot surveys and risk.",
 "checklist": [
  "I can explain the difference between primary and secondary data, and their advantages and disadvantages",
  "I can explain the difference between quantitative and qualitative data",
  "I can explain why a pilot survey is carried out",
  "I can complete a risk assessment for coastal fieldwork"
 ],
 "quiz": [
  {
   "q": "Which is primary data?",
   "options": [
    "Beach width we measured",
    "A geological map of the area",
    "A newspaper report on erosion",
    "Weather station rainfall data"
   ],
   "correct": 0,
   "explain": "Collected by us.",
   "tag": "Data"
  },
  {
   "q": "Which is an advantage of secondary data?",
   "options": [
    "It saves time",
    "It is always up to date",
    "It always fits your question",
    "You always see it being collected"
   ],
   "correct": 0,
   "explain": "Already collected.",
   "tag": "Data"
  },
  {
   "q": "Which is a disadvantage of secondary data?",
   "options": [
    "It may be out of date",
    "It takes days to collect yourself",
    "It needs a clinometer",
    "It can only be qualitative"
   ],
   "correct": 0,
   "explain": "And may be biased.",
   "tag": "Data"
  },
  {
   "q": "Which is quantitative data?",
   "options": [
    "Waves per minute",
    "An annotated field sketch",
    "An interview",
    "A photograph"
   ],
   "correct": 0,
   "explain": "A number.",
   "tag": "Data"
  },
  {
   "q": "Why is qualitative data sometimes criticised?",
   "options": [
    "It is subjective",
    "It is always numerical",
    "It is never useful",
    "It cannot be collected outdoors"
   ],
   "correct": 0,
   "explain": "Open to interpretation.",
   "tag": "Data"
  },
  {
   "q": "What is a pilot survey?",
   "options": [
    "A small trial before the main survey",
    "The final survey of the investigation",
    "A survey done from an aeroplane",
    "A survey of secondary data only"
   ],
   "correct": 0,
   "explain": "Tests methods and sites.",
   "tag": "Pilot"
  },
  {
   "q": "Why carry out a pilot survey?",
   "options": [
    "To test methods and save time later",
    "To avoid writing a risk assessment",
    "To collect all the final data in one go",
    "To make the study less representative"
   ],
   "correct": 0,
   "explain": "Checks everything works.",
   "tag": "Pilot"
  },
  {
   "q": "What is a hazard?",
   "options": [
    "Something that could cause harm",
    "The likelihood of harm happening",
    "A method of sampling a beach",
    "A type of secondary data"
   ],
   "correct": 0,
   "explain": "Potential to cause injury.",
   "tag": "Risk"
  },
  {
   "q": "How can the risk from waves be reduced?",
   "options": [
    "Only go knee-deep and work in pairs",
    "Measure LSD from far out at sea",
    "Work alone so that nobody gets distracted",
    "Collect data during a storm"
   ],
   "correct": 0,
   "explain": "Stay safe in the sea.",
   "tag": "Risk"
  },
  {
   "q": "What does risk take into account?",
   "options": [
    "Likelihood and seriousness of harm",
    "Only the cost of replacing broken equipment",
    "Only the number of students",
    "The colour of the sand"
   ],
   "correct": 0,
   "explain": "How likely and how bad.",
   "tag": "Risk"
  }
 ]
};

window.SBL_LESSONS["IGCF03"] = {
 "id": "IGCF03",
 "topicNumber": 1,
 "topicTitle": "Planning the enquiry (IGCSE)",
 "title": "Sampling, transects and avoiding bias",
 "href": "/igcse/geography/learn/coastal-fieldwork/l03-sampling",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Fieldwork: Sampling and transects.",
 "checklist": [
  "I can describe systematic, stratified and random sampling",
  "I can explain why we sample and how to avoid bias",
  "I can explain which sampling techniques were used in our coastal enquiry"
 ],
 "quiz": [
  {
   "q": "What is systematic sampling?",
   "options": [
    "Sampling at regular intervals",
    "Sampling using random numbers",
    "Sampling each group by its size",
    "Sampling only the best spots"
   ],
   "correct": 0,
   "explain": "e.g. every 10 m.",
   "tag": "Methods"
  },
  {
   "q": "What is stratified sampling?",
   "options": [
    "Sampling groups in proportion",
    "Sampling at regular intervals",
    "Sampling wherever you like",
    "Sampling only once at each site"
   ],
   "correct": 0,
   "explain": "Divide into strata.",
   "tag": "Methods"
  },
  {
   "q": "What does random sampling require?",
   "options": [
    "Random numbers",
    "A clinometer and ranging poles",
    "Closing your eyes and pointing",
    "Sampling every 5 metres"
   ],
   "correct": 0,
   "explain": "Equal chance for every point.",
   "tag": "Methods"
  },
  {
   "q": "Which sampling did we use for quadrats?",
   "options": [
    "Systematic, every 10 m",
    "Random, using a calculator",
    "Stratified by vegetation type",
    "No sampling at all"
   ],
   "correct": 0,
   "explain": "Along the transect.",
   "tag": "Our enquiry"
  },
  {
   "q": "What is a transect?",
   "options": [
    "A line along which data is collected",
    "A square frame used to measure cover",
    "An instrument to measure angles",
    "A map of the whole coastline"
   ],
   "correct": 0,
   "explain": "From sea to back of beach.",
   "tag": "Transects"
  },
  {
   "q": "Why do we sample?",
   "options": [
    "It is quicker and cheaper",
    "It is always perfectly accurate",
    "It removes the need to repeat readings",
    "It makes data less representative"
   ],
   "correct": 0,
   "explain": "Can’t measure everything.",
   "tag": "Why sample"
  },
  {
   "q": "Why drop the quadrat over your shoulder?",
   "options": [
    "To reduce human bias",
    "To make it land faster",
    "To measure the gradient",
    "To keep it out of the sea"
   ],
   "correct": 0,
   "explain": "You don’t choose the spot.",
   "tag": "Bias"
  },
  {
   "q": "Which could cause bias?",
   "options": [
    "Only sampling the most interesting spots",
    "Sampling every 10 m",
    "Using random numbers",
    "Repeating each reading three times and averaging"
   ],
   "correct": 0,
   "explain": "Not representative.",
   "tag": "Bias"
  },
  {
   "q": "What is a limitation of systematic sampling?",
   "options": [
    "Features between points can be missed",
    "It needs random number tables to choose points",
    "It cannot be used on beaches",
    "It always takes too long"
   ],
   "correct": 0,
   "explain": "Gaps between samples.",
   "tag": "Our enquiry"
  },
  {
   "q": "Why use the same methods at each site?",
   "options": [
    "To compare the sites fairly",
    "To save sun cream",
    "To avoid using a transect",
    "To make the data qualitative"
   ],
   "correct": 0,
   "explain": "Fair comparison.",
   "tag": "Our enquiry"
  }
 ]
};

window.SBL_LESSONS["IGCF04"] = {
 "id": "IGCF04",
 "topicNumber": 2,
 "topicTitle": "Collecting the data (IGCSE)",
 "title": "Coastal enquiry methods: how to collect the data",
 "href": "/igcse/geography/learn/coastal-fieldwork/l04-data-collection-methods",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Fieldwork: Coastal data collection methods.",
 "checklist": [
  "I can understand the data collection methods used in the coastal enquiry",
  "I can understand the sampling technique used for each method",
  "I can explain how each method helps to answer the hypotheses and enquiry question"
 ],
 "quiz": [
  {
   "q": "Where should the beach width tape start (0 m)?",
   "options": [
    "Where the swash breaks",
    "At the back of the beach",
    "In the car park",
    "Halfway up the beach"
   ],
   "correct": 0,
   "explain": "Water’s edge.",
   "tag": "Width"
  },
  {
   "q": "Which instrument measures beach gradient?",
   "options": [
    "Clinometer",
    "Anemometer",
    "Quadrat",
    "Stopwatch"
   ],
   "correct": 0,
   "explain": "Measures angles.",
   "tag": "Gradient"
  },
  {
   "q": "How far apart were the ranging poles?",
   "options": [
    "5 m",
    "50 m",
    "1 m",
    "25 m"
   ],
   "correct": 0,
   "explain": "Systematic sampling every 5 m.",
   "tag": "Gradient"
  },
  {
   "q": "What is the foresight?",
   "options": [
    "The angle measured up the beach",
    "The angle measured down the beach",
    "The width of the beach in metres",
    "A prediction of the results"
   ],
   "correct": 0,
   "explain": "Backsight is down.",
   "tag": "Gradient"
  },
  {
   "q": "How often was the quadrat dropped?",
   "options": [
    "Every 10 m",
    "Every 1 m",
    "Once per beach",
    "Every 100 m"
   ],
   "correct": 0,
   "explain": "Along the transect.",
   "tag": "Transect"
  },
  {
   "q": "What does each small square in the quadrat represent?",
   "options": [
    "1%",
    "10%",
    "25%",
    "100%"
   ],
   "correct": 0,
   "explain": "100 squares.",
   "tag": "Transect"
  },
  {
   "q": "How is wave frequency measured?",
   "options": [
    "Waves breaking in one minute",
    "Height of the tallest wave in an hour",
    "Distance a ball travels",
    "Angle of the beach"
   ],
   "correct": 0,
   "explain": "Repeat and average.",
   "tag": "Waves"
  },
  {
   "q": "How is longshore drift measured?",
   "options": [
    "Timing a float along the shore",
    "Counting the waves that break in one minute",
    "Using a quadrat in the sea",
    "Measuring the beach angle"
   ],
   "correct": 0,
   "explain": "Distance in one minute.",
   "tag": "LSD"
  },
  {
   "q": "Why repeat readings three times?",
   "options": [
    "To calculate a reliable mean",
    "To make the study take longer",
    "Because the first is always wrong",
    "To create more risks"
   ],
   "correct": 0,
   "explain": "Improves reliability.",
   "tag": "Reliability"
  },
  {
   "q": "What should a field sketch include?",
   "options": [
    "Labelled features and management",
    "Only the colour of the sea",
    "No labels or annotations",
    "A copy of a photo downloaded from online"
   ],
   "correct": 0,
   "explain": "Natural and human features.",
   "tag": "Sketch"
  }
 ]
};

window.SBL_LESSONS["IGCF05"] = {
 "id": "IGCF05",
 "topicNumber": 3,
 "topicTitle": "Presenting, analysing and evaluating (IGCSE)",
 "title": "Presenting fieldwork data",
 "href": "/igcse/geography/learn/coastal-fieldwork/l05-presenting-data",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Fieldwork: Presenting fieldwork data.",
 "checklist": [
  "I can process data by calculating percentages and means",
  "I can choose and draw appropriate simple and complex graphs for coastal data",
  "I can evaluate data presentation techniques"
 ],
 "quiz": [
  {
   "q": "Wave counts were 10, 12 and 11. What is the mean?",
   "options": [
    "11",
    "12",
    "33",
    "10"
   ],
   "correct": 0,
   "explain": "33 ÷ 3.",
   "tag": "Processing"
  },
  {
   "q": "Why use the mean?",
   "options": [
    "It shows the overall pattern",
    "It shows every extreme value",
    "It shows the spread of data",
    "It removes the need for data"
   ],
   "correct": 0,
   "explain": "Easy to compare.",
   "tag": "Processing"
  },
  {
   "q": "What is a disadvantage of averages?",
   "options": [
    "They hide extremes",
    "They are hard to calculate",
    "They need a clinometer",
    "They cannot be compared"
   ],
   "correct": 0,
   "explain": "Range is lost.",
   "tag": "Processing"
  },
  {
   "q": "Which graph best shows beach width and gradient?",
   "options": [
    "Beach profile",
    "Pie chart",
    "Scatter graph",
    "Climate graph"
   ],
   "correct": 0,
   "explain": "A cross-section.",
   "tag": "Graphs"
  },
  {
   "q": "Which graph shows % cover along a transect?",
   "options": [
    "Kite diagram",
    "Population pyramid",
    "Rose diagram of winds",
    "Line graph of temperature"
   ],
   "correct": 0,
   "explain": "Width shows % cover.",
   "tag": "Graphs"
  },
  {
   "q": "Best way to compare wave frequency at 3 sites?",
   "options": [
    "Bar chart",
    "Kite diagram",
    "Field sketch",
    "Pie chart"
   ],
   "correct": 0,
   "explain": "One bar per site.",
   "tag": "Graphs"
  },
  {
   "q": "How can LSD direction be shown?",
   "options": [
    "Arrows on a map",
    "A pie chart",
    "A kite diagram",
    "A climate graph"
   ],
   "correct": 0,
   "explain": "Scaled arrows.",
   "tag": "Graphs"
  },
  {
   "q": "What is a strength of beach profiles?",
   "options": [
    "Easy to compare sites visually",
    "They show wave frequency",
    "They need no measurements",
    "They show the opinions of people interviewed"
   ],
   "correct": 0,
   "explain": "Width and gradient together.",
   "tag": "Evaluate"
  },
  {
   "q": "What is a limitation of small overlaid pie charts?",
   "options": [
    "Hard to read precisely",
    "They cannot show percentages",
    "They need random sampling",
    "They only show one site"
   ],
   "correct": 0,
   "explain": "Small segments.",
   "tag": "Evaluate"
  },
  {
   "q": "What is the range?",
   "options": [
    "Highest minus lowest value",
    "The middle value in a list",
    "The most common value",
    "The total of all values"
   ],
   "correct": 0,
   "explain": "Shows spread.",
   "tag": "Processing"
  }
 ]
};

window.SBL_LESSONS["IGCF06"] = {
 "id": "IGCF06",
 "topicNumber": 3,
 "topicTitle": "Presenting, analysing and evaluating (IGCSE)",
 "title": "Analysing data and drawing conclusions",
 "href": "/igcse/geography/learn/coastal-fieldwork/l06-analysis-and-conclusions",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Fieldwork: Analysis and conclusions.",
 "checklist": [
  "I can describe and explain patterns and trends in fieldwork data",
  "I can identify and explain anomalies",
  "I can draw conclusions and accept or reject hypotheses using evidence"
 ],
 "quiz": [
  {
   "q": "What is an anomaly?",
   "options": [
    "A result that does not fit the pattern",
    "The average of all the results",
    "The most common result",
    "A result that proves the hypothesis is correct"
   ],
   "correct": 0,
   "explain": "Must be explained.",
   "tag": "Analysis"
  },
  {
   "q": "Which site had the widest beach?",
   "options": [
    "Site 3, Pranburi Forest Park",
    "Site 2, Pak Nam Pran",
    "Site 1, Sam Roi Yot south",
    "All three beaches were exactly the same width"
   ],
   "correct": 0,
   "explain": "About 110 m.",
   "tag": "Results"
  },
  {
   "q": "Why was Site 3’s beach wider?",
   "options": [
    "The reef absorbs wave energy",
    "More tourists visit Site 3",
    "The tide was always high there",
    "There were no waves at all"
   ],
   "correct": 0,
   "explain": "Constructive waves deposit.",
   "tag": "Explain"
  },
  {
   "q": "What did the data show about LSD at Site 3?",
   "options": [
    "It was slower",
    "It was faster",
    "It changed direction",
    "It was not measured"
   ],
   "correct": 0,
   "explain": "Lower wave energy.",
   "tag": "Results"
  },
  {
   "q": "What could explain a sudden steep section?",
   "options": [
    "A berm left by high tide",
    "Using random sampling",
    "A wider tape measure",
    "Calculating the mean of the readings"
   ],
   "correct": 0,
   "explain": "A natural ridge.",
   "tag": "Anomalies"
  },
  {
   "q": "What could cause an unusually high wave count?",
   "options": [
    "A passing boat",
    "A gentle breeze",
    "Dry sand",
    "A clinometer"
   ],
   "correct": 0,
   "explain": "Boat wake.",
   "tag": "Anomalies"
  },
  {
   "q": "Hypothesis 2 (wider beach) should be…",
   "options": [
    "Accepted",
    "Rejected",
    "Ignored",
    "Changed after the results"
   ],
   "correct": 0,
   "explain": "Site 3 was widest.",
   "tag": "Conclusions"
  },
  {
   "q": "Hypothesis 1 (steeper beach) should be…",
   "options": [
    "Rejected",
    "Accepted",
    "Proven true",
    "Removed from the study"
   ],
   "correct": 0,
   "explain": "Site 3 was gentler.",
   "tag": "Conclusions"
  },
  {
   "q": "What must a conclusion do?",
   "options": [
    "Answer the enquiry question",
    "List all the equipment used",
    "Repeat the risk assessment",
    "Describe the journey to the site"
   ],
   "correct": 0,
   "explain": "Using evidence.",
   "tag": "Conclusions"
  },
  {
   "q": "What does GCSE A stand for when describing?",
   "options": [
    "General, specific, anomaly",
    "Graph, scale, axis (and title)",
    "Gradient, sand, area",
    "Group, sample, average"
   ],
   "correct": 0,
   "explain": "Describing framework.",
   "tag": "Analysis"
  }
 ]
};

window.SBL_LESSONS["IGCF07"] = {
 "id": "IGCF07",
 "topicNumber": 3,
 "topicTitle": "Presenting, analysing and evaluating (IGCSE)",
 "title": "Evaluating the enquiry",
 "href": "/igcse/geography/learn/coastal-fieldwork/l07-evaluation",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 1: Physical Geography — Coastal Fieldwork: Evaluating the enquiry.",
 "checklist": [
  "I can identify problems and limitations of the methods and data",
  "I can suggest solutions to improve accuracy and reliability",
  "I can suggest how the investigation could be extended"
 ],
 "quiz": [
  {
   "q": "What is reliability?",
   "options": [
    "Getting the same results if repeated",
    "How close the data is to the true value",
    "How quickly data was collected",
    "How many graphs were drawn"
   ],
   "correct": 0,
   "explain": "Repeatability.",
   "tag": "Terms"
  },
  {
   "q": "What is accuracy?",
   "options": [
    "Closeness to the true value",
    "Getting the same results again",
    "Using many different methods",
    "Sampling at random"
   ],
   "correct": 0,
   "explain": "True value.",
   "tag": "Terms"
  },
  {
   "q": "Why did tides affect our results?",
   "options": [
    "Sites were visited at different times",
    "The tide never changes along the Thai coast",
    "Tides make clinometers break",
    "Tides only affect wave counts"
   ],
   "correct": 0,
   "explain": "Beaches looked wider or narrower.",
   "tag": "Limitations"
  },
  {
   "q": "How could the tide problem be solved?",
   "options": [
    "Visit at the same state of tide",
    "Measure only at night",
    "Use a bigger quadrat",
    "Stop measuring beach width at all three sites"
   ],
   "correct": 0,
   "explain": "Comparable conditions.",
   "tag": "Solutions"
  },
  {
   "q": "Why is measuring beach width difficult?",
   "options": [
    "The start and end points are subjective",
    "Tape measures are always far too short",
    "Beaches have no width",
    "It needs random numbers"
   ],
   "correct": 0,
   "explain": "Where does the beach end?",
   "tag": "Limitations"
  },
  {
   "q": "Which improves reliability?",
   "options": [
    "Repeating readings and averaging",
    "Taking only one reading",
    "Changing the methods used at each site",
    "Guessing missing values"
   ],
   "correct": 0,
   "explain": "Repeat and average.",
   "tag": "Solutions"
  },
  {
   "q": "Which extends the investigation?",
   "options": [
    "Visiting in different seasons",
    "Deleting anomalies",
    "Using fewer sites",
    "Removing the hypotheses from the study"
   ],
   "correct": 0,
   "explain": "Seasonal comparison.",
   "tag": "Extending"
  },
  {
   "q": "What is a limitation of systematic sampling here?",
   "options": [
    "Parts of the beach are missed",
    "It uses random numbers",
    "It takes no time at all",
    "It only works in rivers, not on beaches"
   ],
   "correct": 0,
   "explain": "Gaps between points.",
   "tag": "Limitations"
  },
  {
   "q": "How could LSD measurements be improved?",
   "options": [
    "Record wind and repeat more times",
    "Use a heavier tape measure on the beach",
    "Measure gradient instead",
    "Only use one trial"
   ],
   "correct": 0,
   "explain": "Wind affects floats.",
   "tag": "Solutions"
  },
  {
   "q": "Which secondary data could extend the study?",
   "options": [
    "Historical satellite images",
    "Our own wave frequency counts",
    "Our beach transect",
    "Our field sketches"
   ],
   "correct": 0,
   "explain": "Shows change over time.",
   "tag": "Extending"
  }
 ]
};

window.SBL_LESSONS["IGRU01"] = {
 "id": "IGRU01",
 "topicNumber": 1,
 "topicTitle": "Ecosystems and biomes (IGCSE)",
 "title": "The world’s biomes",
 "href": "/igcse/geography/learn/rural-environments/l01-world-biomes",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Environments: The world’s biomes.",
 "checklist": [
  "I can define the key terms ‘biome’, ‘biosphere’, ‘biodiversity’ and ‘ecosystem’",
  "I can describe the location of the world’s major biomes",
  "I can describe the climate and vegetation of each biome"
 ],
 "quiz": [
  {
   "q": "What is a biome?",
   "options": [
    "A large-scale plant and animal community",
    "A single pond and the life in it",
    "Only the animals living in one forest or wood",
    "The layer of air around the Earth"
   ],
   "correct": 0,
   "explain": "e.g. tropical rainforest.",
   "tag": "Terms"
  },
  {
   "q": "What is biodiversity?",
   "options": [
    "The variety of species in an area",
    "The total weight of all trees",
    "The amount of rain in a biome",
    "The number of people living nearby"
   ],
   "correct": 0,
   "explain": "Number and variety of species.",
   "tag": "Terms"
  },
  {
   "q": "What is the biosphere?",
   "options": [
    "The parts of Earth with living things",
    "The frozen ground found under the tundra biome",
    "The top layer of rainforest trees",
    "The rocks beneath the soil"
   ],
   "correct": 0,
   "explain": "Land, water and air with life.",
   "tag": "Terms"
  },
  {
   "q": "Where are tropical rainforests mainly found?",
   "options": [
    "Near the Equator",
    "Around the Arctic Circle",
    "Along the Tropic lines only",
    "In continental interiors"
   ],
   "correct": 0,
   "explain": "e.g. the Amazon.",
   "tag": "Location"
  },
  {
   "q": "Which biome has permafrost?",
   "options": [
    "Tundra",
    "Savanna",
    "Rainforest",
    "Hot desert"
   ],
   "correct": 0,
   "explain": "Ground frozen all year.",
   "tag": "Characteristics"
  },
  {
   "q": "Which biome has a long dry season and scattered trees?",
   "options": [
    "Savanna",
    "Taiga",
    "Tundra",
    "Temperate forest"
   ],
   "correct": 0,
   "explain": "Tropical grassland.",
   "tag": "Characteristics"
  },
  {
   "q": "Which trees dominate the taiga?",
   "options": [
    "Coniferous evergreens",
    "Broad-leaved deciduous trees",
    "Palm trees and mangroves",
    "Acacia and baobab trees"
   ],
   "correct": 0,
   "explain": "Needles shed snow.",
   "tag": "Characteristics"
  },
  {
   "q": "Roughly how much rain does a hot desert get?",
   "options": [
    "Under 25 cm a year",
    "Over 200 cm a year",
    "About 100 cm a year",
    "About 75 cm a year"
   ],
   "correct": 0,
   "explain": "Very dry.",
   "tag": "Climate"
  },
  {
   "q": "Where are hot deserts mainly found?",
   "options": [
    "Around the Tropics",
    "On the Equator",
    "Near the poles",
    "In western Europe and the UK"
   ],
   "correct": 0,
   "explain": "About 15–30° N and S.",
   "tag": "Location"
  },
  {
   "q": "Which biome has the highest biodiversity?",
   "options": [
    "Tropical rainforest",
    "Tundra",
    "Hot desert (e.g. Sahara)",
    "Taiga"
   ],
   "correct": 0,
   "explain": "Warm and wet all year.",
   "tag": "Characteristics"
  }
 ]
};

window.SBL_LESSONS["IGRU02"] = {
 "id": "IGRU02",
 "topicNumber": 1,
 "topicTitle": "Ecosystems and biomes (IGCSE)",
 "title": "What is an ecosystem? Why are ecosystems so valuable?",
 "href": "/igcse/geography/learn/rural-environments/l02-ecosystem-goods-and-services",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Environments: Ecosystem goods and services.",
 "checklist": [
  "I can explain how ecosystems are open systems with inputs, outputs and internal flows of energy",
  "I can define the key terms ‘goods’ and ‘services’",
  "I can describe a range of goods and services provided by varying ecosystems"
 ],
 "quiz": [
  {
   "q": "Why is an ecosystem an open system?",
   "options": [
    "Energy and matter enter and leave",
    "Nothing can enter or leave it at any time",
    "It has no living things",
    "It is always the same size"
   ],
   "correct": 0,
   "explain": "Inputs and outputs.",
   "tag": "Systems"
  },
  {
   "q": "Which is an INPUT to an ecosystem?",
   "options": [
    "Solar radiation",
    "Eroded soil",
    "Heat lost to space",
    "Water run-off"
   ],
   "correct": 0,
   "explain": "Energy from the Sun.",
   "tag": "Systems"
  },
  {
   "q": "What do decomposers do?",
   "options": [
    "Break down dead material",
    "Produce food by photosynthesis",
    "Eat only other animals",
    "Absorb sunlight in the canopy"
   ],
   "correct": 0,
   "explain": "Return nutrients to soil.",
   "tag": "Systems"
  },
  {
   "q": "What are ecosystem goods?",
   "options": [
    "Material products taken from an ecosystem",
    "Long-term benefits such as climate control",
    "Payments made to protect forests",
    "Laws that protect wildlife"
   ],
   "correct": 0,
   "explain": "e.g. timber.",
   "tag": "Goods"
  },
  {
   "q": "Which is a service?",
   "options": [
    "Climate regulation",
    "Timber for building furniture",
    "Fuelwood",
    "Fruit"
   ],
   "correct": 0,
   "explain": "A long-term benefit.",
   "tag": "Services"
  },
  {
   "q": "Which type of service is tourism?",
   "options": [
    "Cultural",
    "Provisioning",
    "Regulating",
    "Supporting"
   ],
   "correct": 0,
   "explain": "Recreation and spiritual benefits.",
   "tag": "Services"
  },
  {
   "q": "Which type of service is the nutrient cycle?",
   "options": [
    "Supporting",
    "Cultural",
    "Provisioning",
    "Recreational"
   ],
   "correct": 0,
   "explain": "Supports other services.",
   "tag": "Services"
  },
  {
   "q": "How do mangroves protect people?",
   "options": [
    "They reduce storm surge energy",
    "They provide fuelwood for cooking and heating",
    "They attract tourists",
    "They make the sea warmer"
   ],
   "correct": 0,
   "explain": "Natural protection.",
   "tag": "Services"
  },
  {
   "q": "Why is fuelwood important in LICs?",
   "options": [
    "It is a cheap energy source",
    "It is exported abroad for a large profit",
    "It cools the climate",
    "It stops soil erosion"
   ],
   "correct": 0,
   "explain": "For cooking and heating.",
   "tag": "Goods"
  },
  {
   "q": "Which ecosystem gives water and HEP?",
   "options": [
    "Mountains and uplands",
    "Hot deserts such as the Sahara",
    "Tundra",
    "Savanna"
   ],
   "correct": 0,
   "explain": "Water storage and energy.",
   "tag": "Goods"
  }
 ]
};

window.SBL_LESSONS["IGRU03"] = {
 "id": "IGRU03",
 "topicNumber": 1,
 "topicTitle": "Ecosystems and biomes (IGCSE)",
 "title": "Exploitation of the Amazon rainforest",
 "href": "/igcse/geography/learn/rural-environments/l03-amazon-rainforest",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Environments: Case study: the Amazon.",
 "checklist": [
  "I can describe the location of the Amazon rainforest",
  "I can outline some of the ways in which the Amazon rainforest is being exploited",
  "I can explain the social, economic and environmental impacts of this exploitation"
 ],
 "quiz": [
  {
   "q": "On which continent is the Amazon?",
   "options": [
    "South America",
    "Africa",
    "Asia",
    "Central America"
   ],
   "correct": 0,
   "explain": "Northern South America.",
   "tag": "Location"
  },
  {
   "q": "Which country has most of the Amazon?",
   "options": [
    "Brazil",
    "Peru",
    "Colombia",
    "Venezuela"
   ],
   "correct": 0,
   "explain": "About 60%.",
   "tag": "Location"
  },
  {
   "q": "What is the biggest cause of Amazon deforestation?",
   "options": [
    "Cattle ranching",
    "Tourism",
    "Fishing",
    "Rubber tapping by local people"
   ],
   "correct": 0,
   "explain": "Cleared for pasture.",
   "tag": "Exploitation"
  },
  {
   "q": "What is the Carajás complex?",
   "options": [
    "A huge iron ore mine",
    "A hydroelectric dam",
    "A national park",
    "A soya farm cooperative"
   ],
   "correct": 0,
   "explain": "World’s largest iron ore mine.",
   "tag": "Exploitation"
  },
  {
   "q": "Why does road building cause more deforestation?",
   "options": [
    "It opens up the forest to settlers",
    "It reduces the number of trees needed",
    "It stops illegal logging",
    "It floods the forest"
   ],
   "correct": 0,
   "explain": "Access for development.",
   "tag": "Exploitation"
  },
  {
   "q": "Which is an environmental impact?",
   "options": [
    "Loss of biodiversity",
    "Export income from soya",
    "Jobs in mining",
    "Loss of indigenous land"
   ],
   "correct": 0,
   "explain": "Habitats destroyed.",
   "tag": "Impacts"
  },
  {
   "q": "Which is a social impact?",
   "options": [
    "Indigenous people lose their land",
    "Carbon dioxide is released into the atmosphere",
    "Soil is eroded by heavy rain",
    "Rivers are polluted by mining"
   ],
   "correct": 0,
   "explain": "Affects people’s lives.",
   "tag": "Impacts"
  },
  {
   "q": "How does deforestation affect climate change?",
   "options": [
    "It releases stored carbon",
    "It cools the atmosphere",
    "It increases rainfall worldwide",
    "It has no effect"
   ],
   "correct": 0,
   "explain": "CO2 released.",
   "tag": "Impacts"
  },
  {
   "q": "What is selective logging?",
   "options": [
    "Cutting only certain trees",
    "Clearing whole areas of forest",
    "Burning trees for farmland",
    "Planting new conifer forests"
   ],
   "correct": 0,
   "explain": "Leaves most trees standing.",
   "tag": "Management"
  },
  {
   "q": "What happened to Amazon deforestation from 2021 to 2025?",
   "options": [
    "It fell each year",
    "It doubled",
    "It stayed the same",
    "It stopped completely"
   ],
   "correct": 0,
   "explain": "About 13,000 to 5,800 km².",
   "tag": "Exploitation"
  }
 ]
};

window.SBL_LESSONS["IGRU04"] = {
 "id": "IGRU04",
 "topicNumber": 2,
 "topicTitle": "Farming and rural areas (IGCSE)",
 "title": "Food production and farming",
 "href": "/igcse/geography/learn/rural-environments/l04-food-production-and-farming",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Environments: Food production and farming.",
 "checklist": [
  "I can describe how farming/food production can be represented as a system",
  "I can explain a range of different farming systems",
  "I can explain how rural areas/ecosystems can be modified and changed by humans to grow food"
 ],
 "quiz": [
  {
   "q": "What is arable farming?",
   "options": [
    "Growing crops",
    "Rearing animals for milk",
    "Moving from area to area",
    "Keeping sheep on hills"
   ],
   "correct": 0,
   "explain": "Ploughing and crops.",
   "tag": "Types"
  },
  {
   "q": "What is pastoral farming?",
   "options": [
    "Rearing animals",
    "Growing salad crops",
    "Growing food for the family only",
    "Farming on terraces"
   ],
   "correct": 0,
   "explain": "Livestock.",
   "tag": "Types"
  },
  {
   "q": "What is subsistence farming?",
   "options": [
    "Growing food for the farmer’s family",
    "Selling crops to supermarkets abroad",
    "Using lots of machinery and fertiliser",
    "Farming on very large estates"
   ],
   "correct": 0,
   "explain": "Not for sale.",
   "tag": "Types"
  },
  {
   "q": "What is intensive farming?",
   "options": [
    "High inputs on a small area",
    "Low inputs on a large area",
    "Farming without any machinery",
    "Farming only in deserts"
   ],
   "correct": 0,
   "explain": "High yields per hectare.",
   "tag": "Types"
  },
  {
   "q": "Which is an example of extensive farming?",
   "options": [
    "Cattle ranching on huge areas",
    "Growing tomatoes in heated greenhouses",
    "Rice terraces",
    "Market gardening"
   ],
   "correct": 0,
   "explain": "Low inputs, large area.",
   "tag": "Types"
  },
  {
   "q": "In the farm system, what is harvesting?",
   "options": [
    "A process",
    "An input",
    "An output",
    "A feedback"
   ],
   "correct": 0,
   "explain": "Activities on the farm.",
   "tag": "System"
  },
  {
   "q": "Which is a farm output?",
   "options": [
    "Milk",
    "Fertiliser",
    "Labour",
    "Rainfall"
   ],
   "correct": 0,
   "explain": "Products from the farm.",
   "tag": "System"
  },
  {
   "q": "Which is a physical factor affecting farming?",
   "options": [
    "Soil fertility",
    "Government subsidies",
    "Market demand",
    "Capital"
   ],
   "correct": 0,
   "explain": "Natural factor.",
   "tag": "Factors"
  },
  {
   "q": "Which is a human factor affecting farming?",
   "options": [
    "Government subsidies",
    "Temperature and rainfall",
    "Drainage",
    "Slope"
   ],
   "correct": 0,
   "explain": "Decided by people.",
   "tag": "Factors"
  },
  {
   "q": "How do people modify ecosystems to farm?",
   "options": [
    "Clearing forests and irrigating land",
    "Leaving land untouched",
    "Planting only wild native species everywhere",
    "Stopping all water use"
   ],
   "correct": 0,
   "explain": "Changes to grow food.",
   "tag": "Modification"
  }
 ]
};

window.SBL_LESSONS["IGRU05"] = {
 "id": "IGRU05",
 "topicNumber": 2,
 "topicTitle": "Farming and rural areas (IGCSE)",
 "title": "Characteristics of rural areas",
 "href": "/igcse/geography/learn/rural-environments/l05-characteristics-of-rural-areas",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Environments: Characteristics of rural areas.",
 "checklist": [
  "I can define the key terms urban, rural and suburban",
  "I can outline some of the key characteristics of rural areas",
  "I can compare and contrast the characteristics of three rural environments from differing parts of the world"
 ],
 "quiz": [
  {
   "q": "What is a rural area?",
   "options": [
    "The countryside with low population density",
    "A busy city centre full of high-rise office blocks",
    "The edge of a city with many houses",
    "An area of factories near a port"
   ],
   "correct": 0,
   "explain": "Countryside.",
   "tag": "Terms"
  },
  {
   "q": "What is a suburban area?",
   "options": [
    "Housing on the edge of a city",
    "A remote mountain village",
    "A city centre business district",
    "An area of farmland only"
   ],
   "correct": 0,
   "explain": "Lower-density residential.",
   "tag": "Terms"
  },
  {
   "q": "What is the rural–urban fringe?",
   "options": [
    "Where town meets countryside",
    "The centre of a large city",
    "The boundary of a national park in the uplands",
    "A remote island"
   ],
   "correct": 0,
   "explain": "Competing land uses.",
   "tag": "Terms"
  },
  {
   "q": "Which job is typical in rural areas?",
   "options": [
    "Farming",
    "Banking",
    "Car manufacturing",
    "Call centre work"
   ],
   "correct": 0,
   "explain": "Primary sector.",
   "tag": "Characteristics"
  },
  {
   "q": "What does accessibility mean?",
   "options": [
    "How easy a place is to reach",
    "How many tourists visit it every year",
    "How fertile the soil is",
    "How high the land is"
   ],
   "correct": 0,
   "explain": "Roads, transport, internet.",
   "tag": "Characteristics"
  },
  {
   "q": "What kind of settlements are common in rural areas?",
   "options": [
    "Hamlets and villages",
    "Large cities",
    "Megacities",
    "Industrial estates and retail parks"
   ],
   "correct": 0,
   "explain": "Small settlements.",
   "tag": "Characteristics"
  },
  {
   "q": "How is the Lake District managed?",
   "options": [
    "As a National Park",
    "As an industrial zone",
    "As a mining area",
    "It is not managed"
   ],
   "correct": 0,
   "explain": "Since 1951.",
   "tag": "Compare"
  },
  {
   "q": "Which rural area has a tropical monsoon climate?",
   "options": [
    "Isan, Thailand",
    "Lake District, UK",
    "Scottish Highlands",
    "Canadian prairies"
   ],
   "correct": 0,
   "explain": "Long dry season.",
   "tag": "Compare"
  },
  {
   "q": "Why do young people leave Isan?",
   "options": [
    "To find work in Bangkok",
    "To retire to the coast near Phuket",
    "To go fishing at sea",
    "To farm in the Amazon"
   ],
   "correct": 0,
   "explain": "Rural–urban migration.",
   "tag": "Compare"
  },
  {
   "q": "What is ‘conservation’ management?",
   "options": [
    "Protecting the landscape and wildlife",
    "Building new roads, housing and shopping centres",
    "Opening new mines",
    "Clearing forest for farms"
   ],
   "correct": 0,
   "explain": "Opposite of development.",
   "tag": "Characteristics"
  }
 ]
};

window.SBL_LESSONS["IGRU06"] = {
 "id": "IGRU06",
 "topicNumber": 3,
 "topicTitle": "Rural change in a developed country (UK) (IGCSE)",
 "title": "How are rural areas changing in developed countries? UK case study (1)",
 "href": "/igcse/geography/learn/rural-environments/l06-uk-rural-change-counter-urbanisation",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Environments: UK rural change (1): counter-urbanisation.",
 "checklist": [
  "I can define the key terms ‘suburbanisation’ and ‘counter-urbanisation’",
  "I can identify some of the key features of differing rural areas in developed countries such as the UK",
  "I can explain the causes and consequences of both suburbanisation and counter-urbanisation in the UK"
 ],
 "quiz": [
  {
   "q": "What is counter-urbanisation?",
   "options": [
    "Movement from cities to rural areas",
    "Movement from rural areas to cities",
    "Growth of city centres upwards",
    "Building new towns abroad"
   ],
   "correct": 0,
   "explain": "Out of cities.",
   "tag": "Terms"
  },
  {
   "q": "What is suburbanisation?",
   "options": [
    "Outward spread of urban areas",
    "People leaving the country",
    "Growth of farm employment",
    "Building new homes on brownfield sites in cities"
   ],
   "correct": 0,
   "explain": "Lower-density edges.",
   "tag": "Terms"
  },
  {
   "q": "Which is a PULL factor to the countryside?",
   "options": [
    "Larger houses with gardens",
    "Traffic congestion and parking shortages",
    "Higher crime rates",
    "Air pollution"
   ],
   "correct": 0,
   "explain": "Attracts people.",
   "tag": "Causes"
  },
  {
   "q": "Which is a PUSH factor from cities?",
   "options": [
    "Noise pollution",
    "Pleasant scenery",
    "Safer roads",
    "Bigger gardens"
   ],
   "correct": 0,
   "explain": "Drives people away.",
   "tag": "Causes"
  },
  {
   "q": "How has the internet helped counter-urbanisation?",
   "options": [
    "People can work from home",
    "It made houses cheaper",
    "It closed city offices",
    "It reduced traffic in villages"
   ],
   "correct": 0,
   "explain": "Home-working.",
   "tag": "Causes"
  },
  {
   "q": "Why can young locals not afford village homes?",
   "options": [
    "Prices rise and second homes",
    "There are too many new houses",
    "Villages have no jobs at all",
    "Banks will not lend in rural areas"
   ],
   "correct": 0,
   "explain": "Demand pushes prices up.",
   "tag": "Consequences"
  },
  {
   "q": "Which is a POSITIVE effect of counter-urbanisation?",
   "options": [
    "Village schools stay open",
    "Loss of community spirit in villages",
    "More congestion",
    "Rising house prices"
   ],
   "correct": 0,
   "explain": "Young families arrive.",
   "tag": "Consequences"
  },
  {
   "q": "Why do some village services close?",
   "options": [
    "Commuters shop in towns",
    "Too many people use them",
    "They are too profitable",
    "Tourists ban them"
   ],
   "correct": 0,
   "explain": "Lack of local custom.",
   "tag": "Consequences"
  },
  {
   "q": "Why does new housing raise flood risk?",
   "options": [
    "More impermeable surfaces",
    "More trees are planted on new estates",
    "Rivers get deeper",
    "It rains less"
   ],
   "correct": 0,
   "explain": "Faster run-off.",
   "tag": "Consequences"
  },
  {
   "q": "Which villages change most?",
   "options": [
    "Those closest to cities",
    "The most remote and isolated ones",
    "Those on islands",
    "Those with no roads"
   ],
   "correct": 0,
   "explain": "Easy commuting.",
   "tag": "Consequences"
  }
 ]
};

window.SBL_LESSONS["IGRU07"] = {
 "id": "IGRU07",
 "topicNumber": 3,
 "topicTitle": "Rural change in a developed country (UK) (IGCSE)",
 "title": "How are rural areas changing in developed countries? UK case study (2)",
 "href": "/igcse/geography/learn/rural-environments/l07-uk-rural-change-tourism-and-isolation",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Environments: UK rural change (2): tourism and isolation.",
 "checklist": [
  "I can describe some of the ways accessible and remote tourism areas in the UK are changing",
  "I can explain the growth in tourism in the Lake District (an area of accessible countryside) and evaluate its impacts on the local area",
  "I can describe how and why the number of people employed in agriculture has changed in the UK",
  "I can explain how rural isolation and decline can impact on more remote rural areas in the UK such as Cumbria"
 ],
 "quiz": [
  {
   "q": "When did the Lake District become a National Park?",
   "options": [
    "1951",
    "2017",
    "1901",
    "1971"
   ],
   "correct": 0,
   "explain": "World Heritage Site in 2017.",
   "tag": "Lake District"
  },
  {
   "q": "Roughly how many visitors does the Lake District get each year?",
   "options": [
    "About 17 million",
    "About 1.7 million",
    "About 170,000",
    "About 170 million"
   ],
   "correct": 0,
   "explain": "17.45 million in 2025.",
   "tag": "Lake District"
  },
  {
   "q": "What is a honeypot site?",
   "options": [
    "A popular place attracting many visitors",
    "A farm that keeps bees",
    "A remote valley that is rarely visited by tourists",
    "A protected wildlife reserve"
   ],
   "correct": 0,
   "explain": "e.g. Bowness.",
   "tag": "Lake District"
  },
  {
   "q": "Which is a negative impact of tourism?",
   "options": [
    "Footpath erosion",
    "More jobs in hotels",
    "Money for conservation",
    "Support for local shops"
   ],
   "correct": 0,
   "explain": "Too many walkers.",
   "tag": "Lake District"
  },
  {
   "q": "Why are local people priced out of housing?",
   "options": [
    "Second homes and holiday lets",
    "Too few tourists visit",
    "Farms pay very high wages to all their workers",
    "Houses are too large"
   ],
   "correct": 0,
   "explain": "About 24% of homes.",
   "tag": "Lake District"
  },
  {
   "q": "What share of UK employment is in farming?",
   "options": [
    "About 1%",
    "About 10%",
    "About 25%",
    "About 50%"
   ],
   "correct": 0,
   "explain": "Very small.",
   "tag": "Farm employment"
  },
  {
   "q": "Why have farm jobs declined?",
   "options": [
    "Mechanisation",
    "More small farms",
    "Higher food prices",
    "Fewer machines"
   ],
   "correct": 0,
   "explain": "Machines replaced workers.",
   "tag": "Farm employment"
  },
  {
   "q": "What is the negative multiplier effect?",
   "options": [
    "A spiral of decline",
    "Growth from tourism",
    "Rising house prices",
    "More services opening"
   ],
   "correct": 0,
   "explain": "Losses lead to more losses.",
   "tag": "Isolation"
  },
  {
   "q": "Which shows rural isolation?",
   "options": [
    "Shops and buses closing",
    "New schools and surgeries opening",
    "Faster broadband",
    "More young families"
   ],
   "correct": 0,
   "explain": "Cut off from services.",
   "tag": "Isolation"
  },
  {
   "q": "Which storm flooded Cumbria in 2015?",
   "options": [
    "Storm Desmond",
    "Hurricane Katrina",
    "Typhoon Haiyan",
    "Cyclone Nargis"
   ],
   "correct": 0,
   "explain": "December 2015.",
   "tag": "Hazards"
  }
 ]
};

window.SBL_LESSONS["IGRU08"] = {
 "id": "IGRU08",
 "topicNumber": 3,
 "topicTitle": "Rural change in a developed country (UK) (IGCSE)",
 "title": "Diversification of farming",
 "href": "/igcse/geography/learn/rural-environments/l08-diversification-of-farming",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Environments: Diversification of farming.",
 "checklist": [
  "I can describe some of the changes to agriculture in developed countries in recent years",
  "I can explain the concept of ‘farm diversification’",
  "I can evaluate some methods of farm diversification used in the UK"
 ],
 "quiz": [
  {
   "q": "About what share of UK jobs are in farming?",
   "options": [
    "About 1%",
    "About 20%",
    "About 40%",
    "About 60%"
   ],
   "correct": 0,
   "explain": "Very small share.",
   "tag": "Change"
  },
  {
   "q": "Roughly how much of its food does the UK grow?",
   "options": [
    "About 60%",
    "About 100%",
    "About 10%",
    "About 90%"
   ],
   "correct": 0,
   "explain": "The rest is imported.",
   "tag": "Change"
  },
  {
   "q": "Why do small farms struggle to make a profit?",
   "options": [
    "Supermarkets want cheap food",
    "There is no demand for food",
    "Farms have too many workers",
    "Farmland is too expensive to rent out"
   ],
   "correct": 0,
   "explain": "Low prices.",
   "tag": "Change"
  },
  {
   "q": "What is farm diversification?",
   "options": [
    "Developing new sources of income",
    "Growing only one crop on all of the land",
    "Selling the whole farm",
    "Moving the farm abroad"
   ],
   "correct": 0,
   "explain": "New income streams.",
   "tag": "Concept"
  },
  {
   "q": "Which is a recreation-based diversification?",
   "options": [
    "Glamping site",
    "Growing more wheat",
    "Buying a new tractor",
    "Removing hedgerows"
   ],
   "correct": 0,
   "explain": "Leisure income.",
   "tag": "Methods"
  },
  {
   "q": "What does organic farming avoid?",
   "options": [
    "Synthetic fertilisers and pesticides",
    "Crop rotation",
    "Animal manure",
    "Selling food locally at farmers’ markets"
   ],
   "correct": 0,
   "explain": "Natural methods only.",
   "tag": "Methods"
  },
  {
   "q": "What is a disadvantage of organic farming?",
   "options": [
    "Lower yields",
    "Higher pesticide use",
    "Worse soils",
    "Fewer wildlife species"
   ],
   "correct": 0,
   "explain": "Produces less per hectare.",
   "tag": "Evaluate"
  },
  {
   "q": "What is an advantage of a farm shop?",
   "options": [
    "Higher profit per item",
    "No staff are needed",
    "Supermarkets supply it",
    "It needs no marketing"
   ],
   "correct": 0,
   "explain": "Cuts out the middleman.",
   "tag": "Evaluate"
  },
  {
   "q": "Are GM crops grown commercially in the UK?",
   "options": [
    "No",
    "Yes, everywhere",
    "Only in Scotland",
    "Only potatoes"
   ],
   "correct": 0,
   "explain": "Gene editing is now being developed.",
   "tag": "Methods"
  },
  {
   "q": "Which is an energy diversification?",
   "options": [
    "Solar panels on fields",
    "Pick-your-own fruit fields",
    "Farm shop",
    "Petting zoo"
   ],
   "correct": 0,
   "explain": "Rent for renewables.",
   "tag": "Methods"
  }
 ]
};

window.SBL_LESSONS["IGRU09"] = {
 "id": "IGRU09",
 "topicNumber": 3,
 "topicTitle": "Rural change in a developed country (UK) (IGCSE)",
 "title": "How can we make life in rural areas more sustainable?",
 "href": "/igcse/geography/learn/rural-environments/l09-sustainable-rural-living",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Environments: Sustainable rural living (UK).",
 "checklist": [
  "I can define the key term ‘sustainable rural living’",
  "I can categorise a range of sustainable rural management strategies into social, economic and environmental",
  "I can outline how organic farming can be used as a strategy to improve sustainability in rural areas in the UK",
  "I can explain some of the strategies being used by UK NGOs to make rural communities more sustainable"
 ],
 "quiz": [
  {
   "q": "What does sustainable rural living mean?",
   "options": [
    "Meeting needs now without harming the future",
    "Building as many new houses as possible in villages",
    "Stopping all farming",
    "Moving everyone into cities"
   ],
   "correct": 0,
   "explain": "Balances people and environment.",
   "tag": "Definition"
  },
  {
   "q": "How many criteria are on Egan’s Wheel?",
   "options": [
    "Eight",
    "Four",
    "Six",
    "Twelve"
   ],
   "correct": 0,
   "explain": "Eight sections.",
   "tag": "Egan"
  },
  {
   "q": "Which is an Egan’s Wheel criterion?",
   "options": [
    "Well connected",
    "Highly populated",
    "Fully industrial",
    "Car dependent"
   ],
   "correct": 0,
   "explain": "Transport.",
   "tag": "Egan"
  },
  {
   "q": "Which strategy is mainly ENVIRONMENTAL?",
   "options": [
    "Restoring hedgerows and peat bogs",
    "Affordable housing schemes for local people",
    "Grants for farm shops",
    "Countryside education"
   ],
   "correct": 0,
   "explain": "Ecosystem preservation.",
   "tag": "Strategies"
  },
  {
   "q": "Which strategy is mainly SOCIAL?",
   "options": [
    "Better rural bus services",
    "Eco-tourism jobs",
    "Farm diversification grants",
    "Peat restoration"
   ],
   "correct": 0,
   "explain": "Reduces isolation.",
   "tag": "Strategies"
  },
  {
   "q": "Which strategy is mainly ECONOMIC?",
   "options": [
    "Grants to help farms diversify",
    "Restoring woodland",
    "Park-and-ride schemes at honeypot sites",
    "Village hall activities"
   ],
   "correct": 0,
   "explain": "Jobs and income.",
   "tag": "Strategies"
  },
  {
   "q": "How does organic farming help rivers?",
   "options": [
    "Less chemical run-off",
    "More fertiliser in the water",
    "It drains the land faster",
    "It stops all rainfall"
   ],
   "correct": 0,
   "explain": "Cleaner water.",
   "tag": "Organic"
  },
  {
   "q": "What is a drawback of organic farming?",
   "options": [
    "Lower yields",
    "More pesticides",
    "Poorer soils",
    "Less biodiversity"
   ],
   "correct": 0,
   "explain": "Less food per hectare.",
   "tag": "Organic"
  },
  {
   "q": "Which NGO campaigns to protect the green belt?",
   "options": [
    "CPRE",
    "Operation Smile",
    "FAO",
    "World Bank"
   ],
   "correct": 0,
   "explain": "The countryside charity.",
   "tag": "NGOs"
  },
  {
   "q": "What does ACRE help rural communities with?",
   "options": [
    "Village halls and affordable housing",
    "Building new motorways and bypasses",
    "Selling GM crops",
    "Running airports"
   ],
   "correct": 0,
   "explain": "Community services.",
   "tag": "NGOs"
  }
 ]
};

window.SBL_LESSONS["IGRU10"] = {
 "id": "IGRU10",
 "topicNumber": 4,
 "topicTitle": "Rural change in an emerging country (Thailand) (IGCSE)",
 "title": "How are rural areas changing in developing/emerging countries? Thailand case study (1)",
 "href": "/igcse/geography/learn/rural-environments/l10-thailand-rural-urban-migration",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Environments: Thailand (1): rural–urban migration.",
 "checklist": [
  "I can define a range of key terminology including ‘urbanisation’ and ‘rural–urban migration’",
  "I can outline some basic population statistics for Thailand",
  "I can explain the concept of rural–urban migration and push–pull factors",
  "I can outline the impact of rural–urban migration on rural areas in Thailand"
 ],
 "quiz": [
  {
   "q": "What is rural–urban migration?",
   "options": [
    "Moving from countryside to cities",
    "Moving from cities to countryside",
    "Moving to another country",
    "Moving between two villages"
   ],
   "correct": 0,
   "explain": "Usually for work.",
   "tag": "Terms"
  },
  {
   "q": "Which is a PUSH factor?",
   "options": [
    "Low farm wages",
    "Better hospitals",
    "More jobs in cities",
    "Access to education"
   ],
   "correct": 0,
   "explain": "Drives people away.",
   "tag": "Push-pull"
  },
  {
   "q": "Which is a PULL factor?",
   "options": [
    "Job opportunities in the city",
    "Drought and famine in the countryside",
    "Lack of medical services",
    "High birth rates"
   ],
   "correct": 0,
   "explain": "Attracts people.",
   "tag": "Push-pull"
  },
  {
   "q": "Which region do most migrants to Bangkok come from?",
   "options": [
    "The North-East (Isan)",
    "The far South near Malaysia",
    "The Gulf islands",
    "Myanmar"
   ],
   "correct": 0,
   "explain": "Poorer region.",
   "tag": "Thailand"
  },
  {
   "q": "Roughly what share of Thais lived in urban areas in 2021?",
   "options": [
    "About 52%",
    "About 25%",
    "About 80%",
    "About 10%"
   ],
   "correct": 0,
   "explain": "52.16%.",
   "tag": "Thailand"
  },
  {
   "q": "What is Thailand’s income group?",
   "options": [
    "Upper-middle income",
    "Low income",
    "High income",
    "Lower-middle income"
   ],
   "correct": 0,
   "explain": "An emerging economy.",
   "tag": "Thailand"
  },
  {
   "q": "What is a skip-generation household?",
   "options": [
    "Children raised by grandparents",
    "Families with no children",
    "Only young adults living together",
    "Households that skip school"
   ],
   "correct": 0,
   "explain": "Parents work away.",
   "tag": "Impacts"
  },
  {
   "q": "What are remittances?",
   "options": [
    "Money sent home by migrants",
    "Taxes paid to the government",
    "Loans from banks to farmers",
    "Payments for rice exports"
   ],
   "correct": 0,
   "explain": "Support rural families.",
   "tag": "Impacts"
  },
  {
   "q": "Why might food security be at risk?",
   "options": [
    "Fewer young farm workers",
    "Too many farm workers",
    "Rice exports have stopped",
    "Farmland is increasing fast"
   ],
   "correct": 0,
   "explain": "Ageing farm population.",
   "tag": "Impacts"
  },
  {
   "q": "Where is Thailand’s population densest?",
   "options": [
    "Bangkok and the Central Plain",
    "The northern mountains",
    "The western hills along the border",
    "Offshore islands"
   ],
   "correct": 0,
   "explain": "Fertile lowlands and the capital.",
   "tag": "Thailand"
  }
 ]
};

window.SBL_LESSONS["IGRU11"] = {
 "id": "IGRU11",
 "topicNumber": 4,
 "topicTitle": "Rural change in an emerging country (Thailand) (IGCSE)",
 "title": "Managing rural challenges in Thailand",
 "href": "/igcse/geography/learn/rural-environments/l11-managing-rural-challenges-thailand",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Environments: Thailand (2): managing rural challenges.",
 "checklist": [
  "I can identify a range of social, economic and environmental challenges faced in rural areas of Thailand",
  "I can explain the ways in which a range of different groups are aiming to manage those challenges in Thailand",
  "I can develop my research and presentation skills"
 ],
 "quiz": [
  {
   "q": "What is an IGO?",
   "options": [
    "An organisation whose members are countries",
    "A local village council",
    "A private company",
    "A charity run by volunteers in one village"
   ],
   "correct": 0,
   "explain": "e.g. the UN.",
   "tag": "Groups"
  },
  {
   "q": "What is an NGO?",
   "options": [
    "A non-governmental organisation",
    "A national government ministry",
    "An international bank that lends money",
    "A UN agency"
   ],
   "correct": 0,
   "explain": "Often a charity.",
   "tag": "Groups"
  },
  {
   "q": "Which is an IGO?",
   "options": [
    "FAO",
    "Operation Smile",
    "Royal Project Foundation",
    "A village cooperative"
   ],
   "correct": 0,
   "explain": "UN Food and Agriculture Organization.",
   "tag": "Groups"
  },
  {
   "q": "What did the Royal Project replace?",
   "options": [
    "Opium growing",
    "Rice farming",
    "Rubber plantations",
    "Fishing"
   ],
   "correct": 0,
   "explain": "With cash crops.",
   "tag": "Projects"
  },
  {
   "q": "Who founded the Royal Project?",
   "options": [
    "King Bhumibol",
    "The World Bank",
    "The UK government",
    "The FAO"
   ],
   "correct": 0,
   "explain": "In 1969.",
   "tag": "Projects"
  },
  {
   "q": "What does Operation Smile provide?",
   "options": [
    "Free cleft lip surgery",
    "Low-interest loans to farmers",
    "New roads",
    "Rice seeds"
   ],
   "correct": 0,
   "explain": "Health care for children.",
   "tag": "Projects"
  },
  {
   "q": "What problem does the Tom Yum Project tackle?",
   "options": [
    "Elephants raiding crops",
    "Coastal flooding",
    "Traffic congestion in Bangkok",
    "Coral bleaching"
   ],
   "correct": 0,
   "explain": "Human–elephant conflict.",
   "tag": "Projects"
  },
  {
   "q": "What is OTOP?",
   "options": [
    "A scheme promoting village products",
    "A national health insurance plan",
    "A rice export tax",
    "An elephant reserve"
   ],
   "correct": 0,
   "explain": "One Tambon One Product.",
   "tag": "Government"
  },
  {
   "q": "Which is an environmental challenge in rural Thailand?",
   "options": [
    "Haze from burning crop waste",
    "Low and unstable crop prices",
    "Skip-generation households",
    "Household debt"
   ],
   "correct": 0,
   "explain": "Air pollution.",
   "tag": "Challenges"
  },
  {
   "q": "Which is a social challenge?",
   "options": [
    "Poorer access to schools and health care",
    "Soil salinity on farmland in Isan",
    "Deforestation",
    "Drought"
   ],
   "correct": 0,
   "explain": "Affects people’s wellbeing.",
   "tag": "Challenges"
  }
 ]
};

window.SBL_LESSONS["IGDV01"] = {
 "id": "IGDV01",
 "topicNumber": 1,
 "topicTitle": "Defining and measuring development (IGCSE)",
 "title": "What is development and what factors contribute to a country's development?",
 "href": "/igcse/geography/learn/development-and-human-welfare/l01-what-is-development",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Development and Human Welfare: What is development?.",
 "checklist": [
  "I can define the key terms ‘development’ and ‘human welfare’",
  "I can understand the factors that contribute to the development and human welfare of a country",
  "I can describe the pattern of development globally in 2022 using the World Bank classifications"
 ],
 "quiz": [
  {
   "q": "Which is the best definition of development?",
   "options": [
    "Change that improves people’s lives",
    "An increase in a country’s total land area",
    "Growth in the number of people in cities",
    "A rise in the amount of farming"
   ],
   "correct": 0,
   "explain": "Development is about improving lives.",
   "tag": "Definitions"
  },
  {
   "q": "What does human welfare refer to?",
   "options": [
    "Health, happiness and quality of life",
    "Only the money a government spends",
    "The number of hospitals in a capital city",
    "The amount of foreign aid received each year"
   ],
   "correct": 0,
   "explain": "Welfare is about people’s quality of life.",
   "tag": "Definitions"
  },
  {
   "q": "Which is a SOCIAL measure of development?",
   "options": [
    "Literacy rate",
    "GDP per capita",
    "Value of exports",
    "Number of factories built"
   ],
   "correct": 0,
   "explain": "Education is a social measure.",
   "tag": "Definitions"
  },
  {
   "q": "Which is a POLITICAL aspect of development?",
   "options": [
    "Freedom of speech",
    "Life expectancy",
    "Calories per person",
    "Number of doctors"
   ],
   "correct": 0,
   "explain": "Freedom and rights are political.",
   "tag": "Definitions"
  },
  {
   "q": "How does water security help development?",
   "options": [
    "It reduces disease and time spent collecting water",
    "It increases the size of rivers",
    "It makes the climate cooler",
    "It stops droughts and floods from happening in every region"
   ],
   "correct": 0,
   "explain": "Safe water improves health and saves time.",
   "tag": "Factors"
  },
  {
   "q": "Which is a technological factor in development?",
   "options": [
    "Mobile phone banking",
    "Family size traditions",
    "Rainfall totals",
    "Religious festivals"
   ],
   "correct": 0,
   "explain": "Mobile money is a technology.",
   "tag": "Factors"
  },
  {
   "q": "What does the World Bank use to classify countries?",
   "options": [
    "GNI per capita",
    "Human Development Index",
    "Corruption Perceptions Index",
    "Number of people living in cities"
   ],
   "correct": 0,
   "explain": "Income groups are based on GNI per capita.",
   "tag": "World Bank"
  },
  {
   "q": "In 2022, what income group was Nigeria in?",
   "options": [
    "Lower-middle income",
    "High income",
    "Low income",
    "Upper-middle income"
   ],
   "correct": 0,
   "explain": "Nigeria was lower-middle income.",
   "tag": "World Bank"
  },
  {
   "q": "Where are most low-income countries found?",
   "options": [
    "Sub-Saharan Africa",
    "Western Europe",
    "South America",
    "North America and the Caribbean"
   ],
   "correct": 0,
   "explain": "Especially the Sahel.",
   "tag": "World Bank"
  },
  {
   "q": "Which country was high income in 2022?",
   "options": [
    "Saudi Arabia",
    "Kenya",
    "India",
    "Thailand (Kingdom of)"
   ],
   "correct": 0,
   "explain": "Oil wealth makes it high income.",
   "tag": "World Bank"
  }
 ]
};

window.SBL_LESSONS["IGDV02"] = {
 "id": "IGDV02",
 "topicNumber": 1,
 "topicTitle": "Defining and measuring development (IGCSE)",
 "title": "Measuring development: GDP per capita",
 "href": "/igcse/geography/learn/development-and-human-welfare/l02-measuring-development-gdp",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Development and Human Welfare: Measuring development: GDP.",
 "checklist": [
  "I can describe what GDP is and how it is measured",
  "I can discuss the advantages and disadvantages of using GDP to measure development",
  "I can understand how other social indicators can help to measure development",
  "I can explain why no one single indicator can tell us how developed a place is"
 ],
 "quiz": [
  {
   "q": "What does GDP measure?",
   "options": [
    "Value of goods and services produced in a year",
    "The number of people working in factories and offices",
    "Total amount of money held in banks",
    "The amount of aid a country receives"
   ],
   "correct": 0,
   "explain": "GDP = total output in a year.",
   "tag": "GDP"
  },
  {
   "q": "How is GDP per capita calculated?",
   "options": [
    "GDP divided by population",
    "GDP multiplied by population",
    "GDP minus government spending",
    "GDP divided by the land area"
   ],
   "correct": 0,
   "explain": "Per capita means per person.",
   "tag": "GDP"
  },
  {
   "q": "Why is PPP used?",
   "options": [
    "To adjust for the cost of living",
    "To add income from abroad",
    "To remove the informal economy",
    "To include the value of all exports and imports"
   ],
   "correct": 0,
   "explain": "PPP compares what money can buy.",
   "tag": "GDP"
  },
  {
   "q": "Which is a disadvantage of GDP per capita?",
   "options": [
    "It hides inequality",
    "It is collected every year",
    "It is easy to compare",
    "It is a single number"
   ],
   "correct": 0,
   "explain": "An average hides rich–poor gaps.",
   "tag": "Evaluation"
  },
  {
   "q": "Why can GDP underestimate wealth in poorer countries?",
   "options": [
    "It misses the informal economy",
    "It counts tourists twice",
    "It includes income from abroad",
    "It is measured in local currency"
   ],
   "correct": 0,
   "explain": "Informal work is not recorded.",
   "tag": "Evaluation"
  },
  {
   "q": "Which shows a MORE developed country?",
   "options": [
    "Low infant mortality",
    "High fertility rate",
    "Low literacy rate",
    "Few doctors per person"
   ],
   "correct": 0,
   "explain": "Low infant mortality reflects good health care.",
   "tag": "Indicators"
  },
  {
   "q": "What is the infant mortality rate?",
   "options": [
    "Babies dying before age 1 per 1,000 births",
    "Children per woman over her lifetime",
    "Mothers dying per 100,000 births",
    "Deaths of children before the age of 18 in a single year"
   ],
   "correct": 0,
   "explain": "Under-1 deaths per 1,000 live births.",
   "tag": "Indicators"
  },
  {
   "q": "What is a composite index?",
   "options": [
    "A measure combining several indicators",
    "A list of countries by population",
    "One indicator measured only in US dollars",
    "A map showing income groups"
   ],
   "correct": 0,
   "explain": "e.g. the HDI.",
   "tag": "Indicators"
  },
  {
   "q": "Why is one indicator never enough?",
   "options": [
    "It shows only one aspect of development",
    "Indicators are never recorded",
    "All countries score the same",
    "It always relies on very old data collected in 1990"
   ],
   "correct": 0,
   "explain": "Development has many aspects.",
   "tag": "Indicators"
  },
  {
   "q": "Which measure does the World Bank use for income groups?",
   "options": [
    "GNI per capita",
    "GDP total",
    "Life expectancy",
    "Literacy rate"
   ],
   "correct": 0,
   "explain": "GNI per capita.",
   "tag": "GDP"
  }
 ]
};

window.SBL_LESSONS["IGDV03"] = {
 "id": "IGDV03",
 "topicNumber": 1,
 "topicTitle": "Defining and measuring development (IGCSE)",
 "title": "Measuring development: HDI, Gini coefficient and corruption",
 "href": "/igcse/geography/learn/development-and-human-welfare/l03-hdi-gini-and-corruption",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Development and Human Welfare: HDI, Gini and corruption.",
 "checklist": [
  "I can describe what the HDI is and explain how it is measured",
  "I can describe what the Gini coefficient is and explain how it is measured",
  "I can describe what the Corruption Perceptions Index is and explain how it is measured",
  "I can compare and contrast recent data from the above composite indices"
 ],
 "quiz": [
  {
   "q": "Which three things make up the HDI?",
   "options": [
    "Health, education and income",
    "Income, inequality and corruption",
    "Birth rate, death rate and migration",
    "Trade, aid and debt"
   ],
   "correct": 0,
   "explain": "Life expectancy, schooling and GNI per capita.",
   "tag": "HDI"
  },
  {
   "q": "Which organisation publishes the HDI?",
   "options": [
    "UNDP",
    "Transparency International",
    "World Trade Organization",
    "Fairtrade Foundation"
   ],
   "correct": 0,
   "explain": "The United Nations Development Programme.",
   "tag": "HDI"
  },
  {
   "q": "An HDI of 0.820 is classed as…",
   "options": [
    "Very high",
    "Low",
    "Medium (middle)",
    "High"
   ],
   "correct": 0,
   "explain": "0.800 and above is very high.",
   "tag": "HDI"
  },
  {
   "q": "Which country had the lowest HDI in the 2025 report?",
   "options": [
    "South Sudan",
    "Iceland",
    "India",
    "Thailand"
   ],
   "correct": 0,
   "explain": "South Sudan scored 0.388.",
   "tag": "HDI"
  },
  {
   "q": "What does the Gini coefficient measure?",
   "options": [
    "Inequality of income",
    "Average life expectancy",
    "How corrupt officials are",
    "The total value of a country’s exports"
   ],
   "correct": 0,
   "explain": "It measures how evenly income is shared.",
   "tag": "Gini"
  },
  {
   "q": "A Gini coefficient of 0 means…",
   "options": [
    "Everyone has the same income",
    "One person has all the income",
    "The country is very corrupt",
    "The country has no exports at all"
   ],
   "correct": 0,
   "explain": "0 = perfect equality.",
   "tag": "Gini"
  },
  {
   "q": "Which graph is used to work out the Gini coefficient?",
   "options": [
    "Lorenz curve",
    "Population pyramid",
    "Climate graph",
    "Demographic transition model"
   ],
   "correct": 0,
   "explain": "Gini = A ÷ (A + B) on a Lorenz curve.",
   "tag": "Gini"
  },
  {
   "q": "How is the CPI produced?",
   "options": [
    "From expert and business surveys",
    "By counting bribes paid each year",
    "From national census data",
    "By measuring the cost of living"
   ],
   "correct": 0,
   "explain": "Corruption is hidden, so perceptions are surveyed.",
   "tag": "CPI"
  },
  {
   "q": "On the CPI, a score of 89 means…",
   "options": [
    "Very clean (little corruption)",
    "Very corrupt government",
    "High income inequality",
    "Low life expectancy and poor health care"
   ],
   "correct": 0,
   "explain": "100 = very clean.",
   "tag": "CPI"
  },
  {
   "q": "Why should several indices be used together?",
   "options": [
    "Each measures a different aspect",
    "They always give the same results",
    "Only one is published each year",
    "They all use the same data"
   ],
   "correct": 0,
   "explain": "Health, inequality and corruption differ.",
   "tag": "Comparing"
  }
 ]
};

window.SBL_LESSONS["IGDV04"] = {
 "id": "IGDV04",
 "topicNumber": 2,
 "topicTitle": "Development and population (IGCSE)",
 "title": "Demographic data and the demographic transition model",
 "href": "/igcse/geography/learn/development-and-human-welfare/l04-demographic-transition-model",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Development and Human Welfare: Demographic data and the DTM.",
 "checklist": [
  "I can describe and explain population structures using the demographic transition model",
  "I can interpret population pyramids",
  "I can use demographic data to show different levels of development"
 ],
 "quiz": [
  {
   "q": "What is natural increase?",
   "options": [
    "Birth rate minus death rate",
    "Immigration minus emigration",
    "Death rate minus birth rate",
    "Births plus all immigrants in a year"
   ],
   "correct": 0,
   "explain": "BR − DR.",
   "tag": "Terms"
  },
  {
   "q": "What fertility rate is roughly replacement level?",
   "options": [
    "2.1",
    "1.0",
    "4.5",
    "6.0"
   ],
   "correct": 0,
   "explain": "About 2.1 children per woman.",
   "tag": "Terms"
  },
  {
   "q": "How is infant mortality measured?",
   "options": [
    "Deaths under age 1 per 1,000 live births",
    "Deaths under 5 per 100 people",
    "Mothers’ deaths per 100,000 births",
    "All deaths at any age per 1,000 people per year"
   ],
   "correct": 0,
   "explain": "Under-1 deaths per 1,000 live births.",
   "tag": "Terms"
  },
  {
   "q": "In which DTM stage does the death rate fall quickly but the birth rate stays high?",
   "options": [
    "Stage 2",
    "Stage 1",
    "Stage 4",
    "Stage 5"
   ],
   "correct": 0,
   "explain": "Early expanding.",
   "tag": "DTM"
  },
  {
   "q": "Why does the death rate fall in stage 2?",
   "options": [
    "Better health care and clean water",
    "More women go to university",
    "Contraception becomes widely available",
    "People move abroad for work"
   ],
   "correct": 0,
   "explain": "Medical and sanitation improvements.",
   "tag": "DTM"
  },
  {
   "q": "Why does the birth rate fall in stage 3?",
   "options": [
    "Contraception and education of women",
    "More wars and famines occur",
    "Death rates start to rise",
    "Children are needed to work on family farms"
   ],
   "correct": 0,
   "explain": "Family planning and changing roles.",
   "tag": "DTM"
  },
  {
   "q": "Which country best fits stage 5?",
   "options": [
    "Japan",
    "Niger",
    "Kenya",
    "Nigeria"
   ],
   "correct": 0,
   "explain": "Japan’s population is shrinking.",
   "tag": "DTM"
  },
  {
   "q": "A pyramid with a very wide base shows…",
   "options": [
    "A high birth rate",
    "An ageing population",
    "A low birth rate",
    "Lots of elderly migrants"
   ],
   "correct": 0,
   "explain": "Many young children.",
   "tag": "Pyramids"
  },
  {
   "q": "Which data suggests a MORE developed country?",
   "options": [
    "Fertility 1.4, infant mortality 4",
    "Fertility 6.1, infant mortality 60",
    "Fertility 4.5, life expectancy 54",
    "Half the population under 15"
   ],
   "correct": 0,
   "explain": "Low fertility and infant mortality.",
   "tag": "Data"
  },
  {
   "q": "Which age group is the working population?",
   "options": [
    "15–64",
    "0–14",
    "65 and over",
    "18–30 only"
   ],
   "correct": 0,
   "explain": "15–64.",
   "tag": "Pyramids"
  }
 ]
};

window.SBL_LESSONS["IGDV05"] = {
 "id": "IGDV05",
 "topicNumber": 2,
 "topicTitle": "Development and population (IGCSE)",
 "title": "Demographic transition model and population pyramids",
 "href": "/igcse/geography/learn/development-and-human-welfare/l05-population-pyramids",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Development and Human Welfare: Population pyramids and the DTM.",
 "checklist": [
  "I can interpret population pyramids",
  "I can link population pyramids to the DTM",
  "I can use demographic data to show different levels of development"
 ],
 "quiz": [
  {
   "q": "On a pyramid, which side usually shows males?",
   "options": [
    "Left",
    "Right",
    "Top",
    "Bottom"
   ],
   "correct": 0,
   "explain": "Males left, females right.",
   "tag": "Pyramids"
  },
  {
   "q": "Straight sides on a pyramid show…",
   "options": [
    "A low death rate",
    "A high birth rate",
    "Lots of emigration",
    "A war in the past"
   ],
   "correct": 0,
   "explain": "Most people survive to old age.",
   "tag": "Pyramids"
  },
  {
   "q": "Which pyramid shape matches DTM stage 2?",
   "options": [
    "Triangular with a very wide base",
    "Narrow base and wide top",
    "Straight sides with a wide top section",
    "Bulge of working-age men"
   ],
   "correct": 0,
   "explain": "High births, falling deaths.",
   "tag": "DTM link"
  },
  {
   "q": "A narrowing base suggests…",
   "options": [
    "A falling birth rate",
    "A rising death rate",
    "Rising infant mortality",
    "A new baby boom starting"
   ],
   "correct": 0,
   "explain": "Fewer births each year.",
   "tag": "Pyramids"
  },
  {
   "q": "Which country is likely to have a stage 5 pyramid?",
   "options": [
    "Italy",
    "Niger",
    "Chad",
    "Nigeria"
   ],
   "correct": 0,
   "explain": "Low fertility and ageing.",
   "tag": "DTM link"
  },
  {
   "q": "A large bulge of men aged 25–40 in Qatar is caused by…",
   "options": [
    "Male migrant workers",
    "A baby boom",
    "A high death rate",
    "A strict one-child policy"
   ],
   "correct": 0,
   "explain": "Migrant construction workers.",
   "tag": "Pyramids"
  },
  {
   "q": "What does a youthful population need most?",
   "options": [
    "Schools and jobs",
    "Care homes and pensions",
    "Fewer hospitals",
    "Smaller farms"
   ],
   "correct": 0,
   "explain": "Many children and young adults.",
   "tag": "DTM link"
  },
  {
   "q": "What does a wide top show?",
   "options": [
    "High life expectancy",
    "High infant mortality",
    "A high birth rate",
    "Many young migrants"
   ],
   "correct": 0,
   "explain": "Many people live to old age.",
   "tag": "Pyramids"
  },
  {
   "q": "Which indicator is MUCH higher in Nigeria than in the UK?",
   "options": [
    "Maternal mortality",
    "Life expectancy",
    "Share of people over 65",
    "Average years at school"
   ],
   "correct": 0,
   "explain": "Roughly 1 in 100 births.",
   "tag": "Data"
  },
  {
   "q": "In BSTAD, what does the D stand for?",
   "options": [
    "Dependency",
    "Density",
    "Distribution",
    "Death rate"
   ],
   "correct": 0,
   "explain": "Young and old dependents.",
   "tag": "Pyramids"
  }
 ]
};

window.SBL_LESSONS["IGDV06"] = {
 "id": "IGDV06",
 "topicNumber": 3,
 "topicTitle": "Uneven development (IGCSE)",
 "title": "Causes of uneven development",
 "href": "/igcse/geography/learn/development-and-human-welfare/l06-causes-of-uneven-development",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Development and Human Welfare: Causes of uneven development.",
 "checklist": [
  "I can describe the ways in which the world is an unequal place",
  "I can explain the social, historical, economic and physical factors that have led to uneven development between countries",
  "I can understand the ways in which ‘dependency theory’ has contributed to uneven development globally"
 ],
 "quiz": [
  {
   "q": "What is the development gap?",
   "options": [
    "The difference between richest and poorest countries",
    "The distance between the capital cities of two countries",
    "The time taken for a country to develop",
    "The gap between births and deaths"
   ],
   "correct": 0,
   "explain": "The gap in wealth and well-being.",
   "tag": "Unequal world"
  },
  {
   "q": "Why does being landlocked slow development?",
   "options": [
    "Trade is harder and more expensive",
    "There are more tropical storms",
    "The soil is always infertile",
    "It has more people than coastal countries"
   ],
   "correct": 0,
   "explain": "No direct access to ports.",
   "tag": "Physical"
  },
  {
   "q": "Which is a HISTORICAL cause of uneven development?",
   "options": [
    "Colonialism",
    "Malaria",
    "Drought",
    "Earthquakes"
   ],
   "correct": 0,
   "explain": "Colonial powers exploited colonies.",
   "tag": "Historical"
  },
  {
   "q": "Why is relying on primary products a problem?",
   "options": [
    "Prices are low and change a lot",
    "They are too valuable to export",
    "They cannot be grown in the tropics",
    "Rich countries never buy them"
   ],
   "correct": 0,
   "explain": "Low value and price swings.",
   "tag": "Economic"
  },
  {
   "q": "Which is a SOCIAL or political cause?",
   "options": [
    "Civil war",
    "Tropical climate",
    "Volcanic eruptions",
    "Being landlocked"
   ],
   "correct": 0,
   "explain": "Conflict destroys development.",
   "tag": "Social"
  },
  {
   "q": "Who developed dependency theory?",
   "options": [
    "Andre Gunder Frank",
    "Walt Rostow",
    "Thomas Robert Malthus",
    "Ester Boserup"
   ],
   "correct": 0,
   "explain": "Frank, in the 1960s.",
   "tag": "Dependency"
  },
  {
   "q": "In dependency theory, the periphery supplies…",
   "options": [
    "Cheap raw materials and labour",
    "Expensive manufactured goods",
    "Loans to the core countries",
    "Most of the world’s technology"
   ],
   "correct": 0,
   "explain": "Raw materials flow to the core.",
   "tag": "Dependency"
  },
  {
   "q": "Where do the profits flow in dependency theory?",
   "options": [
    "From periphery to core",
    "From core to periphery",
    "Equally between both",
    "Only within the periphery"
   ],
   "correct": 0,
   "explain": "Wealth moves to the core.",
   "tag": "Dependency"
  },
  {
   "q": "Which example challenges dependency theory?",
   "options": [
    "South Korea becoming rich",
    "Niger staying a low-income country",
    "Cocoa prices falling",
    "Chad being landlocked"
   ],
   "correct": 0,
   "explain": "A former colony that grew rich.",
   "tag": "Dependency"
  },
  {
   "q": "What is a cycle of poverty?",
   "options": [
    "Low income leading to low investment and more poverty",
    "Seasonal changes in farm income",
    "Repeated tropical storms each year",
    "People migrating from cities back to rural areas to farm the land"
   ],
   "correct": 0,
   "explain": "Poverty reinforces itself.",
   "tag": "Unequal world"
  }
 ]
};

window.SBL_LESSONS["IGDV07"] = {
 "id": "IGDV07",
 "topicNumber": 3,
 "topicTitle": "Uneven development (IGCSE)",
 "title": "Causes of uneven development within countries: Italy case study",
 "href": "/igcse/geography/learn/development-and-human-welfare/l07-italy-uneven-development",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Development and Human Welfare: Case study: Italy.",
 "checklist": [
  "I can understand some of the reasons for uneven development within countries",
  "I can explain the difference in development between the north and south of Italy",
  "I can outline the reasons for these differences in development in Italy"
 ],
 "quiz": [
  {
   "q": "What is the Mezzogiorno?",
   "options": [
    "The South of Italy",
    "Italy’s main mountain range",
    "A fund for northern industry",
    "The flat valley around Milan"
   ],
   "correct": 0,
   "explain": "Southern Italy, including the islands.",
   "tag": "Italy"
  },
  {
   "q": "Which cities form the industrial triangle?",
   "options": [
    "Milan, Turin and Genoa",
    "Rome, Naples and Bari",
    "Palermo, Catania and Messina",
    "Venice, Florence and Pisa"
   ],
   "correct": 0,
   "explain": "In the North-West.",
   "tag": "Italy"
  },
  {
   "q": "How does unemployment in the South compare with the North?",
   "options": [
    "About three times higher",
    "About the same",
    "About half as high",
    "Slightly lower than the North overall"
   ],
   "correct": 0,
   "explain": "Around 14% vs under 5% (2023).",
   "tag": "Italy"
  },
  {
   "q": "Which physical feature helps the North?",
   "options": [
    "The flat, fertile Po Valley",
    "The Apennine mountains",
    "Active volcanoes like Etna",
    "A hot, dry summer climate with little rain"
   ],
   "correct": 0,
   "explain": "Good farmland and easy building.",
   "tag": "Reasons"
  },
  {
   "q": "Why does location help northern Italy?",
   "options": [
    "It is close to Europe’s core markets",
    "It is closer to North Africa",
    "It has more coastline than the South",
    "It is far from the Alps"
   ],
   "correct": 0,
   "explain": "Near France, Switzerland and Germany.",
   "tag": "Reasons"
  },
  {
   "q": "What was the Cassa per il Mezzogiorno?",
   "options": [
    "A fund to develop the South",
    "A mafia group based in western Sicily",
    "A motorway in the North",
    "A steelworks in Milan"
   ],
   "correct": 0,
   "explain": "Government investment 1950–1984.",
   "tag": "Reasons"
  },
  {
   "q": "What is a ‘cathedral in the desert’?",
   "options": [
    "A large factory with few linked jobs",
    "A church built in the middle of the Sahara",
    "A tourist resort in Sicily",
    "A new high-speed railway line"
   ],
   "correct": 0,
   "explain": "e.g. the Taranto steelworks.",
   "tag": "Reasons"
  },
  {
   "q": "Which group is linked to Calabria?",
   "options": [
    "The ’Ndrangheta",
    "The Camorra",
    "The Cassa",
    "The Mezzogiorno"
   ],
   "correct": 0,
   "explain": "The Camorra is in Campania.",
   "tag": "Reasons"
  },
  {
   "q": "What is brain drain?",
   "options": [
    "Skilled people leaving a region",
    "Water leaking from old pipes",
    "Factories closing in a city",
    "Young people moving into the South"
   ],
   "correct": 0,
   "explain": "The South loses skills.",
   "tag": "Reasons"
  },
  {
   "q": "Why does development become uneven within a country?",
   "options": [
    "Investment concentrates in core regions",
    "All regions get equal investment",
    "Mountain areas attract the most new industry",
    "Remote areas grow fastest"
   ],
   "correct": 0,
   "explain": "Core and periphery.",
   "tag": "Uneven"
  }
 ]
};

window.SBL_LESSONS["IGDV08"] = {
 "id": "IGDV08",
 "topicNumber": 4,
 "topicTitle": "Reducing the development gap (IGCSE)",
 "title": "International strategies to reduce the development gap",
 "href": "/igcse/geography/learn/development-and-human-welfare/l08-reducing-the-development-gap",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Development and Human Welfare: Strategies to reduce the gap.",
 "checklist": [
  "I can outline a range of international strategies that can be used to reduce the development gap (international aid, trade, debt relief, fair trade etc.)",
  "I can evaluate the positives and negatives of each strategy"
 ],
 "quiz": [
  {
   "q": "What is bilateral aid?",
   "options": [
    "Aid from one government to another",
    "Aid through the World Bank or United Nations",
    "Aid raised by charities",
    "Aid in the form of loans only"
   ],
   "correct": 0,
   "explain": "Government to government.",
   "tag": "Aid"
  },
  {
   "q": "What is tied aid?",
   "options": [
    "Aid spent on the donor’s goods",
    "Aid given after a disaster",
    "Aid that never has to be repaid",
    "Aid given by several countries"
   ],
   "correct": 0,
   "explain": "Conditions favour the donor.",
   "tag": "Aid"
  },
  {
   "q": "What is the UN aid target for rich countries?",
   "options": [
    "0.7% of GNI",
    "7% of GDP",
    "0.07% of GNI",
    "10% of GDP"
   ],
   "correct": 0,
   "explain": "0.7% of GNI.",
   "tag": "Aid"
  },
  {
   "q": "Which is short-term aid?",
   "options": [
    "Tents and food after an earthquake",
    "Building a new secondary school",
    "Training teachers for ten years",
    "Funding a long-term water scheme"
   ],
   "correct": 0,
   "explain": "Emergency relief.",
   "tag": "Aid"
  },
  {
   "q": "What does the Fairtrade Premium pay for?",
   "options": [
    "Community projects",
    "Advertising in rich countries",
    "Shipping costs",
    "Shop staff wages abroad"
   ],
   "correct": 0,
   "explain": "Chosen by the community.",
   "tag": "Fair trade"
  },
  {
   "q": "How does debt relief help development?",
   "options": [
    "Money can go on health and education",
    "It raises the price that exports sell for abroad",
    "It increases tied aid",
    "It reduces the population quickly"
   ],
   "correct": 0,
   "explain": "Repayments are freed up.",
   "tag": "Debt"
  },
  {
   "q": "When were the Sustainable Development Goals agreed?",
   "options": [
    "2015",
    "2000",
    "1996",
    "2005"
   ],
   "correct": 0,
   "explain": "17 goals for 2015–2030.",
   "tag": "Agreements"
  },
  {
   "q": "Which is a negative of long-term aid?",
   "options": [
    "It can create dependency",
    "It saves lives quickly",
    "It builds local skills",
    "It improves infrastructure"
   ],
   "correct": 0,
   "explain": "Countries may come to rely on it.",
   "tag": "Evaluate"
  },
  {
   "q": "Why can trade rules hold back poorer countries?",
   "options": [
    "Tariffs and rules favour richer countries",
    "Poorer countries are not allowed to export anything at all",
    "Trade always creates dependency on aid",
    "All trade is fair trade"
   ],
   "correct": 0,
   "explain": "Barriers to processed exports.",
   "tag": "Evaluate"
  },
  {
   "q": "Which group usually favours small community-led projects?",
   "options": [
    "NGOs such as WaterAid",
    "The IMF",
    "Donor governments",
    "Large construction companies"
   ],
   "correct": 0,
   "explain": "Bottom-up approaches.",
   "tag": "Views"
  }
 ]
};

window.SBL_LESSONS["IGDV09"] = {
 "id": "IGDV09",
 "topicNumber": 4,
 "topicTitle": "Reducing the development gap (IGCSE)",
 "title": "Case studies: Development projects in Nigeria and Kenya",
 "href": "/igcse/geography/learn/development-and-human-welfare/l09-nigeria-and-kenya-projects",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Development and Human Welfare: Case studies: Nigeria and Kenya.",
 "checklist": [
  "I can understand the difference between top-down and bottom-up development projects",
  "I can evaluate the top-down coastal railway project in Nigeria",
  "I can evaluate the bottom-up WaterAid project in Kenya"
 ],
 "quiz": [
  {
   "q": "Which describes a top-down project?",
   "options": [
    "Large scheme planned by a government",
    "Small well dug by villagers",
    "Hygiene club run by pupils",
    "A charity training local mechanics to repair pumps"
   ],
   "correct": 0,
   "explain": "Decided at the top.",
   "tag": "Top-down"
  },
  {
   "q": "What is appropriate technology?",
   "options": [
    "Technology suited to local skills and money",
    "The most advanced and expensive technology available",
    "Technology imported from rich countries",
    "Machines that need foreign engineers"
   ],
   "correct": 0,
   "explain": "Local people can run and repair it.",
   "tag": "Bottom-up"
  },
  {
   "q": "Which cities does the coastal railway link?",
   "options": [
    "Lagos and Calabar",
    "Kano and Maradi",
    "Abuja and Kaduna",
    "Lagos and Ibadan"
   ],
   "correct": 0,
   "explain": "Along the southern coast.",
   "tag": "Nigeria"
  },
  {
   "q": "How long is the planned coastal railway?",
   "options": [
    "About 1,400 km",
    "About 140 km",
    "About 14,000 km",
    "About 400 km"
   ],
   "correct": 0,
   "explain": "1,402 km.",
   "tag": "Nigeria"
  },
  {
   "q": "Which company was contracted to build it?",
   "options": [
    "CCECC (China)",
    "WaterAid",
    "Fiat",
    "Standard Chartered"
   ],
   "correct": 0,
   "explain": "China Civil Engineering Construction Corporation.",
   "tag": "Nigeria"
  },
  {
   "q": "What is a major weakness of the coastal railway?",
   "options": [
    "Delays and large foreign debt",
    "It is too cheap to build",
    "It only helps a few local villages nearby",
    "It uses hand pumps"
   ],
   "correct": 0,
   "explain": "Funding problems and debt.",
   "tag": "Nigeria"
  },
  {
   "q": "How is WaterAid funded?",
   "options": [
    "Donations and grants",
    "Loans from China",
    "Taxes on Kenyan water",
    "Profits from railways"
   ],
   "correct": 0,
   "explain": "It is a charity.",
   "tag": "Kenya"
  },
  {
   "q": "Which technology does WaterAid use?",
   "options": [
    "Hand pumps and rainwater harvesting",
    "High-speed trains",
    "Large hydroelectric dams",
    "Desalination plants built along the coast"
   ],
   "correct": 0,
   "explain": "Low-cost, repairable.",
   "tag": "Kenya"
  },
  {
   "q": "Who benefits most from clean water projects?",
   "options": [
    "Women and girls",
    "Large companies",
    "Foreign contractors",
    "Oil exporters"
   ],
   "correct": 0,
   "explain": "Less time collecting water.",
   "tag": "Kenya"
  },
  {
   "q": "What is a weakness of bottom-up projects?",
   "options": [
    "They reach fewer people",
    "They create huge debts",
    "They displace many people",
    "They need foreign engineers"
   ],
   "correct": 0,
   "explain": "Small scale.",
   "tag": "Bottom-up"
  }
 ]
};

window.SBL_LESSONS["IGEC01"] = {
 "id": "IGEC01",
 "topicNumber": 1,
 "topicTitle": "Economic sectors and location (IGCSE)",
 "title": "Economic sectors and employment",
 "href": "/igcse/geography/learn/economic-activity-and-energy/l01-economic-sectors-and-employment",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Economic Activity and Energy: Economic sectors and employment.",
 "checklist": [
  "I can describe how and why different types of employment can be categorised into primary, secondary, tertiary and quaternary sectors and give examples",
  "I can draw and interpret triangular graphs showing employment sectors",
  "I can identify how and why a country’s employment structure can tell us about its level of development"
 ],
 "quiz": [
  {
   "q": "Which job is in the primary sector?",
   "options": [
    "Fisherman",
    "Teacher",
    "Car assembler",
    "Software designer"
   ],
   "correct": 0,
   "explain": "Extracting resources.",
   "tag": "Sectors"
  },
  {
   "q": "Which job is in the secondary sector?",
   "options": [
    "Steel worker",
    "Dentist in a city clinic",
    "Farmer",
    "Researcher"
   ],
   "correct": 0,
   "explain": "Manufacturing.",
   "tag": "Sectors"
  },
  {
   "q": "Which job is in the tertiary sector?",
   "options": [
    "Shop assistant",
    "Coal miner underground",
    "Builder",
    "Forester"
   ],
   "correct": 0,
   "explain": "A service.",
   "tag": "Sectors"
  },
  {
   "q": "Which job is in the quaternary sector?",
   "options": [
    "Computer programmer",
    "Lorry driver",
    "Fisherman",
    "Factory production-line worker"
   ],
   "correct": 0,
   "explain": "Information and expertise.",
   "tag": "Sectors"
  },
  {
   "q": "What must the three values on a triangular graph add up to?",
   "options": [
    "100%",
    "50%",
    "300%",
    "It varies"
   ],
   "correct": 0,
   "explain": "Three percentages.",
   "tag": "Graphs"
  },
  {
   "q": "Where would a mainly farming country plot?",
   "options": [
    "Near the primary corner",
    "Near the services corner",
    "In the exact centre",
    "Off the graph"
   ],
   "correct": 0,
   "explain": "High primary %.",
   "tag": "Graphs"
  },
  {
   "q": "In which stage does the secondary sector peak?",
   "options": [
    "Industrial",
    "Pre-industrial",
    "Post-industrial",
    "It never peaks"
   ],
   "correct": 0,
   "explain": "Factory jobs grow.",
   "tag": "Clark–Fisher"
  },
  {
   "q": "Which country is post-industrial?",
   "options": [
    "UK",
    "Ethiopia",
    "India",
    "China"
   ],
   "correct": 0,
   "explain": "Mostly services.",
   "tag": "Clark–Fisher"
  },
  {
   "q": "Why do primary jobs fall as countries develop?",
   "options": [
    "Farming is mechanised",
    "Food is no longer needed",
    "All farms close",
    "Mines open everywhere"
   ],
   "correct": 0,
   "explain": "Fewer workers needed.",
   "tag": "Clark–Fisher"
  },
  {
   "q": "What does a high tertiary percentage suggest?",
   "options": [
    "A high-income country",
    "A low-income country",
    "A country with no services",
    "A mainly farming country"
   ],
   "correct": 0,
   "explain": "Post-industrial.",
   "tag": "Development"
  }
 ]
};

window.SBL_LESSONS["IGEC02"] = {
 "id": "IGEC02",
 "topicNumber": 1,
 "topicTitle": "Economic sectors and location (IGCSE)",
 "title": "Factors affecting the location of economic activities",
 "href": "/igcse/geography/learn/economic-activity-and-energy/l02-location-of-economic-activity",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Economic Activity and Energy: Location of economic activity.",
 "checklist": [
  "I can compare the relative importance of different locational factors for different industries",
  "I can identify how the location of economic activity changes over time and give examples"
 ],
 "quiz": [
  {
   "q": "Which is a physical locational factor?",
   "options": [
    "Flat land",
    "Skilled labour",
    "Government grants",
    "Market"
   ],
   "correct": 0,
   "explain": "Natural factor.",
   "tag": "Factors"
  },
  {
   "q": "Which is a human locational factor?",
   "options": [
    "Cheap labour",
    "Water supply",
    "Climate",
    "Flat land"
   ],
   "correct": 0,
   "explain": "Related to people.",
   "tag": "Factors"
  },
  {
   "q": "What matters most for coal mining?",
   "options": [
    "Location of coal seams",
    "Nearby universities and science parks",
    "Shopping centres",
    "Pleasant scenery"
   ],
   "correct": 0,
   "explain": "Raw material.",
   "tag": "Industries"
  },
  {
   "q": "What matters most for app design firms?",
   "options": [
    "Skilled graduates and broadband",
    "Large coal deposits and iron ore nearby",
    "Deep rivers for barges",
    "Cheap unskilled labour"
   ],
   "correct": 0,
   "explain": "Quaternary.",
   "tag": "Industries"
  },
  {
   "q": "Why do clothes factories locate in LICs?",
   "options": [
    "Cheap labour",
    "Cold climate",
    "Large coal reserves",
    "High wages"
   ],
   "correct": 0,
   "explain": "Labour-intensive.",
   "tag": "Industries"
  },
  {
   "q": "What is a footloose industry?",
   "options": [
    "One not tied to raw materials",
    "One that uses many feet of land",
    "A farming industry",
    "A mining industry"
   ],
   "correct": 0,
   "explain": "Can locate anywhere.",
   "tag": "Change"
  },
  {
   "q": "Why did UK steelworks move to the coast?",
   "options": [
    "To use imported raw materials",
    "To be near tourist resorts and beaches",
    "To avoid using coal",
    "For sea views"
   ],
   "correct": 0,
   "explain": "e.g. Port Talbot.",
   "tag": "Change"
  },
  {
   "q": "How has the internet changed retail location?",
   "options": [
    "More warehouses, fewer high-street shops",
    "Many more high-street shops in town centres",
    "Shops moved to mountains",
    "No change at all"
   ],
   "correct": 0,
   "explain": "Online shopping.",
   "tag": "Change"
  },
  {
   "q": "Which is a greenfield site?",
   "options": [
    "Land not built on before",
    "An old factory site in a city centre",
    "A polluted mine",
    "A city centre car park"
   ],
   "correct": 0,
   "explain": "No clean-up costs.",
   "tag": "Factors"
  },
  {
   "q": "Why do retailers want accessible locations?",
   "options": [
    "To reach many customers",
    "To be near coal",
    "To get cheap labour",
    "To use river water for cooling machines"
   ],
   "correct": 0,
   "explain": "The market.",
   "tag": "Industries"
  }
 ]
};

window.SBL_LESSONS["IGEC03"] = {
 "id": "IGEC03",
 "topicNumber": 2,
 "topicTitle": "Changing employment (IGCSE)",
 "title": "Changes in sector employment",
 "href": "/igcse/geography/learn/economic-activity-and-energy/l03-changes-in-sector-employment",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Economic Activity and Energy: Changes in sector employment.",
 "checklist": [
  "I can analyse, evaluate and categorise information",
  "I can effectively research one way in which demographic or social changes have impacted the relative numbers of people employed in different economic sectors",
  "I can effectively summarise and share information as part of a whole-class presentation",
  "I can apply knowledge and understanding to an exam-style question"
 ],
 "quiz": [
  {
   "q": "Why did UK coal mining jobs decline?",
   "options": [
    "Coal became too expensive to extract",
    "Coal was no longer used anywhere in the world",
    "Miners moved into farming",
    "Coal was banned in 1900"
   ],
   "correct": 0,
   "explain": "Depleted, costly reserves.",
   "tag": "Raw materials"
  },
  {
   "q": "What is mechanisation?",
   "options": [
    "Replacing workers with machines",
    "Moving factories abroad to cheaper countries",
    "Training new teachers",
    "Building new houses"
   ],
   "correct": 0,
   "explain": "Machines do the work.",
   "tag": "Technology"
  },
  {
   "q": "How did containerisation affect jobs?",
   "options": [
    "Fewer dock workers needed",
    "More dock workers needed",
    "Ports closed completely across the world",
    "No effect on jobs"
   ],
   "correct": 0,
   "explain": "Mechanised loading.",
   "tag": "Technology"
  },
  {
   "q": "What is deindustrialisation?",
   "options": [
    "Decline of manufacturing",
    "Growth of factories and manufacturing jobs",
    "Growth of farming",
    "Building new mines"
   ],
   "correct": 0,
   "explain": "Common in HICs.",
   "tag": "Globalisation"
  },
  {
   "q": "Why have many firms moved production to Vietnam?",
   "options": [
    "Lower labour costs",
    "A colder climate for workers",
    "Higher wages",
    "Fewer workers"
   ],
   "correct": 0,
   "explain": "Globalisation.",
   "tag": "Globalisation"
  },
  {
   "q": "Which change is demographic?",
   "options": [
    "An ageing population",
    "New robots on assembly lines",
    "Cheaper shipping",
    "Lower taxes"
   ],
   "correct": 0,
   "explain": "Population structure.",
   "tag": "Demographic"
  },
  {
   "q": "How did Singapore’s government grow its economy?",
   "options": [
    "Investing in education and ports",
    "Banning all foreign companies from trading",
    "Raising taxes very high",
    "Closing its airport"
   ],
   "correct": 0,
   "explain": "Policy-led growth.",
   "tag": "Government"
  },
  {
   "q": "Which sector is growing fastest in China now?",
   "options": [
    "Tertiary",
    "Primary",
    "Secondary only",
    "None"
   ],
   "correct": 0,
   "explain": "Rising middle class.",
   "tag": "Examples"
  },
  {
   "q": "Why has India’s IT sector grown?",
   "options": [
    "English-speaking workforce and technology",
    "Large coal reserves and a cold climate for factories",
    "Cold climate",
    "Few universities"
   ],
   "correct": 0,
   "explain": "Outsourcing.",
   "tag": "Examples"
  },
  {
   "q": "Which creates new quaternary jobs?",
   "options": [
    "Digital technology",
    "Coal mining",
    "Subsistence farming",
    "Street vending"
   ],
   "correct": 0,
   "explain": "Software and research.",
   "tag": "Technology"
  }
 ]
};

window.SBL_LESSONS["IGEC04"] = {
 "id": "IGEC04",
 "topicNumber": 2,
 "topicTitle": "Changing employment (IGCSE)",
 "title": "Sector shifts in three countries",
 "href": "/igcse/geography/learn/economic-activity-and-energy/l04-sector-shifts-in-three-countries",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Economic Activity and Energy: Sector shifts in three countries.",
 "checklist": [
  "I can distinguish between the terms pre-industrial, industrial and post-industrial",
  "I can compare and contrast countries at different levels of development, using numerical economic data",
  "I can demonstrate how changes to a country’s employment sector can have positive and negative socio-economic consequences"
 ],
 "quiz": [
  {
   "q": "Which statement fits a pre-industrial society?",
   "options": [
    "Farming is mainly subsistence",
    "Healthcare is very good",
    "Most people work in shops and offices in retail",
    "Food is mainly imported"
   ],
   "correct": 0,
   "explain": "Early stage.",
   "tag": "Stages"
  },
  {
   "q": "Which statement fits an industrial society?",
   "options": [
    "TNCs open textile factories",
    "Most people farm only to feed their families",
    "Most jobs are in research",
    "Few people go to school"
   ],
   "correct": 0,
   "explain": "Manufacturing grows.",
   "tag": "Stages"
  },
  {
   "q": "Which statement fits a post-industrial society?",
   "options": [
    "Lots of people work in retail",
    "Farming is mainly subsistence",
    "Very few hospitals",
    "Selling food at stalls"
   ],
   "correct": 0,
   "explain": "Service economy.",
   "tag": "Stages"
  },
  {
   "q": "Roughly what share of UK workers are in services?",
   "options": [
    "About 81%",
    "About 30%",
    "About 50%",
    "About 10%"
   ],
   "correct": 0,
   "explain": "Post-industrial.",
   "tag": "Data"
  },
  {
   "q": "Which of the three countries has the most primary workers?",
   "options": [
    "Ethiopia",
    "UK",
    "China",
    "They are equal"
   ],
   "correct": 0,
   "explain": "About three-quarters of jobs.",
   "tag": "Data"
  },
  {
   "q": "What drove China’s industrialisation?",
   "options": [
    "Rural–urban migration to factories",
    "Closure of almost all factories in the cities",
    "Fewer people in cities",
    "Lower exports"
   ],
   "correct": 0,
   "explain": "Since the 1980s.",
   "tag": "China"
  },
  {
   "q": "A negative impact of UK deindustrialisation is…",
   "options": [
    "Unemployment in former industrial towns",
    "More air pollution from heavy factories in towns",
    "More coal mining jobs",
    "Lower service employment"
   ],
   "correct": 0,
   "explain": "e.g. north-east England.",
   "tag": "Impacts"
  },
  {
   "q": "A negative impact of China’s industrialisation is…",
   "options": [
    "Air and water pollution",
    "Fewer people in poverty",
    "More infrastructure",
    "Growing exports"
   ],
   "correct": 0,
   "explain": "Environmental cost.",
   "tag": "Impacts"
  },
  {
   "q": "A risk of Ethiopia’s growth in commercial crops is…",
   "options": [
    "Food shortages for subsistence farmers",
    "Less export income from coffee and flowers",
    "Fewer cut flowers",
    "More rainfall"
   ],
   "correct": 0,
   "explain": "Land taken from food crops.",
   "tag": "Impacts"
  },
  {
   "q": "Which UK industries declined?",
   "options": [
    "Coal, steel and shipbuilding",
    "Finance, banking and insurance",
    "Software and design",
    "Tourism and retail"
   ],
   "correct": 0,
   "explain": "Since the 1970s.",
   "tag": "UK"
  }
 ]
};

window.SBL_LESSONS["IGEC05"] = {
 "id": "IGEC05",
 "topicNumber": 2,
 "topicTitle": "Changing employment (IGCSE)",
 "title": "Informal employment",
 "href": "/igcse/geography/learn/economic-activity-and-energy/l05-informal-employment-bangkok",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Economic Activity and Energy: Informal employment: Bangkok.",
 "checklist": [
  "I can identify a range of different types of informal employment and comment on the typical characteristics",
  "I can give reasons for the rise in informal employment in developing and emerging economies",
  "I can comment on the advantages and disadvantages of informal employment",
  "I can make reference to the role of the informal sector in Bangkok"
 ],
 "quiz": [
  {
   "q": "What is informal employment?",
   "options": [
    "Work not registered or taxed",
    "Work in a government office",
    "Work with a long-term contract",
    "Work in a large factory"
   ],
   "correct": 0,
   "explain": "No legal protection.",
   "tag": "Definition"
  },
  {
   "q": "Which is an informal job?",
   "options": [
    "Street food vendor",
    "Bank manager",
    "Government teacher",
    "Airline pilot"
   ],
   "correct": 0,
   "explain": "Unregistered work.",
   "tag": "Types"
  },
  {
   "q": "Why is informal work growing in megacities?",
   "options": [
    "Migrants arrive faster than formal jobs appear",
    "Formal jobs are growing much faster than the migrant population",
    "Fewer people move to cities",
    "All workers have degrees"
   ],
   "correct": 0,
   "explain": "Rural–urban migration.",
   "tag": "Causes"
  },
  {
   "q": "Which is an advantage of informal work?",
   "options": [
    "Easy to start",
    "Paid sick leave",
    "A good pension",
    "Strong legal protection"
   ],
   "correct": 0,
   "explain": "Low barriers.",
   "tag": "Evaluate"
  },
  {
   "q": "Which is a disadvantage?",
   "options": [
    "No job security",
    "Flexible hours",
    "Cheap goods for residents",
    "Easy to start"
   ],
   "correct": 0,
   "explain": "No contract.",
   "tag": "Evaluate"
  },
  {
   "q": "Why does informal work affect public services?",
   "options": [
    "No taxes are paid",
    "Workers pay too much tax",
    "It increases taxes",
    "It has no effect"
   ],
   "correct": 0,
   "explain": "Lower tax revenue.",
   "tag": "Evaluate"
  },
  {
   "q": "Which city is our megacity example?",
   "options": [
    "Bangkok",
    "Chiang Mai",
    "London",
    "Lima"
   ],
   "correct": 0,
   "explain": "Thailand’s capital.",
   "tag": "Bangkok"
  },
  {
   "q": "Where do many Bangkok migrants come from?",
   "options": [
    "The North-East (Isan)",
    "Japan",
    "The UK",
    "The far South near Malaysia"
   ],
   "correct": 0,
   "explain": "Poorer region.",
   "tag": "Bangkok"
  },
  {
   "q": "How have Bangkok’s motorbike taxis been formalised?",
   "options": [
    "Registration and numbered vests",
    "They have been banned from all roads",
    "They pay no fares",
    "They became buses"
   ],
   "correct": 0,
   "explain": "Some recognition.",
   "tag": "Bangkok"
  },
  {
   "q": "Why have some Bangkok vendors been cleared?",
   "options": [
    "To reduce pavement congestion",
    "To attract more vendors to the main streets",
    "To increase street food",
    "To build stalls"
   ],
   "correct": 0,
   "explain": "Authorities’ view.",
   "tag": "Bangkok"
  }
 ]
};

window.SBL_LESSONS["IGEC06"] = {
 "id": "IGEC06",
 "topicNumber": 3,
 "topicTitle": "Energy resources (IGCSE)",
 "title": "Rising energy demand",
 "href": "/igcse/geography/learn/economic-activity-and-energy/l06-rising-energy-demand",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Economic Activity and Energy: Rising energy demand.",
 "checklist": [
  "I can describe the trend in global energy consumption",
  "I can explain why the demand for energy is increasing",
  "I can describe global differences in energy consumption between countries at different levels of development",
  "I can compare different views on population growth and resources (Malthus, Boserup and optimum population)"
 ],
 "quiz": [
  {
   "q": "What is the global trend in energy consumption?",
   "options": [
    "Rising overall",
    "Falling steadily",
    "Staying the same",
    "Halving every decade"
   ],
   "correct": 0,
   "explain": "Roughly quadrupled since 1965.",
   "tag": "Trend"
  },
  {
   "q": "In which year did global energy use dip because of the pandemic?",
   "options": [
    "2020",
    "1990",
    "2000",
    "1975"
   ],
   "correct": 0,
   "explain": "COVID-19.",
   "tag": "Trend"
  },
  {
   "q": "Roughly what share of energy comes from fossil fuels?",
   "options": [
    "About four-fifths",
    "About one-tenth only",
    "About a quarter",
    "None"
   ],
   "correct": 0,
   "explain": "Oil, coal and gas.",
   "tag": "Trend"
  },
  {
   "q": "Which is a reason for rising energy demand?",
   "options": [
    "Population growth",
    "Falling incomes worldwide",
    "Fewer devices",
    "Smaller cities"
   ],
   "correct": 0,
   "explain": "More people.",
   "tag": "Reasons"
  },
  {
   "q": "How does industrialisation affect energy demand?",
   "options": [
    "It increases it",
    "It reduces it",
    "It has no effect",
    "It stops it"
   ],
   "correct": 0,
   "explain": "Factories use energy.",
   "tag": "Reasons"
  },
  {
   "q": "Which shows rising living standards?",
   "options": [
    "Buying an air conditioner",
    "Collecting firewood each morning",
    "Walking to school",
    "Using a candle"
   ],
   "correct": 0,
   "explain": "Middle class.",
   "tag": "Reasons"
  },
  {
   "q": "Which technology is increasing electricity demand?",
   "options": [
    "Data centres",
    "Oil lamps",
    "Steam trains",
    "Horse carts"
   ],
   "correct": 0,
   "explain": "Cloud and AI.",
   "tag": "Reasons"
  },
  {
   "q": "Which country uses the most energy in total?",
   "options": [
    "China",
    "UK",
    "Ethiopia",
    "Peru"
   ],
   "correct": 0,
   "explain": "Largest consumer.",
   "tag": "Uneven"
  },
  {
   "q": "Who uses the most energy per person?",
   "options": [
    "People in HICs",
    "People in LICs",
    "Everyone equally",
    "Rural farmers"
   ],
   "correct": 0,
   "explain": "Uneven use.",
   "tag": "Uneven"
  },
  {
   "q": "Where do most people without electricity live?",
   "options": [
    "Sub-Saharan Africa",
    "Western and northern Europe",
    "North America",
    "Japan"
   ],
   "correct": 0,
   "explain": "Energy poverty.",
   "tag": "Uneven"
  }
 ]
};

window.SBL_LESSONS["IGEC07"] = {
 "id": "IGEC07",
 "topicNumber": 3,
 "topicTitle": "Energy resources (IGCSE)",
 "title": "Renewable versus non-renewable energy",
 "href": "/igcse/geography/learn/economic-activity-and-energy/l07-renewable-and-non-renewable-energy",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Economic Activity and Energy: Renewable vs non-renewable.",
 "checklist": [
  "I can classify energy resources as renewable or non-renewable",
  "I can describe the advantages and disadvantages of different energy resources",
  "I can explain why countries need a diverse energy mix",
  "I can evaluate which energy resources are most suitable for different countries"
 ],
 "quiz": [
  {
   "q": "Which is a renewable resource?",
   "options": [
    "Wind",
    "Coal",
    "Oil",
    "Natural gas"
   ],
   "correct": 0,
   "explain": "Naturally replaced.",
   "tag": "Classify"
  },
  {
   "q": "Which is non-renewable?",
   "options": [
    "Uranium",
    "Solar",
    "Tidal",
    "Geothermal"
   ],
   "correct": 0,
   "explain": "Finite.",
   "tag": "Classify"
  },
  {
   "q": "Why is shale gas non-renewable?",
   "options": [
    "It is a finite fossil fuel",
    "It is made from the movement of wind",
    "It is replaced daily",
    "It comes from the Sun"
   ],
   "correct": 0,
   "explain": "Formed over millions of years.",
   "tag": "Classify"
  },
  {
   "q": "Which fuel produces the most CO₂?",
   "options": [
    "Coal",
    "Wind",
    "Nuclear",
    "Solar"
   ],
   "correct": 0,
   "explain": "Highest emissions.",
   "tag": "Evaluate"
  },
  {
   "q": "A disadvantage of nuclear power is…",
   "options": [
    "Radioactive waste",
    "High carbon emissions",
    "It only works in sunlight",
    "It needs strong winds"
   ],
   "correct": 0,
   "explain": "Long-lived waste.",
   "tag": "Evaluate"
  },
  {
   "q": "Why are solar and wind called intermittent?",
   "options": [
    "They are not always available",
    "They always produce power day and night",
    "They use coal at night",
    "They never work"
   ],
   "correct": 0,
   "explain": "Weather-dependent.",
   "tag": "Evaluate"
  },
  {
   "q": "A disadvantage of large HEP dams is…",
   "options": [
    "Flooding valleys and displacing people",
    "Very high CO₂ emissions from burning water",
    "Radioactive waste",
    "Fuel running out"
   ],
   "correct": 0,
   "explain": "Social and ecological costs.",
   "tag": "Evaluate"
  },
  {
   "q": "Where is geothermal power possible?",
   "options": [
    "Tectonically active areas",
    "Any flat area with good roads",
    "Only deserts",
    "Only cities"
   ],
   "correct": 0,
   "explain": "e.g. Iceland, Kenya.",
   "tag": "Suitability"
  },
  {
   "q": "When did the UK’s last coal power station close?",
   "options": [
    "2024",
    "1990",
    "2004",
    "2014"
   ],
   "correct": 0,
   "explain": "Ratcliffe-on-Soar.",
   "tag": "Suitability"
  },
  {
   "q": "Which mostly supplies Norway’s electricity?",
   "options": [
    "Hydroelectric power",
    "Coal-fired power stations",
    "Nuclear",
    "Oil"
   ],
   "correct": 0,
   "explain": "Mountain rivers.",
   "tag": "Suitability"
  }
 ]
};

window.SBL_LESSONS["IGEC08"] = {
 "id": "IGEC08",
 "topicNumber": 3,
 "topicTitle": "Energy resources (IGCSE)",
 "title": "Case study: fracking in the UK",
 "href": "/igcse/geography/learn/economic-activity-and-energy/l08-case-study-fracking-in-the-uk",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Economic Activity and Energy: Case study: fracking in the UK.",
 "checklist": [
  "I can explain how fracking works",
  "I can describe the potential advantages and disadvantages of fracking in the UK",
  "I can evaluate the views of different stakeholders about fracking"
 ],
 "quiz": [
  {
   "q": "What does fracking extract?",
   "options": [
    "Shale gas",
    "Coal",
    "Uranium",
    "Geothermal heat"
   ],
   "correct": 0,
   "explain": "From shale rock.",
   "tag": "Process"
  },
  {
   "q": "What is pumped down a fracking well?",
   "options": [
    "Water, sand and chemicals",
    "Only compressed air from the surface",
    "Only oil",
    "Molten rock"
   ],
   "correct": 0,
   "explain": "At high pressure.",
   "tag": "Process"
  },
  {
   "q": "Why is sand added to fracking fluid?",
   "options": [
    "To hold cracks open",
    "To make it colder",
    "To stop gas flowing",
    "To clean the pipes"
   ],
   "correct": 0,
   "explain": "Proppant.",
   "tag": "Process"
  },
  {
   "q": "Which shale lies beneath Lancashire?",
   "options": [
    "Bowland Shale",
    "Chalk of the South Downs",
    "London Clay",
    "Granite"
   ],
   "correct": 0,
   "explain": "Main UK reserve.",
   "tag": "UK"
  },
  {
   "q": "Where was Cuadrilla’s main fracking site?",
   "options": [
    "Preston New Road",
    "Port Talbot, Wales",
    "Sunderland",
    "Bangkok"
   ],
   "correct": 0,
   "explain": "Lancashire.",
   "tag": "UK"
  },
  {
   "q": "What triggered the 2019 moratorium?",
   "options": [
    "A magnitude 2.9 tremor",
    "A large oil spill at sea nearby",
    "A nuclear accident",
    "A flood"
   ],
   "correct": 0,
   "explain": "August 2019.",
   "tag": "UK"
  },
  {
   "q": "What is a moratorium?",
   "options": [
    "A temporary ban",
    "A tax rebate for gas firms",
    "A new gas well",
    "A type of rock"
   ],
   "correct": 0,
   "explain": "Halt on activity.",
   "tag": "UK"
  },
  {
   "q": "An advantage of fracking for the UK is…",
   "options": [
    "Less reliance on imported gas",
    "Zero carbon emissions from the gas burned",
    "No earthquakes",
    "No lorry traffic"
   ],
   "correct": 0,
   "explain": "Energy security.",
   "tag": "Evaluate"
  },
  {
   "q": "An environmental risk of fracking is…",
   "options": [
    "Groundwater contamination",
    "More bird strikes from turbines",
    "Radioactive waste storage",
    "Valleys flooded by dams"
   ],
   "correct": 0,
   "explain": "Fluids leaking.",
   "tag": "Evaluate"
  },
  {
   "q": "Who is most likely to oppose fracking?",
   "options": [
    "Local residents near a site",
    "The gas company that owns the well",
    "Shareholders",
    "Drilling contractors"
   ],
   "correct": 0,
   "explain": "Local impacts.",
   "tag": "Stakeholders"
  }
 ]
};

window.SBL_LESSONS["IGEC09"] = {
 "id": "IGEC09",
 "topicNumber": 4,
 "topicTitle": "Sustainable energy (IGCSE)",
 "title": "Sustainable energy",
 "href": "/igcse/geography/learn/economic-activity-and-energy/l09-sustainable-energy",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Economic Activity and Energy: Sustainable energy.",
 "checklist": [
  "I can define carbon footprint, ecological footprint, global hectare, biocapacity and Earth Overshoot Day",
  "I can calculate and compare personal footprints",
  "I can evaluate strategies to make energy use more sustainable at different scales, including the Sustainable Development Goals"
 ],
 "quiz": [
  {
   "q": "What is a carbon footprint?",
   "options": [
    "Greenhouse gases a person produces",
    "The size of your shoe",
    "Land used for farming",
    "The total energy produced by a country in a year"
   ],
   "correct": 0,
   "explain": "Tonnes of CO₂e.",
   "tag": "Definitions"
  },
  {
   "q": "What does an ecological footprint measure?",
   "options": [
    "Land and sea needed for a lifestyle",
    "Only the CO₂ produced by your family car",
    "Only water used",
    "Population density"
   ],
   "correct": 0,
   "explain": "Global hectares.",
   "tag": "Definitions"
  },
  {
   "q": "What is sustainable energy?",
   "options": [
    "Meets present needs without harming the future",
    "Always the cheapest energy available today, whatever the cost",
    "Energy from coal only",
    "Any imported energy"
   ],
   "correct": 0,
   "explain": "Long-term thinking.",
   "tag": "Definitions"
  },
  {
   "q": "Which country has a very high CO₂ per person?",
   "options": [
    "USA",
    "Ethiopia",
    "India",
    "Peru"
   ],
   "correct": 0,
   "explain": "About 14–15 t.",
   "tag": "Compare"
  },
  {
   "q": "Which country has very low CO₂ per person?",
   "options": [
    "Ethiopia",
    "USA (United States)",
    "China",
    "UK"
   ],
   "correct": 0,
   "explain": "Under 0.2 t.",
   "tag": "Compare"
  },
  {
   "q": "How many Earths does humanity currently use?",
   "options": [
    "About 1.7",
    "Exactly 1",
    "About 0.5",
    "About 10"
   ],
   "correct": 0,
   "explain": "Global Footprint Network.",
   "tag": "Compare"
  },
  {
   "q": "Which is an individual strategy?",
   "options": [
    "Cycling to school",
    "The Paris Agreement",
    "Renewable subsidies",
    "Carbon trading"
   ],
   "correct": 0,
   "explain": "Personal action.",
   "tag": "Scales"
  },
  {
   "q": "Which is a national strategy?",
   "options": [
    "Building insulation standards",
    "Turning off lights and TVs at home",
    "Walking to school",
    "A school solar panel"
   ],
   "correct": 0,
   "explain": "Government policy.",
   "tag": "Scales"
  },
  {
   "q": "Which is a global strategy?",
   "options": [
    "The Paris Agreement",
    "A new town bus service",
    "Home solar panels",
    "Turning off a TV"
   ],
   "correct": 0,
   "explain": "International.",
   "tag": "Scales"
  },
  {
   "q": "Why are global agreements limited?",
   "options": [
    "They are hard to enforce",
    "They are too cheap",
    "They only affect one person",
    "They ban all energy use"
   ],
   "correct": 0,
   "explain": "Voluntary targets.",
   "tag": "Evaluate"
  }
 ]
};

window.SBL_LESSONS["IGEC10"] = {
 "id": "IGEC10",
 "topicNumber": 4,
 "topicTitle": "Sustainable energy (IGCSE)",
 "title": "Case study: micro-hydro in Peru",
 "href": "/igcse/geography/learn/economic-activity-and-energy/l10-case-study-micro-hydro-in-peru",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Economic Activity and Energy: Case study: micro-hydro in Peru.",
 "checklist": [
  "I can describe the location and need for the Chambamontera micro-hydro scheme",
  "I can explain how a micro-hydro scheme works",
  "I can evaluate the social, economic and environmental impacts and the sustainability of the scheme"
 ],
 "quiz": [
  {
   "q": "In which country is Chambamontera?",
   "options": [
    "Peru",
    "Thailand",
    "Kenya",
    "Nepal"
   ],
   "correct": 0,
   "explain": "Northern Andes.",
   "tag": "Location"
  },
  {
   "q": "Which is the nearest town to Chambamontera?",
   "options": [
    "Jaén",
    "Lima",
    "Cusco",
    "Bangkok"
   ],
   "correct": 0,
   "explain": "Two hours by track.",
   "tag": "Location"
  },
  {
   "q": "Why was the village not on the national grid?",
   "options": [
    "Too remote and costly to connect",
    "It already had a large nuclear power station",
    "People did not want light",
    "It is in a desert"
   ],
   "correct": 0,
   "explain": "Off-grid.",
   "tag": "Need"
  },
  {
   "q": "What does the penstock do?",
   "options": [
    "Carries water down to the turbine",
    "Stores electricity in large batteries",
    "Holds back a reservoir",
    "Burns fuel"
   ],
   "correct": 0,
   "explain": "Pipe.",
   "tag": "How it works"
  },
  {
   "q": "Why does micro-hydro not flood the valley?",
   "options": [
    "There is no large dam",
    "It uses no water from the river",
    "It is underground",
    "It runs on wind"
   ],
   "correct": 0,
   "explain": "Run-of-river.",
   "tag": "How it works"
  },
  {
   "q": "Which NGO helped build the scheme?",
   "options": [
    "Practical Action",
    "Greenpeace International",
    "Red Cross",
    "WaterAid"
   ],
   "correct": 0,
   "explain": "Appropriate technology.",
   "tag": "Funding"
  },
  {
   "q": "Roughly how much did the scheme cost?",
   "options": [
    "US$51,000",
    "US$5 million",
    "US$500",
    "US$1 billion"
   ],
   "correct": 0,
   "explain": "Shared funding.",
   "tag": "Funding"
  },
  {
   "q": "What did each family contribute?",
   "options": [
    "About US$750",
    "Nothing at all",
    "US$51,000 each",
    "About US$7"
   ],
   "correct": 0,
   "explain": "Credit available.",
   "tag": "Funding"
  },
  {
   "q": "An economic benefit of the scheme is…",
   "options": [
    "Faster coffee processing",
    "More money spent on kerosene",
    "Fewer computers",
    "Higher fuel costs"
   ],
   "correct": 0,
   "explain": "Machinery.",
   "tag": "Impacts"
  },
  {
   "q": "An environmental benefit of the scheme is…",
   "options": [
    "Less wood burning",
    "More smoke indoors",
    "Flooded valleys",
    "More kerosene use"
   ],
   "correct": 0,
   "explain": "Less deforestation.",
   "tag": "Impacts"
  }
 ]
};

window.SBL_LESSONS["IGRF01"] = {
 "id": "IGRF01",
 "topicNumber": 1,
 "topicTitle": "Planning the enquiry (IGCSE)",
 "title": "Our rural enquiry: question, location and the enquiry process",
 "href": "/igcse/geography/learn/rural-fieldwork/l01-our-rural-enquiry",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Fieldwork: Our rural enquiry and location.",
 "checklist": [
  "I can state our rural enquiry question",
  "I can describe the location of our rural enquiry and explain why it was chosen",
  "I can describe the six stages of a geographical enquiry"
 ],
 "quiz": [
  {
   "q": "What was our rural enquiry about?",
   "options": [
    "Settlement size and services",
    "Coastal management and beaches",
    "River speed and discharge",
    "Urban crime and housing"
   ],
   "correct": 0,
   "explain": "Settlement hierarchy.",
   "tag": "Enquiry"
  },
  {
   "q": "Where was our rural enquiry?",
   "options": [
    "Sam Roi Yot National Park",
    "Khao Yai National Park, Nakhon Ratchasima",
    "Central Bangkok",
    "Chiang Mai old city"
   ],
   "correct": 0,
   "explain": "Prachuap Khiri Khan.",
   "tag": "Location"
  },
  {
   "q": "Roughly how far is the park from Bangkok?",
   "options": [
    "About 250 km south",
    "About 47 km north",
    "About 1,000 km east",
    "About 10 km west"
   ],
   "correct": 0,
   "explain": "Down the Gulf coast.",
   "tag": "Location"
  },
  {
   "q": "Which major settlement is closest?",
   "options": [
    "Hua Hin",
    "Pattaya",
    "Phuket",
    "Ayutthaya"
   ],
   "correct": 0,
   "explain": "About 47 km north.",
   "tag": "Location"
  },
  {
   "q": "Which was one of our study villages?",
   "options": [
    "Ban Khao Daeng",
    "Ban Pak Nam Pran",
    "Ban Pattaya Nuea",
    "Ban Silom"
   ],
   "correct": 0,
   "explain": "One of three.",
   "tag": "Location"
  },
  {
   "q": "Which coast is the park on?",
   "options": [
    "Gulf of Thailand",
    "Andaman Sea on the west coast",
    "South China Sea",
    "Bay of Bengal"
   ],
   "correct": 0,
   "explain": "East-facing coast.",
   "tag": "Location"
  },
  {
   "q": "Why was this location suitable?",
   "options": [
    "Several villages of different sizes close together",
    "It has only one very large village for us to study there",
    "It is in a large city",
    "It has no secondary data at all"
   ],
   "correct": 0,
   "explain": "Fair comparison.",
   "tag": "Location"
  },
  {
   "q": "What does “to what extent” require?",
   "options": [
    "A judgement in the conclusion",
    "A full list of all the equipment used",
    "A risk assessment",
    "Only a description"
   ],
   "correct": 0,
   "explain": "How strong?",
   "tag": "Enquiry"
  },
  {
   "q": "Which stage includes drawing pie charts?",
   "options": [
    "Data presentation",
    "Planning",
    "Evaluation",
    "Data collection in the field"
   ],
   "correct": 0,
   "explain": "Presenting.",
   "tag": "Process"
  },
  {
   "q": "Which stage includes suggesting improvements?",
   "options": [
    "Evaluation",
    "Planning",
    "Data collection",
    "Data presentation"
   ],
   "correct": 0,
   "explain": "Limitations and fixes.",
   "tag": "Process"
  }
 ]
};

window.SBL_LESSONS["IGRF02"] = {
 "id": "IGRF02",
 "topicNumber": 1,
 "topicTitle": "Planning the enquiry (IGCSE)",
 "title": "Settlement hierarchy: the theory behind our hypothesis",
 "href": "/igcse/geography/learn/rural-fieldwork/l02-settlement-hierarchy-and-hypothesis",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Fieldwork: Settlement hierarchy and hypothesis.",
 "checklist": [
  "I can explain settlement hierarchy, threshold, range and sphere of influence",
  "I can distinguish between high-order and low-order services",
  "I can write a hypothesis for the rural enquiry and explain the theory that supports it"
 ],
 "quiz": [
  {
   "q": "What is settlement hierarchy?",
   "options": [
    "Ranking settlements by size and services",
    "A map of all the roads between towns and cities",
    "The age of a settlement",
    "A list of village names"
   ],
   "correct": 0,
   "explain": "Size vs services.",
   "tag": "Theory"
  },
  {
   "q": "What is a threshold population?",
   "options": [
    "Minimum customers needed for a service",
    "Maximum distance people travel",
    "The total population of the whole of Thailand",
    "The number of houses in a village"
   ],
   "correct": 0,
   "explain": "To be viable.",
   "tag": "Theory"
  },
  {
   "q": "What is the range of a service?",
   "options": [
    "Maximum distance people will travel",
    "The minimum number of customers",
    "The number of shops in a village",
    "The price range of the goods sold in a shop"
   ],
   "correct": 0,
   "explain": "Distance.",
   "tag": "Theory"
  },
  {
   "q": "Which settlements have the largest sphere of influence?",
   "options": [
    "Large cities",
    "Hamlets",
    "Isolated dwellings",
    "Small villages"
   ],
   "correct": 0,
   "explain": "Serve a wide area.",
   "tag": "Theory"
  },
  {
   "q": "Which is a low-order service?",
   "options": [
    "Noodle stall",
    "Hospital",
    "Car showroom",
    "Bank branch"
   ],
   "correct": 0,
   "explain": "Used daily.",
   "tag": "Services"
  },
  {
   "q": "Which is a high-order service?",
   "options": [
    "Hospital",
    "Grocery shop",
    "Village temple",
    "Food stall"
   ],
   "correct": 0,
   "explain": "High threshold.",
   "tag": "Services"
  },
  {
   "q": "Why are high-order services in larger settlements?",
   "options": [
    "They need a high threshold population",
    "They need a short range",
    "They are used daily by everyone in the village",
    "They need fewer customers"
   ],
   "correct": 0,
   "explain": "Enough customers.",
   "tag": "Services"
  },
  {
   "q": "Where are hamlets in the hierarchy pyramid?",
   "options": [
    "Near the bottom",
    "At the top",
    "In the middle",
    "Not on the pyramid"
   ],
   "correct": 0,
   "explain": "Small, numerous.",
   "tag": "Theory"
  },
  {
   "q": "What would we expect in a larger village?",
   "options": [
    "More and varied services",
    "Fewer services overall, mainly temples",
    "Only low-order services",
    "No shops at all"
   ],
   "correct": 0,
   "explain": "Our hypothesis.",
   "tag": "Hypothesis"
  },
  {
   "q": "Low-order services have…",
   "options": [
    "A low threshold and short range",
    "A high threshold and long range",
    "No threshold at all",
    "A long range and high threshold"
   ],
   "correct": 0,
   "explain": "Used often, nearby.",
   "tag": "Services"
  }
 ]
};

window.SBL_LESSONS["IGRF03"] = {
 "id": "IGRF03",
 "topicNumber": 1,
 "topicTitle": "Planning the enquiry (IGCSE)",
 "title": "Planning: types of data, secondary research, equipment and risk",
 "href": "/igcse/geography/learn/rural-fieldwork/l03-data-types-equipment-and-risk",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Fieldwork: Data types, equipment and risk.",
 "checklist": [
  "I can explain the difference between primary and secondary data, with examples",
  "I can explain the difference between quantitative and qualitative data, with examples",
  "I can explain how secondary data helped our enquiry",
  "I can describe the equipment used and assess the risks of rural fieldwork"
 ],
 "quiz": [
  {
   "q": "Which is primary data?",
   "options": [
    "Our pedestrian count",
    "Census data from a government website",
    "A tourism website",
    "A newspaper report"
   ],
   "correct": 0,
   "explain": "Collected by us.",
   "tag": "Data types"
  },
  {
   "q": "Which is secondary data?",
   "options": [
    "Census data",
    "Our traffic count",
    "Our photographs",
    "Our interviews"
   ],
   "correct": 0,
   "explain": "Collected by others.",
   "tag": "Data types"
  },
  {
   "q": "Which is quantitative data?",
   "options": [
    "Traffic count",
    "Annotated photos",
    "Interview answers",
    "Field notes"
   ],
   "correct": 0,
   "explain": "Numbers.",
   "tag": "Data types"
  },
  {
   "q": "Which is qualitative data?",
   "options": [
    "Interview answers",
    "Pedestrian count",
    "Services tally",
    "Number of buildings"
   ],
   "correct": 0,
   "explain": "Words.",
   "tag": "Data types"
  },
  {
   "q": "What did census data tell us?",
   "options": [
    "The population of each village",
    "The number of cars passing in both directions",
    "The views of shopkeepers",
    "The weather that day"
   ],
   "correct": 0,
   "explain": "Settlement size.",
   "tag": "Secondary"
  },
  {
   "q": "Why use the tourism website?",
   "options": [
    "To learn the functions of each village",
    "To count the pedestrians in each village",
    "To measure traffic",
    "To draw the land use map"
   ],
   "correct": 0,
   "explain": "Background research.",
   "tag": "Secondary"
  },
  {
   "q": "What is a clicker used for?",
   "options": [
    "Counting pedestrians and traffic",
    "Measuring the gradient of the beach",
    "Taking photographs",
    "Measuring temperature"
   ],
   "correct": 0,
   "explain": "Tally counter.",
   "tag": "Equipment"
  },
  {
   "q": "Why use a timer?",
   "options": [
    "Counts last the same time",
    "To measure distances between villages",
    "To photograph buildings",
    "To find the population"
   ],
   "correct": 0,
   "explain": "Fair comparison.",
   "tag": "Equipment"
  },
  {
   "q": "How did we reduce the risk of traffic accidents?",
   "options": [
    "High-vis jackets and safe crossings",
    "Walking alone quickly",
    "Counting traffic while standing in the road",
    "Wearing sandals"
   ],
   "correct": 0,
   "explain": "Be visible.",
   "tag": "Risk"
  },
  {
   "q": "How did we reduce heat stroke risk?",
   "options": [
    "Sun cream, hats and shade breaks",
    "Working straight through the midday heat",
    "Wearing dark clothes",
    "Skipping water breaks"
   ],
   "correct": 0,
   "explain": "Thai heat.",
   "tag": "Risk"
  }
 ]
};

window.SBL_LESSONS["IGRF04"] = {
 "id": "IGRF04",
 "topicNumber": 1,
 "topicTitle": "Planning the enquiry (IGCSE)",
 "title": "Sampling: why and how we sample",
 "href": "/igcse/geography/learn/rural-fieldwork/l04-sampling",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Fieldwork: Sampling.",
 "checklist": [
  "I can explain what sampling is and why we sample",
  "I can describe random, systematic, stratified and convenience sampling",
  "I can explain which sampling techniques were used in our rural enquiry"
 ],
 "quiz": [
  {
   "q": "What is sampling?",
   "options": [
    "Investigating part to represent the whole",
    "Measuring every single item in the population",
    "Only using secondary data",
    "Drawing a land use map"
   ],
   "correct": 0,
   "explain": "Shortcut method.",
   "tag": "Sampling"
  },
  {
   "q": "Why do we sample?",
   "options": [
    "Not enough time or money to measure everything",
    "It is always more accurate than measuring everything",
    "It removes all bias completely",
    "Examiners require it"
   ],
   "correct": 0,
   "explain": "Practical limits.",
   "tag": "Sampling"
  },
  {
   "q": "Which method is unbiased?",
   "options": [
    "Random",
    "Convenience",
    "Choosing your favourite spots",
    "Asking only friends"
   ],
   "correct": 0,
   "explain": "Equal chance.",
   "tag": "Methods"
  },
  {
   "q": "Interviewing every 10th person is…",
   "options": [
    "Systematic",
    "Random",
    "Convenience",
    "Stratified"
   ],
   "correct": 0,
   "explain": "Regular interval.",
   "tag": "Methods"
  },
  {
   "q": "Five people from each age range is…",
   "options": [
    "Stratified",
    "Systematic",
    "Random",
    "Convenience"
   ],
   "correct": 0,
   "explain": "Groups.",
   "tag": "Methods"
  },
  {
   "q": "Interviewing whoever is available is…",
   "options": [
    "Convenience",
    "Systematic sampling",
    "Random",
    "Stratified"
   ],
   "correct": 0,
   "explain": "Easiest to access.",
   "tag": "Methods"
  },
  {
   "q": "What does random point sampling use?",
   "options": [
    "A grid and random number tables",
    "Every 10th house",
    "Only people who are willing to talk",
    "One site per village"
   ],
   "correct": 0,
   "explain": "Grid references.",
   "tag": "Methods"
  },
  {
   "q": "Which sampling did our timed traffic counts use?",
   "options": [
    "Systematic",
    "Random point",
    "Convenience only",
    "None at all"
   ],
   "correct": 0,
   "explain": "Regular time periods.",
   "tag": "Our enquiry"
  },
  {
   "q": "A limitation of convenience sampling is…",
   "options": [
    "It may be biased",
    "It needs random numbers",
    "It takes far too long",
    "It needs a clinometer"
   ],
   "correct": 0,
   "explain": "Not representative.",
   "tag": "Our enquiry"
  },
  {
   "q": "What is a sampling frame?",
   "options": [
    "The whole population sampled from",
    "A wooden quadrat used to measure plant cover",
    "A type of graph",
    "A camera setting"
   ],
   "correct": 0,
   "explain": "Parent population.",
   "tag": "Sampling"
  }
 ]
};

window.SBL_LESSONS["IGRF05"] = {
 "id": "IGRF05",
 "topicNumber": 2,
 "topicTitle": "Collecting the data (IGCSE)",
 "title": "Rural enquiry methods: how we collected the data",
 "href": "/igcse/geography/learn/rural-fieldwork/l05-data-collection-methods",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Fieldwork: Rural data collection methods.",
 "checklist": [
  "I can describe how each data collection method was carried out",
  "I can explain how each method helped to answer the enquiry question",
  "I can identify whether each method is quantitative or qualitative"
 ],
 "quiz": [
  {
   "q": "What did we record on the land use base map?",
   "options": [
    "The use of each building",
    "Wave heights at the beach",
    "Beach gradient",
    "Rainfall totals"
   ],
   "correct": 0,
   "explain": "Residential, commercial, public.",
   "tag": "Land use"
  },
  {
   "q": "Why does a land use map need a key?",
   "options": [
    "To show what each colour or letter means",
    "To lock the map away",
    "To measure the distances between all buildings",
    "To count traffic"
   ],
   "correct": 0,
   "explain": "Clear data.",
   "tag": "Land use"
  },
  {
   "q": "What did the services tally record?",
   "options": [
    "High-order, low-order and other services",
    "Pedestrians and traffic in both directions",
    "Interview answers",
    "Population figures"
   ],
   "correct": 0,
   "explain": "Numbers of services.",
   "tag": "Tally"
  },
  {
   "q": "How long was each traffic count?",
   "options": [
    "A fixed time, e.g. 2 minutes",
    "As long as each person liked",
    "A whole day",
    "One hour each time"
   ],
   "correct": 0,
   "explain": "Same timeframe.",
   "tag": "Counts"
  },
  {
   "q": "Why give each group member a role?",
   "options": [
    "To count accurately and fairly",
    "To finish quickly and get back on the bus",
    "To avoid using a timer",
    "To make data qualitative"
   ],
   "correct": 0,
   "explain": "Timer and counters.",
   "tag": "Counts"
  },
  {
   "q": "What would we expect in a larger village?",
   "options": [
    "More pedestrians and traffic",
    "Fewer pedestrians and less traffic",
    "No traffic at all",
    "Fewer services"
   ],
   "correct": 0,
   "explain": "Bigger sphere of influence.",
   "tag": "Counts"
  },
  {
   "q": "How many people did we interview per village?",
   "options": [
    "At least 2",
    "Exactly 50",
    "None",
    "Only 1 in total"
   ],
   "correct": 0,
   "explain": "Shopkeepers, owners.",
   "tag": "Interviews"
  },
  {
   "q": "What question tests sphere of influence?",
   "options": [
    "Where do your customers come from?",
    "What colour is your shop painted inside?",
    "What time is it?",
    "How tall is the building?"
   ],
   "correct": 0,
   "explain": "Customers’ origins.",
   "tag": "Interviews"
  },
  {
   "q": "Annotated photographs are…",
   "options": [
    "Qualitative",
    "Quantitative",
    "Secondary",
    "Statistical"
   ],
   "correct": 0,
   "explain": "Descriptive.",
   "tag": "Photos"
  },
  {
   "q": "What did we record with each photo?",
   "options": [
    "Weather and time of day",
    "Wave frequency at the coast",
    "Census data",
    "Beach width"
   ],
   "correct": 0,
   "explain": "Context.",
   "tag": "Photos"
  }
 ]
};

window.SBL_LESSONS["IGRF06"] = {
 "id": "IGRF06",
 "topicNumber": 3,
 "topicTitle": "Presenting, analysing and evaluating (IGCSE)",
 "title": "Presenting rural fieldwork data",
 "href": "/igcse/geography/learn/rural-fieldwork/l06-presenting-data",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Fieldwork: Presenting rural data.",
 "checklist": [
  "I can describe the techniques used to present our data",
  "I can choose appropriate techniques for different types of data",
  "I can evaluate the strengths and limitations of each technique"
 ],
 "quiz": [
  {
   "q": "What do pie charts and divided bars show?",
   "options": [
    "Proportions or percentages",
    "Exact locations of every shop",
    "Changes over time",
    "Interview opinions"
   ],
   "correct": 0,
   "explain": "Parts of a whole.",
   "tag": "Techniques"
  },
  {
   "q": "How do you convert a percentage to degrees?",
   "options": [
    "Multiply by 3.6",
    "Divide by 3.6",
    "Multiply by 100",
    "Add 360"
   ],
   "correct": 0,
   "explain": "100% = 360°.",
   "tag": "Techniques"
  },
  {
   "q": "A limitation of pie charts here is…",
   "options": [
    "They hide the actual numbers",
    "They show the exact locations of every village",
    "They need a word cloud",
    "They need random sampling"
   ],
   "correct": 0,
   "explain": "Proportions only.",
   "tag": "Evaluate"
  },
  {
   "q": "What do proportional symbols maps show?",
   "options": [
    "Data and location together",
    "Only the words used in interviews",
    "Only percentages",
    "Only photographs"
   ],
   "correct": 0,
   "explain": "Sized symbols.",
   "tag": "Techniques"
  },
  {
   "q": "What should be proportional to the value?",
   "options": [
    "The circle area",
    "The circle radius",
    "The circle colour",
    "The label size"
   ],
   "correct": 0,
   "explain": "Use square roots.",
   "tag": "Techniques"
  },
  {
   "q": "A limitation of proportional symbols is…",
   "options": [
    "Symbols can overlap",
    "They need no data",
    "They are always qualitative",
    "They show no location"
   ],
   "correct": 0,
   "explain": "Hard to read.",
   "tag": "Evaluate"
  },
  {
   "q": "Which presents qualitative interview data?",
   "options": [
    "Word cloud",
    "Divided bar graph",
    "Proportional symbols map",
    "Pie chart of traffic"
   ],
   "correct": 0,
   "explain": "Word frequency.",
   "tag": "Techniques"
  },
  {
   "q": "What does word size show in a word cloud?",
   "options": [
    "How often it was mentioned",
    "How important the speaker was",
    "The age of the speaker",
    "The village size"
   ],
   "correct": 0,
   "explain": "Frequency.",
   "tag": "Techniques"
  },
  {
   "q": "A limitation of annotated photos is…",
   "options": [
    "They can be selective",
    "They show numbers exactly",
    "They need a clicker",
    "They show every building"
   ],
   "correct": 0,
   "explain": "Photographer chooses.",
   "tag": "Evaluate"
  },
  {
   "q": "Best way to compare services in 3 villages side by side?",
   "options": [
    "Divided bar graphs",
    "A word cloud of interviews",
    "One photograph",
    "A risk assessment"
   ],
   "correct": 0,
   "explain": "Same-length bars.",
   "tag": "Choose"
  }
 ]
};

window.SBL_LESSONS["IGRF07"] = {
 "id": "IGRF07",
 "topicNumber": 3,
 "topicTitle": "Presenting, analysing and evaluating (IGCSE)",
 "title": "Analysis, conclusions and evaluation",
 "href": "/igcse/geography/learn/rural-fieldwork/l07-analysis-conclusions-evaluation",
 "syllabusFocus": "Edexcel IGCSE Geography, Paper 2: Human Geography — Rural Fieldwork: Analysis, conclusions and evaluation.",
 "checklist": [
  "I can describe and explain patterns and anomalies in the rural data",
  "I can draw a conclusion and accept or reject the hypothesis",
  "I can evaluate the reliability and accuracy of the enquiry and suggest improvements and extensions"
 ],
 "quiz": [
  {
   "q": "What does GCSE A stand for when describing?",
   "options": [
    "General, specific, anomaly",
    "Graph, scale, axis",
    "Group, sample, average, accuracy",
    "Gradient, sand, area"
   ],
   "correct": 0,
   "explain": "Describing framework.",
   "tag": "Analysis"
  },
  {
   "q": "What is an anomaly?",
   "options": [
    "A result that does not fit the pattern",
    "The average of all the results",
    "The most common result",
    "A result that proves the hypothesis is correct"
   ],
   "correct": 0,
   "explain": "Must be explained.",
   "tag": "Analysis"
  },
  {
   "q": "Why might a small village have many services?",
   "options": [
    "Tourists or a main road",
    "It has a low population",
    "It has no visitors",
    "It has no road"
   ],
   "correct": 0,
   "explain": "Extra customers.",
   "tag": "Anomalies"
  },
  {
   "q": "Why are high-order services only in larger villages?",
   "options": [
    "They need a larger threshold",
    "They need fewer customers to survive",
    "They are used every day",
    "They have a short range"
   ],
   "correct": 0,
   "explain": "Theory.",
   "tag": "Explain"
  },
  {
   "q": "What must a conclusion do?",
   "options": [
    "Answer the enquiry question",
    "List all of the equipment used",
    "Repeat the risk assessment",
    "Describe the bus journey"
   ],
   "correct": 0,
   "explain": "With evidence.",
   "tag": "Conclusions"
  },
  {
   "q": "Which finding supports the hypothesis?",
   "options": [
    "The largest village had most services",
    "Two villages had exactly the same services",
    "A small village had most shops",
    "No village had services"
   ],
   "correct": 0,
   "explain": "Size vs services.",
   "tag": "Conclusions"
  },
  {
   "q": "Why is a 2-minute count a limitation?",
   "options": [
    "It is only a snapshot",
    "It is too accurate",
    "It uses a clicker",
    "It is qualitative data only"
   ],
   "correct": 0,
   "explain": "May not be representative.",
   "tag": "Evaluation"
  },
  {
   "q": "How could counts be made more reliable?",
   "options": [
    "Repeat at different times and average",
    "Count for only 10 seconds each time we visit",
    "Count only once",
    "Stop using a timer"
   ],
   "correct": 0,
   "explain": "Repeat and mean.",
   "tag": "Evaluation"
  },
  {
   "q": "What is reliability?",
   "options": [
    "Same results if repeated",
    "Closeness to the true value",
    "Speed of data collection",
    "Number of graphs drawn"
   ],
   "correct": 0,
   "explain": "Repeatability.",
   "tag": "Evaluation"
  },
  {
   "q": "Which would extend the study?",
   "options": [
    "Visiting more villages and a town",
    "Using fewer villages and only one site",
    "Deleting anomalies",
    "Removing the hypothesis"
   ],
   "correct": 0,
   "explain": "Wider hierarchy.",
   "tag": "Evaluation"
  }
 ]
};
