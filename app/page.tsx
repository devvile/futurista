'use client'

import { useState } from "react";
import { Hero } from "@/app/views/hero/hero";
import { Leva } from "leva";
import OurServices from "./views/our_services/OurServices";
import Processes from "./views/process/Processes";
import Strengths from "./views/strengths/Strengths";
import Footer from "@/components/Footer";
import { Contact } from "./views/contact/Contact";

export default function Home() {
  return (
    <>
      <section id="about">
        <Hero />
      </section>
      <div className="hidden md:block">
        <Leva hidden/>
      </div>
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