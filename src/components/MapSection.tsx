"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !counterRef.current) return;

    const counterValue = { value: 1 };

    const ctx = gsap.context(() => {
      gsap.to(counterValue, {
        value: 50,
        duration: 2,
        ease: "power2.out",
        snap: { value: 1 },
        onUpdate: () => {
          if (!counterRef.current) return;
          counterRef.current.textContent = String(counterValue.value);
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-secondary px-2 py-10 md:px-8 md:py-14 lg:px-12 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[440px] lg:max-w-[980px]">
        <div className="w-full">
          <h3 className="flex w-full items-center justify-start gap-1 font-canela font-light text-primary lg:gap-2">
            <span className="inline-flex flex-col leading-[0.9]">
              <span className="text-[22px] tracking-[0.07em] lg:text-[30px]">
                TRUSTED BY
              </span>
              <span className="self-end text-[22px] tracking-[0.07em] lg:text-[30px]">
                VILLAS
              </span>
            </span>
            <span className="text-[50px] leading-[0.78] lg:text-[80px]">
              <span ref={counterRef}>1</span>+
            </span>
          </h3>
        </div>

        <div className="mt-2 bg-secondary/40">
          <div className="relative mx-auto h-[170px] w-full md:h-[240px] lg:h-[400px]">
            <Image
              src="/images/map.webp"
              alt="Coverage map of Rhodes island"
              fill
              className="object-contain"
              sizes="(min-width: 980px) 980px, 100vw"
            />
          </div>
        </div>

        <div className="mt-2 flex w-full justify-end">
          <p className="flex flex-col items-start font-canela font-light leading-[0.9] text-primary text-left">
            <span className="flex w-full justify-between text-[22px] tracking-[0.07em] lg:text-[30px]">
              <span>IN</span>
              <span>ISLAND</span>
            </span>
            <span className="block text-[30px] tracking-[0.04em] lg:text-[44px]">
              RHODES
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
