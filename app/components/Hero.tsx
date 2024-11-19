"use client";
import { useState } from "react";

const HeroSection = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Handle form input changes
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic form validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.zipCode ||
      !formData.phone
    ) {
      setError("All fields are required!");
      setIsSubmitting(false);
      return;
    }

    try {
      // Make a POST request to your backend (API endpoint)
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Successfully submitted
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          zipCode: "",
          phone: "",
        });
      } else {
        // Handle API errors
        setError(result?.message || "Something went wrong!");
      }
    } catch (error) {
      // Handle network errors
      setError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="relative  h-full text-white font-sans">
      {/* Row 1: Hero Image */}
      <div className="h-[60vh] max-md:hidden static bg-cover bg-center bg-no-repeat bg-[url('/static/hero/girl_hero_section.jpg')]"></div>

      {/* Row 2: Black Friday Content */}
      <div className="h-[30vh] max-md:h-screen max-md:bg-transparent bg-[#550640] flex max-md:flex-col items-center  md:justify-between   relative">
        {/* Full-width Black Friday Header */}
        <h3 className="absolute max-md:w-screen max-md:static top-0 left-0 w-full uppercase text-lg md:text-4xl font-extrabold tracking-wide text-white bg-[#fdb1ef] max-md:text-center text-left md:pl-[3rem] py-2">
          Black Friday Starts <span className="text-[#f6f4f2]">Now!</span>
        </h3>

        {/* Left Side: Black Friday Text */}
        <div className="text-left flex flex-col bg-[#550640]  max-md:text-center md:px-10  w-full md:w-2/3  ">
          <h1 className="text-2xl    md:text-5xl font-extrabold">
            Our Best Sale of the year
          </h1>
          <h2 className="my-2 text-[#f6f4f2] text-xl md:text-3xl font-extrabold">
            Up to 85% Off Laser <span>Hair Removal*</span>
          </h2>
        </div>

        {/* Right Side: Absolute Form */}
        <div className="absolute max-md:static max-md:text-center    md:right-[5%] md:transform md:-translate-y-1/2 bg-slate-100 md:py-10 p-12 rounded-lg text-slate-800 shadow-lg max-md:w-full md:w-[500px] lg:w-[600px] z-10">
          <h2 className="text-center text-3xl md:text-2xl font-bold mb-6">
            Unlock Your Savings
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6  w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleInputChange}
                className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleInputChange}
                className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleInputChange}
                className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
                required
              />
              <input
                type="text"
                name="zipCode"
                placeholder="ZIP Code*"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#550640] text-white font-bold py-4 rounded-md hover:bg-[#550640a7] transition-all duration-300"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
          {/* Error or Success Message */}
          {error && <p className="text-xs text-red-600 mt-4">{error}</p>}

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
    </div>
  );
};

export default HeroSection;
