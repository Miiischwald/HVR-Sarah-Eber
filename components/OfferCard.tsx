import Image from 'next/image';

interface Props {
  title: string;
  img: string;
}

export default function OfferCard({ title, img }: Props) {
  return (
    <div className="card shadow-md rounded-md overflow-hidden" role="article">
      <Image src={img} alt="" width={400} height={300} className="w-full h-auto" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <button className="bg-accent text-black px-4 py-2 rounded-md">Ansehen</button>
      </div>
    </div>
  );
}
