'use client';
import { useDarkMode } from './DarkModeProvider';

export default function DarkModeToggle() {
  const { dark, toggle } = useDarkMode();
  return (
    <button aria-label="Dark Mode" onClick={toggle} className="ml-4">
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
