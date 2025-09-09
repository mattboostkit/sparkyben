import React, { useEffect } from 'react';

interface HiLevelReviewsProps {
  className?: string;
}

const HiLevelReviews: React.FC<HiLevelReviewsProps> = ({ className = '' }) => {
  useEffect(() => {
    // Load the Hi-Level review widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    script.async = true;
    
    // Append script to document body
    document.body.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <div className={`hi-level-reviews-container ${className}`}>
      <iframe 
        className='lc_reviews_widget' 
        src='https://reputationhub.site/reputation/widgets/review_widget/gfAhagGM5gLZ99xWr9Xw' 
        frameBorder='0' 
        scrolling='no' 
        style={{ 
          minWidth: '100%', 
          width: '100%',
          border: 'none',
          overflow: 'hidden'
        }}
        title="Customer Reviews"
      />
    </div>
  );
};

export default HiLevelReviews;