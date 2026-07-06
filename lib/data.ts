export const PRODUCTS = [
  {
    slug: 'round',
    name: 'Forged Round',
    shortDesc: 'Precision solid round forgings for critical engineering applications',
    description:
      'Our forged rounds are manufactured from premium-grade alloy and carbon steels, precision-forged on our heavy hydraulic and pneumatic hammers. Each round undergoes rigorous quality checks — dimensional inspection, ultrasonic testing, and hardness testing — before dispatch. Suitable for machining into gears, shafts, rolls, and flanges.',
    applications: [
      'Gear blanks for heavy-duty gearboxes',
      'Shaft blanks for power transmission',
      'Roller blanks for rolling mills',
      'Flange blanks for pressure vessels',
      'Coupling disc blanks',
    ],
    materials: ['EN9', 'EN8D', 'EN19', 'EN24'],
    image: '/images/Forged-Round.jpg',
    specs: [
      { parameter: 'Diameter Range', value: '50 mm – 600 mm' },
      { parameter: 'Weight Range', value: '1 kg – 500 kg' },
      { parameter: 'Length', value: 'As per drawing / requirement' },
      { parameter: 'Surface Finish', value: 'As-forged / Rough machined / Finish machined' },
      { parameter: 'Dimensional Tolerance', value: 'As per IS 1570 / DIN 17210' },
      { parameter: 'Heat Treatment', value: 'Normalized / Annealed / Quenched & Tempered' },
      { parameter: 'Testing', value: 'UT, MT, Hardness, Chemical analysis available' },
    ],
  },
  {
    slug: 'hook-nut',
    name: 'Hook Nut',
    shortDesc: 'Heavy-duty hook nuts for lifting and hoisting equipment',
    description:
      'Vikash Forge manufactures crane hook nuts to IS 3832 and customer specifications. Each nut is open-die forged from tested steel billets, heat-treated for optimum toughness, and load-tested before dispatch. Our hook nuts are used in EOT cranes, port cranes, and heavy-lift applications across India.',
    applications: [
      'EOT overhead cranes (industrial bays)',
      'Ship loading and unloading cranes',
      'Port and harbor cranes',
      'Material hoists in construction',
      'Forge shop manipulator hooks',
    ],
    materials: ['EN8D', 'CL4', 'EN24', 'CL2'],
    image: '/images/product-hook-nut-1.jpg',
    specs: [
      { parameter: 'Load Capacity', value: '1 Ton – 100 Ton' },
      { parameter: 'Thread Type', value: 'Square / ACME / Trapezoidal' },
      { parameter: 'Material Grade', value: 'EN8D, CL4, EN24 (as per IS 3832)' },
      { parameter: 'Surface Finish', value: 'Black finish / Rough machined / Finish machined' },
      { parameter: 'Testing Standard', value: 'IS 3832 / Customer specification' },
      { parameter: 'Heat Treatment', value: 'Normalized / Quenched & Tempered' },
      { parameter: 'Load Test', value: 'Proof load testing as per IS standard' },
    ],
  },
  {
    slug: 'shaft',
    name: 'Forged Shaft',
    shortDesc: 'High-strength transmission shafts forged to exact specifications',
    description:
      'Our forged shafts are produced using open-die forging techniques on our heavy hydraulic hammer lines, ensuring a refined, defect-free grain structure with superior mechanical properties. We manufacture shafts for rolling mills, pumps, compressors, and heavy machinery — from raw forging to finish-machined condition.',
    applications: [
      'Rolling mill main drives',
      'Pump and compressor shafts',
      'Sugar mill drive shafts',
      'Turbine main shafts',
      'Gearbox input / output shafts',
    ],
    materials: ['EN19', 'EN24', 'EN9', 'DB6'],
    image: '/images/Forged-Shaft.jpg',
    specs: [
      { parameter: 'Diameter Range', value: '25 mm – 350 mm' },
      { parameter: 'Length', value: 'Up to 3500 mm' },
      { parameter: 'Weight Range', value: '2 kg – 2000 kg' },
      { parameter: 'Material Grade', value: 'EN9, EN19, EN24, DB6' },
      { parameter: 'Dimensional Tolerance', value: 'h6 / h7 as per requirement' },
      { parameter: 'Heat Treatment', value: 'Normalized / Q&T / Case-hardened' },
      { parameter: 'Testing', value: 'UT, Hardness, Chemical composition on request' },
    ],
  },
  {
    slug: 'pinion',
    name: 'Forged Pinion',
    shortDesc: 'Precision forged gear pinions for heavy-duty drive systems',
    description:
      'Our forged pinions are manufactured from high-alloy steels like EN19, EN24, and DB6, ensuring exceptional surface hardness, core toughness, and dimensional accuracy after machining. Widely used in cement plants, ball mills, kiln drives, and rolling mills, our pinions are supplied in forged-blank or fully machined condition.',
    applications: [
      'Cement kiln open gear drives',
      'Ball mill and tube mill drives',
      'Rotary dryer gear systems',
      'Rolling mill pinion stands',
      'Industrial gearbox assemblies',
    ],
    materials: ['EN19', 'EN24', 'DB6', 'EN9'],
    image: '/images/Forged-Pinion.jpg',
    specs: [
      { parameter: 'Module', value: '4 – 20' },
      { parameter: 'Number of Teeth', value: '10 – 60' },
      { parameter: 'Face Width', value: 'Up to 500 mm' },
      { parameter: 'Bore Diameter', value: '50 mm – 300 mm' },
      { parameter: 'Overall Diameter', value: 'Up to 900 mm' },
      { parameter: 'Material Grade', value: 'EN19, EN24, DB6' },
      { parameter: 'Heat Treatment', value: 'Normalized / Q&T / Induction hardened' },
    ],
  },
  {
    slug: 'wheel-assembly',
    name: 'Wheel Assembly',
    shortDesc: 'Premium-grade forged wheel assemblies for heavy-duty material handling applications',
    description:
      'Our wheel assemblies are manufactured from premium-grade forged steel and high-tensile alloys, precision-machined and balanced on our advanced CNC turning centers. Each assembly undergoes rigorous quality checks — ultrasonic testing, magnetic particle inspection, and dynamic balancing — before dispatch to ensure maximum structural integrity and reliable performance under extreme wheel loads. Suitable for crane long travels, heavy duty transfer cars, and overhead material handling systems.',
    applications: [
      'Crane wheel assemblies for EOT, gantry, and tower cranes',
      'Transfer car and ladle car wheel assemblies for steel plants',
      'Mining car and heavy-duty bogie wheels',
      'Guide roller assemblies for stacker-reclaimers',
      'Heavy duty conveyor system wheel blocks',
    ],
    materials: ['Forged Steel', 'High-Tensile Alloys'],
    image: '/images/product-wheel-assembly.jpg',
    specs: [
      { parameter: 'Material', value: 'Premium-grade forged steel and high-tensile alloys' },
      { parameter: 'Manufacturing Process', value: 'Precision machined and dynamically balanced' },
      { parameter: 'Quality Testing', value: 'Ultrasonic Testing (UT), Magnetic Particle Inspection (MPI), Dynamic Balancing' },
      { parameter: 'Applications', value: 'Crane long travels, transfer cars, overhead material handling systems' },
    ],
  },
]

