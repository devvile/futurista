'use client'

import { Hero } from "@/app/views/hero/hero";
import { Leva } from "leva";
import OurServices from "./views/our_services/OurServices";
import Processes from "./views/process/Processes";
import Strengths from "./views/strengths/Strengths";
import Footer from "@/components/Footer";
import CallToAction from "./views/call_to_action/CallToAction";
import FAQ from "./views/faq/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Leva hidden />
      <OurServices />
      <Processes/>
      <Strengths/>
      <FAQ/>
      <CallToAction/>
      <Footer/>
    </>
  );
}
