import { ReactNode } from "react";

export function highlightText(
  text: string,
  highlights: string[],
  variant: "dark" | "light" = "dark"
): ReactNode {
  if (!highlights || highlights.length === 0) return text;

  const className = variant === "light" ? "soft-highlight-light" : "soft-highlight";

  const escaped = highlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) => {
    const isHighlight = highlights.some(
      (h) => h.toLowerCase() === part.toLowerCase()
    );
    if (isHighlight) {
      return (
        <span key={i} className={className}>
          {part}
        </span>
      );
    }
    return part;
  });
}
