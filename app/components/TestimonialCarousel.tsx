"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  feedback: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Megan Belickis",
    feedback:
      "After just one session of laser hair removal, I’ve noticed a significant difference in the growth of hair on all treated areas. I’m so excited I finally did this, and can’t wait to see the final results!",
    role: "Satisfied Client",
  },
  {
    name: "Lindsay Fenton",
    feedback:
      "Leaving my second laser hair removal appointment, I am more excited about the process and results than before! The process is simple and quick. If you are on the fence, just do it already!",
    role: "Happy Client",
  },
  {
    name: "Alora Rivers",
    feedback:
      "First time ever getting laser hair removal and after my first appointment, I'm already getting beautiful results! I couldn't be happier with my choice in laser hair removal.",
    role: "Delighted Customer",
  },
  {
    name: "Claire Ramirez",
    feedback:
      "Wonderful customer service and professional, clean environment. I won’t go anywhere else for laser hair removal!",
    role: "Loyal Client",
  },
  {
    name: "Laticia Holland",
    feedback:
      "Excellent! My first treatment was today. My nurse, Donna, explained the entire process and what I should expect. I was so comfortable and the experience was great. Thanks Donna, I will see you in 6 weeks!",
    role: "New Client",
  },
  {
    name: "Emily R.",
    feedback:
      "I never thought I could feel so confident. Laser hair removal changed my life! The team was so professional, and the results are amazing. Highly recommend!",
    role: "Confident Customer",
  },
];

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 15 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <div className="w-full font-Halenoir max-w-5xl py-10 max-md:p-0 h-full px-5 mx-auto md:space-y-6 relative">
      <h2 className="text-center  font-Begum text-4xl my-10 font-bold">
        Hear from Our Happy Clients!
      </h2>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider py-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className=" transform   transition-transform durationF-300 ease-in-out hover:scale-105"
          >
            <Card
              key={index}
              className={cn(
                "keen-slider__slide  p-4 bg-background rounded-lg  "
              )}
            >
              <CardContent>
                <blockquote>
                  <p className="text-muted-foreground italic  text-sm">
                    " {testimonial.feedback} "
                  </p>
                </blockquote>
              </CardContent>
              <CardHeader>
                <CardTitle>- {testimonial.name}</CardTitle>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        className="absolute  top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800"
        onClick={handlePrev}
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800"
        onClick={handleNext}
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Pagination */}
      <div className="flex justify-center max-md:py-7 h-full min-h-2/3 gap-2">
        {Array.from({ length: testimonials.length }, (_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              currentSlide === index
                ? "bg-black"
                : "bg-gray-400 hover:bg-gray-200"
            )}
            onClick={() => instanceRef.current?.moveToIdx(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
