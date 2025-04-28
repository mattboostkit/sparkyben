import React from 'react';
import PricingTable from '../components/PricingTable';
import CTABanner from '../components/CTABanner';
import Faq from '../components/Faq';
import ResponsiveImage from '../components/ResponsiveImage';
import { faqs } from '../data/faqs';
import { heroImages } from '../data/images';

const Pricing: React.FC = () => {
  // Filter FAQs related to pricing
  const pricingFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes('quote') || 
    faq.question.toLowerCase().includes('price') ||
    faq.question.toLowerCase().includes('guarantee') ||
    faq.question.toLowerCase().includes('payment')
  );
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-16">
        <div className="absolute inset-0 opacity-20">
          <ResponsiveImage 
            src={heroImages.pricing.medium} 
            srcSet={`${heroImages.pricing.small} 800w, ${heroImages.pricing.medium} 1280w, ${heroImages.pricing.large} 1920w`}
            sizes="100vw"
            alt={heroImages.pricing.alt} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-lg max-w-2xl opacity-90">
            Our electrical services are competitively priced with no hidden charges. Browse our pricing guide below and contact us for a free, no-obligation quote.
          </p>
        </div>
      </section>
      
      {/* Pricing Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary mb-4">Pricing Guide</h2>
            <p className="text-neutral-dark mb-8">
              The prices below are intended as a guide only. All work undertaken will be subject to a minimum charge of 1 hour. Thereafter work will be charged in 15 minute increments. Fixed price work is also available.
            </p>
            
            <PricingTable />
            
            <div className="mt-12 bg-neutral-light rounded-lg p-6">
              <h3 className="text-xl font-semibold text-secondary mb-4">Important Notes</h3>
              <ul className="space-y-2 text-neutral-dark">
                <li>• All prices exclude VAT at the current rate of 20%.</li>
                <li>• All work undertaken will be subject to a minimum charge of 1 hour.</li>
                <li>• After the first hour, work will be charged in 15 minute increments.</li>
                <li>• Fixed price work is also available - please ask for details.</li>
                <li>• For accurate pricing, we recommend requesting a free quote.</li>
                <li>• We offer a workmanship guarantee on all our electrical work.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary mb-6">Frequently Asked Questions</h2>
            
            <div className="bg-white rounded-lg shadow-custom overflow-hidden">
              {pricingFaqs.map((faq, index) => (
                <Faq key={index} faq={faq} isOpen={index === 0} />
              ))}
            </div>
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

export default Pricing;