"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Hammer, Mail, Phone } from "lucide-react";

/* ─── Colors ──────────────────────────────────────────────────── */
const NAVY = "#1A3A63";
const NAVY_LIGHT = "#224B7A";

/* ─── Page ────────────────────────────────────────────────────── */

export default function ProjektePage() {
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
              Unsere Projekte
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-4 text-lg font-semibold text-primary sm:text-xl"
            >
              Einblicke in unsere Arbeit
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              Wir arbeiten gerade daran, Ihnen hier ausgewählte Referenzprojekte
              zu präsentieren.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
              <Hammer className="h-9 w-9 text-primary" />
            </div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Hier wird noch gebaut
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              Unsere Projektgalerie befindet sich im Aufbau. Schon bald finden
              Sie hier Bilder und Details zu unseren abgeschlossenen und
              laufenden Projekten. Bis dahin beraten wir Sie gerne persönlich.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:kontakt@makopa.de"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:brightness-110"
              >
                <Mail className="h-4 w-4" />
                E-Mail senden
              </a>
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
