import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import FAQImage from "@/public/static/FAQs.jpg";
interface AccordionItemProps {
  title: string;
  content: string;
}

const contentJson = [
  {
    title: "What does Laser Hair Removal feel like??",
    content:
      "Many people describe the feeling like a rubber band snapping against the skin. But keep in mind that everyone’s pain tolerance is different. Compared to waxing and other forms of hair removal, it's not so bad. If you do find it uncomfortable, our healthcare professionals can prescribe a numbing cream for the skin.",
  },
  {
    title: "What is the difference between IPL and a laser?",
    content:
      "IPL stands for “intense pulsed light” and it's not a laser. While IPLs can be effective for some cosmetic procedures, our experience supports the more powerful, yet safer and faster use of the laser for a more permanent solution to hair removal.",
  },
  {
    title: "How can I be sure the hair won’t grow back?",
    content:
      "Ideal Image provides all of our clients with a Lifetime Guarantee  for all areas purchased, meaning you can come back in for a touch-up any time hair returns.",
  },
  {
    title:
      "Why is Laser Hair Removal for dark skin tones different from fair skin tones?",
    content:
      "Laser hair removal uses highly-concentrated beams of light to destroy your hair follicle, the source of where new hair roots and grows. To reach the follicle, a laser is targeted at the pigment in your hair. Traditionally, it was only possible for a laser to focus if there was a stark contrast between your hair and your skin—making the optimal candidate for laser hair removal someone with dark hair and fair skin. ",
  },
  {
    title: "What is the best hair removal laser for dark skin",
    content:
      "The best hair removal laser for dark skin is the FDA-cleared GentleYAG© laser. Unlike traditional lasers, the GentleYAG laser features a wavelength specifically designed for deeper complexions. Known as the Nd:YAG wavelength, this technology is absorbed less by the natural melanin in deeper skin, allowing the laser to directly target hair at the follicle. The GentleYAG laser bypasses natural pigmentation in your skin for a flawless, hair-free finish.",
  },
];

const AccordionSet = ({ title, content }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-300 w-full my-5">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const AccordionMain: React.FC = () => {
  return (
    <section className="container h-full min-h-screen py-20 max-md:flex-col items-center flex gap-10 justify-center">
      <div className="w-[55%]  flex flex-col justify-center items-start ">
        <h2 className="text-6xl font-Begum mb-4 ">
          Common Questions, Answered
        </h2>
        <div className="border-t w-full border-gray-300">
          {contentJson.map((item, index) => {
            return (
              <AccordionSet
                key={index}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
      <div className="w-1/3 max-md:hidden h-full ">
        <Image alt="Image " src={FAQImage} objectFit="cover" />
      </div>
    </section>
  );
};

export default AccordionMain;
