import React from 'react';

const Section1 = () => {
  return (
    <section className="h-auto px-6 md:px-10 lg:px-[150px] flex flex-col bg-[#173180] text-[#f8f7f6] py-6 md:py-10">
      {/* Heading */}
      <div className="px-0 md:px-5 pt-2">
        <div className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-center md:text-left">
          Launch Your Fashion Dream Under 10 Lakhs
        </div>
      </div>

      {/* Description */}
      <div className="px-0 md:px-5 text-base md:text-lg lg:text-xl py-4 text-center md:text-left">
        <p>
          We&apos;re your one-stop shop for building a successful fashion brand.
          With 15+ years of experience and 50+ brands <br className="hidden md:block" />
          launched, we offer end-to-end support: design, sampling, production,
          stunning photoshoots, website & social media magic.
        </p>
        <p className="mt-4">
          Ideal for aspiring entrepreneurs, our affordable launch package lets
          you test your brand idea and transform it into reality. <br className="hidden md:block" />
          Experience the power of &quot;test before you invest&quot;.
        </p>
      </div>

      {/* Images */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mb-10 px-0 md:px-5 mt-6 gap-6 lg:gap-16">
        <img
          src="/img1.jpg"
          className="h-[200px] w-[300px] md:h-[350px] md:w-[450px] lg:h-[470px] lg:w-[550px] object-cover"
          alt="Image 1"
        />
        <img
          src="/img2.jpg"
          className="h-[200px] w-[300px] md:h-[350px] md:w-[450px] lg:h-[470px] lg:w-[550px] object-cover"
          alt="Image 2"
        />
      </div>
    </section>
  );
};

export default Section1;
