const services = [
  'Mietverwaltung',
  'WEG',
  'SE',
  'Mietpool',
];

export default function ServiceModule() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {services.map((s) => (
        <div key={s} className="p-6 border rounded-md" role="article">
          <h3 className="text-lg font-bold mb-2">{s}</h3>
          <p>Professionelle Verwaltung Ihrer Objekte im Bereich {s}.</p>
        </div>
      ))}
    </div>
  );
}
