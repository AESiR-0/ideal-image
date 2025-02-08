import { Metadata } from "next"; // If using Next.js 13+ for metadata (optional)

export const metadata: Metadata = {
  title: "Thank You | CoolSculpting",
  description: "Your next steps for CoolSculpting transformation.",
};

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-[#f6f4f2] flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-[#515b7e] font-Begum mb-4">
          What's Next?
        </h1>
        <p className="text-lg text-[#515b7e] mb-6">
          You're just one step away from your Botox transformation!
        </p>

        <p className="text-lg text-[#515b7e] font-medium mb-4">
          Our Botox specialists will be reaching out to you shortly. If
          you miss our call, feel free to text or email us back.
        </p>

        <div className="bg-[#0A5346] text-white p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-Begum font-semibold mb-2">
            Limited Time Offer
          </h2>
          <p className="text-lg">
            Get your Botox treatment for <strong>$9 per unit</strong> by scheduling your consultation today!
          </p>
        </div>

        <div className="text-left space-y-4">
          <h3 className="text-2xl font-bold font-Begum text-[#515b7e] mb-4">
            Your Botox Consultation Experience:
          </h3>
          <div className="flex items-start space-x-4">
            <span className="text-[#0A5346] font-bold">✔</span>
            <p className="text-[#515b7e]">
              <strong>Personalized Assessment:</strong> Our experts will
              evaluate your areas of concern and create a customized
              Botox treatment plan.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-[#0A5346] font-bold">✔</span>
            <p className="text-[#515b7e]">
              <strong>Exclusive Savings:</strong> We'll help you maximize your
              results while minimizing costs with our special package pricing.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-[#0A5346] font-bold">✔</span>
            <p className="text-[#515b7e]">
              <strong>Immediate Treatment Option:</strong> If you're ready,
              start your Botox journey the same day as your
              consultation.
            </p>
          </div>
        </div>

        <p className="text-lg text-[#515b7e] mt-6">
          You're about to join thousands of satisfied clients who have refreshed and rejuvenated their appearance with Botox at Ideal Image!
        </p>
      </div>

      {/* Include the dataLayer script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "formSubmitted",
              leadsUserData: {
                email: "${
                  typeof window !== "undefined"
                    ? window.location.search.split("email=")[1]?.split("&")[0]
                    : ""
                }",
                phone_number: "${
                  typeof window !== "undefined"
                    ? window.location.search.split("phone=")[1]?.split("&")[0]
                    : ""
                }",
              },
            });
          `,
        }}
      />
    </div>
  );
};

export default ThankYouPage;
