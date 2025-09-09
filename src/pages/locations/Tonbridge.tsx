import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import ServiceCard from '../../components/ServiceCard';
import CTABanner from '../../components/CTABanner';
import { services } from '../../data/services';

const Tonbridge: React.FC = () => {
  const featuredServices = services.slice(0, 6);
  
  return (
    <div>
      <Helmet>
        <title>Electrician Tonbridge | Local Electrical Services TN9, TN10, TN11 | SparkyBen</title>
        <meta name="description" content="Trusted NICEIC electrician in Tonbridge. Rewiring, fuseboard upgrades, fault finding, EV chargers. Serving Tonbridge, Hildenborough, Hadlow & surrounding areas. Call 01892 336 282." />
        <meta name="keywords" content="electrician Tonbridge, emergency electrician TN9, electrical services TN10, TN11, NICEIC electrician Tonbridge, electrical contractor Kent" />
        <link rel="canonical" href="https://sparkyben.co.uk/locations/tonbridge" />
        <meta property="og:title" content="Electrician Tonbridge | Local Electrical Services TN9, TN10, TN11" />
        <meta property="og:description" content="Trusted NICEIC electrician in Tonbridge. Rewiring, fuseboard upgrades, fault finding, EV chargers. Call 01892 336 282." />
        <meta property="og:url" content="https://sparkyben.co.uk/locations/tonbridge" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <MapPin className="text-teal mr-2" size={24} />
            <span className="text-teal font-medium">Tonbridge & Surrounding Areas</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Expert Electrician Services in Tonbridge
          </h1>
          <p className="text-lg mb-8 max-w-3xl">
            SparkyBen Electrical is your trusted local electrician serving Tonbridge, Hildenborough, Hadlow, and all surrounding villages. With rapid response times and competitive prices, we're the go-to choice for electrical work in the TN9, TN10, and TN11 postcode areas.
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
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Local Area Coverage */}
      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6">Areas We Cover Around Tonbridge</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Tonbridge Town Centre',
              'Hildenborough',
              'Hadlow',
              'East Peckham',
              'West Peckham',
              'Shipbourne',
              'Plaxtol',
              'Borough Green',
              'Ightham',
              'Wrotham',
              'Offham',
              'West Malling'
            ].map((area) => (
              <div key={area} className="flex items-center">
                <CheckCircle2 size={16} className="text-teal mr-2 flex-shrink-0" />
                <span className="text-neutral-dark">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-neutral-dark">
              <strong>Postcode Coverage:</strong> Full coverage of TN9, TN10, TN11, and TN12 postcodes. Emergency response typically within 45 minutes throughout the Tonbridge area.
            </p>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-8">Your Local Tonbridge Electrician</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Understanding Tonbridge Properties</h3>
              <p className="text-neutral-dark mb-4">
                From medieval buildings near Tonbridge Castle to new developments in Hildenborough, we have extensive experience with the diverse property types throughout the Tonbridge area.
              </p>
              <p className="text-neutral-dark mb-4">
                Our expertise includes working on listed buildings requiring sensitive electrical upgrades, modern estates needing smart home installations, and everything in between.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Community Focused Service</h3>
              <p className="text-neutral-dark mb-4">
                As a local business, we're proud to serve the Tonbridge community. We work with local schools, shops on the High Street, and hundreds of residential properties throughout TN9, TN10, and TN11.
              </p>
              <p className="text-neutral-dark mb-4">
                Our commitment to the area means we offer competitive local rates and priority service for regular customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-4">Electrical Services Available in Tonbridge</h2>
          <p className="text-neutral-dark mb-8 max-w-3xl">
            Complete range of domestic and commercial electrical services for Tonbridge properties:
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

      {/* Recent Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-8">Recent Tonbridge Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="font-semibold text-secondary mb-2">Cottage Rewire - Hildenborough</h3>
              <p className="text-neutral-dark text-sm mb-3">
                Sympathetic rewire of Grade II listed cottage, maintaining period features whilst ensuring modern safety standards.
              </p>
              <div className="flex items-center text-sm text-neutral-dark">
                <Clock size={14} className="mr-1" />
                <span>Completed in 7 days</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="font-semibold text-secondary mb-2">Commercial Installation - High Street</h3>
              <p className="text-neutral-dark text-sm mb-3">
                Complete electrical fit-out for new restaurant including kitchen power, LED lighting, and fire alarm systems.
              </p>
              <div className="flex items-center text-sm text-neutral-dark">
                <Clock size={14} className="mr-1" />
                <span>3-week project</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="font-semibold text-secondary mb-2">Solar Installation - Hadlow</h3>
              <p className="text-neutral-dark text-sm mb-3">
                4kW solar PV system with battery storage, reducing electricity bills by 60% for local family home.
              </p>
              <div className="flex items-center text-sm text-neutral-dark">
                <Clock size={14} className="mr-1" />
                <span>2-day installation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">24/7 Emergency Electrician in Tonbridge</h2>
          <p className="mb-4 max-w-3xl">
            Electrical emergencies don't wait for business hours. That's why we offer round-the-clock emergency electrical services throughout Tonbridge and surrounding areas. Whether it's a power outage, electrical fault, or safety concern, we're here to help.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <CheckCircle2 size={20} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
              <span>Rapid response to TN9, TN10, TN11 postcodes</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 size={20} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
              <span>Fixed price emergency call-out fee</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 size={20} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
              <span>Fully equipped vans for immediate repairs</span>
            </li>
          </ul>
          <a 
            href="tel:+441892336282" 
            className="inline-flex items-center bg-teal hover:bg-teal/90 text-white font-bold py-3 px-6 rounded-md transition-colours"
          >
            <Phone size={20} className="mr-2" />
            Emergency Call-Out: 01892 336 282
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <CTABanner type="location" location="Tonbridge" />
        </div>
      </section>
    </div>
  );
};

export default Tonbridge;