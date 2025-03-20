import { useState } from "react";
import FrontendProjects from "./FrontendProjects";
import BackendProjects from "./BackendProjects";
import CRUDProjects from "./CRUDProjects";
import MernProjects from "./MernProjects";
import JavaFullStackProjects from "./JavaFullStackProjects";

const Placeholder = () => (
  <div className="text-center text-gray-500 text-lg mt-5">
    🚀 Coming Soon...
  </div>
);

const AllProjectsList = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-xl font-semibold mb-3">Frontend Projects</h3>
      <FrontendProjects /> || <Placeholder />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-3">Backend Projects</h3>
      <BackendProjects /> || <Placeholder />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-3">CRUD Projects</h3>
      <CRUDProjects /> || <Placeholder />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-3">MERN Projects</h3>
      <MernProjects /> || <Placeholder />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-3">Java Full-Stack Projects</h3>
      <JavaFullStackProjects /> || <Placeholder />
    </div>
  </div>
);

const ProjectsDisplay = () => {
  const [activeTab, setActiveTab] = useState("all");

  const renderProjects = () => {
    switch (activeTab) {
      case "frontend":
        return <FrontendProjects /> || <Placeholder />;
      case "backend":
        return <BackendProjects /> || <Placeholder />;
      case "crud":
        return <CRUDProjects /> || <Placeholder />;
      case "mern":
        return <MernProjects /> || <Placeholder />;
      case "java":
        return <JavaFullStackProjects /> || <Placeholder />;
      case "all":
        return <AllProjectsList />;
      default:
        return <AllProjectsList />;
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5 text-center">My Projects</h2>

      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {["all", "frontend", "backend", "crud", "mern", "java"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
          </button>
        ))}
      </div>

      {/* Render Selected Projects */}
      <div className="border p-4 rounded-lg shadow-md bg-white">{renderProjects()}</div>
    </div>
  );
};

export default ProjectsDisplay;
