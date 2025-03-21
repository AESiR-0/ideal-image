import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-[#f6f4f2] flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-[#550640] mb-4">What's Next?</h1>
        <p className="text-lg text-gray-700 mb-6">
          You're just one step away from transforming your life!
        </p>

        <p className="text-lg text-gray-800 font-medium mb-4">
          Be on the lookout for a call from us. If you're busy, feel free to
          text or email us back.
        </p>

        <div className="bg-[#0A5346] text-white p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            New Year, New You Offer
          </h2>
          <p className="text-lg">
            Take advantage of our New Year, New You offer—
            <strong>claim upto 70% off</strong>—by scheduling your consultation
            today!
          </p>
        </div>

        <div className="text-left space-y-4">
          <h3 className="text-2xl font-bold text-[#550640] mb-4">
            Here's what to expect during your in-person consultation:
          </h3>
          <div className="flex items-start space-x-4">
            <span className="text-[#550640] font-bold">✔</span>
            <p className="text-gray-700">
              <strong>Get Answers:</strong> We'll address all your questions and
              create a treatment plan tailored to you.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-[#550640] font-bold">✔</span>
            <p className="text-gray-700">
              <strong>Save Money:</strong> We'll bundle and customize treatments
              to fit your beauty goals.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-[#550640] font-bold">✔</span>
            <p className="text-gray-700">
              <strong>Start Same Day:</strong> Begin treatments right after your
              consultation—we value your time.
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-800 mt-6">
          You're so close to achieving your beauty goals and making a lasting
          change!
        </p>
      </div>{" "}
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
