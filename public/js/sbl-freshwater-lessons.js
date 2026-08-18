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

   BUILD STATUS: Topic 1 (FW01-FW04) and Topic 2 (FW05-FW08)
   complete. FW01's feedback-loop content, FW02's Bradshaw/Schumm
   model pointer, FW03's Hjulstrom-curve questions, FW05's eight
   hydrograph controls/river regime note, FW06's key terms, and
   FW07's hard/soft engineering content (including the flood
   planning methods table) were provided by the course teacher.
   FW08's two case studies (2011 Chao Phraya/Bangkok floods and the
   2004 Boscastle flood, UK) were built from established, verified
   sources — Bangkok/Chao Phraya was confirmed as the teacher's
   intended case study via a worksheet template, but no case-study
   FACTS were supplied, so specifics were verified via web search.
   Boscastle was Claude's own choice as the contrasting case study
   (not specified by the teacher) — flag this to the teacher and
   swap it out if their course uses a different second example.
   FW04 built from established IB Freshwater syllabus content.
   Topics 3-4 (FW09-FW16) still pending.
   ============================================================ */
window.SBL_LESSONS = window.SBL_LESSONS || {};
window.SBL_FW_LESSON_ORDER = [
  'FW01', 'FW02', 'FW03', 'FW04',
  'FW05', 'FW06', 'FW07', 'FW08'
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
window.SBL_LESSONS.FW05 = {
  id: 'FW05',
  topicNumber: 2,
  topicTitle: 'Flooding and flood mitigation',
  title: 'Hydrographs',
  href: '/geography/paper-1/option-a/t2-flooding-and/l1-hydrographs',
  syllabusFocus: 'Hydrograph characteristics (lag time, peak discharge, base flow) and natural influences on hydrographs, including geology and seasonality; the eight key controls on the shape of a flood hydrograph (basin size, shape and relief; type of precipitation; temperature; land use; geology; soil type; drainage density; tides and storm surges); river regimes and their link to flood forecasting.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of flood hydrographs and what affects their shape' },
    { label: 'What is a hydrograph?', request: 'Explain what a storm/flood hydrograph is and label its main parts' },
    { label: 'Lag time and peak discharge', request: 'Explain lag time, peak discharge and base flow' },
    { label: 'Flashy vs subdued hydrographs', request: 'Explain the difference between a flashy hydrograph and a subdued hydrograph' },
    { label: 'The eight key controls', request: 'Explain the eight key controls on the shape of a flood hydrograph' },
    { label: 'Geology and seasonality', request: 'Explain how geology and seasonality affect a hydrograph' },
    { label: 'River regimes', request: 'Explain what a river regime is and what factors affect it' },
    { label: 'Hydrographs and forecasting', request: 'Explain how river regimes and hydrographs are used in flood forecasting' }
  ],
  checklist: [
    'I can define the different sections of a flood hydrograph, e.g. lag time, peak discharge.',
    'I can construct a flood hydrograph using data.',
    'I can explain the natural factors that influence hydrographs, including geology and seasonality.',
    'I can explain what river regimes are and link them to forecasting floods.',
    'I can list the eight key controls on the shape of a hydrograph.',
    'I can distinguish between a flashy and a subdued/flat hydrograph.'
  ],
  readinessQuestions: [
    'Define lag time and peak discharge.',
    'What is the difference between a "flashy" hydrograph and a "subdued" hydrograph?',
    'List three of the eight key controls on the shape of a flood hydrograph.',
    'What is a river regime?',
    'Explain one way that geology can affect the shape of a hydrograph.'
  ],
  quiz: [
    { q: 'On a flood/storm hydrograph, lag time refers to:', options: ['The total volume of water in the river', 'The time delay between peak precipitation and peak discharge', 'The lowest flow of the river during a dry period', 'The width of the river channel'], correct: 1, explain: 'Lag time is the time delay between the peak of the rainfall event and the peak discharge in the river, reflecting how long it takes for the rainfall to translate into peak river flow.', misconception: 'Lag time is sometimes confused with the total length of a flood event; it specifically measures the delay between peak rainfall and peak discharge, not the full duration of the flood.', tag: 'Lag time and peak discharge' },
    { q: 'Peak discharge on a hydrograph is:', options: ['The lowest point of river flow shown on the graph', 'The highest river discharge reached during the recorded event', 'The average discharge over the whole year', 'The point where rainfall stops'], correct: 1, explain: 'Peak discharge is the highest river discharge reached during the storm event shown on the hydrograph.', misconception: 'Students sometimes confuse peak discharge (the highest point on the discharge curve) with peak rainfall (the highest point on the rainfall bar chart); these two peaks are separated by the lag time.', tag: 'Lag time and peak discharge' },
    { q: 'Base flow on a hydrograph represents:', options: ['The river’s normal, everyday flow level sustained by groundwater before and after a storm event', 'The absolute peak of the storm event', 'Water that never reaches the river channel', 'The time it takes for a river to flood'], correct: 0, explain: 'Base flow is the river’s underlying, normal flow, sustained mainly by groundwater (through baseflow/throughflow) rather than direct storm runoff, and continues before and after a storm event.', misconception: 'Base flow is sometimes assumed to disappear during a flood, when in reality it continues throughout, with the storm-related runoff added on top of it.', tag: 'What is a hydrograph?' },
    { q: 'A "flashy" hydrograph, with a short lag time and high peak discharge, is most likely to occur in a drainage basin with:', options: ['Permeable rock and extensive vegetation cover', 'Impermeable rock, steep slopes and little vegetation', 'A very large, low-relief drainage basin', 'Cold temperatures preventing any precipitation'], correct: 1, explain: 'Impermeable rock, steep slopes and sparse vegetation all encourage rapid surface runoff into the channel, producing a short lag time and a high, sharp peak discharge — a "flashy" response.', misconception: 'It is sometimes assumed that basin size alone determines flashiness; in fact, permeability, slope and vegetation/land use are usually the dominant controls on how flashy a hydrograph is.', tag: 'Flashy vs subdued hydrographs' },
    { q: 'A circular drainage basin, compared to an elongated basin of the same size, typically produces a hydrograph with:', options: ['A longer lag time and lower peak discharge', 'A shorter lag time and higher peak discharge', 'No difference at all', 'A hydrograph with two separate peaks'], correct: 1, explain: 'In a circular basin, water from all parts of the basin reaches the main channel at roughly the same time, producing a shorter lag time and a higher, sharper peak discharge than an elongated basin of the same area.', misconception: 'Basin shape is one of the eight key controls that is often underestimated; circular basins concentrate flow far more quickly than elongated ones.', tag: 'The eight key controls' },
    { q: 'Which of the following is one of the eight key controls on the shape of a flood hydrograph?', options: ['The colour of the river water', 'Drainage density', 'The name of the river', 'The number of bridges crossing the river'], correct: 1, explain: 'Drainage density (the total length of streams per unit area of the drainage basin) is one of the eight key controls, alongside basin size/shape/relief, precipitation type, temperature, land use, geology, soil type, and tides/storm surges.', misconception: 'This checks students can identify genuine physical/human controls on hydrograph shape rather than irrelevant or superficial features of a river.', tag: 'The eight key controls' },
    { q: 'Snowmelt, rather than rainfall, as the source of a hydrograph’s input is most closely linked to which control?', options: ['Land use', 'Type of precipitation', 'Drainage density', 'Tides and storm surges'], correct: 1, explain: 'The type of precipitation — for example, rain versus snow — affects the hydrograph; snowmelt tends to produce a slower, more prolonged rise in discharge compared with intense rainfall, which produces a rapid rise.', misconception: 'Type of precipitation is sometimes reduced to just "how much rain fell"; the form the precipitation takes (rain, snow, its intensity) is a distinct and important control.', tag: 'The eight key controls' },
    { q: 'Urban land use tends to produce a hydrograph with:', options: ['A longer lag time and lower peak discharge than a rural area', 'A shorter lag time and higher peak discharge than a rural area, due to impermeable surfaces and drains', 'Exactly the same hydrograph shape as a forested rural area', 'No base flow at all'], correct: 1, explain: 'Impermeable surfaces (roads, roofs, pavements) and efficient drainage systems in urban areas rapidly channel water to rivers, producing a shorter lag time and a higher peak discharge compared with a rural, vegetated catchment.', misconception: 'Land use is sometimes seen as a minor influence compared with "natural" controls like geology and relief, but it is one of the most significant human-caused controls on flood risk.', tag: 'The eight key controls' },
    { q: 'A river regime describes:', options: ['A single flood event on one specific day', 'The seasonal pattern of variation in a river’s discharge over the course of a year', 'The exact width of a river channel', 'A type of dam used for flood control'], correct: 1, explain: 'A river regime is the seasonal variation in a river’s discharge over the course of a year, shaped by factors such as precipitation, temperature and evapotranspiration, vegetation cover, and the geology, soil and shape of the drainage basin.', misconception: 'River regime is sometimes confused with a single storm hydrograph; a regime describes the pattern across an entire year (e.g. snowmelt peaks in spring), not the response to one rainfall event.', tag: 'River regimes' },
    { q: 'Understanding a river’s regime is useful for flood forecasting because it helps identify:', options: ['The exact colour the river will turn during a flood', 'The times of year when a river is naturally likely to have higher discharge and therefore higher flood risk', 'How many bridges will need to be built', 'The name given to the river by local people'], correct: 1, explain: 'Knowing a river’s regime — for example, that discharge typically peaks in spring due to snowmelt, or in a particular wet season — helps forecasters and water managers anticipate when flood risk is naturally highest.', misconception: 'Forecasting is sometimes seen as only about short-term weather prediction; understanding the longer-term seasonal regime is an equally important part of anticipating flood risk.', tag: 'Hydrographs and forecasting' }
  ]
};

