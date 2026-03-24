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
}

export function ServiceCard({
  title,
  description,
  price,
  image,
  durations,
}: ServiceCardProps) {
  const { openReservation } = useReservation();

  return (
    <article className="bg-secondary border border-primary/10 shadow-[0_4px_24px_rgba(33,52,62,0.10)] overflow-hidden flex flex-col w-full">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      </div>

      <div className="flex flex-col px-5 pt-5 pb-6 flex-1">
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <h3 className="font-canela font-light text-primary text-start text-[1.65rem] leading-[1.1]">
            {title}
          </h3>
          <span className="font-apercu text-[0.6rem] tracking-[0.18em] uppercase text-primary/70 whitespace-nowrap shrink-0">
            FROM €{price}
          </span>
        </div>

        {durations && durations.length > 0 && (
          <p className="font-apercu text-[0.65rem] tracking-[0.2em] uppercase text-primary/60 mb-5">
            {durations.join(" | ")}
          </p>
        )}

        <p className="font-apercu text-[0.75rem] tracking-[0.05em] leading-relaxed text-primary/80 mb-8">
          {description}
        </p>

        <div className="flex justify-center mt-auto">
          <button
            onClick={openReservation}
            className="rounded-sm bg-primary text-secondary font-apercu text-[0.65rem] tracking-[0.2em] uppercase py-4 px-12 hover:bg-primary/90 transition-colors duration-300 flex items-center gap-3"
          >
            RESERVE RETREAT
            <ArrowRight className="size-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </article>
  );
}
