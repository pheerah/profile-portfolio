import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import HowIWork from "@/components/home/HowIWork";
import Marquee from "@/components/home/Marquee";
import SelectedWork from "@/components/home/SelectedWork";
import Skills from "@/components/home/Skills";
import Stats from "@/components/home/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <main className="wrap">
        <Stats />
        <About />
        <HowIWork />
        <SelectedWork />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
