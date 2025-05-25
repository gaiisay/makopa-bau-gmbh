import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Makopa Bau GmbH - Ihr zuverlässiger Partner im Handwerk",
  description:
    "Makopa Bau GmbH bietet professionelle Dienstleistungen in den Bereichen Logistik, Gala Bau, Heizung, Abbruch und Umbau. Für Privatkunden, Architekten und Großkunden.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable}`}>
      <body className="bg-background min-h-screen">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
