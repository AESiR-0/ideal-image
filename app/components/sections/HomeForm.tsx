"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import heroGirl1 from "@/public/static/coolscultping/hero_girl.webp";
import heroGirl2 from "@/public/static/hero/hero_girl.png";

const uniqueId = uuidv4();

const HomeForm = ({ page }: { page: string }) => {
  const router = useRouter();
  const hero = page === "coolsculpting-elite" ? heroGirl1 : heroGirl2;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    phone: "",
    countryCode: "+1", // Default country code
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmTerm: "",
    pageURL: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Extract UTM parameters from URL and set them in formData
  useEffect(() => {
    const url = window.location.href; // Get the full page URL
    const urlParams = new URLSearchParams(window.location.search); // Parse the query string

    setFormData((prevData) => ({
      ...prevData,
      utmSource: urlParams.get("utm_source") || "",
      utmMedium: urlParams.get("utm_medium") || "",
      utmCampaign: urlParams.get("utm_campaign") || "",
      utmTerm: urlParams.get("utm_term") || "",
      pageURL: url,
      prospectId: uniqueId,
    }));
  }, []);

  // Handle input changes
  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
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

    // Validate ZIP code and phone number
    if (!/^\d{5}$/.test(formData.zipCode)) {
      setError("ZIP code must be exactly 5 digits.");
      setIsSubmitting(false);
      return;
    }

    if (!/^\d{7,15}$/.test(formData.phone)) {
      setError("Phone number must be between 7 and 15 digits.");
      setIsSubmitting(false);
      return;
    }

    // Validate other fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
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
        // Redirect to the thank you page with desired parameters
        if (page === "coolsculpting") {
          router.push(
            `/coolsculpting/thankyou?email=${encodeURIComponent(
              formData.email
            )}&phone=${encodeURIComponent(
              `${formData.countryCode}${formData.phone}`
            )}`
          );
        } else if (page === "coolsculpting-elite") {
          router.push(
            `/coolsculpting-elite/thankyou?email=${encodeURIComponent(
              formData.email
            )}&phone=${encodeURIComponent(
              `${formData.countryCode}${formData.phone}`
            )}`
          );
        } else
          router.push(
            `/thank-you?email=${encodeURIComponent(
              formData.email
            )}&phone=${encodeURIComponent(
              `${formData.countryCode}${formData.phone}`
            )}`
          );
      } else {
        setError(result?.message || "Something went wrong!");
      }
    } catch (error) {
      setError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative h-full font-sans">
      {/* Row 1: Hero Image */}
      <div className="h-[60vh] max-md:h-[40vh] flex justify-center max-md:bg-left max-md:bg-cover static bg-cover bg-center bg-no-repeat bg-[url('/static/coolscultping/hero.avif')]">
        <Image
          className="max-md:m-0 max-md:py-0 py-10 -ml-[47vw]"
          src={hero}
          height={400}
          width={450}
          alt=""
        />
      </div>

      {/* Row 2: Tis the Season Content */}
      <div className="h-[30vh] max-md:h-screen max-md:bg-transparent bg-[#0A5346] flex max-md:flex-col items-center md:justify-between relative">
        {/* Full-width Tis the Season Header */}
        <h3 className="absolute max-md:w-screen max-md:static top-0 left-0 w-full uppercase text-lg md:text-4xl font-extrabold tracking-wide text-[#0A5346] bg-[#f6f4f2] max-md:text-center text-left md:pl-[3rem] py-2">
          Up to 47% off
        </h3>

        {/* Left Side: Tis the Season Text */}
        <div className="text-left flex flex-col md:pt-5 bg-[#0A5346] text-[#f6f4f2] max-md:text-center md:px-10 w-full md:w-2/3">
          <h1 className="text-2xl md:text-5xl font-extrabold">
            {page === "coolsculpting-elite"
              ? "CoolSculpting® Elite"
              : "CoolSculpting®"}
          </h1>
          <h2 className="my-2  text-lg md:text-2xl font-extrabold">
            Feel confident in the clothes you love.
          </h2>
        </div>

        {/* Right Side: Form */}
        <div className="absolute max-md:static max-md:text-center md:right-[5%] md:transform md:-translate-y-1/2 bg-slate-100 md:py-10 p-12 rounded-lg text-slate-800 shadow-lg max-md:w-full md:w-[500px] lg:w-[600px] z-10">
          <h2 className="text-center text-3xl md:text-2xl font-bold mb-6">
            Unlock Your Savings
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
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
            <div className="flex gap-4">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                className="w-full md:w-auto p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
              >
                <option value="+1">United States (+1)</option>
                <option value="+44">United Kingdom (+44)</option>
                <option value="+91">India (+91)</option>
                <option value="+61">Australia (+61)</option>
                <option value="+81">Japan (+81)</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleInputChange}
                className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0A5346] text-white font-bold py-4 rounded-md hover:bg-[#0a5346e6] transition-all duration-300"
            >
              {isSubmitting ? "Submitting..." : "Sculpt & Save"}
            </button>
          </form>
          {/* Error Message */}
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

export default HomeForm;

// "use client";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import Image from "next/image";
// import off from '@/public/static/coolscultping/hero_girl.webp'

// const uniqueId = uuidv4();

// const HeroSection = () => {
//     const router = useRouter();
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         zipCode: "",
//         phone: "",
//         countryCode: "+1", // Default country code
//         utmSource: "",
//         utmMedium: "",
//         utmCampaign: "",
//         utmTerm: "",
//         pageURL: "",
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [error, setError] = useState("");

//     // Extract UTM parameters from URL and set them in formData
//     useEffect(() => {
//         const url = window.location.href; // Get the full page URL
//         const urlParams = new URLSearchParams(window.location.search); // Parse the query string

//         setFormData((prevData) => ({
//             ...prevData,
//             utmSource: urlParams.get("utm_source") || "",
//             utmMedium: urlParams.get("utm_medium") || "",
//             utmCampaign: urlParams.get("utm_campaign") || "",
//             utmTerm: urlParams.get("utm_term") || "",
//             pageURL: url,
//             prospectId: uniqueId,
//         }));
//     }, []);

//     // Handle input changes
//     const handleInputChange = (e: {
//         target: { name: string; value: string };
//     }) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     // Handle form submission
//     const handleSubmit = async (e: { preventDefault: () => void }) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         // Validate ZIP code and phone number
//         if (!/^\d{5}$/.test(formData.zipCode)) {
//             setError("ZIP code must be exactly 5 digits.");
//             setIsSubmitting(false);
//             return;
//         }

//         if (!/^\d{10}$/.test(formData.phone)) {
//             setError("Phone number must be exactly 10 digits.");
//             setIsSubmitting(false);
//             return;
//         }

//         // Validate other fields
//         if (!formData.firstName || !formData.lastName || !formData.email) {
//             setError("All fields are required!");
//             setIsSubmitting(false);
//             return;
//         }

//         try {
//             // Make a POST request to your backend (API endpoint)
//             const response = await fetch("/api/submit", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 setFormData({
//                     firstName: "",
//                     lastName: "",
//                     email: "",
//                     zipCode: "",
//                     phone: "",
//                     countryCode: "+1",
//                     utmSource: "",
//                     utmMedium: "",
//                     utmCampaign: "",
//                     utmTerm: "",
//                     pageURL: "",
//                 });
//                 router.push("/coolsculpting/thankyou");
//             } else {
//                 setError(result?.message || "Something went wrong!");
//             }
//         } catch (error) {
//             setError("Network error. Please try again later.");
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div id="#home" className="relative h-[75vh]  bg-[url('/static/coolscultping/hero.avif')]  text-white font-sans">
//             {/* Row 1: Hero Image */}

//             {/* Row 2: Tis the Season Content */}
//             <div className="flex items-center ">
//                 <div className="h-[70vh] max-md:h-screen max-md:bg-transparent  flex flex-col  md:justify-center py-20 relative">
//                     {/* Full-width Tis the Season Header */}
//                     <h3 className="max-md:w-screen max-md:static top-0 left-0 w-full uppercase text-lg md:text-4xl  tracking-wide  max-md:text-center text-left md:pl-[3rem] py-5">
//                         'Tis the Holiday <span className="">Season</span>
//                     </h3>

//                     {/* Left Side: Tis the Season Text */}
//                     <div className="text-left flex flex-col  max-md:text-center md:px-10 w-full md:w-[75%]">
//                         <h1 className="text-2xl md:text-5xl font-extrabold">
//                             CoolSculpting® Elite
//                         </h1>
//                         <h2 className="my-2  text-lg md:text-2xl font-extrabold">
//                             Feel confident in the clothes you love.

//                         </h2>
//                     </div>

//                 </div>
//                 <div className="">
//                     <Image src={off} height={512} width={512} alt="" />
//                 </div>
//                 {/* Right Side: Form */}
//                 <div className="absolute  max-md:static max-md:text-center md:right-[5%] bg-slate-100  p-8 rounded-lg text-slate-800 shadow-lg max-md:w-full md:w-[500px] lg:w-[600px] z-10">
//                     <h2 className="text-center text-3xl md:text-2xl font-bold mb-6">
//                         Unlock Your Savings
//                     </h2>

//                     {/* Form */}
//                     <form onSubmit={handleSubmit} className="space-y-6 w-full">
//                         <div className="flex flex-col md:flex-row gap-4">
//                             <input
//                                 type="text"
//                                 name="firstName"
//                                 placeholder="First Name*"
//                                 value={formData.firstName}
//                                 onChange={handleInputChange}
//                                 className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 name="lastName"
//                                 placeholder="Last Name*"
//                                 value={formData.lastName}
//                                 onChange={handleInputChange}
//                                 className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
//                                 required
//                             />
//                         </div>
//                         <div className="flex flex-col md:flex-row gap-4">
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email*"
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                                 className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 name="zipCode"
//                                 placeholder="ZIP Code*"
//                                 value={formData.zipCode}
//                                 onChange={handleInputChange}
//                                 className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
//                                 required
//                             />
//                         </div>
//                         <div className="flex gap-4">
//                             <select
//                                 name="countryCode"
//                                 value={formData.countryCode}
//                                 onChange={handleInputChange}
//                                 className="w-full md:w-auto p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
//                             >
//                                 <option value="+1">United States (+1)</option>
//                                 <option value="+44">United Kingdom (+44)</option>
//                                 <option value="+91">India (+91)</option>
//                                 <option value="+61">Australia (+61)</option>
//                                 <option value="+81">Japan (+81)</option>
//                             </select>
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 placeholder="Phone*"
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                                 className="flex-1 p-4 border rounded-md focus:ring-2 focus:ring-[#550640] focus:outline-none"
//                                 required
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             disabled={isSubmitting}
//                             className="w-full bg-[#0A5346] text-white font-bold py-4 rounded-md hover:bg-[#550640a7] transition-all duration-300"
//                         >
//                             {isSubmitting ? "Submitting..." : "Submit"}
//                         </button>
//                     </form>
//                     {/* Error Message */}
//                     {error && <p className="text-xs text-red-600 mt-4">{error}</p>}

//                     {/* Disclaimer */}
//                     <p className="text-xs text-gray-600 mt-4">
//                         **By clicking the button above and providing your phone number, you
//                         agree to be contacted by Ideal Image at this number by text
//                         messages, autodialer, artificial voice, and prerecorded messages.
//                         Consent is not a condition of any purchase. Message & Data rates may
//                         apply.
//                     </p>
//                 </div>
//             </div>
//         </div >
//     );
// };

// export default HeroSection;
