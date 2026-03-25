"use client";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingIntro() {
  const comp = useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = useState(false);
const pathname = usePathname();

useEffect(() => {
  if (pathname !== "/") {
    setIsDone(true);
  }
}, [pathname]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useLayoutEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          setIsDone(true);
        },
      });

      tl.fromTo(
        ".wordIntro",
        { y: 30, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.2,
        },
      )
        .to(
          ".wordIntro",
          {
            opacity: 0,
            filter: "blur(10px)",
            duration: 1.2,
            ease: "power2.inOut",
            stagger: 0.1,
          },
          "+=1.0",
        )
        .to(
          comp.current,
          { opacity: 0, duration: 1.2, ease: "power2.inOut" },
          "-=0.5",
        );
    }, comp);

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [mounted]);

  if (!mounted || isDone) return null;

  const phrase = "Meditarranean Aura";

  return (
    <div
      ref={comp}
      className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-secondary z-[9999]"
    >
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-6">
        {phrase.split(" ").map((word, index) => (
          <span key={index} className="overflow-hidden inline-flex">
            <span className="wordIntro font-canela font-light text-primary text-3xl md:text-5xl lg:text-6xl tracking-[0.15em] opacity-0">
              {word}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
