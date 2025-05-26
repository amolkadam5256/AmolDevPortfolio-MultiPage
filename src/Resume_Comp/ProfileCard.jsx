import React from "react";
import assets from "../assets/images/assets";

const ProfileCard = () => {
  return (
      <div className="w-full  mx-auto  my-4 p-2 sm:p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Profile Image */}
        <img
          src={assets.picofme || "https://via.placeholder.com/300"}
          alt="Profile"
          className=" md:w-40 h-40  rounded-full   object-center m-auto justify-center"
        />

        {/* Profile Details */}
        <div className="p-0 sm:p-6 text-center md:text-left flex-1">
          <p className="text-gray-600 text-left  mt-2 pl-0 sm:pl-10 text-[14px] sm:text-[16px]">
Full Stack Developer and Computer Science graduate with expertise in modern web development and software engineering. Proficient in frontend technologies including HTML, CSS, JavaScript, React.js, and UI frameworks such as Tailwind CSS, Bootstrap, Sass, and Vite, with a strong focus on building responsive, user-friendly, and performant web applications. Experienced in backend development using Java, Spring Boot, Hibernate, JDBC, Node.js, and MySQL, skilled at designing scalable RESTful APIs and connecting frontend with backend systems seamlessly. Well-versed in version control and collaborative workflows using Git/GitHub, and deploying applications on platforms like Netlify and Vercel. Passionate about delivering efficient, maintainable software solutions that enhance user experience and meet business goals.

          </p>


        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
