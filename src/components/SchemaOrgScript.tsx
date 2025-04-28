import React from 'react';

/**
 * Component that adds Schema.org structured data to the website
 * Using JSON-LD format for better SEO
 */
const SchemaOrgScript: React.FC = () => {
  // This data would typically be fetched from your CMS or API
  const schema = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "name": "SparkyBen Electrical",
    "url": "https://sparkyben.co.uk",
    "logo": "https://sparkyben.co.uk/logo.png",
    "image": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "description": "Professional electrical services in Tunbridge Wells, Tonbridge, and surrounding areas. NICEIC approved contractor delivering high-quality, reliable electrical solutions.",
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
    "telephone": "01892 336 282",
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
        "description": "By appointment only"
      }
    ],
    "priceRange": "££",
    "founder": {
      "@type": "Person",
      "name": "Ben Carter"
    },
    "sameAs": [
      "https://www.facebook.com/sparkybenelectrical",
      "https://www.instagram.com/sparkybenelectrical"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.132377,
        "longitude": 0.263695
      },
      "geoRadius": "15mi"
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaOrgScript;