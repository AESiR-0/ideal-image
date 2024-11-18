import Image from "next/image";
import WhyImage from "@/public/static/WhyChooseUS.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faCogs, faCheckCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const cardContent = [
  {
    title: "Licensed Medical Professionals",
    description: "Led Treatments: Our experts ensure safe, effective care.",
    icon: <FontAwesomeIcon icon={faUserMd} className="w-6 h-6 text-white" />,
  },
  {
    title: "Tailored to You",
    description: "Treatments customized for every skin tone and hair type.",
    icon: <FontAwesomeIcon icon={faCogs} className="w-6 h-6 text-white" />,
  },
  {
    title: "Proven Results",
    description: "Backed by science with over 20 million treatments performed.",
    icon: <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6 text-white" />,
  },
  {
    title: "Convenient Locations",
    description: "Get treated close to home with over 150 locations to choose from.",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 text-white" />,
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
