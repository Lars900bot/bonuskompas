'use client';

import { useState } from 'react';
import { Zap, Gift, Ban, LayoutList } from 'lucide-react';
import type { Casino, BonusType } from '@/data/casinos';
import CasinoCard from './CasinoCard';
import clsx from 'clsx';

interface FilteredCasinoListProps {
  casinos: Casino[];
}

type FilterKey = 'alle' | BonusType;

const FILTERS: { key: FilterKey; label: string; icon: React.ReactNode }[] = [
  { key: 'alle', label: 'Alle bonusser', icon: <LayoutList className="w-4 h-4" /> },
  { key: 'free-spins', label: 'Free Spins', icon: <Zap className="w-4 h-4" /> },
  { key: 'ingen-indskud', label: 'Ingen indskud', icon: <Ban className="w-4 h-4" /> },
  { key: 'velkomst', label: 'Velkomstbonus', icon: <Gift className="w-4 h-4" /> },
];

export default function FilteredCasinoList({ casinos }: FilteredCasinoListProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('alle');

  const filtered =
    activeFilter === 'alle'
      ? casinos
      : casinos.filter((c) => c.bonusTypes.includes(activeFilter));

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={clsx(
              'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
              activeFilter === f.key
                ? 'bg-[#f59e0b] text-[#1a0533] shadow-lg shadow-[#f59e0b]/30'
                : 'bg-[#2d0a57] border border-[#3d1270] text-gray-300 hover:border-[#f59e0b]/50 hover:text-white'
            )}
          >
            {f.icon}
            {f.label}
            <span
              className={clsx(
                'text-xs px-1.5 py-0.5 rounded-full font-bold',
                activeFilter === f.key ? 'bg-[#1a0533]/30' : 'bg-[#1a0533]'
              )}
            >
              {f.key === 'alle'
                ? casinos.length
                : casinos.filter((c) => c.bonusTypes.includes(f.key as BonusType)).length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((casino, i) => (
            <CasinoCard key={casino.id} casino={casino} rank={i + 1} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-400">
          Ingen bonusser matcher dette filter.
        </div>
      )}
    </div>
  );
}