window.SBL_LESSONS.FW06 = {
  id: 'FW06',
  topicNumber: 2,
  topicTitle: 'Flooding and flood mitigation',
  title: 'Factors affecting flood risk',
  href: '/geography/paper-1/option-a/t2-flooding-and/l2-factors',
  syllabusFocus: 'How urbanisation, deforestation and channel modification affect flood risk within a drainage basin, including the distribution, frequency and magnitude of flooding; key terms including flooding, floodplain, recurrence interval, flood magnitude and flood frequency; natural and human factors affecting flood risk (timing, volume and duration); the difference between hydrographs in urban and rural areas.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of the factors affecting flood risk' },
    { label: 'Key terms', request: 'Define flooding, floodplain, recurrence interval, flood magnitude and flood frequency' },
    { label: 'Natural factors', request: 'Explain the natural factors that affect flood risk' },
    { label: 'Urbanisation and flood risk', request: 'Explain how urbanisation increases flood risk' },
    { label: 'Deforestation and flood risk', request: 'Explain how deforestation increases flood risk' },
    { label: 'Channel modification and flood risk', request: 'Explain how channel modification can affect flood risk' },
    { label: 'Urban vs rural hydrographs', request: 'Explain the difference between hydrographs in urban and rural areas' },
    { label: 'Flood distribution, frequency and magnitude', request: 'Explain the difference between flood distribution, frequency and magnitude' }
  ],
  checklist: [
    'I can define the key terms flooding, floodplain, recurrence interval, flood magnitude and flood frequency.',
    'I can explain the human factors that affect flood risk, including urbanisation, deforestation and channel modification.',
    'I can describe the difference between hydrographs in urban and rural areas.',
    'I can explain natural factors affecting flood risk, including timing, volume and duration of precipitation.',
    'I can explain how flood risk varies in its distribution, frequency and magnitude.'
  ],
  readinessQuestions: [
    'Define the term recurrence interval.',
    'What is the difference between flood magnitude and flood frequency?',
    'Explain one way that urbanisation increases flood risk.',
    'Explain one way that deforestation increases flood risk.',
    'Explain one way that channel modification (e.g. straightening) can increase flood risk downstream.'
  ],
  quiz: [
    { q: 'A flood occurs when:', options: ['A river’s discharge is lower than average', 'A river’s discharge exceeds the capacity of its channel, causing water to spill over the banks', 'A river completely dries up', 'A dam is built across a river'], correct: 1, explain: 'A flood occurs when river discharge exceeds the channel’s capacity (bankfull discharge), causing water to overflow onto the surrounding land, such as a floodplain.', misconception: 'Flooding is sometimes thought of only in terms of damage caused, rather than its precise hydrological definition: discharge exceeding channel capacity.', tag: 'Key terms' },
    { q: 'A floodplain is:', options: ['A steep, narrow valley found only in the upper course', 'The flat land bordering a river channel that is periodically covered by floodwater', 'A type of dam', 'The point where a river meets the sea'], correct: 1, explain: 'A floodplain is the flat area of land alongside a river channel, built up by repeated deposition during flood events, which is periodically covered by floodwater when the river overtops its banks.', misconception: 'Floodplains are sometimes thought of simply as "any flat land near a river"; specifically they are land shaped and periodically flooded by the river’s own flood events.', tag: 'Key terms' },
    { q: 'The recurrence interval (or return period) of a flood of a given size is:', options: ['The exact date the next flood will occur', 'A statistical estimate of how often, on average, a flood of that size is likely to occur', 'The total number of floods that have ever happened on that river', 'The time it takes water to drain off a floodplain'], correct: 1, explain: 'Recurrence interval (return period) is a statistical estimate, based on historical data, of how frequently, on average, a flood of a particular size is likely to occur — for example, a "1-in-100-year flood" has roughly a 1% chance of occurring in any given year.', misconception: 'A "1-in-100-year flood" is often misunderstood as meaning it can only happen once every 100 years; it actually means it has a 1% probability of occurring in any single year, so it could occur in consecutive years.', tag: 'Key terms' },
    { q: 'Flood magnitude refers to:', options: ['How often floods happen', 'The size/severity of a flood event, e.g. how much the river’s discharge exceeds bankfull', 'The length of the river', 'The number of people affected only'], correct: 1, explain: 'Flood magnitude describes the size or severity of a flood event, such as how far the discharge exceeds bankfull capacity, whereas flood frequency describes how often floods of a given size occur.', misconception: 'Magnitude and frequency are very commonly confused; magnitude is about how big/severe an event is, frequency is about how often it happens.', tag: 'Key terms' },
    { q: 'Which of the following is a HUMAN factor that increases flood risk?', options: ['Heavy, prolonged rainfall', 'Impermeable rock underlying the drainage basin', 'Deforestation, reducing interception and infiltration', 'A drainage basin with low relief'], correct: 2, explain: 'Deforestation is a human factor: removing vegetation reduces interception and infiltration, so more precipitation becomes surface runoff, increasing and speeding up peak discharge and flood risk.', misconception: 'Students sometimes only list natural/physical factors when asked for causes of flooding; human factors like deforestation, urbanisation and channel modification are equally examinable.', tag: 'Deforestation and flood risk' },
    { q: 'Urbanisation increases flood risk mainly because it:', options: ['Increases the amount of vegetation intercepting rainfall', 'Replaces permeable land with impermeable surfaces (roads, roofs) connected to fast drainage systems', 'Slows down the speed at which water reaches the river', 'Has no measurable effect on runoff'], correct: 1, explain: 'Urban surfaces such as roads, car parks and roofs are impermeable, and are usually connected to efficient drain and sewer networks, both of which speed up the delivery of runoff to the river channel, increasing flood risk.', misconception: 'Urbanisation is one of the most significant human causes of increased flood risk, yet is sometimes treated as a minor factor compared to "natural" causes like heavy rain.', tag: 'Urbanisation and flood risk' },
    { q: 'A hydrograph for an urban catchment, compared with a similar-sized rural catchment, typically shows:', options: ['A longer lag time and lower peak discharge', 'A shorter lag time and higher peak discharge', 'Exactly the same shape', 'No base flow'], correct: 1, explain: 'Because impermeable surfaces and efficient drains speed up runoff, an urban catchment typically produces a shorter lag time and a higher, sharper peak discharge than an equivalent rural catchment, where more water infiltrates and takes longer to reach the channel.', misconception: 'This is a very common exam comparison; students should be able to sketch and label both an urban ("flashy") and rural (more subdued) hydrograph and explain the difference.', tag: 'Urban vs rural hydrographs' },
    { q: 'Channel straightening (as a form of channel modification) can increase flood risk downstream because it:', options: ['Slows the river down, causing water to back up in the channel', 'Increases the river’s velocity, so water reaches downstream areas faster and in greater volume, increasing peak discharge there', 'Removes all water from the river permanently', 'Only affects the river’s colour, not its flow'], correct: 1, explain: 'Straightening a channel removes meanders, shortening the distance water has to travel and increasing velocity; this moves water downstream more quickly, which can increase peak discharge and flood risk in downstream areas that receive the water sooner and in a more concentrated pulse.', misconception: 'Channel modification is sometimes assumed to only reduce flood risk (since it is often installed as a flood defence); however, modifications that speed up flow in one reach can increase risk further downstream.', tag: 'Channel modification and flood risk' },
    { q: 'The natural factor most directly linked to a flood’s "volume" is:', options: ['The total amount and intensity of precipitation falling on the drainage basin', 'The name of the nearest town', 'The colour of the river water', 'The number of bridges over the river'], correct: 0, explain: 'The volume of a flood is most directly determined by the total amount and intensity of precipitation (or snowmelt) entering the drainage basin, alongside how much of that precipitation becomes runoff rather than being stored or evaporated.', misconception: 'This checks that students link "volume" specifically to the amount/intensity of water input, rather than to unrelated basin characteristics.', tag: 'Natural factors' },
    { q: 'Flood frequency describes:', options: ['The severity of a single flood event', 'How often floods of a particular size occur over time', 'The exact width of the floodplain', 'The type of rock in the drainage basin'], correct: 1, explain: 'Flood frequency describes how often floods of a given size occur over a period of time, closely linked to the concept of recurrence interval, and is distinct from flood magnitude, which describes the size of an individual event.', misconception: 'Frequency and magnitude are the pair of terms most often mixed up in this topic; frequency is about "how often", magnitude is about "how big".', tag: 'Flood distribution, frequency and magnitude' }
  ]
};

