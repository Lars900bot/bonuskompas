'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { href: '/', label: 'Bonusser' },
  { href: '/free-spins', label: 'Free Spins' },
  { href: '/gratis-spins', label: 'Gratis Spins' },
  { href: '/velkomstbonus', label: 'Velkomstbonus' },
  { href: '/ingen-indskud-bonus', label: 'Ingen Indskud' },
  { href: '/guide/hvad-er-wagering', label: 'Wagering Guide' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#f59e0b]/30"
      style={{ background: '#0f0222' }}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#f59e0b] flex items-center justify-center">
            <Compass className="w-5 h-5 text-[#1a0533]" />
          </div>
          <span className="text-xl font-bold text-white">
            Bonus<span className="text-[#f59e0b]">Kompas</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-[#f59e0b] text-[#1a0533]'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#f59e0b]/20 py-3 px-4" style={{ background: '#0f0222' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                'block px-3 py-2.5 rounded-md text-sm font-medium mb-1 transition-colors',
                pathname === link.href
                  ? 'bg-[#f59e0b] text-[#1a0533]'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
