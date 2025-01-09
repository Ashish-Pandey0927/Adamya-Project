import React from 'react';

const Section4 = () => {
  return (
    <section className="h-auto px-6 md:px-10 lg:px-[150px] flex flex-col text-[#000000] bg-[#f8f7f6] py-6 md:py-10">
      {/* Heading and Paragraph */}
      <div className="mt-3 flex flex-col gap-3 text-center md:text-left">
        <div>
          <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold">
            Who Have We Helped So Far?
          </h1>
        </div>
        <div>
          <p className="text-base md:text-lg lg:text-xl tracking-wide">
            Over the years, both individually and as a team, we’ve had the incredible chance to help brands turn their
            fashion dreams into reality. Check out the amazing brands that have been part of our journey so far!
          </p>
        </div>
      </div>

      {/* Logos Section */}
      <div className="mt-5 py-5 grid grid-rows-2 md:grid-rows-3 lg:grid-rows-4 gap-5 place-items-center">
        <img
          src="/logos2/1.png"
          alt="Brand Logo 1"
          className="w-[350px] h-auto md:w-[250px] lg:w-full"
        />
        <img
          src="/logos2/2.png"
          alt="Brand Logo 2"
          className="w-[350px] h-auto md:w-[250px] lg:w-full"
        />
        <img
          src="/logos2/3.png"
          alt="Brand Logo 3"
          className="w-[350px] h-auto md:w-[250px] lg:w-full"
        />
        <img
          src="/logos2/4.png"
          alt="Brand Logo 4"
          className="w-[350px] h-auto md:w-[250px] lg:w-full"
        />
      </div>
    </section>
  );
};

export default Section4;
