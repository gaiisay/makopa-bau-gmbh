import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Flame,
  Thermometer,
  Zap,
  Leaf,
  CheckCircle,
  Phone,
  Wrench,
  Timer,
} from "lucide-react";

export default function HeizungPage() {
  const services = [
    {
      title: "Heizungsinstallation",
      description:
        "Moderne Heizungsanlagen für Neubauten und Sanierungen - effizient und umweltfreundlich.",
      features: [
        "Gas-Brennwertkessel",
        "Wärmepumpen",
        "Pelletheizungen",
        "Solarthermie",
      ],
    },
    {
      title: "Wartung & Service",
      description:
        "Regelmäßige Wartung und schneller Reparaturservice für alle Heizungstypen.",
      features: [
        "Wartungsverträge",
        "24h-Notdienst",
        "Reparaturen",
        "Ersatzteilservice",
      ],
    },
    {
      title: "Modernisierung",
      description:
        "Heizungsmodernisierung für mehr Effizienz und geringere Heizkosten.",
      features: [
        "Energieberatung",
        "Fördermittelberatung",
        "Hybridlösungen",
        "Smart Home Integration",
      ],
    },
  ];

  const technologies = [
    {
      icon: Flame,
      title: "Gas-Brennwert",
      description: "Hocheffiziente Gasheizungen mit Brennwerttechnik",
      efficiency: "bis zu 98%",
    },
    {
      icon: Zap,
      title: "Wärmepumpe",
      description: "Umweltfreundliche Wärmeerzeugung aus der Luft",
      efficiency: "COP bis 5,5",
    },
    {
      icon: Leaf,
      title: "Pelletheizung",
      description: "CO2-neutrale Heizung mit Holzpellets",
      efficiency: "bis zu 95%",
    },
    {
      icon: Thermometer,
      title: "Hybridlösungen",
      description: "Kombination verschiedener Heiztechnologien",
      efficiency: "optimal",
    },
  ];

  const advantages = [
    {
      icon: Timer,
      title: "Schnelle Installation",
      description: "Professionelle und termingerechte Montage",
    },
    {
      icon: Wrench,
      title: "Fachkompetenz",
      description: "Zertifizierte Heizungsinstallateure",
    },
    {
      icon: Leaf,
      title: "Umweltfreundlich",
      description: "Moderne und nachhaltige Heiztechnik",
    },
    {
      icon: CheckCircle,
      title: "Garantie",
      description: "Langfristige Garantie auf alle Arbeiten",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="mx-auto mb-6 w-fit rounded-full bg-white/10 p-4">
            <Flame className="h-12 w-12" />
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Heizung</h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Installation, Wartung und Modernisierung von Heizungsanlagen.
            Effiziente und umweltfreundliche Wärmelösungen für Ihr Zuhause.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/kontakt">Heizungsberatung anfordern</Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unsere Heizungsleistungen
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Von der Installation bis zur Wartung - wir sind Ihr kompetenter
              Partner für alle Heizungsthemen.
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

      {/* Technologies */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Moderne Heiztechnologien
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Wir installieren die neuesten und effizientesten Heizungssysteme
              für maximalen Komfort.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <Card key={tech.title} className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-fit rounded-full bg-orange-100 p-4">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{tech.title}</CardTitle>
                    <CardDescription>{tech.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg bg-orange-50 p-3">
                      <span className="text-sm font-medium text-orange-800">
                        Effizienz: {tech.efficiency}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ihre Vorteile
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Warum Sie uns für Ihr Heizungsprojekt wählen sollten.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => {
              const IconComponent = advantage.icon;
              return (
                <div key={advantage.title} className="text-center">
                  <div className="mx-auto mb-4 w-fit rounded-full bg-orange-100 p-4">
                    <IconComponent className="h-8 w-8 text-orange-600" />
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
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Von der Beratung zur neuen Heizung
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              So läuft Ihr Heizungsprojekt mit uns ab.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Beratung",
                description: "Kostenlose Beratung und Vor-Ort-Besichtigung",
              },
              {
                step: "02",
                title: "Planung",
                description: "Individuelle Planung und Angebotserstellung",
              },
              {
                step: "03",
                title: "Installation",
                description: "Professionelle Installation durch Fachkräfte",
              },
              {
                step: "04",
                title: "Service",
                description: "Wartung und Service für lange Lebensdauer",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Förderungen */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-orange-50 to-red-50 p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Staatliche Förderungen nutzen
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                Sparen Sie bis zu 40% der Investitionskosten durch staatliche
                Förderprogramme.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-orange-600">
                  bis 40%
                </div>
                <div className="text-muted-foreground text-sm">
                  BEG-Förderung für Wärmepumpen
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-orange-600">
                  bis 20%
                </div>
                <div className="text-muted-foreground text-sm">
                  Für Gas-Brennwertkessel
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-orange-600">
                  bis 35%
                </div>
                <div className="text-muted-foreground text-sm">
                  Für Biomasse-Heizungen
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Wir unterstützen Sie bei der Beantragung aller verfügbaren
                Fördermittel.
              </p>
              <Button asChild>
                <Link href="/kontakt">Fördermittelberatung anfordern</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Neue Heizung geplant?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Lassen Sie sich von unseren Heizungsexperten beraten. Wir finden die
            optimale Lösung für Ihr Zuhause.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontakt">Kostenlose Beratung</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-orange-600"
            >
              <Link href="tel:+491234567890">
                <Phone className="mr-2 h-4 w-4" />
                Notdienst anrufen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
