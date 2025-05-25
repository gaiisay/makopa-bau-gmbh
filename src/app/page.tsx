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
  Truck,
  TreePine,
  Flame,
  Hammer,
  Users,
  Award,
  Clock,
  Shield,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const businessAreas = [
    {
      title: "Logistik",
      description:
        "Professionelle Transport- und Logistiklösungen für Bauprojekte aller Größenordnungen.",
      icon: Truck,
      href: "/logistik",
    },
    {
      title: "Gala Bau",
      description:
        "Gestaltung und Pflege von Außenanlagen, Gärten und öffentlichen Bereichen.",
      icon: TreePine,
      href: "/gala-bau",
    },
    {
      title: "Heizung",
      description:
        "Installation, Wartung und Modernisierung von Heizungsanlagen.",
      icon: Flame,
      href: "/heizung",
    },
    {
      title: "Abbruch & Umbau",
      description: "Fachgerechter Abbruch und professionelle Umbauarbeiten.",
      icon: Hammer,
      href: "/abbruch-umbau",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Qualität",
      description: "Höchste Qualitätsstandards in allen Bereichen",
    },
    {
      icon: Clock,
      title: "Zuverlässigkeit",
      description: "Pünktliche und termingerechte Ausführung",
    },
    {
      icon: Shield,
      title: "Sicherheit",
      description: "Einhaltung aller Sicherheitsvorschriften",
    },
    {
      icon: Users,
      title: "Erfahrung",
      description: "Langjährige Expertise im Handwerk",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-muted relative py-24 md:py-32">
        <div className="px-8 md:px-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Makopa Bau GmbH
                </h1>
                <p className="text-muted-foreground text-xl md:text-2xl">
                  Ihr zuverlässiger Partner für alle Handwerksleistungen
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/kontakt">Kontakt aufnehmen</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/geschaeftsbereiche">Unsere Leistungen</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Makopa Bau Projektbild"
                className="aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Geschäftsbereiche */}
      <section id="geschaeftsbereiche" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unsere Geschäftsbereiche
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Von der Logistik bis zum Umbau - wir bieten Ihnen umfassende
              Handwerksleistungen aus einer Hand.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {businessAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <Card
                  key={area.title}
                  className="group flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 group-hover:bg-primary/20 w-fit rounded-full p-3 transition-colors">
                        <IconComponent className="text-primary h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={area.href}>Mehr erfahren</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warum Makopa Bau */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Warum Makopa Bau GmbH?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Unsere Werte und Prinzipien, die uns zu Ihrem vertrauenswürdigen
              Partner machen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-4">
                    <IconComponent className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-primary-foreground bg-slate-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Bereit für Ihr nächstes Projekt?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Kontaktieren Sie uns für eine kostenlose Beratung und ein
            unverbindliches Angebot. Wir freuen uns auf Ihr Projekt!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link className="bg-transparent" href="tel:+491234567890">
                Direkt anrufen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
