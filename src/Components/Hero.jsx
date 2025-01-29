import React, { useRef } from 'react';

const Hero = () => {
  const imageRef = useRef(null);

  return (
    <div className="h-auto md:h-[100vh] w-full flex flex-col-reverse md:flex-row justify-around items-center px-6 md:px-10 lg:px-[150px] py-10">
      {/* Text Section */}
      <div className="flex flex-col w-full md:w-2/3 text-center md:text-left">
        <div className="text-[1.5rem] md:text-[2rem] first-text uppercase">
          Launch Your Brand Now!
        </div>
        <div className="first-text text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold leading-none mt-4 uppercase">
          YOUR DREAM. <br />
          WE Deliver.
        </div>
        <div className="first-text text-lg md:text-2xl tracking-wide font-light mt-4 uppercase">
          From concept to creation, <br />
          we bring your fashion vision to life.
        </div>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-[#173180] text-white font-bold py-2 px-6 md:px-10 rounded-md hover:text-[#173180] hover:bg-[#f8f7f6] hover:border-[#173180] hover:border-solid hover:border-2 transition-all duration-300">
            <a href="#contact">LEARN MORE</a>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-1/3 mb-6 md:mb-0 mt-6 md:mt-0">
        <img
          ref={imageRef}
          src="/home-img.png"
          className="w-[10rem] sm:w-[12rem] md:w-[18rem]" // Adjusted sizes for different screen sizes
          alt="Fashion Vision"
        />
      </div>
    </div>
  );
};

export default Hero;
