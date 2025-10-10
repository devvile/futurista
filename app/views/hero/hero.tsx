"use client";

import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { HeroLayout } from "@/components/HeroLayout";

export function Hero() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 700);
  };

  return (
    <HeroLayout>
      {({ hovering, setHovering }: any) => (
        <>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-lakes font-normal animate-in fade-in slide-in-from-bottom-4 select-none hero-title-mobile-landscape"
            style={{
              animationDelay: '1000ms',
              animationDuration: '800ms',
              animationFillMode: 'backwards'
            }}
          >
            Defining the Future.
          </h1>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-lakes font-bold animate-in fade-in slide-in-from-bottom-4 select-none mt-2 hero-title-mobile-landscape"
            style={{
              animationDelay: '1200ms',
              animationDuration: '800ms',
              animationFillMode: 'backwards'
            }}
          >
            Now.
          </h1>
          <p
            className="font-mono text-sm sm:text-base text-foreground/80 text-balance mt-6 max-w-[500px] lg:max-w-[600px] xl:max-w-[650px] mx-auto animate-in fade-in slide-in-from-bottom-4"
            style={{
              animationDelay: '1200ms',
              animationDuration: '800ms',
              animationFillMode: 'backwards'
            }}
          >
            We harness the power of AI to help your business grow, turning cutting-edge technology into real results.
          </p>
          <div
            className="animate-in fade-in slide-in-from-bottom-4 mt-8"
            style={{
              animationDelay: '1400ms',
              animationDuration: '800ms',
              animationFillMode: 'backwards'
            }}
          >
            <Link 
              className="contents" 
              href="/#contact"
              onClick={handleContactClick}
            >
              <Button
                size="sm"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </>
      )}
    </HeroLayout>
  );
}