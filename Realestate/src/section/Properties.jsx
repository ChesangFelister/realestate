import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../index.css";
import { FaBath, FaShare, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera } from "react-icons/fa";
import { property } from "../components/export.js";
import { MdSpaceDashboard } from "react-icons/md";
import { useDarkMode } from "../components/DarkModeContext";

const PropertyCard = ({ item }) => (
  <div
    data-aos="zoom-in"
    data-aos-delay="200"
    className="w-full bg-white dark:bg-gray-800 rounded-xl"
  >
    <div
      className="bg-cover bg-center h-[250px] rounded-t-xl p-4 flex flex-col justify-between items-end"
      style={{ backgroundImage: `url(${item.images})` }}
    >
      <div className="flex justify-between item-end w-full">
        <button className="bg-red-600 px-3 py-1 rounded-full hover:bg-white hover:text-black text-white text-[13px]">
          Feature
        </button>
        <div className="flex justify-between items-center gap-3">
          <button className="bg-red-600 px-3 py-1 rounded-full hover:bg-white hover:text-black text-white text-[13px]">
            Sale
          </button>
          <button className="bg-red-600 px-3 py-1 rounded-full hover:bg-white hover:text-black text-white text-[13px]">
            Available
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between items-end">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="size-4 text-white" />
          <h1 className="text-white">{item.address}</h1>
        </div>
        <div className="flex gap-3">
          <FaVideo className="size-4 text-white" />
          <FaCamera className="size-4 text-white" />
        </div>
      </div>
    </div>

    <div className="px-6 py-4 flex flex-col gap-2">
      <h1 className="text-xl text-red-600 font-bold dark:text-white">{item.name}</h1>
      <h1 className="text-xl text-red-600 font-bold dark:text-white">{item.price}</h1>
      <p className="dark:text-white">{item.about}</p>
      
      <div className="flex gap-4">
        <PropertyFeature icon={<FaBath className="size-5 text-red-600" />} value={item.bath} />
        <PropertyFeature icon={<FaBed className="size-5 text-red-600" />} value={item.bed} />
        <PropertyFeature icon={<MdSpaceDashboard className="size-5 text-red-600" />} value={item.area} />
      </div>
    </div>
  </div>
);

const PropertyFeature = ({ icon, value }) => (
  <div className="flex items-center gap-2">
    {icon}
    <h1 className="dark:text-white">{value}</h1>
  </div>
);

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
      <section className="lg:w-[90%] w-full m-auto lg:px-20 flex flex-col items-start py-20 px-6 gap-10">
        <div className="flex flex-col items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 font-semibold">
            PROPERTIES
          </h1>
          <h1 data-aos="zoom-in" className="text-black text-4xl font-semibold">
            Explore the latest properties
          </h1>
        </div>

        <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-8">
          {property.map((item, index) => (
            <PropertyCard key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;