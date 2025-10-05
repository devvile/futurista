"use client";

import Link from "next/link";
import { GL } from "../../../components/gl";
import { Button } from "../../../components/ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="relative h-svh w-full">
      <GL hovering={hovering} />
      <div className="absolute inset-0 flex items-end justify-center pb-10 lg:pb-20 lg:mb-20">
        <div className="text-center w-full px-4">
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
            <Link className="contents" href="/#contact">
              <Button
                size="sm"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}