import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../index.css";
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import { Link } from "react-scroll";
import { useDarkMode } from "../components/DarkModeContext";

const Header = () => {
  const { darkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Properties", path: "properties" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav
      className={`${
        darkMode ? "bg-black text-white" : "bg-[#f3f3f3] text-black"
      } flex justify-between items-center px-4 py-3 sticky top-0 z-30`}
    >
      <div id="logo">
        <img src={logo} alt="company logo" className="lg:w-[150px] w-[120px] dark:invert" />
      </div>

      <ul className="hidden lg:flex space-x-6">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            {link}
          </Link>
        ))}
      </ul>

      <button className="lg:hidden text-2xl focus:outline-none" onClick={toggleMenu}>
        {isMenuOpen ? <FaXmark /> : <FaBars />}
      </button>

      {isMenuOpen && (
        <div className={`absolute top-16 left-0 w-full bg-white dark:bg-black shadow-md lg:hidden flex flex-col items-center py-6`}>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              smooth={true}
              offset={-100}
              duration={500}
              className="block py-3 text-lg dark:text-white hover:bg-red-500 hover:text-white w-full text-center"
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
