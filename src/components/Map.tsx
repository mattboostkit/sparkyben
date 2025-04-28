import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="w-full h-96 bg-neutral-light rounded-lg overflow-hidden shadow-custom">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5005.427491924365!2d0.2402571369341963!3d51.15062963274758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df458bc85ef201%3A0x91657c8430062d3a!2sSparkyBen!5e0!3m2!1sen!2suk!4v1744739488309!5m2!1sen!2suk" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="SparkyBen Location Map"
      ></iframe>
    </div>
  );
};

export default Map;