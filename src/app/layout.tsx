import "@/styles/globals.css";

import { type Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { LayoutShell } from "@/components/layout-shell";

export const metadata: Metadata = {
  title: "Makopa Bau GmbH - Ihr zuverlässiger Partner im Handwerk",
  description:
    "Makopa Bau GmbH bietet professionelle Dienstleistungen in den Bereichen Logistik, Gala Bau, Heizung, Abbruch und Umbau. Für Privatkunden, Architekten und Großkunden.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${sourceSans.variable}`}>
      <body className="min-h-screen bg-white">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