window.SBL_LESSONS.FW07 = {
  id: 'FW07',
  topicNumber: 2,
  topicTitle: 'Flooding and flood mitigation',
  title: 'Flood mitigation',
  href: '/geography/paper-1/option-a/t2-flooding-and/l3-flood-mitigation',
  syllabusFocus: 'Hard engineering approaches to flood mitigation (afforestation, dams and reservoirs, diversion channels, channel straightening and dredging, artificial levees, culverts, revetments and channel walls, channel enlargement) and soft engineering/non-structural approaches (land-use zoning and floodways, flood forecasting and warning systems, loss-sharing adjustments such as insurance and disaster aid, and citizen-reporting technology), including their costs, benefits and disadvantages, and the role of forecasting in reducing flood impacts.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of flood mitigation strategies, both hard and soft engineering' },
    { label: 'Hard engineering methods', request: 'Explain the main hard engineering methods of flood mitigation' },
    { label: 'Dams and diversion channels', request: 'Explain how dams and diversion channels help mitigate floods' },
    { label: 'Channel straightening and levees', request: 'Explain channel straightening/dredging and artificial levees as flood defences' },
    { label: 'Land-use zoning', request: 'Explain the concept of land-use zoning, including floodways, using examples' },
    { label: 'Flood forecasting and warnings', request: 'Explain how flood forecasting and warning systems work and their limitations' },
    { label: 'Insurance and disaster aid', request: 'Explain loss-sharing adjustments such as insurance and disaster aid, including differences between HICs and LICs' },
    { label: 'Structural vs planning approaches', request: 'Help me weigh up whether structural measures or planning approaches are better for flood mitigation' }
  ],
  checklist: [
    'I can name and explain at least five hard engineering flood mitigation methods.',
    'I can explain how afforestation reduces flood risk.',
    'I can explain how dams and reservoirs are used to control flooding.',
    'I can explain the concept of land-use zoning, using examples such as floodways.',
    'I can explain how flood forecasting and warning systems work.',
    'I can explain what a loss-sharing strategy is, including insurance and disaster aid.',
    'I can compare the costs, benefits and disadvantages of different flood mitigation schemes.',
    'I can discuss whether structural measures or planning approaches are more effective for flood mitigation.'
  ],
  readinessQuestions: [
    'Name three hard engineering methods of flood mitigation.',
    'Using an example, explain the concept of land-use zoning.',
    'In what ways can forecasting help reduce the impacts of floods?',
    'What are the difficulties of flood forecasting?',
    'What is meant by a "loss-sharing" strategy, and how does this differ between HICs and LICs?'
  ],
  quiz: [
    { q: 'Afforestation reduces flood risk mainly because it:', options: ['Increases surface runoff into rivers', 'Increases interception and infiltration rates, reducing surface runoff', 'Has no effect on the drainage basin’s hydrology', 'Increases the amount of impermeable surface in a basin'], correct: 1, explain: 'Planting trees increases interception (rainfall caught on leaves/branches, later evaporated) and infiltration (via root systems), which reduces the amount of precipitation that becomes rapid surface runoff, lowering flood risk.', misconception: 'Afforestation is sometimes seen as only an environmental measure; it is also a genuine hard-engineering-adjacent method of flood risk reduction through its hydrological effects.', tag: 'Hard engineering methods' },
    { q: 'Dams and reservoirs help mitigate flooding by:', options: ['Speeding up the flow of water downstream at all times', 'Holding back and regulating the flow of river water, releasing it in a controlled way', 'Removing all water permanently from the drainage basin', 'Increasing the river’s gradient'], correct: 1, explain: 'Dams and reservoirs hold back and regulate river flow, storing excess water during high-flow periods and releasing it in a controlled way, which can also be used for freshwater supply and HEP generation.', misconception: 'Dams are sometimes seen as an absolute solution to flooding; as the 2011 Thailand floods showed, dams can be overwhelmed if inflow greatly exceeds storage capacity.', tag: 'Dams and diversion channels' },
    { q: 'A diversion channel helps reduce flood risk by:', options: ['Blocking all water from entering the main river', 'Taking surplus water out of the main river during times of flood, redirecting it elsewhere', 'Increasing the height of the riverbed', 'Removing vegetation along the riverbank'], correct: 1, explain: 'A diversion channel (or flood relief channel) is an overflow route that takes surplus water out of the main river channel during flood conditions, reducing pressure on the main channel and areas at risk downstream.', misconception: 'Diversion channels are sometimes confused with normal river channels; they are specifically built as an overflow route used mainly during high-flow/flood conditions.', tag: 'Dams and diversion channels' },
    { q: 'Channel straightening and dredging as flood management methods aim to:', options: ['Slow the river down as much as possible', 'Increase the river’s velocity and remove sediment, moving water out of the drainage basin more quickly', 'Increase the amount of sediment deposited in the channel', 'Reduce the channel’s cross-sectional area'], correct: 1, explain: 'Straightening and dredging (removing sediment to deepen the channel) increase the river’s velocity and capacity, helping to move water out of the drainage basin as quickly as possible and reduce local flood risk.', misconception: 'While straightening/dredging can reduce flood risk locally, it can increase flood risk further downstream by delivering water there more quickly — an important limitation to be able to discuss.', tag: 'Channel straightening and levees' },
    { q: 'Artificial levees reduce flood risk by:', options: ['Lowering the height of the river banks', 'Raising the height of the river banks, allowing the channel to hold a greater volume of water before overflowing', 'Removing the river channel entirely', 'Redirecting the river permanently to a new course'], correct: 1, explain: 'Artificial levees raise the height of the river banks (often using compacted earth or concrete), increasing the volume of water the channel can hold before it overtops and floods the surrounding land.', misconception: 'Levees are sometimes assumed to eliminate flood risk entirely; in reality they raise the threshold at which flooding occurs and can fail or be overtopped in exceptionally large events.', tag: 'Channel straightening and levees' },
    { q: 'Land-use zoning, as a flood mitigation strategy, typically involves:', options: ['Building as many homes as possible on the floodplain', 'Restricting residential development in flood-prone areas and creating floodways used only for recreation or wilderness', 'Removing all planning restrictions near rivers', 'Only applying to rivers in low-income countries'], correct: 1, explain: 'Land-use zoning restricts residential and other vulnerable development in flood-prone areas, and can create "floodways" — wide, low-lying zones alongside flood-prone rivers reserved for recreation or wilderness use rather than building.', misconception: 'Land-use zoning is a "soft"/non-structural flood mitigation approach that is sometimes overlooked in favour of visible hard-engineering structures, despite often being a cost-effective, longer-term solution.', tag: 'Land-use zoning' },
    { q: 'A flood forecasting and warning system typically works by:', options: ['Randomly issuing warnings with no data behind them', 'Monitoring conditions using technology such as remote sensing, then issuing warnings through media such as TV, radio, internet and apps once a threat threshold is reached', 'Only warning people after a flood has already caused damage', 'Preventing all rainfall from occurring'], correct: 1, explain: 'Flood warning systems typically involve emergency agencies first monitoring conditions (e.g. via remote sensing) to assess threat levels, then issuing warnings through channels such as TV, radio, the internet, social media, or dedicated apps once a predetermined threat level is reached.', misconception: 'Forecasting is sometimes seen as guaranteeing safety; forecasting reduces risk by providing advance notice, but people must still act on the warning, and some events (flash floods) leave very little warning time.', tag: 'Flood forecasting and warnings' },
    { q: 'A key difficulty of flood forecasting is that:', options: ['It is always 100% accurate with no limitations', 'Sudden, intense rainfall (flash flooding) can leave very little time to issue an effective warning, and not everyone receives or acts on warnings', 'It only works in high-income countries', 'It requires no technology at all'], correct: 1, explain: 'A major difficulty is that flash floods, caused by very intense, localised rainfall, can develop faster than warnings can be issued or acted upon; access to warning technology and public response to warnings also varies, especially between HICs and LICs.', misconception: 'It is easy to overstate the reliability of forecasting; the speed of some flood events and unequal access to warning technology both limit how much forecasting alone can reduce flood risk.', tag: 'Flood forecasting and warnings' },
    { q: 'Personal home insurance against flood damage is an example of a:', options: ['Hard engineering strategy', 'Loss-sharing (loss-bearing) adjustment', 'Land-use zoning strategy', 'Type of dam'], correct: 1, explain: 'Insurance is a "loss-sharing" strategy: it does not prevent flooding, but spreads the financial cost of flood damage; disaster aid from governments and NGOs is another example of a loss-sharing adjustment.', misconception: 'Insurance and disaster aid are sometimes overlooked as flood "mitigation" because they do not physically stop water; they are still an important non-structural way societies manage flood risk.', tag: 'Insurance and disaster aid' },
    { q: 'Access to flood insurance tends to differ between HICs and LICs in that:', options: ['LICs typically have much higher rates of personal flood insurance than HICs', 'Personal flood insurance is more common in HICs, while it is less common in LICs, leaving households more reliant on aid or their own resources', 'There is no difference between HICs and LICs', 'Only governments can buy flood insurance, never individuals'], correct: 1, explain: 'In HICs, personal home insurance (a loss-sharing strategy) is more widely available and purchased, although under-insurance is still an issue; in LICs, obtaining personal insurance against flooding is less common, often leaving disaster aid from governments and NGOs as a more significant loss-sharing mechanism.', misconception: 'It is sometimes assumed flood risk management is purely about physical/structural defences; access to financial tools like insurance is an important and unevenly distributed part of resilience.', tag: 'Insurance and disaster aid' }
  ]
};

