import Image from "next/image";
import TestimonialsCarousel from "./components/TestimonialCarousel";
import HeroSection from "./components/Hero";
import Features from "./components/Features";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import Sections from "./components/Sections";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <div className="w-screen">
      <HeroSection />
      <Features />
      <WhyChooseUs />
      <Sections />
      <TestimonialsCarousel />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