export const MACHINES = [
  {
    id: 'hydraulic-hammer-5t',
    name: '5 Ton Hydraulic Hammer',
    image: '/images/5-ton-hydraulic-hammer.jpg',
    capabilities: [
      'Max forging capacity: up to 500 kg per piece',
      'Ram weight: 5,000 kg',
      'Stroke energy: 50 kJ per blow',
      'Die area: 800 × 800 mm',
      'Suitable for large forgings: rounds, shafts, billets',
    ],
    advantages: [
      'Precise energy control for consistent quality',
      'Handles complex open-die forgings',
      'Reduced vibration versus steam hammer',
      'Lower noise with CNC-controlled stroke',
    ],
  },
  {
    id: 'pneumatic-hammer-2t',
    name: '2 Ton Pneumatic Hammer',
    image: '/images/2-ton-pneaumatic-hammer.jpg',
    capabilities: [
      'Max forging capacity: up to 80 kg per piece',
      'Ram weight: 2,000 kg',
      'Stroke rate: up to 100 blows per minute',
      'Suitable for medium-size forgings',
      'Ideal for hook nuts, small rounds, blanks',
    ],
    advantages: [
      'High throughput for repetitive forgings',
      'Lower tooling and die costs',
      'Flexible die setup for varied shapes',
      'Reliable and low-maintenance operation',
    ],
  },
  {
    id: 'manipulator-5t',
    name: '5 Ton Manipulator',
    image: '/images/5-ton-manupulator.jpg',
    capabilities: [
      'Grip load: 5,000 kg',
      'Billet length: up to 2,000 mm',
      'Full 360° billet rotation',
      'Positioning accuracy: ±2 mm',
      'Works seamlessly with 5T hydraulic hammer',
    ],
    advantages: [
      'Handles very large, heavy billets safely',
      'Reduces operator fatigue and risk',
      'Improves forging precision and consistency',
      'Speeds up heat utilization per heat',
    ],
  },
  {
    id: 'manipulator-3t',
    name: '3 Ton Manipulator',
    image: '/images/3-ton-manupulator.png',
    capabilities: [
      'Grip load: 3,000 kg',
      'Billet length: up to 1,500 mm',
      'Full 360° billet rotation',
      'Working reach: 3,500 mm',
    ],
    advantages: [
      'Ideal for medium-size billets and shafts',
      'Accurate billet orientation during forging',
      'Reduces cycle time significantly',
      'Enhances overall workforce safety',
    ],
  },
  {
    id: 'vtl-machine',
    name: 'VTL Machine',
    image: '/images/machine-vtl-1.jpg',
    capabilities: [
      'Swing diameter: up to 1,600 mm',
      'Max component height: 1,000 mm',
      'Table load capacity: 8,000 kg',
      'Spindle speed range: 5–200 RPM',
    ],
    advantages: [
      'Handles large-diameter flanges and rings',
      'Gravity assists workholding — no distortion',
      'Superior surface finish and dimensional accuracy',
      'Suitable for facing, boring, and turning ops',
    ],
  },
  {
    id: 'lathe-machine',
    name: 'Lathe Machine',
    image: '/images/machine-lathe-1.jpg',
    capabilities: [
      'Swing over bed: 800 mm',
      'Distance between centres: up to 3,000 mm',
      'Max component weight: 2,000 kg',
      'Spindle speed range: 10–600 RPM',
    ],
    advantages: [
      'Versatile: turning, facing, threading, tapering',
      'Precision finish on shafts and spindles',
      'Wide tooling compatibility',
      'Handles long shafts and heavy workpieces',
    ],
  },
  {
    id: 'drill-machine',
    name: 'Drill Machine',
    image: '/images/machine-drill.jpg',
    capabilities: [
      'Max drilling diameter: Up to 50–80 mm (in mild steel)',
      'Spindle-to-column reach (arm length): Up to 1,600 mm',
      'Max spindle-to-base distance: 1,400 mm',
      'Spindle speed range: 25–2,000 RPM',
    ],
    advantages: [
      'Handles large, heavy, and awkward workpieces over a wide surface area',
      'Radial arm swings 360° — position the drill anywhere without moving the part',
      'High rigidity minimizes tool deflection for accurate, straight holes',
      'Suitable for drilling, tapping, reaming, and counterboring ops',
    ],
  },
  {
    id: 'shaper-machine',
    name: 'Shaper Machine',
    image: '/images/machine-shaper.jpg',
    capabilities: [
      'Max stroke length: Up to 600–800 mm',
      'Ram speed range: 10–60 strokes per minute',
      'Table travel (Horizontal / Vertical): Up to 650 mm / 350 mm',
      'Tool head angular adjustment: 0°–60° (for cutting bevels and angles)',
    ],
    advantages: [
      'Handles flat surfaces, slots, keyways, and complex internal contours',
      'Single-point cutting tools are inexpensive and highly economical to sharpen',
      'Quick-return mechanism minimizes idle time during the non-cutting stroke',
      'Suitable for horizontal, vertical, and angular machining operations',
    ],
  },
  {
    id: 'hydraulic-machine-15t',
    name: '15 Ton Hydraulic Machine',
    image: '/images/machine-hydraulic-15t.jpg',
    capabilities: [
      'Maximum pressing capacity: 15 metric tons (150 kN of force)',
      'Ram stroke length: Up to 300–400 mm',
      'Max daylight (open height): Up to 500–600 mm',
      'Approach speed / Pressing speed: Up to 150 mm/s / 15 mm/s',
    ],
    advantages: [
      'Handles high-force assembly, pressing, stamping, bending, and punching ops',
      'Delivers smooth, continuous, and adjustable pressure throughout the entire stroke',
      'Built-in pressure relief valves prevent overloading to protect tooling and parts',
      'Compact footprints with dual-palm safety controls for safe operator handling',
    ],
  },
  {
    id: 'hydraulic-machine-9t',
    name: '9 Ton Hydraulic Machine',
    image: '/images/machine-hydraulic-9t.jpg',
    capabilities: [
      'Maximum pressing capacity: 9 metric tons (90 kN of force)',
      'Ram stroke length: Up to 200–300 mm',
      'Max daylight (open height): Up to 400–450 mm',
      'Approach speed / Pressing speed: Up to 180 mm/s / 20 mm/s',
    ],
    advantages: [
      'Handles precision assembly, bearing insertion, small-scale stamping, and crimping ops',
      'High-speed cycle rates make it ideal for high-volume, repetitive benchtop manufacturing',
      'Precise force-repeatability prevents part damage on delicate components',
      'Small footprint integrates easily into existing lean assembly lines and work cells',
    ],
  },

]

