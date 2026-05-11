import type { Metadata } from "next";
import type { ReactNode } from "react";
import { StructuredData } from "@/components/structured-data";
import {
  createBreadcrumbSchema,
  createMetadata,
  pageSeo,
  serviceSchemas,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata(pageSeo.vermietung);

export default function VermietungLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <StructuredData
        data={[
          createBreadcrumbSchema([
            { name: "Startseite", path: "/" },
            {
              name: "Baustellenservices & Vermietung",
              path: pageSeo.vermietung.path,
            },
          ]),
          serviceSchemas.vermietung,
        ]}
      />
      {children}
    </>
  );
}