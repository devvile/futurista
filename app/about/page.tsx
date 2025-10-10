"use client";

import { HeroLayout } from "@/components/HeroLayout";
import { Leva } from "leva";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <section id="about-hero">
                <HeroLayout variant="about" centered={false}>
                    <h1
                        className="text-3xl sm:text-5xl md:text-6xl font-lakes font-normal animate-in fade-in slide-in-from-bottom-4 select-none hero-title-mobile-landscape"
                        style={{
                            animationDelay: '1000ms',
                            animationDuration: '800ms',
                            animationFillMode: 'backwards'
                        }}
                    >
                        Our Mission.
                    </h1>
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-lakes font-bold animate-in fade-in slide-in-from-bottom-4 select-none mt-2 hero-title-mobile-landscape"
                        style={{
                            animationDelay: '1200ms',
                            animationDuration: '800ms',
                            animationFillMode: 'backwards'
                        }}
                    >
                        Evolve.
                    </h1>
                    <p
                        className="font-mono text-sm sm:text-base text-foreground/80 text-balance mt-6 max-w-[700px] mx-auto animate-in fade-in slide-in-from-bottom-4"
                        style={{
                            animationDelay: '1400ms',
                            animationDuration: '800ms',
                            animationFillMode: 'backwards'
                        }}
                    >
                        We stand at the dawn of a new era. Artificial Intelligence is rewriting the
                        rules of what's possible, marking a pivotal chapter in human progress. As this
                        revolution unfolds, we're here to guide your business through the transformation—
                        turning cutting-edge technology into competitive advantage. The future belongs
                        to the bold. Join us in shaping it.
                    </p>
                    <div
                        className="animate-in fade-in slide-in-from-bottom-4 mt-8 flex gap-4 justify-center"
                        style={{
                            animationDelay: '1600ms',
                            animationDuration: '800ms',
                            animationFillMode: 'backwards'
                        }}
                    >
                    </div>
                </HeroLayout>
            </section>

            <div className="hidden md:block">
                <Leva hidden />
            </div>
            <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/30">
                <div className="h-[800px]"></div>
            </section>
            <Footer />
        </>
    );
}