"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useReservation } from "../ReservationProvider";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  durations?: string[];
  promoLabel?: string;
}

export function ServiceCard({
  title,
  description,
  price,
  image,
  durations,
  promoLabel,
}: ServiceCardProps) {
  const { openReservation } = useReservation();

  return (
    <article className="bg-secondary border border-primary/10 shadow-[0_4px_24px_rgba(33,52,62,0.10)] overflow-hidden flex h-full min-h-0 w-full flex-col">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 480px"
        />
        {promoLabel ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-primary/75 via-primary/25 to-transparent pt-16 pb-4 px-4 md:pt-20 md:pb-5"
            aria-hidden
          />
        ) : null}
        {promoLabel ? (
          <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-20 md:bottom-4 md:left-4 md:right-auto">
            <p
              className="inline-flex max-w-full flex-col gap-1.5 border border-[#9B1F2E]/35 bg-secondary/[0.94] px-3 py-2 shadow-[0_8px_28px_rgba(33,52,62,0.18)] backdrop-blur-[6px] md:px-3.5 md:py-2.5"
              role="note"
            >
              <span
                className="font-apercu text-[0.5rem] tracking-[0.32em] uppercase text-[#9B1F2E]/90"
                aria-hidden
              >
                Exclusive to this ritual
              </span>
              <span className="font-canela font-light text-[1rem] leading-tight tracking-[0.02em] text-[#8B1522] md:text-[1.05rem]">
                {promoLabel}
              </span>
            </p>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col px-5 pt-5 pb-6 flex-1">
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <h3 className="font-canela font-light text-primary text-start text-[1.65rem] leading-[1.1]">
            {title}
          </h3>
          <span className="font-apercu text-[0.6rem] tracking-[0.18em] uppercase text-primary/90 whitespace-nowrap shrink-0">
            FROM €{price}
          </span>
        </div>

        {durations && durations.length > 0 && (
          <p className="font-apercu text-[0.65rem] tracking-[0.2em] uppercase text-primary/85 mb-5">
            {durations.join(" | ")}
          </p>
        )}

        <p className="font-apercu text-[0.75rem] tracking-[0.05em] leading-relaxed text-primary/80 mb-8">
          {description}
        </p>

        <div className="flex justify-center mt-auto">
          <button
            onClick={openReservation}
            className="btn-hover-light rounded-sm bg-primary text-secondary font-apercu text-[0.65rem] tracking-[0.2em] uppercase py-4 px-12 transition-colors duration-300 flex items-center gap-3"
          >
            RESERVE RETREAT
            <ArrowRight className="size-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </article>
  );
}
