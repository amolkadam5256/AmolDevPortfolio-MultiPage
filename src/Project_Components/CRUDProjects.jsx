import ProjectCard from "./ProjectCard";

const CRUDProjects = () => {
  const projects = [
    { title: "User Management App", description: "CRUD operations with React and Firebase.", link: "#" },
    { title: "Book Store", description: "CRUD app for managing books using MERN stack.", link: "#" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default CRUDProjects;
