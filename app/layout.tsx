import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'BonusKompas.dk – Bedste Casino Bonusser & Free Spins 2025',
    template: '%s | BonusKompas.dk',
  },
  description:
    'Find de bedste casino bonusser og free spins i Danmark. Kun Spillemyndigheds-licenserede casinoer. Sammenlign velkomstbonusser, ingen indskud bonusser og free spins.',
  keywords: [
    'casino bonus',
    'free spins',
    'gratis spins',
    'velkomstbonus',
    'ingen indskud bonus',
    'dansk casino',
    'Spillemyndigheden',
    'casino Danmark',
  ],
  metadataBase: new URL('https://bonuskompas.dk'),
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    siteName: 'BonusKompas.dk',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
