"use client";

import Image from "next/image";
import ScrollDownIndicator from "./ui/ScrollDownIndicator";
import { useReservation } from "./ReservationProvider";

export default function LandingPage() {
  const { openReservation } = useReservation();
  return (
    <>
      <section className="relative h-screen min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/landingPageImage.webp"
            alt="Relaxing luxury in-villa massage in Rhodes with a view of the sea"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />

        <div className="relative z-20 flex flex-col items-center justify-center px-4 md:px-8 mt-16 max-w-4xl mx-auto text-center w-full">
          <h1 className="font-canela font-light text-white text-[40px] md:text-[75px] leading-[1.15] mb-12 drop-shadow-lg flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-2 md:gap-x-6 md:gap-y-2 tracking-wide w-full max-w-[90vw] md:max-w-6xl">
            <span className="flex items-baseline justify-center gap-3 md:gap-5">
              <span>RELAX</span>
              <span className="text-[25px] md:text-[45px] opacity-90">
                IN
              </span>
              <span>THE</span>
            </span>
            <span className="flex items-baseline justify-center gap-3 md:gap-5">
              <span>COMFORT</span>
              <span className="text-[25px] md:text-[45px] opacity-90">
                OF
              </span>
            </span>
            <span className="flex items-baseline justify-center gap-3 md:gap-5">
              <span className="text-[25px] md:text-[45px] opacity-90">
                YOUR
              </span>
              <span>VILLA</span>
            </span>
          </h1>

          <button
            onClick={openReservation}
            className="btn-hover-dark rounded-sm bg-secondary text-primary px-8 py-4 font-apercu text-xs sm:text-sm uppercase tracking-[0.15em] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            Book your session now
          </button>
        </div>
        <ScrollDownIndicator />

      </section>
    </>
  );
}
