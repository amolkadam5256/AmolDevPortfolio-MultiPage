import ProjectCard from "./ProjectCard";

const JavaFullStackProjects = () => {
  const projects = [
    { title: "Spring Boot Blog", description: "A full-stack blog app with Spring Boot and React.", link: "#" },
    { title: "E-commerce System", description: "Full-stack e-commerce site with Java and React.", link: "#" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default JavaFullStackProjects;
