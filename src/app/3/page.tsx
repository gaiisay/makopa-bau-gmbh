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
  Mail,
  MapPin,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Building,
} from "lucide-react";
import { useState } from "react";

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

/* ─── Navigation ──────────────────────────────────────────────── */
function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/3" },
    { name: "Logistik", href: "/logistik" },
    { name: "Gala Bau", href: "/gala-bau" },
    { name: "Heizung", href: "/heizung" },
    { name: "Abbruch & Umbau", href: "/abbruch-umbau" },
    { name: "Team", href: "/team" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      {/* Top bar — navy */}
      <div style={{ backgroundColor: NAVY }} className="text-white/80">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs">
          <div className="flex items-center gap-6">
            <a
              href="tel:+49123456789"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3" />
              +49 (0) 123 456789
            </a>
            <a
              href="mailto:info@makopa-bau.de"
              className="hidden items-center gap-1.5 transition-colors hover:text-white md:flex"
            >
              <Mail className="h-3 w-3" />
              info@makopa-bau.de
            </a>
          </div>
          <div className="hidden items-center gap-1.5 md:flex">
            <MapPin className="h-3 w-3" />
            Musterstraße 123, 12345 Musterstadt
          </div>
        </div>
      </div>

      {/* Main nav — white, clean */}
      <div className="border-b border-slate-200/60 bg-white/98 backdrop-blur-lg">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6">
          <Link href="/3" className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ backgroundColor: TEAL }}
            >
              <Building className="h-5 w-5 text-white" />
            </div>
            <div>
              <span
                className="block text-xl font-bold tracking-tight"
                style={{ color: NAVY }}
              >
                Makopa Bau
              </span>
              <span className="block text-[10px] font-medium tracking-widest text-slate-400 uppercase">
                GmbH
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="ml-3 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: TEAL }}
            >
              Angebot anfordern
            </Link>
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-slate-200 bg-white px-6 py-4 lg:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2.5 text-sm font-medium text-slate-600"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function DesignThree() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily: "'Source Sans 3', 'Segoe UI', system-ui, sans-serif",
        color: "#1E293B",
      }}
    >
      <Navigation />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[108px]"
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
                {/* Teal accent corner */}
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
                {/* Bottom accent bar */}
                <div
                  className="absolute right-0 bottom-0 left-0 h-1.5"
                  style={{ backgroundColor: TEAL }}
                />
              </div>

              {/* Floating stats card */}
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
                    {/* Top accent line */}
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
            {/* Left — text */}
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

            {/* Right — values grid */}
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
        {/* Geometric subtle pattern */}
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

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#0A1F38" }} className="text-slate-400">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Company */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ backgroundColor: TEAL }}
                >
                  <Building className="h-4.5 w-4.5 text-white" />
                </div>
                <div>
                  <span className="block text-lg font-bold text-white">
                    Makopa Bau
                  </span>
                  <span className="block text-[10px] font-medium tracking-widest text-slate-500 uppercase">
                    GmbH
                  </span>
                </div>
              </div>
              <p className="mb-5 text-sm leading-relaxed">
                Ihr zuverlässiger Partner im Handwerk. Seit über 15 Jahren
                setzen wir auf Qualität und Kundenzufriedenheit.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" style={{ color: TEAL }} />
                  Musterstraße 123, 12345 Musterstadt
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" style={{ color: TEAL }} />
                  +49 (0) 123 456789
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" style={{ color: TEAL }} />
                  info@makopa-bau.de
                </div>
              </div>
            </div>

            {/* Business areas */}
            <div>
              <h4
                className="mb-4 text-sm font-bold tracking-wider uppercase"
                style={{ color: TEAL_LIGHT }}
              >
                Geschäftsbereiche
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/logistik"
                    className="transition-colors hover:text-white"
                  >
                    Logistik
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gala-bau"
                    className="transition-colors hover:text-white"
                  >
                    Gala Bau
                  </Link>
                </li>
                <li>
                  <Link
                    href="/heizung"
                    className="transition-colors hover:text-white"
                  >
                    Heizung
                  </Link>
                </li>
                <li>
                  <Link
                    href="/abbruch-umbau"
                    className="transition-colors hover:text-white"
                  >
                    Abbruch & Umbau
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h4
                className="mb-4 text-sm font-bold tracking-wider uppercase"
                style={{ color: TEAL_LIGHT }}
              >
                Schnellzugriff
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/team"
                    className="transition-colors hover:text-white"
                  >
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="transition-colors hover:text-white"
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impressum"
                    className="transition-colors hover:text-white"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datenschutz"
                    className="transition-colors hover:text-white"
                  >
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4
                className="mb-4 text-sm font-bold tracking-wider uppercase"
                style={{ color: TEAL_LIGHT }}
              >
                Öffnungszeiten
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Mo – Fr:</span>
                  <span>07:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag:</span>
                  <span>08:00 – 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag:</span>
                  <span>Geschlossen</span>
                </div>
                <div
                  className="mt-4 rounded-lg p-3 text-center"
                  style={{ backgroundColor: NAVY_LIGHT }}
                >
                  <span
                    className="text-sm font-semibold"
                    style={{ color: TEAL_LIGHT }}
                  >
                    Notdienst 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-500 md:flex-row">
            <span>
              &copy; {new Date().getFullYear()} Makopa Bau GmbH. Alle Rechte
              vorbehalten.
            </span>
            <div className="flex gap-6">
              <Link href="/impressum" className="hover:text-slate-300">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-slate-300">
                Datenschutz
              </Link>
              <Link href="/agb" className="hover:text-slate-300">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
