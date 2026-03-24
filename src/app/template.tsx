"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        comp.current,
        { opacity: 0, filter: "blur(5px)" },
        { 
            opacity: 1, 
            filter: "blur(0px)", 
            duration: 0.7, 
            ease: "power2.out",
            clearProps: "all"
        }
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return <div ref={comp} className="w-full flex-1 flex flex-col">{children}</div>;
}
