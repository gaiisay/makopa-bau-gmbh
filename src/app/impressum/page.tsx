"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

/* ─── Colors ──────────────────────────────────────────────────── */
const NAVY = "#1A3A63";
const NAVY_LIGHT = "#224B7A";

/* ─── Page ────────────────────────────────────────────────────── */

export default function ImpressumPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: NAVY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_LIGHT} 50%, ${NAVY} 100%)`,
            opacity: 0.85,
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Impressum
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-10"
          >
            {/* Angaben gemäß § 5 TMG */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-1 text-muted-foreground">
                <p className="font-semibold text-foreground">
                  Makopa Bau GmbH
                </p>
                <p>Wolfhelmstr. 36</p>
                <p>50259 Pulheim</p>
              </div>
            </div>

            {/* Vertreten durch */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">
                Vertreten durch
              </h2>
              <div className="space-y-1 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">
                    Geschäftsführer:
                  </span>{" "}
                  Marc Berger, Johannes Bruns
                </p>
              </div>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">
                Kontakt
              </h2>
              <div className="space-y-1 text-muted-foreground">
                <p>
                  Telefon:{" "}
                  <a
                    href="tel:+4922389356034"
                    className="text-primary hover:underline"
                  >
                    +49 (0) 2238 9356034
                  </a>
                </p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:kontakt@makopa-bau.de"
                    className="text-primary hover:underline"
                  >
                    kontakt@makopa-bau.de
                  </a>
                </p>
              </div>
            </div>

            {/* Registereintrag */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">
                Registereintrag
              </h2>
              <div className="space-y-1 text-muted-foreground">
                <p>Eintragung im Handelsregister</p>
                <p>
                  <span className="font-medium text-foreground">
                    Registergericht:
                  </span>{" "}
                  Amtsgericht Köln
                </p>
                <p>
                  <span className="font-medium text-foreground">
                    Handelsregisternummer:
                  </span>{" "}
                  HRB 103782
                </p>
              </div>
            </div>

            {/* Umsatzsteuer */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">
                Umsatzsteuer
              </h2>
              <div className="space-y-1 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">
                    Steuer-Nr.:
                  </span>{" "}
                  203/5765/1787
                </p>
                <p>
                  <span className="font-medium text-foreground">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                    Umsatzsteuergesetz:
                  </span>{" "}
                  DE336459536
                </p>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">
                Haftung für Inhalte
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab
                dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">
                Haftung für Links
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
                der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">
                Urheberrecht
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>

            {/* Back link */}
            <div className="border-t border-border pt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Zurück zur Startseite
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
