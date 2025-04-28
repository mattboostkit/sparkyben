import React from 'react';
import { useForm } from 'react-hook-form';

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormInputs>();
  
  const onSubmit = async (data: FormInputs) => {
    // Simulated form submission - in a real app, you'd send this data to your backend
    console.log('Form submitted:', data);
    try {
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Thank you for your message. We will get back to you soon!');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-custom p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full p-3 border rounded-md focus:ring focus:ring-teal/30 focus:border-teal outline-none transition-colors ${
              errors.name ? 'border-accent-danger' : 'border-neutral'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-accent-danger text-xs">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={`w-full p-3 border rounded-md focus:ring focus:ring-teal/30 focus:border-teal outline-none transition-colors ${
              errors.email ? 'border-accent-danger' : 'border-neutral'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-accent-danger text-xs">{errors.email.message}</p>
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
            type="tel"
            {...register('phone')}
            className="w-full p-3 border border-neutral rounded-md focus:ring focus:ring-teal/30 focus:border-teal outline-none transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-secondary mb-1">
            Service Required
          </label>
          <select
            id="service"
            {...register('service')}
            className="w-full p-3 border border-neutral rounded-md focus:ring focus:ring-teal/30 focus:border-teal outline-none transition-colors"
          >
            <option value="">Select a service</option>
            <option value="new-installation">New Installation</option>
            <option value="rewire">Rewiring</option>
            <option value="lighting">Lighting Installation</option>
            <option value="fuseboard">Consumer Unit Replacement</option>
            <option value="fault-finding">Fault Finding</option>
            <option value="testing">Testing & Certification</option>
            <option value="ev-charger">EV Charger Installation</option>
            <option value="solar">Solar PV</option>
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
          rows={5}
          {...register('message', { required: 'Message is required' })}
          className={`w-full p-3 border rounded-md focus:ring focus:ring-teal/30 focus:border-teal outline-none transition-colors ${
            errors.message ? 'border-accent-danger' : 'border-neutral'
          }`}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-accent-danger text-xs">{errors.message.message}</p>
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
        className="w-full bg-teal hover:bg-teal/90 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal focus:ring-opacity-50 disabled:opacity-70"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;