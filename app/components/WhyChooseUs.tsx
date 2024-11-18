import Image from "next/image";
import WhyImage from "@/public/static/WhyChooseUS.jpg";

const UserMdSvg = () => (
  <svg
    className="w-6 h-6 text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const CogsSvg = () => (
  <>
    <svg
      className="w-6 h-6 text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.14 12.936l1.72-1.72-1.42-1.42-1.72 1.72c-.34-.2-.7-.36-1.08-.48l-.26-1.92h-2.08l-.26 1.92c-.38.12-.74.28-1.08.48l-1.72-1.72-1.42 1.42 1.72 1.72c-.2.34-.36.7-.48 1.08l-1.92.26v2.08l1.92.26c.12.38.28.74.48 1.08l-1.72 1.72 1.42 1.42 1.72-1.72c.34.2.7.36 1.08.48l.26 1.92h2.08l.26-1.92c.38-.12.74-.28 1.08-.48l1.72 1.72 1.42-1.42-1.72-1.72c.2-.34.36-.7.48-1.08l1.92-.26v-2.08l-1.92-.26c-.12-.38-.28-.74-.48-1.08zm-7.14 2.064c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  </>
);

const CheckCircleSvg = () => (
  <svg
    className="w-6 h-6 text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
  </svg>
);

const MapMarkerAltSvg = () => (
  <svg
    className="w-6 h-6 text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
);

const cardContent = [
  {
    title: "Licensed Medical Professionals",
    description: "Led Treatments: Our experts ensure safe, effective care.",
    icon: <UserMdSvg />,
  },
  {
    title: "Tailored to You",
    description: "Treatments customized for every skin tone and hair type.",
    icon: <CogsSvg />,
  },
  {
    title: "Proven Results",
    description: "Backed by science with over 20 million treatments performed.",
    icon: <CheckCircleSvg />,
  },
  {
    title: "Convenient Locations",
    description:
      "Get treated close to home with over 150 locations to choose from.",
    icon: <MapMarkerAltSvg />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="my-8 py-5 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl w-full pb-5 font-extrabold text-gray-800 sm:text-4xl text-center">
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
