import type { Metadata } from "next";
import type { ReactNode } from "react";
import { StructuredData } from "@/components/structured-data";
import {
  createBreadcrumbSchema,
  createMetadata,
  pageSeo,
  serviceSchemas,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata(pageSeo.spezialloesungenAbbruch);

export default function SpezialloesungenLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <StructuredData
        data={[
          createBreadcrumbSchema([
            { name: "Startseite", path: "/" },
            {
              name: "Abbruch & Speziallösungen",
              path: pageSeo.spezialloesungenAbbruch.path,
            },
          ]),
          serviceSchemas.spezialloesungenAbbruch,
        ]}
      />
      {children}
    </>
  );
}