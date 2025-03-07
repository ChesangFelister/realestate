import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../index.css";
import { service } from "../components/export";
import { useDarkMode } from "../components/DarkModeContext";

const Services = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section 
        id="services" 
        className={`${darkMode ? 'bg-gray-800' : 'bg-red-100'} lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-700 font-semibold tracking-wide">
            OUR SERVICES
          </h1>
          <h1 data-aos="zoom-in" className="text-black text-4xl font-semibold leading-tight dark:text-white">
            Explore the latest properties<br />Popular areas
          </h1>
        </div>

        <div id="grid-box" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          {service.map((item, index) => (
            <div 
              key={index} 
              data-aos="zoom-in" 
              data-aos-delay={200 * (index + 1)} 
              className="bg-white dark:bg-gray-800 h-[350px] flex flex-col 
              justify-center items-start gap-4 px-8 py-8 rounded-xl border-b-[5px] 
              border-red-600 hover:bg-red-300 dark:hover:bg-red-700 transition-all duration-300
              shadow-lg hover:shadow-xl"
            >
              <div className="p-6 rounded-full w-fit bg-red-200 dark:bg-red-900 transform hover:scale-105 transition-transform duration-300">
                <item.icon className="text-red-500 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </div>
              <h1 className="text-black text-[22px] font-semibold dark:text-white">
                {item.title}
              </h1>
              <p className="text-slate-600 text-lg dark:text-gray-300 line-clamp-3">
                {item.desc}
              </p>
              <button className="border-b-2 border-red-600 text-red-600 font-semibold dark:text-white 
                hover:text-red-800 dark:hover:text-red-400 transition-colors duration-300
                hover:border-red-800 dark:hover:border-red-400">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;