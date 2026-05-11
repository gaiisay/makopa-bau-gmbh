import type { Metadata } from "next";
import type { ReactNode } from "react";
import { StructuredData } from "@/components/structured-data";
import {
  createBreadcrumbSchema,
  createMetadata,
  pageSeo,
  serviceSchemas,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata(pageSeo.erdarbeitenAussenanlagen);

export default function ErdarbeitenLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <StructuredData
        data={[
          createBreadcrumbSchema([
            { name: "Startseite", path: "/" },
            {
              name: "Erdarbeiten & Außenanlagen",
              path: pageSeo.erdarbeitenAussenanlagen.path,
            },
          ]),
          serviceSchemas.erdarbeitenAussenanlagen,
        ]}
      />
      {children}
    </>
  );
}