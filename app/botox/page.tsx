import React from "react";
import Head from "next/head";
import Hero from "@/app/components/sections/Hero";
import TreatmentList from "@/app/components/sections/TreatmentList";
import Benefits from "@/app/components/sections/Benefits";
import WhyIdealImage from "@/app/components/sections/WhyIdealImage";
import HowItWorks from "@/app/components/sections/HowItWorks";
import Comparison from "@/app/components/sections/Comparison";
import WhatToExpect from "@/app/components/sections/WhatToExpect";
import HomeForm from "./components/botoxHeroForm";
import Footer from "../components/Footer";
import Image from "next/image";
import FAQs from "../components/FAQs";
import BotoxHero from "./components/BotoxHero";
import BeforeAfterSliderBotox from "./components/BeforeAfterSliderBotox";
import BotoxFAQs from "./components/BotoxFAQs";
import BotoxUnits from "./components/BotoxUnits";

const BotoxPage: React.FC = () => {
  return (
    <>
      {/* Page Content */}
      <div className="font-Halenoir text-[#424e6d]">
        <div className="w-full bg-transparent absolute top-5 left-0 z-40">
          <div className="container mx-auto px-10 flex items-center">
            <Image
              src="/static/logo/white.svg"
              alt="Company Logo"
              width={150}
              height={100}
            />
          </div>
        </div>
        <HomeForm />
        <BotoxHero />

        {/* Main sections with Botox-specific content */}
        <div className="flex  justify-center w-full">
          <div className="flex flex-col gap-5 max-w-6xl items-center justify-center">
            <h1 className="text-3xl font-bold text-[#515b7e] font-Begum mb-4">
              Like what you see?
            </h1>
            <button className="bg-secondary  hover:bg-secondary/80 transition-all duration-300 text-xl text-uppercase text-white px-5 py-2 rounded-full ">
              Book your appointment
            </button>
          </div>
        </div>
        <BeforeAfterSliderBotox />
        <BotoxUnits />
        <BotoxFAQs />
        <div className="flex my-10 mb-20 justify-center w-full">
          <div className="flex flex-col gap-5 max-w-6xl items-center justify-center">
            <h1 className="text-3xl font-bold text-[#515b7e] font-Begum mb-4">
            Ready to get results?
            </h1>
            <button className="bg-secondary  hover:bg-secondary/80 transition-all duration-300 text-xl text-uppercase text-white px-5 py-2 rounded-full ">
              Book your appointment
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BotoxPage;
