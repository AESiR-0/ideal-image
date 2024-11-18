const HeroSection = () => {
  return (
    <div className="relative text-white font-sans">
      {/* Row 1: Hero Image */}
      <div className="h-[80vh] bg-cover bg-center bg-no-repeat bg-[url('/static/hero/girl_hero_section.jpg')]"></div>

      {/* Row 2: Black Friday Content */}
      <div className="h-[30vh] bg-[#550640] flex flex-col items-center -ml-20 text-center">
        <h3 className="uppercase text-xl md:text-4xl font-extrabold tracking-wide text-white w-full bg-[#fdb1ef]">
          Black Friday Starts <span className="text-[#f6f4f2]">Now!</span>
        </h3>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold">
          Our Best Sale of the Year
        </h1>
        <h2 className="mt-2 text-2xl md:text-4xl font-extrabold">
          Up to 85% Off Laser <span>Hair Removal*</span>
        </h2>
      </div>

      {/* Absolute Form */}
      <div className="absolute top-[40%] right-40 transform -translate-y-1/2 bg-slate-100 p-8 rounded-lg text-slate-800 shadow-lg w-[600px] md:w-[400px]">
        <h2 className="text-center text-xl md:text-2xl font-bold mb-6">
          Unlock Your Savings
        </h2>

        {/* Form */}
        <form className="space-y-4 w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="flex-1 p-3 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="flex-1 p-3 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email*"
              className="flex-1 p-3 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="ZIP Code*"
              className="flex-1 p-3 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
              required
            />
          </div>
          <input
            type="tel"
            placeholder="Phone*"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#550640] text-white font-bold py-3 rounded-md hover:bg-[#550640a7] transition-all duration-300"
          >
            Submit
          </button>
        </form>

        {/* Disclaimer */}
        <p className="text-xs text-gray-600 mt-4">
          **By clicking the button above and providing your phone number, you
          agree to be contacted by Ideal Image at this number by text messages,
          autodialer, artificial voice, and prerecorded messages. Consent is not
          a condition of any purchase. Message & Data rates may apply.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
