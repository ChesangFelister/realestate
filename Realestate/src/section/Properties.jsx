import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../index.css";
import {
  FaBath,
  FaShare,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaHeart,
} from "react-icons/fa";
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
      <section
        id="properties"
        className="lg:w-[90%] w-full m-auto lg:px-20 flex justify-center flex-col items-start py-20 px-6 gap-10"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 font-semibold">
            PROPERTIES
          </h1>
          <h1 data-aos="zoom-in" className="text-black text-4xl font-semibold">
            Explore the latest properties
          </h1>
        </div>
        <div
          id="grid-box"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {property.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="w-full bg-white dark:bg-gray-800 rounded-xl flex flex-col"
            >
              <div className="relative rounded-t-xl overflow-hidden">
                <div
                  id="image-box"
                  className="bg-cover bg-center h-[250px] p-4 flex flex-col justify-between items-end rounded-t-xl"
                  style={{ backgroundImage: `url(${item.images})` }}
                >
                  <div id="top" className="flex justify-between w-full">
                    <button className="bg-red-600 px-3 py-1 rounded-full hover:bg-white hover:text-black text-white text-[13px]">
                      Feature
                    </button>
                    <div className="flex justify-between items-center gap-3">
                      <button className="bg-red-600 px-3 py-1 rounded-full hover:bg-white hover:text-black text-white text-[13px]">
                        Sale
                      </button>
                      <button className="px-3 py-1 bg-red-600 rounded-full hover:bg-white hover:text-black text-white text-[13px]">
                        Available
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-3">
                    <FaVideo className="size-4 text-white" />
                    <FaCamera className="size-4 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="size-4 text-white" />
                  <h1 className="text-white">{item.address}</h1>
                </div>
              </div>

              <div className="bg-white px-6 py-4 flex flex-col justify-center items-start gap-2 w-full rounded-b-xl">
                <h1 className="text-xl text-red-600 font-bold dark:text-black">
                  {item.name}
                </h1>
                <h1 className="text-xl text-red-600 font-bold dark:text-black">
                  {item.price}
                </h1>
                <p className="dark:text-black">{item.about}</p>
                <div id="icons" className="flex justify-center items-start gap-4">
                  <div className="flex justify-center items-center gap-2">
                    <FaBath className="size-5 text-red-600" />
                    <h1 className="dark:text-black">{item.bath}</h1>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <FaBed className="size-5 text-red-600" />
                    <h1 className="dark:text-black">{item.bed}</h1>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <MdSpaceDashboard className="size-5 text-red-600" />
                    <h1 className="dark:text-black">{item.area}</h1>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300 mt-8"></div>
                <div id="owner-info" className="flex justify-between items-center w-full mt-2">
                  <div className="flex justify-center items-center gap-2">
                    <FaUserCircle className="size-5 text-red-600" />
                    <h1 className="dark:text-black">{item.owner}</h1>
                  </div>
                  <div className="flex justify-center items-center gap-2 border-2 border-gray-200 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <FaShare className="size-4 text-red-400" />
                    <FaHeart className="size-4 text-red-400" />
                    <FaPlus className="size-4 text-red-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;
