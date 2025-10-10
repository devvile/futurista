"use client";

import { HeroLayout } from "@/components/HeroLayout";
import { Leva } from "leva";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <>
            <section id="about-hero">
                <HeroLayout>
                    {({ hovering, setHovering }: any) => (
                        <div className="max-w-4xl mx-auto">
                            <img src="" />
                            <h1
                                className="text-3xl sm:text-5xl md:text-6xl font-lakes font-normal animate-in fade-in slide-in-from-bottom-4 select-none hero-title-mobile-landscape"
                                style={{
                                    animationDelay: '1000ms',
                                    animationDuration: '800ms',
                                    animationFillMode: 'backwards'
                                }}
                            >
                                Our Mission:
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
                                className="font-mono text-sm sm:text-base text-foreground/80 text-balance mt-6 max-w-[500px] lg:max-w-[600px] xl:max-w-[650px] mx-auto animate-in fade-in slide-in-from-bottom-4"
                                style={{
                                    animationDelay: '1200ms',
                                    animationDuration: '800ms',
                                    animationFillMode: 'backwards'
                                }}
                            >
                                We stand at the forefront of a new era where creativity meets technology,
                                redefining what's possible. The rise of Artificial Intelligence marks a new
                                chapter in human history—and we're here to guide you through it. The future
                                belongs to the bold, and with the right expertise, AI becomes your competitive
                                advantage in a rapidly evolving world.
                            </p>
                        </div>
                    )}
                </HeroLayout>
            </section>

            <div className="hidden md:block">
                <Leva hidden />
            </div>
            <section className="bg-gradient-to-b from-background via-background to-primary h-[800px]">

            </section>
            <Footer />
        </>
    );
}