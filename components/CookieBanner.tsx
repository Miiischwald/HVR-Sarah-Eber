'use client';
import { useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-primary p-4 text-white">
      <p className="mb-2 text-sm">
        Diese Website verwendet Cookies, um Ihr Erlebnis zu verbessern.
      </p>
      <button
        className="mr-2 rounded bg-brand-accent px-3 py-1 text-sm"
        onClick={() => setVisible(false)}
      >
        Akzeptieren
      </button>
      <button
        className="rounded bg-gray-700 px-3 py-1 text-sm"
        onClick={() => setVisible(false)}
      >
        Ablehnen
      </button>
    </div>
  );
}
