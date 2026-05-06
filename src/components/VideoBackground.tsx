"use client";

import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  src: string;
  /** Optional first frame while the video loads (e.g. previous static hero). */
  poster?: string;
  className?: string;
}

export function VideoBackground({
  src,
  poster,
  className = "",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      void video.play().catch(() => {
        /* autoplay may be deferred; muted + playsInline still allows retry on visibility */
      });
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);

    return () => video.removeEventListener("loadeddata", tryPlay);
  }, [src]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        tabIndex={-1}
      />
    </div>
  );
}
