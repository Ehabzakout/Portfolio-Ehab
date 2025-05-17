"use client";
import About from "@/components/common/about";
import ContactMe from "@/components/common/contact";
import Header from "@/components/common/header";
import Navbar from "@/components/common/navbar";
import Projects from "@/components/common/projects";
import Services from "@/components/common/services";
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
        <Footer />
      </div>
    </>
  );
}
