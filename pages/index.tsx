import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Hausverwaltung Sarah Ebner – Startseite</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header role="banner" className="py-4">
        <div className="container mx-auto flex items-center justify-between px-6">
          <img src="https://www.hausverwaltung-ebner.de/fuxx/logo.png" alt="Hausverwaltung Ebner" className="max-w-[200px]" />
          <button
            className="nav-toggle"
            aria-label="Menü umschalten"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <nav role="navigation">
            <ul className={`nav-list md:flex ${open ? 'flex flex-col absolute bg-primary right-0 top-16 w-48' : 'hidden md:flex'}`} id="nav-list">
              <li className="md:ml-4"><a href="#">Startseite</a></li>
              <li className="md:ml-4"><a href="#eigentuemer">Für Eigentümer</a></li>
              <li className="md:ml-4"><a href="#mietwohnungen">Mietwohnungen</a></li>
              <li className="md:ml-4"><a href="#gewerbe">Gewerbe</a></li>
              <li className="md:ml-4"><a href="#erstvermietung">Erstvermietung nach Sanierung</a></li>
              <li className="md:ml-4"><a href="#betreutes">Betreutes Wohnen</a></li>
              <li className="md:ml-4"><a href="#karriere">Karriere</a></li>
              <li className="md:ml-4"><a href="#kontakt">Kontakt</a></li>
              <li className="md:ml-4"><a href="#ueberuns">Über uns</a></li>
              <li className="md:ml-4"><a href="#referenzen">Referenzen</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main role="main">
        <section className="hero text-center relative">
          <img src="https://www.hausverwaltung-ebner.de/fuxx/startpic.jpg" alt="Außenansicht eines modernen Wohngebäudes bei Tageslicht" loading="lazy" />
          <h1 className="-mt-16">Hausverwaltung Sarah Ebner</h1>
          <p className="tagline">Die Hausverwaltung Sarah Ebner ist Ihr professioneller Ansprechpartner für die Verwaltung Ihrer Immobilie.</p>
        </section>

        <section className="angebote py-8 px-6 bg-secondary">
          <h2 className="text-2xl font-bold mb-4">Angebote</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <article className="card">
              <img src="https://www.hausverwaltung-ebner.de/fuxx/start_1-2_raum-wohnung.png" alt="1-2 Raum Wohnungen" loading="lazy" />
              <h3 className="mt-2 font-bold">1–2 Raum Wohnungen</h3>
            </article>
            <article className="card">
              <img src="https://www.hausverwaltung-ebner.de/fuxx/start_3-4_raum-wohnung.png" alt="3-5 Raum Wohnungen" loading="lazy" />
              <h3 className="mt-2 font-bold">3–5 Raum Wohnungen</h3>
            </article>
            <article className="card">
              <img src="https://www.hausverwaltung-ebner.de/fuxx/start_garage_gewerbe.png" alt="Gewerbe zu vermieten" loading="lazy" />
              <h3 className="mt-2 font-bold">Gewerbe zu vermieten</h3>
            </article>
          </div>
        </section>

        <section className="regions py-8 px-6">
          <h2 className="text-2xl font-bold mb-2">Regionale Leistungen</h2>
          <p>Bayern, Hessen, Sachsen, Thüringen, Sachsen-Anhalt, Niedersachsen, Nordrhein-Westfalen, Brandenburg, Berlin</p>
        </section>

        <section className="cta text-center py-8 px-6">
          <a href="javascript:window.print()" className="btn"><span className="icon-print" aria-hidden="true"></span> Drucken</a>
          <a href="mailto:info@hausverwaltung-ebner.de" className="btn"><span className="icon-envelope" aria-hidden="true"></span> E-Mail</a>
        </section>
      </main>
      <footer className="footer text-center py-4">
        <div className="container mx-auto px-6">
          <address>Eckstraße 7, 09113 Chemnitz</address>
          <ul className="footer-links flex justify-center gap-4 mt-2">
            <li><a href="#impressum">Impressum &amp; Bildrechte</a></li>
            <li><a href="#datenschutz">Datenschutz</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
