import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import MissionInterface from "@/components/sections/MissionInterface";
import Footer from "@/components/ui/Footer";

/**
 * Main Portfolio Entry Page
  */
  export default function Home() {
    return (
        <main className="relative min-h-screen">
              <Hero />
                    <Timeline />
                          <MissionInterface />
                                <Footer />
                                    </main>
                                      );
                                      }