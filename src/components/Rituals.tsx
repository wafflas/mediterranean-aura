"use client";

import { ServiceCard } from "./ui/ServiceCard";
import { services } from "@/lib/data";
import { SectionTitle } from "./ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Rituals() {
  return (
    <div
      id="rituals"
      className="flex flex-col px-6 py-10 w-full overflow-hidden max-w-[100vw] scroll-mt-24 md:scroll-mt-28"
    >
      <SectionTitle title="RITUALS" className="mb-10" />
      
      {/* Mobile Vertical Stack */}
      <div className="flex flex-col space-y-6 md:hidden">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            price={service.price}
            image={service.image}
            durations={service.durations}
          />
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
