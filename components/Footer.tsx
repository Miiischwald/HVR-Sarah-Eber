export default function Footer() {
  return (
    <footer className="bg-brand-primary p-6 text-center text-white" role="contentinfo">
      <address>Eckstraße 7, 09113 Chemnitz</address>
      <ul className="flex justify-center gap-4">
        <li>
          <a href="#impressum" className="underline">
            Impressum &amp; Bildrechte
          </a>
        </li>
        <li>
          <a href="#datenschutz" className="underline">
            Datenschutz
          </a>
        </li>
      </ul>
    </footer>
  );
}
