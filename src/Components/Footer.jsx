import React from "react";
import { GrMailOption, GrLinkedin, GrInstagram } from "react-icons/gr";
import { PiPhoneCallFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="h-auto px-4 sm:px-6 md:px-10 lg:px-[150px] flex flex-col md:flex-row justify-between text-[#000000] bg-[#f8f7f6] py-10 sm:py-10 md:py-7 gap-6">
      {/* Logo Section */}
      <div className="flex justify-center md:justify-start">
        <img src="/logo.png" alt="logo" className="h-[150px] sm:h-[200px]" />
      </div>

      {/* Headline Section */}
      <div className="text-center md:text-left">
        <h2 className="text-[1.3rem] font-bold tracking-wider">
          Let’s create something <br />
          valuable together.
        </h2>
      </div>

      {/* Links Section */}
      <div className="font-semibold text-center md:text-left">
        <ul className="gap-2 flex flex-col">
          <li>
            <a href="#home" className="hover:text-[#173180]">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#173180]">About Us</a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#173180]">Services</a>
          </li>
          <li>
            <a href="#clients" className="hover:text-[#173180]">Clients</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#173180]">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Icons Section */}
      <div className="flex flex-col md:flex-col items-center md:items-start text-xl gap-4 sm:gap-6">
        {/* Small screen: Flex row */}
        <ul className="flex flex-row md:flex-col gap-4">
          <li>
            <a href="mailto:example@example.com" className="hover:text-[#173180]">
              <GrMailOption />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#173180]">
              <GrLinkedin />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#173180]">
              <GrInstagram />
            </a>
          </li>
          <li>
            <a href="tel:+1234567890" className="hover:text-[#173180]">
              <PiPhoneCallFill />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
