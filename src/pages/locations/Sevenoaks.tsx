import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import ServiceCard from '../../components/ServiceCard';
import CTABanner from '../../components/CTABanner';
import { services } from '../../data/services';

const Sevenoaks: React.FC = () => {
  const featuredServices = services.slice(0, 6);
  
  return (
    <div>
      <Helmet>
        <title>Electrician Sevenoaks | NICEIC Electrical Contractor TN13, TN14, TN15 | SparkyBen</title>
        <meta name="description" content="Professional electrician in Sevenoaks. NICEIC approved for rewiring, consumer units, EICR testing, EV charging. Covering Sevenoaks, Otford, Kemsing, Westerham. Call 01892 336 282." />
        <meta name="keywords" content="electrician Sevenoaks, emergency electrician TN13, electrical services TN14, TN15, NICEIC Sevenoaks, electrical contractor Sevenoaks Kent" />
        <link rel="canonical" href="https://sparkyben.co.uk/locations/sevenoaks" />
        <meta property="og:title" content="Electrician Sevenoaks | NICEIC Electrical Contractor TN13, TN14, TN15" />
        <meta property="og:description" content="Professional electrician in Sevenoaks. NICEIC approved for rewiring, consumer units, EICR testing, EV charging. Call 01892 336 282." />
        <meta property="og:url" content="https://sparkyben.co.uk/locations/sevenoaks" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <MapPin className="text-teal mr-2" size={24} />
            <span className="text-teal font-medium">Sevenoaks & District</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Reliable Electrician Services in Sevenoaks
          </h1>
          <p className="text-lg mb-8 max-w-3xl">
            SparkyBen Electrical provides professional electrical services throughout Sevenoaks and the surrounding villages. From Riverhead to Westerham, we're your trusted local electrician for all domestic and commercial electrical needs in the TN13, TN14, and TN15 postcode areas.
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
              Book Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Local Area Coverage */}
      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6">Sevenoaks Areas We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Sevenoaks Town',
              'Riverhead',
              'Dunton Green',
              'Otford',
              'Kemsing',
              'Seal',
              'Westerham',
              'Brasted',
              'Sundridge',
              'Chevening',
              'Shoreham',
              'Eynsford'
            ].map((area) => (
              <div key={area} className="flex items-center">
                <CheckCircle2 size={16} className="text-teal mr-2 flex-shrink-0" />
                <span className="text-neutral-dark">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-neutral-dark">
              <strong>Postcode Areas:</strong> Complete coverage of TN13, TN14, and TN15. We typically reach most Sevenoaks locations within 45-60 minutes for emergency call-outs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-8">Why Sevenoaks Residents Choose SparkyBen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Experience with Sevenoaks Properties</h3>
              <p className="text-neutral-dark mb-4">
                We understand the unique electrical requirements of Sevenoaks properties, from period homes in the conservation area to modern developments in Dunton Green and Riverhead.
              </p>
              <p className="text-neutral-dark mb-4">
                Our team has extensive experience with the large detached properties common in areas like Wildernesse and Kippington, including three-phase supplies and extensive outdoor lighting systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Serving the Community</h3>
              <p className="text-neutral-dark mb-4">
                We're proud to serve both residential and commercial clients in Sevenoaks, including work for local schools, shops in the town centre, and offices in the business district.
              </p>
              <p className="text-neutral-dark mb-4">
                Our growing customer base in Sevenoaks benefits from our competitive pricing and reliable service, with many recommending us to neighbours and friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-4">Electrical Services in Sevenoaks</h2>
          <p className="text-neutral-dark mb-8 max-w-3xl">
            Comprehensive electrical services for homes and businesses throughout the Sevenoaks district:
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

      {/* Specialist Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-8">Specialist Services for Sevenoaks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="text-xl font-semibold text-secondary mb-3">Electric Vehicle Charging</h3>
              <p className="text-neutral-dark mb-4">
                With many Sevenoaks residents switching to electric vehicles, we offer professional EV charging point installations. We're approved installers for all major brands and can advise on the best solution for your property.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-dark">7kW and 22kW installations available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-dark">Smart charging with app control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-dark">Government grant assistance</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="text-xl font-semibold text-secondary mb-3">Home Automation</h3>
              <p className="text-neutral-dark mb-4">
                Transform your Sevenoaks home with smart technology. From intelligent lighting to whole-home automation, we can modernise your property whilst maintaining its character.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-dark">Smart lighting systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-dark">Automated heating controls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={16} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-dark">Security and CCTV integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-8">Recent Sevenoaks Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="font-semibold text-secondary mb-2">Period Property Rewire - Wildernesse</h3>
              <p className="text-neutral-dark text-sm mb-3">
                Complete rewire of 6-bedroom Edwardian property with minimal disruption to original features and décor.
              </p>
              <div className="flex items-center text-sm text-neutral-dark">
                <Clock size={14} className="mr-1" />
                <span>10-day project</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="font-semibold text-secondary mb-2">Office Upgrade - London Road</h3>
              <p className="text-neutral-dark text-sm mb-3">
                LED lighting upgrade and additional power points for expanding business, reducing energy costs by 40%.
              </p>
              <div className="flex items-center text-sm text-neutral-dark">
                <Clock size={14} className="mr-1" />
                <span>Weekend installation</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="font-semibold text-secondary mb-2">Garden Lighting - Otford</h3>
              <p className="text-neutral-dark text-sm mb-3">
                Extensive outdoor lighting scheme including pathway lights, uplighters, and automated security lighting.
              </p>
              <div className="flex items-center text-sm text-neutral-dark">
                <Clock size={14} className="mr-1" />
                <span>3-day installation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <CTABanner type="location" location="Sevenoaks" />
        </div>
      </section>
    </div>
  );
};

export default Sevenoaks;