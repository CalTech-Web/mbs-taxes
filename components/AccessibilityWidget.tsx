"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accessibility,
  X,
  Plus,
  Minus,
  Contrast,
  Eye,
  Link as LinkIcon,
  MousePointer2,
  RotateCcw,
  Type,
} from "lucide-react";

interface A11ySettings {
  fontSize: number;
  highContrast: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
  bigCursor: boolean;
}

const DEFAULT_SETTINGS: A11ySettings = {
  fontSize: 0,
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
  bigCursor: false,
};

const STORAGE_KEY = "mbs-a11y";

function applySettings(settings: A11ySettings) {
  const root = document.documentElement;
  root.style.setProperty("--a11y-font-scale", `${100 + settings.fontSize * 12.5}%`);
  root.classList.toggle("a11y-high-contrast", settings.highContrast);
  root.classList.toggle("a11y-grayscale", settings.grayscale);
  root.classList.toggle("a11y-highlight-links", settings.highlightLinks);
  root.classList.toggle("a11y-big-cursor", settings.bigCursor);
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(settings)); } catch {}
}

function ToggleRow({ icon: Icon, label, checked, onToggle }: { icon: typeof Contrast; label: string; checked: boolean; onToggle: () => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={onToggle}
      className="w-full flex items-center justify-between px-5 py-4 hover:bg-navy-50/50 transition-colors border-b border-navy-100/50 text-left"
    >
      <span className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-navy-500 shrink-0" />
        <span className="text-sm font-medium text-dark">{label}</span>
      </span>
      <span className={`relative w-10 h-6 rounded-full transition-colors ${checked ? "bg-navy-500" : "bg-gray-200"}`}>
        <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${checked ? "translate-x-[18px]" : "translate-x-0.5"}`} />
      </span>
    </button>
  );
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULT_SETTINGS);
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) { const parsed = { ...DEFAULT_SETTINGS, ...JSON.parse(stored) }; setSettings(parsed); applySettings(parsed); }
    } catch {}
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => { if (mounted) applySettings(settings); }, [settings, mounted]);

  useEffect(() => {
    if (!open || !panelRef.current) return;
    const panel = panelRef.current;
    const focusable = panel.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); triggerRef.current?.focus(); return; }
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const update = useCallback(<K extends keyof A11ySettings>(key: K, value: A11ySettings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetAll = useCallback(() => { setSettings(DEFAULT_SETTINGS); applySettings(DEFAULT_SETTINGS); }, []);

  if (!mounted) return null;
  const fontPct = 100 + settings.fontSize * 12.5;
  const hasChanges = JSON.stringify(settings) !== JSON.stringify(DEFAULT_SETTINGS);
  const motionProps = reducedMotion
    ? { initial: false as const, animate: false as const, exit: { opacity: 0 } }
    : { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" }, transition: { type: "spring" as const, damping: 25, stiffness: 300 } };

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        className="fixed right-4 bottom-24 z-[9990] w-14 h-14 rounded-full bg-navy-600 hover:bg-navy-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label={open ? "Close accessibility menu" : "Open accessibility menu"}
        aria-expanded={open}
        aria-controls="a11y-panel"
      >
        {open ? <X className="w-6 h-6" /> : <Accessibility className="w-7 h-7 group-hover:scale-110 transition-transform" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={() => setOpen(false)} className="fixed inset-0 z-[9988] bg-black/20" aria-hidden="true" />
            <motion.div id="a11y-panel" ref={panelRef} role="dialog" aria-label="Accessibility settings" aria-modal="true" className="fixed right-0 top-0 bottom-0 z-[9989] w-80 max-w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-xl shadow-2xl border-l border-navy-100/50 overflow-y-auto a11y-widget-panel" {...motionProps}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-navy-100/50 bg-navy-50/50 sticky top-0">
                <div className="flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-navy-600" />
                  <h2 className="font-heading text-lg font-semibold text-dark">Accessibility</h2>
                </div>
                <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg hover:bg-navy-100 transition-colors" aria-label="Close accessibility settings">
                  <X className="w-5 h-5 text-dark" />
                </button>
              </div>
              <div className="px-5 py-4 border-b border-navy-100/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-3"><Type className="w-5 h-5 text-navy-500" /><span className="text-sm font-medium text-dark">Text Size</span></span>
                  <span className="text-xs font-medium text-muted">{fontPct}%</span>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => update("fontSize", Math.max(-2, settings.fontSize - 1))} disabled={settings.fontSize <= -2} className="p-2 rounded-lg bg-navy-50 hover:bg-navy-100 disabled:opacity-40 transition-colors" aria-label="Decrease text size"><Minus className="w-4 h-4 text-dark" /></button>
                  <div className="flex-1 h-2 bg-navy-100 rounded-full overflow-hidden"><div className="h-full bg-navy-500 rounded-full transition-all duration-200" style={{ width: `${((settings.fontSize + 2) / 6) * 100}%` }} /></div>
                  <button onClick={() => update("fontSize", Math.min(4, settings.fontSize + 1))} disabled={settings.fontSize >= 4} className="p-2 rounded-lg bg-navy-50 hover:bg-navy-100 disabled:opacity-40 transition-colors" aria-label="Increase text size"><Plus className="w-4 h-4 text-dark" /></button>
                </div>
              </div>
              <ToggleRow icon={Contrast} label="High Contrast" checked={settings.highContrast} onToggle={() => update("highContrast", !settings.highContrast)} />
              <ToggleRow icon={Eye} label="Grayscale" checked={settings.grayscale} onToggle={() => update("grayscale", !settings.grayscale)} />
              <ToggleRow icon={LinkIcon} label="Highlight Links" checked={settings.highlightLinks} onToggle={() => update("highlightLinks", !settings.highlightLinks)} />
              <ToggleRow icon={MousePointer2} label="Big Cursor" checked={settings.bigCursor} onToggle={() => update("bigCursor", !settings.bigCursor)} />
              <div className="px-5 py-5">
                <button onClick={resetAll} disabled={!hasChanges} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-navy-200 text-navy-600 font-medium hover:bg-navy-50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors text-sm">
                  <RotateCcw className="w-4 h-4" />Reset All Settings
                </button>
              </div>
              <div className="px-5 pb-5">
                <p className="text-xs text-muted leading-relaxed">Settings are saved and will persist across visits. If you experience any issues, please <a href="/contact" className="text-navy-600 underline underline-offset-2 hover:text-navy-700">contact us</a>.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
