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
  MessageSquare,
  Building,
  User,
  ArrowRight,
} from "lucide-react";

/* ─── Colors ──────────────────────────────────────────────────── */
const NAVY = "#0C2340";
const NAVY_LIGHT = "#143054";
const TEAL = "#0097A7";
const TEAL_LIGHT = "#00ACC1";
const TEAL_PALE = "#E0F7FA";
const OFF_WHITE = "#F8FAFC";

/* ─── Data ────────────────────────────────────────────────────── */

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+49 (0) 123 456789",
    action: "tel:+491234567890",
    linkLabel: "Jetzt anrufen",
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: "info@makopa-bau.de",
    action: "mailto:info@makopa-bau.de",
    linkLabel: "E-Mail senden",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "Musterstraße 123\n12345 Musterstadt",
    action: "https://maps.google.com",
    linkLabel: "Route planen",
  },
];

const businessHours = [
  { day: "Montag - Freitag", hours: "07:00 - 17:00" },
  { day: "Samstag", hours: "08:00 - 14:00" },
  { day: "Sonntag", hours: "Geschlossen" },
  { day: "Notdienst", hours: "24/7 verfügbar" },
];

const quickContacts = [
  {
    icon: Phone,
    title: "Telefonische Beratung",
    description: "Sprechen Sie direkt mit unseren Experten",
    href: "tel:+491234567890",
    label: "Jetzt anrufen",
    primary: true,
  },
  {
    icon: Mail,
    title: "E-Mail Anfrage",
    description: "Senden Sie uns Ihre detaillierte Anfrage",
    href: "mailto:info@makopa-bau.de",
    label: "E-Mail schreiben",
    primary: false,
  },
  {
    icon: Building,
    title: "Vor-Ort Besichtigung",
    description: "Vereinbaren Sie einen Termin bei Ihnen",
    href: "#form",
    label: "Termin vereinbaren",
    primary: false,
  },
];

