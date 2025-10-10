"use client";

import { GL } from "@/components/gl";
import { useState, ReactNode } from "react";
import { GLVariant } from "@/config/glPresets";

interface HoverState {
  hovering: boolean;
  setHovering: (hovering: boolean) => void;
}

interface HeroLayoutProps {
  children: ReactNode | ((props: HoverState) => ReactNode);
  variant?: GLVariant;
  centered?: boolean;
}

export function HeroLayout({ children, variant = 'home', centered = false }: HeroLayoutProps) {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="relative h-svh w-full">
      {/* Add key prop to force remount when variant changes */}
      <GL key={variant} hovering={hovering} variant={variant} />
      <div className={`absolute inset-0 flex ${centered ? 'items-center' : 'items-end'} justify-center ${centered ? '' : 'pb-10 lg:pb-20 lg:mb-20'}`}>
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