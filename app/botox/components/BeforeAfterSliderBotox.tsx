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
        <div className="bg-white max-md:py-10 py-16 relative">
            {/* Section Title */}
            <h2 className="text-center text-3xl font-Begum font-bold text-[#424e6d] mb-8">
                Real People, Real Results
            </h2>

            {/* Swiper Slider */}
            <Swiper
                spaceBetween={30}
                navigation={true}
                loop
                pagination={{ clickable: true }}
                modules={[Navigation]}
                className="max-w-[90%] before-after-slider"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col max-md:px-10 md:flex-row justify-center items-center gap-8">
                            {/* Before Image */}
                            <div className="relative">
                                <Image
                                    src={image.before}
                                    alt="Before"
                                    className="rounded-lg object-cover"
                                    width={500}
                                    height={300}
                                />
                                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-[#0A5346] text-white text-lg px-4 py-1 rounded-full">
                                    BEFORE
                                </div>
                            </div>
                            {/* After Image */}
                            <div className="relative my-5">
                                <Image
                                    src={image.after}
                                    alt="After"
                                    className="rounded-lg object-cover"
                                    width={500}
                                    height={300}
                                />
                                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-[#0A5346] text-white text-lg px-4 py-1 rounded-full">
                                    AFTER
                                </div>

                                <div className="text-[#424e6d] absolute flex flex-col bottom-0  left-1/2 transform w-full  -translate-x-1/2 text-center pt-5">
                                    <span>{image.text}</span>
                                    {index === 1 && <span className="text-[#424e6d] absolute -bottom-5 left-1/2 w-full -translate-x-1/2 text-center ">*Client also received treatment on Forehead and Frown Lines.                              </span>}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Footer Text */}
            <p className="text-center text-gray-500 text-sm">Results may vary.</p>
        </div>
    );
};

export default BeforeAfterSlider;
