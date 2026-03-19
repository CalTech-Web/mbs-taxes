"use client";

import { useEffect, useCallback } from "react";

const SITE_KEY = "6LeXrzAqAAAAAK7fNqFWySSdi6-ZtsPUa4eT_l_A";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

let scriptLoaded = false;

function loadScript() {
  if (scriptLoaded) return;
  if (document.querySelector(`script[src*="recaptcha/api.js"]`)) {
    scriptLoaded = true;
    return;
  }
  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
  script.async = true;
  document.head.appendChild(script);
  scriptLoaded = true;
}

export function useRecaptcha() {
  useEffect(() => {
    loadScript();
  }, []);

  const executeRecaptcha = useCallback(
    async (action: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        if (!window.grecaptcha) {
          reject(new Error("reCAPTCHA not loaded"));
          return;
        }
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(SITE_KEY, {
              action,
            });
            resolve(token);
          } catch (err) {
            reject(err);
          }
        });
      });
    },
    []
  );

  return { executeRecaptcha };
}
