import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import SeoMetaTags from '../components/SeoMetaTags';

const Sitemap: React.FC = () => {
  return (
    <div>
      <SeoMetaTags 
        title="Sitemap | SparkyBen Electrical"
        description="Navigate our website easily with our sitemap. Find all pages and services offered by SparkyBen Electrical in Tunbridge Wells and Tonbridge."
      />
      
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-12">
        <div className="relative container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sitemap</h1>
          <p className="text-lg max-w-2xl opacity-90">
            Find your way around our website
          </p>
        </div>
      </section>
      
      {/* Sitemap Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 bg-neutral-light p-6 rounded-lg">
              <div className="flex items-start">
                <Map className="text-teal mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-lg font-semibold text-secondary">Website Navigation</h2>
                  <p className="text-neutral-dark mt-2">
                    This sitemap provides links to all pages on our website to help you find the information you need about our electrical services in Tunbridge Wells, Tonbridge, and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Main Pages */}
              <div>
                <h2 className="text-xl font-bold text-secondary mb-4 border-b border-neutral pb-2">Main Pages</h2>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="flex items-center text-secondary hover:text-teal transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="flex items-center text-secondary hover:text-teal transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="flex items-center text-secondary hover:text-teal transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      <span>Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="flex items-center text-secondary hover:text-teal transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      <span>Pricing</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonials" className="flex items-center text-secondary hover:text-teal transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      <span>Testimonials</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="flex items-center text-secondary hover:text-teal transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Legal Pages */}
              <div>
                <h2 className="text-xl font-bold text-secondary mb-4 border-b border-neutral pb-2">Legal Information</h2>
                <ul className="space-y-3">
                  <li>
                    <Link to="/privacy-policy" className="flex items-center text-secondary hover:text-teal transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      <span>Privacy Policy</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="flex items-center text-secondary hover:text-teal transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      <span>Terms of Service</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/sitemap" className="flex items-center text-secondary hover:text-teal transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      <span>Sitemap</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Services Pages */}
              <div className="md:col-span-2">
                <h2 className="text-xl font-bold text-secondary mb-4 border-b border-neutral pb-2">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {services.map(service => (
                    <Link 
                      key={service.id}
                      to={`/services/${service.id}`} 
                      className="flex items-center text-secondary hover:text-teal transition-colors"
                    >
                      <ArrowRight size={16} className="mr-2" />
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-neutral-light rounded-lg">
              <h2 className="text-xl font-bold text-secondary mb-4">XML Sitemap for Search Engines</h2>
              <p className="text-neutral-dark mb-4">
                For search engines and web crawlers, we provide an XML sitemap that lists all pages on our website. This helps search engines discover and index our content more efficiently.
              </p>
              <p className="text-neutral-dark">
                XML Sitemap URL: <a href="https://sparkyben.co.uk/sitemap.xml" className="text-teal hover:underline" target="_blank" rel="noopener noreferrer">https://sparkyben.co.uk/sitemap.xml</a>
              </p>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link to="/contact" className="bg-teal hover:bg-teal/90 text-white font-medium px-6 py-3 rounded-md transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
