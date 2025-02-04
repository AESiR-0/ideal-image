"use client";

import React from "react";

const BotoxFAQs = () => {
  const faqs = [
    {
      question: "How does it work?",
      answer: (
        <>
          Using a very fine needle, Botox<span className="text-xl">®</span> is injected into key facial muscles that cause 
          lines on the face and neck. The ingredients in Botox<span className="text-xl">®</span> bind to receptors to 
          interfere with — and therefore minimize — facial muscle contractions. This 
          reduces fine lines and wrinkles, giving you a more youthful appearance.
        </>
      ),
    },
    {
      question: "When Will I See Results From Getting Botox®?",
      answer: (
        <>
          You may see results as early as within 24 to 48 hours of injection, when the 
          BOTOX<span className="text-xl">®</span> ingredients are still binding to the acetylcholine receptors. Results 
          typically become visible in 7 to 10 days after injection, with the maximum 
          effect visible at 30 days.
        </>
      ),
    },
    {
      question: "How Long Do Botox® Injections Last?",
      answer: (
        <>
          For most of our guests, the effects of a Botox<span className="text-xl">®</span> injection can last anywhere 
          from 3-6 months. As it wears off, muscles waken, and previously treated lines 
          and wrinkles may reappear. But with repeated treatment, these targeted areas 
          (forehead wrinkles, frown lines, crow's feet, bunny lines, chin dimples, and 
          neck bands) often appear less severe than before, since the muscles have 
          been trained to relax.
        </>
      ),
    },
    {
      question: "Why Ideal Image?",
      answer: (
        <>
          Ideal Image is a highly experienced provider of BOTOX<span className="text-xl">®</span> in the United States. 
          At Ideal Image, our highly trained nursing and medical practitioners will help 
          you target your wrinkles. When you sign up for a free consultation, we will 
          work with you to find the treatment and payment plan that works best for you.
        </>
      ),
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-secondary font-Begum mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-Begum font-semibold text-secondary">
                Q: {faq.question}
              </h3>
              <div className="text-md font-thin text-[#404c68]">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BotoxFAQs; 