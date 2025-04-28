import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component for automatically adding canonical URL links to prevent duplicate content issues
 * This ensures search engines understand the preferred URL for each page
 */
const CanonicalUrl: React.FC = () => {
  const location = useLocation();
  const baseUrl = 'https://sparkyben.co.uk'; // Replace with your actual domain when live

  useEffect(() => {
    // Remove any existing canonical links to prevent duplicates
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Create and insert the canonical link
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', `${baseUrl}${location.pathname}`);
    document.head.appendChild(link);

    // Clean up when component unmounts
    return () => {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.remove();
    };
  }, [location.pathname]);

  return null;
};

export default CanonicalUrl;