"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Truck,
  TreePine,
  Flame,
  Hammer,
  Users,
  Award,
  Clock,
  Shield,
  Phone,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Building,
} from "lucide-react";

/* ─── Data ────────────────────────────────────────────────────── */

const businessAreas = [
  {
    title: "Logistik",
    description:
      "Professionelle Transport- und Logistiklösungen für Bauprojekte aller Größenordnungen.",
    icon: Truck,
    href: "/logistik",
    stat: "200+",
    statLabel: "Projekte",
  },
  {
    title: "Gala Bau",
    description:
      "Gestaltung und Pflege von Außenanlagen, Gärten und öffentlichen Bereichen.",
    icon: TreePine,
    href: "/gala-bau",
    stat: "150+",
    statLabel: "Gärten",
  },
  {
    title: "Heizung",
    description:
      "Installation, Wartung und Modernisierung von Heizungsanlagen.",
    icon: Flame,
    href: "/heizung",
    stat: "300+",
    statLabel: "Anlagen",
  },
  {
    title: "Abbruch & Umbau",
    description: "Fachgerechter Abbruch und professionelle Umbauarbeiten.",
    icon: Hammer,
    href: "/abbruch-umbau",
    stat: "350+",
    statLabel: "Umbauten",
  },
];

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "36+", label: "Mitarbeiter" },
  { value: "500+", label: "Zufriedene Kunden" },
  { value: "1000+", label: "Projekte abgeschlossen" },
];

const values = [
  {
    icon: Award,
    title: "Qualität",
    description:
      "Höchste Qualitätsstandards in allen Bereichen unserer Arbeit.",
  },
  {
    icon: Clock,
    title: "Zuverlässigkeit",
    description: "Pünktliche und termingerechte Ausführung aller Aufträge.",
  },
  {
    icon: Shield,
    title: "Sicherheit",
    description: "Konsequente Einhaltung aller Sicherheitsvorschriften.",
  },
  {
    icon: Users,
    title: "Erfahrung",
    description: "Über 15 Jahre langjährige Expertise im Handwerk.",
  },
];

/* ─── Colors ──────────────────────────────────────────────────── */
const NAVY = "#0C2340";
const NAVY_LIGHT = "#143054";
const TEAL = "#0097A7";
const TEAL_LIGHT = "#00ACC1";
const TEAL_PALE = "#E0F7FA";
const OFF_WHITE = "#F8FAFC";

