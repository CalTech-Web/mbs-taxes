"use client";

import { useEffect } from "react";

export default function GTranslate() {
  useEffect(() => {
    const w = window as any;
    if (w.gtranslateSettings) return;

    w.gtranslateSettings = {
      default_language: "en",
      languages: ["en", "es", "zh-TW"],
      wrapper_selector: ".gtranslate_wrapper",
      flag_style: "2d",
      flag_size: 24,
      alt_flags: { en: "usa", es: "mexico" },
      horizontal_position: "inline",
      flags_location: "https://cdn.gtranslate.net/flags/svg/",
    };

    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/fc.js";
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  return <div className="gtranslate_wrapper" />;
}
