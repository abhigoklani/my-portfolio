import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
