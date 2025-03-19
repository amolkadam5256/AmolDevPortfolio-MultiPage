// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import assets from '../assets/images/assets';

const Contact_Head_Section = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="relative w-full">
      {/* Responsive Images with AOS Effect */}
      <img
        className="w-full hidden md:block opacity-60"
        src={assets.contact_full}
        alt="Header illustration"
        data-aos="fade-up"
      />
      <img
        className="w-full block md:hidden opacity-60"
        src={assets.contact_head_sm}
        alt="Header illustration for mobile"
        data-aos="fade-up"
      />

      {/* Animated Heading */}
      <h1
        className="absolute bg-white text-black left-4 md:left-10 -bottom-6 p-2 text-lg md:text-2xl lg:text-3xl font-bold shadow-md rounded-md"
        data-aos="zoom-in-right"
        data-aos-delay="400"
      >
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/contact">Contact Us</Link>
      </h1>
    </div>
  );
};

export default Contact_Head_Section;
