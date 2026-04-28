"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  src: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export function VideoBackground({
  src,
  className,
  overlay = true,
  overlayOpacity = 0.4,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 0.75;
  }, []);

  return (
    <div className={cn("fixed inset-0 -z-10", className)}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={src} type="video/webm" />
        <source src={src.replace(".webm", ".mp4")} type="video/mp4" />
      </video>
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}
