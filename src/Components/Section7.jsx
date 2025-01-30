import React from 'react';

const Section7 = () => {
  return (
    <section className="h-auto px-4 sm:px-6 md:px-10 lg:px-[150px] flex flex-col text-[#000000] bg-[#f8f7f6] py-6 md:py-10">
      <div>
        <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-center">
          Exploring the World of Clothing Manufacturing?
        </h1>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-between mt-14 gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="flex items-center gap-5">
            <img src="/Untitled design/1.png" alt="Sketch & Design" className="w-[80px] sm:w-[100px] h-auto" />
            <h3 className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] font-bold uppercase">
              Sketch & Design
            </h3>
          </div>
          <div className="flex items-center gap-5">
            <img src="/Untitled design/2.png" alt="Pattern Making" className="w-[80px] sm:w-[100px] h-auto" />
            <h3 className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] font-bold uppercase">
              Pattern Making <br />
              & Prototyping
            </h3>
          </div>
          <div className="flex items-center gap-5">
            <img src="/Untitled design/3.png" alt="Sizing & Fit" className="w-[80px] sm:w-[100px] h-auto" />
            <h3 className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] font-bold uppercase">
              Sizing & Fit
            </h3>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="flex items-center gap-5">
            <img src="/Untitled design/4.png" alt="Decide on Fabrics" className="w-[80px] sm:w-[100px] h-auto" />
            <h3 className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] font-bold uppercase">
              Decide on Fabrics <br />
              & Trims
            </h3>
          </div>
          <div className="flex items-center gap-5">
            <img src="/Untitled design/5.png" alt="Sample Made" className="w-[80px] sm:w-[100px] h-auto" />
            <h3 className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] font-bold uppercase">
              Get a Sample Made
            </h3>
          </div>
          <div className="flex items-center gap-5">
            <img src="/Untitled design/6.png" alt="Bulk Production" className="w-[80px] sm:w-[100px] h-auto" />
            <h3 className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] font-bold uppercase">
              Bulk Production <br />
              & Quality Control
            </h3>
          </div>
        </div>
      </div>

      {/* Delivery Section */}
       {/* Delivery Section - Modified for mobile alignment */}
       <div className="flex flex-row justify-start md:justify-center  items-center gap-5 mt-10">
        <img 
          src="/Untitled design/7.png" 
          alt="Delivery" 
          className="w-[80px] sm:w-[130px] h-auto" // Adjusted mobile image size
        />
        <h3 className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] font-bold uppercase text-left md:text-left">
           On Time Delivery
        </h3>
      </div>
    </section>
  );
};

export default Section7;
