import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-brand-primary text-white" role="banner">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-6">
        <img
          src="https://www.hausverwaltung-ebner.de/fuxx/logo.png"
          alt="Hausverwaltung Ebner"
          className="w-40"
        />
        <button
          className="md:hidden"
          aria-label="Menü umschalten"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav
          className={`${open ? 'block' : 'hidden'} absolute right-0 top-full bg-brand-primary md:static md:block`}
          role="navigation"
        >
          <ul className="flex flex-col gap-4 p-4 md:flex-row md:p-0">
            <li>
              <Link href="#">Startseite</Link>
            </li>
            <li>
              <Link href="#eigentuemer">Für Eigentümer</Link>
            </li>
            <li>
              <Link href="#mietwohnungen">Mietwohnungen</Link>
            </li>
            <li>
              <Link href="#gewerbe">Gewerbe</Link>
            </li>
            <li>
              <Link href="#kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
