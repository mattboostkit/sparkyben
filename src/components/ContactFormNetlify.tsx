import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactFormNetlify: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Encode form data for Netlify
    const encode = (data: any) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };
    
    try {
      // Submit to Netlify Forms
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ 
          "form-name": "contact",
          ...formData 
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      {/* Hidden form for Netlify to detect during build */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <select name="service"></select>
        <textarea name="message"></textarea>
      </form>
      
      {/* Actual form */}
      <form 
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit} 
        className="bg-white rounded-lg shadow-custom p-6"
      >
        {/* Honeypot field for spam protection */}
        <input type="hidden" name="form-name" value="contact" />
        <div style={{ display: 'none' }}>
          <label>
            Don't fill this out if you're human: 
            <input name="bot-field" />
          </label>
        </div>
        
        {submitStatus === 'success' && (
          <div className="mb-4 p-4 bg-teal/10 border border-teal rounded-md">
            <p className="text-teal font-medium">Thank you for your message!</p>
            <p className="text-sm text-neutral-dark mt-1">We'll get back to you within 24 hours.</p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-4 p-4 bg-accent-danger/10 border border-accent-danger rounded-md">
            <p className="text-accent-danger font-medium">There was an error submitting your message.</p>
            <p className="text-sm text-neutral-dark mt-1">Please try again or call us on 01892 336 282.</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:ring focus:ring-teal/30 focus:border-teal outline-none transition-colours ${
                errors.name ? 'border-accent-danger' : 'border-neutral'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-accent-danger text-xs">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:ring focus:ring-teal/30 focus:border-teal outline-none transition-colours ${
                errors.email ? 'border-accent-danger' : 'border-neutral'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-accent-danger text-xs">{errors.email}</p>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1">
              Telephone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-neutral rounded-md focus:ring focus:ring-teal/30 focus:border-teal outline-none transition-colours"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-secondary mb-1">
              Service Required
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 border border-neutral rounded-md focus:ring focus:ring-teal/30 focus:border-teal outline-none transition-colours"
            >
              <option value="">Select a service</option>
              <option value="new-installation">New Installation</option>
              <option value="rewiring">Complete Rewiring</option>
              <option value="lighting">Lighting Installation</option>
              <option value="fuseboard">Consumer Unit Replacement</option>
              <option value="fault-finding">Fault Finding</option>
              <option value="testing">Testing & Certification (EICR)</option>
              <option value="ev-charger">EV Charger Installation</option>
              <option value="solar">Solar PV Installation</option>
              <option value="smart-home">Smart Home Systems</option>
              <option value="emergency">Emergency Repair</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Please describe the electrical work you need..."
            className={`w-full p-3 border rounded-md focus:ring focus:ring-teal/30 focus:border-teal outline-none transition-colours ${
              errors.message ? 'border-accent-danger' : 'border-neutral'
            }`}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-accent-danger text-xs">{errors.message}</p>
          )}
        </div>
        
        <div className="mb-6">
          <div className="flex items-start">
            <input
              id="privacy"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 text-teal border-neutral rounded focus:ring-teal"
            />
            <label htmlFor="privacy" className="ml-2 text-sm text-neutral-dark">
              I agree to the <a href="/privacy-policy" className="text-teal hover:underline">privacy policy</a> and consent to being contacted regarding my enquiry.
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal hover:bg-teal/90 text-white font-medium py-3 px-4 rounded-md transition-colours focus:outline-none focus:ring-2 focus:ring-teal focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </>
  );
};

export default ContactFormNetlify;