import type { Metadata } from "next";
import { HomePageContent } from "@/app/home-page-content";
import { createMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = createMetadata(pageSeo.home);

export default function HomePage() {
  return <HomePageContent />;
}
