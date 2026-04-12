"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Hammer,
  HardHat,
  Truck,
  Recycle,
  CheckCircle2,
  Phone,
  Shield,
  Building,
  ArrowRight,
  Wrench,
  Gem,
  Construction,
} from "lucide-react";

/* ─── Colors ──────────────────────────────────────────────────── */
const NAVY = "#0C2340";
const NAVY_LIGHT = "#143054";
const TEAL = "#0097A7";
const TEAL_LIGHT = "#00ACC1";
const TEAL_PALE = "#E0F7FA";
const OFF_WHITE = "#F8FAFC";

/* ─── Data ────────────────────────────────────────────────────── */

const services = [
  {
    title: "Abbrucharbeiten",
    icon: Hammer,
    description:
      "Professioneller und sicherer Abbruch von Gebäuden und Bauteilen aller Art.",
    features: [
      "Selektiver Rückbau",
      "Komplettabbruch",
      "Sprengungen",
      "Entkernung",
    ],
  },
  {
    title: "Kernsanierung",
    icon: Wrench,
    description:
      "Vollständige Sanierung und Modernisierung bestehender Gebäude.",
    features: [
      "Entkernung",
      "Schadstoffsanierung",
      "Rohbauarbeiten",
      "Fassadensanierung",
    ],
  },
  {
    title: "Umbauarbeiten",
    icon: Building,
    description:
      "Umbau und Modernisierung für neue Raumkonzepte und Nutzungen.",
    features: ["Wanddurchbrüche", "Raumaufteilung", "Anbauten", "Dachausbau"],
  },
];

const projectTypes = [
  {
    title: "Wohngebäude",
    description: "Abbruch und Umbau von Ein- und Mehrfamilienhäusern",
    emoji: "🏠",
  },
  {
    title: "Gewerbeimmobilien",
    description: "Sanierung von Bürogebäuden und Gewerbeobjekten",
    emoji: "🏢",
  },
  {
    title: "Industrieanlagen",
    description: "Rückbau von Produktionsstätten und Fabriken",
    emoji: "🏭",
  },
  {
    title: "Infrastruktur",
    description: "Brücken, Straßen und öffentliche Bauten",
    emoji: "🌉",
  },
];

const safetyFeatures = [
  {
    icon: HardHat,
    title: "Arbeitssicherheit",
    description: "Höchste Sicherheitsstandards bei allen Arbeiten",
  },
  {
    icon: Shield,
    title: "Versicherung",
    description: "Vollversicherung für alle Arbeiten und Schäden",
  },
  {
    icon: Recycle,
    title: "Umweltschutz",
    description: "Fachgerechte Entsorgung und Recycling",
  },
  {
    icon: Building,
    title: "Genehmigungen",
    description: "Unterstützung bei allen behördlichen Verfahren",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Analyse",
    description: "Gebäudeanalyse und Schadstoffprüfung",
  },
  {
    step: "02",
    title: "Planung",
    description: "Detailplanung und Genehmigungsverfahren",
  },
  {
    step: "03",
    title: "Durchführung",
    description: "Sichere Ausführung mit modernster Technik",
  },
  {
    step: "04",
    title: "Entsorgung",
    description: "Fachgerechte Entsorgung und Recycling",
  },
];

const equipment = [
  {
    icon: Truck,
    title: "Abbruchbagger",
    description: "Spezialbagger für präzisen Abbruch",
  },
  {
    icon: Gem,
    title: "Diamanttechnik",
    description: "Präzise Schnitte ohne Erschütterungen",
  },
  {
    icon: Construction,
    title: "Krane & Hebebühnen",
    description: "Für Arbeiten in jeder Höhe",
  },
];

/* ─── Page ────────────────────────────────────────────────────── */

export default function AbbruchUmbauPage() {
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
              <Hammer className="h-4 w-4" style={{ color: TEAL_LIGHT }} />
              <span className="text-xs font-medium text-white/70">
                Abbruch & Umbau
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
            >
              Abbruch & <span style={{ color: TEAL_LIGHT }}>Umbau.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              Fachgerechter Abbruch und professionelle Umbauarbeiten. Sicher,
              umweltgerecht und termingerecht — von der Planung bis zur
              Fertigstellung.
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
                Abbruch-Angebot anfordern
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#leistungen"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                Unsere Leistungen
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        id="leistungen"
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
              Leistungen
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Unsere Abbruch- & Umbauleistungen
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Von selektivem Rückbau bis zur Kernsanierung — wir realisieren Ihr
              Bauvorhaben professionell.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative h-full overflow-hidden rounded-xl border border-slate-200/80 bg-white p-7 transition-all hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div
                    className="absolute top-0 right-0 left-0 h-1"
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
                    {service.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2
                          className="h-4 w-4 flex-shrink-0"
                          style={{ color: TEAL }}
                        />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Project Types ── */}
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
              Projektbereiche
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Unsere Projektbereiche
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Wir führen Abbruch- und Umbauarbeiten in verschiedensten Bereichen
              durch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-7 text-center transition-all hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div
                  className="absolute top-0 right-0 left-0 h-1"
                  style={{ backgroundColor: TEAL }}
                />
                <div className="mb-4 text-4xl">{project.emoji}</div>
                <h3 className="mb-2 text-lg font-bold" style={{ color: NAVY }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety & Environment ── */}
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
              Sicherheit
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Sicherheit & Umweltschutz
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Bei allen Arbeiten stehen Sicherheit und Umweltschutz an oberster
              Stelle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {safetyFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
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
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
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
              Ablauf
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Unser Vorgehen
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              So führen wir Ihr Abbruch- oder Umbauprojekt sicher und effizient
              durch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {processSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white"
                  style={{ backgroundColor: TEAL }}
                >
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-bold" style={{ color: NAVY }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment ── */}
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
                <div
                  className="mx-auto mb-4 flex h-13 w-13 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "white" }}
                >
                  <Wrench className="h-6 w-6" style={{ color: TEAL }} />
                </div>
                <h2
                  className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
                  style={{ color: NAVY }}
                >
                  Moderne Technik & Ausrüstung
                </h2>
                <p className="mx-auto max-w-2xl text-slate-500">
                  Wir setzen auf modernste Maschinen und Verfahren für
                  effiziente und sichere Arbeiten.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {equipment.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
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
                        className="mb-1 text-base font-bold"
                        style={{ color: NAVY }}
                      >
                        {item.title}
                      </div>
                      <div className="text-sm text-slate-500">
                        {item.description}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-10 text-center">
                <p className="mb-5 text-slate-500">
                  Alle Maschinen werden regelmäßig gewartet und entsprechen den
                  neuesten Sicherheitsstandards.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                  style={{
                    backgroundColor: TEAL,
                    boxShadow: "0 10px 30px -5px rgba(0,151,167,0.3)",
                  }}
                >
                  Mehr über unsere Technik erfahren
                  <ArrowRight className="h-4 w-4" />
                </Link>
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
              Jetzt starten
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Abbruch oder Umbau geplant?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
              Kontaktieren Sie uns für eine professionelle Beratung zu Ihrem
              Projekt. Wir erstellen Ihnen gerne ein kostenloses Angebot.
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
                Kostenloses Angebot
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
