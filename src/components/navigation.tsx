"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu, Phone, Mail, MapPin } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Logistik", href: "/logistik" },
    { name: "Gala Bau", href: "/gala-bau" },
    { name: "Heizung", href: "/heizung" },
    { name: "Abbruch & Umbau", href: "/abbruch-umbau" },
    { name: "Unser Team", href: "/team" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground px-8 lg:px-12">
        <div className="flex h-10 items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href="tel:+49123456789"
              className="flex items-center gap-2"
            >
              <Phone className="h-3 w-3" />
              <span>+49 (0) 123 456789</span>
            </Link>
            <Link
              target="_blank"
              href="mailto:info@makopa-bau.de"
              className="hidden items-center gap-2 md:flex"
            >
              <Mail className="h-3 w-3" />
              <span>info@makopa-bau.de</span>
            </Link>
          </div>
          <Link
            target="_blank"
            href="https://maps.app.goo.gl/1234567890"
            className="hidden items-center gap-2 md:flex"
          >
            <MapPin className="h-3 w-3" />
            <span>Musterstraße 123, 12345 Musterstadt</span>
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex h-16 items-center px-8 lg:px-12">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-primary text-2xl font-bold">Makopa</span>
          <span className="text-xl font-semibold">Bau GmbH</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center gap-4 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild>
            <Link href="/kontakt">Angebot anfordern</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild className="ml-auto md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu öffnen</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent side="bottom" align="end" className="w-64 p-4">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-2" size="sm">
                <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                  Angebot anfordern
                </Link>
              </Button>
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
