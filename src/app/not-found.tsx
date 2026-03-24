import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-secondary flex flex-col items-center justify-center px-8 text-center">
        <p className="font-apercu text-[0.6rem] tracking-[0.28em] uppercase text-primary/40 mb-6">
          ERROR 404
        </p>
        <h1 className="font-canela font-light text-primary text-[6rem] md:text-[10rem] leading-none mb-4 select-none">
          404
        </h1>
        <p className="font-canela font-light text-primary/70 text-[1.3rem] md:text-[1.6rem] leading-snug max-w-sm mb-10">
          This page seems to have wandered off into the Mediterranean.
        </p>
        <div className="w-10 h-[1px] bg-primary/25 mb-10" />
        <Link
          href="/"
          className="rounded-sm inline-block bg-primary text-secondary font-apercu text-[0.65rem] tracking-[0.22em] uppercase px-8 py-4 hover:bg-primary/80 transition-colors duration-300"
        >
          RETURN HOME
        </Link>
      </main>
      <Footer />
    </>
  );
}
