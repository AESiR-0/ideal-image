import React from "react";
import Head from "next/head";
import Hero from "@/app/components/sections/Hero";
import TreatmentList from "@/app/components/sections/TreatmentList";
import Benefits from "@/app/components/sections/Benefits";
import WhyIdealImage from "@/app/components/sections/WhyIdealImage";
import HowItWorks from "@/app/components/sections/HowItWorks";
import Comparison from "@/app/components/sections/Comparison";
import WhatToExpect from "@/app/components/sections/WhatToExpect";
import HomeForm from "@/app/components/sections/HomeForm";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Footer from "../components/Footer";
import Image from "next/image";
import FAQs from "../components/FAQs";

const CoolSculpting: React.FC = () => {
  return (
    <>
    
      {/* Page Content */}
      <div className="font-Halenoir text-[#424e6d]">
        <div className="w-full bg-transparent absolute top-5 left-0 z-40">
          <div className="container mx-auto flex items-center">
            <Image
              src="/static/logo/white.svg"
              alt="Company Logo"
              width={150}
              height={100}
            />
          </div>
        </div>
        <HomeForm page={"coolsculpting"} />
        <Hero page={"coolsculpting"} />
        <TreatmentList page={"coolsculpting"} />
        <Benefits page={"coolsculpting"} />
        <WhyIdealImage page={"coolsculpting"} />
        <HowItWorks page={"coolsculpting"} />
        <BeforeAfterSlider page={"coolsculpting"} />
        <Comparison page={"coolsculpting"} />
        <WhatToExpect page={"coolsculpting"} />
        <FAQs page={"coolsculpting"} />
        <Footer />
      </div>
    </>
  );
};

export default CoolSculpting;
