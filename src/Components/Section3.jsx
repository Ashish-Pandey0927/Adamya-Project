import React from 'react';

const Section3 = () => {
  return (
    <section className="h-auto px-6 md:px-10 lg:px-[150px] flex flex-col text-[#000000] bg-[#f8f7f6] py-6 md:py-10">
      {/* Heading */}
      <div className="mt-6 md:mt-10">
        <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold text-center md:text-left">
          Your Vision, Our Expertise
        </h1>
      </div>

      {/* Paragraph */}
      <div className="mt-4">
        <p className="text-base md:text-lg lg:text-xl tracking-wide text-center md:text-left">
          At Adamya Projects, we create exceptional apparel experiences by
          approaching projects in a thoughtful way. <br />
          We help businesses build core brand assets and launch designs,
          products, and bespoke solutions. <br />
          Bringing multidisciplinary ideas to life and creating timeless brand
          stories is at the core of who we are.
        </p>
      </div>

      {/* Images */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-7 gap-6 lg:gap-16">
        <img
          src="/img3.jpg"
          className="h-[200px] w-[300px] md:h-[300px] md:w-[400px] lg:h-[400px] lg:w-[530px] object-cover"
          alt="Image 1"
        />
        <img
          src="/img4.jpg"
          className="h-[200px] w-[300px] md:h-[300px] md:w-[400px] lg:h-[400px] lg:w-[530px] object-cover"
          alt="Image 2"
        />
      </div>
    </section>
  );
};

export default Section3;
