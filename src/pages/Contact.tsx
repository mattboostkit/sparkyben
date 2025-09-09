import React from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  AlertTriangle,
  CheckCircle2 
} from 'lucide-react';
import ContactFormNetlify from '../components/ContactFormNetlify';
import Map from '../components/Map';
import ResponsiveImage from '../components/ResponsiveImage';
import { heroImages } from '../data/images';

const Contact: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-16">
        <div className="absolute inset-0 opacity-20">
          <ResponsiveImage 
            src={heroImages.contact.medium} 
            srcSet={`${heroImages.contact.small} 800w, ${heroImages.contact.medium} 1280w, ${heroImages.contact.large} 1920w`}
            sizes="100vw"
            alt={heroImages.contact.alt} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl opacity-90">
            Have a question or need a quote? Get in touch with us today and we'll be happy to help.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-secondary mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-custom p-5">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">Phone</h3>
                      <p className="text-neutral-dark">01892 336 282</p>
                      <p className="text-xs text-neutral-dark mt-1">24/7 Emergency Service Available</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-custom p-5">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">Email</h3>
                      <a href="mailto:info@sparkyben.co.uk" className="text-neutral-dark hover:text-primary transition-colors">
                        info@sparkyben.co.uk
                      </a>
                      <p className="text-xs text-neutral-dark mt-1">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-custom p-5">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">Business Hours</h3>
                      <p className="text-neutral-dark">Monday - Friday: 8am - 5pm</p>
                      <p className="text-neutral-dark">Weekends: By appointment</p>
                      <p className="text-xs text-neutral-dark mt-1">Emergency service available 24/7</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-custom p-5">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">Service Area</h3>
                      <p className="text-neutral-dark">Tunbridge Wells, Tonbridge, Southborough</p>
                      <p className="text-neutral-dark">and surrounding areas within 15 miles</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-accent-warning/10 border border-accent-warning/20 rounded-lg p-5">
                <div className="flex">
                  <AlertTriangle className="text-accent-warning mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-secondary">Electrical Emergency?</h3>
                    <p className="text-neutral-dark text-sm mb-2">
                      For urgent electrical issues that pose a safety risk, please call us immediately:
                    </p>
                    <a 
                      href="tel:+441892336282" 
                      className="inline-block bg-accent-warning text-white font-medium px-4 py-2 rounded-md hover:bg-accent-warning/90 transition-colors"
                    >
                      01892 336 282
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-secondary mb-6">Send Us a Message</h2>
              
              <ContactFormNetlify />
              
              <div className="mt-8 bg-primary/5 border border-primary/10 rounded-lg p-5">
                <div className="flex">
                  <CheckCircle2 className="text-primary mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-secondary">Our Response Guarantee</h3>
                    <p className="text-neutral-dark">
                      We aim to respond to all enquiries within 24 hours during business days. For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Area Map */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-3">Our Service Area</h2>
            <p className="text-neutral-dark max-w-2xl mx-auto">
              We primarily serve Tunbridge Wells, Tonbridge, Southborough and surrounding areas within approximately 15 miles. For larger projects, we may travel further.
            </p>
          </div>
          
          <Map />
        </div>
      </section>
    </div>
  );
};

export default Contact;