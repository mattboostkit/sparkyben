import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

interface CTABannerProps {
  type?: 'emergency' | 'quote' | 'location';
  location?: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ type = 'quote', location }) => {
  if (type === 'emergency') {
    return (
      <div className="bg-accent-danger text-white py-6 px-4 rounded-lg shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-1">24/7 Emergency Electrical Service</h3>
            <p className="opacity-90">Fast response for electrical emergencies in Tunbridge Wells & surrounding areas</p>
          </div>
          <a 
            href="tel:+441892336282" 
            className="flex items-center bg-white text-accent-danger font-bold py-3 px-6 rounded-md hover:bg-neutral transition-colors"
          >
            <Phone className="mr-2" size={20} />
            01892 336 282
          </a>
        </div>
      </div>
    );
  }

  if (type === 'location' && location) {
    return (
      <div className="bg-primary text-white py-8 px-4 rounded-lg shadow-md">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Need an Electrician in {location}?</h3>
          <p className="opacity-90 max-w-2xl mx-auto mb-6">
            Get in touch today for fast, reliable electrical services in {location} and surrounding areas. 
            Free quotes, competitive prices, and quality workmanship guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="tel:+441892336282" 
              className="flex items-center justify-center bg-white text-primary hover:bg-teal hover:text-white transition-colors font-bold py-3 px-6 rounded-md"
            >
              <Phone className="mr-2" size={20} />
              Call 01892 336 282
            </a>
            <Link 
              to="/contact" 
              className="flex items-center justify-center bg-teal text-white font-bold py-3 px-6 rounded-md border border-white hover:bg-teal/90 transition-colors"
            >
              <Calendar className="mr-2" size={20} />
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-primary text-white py-8 px-4 rounded-lg shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
          <p className="opacity-90 max-w-2xl">Contact us today for a free, no-obligation quote on any electrical work you need done.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="tel:+441892336282" 
            className="flex items-center justify-center bg-white text-primary hover:bg-teal hover:text-white transition-colors font-bold py-3 px-6 rounded-md"
          >
            <Phone className="mr-2" size={20} />
            Call Now
          </a>
          <Link 
            to="/contact" 
            className="flex items-center justify-center bg-teal text-white font-bold py-3 px-6 rounded-md border border-white hover:bg-teal/90 transition-colors"
          >
            <Calendar className="mr-2" size={20} />
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;