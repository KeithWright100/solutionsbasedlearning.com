/* ============================================================
   SBL Geography Tutor — Option A: Freshwater
   (Paper 1, Optional Themes) lesson configurations.
   Same reusable tutor engine (sbl-teach-bot.js) as other units.
   Hrefs and titles copied verbatim from sbl-sidebar.js
   "Option A: Freshwater" (option-a) navigation data.

   IMPORTANT: Freshwater is its own optional theme, separate from
   Population/Climate/Resource Consumption (Paper 1 Core) and from
   Food and Health (Option F). This file defines its OWN separate
   lesson order, SBL_FW_LESSON_ORDER, so Spaced Retrieval for
   Freshwater is a distinct pool and does NOT get concatenated onto
   any other unit's lesson order. Pages in this theme should only
   include this lesson file.

   Lesson IDs: FW01-FW16, short numeric, matching the sidebar's
   4 topics x 4 lessons structure (Topic 1: Drainage basin
   hydrology and geomorphology, Topic 2: Flooding and flood
   mitigation, Topic 3: Water scarcity and water quality, Topic 4:
   Water management futures).

   BUILD STATUS: Topic 1 (FW01-FW04) complete. FW01's feedback-loop
   content and FW02's Bradshaw/Schumm model pointer and FW03's
   Hjulstrom-curve questions were provided by the course teacher;
   FW04 built from established IB Freshwater syllabus content.
   Topics 2-4 (FW05-FW16) still pending.
   ============================================================ */
window.SBL_LESSONS = window.SBL_LESSONS || {};
window.SBL_FW_LESSON_ORDER = [
  'FW01', 'FW02', 'FW03', 'FW04'
];

