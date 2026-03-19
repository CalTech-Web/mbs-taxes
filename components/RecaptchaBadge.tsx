import { Shield } from "lucide-react";

export default function RecaptchaBadge() {
  return (
    <div className="flex items-start gap-2 text-xs text-muted leading-relaxed">
      <Shield className="w-4 h-4 shrink-0 mt-0.5 text-gray-400" />
      <p>
        This site is protected by reCAPTCHA and the Google{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy-500 hover:underline"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy-500 hover:underline"
        >
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </div>
  );
}
