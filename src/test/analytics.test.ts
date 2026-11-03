import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/analytics-config", () => ({ measurementId: "G-TEST123" }));

describe("statistics consent", () => {
  beforeEach(() => {
    vi.resetModules();
    localStorage.clear();
    document.getElementById("scg-google-analytics")?.remove();
    delete window.gtag;
    delete window.dataLayer;
  });

  it("does not contact Google before a visitor makes a choice", async () => {
    const { trackPage } = await import("@/lib/analytics");
    trackPage("/om-bolaget");
    expect(document.getElementById("scg-google-analytics")).toBeNull();
    expect(window.dataLayer).toBeUndefined();
  });

  it("does not collect statistics after a visitor declines", async () => {
    const { saveConsent, trackPage, readConsent } = await import("@/lib/analytics");
    saveConsent("denied");
    trackPage("/kontakt");
    expect(readConsent()).toBe("denied");
    expect(document.getElementById("scg-google-analytics")).toBeNull();
  });

  it("loads once after acceptance and tracks each different page without query parameters", async () => {
    const { saveConsent, trackPage } = await import("@/lib/analytics");
    saveConsent("accepted");
    history.replaceState(null, "", "/kontakt?email=private@example.com");
    trackPage("/kontakt");
    trackPage("/kontakt");
    trackPage("/tjanster");
    expect(document.querySelectorAll("#scg-google-analytics")).toHaveLength(1);
    const commands = (window.dataLayer ?? []).map((item) => Array.from(item as ArrayLike<unknown>));
    const pages = commands.filter((command) => command[0] === "event" && command[1] === "page_view");
    expect(pages).toHaveLength(2);
    expect(pages[0][2]).toMatchObject({ page_path: "/kontakt", page_location: window.location.origin + "/kontakt" });
    expect(pages[1][2]).toMatchObject({ page_path: "/tjanster" });
    expect(JSON.stringify(commands)).not.toContain("private@example.com");
  });
});