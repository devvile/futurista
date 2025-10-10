"use client";

import { HeroLayout } from "@/components/HeroLayout";
import { Leva } from "leva";
import Footer from "@/components/Footer";

export default function AboutPage() {
    console.log('📄 About page rendering');
    
    return (
        <>
            <section id="about-hero">
                <HeroLayout variant="about" centered={true}>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
                        <div className="space-y-6 text-gray-300 text-center">
                            <p>
                                Founded with a vision to bridge the gap between artificial intelligence and real-world business applications,
                                Futurista has grown into a trusted partner for companies looking to leverage AI technology.
                            </p>
                            <p>
                                Our team combines deep technical expertise with a practical understanding of business challenges,
                                allowing us to deliver solutions that truly make a difference.
                            </p>
                        </div>
                    </div>
                </HeroLayout>
            </section>

            <div className="hidden md:block">
                <Leva hidden />
            </div>

            <Footer />
        </>
    );
}