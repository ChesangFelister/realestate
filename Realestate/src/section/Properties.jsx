import React, { useEffect } from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import "../index.css";
import { FaBath, FaShare, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera } from "react-icons/fa";
import { property } from "../components/export.js";
import { MdSpaceDashboard } from "react-icons/md";
import { useDarkMode } from "../components/DarkModeContext";

const Properties = () => {
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
      <section id="properties" className="lg:w-[90%] w-full m-auto lg:px-20 flex justify-center flex-col items-start py-20 px-6 gap-10">
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>PROPERTIES</h1>
          <h1 data-aos="zoom-in" className="text-black text-4xl font-semibold dark:text-white">
            Explore the latest properties
          </h1>
        </div>
        <div id="grid-box" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          {property.map((item, index) => (
            <div data-aos="zoom-in" data-aos-delay="200" key={index} className="w-full bg-white dark:bg-gray-800 rounded-xl">
              <div id="image-box" className="bg-cover bg-center h-[250px] rounded-t-xl p-4 flex flex-col justify-between items-end" style={{ backgroundImage: `url(${item.images})` }}>
                <div className="flex gap-2">
                  <button className="bg-white p-2 rounded-full hover:bg-red-500 hover:text-white">
                    <FaShare />
                  </button>
                  <button className="bg-white p-2 rounded-full hover:bg-red-500 hover:text-white">
                    <FaPlus />
                  </button>
                </div>
                <div className="w-full flex justify-between items-center">
                  <span className="bg-white px-4 py-1 rounded-full text-sm">{item.type}</span>
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm">{item.status}</span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  <p className="text-gray-600 dark:text-gray-300">{item.location}</p>
                </div>
                <h1 className="text-xl font-semibold dark:text-white">{item.name}</h1>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaBed className="text-red-500" />
                    <p className="text-gray-600 dark:text-gray-300">{item.beds} Beds</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBath className="text-red-500" />
                    <p className="text-gray-600 dark:text-gray-300">{item.baths} Baths</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdSpaceDashboard className="text-red-500" />
                    <p className="text-gray-600 dark:text-gray-300">{item.area} sqft</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t">
                  <h1 className="text-xl font-semibold text-red-500">${item.price}</h1>
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-2xl text-gray-500" />
                    <p className="text-gray-600 dark:text-gray-300">{item.agent}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Properties