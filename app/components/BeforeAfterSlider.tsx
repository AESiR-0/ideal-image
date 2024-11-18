"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import beforeImage_1 from "@/public/static/slider/1_before.jpg";
import afterImage_1 from "@/public/static/slider/1_after.jpg";
import beforeImage_2 from "@/public/static/slider/2_before.jpg";
import afterImage_2 from "@/public/static/slider/2_after.jpg";

const BeforeAfterSlider = () => {
  return (
    <div className="bg-white py-16 relative">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-Begum font-bold text-gray-800 mb-8">
        Real People. Real Results.
      </h2>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        navigation={true}
        loop
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Navigation, Pagination]}
        className="max-w-5xl mx-auto before-after-slider"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Before Image */}
            <div className="relative">
              <Image
                src={beforeImage_1}
                alt="Before"
                className="rounded-lg object-cover"
                width={500}
                height={500}
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gray-600 text-white text-lg px-4 py-1 rounded-full">
                BEFORE
              </div>
            </div>
            {/* After Image */}
            <div className="relative">
              <Image
                src={afterImage_1}
                alt="After"
                className="rounded-lg object-cover"
                width={500}
                height={500}
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gray-600 text-white text-lg px-4 py-1 rounded-full">
                AFTER
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Before Image */}
            <div className="relative">
              <Image
                src={beforeImage_2}
                alt="Before"
                className="rounded-lg object-cover"
                width={500}
                height={500}
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gray-600 text-white text-lg px-4 py-1 rounded-full">
                BEFORE
              </div>
            </div>
            {/* After Image */}
            <div className="relative">
              <Image
                src={afterImage_2}
                alt="After"
                className="rounded-lg object-cover"
                width={500}
                height={500}
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gray-600 text-white text-lg px-4 py-1 rounded-full">
                AFTER
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Footer Text */}
      <p className="text-center text-gray-500 text-sm mt-4">
        Results may vary.
      </p>
    </div>
  );
};

export default BeforeAfterSlider;
