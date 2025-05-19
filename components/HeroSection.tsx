import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative" role="banner">
      <Image
        src="/images/startpic.jpg"
        alt="Außenansicht eines modernen Wohngebäudes bei Tageslicht"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 container mx-auto py-24 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Hausverwaltung Sarah Ebner</h1>
        <p className="mb-6">Ihr professioneller Ansprechpartner für die Verwaltung Ihrer Immobilie.</p>
        <Link href="#kontakt" className="bg-accent text-black px-6 py-3 rounded-md">Kontakt aufnehmen</Link>
      </div>
    </section>
  );
}
