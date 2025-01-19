import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Section9 = () => {
  const menswearText = useRef(null);
  const womenswearText = useRef(null);

  useEffect(() => {
    // GSAP animations for hover
    const menswearAnimation = gsap.timeline({ paused: true });
    const womenswearAnimation = gsap.timeline({ paused: true });

    // Menswear animation
    menswearAnimation
      .to(menswearText.current, {
        scale: 1.5,
        y: "-50%",
        x: "-50%",
        top: "50%",
        left: "50%",
        color: "#ffffff",
        ease: "power2.out",
        duration: 0.5,
      });

    // Womenswear animation
    womenswearAnimation
      .to(womenswearText.current, {
        scale: 1.5,
        y: "-50%",
        x: "-50%",
        top: "50%",
        left: "50%",
        color: "#ffffff",
        ease: "power2.out",
        duration: 0.5,
      });

    // Add hover events
    const menswearContainer = document.getElementById("menswear-container");
    const womenswearContainer = document.getElementById("womenswear-container");

    menswearContainer.addEventListener("mouseenter", () => menswearAnimation.play());
    menswearContainer.addEventListener("mouseleave", () => menswearAnimation.reverse());

    womenswearContainer.addEventListener("mouseenter", () => womenswearAnimation.play());
    womenswearContainer.addEventListener("mouseleave", () => womenswearAnimation.reverse());

    return () => {
      menswearContainer.removeEventListener("mouseenter", () => menswearAnimation.play());
      menswearContainer.removeEventListener("mouseleave", () => menswearAnimation.reverse());
      womenswearContainer.removeEventListener("mouseenter", () => womenswearAnimation.play());
      womenswearContainer.removeEventListener("mouseleave", () => womenswearAnimation.reverse());
    };
  }, []);

  return (
    <section className="bg-[#173180] text-white py-10 sm:py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Menswear Section */}
          <div
            id="menswear-container"
            className="relative group w-full md:w-1/2 text-center overflow-hidden"
          >
            <img
              src="/men and women/1.jpg" // Replace with actual image path
              alt="Menswear"
              className="w-full h-auto transition-all duration-300 ease-in-out group-hover:grayscale group-hover:scale-105"
            />
            <h2
              ref={menswearText}
              className="absolute top-2 left-2 font-bold text-xl sm:text-2xl transition-all duration-300 ease-in-out"
            >
              MENSWEAR
            </h2>
          </div>

          {/* Womenswear Section */}
          <div
            id="womenswear-container"
            className="relative group w-full md:w-1/2 text-center overflow-hidden"
          >
            <img
              src="/men and women/2.jpg" // Replace with actual image path
              alt="Womenswear"
              className="w-full h-auto transition-all duration-300 ease-in-out group-hover:grayscale group-hover:scale-105"
            />
            <h2
              ref={womenswearText}
              className="absolute top-2 left-2 font-bold text-xl sm:text-2xl transition-all duration-300 ease-in-out"
            >
              WOMENSWEAR
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
