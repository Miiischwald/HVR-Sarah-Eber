import Image from 'next/image';

export interface OfferCardProps {
  title: string;
  src: string;
  alt: string;
}

export default function OfferCard({ title, src, alt }: OfferCardProps) {
  return (
    <article className="rounded-lg bg-white p-4 text-center shadow-md">
      <Image src={src} alt={alt} width={400} height={300} className="mx-auto h-auto" />
      <h3 className="mt-2 font-semibold">{title}</h3>
    </article>
  );
}
