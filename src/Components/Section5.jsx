import React from "react";

const Section5 = () => {
  return (
    <section className="h-auto px-4 sm:px-6 md:px-10 lg:px-[150px] flex flex-col text-[#000000] bg-[#f8f7f6] py-6 md:py-10">
      <div className="py-10 sm:py-10 md:py-20 flex flex-col gap-6 text-center md:text-left">
        {/* Heading */}
        <div>
          <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-snug">
            We’re the Experts, You’re the Visionary.
          </h1>
        </div>

        {/* Paragraph */}
        <div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide md:tracking-wider leading-relaxed">
            We’re a team of designers and sourcing pros, dedicated to helping entrepreneurs
            like you bring your fashion dreams to life. Whether you&apos;re testing a new idea or
            ready to scale, we’ve got the tools, experience, and passion to support you every
            step of the way. From the first sketch to final production, we’re here to turn your
            vision into something unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section5;
