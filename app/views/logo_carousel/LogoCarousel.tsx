'use client'

import Image from "next/image";

const logos = [
  { name: "Company 1", src: "/logos/logo1.png" },
  { name: "Company 2", src: "/logos/logo6.svg" },
  { name: "Company 3", src: "/logos/logo3.png" },
  { name: "Company 4", src: "/logos/logo4.svg" },
  { name: "Company 5", src: "/logos/logo5.svg" },
  // Add more logos as needed
];

export default function LogoCarousel() {
  return (
    <section className="py-16 overflow-hidden bg-background">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
          Trusted by:
        </h2>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        {/* Scrolling container */}
        <div className="logo-carousel-track">
          {/* First set of logos */}
          <div className="logo-carousel-content">
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="logo-item"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="logo-carousel-content">
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="logo-item"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}