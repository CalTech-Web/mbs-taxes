"use client";

import { useEffect, useState } from "react";

export default function GTranslate() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const w = window as any;

    // Google Translate init callback
    w.googleTranslateElementInit = () => {
      new w.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,zh-TW",
          layout: w.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          autoDisplay: false,
        },
        "google_translate_element"
      );
      setLoaded(true);
    };

    // Load the script
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className={`google-translate-widget ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  );
}
