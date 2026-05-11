"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  HardHat,
  TreePine,
  Wrench,
  Warehouse,
  Shield,
  Phone,
  ChevronRight,
  ArrowRight,
  Shovel,
  Droplets,
  LayoutGrid,
  Hammer,
  Trash2,
  Lightbulb,
  Truck,
  ClipboardCheck,
  Ruler,
  KeyRound,
  Sprout,
} from "lucide-react";

const businessAreas = [
  {
    title: "Baustellenmanagement",
    description:
      "Von der Organisation über die Logistik bis zur Schnittstellenkoordination für einen reibungslosen Bauablauf.",
    icon: HardHat,
    href: "/baustellenmanagement",
    highlights: [
      { icon: ClipboardCheck, text: "Baustellenorganisation" },
      { icon: Truck, text: "Logistik & Materialfluss" },
      { icon: Shield, text: "Arbeitsschutz & Sicherheit" },
    ],
  },
  {
    title: "Erdarbeiten & Außenanlagen",
    description:
      "Ob reine Erdarbeiten, Entwässerung, Pflasterarbeiten, Pflanzarbeiten oder komplette Außenanlagen: Wir setzen Ihr Projekt aus einer Hand um.",
    icon: TreePine,
    href: "/erdarbeiten-aussenanlagen",
    highlights: [
      { icon: Shovel, text: "Erdarbeiten & Baugruben" },
      { icon: LayoutGrid, text: "Pflasterarbeiten & Wege" },
      { icon: Sprout, text: "Pflanzarbeiten & Begrünung" },
    ],
  },
  {
    title: "Abbruch & Speziallösungen",
    description:
      "Strukturierter Rückbau, sichere Entkernung und individuelle Sonderlösungen für anspruchsvolle Bauprojekte.",
    icon: Wrench,
    href: "/spezialloesungen-abbruch",
    highlights: [
      { icon: Hammer, text: "Rückbau & Entkernung" },
      { icon: Trash2, text: "Schadstoffsanierung" },
      { icon: Lightbulb, text: "Individuelle Speziallösungen" },
    ],
  },
  {
    title: "Baustellenservices & Vermietung",
    description:
      "Baustelleneinrichtung, Genehmigungen, Hilfskonstruktionen und ausgewählte Geräte für strukturierte Projektabläufe.",
    icon: Warehouse,
    href: "/vermietung",
    highlights: [
      { icon: KeyRound, text: "BE-Vermietung & Einrichtung" },
      { icon: Ruler, text: "Vermessungskonstruktionen" },
      { icon: ClipboardCheck, text: "Genehmigungsmanagement" },
    ],
  },
];

const stats = [
  { value: "9", label: "Mitarbeiter" },
  { value: "18", label: "Projekte abgeschlossen (seit Mai 2024)" },
  { value: "11+", label: "Premium Partner" },
];

const NAVY = "#1A3A63";
const NAVY_LIGHT = "#224B7A";
const TEAL = "#0097A7";

