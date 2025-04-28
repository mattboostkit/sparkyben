import React from 'react';
import { Link } from 'react-router-dom';
import { CloudLightning as Lightning, Home } from 'lucide-react';

const Error404: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-teal/10 p-4 rounded-full">
            <Lightning size={48} className="text-teal" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-secondary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-secondary mb-4">Page Not Found</h2>
        <p className="text-neutral-dark mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center bg-teal hover:bg-teal/90 text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            <Home size={18} className="mr-2" />
            Back to Homepage
          </Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-light text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;