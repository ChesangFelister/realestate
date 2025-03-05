import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import "aos/dist/aos.css";
import AOS from "aos";
import "../index.css";
import heroimg from "../assets/images/hero1.webp";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200, 
      duration: 800, 
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div className="relative">
      <div className={darkMode ? "dark bg-black" : "light bg-white"}>
        <section
          id="hero"
          className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 relative"
          style={{ 
            backgroundImage: `url(${heroimg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h1
            data-aos="fade-up"
            className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
          >
            Find your next home in Kenya
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-xl lg:pr-[500px] pr-0"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </section>
      </div>

      <div className={`${darkMode ? "dark bg-black" : "light bg-white"} relative`}>
        <div
          data-aos="fade-up"
          id="form"
          className={`${
            darkMode ? "dark bg-gray-800" : "light bg-white"
          } lg:w-[70%] w-[95%] mx-auto shadow-lg grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14 relative z-20`}
        >
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white mb-2">Location</h1>
            <input
              type="text"
              placeholder="Enter location"
              className="bg-white w-full p-2 border-b-[1px] border-[#c9c7c1] dark:bg-gray-800 dark:text-white focus:outline-none"
            />
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white mb-2">Type</h1>
            <select
              name="propertyType"
              className="bg-white w-full p-2 border-b-[1px] border-[#c9c7c1] dark:bg-gray-800 dark:text-white focus:outline-none"
            >
              <option value="" disabled selected>
                Select property
              </option>
              <option value="rentals">Rentals</option>
              <option value="sales">Sales</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white mb-2">Category</h1>
            <select
              name="propertyCategory"
              className="bg-white w-full p-2 border-b-[1px] border-[#c9c7c1] dark:bg-gray-800 dark:text-white focus:outline-none"
            >
              <option value="" disabled selected>
                Property category
              </option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
              <option value="duplex">Duplex</option>
              <option value="triplex">Triplex</option>
              <option value="villa">Villa</option>
              <option value="house">House</option>
            </select>
          </div>

          <div className="w-full">
            <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg text-white w-full p-4 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;