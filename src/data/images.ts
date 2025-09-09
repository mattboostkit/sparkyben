import { StaticImageData } from '../types';

// Define image data structure to include multiple sizes and alt text
export interface ResponsiveImage {
  small: string;
  medium: string;
  large: string;
  alt: string;
}

export interface ServiceImage {
  card: string;
  detail: string;
  alt: string;
}

// Brand assets
export const brandImages = {
  logo: {
    primary: "https://ik.imagekit.io/boostkit/SparkyBen/SparkyBen_Logo.webp?updatedAt=1745853082858",
    white: "https://ik.imagekit.io/boostkit/SparkyBen/SparkyBen_White.webp?updatedAt=1744387250131",
    alt: "Sparkyben Electrical Logo"
  }
};

// Hero background images
export const heroImages: Record<string, ResponsiveImage> = {
  home: {
    small: "https://ik.imagekit.io/boostkit/SparkyBen/PCB.jpg?updatedAt=1744737088558",
    medium: "https://ik.imagekit.io/boostkit/SparkyBen/PCB.jpg?updatedAt=1744737088558",
    large: "https://ik.imagekit.io/boostkit/SparkyBen/PCB.jpg?updatedAt=1744737088558",
    alt: "Electrical PCB Component"
  },
  about: {
    small: "https://ik.imagekit.io/boostkit/SparkyBen/PCB%202.jpg?updatedAt=1744737093614",
    medium: "https://ik.imagekit.io/boostkit/SparkyBen/PCB%202.jpg?updatedAt=1744737093614",
    large: "https://ik.imagekit.io/boostkit/SparkyBen/PCB%202.jpg?updatedAt=1744737093614",
    alt: "About SparkyBen"
  },
  services: {
    small: "https://images.unsplash.com/photo-1555963966-b7ae5252385a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    medium: "https://images.unsplash.com/photo-1555963966-b7ae5252385a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80",
    large: "https://images.unsplash.com/photo-1555963966-b7ae5252385a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Electrical Services"
  },
  contact: {
    small: "https://ik.imagekit.io/boostkit/SparkyBen/PCB%202.jpg?updatedAt=1744737093614",
    medium: "https://ik.imagekit.io/boostkit/SparkyBen/PCB%202.jpg?updatedAt=1744737093614",
    large: "https://ik.imagekit.io/boostkit/SparkyBen/PCB%202.jpg?updatedAt=1744737093614",
    alt: "Contact Us"
  },
  pricing: {
    small: "https://ik.imagekit.io/boostkit/SparkyBen/PCB%202.jpg?updatedAt=1744737093614",
    medium: "https://ik.imagekit.io/boostkit/SparkyBen/PCB%202.jpg?updatedAt=1744737093614",
    large: "https://ik.imagekit.io/boostkit/SparkyBen/PCB%202.jpg?updatedAt=1744737093614",
    alt: "Pricing"
  },
  testimonials: {
    small: "https://ik.imagekit.io/boostkit/SparkyBen/PCB%202.jpg?updatedAt=1744737093614",
    medium: "https://ik.imagekit.io/boostkit/SparkyBen/PCB%202.jpg?updatedAt=1744737093614",
    large: "https://ik.imagekit.io/boostkit/SparkyBen/PCB%202.jpg?updatedAt=1744737093614",
    alt: "Customer Testimonials"
  }
};

// Featured content images
export const contentImages = {
  aboutElectrician: {
    small: "https://ik.imagekit.io/boostkit/SparkyBen/SparkyBen%20About%20Me.jpg?updatedAt=1744737093427",
    medium: "https://ik.imagekit.io/boostkit/SparkyBen/SparkyBen%20About%20Me.jpg?updatedAt=1744737093427",
    large: "https://ik.imagekit.io/boostkit/SparkyBen/SparkyBen%20About%20Me.jpg?updatedAt=1744737093427",
    alt: "Electrician at work"
  },
  homeFeature: {
    small: "https://ik.imagekit.io/boostkit/SparkyBen/SparkyBen%20About%20Me.jpg?updatedAt=1744737093427",
    medium: "https://ik.imagekit.io/boostkit/SparkyBen/SparkyBen%20About%20Me.jpg?updatedAt=1744737093427",
    large: "https://ik.imagekit.io/boostkit/SparkyBen/SparkyBen%20About%20Me.jpg?updatedAt=1744737093427",
    alt: "Electrician at work"
  }
};

