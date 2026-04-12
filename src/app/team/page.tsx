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
  CheckCircle2,
} from "lucide-react";

/* ─── Colors ──────────────────────────────────────────────────── */
const NAVY = "#1A3A63";
const NAVY_LIGHT = "#224B7A";
const TEAL = "#0097A7";

/* ─── Data ────────────────────────────────────────────────────── */

const leadership = [
  {
    name: "Marc Berger",
    position: "Geschäftsführer",
    description:
      "Marc koordiniert unsere Teams und sorgt für reibungslose Projektabläufe in allen Geschäftsbereichen.",
    specialties: ["Teamführung", "Qualitätssicherung", "Projektmanagement"],
    image: "👨‍💼",
  },
  {
    name: "Johannes Bruns",
    position: "Geschäftsführer",
    description:
      "Mit über 20 Jahren Erfahrung im Bauwesen leitet Johannes das Unternehmen mit Leidenschaft und Expertise.",
    specialties: ["Unternehmensführung", "Projektleitung", "Kundenberatung"],
    image: "👨‍💼",
  },
];

const teamMembers = [
  { name: "Daniela Ronken", role: "Verwaltung" },
  { name: "Finn Schüller", role: "Betriebshof" },
  { name: "Anatolii Petrashchuk", role: "" },
  { name: "Angelo Profeta", role: "" },
  { name: "Artem Mishchenko", role: "" },
  { name: "Claus Wilczek", role: "" },
  { name: "Fabian Djied", role: "" },
  { name: "Patrick Jahn", role: "" },
  { name: "Peter Berger", role: "" },
];

const values = [
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Gemeinsam erreichen wir mehr — in jedem Projekt setzen wir auf starke Zusammenarbeit.",
  },
  {
    icon: Award,
    title: "Qualität",
    description:
      "Wir streben nach höchster Qualität in allem was wir tun — das ist unser Anspruch.",
  },
  {
    icon: Star,
    title: "Innovation",
    description:
      "Moderne Techniken und innovative Lösungen halten uns an der Spitze unserer Branche.",
  },
];

const stats = [
  { value: "36+", label: "Erfahrene Mitarbeiter" },
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Zufriedene Kunden" },
  { value: "1000+", label: "Projekte abgeschlossen" },
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
              Unser Team
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-4 text-lg font-semibold text-primary sm:text-xl"
            >
              Die Menschen hinter Makopa Bau
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              Lernen Sie die Menschen kennen, die Makopa Bau GmbH zu dem machen,
              was wir sind — ein zuverlässiger Partner mit Leidenschaft für das
              Handwerk.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section id="geschaeftsfuehrung" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Unsere Geschäftsführung
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
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
                className="group relative overflow-hidden rounded-xl border border-border bg-white p-7 text-center transition-all hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="absolute top-0 right-0 left-0 h-1 bg-primary transition-all group-hover:h-1.5" />
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-9 w-9 text-primary" />
                </div>
                <h3 className="mb-1 text-2xl font-bold text-foreground">
                  {leader.name}
                </h3>
                <p className="mb-4 text-sm font-semibold text-primary">
                  {leader.position}
                </p>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {leader.description}
                </p>
                <div>
                  <h4 className="mb-3 text-sm font-semibold text-foreground">
                    Schwerpunkte:
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {leader.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
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

      {/* ── Team ── */}
      <section className="border-t border-border bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Unser Team
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Engagierte Fachkräfte, die gemeinsam jedes Projekt zum Erfolg
              führen.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-white p-5 text-center transition-all hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="absolute top-0 right-0 left-0 h-1 bg-primary transition-all group-hover:h-1.5" />
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  {member.name}
                </h3>
                {member.role && (
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    {member.role}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Unsere Werte
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
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
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
