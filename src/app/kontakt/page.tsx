"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";

/* ─── Colors ──────────────────────────────────────────────────── */
const NAVY = "#1A3A63";
const NAVY_LIGHT = "#224B7A";

/* ─── Data ────────────────────────────────────────────────────── */

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+49 (0) 2238 9356034",
    action: "tel:+4922389356034",
    linkLabel: "Jetzt anrufen",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "Wolfhelmstr. 36\n50259 Pulheim",
    action: "https://maps.google.com/?q=Wolfhelmstr.+36,+50259+Pulheim",
    linkLabel: "Route planen",
  },
];

const emailAddresses = [
  { label: "Kontakt", email: "kontakt@makopa.de" },
  { label: "Allgemeine Anfragen", email: "info@makopa.de" },
  { label: "Verwaltung", email: "verwaltung@makopa.de" },
  { label: "Lieferantenrechnungen", email: "rechnungen@makopa.de" },
];

const businessHours = [
  { day: "Mittwoch", hours: "14:00 – 17:00" },
  { day: "Freitag", hours: "09:00 – 15:30" },
];

/* ─── Page ────────────────────────────────────────────────────── */

export default function KontaktPage() {
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
              Kontakt aufnehmen
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-4 text-lg font-semibold text-primary sm:text-xl"
            >
              Wir freuen uns auf Ihre Anfrage
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              Haben Sie Fragen oder möchten Sie ein Angebot anfordern? Wir
              beraten Sie gerne persönlich und unverbindlich.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="mailto:kontakt@makopa.de"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:brightness-110"
              >
                <Mail className="h-4 w-4" />
                E-Mail senden
              </a>
              <a
                href="tel:+4922389356034"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Direkt anrufen
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Contact Info ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              So erreichen Sie uns
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Erreichen Sie uns auf dem für Sie passenden Weg.
            </p>
          </motion.div>

          <div className="space-y-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.action}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative block overflow-hidden rounded-xl border border-border bg-white p-6 transition-all hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="absolute top-0 right-0 left-0 h-1 bg-primary transition-all group-hover:h-1.5" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-bold text-foreground">
                        {info.title}
                      </h3>
                      <p className="text-sm whitespace-pre-line text-muted-foreground">
                        {info.content}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                        {info.linkLabel}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* E-Mail-Adressen — eine Karte */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-white p-6 transition-all hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-primary transition-all group-hover:h-1.5" />
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-base font-bold text-foreground">
                    E-Mail
                  </h3>
                  <div className="space-y-2">
                    {emailAddresses.map((item) => (
                      <div
                        key={item.email}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-muted-foreground">
                          {item.label}
                        </span>
                        <a
                          href={`mailto:${item.email}`}
                          className="text-sm font-medium text-primary transition-colors hover:underline"
                        >
                          {item.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group relative mt-6 overflow-hidden rounded-xl border border-border bg-white p-6"
          >
            <div className="absolute top-0 right-0 left-0 h-1 bg-primary transition-all group-hover:h-1.5" />
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                Öffnungszeiten
              </h3>
            </div>

            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Verwaltung
            </h4>
            <div className="space-y-3">
              {businessHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between border-b border-border pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-sm font-medium text-foreground">
                    {item.day}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-border pt-5">
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                Baustellenbetrieb
              </h4>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-foreground">
                  Montag – Freitag
                </span>
                <span className="text-sm text-muted-foreground">
                  07:00 – 17:00
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Map / Standort ── */}
      <section className="border-t border-border bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              So finden Sie uns
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Besuchen Sie uns in unseren Betriebshof mit Austellflächen oder vereinbaren Sie einen Termin
              vor Ort bei Ihrem Projekt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl border border-border bg-white"
          >
            <div className="absolute top-0 right-0 left-0 z-10 h-1 bg-primary transition-all group-hover:h-1.5" />
            <iframe
              src="https://www.google.com/maps?q=Gleueler+Stra%C3%9Fe+72,+50226+Frechen&output=embed"
              className="h-96 w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Makopa Bau GmbH Betriebshof"
            />
            <div className="flex items-center justify-between border-t border-border px-6 py-4">
              <p className="text-sm text-muted-foreground">
                Gleueler Straße 72, 50226 Frechen
              </p>
              <Link
                href="https://maps.google.com/?q=Gleueler+Stra%C3%9Fe+72,+50226+Frechen"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Route planen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
