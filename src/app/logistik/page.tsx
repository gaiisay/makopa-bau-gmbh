"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  HardHat,
  ClipboardCheck,
  Truck,
  Shield,
  Users,
  Cog,
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
    title: "Unterstützung der Baustellenorganisation",
    icon: ClipboardCheck,
    description:
      "Mitwirkung bei der Strukturierung und Aufrechterhaltung geordneter Baustellenabläufe.",
    features: [
      "Strukturierung geordneter Baustellenabläufe",
      "Einrichtung und Anpassung von Baustellenbereichen",
      "Reibungsloser Bauablauf gemäß Vorgaben der Bauleitung",
    ],
  },
  {
    title: "Unterstützung der Baustellenlogistik",
    icon: Truck,
    description:
      "Mitwirkung bei der Koordination von Materialanlieferungen und Gerätebewegungen.",
    features: [
      "Koordination von Materialanlieferungen & Gerätebewegungen",
      "Flächenorganisation (Lager-, Verkehrs- & Arbeitsbereiche)",
      "Optimierung von Transportwegen & Baustellenzugängen",
    ],
  },
  {
    title: "Schnittstellenkoordination zwischen Gewerken",
    icon: Users,
    description:
      "Mitwirkung bei der Abstimmung von Arbeitsabläufen zwischen beteiligten Gewerken.",
    features: [
      "Abstimmung von Arbeitsabläufen zwischen Gewerken",
      "Vermeidung von Behinderungen & Überschneidungen",
      "Abstimmung von Übergabepunkten & Arbeitsfortschritten",
    ],
  },
  {
    title: "Arbeitsschutz & Sicherheitsmaßnahmen",
    icon: Shield,
    description:
      "Mitwirkung bei der praktischen Umsetzung vorgegebener Sicherheits- und Schutzmaßnahmen.",
    features: [
      "Umsetzung vorgegebener Sicherheits- & Schutzmaßnahmen",
      "Einhaltung von Baustellenregelungen & Sicherheitsvorgaben",
      "Minimierung von Gefährdungen im laufenden Betrieb",
    ],
  },
  {
    title: "Umsetzung projektspezifischer Konzepte",
    icon: Cog,
    description:
      "Mitwirkung bei der Umsetzung vorgegebener Baustellenkonzepte wie Staubschutz, Logistik und Zugangskonzepte.",
    features: [
      "Staubschutz-, Logistik- & Zugangskonzepte",
      "Anpassung der Konzepte an den Baufortschritt",
      "Sicherstellung der praktischen Umsetzbarkeit",
    ],
  },
];

const advantages = [
  {
    title: "Ganzheitliche Projektabwicklung",
    description: "Alle unterstützenden Leistungen aus einer Hand.",
  },
  {
    title: "Praxisnahe Lösungen",
    description: "Mit unternehmerischem Denken direkt aus dem Baualltag.",
  },
  {
    title: "Verlässlichkeit",
    description: "Die man messen kann — termingerecht und transparent.",
  },
];

/* ─── Page ────────────────────────────────────────────────────── */

export default function LogistikPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: NAVY }}
      >
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
            backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_LIGHT} 50%, ${NAVY} 100%)`,
            opacity: 0.85,
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32 lg:py-40">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
            >
              <HardHat className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-white/70">
                Geschäftsbereich
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Baustellenmanagement
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-4 text-lg font-semibold text-primary sm:text-xl"
            >
              Unterstützende Leistungen
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              Von der Organisation über die Logistik bis zur
              Schnittstellenkoordination — für einen reibungslosen Bauablauf.
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
                Angebot anfordern
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
              Umfassende Unterstützung für einen strukturierten und sicheren
              Baustellenbetrieb.
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
              Warum Makopa Bau
            </h2>
            <p className="max-w-2xl text-2xl font-bold text-white md:text-3xl">
              Ganzheitliche Projektabwicklung aus einer Hand.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
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
              Kontaktieren Sie uns für eine kostenlose und unverbindliche
              Beratung. Wir freuen uns auf Ihre Anfrage.
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
