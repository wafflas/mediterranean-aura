"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";

import { reviews } from "@/lib/data";
import { ReviewStar, ReviewArrow, QuoteOpen } from "@/lib/icons";
import { ChevronRight } from "lucide-react";

export function Reviews() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative bg-secondary w-full overflow-hidden px-8 py-16 md:px-12 md:py-24 flex flex-col">
      <h2 className="mb-12 md:mb-16 flex w-full max-w-[30vw] flex-col items-center gap-1 text-center md:gap-4 mx-auto">
        <span className="font-apercu text-[0.9rem] tracking-[0.24em] uppercase text-primary max-w-[51vw]">
          GUEST STORIES
        </span>
        <span className="font-canela font-regular text-primary text-[4rem] md:text-[5.8rem] leading-[1.1] drop-shadow-lg tracking-wide">
          Reviews
        </span>
      </h2>

      <div className="relative w-full max-w-4xl md:max-w-6xl mx-auto">
        <div className="absolute top-0 right-0 md:right-10 z-0 opacity-15">
          <QuoteOpen size={64} className="text-primary md:w-[82px] md:h-[82px]" />
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
                <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <ReviewStar key={i} size={32} className="md:w-10 md:h-10" />
                  ))}
                </div>
                <p className="font-apercu text-[0.7rem] md:text-[0.92rem] tracking-[0.1em] md:tracking-[0.12em] text-primary/85 mb-8 md:mb-12">
                  {review.name}
                </p>
                <blockquote className="font-canela font-light text-primary text-[1.45rem] md:text-[2rem] leading-[1.45] text-center mb-10 md:mb-14 min-h-[160px] md:min-h-[240px] px-4 md:px-10">
                  {review.text}
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-16 md:bottom-20 left-0 md:left-10 rotate-180 z-0 opacity-15">
          <QuoteOpen size={64} className="text-primary md:w-[82px] md:h-[82px]" />
        </div>
      </div>

      {/* Custom Navigation */}
      <div className="flex items-center justify-center gap-8 md:gap-10 mt-4 md:mt-8 z-20">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous review"
          className="text-primary md:hover:text-primary/60 transition-colors duration-300 scale-x-[-1]"
        >
          <ReviewArrow size={28} className="md:w-9 md:h-9" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next review"
          className="text-primary md:hover:text-primary/60 transition-colors duration-300"
        >
          <ReviewArrow size={28} className="md:w-9 md:h-9" />
        </button>
      </div>

      <div className="mt-12 md:mt-16 pt-6 md:pt-8 flex items-center justify-center">
        <a
          href="#contact"
          className="font-apercu underline text-[0.8rem] md:text-[0.96rem] tracking-[0.22em] md:tracking-[0.24em] uppercase text-primary/85 hover:text-primary transition-colors duration-300 flex items-center gap-2 md:gap-3"
        >
          LET US KNOW WHAT YOU THINK
          <ChevronRight size={18} className="md:w-6 md:h-6" />
        </a>
      </div>
    </section>
  );
}
