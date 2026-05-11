import type { Metadata } from "next";
import type { ReactNode } from "react";
import { StructuredData } from "@/components/structured-data";
import {
  contactPageSchema,
  createBreadcrumbSchema,
  createMetadata,
  pageSeo,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata(pageSeo.kontakt);

export default function KontaktLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <StructuredData
        data={[
          createBreadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Kontakt", path: pageSeo.kontakt.path },
          ]),
          contactPageSchema,
        ]}
      />
      {children}
    </>
  );
}