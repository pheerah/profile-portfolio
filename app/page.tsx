import About from "@/components/home/About";
import AIBuilt from "@/components/home/AIBuilt";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import HowIWork from "@/components/home/HowIWork";
import SelectedWork from "@/components/home/SelectedWork";
import Skills from "@/components/home/Skills";
import Stats from "@/components/home/Stats";

/** Order: proof first (experience, work), then the differentiator (AI), then approach, skills and contact. */
export default function Home() {
  return (
    <>
      <Hero />
      <main id="main" className="wrap">
        <Stats />
        <About />
        <Experience />
        <SelectedWork />
        <AIBuilt />
        <HowIWork />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
