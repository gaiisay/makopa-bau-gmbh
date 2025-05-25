import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Truck, Clock, MapPin, Shield, CheckCircle, Phone } from "lucide-react";

export default function LogistikPage() {
  const services = [
    {
      title: "Baustellenlogistik",
      description:
        "Professionelle Logistiklösungen für Ihre Baustelle - von der Planung bis zur Ausführung.",
      features: [
        "Anlieferungsplanung",
        "Materialbereitstellung",
        "Just-in-Time Lieferung",
        "Lagerung vor Ort",
      ],
    },
    {
      title: "Materiallieferung",
      description:
        "Zuverlässige Lieferung von Baumaterialien aller Art direkt zu Ihrer Baustelle.",
      features: [
        "Baustoffe aller Art",
        "Flexible Lieferzeiten",
        "Kranservice verfügbar",
        "Expresslieferung möglich",
      ],
    },
    {
      title: "Entsorgung & Recycling",
      description:
        "Fachgerechte Entsorgung von Bauabfällen und umweltfreundliches Recycling.",
      features: [
        "Containerservice",
        "Sortierte Entsorgung",
        "Recycling-Lösungen",
        "Umweltgerechte Verwertung",
      ],
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Pünktliche Lieferung",
      description: "Zuverlässige Einhaltung der vereinbarten Lieferzeiten",
    },
    {
      icon: Truck,
      title: "Moderne Fahrzeugflotte",
      description: "Gut gewartete Fahrzeuge für sichere Transporte",
    },
    {
      icon: Shield,
      title: "Versicherte Transporte",
      description: "Vollversicherung für alle transportierten Materialien",
    },
    {
      icon: MapPin,
      title: "Regionale Abdeckung",
      description: "Schnelle Lieferung in der gesamten Region",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="mx-auto mb-6 w-fit rounded-full bg-white/10 p-4">
            <Truck className="h-12 w-12" />
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Logistik</h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Professionelle Transport- und Logistiklösungen für Bauprojekte aller
            Größenordnungen. Von der Planung bis zur Ausführung - wir bewegen
            was bewegt werden muss.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/kontakt">Logistik-Angebot anfordern</Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unsere Logistik-Dienstleistungen
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Umfassende Logistiklösungen für Ihr Bauprojekt - effizient,
              zuverlässig und kostengünstig.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ihre Vorteile
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Warum Sie sich für unsere Logistik-Dienstleistungen entscheiden
              sollten.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => {
              const IconComponent = advantage.icon;
              return (
                <div key={advantage.title} className="text-center">
                  <div className="mx-auto mb-4 w-fit rounded-full bg-blue-100 p-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unser Ablauf
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              So einfach gestalten wir Ihre Baustellenlogistik.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Beratung",
                description: "Kostenlose Bestandsaufnahme und Beratung vor Ort",
              },
              {
                step: "02",
                title: "Planung",
                description: "Detaillierte Logistikplanung für Ihr Projekt",
              },
              {
                step: "03",
                title: "Umsetzung",
                description: "Professionelle Durchführung nach Plan",
              },
              {
                step: "04",
                title: "Service",
                description: "Kontinuierlicher Support während des Projekts",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Brauchen Sie Logistik-Support?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Kontaktieren Sie uns für eine kostenlose Beratung zu Ihrem
            Logistik-Projekt. Wir finden die optimale Lösung für Ihre
            Anforderungen.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontakt">Beratungstermin vereinbaren</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="tel:+491234567890">
                <Phone className="mr-2 h-4 w-4" />
                Direkt anrufen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
