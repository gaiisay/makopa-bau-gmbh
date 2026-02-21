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
  HardHat,
  Wrench,
  Building2,
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
  { value: "15+", label: "Jahre Erfahrung", icon: Clock },
  { value: "36+", label: "Mitarbeiter", icon: Users },
  { value: "500+", label: "Zufriedene Kunden", icon: Award },
  { value: "1000+", label: "Projekte", icon: Building2 },
];

const values = [
  {
    icon: Award,
    title: "Qualität",
    description: "Höchste Qualitätsstandards in allen Bereichen",
  },
  {
    icon: Clock,
    title: "Zuverlässigkeit",
    description: "Pünktliche und termingerechte Ausführung",
  },
  {
    icon: Shield,
    title: "Sicherheit",
    description: "Einhaltung aller Sicherheitsvorschriften",
  },
  {
    icon: Users,
    title: "Erfahrung",
    description: "Langjährige Expertise im Handwerk",
  },
];

/* ─── Colors ──────────────────────────────────────────────────── */
const YELLOW = "#FFD000";
const YELLOW_DARK = "#E6BB00";
const CHARCOAL = "#1A1A1A";
const CHARCOAL_LIGHT = "#2A2A2A";
const WARM_GRAY = "#F5F3EF";

/* ─── Diagonal stripe background ─────────────────────────────── */
const diagonalStripes = `repeating-linear-gradient(
  -45deg,
  transparent,
  transparent 10px,
  rgba(255,208,0,0.04) 10px,
  rgba(255,208,0,0.04) 20px
)`;

