import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hausverwaltung Sarah Ebner – Startseite</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header role="banner" className="bg-primary text-white py-4">
        <div className="container mx-auto flex items-center justify-between px-6">
          <img src="https://www.hausverwaltung-ebner.de/fuxx/logo.png" alt="Hausverwaltung Ebner" className="max-w-[200px]" />
          <nav role="navigation">
            <ul className="hidden md:flex space-x-4 font-bold" id="nav-list">
              <li><a href="#" className="hover:underline">Startseite</a></li>
              <li><a href="#eigentuemer" className="hover:underline">Für Eigentümer</a></li>
              <li><a href="#mietwohnungen" className="hover:underline">Mietwohnungen</a></li>
              <li><a href="#gewerbe" className="hover:underline">Gewerbe</a></li>
              <li><a href="#erstvermietung" className="hover:underline">Erstvermietung nach Sanierung</a></li>
              <li><a href="#betreutes" className="hover:underline">Betreutes Wohnen</a></li>
              <li><a href="#karriere" className="hover:underline">Karriere</a></li>
              <li><a href="#kontakt" className="hover:underline">Kontakt</a></li>
              <li><a href="#ueberuns" className="hover:underline">Über uns</a></li>
              <li><a href="#referenzen" className="hover:underline">Referenzen</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main role="main">
        <section className="text-center relative">
          <img src="https://www.hausverwaltung-ebner.de/fuxx/startpic.jpg" alt="Außenansicht eines modernen Wohngebäudes bei Tageslicht" className="w-full" />
          <h1 className="mt-[-4rem] text-white text-3xl md:text-4xl drop-shadow">Hausverwaltung Sarah Ebner</h1>
          <p className="mt-4 text-lg">Die Hausverwaltung Sarah Ebner ist Ihr professioneller Ansprechpartner für die Verwaltung Ihrer Immobilie.</p>
        </section>
        <section className="bg-secondary py-8 px-6" id="angebote">
          <h2 className="text-2xl mb-6 text-center">Angebote</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="bg-white rounded-lg shadow p-4 text-center">
              <img src="https://www.hausverwaltung-ebner.de/fuxx/start_1-2_raum-wohnung.png" alt="1-2 Raum Wohnungen" className="w-full" />
              <h3 className="mt-2 text-lg font-semibold">1–2 Raum Wohnungen</h3>
            </article>
            <article className="bg-white rounded-lg shadow p-4 text-center">
              <img src="https://www.hausverwaltung-ebner.de/fuxx/start_3-4_raum-wohnung.png" alt="3-5 Raum Wohnungen" className="w-full" />
              <h3 className="mt-2 text-lg font-semibold">3–5 Raum Wohnungen</h3>
            </article>
            <article className="bg-white rounded-lg shadow p-4 text-center">
              <img src="https://www.hausverwaltung-ebner.de/fuxx/start_garage_gewerbe.png" alt="Gewerbe zu vermieten" className="w-full" />
              <h3 className="mt-2 text-lg font-semibold">Gewerbe zu vermieten</h3>
            </article>
          </div>
        </section>
        <section className="py-8 px-6 text-center" id="regions">
          <h2 className="text-2xl mb-4">Regionale Leistungen</h2>
          <p>Bayern, Hessen, Sachsen, Thüringen, Sachsen-Anhalt, Niedersachsen, Nordrhein-Westfalen, Brandenburg, Berlin</p>
        </section>
        <section className="py-8 text-center space-x-4" id="cta">
          <a href="javascript:window.print()" className="inline-block bg-primary text-white px-6 py-2 rounded-md font-bold"><span className="icon-print" aria-hidden="true"></span> Drucken</a>
          <a href="mailto:info@hausverwaltung-ebner.de" className="inline-block bg-primary text-white px-6 py-2 rounded-md font-bold"><span className="icon-envelope" aria-hidden="true"></span> E-Mail</a>
        </section>
      </main>
      <footer className="bg-primary text-white py-4 text-center">
        <div className="container mx-auto px-6">
          <address>Eckstraße 7, 09113 Chemnitz</address>
          <ul className="mt-2 space-x-4">
            <li className="inline"><a href="#impressum" className="hover:underline">Impressum &amp; Bildrechte</a></li>
            <li className="inline"><a href="#datenschutz" className="hover:underline">Datenschutz</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
