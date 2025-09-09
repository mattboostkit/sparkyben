import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, CheckCircle } from 'lucide-react';
import { brandImages } from '../data/images';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src={brandImages.logo.white}
                alt={brandImages.logo.alt}
                className="h-10 mr-2"
                width={160}
                height={48}
              />
            </Link>
            <p className="mb-4 text-neutral-light text-sm">
              Professional electrical services in Tunbridge Wells, Tonbridge, and surrounding areas. NICEIC approved contractor delivering high-quality, reliable electrical solutions.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" aria-label="Facebook" className="bg-secondary-light hover:bg-teal transition-colors p-2 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="bg-secondary-light hover:bg-teal transition-colors p-2 rounded-full">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-neutral-light">
              <li>
                <Link to="/services/new-builds" className="hover:text-teal transition-colors">New Builds & Rewires</Link>
              </li>
              <li>
                <Link to="/services/power-installation" className="hover:text-teal transition-colors">Power Installation</Link>
              </li>
              <li>
                <Link to="/services/lighting" className="hover:text-teal transition-colors">Lighting Installations</Link>
              </li>
              <li>
                <Link to="/services/fuseboard" className="hover:text-teal transition-colors">Fuseboard Replacements</Link>
              </li>
              <li>
                <Link to="/services/testing" className="hover:text-teal transition-colors">Testing & Certification</Link>
              </li>
              <li>
                <Link to="/services" className="text-teal font-medium hover:underline">View All Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-neutral-light">
              <li className="flex items-start">
                <Phone size={18} className="text-teal mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>01892 336 282</p>
                  <p className="text-xs">24/7 Emergency Service</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-teal mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:info@sparkyben.co.uk" className="hover:text-teal transition-colors">
                  info@sparkyben.co.uk
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-teal mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Mon-Fri: 8am - 5pm</p>
                  <p>Weekends: By appointment</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-teal mr-2 mt-1 flex-shrink-0" />
                <p>Tunbridge Wells, Kent</p>
              </li>
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Accreditations</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <CheckCircle size={18} className="text-teal mr-2" />
                <span className="text-neutral-light">NICEIC Approved Contractor</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-teal mr-2" />
                <span className="text-neutral-light">City & Guilds Qualified</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-teal mr-2" />
                <span className="text-neutral-light">Fully Insured - £5M Public Liability</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-teal mr-2" />
                <span className="text-neutral-light">BS7671 18th Edition Qualified</span>
              </div>
              <Link to="/contact" className="mt-4 inline-block bg-teal hover:bg-teal/90 text-white font-medium px-4 py-2 rounded transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="bg-secondary-light py-4">
        <div className="container mx-auto px-4 text-center text-neutral-light text-sm">
          <p>© {new Date().getFullYear()} Sparkyben Electrical. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-teal transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-teal transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-teal transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;