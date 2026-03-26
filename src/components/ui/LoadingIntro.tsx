"use client";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingIntro() {
  const comp = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isDone, setIsDone] = useState(() => pathname !== "/");

  useEffect(() => {
    if (pathname !== "/") {
      setIsDone(true);
    }
  }, [pathname]);

  useLayoutEffect(() => {
    if (pathname !== "/") return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          window.dispatchEvent(new CustomEvent("loading-intro:complete"));
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
  }, [pathname]);

  if (isDone) return null;

  const phrase = "Meditarranean Aura";

  return (
    <div
      ref={comp}
      data-loading-intro="active"
      className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-secondary z-[9999]"
    >
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-6">
        {phrase.split(" ").map((word, index) => (
          <span key={index} className="overflow-hidden inline-flex">
            <span className="wordIntro font-canela font-light text-primary text-3xl md:text-5xl lg:text-6xl tracking-[0.15em] opacity-0 select-none">
              {word}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
