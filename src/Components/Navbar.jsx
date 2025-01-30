import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-2 h-22 z-10 w-full bg-transparent absolute">
      {/* Left Section: Logo */}
      <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
        <a href="#home">
          {/* Mobile logo */}
          <img
            src="/logo.png"
            alt="logo"
            className="h-11 sm:h-17 md:hidden mx-auto"
          />
          {/* Desktop logo */}
          <img
            src="/Types.png"
            alt="logo"
            className="h-16 sm:h-10 lg:h-15 hidden md:block"
          />
        </a>
      </div>

      {/* Center Section: Wolf Icon (Desktop only) */}
      <div className="hidden md:flex justify-center">
        <a href="#home">
          <img
            src="/wolf.png"
            alt="wolf icon"
            className="h-16 sm:h-15"
          />
        </a>
      </div>

      {/* Right Section: Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Links */}
      <div
        className="hidden md:flex justify-center items-center gap-5 mr-5"
        id="nav-link"
      >
        <a href="#services" className="nav-link hover:text-[#173180]">
          SERVICE
        </a>
        <a href="#work" className="nav-link hover:text-[#173180]">
          WORK
        </a>
        <a href="#about" className="nav-link hover:text-[#173180]">
          ABOUT
        </a>
        <a href="#contact" className="nav-link hover:text-[#173180]">
          CONTACT
        </a>
      </div>

      {/* Mobile Dropdown Menu */}
      
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#173180] text-white flex flex-col justify-center items-center text-2xl z-20">
          <div className="absolute top-6 right-5">
            <button onClick={toggleMenu} className="text-3xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <a href="#service" className="mb-5 hover:text-gray-300" onClick={toggleMenu}>
            SERVICE
          </a>
          <a href="#work" className="mb-5 hover:text-gray-300" onClick={toggleMenu}>
            WORK
          </a>
          <a href="#about" className="mb-5 hover:text-gray-300" onClick={toggleMenu}>
            ABOUT
          </a>
          <a href="#contact" className="hover:text-gray-300" onClick={toggleMenu}>
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
