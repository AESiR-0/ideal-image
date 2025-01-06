import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-[#f6f4f2] flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-[#515b7e] font-Begum mb-4">What's Next?</h1>
        <p className="text-lg text-[#515b7e] mb-6">
          You're just one step away from your CoolSculpting® Elite transformation!
        </p>

        <p className="text-lg text-[#515b7e] font-medium mb-4">
          Our CoolSculpting® specialists will be reaching out to you shortly.
          If you miss our call, feel free to text or email us back.
        </p>

        <div className="bg-[#0A5346] text-white p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-Begum font-semibold mb-2">Limited Time Offer</h2>
          <p className="text-lg">
            Get upto <strong>47% off</strong> on your CoolSculpting® Elite treatment
            by scheduling your consultation today!
          </p>
        </div>

        <div className="text-left space-y-4">
          <h3 className="text-2xl font-bold font-Begum text-[#515b7e] mb-4">
            Your CoolSculpting® Elite Consultation Experience:
          </h3>
          <div className="flex items-start space-x-4">
            <span className="text-[#0A5346] font-bold">✔</span>
            <p className="text-[#515b7e]">
              <strong>Personalized Assessment:</strong> Our experts will evaluate your areas of concern
              and create a customized CoolSculpting® Elite treatment plan.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-[#0A5346] font-bold">✔</span>
            <p className="text-[#515b7e]">
              <strong>Exclusive Savings:</strong> We'll help you maximize your results while
              minimizing costs with our special package pricing.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-[#0A5346] font-bold">✔</span>
            <p className="text-[#515b7e]">
              <strong>Immediate Treatment Option:</strong> If you're ready, start your
              CoolSculpting® Elite journey the same day as your consultation.
            </p>
          </div>
        </div>

        <p className="text-lg text-[#515b7e] mt-6">
          You're about to join thousands of satisfied clients who have achieved
          their body contouring goals with CoolSculpting® Elite at Ideal Image!
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
