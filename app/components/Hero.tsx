const HeroSection = () => {
  return (
    <div className="relative text-white font-sans">
      {/* Row 1: Hero Image */}
      <div className="h-[60vh] bg-cover bg-center bg-no-repeat bg-[url('/static/hero/girl_hero_section.jpg')]"></div>

      {/* Row 2: Black Friday Content */}
      <div className="h-[40vh] bg-[#550640] flex items-center justify-between px-6 md:px-20 relative">
        {/* Full-width Black Friday Header */}
        <h3 className="absolute top-0 left-0 w-full uppercase text-lg md:text-3xl font-extrabold tracking-wide text-white bg-[#fdb1ef] text-left pl-[5rem] py-2">
          Black Friday Starts <span className="text-[#f6f4f2]">Now!</span>
        </h3>

        {/* Left Side: Black Friday Text */}
        <div className="text-left w-full md:w-2/3 mt-12 md:mt-16">
          <h1 className="text-2xl md:text-5xl font-extrabold">
            Our Best Sale of the Year
          </h1>
          <h2 className="mt-2 text-xl md:text-3xl font-extrabold">
            Up to 85% Off Laser <span>Hair Removal*</span>
          </h2>
        </div>

        {/* Right Side: Absolute Form */}
        <div className="absolute right-[10%] transform -translate-y-1/2 bg-slate-100 p-12 rounded-lg text-slate-800 shadow-lg w-[400px] md:w-[500px] lg:w-[600px] z-10">
          <h2 className="text-center text-xl md:text-2xl font-bold mb-6">
            Unlock Your Savings
          </h2>

          {/* Form */}
          <form className="space-y-6 w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email*"
                className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="ZIP Code*"
                className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
                required
              />
            </div>
            <input
              type="tel"
              placeholder="Phone*"
              className="w-full p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#550640] text-white font-bold py-4 rounded-md hover:bg-[#550640a7] transition-all duration-300"
            >
              Submit
            </button>
          </form>

          {/* Disclaimer */}
          <p className="text-xs text-gray-600 mt-4">
            **By clicking the button above and providing your phone number, you
            agree to be contacted by Ideal Image at this number by text
            messages, autodialer, artificial voice, and prerecorded messages.
            Consent is not a condition of any purchase. Message & Data rates
            may apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