/* ─── Page ────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: NAVY }}
      >
        {/* Subtle geometric bg */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(30deg, ${TEAL} 12%, transparent 12.5%, transparent 87%, ${TEAL} 87.5%, ${TEAL}),
              linear-gradient(150deg, ${TEAL} 12%, transparent 12.5%, transparent 87%, ${TEAL} 87.5%, ${TEAL}),
              linear-gradient(30deg, ${TEAL} 12%, transparent 12.5%, transparent 87%, ${TEAL} 87.5%, ${TEAL}),
              linear-gradient(150deg, ${TEAL} 12%, transparent 12.5%, transparent 87%, ${TEAL} 87.5%, ${TEAL}),
              linear-gradient(60deg, rgba(0,151,167,0.3) 25%, transparent 25.5%, transparent 75%, rgba(0,151,167,0.3) 75%, rgba(0,151,167,0.3)),
              linear-gradient(60deg, rgba(0,151,167,0.3) 25%, transparent 25.5%, transparent 75%, rgba(0,151,167,0.3) 75%, rgba(0,151,167,0.3))
            `,
            backgroundSize: "80px 140px",
            backgroundPosition:
              "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
          }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_LIGHT} 50%, ${NAVY} 100%)`,
            opacity: 0.85,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-36">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
              >
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: TEAL_LIGHT }}
                />
                <span className="text-xs font-medium text-white/70">
                  Seit über 15 Jahren Ihr zuverlässiger Partner
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
              >
                Kompetenz im Handwerk.{" "}
                <span style={{ color: TEAL_LIGHT }}>Vertrauen im Detail.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 max-w-lg text-lg leading-relaxed text-slate-300"
              >
                Makopa Bau GmbH vereint vier Geschäftsbereiche unter einem Dach
                — für nahtlose Handwerksleistungen von der Planung bis zur
                Fertigstellung.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                  style={{
                    backgroundColor: TEAL,
                    boxShadow: `0 10px 30px -5px rgba(0,151,167,0.3)`,
                  }}
                >
                  Kontakt aufnehmen
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#leistungen"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  Unsere Leistungen
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-12 flex flex-wrap gap-6"
              >
                {["DIN ISO 9001", "Meisterbetrieb", "Familienunternehmen"].map(
                  (badge) => (
                    <div
                      key={badge}
                      className="flex items-center gap-2 text-sm text-slate-400"
                    >
                      <CheckCircle2
                        className="h-4 w-4"
                        style={{ color: TEAL_LIGHT }}
                      />
                      {badge}
                    </div>
                  ),
                )}
              </motion.div>
            </div>

            {/* Hero image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{ backgroundColor: NAVY_LIGHT }}
              >
                <div
                  className="absolute top-0 right-0 h-24 w-24"
                  style={{
                    background: `linear-gradient(225deg, ${TEAL} 0%, transparent 70%)`,
                    opacity: 0.5,
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Building className="mb-3 h-16 w-16 text-white/10" />
                  <p className="text-xs font-medium tracking-wider text-white/20 uppercase">
                    Projektbild
                  </p>
                </div>
                <div
                  className="absolute right-0 bottom-0 left-0 h-1.5"
                  style={{ backgroundColor: TEAL }}
                />
              </div>

              <div className="absolute -right-4 -bottom-6 rounded-xl border border-slate-100 bg-white p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{ backgroundColor: TEAL_PALE }}
                  >
                    <Shield className="h-5 w-5" style={{ color: TEAL }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: NAVY }}>
                      1000+ Projekte
                    </p>
                    <p className="text-xs text-slate-400">
                      erfolgreich abgeschlossen
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        className="border-b border-slate-100"
        style={{ backgroundColor: OFF_WHITE }}
      >
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-3xl font-bold md:text-4xl"
                  style={{ color: TEAL }}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Business Areas ── */}
      <section id="leistungen" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span
              className="mb-3 inline-block text-sm font-semibold tracking-wider uppercase"
              style={{ color: TEAL }}
            >
              Geschäftsbereiche
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Unsere Leistungen im Überblick
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Vier Fachbereiche. Ein Ansprechpartner. Wir koordinieren alle
              Gewerke für Ihr Bauprojekt — effizient und aus einer Hand.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {businessAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={area.href}
                    className="group relative block h-full overflow-hidden rounded-xl border border-slate-200/80 bg-white p-7 transition-all hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
                  >
                    <div
                      className="absolute top-0 right-0 left-0 h-1 transition-all group-hover:h-1.5"
                      style={{ backgroundColor: TEAL }}
                    />
                    <div
                      className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl"
                      style={{ backgroundColor: TEAL_PALE }}
                    >
                      <Icon className="h-6 w-6" style={{ color: TEAL }} />
                    </div>
                    <h3
                      className="mb-2 text-lg font-bold"
                      style={{ color: NAVY }}
                    >
                      {area.title}
                    </h3>
                    <p
                      className="mb-1 text-xs font-semibold"
                      style={{ color: TEAL }}
                    >
                      {area.stat} {area.statLabel}
                    </p>
                    <p className="mb-5 text-sm leading-relaxed text-slate-500">
                      {area.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
                      style={{ color: TEAL }}
                    >
                      Mehr erfahren
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About / Values ── */}
      <section
        style={{ backgroundColor: OFF_WHITE }}
        className="py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="mb-3 inline-block text-sm font-semibold tracking-wider uppercase"
                style={{ color: TEAL }}
              >
                Über uns
              </span>
              <h2
                className="mb-5 text-3xl font-bold tracking-tight md:text-4xl"
                style={{ color: NAVY }}
              >
                Tradition trifft auf moderne Kompetenz
              </h2>
              <p className="mb-6 leading-relaxed text-slate-500">
                Als Familienunternehmen mit über 15 Jahren Erfahrung stehen wir
                für handwerkliche Exzellenz und persönliche Betreuung. Unser
                Team aus 36 engagierten Fachkräften realisiert Projekte mit
                höchster Präzision und Leidenschaft.
              </p>
              <p className="mb-8 leading-relaxed text-slate-500">
                Wir begleiten Sie von der ersten Beratung bis zur finalen
                Abnahme — transparent, termingerecht und in bewährter Qualität.
              </p>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                style={{ color: TEAL }}
              >
                Unser Team kennenlernen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="rounded-xl border border-slate-200/80 bg-white p-6"
                  >
                    <div
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg"
                      style={{ backgroundColor: TEAL_PALE }}
                    >
                      <Icon className="h-5 w-5" style={{ color: TEAL }} />
                    </div>
                    <h3
                      className="mb-1.5 text-sm font-bold"
                      style={{ color: NAVY }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ backgroundColor: NAVY }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${TEAL} 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, ${TEAL} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="mb-4 inline-block text-sm font-semibold tracking-wider uppercase"
              style={{ color: TEAL_LIGHT }}
            >
              Kontakt
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Lassen Sie uns über Ihr Projekt sprechen
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
              Kontaktieren Sie uns für eine kostenlose und unverbindliche
              Beratung. Wir freuen uns auf Ihre Anfrage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                style={{
                  backgroundColor: TEAL,
                  boxShadow: `0 10px 30px -5px rgba(0,151,167,0.4)`,
                }}
              >
                Kostenlose Beratung anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+491234567890"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                +49 (0) 123 456789
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
