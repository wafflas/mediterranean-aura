import Image from "next/image";
import Link from "next/link";

export function IvDocPromoSection() {
  return (
    <section
      aria-label="IV therapy partnership promotion"
      className="bg-secondary px-4 py-10 md:py-16"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-primary/15 bg-[#F1E7DC]/80 px-6 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-md md:flex md:items-center md:gap-10 md:px-10 md:py-8">
        <div className="mb-6 flex items-center justify-center md:mb-0 md:w-1/3">
          <div className="relative w-full max-w-[210px]">
            <Link aria-label="Visit IV Doc website" href="https://www.iv-rhodes.com" target="_blank" rel="noreferrer">
            <Image
              src="/images/ivdoclogo.png"
              alt="iV Doc IV therapy logo"
              width={500}
              height={250}
              className="h-auto w-full object-contain"
              priority={false}
            />
            </Link>
          </div>
        </div>

        <div className="md:w-2/3 md:space-y-4">
          <p className="font-apercu text-[10px] uppercase tracking-[0.3em] text-primary/50">
            Wellness partner
          </p>
          <h3 className="font-canela text-xl font-light text-primary md:text-2xl">
            15% off premium IV therapy with code{" "}
            <span className="whitespace-nowrap">AURA15</span>
          </h3>
          <p className="mt-2 max-w-xl font-apercu text-xs text-primary/80 md:text-sm">
            Use your code on any IV therapy service or product to deepen your post-treatment recovery and relaxation.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-apercu text-[11px] tracking-[0.26em] text-primary">
              AURA15
            </span>
            <span className="font-apercu text-[11px] text-primary/75 md:text-xs">
              Apply at checkout for{" "}
              <span className="font-medium text-primary">
                15% off every service and product
              </span>
              .
            </span>
          </div>

          <div className="mt-5">
            <Link
              href="https://www.iv-rhodes.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit IV Doc website"
              className="inline-flex items-center justify-center rounded-sm border border-primary/20 bg-primary px-7 py-3 font-apercu text-[11px] uppercase tracking-[0.22em] text-secondary shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/90 hover:shadow-[0_18px_55px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1E7DC]"
            >
              Explore IV therapy services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

