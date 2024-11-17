import Image from "next/image";
import HeroImage from "@/public/static/hero/girl_hero_section.jpg";

const HeroSection = () => {
  return (
    <div className="relative  text-white">
      {/* Wrapper */}
      <div className="flex bg-cover bg-no-repeat bg-[url('/static/hero/girl_hero_section.jpg')] flex-col py-20 lg:flex-row md:justify-end px-20  items-center">
        {/* Form Section */}
        <div className="lg:w-1/2 w-full font-serif bg-slate-100 p-8 rounded-md text-slate-800 relative">
          {/* Headline */}
          <h2 className="text-center text-2xl font-bold mb-6">
            Claim Your Special Offer Now!
          </h2>

          {/* Form */}
          <form className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="email"
                placeholder="Email*"
                className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="ZIP Code*"
                className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
                required
              />
            </div>
            <input
              type="tel"
              placeholder="Phone*"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#550640] text-white font-bold py-2 rounded-md hover:bg-[#550640a7] transition-all cursor-pointer duration-400"
            >
              Submit
            </button>
          </form>

          {/* Disclaimer */}
          <p className="text-xs text-gray-600 mt-4">
            **By clicking the button above and providing your phone number, you
            agree to be contacted by Ideal Image at this number by text
            messages, autodialer, artificial voice, and prerecorded messages.
            Consent is not a condition of any purchase. Message & Data rates may
            apply.
          </p>
        </div>
      </div>

      {/* Promotion Section */}
      <div className="text-center max-md:static   absolute max-md:bg-[#550640] top-40 left-10  text-white">
        <h3 className="uppercase text-center max-md:text-xl max-md:bg-[#550640] flex flex-col py-10 max-md:py-2 cursor-pointer transition-all duration-500 ease-out text-4xl text-[#fdb1ef] font-extrabold tracking-wide">
          Black Friday Starts <span className="text-[#f6f4f2]"> Now!</span>
        </h3>
        <h1 className="text-4xl max-md:text-2xl flex flex-col  font-extrabold mt-2">
          Up to 85% Off Laser <span>Hair Removal*</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
