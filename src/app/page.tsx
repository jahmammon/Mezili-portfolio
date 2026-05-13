import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AwarenessProgram from "@/components/sections/AwarenessProgram";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import MedicalCaravans from "@/components/sections/MedicalCaravans";
import MissionInterface from "@/components/sections/MissionInterface";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

/**
 * Main Portfolio Entry Page
 */
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />

      <About />

      <AwarenessProgram />

      <Skills />

      <Timeline />

      <MedicalCaravans />

      <MissionInterface />

      <Contact />

      <Footer />
    </main>
  );
}
