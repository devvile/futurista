"use client"

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Share the same nav config
export const navItems = [
  { name: "Services", type: "section" as const, href: "#services" },
  { name: "Benefits", type: "section" as const, href: "#benefits" },
  { name: "About", type: "page" as const, href: "/about" },
  { name: "Contact", type: "section" as const, href: "#contact" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false); // Close menu
    
    // Small delay to allow menu close animation
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
    }, 100);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground/60 hover:text-foreground/100 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-20 bg-background/95 backdrop-blur-sm z-40">
          <nav className="flex flex-col items-center justify-center gap-8 h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.type === "section") {
                    handleScrollToSection(e, item.name.toLowerCase());
                  } else {
                    setIsOpen(false); // Close menu for page navigation
                  }
                }}
                className="text-2xl uppercase text-foreground/60 hover:text-foreground/100 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}