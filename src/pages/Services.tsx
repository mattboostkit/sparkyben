import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ServiceCard from '../components/ServiceCard';
import CTABanner from '../components/CTABanner';
import ResponsiveImage from '../components/ResponsiveImage';
import EnhancedSchemaOrg from '../components/EnhancedSchemaOrg';
import { services, serviceCategories } from '../data/services';
import { heroImages } from '../data/images';

const Services: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Electrical Services Kent | Domestic & Commercial Electrician | SparkyBen</title>
        <meta name="description" content="Complete electrical services in Tunbridge Wells, Tonbridge & Sevenoaks. Rewiring, consumer units, EV charging, emergency repairs. NICEIC approved with £5M insurance. Call 01892 336 282." />
        <meta name="keywords" content="electrical services Kent, electrician services, rewiring, consumer unit, EV charging, emergency electrician, NICEIC electrician" />
        <link rel="canonical" href="https://sparkyben.co.uk/services" />
        <meta property="og:title" content="Electrical Services Kent | Domestic & Commercial Electrician" />
        <meta property="og:description" content="Complete electrical services in Kent. NICEIC approved with £5M insurance. Call 01892 336 282." />
        <meta property="og:url" content="https://sparkyben.co.uk/services" />
      </Helmet>
      
      <EnhancedSchemaOrg 
        type="breadcrumb"
        breadcrumbs={[
          { name: 'Home', url: 'https://sparkyben.co.uk' },
          { name: 'Services', url: 'https://sparkyben.co.uk/services' }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-16">
        <div className="absolute inset-0 opacity-20">
          <ResponsiveImage 
            src={heroImages.services.medium} 
            srcSet={`${heroImages.services.small} 800w, ${heroImages.services.medium} 1280w, ${heroImages.services.large} 1920w`}
            sizes="100vw"
            alt={heroImages.services.alt} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Electrical Services</h1>
          <p className="text-lg max-w-2xl opacity-90">
            We provide a comprehensive range of electrical services for domestic and commercial properties in Tunbridge Wells, Tonbridge, and surrounding areas.
          </p>
        </div>
      </section>
      
      {/* Services Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {serviceCategories.map(category => (
            <div key={category.id} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map(service => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* All Services */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6">
            All Services
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Emergency Call-Out Banner */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <CTABanner type="emergency" />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <CTABanner type="quote" />
        </div>
      </section>
    </div>
  );
};

export default Services;