import Image from "next/image";
import WhyImage from "@/public/static/WhyChooseUS.jpg";

const cardContent = [
  {
    title: "Licensed Medical Professionals",
    description: "Led Treatments: Our experts ensure safe, effective care.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
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
    title: "Tailored to You",
    description: "Treatments customized for every skin tone and hair type.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: "Proven Results",
    description: "Backed by science with over 20 million treatments performed.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
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
    title: "Convenient Locations",
    description:
      "Get treated close to home with over 150 locations to choose from.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
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

const WhyChooseUs = () => {
  return (
    <section className=" my-8 py-5 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl w-full pb-5  font-extrabold text-gray-800 sm:text-4xl text-center">
        Why Choose Ideal Image?
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 w-full">
          <Image
            src={WhyImage}
            alt="Why Choose Us"
            className="rounded-lg shadow-lg object-cover w-full"
            priority
          />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 w-full">
          {/* Headline */}

          {/* Cards */}
          <div className="mt-10 space-y-6">
            {cardContent.map((card, index) => (
              <div
                key={index}
                className="bg-gray-50 border rounded-lg p-6 flex items-start hover:shadow-lg transition"
              >
                <div className="bg-[#550640] text-white flex items-center justify-center h-12 w-12 rounded-full">
                  {card.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
