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
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white"
      version="1.1"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
    >
      <g>
        <line fill="white" y1="501" x1="303.1" y2="501" x2="302.1" />
        <g>
          <path
            fill="white"
            d="m501,300.8v-91.7h-45.3c-5.3-22.4-14.3-43.3-26.4-62.1l32.9-32.7-64.9-64.6-33.4,33.3c-18.8-11.5-39.6-19.9-61.8-24.8v-47.2h-92.1v48.3c-22,5.4-42.6,14.4-61.1,26.4l-34.2-34-64.9,64.6 35.3,35.2c-2.8,4.6-5.3,9.2-7.7,14-7.5,14.3-13.2,30-17.1,45.7h-49.3v91.7h50.3c1.5,6 3.3,11.9 5.3,17.8 0.1,0.4 0.3,0.8 0.4,1.2 0,0.1 0.1,0.2 0.1,0.4 4.9,14.2 11.3,27.7 19.1,40.2l-35.5,35.3 64.9,64.6 35.1-34.9c18.3,11.5 38.6,20.2 60.2,25.4v48.1h91.1v-47.1c22.7-5 44-13.7 63.1-25.6l32.2,32 64.9-64.6-32.1-31.9c12-19.1 20.9-40.3 26-62.9h44.9zm-94.8,64l29.9,29.8-36.6,36.5-29.5-29.4c-24.7,18.9-54.4,31.7-86.7,36v42.4h-51.3v-42.7c-31.5-4.6-60.4-17.2-84.6-35.7l-31.6,31.5-36.6-36.5 32.4-31.3c-17.9-24-30-52.4-34.4-83.4h-45.3v-51.1h44l1.5-3.6c4.7-29.7 16.5-57.1 33.6-80.3l-32-31.9 36.6-36.5 31,31.9c24-18.5 52.8-31.2 84.1-36v-42.7h51.3v42.3c32,4.1 61.3,16.4 86,34.8l30.3-30.1 35.6,36.5-29.6,29.5c18.2,23.8 30.7,52.2 35.5,83.1h45.4v51.1h-44.7c-3.9,31.8-16.1,61.1-34.3,85.8z"
          />
          <path
            fill="white"
            d="m257,143.4c-61.8,0-113.1,50-113.1,112.6s51.4,112.6 113.1,112.6 113.1-51.1 113.1-112.6-51.3-112.6-113.1-112.6zm0,204.3c-51.3,0-92.1-40.7-92.1-91.7 0-51.1 41.9-91.7 92.1-91.7s92.1,40.7 92.1,91.7c0.1,51.1-41.8,91.7-92.1,91.7z"
          />
        </g>
      </g>
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
