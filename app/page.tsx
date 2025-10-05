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
      <Hero />
      <div className="hidden md:block">
        <Leva hidden/>
      </div>
      <OurServices />
      <section className=" bg-gradient-to-b from-primary via-background to-background">
        <Processes />
        <Strengths />
        <Contact />
        <Footer />
      </section>
    </>
  );
}
