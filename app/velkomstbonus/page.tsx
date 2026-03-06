import { Metadata } from 'next';
import { casinos } from '@/data/casinos';
import CasinoCard from '@/components/CasinoCard';
import SortableTable from '@/components/SortableTable';
import BonusCalculator from '@/components/BonusCalculator';
import Link from 'next/link';
import { Gift, CheckCircle, TrendingUp, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Velkomstbonus Casino 2025 – Bedste Velkomstbonusser Danmark',
  description:
    'Sammenlign de bedste velkomstbonusser fra danske licenserede casinoer. Find den højeste bonus, flest free spins og laveste omsætningskrav. Opdateret 2025.',
};

export default function VelkomstbonusPage() {
  const velkomstCasinos = casinos.filter(c => c.bonusTypes.includes('velkomst'));
  const sorted = [...velkomstCasinos].sort((a, b) => b.bonusAmount - a.bonusAmount);

  const totalFreeSpins = Math.max(...velkomstCasinos.map(c => c.freeSpins));
  const maxBonus = Math.max(...velkomstCasinos.map(c => c.bonusAmount));
  const lowestWagering = Math.min(...velkomstCasinos.map(c => c.wageringRequirement));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-14 px-4" style={{ background: 'linear-gradient(135deg, #0f0222 0%, #1a0533 60%, #2d0a57 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-sm px-4 py-1.5 rounded-full mb-5">
            <Gift className="w-4 h-4" />
            {velkomstCasinos.length} velkomstbonusser tilgængelige
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bedste <span className="text-[#f59e0b]">Velkomstbonus</span> 2025
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Sammenlign alle velkomstbonusser fra Spillemyndigheds-licenserede casinoer.
            Find den bedste kombination af bonus beløb, free spins og omsætningskrav.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-xl p-3">
              <div className="text-[#f59e0b] font-bold text-2xl">{maxBonus.toLocaleString('da-DK')}</div>
              <div className="text-gray-400 text-xs">Max bonus (kr.)</div>
            </div>
            <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-xl p-3">
              <div className="text-[#f59e0b] font-bold text-2xl">{totalFreeSpins}</div>
              <div className="text-gray-400 text-xs">Max free spins</div>
            </div>
            <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-xl p-3">
              <div className="text-[#f59e0b] font-bold text-2xl">{lowestWagering}x</div>
              <div className="text-gray-400 text-xs">Laveste omsætning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Casino cards */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Gift className="w-6 h-6 text-[#f59e0b]" />
          <h2 className="text-2xl font-bold text-white">Top velkomstbonusser – marts 2025</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {sorted.map((casino, i) => (
            <CasinoCard key={casino.id} casino={casino} rank={i + 1} />
          ))}
        </div>
        <SortableTable casinos={velkomstCasinos} />
      </section>

      {/* Bonus calculator */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <BonusCalculator />
      </section>

      {/* Content */}
      <section className="py-10 px-4 max-w-4xl mx-auto space-y-8">
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hvad er en velkomstbonus?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              En velkomstbonus er et tilbud, som online casinoer giver til nye spillere som belønning
              for at registrere sig og foretage deres første indskud. Det er en af de mest udbredte
              markedsføringsstrategier i casino-branchen og giver dig som spiller mulighed for at
              fordoble — eller endda tredoble — dit startbeløb.
            </p>
            <p>
              I Danmark tilbyder næsten alle licenserede casinoer en form for velkomstbonus.
              Typisk er disse bonusser kombinationer af <strong className="text-white">match-bonus</strong>
              (procentvis tilføjelse til dit indskud) og{' '}
              <Link href="/free-spins" className="text-[#f59e0b] hover:underline">free spins</Link>.
            </p>
            <p>
              Den gennemsnitlige velkomstbonus i Danmark er 100% op til 1.500 kr. + 100–200 free spins,
              men der er stor variation. De mest generøse tilbud er op til{' '}
              <strong className="text-[#f59e0b]">200% bonus op til 3.000 kr. + 250 free spins</strong>.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Sammenligning: Alle velkomstbonusser i Danmark
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#3d1270]">
                  <th className="text-left text-gray-400 text-xs uppercase py-2 pr-4">Casino</th>
                  <th className="text-left text-gray-400 text-xs uppercase py-2 pr-4">Bonus %</th>
                  <th className="text-left text-gray-400 text-xs uppercase py-2 pr-4">Max bonus</th>
                  <th className="text-left text-gray-400 text-xs uppercase py-2 pr-4">Free spins</th>
                  <th className="text-left text-gray-400 text-xs uppercase py-2">Omsætning</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((casino) => (
                  <tr key={casino.id} className="border-b border-[#1a0533]/50">
                    <td className="text-white font-medium py-2.5 pr-4">{casino.name}</td>
                    <td className="text-gray-300 py-2.5 pr-4">{casino.bonusPercent > 0 ? `${casino.bonusPercent}%` : '—'}</td>
                    <td className="text-[#f59e0b] font-semibold py-2.5 pr-4">
                      {casino.bonusAmount > 0 ? `${casino.bonusAmount.toLocaleString('da-DK')} kr.` : '—'}
                    </td>
                    <td className="text-[#f59e0b] font-semibold py-2.5 pr-4">
                      {casino.freeSpins > 0 ? `${casino.freeSpins} FS` : '—'}
                    </td>
                    <td className={`py-2.5 font-semibold ${casino.wageringRequirement <= 30 ? 'text-green-400' : casino.wageringRequirement <= 35 ? 'text-yellow-400' : 'text-orange-400'}`}>
                      {casino.wageringRequirement}x
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hvordan vælger du den bedste velkomstbonus?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Den "bedste" velkomstbonus er ikke nødvendigvis den med det højeste beløb. Her er de
              faktorer, du bør evaluere:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: '1. Omsætningskrav (wagering)',
                  desc: 'Det vigtigste parameter. Et 30x krav er godt, 35x normalt, 40x+ er højt. En bonus på 3.000 kr. med 40x krav er faktisk dårligere end 1.000 kr. med 30x.'
                },
                {
                  title: '2. Bonus beløb og procent',
                  desc: '100% bonus fordobler dit indskud. 200% tredobler det. Jo højere procent, jo mere får du for pengene — men check altid omsætningskravet.'
                },
                {
                  title: '3. Free spins',
                  desc: 'Ekstra free spins oven i bonussen er altid en fordel. Husk at free spins gevinster typisk er underlagt et separat omsætningskrav.'
                },
                {
                  title: '4. Minimumindskud',
                  desc: 'Sørg for at det minimumindskud der kræves for at aktivere bonussen passer til dit budget. Det varierer fra 75 til 200 kr.'
                },
                {
                  title: '5. Bonusperiode',
                  desc: 'Tjek hvor lang tid du har til at opfylde omsætningskravet. Typisk 30–90 dage, men nogle casinoer giver kun 7–14 dage.'
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-[#f59e0b] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white">{item.title}</strong>
                    <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">FAQ – Velkomstbonus</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Kan jeg hæve min velkomstbonus med det samme?',
                a: 'Nej, velkomstbonusser er underlagt omsætningskrav. Du skal spille for bonusbeløbet (og evt. indskuddet) gange omsætningsfaktoren, inden du kan hæve pengene.'
              },
              {
                q: 'Hvad sker der, hvis jeg hæver inden jeg har opfyldt omsætningskravet?',
                a: 'Casinoet vil typisk annullere bonussen og evt. tilhørende gevinster. Du beholder kun de penge, du selv indbetalte. Læs altid vilkårene grundigt.'
              },
              {
                q: 'Kan jeg benytte velkomstbonus hos alle casinoer?',
                a: 'Nej, velkomstbonusser er kun til nye spillere der ikke tidligere har haft en konto hos casinoet. Du kan dog benytte velkomstbonusser hos forskellige casinoer.'
              },
              {
                q: 'Tæller alle spil mod omsætningskravet?',
                a: 'Normalt ikke. Bordspil og live casino bidrager typisk kun med 10-20% til omsætningen, mens spilleautomater tæller 100%. Tjek altid de specifikke vilkår.'
              },
            ].map((faq) => (
              <div key={faq.q} className="border border-[#3d1270] rounded-lg p-4">
                <div className="flex items-start gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <h3 className="text-white font-semibold">{faq.q}</h3>
                </div>
                <p className="text-gray-300 text-sm pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#f59e0b]/20 p-6" style={{ background: '#1a0533' }}>
          <h3 className="text-[#f59e0b] font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> Relaterede sider
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/free-spins" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Free spins guide</Link>
            <Link href="/gratis-spins" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Gratis spins</Link>
            <Link href="/ingen-indskud-bonus" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Ingen indskud bonus</Link>
            <Link href="/guide/hvad-er-wagering" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Wagering guide</Link>
            <Link href="/guide/bonusvilkaar" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Bonusvilkår</Link>
            <Link href="/" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Alle bonusser</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