window.SBL_LESSONS.FW01 = {
  id: 'FW01',
  topicNumber: 1,
  topicTitle: 'Drainage basin hydrology and geomorphology',
  title: 'The drainage basin system',
  href: '/geography/paper-1/option-a/t1-drainage-basin/l1-the-drainage',
  syllabusFocus: 'The drainage basin as an open system: inputs, outputs, stores and flows/transfers; the concept of dynamic equilibrium; positive and negative feedback loops within the system, and how humans alter these feedback loops (dams, water abstraction, deforestation).',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of the drainage basin as a system' },
    { label: 'What is a system?', request: 'Explain the concept of a system, including open and closed systems' },
    { label: 'Inputs, outputs, stores, flows', request: 'Explain the inputs, outputs, stores and flows of the drainage basin system' },
    { label: 'Feedback loops', request: 'Explain what feedback loops are in the context of a drainage basin' },
    { label: 'Positive vs negative feedback', request: 'Explain the difference between positive and negative feedback' },
    { label: 'How humans alter feedback loops', request: 'Explain how humans can alter feedback loops in a drainage basin' },
    { label: 'Dynamic equilibrium', request: 'Explain what is meant by dynamic equilibrium in a drainage basin system' },
    { label: 'Key terms', request: 'Define the key terms for the drainage basin system: input, output, store, flow, system, feedback' }
  ],
  checklist: [
    'I can define a system, including open and closed systems.',
    'I can identify the inputs to a drainage basin.',
    'I can identify the outputs from a drainage basin.',
    'I can identify the stores within a drainage basin.',
    'I can identify the flows/transfers within a drainage basin.',
    'I can define the term feedback loop.',
    'I can distinguish between positive and negative feedback.',
    'I can explain how humans alter feedback loops.',
    'I can explain the concept of dynamic equilibrium.'
  ],
  readinessQuestions: [
    'Define the term feedback loop.',
    'What is the difference between positive and negative feedback?',
    'List two ways in which humans can alter feedback loops in a drainage basin.',
    'What is meant by describing the drainage basin as an ‘open system’?',
    'Name two stores and two flows within the drainage basin system.'
  ],
  quiz: [
    { q: 'A drainage basin is best described as an open system because:', options: ['It has no inputs or outputs', 'Energy and matter (water and sediment) can cross its boundary', 'It never changes over time', 'It only exists in humid climates'], correct: 1, explain: 'An open system allows both energy and matter to enter and leave across its boundary; a drainage basin receives precipitation as an input and loses water as evapotranspiration and channel flow as outputs.', misconception: 'Open and closed systems are sometimes confused; a closed system allows energy but not matter to cross its boundary, whereas an open system like a drainage basin allows both.', tag: 'What is a system?' },
    { q: 'Which of the following is the main input to a drainage basin system?', options: ['Evapotranspiration', 'Precipitation', 'River discharge', 'Infiltration'], correct: 1, explain: 'Precipitation (rainfall, snowfall) is the principal input of water into a drainage basin system.', misconception: 'Infiltration and evapotranspiration are flows and outputs within the system, not the input that starts the whole process.', tag: 'Inputs, outputs, stores, flows' },
    { q: 'Which of these is a store within the drainage basin system?', options: ['Overland flow', 'Groundwater storage', 'Precipitation', 'Channel flow'], correct: 1, explain: 'Stores hold water within the system for a period of time; groundwater storage (in the water table/aquifer) is a key store, alongside interception, surface/depression storage and soil moisture storage.', misconception: 'Flows (like overland flow and channel flow) move water between stores, while stores hold water in place; these two categories are often mixed up.', tag: 'Inputs, outputs, stores, flows' },
    { q: 'Throughflow refers to the:', options: ['Vertical movement of water through soil to groundwater', 'Lateral movement of water through the soil, roughly parallel to the surface', 'Direct evaporation of water from a river channel', 'Movement of water over a completely saturated or impermeable surface'], correct: 1, explain: 'Throughflow is the lateral (sideways) movement of water through the soil, roughly parallel to the slope, moving downslope towards the channel.', misconception: 'Throughflow (through the soil) is often confused with percolation (movement down into groundwater) or overland flow (movement over the surface); each describes a different pathway.', tag: 'Inputs, outputs, stores, flows' },
    { q: 'A feedback loop in a drainage basin system occurs when:', options: ['The system stays completely unchanged forever', 'A change to one part of the system triggers a response that affects the system further', 'Water leaves the system permanently with no further effect', 'Two drainage basins merge into one'], correct: 1, explain: 'A feedback loop occurs when a change to one part of the system (for example, an increase in precipitation) triggers a response elsewhere in the system, which can then amplify or counteract the original change.', misconception: 'Feedback is sometimes thought of as simply "what happens next", when it specifically describes a response that loops back to affect the original process.', tag: 'Feedback loops' },
    { q: 'Positive feedback in a drainage basin system:', options: ['Reduces the original change and restores balance', 'Amplifies the original change, increasing instability', 'Has no effect on the system', 'Only ever refers to human actions'], correct: 1, explain: 'Positive feedback amplifies or reinforces the original change; for example, an increase in precipitation increasing surface runoff, which further erodes soil and increases runoff again.', misconception: '"Positive" feedback is sometimes assumed to mean "good" feedback, when in a systems sense it actually means feedback that amplifies change, which can be destabilising.', tag: 'Positive vs negative feedback' },
    { q: 'Negative feedback in a drainage basin system:', options: ['Amplifies the original change', 'Counteracts the original change, helping the system return towards equilibrium', 'Always increases flood risk', 'Only occurs in desert climates'], correct: 1, explain: 'Negative feedback counteracts or dampens the original change, helping the system move back towards a state of dynamic equilibrium (balance).', misconception: '"Negative" feedback is sometimes assumed to mean "bad" or harmful feedback, when it actually describes a stabilising response that restores balance.', tag: 'Positive vs negative feedback' },
    { q: 'Which of the following is an example of a human alteration of a feedback loop in a drainage basin?', options: ['A volcanic eruption changing rock type', 'Building a dam to control the amount of water released downstream', 'A meteor impact', 'Continental drift'], correct: 1, explain: 'Humans can alter feedback loops by changing the amount of water released from dams, changing the amount of water abstracted for use, or increasing runoff through deforestation, all of which change how the system responds to inputs.', misconception: 'Feedback loops are sometimes thought of as purely natural, when human actions such as dam operation, water abstraction and deforestation directly alter how a drainage basin system responds to change.', tag: 'How humans alter feedback loops' },
    { q: 'Deforestation is likely to alter a drainage basin’s feedback loops by:', options: ['Decreasing surface runoff and increasing infiltration', 'Increasing surface runoff as interception and infiltration are reduced', 'Having no effect on runoff', 'Only affecting the drainage basin’s outputs, never its flows'], correct: 1, explain: 'Removing vegetation reduces interception and root-assisted infiltration, so a larger proportion of precipitation becomes surface runoff (overland flow), which can amplify flood risk — an example of positive feedback triggered by human activity.', misconception: 'It is sometimes assumed vegetation removal has little hydrological effect; in reality it significantly increases surface runoff by reducing interception and infiltration.', tag: 'How humans alter feedback loops' },
    { q: 'Dynamic equilibrium in a drainage basin system means:', options: ['The system never changes at all', 'The system tends towards a state of balance between inputs and outputs, even though it may fluctuate in the short term', 'Inputs always exceed outputs permanently', 'The system has stopped functioning'], correct: 1, explain: 'Dynamic equilibrium describes a system that tends towards a balance between its inputs and outputs over time, even though short-term fluctuations (such as a storm event) can temporarily disturb that balance before the system readjusts.', misconception: 'Equilibrium is sometimes taken to mean total stability with no change, when dynamic equilibrium specifically allows for short-term fluctuation around a long-term balance.', tag: 'Dynamic equilibrium' }
  ]
};