export function HomePageContent() {
  return (
    <main>
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
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
              className="mb-10 h-0.5 w-16 origin-center bg-primary"
            />

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-5xl leading-[1.08] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Bauen mit <span className="text-primary">Zukunft</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6 text-xl font-semibold tracking-[0.15em] text-white/90 uppercase sm:text-2xl"
            >
              <span className="text-primary/80">Ma</span>rktorientiert{" "}
              <span className="mx-2 inline-block h-1 w-1 rounded-full bg-primary/60 align-middle" />{" "}
              <span className="text-primary/80">Ko</span>mpetent{" "}
              <span className="mx-2 inline-block h-1 w-1 rounded-full bg-primary/60 align-middle" />{" "}
              <span className="text-primary/80">Pa</span>rtnerschaftlich
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
            >
              Makopa Bau GmbH vereint vier Geschäftsbereiche unter einem Dach
              für nahtlose Handwerksleistungen von der Planung bis zur
              Fertigstellung.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:brightness-110"
              >
                Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#leistungen"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                Unsere Leistungen
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Unsere Leistungen im Überblick
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Vier Fachbereiche. Ein Ansprechpartner. Wir koordinieren alle
              Gewerke für Ihr Bauprojekt effizient und aus einer Hand.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {businessAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={area.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white p-6 transition-all hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
                  >
                    <div className="absolute top-0 right-0 left-0 h-1 bg-primary transition-all group-hover:h-1.5" />

                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="mb-1.5 text-base font-bold text-foreground">
                      {area.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {area.description}
                    </p>

                    <div className="space-y-1.5">
                      {area.highlights.map((highlight) => {
                        const HighlightIcon = highlight.icon;
                        return (
                          <div
                            key={highlight.text}
                            className="flex items-center gap-2 text-xs text-slate-500"
                          >
                            <HighlightIcon
                              className="h-3.5 w-3.5 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            <span>{highlight.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-primary transition-all group-hover:gap-2">
                      Mehr erfahren
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20" style={{ backgroundColor: NAVY }}>
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-175 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
          style={{
            background: `radial-gradient(ellipse, ${TEAL} 0%, transparent 70%)`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="mb-3 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Über uns
            </h2>
          </motion.div>

          <div className="grid items-start gap-14 lg:grid-cols-[1fr,22rem]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mb-5 text-lg leading-relaxed text-slate-300">
                Wir sind die Makopa Bau GmbH, ein marktorientiertes
                Bauunternehmen mit klarem Fokus auf Qualität, Effizienz und
                nachhaltige Lösungen. Unser Leistungsspektrum umfasst:
              </p>
              <ul className="mb-6 space-y-2 text-slate-300">
                <li>
                  <Link
                    href="/baustellenmanagement"
                    className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-primary"
                  >
                    <ChevronRight className="h-4 w-4 text-primary" aria-hidden="true" />
                    Baustellenmanagement
                  </Link>
                </li>
                <li>
                  <Link
                    href="/erdarbeiten-aussenanlagen"
                    className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-primary"
                  >
                    <ChevronRight className="h-4 w-4 text-primary" aria-hidden="true" />
                    Erdarbeiten, Pflasterarbeiten & Außenanlagen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/spezialloesungen-abbruch"
                    className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-primary"
                  >
                    <ChevronRight className="h-4 w-4 text-primary" aria-hidden="true" />
                    Speziallösungen &amp; Abbruch
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vermietung"
                    className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-primary"
                  >
                    <ChevronRight className="h-4 w-4 text-primary" aria-hidden="true" />
                    Baustellenservices &amp; Vermietung
                  </Link>
                </li>
              </ul>
              <p className="mb-5 leading-relaxed text-slate-300">
                Als kompetenter Partner begleiten wir unsere Kunden von der
                ersten Idee bis zur fertigen Umsetzung. Dabei legen wir großen
                Wert auf transparente Abläufe, wirtschaftlich durchdachte
                Lösungen und eine saubere, präzise Ausführung auf der Baustelle.
              </p>
              <p className="mb-5 leading-relaxed text-slate-300">
                Gerade im Bereich Erdarbeiten realisieren wir sowohl komplette
                Außenanlagen als auch eigenständige Leistungen wie Baugruben,
                Entwässerung, Pflasterarbeiten, Wegebau, Terrassenbau und
                Pflanzarbeiten.
              </p>
              <p className="mb-8 border-l-2 border-primary/40 pl-5 leading-relaxed text-slate-400 italic">
                Unser Anspruch ist es, nicht nur Projekte umzusetzen, sondern
                Werte zu schaffen im Sinne von: Bauen mit Zukunft.
              </p>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Unser Team kennenlernen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border bg-white py-20 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--primary) 1.2px, transparent 1.2px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-150 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Kontakt
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Lassen Sie uns über Ihr Projekt sprechen
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
              Kontaktieren Sie uns für eine kostenlose und unverbindliche
              Beratung. Wir freuen uns auf Ihre Anfrage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:brightness-110"
              >
                Kostenlose Beratung anfragen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="tel:+4922389356034"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-primary/5"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                +49 (0) 2238 9356034
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}