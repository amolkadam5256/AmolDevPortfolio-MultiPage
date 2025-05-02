// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import assets from '../assets/images/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hobbiesimg3 = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration in ms
            once: false, // Whether to run animation only once
        });
    }, []);

    return (
        <div className="flex justify-evenly items-center flex-col md:flex-row wave bg-no-repeat bg-center bg-cover py-10">
            {/* Image Section */}
            <div className="flex justify-center md:order-1 order-2">
                <img
                    src={assets.swmming}
                    alt="headphone"
                    className="max-w-xs md:max-w-sm animate-pulse" // Adding infinite pulse animation
                    data-aos="fade-up" // AOS scroll animation
                />
            </div>

            {/* Text Section */}
            <div className="block justify-center text-center md:order-2 order-1" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-3xl md:text-5xl font-[anzo5] py-5">I Love Swimming</h2>
                <p>In villages, swimming in rivers, ponds, and wells is a fun tradition.</p>
                <ul className="list-disc pl-5">
                    <li className='list-none'><strong>Wells:</strong> Swimming in deep wells is common.</li>
                    <li className='list-none'><strong>Natural Pools:</strong> Rivers and ponds make perfect swimming spots.</li>
                </ul>
            </div>


        </div>
    );
};

export default Hobbiesimg3;
