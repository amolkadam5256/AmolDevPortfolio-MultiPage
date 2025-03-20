import ProjectCard from "./ProjectCard";

const MernProjects = () => {
  const projects = [
    { title: "MERN Blog App", description: "A blogging platform using MongoDB, Express, React, and Node.", link: "#" },
    { title: "Task Manager", description: "Task management system built with the MERN stack.", link: "#" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default MernProjects;
