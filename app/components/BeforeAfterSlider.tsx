"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import beforeImage_1 from "@/public/static/slider/1_before.jpg";
import afterImage_1 from "@/public/static/slider/1_after.jpg";
import beforeImage_2 from "@/public/static/slider/2_before.jpg";
import afterImage_2 from "@/public/static/slider/2_after.jpg";
import cool_1a from "@/public/static/coolscultping/before after/1A.png"
import cool_1b from "@/public/static/coolscultping/before after/1B.png"
import cool_2a from "@/public/static/coolscultping/before after/2A.png"
import cool_2b from "@/public/static/coolscultping/before after/2B.png"
import cool_3a from "@/public/static/coolscultping/before after/3A.png"
import cool_3b from "@/public/static/coolscultping/before after/3B.png"
import cool_4a from "@/public/static/coolscultping/before after/4A.png"
import cool_4b from "@/public/static/coolscultping/before after/4B.png"
import cool_5a from "@/public/static/coolscultping/before after/5A.png"
import cool_5b from "@/public/static/coolscultping/before after/5B.png"
import cool_6a from "@/public/static/coolscultping/before after/6A.png"
import cool_6b from "@/public/static/coolscultping/before after/6B.png"
import cool_7a from "@/public/static/coolscultping/before after/7A.png"
import cool_7b from "@/public/static/coolscultping/before after/7B.png"

const BeforeAfterSlider = ({ page }: { page: string }) => {
  // Define images based on the page prop
  const images = page === "coolsculpting" ? [
    { before: cool_1a, after: cool_1b, text: '(4 months • 2 cycles)' },
    { before: cool_2a, after: cool_2b, text: '(3 months • 3 cycles)' },
    { before: cool_3a, after: cool_3b, text: '(2 months • 8 cycles)' },
    { before: cool_4a, after: cool_4b, text: '(6 months • 3 cycles)' },
    { before: cool_5a, after: cool_5b, text: '(3 months • 10 cycles)' },
    { before: cool_6a, after: cool_6b, text: '(3 months • 8 cycles)' },
    { before: cool_7a, after: cool_7b, text: '(3 months • 8 cycles)' }
  ] : [
    { before: beforeImage_1, after: afterImage_1, text: '' },
    { before: beforeImage_2, after: afterImage_2, text: '' },
  ];

  return (
    <div className="bg-white max-md:py-0  py-16 relative">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-Begum font-bold text-[#424e6d] mb-8">
        CoolSculpting® Elite <br />
        Before and After
      </h2>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        navigation={true}
        loop
        pagination={{ clickable: true }}
        modules={[Navigation]}
        className="max-w-[90%]  before-after-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col  max-md:px-10 md:flex-row justify-center items-center gap-8">
              {/* Before Image */}
              <div className="relative">
                <Image
                  src={image.before}
                  alt="Before"
                  className="rounded-lg object-cover"
                  width={500}
                  height={300}
                />
                <div className="absolute bottom-3  left-1/2 -translate-x-1/2 bg-[#4e5b7f] text-white text-lg px-4 py-1 rounded-full">
                  BEFORE
                </div>
                <div className="text-[#424e6d] text-center pt-10">
                  
                </div>
              </div>
              {/* After Image */}
              <div className="relative">
                <Image
                  src={image.after}
                  alt="After"
                  className="rounded-lg object-cover"
                  width={500}
                  height={300}
                />
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#4e5b7f] text-white text-lg px-4 py-1 rounded-full">

                  AFTER

                </div>
                <div className="text-[#424e6d] text-center pt-5">
                  {image.text}
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Footer Text */}
      {page != "coolsculpting" ? (<p className="text-center text-gray-500 text-sm ">Results may vary.</p>
      ) : (<>
        <p className="text-center pt-10 text-gray-500 text-xl ">Photos: Allergan</p></>)}


    </div>
  );
};

export default BeforeAfterSlider;
