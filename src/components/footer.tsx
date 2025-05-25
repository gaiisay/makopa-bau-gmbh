import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const businessAreas = [
    { name: "Logistik", href: "/logistik" },
    { name: "Gala Bau", href: "/gala-bau" },
    { name: "Heizung", href: "/heizung" },
    { name: "Abbruch & Umbau", href: "/abbruch-umbau" },
  ];

  const quickLinks = [
    { name: "Über uns", href: "/team" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ];

  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex items-center space-x-2">
              <span className="text-primary text-2xl font-bold">Makopa</span>
              <span className="text-xl font-semibold">Bau GmbH</span>
            </div>
            <p className="mb-4">
              Ihr zuverlässiger Partner im Handwerk. Seit über 15 Jahren setzen
              wir auf Qualität, Zuverlässigkeit und Kundenzufriedenheit.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="text-primary h-4 w-4" />
                <span>Musterstraße 123, 12345 Musterstadt</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="text-primary h-4 w-4" />
                <Link href="tel:+491234567890" className="hover:text-primary">
                  +49 (0) 123 456789
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="text-primary h-4 w-4" />
                <Link
                  href="mailto:info@makopa-bau.de"
                  className="hover:text-primary"
                >
                  info@makopa-bau.de
                </Link>
              </div>
            </div>
          </div>

          {/* Business Areas */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Geschäftsbereiche</h3>
            <ul className="space-y-3">
              {businessAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="hover:text-primary transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Schnellzugriff</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-6 flex items-center text-lg font-semibold">
              <Clock className="mr-2 h-5 w-5" />
              Öffnungszeiten
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="">Mo - Fr:</span>
                <span>07:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span className="">Samstag:</span>
                <span>08:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span className="">Sonntag:</span>
                <span>Geschlossen</span>
              </div>
              <Separator className="my-3 bg-gray-700" />
              <div className="text-center">
                <span className="text-primary font-medium">Notdienst 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Makopa Bau GmbH. Alle Rechte
              vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/impressum"
                className="hover:text-primary text-gray-400"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="hover:text-primary text-gray-400"
              >
                Datenschutz
              </Link>
              <Link href="/agb" className="hover:text-primary text-gray-400">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
