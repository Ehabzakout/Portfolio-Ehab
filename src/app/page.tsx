"use client";
import About from "@/components/features/about";
import ContactMe from "@/components/features/contact";
import Header from "@/components/features/header";
import Navbar from "@/components/features/navbar";
import Projects from "@/components/features/projects";
import Services from "@/components/features/services";
import Footer from "@/components/layout/footer";

import { useState } from "react";

export default function Home() {
  const [isDarkMode, setISDarkMode] = useState(true);
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setDarkMode={setISDarkMode} />
      <div className="flex flex-col gap-16 pt-28">
        <Header />
        <About isDarkMode={isDarkMode} />
        <Services />
        <Projects />
        <ContactMe isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
}
