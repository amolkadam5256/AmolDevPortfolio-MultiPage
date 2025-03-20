import ProjectCard from "./ProjectCard";

const BackendProjects = () => {
  const projects = [
    { title: "API for Todo App", description: "A REST API using Node.js and Express.", link: "#" },
    { title: "Auth System", description: "JWT authentication with Express and MongoDB.", link: "#" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default BackendProjects;
