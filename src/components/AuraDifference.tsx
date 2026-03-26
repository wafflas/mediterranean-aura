"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Heart, Leaf, MapPin } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export function AuraDifference() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-aura-card]");

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.16,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-secondary px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/backgroundDiff.webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.08)_38%,rgba(223,216,207,0.2)_100%)]"
      />

      <div className="relative z-10">
      <SectionTitle
        title="THE AURA DIFFERENCE"
        className="mb-10 md:mb-12 lg:mb-16"
        titleClassName="max-w-none whitespace-nowrap"
        as="h3"
        magneticPull={false}
      />

      <p className="mx-auto mb-14 hidden max-w-[980px] text-center font-canela font-light text-[1.95rem] leading-[1.3] text-primary/85 lg:block">
        From the comfort of your villa to personalized rituals crafted around
        your needs, every session is delivered by certified practitioners using
        premium organic Greek oils.
      </p>

      <div className="relative mx-auto grid max-w-[860px] grid-cols-2 lg:max-w-[1180px]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-primary/20"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-primary/20"
        />

        <article
          data-aura-card
          className="flex min-h-[260px] flex-col items-center justify-start px-5 py-10 text-center md:min-h-[355px] md:px-12 md:py-16 lg:min-h-[500px] lg:px-20 lg:py-24"
        >
          <div className="mb-10 flex h-[74px] w-[74px] items-center justify-center rounded-full border border-primary/20 md:h-[82px] md:w-[82px] lg:mb-14 lg:h-[104px] lg:w-[104px]">
            <MapPin className="h-8 w-8 text-primary/95 md:h-9 md:w-9 lg:h-12 lg:w-12" />
          </div>
          <div className="relative inline-flex flex-col items-center pt-[10px] md:pt-[12px] lg:pt-[16px]">
            <div className="absolute left-0 right-0 top-0 flex w-full justify-between font-canela font-light text-[11px] leading-[1.05] tracking-[0.13em] text-primary md:text-[12px] lg:text-[16px]">
              <span>AT</span>
              <span>YOUR</span>
            </div>
            <p className="font-canela font-light text-[22px] leading-[1] tracking-[0.08em] text-primary md:text-[26px] lg:text-[42px]">
              VILLA
            </p>
          </div>
          <p className="mt-6 hidden max-w-[340px] text-center font-apercu text-[0.82rem] uppercase tracking-[0.11em] text-primary/75 lg:block">
            A full spa-quality ritual delivered directly to your private stay.
          </p>
        </article>

        <article
          data-aura-card
          className="flex min-h-[260px] flex-col items-center justify-start px-5 py-10 text-center md:min-h-[355px] md:px-12 md:py-16 lg:min-h-[500px] lg:px-20 lg:py-24"
        >
          <div className="mb-10 flex h-[74px] w-[74px] items-center justify-center rounded-full border border-primary/20 md:h-[82px] md:w-[82px] lg:mb-14 lg:h-[104px] lg:w-[104px]">
            <Heart className="h-8 w-8 text-primary/95 md:h-9 md:w-9 lg:h-12 lg:w-12" />
          </div>
          <div className="relative inline-flex flex-col items-center pt-[10px] md:pt-[12px] lg:pt-[16px]">
            <div className="absolute left-0 right-0 top-0 flex w-full justify-center font-canela font-light text-[11px] leading-[1.05] tracking-[0.08em] text-primary md:text-[12px] lg:text-[16px]">
              <span>PERSONALISED</span>
            </div>
            <p className="font-canela font-light text-[22px] leading-[1] tracking-[0.08em] text-primary md:text-[26px] lg:text-[42px]">
              RITUAL
            </p>
          </div>
          <p className="mt-6 hidden max-w-[340px] text-center font-apercu text-[0.82rem] uppercase tracking-[0.11em] text-primary/75 lg:block">
            Every treatment is adapted to your pressure, pace, and preferences.
          </p>
        </article>

        <article
          data-aura-card
          className="flex min-h-[260px] flex-col items-center justify-start px-5 py-10 text-center md:min-h-[355px] md:px-12 md:py-16 lg:min-h-[500px] lg:px-20 lg:py-24"
        >
          <div className="mb-10 flex h-[74px] w-[74px] items-center justify-center rounded-full border border-primary/20 md:h-[82px] md:w-[82px] lg:mb-14 lg:h-[104px] lg:w-[104px]">
            <Check className="h-8 w-8 text-primary/95 md:h-9 md:w-9 lg:h-12 lg:w-12" />
          </div>
          <p className="font-canela font-light text-[22px] leading-[1] tracking-[0.08em] text-primary md:text-[26px] lg:text-[42px]">
            CERTIFIED
          </p>
          <p className="font-apercu font-light text-[11px] leading-[1.1] tracking-[0.22em] text-primary/95 md:text-[12px] lg:text-[16px]">
            PRACTITIONERS
          </p>
          <p className="mt-6 hidden max-w-[340px] text-center font-apercu text-[0.82rem] uppercase tracking-[0.11em] text-primary/75 lg:block">
            Experienced therapists with verified professional wellness training.
          </p>
        </article>

        <article
          data-aura-card
          className="flex min-h-[260px] flex-col items-center justify-start px-5 py-10 text-center md:min-h-[355px] md:px-12 md:py-16 lg:min-h-[500px] lg:px-20 lg:py-24"
        >
          <div className="mb-10 flex h-[74px] w-[74px] items-center justify-center rounded-full border border-primary/20 md:h-[82px] md:w-[82px] lg:mb-14 lg:h-[104px] lg:w-[104px]">
            <Leaf className="h-8 w-8 text-primary/95 md:h-9 md:w-9 lg:h-12 lg:w-12" />
          </div>
          <p className="font-canela font-light text-[22px] leading-[1] tracking-[0.08em] text-primary md:text-[26px] lg:text-[42px]">
            GREEK
          </p>
          <p className="font-apercu font-light text-[9px] leading-[1.1] tracking-[0.10em] text-primary/95 md:text-[10px] lg:text-[13px]">
            ORGANIC OILS
          </p>
          <p className="mt-6 hidden max-w-[340px] text-center font-apercu text-[0.82rem] uppercase tracking-[0.11em] text-primary/75 lg:block">
            Natural Greek blends selected for calm, balance, and skin comfort.
          </p>
        </article>
      </div>
      </div>
    </section>
  );
}
