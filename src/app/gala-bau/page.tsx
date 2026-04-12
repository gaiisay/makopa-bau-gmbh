"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  TreePine,
  Sprout,
  Mountain,
  Leaf,
  CheckCircle2,
  Phone,
  ArrowRight,
  Hammer,
  Flower2,
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
    title: "Gartengestaltung",
    icon: Flower2,
    description:
      "Individuelle Planung und Gestaltung von privaten und öffentlichen Grünanlagen.",
    features: [
      "Gartenplanung",
      "Bepflanzung",
      "Bewässerungssysteme",
      "Gartenpflege",
    ],
  },
  {
    title: "Pflasterarbeiten",
    icon: Hammer,
    description:
      "Professionelle Verlegung von Pflastersteinen, Platten und Natursteinen.",
    features: [
      "Wegebau",
      "Terrassengestaltung",
      "Einfahrten",
      "Plätze und Höfe",
    ],
  },
  {
    title: "Landschaftsbau",
    icon: Mountain,
    description:
      "Umfassende Landschaftsgestaltung für Wohn- und Gewerbegebiete.",
    features: ["Erdarbeiten", "Drainage", "Böschungsbau", "Rekultivierung"],
  },
];

const projects = [
  {
    title: "Privatgärten",
    description: "Traumgärten für Einfamilienhäuser und Villen",
    emoji: "🏡",
  },
  {
    title: "Gewerbeanlagen",
    description: "Repräsentative Außenanlagen für Unternehmen",
    emoji: "🏢",
  },
  {
    title: "Öffentliche Bereiche",
    description: "Parks, Spielplätze und Grünanlagen",
    emoji: "🌳",
  },
  {
    title: "Sportstätten",
    description: "Rasenplätze und Sportanlagen",
    emoji: "⚽",
  },
];

const advantages = [
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    description: "Umweltfreundliche und nachhaltige Lösungen",
  },
  {
    icon: TreePine,
    title: "Fachkompetenz",
    description: "Jahrelange Erfahrung im Garten- und Landschaftsbau",
  },
  {
    icon: Sprout,
    title: "Ganzjährige Betreuung",
    description: "Von der Planung bis zur Pflege aus einer Hand",
  },
  {
    icon: Mountain,
    title: "Individuelle Lösungen",
    description: "Maßgeschneiderte Konzepte für jeden Anspruch",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Beratung",
    description: "Persönliche Beratung und Besichtigung vor Ort",
  },
  {
    step: "02",
    title: "Planung",
    description: "Detaillierte Planung und 3D-Visualisierung",
  },
  {
    step: "03",
    title: "Realisierung",
    description: "Professionelle Umsetzung durch Fachkräfte",
  },
  {
    step: "04",
    title: "Pflege",
    description: "Langfristige Betreuung und Pflege",
  },
];

/* ─── Page ────────────────────────────────────────────────────── */

export default function GalaBauPage() {
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
              <TreePine className="h-4 w-4" style={{ color: TEAL_LIGHT }} />
              <span className="text-xs font-medium text-white/70">
                Garten- & Landschaftsbau
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
            >
              Gala Bau{" "}
              <span style={{ color: TEAL_LIGHT }}>für grüne Visionen.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              Professionelle Gestaltung und Pflege von Außenanlagen, Gärten und
              öffentlichen Bereichen. Wir verwandeln Ihre Visionen in grüne
              Realität.
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
                Gartenplanung anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#dienstleistungen"
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
        id="dienstleistungen"
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
              Dienstleistungen
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Unsere Gala Bau Leistungen
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Von der ersten Planung bis zur laufenden Pflege — wir gestalten
              Ihre Außenanlagen professionell.
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
                  {/* Top accent line */}
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
              Projekte
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Unsere Projekte
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Wir realisieren Gala Bau Projekte für verschiedenste Bereiche und
              Anforderungen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
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

      {/* ── Advantages ── */}
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
              Stärken
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Unsere Stärken
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Was uns zu Ihrem idealen Partner für Garten- und Landschaftsbau
              macht.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, i) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={advantage.title}
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
                    {advantage.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {advantage.description}
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
              Von der Idee zur grünen Oase
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              So realisieren wir Ihr Garten- und Landschaftsbauprojekt.
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
              Bereit für Ihr Garten-Projekt?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
              Lassen Sie uns gemeinsam Ihren Traum-Garten planen und
              realisieren. Wir beraten Sie gerne kostenlos und unverbindlich.
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
                Kostenlose Beratung
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
