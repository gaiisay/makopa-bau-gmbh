"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily: "'Source Sans 3', 'Segoe UI', system-ui, sans-serif",
        color: "#1E293B",
      }}
    >
      <a
        href="#main-content"
        className="sr-only absolute top-4 left-4 z-[60] rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow focus:not-sr-only"
      >
        Zum Inhalt springen
      </a>
      <Navigation />
      <div id="main-content" className="pt-[104px]" tabIndex={-1}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
