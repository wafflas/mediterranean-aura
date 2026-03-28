import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import Rituals from "@/components/Rituals";
import { Concept } from "@/components/Concept";
import { AuraDifference } from "@/components/AuraDifference";
import { Reviews } from "@/components/Reviews";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Mediterranean Aura",
  },
  description:
    "Private villa massage and wellness on Rhodes, Greece. Couples massage, aromatherapy, deep tissue, and relaxation rituals delivered to your villa by Mediterranean Aura.",
  openGraph: {
    title: "Mediterranean Aura — In-villa massage & wellness, Rhodes",
    description:
      "Private villa massage and wellness on Rhodes. Couples rituals, aromatherapy, deep tissue & relaxation — we come to you.",
    url: "https://www.mediterraneanaura.gr",
  },
};

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
