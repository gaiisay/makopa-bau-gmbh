import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = createMetadata(pageSeo.datenschutz);

export default function DatenschutzPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground">
          Datenschutzerklärung
        </h1>
        <div className="space-y-5 text-muted-foreground">
          <p>
            Diese Seite wird derzeit inhaltlich vorbereitet. Die finale
            Datenschutzerklärung wird hier kurzfristig ergänzt.
          </p>
          <p>
            Bis dahin erreichen Sie uns bei Fragen zum Datenschutz unter
            kontakt@makopa.de oder telefonisch unter +49 (0) 2238 9356034.
          </p>
          <p>
            Sobald die vollständigen Inhalte vorliegen, wird diese Platzhalter-
            Seite ersetzt und zur Indexierung freigegeben.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/kontakt"
            className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </main>
  );
}