// Service images - for cards and detailed pages
// Using kebab-case keys to match service IDs
export const serviceImages: Record<string, ServiceImage> = {
  'new-builds': {
    card: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    detail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "New Builds, Extensions & Re-wires"
  },
  'power-installation': {
    card: "https://ik.imagekit.io/boostkit/SparkyBen/Fuseboard%20600x400.jpg?updatedAt=1744737091461",
    detail: "https://ik.imagekit.io/boostkit/SparkyBen/Fuseboard%20600x400.jpg?updatedAt=1744737091461",
    alt: "Power Installation"
  },
  'lighting': {
    card: "https://ik.imagekit.io/boostkit/SparkyBen/Lighting%202%20600x400.jpg?updatedAt=1744737091252",
    detail: "https://ik.imagekit.io/boostkit/SparkyBen/Lighting%202%20600x400.jpg?updatedAt=1744737091252",
    alt: "Lighting Installations"
  },
  'fire-alarms': {
    card: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    detail: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Fire and Smoke Alarms"
  },
  'fuseboard': {
    card: "https://ik.imagekit.io/boostkit/SparkyBen/Fuseboard%20600x400.jpg?updatedAt=1744737091461",
    detail: "https://ik.imagekit.io/boostkit/SparkyBen/Fuseboard%20600x400.jpg?updatedAt=1744737091461",
    alt: "Fuseboard Replacements"
  },
  'fault-finding': {
    card: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    detail: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Fault Finding and Rectification"
  },
  'testing': {
    card: "https://images.unsplash.com/photo-1590935217756-8d784760c10d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    detail: "https://images.unsplash.com/photo-1590935217756-8d784760c10d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Testing & Certification"
  },
  'phone-data': {
    card: "https://images.unsplash.com/photo-1601996759374-22d3c467c1b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    detail: "https://images.unsplash.com/photo-1601996759374-22d3c467c1b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Phone, TV & Data Cabling"
  },
  'ev-charging': {
    card: "https://images.unsplash.com/photo-1726220198700-9a50ee1afa6c?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail: "https://images.unsplash.com/photo-1726220198700-9a50ee1afa6c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Electric Vehicle Charging"
  },
  'solar-pv': {
    card: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    detail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Solar PV"
  },
  'smart-home': {
    card: "https://images.unsplash.com/photo-1558002038-1055907dc35f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    detail: "https://images.unsplash.com/photo-1558002038-1055907dc35f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Smart Home Systems"
  },
  'security': {
    card: "https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    detail: "https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Security Lighting & CCTV"
  },
  'commercial': {
    card: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    detail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Commercial Electrical Services"
  },
  'emergency': {
    card: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    detail: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "24/7 Emergency Electrical Services"
  },
  'rewiring': {
    card: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    detail: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Complete House Rewiring"
  },
  'repairs': {
    card: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    detail: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Electrical Repairs and Maintenance"
  },
  'inspections': {
    card: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    detail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Electrical Inspections and Testing"
  }
};

// Helper functions for responsive images
export const getHeroImageUrl = (page: string, screenSize: 'small' | 'medium' | 'large' = 'large'): string => {
  return (heroImages[page] || heroImages.home)[screenSize];
};

export const getHeroImageAlt = (page: string): string => {
  return (heroImages[page] || heroImages.home).alt;
};

export const getServiceCardImage = (serviceId: string): string => {
  // Direct lookup since we're now using kebab-case keys
  return serviceImages[serviceId]?.card || serviceImages['new-builds'].card;
};

export const getServiceDetailImage = (serviceId: string): string => {
  // Direct lookup since we're now using kebab-case keys
  return serviceImages[serviceId]?.detail || serviceImages['new-builds'].detail;
};

export const getServiceImageAlt = (serviceId: string): string => {
  // Direct lookup since we're now using kebab-case keys
  return serviceImages[serviceId]?.alt || serviceImages['new-builds'].alt;
};