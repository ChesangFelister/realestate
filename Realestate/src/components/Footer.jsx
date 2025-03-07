
import React from "react";
import { Link } from "react-scroll";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMobile,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaArrowUp, FaBuilding, FaFax, FaMoon } from "react-icons/fa6";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const socialIcons = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube];
  const contactInfo = [
    { Icon: FaBuilding, text: "Lorem ipsum dolor sit." },
    { Icon: FaMobile, text: "0725467890" },
    { Icon: FaFax, text: "999865644" },
    { Icon: IoMdMail, text: "dreamspace@gmail.com" }
  ];

  return (
    <>
      <footer className={`w-full m-auto bg-cover bg-center rounded-xl lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10 bg-[#0a1f44]`}>
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-2xl font-semibold text-white">About Us</h1>
          <p className="text-slate-400 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quod cum culpa hic earum nihil beatae, eius eaque eum sunt pariatur
            a nostrum, minus ipsam neque tempore ipsum dignissimos molestiae!
          </p>

          <div className="flex gap-4">
            {socialIcons.map((Icon, index) => (
              <div key={index} className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-all duration-300 shadow-lg">
                <Icon className="size-5" />
              </div>
            ))}
          </div>

          <h1 className="text-slate-400 mt-4">
            © {new Date().getFullYear()} RealEstate. All Rights Reserved.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact us</h1>
          {contactInfo.map(({ Icon, text }, index) => (
            <div key={index} className="flex justify-center items-center gap-3 hover:text-red-500 transition-colors duration-300">
              <Icon className="text-white size-5" />
              <p className="text-slate-200">{text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-start gap-8">
          <h1 className="text-white text-2xl font-semibold">Latest Properties</h1>
          {[
            { img: prop7, title: "Signet Villa" },
            { img: prop8, title: "Green Front Villa" }
          ].map(({ img, title }, index) => (
            <div key={index} className="flex justify-center items-center gap-4">
              <img
                src={img}
                alt={`Property ${index + 1}`}
                className="w-[120px] rounded-xl transform hover:scale-110 cursor-pointer transition-all duration-300 shadow-lg"
              />
              <div>
                <h1 className="text-white text-lg hover:text-red-500 transition-colors duration-300">{title}</h1>
                <p className="text-slate-400">$ 345.98</p>
              </div>
            </div>
          ))}
        </div>
      </footer>

      <Link to="hero" spy={true} smooth={true} offset={-100}>
        <div className="bg-red-600 p-4 rounded-full fixed hover:bg-black cursor-pointer lg:bottom-12 right-6 bottom-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <FaArrowUp className="text-white size-5" />
        </div>
      </Link>

      <button
        onClick={toggleDarkMode}
        className="flex items-center p-4 rounded-full bg-orange-500 fixed right-6 lg:top-52 top-6 hover:bg-orange-600 transition-colors duration-300 shadow-lg"
      >
        <FaMoon size={25} className="text-black" />
      </button>
    </>
  );
};

export default Footer;