import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Achievements = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: false,
        });
    }, []);

    return (
        <div className="bg-white relative mx-auto my-20">
            <div
                className="bg-black px-6 text-center rounded-lg shadow-md max-w-5xl mx-auto py-20"
                data-aos="zoom-in-up"
                data-aos-duration="1200"
            >
                <h2 className="text-3xl font-bold text-white" data-aos="fade-down">
                    My Achievements
                </h2>
                <p
                    className="text-gray-300 mt-2 max-w-2xl mx-auto"
                    data-aos="zoom-in-up"
                    data-aos-delay="100"
                >
                    As a passionate and aspiring developer, here are some of the milestones I've proudly achieved during my academic journey.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                    <div
                        className="flex flex-col items-center"
                        data-aos="zoom-in-up"
                        data-aos-delay="200"
                    >
                        <span className="text-5xl text-white">👨‍💻</span>
                        <h3 className="text-2xl font-bold text-white mt-2">50+</h3>
                        <p className="text-gray-400">Personal Projects</p>
                    </div>
                    <div
                        className="flex flex-col items-center"
                        data-aos="zoom-in-up"
                        data-aos-delay="300"
                    >
                        <span className="text-5xl text-white">📚</span>
                        <h3 className="text-2xl font-bold text-white mt-2">1</h3>
                        <p className="text-gray-400">Internships</p>
                    </div>
                    <div
                        className="flex flex-col items-center"
                        data-aos="zoom-in-up"
                        data-aos-delay="400"
                    >
                        <span className="text-5xl text-white">🎓</span>
                        <h3 className="text-2xl font-bold text-white mt-2">82%</h3>
                        <p className="text-gray-400">Academic Score</p>
                    </div>
                    <div
                        className="flex flex-col items-center"
                        data-aos="zoom-in-up"
                        data-aos-delay="500"
                    >
                        <span className="text-5xl text-white">📜</span>
                        <h3 className="text-2xl font-bold text-white mt-2">10+</h3>
                        <p className="text-gray-400">Certifications</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
