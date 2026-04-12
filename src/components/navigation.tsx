"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Building, Menu, X } from "lucide-react";

const NAVY = "#0C2340";
const TEAL = "#0097A7";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Logistik", href: "/logistik" },
  { name: "Gala Bau", href: "/gala-bau" },
  { name: "Heizung", href: "/heizung" },
  { name: "Abbruch & Umbau", href: "/abbruch-umbau" },
  { name: "Team", href: "/team" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      {/* Top bar — navy */}
      <div style={{ backgroundColor: NAVY }} className="text-white/80">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs">
          <div className="flex items-center gap-6">
            <a
              href="tel:+49123456789"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3" />
              +49 (0) 123 456789
            </a>
            <a
              href="mailto:info@makopa-bau.de"
              className="hidden items-center gap-1.5 transition-colors hover:text-white md:flex"
            >
              <Mail className="h-3 w-3" />
              info@makopa-bau.de
            </a>
          </div>
          <div className="hidden items-center gap-1.5 md:flex">
            <MapPin className="h-3 w-3" />
            Musterstraße 123, 12345 Musterstadt
          </div>
        </div>
      </div>

      {/* Main nav — white, clean */}
      <div className="border-b border-slate-200/60 bg-white/98 backdrop-blur-lg">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ backgroundColor: TEAL }}
            >
              <Building className="h-5 w-5 text-white" />
            </div>
            <div>
              <span
                className="block text-xl font-bold tracking-tight"
                style={{ color: NAVY }}
              >
                Makopa Bau
              </span>
              <span className="block text-[10px] font-medium tracking-widest text-slate-400 uppercase">
                GmbH
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="ml-3 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: TEAL }}
            >
              Angebot anfordern
            </Link>
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-slate-200 bg-white px-6 py-4 lg:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2.5 text-sm font-medium text-slate-600"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
