import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative text-center">
      <Image
        src="https://www.hausverwaltung-ebner.de/fuxx/startpic.jpg"
        alt="Außenansicht eines modernen Wohngebäudes bei Tageslicht"
        width={1200}
        height={600}
        className="h-auto w-full object-cover"
        priority
      />
      <h1 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-brand-light drop-shadow">
        Hausverwaltung Sarah Ebner
      </h1>
      <p className="mt-4 text-lg font-semibold">
        Die Hausverwaltung Sarah Ebner ist Ihr professioneller Ansprechpartner
        für die Verwaltung Ihrer Immobilie.
      </p>
    </section>
  );
}
