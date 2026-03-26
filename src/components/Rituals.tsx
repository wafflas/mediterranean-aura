"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServiceCard } from "./ui/ServiceCard";
import { services } from "@/lib/data";
import { SectionTitle } from "./ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default function Rituals() {
  const mobileCardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cardsContainer = mobileCardsRef.current;
    if (!cardsContainer) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(max-width: 767px)", () => {
        const cards = gsap.utils.toArray<HTMLDivElement>("[data-ritual-card]");

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 32, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                end: "top 60%",
                toggleActions: "play none none none",
                once: true,
              },
            },
          );
        });
      });
    }, cardsContainer);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div
      id="rituals"
      className="flex flex-col px-6 py-10 w-full overflow-hidden max-w-[100vw] scroll-mt-24 md:scroll-mt-28"
    >
      <SectionTitle title="RITUALS" className="mb-10" />
      
      {/* Mobile Vertical Stack */}
      <div ref={mobileCardsRef} className="flex flex-col space-y-6 md:hidden">
        {services.map((service) => (
          <div key={service.title} data-ritual-card>
            <ServiceCard
              title={service.title}
              description={service.description}
              price={service.price}
              image={service.image}
              durations={service.durations}
            />
          </div>
        ))}
      </div>

      {/* Desktop Horizontal Swiper */}
      <div className="hidden md:block w-full cursor-grab active:cursor-grabbing pb-8">
        <Swiper
          spaceBetween={32}
          slidesPerView={1.2}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 2.8 },
            1280: { slidesPerView: 3.5 },
          }}
          className="w-full !overflow-visible"
        >
          {services.map((service) => (
            <SwiperSlide key={service.title} className="!h-auto flex">
              <div className="w-full h-full transition-transform duration-500 hover:-translate-y-2">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  image={service.image}
                  durations={service.durations}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
