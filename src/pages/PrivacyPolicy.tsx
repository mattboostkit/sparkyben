import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-12">
        <div className="relative container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg max-w-2xl opacity-90">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>
      
      {/* Privacy Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 bg-neutral-light p-6 rounded-lg">
              <div className="flex items-start">
                <Shield className="text-teal mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-lg font-semibold text-secondary">Privacy Policy Summary</h2>
                  <p className="text-neutral-dark mt-2">
                    At SparkyBen Electrical, we take your privacy seriously. This policy outlines how we collect and use your personal information, your rights regarding your data, and how we keep it secure. This policy was last updated on {new Date().toLocaleDateString('en-GB')}.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-neutral-dark">
              <h2>1. Introduction</h2>
              <p>
                SparkyBen Electrical ("we", "our", "us") is committed to protecting your privacy and ensuring your personal data is handled in accordance with the UK Data Protection Act 2018 and the General Data Protection Regulation (GDPR).
              </p>
              <p>
                This privacy policy explains how we collect, use, store and protect your personal information when you use our website (sparkyben.co.uk), contact us, or use our services. It also explains your rights regarding your personal data and how to contact us with any queries.
              </p>
              
              <h2>2. Data Controller Information</h2>
              <p>
                SparkyBen Electrical is the data controller responsible for your personal data:
              </p>
              <ul>
                <li>Business Name: SparkyBen Electrical</li>
                <li>Owner: Ben Carter</li>
                <li>Address: Tunbridge Wells, Kent</li>
                <li>Email: info@sparkyben.co.uk</li>
                <li>Telephone: 01892 336 282</li>
              </ul>
              
              <h2>3. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              
              <h3>3.1 Information You Provide</h3>
              <ul>
                <li>Contact details (name, email address, telephone number, address)</li>
                <li>Job details and requirements when requesting quotes or services</li>
                <li>Communications with us via email, telephone, or contact forms</li>
                <li>Feedback and testimonials you choose to provide</li>
              </ul>
              
              <h3>3.2 Information We Collect Automatically</h3>
              <ul>
                <li>IP address and browsing data</li>
                <li>Information about your visits to our website using cookies</li>
                <li>Device information (browser type, operating system)</li>
                <li>Referral source (how you found our website)</li>
              </ul>
              
              <h2>4. How We Use Your Information</h2>
              <p>We use your personal information for the following purposes:</p>
              
              <h3>4.1 With Your Consent</h3>
              <ul>
                <li>To respond to enquiries and provide quotes</li>
                <li>To send you marketing information about our services when you have opted in</li>
                <li>To process contact form submissions</li>
              </ul>
              
              <h3>4.2 To Fulfil Contractual Obligations</h3>
              <ul>
                <li>To provide electrical services you have requested</li>
                <li>To arrange appointments and site visits</li>
                <li>To process payments and manage accounts</li>
                <li>To provide certificates and documentation for completed work</li>
              </ul>
              
              <h3>4.3 For Legitimate Business Interests</h3>
              <ul>
                <li>To improve our services and website functionality</li>
                <li>For internal record keeping and administration</li>
                <li>To analyse customer preferences and tailor our services</li>
                <li>To protect our business and website security</li>
              </ul>
              
              <h3>4.4 To Comply with Legal Obligations</h3>
              <ul>
                <li>To comply with electrical safety regulations and certification requirements</li>
                <li>For tax and accounting purposes</li>
                <li>To respond to legal requests from regulatory authorities</li>
              </ul>
              
              <h2>5. Legal Basis for Processing</h2>
              <p>
                We process your personal data on the following legal grounds:
              </p>
              <ul>
                <li><strong>Consent:</strong> Where you have explicitly agreed to the use of your data for a specific purpose</li>
                <li><strong>Contract Performance:</strong> Where processing is necessary to fulfil our contractual obligations to you</li>
                <li><strong>Legitimate Interests:</strong> Where we have a legitimate business interest in processing your data</li>
                <li><strong>Legal Obligation:</strong> Where we need to process your data to comply with a legal obligation</li>
              </ul>
              
              <h2>6. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, or reporting requirements:
              </p>
              <ul>
                <li>Contact information and communications: 2 years after last contact</li>
                <li>Customer records and job details: 7 years (to comply with tax and warranty obligations)</li>
                <li>Electrical certificates and safety documentation: 7 years (legal requirement)</li>
                <li>Website analytics data: 26 months</li>
              </ul>
              
              <h2>7. Cookies and Tracking</h2>
              <p>
                Our website uses cookies to improve your browsing experience and to collect information about how you use our site. Cookies are small text files that are stored on your device when you visit our website.
              </p>
              <p>
                We use the following types of cookies:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytical/performance cookies:</strong> Allow us to recognise and count visitors and see how they move around our website</li>
                <li><strong>Functionality cookies:</strong> Enable the website to provide enhanced functionality and personalisation</li>
              </ul>
              <p>
                You can control and manage cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our website.
              </p>
              
              <h2>8. Data Sharing and Third Parties</h2>
              <p>
                We may share your personal information with:
              </p>
              <ul>
                <li><strong>Service providers:</strong> Third parties who provide services on our behalf, such as IT support, email hosting, and payment processing</li>
                <li><strong>Professional advisers:</strong> Accountants, lawyers, insurers when necessary</li>
                <li><strong>Regulatory authorities:</strong> Government bodies, regulatory organisations, law enforcement agencies when required</li>
              </ul>
              <p>
                We require all third parties to respect the security of your data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
              </p>
              <p>
                We do not sell or rent your personal information to any third parties.
              </p>
              
              <h2>9. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include:
              </p>
              <ul>
                <li>Secure networks and password protection</li>
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Access restrictions on a need-to-know basis</li>
                <li>Staff training on data protection</li>
              </ul>
              <p>
                While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
              </p>
              
              <h2>10. Your Data Protection Rights</h2>
              <p>
                Under data protection laws, you have the following rights:
              </p>
              <ul>
                <li><strong>Right to Access:</strong> You can request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> You can request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> You can request deletion of your personal data in certain circumstances</li>
                <li><strong>Right to Restrict Processing:</strong> You can request restriction of processing of your data</li>
                <li><strong>Right to Data Portability:</strong> You can request transfer of your data to another organisation</li>
                <li><strong>Right to Object:</strong> You can object to processing of your data for marketing or based on legitimate interests</li>
                <li><strong>Rights Related to Automated Decision Making:</strong> Protection against automated decision-making without human intervention</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the details provided below. We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data. We try to respond to all legitimate requests within one month.
              </p>
              
              <h2>11. Marketing Communications</h2>
              <p>
                We may send you marketing communications if you have:
              </p>
              <ul>
                <li>Requested information from us</li>
                <li>Used our services</li>
                <li>Provided us with your details when requesting a quote</li>
                <li>Explicitly consented to receive marketing communications</li>
              </ul>
              <p>
                You can opt out of marketing communications at any time by:
              </p>
              <ul>
                <li>Clicking the 'unsubscribe' link in any marketing email</li>
                <li>Contacting us directly via email or telephone</li>
              </ul>
              
              <h2>12. Children's Privacy</h2>
              <p>
                Our website and services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you believe we have collected personal information from a child under 16, please contact us immediately.
              </p>
              
              <h2>13. Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on our website with a clear notification. We encourage you to review this privacy policy periodically.
              </p>
              
              <h2>14. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or how we handle your personal information, please contact us:
              </p>
              <ul>
                <li>Email: info@sparkyben.co.uk</li>
                <li>Telephone: 01892 336 282</li>
                <li>Post: SparkyBen Electrical, Tunbridge Wells, Kent</li>
              </ul>
              <p>
                You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk). However, we would appreciate the opportunity to address your concerns before you approach the ICO, so please contact us in the first instance.
              </p>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link to="/contact" className="bg-teal hover:bg-teal/90 text-white font-medium px-6 py-3 rounded-md transition-colors">
                Contact Us With Any Privacy Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;