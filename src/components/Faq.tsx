import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqProps {
  faq: FaqItem;
  isOpen?: boolean;
}

const Faq: React.FC<FaqProps> = ({ faq, isOpen: initialOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  
  return (
    <div className="border-b border-neutral last:border-b-0">
      <button
        className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none hover:bg-neutral-light/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-secondary">{faq.question}</h3>
        {isOpen ? (
          <ChevronUp size={20} className="text-teal flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-teal flex-shrink-0" />
        )}
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="pb-4 px-6 text-neutral-dark">{faq.answer}</p>
      </div>
    </div>
  );
};

export default Faq;