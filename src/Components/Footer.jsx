import React from "react";
import { GrMailOption, GrLinkedin, GrInstagram } from "react-icons/gr";
import { PiPhoneCallFill } from "react-icons/pi";
import { Link } from "react-scroll"; // Import react-scroll

const Footer = () => {
  return (
    <footer className="relative h-auto px-4 sm:px-6 md:px-10 lg:px-[150px] flex flex-col md:flex-row justify-between text-[#000000] bg-[#f8f7f6] py-10 sm:py-10 md:py-7 gap-6">
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
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#173180]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#173180]"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#173180]"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="clients"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#173180]"
            >
              Clients
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#173180]"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Icons Section */}
      <div className="flex flex-col md:flex-col items-center md:items-start text-xl gap-4 sm:gap-6">
        <ul className="flex flex-row md:flex-col gap-4">
          <li>
            <a
              href="mailto:dhiraj@adamyaprojects.com"
              className="hover:text-[#173180]"
            >
              <GrMailOption />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/adamya-projects/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#173180]"
            >
              <GrLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/adamyaprojects?igsh=a2Z3ZDRiZHF3bTlz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#173180]"
            >
              <GrInstagram />
            </a>
          </li>
          <li>
            <a href="tel:+91 82967 88207" className="hover:text-[#173180]">
              <PiPhoneCallFill />
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright Text */}
      <div className="absolute bottom-0 w-full text-center text-xs sm:text-sm md:text-base lg:text-lg text-[#000000] py-2 sm:py-3 md:py-4">
  <p>
    ©2025 Adayam Product All rights reserved. Privacy Policy. Terms of Use. Privacy Policy. Terms of Use
  </p>
</div>

    </footer>
  );
};

export default Footer;
