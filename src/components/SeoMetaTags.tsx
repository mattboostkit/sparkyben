import React from 'react';
import { Helmet } from 'react-helmet';

interface SeoMetaTagsProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

const SeoMetaTags: React.FC<SeoMetaTagsProps> = ({
  title = 'SparkyBen Electrical | Professional Electrician in Tunbridge Wells & Tonbridge',
  description = 'NICEIC approved electrician serving Tunbridge Wells, Tonbridge, and surrounding areas. Offering domestic & commercial electrical services with 24/7 emergency callout.',
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://sparkyben.co.uk/images/og-image.jpg', // Create this image when available
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph Tags for Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Geo Tags for Local Business */}
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="Tunbridge Wells" />
      
      {/* Canonical URL (also handled by CanonicalUrl component) */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default SeoMetaTags;