export const MATERIALS = [
  {
    grade: 'EN9',
    type: 'Medium Carbon Steel',
    strength: 'UTS: 620–850 MPa',
    description:
      'Medium carbon steel with good strength and machinability. Ideal for shafts, gears, keys, and general engineering components requiring moderate hardness and toughness.',
    uses: ['Shafts', 'Gears', 'Couplings', 'Axles'],
  },
  {
    grade: 'EN19',
    type: 'Cr-Mo Alloy Steel',
    strength: 'UTS: 850–1050 MPa',
    description:
      'High-tensile chromium-molybdenum alloy steel with excellent toughness and fatigue resistance. Widely used for high-stress components like crankshafts, connecting rods, and worm gears.',
    uses: ['Crankshafts', 'Pinions', 'Worm shafts', 'Heavy duty gears'],
  },
  {
    grade: 'EN24',
    type: 'Ni-Cr-Mo Alloy Steel',
    strength: 'UTS: 1000–1200 MPa',
    description:
      'Premium Ni-Cr-Mo alloy steel with outstanding impact toughness and wear resistance. Preferred for the most demanding applications — heavy-duty gears, large pinions, and highly loaded shafts.',
    uses: ['High-load gears', 'Large pinions', 'Turbine shafts', 'Mining components'],
  },
  {
    grade: 'DB6',
    type: 'Hot-Work Die Steel',
    strength: 'Hardness: 38–48 HRC',
    description:
      'Premium hot-work tool steel with excellent thermal fatigue and heat-check resistance. Used for dies, punches, and critical tooling in high-temperature forging operations.',
    uses: ['Forging dies', 'Pinion blanks', 'Wear-resistant inserts'],
  },
  {
    grade: 'EN8D',
    type: 'Medium Carbon Steel',
    strength: 'UTS: 540–700 MPa',
    description:
      'Unalloyed medium carbon steel with reliable tensile strength. Widely used for axles, couplings, crane hook nuts, and general structural components.',
    uses: ['Hook nuts', 'Axles', 'Couplings', 'Bolts'],
  },
  {
    grade: 'CL4',
    type: 'Crane Grade Carbon Steel',
    strength: 'UTS: 600–800 MPa',
    description:
      'Heavy-duty carbon steel specially processed for lifting and hoisting equipment. Meets stringent IS 3832 standards — preferred material for crane hook nuts in heavy EOT applications.',
    uses: ['Crane hook nuts', 'Shackles', 'Lifting gear'],
  },
  {
    grade: 'CL2',
    type: 'Light Crane Grade Steel',
    strength: 'UTS: 450–600 MPa',
    description:
      'Lighter-grade carbon steel for crane components in moderate-duty applications. Cost-effective solution with reliable mechanical properties for smaller cranes and hoists.',
    uses: ['Light crane hooks', 'Hoist components', 'Material handling'],
  },
]