window.SBL_LESSONS.FW02 = {
  id: 'FW02',
  topicNumber: 1,
  topicTitle: 'Drainage basin hydrology and geomorphology',
  title: 'Discharge',
  href: '/geography/paper-1/option-a/t1-drainage-basin/l2-discharge',
  syllabusFocus: 'River discharge and its measurement (Q = A × V); factors affecting discharge, including precipitation, drainage basin size and shape, rock type and permeability, land use, and relief; the Bradshaw model of downstream changes in channel and valley characteristics; Schumm’s model of channel classification (straight, meandering and braided patterns) related to sediment load, discharge and channel stability.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of river discharge and the models used to describe channel change' },
    { label: 'What is discharge?', request: 'Explain what river discharge is and how it is measured' },
    { label: 'Factors affecting discharge', request: 'Explain the factors that affect river discharge' },
    { label: 'The Bradshaw model', request: 'Explain the Bradshaw model of downstream changes in a river' },
    { label: 'The Schumm model', request: 'Explain Schumm’s model of channel classification' },
    { label: 'Straight, meandering, braided', request: 'Explain the difference between straight, meandering and braided channel patterns' },
    { label: 'Basin size and shape', request: 'Explain how drainage basin size and shape affect discharge' },
    { label: 'Land use and discharge', request: 'Explain how land use affects river discharge' }
  ],
  checklist: [
    'I can define discharge and its formula (Q = A × V).',
    'I can explain how precipitation affects discharge.',
    'I can explain how drainage basin size and shape affect discharge.',
    'I can explain how rock type and permeability affect discharge.',
    'I can explain how land use affects discharge.',
    'I can explain how relief affects discharge.',
    'I can describe the Bradshaw model of downstream change.',
    'I can describe Schumm’s model of channel classification.',
    'I can compare straight, meandering and braided channel patterns.'
  ],
  readinessQuestions: [
    'What is the formula for calculating river discharge?',
    'Give two factors that affect river discharge.',
    'According to the Bradshaw model, how does channel width typically change from source to mouth?',
    'What does Schumm’s model classify rivers by?',
    'What is the difference between a meandering and a braided channel?'
  ],
  quiz: [
    { q: 'River discharge is calculated using the formula:', options: ['Discharge = Velocity ÷ Area', 'Discharge = Cross-sectional area × Velocity', 'Discharge = Width + Depth', 'Discharge = Gradient × Load'], correct: 1, explain: 'Discharge (Q) is calculated as the cross-sectional area of the channel (A) multiplied by the velocity of the flow (V), giving a volume of water passing a point per second (cumecs, m³/s).', misconception: 'Discharge is sometimes confused with velocity alone; discharge specifically combines the size of the channel (area) with how fast the water is moving.', tag: 'What is discharge?' },
    { q: 'A drainage basin with a circular shape, compared to an elongated one of the same area, will typically produce:', options: ['A lower, more delayed peak discharge', 'A higher, faster peak discharge, as water reaches the channel from all directions in a similar time', 'No difference in discharge', 'Discharge only during winter'], correct: 1, explain: 'In a circular basin, tributaries are of similar length, so water tends to reach the main channel at roughly the same time, producing a higher and faster peak discharge than in an elongated basin.', misconception: 'Basin shape is sometimes overlooked as a factor; circular basins concentrate flow more quickly than elongated basins of the same area.', tag: 'Factors affecting discharge' },
    { q: 'Impermeable rock (such as granite) tends to increase discharge because it:', options: ['Absorbs large amounts of water, reducing runoff', 'Prevents infiltration, increasing surface runoff into the channel', 'Has no effect on the speed of water reaching the channel', 'Only affects groundwater storage'], correct: 1, explain: 'Impermeable rock does not allow water to infiltrate, so a greater proportion of precipitation becomes surface runoff, reaching the channel more quickly and increasing discharge.', misconception: 'Permeable and impermeable rock effects are sometimes reversed in students’ minds; impermeable rock increases runoff and discharge, while permeable rock allows infiltration and reduces it.', tag: 'Factors affecting discharge' },
    { q: 'Urbanisation (increased impermeable surfaces such as roads and roofs) tends to:', options: ['Decrease and delay peak discharge', 'Increase and speed up peak discharge, raising flood risk', 'Have no measurable effect on a river’s hydrology', 'Only affect groundwater storage'], correct: 1, explain: 'Impermeable surfaces such as tarmac and roofing prevent infiltration and are often connected to drains that quickly channel water to the river, increasing and speeding up peak discharge.', misconception: 'Land use change is sometimes seen as a minor factor, but urbanisation is one of the most significant human causes of increased flood risk through its effect on discharge.', tag: 'Factors affecting discharge' },
    { q: 'According to the Bradshaw model, as a river moves from its source to its mouth, discharge typically:', options: ['Decreases steadily', 'Increases, as tributaries add water to the main channel', 'Stays exactly the same', 'Fluctuates randomly with no overall trend'], correct: 1, explain: 'The Bradshaw model shows discharge increasing downstream as tributaries join the main channel and the drainage basin area contributing water increases.', misconception: 'Some variables in the Bradshaw model increase downstream (discharge, width, depth, velocity, load quantity) while others decrease (gradient, load particle size, roughness); it is easy to mix these up.', tag: 'The Bradshaw model' },
    { q: 'According to the Bradshaw model, channel bed roughness typically:', options: ['Increases from source to mouth', 'Decreases from source to mouth, as sediment becomes smaller and better sorted', 'Stays constant throughout the river’s course', 'Is unrelated to sediment size'], correct: 1, explain: 'Bed roughness decreases downstream in the Bradshaw model, as large, angular boulders in the upper course give way to smaller, smoother, better-sorted sediment further downstream, reducing friction.', misconception: 'Roughness and gradient are two of the variables that decrease downstream in the Bradshaw model, which is often the part of the model students find counter-intuitive.', tag: 'The Bradshaw model' },
    { q: 'Schumm’s model classifies river channels into three main patterns based on sediment load and stability:', options: ['Upper, middle and lower course', 'Straight, meandering and braided', 'Erosional, transitional and depositional', 'Permeable, impermeable and semi-permeable'], correct: 1, explain: 'Schumm’s model classifies channel patterns as straight, meandering or braided, based on factors including sediment load, discharge, gradient and bank stability.', misconception: 'Schumm’s channel classification is sometimes confused with the Bradshaw model of downstream change; Schumm’s model is specifically about channel pattern (straight/meandering/braided), not the full set of downstream variables.', tag: 'The Schumm model' },
    { q: 'A braided channel, in Schumm’s classification, is typically associated with:', options: ['A single, stable, low-sediment channel', 'A high sediment load relative to discharge, causing the channel to split around mid-channel bars', 'The lowest possible gradient found anywhere on a river', 'Only occurring in the lower course of a river'], correct: 1, explain: 'Braided channels form where sediment supply is high relative to the river’s capacity to transport it, causing deposition of mid-channel bars that split the flow into multiple smaller channels.', misconception: 'Braided channels are sometimes assumed to only occur in a river’s lower course, when they commonly form in steep, sediment-rich upper courses such as glacial meltwater or mountain rivers.', tag: 'Straight, meandering, braided' },
    { q: 'A meandering channel pattern tends to develop where:', options: ['Sediment load is very high relative to discharge', 'There is a moderate, well-sorted sediment load and the channel has the energy to erode its banks and form bends', 'The channel is perfectly straight with no bank erosion', 'The river has no sediment at all'], correct: 1, explain: 'Meandering channels typically develop where sediment load is moderate and well-sorted, and the river has sufficient energy to erode its outer banks and deposit on inner banks, creating a sinuous course.', misconception: 'Meandering is sometimes assumed to be the "default" pattern for all rivers; in Schumm’s model it is one of three distinct patterns linked to specific sediment and discharge conditions.', tag: 'Straight, meandering, braided' },
    { q: 'Which factor is LEAST likely to directly affect a river’s discharge?', options: ['Precipitation amount and intensity', 'Rock type and permeability', 'The colour of the water', 'Land use within the drainage basin'], correct: 2, explain: 'Discharge is affected by physical and human factors such as precipitation, geology, relief, basin shape and land use; the colour of the water is not a factor affecting the volume of water flowing through the channel.', misconception: 'This checks that students can distinguish genuine controlling factors on discharge from superficial or irrelevant characteristics of a river.', tag: 'Factors affecting discharge' }
  ]
};

