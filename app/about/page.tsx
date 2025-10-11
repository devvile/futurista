"use client";

import { HeroLayout } from "@/components/HeroLayout";
import { Leva } from "leva";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Reusable animation component
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

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
                </HeroLayout>
            </section>

            <div className="hidden md:block">
                <Leva hidden />
            </div>

            {/* Who We Are Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-primary/20">
                <div className="max-w-7xl mx-auto">
                    {/* Founder/Team Section with Image */}
                    <FadeInSection>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-3xl md:text-5xl  text-left mb-6">
                                    Let's create the Future
                                </h2>
                                <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                                    Hi, I'm Patryk Czemierowski, founder of Futurista. With a passion for 
                                    technology and innovation, I've dedicated my career to helping businesses 
                                    harness the transformative power of Artificial Intelligence.
                                </p>
                                <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                                    My journey in tech began form passion 7 years ago, and I've witnessed firsthand 
                                    how AI can revolutionize operations, enhance creativity, and unlock 
                                    unprecedented growth opportunities.
                                </p>
                                <p className="text-foreground/80 text-lg leading-relaxed">
                                    At Futurista, we don't just implement technology—we become your strategic 
                                    partner in navigating the AI revolution, ensuring you're not just keeping 
                                    pace, but leading the charge into the future.
                                </p>
                            </div>
                            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/40 opacity-70">
                                {/* Replace with your actual image */}
                                <Image
                                    src="/1plotno-min.webp"
                                    alt="CEO photo - Patryk Czemierowski, man with beard in white shirt "
                                    fill
                                    className="object-cover"
                                />
                              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Patryk Czemierowski
                                </h2>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* Our Values 
                    <FadeInSection delay={200}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                What We Believe
                            </h2>
                            <p className="text-foreground/80 text-lg max-w-3xl mx-auto">
                                Our values guide every decision we make and every solution we deliver
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Innovation First",
                                    description: "We stay at the forefront of AI technology, constantly learning and adapting to bring you the latest and most effective solutions."
                                },
                                {
                                    title: "Human-Centered",
                                    description: "Technology should enhance human capabilities, not replace them. We design AI solutions that empower your team."
                                },
                                {
                                    title: "Results-Driven",
                                    description: "We measure success by your success. Every solution is designed to deliver tangible, measurable results for your business."
                                }
                            ].map((value, index) => (
                                <div
                                    key={index}
                                    className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                                >
                                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                    <p className="text-foreground/70 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeInSection> */}
                </div>
            </section>
            <Footer />
        </>
    );
}