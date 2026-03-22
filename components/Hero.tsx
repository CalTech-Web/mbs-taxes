"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import { Phone } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  bgImage: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
  videoId?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  bgImage,
  primaryCta,
  secondaryCta,
  compact = false,
  videoId,
}: HeroProps) {
  const hasVideo = !!videoId;
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<any>(null);

  // When Wistia is ready, grab the video handle
  useEffect(() => {
    if (!videoId) return;

    const w = window as any;
    w._wq = w._wq || [];
    w._wq.push({
      id: videoId,
      onReady: (video: any) => {
        videoRef.current = video;
      },
    });
  }, [videoId]);

  const handlePlay = () => {
    setPlaying(true);
    // Give the embed a moment to become visible, then play
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      } else {
        // Fallback: try via Wistia queue
        const w = window as any;
        w._wq = w._wq || [];
        w._wq.push({
          id: videoId,
          onReady: (video: any) => {
            videoRef.current = video;
            video.play();
          },
        });
      }
    }, 100);
  };

  return (
    <section
      className={`relative ${compact ? "h-[600px] flex flex-col justify-center pt-[100px] pb-[75px]" : "pt-48 pb-32 md:pt-56 md:pb-40"} overflow-hidden`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-navy-900/65" />

      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <pattern id="heroPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#heroPattern)" />
        </svg>
      </div>

      <div
        className={`relative max-w-7xl mx-auto px-6 ${
          hasVideo
            ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left"
            : "text-center"
        }`}
      >
        <div>
          {subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-gold-400"
            >
              {subtitle}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-heading text-4xl md:text-[50px] font-bold text-white leading-tight ${
              hasVideo ? "" : "max-w-4xl mx-auto"
            }`}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`mt-5 text-lg md:text-xl text-white/90 leading-relaxed ${
                hasVideo ? "" : "max-w-2xl mx-auto"
              }`}
            >
              {description}
            </motion.p>
          )}
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`mt-8 flex flex-col sm:flex-row gap-4 ${
                hasVideo ? "justify-start" : "justify-center"
              }`}
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="btn-shine whitespace-nowrap px-8 py-3.5 bg-gold-400 text-white font-semibold rounded-full hover:bg-gold-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="group whitespace-nowrap inline-flex items-center gap-2.5 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                >
                  <span className="relative flex h-5 w-5 shrink-0">
                    <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                    <Phone className="relative h-5 w-5 fill-white" />
                  </span>
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
        </div>

        {hasVideo && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Script
              src={`https://fast.wistia.com/embed/medias/${videoId}.jsonp`}
              strategy="lazyOnload"
            />
            <Script
              src="https://fast.wistia.com/assets/external/E-v1.js"
              strategy="lazyOnload"
            />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              {/* Wistia embed — always in DOM so Wistia can initialize it */}
              <div
                className="wistia_responsive_padding"
                style={{ padding: "56.25% 0 0 0", position: "relative" }}
              >
                <div
                  className="wistia_responsive_wrapper"
                  style={{ height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}
                >
                  <div
                    className={`wistia_embed wistia_async_${videoId} playerColor=dc2626 videoFoam=true`}
                    style={{ height: "100%", position: "relative", width: "100%" }}
                  >
                    <div
                      className="wistia_swatch"
                      style={{ height: "100%", left: 0, opacity: 0, overflow: "hidden", position: "absolute", top: 0, transition: "opacity 200ms", width: "100%" }}
                    >
                      <img
                        src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
                        alt=""
                        style={{ filter: "blur(5px)", height: "100%", objectFit: "contain", width: "100%" }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom play-button overlay */}
              {!playing && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 z-10 w-full h-full cursor-pointer group"
                  aria-label="Play video"
                >
                  {/* Wistia thumbnail */}
                  <img
                    src="https://embed-ssl.wistia.com/deliveries/65c9550daae5e795679f0b37ebbe6449.jpg?image_crop_resized=960x540"
                    alt="Video thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  {/* Red pulsing play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="relative flex items-center justify-center">
                      {/* Pulse ring */}
                      <span className="absolute h-20 w-20 rounded-full bg-red-600/40 animate-ping" />
                      {/* Solid button */}
                      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg group-hover:bg-red-500 group-hover:scale-110 transition-all">
                        <svg
                          className="h-7 w-7 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>

      <WaveDivider toColor="white" className="absolute -bottom-px left-0 right-0" />
    </section>
  );
}
