import Link from "next/link";
import { MapPin, Phone, Mail, Building } from "lucide-react";

const NAVY = "#0C2340";
const NAVY_LIGHT = "#143054";
const TEAL = "#0097A7";
const TEAL_LIGHT = "#00ACC1";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A1F38" }} className="text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ backgroundColor: TEAL }}
              >
                <Building className="h-4.5 w-4.5 text-white" />
              </div>
              <div>
                <span className="block text-lg font-bold text-white">
                  Makopa Bau
                </span>
                <span className="block text-[10px] font-medium tracking-widest text-slate-500 uppercase">
                  GmbH
                </span>
              </div>
            </div>
            <p className="mb-5 text-sm leading-relaxed">
              Ihr zuverlässiger Partner im Handwerk. Seit über 15 Jahren setzen
              wir auf Qualität und Kundenzufriedenheit.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" style={{ color: TEAL }} />
                Musterstraße 123, 12345 Musterstadt
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" style={{ color: TEAL }} />
                +49 (0) 123 456789
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" style={{ color: TEAL }} />
                info@makopa-bau.de
              </div>
            </div>
          </div>

          {/* Business areas */}
          <div>
            <h4
              className="mb-4 text-sm font-bold tracking-wider uppercase"
              style={{ color: TEAL_LIGHT }}
            >
              Geschäftsbereiche
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/logistik"
                  className="transition-colors hover:text-white"
                >
                  Logistik
                </Link>
              </li>
              <li>
                <Link
                  href="/gala-bau"
                  className="transition-colors hover:text-white"
                >
                  Gala Bau
                </Link>
              </li>
              <li>
                <Link
                  href="/heizung"
                  className="transition-colors hover:text-white"
                >
                  Heizung
                </Link>
              </li>
              <li>
                <Link
                  href="/abbruch-umbau"
                  className="transition-colors hover:text-white"
                >
                  Abbruch & Umbau
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="mb-4 text-sm font-bold tracking-wider uppercase"
              style={{ color: TEAL_LIGHT }}
            >
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
            <h4
              className="mb-4 text-sm font-bold tracking-wider uppercase"
              style={{ color: TEAL_LIGHT }}
            >
              Öffnungszeiten
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Mo – Fr:</span>
                <span>07:00 – 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Samstag:</span>
                <span>08:00 – 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sonntag:</span>
                <span>Geschlossen</span>
              </div>
              <div
                className="mt-4 rounded-lg p-3 text-center"
                style={{ backgroundColor: NAVY_LIGHT }}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: TEAL_LIGHT }}
                >
                  Notdienst 24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-500 md:flex-row">
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
