import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BookOpen, Home, Zap, Car, Shield, Lightbulb, AlertTriangle, ArrowRight } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import EnhancedSchemaOrg from '../components/EnhancedSchemaOrg';

const Advice: React.FC = () => {
  const articles = [
    {
      title: 'Electrical Safety Guide',
      description: 'Essential safety advice for homeowners in Kent. Learn to spot electrical dangers and keep your family safe.',
      icon: AlertTriangle,
      url: '/advice/electrical-safety-guide',
      featured: true
    },
    {
      title: 'Consumer Unit Upgrade Guide',
      description: 'Everything you need to know about upgrading from an old fuse box to a modern consumer unit with RCD protection.',
      icon: Shield,
      url: '/advice/consumer-unit-guide'
    },
    {
      title: 'EV Charging Point Installation',
      description: 'Complete guide to installing electric vehicle charging at your Kent property, including costs and grants.',
      icon: Car,
      url: '/advice/ev-charging-guide'
    },
    {
      title: 'House Rewiring Explained',
      description: 'Signs you need a rewire, what to expect from the process, and typical costs for Kent properties.',
      icon: Home,
      url: '/advice/rewiring-guide'
    },
    {
      title: 'LED Lighting Benefits',
      description: 'How switching to LED lighting can save money and improve your home. Popular upgrades in Tunbridge Wells homes.',
      icon: Lightbulb,
      url: '/advice/led-lighting-guide'
    },
    {
      title: 'Understanding Your Electricity Bill',
      description: 'Decode your energy bills and learn how to reduce electricity costs in your Kent home.',
      icon: Zap,
      url: '/advice/electricity-bills'
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Electrical Advice & Guides | Expert Tips for Kent Homeowners | SparkyBen</title>
        <meta name="description" content="Free electrical advice and guides from NICEIC approved electricians. Safety tips, upgrade guides, and money-saving advice for Tunbridge Wells, Tonbridge & Sevenoaks homeowners." />
        <meta name="keywords" content="electrical advice Kent, electrician tips, electrical guides, home electrical safety, NICEIC advice, Tunbridge Wells electrician guides" />
        <link rel="canonical" href="https://sparkyben.co.uk/advice" />
        <meta property="og:title" content="Electrical Advice & Guides | Expert Tips for Kent Homeowners" />
        <meta property="og:description" content="Free electrical advice from NICEIC approved electricians. Safety tips and guides for Kent homeowners." />
        <meta property="og:url" content="https://sparkyben.co.uk/advice" />
      </Helmet>
      
      <EnhancedSchemaOrg 
        type="breadcrumb"
        breadcrumbs={[
          { name: 'Home', url: 'https://sparkyben.co.uk' },
          { name: 'Advice', url: 'https://sparkyben.co.uk/advice' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <BookOpen className="text-teal mr-2" size={24} />
            <span className="text-teal font-medium">Expert Advice Centre</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Electrical Advice & Guides
          </h1>
          <p className="text-lg mb-8 max-w-3xl">
            Free expert electrical advice from SparkyBen, your trusted NICEIC approved electricians serving Tunbridge Wells, 
            Tonbridge, Sevenoaks, and across Kent. Stay safe, save money, and make informed decisions about your property's electrical systems.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6">Featured Guide</h2>
          {articles.filter(a => a.featured).map(article => {
            const IconComponent = article.icon;
            return (
              <Link 
                key={article.url}
                to={article.url} 
                className="block bg-white rounded-lg shadow-custom hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-teal to-primary p-12 flex items-center justify-center">
                    <IconComponent className="text-white" size={80} />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-secondary mb-3">{article.title}</h3>
                    <p className="text-neutral-dark mb-4">{article.description}</p>
                    <span className="text-teal font-medium inline-flex items-center group">
                      Read Full Guide <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8">Electrical Guides & Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.filter(a => !a.featured).map(article => {
              const IconComponent = article.icon;
              return (
                <Link 
                  key={article.url}
                  to={article.url} 
                  className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition-shadow group"
                >
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colours">
                    <IconComponent className="text-teal" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">{article.title}</h3>
                  <p className="text-neutral-dark mb-4">{article.description}</p>
                  <span className="text-teal font-medium inline-flex items-center">
                    Read More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8">Popular Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Electrical Safety',
              'Consumer Units',
              'Rewiring',
              'EV Charging',
              'Smart Homes',
              'LED Lighting',
              'Solar Panels',
              'Emergency Repairs',
              'EICR Testing',
              'PAT Testing',
              'Outdoor Electrics',
              'Kitchen Electrics'
            ].map(topic => (
              <div key={topic} className="bg-white p-4 rounded-lg text-center">
                <span className="text-neutral-dark">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8">Advice for Your Area</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="font-semibold text-secondary mb-3">Tunbridge Wells Properties</h3>
              <p className="text-sm text-neutral-dark mb-4">
                Many Victorian and Edwardian properties in Tunbridge Wells require special consideration for electrical upgrades. 
                Our guides cover working with period features and conservation requirements.
              </p>
              <Link to="/locations/tunbridge-wells" className="text-teal font-medium text-sm">
                Tunbridge Wells Electricians →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="font-semibold text-secondary mb-3">Tonbridge Homes</h3>
              <p className="text-sm text-neutral-dark mb-4">
                From medieval cottages near the castle to modern developments, Tonbridge properties have diverse electrical needs. 
                Find specific advice for your property type.
              </p>
              <Link to="/locations/tonbridge" className="text-teal font-medium text-sm">
                Tonbridge Electricians →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-custom">
              <h3 className="font-semibold text-secondary mb-3">Sevenoaks Residences</h3>
              <p className="text-sm text-neutral-dark mb-4">
                Large detached properties common in Sevenoaks often require three-phase supplies and extensive outdoor lighting. 
                Learn about specialist electrical requirements.
              </p>
              <Link to="/locations/sevenoaks" className="text-teal font-medium text-sm">
                Sevenoaks Electricians →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Credentials */}
      <section className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Why Trust Our Advice?</h2>
            <p className="mb-6">
              All our guides are written by qualified electricians with over 15 years' experience working on Kent properties. 
              We're NICEIC approved contractors, fully insured with £5M public liability, and committed to keeping Kent homes safe.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <Shield className="text-teal mr-2" size={20} />
                <span>NICEIC Approved</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-teal mr-2" size={20} />
                <span>18th Edition Qualified</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-teal mr-2" size={20} />
                <span>£5M Insurance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-teal/10 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Need Professional Help?
            </h3>
            <p className="text-neutral-dark mb-6 max-w-2xl mx-auto">
              While our guides provide valuable information, some electrical work requires professional expertise. 
              If you need help with any electrical issue in Tunbridge Wells, Tonbridge, Sevenoaks, or anywhere in Kent, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-teal hover:bg-teal/90 text-white font-bold py-3 px-6 rounded-md transition-colours inline-flex items-center justify-center"
              >
                Get Expert Help
              </Link>
              <a 
                href="tel:+441892336282" 
                className="bg-white text-secondary hover:bg-neutral-light font-bold py-3 px-6 rounded-md transition-colours inline-flex items-center justify-center border border-secondary"
              >
                Call 01892 336 282
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advice;