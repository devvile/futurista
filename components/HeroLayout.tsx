"use client";

import { GL } from "@/components/gl";
import { useState, ReactNode } from "react";

interface HoverState {
  hovering: boolean;
  setHovering: (hovering: boolean) => void;
}

interface HeroLayoutProps {
  children: ReactNode | ((props: HoverState) => ReactNode);
}

export function HeroLayout({ children }: HeroLayoutProps) {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="relative h-svh w-full">
      <GL hovering={hovering} />
      <div className="absolute inset-0 flex items-end justify-center pb-10 lg:pb-20 lg:mb-20">
        <div className="text-center w-full px-4">
          {typeof children === 'function' 
            ? children({ hovering, setHovering })
            : children
          }
        </div>
      </div>
    </div>
  );
}