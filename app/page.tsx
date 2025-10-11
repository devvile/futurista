'use client'

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Hero } from "@/app/views/hero/hero";
import { Leva } from "leva";
import OurServices from "./views/our_services/OurServices";
import Processes from "./views/process/Processes";
import Strengths from "./views/strengths/Strengths";
import Footer from "@/components/Footer";
import { Contact } from "./views/contact/Contact";
import LogoCarousel from "./views/logo_carousel/LogoCarousel";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      setTimeout(() => {
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
      }, 100);
    }
  }, []);

  return (
    <>
      <section id="about">
        <Hero />
      </section>
      <div className="hidden md:block">
        <Leva hidden/>
      </div>
      <LogoCarousel/>
      <section id="services">
        <OurServices />
      </section>
      <section className="bg-gradient-to-b from-primary via-background to-background">
        <section id="benefits">
          <Processes />
          <Strengths />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </section>
    </>
  );
}