window.SBL_LESSONS.FW03 = {
  id: 'FW03',
  topicNumber: 1,
  topicTitle: 'Drainage basin hydrology and geomorphology',
  title: 'Erosion, transportation and deposition',
  href: '/geography/paper-1/option-a/t1-drainage-basin/l3-erosion',
  syllabusFocus: 'Fluvial processes of erosion (hydraulic action, abrasion, attrition, solution), transportation (traction, saltation, suspension, solution) and deposition; the Hjulström curve and the relationship between stream velocity, particle size and erosion, transport and deposition thresholds; the concepts of river competence and capacity.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of erosion, transportation and deposition in rivers' },
    { label: 'Processes of erosion', request: 'Explain the four processes of river erosion' },
    { label: 'Processes of transportation', request: 'Explain the four processes of river transportation' },
    { label: 'Why deposition happens', request: 'Explain why and where rivers deposit sediment' },
    { label: 'The Hjulström curve', request: 'Explain what the Hjulström curve shows' },
    { label: 'Reading the Hjulström curve', request: 'Help me read and interpret the Hjulström curve graph' },
    { label: 'Competence', request: 'Define the term competence in the context of river transport' },
    { label: 'Capacity', request: 'Define the term capacity in the context of river transport' }
  ],
  checklist: [
    'I can name and explain the four processes of erosion.',
    'I can name and explain the four processes of transportation.',
    'I can explain why and where deposition occurs.',
    'I can describe what the Hjulström curve graph shows.',
    'I can read and interpret the Hjulström curve.',
    'I can define the term competence.',
    'I can define the term capacity.',
    'I can explain the relationship between velocity and particle size using the curve.'
  ],
  readinessQuestions: [
    'Name the four processes of river erosion.',
    'Name the four processes of river transportation.',
    'Describe what the relationship shown in the Hjulström curve graph is.',
    'Define the term competence.',
    'Define the term capacity.'
  ],
  quiz: [
    { q: 'Hydraulic action, as a process of river erosion, refers to:', options: ['Rocks carried by the river wearing down the bed and banks', 'The sheer force and pressure of moving water breaking away and removing material from the bed and banks', 'Rock dissolving in slightly acidic river water', 'Rock particles wearing each other down through collision'], correct: 1, explain: 'Hydraulic action is the sheer force of moving water, including the pressure of air trapped in cracks being compressed and released, breaking away and removing material from the channel bed and banks.', misconception: 'Hydraulic action is often confused with abrasion; hydraulic action is the force of the water itself, while abrasion involves the river’s load wearing down the bed and banks.', tag: 'Processes of erosion' },
    { q: 'Abrasion (also called corrasion) is the process by which:', options: ['Water dissolves soluble rock such as limestone', 'Sediment carried by the river wears away the bed and banks like sandpaper', 'Transported particles collide with and wear down each other', 'The river’s own force alone erodes the channel'], correct: 1, explain: 'Abrasion (corrasion) occurs when sediment being transported by the river scrapes and wears away the bed and banks of the channel, similar to the effect of sandpaper.', misconception: 'Abrasion is sometimes confused with attrition; abrasion wears down the channel itself, while attrition wears down the transported particles against each other.', tag: 'Processes of erosion' },
    { q: 'Attrition refers to the process by which:', options: ['The river channel bed is worn down by transported sediment', 'Transported particles collide with each other, becoming smaller, smoother and more rounded', 'Soluble rock is dissolved by the river', 'Sediment is deposited when the river loses energy'], correct: 1, explain: 'Attrition is the process by which particles of sediment being transported collide with one another, breaking down into smaller, smoother, more rounded fragments over time.', misconception: 'Attrition affects the sediment load itself (making particles smaller and rounder), which is a common point of confusion with abrasion, which affects the channel bed and banks.', tag: 'Processes of erosion' },
    { q: 'Solution, as a process of river erosion, involves:', options: ['Physical wearing down of the channel bed by sediment', 'The chemical dissolving of soluble rock, such as limestone or chalk, by slightly acidic river water', 'Particles colliding with each other', 'The force of moving water alone'], correct: 1, explain: 'Solution is a chemical process in which soluble rock types, such as limestone or chalk, are dissolved by slightly acidic river water.', misconception: 'Solution is the only erosional process that is chemical rather than physical/mechanical, which is a useful distinction to remember.', tag: 'Processes of erosion' },
    { q: 'Traction, as a process of river transportation, describes:', options: ['Fine particles carried within the flow of the water', 'Large, heavy particles such as boulders being rolled or dragged along the river bed', 'Dissolved material carried in solution', 'Small particles bouncing along the river bed'], correct: 1, explain: 'Traction is the rolling or dragging of the largest, heaviest particles (such as boulders and pebbles) along the river bed, requiring high energy/velocity to occur.', misconception: 'Traction and saltation are both bedload processes and are often confused; traction involves continuous rolling/dragging, while saltation involves bouncing.', tag: 'Processes of transportation' },
    { q: 'Saltation, as a process of river transportation, describes:', options: ['Material dissolved in the water', 'Small pebbles and coarse sand bouncing/hopping along the river bed', 'Fine sediment suspended within the body of the flow', 'Large boulders being permanently deposited'], correct: 1, explain: 'Saltation is the bouncing or hopping movement of small pebbles and coarse sand along the river bed, as they are briefly lifted by the flow before settling again.', misconception: 'Students often mix up saltation (bouncing) with suspension (floating within the flow); saltation particles repeatedly touch the bed, suspended particles do not.', tag: 'Processes of transportation' },
    { q: 'Suspension, as a process of river transportation, refers to:', options: ['Large boulders rolling along the bed', 'Fine sediment, such as silt and clay, carried within the body of the flowing water', 'Soluble material dissolved in the water', 'Sediment that has stopped moving entirely'], correct: 1, explain: 'Suspension is the transport of fine sediment (silt and clay) held within the body of the water itself, rather than along the bed, and is usually the largest part of a river’s total load by volume.', misconception: 'Suspended load is often the largest component of a river’s total sediment load, which surprises students who assume the bedload (traction and saltation) dominates.', tag: 'Processes of transportation' },
    { q: 'Deposition occurs when a river:', options: ['Gains energy and velocity', 'Loses energy/velocity, so it can no longer transport all of its sediment load', 'Erodes its banks more aggressively', 'Enters a narrow, steep gorge'], correct: 1, explain: 'Deposition occurs when a river loses energy or velocity — for example, on entering a lake or sea, on the inside of a meander bend, or during a flood as water spreads across a floodplain — so it can no longer carry all of its sediment load.', misconception: 'Deposition is sometimes seen as the "opposite" of erosion happening at random; it specifically occurs where and when the river’s energy drops below what is needed to keep sediment moving.', tag: 'Why deposition happens' },
    { q: 'The Hjulström curve shows the relationship between:', options: ['River discharge and drainage basin area', 'Stream velocity and particle size, and the thresholds for erosion, transportation and deposition', 'Channel width and channel depth', 'Rainfall intensity and infiltration rate'], correct: 1, explain: 'The Hjulström curve is a graph showing the relationship between stream velocity and sediment particle size, identifying the velocity thresholds at which particles of different sizes are eroded, transported or deposited.', misconception: 'The Hjulström curve is sometimes confused with the Bradshaw model; the Hjulström curve is specifically about velocity and particle size thresholds, not the full set of downstream channel changes.', tag: 'The Hjulström curve' },
    { q: 'According to the Hjulström curve, very fine clay particles require a surprisingly HIGH velocity to be eroded because:', options: ['Clay particles are actually very large and heavy', 'Clay particles are cohesive and stick together, resisting erosion despite their small size', 'The graph is inaccurate for fine sediment', 'Clay only exists in fast-flowing mountain streams'], correct: 1, explain: 'Fine clay particles are cohesive — they stick together — which means a higher velocity is needed to erode and lift them than the curve would otherwise suggest based on size alone, a well-known feature of the Hjulström curve.', misconception: 'It is a common misconception that erosion velocity simply increases with particle size throughout; the Hjulström curve’s upward turn for very fine, cohesive clay is often the trickiest part of the graph to interpret.', tag: 'Reading the Hjulström curve' }
  ]
};

