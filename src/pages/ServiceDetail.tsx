import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import ResponsiveImage from '../components/ResponsiveImage';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';
import { getServiceDetailImage, getServiceImageAlt } from '../data/images';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }
  
  // Dynamically get the icon component from lucide-react
  const IconComponent = (LucideIcons as Record<string, React.FC<any>>)[
    service.icon.charAt(0).toUpperCase() + service.icon.slice(1)
  ] || LucideIcons.Zap;
  
  // Get optimized image URL
  const imageUrl = getServiceDetailImage(service.id);
  const imageAlt = getServiceImageAlt(service.id);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-16">
        <div className="absolute inset-0 opacity-30">
          <ResponsiveImage 
            src={imageUrl}
            alt={imageAlt}
            sizes="100vw"
            className="w-full h-full object-cover" 
            width={1200}
            height={800}
          />
        </div>
        <div className="relative container mx-auto px-4">
          <Link 
            to="/services" 
            className="inline-flex items-center text-white hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft size={16} className="mr-1" /> Back to Services
          </Link>
          <div className="flex items-center mb-3">
            <div className="bg-primary/20 p-2 rounded-full mr-3">
              <IconComponent className="text-white" size={24} />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg max-w-2xl opacity-90">
            {service.shortDescription}
          </p>
        </div>
      </section>
      
      {/* Service Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-secondary mb-6">About This Service</h2>
              
              {service.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-neutral-dark mb-4">{paragraph}</p>
              ))}
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-secondary mb-4">Why Choose Sparkyben?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={20} className="text-teal mr-2 mt-1 flex-shrink-0" />
                    <span>NICEIC approved contractor - quality work guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-teal mr-2 mt-1 flex-shrink-0" />
                    <span>Competitive pricing with no hidden charges</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-teal mr-2 mt-1 flex-shrink-0" />
                    <span>Fully insured with £2M public liability insurance</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-teal mr-2 mt-1 flex-shrink-0" />
                    <span>Free quotes and expert advice</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-teal mr-2 mt-1 flex-shrink-0" />
                    <span>All work certified and compliant with current regulations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white rounded-lg shadow-custom overflow-hidden">
                <ResponsiveImage 
                  src={imageUrl}
                  alt={imageAlt}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="w-full h-48 object-cover"
                  width={600}
                  height={400}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-4">Get a Free Quote</h3>
                  <p className="text-neutral-dark mb-4">
                    Interested in our {service.title.toLowerCase()} service? Contact us today for a free, no-obligation quote.
                  </p>
                  <Link 
                    to="/contact" 
                    className="block w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-md text-center transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              
              <div className="bg-neutral-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4">Service Areas</h3>
                <p className="text-neutral-dark mb-3">
                  We provide {service.title.toLowerCase()} services in:
                </p>
                <ul className="space-y-1 text-neutral-dark">
                  <li>• Tunbridge Wells</li>
                  <li>• Tonbridge</li>
                  <li>• Southborough</li>
                  <li>• Rusthall</li>
                  <li>• Pembury</li>
                  <li>• Langton Green</li>
                  <li>• And surrounding areas within 15 miles</li>
                </ul>
              </div>
            </div>
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

export default ServiceDetail;