export const TESTIMONIALS = [
  {
    name: 'Rajiv Mehta',
    position: 'Procurement Manager',
    company: 'Tata Steel Ltd.',
    text: 'Vikash Forge has been our preferred forging supplier for over eight years. Their consistency in quality and on-time delivery has made them an indispensable partner in our supply chain. Every batch is inspected and dispatched with proper test certificates.',
    rating: 5,
  },
  {
    name: 'Suresh Krishnaswamy',
    position: 'Head – Engineering',
    company: 'BEML Limited',
    text: 'We have sourced a variety of precision forgings from Vikash Forge for our railway applications. Their technical knowledge and ability to meet tight tolerances is commendable. The team is always responsive to our specification changes.',
    rating: 5,
  },
  {
    name: 'Anil Bharadwaj',
    position: 'Purchase Director',
    company: 'Bharat Heavy Electricals',
    text: 'Reliable quality, competitive pricing, and a proactive team — Vikash Forge checks all the boxes. Their hook nuts have performed flawlessly across multiple crane installations at our facilities in Haridwar and Bhopal.',
    rating: 5,
  },
]

export const INDUSTRIES = [
  {
    name: 'Railways',
    description:
      'Supplying precision-forged components for Indian Railways and private railway operators since 1995. Our forgings meet RDSO standards for safety-critical applications.',
    components: ['Buffer housings', 'Draft gear components', 'Axle box housings', 'Wheel disc blanks'],
    image: '/images/industries-bg.jpg',
  },
  {
    name: 'Automotive',
    description:
      'High-strength forged parts for commercial vehicle manufacturers, OEMs, and tier-1 auto component suppliers across India.',
    components: ['Crankshaft blanks', 'Differential gear blanks', 'Steering knuckle blanks', 'Wheel hub blanks'],
    image: '/images/industries-bg.jpg',
  },
  {
    name: 'Heavy Engineering',
    description:
      'Custom forgings for cement plants, steel rolling mills, paper mills, and power generation equipment manufacturers.',
    components: ['Pinions', 'Shafts', 'Coupling flanges', 'Bearing housing blanks'],
    image: '/images/industries-bg.jpg',
  },
]

export const CONTACT = {
  address: 'Plot No. 47, Industrial Area, Shibpur, Howrah – 711 102, West Bengal, India',
  phone: ['+91-98310-XXXXX', '+91-033-XXXX-XXXX'],
  email: 'enquiry@vikashforge.com',
  hours: {
    weekdays: 'Monday – Saturday: 9:00 AM – 6:30 PM',
    sunday: 'Sunday: Closed',
  },
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Howrah,+West+Bengal,+India&t=&z=14&ie=UTF8&iwloc=&output=embed',
}
