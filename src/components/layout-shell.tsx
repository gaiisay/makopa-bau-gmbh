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
      <Navigation />
      <div className="pt-[104px]">{children}</div>
      <Footer />
    </div>
  );
}
