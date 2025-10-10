"use client"

import { useState } from "react";
import Link from "next/link";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 200);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center animate-in fade-in slide-in-from-top-4 z-50 relative"
        style={{
          animationDelay: '400ms',
          animationDuration: '700ms',
          animationFillMode: 'backwards'
        }}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-full bg-foreground transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block h-0.5 w-full bg-foreground transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-full bg-foreground transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu with transparent overlay */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen z-40 lg:hidden
          flex flex-col items-center justify-center gap-8
          transition-all duration-300 ease-out
          bg-black/80 backdrop-blur-sm
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Logo at top */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <p className={`text-xl md:text-2xl font-centauri select-none ${isOpen ? 'animate-in fade-in slide-in-from-top-4' : ''}`}
              style={isOpen ? {
                animationDelay: '0ms',
                animationDuration: '500ms',
                animationFillMode: 'backwards'
              } : {}}
            >
              Futurista
            </p>
          </Link>
        </div>

        {/* Navigation Links */}
        {["Services", "Benefits", "About", "Contact"].map((item, index) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => handleScrollToSection(e, item.toLowerCase())}
            className={`
              uppercase text-foreground/60 hover:text-foreground/100 
              duration-150 transition-colors ease-out select-none
              text-2xl
              ${isOpen ? 'animate-in fade-in slide-in-from-bottom-4' : ''}
            `}
            style={isOpen ? {
              animationDelay: `${(index + 1) * 100}ms`,
              animationDuration: '500ms',
              animationFillMode: 'backwards'
            } : {}}
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
};