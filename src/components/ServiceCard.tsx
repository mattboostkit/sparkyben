import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';
import * as LucideIcons from 'lucide-react';
import ResponsiveImage from './ResponsiveImage';
import { getServiceCardImage, getServiceImageAlt } from '../data/images';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  // Dynamically get the icon component from lucide-react
  const IconComponent = (LucideIcons as Record<string, React.FC<any>>)[
    service.icon.charAt(0).toUpperCase() + service.icon.slice(1)
  ] || LucideIcons.Zap;
  
  // Get optimized image URL
  const imageUrl = getServiceCardImage(service.id);
  const imageAlt = getServiceImageAlt(service.id);
  
  if (featured) {
    return (
      <div className="bg-white rounded-lg shadow-custom overflow-hidden transition-transform hover:shadow-custom-lg transform hover:-translate-y-1 hover:border-teal border border-transparent">
        <div className="h-48 overflow-hidden relative">
          <ResponsiveImage 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-full object-cover"
            width={600}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end">
            <div className="p-4">
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center mb-3">
            <div className="bg-teal/10 p-2 rounded-full mr-3">
              <IconComponent className="text-teal" size={20} />
            </div>
          </div>
          <p className="text-neutral-dark mb-4">{service.shortDescription}</p>
          <Link 
            to={`/services/${service.id}`}
            className="inline-flex items-center text-teal font-medium hover:underline group"
          >
            Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <Link 
      to={`/services/${service.id}`}
      className="block bg-white rounded-lg shadow-custom overflow-hidden transition-all hover:shadow-custom-lg transform hover:-translate-y-1 hover:border-teal border border-transparent"
    >
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className="bg-teal/10 p-2 rounded-full mr-3">
            <IconComponent className="text-teal" size={20} />
          </div>
          <h3 className="text-lg font-semibold text-secondary">{service.title}</h3>
        </div>
        <p className="text-neutral-dark mb-4 text-sm">{service.shortDescription}</p>
        <div className="inline-flex items-center text-teal font-medium group">
          Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;