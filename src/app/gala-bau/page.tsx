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
  TreePine,
  Sprout,
  Mountain,
  Waves,
  CheckCircle,
  Phone,
  Leaf,
} from "lucide-react";

export default function GalaBauPage() {
  const services = [
    {
      title: "Gartengestaltung",
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
      description:
        "Umfassende Landschaftsgestaltung für Wohn- und Gewerbegebiete.",
      features: ["Erdarbeiten", "Drainage", "Böschungsbau", "Rekultivierung"],
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

  const projects = [
    {
      title: "Privatgärten",
      description: "Traumgärten für Einfamilienhäuser und Villen",
      image: "🏡",
    },
    {
      title: "Gewerbeanlagen",
      description: "Repräsentative Außenanlagen für Unternehmen",
      image: "🏢",
    },
    {
      title: "Öffentliche Bereiche",
      description: "Parks, Spielplätze und Grünanlagen",
      image: "🌳",
    },
    {
      title: "Sportstätten",
      description: "Rasenplätze und Sportanlagen",
      image: "⚽",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="mx-auto mb-6 w-fit rounded-full bg-white/10 p-4">
            <TreePine className="h-12 w-12" />
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Gala Bau</h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Professionelle Gestaltung und Pflege von Außenanlagen, Gärten und
            öffentlichen Bereichen. Wir verwandeln Ihre Visionen in grüne
            Realität.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/kontakt">Gartenplanung anfragen</Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unsere Gala Bau Leistungen
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Von der ersten Planung bis zur laufenden Pflege - wir gestalten
              Ihre Außenanlagen professionell.
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

      {/* Project Types */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unsere Projekte
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Wir realisieren Gala Bau Projekte für verschiedenste Bereiche und
              Anforderungen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <Card key={project.title} className="h-full text-center">
                <CardHeader>
                  <div className="mb-4 text-4xl">{project.image}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unsere Stärken
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Was uns zu Ihrem idealen Partner für Garten- und Landschaftsbau
              macht.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => {
              const IconComponent = advantage.icon;
              return (
                <div key={advantage.title} className="text-center">
                  <div className="mx-auto mb-4 w-fit rounded-full bg-green-100 p-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
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
              Von der Idee zur grünen Oase
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              So realisieren wir Ihr Garten- und Landschaftsbauprojekt.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
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
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
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
      <section className="bg-green-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Bereit für Ihr Garten-Projekt?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Lassen Sie uns gemeinsam Ihren Traum-Garten planen und realisieren.
            Wir beraten Sie gerne kostenlos und unverbindlich.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontakt">Kostenlose Beratung</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-green-600"
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
