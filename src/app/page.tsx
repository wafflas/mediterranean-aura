import LandingPage from "@/components/LandingPage";
import Rituals from "@/components/Rituals";
import { Concept } from "@/components/Concept";
import { AuraDifference } from "@/components/AuraDifference";
import { Reviews } from "@/components/Reviews";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-secondary">
      <LandingPage />
      <Concept />
      <Rituals />
      <AuraDifference />
      <MapSection />
      <Reviews />
      <Footer />
    </main>
  );
}
