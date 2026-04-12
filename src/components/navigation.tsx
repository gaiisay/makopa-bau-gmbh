"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Building,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Logo } from "./logo";

const NAVY_LIGHT = "#224B7A";

const leistungen = [
  { name: "Baustellenmanagement", href: "/logistik" },
  { name: "Außenanlagen", href: "/gala-bau" },
  { name: "Speziallösungen / Abbruch", href: "/abbruch-umbau" },
  { name: "Vermietung", href: "/heizung" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      {/* Top bar — navy */}
      <div className="text-white" style={{ backgroundColor: NAVY_LIGHT }}>
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs">
          <div className="flex items-center gap-6">
            <a
              href="tel:+4922389356034"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3" />
              +49 (0) 2238 9356034
            </a>
            <a
              href="mailto:kontakt@makopa.de"
              className="hidden items-center gap-1.5 transition-colors hover:text-white md:flex"
            >
              <Mail className="h-3 w-3" />
              kontakt@makopa.de
            </a>
          </div>
          <div className="hidden items-center gap-1.5 md:flex">
            <MapPin className="h-3 w-3" />
            Wolfhelmstr. 36, 50259 Pulheim
          </div>
        </div>
      </div>

      {/* Main nav — white, clean */}
      <div className="border-b border-slate-200/60 bg-white/98 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className="rounded-md px-4 py-2 text-[15px] font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              Home
            </Link>

            {/* Leistungen Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto rounded-md bg-transparent px-4 py-2 text-[15px] font-medium text-slate-600 shadow-none transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 data-[state=open]:bg-slate-50">
                    Leistungen
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-0.5 p-1.5">
                      {leistungen.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/team"
              className="rounded-md px-4 py-2 text-[15px] font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              Team
            </Link>
            <Link
              href="/kontakt"
              className="rounded-md px-4 py-2 text-[15px] font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              Kontakt
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
          <Link
            href="/"
            className="block py-2.5 text-sm font-medium text-slate-600"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Leistungen Accordion */}
          <button
            className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-slate-600"
            onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
          >
            Leistungen
            <ChevronDown
              className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${mobileLeistungenOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileLeistungenOpen && (
            <div className="pl-4">
              {leistungen.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm text-slate-500"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/team"
            className="block py-2.5 text-sm font-medium text-slate-600"
            onClick={() => setMobileOpen(false)}
          >
            Team
          </Link>
          <Link
            href="/kontakt"
            className="block py-2.5 text-sm font-medium text-slate-600"
            onClick={() => setMobileOpen(false)}
          >
            Kontakt
          </Link>
        </motion.div>
      )}
    </header>
  );
}
