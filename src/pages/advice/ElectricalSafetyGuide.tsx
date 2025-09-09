import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AlertTriangle, CheckCircle2, Info, ArrowRight, Home } from 'lucide-react';
import CTABanner from '../../components/CTABanner';
import EnhancedSchemaOrg from '../../components/EnhancedSchemaOrg';

const ElectricalSafetyGuide: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Electrical Safety Guide for Kent Homeowners | Expert Advice | SparkyBen</title>
        <meta name="description" content="Essential electrical safety advice for homeowners in Tunbridge Wells, Tonbridge & Sevenoaks. Learn to spot dangers, prevent fires, and when to call a qualified electrician. NICEIC approved guidance." />
        <meta name="keywords" content="electrical safety Kent, home electrical safety, electrical fire prevention, electrical hazards, NICEIC safety advice, Tunbridge Wells electrician advice" />
        <link rel="canonical" href="https://sparkyben.co.uk/advice/electrical-safety-guide" />
        <meta property="og:title" content="Electrical Safety Guide for Kent Homeowners" />
        <meta property="og:description" content="Essential electrical safety advice from NICEIC approved electricians. Keep your Kent home safe." />
        <meta property="og:url" content="https://sparkyben.co.uk/advice/electrical-safety-guide" />
      </Helmet>
      
      <EnhancedSchemaOrg 
        type="breadcrumb"
        breadcrumbs={[
          { name: 'Home', url: 'https://sparkyben.co.uk' },
          { name: 'Advice', url: 'https://sparkyben.co.uk/advice' },
          { name: 'Electrical Safety Guide', url: 'https://sparkyben.co.uk/advice/electrical-safety-guide' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-accent-warning mr-2" size={24} />
            <span className="text-accent-warning font-medium">Safety First</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Electrical Safety Guide for Homeowners
          </h1>
          <p className="text-lg mb-8 max-w-3xl">
            Essential electrical safety information for properties in Tunbridge Wells, Tonbridge, Sevenoaks, and across Kent. 
            Learn how to keep your home safe and recognise when you need professional help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-neutral-dark mb-4">
                As NICEIC approved electricians serving Kent for over 15 years, we've seen firsthand the importance of electrical safety in homes. 
                This guide provides essential information to help keep your family and property safe from electrical hazards.
              </p>
              <div className="bg-accent-warning/10 border-l-4 border-accent-warning p-4 rounded">
                <p className="text-neutral-dark font-medium">
                  <AlertTriangle className="inline mr-2 text-accent-warning" size={20} />
                  Remember: If in doubt, always consult a qualified electrician. Never attempt electrical work yourself unless you're competent and it's legally permitted.
                </p>
              </div>
            </div>

            {/* Warning Signs Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6">Warning Signs You Need an Electrician</h2>
              <p className="text-neutral-dark mb-4">
                Many electrical fires in Kent homes could be prevented by recognising early warning signs. If you notice any of these issues in your Tunbridge Wells, Tonbridge, or Sevenoaks property, contact us immediately:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="font-semibold text-secondary mb-3">Immediate Dangers</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertTriangle size={16} className="text-accent-danger mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-dark">Burning smell from sockets or consumer unit</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle size={16} className="text-accent-danger mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-dark">Scorch marks around sockets</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle size={16} className="text-accent-danger mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-dark">Sparks from outlets or switches</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle size={16} className="text-accent-danger mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-dark">Electric shocks from appliances</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-custom">
                  <h3 className="font-semibold text-secondary mb-3">Early Warning Signs</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Info size={16} className="text-accent-warning mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-dark">Flickering or dimming lights</span>
                    </li>
                    <li className="flex items-start">
                      <Info size={16} className="text-accent-warning mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-dark">Frequently tripping circuit breakers</span>
                    </li>
                    <li className="flex items-start">
                      <Info size={16} className="text-accent-warning mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-dark">Warm or hot socket outlets</span>
                    </li>
                    <li className="flex items-start">
                      <Info size={16} className="text-accent-warning mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-dark">Buzzing sounds from electrical panels</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Safety Tips for Kent Homes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6">Electrical Safety Tips for Kent Properties</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">Period Properties (Common in Tunbridge Wells & Sevenoaks)</h3>
                  <p className="text-neutral-dark mb-3">
                    Many Victorian and Edwardian homes in areas like the Tunbridge Wells conservation area and Sevenoaks Old Town have outdated wiring:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle2 size={16} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-dark">Have an EICR inspection if your property is over 25 years old</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 size={16} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-dark">Check for old rubber or lead-sheathed cables (common pre-1960s)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 size={16} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-dark">Upgrade old fuse boxes to modern consumer units with RCD protection</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">Modern Homes (New Developments in Tonbridge & Paddock Wood)</h3>
                  <p className="text-neutral-dark mb-3">
                    Even newer properties require regular maintenance:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle2 size={16} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-dark">Test RCD protection every 3 months using the test button</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 size={16} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-dark">Don't overload sockets with multiple adapters</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 size={16} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-dark">Keep electrical installations certificates for warranty purposes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Seasonal Advice */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6">Seasonal Electrical Safety</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-light p-6 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-3">Winter Safety (November - March)</h3>
                  <p className="text-sm text-neutral-dark mb-3">
                    Kent winters can be harsh on electrical systems:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-dark">
                    <li>• Check outdoor sockets for weather damage</li>
                    <li>• Don't overload circuits with electric heaters</li>
                    <li>• Ensure Christmas lights have British Standard marks</li>
                    <li>• Keep portable heaters away from curtains</li>
                  </ul>
                </div>
                
                <div className="bg-neutral-light p-6 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-3">Summer Safety (April - October)</h3>
                  <p className="text-sm text-neutral-dark mb-3">
                    Outdoor electrical use increases in summer:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-dark">
                    <li>• Use RCD protection for all garden equipment</li>
                    <li>• Check outdoor lighting before garden parties</li>
                    <li>• Ensure hot tub connections are properly rated</li>
                    <li>• Keep electrical items away from paddling pools</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DIY vs Professional */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6">What You Can and Can't Do Yourself</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-custom mb-6">
                <h3 className="font-semibold text-teal mb-3">✓ Safe DIY Tasks</h3>
                <ul className="space-y-2 text-neutral-dark">
                  <li>• Replacing light bulbs and lamp shades</li>
                  <li>• Resetting tripped circuit breakers</li>
                  <li>• Changing fuses in plugs</li>
                  <li>• Basic PAT testing visual checks</li>
                </ul>
              </div>
              
              <div className="bg-accent-danger/10 p-6 rounded-lg border border-accent-danger">
                <h3 className="font-semibold text-accent-danger mb-3">✗ Always Call a Professional</h3>
                <ul className="space-y-2 text-neutral-dark">
                  <li>• Installing new sockets or switches</li>
                  <li>• Any work on the consumer unit/fuse box</li>
                  <li>• Bathroom or kitchen electrical work</li>
                  <li>• Outdoor electrical installations</li>
                  <li>• Any work requiring Part P notification</li>
                </ul>
                <p className="text-sm text-neutral-dark mt-4">
                  <strong>Note:</strong> In Kent, all notifiable electrical work must be carried out by a Part P registered electrician or inspected by Building Control.
                </p>
              </div>
            </div>

            {/* Local Regulations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6">Kent Building Regulations & Compliance</h2>
              <p className="text-neutral-dark mb-4">
                Whether you're in Tunbridge Wells Borough, Tonbridge and Malling, or Sevenoaks District, the same electrical regulations apply:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Info size={20} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-secondary">Part P Building Regulations:</strong>
                    <span className="text-neutral-dark ml-2">Most electrical work in homes requires compliance with Part P</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Info size={20} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-secondary">BS 7671 (18th Edition):</strong>
                    <span className="text-neutral-dark ml-2">All installations must meet current wiring regulations</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Info size={20} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-secondary">Landlord Requirements:</strong>
                    <span className="text-neutral-dark ml-2">EICR required every 5 years for rental properties in Kent</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Emergency Procedures */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6">What to Do in an Electrical Emergency</h2>
              
              <div className="bg-accent-danger/10 border border-accent-danger p-6 rounded-lg">
                <h3 className="font-semibold text-accent-danger mb-4">Electrical Fire or Severe Danger:</h3>
                <ol className="space-y-2 text-neutral-dark">
                  <li><strong>1.</strong> Turn off power at the main switch if safe to access</li>
                  <li><strong>2.</strong> Evacuate the property immediately</li>
                  <li><strong>3.</strong> Call 999 for Kent Fire and Rescue Service</li>
                  <li><strong>4.</strong> Do NOT use water on electrical fires</li>
                  <li><strong>5.</strong> Call us after emergency services: 01892 336 282</li>
                </ol>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-teal/10 p-8 rounded-lg text-center">
              <Home className="text-teal mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Keep Your Kent Home Safe
              </h3>
              <p className="text-neutral-dark mb-6 max-w-2xl mx-auto">
                If you're concerned about electrical safety in your Tunbridge Wells, Tonbridge, or Sevenoaks property, 
                we offer comprehensive safety inspections starting from £150.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-teal hover:bg-teal/90 text-white font-bold py-3 px-6 rounded-md transition-colours inline-flex items-center justify-center"
                >
                  Book Safety Inspection
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
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6">Related Advice Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/advice/consumer-unit-guide" className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-secondary mb-2">Consumer Unit Upgrade Guide</h3>
              <p className="text-sm text-neutral-dark mb-3">
                Everything you need to know about upgrading your fuse box to a modern consumer unit.
              </p>
              <span className="text-teal font-medium inline-flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </span>
            </Link>
            
            <Link to="/advice/ev-charging-guide" className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-secondary mb-2">EV Charging Point Installation</h3>
              <p className="text-sm text-neutral-dark mb-3">
                Complete guide to installing electric vehicle charging at your Kent property.
              </p>
              <span className="text-teal font-medium inline-flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </span>
            </Link>
            
            <Link to="/advice/rewiring-guide" className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-secondary mb-2">House Rewiring Explained</h3>
              <p className="text-sm text-neutral-dark mb-3">
                Signs you need a rewire and what to expect from the process.
              </p>
              <span className="text-teal font-medium inline-flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </span>
            </Link>
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

export default ElectricalSafetyGuide;