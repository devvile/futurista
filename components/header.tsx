"use client"

import Link from "next/link";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

const Header = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="absolute z-50 pt-10 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-between container px-4 lg:px-8">
        <Link href="/">
          <p className="text-s sm:text-xl md:text-2xl ml-4 font-centauri select-none animate-in fade-in slide-in-from-top-4 duration-700 hero-title-mobile-landscape">
            Futurista
          </p>
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-8">
          {["Services", "Benefits", "About", "Contact"].map((item, index) => (
            <Link
              className="uppercase inline-block text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out select-none animate-in fade-in slide-in-from-top-4 text-sm"
              style={{
                animationDelay: `${(index + 1) * 100}ms`,
                animationDuration: '700ms',
                animationFillMode: 'backwards'
              }}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScrollToSection(e, item.toLowerCase())}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="absolute right-4">
         <MobileMenu />
        </div>
      </header>
    </div>
  );
};

export default Header;