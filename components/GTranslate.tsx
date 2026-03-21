"use client";

import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "zh-TW", label: "中文" },
];

export default function GTranslate() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");
  const ref = useRef<HTMLDivElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);

  /* Load the Google Translate engine (hidden) */
  useEffect(() => {
    const w = window as any;

    w.googleTranslateElementInit = () => {
      new w.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,zh-TW",
          autoDisplay: false,
        },
        "gtranslate_hidden"
      );
    };

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const s = document.createElement("script");
      s.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Read current language from cookie on mount */
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    if (match) setCurrent(match[1]);
  }, []);

  const switchLang = (code: string) => {
    setOpen(false);
    setCurrent(code);

    if (code === "en") {
      // Remove translation
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + window.location.hostname;
      window.location.reload();
      return;
    }

    // Set the Google Translate cookie and trigger the hidden select
    document.cookie = `googtrans=/en/${code}; path=/`;
    document.cookie = `googtrans=/en/${code}; path=/; domain=.${window.location.hostname}`;

    // Try to use the hidden Google Translate combo box
    const combo = document.querySelector<HTMLSelectElement>("#gtranslate_hidden .goog-te-combo");
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  };

  const activeLang = LANGUAGES.find((l) => l.code === current) || LANGUAGES[0];

  return (
    <>
      {/* Hidden Google Translate element */}
      <div id="gtranslate_hidden" ref={hiddenRef} className="!hidden" />

      {/* Custom dropdown */}
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors text-xs font-medium tracking-wide cursor-pointer"
          aria-label="Select language"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{activeLang.label}</span>
          <svg
            className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-[9999] min-w-[100px]">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLang(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  current === lang.code
                    ? "bg-navy-50 text-navy-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
