import { Service, ServiceCategory } from '../types';

export const services: Service[] = [
  {
    id: 'new-builds',
    title: 'New Builds, Extensions & Re-wires',
    description: 
      `Our comprehensive electrical services for new builds, extensions, and rewires ensure your property meets the latest safety standards and electrical regulations.
      
      We handle the complete electrical installation process for new properties and extensions, from initial design and planning to final testing and certification. Whether you're building a new home, adding an extension, or renovating an existing property, we provide all electrical services needed to meet Building Regulations and ensure your electrics are safe, efficient, and future-proof.
      
      For older properties, our rewiring service brings outdated electrical systems up to modern standards, incorporating energy-efficient solutions and smart technology options if desired. We work closely with homeowners, architects, and builders to deliver seamless installations that meet your specific requirements.
      
      Our professional team manages the entire project with minimal disruption, ensuring all work is completed to the highest standards and fully certified.`,
    icon: 'home',
    imageUrl: 'new-builds', // Will be resolved via images.ts
    shortDescription: 'Complete electrical installations for new builds, extensions, and full rewiring projects with certified compliance to the latest regulations.'
  },
  {
    id: 'power-installation',
    title: 'Power Installation',
    description: 
      `Our power installation services cover all aspects of electrical power needs for your property, from additional sockets to complete circuit installations.
      
      We specialise in adding, upgrading, and relocating power points to suit your changing needs. Whether you need new sockets in convenient locations, dedicated circuits for high-power appliances like electric cookers and showers, or outdoor power supplies for gardens, garages, and outbuildings, our experienced electricians deliver reliable, safe installations.
      
      For home offices and media rooms, we can install specialised power configurations with surge protection. We also offer USB integrated sockets, pop-up worktop outlets, and floor-mounted power solutions for flexible living spaces.
      
      All our power installations include proper load calculations to ensure your electrical system can handle your requirements safely and efficiently, with careful consideration of cable sizing and circuit protection to maintain electrical safety.`,
    icon: 'power',
    imageUrl: 'power-installation', // Will be resolved via images.ts
    shortDescription: 'Professional installation of additional sockets, dedicated circuits, and specialised power solutions for homes and businesses.'
  },
  {
    id: 'lighting',
    title: 'Lighting Installations',
    description: 
      `Transform your space with our professional lighting installation services, covering everything from basic lighting to smart lighting systems.
      
      We design and install all types of lighting solutions including recessed downlights, pendant fixtures, track lighting, chandeliers, LED strips, under-cabinet lighting, and outdoor lighting systems. Our services cover both new installations and upgrades of existing lighting configurations.
      
      For enhanced comfort and energy efficiency, we install dimmer switches, motion sensors, and daylight sensors. Our smart lighting installations allow you to control your lights via smartphone apps or voice commands, create customised lighting scenes, and programme schedules for automated operation.
      
      Our lighting design expertise helps create the perfect ambiance for each area of your home or business while maximising energy efficiency. We work with you to develop lighting plans that enhance architectural features, provide proper task lighting, and create the right mood for different spaces and occasions.`,
    icon: 'lightbulb',
    imageUrl: 'lighting', // Will be resolved via images.ts
    shortDescription: 'Comprehensive lighting solutions from basic fixtures to advanced smart systems for enhanced comfort, aesthetics, and energy efficiency.'
  },
  {
    id: 'fire-alarms',
    title: 'Fire and Smoke Alarms',
    description: 
      `Protect your property and loved ones with our professional fire and smoke alarm installation services that comply with the latest building regulations.
      
      We supply and install a range of fire detection systems, from basic smoke alarms to comprehensive interconnected systems with heat detectors, carbon monoxide monitors, and remote monitoring capabilities. Our installations ensure that when one alarm detects danger, all alarms sound to provide maximum warning time.
      
      For properties with specific requirements, we install specialised detection equipment including optical smoke detectors (ideal for living spaces), heat alarms (for kitchens and garages), and multi-sensor detectors for enhanced protection. We also offer systems with strobe lights and vibration pads for residents with hearing impairments.
      
      All our installations comply with BS 5839-6 standards and current building regulations. We provide full documentation and user training to ensure you understand how to test and maintain your system for continued reliability.`,
    icon: 'bell-ring',
    imageUrl: 'fire-alarms', // Will be resolved via images.ts
    shortDescription: 'Comprehensive fire detection systems with interconnected alarms, specialised detectors, and compliance with current safety regulations.'
  },
  {
    id: 'fuseboard',
    title: 'Fuseboard Replacements',
    description: 
      `Your fuseboard (consumer unit) is the heart of your property's electrical system, and keeping it up to date is essential for safety.
      
      We specialise in replacing outdated fuseboards with modern consumer units featuring advanced protective devices including RCDs (Residual Current Devices) and RCBOs (Residual Current Breaker with Overload) that provide superior protection against electric shock and fire risks. These modern units react in milliseconds to dangerous electrical faults, disconnecting power before serious harm can occur.
      
      Our fuseboard replacement service includes a thorough assessment of your existing electrical system to identify any issues that need addressing before upgrade. We carefully plan each installation to minimise disruption, typically completing most domestic replacements within a single day.
      
      Every installation is followed by comprehensive testing of the entire electrical system to ensure everything functions correctly. We provide full documentation including an Electrical Installation Certificate, circuit schedules, and user instructions, ensuring compliance with BS 7671 (18th Edition Wiring Regulations).`,
    icon: 'box',
    imageUrl: 'fuseboard', // Will be resolved via images.ts
    shortDescription: 'Modern consumer unit upgrades with advanced protection features, comprehensive system testing, and full certification.'
  },
  {
    id: 'fault-finding',
    title: 'Fault Finding and Rectification',
    description: 
      `When electrical problems occur, our fault finding and rectification service quickly identifies and resolves the issue, restoring safety and functionality.
      
      We diagnose a wide range of electrical faults using specialised testing equipment and systematic problem-solving approaches. Common issues we address include circuit breakers that keep tripping, intermittent power outages, partial power loss, flickering lights, unusual buzzing sounds, and hot spots in electrical installations.
      
      Our methodical approach includes visual inspections, advanced electrical testing, thermal imaging where appropriate, and systematic circuit isolation to efficiently locate problems without unnecessary disruption or damage to your property.
      
      Once identified, we'll explain the issue in clear, non-technical language and provide cost-effective solution options. Our electricians carry commonly needed parts and materials to enable immediate repairs in most cases, getting your electrical system back to safe working order with minimal delay.`,
    icon: 'search',
    imageUrl: 'fault-finding', // Will be resolved via images.ts
    shortDescription: 'Advanced diagnostic services for electrical problems with efficient, long-lasting repairs and minimal disruption.'
  },
  {
    id: 'testing',
    title: 'Testing & Certification',
    description: 
      `Our comprehensive testing and certification services ensure your property's electrical system is safe, compliant with current regulations, and properly documented.
      
      We provide detailed Electrical Installation Condition Reports (EICR) for existing properties, thoroughly inspecting and testing all accessible parts of the electrical installation. This identifies any potential hazards, non-compliances with current regulations, or components nearing the end of their useful life. For landlords, these reports are now legally required every five years for rental properties.
      
      For new installations and significant alterations, we issue certification confirming compliance with BS 7671 (18th Edition Wiring Regulations). This documentation is essential for building regulations approval, insurance purposes, and property sales.
      
      Our testing procedures use calibrated instruments to verify the safety of your installation, including insulation resistance testing, earth continuity measurement, RCD operation verification, polarity checking, and earth fault loop impedance measurement. All testing is conducted by qualified electricians with specific training in inspection and testing procedures.`,
    icon: 'clipboard-check',
    imageUrl: 'testing', // Will be resolved via images.ts
    shortDescription: 'Comprehensive electrical safety inspections, testing, and certification for compliance with the latest regulations.'
  },
  {
    id: 'phone-data',
    title: 'Phone, TV & Data Cabling',
    description: 
      `Stay connected with our comprehensive communication and data cabling services for both residential and commercial properties.
      
      We install, relocate, and upgrade telephone points, TV aerial and satellite connection points, data network cabling, and WiFi optimisation solutions. Our structured cabling systems provide reliable, high-speed connectivity throughout your property, supporting modern internet and communication needs.
      
      For home entertainment systems, we install TV points in optimal locations with proper signal distribution. Our network cabling services include Cat6/Cat6a ethernet installations that support speeds up to 10Gbps for demanding applications like video streaming, online gaming, and smart home systems.
      
      We also offer WiFi coverage assessments and enhancement solutions, including access point placement optimisation and mesh network installations to eliminate dead zones and ensure consistent connectivity throughout your property. All installations are neatly executed with concealed cabling where possible and proper cable management.`,
    icon: 'wifi',
    imageUrl: 'phone-data', // Will be resolved via images.ts
    shortDescription: 'Professional installation of telephone points, TV connections, high-speed data networks, and WiFi optimisation solutions.'
  },
  {
    id: 'ev-charging',
    title: 'Electric Vehicle Charging',
    description: 
      `Prepare for the future with our electric vehicle charging point installation service that provides convenient, efficient home charging for electric and hybrid vehicles.
      
      We supply and install a range of EV charging solutions, from basic home units to smart chargers that can be controlled via smartphone apps. Our installations include government-approved chargers that may qualify for available grants and incentives, helping reduce your installation costs.
      
      Before installation, we conduct a thorough assessment of your property's electrical capacity to ensure it can support EV charging. If necessary, we can upgrade your supply or implement load management solutions to balance charging with other household power demands.
      
      For homes with solar PV systems, we can install chargers that integrate with your renewable energy generation, allowing you to charge your vehicle using solar power when available. All our installations come with appropriate protection devices, comply with the latest regulations, and are notified to your distribution network operator as required.`,
    icon: 'car',
    imageUrl: 'ev-charging', // Will be resolved via images.ts
    shortDescription: 'Professional EV charging point installation with smart control options, safety features, and integration with renewable energy systems.'
  },
  {
    id: 'solar-pv',
    title: 'Solar PV',
    description: 
      `Harness the power of the sun with our solar PV installation service, reducing your energy bills and carbon footprint while increasing your energy independence.
      
      We design and install customised solar panel systems for homes and businesses, carefully considering factors like roof orientation, shading, local weather patterns, and your typical energy consumption to maximise efficiency and return on investment. Our installations use high-quality panels with extended warranties and efficient inverters to convert solar energy into usable electricity.
      
      To maximise your solar benefits, we can incorporate battery storage systems that store excess energy generated during sunny periods for use when solar production is low. We also offer smart energy management systems that optimise how your generated electricity is used throughout your home.
      
      Our service includes handling all necessary permissions, grid connection applications, and registration for any available incentive schemes. After installation, we provide comprehensive system documentation and user training, along with optional maintenance packages to ensure ongoing peak performance.`,
    icon: 'sun',
    imageUrl: 'solar-pv', // Will be resolved via images.ts
    shortDescription: 'Custom solar power solutions with battery storage options, smart energy management, and comprehensive support services.'
  },
  {
    id: 'smart-home',
    title: 'Smart Home Systems',
    description: 
      `Transform your home with our integrated smart home solutions that enhance comfort, convenience, security, and energy efficiency.
      
      We design and install comprehensive smart home systems that connect and automate lighting, heating, security, entertainment, and other home functions. Our solutions range from simple voice-controlled lighting setups to fully integrated whole-house automation systems that can be managed remotely via smartphone apps.
      
      For lighting automation, we install smart switches, dimmers, and bulbs that can be controlled individually or as groups, with programmable scenes for different activities and times of day. Our heating control systems include smart thermostats and zone controls that learn your preferences and optimise energy use while maintaining comfort.
      
      We also integrate security components including smart doorbells, cameras, motion sensors, and electronic locks into cohesive systems that work together seamlessly. All our installations are performed with careful attention to reliable connectivity, system security, and user-friendly operation, with comprehensive training provided on system use and maintenance.`,
    icon: 'smartphone',
    imageUrl: 'smart-home', // Will be resolved via images.ts
    shortDescription: 'Integrated smart home automation for lighting, heating, security, and entertainment with remote control capabilities.'
  },
  {
    id: 'security',
    title: 'Security Lighting & CCTV',
    description: 
      `Enhance your property's security with our professional security lighting and CCTV installations that deter intruders and provide peace of mind.
      
      We design and install effective security lighting systems including motion-activated floodlights, dusk-to-dawn lighting, and programmed illumination that creates the appearance of occupancy when you're away. Our installations focus on covering vulnerable entry points and dark areas around your property while avoiding light pollution and unnecessary energy use.
      
      Our CCTV solutions range from basic camera systems to advanced setups with high-definition cameras, night vision capabilities, and remote viewing options. We carefully position cameras to maximise coverage of entry points and valuable assets while respecting privacy boundaries and legal requirements.
      
      For comprehensive protection, we can integrate security lighting with CCTV and alarm systems, creating interconnected security that responds intelligently to potential threats. All our security installations include user training on system operation and maintenance, with options for ongoing support and periodic system checks to ensure continued effectiveness.`,
    icon: 'shield',
    imageUrl: 'security', // Will be resolved via images.ts
    shortDescription: 'Professional security lighting and CCTV systems with remote monitoring capabilities for enhanced property protection.'
  },
  {
    id: 'commercial',
    title: 'Commercial Electrical Services',
    description: 
      `Our comprehensive commercial electrical services support businesses of all sizes with reliable, code-compliant electrical installations and maintenance.
      
      We understand that businesses require minimal disruption, so we schedule work at convenient times and complete projects efficiently without compromising quality. Our commercial services include complete electrical installations for new premises, refurbishments of existing facilities, power distribution systems, commercial lighting designs, emergency lighting, fire alarm systems, and data network infrastructure.
      
      For retail environments, we create lighting designs that showcase products effectively while maintaining energy efficiency. In office spaces, we implement ergonomic lighting solutions, efficient power distribution, and reliable data networks. For industrial settings, we install robust electrical systems that can withstand demanding conditions and support specialised equipment.
      
      We also offer planned maintenance programmes that help prevent costly breakdowns and business interruption through regular inspections and preventative replacements. All our commercial work is fully documented with appropriate certification and technical files for compliance with regulatory requirements.`,
    icon: 'building',
    imageUrl: 'commercial', // Will be resolved via images.ts
    shortDescription: 'Specialised electrical services for commercial premises with minimal business disruption and full regulatory compliance.'
  }
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'residential',
    title: 'Residential Services',
    services: services.filter(s => ['new-builds', 'power-installation', 'lighting', 'fire-alarms', 'fuseboard', 'ev-charging', 'smart-home'].includes(s.id)),
  },
  {
    id: 'commercial',
    title: 'Commercial Services',
    services: services.filter(s => ['power-installation', 'lighting', 'testing', 'fault-finding', 'phone-data', 'commercial', 'security'].includes(s.id)),
  },
  {
    id: 'emergency',
    title: 'Emergency Services',
    services: services.filter(s => ['fault-finding', 'fuseboard'].includes(s.id)),
  },
  {
    id: 'sustainable',
    title: 'Sustainable Solutions',
    services: services.filter(s => ['solar-pv', 'ev-charging', 'lighting', 'smart-home'].includes(s.id)),
  },
];