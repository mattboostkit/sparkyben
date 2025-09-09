import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import SeoMetaTags from '../components/SeoMetaTags';

const Terms: React.FC = () => {
  return (
    <div>
      <SeoMetaTags 
        title="Terms of Service | SparkyBen Electrical"
        description="Terms and conditions for using SparkyBen Electrical services. Read our terms of service for information about our electrical services, warranties, and customer agreements."
      />
      
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-12">
        <div className="relative container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg max-w-2xl opacity-90">
            Our terms and conditions for providing electrical services
          </p>
        </div>
      </section>
      
      {/* Terms Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 bg-neutral-light p-6 rounded-lg">
              <div className="flex items-start">
                <FileText className="text-teal mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-lg font-semibold text-secondary">Terms of Service Summary</h2>
                  <p className="text-neutral-dark mt-2">
                    These terms and conditions outline the rules and regulations for using SparkyBen Electrical's services. By engaging our services, you accept these terms and conditions in full. This document was last updated on {new Date().toLocaleDateString('en-GB')}.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-neutral-dark">
              <h2>1. Introduction</h2>
              <p>
                These terms and conditions govern your use of electrical services provided by SparkyBen Electrical ("we", "our", "us"). By engaging our services, you confirm that you accept these terms and agree to comply with them.
              </p>
              <p>
                If you disagree with any part of these terms, please do not use our services.
              </p>
              
              <h2>2. Company Information</h2>
              <p>
                SparkyBen Electrical is a professional electrical services provider:
              </p>
              <ul>
                <li>Business Name: SparkyBen Electrical</li>
                <li>Owner: Ben Carter</li>
                <li>Address: Tunbridge Wells, Kent</li>
                <li>Email: info@sparkyben.co.uk</li>
                <li>Telephone: 01892 336 282</li>
              </ul>
              
              <h2>3. Services</h2>
              <p>
                SparkyBen Electrical provides a range of electrical services for domestic and commercial properties, including but not limited to:
              </p>
              <ul>
                <li>Electrical installations and repairs</li>
                <li>Rewiring and consumer unit replacements</li>
                <li>Electrical testing and certification</li>
                <li>Lighting installations</li>
                <li>Emergency electrical repairs</li>
                <li>Electric vehicle charging point installation</li>
                <li>Smart home systems</li>
                <li>Commercial electrical services</li>
              </ul>
              <p>
                All electrical work is carried out in accordance with BS7671 (IET Wiring Regulations) and relevant building regulations.
              </p>
              
              <h2>4. Quotations and Pricing</h2>
              <h3>4.1 Quotations</h3>
              <p>
                All quotations are valid for 30 days from the date of issue unless otherwise stated. Quotations are based on the information provided by the client and visual inspections where applicable.
              </p>
              <p>
                If additional work is required due to unforeseen circumstances or changes to the original requirements, we will inform you as soon as possible and provide a revised quotation.
              </p>
              
              <h3>4.2 Pricing</h3>
              <p>
                Our pricing is based on:
              </p>
              <ul>
                <li>Fixed price quotes for defined projects</li>
                <li>Hourly rates for smaller jobs and emergency call-outs</li>
                <li>All prices exclude VAT at the current rate unless otherwise stated</li>
              </ul>
              <p>
                A minimum charge of 1 hour applies to all call-outs. After the first hour, work is charged in 15-minute increments.
              </p>
              
              <h2>5. Booking and Appointments</h2>
              <p>
                When booking our services:
              </p>
              <ul>
                <li>We will arrange a mutually convenient date and time for the work to be carried out</li>
                <li>We aim to be punctual, but may occasionally be delayed due to emergencies or unforeseen circumstances</li>
                <li>If we need to reschedule, we will give you as much notice as possible</li>
                <li>If you need to cancel or reschedule, please give at least 24 hours' notice</li>
              </ul>
              <p>
                For emergency call-outs, we will attend as soon as possible, with priority given to dangerous situations.
              </p>
              
              <h2>6. Payment Terms</h2>
              <p>
                Our payment terms are as follows:
              </p>
              <ul>
                <li>For smaller jobs (under £500), payment is due upon completion of the work</li>
                <li>For larger projects, we may require a deposit (typically 30%) before commencing work, with the balance due upon completion</li>
                <li>For commercial clients, we offer payment terms of 14 days from invoice date</li>
                <li>We accept payment by bank transfer, credit/debit card, cash, or cheque</li>
              </ul>
              <p>
                Late payments may incur interest charges at 8% above the Bank of England base rate, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
              </p>
              
              <h2>7. Warranties and Guarantees</h2>
              <p>
                We provide the following guarantees on our work:
              </p>
              <ul>
                <li>12-month workmanship guarantee on all electrical installations and repairs</li>
                <li>Manufacturer's warranty on all parts and materials used (typically 1-2 years)</li>
                <li>Compliance with all relevant electrical regulations and standards</li>
              </ul>
              <p>
                Our guarantees do not cover:
              </p>
              <ul>
                <li>Damage caused by misuse, abuse, or negligence</li>
                <li>Issues arising from alterations made by others</li>
                <li>Normal wear and tear</li>
                <li>Damage caused by power surges or other external factors beyond our control</li>
              </ul>
              
              <h2>8. Customer Responsibilities</h2>
              <p>
                When using our services, you agree to:
              </p>
              <ul>
                <li>Provide accurate information about your electrical requirements</li>
                <li>Ensure reasonable access to all areas where work is to be carried out</li>
                <li>Inform us of any potential hazards or special conditions</li>
                <li>Obtain any necessary permissions (e.g., landlord consent) before work commences</li>
                <li>Not interfere with or modify our electrical installations without our consent</li>
              </ul>
              
              <h2>9. Liability and Insurance</h2>
              <p>
                SparkyBen Electrical maintains comprehensive public liability insurance of £5 million to cover any damage or injury that may occur during the provision of our services.
              </p>
              <p>
                Our liability is limited to the cost of rectifying any defective work or replacing any defective materials. We are not liable for any indirect, consequential, or economic losses.
              </p>
              <p>
                We will take reasonable care to avoid damage to property, but some disruption may be unavoidable when carrying out electrical work. We will discuss this with you before commencing work.
              </p>
              
              <h2>10. Complaints Procedure</h2>
              <p>
                If you are dissatisfied with any aspect of our service:
              </p>
              <ol>
                <li>Please contact us immediately to discuss your concerns</li>
                <li>We will investigate the issue and respond within 7 working days</li>
                <li>If necessary, we will arrange to inspect the work and rectify any problems</li>
                <li>If we cannot resolve the issue to your satisfaction, you may refer the matter to the NICEIC, our regulatory body</li>
              </ol>
              
              <h2>11. Cancellation and Refunds</h2>
              <h3>11.1 Cancellation by Customer</h3>
              <p>
                For consumer customers (not businesses), you have the right to cancel within 14 days of agreeing to our services, provided work has not yet commenced. To cancel, please contact us in writing.
              </p>
              <p>
                If you cancel after work has commenced, you will be liable for:
              </p>
              <ul>
                <li>The cost of any work already completed</li>
                <li>The cost of any materials already purchased</li>
                <li>A reasonable administration fee</li>
              </ul>
              
              <h3>11.2 Cancellation by SparkyBen Electrical</h3>
              <p>
                We reserve the right to cancel or reschedule appointments due to:
              </p>
              <ul>
                <li>Emergency call-outs taking priority</li>
                <li>Illness or unforeseen circumstances</li>
                <li>Unavailability of essential materials or parts</li>
                <li>Unsafe working conditions</li>
              </ul>
              <p>
                In such cases, we will reschedule at the earliest convenient time.
              </p>
              
              <h2>12. Intellectual Property</h2>
              <p>
                All intellectual property rights in relation to our services, including designs, plans, and documentation, remain the property of SparkyBen Electrical.
              </p>
              <p>
                You may not reproduce, distribute, or commercially exploit such material without our express permission.
              </p>
              
              <h2>13. Privacy and Data Protection</h2>
              <p>
                We collect and process personal information in accordance with our Privacy Policy, which is available on our website. By using our services, you consent to such processing.
              </p>
              <p>
                We will only use your personal information to:
              </p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Communicate with you about your electrical work</li>
                <li>Issue certificates and documentation</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
              
              <h2>14. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
              
              <h2>15. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the modified terms.
              </p>
              
              <h2>16. Contact Information</h2>
              <p>
                If you have any questions about these terms and conditions, please contact us:
              </p>
              <ul>
                <li>Email: info@sparkyben.co.uk</li>
                <li>Telephone: 01892 336 282</li>
                <li>Post: SparkyBen Electrical, Tunbridge Wells, Kent</li>
              </ul>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link to="/contact" className="bg-teal hover:bg-teal/90 text-white font-medium px-6 py-3 rounded-md transition-colors">
                Contact Us With Any Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
