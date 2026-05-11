import type { Metadata } from "next";
import type { ReactNode } from "react";
import { StructuredData } from "@/components/structured-data";
import { createBreadcrumbSchema, createMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = createMetadata(pageSeo.impressum);

export default function ImpressumLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Impressum", path: pageSeo.impressum.path },
        ])}
      />
      {children}
    </>
  );
}