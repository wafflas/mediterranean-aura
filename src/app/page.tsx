import dynamic from "next/dynamic";
import LandingPage from "@/components/LandingPage";
import { Concept } from "@/components/Concept";
import { Footer } from "@/components/Footer";

const Rituals = dynamic(() => import("@/components/Rituals"), {
  loading: () => (
    <div
      className="min-h-[280px] w-full bg-secondary"
      aria-hidden
    />
  ),
});

const Reviews = dynamic(
  () => import("@/components/Reviews").then((m) => ({ default: m.Reviews })),
  {
    loading: () => (
      <div
        className="min-h-[320px] w-full bg-secondary"
        aria-hidden
      />
    ),
  },
);

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
