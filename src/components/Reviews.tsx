"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";

import { reviews } from "@/lib/data";
import { ReviewStar, ReviewArrow, QuoteOpen } from "@/lib/icons";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Reviews() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative bg-secondary w-full overflow-hidden px-8 py-16 flex flex-col">
      <SectionTitle title="GUEST STORIES" className="mb-2" />
      <h1 className="font-canela font-regular text-primary text-[4rem] leading-[1.1] mb-12 drop-shadow-lg flex flex-col items-center gap-1 md:gap-4 tracking-wide w-full max-w-[90vw]">
        Reviews
      </h1>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute top-0 right-0 md:right-12 z-0 opacity-15">
          <QuoteOpen size={52} className="text-primary" />
        </div>

        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full z-10"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <ReviewStar key={i} size={32} />
                  ))}
                </div>
                <p className="font-apercu text-[0.7rem] tracking-[0.1em] text-primary/55 mb-8">
                  {review.name}
                </p>
                <blockquote className="font-canela font-light text-primary text-[1.45rem] leading-[1.45] text-center mb-10 min-h-[160px] px-4">
                  {review.text}
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-16 left-0 md:left-12 rotate-180 z-0 opacity-15">
          <QuoteOpen size={52} className="text-primary" />
        </div>
      </div>

      {/* Custom Navigation */}
      <div className="flex items-center justify-center gap-8 mt-4 z-20">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous review"
          className="text-primary hover:text-primary/60 transition-colors duration-300 scale-x-[-1]"
        >
          <ReviewArrow size={28} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next review"
          className="text-primary hover:text-primary/60 transition-colors duration-300"
        >
          <ReviewArrow size={28} />
        </button>
      </div>

      <div className="mt-12 pt-6  flex items-center justify-center">
        <a
          href="#contact"
          className="font-apercu text-[0.6rem] tracking-[0.22em] uppercase text-primary/60 hover:text-primary transition-colors duration-300 flex items-center gap-2"
        >
          LET US KNOW WHAT YOU THINK
          <span aria-hidden="true">›</span>
        </a>
      </div>
    </section>
  );
}
