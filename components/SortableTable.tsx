'use client';

import { useState } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown, ExternalLink, Star, Zap, Gift } from 'lucide-react';
import type { Casino } from '@/data/casinos';
import clsx from 'clsx';

type SortKey = 'freeSpins' | 'bonusAmount' | 'wageringRequirement' | 'rating';
type SortDir = 'asc' | 'desc';

interface SortableTableProps {
  casinos: Casino[];
}

export default function SortableTable({ casinos }: SortableTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('rating');
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  };

  const sorted = [...casinos].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    const dir = sortDir === 'asc' ? 1 : -1;
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return (aVal - bVal) * dir;
    }
    return 0;
  });

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <ArrowUpDown className="w-4 h-4 opacity-50" />;
    return sortDir === 'asc'
      ? <ArrowUp className="w-4 h-4 text-[#f59e0b]" />
      : <ArrowDown className="w-4 h-4 text-[#f59e0b]" />;
  };

  const colBtn = (label: string, key: SortKey) => (
    <button
      onClick={() => handleSort(key)}
      className={clsx(
        'flex items-center gap-1 text-xs font-semibold uppercase tracking-wide transition-colors',
        sortKey === key ? 'text-[#f59e0b]' : 'text-gray-400 hover:text-white'
      )}
    >
      {label}
      <SortIcon col={key} />
    </button>
  );

  return (
    <div className="rounded-xl border border-[#3d1270] overflow-hidden" style={{ background: '#2d0a57' }}>
      {/* Sort controls */}
      <div className="px-4 py-3 border-b border-[#3d1270] flex flex-wrap gap-4 items-center">
        <span className="text-gray-400 text-sm">Sorter efter:</span>
        {colBtn('Free Spins', 'freeSpins')}
        {colBtn('Bonus beløb', 'bonusAmount')}
        {colBtn('Omsætningskrav', 'wageringRequirement')}
        {colBtn('Rating', 'rating')}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#3d1270]">
              <th className="text-left text-gray-400 text-xs uppercase px-4 py-3 w-8">#</th>
              <th className="text-left text-gray-400 text-xs uppercase px-4 py-3">Casino</th>
              <th className="text-left text-gray-400 text-xs uppercase px-4 py-3">Free Spins</th>
              <th className="text-left text-gray-400 text-xs uppercase px-4 py-3">Bonus</th>
              <th className="text-left text-gray-400 text-xs uppercase px-4 py-3">Omsætning</th>
              <th className="text-left text-gray-400 text-xs uppercase px-4 py-3">Rating</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((casino, i) => (
              <tr
                key={casino.id}
                className="border-b border-[#1a0533]/50 hover:bg-[#3d1270]/30 transition-colors"
              >
                <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-white">{casino.name}</div>
                  {casino.noDeposit && (
                    <span className="text-green-400 text-xs">Ingen indskud</span>
                  )}
                  {casino.isLimited && (
                    <span className="text-red-400 text-xs ml-1">Tidsbegrænset</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {casino.freeSpins > 0 ? (
                    <span className="flex items-center gap-1 text-[#f59e0b] font-bold">
                      <Zap className="w-4 h-4" />
                      {casino.freeSpins}
                    </span>
                  ) : (
                    <span className="text-gray-500">—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {casino.bonusAmount > 0 ? (
                    <span className="flex items-center gap-1 text-white font-semibold">
                      <Gift className="w-4 h-4 text-[#f59e0b]" />
                      {casino.bonusPercent > 0 && `${casino.bonusPercent}% · `}
                      {casino.bonusAmount.toLocaleString('da-DK')} kr.
                    </span>
                  ) : (
                    <span className="text-gray-500">—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={clsx(
                      'font-semibold',
                      casino.wageringRequirement <= 30
                        ? 'text-green-400'
                        : casino.wageringRequirement <= 35
                        ? 'text-yellow-400'
                        : 'text-orange-400'
                    )}
                  >
                    {casino.wageringRequirement}x
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1 text-[#f59e0b] font-semibold">
                    <Star className="w-4 h-4 fill-[#f59e0b]" />
                    {casino.rating}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <a
                    href={casino.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="flex items-center gap-1 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#1a0533] font-bold text-xs px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Hent bonus
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
