import ScrollReveal from "./ScrollReveal";
import { highlightText } from "@/lib/highlightText";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  highlights?: string[];
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  highlights,
  description,
  align = "center",
  light = false,
}: SectionTitleProps) {
  return (
    <ScrollReveal
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <div className={`flex items-center gap-3 mb-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-gold-400 rounded-full" />
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-400">
            {subtitle}
          </span>
          <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent to-gold-400 rounded-full" />
        </div>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight title-underline relative pb-4 ${
          align === "left" ? "title-underline-left" : ""
        } ${light ? "text-white" : "text-dark"}`}
      >
        {highlights && highlights.length > 0 ? highlightText(title, highlights, light ? "light" : "dark") : title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/90" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
