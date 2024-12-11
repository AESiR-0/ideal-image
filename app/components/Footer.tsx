const Footer = () => {
  return (
    <footer className="bg-[#f6f4f2] text-[#550640] py-8 font-Begum">
      <div className="container mx-auto px-6 lg:px-20 text-center md:text-left">
        {/* Offer Section */}
        <p className="text-sm mb-6 leading-relaxed md:mb-0">
          *Offer valid from November 1, 2024, to December 14, 2024. All customers
          are eligible to purchase select bundles of Laser Hair Removal 9
          Packages select prices for a limited time. Non-transferable, may not
          be applied to exchanges, returns, credit card payments, gift cards.
          Offer is subject to change and/or end at any time.
        </p>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6">
          <div className="text-center md:text-left">
            <a
              href="https://www.idealimage.com/legal/us-privacy"
              className="text-sm text-gray-500 hover:underline transition-all"
            >
              US Privacy Statement
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm mt-4 md:mt-0">
            © 2024 Ideal Image Development Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
