import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import CTABanner from '../components/CTABanner';
import ResponsiveImage from '../components/ResponsiveImage';
import { testimonials } from '../data/testimonials';
import { heroImages } from '../data/images';

const Testimonials: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-16">
        <div className="absolute inset-0 opacity-20">
          <ResponsiveImage 
            src={heroImages.testimonials.medium} 
            srcSet={`${heroImages.testimonials.small} 800w, ${heroImages.testimonials.medium} 1280w, ${heroImages.testimonials.large} 1920w`}
            sizes="100vw"
            alt={heroImages.testimonials.alt} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-lg max-w-2xl opacity-90">
            Read what our customers have to say about our electrical services. We're proud of our reputation for quality work and excellent customer service.
          </p>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial}
                highlighted={index % 5 === 0} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Review Platforms */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-3">Leave a Review</h2>
            <p className="text-neutral-dark max-w-2xl mx-auto">
              Had a good experience with our services? We'd love to hear about it! Please consider leaving a review on one of these platforms:
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://www.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white px-6 py-4 rounded-lg shadow-custom hover:shadow-custom-lg transition-transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4285F4] mr-3">
                <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"></path>
                <path d="M12 8v8"></path>
                <path d="M8 12h8"></path>
              </svg>
              <span className="font-medium">Google</span>
            </a>
            
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white px-6 py-4 rounded-lg shadow-custom hover:shadow-custom-lg transition-transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1877F2] mr-3">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="font-medium">Facebook</span>
            </a>
            
            <a 
              href="https://www.checkatrade.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white px-6 py-4 rounded-lg shadow-custom hover:shadow-custom-lg transition-transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0097D7] mr-3">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span className="font-medium">Checkatrade</span>
            </a>
            
            <a 
              href="https://www.trustpilot.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white px-6 py-4 rounded-lg shadow-custom hover:shadow-custom-lg transition-transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00B67A] mr-3">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="font-medium">Trustpilot</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <CTABanner type="quote" />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;