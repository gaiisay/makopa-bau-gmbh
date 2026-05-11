import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = createMetadata(pageSeo.agb);

export default function AgbPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground">
          Allgemeine Geschäftsbedingungen
        </h1>
        <div className="space-y-5 text-muted-foreground">
          <p>
            Diese Seite wird derzeit inhaltlich vorbereitet. Die vollständigen
            Allgemeinen Geschäftsbedingungen werden hier zeitnah ergänzt.
          </p>
          <p>
            Wenn Sie vorab Informationen zu Abläufen, Angeboten oder Leistungen
            benötigen, sprechen Sie uns bitte direkt an.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/kontakt"
            className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Anfrage stellen
          </Link>
        </div>
      </section>
    </main>
  );
}