import OfferCard from '../components/OfferCard';
import HeroSection from '../components/HeroSection';

export default function HomePage() {
  return (
    <main role="main" className="mx-auto max-w-5xl p-6">
      <HeroSection />
      <section className="my-8" id="angebote">
        <h2 className="mb-4 text-2xl font-bold">Angebote</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <OfferCard
            title="1–2 Raum Wohnungen"
            src="https://www.hausverwaltung-ebner.de/fuxx/start_1-2_raum-wohnung.png"
            alt="1-2 Raum Wohnungen"
          />
          <OfferCard
            title="3–5 Raum Wohnungen"
            src="https://www.hausverwaltung-ebner.de/fuxx/start_3-4_raum-wohnung.png"
            alt="3-5 Raum Wohnungen"
          />
          <OfferCard
            title="Gewerbe zu vermieten"
            src="https://www.hausverwaltung-ebner.de/fuxx/start_garage_gewerbe.png"
            alt="Gewerbe zu vermieten"
          />
        </div>
      </section>
      <section className="my-8" id="regionen">
        <h2 className="mb-4 text-2xl font-bold">Regionale Leistungen</h2>
        <p>
          Bayern, Hessen, Sachsen, Thüringen, Sachsen-Anhalt, Niedersachsen,
          Nordrhein-Westfalen, Brandenburg, Berlin
        </p>
      </section>
      <section className="flex justify-center gap-4" id="cta">
        <a
          href="javascript:window.print()"
          className="rounded bg-brand-primary px-4 py-2 text-white"
        >
          Drucken
        </a>
        <a
          href="mailto:info@hausverwaltung-ebner.de"
          className="rounded bg-brand-primary px-4 py-2 text-white"
        >
          E-Mail
        </a>
      </section>
    </main>
  );
}
