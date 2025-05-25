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
  Hammer,
  HardHat,
  Truck,
  Recycle,
  CheckCircle,
  Phone,
  Shield,
  Building,
} from "lucide-react";

export default function AbbruchUmbauPage() {
  const services = [
    {
      title: "Abbrucharbeiten",
      description:
        "Professioneller und sicherer Abbruch von Gebäuden und Bauteilen aller Art.",
      features: [
        "Selektiver Rückbau",
        "Komplettabbruch",
        "Sprengungen",
        "Entkernung",
      ],
    },
    {
      title: "Kernsanierung",
      description:
        "Vollständige Sanierung und Modernisierung bestehender Gebäude.",
      features: [
        "Entkernung",
        "Schadstoffsanierung",
        "Rohbauarbeiten",
        "Fassadensanierung",
      ],
    },
    {
      title: "Umbauarbeiten",
      description:
        "Umbau und Modernisierung für neue Raumkonzepte und Nutzungen.",
      features: ["Wanddurchbrüche", "Raumaufteilung", "Anbauten", "Dachausbau"],
    },
  ];

  const safetyFeatures = [
    {
      icon: HardHat,
      title: "Arbeitssicherheit",
      description: "Höchste Sicherheitsstandards bei allen Arbeiten",
    },
    {
      icon: Shield,
      title: "Versicherung",
      description: "Vollversicherung für alle Arbeiten und Schäden",
    },
    {
      icon: Recycle,
      title: "Umweltschutz",
      description: "Fachgerechte Entsorgung und Recycling",
    },
    {
      icon: Building,
      title: "Genehmigungen",
      description: "Unterstützung bei allen behördlichen Verfahren",
    },
  ];

  const projectTypes = [
    {
      title: "Wohngebäude",
      description: "Abbruch und Umbau von Ein- und Mehrfamilienhäusern",
      image: "🏠",
    },
    {
      title: "Gewerbeimmobilien",
      description: "Sanierung von Bürogebäuden und Gewerbeobjekten",
      image: "🏢",
    },
    {
      title: "Industrieanlagen",
      description: "Rückbau von Produktionsstätten und Fabriken",
      image: "🏭",
    },
    {
      title: "Infrastruktur",
      description: "Brücken, Straßen und öffentliche Bauten",
      image: "🌉",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="mx-auto mb-6 w-fit rounded-full bg-white/10 p-4">
            <Hammer className="h-12 w-12" />
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Abbruch & Umbau
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Fachgerechter Abbruch und professionelle Umbauarbeiten. Sicher,
            umweltgerecht und termingerecht - von der Planung bis zur
            Fertigstellung.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/kontakt">Abbruch-Angebot anfordern</Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unsere Abbruch- & Umbauleistungen
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Von selektivem Rückbau bis zur Kernsanierung - wir realisieren Ihr
              Bauvorhaben professionell.
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
              Unsere Projektbereiche
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Wir führen Abbruch- und Umbauarbeiten in verschiedensten Bereichen
              durch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map((project) => (
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

      {/* Safety & Environment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Sicherheit & Umweltschutz
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Bei allen Arbeiten stehen Sicherheit und Umweltschutz an oberster
              Stelle.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {safetyFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="text-center">
                  <div className="mx-auto mb-4 w-fit rounded-full bg-slate-100 p-4">
                    <IconComponent className="h-8 w-8 text-slate-700" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
              Unser Vorgehen
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              So führen wir Ihr Abbruch- oder Umbauprojekt sicher und effizient
              durch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Analyse",
                description: "Gebäudeanalyse und Schadstoffprüfung",
              },
              {
                step: "02",
                title: "Planung",
                description: "Detailplanung und Genehmigungsverfahren",
              },
              {
                step: "03",
                title: "Durchführung",
                description: "Sichere Ausführung mit modernster Technik",
              },
              {
                step: "04",
                title: "Entsorgung",
                description: "Fachgerechte Entsorgung und Recycling",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-700 text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-slate-50 to-gray-50 p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Moderne Technik & Ausrüstung
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                Wir setzen auf modernste Maschinen und Verfahren für effiziente
                und sichere Arbeiten.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-2xl">🚧</div>
                <div className="mb-1 font-semibold">Abbruchbagger</div>
                <div className="text-muted-foreground text-sm">
                  Spezialbagger für präzisen Abbruch
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-2xl">💎</div>
                <div className="mb-1 font-semibold">Diamanttechnik</div>
                <div className="text-muted-foreground text-sm">
                  Präzise Schnitte ohne Erschütterungen
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-2xl">🏗️</div>
                <div className="mb-1 font-semibold">Krane & Hebebühnen</div>
                <div className="text-muted-foreground text-sm">
                  Für Arbeiten in jeder Höhe
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Alle Maschinen werden regelmäßig gewartet und entsprechen den
                neuesten Sicherheitsstandards.
              </p>
              <Button asChild>
                <Link href="/kontakt">Mehr über unsere Technik erfahren</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Abbruch oder Umbau geplant?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Kontaktieren Sie uns für eine professionelle Beratung zu Ihrem
            Projekt. Wir erstellen Ihnen gerne ein kostenloses Angebot.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontakt">Kostenloses Angebot</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-slate-700"
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