const serviceOptions = [
  "Logistik",
  "Gala Bau",
  "Heizung",
  "Abbruch & Umbau",
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
    "w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0097A7]/30 focus:border-[#0097A7] transition-colors";

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
              <MessageSquare
                className="h-4 w-4"
                style={{ color: TEAL_LIGHT }}
              />
              <span className="text-xs font-medium text-white/70">
                Kontakt & Anfragen
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
            >
              Kontakt <span style={{ color: TEAL_LIGHT }}>aufnehmen.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              Haben Sie Fragen oder möchten Sie ein Angebot anfordern? Wir
              freuen uns auf Ihre Nachricht und beraten Sie gerne persönlich.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <Link
                href="#form"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                style={{
                  backgroundColor: TEAL,
                  boxShadow: "0 10px 30px -5px rgba(0,151,167,0.3)",
                }}
              >
                Nachricht senden
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="tel:+491234567890"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Direkt anrufen
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Contact Form & Info ── */}
      <section
        id="form"
        className="py-20 md:py-28"
        style={{ backgroundColor: OFF_WHITE }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="mb-3 inline-block text-sm font-semibold tracking-wider uppercase"
                style={{ color: TEAL }}
              >
                Kontaktformular
              </span>
              <h2
                className="mb-2 text-3xl font-bold tracking-tight"
                style={{ color: NAVY }}
              >
                Nachricht senden
              </h2>
              <p className="mb-8 text-slate-500">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich
                bei Ihnen.
              </p>

              <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-7">
                {/* Top accent line */}
                <div
                  className="absolute top-0 right-0 left-0 h-1"
                  style={{ backgroundColor: TEAL }}
                />

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium"
                        style={{ color: NAVY }}
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
                        className="mb-1.5 block text-sm font-medium"
                        style={{ color: NAVY }}
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
                        className="mb-1.5 block text-sm font-medium"
                        style={{ color: NAVY }}
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
                        className="mb-1.5 block text-sm font-medium"
                        style={{ color: NAVY }}
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
                      className="mb-1.5 block text-sm font-medium"
                      style={{ color: NAVY }}
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
                      className="mb-1.5 block text-sm font-medium"
                      style={{ color: NAVY }}
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
                      className="mb-1.5 block text-sm font-medium"
                      style={{ color: NAVY }}
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
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110 disabled:opacity-60"
                    style={{
                      backgroundColor: TEAL,
                      boxShadow: "0 10px 30px -5px rgba(0,151,167,0.3)",
                    }}
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
              <span
                className="mb-3 inline-block text-sm font-semibold tracking-wider uppercase"
                style={{ color: TEAL }}
              >
                Erreichbarkeit
              </span>
              <h2
                className="mb-2 text-3xl font-bold tracking-tight"
                style={{ color: NAVY }}
              >
                Kontaktinformationen
              </h2>
              <p className="mb-8 text-slate-500">
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
                      className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-6 transition-all hover:shadow-xl hover:shadow-slate-200/50"
                    >
                      {/* Top accent line */}
                      <div
                        className="absolute top-0 right-0 left-0 h-1"
                        style={{ backgroundColor: TEAL }}
                      />
                      <div className="flex items-start gap-4">
                        <div
                          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                          style={{ backgroundColor: TEAL_PALE }}
                        >
                          <Icon className="h-5 w-5" style={{ color: TEAL }} />
                        </div>
                        <div>
                          <h3
                            className="mb-1 text-base font-bold"
                            style={{ color: NAVY }}
                          >
                            {info.title}
                          </h3>
                          <p className="text-sm whitespace-pre-line text-slate-500">
                            {info.content}
                          </p>
                          <Link
                            href={info.action}
                            className="mt-2 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:brightness-110"
                            style={{ color: TEAL }}
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
                className="relative mt-6 overflow-hidden rounded-xl border border-slate-200/80 bg-white p-6"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 right-0 left-0 h-1"
                  style={{ backgroundColor: TEAL }}
                />
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: TEAL_PALE }}
                  >
                    <Clock className="h-5 w-5" style={{ color: TEAL }} />
                  </div>
                  <h3 className="text-base font-bold" style={{ color: NAVY }}>
                    Öffnungszeiten
                  </h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between border-b border-slate-100 pb-2 last:border-0 last:pb-0"
                    >
                      <span
                        className="text-sm font-medium"
                        style={{ color: NAVY }}
                      >
                        {item.day}
                      </span>
                      <span className="text-sm text-slate-500">
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

      {/* ── Quick Contact ── */}
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
              Schnellkontakt
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              Schnell in Kontakt treten
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Wählen Sie den für Sie passenden Kontaktweg — wir sind für Sie da.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {quickContacts.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
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
                  <div
                    className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: TEAL_PALE }}
                  >
                    <Icon className="h-6 w-6" style={{ color: TEAL }} />
                  </div>
                  <h3
                    className="mb-2 text-lg font-bold"
                    style={{ color: NAVY }}
                  >
                    {item.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                  {item.primary ? (
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                      style={{
                        backgroundColor: TEAL,
                        boxShadow: "0 10px 30px -5px rgba(0,151,167,0.3)",
                      }}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-all hover:bg-slate-50"
                      style={{
                        borderColor: TEAL,
                        color: TEAL,
                      }}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Map ── */}
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
              Standort
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: NAVY }}
            >
              So finden Sie uns
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500">
              Besuchen Sie uns in unserem Büro oder vereinbaren Sie einen Termin
              vor Ort bei Ihrem Projekt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white"
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 right-0 left-0 h-1"
              style={{ backgroundColor: TEAL }}
            />
            <div className="flex h-96 items-center justify-center">
              <div className="text-center">
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl"
                  style={{ backgroundColor: TEAL_PALE }}
                >
                  <MapPin className="h-7 w-7" style={{ color: TEAL }} />
                </div>
                <h3 className="mb-2 text-xl font-bold" style={{ color: NAVY }}>
                  Standort Karte
                </h3>
                <p className="mb-5 text-sm text-slate-500">
                  Musterstraße 123, 12345 Musterstadt
                </p>
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                  style={{
                    backgroundColor: TEAL,
                    boxShadow: "0 10px 30px -5px rgba(0,151,167,0.3)",
                  }}
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
              Bereit für Ihr Projekt?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
              Kontaktieren Sie uns noch heute und lassen Sie sich unverbindlich
              beraten. Wir freuen uns auf Ihr Projekt.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="#form"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                style={{
                  backgroundColor: TEAL,
                  boxShadow: "0 10px 30px -5px rgba(0,151,167,0.3)",
                }}
              >
                Anfrage senden
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="tel:+491234567890"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Jetzt anrufen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
