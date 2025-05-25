import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Award, Star, Mail, Phone, Linkedin } from "lucide-react";

export default function TeamPage() {
  const leadership = [
    {
      name: "Marcus Kowalski",
      position: "Geschäftsführer",
      description:
        "Mit über 20 Jahren Erfahrung im Bauwesen leitet Marcus das Unternehmen mit Leidenschaft und Expertise.",
      specialties: ["Unternehmensführung", "Projektleitung", "Kundenberatung"],
      image: "👨‍💼",
    },
    {
      name: "Petra Müller",
      position: "Prokuristin & Teamleitung",
      description:
        "Petra koordiniert unsere Teams und sorgt für reibungslose Projektabläufe in allen Geschäftsbereichen.",
      specialties: ["Teamführung", "Qualitätssicherung", "Projektmanagement"],
      image: "👩‍💼",
    },
  ];

  const departments = [
    {
      title: "Logistik-Team",
      description:
        "Unser Logistik-Team sorgt für pünktliche und zuverlässige Lieferungen.",
      teamSize: "8 Mitarbeiter",
      expertise: ["Transportplanung", "Baustellenlogistik", "Materialhandling"],
      lead: "Stefan Weber",
    },
    {
      title: "Gala Bau Team",
      description:
        "Kreative Gartengestalter und erfahrene Landschaftsbauer für Ihre Projekte.",
      teamSize: "12 Mitarbeiter",
      expertise: ["Gartengestaltung", "Pflasterarbeiten", "Bepflanzung"],
      lead: "Andrea Schmidt",
    },
    {
      title: "Heizungstechnik",
      description:
        "Zertifizierte Heizungsinstallateure für moderne und effiziente Lösungen.",
      teamSize: "6 Mitarbeiter",
      expertise: ["Installation", "Wartung", "Modernisierung"],
      lead: "Thomas Fischer",
    },
    {
      title: "Abbruch & Umbau",
      description:
        "Spezialisierte Fachkräfte für sichere Abbruch- und Umbauarbeiten.",
      teamSize: "10 Mitarbeiter",
      expertise: ["Abbrucharbeiten", "Kernsanierung", "Umbauten"],
      lead: "Michael Bauer",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Gemeinsam erreichen wir mehr - in jedem Projekt setzen wir auf starke Zusammenarbeit.",
    },
    {
      icon: Award,
      title: "Qualität",
      description:
        "Wir streben nach höchster Qualität in allem was wir tun - das ist unser Anspruch.",
    },
    {
      icon: Star,
      title: "Innovation",
      description:
        "Moderne Techniken und innovative Lösungen halten uns an der Spitze unserer Branche.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="from-primary/90 to-primary text-primary-foreground relative bg-gradient-to-br">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="mx-auto mb-6 w-fit rounded-full bg-white/10 p-4">
            <Users className="h-12 w-12" />
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Unser Team</h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Lernen Sie die Menschen kennen, die Makopa Bau GmbH zu dem machen,
            was wir sind - ein zuverlässiger Partner mit Leidenschaft für das
            Handwerk.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/kontakt">Teil unseres Teams werden</Link>
          </Button>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unsere Geschäftsführung
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Mit Erfahrung, Leidenschaft und Vision führen wir das Unternehmen
              in die Zukunft.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {leadership.map((leader) => (
              <Card key={leader.name} className="h-full text-center">
                <CardHeader>
                  <div className="mb-4 text-6xl">{leader.image}</div>
                  <CardTitle className="text-2xl">{leader.name}</CardTitle>
                  <CardDescription className="text-primary text-lg font-medium">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {leader.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Schwerpunkte:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {leader.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teams by Department */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unsere Fachbereiche
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Erfahrene Spezialisten in allen Bereichen unserer Tätigkeit sorgen
              für erstklassige Ergebnisse.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {departments.map((dept) => (
              <Card key={dept.title} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{dept.title}</CardTitle>
                      <CardDescription className="text-primary text-sm font-medium">
                        {dept.teamSize}
                      </CardDescription>
                    </div>
                  </div>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {dept.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t pt-2">
                      <p className="text-sm">
                        <span className="font-medium">Teamleitung:</span>{" "}
                        {dept.lead}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Unsere Werte
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Diese Prinzipien leiten uns in unserer täglichen Arbeit und im
              Umgang miteinander.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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

      {/* Company Stats */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Makopa Bau in Zahlen
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Unsere Erfolgsgeschichte in Zahlen zeigt, warum Kunden uns
              vertrauen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                number: "36+",
                label: "Erfahrene Mitarbeiter",
                description: "In allen Bereichen",
              },
              {
                number: "15+",
                label: "Jahre Erfahrung",
                description: "Am Markt etabliert",
              },
              {
                number: "500+",
                label: "Zufriedene Kunden",
                description: "Vertrauen uns",
              },
              {
                number: "1000+",
                label: "Abgeschlossene Projekte",
                description: "Erfolgreich realisiert",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-primary mb-2 text-4xl font-bold">
                  {stat.number}
                </div>
                <div className="mb-1 text-lg font-semibold">{stat.label}</div>
                <div className="text-muted-foreground text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="from-primary/10 to-primary/5 rounded-2xl bg-gradient-to-r p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Karriere bei Makopa Bau
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                Werden Sie Teil unseres Teams und gestalten Sie die Zukunft des
                Handwerks mit uns.
              </p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-2xl">🎯</div>
                <div className="mb-1 font-semibold">Weiterbildung</div>
                <div className="text-muted-foreground text-sm">
                  Regelmäßige Schulungen und Zertifizierungen
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-2xl">⚖️</div>
                <div className="mb-1 font-semibold">Work-Life-Balance</div>
                <div className="text-muted-foreground text-sm">
                  Flexible Arbeitszeiten und faire Bezahlung
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-2xl">🚀</div>
                <div className="mb-1 font-semibold">Aufstiegschancen</div>
                <div className="text-muted-foreground text-sm">
                  Karrieremöglichkeiten in allen Bereichen
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Interessiert an einer Karriere bei uns? Wir freuen uns auf Ihre
                Bewerbung!
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild>
                  <Link href="/kontakt">Initiativbewerbung senden</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="mailto:jobs@makopa-bau.de">
                    <Mail className="mr-2 h-4 w-4" />
                    jobs@makopa-bau.de
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Lernen Sie uns persönlich kennen
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Vereinbaren Sie einen Termin für ein persönliches Gespräch. Wir
            freuen uns darauf, Sie kennenzulernen und Ihr Projekt zu besprechen.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontakt">Termin vereinbaren</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
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
