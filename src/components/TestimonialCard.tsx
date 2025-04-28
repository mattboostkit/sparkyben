import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  highlighted?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, highlighted = false }) => {
  return (
    <div 
      className={`rounded-lg p-6 shadow-custom hover:shadow-custom-lg transition-all ${
        highlighted 
          ? 'bg-teal/5 border border-teal/20' 
          : 'bg-white hover:border-teal/20 border border-transparent'
      }`}
    >
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            fill={i < testimonial.rating ? "#51DBB1" : "none"}
            stroke={i < testimonial.rating ? "#51DBB1" : "#D1D5DB"}
          />
        ))}
      </div>
      
      <p className="text-neutral-dark mb-4">"{testimonial.text}"</p>
      
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-secondary">{testimonial.name}</p>
          <p className="text-sm text-neutral-dark">{testimonial.location}</p>
        </div>
        <p className="text-xs text-neutral-dark">{testimonial.date}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;