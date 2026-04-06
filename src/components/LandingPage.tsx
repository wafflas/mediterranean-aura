"use client";

import Image from "next/image";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import ScrollDownIndicator from "./ui/ScrollDownIndicator";
import { useReservation } from "./ReservationProvider";

export default function LandingPage() {
  const { openReservation } = useReservation();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!headingRef.current) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".heading-line");
      let hasPlayed = false;

      gsap.set(lines, { yPercent: 100 });

      const playHeadingReveal = () => {
        if (hasPlayed) return;
        hasPlayed = true;
        gsap.to(lines, {
          yPercent: 0,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.1,
        });
      };

      const hasActiveLoadingIntro = Boolean(
        document.querySelector("[data-loading-intro='active']"),
      );

      if (!hasActiveLoadingIntro) {
        requestAnimationFrame(playHeadingReveal);
        return;
      }

      const handleIntroComplete = () => playHeadingReveal();
      window.addEventListener("loading-intro:complete", handleIntroComplete, {
        once: true,
      });

      const fallbackTimeoutId = setTimeout(playHeadingReveal, 4500);

      return () => {
        window.removeEventListener("loading-intro:complete", handleIntroComplete);
        clearTimeout(fallbackTimeoutId);
      };
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="relative h-dvh w-full flex flex-col items-center justify-center overflow-hidden">
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
          <h1
            ref={headingRef}
            className="font-canela font-light text-white text-[40px] md:text-[75px] leading-[1.15] mb-12 drop-shadow-lg flex flex-col items-center justify-center gap-2 tracking-wide w-full max-w-[90vw] md:max-w-6xl"
          >
            <span className="overflow-hidden block">
              <span className="heading-line flex items-baseline justify-center gap-3 md:gap-5">
                <span>RELAX</span>
                <span className="text-[25px] md:text-[45px] opacity-90">
                  IN
                </span>
                <span>THE</span>
              </span>
            </span>
            <span className="overflow-hidden block">
              <span className="heading-line flex items-baseline justify-center gap-3 md:gap-5">
                <span>COMFORT</span>
                <span className="text-[25px] md:text-[45px] opacity-90">
                  OF
                </span>
              </span>
            </span>
            <span className="overflow-hidden block">
              <span className="heading-line flex items-baseline justify-center gap-3 md:gap-5">
                <span className="text-[25px] md:text-[45px] opacity-90">
                  YOUR
                </span>
                <span>VILLA</span>
              </span>
            </span>
            <span className="sr-only">
              RELAX IN THE COMFORT OF YOUR VILLA
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
