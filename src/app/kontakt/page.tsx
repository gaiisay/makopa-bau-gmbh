"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
  CheckCircle2,
  Building,
} from "lucide-react";

/* ─── Colors ──────────────────────────────────────────────────── */
const NAVY = "#1A3A63";
const NAVY_LIGHT = "#224B7A";
const TEAL = "#0097A7";

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
    icon: Mail,
    title: "E-Mail",
    content: "kontakt@makopa-bau.de",
    action: "mailto:kontakt@makopa-bau.de",
    linkLabel: "E-Mail senden",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "Wolfhelmstr. 36\n50259 Pulheim",
    action: "https://maps.google.com/?q=Wolfhelmstr.+36,+50259+Pulheim",
    linkLabel: "Route planen",
  },
];

const businessHours = [
  { day: "Mittwoch", hours: "14:00 – 17:00" },
  { day: "Freitag", hours: "09:00 – 15:30" },
];

const serviceOptions = [
  "Baustellenmanagement",
  "Erdarbeiten & Außenanlagen",
  "Abbruch & Speziallösungen",
  "Baustellenservices & Vermietung",
  "Allgemeine Anfrage",
];

/* ─── Page ────────────────────────────────────────────────────── */

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);

    alert(
      "Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.",
    );
  };

  const inputClasses =
    "w-full rounded-lg border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

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
              <Link
                href="#form"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:brightness-110"
              >
                Nachricht senden
                <ArrowRight className="h-4 w-4" />
              </Link>
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

      {/* ── Contact Form & Info ── */}
      <section id="form" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-3 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
                Kontaktformular
              </span>
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
                Nachricht senden
              </h2>
              <p className="mb-8 text-muted-foreground">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich
                bei Ihnen.
              </p>

              <div className="relative overflow-hidden rounded-xl border border-border bg-white p-7">
                <div className="absolute top-0 right-0 left-0 h-1 bg-primary" />

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={inputClasses}
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={inputClasses}
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Unternehmen
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="Ihr Unternehmen"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Bereich
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={inputClasses}
                    >
                      <option value="">Bitte wählen Sie einen Bereich</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Betreff
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="Betreff Ihrer Nachricht"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className={`${inputClasses} resize-vertical`}
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:brightness-110 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      "Wird gesendet..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Nachricht senden
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span className="mb-3 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
                Erreichbarkeit
              </span>
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
                Kontaktinformationen
              </h2>
              <p className="mb-8 text-muted-foreground">
                Erreichen Sie uns auf dem für Sie passenden Weg.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="group relative overflow-hidden rounded-xl border border-border bg-white p-6 transition-all hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
                    >
                      <div className="absolute top-0 right-0 left-0 h-1 bg-primary transition-all group-hover:h-1.5" />
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-base font-bold text-foreground">
                            {info.title}
                          </h3>
                          <p className="text-sm whitespace-pre-line text-muted-foreground">
                            {info.content}
                          </p>
                          <Link
                            href={info.action}
                            className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:brightness-110"
                          >
                            {info.linkLabel}
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
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
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    Öffnungszeiten Verwaltung
                  </h3>
                </div>
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
              </motion.div>
            </motion.div>
          </div>
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
              Besuchen Sie uns in unserem Büro oder vereinbaren Sie einen Termin
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
            <div className="absolute top-0 right-0 left-0 h-1 bg-primary transition-all group-hover:h-1.5" />
            <div className="flex h-96 items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  Standort Karte
                </h3>
                <p className="mb-5 text-sm text-muted-foreground">
                  Wolfhelmstr. 36, 50259 Pulheim
                </p>
                <Link
                  href="https://maps.google.com/?q=Wolfhelmstr.+36,+50259+Pulheim"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:brightness-110"
                >
                  Route planen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
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
              Jetzt starten
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Bereit für Ihr Projekt?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
              Kontaktieren Sie uns noch heute und lassen Sie sich unverbindlich
              beraten. Wir freuen uns auf Ihr Projekt.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#form"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:brightness-110"
              >
                Anfrage senden
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
