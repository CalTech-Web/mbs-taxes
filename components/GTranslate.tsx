"use client";

import { useEffect } from "react";

const WIDGET_ID = "66895480";

export default function GTranslate() {
  useEffect(() => {
    // Set config before loading script
    const w = window as any;
    w.gtranslateSettings = w.gtranslateSettings || {};
    w.gtranslateSettings[WIDGET_ID] = {
      default_language: "en",
      languages: ["zh-TW", "en", "es"],
      url_structure: "none",
      flag_style: "2d",
      flag_size: 24,
      wrapper_selector: `#gt-wrapper-${WIDGET_ID}`,
      alt_flags: { en: "usa", es: "mexico" },
      horizontal_position: "inline",
      flags_location: "https://cdn.gtranslate.net/flags/svg/",
    };

    // Load fc.js from CDN
    const existing = document.querySelector('script[src*="gtranslate.net"]');
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/fc.js";
    script.defer = true;
    script.setAttribute("data-gt-widget-id", WIDGET_ID);
    document.head.appendChild(script);
  }, []);

  return <div className="gtranslate_wrapper" id={`gt-wrapper-${WIDGET_ID}`} />;
}
