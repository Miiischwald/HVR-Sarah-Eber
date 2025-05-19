export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-primary text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <address>Eckstraße 7, 09113 Chemnitz</address>
        <ul className="flex gap-4">
          <li><a href="#impressum">Impressum & Bildrechte</a></li>
          <li><a href="#datenschutz">Datenschutz</a></li>
        </ul>
      </div>
    </footer>
  );
}
