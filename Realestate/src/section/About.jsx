import React, { useEffect } from "react";
import aboutimg from "../assets/images/about.jpg";
import { useDarkMode } from "../components/DarkModeContext";
import "aos/dist/aos.css";
import AOS from "aos";
import "../index.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <section
      id="about"
      className={`${
        darkMode ? "bg-black text-white" : "bg-transparent text-gray-900"
      } w-full py-20 lg:px-40 px-10`}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
        <div className="flex justify-center">
          <img
            data-aos="fade-right"
            src={aboutimg}
            alt="about image"
            className="rounded-2xl lg:w-[500px] lg:h-[600px] w-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h1
            data-aos="fade-up"
            className="text-red-500 dark:text-red-400 text-xl font-bold tracking-wider"
          >
            WHO ARE WE
          </h1>

          <h2
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-black text-[40px] font-semibold leading-10 "
          >
            We are a dedicated team providing
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-xl text-gray-800 dark:text-gray-300 leading-relaxed"
          >
            We are a dedicated team committed to providing top-tier real estate
            solutions, ensuring a seamless and stress-free experience as you
            search for your dream home. With our deep market expertise,
            personalized approach, and a wide selection of properties, we help
            you find a space that perfectly matches your lifestyle and needs.
            Whether you’re looking for a cozy apartment, a luxurious villa, or a
            prime commercial space, we are here to guide you every step of the
            way. Trust us to be your trusted partner in the world of real
            estate.
          </p>
          <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white 
           dark:hover:text-black text-lg text-white w-full p-4 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-110">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
