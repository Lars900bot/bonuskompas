import Link from 'next/link';
import { Compass, Shield, AlertTriangle } from 'lucide-react';

const guideLinks = [
  { href: '/guide/hvad-er-wagering', label: 'Hvad er wagering?' },
  { href: '/guide/bonusvilkaar', label: 'Bonusvilkår forklaret' },
  { href: '/free-spins', label: 'Free spins guide' },
  { href: '/ingen-indskud-bonus', label: 'Ingen indskud bonus' },
  { href: '/velkomstbonus', label: 'Velkomstbonus guide' },
  { href: '/gratis-spins', label: 'Gratis spins' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#f59e0b]/20 mt-16" style={{ background: '#0f0222' }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#f59e0b] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#1a0533]" />
              </div>
              <span className="text-xl font-bold text-white">
                Bonus<span className="text-[#f59e0b]">Kompas</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              BonusKompas.dk hjælper danske spillere med at finde de bedste og
              mest ærlige casino bonusser. Vi sammenligner kun casinoer med
              Spillemyndighedens danske licens.
            </p>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-[#f59e0b] font-semibold mb-4">Guider & Oversigter</h3>
            <ul className="space-y-2">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#f59e0b] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ansvarligt spil */}
          <div>
            <h3 className="text-[#f59e0b] font-semibold mb-4">Ansvarligt Spil</h3>
            <div className="flex items-start gap-2 mb-3">
              <Shield className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
              <p className="text-gray-400 text-sm">
                Alle viste casinoer har dansk licens fra Spillemyndigheden.
              </p>
            </div>
            <div className="flex items-start gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
              <p className="text-gray-400 text-sm">
                Spil ansvarligt. Gambling kan skabe afhængighed. Hjælp: ROFUS.nu og Ludomani.dk
              </p>
            </div>
            <a
              href="https://www.rofus.nu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs px-3 py-1.5 rounded-md hover:bg-[#f59e0b]/20 transition-colors"
            >
              ROFUS – Udeluk dig selv
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-500 text-xs leading-relaxed max-w-3xl mx-auto">
            BonusKompas.dk er et uafhængigt sammenligningssite. Vi modtager affiliate-provision
            fra de viste casinoer, men dette påvirker ikke vores vurderinger. Kun spillere over
            18 år. Bonusvilkår gælder. Tjek altid det aktuelle casino for opdaterede vilkår.
            © {new Date().getFullYear()} BonusKompas.dk
          </p>
        </div>
      </div>
    </footer>
  );
}
