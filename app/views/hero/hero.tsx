"use client";

import Link from "next/link";
import { GL } from "../../../components/gl";
import { Button } from "../../../components/ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />
      <div className="pb-20 mt-auto text-center relative">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl font-lakes font-normal animate-in fade-in slide-in-from-bottom-4"
          style={{ 
            animationDelay: '1000ms',
            animationDuration: '800ms',
            animationFillMode: 'backwards'
          }}
        >
          Defining the Future. <br />
          <i className="font-lakes font-bold">Now.</i>
        </h1>
        <p 
          className="font-mono text-sm sm:text-base text-foreground/80 text-balance mt-8 max-w-[500px] mx-auto animate-in fade-in slide-in-from-bottom-4"
          style={{ 
            animationDelay: '1200ms',
            animationDuration: '800ms',
            animationFillMode: 'backwards'
          }}
        >
          We harness the power of AI to help your business grow, turning cutting-edge technology into real results.
        </p>
        <div
          className="animate-in fade-in slide-in-from-bottom-4"
          style={{ 
            animationDelay: '1400ms',
            animationDuration: '800ms',
            animationFillMode: 'backwards'
          }}
        >
          <Link className="contents max-sm:hidden" href="/#contact">
            <Button
              className="mt-14"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Contact Us
            </Button>
          </Link>
          <Link className="contents sm:hidden" href="/#contact">
            <Button
              size="sm"
              className="mt-14"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [Contacts Us]
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}