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
    "Mediterranean Aura is a luxury in-villa massage service in Rhodes, Greece—offering couples rituals, aromatherapy, deep tissue, and relaxation treatments delivered to your private villa.",
  openGraph: {
    title: "Mediterranean Aura — In-villa massage & wellness, Rhodes",
    description:
      "Luxury in-villa massage in Rhodes, Greece. Couples rituals, aromatherapy, deep tissue & relaxation—delivered to your private villa.",
    url: "https://www.mediterraneanaura.gr",
    images: [
      {
        url: "/opengraph-image.png",
        width: 247,
        height: 211,
        alt: "Mediterranean Aura",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mediterranean Aura — In-villa massage & wellness, Rhodes",
    description:
      "Luxury in-villa massage in Rhodes, Greece. Couples rituals, aromatherapy, deep tissue & relaxation—delivered to your private villa.",
    images: ["/opengraph-image.png"],
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
