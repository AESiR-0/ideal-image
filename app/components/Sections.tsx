import Link from "next/link";

const blackFridayOffer = {
  headline: "Holiday Special Offer!",
  subHeadline:
    "Book now and get up to 85% OFF* on your laser hair removal package. Don’t wait—spots are filling fast!",
  buttonLabel: "Claim Offer",
};

const stepsContent = [
  {
    title: "Free Consultation",
    description:
      "Meet with our specialists to create your personalized treatment plan.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5L12 15l-4.5-4.5M12 15V6"
        />
      </svg>
    ),
  },
  {
    title: "Quick Treatments",
    description: "In-and-out in 30 minutes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3v11.25m4.5-11.25v11.25m-6.75 6.75h9"
        />
      </svg>
    ),
  },
  {
    title: "Immediate Results",
    description: "See permanent hair reduction with every session!",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6h16.5M3.75 12h16.5m-10.5 6h10.5"
        />
      </svg>
    ),
  },
];

const SpecialOffer = () => {
  return (
    <section
      className="bg-[#f6f4f2] py-12 my-20 px-6 text-center"
      id="black-friday-offer"
    >
      <h2 className="text-4xl font-bold text-[#550640] font-Begum">
        {blackFridayOffer.headline}
      </h2>
      <p className="text-lg mt-4 text-gray-700">
        {blackFridayOffer.subHeadline}
      </p>
      <div className="mt-6">
        <Link href={"#form-section"}>
          <h6 className="inline-block bg-[#0A5346] text-white py-3 px-8 rounded-full text-lg font-bold hover:bg-purple-800 transition">
            {blackFridayOffer.buttonLabel}
          </h6>
        </Link>
      </div>
    </section>
  );
};

const EasySteps = () => {
  return (
    <section className="bg-[#f6f4f2] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl font-bold text-[#550640] text-center font-Begum">
          3 Easy Steps to the Skin You’ll Love
        </h2>

        {/* Steps */}
        <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {stepsContent.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow rounded-lg flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="bg-[#0A5346] text-white h-16 w-16 flex items-center justify-center rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-[#550640] font-Begum">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Sections = () => {
  return (
    <div>
      <SpecialOffer />
      <EasySteps />
    </div>
  );
};

export default Sections;
