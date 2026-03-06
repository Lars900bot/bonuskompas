'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react';

interface CalcResult {
  bonusAmount: number;
  totalToWager: number;
  estimatedHours: number;
  estimatedDays: number;
}

const PRESETS = [
  { label: '100 kr.', value: 100 },
  { label: '200 kr.', value: 200 },
  { label: '500 kr.', value: 500 },
  { label: '1.000 kr.', value: 1000 },
];

const WAGERING_OPTIONS = [
  { label: '30x (Lav)', value: 30 },
  { label: '35x (Normal)', value: 35 },
  { label: '40x (Høj)', value: 40 },
  { label: '50x (Meget høj)', value: 50 },
];

export default function BonusCalculator() {
  const [deposit, setDeposit] = useState<string>('200');
  const [bonusPct, setBonusPct] = useState<string>('100');
  const [wagering, setWagering] = useState<string>('35');
  const [result, setResult] = useState<CalcResult | null>(null);

  const calculate = () => {
    const dep = parseFloat(deposit) || 0;
    const pct = parseFloat(bonusPct) || 0;
    const wag = parseFloat(wagering) || 35;

    const bonus = (dep * pct) / 100;
    const totalWager = (dep + bonus) * wag;
    // Estimate: average spin value 5 kr., 1 spin per 10 seconds
    const spinsNeeded = totalWager / 5;
    const secondsNeeded = spinsNeeded * 10;
    const hours = secondsNeeded / 3600;
    const days = hours / 3; // ~3h play per day

    setResult({
      bonusAmount: bonus,
      totalToWager: totalWager,
      estimatedHours: Math.round(hours * 10) / 10,
      estimatedDays: Math.ceil(days),
    });
  };

  return (
    <div
      className="rounded-xl border border-[#f59e0b]/30 overflow-hidden"
      style={{ background: '#2d0a57' }}
    >
      {/* Header */}
      <div className="px-6 py-4 flex items-center gap-3 border-b border-[#f59e0b]/20">
        <div className="w-10 h-10 rounded-lg bg-[#f59e0b] flex items-center justify-center">
          <Calculator className="w-6 h-6 text-[#1a0533]" />
        </div>
        <div>
          <h2 className="text-white font-bold text-lg">Bonus-beregner</h2>
          <p className="text-gray-400 text-sm">Beregn din potentielle bonus og hvad der kræves</p>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {/* Deposit */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Dit indskud (kr.)
            </label>
            <div className="flex gap-2 mb-2 flex-wrap">
              {PRESETS.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setDeposit(String(p.value))}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${
                    deposit === String(p.value)
                      ? 'bg-[#f59e0b] text-[#1a0533]'
                      : 'bg-[#1a0533] text-gray-300 hover:text-white'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <input
              type="number"
              min="0"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
              className="w-full bg-[#1a0533] border border-[#3d1270] text-white px-3 py-2.5 rounded-lg focus:border-[#f59e0b] focus:outline-none text-sm"
              placeholder="F.eks. 200"
            />
          </div>

          {/* Bonus % */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Bonus procent (%)
            </label>
            <div className="flex gap-2 mb-2">
              {[100, 200].map((p) => (
                <button
                  key={p}
                  onClick={() => setBonusPct(String(p))}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${
                    bonusPct === String(p)
                      ? 'bg-[#f59e0b] text-[#1a0533]'
                      : 'bg-[#1a0533] text-gray-300 hover:text-white'
                  }`}
                >
                  {p}%
                </button>
              ))}
            </div>
            <input
              type="number"
              min="0"
              max="500"
              value={bonusPct}
              onChange={(e) => setBonusPct(e.target.value)}
              className="w-full bg-[#1a0533] border border-[#3d1270] text-white px-3 py-2.5 rounded-lg focus:border-[#f59e0b] focus:outline-none text-sm"
              placeholder="F.eks. 100"
            />
          </div>

          {/* Wagering */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Omsætningskrav
            </label>
            <div className="flex gap-2 mb-2 flex-wrap">
              {WAGERING_OPTIONS.map((w) => (
                <button
                  key={w.value}
                  onClick={() => setWagering(String(w.value))}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${
                    wagering === String(w.value)
                      ? 'bg-[#f59e0b] text-[#1a0533]'
                      : 'bg-[#1a0533] text-gray-300 hover:text-white'
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
            <input
              type="number"
              min="1"
              max="100"
              value={wagering}
              onChange={(e) => setWagering(e.target.value)}
              className="w-full bg-[#1a0533] border border-[#3d1270] text-white px-3 py-2.5 rounded-lg focus:border-[#f59e0b] focus:outline-none text-sm"
              placeholder="F.eks. 35"
            />
          </div>
        </div>

        <button
          onClick={calculate}
          className="w-full bg-[#f59e0b] hover:bg-[#fbbf24] text-[#1a0533] font-bold py-3 rounded-lg transition-colors mb-5"
        >
          Beregn min bonus
        </button>

        {/* Results */}
        {result && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[#1a0533] rounded-xl p-4 text-center">
              <DollarSign className="w-6 h-6 text-[#f59e0b] mx-auto mb-2" />
              <div className="text-[#f59e0b] font-bold text-xl">
                {result.bonusAmount.toLocaleString('da-DK')} kr.
              </div>
              <div className="text-gray-400 text-xs mt-1">Din bonus</div>
            </div>
            <div className="bg-[#1a0533] rounded-xl p-4 text-center">
              <TrendingUp className="w-6 h-6 text-[#f59e0b] mx-auto mb-2" />
              <div className="text-[#f59e0b] font-bold text-xl">
                {result.totalToWager.toLocaleString('da-DK')} kr.
              </div>
              <div className="text-gray-400 text-xs mt-1">Skal omsættes</div>
            </div>
            <div className="bg-[#1a0533] rounded-xl p-4 text-center">
              <Clock className="w-6 h-6 text-[#f59e0b] mx-auto mb-2" />
              <div className="text-[#f59e0b] font-bold text-xl">
                {result.estimatedHours}t
              </div>
              <div className="text-gray-400 text-xs mt-1">Estimeret tid</div>
            </div>
            <div className="bg-[#1a0533] rounded-xl p-4 text-center">
              <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" />
              <div className="text-orange-400 font-bold text-xl">
                {result.estimatedDays} dag{result.estimatedDays !== 1 ? 'e' : ''}
              </div>
              <div className="text-gray-400 text-xs mt-1">Ca. spilledage</div>
            </div>
          </div>
        )}

        {result && (
          <p className="text-gray-500 text-xs mt-3 text-center">
            Estimat baseret på gennemsnitlig sats på 5 kr. pr. spin og 10 sekunder pr. spin.
            Faktisk tid varierer afhængigt af spilstil og spiltype.
          </p>
        )}
      </div>
    </div>
  );
}