window.SBL_LESSONS.FW08 = {
  id: 'FW08',
  topicNumber: 2,
  topicTitle: 'Flooding and flood mitigation',
  title: 'Case studies of flood mitigation',
  href: '/geography/paper-1/option-a/t2-flooding-and/l4-case-studies-of',
  syllabusFocus: 'Two contrasting detailed examples of flood mitigation of drainage basins: the 2011 Chao Phraya River basin floods and Bangkok’s flood mitigation response (Thailand), and the 2004 Boscastle flood and subsequent flood defence scheme (UK). Why the schemes were implemented, what they involved, and an evaluation of their effectiveness.',
  starterButtons: [
    { label: 'Teach me this lesson', request: 'Give me a full overview of both flood mitigation case studies' },
    { label: 'Chao Phraya / Bangkok: the 2011 floods', request: 'Explain why Bangkok and the Chao Phraya basin flooded so badly in 2011' },
    { label: 'Chao Phraya / Bangkok: mitigation schemes', request: 'Explain the flood mitigation schemes used in the Chao Phraya basin and Bangkok' },
    { label: 'Chao Phraya / Bangkok: how effective?', request: 'Evaluate how effective the Chao Phraya/Bangkok flood mitigation schemes have been' },
    { label: 'Boscastle: the 2004 flood', request: 'Explain why Boscastle flooded so severely in 2004' },
    { label: 'Boscastle: the flood defence scheme', request: 'Explain the flood defence scheme built in Boscastle after 2004' },
    { label: 'Boscastle: how effective?', request: 'Evaluate how effective the Boscastle flood defence scheme has been' },
    { label: 'Compare the two case studies', request: 'Compare the Chao Phraya/Bangkok and Boscastle flood mitigation case studies' }
  ],
  checklist: [
    'I can describe facts about the Chao Phraya drainage basin and why Bangkok is prone to flooding.',
    'I can describe the causes and impacts of the 2011 Thailand floods.',
    'I can describe the flood mitigation schemes used in the Chao Phraya basin/Bangkok.',
    'I can evaluate how effective the Chao Phraya/Bangkok schemes have been.',
    'I can describe facts about the Boscastle drainage basin and why it is prone to flash flooding.',
    'I can describe the causes and impacts of the 2004 Boscastle flood.',
    'I can describe the flood defence scheme built in Boscastle.',
    'I can evaluate how effective the Boscastle scheme has been.',
    'I can compare and contrast the two case studies.'
  ],
  readinessQuestions: [
    'Why is Bangkok particularly prone to flooding?',
    'Name one flood mitigation measure used in the Chao Phraya basin.',
    'Why did Boscastle flood so severely and suddenly in 2004?',
    'Name one engineering measure built in Boscastle after the 2004 flood.',
    'Give one similarity and one difference between the Chao Phraya/Bangkok and Boscastle case studies.'
  ],
  quiz: [
    { q: 'Bangkok is particularly prone to flooding because it:', options: ['Sits at high altitude far from any river', 'Sits on low-lying, flat land at the base of the vast Chao Phraya River basin, close to sea level', 'Has no rainfall at any time of year', 'Is located entirely outside the Chao Phraya drainage basin'], correct: 1, explain: 'Bangkok is located on low-lying, flat land near the mouth of the Chao Phraya River, close to sea level, at the base of a vast drainage basin (over 157,000 km²) that funnels water from northern and central Thailand towards the city.', misconception: 'Bangkok’s flood risk is sometimes attributed only to heavy local rainfall; its position at the low, flat outlet of a huge drainage basin is just as important.', tag: 'Chao Phraya / Bangkok: the 2011 floods' },
    { q: 'A major cause of the severity of the 2011 Thailand floods was that:', options: ['There was almost no rainfall that year', 'Exceptionally heavy monsoon rainfall (including from Tropical Storm Nock-ten) filled major dams, such as the Bhumibol Dam, to capacity, forcing further releases that added to the flooding', 'The Chao Phraya River had been completely dammed with no water allowed to flow', 'Bangkok had built no flood defences of any kind before 2011'], correct: 1, explain: 'Exceptionally heavy monsoon rainfall, intensified by Tropical Storm Nock-ten, caused major dams including the Bhumibol Dam to fill close to or beyond capacity; continuing rain then forced authorities to release more water from the dams, adding to the flooding downstream.', misconception: 'It is sometimes assumed dams simply prevent flooding; in the 2011 case, dam management decisions under extreme rainfall actually contributed to the scale of the flood.', tag: 'Chao Phraya / Bangkok: the 2011 floods' },
    { q: 'The 2011 Thailand floods resulted in approximately:', options: ['A handful of deaths and negligible economic cost', 'Over 800 deaths and an estimated US$46.5 billion in economic losses, making it one of the costliest disasters of 2011', 'No deaths but the complete destruction of Bangkok', 'Only agricultural land was affected, with no impact on Bangkok'], correct: 1, explain: 'The 2011 floods caused 815 deaths, affected over 13 million people, and caused an estimated US$46.5 billion in economic losses — making it, by some rankings, the world’s fourth-costliest disaster of that year.', misconception: 'The scale of the 2011 Thailand floods is sometimes underestimated; it affected 65 of Thailand’s 76 provinces and over 20,000 km² of farmland, in addition to flooding large parts of Bangkok.', tag: 'Chao Phraya / Bangkok: the 2011 floods' },
    { q: 'Which of the following was used as a flood mitigation measure in the Chao Phraya basin/Bangkok?', options: ['Large dams (such as Bhumibol and Sirikit) to store water, alongside temporary dikes, sandbag barriers and pumps during the crisis', 'Complete evacuation of the entire country', 'Banning all rainfall', 'Removing all dams from the river system'], correct: 0, explain: 'Mitigation measures included major dams (Bhumibol and Sirikit) for water storage, irrigation canals, drainage tunnels, and during the 2011 crisis, temporary dikes, sandbag barriers, floodgates and boats deployed to accelerate drainage; after 2011, further dikes and an early warning system were added.', misconception: 'It is sometimes assumed a single measure (like "a dam") explains flood mitigation in this case; the response actually involved a combination of long-term infrastructure and short-term emergency measures.', tag: 'Chao Phraya / Bangkok: mitigation schemes' },
    { q: 'The Kaem Ling ("monkey cheeks") project, associated with Thailand’s flood management approach, refers to:', options: ['A type of flood insurance policy', 'A water retention/storage concept, using designated areas to hold excess floodwater temporarily, similar to how a monkey stores food in its cheeks', 'A ban on building any new dams', 'A warning siren system only'], correct: 1, explain: 'The Kaem Ling ("monkey cheeks") concept, associated with Thailand’s royally-initiated water management approach, uses designated retention areas to temporarily store excess floodwater, releasing it gradually once flood risk has passed — named by analogy to how a monkey stores food in its cheek pouches.', misconception: 'This is a distinctive, less "textbook" measure that is sometimes missed in favour of more generic hard-engineering answers like dams and levees.', tag: 'Chao Phraya / Bangkok: mitigation schemes' },
    { q: 'An evaluation of Bangkok’s flood mitigation schemes would note that:', options: ['They have completely eliminated all future flood risk with no limitations', 'Existing infrastructure was overwhelmed in 2011 (inflows reached around 15 billion m³ against roughly 10 billion m³ of dam storage), and some post-2011 defences, such as a temporary dike, still failed to protect some districts', 'No improvements have been made since 2011', 'Bangkok now has zero flood risk of any kind'], correct: 1, explain: 'In 2011, water volumes (around 15 billion m³) surpassed the roughly 10 billion m³ combined storage capacity of the Bhumibol and Sirikit dams; even after 2011, new defences such as an 8.2km temporary dike ultimately failed to protect several districts, showing that mitigation has reduced but not eliminated risk.', misconception: 'Evaluations of flood schemes should avoid all-or-nothing claims; even well-resourced schemes can be overwhelmed by exceptionally large events, which is an important part of a balanced evaluation.', tag: 'Chao Phraya / Bangkok: how effective?' },
    { q: 'Boscastle, Cornwall (UK), is particularly prone to sudden, severe flash flooding because it:', options: ['Sits on flat, permeable land far from any river confluence', 'Lies at the confluence of several rivers (including the Valency) in a steep-sided valley with impermeable slate geology, encouraging rapid runoff', 'Has never received significant rainfall', 'Is located hundreds of kilometres from the sea'], correct: 1, explain: 'Boscastle sits at the confluence of the River Valency and smaller streams, in a steep-sided valley underlain by largely impermeable slate; these physical characteristics mean rainfall runs off quickly into the river network, creating a "flashy" response prone to sudden flooding.', misconception: 'Boscastle’s flood risk is sometimes attributed to rainfall alone; the combination of steep relief, impermeable geology and a river confluence in a small basin is what makes flash flooding here so severe and sudden.', tag: 'Boscastle: the 2004 flood' },
    { q: 'The August 2004 Boscastle flood was triggered by:', options: ['A slow, steady drizzle over several weeks', 'An intense, short-duration rainstorm that dropped a very large amount of rain over the upper catchment in just a few hours', 'A dam failure upstream', 'Rising sea levels alone, with no rainfall involved'], correct: 1, explain: 'The Boscastle flood was triggered by an intense, localised rainstorm on 16 August 2004, which delivered an exceptionally large amount of rain over the upper catchment in a very short time (with around 89mm falling on Boscastle itself within about an hour), rapidly overwhelming the small, steep drainage basin.', misconception: 'The Boscastle flood is a classic example of a flash flood caused by short-duration, high-intensity rainfall, distinct from the slower-building, prolonged flooding seen in a case like the 2011 Thailand floods.', tag: 'Boscastle: the 2004 flood' },
    { q: 'Despite around 150 people needing to be rescued by helicopter and dozens of cars and buildings being swept away, the 2004 Boscastle flood resulted in:', options: ['Several hundred deaths', 'No deaths, largely credited to a rapid, well-coordinated emergency response', 'The complete permanent abandonment of the village', 'No damage to any property at all'], correct: 1, explain: 'Remarkably, despite the severity of the flood — which swept cars and caravans into the sea and destroyed several buildings — there were no deaths, an outcome widely credited to a fast, well-coordinated emergency helicopter rescue operation.', misconception: 'The absence of fatalities at Boscastle is a notable and often-cited fact, sometimes assumed incorrectly to mean the flood was not that severe, when in fact it caused very extensive physical damage.', tag: 'Boscastle: the 2004 flood' },
    { q: 'The flood defence scheme built in Boscastle after 2004 included:', options: ['Removing the village completely and relocating it elsewhere', 'Widening and deepening the Valency River, installing a new culvert to improve flow, and building a new bridge and car park', 'Banning all future rainfall in the area', 'Damming the river completely so no water could flow through the village'], correct: 1, explain: 'The Boscastle flood defence scheme (completed around 2008, at a cost of several million pounds) involved widening and deepening the River Valency, installing an improved culvert for the Jordan stream, constructing a new bridge, and rebuilding the car park at a lower risk location, alongside improved drainage.', misconception: 'It is sometimes assumed a flood defence scheme "solves" the problem entirely; the Boscastle scheme itself acknowledges it would not fully protect against a flood as extreme as the 2004 event.', tag: 'Boscastle: the flood defence scheme' }
  ]
};
