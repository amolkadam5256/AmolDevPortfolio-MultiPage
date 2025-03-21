import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FrontendProjects from "./FrontendProjects";
import BackendProjects from "./BackendProjects";
import CRUDProjects from "./CRUDProjects";
import MernProjects from "./MernProjects";
import JavaFullStackProjects from "./JavaFullStackProjects";
import { RiFilter2Fill } from "react-icons/ri";

const isMobile = () => window.innerWidth <= 640;

const projectsMap = {
  all: (
    <>
      <FrontendProjects data-aos={!isMobile() ? "fade-up" : ""} data-aos-delay="100" />
      <BackendProjects data-aos={!isMobile() ? "fade-up" : ""} data-aos-delay="200" />
      <CRUDProjects data-aos={!isMobile() ? "fade-up" : ""} data-aos-delay="300" />
      <MernProjects data-aos={!isMobile() ? "fade-up" : ""} data-aos-delay="400" />
      <JavaFullStackProjects data-aos={!isMobile() ? "fade-up" : ""} data-aos-delay="500" />
    </>
  ),
  frontend: <FrontendProjects data-aos={!isMobile() ? "fade-up" : ""} data-aos-delay="100" />,
  backend: <BackendProjects data-aos={!isMobile() ? "fade-up" : ""} data-aos-delay="200" />,
  crud: <CRUDProjects data-aos={!isMobile() ? "fade-up" : ""} data-aos-delay="300" />,
  mern: <MernProjects data-aos={!isMobile() ? "fade-up" : ""} data-aos-delay="400" />,
  java: <JavaFullStackProjects data-aos={!isMobile() ? "fade-up" : ""} data-aos-delay="500" />,
};

const Project_Section = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (!isMobile()) {
      AOS.init({ duration: 800, once: true });
    }
  }, []);

  return (
    <div className="mx-auto p-5 bg-black text-white min-h-screen">
      {/* Mobile Filter Button */}
      <div className="flex justify-center sm:hidden mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 border-2 border-green-500 bg-green-500 text-white font-bold rounded-md transition-all duration-300 hover:bg-transparent hover:text-green-500"
        >
          <RiFilter2Fill className="text-xl" />
          <span>Filter Projects</span>
        </button>
      </div>

      {/* Navigation Tabs */}
      <div
        className={`flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-6 px-4 transition-all duration-500 ${
          showFilters ? "block" : "hidden sm:flex"
        }`}
      >
        {Object.keys(projectsMap).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setShowFilters(false);
            }}
            className={`flex items-center justify-center gap-2 px-4 py-2 border-2 border-green-500 rounded-md text-white font-bold transition-all duration-300 ${
              activeTab === tab
                ? "bg-transparent text-green-500"
                : "bg-green-500 hover:bg-transparent hover:text-green-500"
            }`}
            aria-selected={activeTab === tab}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
          </button>
        ))}
      </div>

      {/* Render Selected Projects */}
      <div className="mt-4" data-aos={!isMobile() ? "fade-in" : ""} data-aos-delay="300">
        {projectsMap[activeTab]}
      </div>
    </div>
  );
};

export default Project_Section;