window.SBL_LESSONS.FW04 = {
  id: 'FW04',
  topicNumber: 1,
  topicTitle: 'Drainage basin hydrology and geomorphology',
  title: 'River landforms',
  href: '/geography/paper-1/option-a/t1-drainage-basin/l4-river-landforms',
  syllabusFocus: 'Erosional landforms (V-shaped valleys, interlocking spurs, waterfalls and gorges, potholes, river cliffs) and depositional landforms (levees, floodplains, point bars, deltas), and how these landforms relate to changing energy, sediment load and channel processes along a river’s course.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of erosional and depositional river landforms' },
    { label: 'V-shaped valleys and interlocking spurs', request: 'Explain how V-shaped valleys and interlocking spurs form' },
    { label: 'Waterfalls and gorges', request: 'Explain how waterfalls and gorges form' },
    { label: 'Potholes', request: 'Explain how potholes form in a river channel' },
    { label: 'Meanders', request: 'Explain how meanders form, including erosion and deposition' },
    { label: 'Floodplains and levees', request: 'Explain how floodplains and levees form' },
    { label: 'Deltas', request: 'Explain how river deltas form' },
    { label: 'Upper, middle, lower course landforms', request: 'Explain which landforms are typically found in the upper, middle and lower course of a river' }
  ],
  checklist: [
    'I can explain how V-shaped valleys and interlocking spurs form.',
    'I can explain how waterfalls and gorges form.',
    'I can explain how potholes form.',
    'I can explain how meanders form.',
    'I can explain how floodplains form.',
    'I can explain how levees form.',
    'I can explain how deltas form.',
    'I can link specific landforms to the upper, middle and lower course of a river.'
  ],
  readinessQuestions: [
    'Explain how a waterfall forms.',
    'Explain how a meander forms.',
    'Explain how a floodplain forms.',
    'Explain how a levee forms.',
    'Name one landform typically found in the upper course and one typically found in the lower course of a river.'
  ],
  quiz: [
    { q: 'V-shaped valleys and interlocking spurs are typically found in a river’s:', options: ['Lower course, where deposition dominates', 'Upper course, where vertical erosion dominates', 'Estuary, where tidal processes dominate', 'Middle course only'], correct: 1, explain: 'In the upper course, rivers have high energy relative to their load and erode vertically (downwards), cutting a V-shaped valley; interlocking spurs form as the river winds around areas of harder, resistant rock.', misconception: 'Landform location along a river’s course is often mixed up; V-shaped valleys and interlocking spurs are specifically upper-course, erosion-dominated landforms.', tag: 'V-shaped valleys and interlocking spurs' },
    { q: 'A waterfall commonly forms where:', options: ['Soft rock lies upstream of hard rock, with no vertical erosion', 'A band of hard, resistant rock lies over softer, less resistant rock, which erodes faster to leave a step', 'A river reaches the sea', 'A river channel becomes perfectly straight'], correct: 1, explain: 'Waterfalls typically form where a river flows over a band of hard, resistant rock overlying softer rock; the softer rock erodes faster (undercutting), leaving the hard rock overhanging until it collapses, and the waterfall gradually retreats upstream.', misconception: 'It is sometimes assumed any change in rock type creates a waterfall; specifically it is hard rock over soft rock, with differential erosion rates, that creates the step and undercut needed.', tag: 'Waterfalls and gorges' },
    { q: 'A gorge forms as a result of:', options: ['Deposition building up sediment in the lower course', 'A waterfall retreating upstream over time, leaving a steep-sided valley behind it', 'A meander being cut off from the main channel', 'Sea level rise flooding a river valley'], correct: 1, explain: 'As a waterfall retreats upstream through repeated undercutting and collapse, it leaves behind a steep-sided gorge marking its former positions.', misconception: 'Gorges are sometimes treated as a separate, unrelated landform, when they are directly formed by the same process that causes waterfall retreat.', tag: 'Waterfalls and gorges' },
    { q: 'Potholes form in a river channel through the process of:', options: ['Solution alone', 'Abrasion, as swirling pebbles trapped in a depression grind it into a smooth, circular hole', 'Deposition of fine sediment', 'Hydraulic action alone, with no sediment involved'], correct: 1, explain: 'Potholes form when pebbles and stones become trapped in small depressions in the river bed and are swirled around by the current, abrading (grinding) the depression into a smooth, rounded, deeper hole over time.', misconception: 'Potholes are sometimes attributed to hydraulic action alone; the grinding, rotational motion of trapped sediment (abrasion) is the key process.', tag: 'Potholes' },
    { q: 'On the outside bend of a meander, a river typically shows:', options: ['Deposition and a gently sloping bank', 'Erosion, faster/deeper flow, and a steep river cliff', 'No flow at all', 'The lowest velocity in the channel'], correct: 1, explain: 'On the outside of a meander bend, flow is faster and deeper (the thalweg swings towards the outer bank), causing erosion and the formation of a steep river cliff.', misconception: 'The outside and inside of a meander bend are often mixed up; erosion and steep river cliffs occur on the outside, while deposition and gentle point bars occur on the inside.', tag: 'Meanders' },
    { q: 'On the inside bend of a meander, a river typically shows:', options: ['Erosion and a steep river cliff', 'Deposition, slower/shallower flow, and the build-up of a point bar', 'The fastest flow in the channel', 'A waterfall'], correct: 1, explain: 'On the inside of a meander bend, flow is slower and shallower, so the river deposits sediment, gradually building up a gently sloping point bar.', misconception: 'Because the outside of the bend is more visually dramatic (with erosion and cliffs), students sometimes forget the inside bend is equally important for deposition and point bar formation.', tag: 'Meanders' },
    { q: 'A floodplain is formed mainly by:', options: ['Vertical erosion cutting straight down into bedrock', 'Repeated flooding depositing fine sediment (alluvium) across the flat valley floor either side of the channel', 'Wind erosion of the valley sides', 'Glacial deposition'], correct: 1, explain: 'A floodplain is built up over many flood events, as the river overtops its banks and spreads across the valley floor, losing energy and depositing layers of fine sediment (alluvium), which flattens and widens the valley floor.', misconception: 'Floodplains are sometimes thought of as simply "flat land near a river", without appreciating that they are actively built and renewed by the depositional process of repeated flooding.', tag: 'Floodplains and levees' },
    { q: 'A levee forms because:', options: ['Coarser sediment is deposited closest to the channel during a flood, building up a raised bank, while finer sediment spreads further across the floodplain', 'The river erodes a deep channel next to the floodplain', 'Levees are always artificially constructed by humans, never natural', 'Sediment is only deposited far from the channel, never near it'], correct: 0, explain: 'During a flood, as water spreads out of the channel and loses energy, the coarsest, heaviest sediment is deposited first, closest to the channel, gradually building up raised natural embankments called levees; finer sediment is carried further across the floodplain.', misconception: 'Levees are sometimes assumed to be purely artificial (built by engineers); natural levees form through this same depositional process without human intervention, though humans do also build artificial levees for flood defence.', tag: 'Floodplains and levees' },
    { q: 'A river delta typically forms where:', options: ['A river enters a fast-flowing mountain gorge', 'A river enters a standing body of water (such as a sea or lake) and rapidly loses energy, depositing its sediment load', 'A waterfall retreats upstream', 'A meander is cut off to form an oxbow lake'], correct: 1, explain: 'A delta forms where a river enters a standing body of water, such as a sea or lake; the sudden loss of energy and velocity causes the river to deposit its sediment load, which can build up new land at the river mouth over time.', misconception: 'Delta formation is sometimes confused with estuary formation; a delta specifically involves significant sediment deposition building new landforms, whereas estuaries are more associated with tidal mixing.', tag: 'Deltas' },
    { q: 'Which landform is most characteristic of a river’s lower course, rather than its upper course?', options: ['Interlocking spurs', 'V-shaped valley', 'Delta', 'Waterfall'], correct: 2, explain: 'Deltas are a depositional landform typically found at a river’s mouth in the lower course, where the river’s energy drops as it meets standing water, contrasting with erosional, high-energy landforms like V-shaped valleys and interlocking spurs found upstream.', misconception: 'This question checks that students can correctly link the landform to the stage of the river’s course where it typically forms — erosional landforms upstream, depositional landforms downstream.', tag: 'Upper, middle, lower course landforms' }
  ]
};
