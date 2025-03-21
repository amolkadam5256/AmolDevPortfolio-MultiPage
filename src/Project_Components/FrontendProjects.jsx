import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { assets } from "../assets/images/assets";

const ProjectCard = ({ title, description, link, github, image, index }) => {
  return (
    <div
      className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <a href={link}>
        <img className="rounded-t-lg h-40 w-full object-cover" src={image} alt={title} />
      </a>
      <div className="p-4">
        <a href={link}>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">{description}</p>
        <div className="flex items-center gap-4">
        <a
            href={link}
            className="inline-flex items-center px-4 py-2 text-sm font-medium border border-green-500 bg-green-500 text-white rounded-lg transition-colors hover:bg-transparent hover:text-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800"
          >
            View Project
            <svg
              className="w-4 h-4 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <i className="ri-github-fill text-2xl mr-2"></i>
            <span className="text-sm font-medium">GitHub Repo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const FrontendProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website using React and Tailwind CSS.",
      link: "#",
      github: "https://github.com/yourgithub/portfolio",
      image: assets.Hobbies,
    },
    {
      title: "E-commerce UI",
      description: "Frontend for an e-commerce store with product filters.",
      link: "#",
      github: "https://github.com/yourgithub/ecommerce-ui",
      image: assets.Hobbies,
    },
    {
      title: "Dashboard UI",
      description: "A modern dashboard UI with charts and widgets.",
      link: "#",
      github: "https://github.com/yourgithub/dashboard-ui",
      image: assets.Hobbies,
    },
    {
      title: "Blog Website",
      description: "A simple blog platform with a clean UI.",
      link: "#",
      github: "https://github.com/yourgithub/blog-website",
      image: assets.Hobbies,
    },
    {
      title: "Landing Page",
      description: "A responsive landing page template.",
      link: "#",
      github: "https://github.com/yourgithub/landing-page",
      image: assets.Hobbies,
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <div key={project.title} className="flex justify-center">
            <ProjectCard {...project} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontendProjects;