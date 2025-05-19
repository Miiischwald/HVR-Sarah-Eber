/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--brand-primary)',
        accent: 'var(--brand-accent)',
        light: 'var(--brand-light)',
      },
    },
  },
  plugins: [],
};
