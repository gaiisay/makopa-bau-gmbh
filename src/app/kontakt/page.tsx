"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building,
  User,
  FileText,
} from "lucide-react";

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

  const services = [
    "Logistik",
    "Gala Bau",
    "Heizung",
    "Abbruch & Umbau",
    "Allgemeine Anfrage",
  ];

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
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

    // Show success message (in a real app, you'd want to show this properly)
    alert(
      "Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.",
    );
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+49 (0) 123 456789",
      action: "tel:+491234567890",
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: "info@makopa-bau.de",
      action: "mailto:info@makopa-bau.de",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Musterstraße 123\n12345 Musterstadt",
      action: "https://maps.google.com",
    },
  ];

  const businessHours = [
    { day: "Montag - Freitag", hours: "07:00 - 17:00" },
    { day: "Samstag", hours: "08:00 - 14:00" },
    { day: "Sonntag", hours: "Geschlossen" },
    { day: "Notdienst", hours: "24/7 verfügbar" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="from-primary/90 to-primary text-primary-foreground relative bg-gradient-to-br">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="mx-auto mb-6 w-fit rounded-full bg-white/10 p-4">
            <MessageSquare className="h-12 w-12" />
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Kontakt</h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Haben Sie Fragen oder möchten Sie ein Angebot anfordern? Wir freuen
            uns auf Ihre Nachricht und beraten Sie gerne persönlich.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Nachricht senden</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Kontaktformular</CardTitle>
                  <CardDescription>
                    Füllen Sie das Formular aus und wir melden uns
                    schnellstmöglich bei Ihnen.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1 block text-sm font-medium"
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
                          className="focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                          placeholder="Ihr Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1 block text-sm font-medium"
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
                          className="focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                          placeholder="ihre@email.de"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1 block text-sm font-medium"
                        >
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                          placeholder="Ihre Telefonnummer"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="mb-1 block text-sm font-medium"
                        >
                          Unternehmen
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                          placeholder="Ihr Unternehmen"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1 block text-sm font-medium"
                      >
                        Bereich
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                      >
                        <option value="">Bitte wählen Sie einen Bereich</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-1 block text-sm font-medium"
                      >
                        Betreff
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                        placeholder="Betreff Ihrer Nachricht"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1 block text-sm font-medium"
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
                        className="focus:ring-primary resize-vertical w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                        placeholder="Beschreiben Sie Ihr Anliegen..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Wird gesendet..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Nachricht senden
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Kontaktinformationen</h2>

              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={info.title} className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 rounded-full p-2">
                          <IconComponent className="text-primary h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold">{info.title}</h3>
                          <p className="text-muted-foreground whitespace-pre-line">
                            {info.content}
                          </p>
                          {info.action && (
                            <Link
                              href={info.action}
                              className="text-primary mt-1 inline-block text-sm hover:underline"
                            >
                              {info.icon === Phone && "Jetzt anrufen"}
                              {info.icon === Mail && "E-Mail senden"}
                              {info.icon === MapPin && "Route planen"}
                            </Link>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <Separator className="my-8" />

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Öffnungszeiten
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((item) => (
                      <div key={item.day} className="flex justify-between">
                        <span className="font-medium">{item.day}</span>
                        <span className="text-muted-foreground">
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Schnell in Kontakt treten
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Wählen Sie den für Sie passenden Kontaktweg - wir sind für Sie da.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="h-full text-center">
              <CardHeader>
                <Phone className="text-primary mx-auto mb-4 h-12 w-12" />
                <CardTitle>Telefonische Beratung</CardTitle>
                <CardDescription>
                  Sprechen Sie direkt mit unseren Experten
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="tel:+491234567890">
                    <Phone className="mr-2 h-4 w-4" />
                    Jetzt anrufen
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full text-center">
              <CardHeader>
                <Mail className="text-primary mx-auto mb-4 h-12 w-12" />
                <CardTitle>E-Mail Anfrage</CardTitle>
                <CardDescription>
                  Senden Sie uns Ihre detaillierte Anfrage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="mailto:info@makopa-bau.de">
                    <Mail className="mr-2 h-4 w-4" />
                    E-Mail schreiben
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full text-center">
              <CardHeader>
                <Building className="text-primary mx-auto mb-4 h-12 w-12" />
                <CardTitle>Vor-Ort Besichtigung</CardTitle>
                <CardDescription>
                  Vereinbaren Sie einen Termin bei Ihnen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#form">
                    <User className="mr-2 h-4 w-4" />
                    Termin vereinbaren
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              So finden Sie uns
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Besuchen Sie uns in unserem Büro oder vereinbaren Sie einen Termin
              vor Ort bei Ihrem Projekt.
            </p>
          </div>

          <div className="flex h-96 items-center justify-center rounded-lg bg-gray-200">
            <div className="text-center">
              <MapPin className="text-primary mx-auto mb-4 h-16 w-16" />
              <h3 className="mb-2 text-xl font-semibold">Standort Karte</h3>
              <p className="text-muted-foreground mb-4">
                Musterstraße 123, 12345 Musterstadt
              </p>
              <Button asChild>
                <Link href="https://maps.google.com" target="_blank">
                  Route planen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
