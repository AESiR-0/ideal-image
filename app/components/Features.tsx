import React from "react";
import Image from "next/image";
import quickTreatments from "@/public/static/features/2.png";
import permanentResults from "@/public/static/features/4.png";
import comfort from "@/public/static/features/3.png";

export default function Features() {
  const features = [
    {
      image: quickTreatments,
      title: "Speed",
      description: "Quick sessions that fit your busy schedule.",
    },
    {
      image: comfort,
      title: "Comfort",
      description:
        "Advanced cooling technology for a virtually pain-free experience.",
    },
    {
      image: permanentResults,
      title: "Permanent Results",
      description: "Smooth, hair-free skin for life.",
    },
  ];

  return (
    <section className="bg-[#f6f4f2] py-20">
      <div className="container mx-auto px-6 md:px-20 font-serif">
        {/* Heading */}
        <h1 className="text-center flex flex-col  text-4xl font-bold leading-snug mb-6 text-[#550640]">
          Put down the razor. Cancel your waxing appointments. <br /> Get your
          time back and silky-smooth skin, too.
        </h1>

        {/* Features Grid */}
        <div className="grid gap-12 sm:gap-16 md:gap-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                className="w-32 h-32 mb-6"
              />
              <h3 className="text-2xl font-bold text-[#550640] mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container  my-10 mx-auto px-6 md:px-20 font-serif">
        {/* Heading */}
        <h1 className="text-center flex flex-col  text-4xl font-bold leading-snug mb-6 text-[#550640]">
          Our cutting-edge treatments offer:
        </h1>
        <div className="grid gap-12 sm:gap-16 md:gap-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <video
              src="/videos/underarms.mp4"
              className="w-full h-auto mb-4"
              controls={false}
              loop
              autoPlay
            >
              <source src="/videos/underarms.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-gray-600">Underarms</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <video
              src="/videos/legs.mp4"
              autoPlay
              className="w-full h-auto mb-4"
              controls={false}
              loop
            >
              <source src="/videos/legs.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-gray-600">Legs</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <video
              src="/videos/bikini.mp4"
              autoPlay
              loop
              className="w-full h-auto mb-4"
              controls={false}
            >
              <source src="/videos/bikini.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-gray-600">Bikini</p>
          </div>
        </div>
      </div>
    </section>
  );
}
