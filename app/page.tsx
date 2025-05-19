import HeroSection from '../components/HeroSection';
import OfferCard from '../components/OfferCard';
import ServiceModule from '../components/ServiceModule';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OfferCard title="1-2 Raum Wohnungen" img="/images/start_1-2_raum-wohnung.png" />
        <OfferCard title="3-5 Raum Wohnungen" img="/images/start_3-4_raum-wohnung.png" />
        <OfferCard title="Gewerbe zu vermieten" img="/images/start_garage_gewerbe.png" />
      </section>
      <section className="container mx-auto my-8 grid gap-6">
        <ServiceModule />
      </section>
    </>
  );
}
