import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import "aos/dist/aos.css";
import Aos from "aos";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 200,
      offset: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
      <section
        id="hero"
        className="W-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <h1
          data-aos="zoom-in"
          className="texl-6xl text-white font-semibold lg:pr-[500] pr-0 lg:leading-[70px] leading-[60px]"
        >
          Find your next home in kenya
        </h1>
        <p
          data-aos="zoom-in"
          className="text-white text-lg font-normal lg:w-[500px] pr-0 "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <div className="flex gap-5">
            <button className="bg-white text-black font-semibold px-5 py-2 rounded-md">
                
            </button>
        </div>

      </section>
    </div>
  );
};

export default Hero;
