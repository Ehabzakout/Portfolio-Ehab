import About from "@/components/features/about";
import ContactMe from "@/components/features/contact";
import Header from "@/components/features/header";
import Navbar from "@/components/features/navbar";
import Projects from "@/components/features/projects";
import Services from "@/components/features/services";
import Footer from "@/components/layout/footer";
import Providers from "@/components/providers";

export default function Home() {
  return (
    <>
      <Providers>
        <Navbar />

        <div className="flex flex-col gap-16 pt-28">
          <Header />
          <About />
          <Services />
          <Projects />
          <ContactMe />
          <Footer />
        </div>
      </Providers>
    </>
  );
}
