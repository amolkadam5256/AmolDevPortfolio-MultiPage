import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Accordion = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: "ease-in-out", // Animation easing type
            once: false, // Whether the animation should only trigger once
        });
    }, []);

    const accordionItems = [
        {
            header: "DoctorDOM UI",
            text: "User interface component of the DoctorDOM app built with React."
        },
        {
            header: "Portfolio Website",
            text: "Responsive personal portfolio developed using React.js and Tailwind CSS to showcase skills and projects."
        },
        {
            header: "Java Quiz App",
            text: "Interactive web-based Java quiz application built with Node.js and Express.js for backend functionality."
        },
        {
            header: "100 Days of Code",
            text: "Consistent daily coding challenge focused on JavaScript and backend development with progress tracked on GitHub."
        },
        {
            header: "MediPlus Lite",
            text: "Health-themed responsive frontend project deployed on Vercel."
        },
        {
            header: "Envision Institute Resources",
            text: "Repository for managing final exam content and resources."
        },
        {
            header: "ColorCrafter UI",
            text: "Interactive color customization project showcasing dynamic styling with JavaScript."
        },
        {
            header: "The JavaScript Handbook",
            text: "In-depth JS learning repo focused on mastering operators, control flow, and more."
        },
        {
            header: "BMI Calculator",
            text: "Simple web app to calculate Body Mass Index with responsive design."
        },
        {
            header: "Amol Dev Portfolio (Multi-Page)",
            text: "Multi-page version of developer portfolio using React and Tailwind CSS."
        },
        {
            header: "Calculator Project",
            text: "Basic calculator web app built as a first JavaScript project."
        },
        {
            header: "E-commerce Frontend V1",
            text: "Frontend UI for an e-commerce site, developed during internship at Brainwave Matrix Solutions."
        },
        {
            header: "Daily Planner App V1",
            text: "Task planning and scheduling web application developed during internship."
        },
    ];
    

    return (
        <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]" >
            <div className="px-[5%] md:px-[20%] mx-auto text-white">
                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[1000px] text-center lg:mb-20">
                            <span className="mb-2 block text- font-semibold text-black py-5">
                                MY WORK EXPERIENCE
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-black sm:text-[40px]/[48px]">
                                Code Beyond Limits, Embrace Every Challenge 💻 | Never Miss an Opportunity 🚀.
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap justify-center ">
                    <div className="w-full px-4 lg:w-full">
                        {accordionItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                header={item.header}
                                text={item.text}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* background */}
            <div className="absolute bottom-0 right-0 z-[-1]">
                <svg
                    width="1440"
                    height="886"
                    viewBox="0 0 1440 886"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#ffffff" stopOpacity="0.36" />
                            <stop offset="1" stopColor="#000000" stopOpacity="0" />
                            <stop offset="1" stopColor="#000000" stopOpacity="0.096144" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

const AccordionItem = ({ header, text, index }) => {
    const [active, setActive] = useState(false);

    const handleToggle = (event) => {
        event.preventDefault();
        setActive(!active);
    };

    return (
        <div
            className="mb-8 w-full rounded-lg bg-black p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8"
            data-aos="zoom-in"
            data-aos-delay={(index + 1) * 70} // Dynamic delay based on index
            data-aos-offset="200"
        >
            <button
                className="faq-btn flex w-full text-left text-white cursor-pointer"
                onClick={handleToggle}
            >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
                    <svg
                        className={`fill-white stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""}`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>

                <div className="w-full">
                    <h4 className="mt-1 text-lg font-semibold text-white">{header}</h4>
                </div>
            </button>

            <div className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"}`}>
                <p className="py-3 text-base leading-relaxed text-white">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Accordion;
