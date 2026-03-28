"use client";

import { ElementType, RefObject, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionTitleProps {
  title: string;
  className?: string;
  titleClassName?: string;
  as?: ElementType;
  magneticPull?: boolean;
  triggerRef?: RefObject<HTMLElement | null>;
}

export function SectionTitle({
  title,
  className = "",
  titleClassName = "",
  as: Component = "h2",
  magneticPull = true,
  triggerRef,
}: SectionTitleProps) {
  const titleRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!magneticPull || !titleRef.current) return;

    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>(".section-title-char");
      gsap.from(chars, {
        x: () => gsap.utils.random(-200, 200),
        y: () => gsap.utils.random(-200, 200),
        rotation: () => gsap.utils.random(-90, 90),
        autoAlpha: 0,
        stagger: 0.02,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: triggerRef?.current ?? titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, titleRef);

    return () => ctx.revert();
  }, [magneticPull, triggerRef]);

  return (
    <div className={`flex flex-col items-center text-center  ${className}`}>
      <Component
        ref={titleRef}
        className={`font-apercu text-[0.9rem] tracking-[0.24em] uppercase text-primary mb-4 max-w-[51vw] mx-auto ${titleClassName}`}
      >
        {magneticPull
          ? title.split("").map((char, index) => (
              <span
                key={`${char}-${index}`}
                className="section-title-char inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))
          : title}
      </Component>
    </div>
  );
}
