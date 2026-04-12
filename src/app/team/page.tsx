"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Users,
  Award,
  Star,
  Mail,
  Phone,
  ArrowRight,
  GraduationCap,
  Scale,
  Rocket,
} from "lucide-react";

/* ─── Colors ──────────────────────────────────────────────────── */
const NAVY = "#0C2340";
const NAVY_LIGHT = "#143054";
const TEAL = "#0097A7";
const TEAL_LIGHT = "#00ACC1";
const TEAL_PALE = "#E0F7FA";
const OFF_WHITE = "#F8FAFC";

/* ─── Data ────────────────────────────────────────────────────── */

const leadership = [
  {
    name: "Marcus Kowalski",
    position: "Geschäftsführer",
    description:
      "Mit über 20 Jahren Erfahrung im Bauwesen leitet Marcus das Unternehmen mit Leidenschaft und Expertise.",
    specialties: ["Unternehmensführung", "Projektleitung", "Kundenberatung"],
    image: "👨‍💼",
  },
  {
    name: "Petra Müller",
    position: "Prokuristin & Teamleitung",
    description:
      "Petra koordiniert unsere Teams und sorgt für reibungslose Projektabläufe in allen Geschäftsbereichen.",
    specialties: ["Teamführung", "Qualitätssicherung", "Projektmanagement"],
    image: "👩‍💼",
  },
];

const departments = [
  {
    title: "Logistik-Team",
    description:
      "Unser Logistik-Team sorgt für pünktliche und zuverlässige Lieferungen.",
    teamSize: "8 Mitarbeiter",
    expertise: ["Transportplanung", "Baustellenlogistik", "Materialhandling"],
    lead: "Stefan Weber",
  },
  {
    title: "Gala Bau Team",
    description:
      "Kreative Gartengestalter und erfahrene Landschaftsbauer für Ihre Projekte.",
    teamSize: "12 Mitarbeiter",
    expertise: ["Gartengestaltung", "Pflasterarbeiten", "Bepflanzung"],
    lead: "Andrea Schmidt",
  },
  {
    title: "Heizungstechnik",
    description:
      "Zertifizierte Heizungsinstallateure für moderne und effiziente Lösungen.",
    teamSize: "6 Mitarbeiter",
    expertise: ["Installation", "Wartung", "Modernisierung"],
    lead: "Thomas Fischer",
  },
  {
    title: "Abbruch & Umbau",
    description:
      "Spezialisierte Fachkräfte für sichere Abbruch- und Umbauarbeiten.",
    teamSize: "10 Mitarbeiter",
    expertise: ["Abbrucharbeiten", "Kernsanierung", "Umbauten"],
    lead: "Michael Bauer",
  },
];

const values = [
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Gemeinsam erreichen wir mehr - in jedem Projekt setzen wir auf starke Zusammenarbeit.",
  },
  {
    icon: Award,
    title: "Qualität",
    description:
      "Wir streben nach höchster Qualität in allem was wir tun - das ist unser Anspruch.",
  },
  {
    icon: Star,
    title: "Innovation",
    description:
      "Moderne Techniken und innovative Lösungen halten uns an der Spitze unserer Branche.",
  },
];

const stats = [
  {
    number: "36+",
    label: "Erfahrene Mitarbeiter",
    description: "In allen Bereichen",
  },
  {
    number: "15+",
    label: "Jahre Erfahrung",
    description: "Am Markt etabliert",
  },
  {
    number: "500+",
    label: "Zufriedene Kunden",
    description: "Vertrauen uns",
  },
  {
    number: "1000+",
    label: "Abgeschlossene Projekte",
    description: "Erfolgreich realisiert",
  },
];

const careerPerks = [
  {
    icon: GraduationCap,
    title: "Weiterbildung",
    description: "Regelmäßige Schulungen und Zertifizierungen",
  },
  {
    icon: Scale,
    title: "Work-Life-Balance",
    description: "Flexible Arbeitszeiten und faire Bezahlung",
  },
  {
    icon: Rocket,
    title: "Aufstiegschancen",
    description: "Karrieremöglichkeiten in allen Bereichen",
  },
];

