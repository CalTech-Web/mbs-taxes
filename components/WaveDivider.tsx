"use client";

import { useId } from "react";

interface WaveDividerProps {
  toColor: string;
  className?: string;
}

export default function WaveDivider({
  toColor,
  className = "",
}: WaveDividerProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `wave-${uid}`;

  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px] block"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={toColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path
          d="M0,100 L0,40 Q120,10 240,30 Q360,50 480,25 Q600,0 720,20 Q840,40 960,15 Q1080,0 1200,25 Q1320,50 1440,30 L1440,100 Z"
          fill={`url(#${gradId})`}
        />
      </svg>
    </div>
  );
}
