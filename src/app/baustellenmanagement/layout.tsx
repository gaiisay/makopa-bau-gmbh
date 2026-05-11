import type { Metadata } from "next";
import type { ReactNode } from "react";
import { StructuredData } from "@/components/structured-data";
import {
  createBreadcrumbSchema,
  createMetadata,
  pageSeo,
  serviceSchemas,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata(pageSeo.baustellenmanagement);

export default function BaustellenmanagementLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <StructuredData
        data={[
          createBreadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Baustellenmanagement", path: pageSeo.baustellenmanagement.path },
          ]),
          serviceSchemas.baustellenmanagement,
        ]}
      />
      {children}
    </>
  );
}