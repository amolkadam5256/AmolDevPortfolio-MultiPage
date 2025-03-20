import { useState } from "react";
import FrontendProjects from "./FrontendProjects";
import BackendProjects from "./BackendProjects";
import CRUDProjects from "./CRUDProjects";
import MernProjects from "./MernProjects";
import JavaFullStackProjects from "./JavaFullStackProjects";

const projectsMap = {
  all: (
    <>
      <FrontendProjects />
      <BackendProjects />
      <CRUDProjects />
      <MernProjects />
      <JavaFullStackProjects />
    </>
  ),
  frontend: <FrontendProjects />,
  backend: <BackendProjects />,
  crud: <CRUDProjects />,
  mern: <MernProjects />,
  java: <JavaFullStackProjects />,
};

const Project_Section = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5 text-center">My Projects</h2>

      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-4 mb-6 flex-wrap">
        {Object.keys(projectsMap).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-all duration-200
              ${activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}
              focus:outline-none focus:ring-2 focus:ring-blue-400`}
            aria-selected={activeTab === tab}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
          </button>
        ))}
      </div>

      {/* Render Selected Projects */}
      {projectsMap[activeTab]}
    </div>
  );
};

export default Project_Section;
