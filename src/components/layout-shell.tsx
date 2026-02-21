"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const DESIGN_ROUTES = ["/1", "/2", "/3", "/4", "/5"];

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDesignPage = DESIGN_ROUTES.includes(pathname);

  if (isDesignPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
