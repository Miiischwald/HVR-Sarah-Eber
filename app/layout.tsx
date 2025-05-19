import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Hausverwaltung Sarah Ebner – Startseite',
  description: 'Professionelle Verwaltung Ihrer Immobilie'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="bg-brand-light text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
