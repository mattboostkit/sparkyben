import { PricingItem } from '../types';

export const pricingItems: PricingItem[] = [
  // Standard Hourly Rates
  {
    id: 'hourly-standard',
    service: 'Standard Rate (Mon-Fri 8am-6pm)',
    price: '£80',
    unit: '+VAT per hour',
    description: 'For general electrical work during normal business hours.',
    category: 'hourly-rates'
  },
  {
    id: 'hourly-evening',
    service: 'Evening Rate (Mon-Fri 6pm-midnight)',
    price: '£120',
    unit: '+VAT per hour',
    description: 'For work carried out weekday evenings.',
    category: 'hourly-rates'
  },
  {
    id: 'hourly-night',
    service: 'Night Rate (Mon-Fri midnight-8am)',
    price: '£200',
    unit: '+VAT per hour',
    description: 'For work carried out during weekday nights.',
    category: 'hourly-rates'
  },
  {
    id: 'hourly-weekend-day',
    service: 'Weekend Day Rate (Sat-Sun 8am-6pm)',
    price: '£120',
    unit: '+VAT per hour',
    description: 'For work carried out during weekend days.',
    category: 'hourly-rates'
  },
  {
    id: 'hourly-weekend-evening',
    service: 'Weekend Evening Rate (Sat-Sun 6pm-midnight)',
    price: '£200',
    unit: '+VAT per hour',
    description: 'For work carried out during weekend evenings.',
    category: 'hourly-rates'
  },
  {
    id: 'hourly-weekend-night',
    service: 'Weekend Night Rate (Sat-Sun midnight-8am)',
    price: '£240',
    unit: '+VAT per hour',
    description: 'For work carried out during weekend nights.',
    category: 'hourly-rates'
  },

  // Common Services
  {
    id: 'new-socket',
    service: 'Additional Socket Installation',
    price: '£80-120',
    unit: 'per socket',
    description: 'Supply and installation of a new standard double socket.',
    category: 'common-services'
  },
  {
    id: 'light-fitting',
    service: 'Light Fitting Replacement',
    price: '£40-60',
    unit: 'per fitting',
    description: 'Labour only for replacing existing light fittings (excludes cost of fitting).',
    category: 'common-services'
  },
  {
    id: 'consumer-unit',
    service: 'Consumer Unit Replacement',
    price: 'From £750',
    description: 'Supply and installation of a modern consumer unit with RCBO protection.',
    category: 'common-services'
  },
  {
    id: 'eicr',
    service: 'Electrical Installation Condition Report (EICR)',
    price: 'From £200',
    unit: '1-2 bedroom property',
    description: 'Full inspection and test of existing electrical installation.',
    category: 'common-services'
  },
  {
    id: 'eicr-large',
    service: 'EICR (3+ bedroom property)',
    price: 'From £250',
    description: 'Price varies based on property size and complexity.',
    category: 'common-services'
  },

  // Larger Projects
  {
    id: 'rewire-small',
    service: 'Full Rewire (1-2 bedroom property)',
    price: 'From £2500',
    description: 'Complete rewiring of smaller property including consumer unit.',
    category: 'larger-projects'
  },
  {
    id: 'rewire-large',
    service: 'Full Rewire (3+ bedroom property)',
    price: 'From £3500',
    description: 'Complete rewiring of larger property including consumer unit.',
    category: 'larger-projects'
  },
  {
    id: 'ev-charger',
    service: 'EV Charging Point Installation',
    price: 'From £650',
    description: 'Supply and installation of electric vehicle charging point.',
    category: 'larger-projects'
  },
  {
    id: 'solar-small',
    service: 'Solar PV System (2-4kW)',
    price: 'From £4000',
    description: 'Supply and installation of solar panel system for typical home.',
    category: 'larger-projects'
  },

  // Commercial
  {
    id: 'commercial-inspection',
    service: 'Commercial Electrical Inspection',
    price: 'From £200',
    description: 'Electrical inspection and certification for commercial premises.',
    category: 'commercial'
  },
  {
    id: 'commercial-maintenance',
    service: 'Commercial Maintenance Contract',
    price: 'From £350',
    unit: 'per annum',
    description: 'Regular inspection and maintenance service for businesses.',
    category: 'commercial'
  },
  {
    id: 'fire-alarm-service',
    service: 'Fire Alarm System Service',
    price: 'From £150',
    description: 'Testing and certification of commercial fire alarm systems.',
    category: 'commercial'
  }
];

export const pricingCategories = [
  {
    id: 'hourly-rates',
    title: 'Call Out Rates & Hourly Charges'
  },
  {
    id: 'common-services',
    title: 'Common Residential Services'
  },
  {
    id: 'larger-projects',
    title: 'Larger Home Projects'
  },
  {
    id: 'commercial',
    title: 'Commercial Services'
  }
];

export const paymentMethods = [
  'Credit/Debit Cards',
  'Bank Transfer',
  'Cash',
  'Cheque'
];