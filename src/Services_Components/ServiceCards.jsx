import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Website Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    icon: <i className="ri-global-line text-green-500 text-2xl"></i>,
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your search engine rankings with expert SEO strategies for better visibility.",
    icon: <i className="ri-search-line text-green-500 text-2xl"></i>,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating engaging, beautiful, and user-friendly interfaces for better user experience.",
    icon: <i className="ri-layout-line text-green-500 text-2xl"></i>,
  },
  // ✅ Added Java Full Stack Developer Services
  {
    title: "Backend Development",
    description:
      "Building scalable and efficient backend solutions using Java, Spring Boot, and Node.js.",
    icon: <i className="ri-code-box-line text-green-500 text-2xl"></i>,
  },
  {
    title: "Frontend Development",
    description:
      "Creating dynamic and responsive web applications with React.js, Tailwind CSS, and JavaScript.",
    icon: <i className="ri-code-s-slash-line text-green-500 text-2xl"></i>,
  },
  {
    title: "Database Management",
    description:
      "Designing and managing databases with MySQL, PostgreSQL, and MongoDB for optimized performance.",
    icon: <i className="ri-database-line text-green-500 text-2xl"></i>,
  },
];

const ServiceCards = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="relative flex flex-col bg-white shadow-md border border-gray-200 rounded-lg w-full max-w-xs mx-auto p-6 
              transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <h5 className="ml-3 text-gray-900 text-xl font-semibold">
                {service.title}
              </h5>
            </div>
            <p className="text-gray-700 leading-normal font-light mb-4">
              {service.description}
            </p>
            <div>
              <a
                href="#"
                className="text-green-500 font-semibold text-sm hover:underline flex items-center"
              >
                Learn More
                <i className="ri-arrow-right-line ml-2 text-green-500 text-lg"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