/* ─── Page ────────────────────────────────────────────────────── */

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: NAVY }}
      >
        {/* Geometric bg pattern */}
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
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
            >
              <Users className="h-4 w-4" style={{ color: TEAL_LIGHT }} />
              <span className="text-xs font-medium text-white/70">
                Team & Mitarbeiter
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
            >
              Unser{" "}
              <span style={{ color: TEAL_LIGHT }}>Team.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              Lernen Sie die Menschen kennen, die Makopa Bau GmbH zu dem machen,
              was wir sind — ein zuverlässiger Partner mit Leidenschaft für das
              Handwerk.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                style={{
                  backgroundColor: TEAL,
                  boxShadow: "0 10px 30px -5px rgba(0,151,167,0.3)",
                }}
              >
                Teil unseres Teams werden
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#geschaeftsfuehrung"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                Team kennenlernen
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section
        id="geschaeftsfuehrung"
        className="py-20 md:py-28"
        style={{ backgroundColor: OFF_WHITE }}
      >
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
              Geschäftsführung
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Unsere Geschäftsführung
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Mit Erfahrung, Leidenschaft und Vision führen wir das Unternehmen
              in die Zukunft.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {leadership.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-7 text-center transition-all hover:shadow-xl hover:shadow-slate-200/50"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 right-0 left-0 h-1"
                  style={{ backgroundColor: TEAL }}
                />
                <div className="mb-4 text-6xl">{leader.image}</div>
                <h3
                  className="mb-1 text-2xl font-bold"
                  style={{ color: NAVY }}
                >
                  {leader.name}
                </h3>
                <p
                  className="mb-4 text-sm font-semibold"
                  style={{ color: TEAL }}
                >
                  {leader.position}
                </p>
                <p className="mb-5 text-sm leading-relaxed text-slate-500">
                  {leader.description}
                </p>
                <div>
                  <h4
                    className="mb-3 text-sm font-semibold"
                    style={{ color: NAVY }}
                  >
                    Schwerpunkte:
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {leader.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: TEAL_PALE,
                          color: TEAL,
                        }}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Departments ── */}
      <section className="bg-white py-20 md:py-28">
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
              Fachbereiche
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Unsere Fachbereiche
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Erfahrene Spezialisten in allen Bereichen unserer Tätigkeit sorgen
              für erstklassige Ergebnisse.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-7 transition-all hover:shadow-xl hover:shadow-slate-200/50"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 right-0 left-0 h-1"
                  style={{ backgroundColor: TEAL }}
                />
                <div className="mb-1 flex items-start justify-between">
                  <h3
                    className="text-lg font-bold"
                    style={{ color: NAVY }}
                  >
                    {dept.title}
                  </h3>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: TEAL_PALE,
                      color: TEAL,
                    }}
                  >
                    {dept.teamSize}
                  </span>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-slate-500">
                  {dept.description}
                </p>
                <div className="mb-4">
                  <h4
                    className="mb-2 text-sm font-semibold"
                    style={{ color: NAVY }}
                  >
                    Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-sm text-slate-500">
                    <span className="font-semibold" style={{ color: NAVY }}>
                      Teamleitung:
                    </span>{" "}
                    {dept.lead}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: OFF_WHITE }}
      >
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
              Werte
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Unsere Werte
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Diese Prinzipien leiten uns in unserer täglichen Arbeit und im
              Umgang miteinander.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: TEAL_PALE }}
                  >
                    <Icon className="h-6 w-6" style={{ color: TEAL }} />
                  </div>
                  <h3
                    className="mb-2 text-lg font-bold"
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
      </section>

      {/* ── Stats ── */}
      <section className="bg-white py-20 md:py-28">
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
              Zahlen & Fakten
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Makopa Bau in Zahlen
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Unsere Erfolgsgeschichte in Zahlen zeigt, warum Kunden uns
              vertrauen.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
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
                  className="mb-2 text-4xl font-bold"
                  style={{ color: TEAL }}
                >
                  {stat.number}
                </div>
                <div
                  className="mb-1 text-sm font-semibold"
                  style={{ color: NAVY }}
                >
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Career ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: OFF_WHITE }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-slate-200/80"
            style={{ backgroundColor: TEAL_PALE }}
          >
            <div className="p-8 md:p-12">
              <div className="mb-10 text-center">
                <span
                  className="mb-3 inline-block text-sm font-semibold tracking-wider uppercase"
                  style={{ color: TEAL }}
                >
                  Karriere
                </span>
                <h2
                  className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
                  style={{ color: NAVY }}
                >
                  Karriere bei Makopa Bau
                </h2>
                <p className="mx-auto max-w-2xl text-slate-500">
                  Werden Sie Teil unseres Teams und gestalten Sie die Zukunft des
                  Handwerks mit uns.
                </p>
              </div>

              <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {careerPerks.map((perk, i) => {
                  const Icon = perk.icon;
                  return (
                    <motion.div
                      key={perk.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="rounded-xl bg-white p-6 text-center shadow-sm"
                    >
                      <div
                        className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{ backgroundColor: TEAL_PALE }}
                      >
                        <Icon className="h-5 w-5" style={{ color: TEAL }} />
                      </div>
                      <div
                        className="mb-1 font-semibold"
                        style={{ color: NAVY }}
                      >
                        {perk.title}
                      </div>
                      <div className="text-sm text-slate-500">
                        {perk.description}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="text-center">
                <p className="mb-5 text-slate-500">
                  Interessiert an einer Karriere bei uns? Wir freuen uns auf Ihre
                  Bewerbung!
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                    style={{
                      backgroundColor: TEAL,
                      boxShadow: "0 10px 30px -5px rgba(0,151,167,0.3)",
                    }}
                  >
                    Initiativbewerbung senden
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="mailto:jobs@makopa-bau.de"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition-all hover:border-slate-400 hover:bg-slate-50"
                  >
                    <Mail className="h-4 w-4" />
                    jobs@makopa-bau.de
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: NAVY }}
      >
        {/* Geometric bg pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
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

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <span
              className="mb-3 inline-block text-sm font-semibold tracking-wider uppercase"
              style={{ color: TEAL_LIGHT }}
            >
              Kontakt
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Lernen Sie uns persönlich kennen
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
              Vereinbaren Sie einen Termin für ein persönliches Gespräch. Wir
              freuen uns darauf, Sie kennenzulernen und Ihr Projekt zu besprechen.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                style={{
                  backgroundColor: TEAL,
                  boxShadow: "0 10px 30px -5px rgba(0,151,167,0.3)",
                }}
              >
                Termin vereinbaren
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="tel:+491234567890"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Direkt anrufen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
