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

const AccordionSet = ({ title, content }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-300 w-full my-5">
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
  const contentJson =
    page !== "coolsculpting" && page !== "coolsculpting-elite"
      ? [
        {
          title: "What does Laser Hair Removal feel like?",
          content:
            "Many people describe the feeling like a rubber band snapping against the skin. But keep in mind that everyone's pain tolerance is different. Compared to waxing and other forms of hair removal, it's not so bad. If you do find it uncomfortable, our healthcare professionals can prescribe a numbing cream for the skin.",
        },
        {
          title: "What is the difference between IPL and a laser?",
          content:
            "IPL stands for “intense pulsed light” and it's not a laser. While IPLs can be effective for some cosmetic procedures, our experience supports the more powerful, yet safer and faster use of the laser for a more permanent solution to hair removal.",
        },
        {
          title: "How can I be sure the hair won't grow back?",
          content:
            "Ideal Image provides all of our clients with a Lifetime Guarantee for all areas purchased, meaning you can come back in for a touch-up any time hair returns.",
        },
        {
          title:
            "Why is Laser Hair Removal for dark skin tones different from fair skin tones?",
          content:
            "Laser hair removal uses highly-concentrated beams of light to destroy your hair follicle, the source of where new hair roots and grows. To reach the follicle, a laser is targeted at the pigment in your hair. Traditionally, it was only possible for a laser to focus if there was a stark contrast between your hair and your skin—making the optimal candidate for laser hair removal someone with dark hair and fair skin.",
        },
        {
          title: "What is the best hair removal laser for dark skin?",
          content:
            "The best hair removal laser for dark skin is the FDA-cleared GentleYAG© laser. Unlike traditional lasers, the GentleYAG laser features a wavelength specifically designed for deeper complexions. Known as the Nd:YAG wavelength, this technology is absorbed less by the natural melanin in deeper skin, allowing the laser to directly target hair at the follicle. The GentleYAG laser bypasses natural pigmentation in your skin for a flawless, hair-free finish.",
        },
      ]
      : [
        {
          title: "What does CoolSculpting Elite feel like?",
          content:
            "As the cooling begins during the first few minutes, you will feel minimal discomfort, slight pressure, and intense cold. This soon dissipates. During treatment, many people read, watch videos, work on their laptops, or even take a nap.",
        },
        {
          title:
            "How much of a decrease in fat cells does CoolSculpting® Elite provide?",
          content:
            "With each session you are able to decrease the number of treated fat cells by about 20%. Each additional treatment further enhances your results, ridding you of an additional 20% of the treated fat cells per session. With CoolSculpting® Elite at Ideal Image, it's easy to sit back, relax and reduce that stubborn fat.",
        },
        {
          title: "How much does CoolSculpting® cost?",
          content:
            "When it comes to CoolSculpting® Elite, no two bodies are the same. Though CoolSculpting® Elite is non-invasive and relatively painless, it's still considered a medical procedure and may require a series of treatments to achieve the results you're after. As such, prices for CoolSculpting® Elite can vary on your current height and weight, the size of your treatment area, and how much fat you're aiming to eliminate.",
        },
        {
          title: "When will I see CoolSculpting® Elite results?",
          content:
            "You may start to see changes as quickly as four weeks after your treatment and will experience the most dramatic results after two months, but your body continues flushing out fat cells for up to six months after treatment.",
        },
        {
          title: "How many treatments are necessary?",
          content:
            "Many see results after just one treatment, but others may need a few treatments to reach their specific goals. A trained member of our staff will work with you to customize an appropriate plan during your initial consultation, in which we will work together to determine treatment areas and the number of sessions needed.",
        },
        {
          title: "What are the risks of the procedure?",
          content:
            "Side effects are minor and rare, and can include (but are not limited to) temporary discomfort or numbness in the treated areas following the session.",
        },
        {
          title: "What happens to the frozen fat cells?",
          content:
            "After the fat cells are targeted and frozen, your body naturally and gradually sheds them. They become processed and eliminated on their own over the course of six months. Unlike with diet and exercise, fat cells actually die and are permanently gone from your body with the CoolSculpting® procedure. You'll literally freeze them away and be left with a toned, firm body.",
        },
        {
          title: "What areas do you treat?",
          content:
            "The most common areas are abdomen, sides, back, legs, arms, chin and what we call the “banana roll,” which is a roll under the buttocks. However, if you have concerns in a different area, we recommend coming in for a consultation to find out how we can help!",
        },
      ];

  return (
    <section className="container text-4xl h-full min-h-screen py-20 flex items-start justify-center">
      <div
        className={`w-full  text-[#515b7e] flex ${page.includes("coolsculpting") ? "flex-row" : "flex-row px-16"
          } justify-center items-center`}
      >
        {/* Left Content Section */}
        <div
          className={`flex flex-col justify-center ${page.includes("coolsculpting") ? "w-2/3 pr-5" : "w-full"
            }`}
        >
          <h2
            className={`font-bold font-Begum mb-4 ${page.includes("coolsculpting")
                ? "text-4xl text-center"
                : "text-6xl"
              } max-md:text-3xl`}
          >
            {page === "coolsculpting-elite"
              ? "CoolSculpting® Elite Frequently Asked Questions"
              : page === "coolsculpting"
                ? "CoolSculpting® Frequently Asked Questions"
                : "Common Questions, Answered"}
          </h2>

          <div
            className={`border-t ${page.includes("coolsculpting") ? "w-[90%]" : "w-[90%]"
              } border-gray-300`}
          >
            {contentJson.map((item, index) => (
              <AccordionSet
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>

        {/* Right Image Section for CoolSculpting Pages */}
        {page.includes("home") && (
          <div className="w-1/3 max-md:hidden h-full mt-10">
            <Image
              alt="CoolSculpting FAQ Image"
              src={FAQImage}
              objectFit="cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AccordionMain;
