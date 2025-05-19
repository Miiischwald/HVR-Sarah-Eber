'use client';
import { useState } from 'react';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header role="banner" className="sticky top-0 bg-primary text-white z-50">
      <nav role="navigation" className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <img src="/images/logo.png" alt="Hausverwaltung Ebner" className="w-40" />
        </Link>
        <button
          className="md:hidden"
          aria-label="Menü umschalten"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <ul className={`md:flex gap-4 ${open ? 'block' : 'hidden'} md:block`} id="nav-list">
          <li><Link href="#eigentuemer">Für Eigentümer</Link></li>
          <li><Link href="#mietwohnungen">Mietwohnungen</Link></li>
          <li><Link href="#gewerbe">Gewerbe</Link></li>
          <li><Link href="#kontakt">Kontakt</Link></li>
        </ul>
        <DarkModeToggle />
      </nav>
    </header>
  );
}
