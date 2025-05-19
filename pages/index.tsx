import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hausverwaltung Sarah Ebner – Startseite</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="p-4">
        <div className="container mx-auto flex items-center justify-between">
          <img
            src="https://www.hausverwaltung-ebner.de/fuxx/logo.png"
            alt="Hausverwaltung Ebner"
            className="max-w-[200px]"
          />
          <nav className="hidden md:block">
            <ul className="flex space-x-4 font-bold">
              <li><a href="#">Startseite</a></li>
              <li><a href="#eigentuemer">Für Eigentümer</a></li>
              <li><a href="#mietwohnungen">Mietwohnungen</a></li>
              <li><a href="#gewerbe">Gewerbe</a></li>
              <li><a href="#erstvermietung">Erstvermietung nach Sanierung</a></li>
              <li><a href="#betreutes">Betreutes Wohnen</a></li>
              <li><a href="#karriere">Karriere</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
              <li><a href="#ueberuns">Über uns</a></li>
              <li><a href="#referenzen">Referenzen</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="text-center relative">
          <img
            src="https://www.hausverwaltung-ebner.de/fuxx/startpic.jpg"
            alt="Außenansicht eines modernen Wohngebäudes bei Tageslicht"
            className="w-full h-auto"
          />
          <h1 className="text-3xl text-white font-bold drop-shadow-md mt-[-4rem]">
            Hausverwaltung Sarah Ebner
          </h1>
          <p className="my-4 text-lg">
            Die Hausverwaltung Sarah Ebner ist Ihr professioneller Ansprechpartner
            für die Verwaltung Ihrer Immobilie.
          </p>
        </section>

        <section className="py-8 bg-[color:var(--color-secondary)]">
          <h2 className="text-center text-2xl font-bold mb-4">Angebote</h2>
          <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
            <article className="bg-white p-4 text-center rounded-lg shadow">
              <img
                src="https://www.hausverwaltung-ebner.de/fuxx/start_1-2_raum-wohnung.png"
                alt="1-2 Raum Wohnungen"
                className="w-full h-auto"
              />
              <h3 className="mt-2 font-semibold">1–2 Raum Wohnungen</h3>
            </article>
            <article className="bg-white p-4 text-center rounded-lg shadow">
              <img
                src="https://www.hausverwaltung-ebner.de/fuxx/start_3-4_raum-wohnung.png"
                alt="3-5 Raum Wohnungen"
                className="w-full h-auto"
              />
              <h3 className="mt-2 font-semibold">3–5 Raum Wohnungen</h3>
            </article>
            <article className="bg-white p-4 text-center rounded-lg shadow">
              <img
                src="https://www.hausverwaltung-ebner.de/fuxx/start_garage_gewerbe.png"
                alt="Gewerbe zu vermieten"
                className="w-full h-auto"
              />
              <h3 className="mt-2 font-semibold">Gewerbe zu vermieten</h3>
            </article>
          </div>
        </section>

        <section className="py-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Regionale Leistungen</h2>
          <p>
            Bayern, Hessen, Sachsen, Thüringen, Sachsen-Anhalt, Niedersachsen,
            Nordrhein-Westfalen, Brandenburg, Berlin
          </p>
        </section>

        <section className="text-center py-8">
          <a href="javascript:window.print()" className="btn">
            <span className="icon-print" aria-hidden="true"></span> Drucken
          </a>
          <a href="mailto:info@hausverwaltung-ebner.de" className="btn">
            <span className="icon-envelope" aria-hidden="true"></span> E-Mail
          </a>
        </section>
      </main>

      <footer className="p-4 text-center text-sm">
        <address>Eckstraße 7, 09113 Chemnitz</address>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a href="#impressum">Impressum &amp; Bildrechte</a>
          </li>
          <li>
            <a href="#datenschutz">Datenschutz</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
