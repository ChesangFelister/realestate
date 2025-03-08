import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../index.css";
import { useDarkMode } from "../components/DarkModeContext";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}>
      <section
        id="contact"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[95%] h-fit w-full m-auto rounded-xl grid lg:grid-cols-2 lg:px-36 py-20 px-6 gap-10`}
      >
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-6 rounded-xl w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h1 className="text-black text-3xl font-semibold dark:text-white tracking-wide">
            CONTACT US TODAY
          </h1>

          <input
            type="text"
            placeholder="Enter your fullname here"
            className="w-full px-6 rounded-xl border-2 border-gray-200 py-3 focus:border-red-500 outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 hover:border-red-300 transition-colors duration-300"
          />

          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full px-6 rounded-xl border-2 border-gray-200 py-3 focus:border-red-500 outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 hover:border-red-300 transition-colors duration-300"
          />

          <input
            type="tel"
            placeholder="Enter your phone number here"
            className="w-full px-6 rounded-xl border-2 border-gray-200 py-3 focus:border-red-500 outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 hover:border-red-300 transition-colors duration-300"
          />

          <textarea
            placeholder="Enter your message here"
            rows="4"
            className="w-full px-6 rounded-xl border-2 border-gray-200 py-3 focus:border-red-500 outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 hover:border-red-300 transition-colors duration-300 resize-none"
          ></textarea>

          <button className="bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition-all duration-300 w-full lg:w-auto transform hover:scale-105">
            Send Message
          </button>
        </div>

        <div className="flex flex-col justify-center items-start gap-6 lg:p-20 p-6">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-red-500 dark:text-white text-xl font-semibold tracking-wide"
          >
            REACH US ON
          </h1>

          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-black lg:text-[40px] font-semibold leading-tight dark:text-white"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          
          <p  
            data-aos="zoom-in"
            data-aos-delay="600" 
            className="text-xl text-gray-600 text-justify dark:text-gray-300 leading-relaxed"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim voluptatum natus, 
            eveniet cumque libero eum? Nulla reiciendis officiis id quaerat at non nam. 
            Repudiandae mollitia dolores quo laudantium dicta.
          </p>

          <button className="bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer transform hover:scale-105 transition-all duration-300">
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;