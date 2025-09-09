import React from 'react';

interface EnhancedSchemaOrgProps {
  type?: 'organization' | 'service' | 'breadcrumb' | 'review' | 'faq' | 'localBusiness';
  serviceName?: string;
  serviceDescription?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  reviewCount?: number;
  ratingValue?: number;
  faqItems?: Array<{ question: string; answer: string }>;
}

const EnhancedSchemaOrg: React.FC<EnhancedSchemaOrgProps> = ({ 
  type = 'organization',
  serviceName,
  serviceDescription,
  breadcrumbs,
  reviewCount = 47,
  ratingValue = 4.8,
  faqItems
}) => {
  // Base organization schema with enhanced local business details
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "name": "SparkyBen Electrical",
    "alternateName": "SparkyBen",
    "url": "https://sparkyben.co.uk",
    "logo": "https://sparkyben.co.uk/logo.png",
    "image": [
      "https://sparkyben.co.uk/images/hero-home.jpg",
      "https://sparkyben.co.uk/images/electrician-at-work.jpg",
      "https://sparkyben.co.uk/images/van.jpg"
    ],
    "description": "Professional NICEIC approved electrical contractor serving Tunbridge Wells, Tonbridge, Sevenoaks, and surrounding areas in Kent. Domestic and commercial electrical services with 24/7 emergency call-out.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tunbridge Wells",
      "addressRegion": "Kent",
      "postalCode": "TN1",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.132377,
      "longitude": 0.263695
    },
    "telephone": "+441892336282",
    "email": "info@sparkyben.co.uk",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
        "description": "Emergency call-outs available 24/7"
      }
    ],
    "priceRange": "££",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
    "currenciesAccepted": "GBP",
    "founder": {
      "@type": "Person",
      "name": "Ben Carter",
      "jobTitle": "Master Electrician"
    },
    "sameAs": [
      "https://www.facebook.com/sparkybenelectrical",
      "https://www.instagram.com/sparkybenelectrical"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Tunbridge Wells",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Kent"
        }
      },
      {
        "@type": "City",
        "name": "Tonbridge",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Kent"
        }
      },
      {
        "@type": "City",
        "name": "Sevenoaks",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Kent"
        }
      },
      {
        "@type": "City",
        "name": "Maidstone",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Kent"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue.toString(),
      "reviewCount": reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Electrical Repairs",
            "description": "24/7 emergency electrical fault finding and repairs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complete Rewiring",
            "description": "Full property rewiring service with minimal disruption"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consumer Unit Upgrades",
            "description": "Fuseboard replacement and upgrades to current regulations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EV Charging Installation",
            "description": "Electric vehicle charging point installation for homes and businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EICR Testing",
            "description": "Electrical Installation Condition Reports for landlords and homeowners"
          }
        }
      ]
    },
    "knowsAbout": [
      "Electrical Installation",
      "Electrical Repairs",
      "Rewiring",
      "Consumer Units",
      "EICR Testing",
      "PAT Testing",
      "EV Charging Points",
      "Smart Home Systems",
      "LED Lighting",
      "Solar PV Systems",
      "Emergency Electrical Services"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "NICEIC Approved Contractor",
        "recognizedBy": {
          "@type": "Organization",
          "name": "NICEIC"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "qualification",
        "name": "18th Edition Wiring Regulations (BS 7671)",
        "recognizedBy": {
          "@type": "Organization",
          "name": "City & Guilds"
        }
      }
    ]
  };

  // Service-specific schema
  const serviceSchema = serviceName && serviceDescription ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "ElectricalContractor",
      "name": "SparkyBen Electrical",
      "telephone": "+441892336282"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Kent"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceName
    }
  } : null;

  // Breadcrumb schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  // FAQ schema
  const faqSchema = faqItems && faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  // Review schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "ElectricalContractor",
      "name": "SparkyBen Electrical"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": ratingValue.toString(),
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Google Reviews"
    }
  };

  // Determine which schemas to include
  let schemas = [];
  
  if (type === 'organization' || type === 'localBusiness') {
    schemas.push(organizationSchema);
  }
  
  if (type === 'service' && serviceSchema) {
    schemas.push(serviceSchema);
  }
  
  if (type === 'breadcrumb' && breadcrumbSchema) {
    schemas.push(breadcrumbSchema);
  }
  
  if (type === 'faq' && faqSchema) {
    schemas.push(faqSchema);
  }
  
  if (type === 'review') {
    schemas.push(reviewSchema);
  }

  // If multiple schemas, wrap in @graph
  const finalSchema = schemas.length > 1 
    ? { "@context": "https://schema.org", "@graph": schemas }
    : schemas[0] || organizationSchema;

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  );
};

export default EnhancedSchemaOrg;