/* ─── Navigation ──────────────────────────────────────────────── */
function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/2" },
    { name: "Logistik", href: "/logistik" },
    { name: "Gala Bau", href: "/gala-bau" },
    { name: "Heizung", href: "/heizung" },
    { name: "Abbruch & Umbau", href: "/abbruch-umbau" },
    { name: "Team", href: "/team" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      {/* Top utility bar */}
      <div style={{ backgroundColor: CHARCOAL }} className="text-white">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs tracking-wide">
          <div className="flex items-center gap-5">
            <a
              href="tel:+49123456789"
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Phone className="h-3 w-3" style={{ color: YELLOW }} />
              +49 (0) 123 456789
            </a>
            <a
              href="mailto:info@makopa-bau.de"
              className="hidden items-center gap-1.5 transition-opacity hover:opacity-80 md:flex"
            >
              <Mail className="h-3 w-3" style={{ color: YELLOW }} />
              info@makopa-bau.de
            </a>
          </div>
          <div className="hidden items-center gap-1.5 md:flex">
            <MapPin className="h-3 w-3" style={{ color: YELLOW }} />
            Musterstraße 123, 12345 Musterstadt
          </div>
        </div>
      </div>

      {/* Main nav with yellow accent line */}
      <div
        className="border-b-4 bg-white/95 backdrop-blur-md"
        style={{ borderBottomColor: YELLOW }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/2" className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center"
              style={{ backgroundColor: YELLOW }}
            >
              <HardHat className="h-5 w-5" style={{ color: CHARCOAL }} />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-lg font-black tracking-tight uppercase"
                style={{ color: CHARCOAL }}
              >
                Makopa
              </span>
              <span
                className="text-[10px] font-bold tracking-[0.3em] uppercase"
                style={{ color: YELLOW_DARK }}
              >
                Bau GmbH
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-semibold tracking-wide uppercase transition-colors"
                style={{ color: "#555" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = CHARCOAL)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="ml-3 px-5 py-2.5 text-sm font-bold tracking-wide text-black uppercase transition-all hover:brightness-90"
              style={{ backgroundColor: YELLOW }}
            >
              Angebot anfordern
            </Link>
          </nav>
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b-4 bg-white px-6 py-4 lg:hidden"
          style={{ borderBottomColor: YELLOW }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2.5 text-sm font-semibold tracking-wide text-gray-700 uppercase"
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
export default function DesignTwo() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        backgroundColor: WARM_GRAY,
        color: CHARCOAL,
      }}
    >
      <Navigation />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[100px]"
        style={{ backgroundColor: CHARCOAL }}
      >
        {/* Diagonal stripes bg */}
        <div
          className="absolute inset-0"
          style={{ background: diagonalStripes }}
        />
        {/* Yellow corner accent */}
        <div
          className="absolute -top-20 -right-20 h-80 w-80 rotate-45 opacity-10"
          style={{ backgroundColor: YELLOW }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex items-center gap-3"
              >
                <div
                  className="h-[3px] w-10"
                  style={{ backgroundColor: YELLOW }}
                />
                <span
                  className="text-xs font-bold tracking-[0.25em] uppercase"
                  style={{ color: YELLOW }}
                >
                  Seit über 15 Jahren
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 text-4xl leading-[1.05] font-black tracking-tight text-white uppercase sm:text-5xl lg:text-6xl"
              >
                Wir bauen <span style={{ color: YELLOW }}>Ihre Zukunft.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-10 max-w-md text-lg leading-relaxed text-gray-400"
              >
                Professionelle Handwerksleistungen aus einer Hand — von der
                Logistik bis zum Abbruch und Umbau. Zuverlässig. Kompetent.
                Termingerecht.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold tracking-wide text-black uppercase transition-all hover:brightness-90"
                  style={{ backgroundColor: YELLOW }}
                >
                  Jetzt anfragen
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#leistungen"
                  className="inline-flex items-center gap-2 border-2 border-gray-600 px-7 py-3.5 text-sm font-bold tracking-wide text-gray-300 uppercase transition-all hover:border-gray-400 hover:text-white"
                >
                  Unsere Leistungen
                </Link>
              </motion.div>
            </div>

            {/* Hero visual — industrial placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ backgroundColor: CHARCOAL_LIGHT }}
              >
                {/* Hazard stripe top */}
                <div
                  className="absolute top-0 right-0 left-0 h-3"
                  style={{
                    background: `repeating-linear-gradient(90deg, ${YELLOW} 0px, ${YELLOW} 20px, ${CHARCOAL} 20px, ${CHARCOAL} 40px)`,
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Wrench
                    className="mb-3 h-20 w-20"
                    style={{ color: YELLOW, opacity: 0.3 }}
                  />
                  <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                    Bauprojekt
                  </p>
                </div>
                {/* Hazard stripe bottom */}
                <div
                  className="absolute right-0 bottom-0 left-0 h-3"
                  style={{
                    background: `repeating-linear-gradient(90deg, ${YELLOW} 0px, ${YELLOW} 20px, ${CHARCOAL} 20px, ${CHARCOAL} 40px)`,
                  }}
                />
              </div>
              {/* Floating certification badge */}
              <div
                className="absolute -bottom-5 -left-5 flex items-center gap-3 p-4 shadow-2xl"
                style={{ backgroundColor: YELLOW }}
              >
                <Shield className="h-8 w-8" style={{ color: CHARCOAL }} />
                <div>
                  <p
                    className="text-sm font-black uppercase"
                    style={{ color: CHARCOAL }}
                  >
                    Zertifiziert
                  </p>
                  <p className="text-xs font-semibold opacity-70">
                    DIN ISO 9001
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Angled section divider */}
        <div
          className="relative -mb-px h-16"
          style={{
            clipPath: "polygon(0 0, 100% 60%, 100% 100%, 0% 100%)",
            backgroundColor: WARM_GRAY,
          }}
        />
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ backgroundColor: WARM_GRAY }}>
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center"
                    style={{ backgroundColor: YELLOW }}
                  >
                    <Icon className="h-6 w-6" style={{ color: CHARCOAL }} />
                  </div>
                  <div>
                    <div
                      className="text-2xl font-black md:text-3xl"
                      style={{ color: CHARCOAL }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Business Areas ── */}
      <section
        id="leistungen"
        className="py-20 md:py-28"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="h-[3px] w-10"
                style={{ backgroundColor: YELLOW }}
              />
              <span
                className="text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: YELLOW_DARK }}
              >
                Geschäftsbereiche
              </span>
            </div>
            <h2
              className="mb-4 text-3xl font-black tracking-tight uppercase md:text-4xl"
              style={{ color: CHARCOAL }}
            >
              Unsere Leistungen
            </h2>
            <p className="max-w-xl text-gray-500">
              Von der Logistik bis zum Umbau — wir bieten Ihnen umfassende
              Handwerksleistungen aus einer Hand.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
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
                    className="group relative block overflow-hidden border-l-4 bg-gray-50 p-8 transition-all hover:bg-gray-100"
                    style={{ borderLeftColor: YELLOW }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-4 flex items-center gap-4">
                          <div
                            className="flex h-12 w-12 items-center justify-center"
                            style={{ backgroundColor: YELLOW }}
                          >
                            <Icon
                              className="h-6 w-6"
                              style={{ color: CHARCOAL }}
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-black tracking-wide uppercase">
                              {area.title}
                            </h3>
                            <span
                              className="text-xs font-bold"
                              style={{ color: YELLOW_DARK }}
                            >
                              {area.stat} {area.statLabel}
                            </span>
                          </div>
                        </div>
                        <p className="mb-4 text-sm leading-relaxed text-gray-500">
                          {area.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-bold tracking-wide uppercase transition-all group-hover:gap-2">
                          Mehr erfahren
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                      {/* Large faded stat */}
                      <span className="hidden text-7xl font-black text-gray-100 transition-colors group-hover:text-yellow-100 sm:block">
                        {area.stat}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div
          className="absolute inset-0"
          style={{ background: diagonalStripes }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <div
                className="h-[3px] w-10"
                style={{ backgroundColor: YELLOW }}
              />
              <span
                className="text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: YELLOW }}
              >
                Unsere Werte
              </span>
              <div
                className="h-[3px] w-10"
                style={{ backgroundColor: YELLOW }}
              />
            </div>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-white uppercase md:text-4xl">
              Warum Makopa Bau?
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Unsere Werte und Prinzipien, die uns zu Ihrem vertrauenswürdigen
              Partner machen.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-gray-700/50 p-7 text-center transition-all hover:border-yellow-500/30"
                  style={{ backgroundColor: CHARCOAL_LIGHT }}
                >
                  <div
                    className="mx-auto mb-5 flex h-14 w-14 items-center justify-center"
                    style={{ backgroundColor: YELLOW }}
                  >
                    <Icon className="h-6 w-6" style={{ color: CHARCOAL }} />
                  </div>
                  <h3 className="mb-2 text-base font-black tracking-wide text-white uppercase">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ backgroundColor: YELLOW }}
      >
        {/* Hazard pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              ${CHARCOAL} 0px,
              ${CHARCOAL} 15px,
              transparent 15px,
              transparent 30px
            )`,
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <HardHat
              className="mx-auto mb-6 h-12 w-12"
              style={{ color: CHARCOAL, opacity: 0.3 }}
            />
            <h2
              className="mb-4 text-3xl font-black tracking-tight uppercase md:text-4xl"
              style={{ color: CHARCOAL }}
            >
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p
              className="mx-auto mb-10 max-w-2xl text-lg"
              style={{ color: "rgba(0,0,0,0.6)" }}
            >
              Kontaktieren Sie uns für eine kostenlose Beratung und ein
              unverbindliches Angebot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition-all hover:opacity-90"
                style={{ backgroundColor: CHARCOAL }}
              >
                Jetzt Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+491234567890"
                className="inline-flex items-center gap-2 border-2 px-8 py-3.5 text-sm font-bold tracking-wide uppercase transition-all hover:bg-black/10"
                style={{ borderColor: CHARCOAL, color: CHARCOAL }}
              >
                <Phone className="h-4 w-4" />
                Direkt anrufen
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: CHARCOAL }} className="text-gray-400">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Company */}
            <div>
              <div className="mb-5 flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center"
                  style={{ backgroundColor: YELLOW }}
                >
                  <HardHat className="h-4 w-4" style={{ color: CHARCOAL }} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-base font-black text-white uppercase">
                    Makopa
                  </span>
                  <span
                    className="text-[9px] font-bold tracking-[0.25em] uppercase"
                    style={{ color: YELLOW }}
                  >
                    Bau GmbH
                  </span>
                </div>
              </div>
              <p className="mb-5 text-sm leading-relaxed">
                Ihr zuverlässiger Partner im Handwerk. Seit über 15 Jahren
                setzen wir auf Qualität und Kundenzufriedenheit.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" style={{ color: YELLOW }} />
                  Musterstraße 123, 12345 Musterstadt
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" style={{ color: YELLOW }} />
                  +49 (0) 123 456789
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" style={{ color: YELLOW }} />
                  info@makopa-bau.de
                </div>
              </div>
            </div>

            {/* Business areas */}
            <div>
              <h4
                className="mb-4 text-sm font-black tracking-wider uppercase"
                style={{ color: YELLOW }}
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
                className="mb-4 text-sm font-black tracking-wider uppercase"
                style={{ color: YELLOW }}
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
                className="mb-4 text-sm font-black tracking-wider uppercase"
                style={{ color: YELLOW }}
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
                  className="mt-4 p-3 text-center"
                  style={{ backgroundColor: CHARCOAL_LIGHT }}
                >
                  <span
                    className="text-sm font-black uppercase"
                    style={{ color: YELLOW }}
                  >
                    Notdienst 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${CHARCOAL_LIGHT}` }}>
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row">
            <span>
              &copy; {new Date().getFullYear()} Makopa Bau GmbH. Alle Rechte
              vorbehalten.
            </span>
            <div className="flex gap-6">
              <Link href="/impressum" className="hover:text-gray-300">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-gray-300">
                Datenschutz
              </Link>
              <Link href="/agb" className="hover:text-gray-300">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
