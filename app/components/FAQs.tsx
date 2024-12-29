import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import FAQImage from "@/public/static/FAQs.jpg";
import { content } from "googleapis/build/src/apis/content";
interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionSet = ({ title, content }: AccordionItemProps) => {
  return (
    <div className="border-b  border-gray-300 w-full my-5">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">{title}</AccordionTrigger>
          <AccordionContent className="text-lg">{content}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const AccordionMain = ({ page }: { page: string }) => {

  const contentJson = page !== "coolsculpting" ? [
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
  ] :
    [

      {
        title: "What does CoolSculpting Elite feel like?",
        content: "As the cooling begins during the first few minutes, you will feel minimal discomfort, slight pressure, and intense cold. This soon dissipates. During treatment, many people read, watch videos, work on their laptops, or even take a nap."
      }, {
        title: "How much of a decrease in fat cells does CoolSculpting® Elite provide?",
        content: "With each session you are able to decrease the number of treated fat cells by about 20%. Each additional treatment further enhances your results, ridding you of an additional 20% of the treated fat cells per session. With CoolSculpting® Elite at Ideal Image, it’s easy to sit back, relax and reduce that stubborn fat."
      }, {
        title: "How much does CoolSculpting® cost?",
        content: "When it comes to CoolSculpting® Elite, no two bodies are the same. Though CoolSculpting® Elite is non-invasive and relatively painless, it’s still considered a medical procedure and may require a series of treatments to achieve the results you’re after. As such, prices for CoolSculpting® Elite can vary on your current height and weight, the size of your treatment area, and how much fat you’re aiming to eliminate."
      },
      {
        title: "What does CoolSculpting Elite feel like?",
        content: "As the cooling begins during the first few minutes, you will feel minimal discomfort, slight pressure, and intense cold. This soon dissipates. During treatment, many people read, watch videos, work on their laptops, or even take a nap."
      }, {
        title: "How much of a decrease in fat cells does CoolSculpting® Elite provide?",
        content: "With each session you are able to decrease the number of treated fat cells by about 20%. Each additional treatment further enhances your results, ridding you of an additional 20% of the treated fat cells per session. With CoolSculpting® Elite at Ideal Image, it’s easy to sit back, relax and reduce that stubborn fat."
      }, {
        title: "How much does CoolSculpting® cost?",
        content: "When it comes to CoolSculpting® Elite, no two bodies are the same. Though CoolSculpting® Elite is non-invasive and relatively painless, it’s still considered a medical procedure and may require a series of treatments to achieve the results you’re after. As such, prices for CoolSculpting® Elite can vary on your current height and weight, the size of your treatment area, and how much fat you’re aiming to eliminate."
      },
    ];

  return (
    <section className="container text-4xl h-full max-md:min-h-full min-h-screen max-md:py-10 py-20 flex flex-col items-center justify-center">
      <div className="w-full text-[#515b7e] flex flex-col justify-center items-center">
        <h2 className={`font-bold font-Begum mb-4 ${page !== 'coolsculpting' ? 'text-6xl' : 'text-4xl text-center'} max-md:text-3xl`}>
          {page !== "coolsculpting" ? (
            "Common Questions, Answered"
          ) : (
            <>
              Coolsculpting® Elite <br /> Frequently Asked Questions
            </>
          )}
        </h2>

        <div className={`"border-t ${page !== "coolsculpting" ? 'w-full' : "w-2/3"}   border-gray-300"`}>
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
      {page !== "coolsculpting" && (
        <div className="w-1/3 max-md:hidden h-full mt-10">
          <Image alt="Image " src={FAQImage} objectFit="cover" />
        </div>
      )}
    </section>
  );
};

export default AccordionMain;
