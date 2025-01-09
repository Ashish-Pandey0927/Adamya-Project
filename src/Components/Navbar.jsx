import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-5 h-20 z-10 w-full bg-transparent absolute">
      {/* Logo Section */}
      <div className="flex items-center ml-5">
        <a href="#home">
          <img src="/logo.png" alt="logo" className="h-16 sm:h-20" />
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex justify-center items-center gap-5 mr-5" id="nav-link">
        <a href="#service" className="nav-link hover:text-[#173180]">SERVICE</a>
        <a href="#work" className="nav-link hover:text-[#173180]">WORK</a>
        <a href="#about" className="nav-link hover:text-[#173180]">ABOUT</a>
        <a href="#contact" className="nav-link hover:text-[#173180]">CONTACT</a>
      </div>

      {/* Hamburger and Close Icon */}
      <div className="md:hidden flex items-center mr-5">
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#173180] text-white flex flex-col justify-center items-center text-2xl z-20">
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
