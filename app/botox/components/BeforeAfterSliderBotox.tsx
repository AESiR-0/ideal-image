"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import beforeImage_1 from "@/public/static/botox/beforeAfter/before_1.jpg";
import afterImage_1 from "@/public/static/botox/beforeAfter/after_1.jpg";
import beforeImage_2 from "@/public/static/botox/beforeAfter/before_2.jpg";
import afterImage_2 from "@/public/static/botox/beforeAfter/after_2.jpg";

const BeforeAfterSlider = () => {
    const images = [
        { before: beforeImage_1, after: afterImage_1, text: "(1 week • 26 units)" },
        {
            before: beforeImage_2, after: afterImage_2, text: "(3 weeks • 16 units)"
        },
    ];

    return (
        <div className="bg-white py-10 md:py-16 relative">
            {/* Section Title */}
            <h2 className="text-center text-2xl md:text-3xl font-Begum font-bold text-[#424e6d] mb-6 md:mb-8">
                Real People, Real Results
            </h2>

            {/* Swiper Slider */}
            <Swiper
                spaceBetween={20}
                navigation={true}
                loop
                pagination={{ clickable: true }}
                modules={[Navigation]}
                className="max-w-full md:max-w-[90%] before-after-slider"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col px-4 md:px-10 md:flex-row justify-center py-10 items-center gap-4 md:gap-8">
                            {/* Before Image */}
                            <div className="relative w-full md:w-auto">
                                <Image
                                    src={image.before}
                                    alt="Before"
                                    className="rounded-lg object-cover w-full md:w-auto"
                                    width={500}
                                    height={300}
                                />
                                <div className="absolute bottom-2 md:bottom-5 left-1/2 transform -translate-x-1/2 bg-[#0A5346] text-white text-sm md:text-lg px-3 md:px-4 py-1 rounded-full">
                                    BEFORE
                                </div>
                            </div>
                            {/* After Image */}
                            <div className="relative my-3 md:my-5 w-full md:w-auto">
                                <Image
                                    src={image.after}
                                    alt="After"
                                    className="rounded-lg object-cover w-full md:w-auto"
                                    width={500}
                                    height={300}
                                />
                                <div className="absolute bottom-2 md:bottom-5 left-1/2 transform -translate-x-1/2 bg-[#0A5346] text-white text-sm md:text-lg px-3 md:px-4 py-1 rounded-full">
                                    AFTER
                                </div>

                                <div className="text-[#424e6d] absolute flex flex-col -bottom-5  left-1/2 transform w-full -translate-x-1/2 text-center pt-3 md:pt-5">
                                    <span className="text-base max-md:mt-2
                                     md:text-base">{image.text}</span>
                                    {index === 1 && (
                                        <span className="text-xs md:text-base text-[#424e6d] absolute -bottom-7 max-md:-bottom-5 left-1/2 w-full -translate-x-1/2 text-center">
                                            *Client also received treatment on Forehead and Frown Lines.
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Footer Text */}
            <p className="text-center text-gray-500 text-xs md:text-sm md:mt-4">Results may vary.</p>
        </div>
    );
};

export default BeforeAfterSlider;
