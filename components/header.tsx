"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { navItems } from "@/config/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
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
      // We're on home page, just scroll
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
          {navItems.map((item, index) => (
            <Link
              className="uppercase inline-block text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out select-none animate-in fade-in slide-in-from-top-4 text-sm"
              style={{
                animationDelay: `${(index + 1) * 100}ms`,
                animationDuration: '700ms',
                animationFillMode: 'backwards'
              }}
              href={item.type === "page" ? item.href : `/#${item.name.toLowerCase()}`}
              onClick={(e) => handleNavigation(e, item)}
              key={item.name}
            >
              {item.name}
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