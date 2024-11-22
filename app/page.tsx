import Image from "next/image";
import TestimonialsCarousel from "./components/TestimonialCarousel";
import HeroSection from "./components/Hero";
import Features from "./components/Features";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import Sections from "./components/Sections";
import ClosingCTA from "./components/ClosingCTA";
import FAQs from "./components/FAQs";
import BeforeAfterSlider from "./components/BeforeAfterSlider";

export default function Home() {
  return (
    <div className="w-screen">
      <div className="w-full  bg-transparent  absolute top-5 left-0 z-40 ">
        <div className="container  mx-auto flex items-center">
          <Image
            src="/static/logo/navbar.svg"
            alt="Company Logo"
            width={150}
            height={100}
          />
        </div>
      </div>
      <HeroSection />
      <Features />
      <WhyChooseUs />
      <BeforeAfterSlider />
      <Sections />
      <TestimonialsCarousel />
      <ClosingCTA />
      <FAQs />
      <Footer />
    </div>
  );
}
