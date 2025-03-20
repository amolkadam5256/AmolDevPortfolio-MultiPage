import ProjectCard from "./ProjectCard";

const FrontendProjects = () => {
  const projects = [
    { title: "Portfolio Website", description: "A personal portfolio website using React and Tailwind CSS.", link: "#" },
    { title: "E-commerce UI", description: "Frontend for an e-commerce store with product filters.", link: "#" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default FrontendProjects;
