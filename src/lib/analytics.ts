import { measurementId } from "./analytics-config";

export type StatisticsConsent = "accepted" | "denied";
export const CONSENT_KEY = "scg-statistics-consent";
export const CONSENT_EVENT = "scg-statistics-consent-change";
export const SETTINGS_EVENT = "scg-cookie-settings";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;
let lastPath: string | undefined;
let storageFailed = false;
let currentConsent: StatisticsConsent | null = null;

export function readConsent(): StatisticsConsent | null {
  if (storageFailed) return currentConsent;
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored === "accepted" || stored === "denied" ? stored : null;
  } catch {
    return currentConsent;
  }
}

export function saveConsent(consent: StatisticsConsent) {
  currentConsent = consent;
  try {
    localStorage.setItem(CONSENT_KEY, consent);
  } catch {
    storageFailed = true;
  }
  if (consent === "denied") {
    // Google's documented opt-out flag stops collection immediately.
    Object.assign(window, { [`ga-disable-${measurementId}`]: true });
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.trim().split("=")[0];
      if (name !== "_ga" && !name.startsWith("_ga_")) return;
      const expiration = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      document.cookie = expiration;
      const parts = window.location.hostname.split(".");
      for (let i = 0; i < parts.length - 1; i++) {
        document.cookie = `${expiration}; domain=.${parts.slice(i).join(".")}`;
      }
    });
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
  // Remove the already-loaded Google code when permission is withdrawn.
  if (consent === "denied" && initialized) window.location.reload();
}

export function trackPage(pathname: string) {
  if (readConsent() !== "accepted" || !/^G-[A-Z0-9]+$/.test(measurementId)) return;
  if (!initialized) {
    Object.assign(window, { [`ga-disable-${measurementId}`]: false });
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (..._args: unknown[]) {
      // gtag.js expects an Arguments object rather than an array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("set", "developer_id.dZjgwMW", true);
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      // Prevent automatic collection of form fields and URL query parameters.
      ignore_referrer: true,
      page_location: window.location.origin + pathname,
      page_referrer: "",
    });
    const script = document.createElement("script");
    script.id = "scg-google-analytics";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    initialized = true;
  }
  if (pathname === lastPath) return;
  window.gtag?.("event", "page_view", {
    page_path: pathname,
    page_location: window.location.origin + pathname,
    page_title: "Shirzad Consulting Group",
    page_referrer: "",
  });
  lastPath = pathname;
}