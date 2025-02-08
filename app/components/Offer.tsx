import React from 'react';

interface OfferProps {
  page: 'botox' | 'coolsculpting' | 'laser';
}

const Offer: React.FC<OfferProps> = ({ page }) => {
  const getOfferText = () => {
    switch (page) {
      case 'botox':
        return "Pricing valid at participating locations only. Pricing valid beginning February 3, 2025. All customers are eligible to purchase Botox® for $9.00 per unit. Max 120 units per customer. No membership required. Non-transferable, may not be applied to previous purchases, exchanges, returns, credit card payments, gift cards. Pricing is subject to change and/or end at any time.";
      case 'coolsculpting':
        return "Offer valid at participating locations only. Offer valid from February 3, 2025, to March 4, 2025. All customers eligible to receive up to 47% off Coolsculpting® Elite treatments for the Abs and Flanks. Savings are based on 2024 Coolsculpting® Elite pricing. Offer is non-transferable, may not be applied to previous purchases, exchanges, returns, credit card payments or gift cards. Offer and pricing are subject to change and/or end at any time.";
      case 'laser':
        return "Offer valid at participating locations only. Offer valid from February 3, 2025, to March 4, 2025. All customers eligible to receive up to 72% off Laser Hair Removal packages. Savings are based on 2024 Laser Hair Removal pricing. Actual discount may vary by treatment area. Offer is non-transferable, may not be applied to previous purchases, exchanges, returns, credit card payments or gift cards. Offer and pricing are subject to change and/or end at any time.";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-xs text-gray-600 text-center">
          {getOfferText()}
        </p>
      </div>
    </div>
  );
};

export default Offer; 