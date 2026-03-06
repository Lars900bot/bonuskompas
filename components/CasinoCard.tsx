import Link from 'next/link';
import { Star, Zap, Gift, Clock, ExternalLink } from 'lucide-react';
import type { Casino } from '@/data/casinos';
import clsx from 'clsx';

interface CasinoCardProps {
  casino: Casino;
  rank?: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={clsx(
            'w-4 h-4',
            star <= Math.round(rating)
              ? 'fill-[#f59e0b] text-[#f59e0b]'
              : 'text-gray-600'
          )}
        />
      ))}
      <span className="text-gray-300 text-sm ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function CasinoCard({ casino, rank }: CasinoCardProps) {
  const bonusText = () => {
    const parts: string[] = [];
    if (casino.freeSpins > 0) parts.push(`${casino.freeSpins} free spins`);
    if (casino.bonusPercent > 0 && casino.bonusAmount > 0)
      parts.push(`${casino.bonusPercent}% op til ${casino.bonusAmount.toLocaleString('da-DK')} kr.`);
    if (casino.bonusAmount > 0 && casino.bonusPercent === 0)
      parts.push(`${casino.bonusAmount.toLocaleString('da-DK')} kr. bonus`);
    if (parts.length === 0) parts.push('Se bonus');
    return parts.join(' + ');
  };

  return (
    <div
      className="relative rounded-xl border transition-all duration-200 hover:border-[#f59e0b]/60 hover:shadow-lg hover:shadow-[#f59e0b]/10"
      style={{ background: '#2d0a57', borderColor: '#3d1270' }}
    >
      {/* Rank badge */}
      {rank && rank <= 3 && (
        <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-[#f59e0b] text-[#1a0533] text-xs font-bold flex items-center justify-center">
          #{rank}
        </div>
      )}

      {/* Limited badge */}
      {casino.isLimited && (
        <div className="absolute -top-3 right-4 flex items-center gap-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
          <Clock className="w-3 h-3" />
          Tidsbegrænset
        </div>
      )}

      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          {/* Casino name & rating */}
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-1">{casino.name}</h3>
            <StarRating rating={casino.rating} />
            <p className="text-gray-400 text-xs mt-1">{casino.license}</p>
          </div>

          {/* Bonus highlight */}
          <div className="text-right shrink-0">
            {casino.freeSpins > 0 && (
              <div className="flex items-center gap-1 justify-end text-[#f59e0b] font-bold text-xl">
                <Zap className="w-5 h-5" />
                {casino.freeSpins} FS
              </div>
            )}
            {casino.bonusAmount > 0 && (
              <div className="flex items-center gap-1 justify-end text-[#f59e0b] font-semibold text-sm">
                <Gift className="w-4 h-4" />
                {casino.bonusPercent > 0 && `${casino.bonusPercent}% + `}
                {casino.bonusAmount.toLocaleString('da-DK')} kr.
              </div>
            )}
          </div>
        </div>

        {/* Bonus text */}
        <div className="bg-[#1a0533] rounded-lg p-3 mb-4">
          <p className="text-[#f59e0b] font-semibold text-sm">{bonusText()}</p>
          {casino.noDeposit && (
            <span className="inline-block bg-green-700 text-white text-xs px-2 py-0.5 rounded-full mt-1">
              Ingen indskud krævet
            </span>
          )}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-center text-sm">
          <div className="bg-[#1a0533] rounded-lg p-2">
            <div className="text-gray-400 text-xs mb-0.5">Omsætning</div>
            <div className="text-white font-semibold">{casino.wageringRequirement}x</div>
          </div>
          <div className="bg-[#1a0533] rounded-lg p-2">
            <div className="text-gray-400 text-xs mb-0.5">Min. indskud</div>
            <div className="text-white font-semibold">
              {casino.noDeposit ? '0 kr.' : casino.minDeposit ? `${casino.minDeposit} kr.` : 'Se vilkår'}
            </div>
          </div>
          <div className="bg-[#1a0533] rounded-lg p-2">
            <div className="text-gray-400 text-xs mb-0.5">Licens</div>
            <div className="text-green-400 font-semibold text-xs">✓ DK</div>
          </div>
        </div>

        {/* CTA */}
        <a
          href={casino.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center justify-center gap-2 w-full bg-[#f59e0b] hover:bg-[#fbbf24] text-[#1a0533] font-bold py-3 rounded-lg transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Hent bonus hos {casino.name}
        </a>
        <p className="text-gray-500 text-xs text-center mt-2">
          18+ · Spil ansvarligt · Vilkår gælder
        </p>
      </div>
    </div>
  );
}
