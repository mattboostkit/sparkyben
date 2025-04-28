import React, { useState } from 'react';
import { ChevronDown, ChevronUp, KeyRound as Pound } from 'lucide-react';
import { PricingItem } from '../types';
import { pricingCategories, pricingItems, paymentMethods } from '../data/pricing';

const PricingTable: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };
  
  return (
    <div className="space-y-6">
      {pricingCategories.map((category) => {
        const categoryItems = pricingItems.filter(item => item.category === category.id);
        const isExpanded = expandedCategory === category.id;
        
        return (
          <div key={category.id} className="rounded-lg overflow-hidden shadow-custom bg-white border border-transparent hover:border-teal/20 transition-colors">
            <button 
              onClick={() => toggleCategory(category.id)}
              className="w-full flex justify-between items-center p-4 bg-neutral-light hover:bg-neutral transition-colors text-left"
            >
              <div className="flex items-center">
                <Pound size={18} className="text-teal mr-2" />
                <h3 className="text-lg font-semibold text-secondary">{category.title}</h3>
              </div>
              {isExpanded ? (
                <ChevronUp size={20} className="text-teal" />
              ) : (
                <ChevronDown size={20} className="text-teal" />
              )}
            </button>
            
            {(isExpanded || expandedCategory === null) && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral">
                  <thead className="bg-neutral-light">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-light uppercase tracking-wider">
                        Service
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-light uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-light uppercase tracking-wider">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral">
                    {categoryItems.map((item) => (
                      <tr key={item.id} className="hover:bg-neutral-light">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary">
                          {item.service}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                          <span className="font-semibold">{item.price}</span>
                          {item.unit && <span className="text-xs ml-1">{item.unit}</span>}
                        </td>
                        <td className="px-6 py-4 text-sm text-neutral-dark">
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      })}
      
      <div className="bg-white rounded-lg shadow-custom p-6 border border-transparent hover:border-teal/20 transition-colors">
        <h3 className="text-lg font-semibold text-secondary mb-4">Payment Methods Accepted</h3>
        <div className="flex flex-wrap gap-3">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-neutral-light rounded-full px-4 py-2 text-sm">
              {method}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-teal/10 rounded-lg border border-teal/20">
          <h4 className="font-semibold text-secondary mb-2">Free Quotes</h4>
          <p className="text-sm text-neutral-dark mb-3">
            We provide free no-obligation quotes for all electrical work. For smaller jobs, we can often provide a quote over the phone. For larger or more complex projects, we may need to visit your property to assess the requirements before providing a detailed quote.
          </p>
          <h4 className="font-semibold text-secondary mb-2">Manufacturer Guarantee</h4>
          <p className="text-sm text-neutral-dark">
            All parts and materials used in our installations come with a manufacturer guarantee of 1 year. Additionally, our workmanship is guaranteed for 12 months.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;