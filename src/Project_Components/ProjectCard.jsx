const ProjectCard = ({ title, description, link }) => {
    return (
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-2 inline-block"
        >
          View Project
        </a>
      </div>
    );
  };
  
  export default ProjectCard;
  