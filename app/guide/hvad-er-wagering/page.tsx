import { Metadata } from 'next';
import { casinos } from '@/data/casinos';
import Link from 'next/link';
import { Calculator, CheckCircle, AlertTriangle, HelpCircle, TrendingUp, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hvad er Wagering / Omsætningskrav? Komplet Guide 2025',
  description:
    'Forstå wagering og omsætningskrav på casino bonusser. Lær hvordan de beregnes, hvad der tæller og hvordan du vælger bonusser med lave krav. Med eksempler.',
};

export default function WageringGuidePage() {
  const sortedByWager = [...casinos].sort((a, b) => a.wageringRequirement - b.wageringRequirement);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-14 px-4" style={{ background: 'linear-gradient(135deg, #0f0222 0%, #1a0533 60%, #2d0a57 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-[#f59e0b] text-sm mb-5">
            <BookOpen className="w-4 h-4" />
            <Link href="/" className="hover:underline">Forside</Link>
            <span>/</span>
            <span>Guide</span>
            <span>/</span>
            <span>Hvad er wagering?</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hvad er <span className="text-[#f59e0b]">Wagering</span>?<br />
            <span className="text-2xl md:text-3xl font-normal text-gray-300">Omsætningskrav forklaret med eksempler</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Omsætningskrav (wagering requirements) er det vigtigste begreb, du skal forstå,
            inden du accepterer en casino bonus. Denne guide forklarer alt du behøver at vide.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4 max-w-4xl mx-auto space-y-8">
        <div className="rounded-xl border border-[#f59e0b]/30 p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hvad er et omsætningskrav (wagering requirement)?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Et <strong className="text-[#f59e0b]">omsætningskrav</strong> — også kaldet wagering requirement
              på engelsk — er et krav fra casinoet om, at du skal spille for et bestemt beløb, inden du
              kan hæve penge, du har vundet med en bonus.
            </p>
            <p>
              Det er casinoets måde at sikre, at bonusser ikke bare kan udbetales øjeblikkeligt.
              Omsætningskravet er normalt udtrykt som et tal efterfulgt af "x" — for eksempel <strong className="text-white">35x</strong>.
            </p>
            <div className="bg-[#1a0533] rounded-xl p-5 border border-[#f59e0b]/20">
              <p className="text-[#f59e0b] font-bold mb-2 flex items-center gap-2">
                <Calculator className="w-5 h-5" /> Simpel forklaring
              </p>
              <p className="text-gray-300">
                Wagering 35x betyder, at du skal spille for{' '}
                <strong className="text-white">35 gange det beløb</strong>, der er angivet i vilkårene
                (enten bonusbeløbet alene eller bonus + indskud), inden du kan hæve dine gevinster.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-6">
            Eksempler på omsætningskrav
          </h2>
          <div className="space-y-5">
            {/* Example 1 */}
            <div className="bg-[#1a0533] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold mb-3">Eksempel 1: 30x omsætning på bonus</h3>
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div><span className="text-gray-400">Dit indskud:</span> <span className="text-white font-bold">300 kr.</span></div>
                <div><span className="text-gray-400">Bonusprocent:</span> <span className="text-white font-bold">100%</span></div>
                <div><span className="text-gray-400">Din bonus:</span> <span className="text-white font-bold">300 kr.</span></div>
                <div><span className="text-gray-400">Wagering:</span> <span className="text-white font-bold">30x</span></div>
              </div>
              <div className="bg-[#2d0a57] rounded-lg p-3 text-center">
                <span className="text-gray-300 text-sm">Skal omsættes: </span>
                <span className="text-[#f59e0b] font-bold text-xl">300 × 30 = 9.000 kr.</span>
              </div>
              <p className="text-gray-400 text-xs mt-2">Her gælder omsætningskravet kun på bonusbeløbet</p>
            </div>

            {/* Example 2 */}
            <div className="bg-[#1a0533] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold mb-3">Eksempel 2: 35x omsætning på bonus + indskud</h3>
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div><span className="text-gray-400">Dit indskud:</span> <span className="text-white font-bold">200 kr.</span></div>
                <div><span className="text-gray-400">Bonusprocent:</span> <span className="text-white font-bold">100%</span></div>
                <div><span className="text-gray-400">Din bonus:</span> <span className="text-white font-bold">200 kr.</span></div>
                <div><span className="text-gray-400">Wagering:</span> <span className="text-white font-bold">35x (bonus+indskud)</span></div>
              </div>
              <div className="bg-[#2d0a57] rounded-lg p-3 text-center">
                <span className="text-gray-300 text-sm">Skal omsættes: </span>
                <span className="text-[#f59e0b] font-bold text-xl">(200+200) × 35 = 14.000 kr.</span>
              </div>
              <p className="text-gray-400 text-xs mt-2">Her gælder kravet på sum af indskud + bonus — altså dobbelt så meget!</p>
            </div>

            {/* Example 3 */}
            <div className="bg-[#1a0533] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold mb-3">Eksempel 3: Free spins gevinster med 35x</h3>
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div><span className="text-gray-400">Free spins:</span> <span className="text-white font-bold">200 spins</span></div>
                <div><span className="text-gray-400">Gevinst fra spins:</span> <span className="text-white font-bold">150 kr.</span></div>
                <div><span className="text-gray-400">Wagering:</span> <span className="text-white font-bold">35x</span></div>
                <div><span className="text-gray-400">Gælder for:</span> <span className="text-white font-bold">Gevinsterne</span></div>
              </div>
              <div className="bg-[#2d0a57] rounded-lg p-3 text-center">
                <span className="text-gray-300 text-sm">Skal omsættes: </span>
                <span className="text-[#f59e0b] font-bold text-xl">150 × 35 = 5.250 kr.</span>
              </div>
              <p className="text-gray-400 text-xs mt-2">Omsætningskravet gælder gevinsterne fra dine free spins</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hvad er et godt omsætningskrav?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Som tommelfingerregel for danske casinoer:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-900/30 border border-green-600/30 rounded-xl p-4 text-center">
                <div className="text-green-400 font-bold text-3xl mb-1">20-30x</div>
                <div className="text-green-400 text-sm font-medium">Fremragende</div>
                <p className="text-gray-400 text-xs mt-2">Meget opnåeligt. Typisk er 30x det bedste du finder hos de fleste licenserede casinoer.</p>
              </div>
              <div className="bg-yellow-900/30 border border-yellow-600/30 rounded-xl p-4 text-center">
                <div className="text-yellow-400 font-bold text-3xl mb-1">35x</div>
                <div className="text-yellow-400 text-sm font-medium">Normalt</div>
                <p className="text-gray-400 text-xs mt-2">Standardkrav for de fleste danske casinoer. Opnåeligt med tålmodighed.</p>
              </div>
              <div className="bg-red-900/30 border border-red-600/30 rounded-xl p-4 text-center">
                <div className="text-orange-400 font-bold text-3xl mb-1">40x+</div>
                <div className="text-orange-400 text-sm font-medium">Højt</div>
                <p className="text-gray-400 text-xs mt-2">Svært at opfylde. Bonussen er reelt set værd meget mindre end den ser ud.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Casinoer med lavest omsætningskrav i Danmark
          </h2>
          <div className="space-y-3">
            {sortedByWager.map((casino, i) => (
              <div key={casino.id} className="flex items-center justify-between bg-[#1a0533] rounded-lg px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 text-sm">{i + 1}.</span>
                  <span className="text-white font-medium">{casino.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`font-bold ${casino.wageringRequirement <= 30 ? 'text-green-400' : casino.wageringRequirement <= 35 ? 'text-yellow-400' : 'text-orange-400'}`}>
                    {casino.wageringRequirement}x
                  </span>
                  <a
                    href={casino.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-xs bg-[#f59e0b] hover:bg-[#fbbf24] text-[#1a0533] font-bold px-2.5 py-1 rounded-lg transition-colors"
                  >
                    Se bonus
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hvad tæller mod omsætningskravet?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Ikke alle spil tæller 100% mod omsætningskravet. Her er de typiske bidrag:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#3d1270]">
                    <th className="text-left text-gray-400 text-xs uppercase py-2 pr-4">Spiltype</th>
                    <th className="text-left text-gray-400 text-xs uppercase py-2 pr-4">Typisk bidrag</th>
                    <th className="text-left text-gray-400 text-xs uppercase py-2">Bemærkning</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Spilleautomater (slots)', contribution: '100%', note: 'Bedste bidrag' },
                    { type: 'Videopoker', contribution: '10-20%', note: 'Lavt bidrag' },
                    { type: 'Blackjack', contribution: '10-20%', note: 'Lavt bidrag' },
                    { type: 'Roulette', contribution: '10-20%', note: 'Lavt bidrag' },
                    { type: 'Live Casino', contribution: '5-10%', note: 'Meget lavt' },
                    { type: 'Jackpot spil', contribution: '0-5%', note: 'Ofte ekskluderet' },
                  ].map((row) => (
                    <tr key={row.type} className="border-b border-[#1a0533]/50">
                      <td className="text-white py-2.5 pr-4">{row.type}</td>
                      <td className={`font-semibold py-2.5 pr-4 ${row.contribution === '100%' ? 'text-green-400' : row.contribution.startsWith('5') ? 'text-orange-400' : 'text-yellow-400'}`}>
                        {row.contribution}
                      </td>
                      <td className="text-gray-400 py-2.5 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500">
              * Disse er typiske værdier. De kan variere betydeligt fra casino til casino. Tjek altid det specifikke casinos bonusvilkår.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Strategier til at opfylde omsætningskravet
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <CheckCircle className="w-5 h-5 text-green-400" />,
                title: 'Vælg spil med høj RTP',
                desc: 'Spilleautomater med 96%+ RTP giver de bedste chancer. Book of Dead (96.21%), Starburst (96.09%) og Blood Suckers (98%) er gode valg.'
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-green-400" />,
                title: 'Hold dine indsatser lave og stabile',
                desc: 'Undgå store indsatser — det øger risikoen for at tabe bonussaldoen. Stabile, moderate indsatser øger din gennemsnitslevetid.'
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-green-400" />,
                title: 'Brug bonus-beregneren',
                desc: 'Vores bonus-beregner viser præcis hvad du skal omsætte, og estimerer spilletid. Realistiske forventninger er din bedste ven.'
              },
              {
                icon: <AlertTriangle className="w-5 h-5 text-orange-400" />,
                title: 'Undgå ekskluderede spil',
                desc: 'Live casino og jackpot slots tæller typisk ikke eller meget lidt. Brug bonussaldoen udelukkende på slots for maximal effekt.'
              },
            ].map((tip) => (
              <div key={tip.title} className="flex gap-3 items-start">
                <div className="shrink-0 mt-0.5">{tip.icon}</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{tip.title}</h3>
                  <p className="text-gray-400 text-sm">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">FAQ – Omsætningskrav</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Hvad sker der, hvis jeg ikke opfylder omsætningskravet til tiden?',
                a: 'Bonussen og eventuelle bonusgevinster annulleres. Du mister din bonus, men beholder dine egne indbetalte penge (minus hvad du måske har tabt i spil).'
              },
              {
                q: 'Kan jeg se min fremgang mod omsætningskravet?',
                a: 'Ja, de fleste casinoer har en bonus-sektion i din konto, hvor du kan se den aktuelle fremgang. Tjek under "Mine bonusser" eller "Bonus status" i din konto.'
              },
              {
                q: 'Tæller live dealer spil mod omsætningskravet?',
                a: 'Typisk kun med 10-20% effekt, eller slet ikke. De fleste casinoer ekskluderer live casino fra bonus-omsætning. Slots er altid det bedste valg for at opfylde kravet hurtigt.'
              },
              {
                q: 'Hvad er forskellen på wagering på "bonus" vs. "bonus + indskud"?',
                a: 'Wagering på bonus alene er meget bedre for dig. Fx: 35x på 200 kr. bonus = 7.000 kr. vs. 35x på (200 kr. bonus + 200 kr. indskud) = 14.000 kr. Altså dobbelt så meget.'
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
            <TrendingUp className="w-5 h-5" /> Relaterede guider
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/guide/bonusvilkaar" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Bonusvilkår guide</Link>
            <Link href="/free-spins" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Free spins guide</Link>
            <Link href="/velkomstbonus" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Velkomstbonus</Link>
            <Link href="/ingen-indskud-bonus" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Ingen indskud bonus</Link>
            <Link href="/#beregner" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Bonus-beregner</Link>
            <Link href="/" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Alle bonusser</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
