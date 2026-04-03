import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import Rituals from "@/components/Rituals";
import { Concept } from "@/components/Concept";
import { AuraDifference } from "@/components/AuraDifference";
import { MapSection } from "@/components/MapSection";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { IvDocPromoSection } from "@/components/IvDocPromoSection";

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
        url: "/opengraph-imageV2.jpg",
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
    images: ["/opengraph-imageV2.jpg"],
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
      <IvDocPromoSection />
      <Reviews />
      <Footer />
    </main>
  );
}
