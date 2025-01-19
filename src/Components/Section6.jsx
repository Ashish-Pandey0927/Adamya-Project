import React from "react";

const Section6 = () => {
  return (
    <section className="h-auto px-4 sm:px-6 md:px-10 lg:px-[150px] flex flex-col text-[#f8f7f6] bg-[#173180] py-8 sm:py-10 md:py-32">
      <div className="flex flex-col gap-6 text-center md:text-left">
        {/* Heading */}
        <div>
          <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-snug">
            Still Deciding? We’re Here to Help!
          </h1>
        </div>

        {/* Paragraph */}
        <div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide leading-relaxed">
            We get it—starting something new can feel overwhelming. Book a free
            session worth ₹5000 to help you gain clarity and confidence. During
            this one-on-one session, we’ll answer all your questions, address
            your concerns, and craft a personalized, strategic roadmap tailored
            to your vision.
          </p>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button className="relative text-[#173180] bg-[#f8f7f6] font-bold py-2 px-8 md:px-10 rounded-md hover:text-[#f8f7f6] hover:bg-[#173180] hover:border-[#f8f7f6] hover:border-solid hover:border-2 transition-all duration-300">
            <span className="absolute bottom-0 left-0 w-full h-0 bg-[#173180] transition-all duration-300"></span>
             <a href="https://calendly.com/" target="_blank">Book Your Session</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section6;