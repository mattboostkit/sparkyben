import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, ArrowRight, Clock, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet';
import ServiceCard from '../components/ServiceCard';
import CTABanner from '../components/CTABanner';
import SchemaOrgScript from '../components/SchemaOrgScript';
import ResponsiveImage from '../components/ResponsiveImage';
import HiLevelReviews from '../components/HiLevelReviews';
import { services } from '../data/services';
import { heroImages, contentImages } from '../data/images';

const Home: React.FC = () => {
  // Select featured services for the homepage
  const featuredServices = services.filter(service => 
    ['new-builds', 'power-installation', 'lighting', 'fuseboard', 'ev-charging', 'solar-pv'].includes(service.id)
  ).slice(0, 6);
  
  return (
    <div>
      <Helmet>
        <title>SparkyBen Electrical | Professional Electrician in Tunbridge Wells & Tonbridge</title>
        <meta name="description" content="NICEIC approved electrician serving Tunbridge Wells, Tonbridge, and surrounding areas. Domestic & commercial electrical services with 24/7 emergency callout." />
        <meta name="keywords" content="electrician, Tunbridge Wells, Tonbridge, electrical services, NICEIC approved, electrical contractor, emergency electrician" />
        <meta property="og:title" content="SparkyBen Electrical | Professional Electrician in Tunbridge Wells & Tonbridge" />
        <meta property="og:description" content="NICEIC approved electrician serving Tunbridge Wells, Tonbridge, and surrounding areas. Domestic & commercial electrical services with 24/7 emergency callout." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sparkyben.co.uk" />
        <meta property="og:image" content={heroImages.home.large} />
        <link rel="canonical" href="https://sparkyben.co.uk" />
      </Helmet>
      
      <SchemaOrgScript />
      
      {/* Hero Section */}
      <section className="relative bg-secondary text-white">
        <div className="absolute inset-0 opacity-20">
          <ResponsiveImage 
            src={heroImages.home.medium} 
            srcSet={`${heroImages.home.small} 800w, ${heroImages.home.medium} 1280w, ${heroImages.home.large} 1920w`}
            sizes="100vw"
            alt={heroImages.home.alt} 
            className="w-full h-full object-cover" 
            loading="eager" // Load this important image immediately
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-teal px-4 py-1 rounded-full text-sm font-medium mb-4">
              NICEIC Approved Contractor
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Professional Electrician in Tunbridge Wells & Tonbridge
            </h1>
            <p className="text-lg mb-8 opacity-90">
              Reliable, high-quality electrical services for your home or business. From emergency repairs to complete installations, we provide excellent workmanship and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-teal hover:bg-teal/90 text-white font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
              >
                Request a Quote
              </Link>
              <a 
                href="tel:+441892336282" 
                className="bg-white text-secondary hover:bg-teal hover:text-white transition-colors font-bold py-3 px-6 rounded-md inline-flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Key Selling Points */}
        <div className="bg-secondary-light py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <CheckCircle2 size={24} className="text-teal mr-3 flex-shrink-0" />
                <p>NICEIC Approved Contractor</p>
              </div>
              <div className="flex items-center">
                <CheckCircle2 size={24} className="text-teal mr-3 flex-shrink-0" />
                <p>24/7 Emergency Callout Service</p>
              </div>
              <div className="flex items-center">
                <CheckCircle2 size={24} className="text-teal mr-3 flex-shrink-0" />
                <p>Free No-Obligation Quotes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-secondary mb-4">Trusted Electrical Services in Kent</h2>
              <p className="text-neutral-dark mb-4">
                At SparkyBen, we provide a comprehensive range of electrical services for domestic and commercial properties across Tunbridge Wells, Tonbridge, and surrounding areas.
              </p>
              <p className="text-neutral-dark mb-4">
                With over 15 years of experience, we pride ourselves on delivering reliable, high-quality work at competitive prices. Our reputation is built on customer satisfaction, technical expertise, and a commitment to safety.
              </p>
              <p className="text-neutral-dark mb-6">
                As a NICEIC approved contractor, all our work is carried out to the highest standards and complies with the latest regulations. We're fully insured and provide certification for all notifiable work.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-teal font-medium hover:underline group"
              >
                Learn More About Us <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Clock size={20} className="text-teal mr-2 mt-1" />
                  <div>
                    <p className="font-medium text-secondary">Opening Hours</p>
                    <p className="text-sm text-neutral-dark">Mon-Fri: 8am - 5pm</p>
                    <p className="text-sm text-neutral-dark">Weekends: By appointment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin size={20} className="text-teal mr-2 mt-1" />
                  <div>
                    <p className="font-medium text-secondary">Service Area</p>
                    <p className="text-sm text-neutral-dark">Tunbridge Wells, Tonbridge,</p>
                    <p className="text-sm text-neutral-dark">Southborough & surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-custom">
              <ResponsiveImage 
                src={contentImages.homeFeature.medium} 
                srcSet={`${contentImages.homeFeature.small} 400w, ${contentImages.homeFeature.medium} 600w, ${contentImages.homeFeature.large} 1000w`}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt={contentImages.homeFeature.alt} 
                className="w-full h-full object-cover" 
                loading="lazy"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Our Electrical Services</h2>
            <p className="text-neutral-dark max-w-2xl mx-auto">
              We provide a comprehensive range of electrical services for domestic and commercial properties. Here are some of our most popular services:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} featured={true} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/services" 
              className="bg-teal hover:bg-teal/90 text-white font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center"
            >
              View All Services <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Emergency Call-Out Banner */}
      <section className="py-8 bg-neutral-light">
        <div className="container mx-auto px-4">
          <CTABanner type="emergency" />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">What Our Customers Say</h2>
            <p className="text-neutral-dark max-w-2xl mx-auto">
              Don't just take our word for it. See what our customers have to say about our electrical services:
            </p>
          </div>
          
          {/* Hi-Level Reviews Widget */}
          <div className="max-w-5xl mx-auto mb-8">
            <HiLevelReviews className="shadow-custom rounded-lg overflow-hidden" />
          </div>
          
          <div className="text-center">
            <Link 
              to="/testimonials" 
              className="bg-teal hover:bg-teal/90 text-white font-medium px-6 py-3 rounded-md transition-colours inline-flex items-center"
            >
              View All Reviews <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
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

export default Home;