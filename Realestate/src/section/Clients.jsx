import React, { useEffect } from "react";
import { client } from "../components/export";
import { FaStar } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import "../index.css";
import { useDarkMode } from "../components/DarkModeContext";

const Clients = () => {
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
        id="testimonials" 
        className="lg:w-[97%] w-full h-fit m-auto bg-cover rounded-xl flex flex-col justify-center items-start gap-20 lg:px-20 px-6 py-20"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 font-semibold">OUR CLIENTS</h1>
          <h1 data-aos="zoom-in" className="text-black text-[40px] font-semibold leading-tight dark:text-white">
            What our clients are saying<br />about us
          </h1>
        </div>

        <div id="client-box" className="grid lg:grid-cols-3 grid-cols-1 justify-center gap-8 w-full"> 
          {client.map((item, index) => (
            <div 
              data-aos="zoom-in" 
              data-aos-delay="200" 
              key={index}
              className="bg-white dark:bg-gray-900 hover:bg-red-100 dark:hover:bg-gray-800 cursor-pointer p-12 flex flex-col justify-center items-start gap-6 rounded-xl w-full shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-[70px] h-[70px] rounded-full object-cover transform hover:scale-110 transition-transform duration-300" 
                />
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-xl text-black font-semibold dark:text-white">{item.name}</h1>
                  <h2 className="text-slate-600 text-lg dark:text-gray-300">{item.text}</h2>
                </div>
              </div>

              <p className="text-md text-justify text-slate-600 dark:text-gray-300 leading-relaxed">
                {item.feedback}
              </p>

              <div className="flex justify-center items-center gap-2 w-full">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-xl hover:scale-110 transition-transform duration-300" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;