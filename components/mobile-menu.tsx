"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/config/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    setIsOpen(false); // Close menu

    if (item.type === "page") {
      // Let default Link behavior handle page navigation
      return;
    }

    e.preventDefault();
    const sectionId = item.name.toLowerCase();

    // If we're not on home page, navigate to home first
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
    } else {
      // We're on home page, just scroll after menu closes
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
    }
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
                href={item.type === "page" ? item.href : `/#${item.name.toLowerCase()}`}
                onClick={(e) => handleNavigation(e, item)}
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