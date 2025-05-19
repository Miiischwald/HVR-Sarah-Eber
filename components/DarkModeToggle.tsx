'use client';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);
  return (
    <button
      aria-label="Dark mode umschalten"
      onClick={() => setDark(!dark)}
      className="ml-4 rounded bg-brand-accent px-2 py-1 text-sm text-white"
    >
      {dark ? 'Light' : 'Dark'}
    </button>
  );
}
