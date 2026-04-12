import Link from "next/link";
import { MapPin, Phone, Mail, Building } from "lucide-react";
import { Logo } from "./logo";

const NAVY = "#1A3A63";
const NAVY_LIGHT = "#224B7A";

export function Footer() {
  return (
    <footer className="text-slate-300" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Logo className="h-12" />
            <p className="mb-5 text-sm leading-relaxed">
              Ihr zuverlässiger Partner im Handwerk. Mit über 10 Jahren Erfahrung am Bau setzen wir auf Qualität und Kundenzufriedenheit
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Wolfhelmstr. 36, 50259 Pulheim
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary" />
                +49 (0) 2238 9356034
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary" />
                kontakt@makopa.de
              </div>
            </div>
          </div>

          {/* Business areas */}
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wider text-primary uppercase">
              Geschäftsbereiche
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/logistik"
                  className="transition-colors hover:text-white"
                >
                  Baustellenmanagement
                </Link>
              </li>
              <li>
                <Link
                  href="/gala-bau"
                  className="transition-colors hover:text-white"
                >
                  Erdarbeiten & Außenanlagen
                </Link>
              </li>
              <li>
                <Link
                  href="/abbruch-umbau"
                  className="transition-colors hover:text-white"
                >
                  Speziallösungen / Abbruch
                </Link>
              </li>
              <li>
                <Link
                  href="/heizung"
                  className="transition-colors hover:text-white"
                >
                  Vermietung
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wider text-primary uppercase">
              Schnellzugriff
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/team"
                  className="transition-colors hover:text-white"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="transition-colors hover:text-white"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="transition-colors hover:text-white"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="transition-colors hover:text-white"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wider text-primary uppercase">
              Öffnungszeiten Verwaltung
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Mittwoch:</span>
                <span>14:00 – 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Freitag:</span>
                <span>09:00 – 15:30</span>
              </div>
            </div>
            <h4 className="mt-5 mb-4 text-sm font-bold tracking-wider text-primary uppercase">
              Baustellenbetrieb
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Mo – Fr:</span>
                <span>07:00 – 17:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-400 md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} Makopa Bau GmbH. Alle Rechte
            vorbehalten.
          </span>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-slate-300">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-slate-300">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-slate-300">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
