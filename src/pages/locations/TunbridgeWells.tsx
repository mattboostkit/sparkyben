import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import ServiceCard from '../../components/ServiceCard';
import CTABanner from '../../components/CTABanner';
import { services } from '../../data/services';

const TunbridgeWells: React.FC = () => {
  const featuredServices = services.slice(0, 6);
  
  return (
    <div>
      <Helmet>
        <title>Electrician Tunbridge Wells | 24/7 Emergency Electrical Services | SparkyBen</title>
        <meta name="description" content="NICEIC approved electrician in Tunbridge Wells. Emergency call-outs, rewiring, consumer units, EV charging points. Serving Royal Tunbridge Wells & surrounding areas. Call 01892 336 282." />
        <meta name="keywords" content="electrician Tunbridge Wells, emergency electrician Royal Tunbridge Wells, electrical services TN1, TN2, TN4, NICEIC electrician Kent" />
        <link rel="canonical" href="https://sparkyben.co.uk/locations/tunbridge-wells" />
        <meta property="og:title" content="Electrician Tunbridge Wells | 24/7 Emergency Electrical Services" />
        <meta property="og:description" content="NICEIC approved electrician in Tunbridge Wells. Emergency call-outs, rewiring, consumer units, EV charging points. Call 01892 336 282." />
        <meta property="og:url" content="https://sparkyben.co.uk/locations/tunbridge-wells" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <MapPin className="text-teal mr-2" size={24} />
            <span className="text-teal font-medium">Royal Tunbridge Wells</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Electrician in Tunbridge Wells
          </h1>
          <p className="text-lg mb-8 max-w-3xl">
            SparkyBen Electrical provides comprehensive electrical services throughout Royal Tunbridge Wells and surrounding areas including Southborough, Pembury, and Langton Green. As NICEIC approved contractors, we deliver safe, reliable electrical solutions for homes and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+441892336282" 
              className="bg-teal hover:bg-teal/90 text-white font-bold py-3 px-6 rounded-md transition-colours inline-flex items-center justify-center"
            >
              <Phone size={20} className="mr-2" />
              Call 01892 336 282
            </a>
            <Link 
              to="/contact" 
              className="bg-white text-secondary hover:bg-neutral-light font-bold py-3 px-6 rounded-md transition-colours inline-flex items-center justify-center"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Local Area Coverage */}
      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6">Areas We Cover in Tunbridge Wells</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Royal Tunbridge Wells Town Centre',
              'Southborough',
              'Pembury',
              'Langton Green',
              'Rusthall',
              'High Brooms',
              'Sherwood',
              'St Johns',
              'Hawkenbury',
              'Bidborough',
              'Speldhurst',
              'Ashurst'
            ].map((area) => (
              <div key={area} className="flex items-center">
                <CheckCircle2 size={16} className="text-teal mr-2 flex-shrink-0" />
                <span className="text-neutral-dark">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-neutral-dark">
              <strong>Postcode Areas:</strong> We cover all TN1, TN2, and TN4 postcodes in the Tunbridge Wells area, with rapid response times typically within 30-60 minutes for emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-8">Why Choose SparkyBen for Electrical Services in Tunbridge Wells?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Local Knowledge & Expertise</h3>
              <p className="text-neutral-dark mb-4">
                With over 15 years serving Tunbridge Wells, we understand the unique electrical requirements of properties in the area, from Victorian conversions in the town centre to modern developments in High Brooms.
              </p>
              <p className="text-neutral-dark mb-4">
                We're familiar with local building regulations and work closely with Tunbridge Wells Borough Council to ensure all installations meet required standards.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Rapid Response Times</h3>
              <p className="text-neutral-dark mb-4">
                Based locally, we can reach most areas of Tunbridge Wells within 30-60 minutes for emergency call-outs. Our 24/7 service ensures you're never left without power when you need it most.
              </p>
              <p className="text-neutral-dark mb-4">
                Regular customers in TN1, TN2, and TN4 postcodes benefit from priority scheduling and competitive local rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-4">Electrical Services in Tunbridge Wells</h2>
          <p className="text-neutral-dark mb-8 max-w-3xl">
            From emergency repairs to complete rewires, we provide all electrical services for Tunbridge Wells homes and businesses:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/services" 
              className="inline-flex items-center text-teal font-medium hover:underline"
            >
              View All Services <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Local Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-8">Recent Projects in Tunbridge Wells</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="font-semibold text-secondary mb-2">Victorian House Rewire - Camden Park</h3>
              <p className="text-neutral-dark text-sm mb-3">
                Complete rewire of 4-bedroom Victorian property, including new consumer unit and outdoor lighting installation.
              </p>
              <div className="flex items-center text-sm text-neutral-dark">
                <Clock size={14} className="mr-1" />
                <span>Completed in 5 days</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="font-semibold text-secondary mb-2">EV Charging Point - Nevill Park</h3>
              <p className="text-neutral-dark text-sm mb-3">
                Installation of 7kW home charging point with dedicated circuit and smart monitoring capabilities.
              </p>
              <div className="flex items-center text-sm text-neutral-dark">
                <Clock size={14} className="mr-1" />
                <span>Same day installation</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="font-semibold text-secondary mb-2">Shop Fit-Out - The Pantiles</h3>
              <p className="text-neutral-dark text-sm mb-3">
                Complete electrical installation for boutique retail space including LED lighting and emergency systems.
              </p>
              <div className="flex items-center text-sm text-neutral-dark">
                <Clock size={14} className="mr-1" />
                <span>Weekend completion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <CTABanner type="location" location="Tunbridge Wells" />
        </div>
      </section>
    </div>
  );
};

export default TunbridgeWells;