// eslint-disable-next-line no-unused-vars
import React from 'react';
import Pencial from './Pencial';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const SelfIntro = () => {
    return (
        <>
            <div className="bg-black flex flex-col md:flex-row w-full md:pt-10 py-10 mb-1">
                {/* Left Column */}
                <div className="flex-1 md:pl-10 pl-3 md:py-10 order-2 md:order-1 w-full md:w-1/2 text-white" data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-iteration="infinite">
                    <p className='py-2'>
                        Hello, my name is <span className="font-semibold text-yellow-400">Amol Tukaram Kadam</span>. 
                        I am a passionate <strong>Full Stack Developer</strong> and <strong>Java Developer</strong> currently pursuing my 
                        <span className="font-semibold text-yellow-400"> B.Sc. in Computer Science</span> at 
                        <span className="font-semibold text-yellow-400"> Yashwantrao Mohite College</span> in Pune. 
                        I am in my third year of studies and actively seeking opportunities to work as a full-stack developer or intern, 
                        to further enhance my technical skills and gain valuable real-world experience in the industry.
                    </p>

                    <p className='py-2'>
                        With a strong foundation in both front-end and back-end development, I enjoy crafting innovative and efficient web applications. 
                        I am particularly passionate about building scalable, user-friendly systems and continuously learning new technologies to stay at the forefront of the field.
                    </p>

                    <p className='py-2'>
                        My skill set includes Java, Spring Boot, React.js, Node.js, Tailwind CSS, and various databases like MySQL. 
                        I am also proficient in deploying applications on platforms like Netlify and Vercel. 
                        In addition to development, I am always eager to collaborate on creative and impactful projects.
                    </p>

                    <p className='py-2'>
                        I believe in the power of continuous learning and growth, and I am excited to contribute to projects that make a difference while further expanding my expertise.
                    </p>
                </div>

                {/* Right Column */}
                <div className="flex-1 relative flex md:justify-center justify-start items-center order-1 md:order-2 w-full md:w-1/2" data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-iteration="infinite">
                    <div className='absolute 
                                    sm:right-44 sm:top-28
                                    md:right-16 md:top-32
                                    lg:right-20 lg:top-20
                                    xl:right-40 xl:top-24
                                    right-36 top-3 
                                    rotate-[295deg]'>

                        <Pencial></Pencial>

                    </div>
                    <div className="text-start md:pl-0 p-3 md:pt-0 pt-10 text-white"> {/* Center text inside the inner div */}
                        <h2 className="text-[22px] md:text-3xl font-semibold font-[anzo5] md:pb-5 text-gray-500">Overview</h2>
                        <h1 className="text-3xl md:text-5xl font-[anzo5] font-bold">About Me</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SelfIntro;
