"use client";

import { useEffect, useRef } from "react";

interface ExternalWidgetProps {
  src: string;
}

export default function ExternalWidget({ src }: ExternalWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    containerRef.current.appendChild(script);
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [src]);

  return <div ref={containerRef} className="w-full min-h-[400px]" />;
}
