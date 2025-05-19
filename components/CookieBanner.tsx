'use client';
import { useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-800 text-white p-4 flex justify-between items-center" role="dialog" aria-live="polite">
      <p>Diese Website verwendet Cookies.</p>
      <div className="flex gap-2">
        <button className="bg-accent text-black px-3 py-1 rounded" onClick={() => setVisible(false)}>Akzeptieren</button>
        <button className="border px-3 py-1 rounded" onClick={() => setVisible(false)}>Ablehnen</button>
      </div>
    </div>
  );
}
