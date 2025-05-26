import React from "react";

const WorkExperience = () => {
  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-6">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Work Experience Section */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mb-4">
            WORK EXPERIENCE
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Java Full Stack Developer - Freelance",
                date: "Jan 2022 - Present",
                description:
                  "Building full-stack web applications using Java, Spring Boot, React.js, and Tailwind CSS. Creating RESTful APIs and integrating frontend with backend services to deliver seamless user experiences. Applying best practices in code quality, testing, and deployment.",
              },
              {
                title: "Frontend Developer Intern - Envision Computer Training Institute",
                date: "Jun 2025 - Present",
                description:
                  "Developed responsive UI components and enhanced user experience for educational web applications using React.js, Tailwind CSS, and JavaScript. Collaborated with backend teams to integrate REST APIs.",
              },

            ].map((job, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-gray-500 text-sm">{job.date}</p>
                <p className="text-gray-700 text-sm mt-2">{job.description}</p>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mt-6 mb-4">
            PROJECTS
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">
                ECTI - Educational Consultation Training Interface -
                <a
                  href="https://github.com/amolkadam5256/ECTI-Educational-Consultation-Training-Interface"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:underline mt-1"
                >
                  View on GitHub
                </a>
              </h3>
              <p className="text-gray-500 text-sm">
                Java, JSP, Servlets, JDBC, Tailwind CSS, MySQL (WIP)
              </p>
              <p className="text-gray-700 text-sm mt-2">
                Developed a multi-role full-stack educational platform with Java EE technologies, implementing secure login and role-based access for Admin, Trainer, and Students. Designed responsive UI with Tailwind CSS and enhanced user engagement using AOS animations.
              </p>

            </div>
            <div>
              <h3 className="font-semibold text-lg">Full Stack Developer Portfolio
                -
                <a
                  href="https://amol-dev-portfolio-multi-page.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:underline mt-1"
                >
                  View on GitHub
                </a>
              </h3>
              <p className="text-gray-500 text-sm">React.js, Node.js, Tailwind CSS, Vite, GSAP (May-2025)</p>
              <p className="text-gray-700 text-sm mt-2">
                Building a personal portfolio showcasing skills in Java and frontend development. Integrated GSAP animations for smooth transitions and optimized load times with code splitting and lazy loading.
              </p>

            </div>
            <div>
              <h3 className="font-semibold text-lg">A-RIA Freightways - Logistics Website
                -
                <a
                  href="https://a-riafreightways.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:underline mt-1"
                >
                  View on GitHub
                </a>
              </h3>
              <p className="text-gray-500 text-sm">HTML, CSS, JavaScript, React.js, Tailwind CSS (May 2022)</p>
              <p className="text-gray-700 text-sm mt-2">
                Created a responsive and accessible logistics service website using React.js and Tailwind CSS, enhancing UI/UX with custom animations and dynamic content loading.
              </p>

            </div>
            <div>
              <h3 className="font-semibold text-lg">
                JSP Login App - Beginner Full-Stack Authentication
                -{' '}
                <a
                  href="https://jsploginapp-1.onrender.com/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:underline mt-1"
                >
                  View on GitHub
                </a>
              </h3>
              <p className="text-gray-500 text-sm">
                Java, JSP, JDBC, MySQL (Updated last week)
              </p>
              <p className="text-gray-700 text-sm mt-2">
                Basic user authentication system supporting employee and admin sign-up/sign-in.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                100 Java Backend Mini Projects
                -{' '}
                <a
                  href="https://github.com/amolkadam5256/100-java-backend-mini-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:underline mt-1"
                >
                  View on GitHub
                </a>
              </h3>
              <p className="text-gray-500 text-sm">
                Java (Core Java, JDBC, JSP, Servlets, MySQL) (Updated yesterday)
              </p>
              <p className="text-gray-700 text-sm mt-2">
                A curated collection of 100+ Java backend mini projects for students and backend/full-stack developers.
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-lg">
                Master Java with 2000 Questions - Complete Learning Journey
                -{' '}
                <a
                  href="https://github.com/amolkadam5256/Master-Java-From-Basic-to-Advanced-Concepts-with-2000-Questions-A-Complete-Learning-Journ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:underline mt-1"
                >
                  View on GitHub
                </a>
              </h3>
              <p className="text-gray-500 text-sm">
                Java (Updated last week)
              </p>
              <p className="text-gray-700 text-sm mt-2">
                Comprehensive Java learning resource covering basics to advanced concepts with 2000 practice questions.
              </p>
            </div>

          </div>
        </div>

        {/* Right Side Section */}
        <div>
          {/* Skills Section */}
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mb-4">
            SKILLS
          </h2>
          <div>
            <h3 className="font-semibold">Technical</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {[
                "Java, Spring Boot, Hibernate, JDBC",
                "React.js, Tailwind CSS, Sass, Bootstrap",
                "JavaScript, Node.js, HTML5, CSS3",
                "MySQL, Oracle",
                "RESTful API Development",
                "Git, GitHub, Maven, Vite",
                "Responsive & Mobile-first Design",
              ].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Professional Section */}
          <h3 className="font-semibold mt-4">Professional</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {[
              "Strong problem solving and analytical skills",
              "Effective communication and teamwork",
              "Time management and task prioritization",
              "Adaptable and quick learner",
            ].map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          {/* Education Section */}
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mt-6 mb-4">
            EDUCATION
          </h2>
          <p className="text-gray-700 text-sm">
            Bachelor of Science in Computer Science - Bharati Vidyapeeth Deemed University, Pune (2022 - 2025)
          </p>

          {/* Certifications Section */}
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mt-6 mb-4">
            CERTIFICATIONS
          </h2>
          <p className="text-gray-700 text-sm">
            Certified Full Stack Java Developer with AI Integration (In Progress) -{" "}
            <a
              href="https://www.examplecertificationlink.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              View Certificate
            </a>
          </p>
          <p className="text-gray-700 text-sm">
            CSMS-DEEP Diploma (SARTHI) - Digital Education and Professional Development -
            <a
              href="https://www.examplecertificationlink.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              View Certificate
            </a>
          </p>

          {/* Languages Section */}
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mt-6 mb-4">
            LANGUAGES
          </h2>
          <p className="text-gray-700 text-sm">English (Fluent)</p>
          <p className="text-gray-700 text-sm">Hindi (Native)</p>
          <p className="text-gray-700 text-sm">Marathi (Native)</p>

          {/* Interests Section */}
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mt-6 mb-4">
            INTERESTS
          </h2>
          <p className="text-gray-700 text-sm">
            Swimming, Travelling, Watching Documentaries, Socializing with Friends
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
