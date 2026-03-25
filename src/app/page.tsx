import LandingPage from "@/components/LandingPage";
import Rituals from "@/components/Rituals";
import { Concept } from "@/components/Concept";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-secondary">
      <LandingPage />
      <Concept />
      <Rituals />
      <Reviews />
      <Footer />
    </main>
  );
}
