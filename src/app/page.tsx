import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import LetsConnect from "@/components/LetsConnect";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <TechStack/>
      <Projects/>
      <Experience/>
      <LetsConnect/>
      <Contact/>
      <Footer/>
    </div>
  );
}
