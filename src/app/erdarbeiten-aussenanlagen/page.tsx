"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  TreePine,
  Shovel,
  Droplets,
  LayoutGrid,
  Sprout,
  MapPin,
  Layers,
  RotateCcw,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

/* ─── Colors ──────────────────────────────────────────────────── */
const NAVY = "#1A3A63";
const NAVY_LIGHT = "#224B7A";
const TEAL = "#0097A7";

/* ─── Data ────────────────────────────────────────────────────── */

const services = [
  {
    title: "Erdarbeiten & Baugruben",
    icon: Shovel,
    description:
      "Wir schaffen die Grundlage für Ihr Bauvorhaben.",
    features: [
      "Fachgerechter Aushub von Baugruben und Gräben",
      "Herstellung von tragfähigem Planum",
      "Verfüllung und Verdichtung nach technischen Vorgaben",
      "Umgang mit Bodenmaterialien inkl. Wiederverwendung & Entsorgung",
    ],
  },
  {
    title: "Grundstücksentwässerung & Kanalanschlüsse",
    icon: Droplets,
    description:
      "Sichere und normgerechte Entwässerung für Ihr Grundstück.",
    features: [
      "Verlegung von Regen- und Abwasserleitungen",
      "Herstellung von Hausanschlüssen auf dem Baugrundstück",
      "Einbau von Kontroll- und Revisionsschächten",
      "Abstimmung mit Versorgern und Umsetzung gemäß Vorgaben",
    ],
  },
  {
    title: "Bauliche Erschließung von Grundstücken",
    icon: MapPin,
    description:
      "Wir machen Ihr Grundstück baureif.",
    features: [
      "Herstellung von Baustraßen und Zufahrten",
      "Vorbereitung von Leitungsführungen",
      "Geländeprofilierung und Flächenaufbau",
      "Schaffung aller Voraussetzungen für den Bauablauf",
    ],
  },
  {
    title: "Tragschichten & Unterbau",
    icon: Layers,
    description:
      "Die Basis für langlebige Außenflächen.",
    features: [
      "Einbau von Frostschutz- und Tragschichten",
      "Herstellung von Bettungen für Pflaster und Platten",
      "Profilgerechte Verdichtung nach Normen und Vorgaben",
    ],
  },
  {
    title: "Pflasterarbeiten & Außenflächen",
    icon: LayoutGrid,
    description:
      "Funktionalität trifft auf saubere Optik und dauerhaft nutzbare Flächen.",
    features: [
      "Pflaster- und Plattenarbeiten (Beton, Naturstein, Keramik)",
      "Herstellung von Einfahrten, Wegen und Terrassen",
      "Einfassungen mit Bord- und Kantensteinen",
      "Stellplätze und Sonderflächen (z. B. Rasenwaben)",
    ],
  },
  {
    title: "Pflanzarbeiten & Begrünung",
    icon: Sprout,
    description:
      "Begrünte Außenflächen für einen stimmigen und funktionalen Abschluss.",
    features: [
      "Pflanzarbeiten für Beete, Grünstreifen und Eingangsbereiche",
      "Rasenflächen, Einsaaten und vorbereitende Bodenarbeiten",
      "Strukturierte Begrünung passend zu Nutzung und Pflegeaufwand",
    ],
  },
  {
    title: "Wiederherstellung & Anpassungsarbeiten",
    icon: RotateCcw,
    description:
      "Wir bringen alles wieder in Form.",
    features: [
      "Wiederherstellung bestehender Flächen",
      "Anpassung an vorhandene Höhen und Übergänge",
      "Saubere Einbindung in den Bestand",
    ],
  },
];

const advantages = [
  {
    title: "Ganzheitliche Umsetzung",
    description: "Statt Schnittstellenchaos — alles aus einer Hand.",
  },
  {
    title: "Technisch saubere Ausführung",
    description: "Normgerecht und nach aktuellen Standards.",
  },
  {
    title: "Praxiserprobte Lösungen",
    description: "Direkt aus dem Baualltag, verlässlich und effizient.",
  },
  {
    title: "Zusammenarbeit auf Augenhöhe",
    description: "Partnerschaftlich, transparent und verbindlich.",
  },
];

/* ─── Page ────────────────────────────────────────────────────── */

export default function GalaBauPage() {
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
              Erdarbeiten & Außenanlagen
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-4 text-lg font-semibold text-primary sm:text-xl"
            >
              Ganzheitliche Lösungen für Ihr Bauprojekt
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              Ob eigenständige Erdarbeiten, Pflasterarbeiten oder komplette
              Außenanlagen: Wir realisieren Ihr Projekt strukturiert,
              zuverlässig und technisch durchdacht. Von der Baugrube bis zur
              fertigen Oberfläche und Begrünung.
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
                Projekt anfragen
                <ArrowRight className="h-4 w-4" />
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

      {/* ── Services ── */}
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
              Von Erdarbeiten und Entwässerung über Pflasterarbeiten bis zu
              Pflanzarbeiten und Außenflächen: Alle Leistungen aus einer Hand,
              abgestimmt auf Ihr Projekt.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white p-6 transition-all hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="absolute top-0 right-0 left-0 h-1 bg-primary transition-all group-hover:h-1.5" />
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-1.5 text-base font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-auto space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs text-slate-500"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Warum Makopa ── */}
      <section
        className="relative overflow-hidden py-20"
        style={{ backgroundColor: NAVY }}
      >
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
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
            className="mb-12"
          >
            <h2 className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
              Unser Anspruch
            </h2>
            <p className="max-w-2xl text-2xl font-bold text-white md:text-3xl">
              Bauen mit System.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
              Wir arbeiten marktorientiert, kompetent und partnerschaftlich — mit
              einem klaren Fokus auf Qualität und nachhaltige Lösungen. Dabei
              behalten wir stets das Gesamtbild im Blick.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-border bg-white py-20 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--primary) 1.2px, transparent 1.2px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

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
              Sie planen ein Bauvorhaben oder möchten Ihre Außenanlagen
              neugestalten? Sprechen Sie uns an — wir begleiten Ihr Projekt von
              Anfang an.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:brightness-110"
              >
                Kostenlose Beratung anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+4922389356034"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-primary/5"
              >
                <Phone className="h-4 w-4 text-primary" />
                +49 (0) 2238 9356034
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
