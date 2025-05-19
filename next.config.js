/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.hausverwaltung-ebner.de'],
  },
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
  },
};

module.exports = nextConfig;
