import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import DarkModeProvider from '../components/DarkModeProvider';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Hausverwaltung Sarah Ebner – Startseite',
  description: 'Professionelle Immobilienverwaltung in Bayern, Hessen, Sachsen und weiteren Bundesländern.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <DarkModeProvider>
          <Header />
          <main role="main" className="min-h-screen pt-20">{children}</main>
          <Footer />
          <CookieBanner />
        </DarkModeProvider>
      </body>
    </html>
  );
}
