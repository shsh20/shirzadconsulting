import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { CONSENT_EVENT, SETTINGS_EVENT, readConsent, saveConsent, trackPage, type StatisticsConsent as Consent } from "@/lib/analytics";

const StatisticsConsent = () => {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const [consent, setConsent] = useState(readConsent);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const update = () => setConsent(readConsent());
    const open = () => setSettingsOpen(true);
    const sync = () => {
      update();
      if (readConsent() !== "accepted" && document.getElementById("scg-google-analytics")) window.location.reload();
    };
    window.addEventListener(CONSENT_EVENT, update);
    window.addEventListener(SETTINGS_EVENT, open);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CONSENT_EVENT, update);
      window.removeEventListener(SETTINGS_EVENT, open);
      window.removeEventListener("storage", sync);
    };
  }, []);

  useEffect(() => {
    if (consent === "accepted") trackPage(pathname);
  }, [consent, pathname]);

  const choose = (choice: Consent) => {
    setSettingsOpen(false);
    saveConsent(choice);
  };

  if (consent !== null && !settingsOpen) return null;

  return (
    <section aria-label={t("cookies.title")} className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-card text-card-foreground px-6 py-5 md:px-12">
      <div className="container-narrow flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-lg mb-2">{t("cookies.title")}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{t("cookies.description")}</p>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm underline underline-offset-4">{t("cookies.googlePrivacy")}</a>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Button variant="outline" onClick={() => choose("denied")}>{t("cookies.deny")}</Button>
          <Button variant="outline" onClick={() => choose("accepted")}>{t("cookies.accept")}</Button>
          {settingsOpen && consent !== null && <Button variant="ghost" onClick={() => setSettingsOpen(false)}>{t("cookies.close")}</Button>}
        </div>
      </div>
    </section>
  );
};

export default StatisticsConsent;