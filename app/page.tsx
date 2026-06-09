"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Pillars from "@/components/sections/Pillars";
import Portfolio from "@/components/sections/Portfolio";
import Model from "@/components/sections/Model";
import WhyUs from "@/components/sections/WhyUs";
import Leadership from "@/components/sections/Leadership";
import Gallery from "@/components/sections/Gallery";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Pillars />
            <Portfolio />
            <Model />
            <WhyUs />
            <Leadership />
            <Gallery />
            <CTA />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </SmoothScroll>
  );
}
