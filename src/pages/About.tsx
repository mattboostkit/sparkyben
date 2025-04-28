import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  User, 
  Award, 
  Shield, 
  Clock,
  Wrench
} from 'lucide-react';
import CTABanner from '../components/CTABanner';
import Faq from '../components/Faq';
import ResponsiveImage from '../components/ResponsiveImage';
import { faqs } from '../data/faqs';
import { heroImages, contentImages } from '../data/images';

const About: React.FC = () => {
  // Select a few relevant FAQs for the about page
  const aboutFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes('qualified') || 
    faq.question.toLowerCase().includes('guarantee') ||
    faq.question.toLowerCase().includes('area')
  );
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-16">
        <div className="absolute inset-0 opacity-20">
          <ResponsiveImage 
            src={heroImages.about.medium} 
            srcSet={`${heroImages.about.small} 800w, ${heroImages.about.medium} 1280w, ${heroImages.about.large} 1920w`}
            sizes="100vw"
            alt={heroImages.about.alt} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About SparkyBen</h1>
          <p className="text-lg max-w-2xl opacity-90">
            Your trusted local electrician serving Tunbridge Wells, Tonbridge, and surrounding areas with quality electrical services.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-secondary mb-6">Our Story</h2>
              <p className="text-neutral-dark mb-4">
                SparkyBen was established in 2010 by Ben Carter, a qualified electrician with a passion for delivering high-quality electrical services. After gaining extensive experience working for larger electrical contractors, Ben decided to start his own business to provide a more personalised service to customers in the Tunbridge Wells and Tonbridge areas.
              </p>
              <p className="text-neutral-dark mb-4">
                Over the years, SparkyBen has built a strong reputation for reliability, expertise, and exceptional customer service. We've grown steadily through word-of-mouth recommendations from satisfied customers who appreciate our honest approach, attention to detail, and competitive pricing.
              </p>
              <p className="text-neutral-dark mb-4">
                Today, we continue to serve domestic and commercial customers across Kent, providing a comprehensive range of electrical services from small repairs to complete installations. We remain committed to our founding principles of quality workmanship, honest advice, and excellent customer service.
              </p>
              
              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">What Makes Us Different</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <User className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Personal Service</h3>
                    <p className="text-neutral-dark text-sm">
                      We provide a personalised service tailored to your specific needs, with clear communication throughout every project.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <Award className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Quality Workmanship</h3>
                    <p className="text-neutral-dark text-sm">
                      As NICEIC approved contractors, all our work meets the highest standards and current regulations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <Shield className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Fully Insured</h3>
                    <p className="text-neutral-dark text-sm">
                      We carry £2 million public liability insurance for your peace of mind.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Reliable & Punctual</h3>
                    <p className="text-neutral-dark text-sm">
                      We arrive when promised and complete work on schedule, respecting your time and property.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <Wrench className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Transparent Pricing</h3>
                    <p className="text-neutral-dark text-sm">
                      We provide clear, detailed quotes with no hidden charges or surprises.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle2 className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Workmanship Guarantee</h3>
                    <p className="text-neutral-dark text-sm">
                      All our work comes with a 12-month workmanship guarantee for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-white rounded-lg shadow-custom overflow-hidden">
                <ResponsiveImage 
                  src={contentImages.aboutElectrician.medium} 
                  srcSet={`${contentImages.aboutElectrician.small} 400w, ${contentImages.aboutElectrician.medium} 600w, ${contentImages.aboutElectrician.large} 1000w`}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  alt={contentImages.aboutElectrician.alt}
                  className="w-full h-64 object-cover object-top"
                  width={600}
                  height={400}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-4">Meet Ben</h3>
                  <p className="text-neutral-dark mb-4">
                    Ben Carter is the founder and lead electrician at SparkyBen. With over 15 years of experience in the electrical industry, Ben is a City & Guilds qualified electrician and NICEIC registered.
                  </p>
                  <p className="text-neutral-dark">
                    He is passionate about providing quality electrical services and takes pride in his workmanship, attention to detail, and customer satisfaction.
                  </p>
                </div>
              </div>
              
              <div className="bg-neutral-light rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4">Accreditations</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle2 size={18} className="text-teal mr-2" />
                    <span className="text-neutral-dark">NICEIC Approved Contractor</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 size={18} className="text-teal mr-2" />
                    <span className="text-neutral-dark">City & Guilds Qualified</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 size={18} className="text-teal mr-2" />
                    <span className="text-neutral-dark">BS7671 18th Edition Qualified</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 size={18} className="text-teal mr-2" />
                    <span className="text-neutral-dark">Fully Insured - £2M Public Liability</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 size={18} className="text-teal mr-2" />
                    <span className="text-neutral-dark">Domestic Installer Scheme Member</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-custom p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4">Our Service Area</h3>
                <p className="text-neutral-dark mb-3">
                  We primarily serve customers in:
                </p>
                <ul className="space-y-1 text-neutral-dark mb-4">
                  <li>• Tunbridge Wells</li>
                  <li>• Tonbridge</li>
                  <li>• Southborough</li>
                  <li>• Rusthall</li>
                  <li>• Pembury</li>
                  <li>• Langton Green</li>
                  <li>• And surrounding areas within 15 miles</li>
                </ul>
                <p className="text-neutral-dark text-sm">
                  For larger projects, we may travel further. Please get in touch to discuss your requirements.
                </p>
              </div>
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
              {aboutFaqs.map((faq, index) => (
                <Faq key={index} faq={faq} isOpen={index === 0} />
              ))}
              
              <div className="p-4 border-t border-neutral">
                <Link 
                  to="/contact" 
                  className="text-primary font-medium hover:underline"
                >
                  Have another question? Contact us
                </Link>
              </div>
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

export default About;