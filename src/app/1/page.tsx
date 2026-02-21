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
} from "lucide-react";
import { useState } from "react";

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

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "36+", label: "Mitarbeiter" },
  { value: "500+", label: "Zufriedene Kunden" },
  { value: "1000+", label: "Projekte abgeschlossen" },
];

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/1" },
    { name: "Logistik", href: "/logistik" },
    { name: "Gala Bau", href: "/gala-bau" },
    { name: "Heizung", href: "/heizung" },
    { name: "Abbruch & Umbau", href: "/abbruch-umbau" },
    { name: "Team", href: "/team" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="bg-amber-600 text-white">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs tracking-wide">
          <div className="flex items-center gap-5">
            <a
              href="tel:+49123456789"
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Phone className="h-3 w-3" />
              +49 (0) 123 456789
            </a>
            <a
              href="mailto:info@makopa-bau.de"
              className="hidden items-center gap-1.5 transition-opacity hover:opacity-80 md:flex"
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
      <div className="border-b border-stone-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/1" className="flex items-baseline gap-1">
            <span className="text-2xl font-extrabold tracking-tight text-stone-900">
              MAKOPA
            </span>
            <span className="text-sm font-medium tracking-widest text-amber-600">
              BAU
            </span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="rounded-md bg-amber-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
            >
              Angebot anfordern
            </Link>
          </nav>
          <button
            className="md:hidden"
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
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-stone-200 bg-white px-6 py-4 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2.5 text-sm font-medium text-stone-700"
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

export default function DesignOne() {
  return (
    <div
      className="min-h-screen bg-stone-50 text-stone-900"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[100px]">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-amber-50/40 to-stone-100" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="mb-4 inline-block rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-amber-700 uppercase">
                  Seit über 15 Jahren
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl"
              >
                Ihr zuverlässiger Partner für alle{" "}
                <span className="text-amber-600">Handwerksleistungen</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 max-w-lg text-lg leading-relaxed text-stone-500"
              >
                Von der Logistik bis zum Umbau — wir bieten Ihnen umfassende
                Handwerksleistungen aus einer Hand. Qualität, die überzeugt.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-600/25 transition-all hover:bg-amber-700 hover:shadow-xl hover:shadow-amber-600/30"
                >
                  Kontakt aufnehmen
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#leistungen"
                  className="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition-all hover:border-stone-400 hover:bg-stone-50"
                >
                  Unsere Leistungen
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-stone-200 to-stone-300 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Hammer className="mx-auto mb-3 h-16 w-16 text-stone-400" />
                    <p className="text-sm text-stone-400">Projektbild</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <Shield className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-900">
                      Zertifiziert
                    </p>
                    <p className="text-xs text-stone-500">DIN ISO 9001</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
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
                <div className="text-3xl font-extrabold text-amber-600 md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-stone-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section id="leistungen" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-3 inline-block text-sm font-semibold tracking-wider text-amber-600 uppercase">
              Geschäftsbereiche
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Unsere Leistungen
            </h2>
            <p className="mx-auto max-w-2xl text-stone-500">
              Von der Logistik bis zum Umbau — wir bieten Ihnen umfassende
              Handwerksleistungen aus einer Hand.
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
                    className="group block h-full rounded-xl border border-stone-200 bg-white p-6 transition-all hover:border-amber-200 hover:shadow-lg hover:shadow-amber-600/5"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50 transition-colors group-hover:bg-amber-100">
                        <Icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <span className="text-2xl font-extrabold text-stone-200 transition-colors group-hover:text-amber-200">
                        {area.stat}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-stone-900">
                      {area.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-stone-500">
                      {area.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-all group-hover:gap-2">
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

      {/* Values */}
      <section className="bg-stone-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-3 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">
              Unsere Werte
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Warum Makopa Bau?
            </h2>
            <p className="mx-auto max-w-2xl text-stone-400">
              Unsere Werte und Prinzipien, die uns zu Ihrem vertrauenswürdigen
              Partner machen.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-stone-700 bg-stone-800">
                    <Icon className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-amber-600 py-20 md:py-24">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-amber-100">
              Kontaktieren Sie uns für eine kostenlose Beratung und ein
              unverbindliches Angebot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3 text-sm font-bold text-amber-700 shadow-lg transition-all hover:bg-stone-50"
              >
                Jetzt Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+491234567890"
                className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Direkt anrufen
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-baseline gap-1">
                <span className="text-xl font-extrabold text-white">
                  MAKOPA
                </span>
                <span className="text-xs font-medium tracking-widest text-amber-500">
                  BAU
                </span>
              </div>
              <p className="mb-5 text-sm leading-relaxed">
                Ihr zuverlässiger Partner im Handwerk. Seit über 15 Jahren
                setzen wir auf Qualität und Kundenzufriedenheit.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-amber-500" />
                  Musterstraße 123, 12345 Musterstadt
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-amber-500" />
                  +49 (0) 123 456789
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-amber-500" />
                  info@makopa-bau.de
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
                Geschäftsbereiche
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/logistik"
                    className="transition-colors hover:text-amber-500"
                  >
                    Logistik
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gala-bau"
                    className="transition-colors hover:text-amber-500"
                  >
                    Gala Bau
                  </Link>
                </li>
                <li>
                  <Link
                    href="/heizung"
                    className="transition-colors hover:text-amber-500"
                  >
                    Heizung
                  </Link>
                </li>
                <li>
                  <Link
                    href="/abbruch-umbau"
                    className="transition-colors hover:text-amber-500"
                  >
                    Abbruch & Umbau
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
                Schnellzugriff
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/team"
                    className="transition-colors hover:text-amber-500"
                  >
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="transition-colors hover:text-amber-500"
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impressum"
                    className="transition-colors hover:text-amber-500"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datenschutz"
                    className="transition-colors hover:text-amber-500"
                  >
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
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
                <div className="mt-4 rounded-md bg-stone-800 p-3 text-center">
                  <span className="text-sm font-semibold text-amber-500">
                    Notdienst 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-stone-500 md:flex-row">
            <span>
              &copy; {new Date().getFullYear()} Makopa Bau GmbH. Alle Rechte
              vorbehalten.
            </span>
            <div className="flex gap-6">
              <Link href="/impressum" className="hover:text-stone-300">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-stone-300">
                Datenschutz
              </Link>
              <Link href="/agb" className="hover:text-stone-300">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
