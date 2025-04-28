import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { services } from '../data/services';
import { brandImages } from '../data/images';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  // Close dropdown when location changes
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-0">
          {/* Logo */}
          <Link to="/" onClick={closeMenus} className="flex items-center">
            <img
              src={brandImages.logo.primary}
              alt={brandImages.logo.alt}
              className="h-14 mr-2"
              width={250}
              height={70}
              style={{ objectFit: 'contain', maxWidth: '100%', aspectRatio: '1892/529' }}
            />
          </Link>

          {/* Emergency Contact - Always visible */}
          <div className="hidden md:flex items-center text-neutral-dark bg-neutral-light px-4 py-2 rounded-full shadow-sm">
            <Phone size={18} className="text-teal mr-2" />
            <a href="tel:+441892336282" className="font-medium">
              <span className="hidden lg:inline">Emergency Call: </span>01892 336 282
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex">
              <li>
                <Link
                  to="/"
                  className={`block px-4 py-5 font-medium transition-colors ${
                    location.pathname === '/' ? 'text-teal border-b-2 border-teal' : 'text-secondary hover:text-teal'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block px-4 py-5 font-medium transition-colors ${
                    location.pathname === '/about' ? 'text-teal border-b-2 border-teal' : 'text-secondary hover:text-teal'
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="relative">
                <button
                  className={`flex items-center px-4 py-5 font-medium transition-colors ${
                    location.pathname.startsWith('/services') ? 'text-teal border-b-2 border-teal' : 'text-secondary hover:text-teal'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesDropdownOpen(!servicesDropdownOpen);
                  }}
                >
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Services Dropdown */}
                {servicesDropdownOpen && (
                  <div className="absolute left-0 bg-white shadow-lg rounded-b-lg py-2 mt-0 w-64 z-20">
                    {services.map(service => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        onClick={closeMenus}
                        className="block px-4 py-2 text-secondary hover:bg-neutral-light hover:text-teal transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      onClick={closeMenus}
                      className="block px-4 py-2 mt-2 text-teal font-medium border-t border-neutral hover:bg-neutral-light transition-colors"
                    >
                      View All Services
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/pricing"
                  className={`block px-4 py-5 font-medium transition-colors ${
                    location.pathname === '/pricing' ? 'text-teal border-b-2 border-teal' : 'text-secondary hover:text-teal'
                  }`}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className={`block px-4 py-5 font-medium transition-colors ${
                    location.pathname === '/testimonials' ? 'text-teal border-b-2 border-teal' : 'text-secondary hover:text-teal'
                  }`}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block px-4 py-5 font-medium transition-colors ${
                    location.pathname === '/contact' ? 'text-teal border-b-2 border-teal' : 'text-secondary hover:text-teal'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-inner pb-4">
          <div className="flex items-center justify-center text-neutral-dark bg-neutral-light mx-4 my-3 px-3 py-2 rounded-full shadow-sm">
            <Phone size={18} className="text-teal mr-2" />
            <a href="tel:+441892336282" className="text-sm font-medium">
              Emergency: 01892 336 282
            </a>
          </div>
          <nav>
            <ul className="space-y-1 px-4">
              <li>
                <Link
                  to="/"
                  onClick={closeMenus}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    location.pathname === '/' ? 'bg-teal text-white' : 'text-secondary hover:bg-neutral-light hover:text-teal'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={closeMenus}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    location.pathname === '/about' ? 'bg-teal text-white' : 'text-secondary hover:bg-neutral-light hover:text-teal'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  className={`flex w-full items-center justify-between px-3 py-2 rounded-md font-medium ${
                    location.pathname.startsWith('/services') ? 'bg-teal text-white' : 'text-secondary hover:bg-neutral-light hover:text-teal'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesDropdownOpen(!servicesDropdownOpen);
                  }}
                >
                  Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={servicesDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </button>

                {servicesDropdownOpen && (
                  <div className="mt-1 ml-4 border-l-2 border-neutral-light pl-2 space-y-1">
                    {services.map(service => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        onClick={closeMenus}
                        className="block px-3 py-1 text-sm text-secondary hover:text-teal"
                      >
                        {service.title}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      onClick={closeMenus}
                      className="block px-3 py-1 text-sm font-medium text-teal"
                    >
                      View All Services
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/pricing"
                  onClick={closeMenus}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    location.pathname === '/pricing' ? 'bg-teal text-white' : 'text-secondary hover:bg-neutral-light hover:text-teal'
                  }`}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  onClick={closeMenus}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    location.pathname === '/testimonials' ? 'bg-teal text-white' : 'text-secondary hover:bg-neutral-light hover:text-teal'
                  }`}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenus}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    location.pathname === '/contact' ? 'bg-teal text-white' : 'text-secondary hover:bg-neutral-light hover:text-teal'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;