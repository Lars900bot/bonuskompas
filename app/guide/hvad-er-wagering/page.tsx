import { Metadata } from 'next';
import { casinos } from '@/data/casinos';
import Link from 'next/link';
import { Calculator, CheckCircle, AlertTriangle, HelpCircle, TrendingUp, BookOpen, XCircle, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hvad er Wagering / Omsætningskrav? Komplet Guide 2026',
  description:
    'Forstå wagering og omsætningskrav på casino bonusser i 2026. Lær hvordan de beregnes med konkrete eksempler, hvad der tæller mod kravet, og hvordan du vælger bonusser med lave krav. Med beregningseksempler.',
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
            <span className="text-2xl md:text-3xl font-normal text-gray-300">Omsætningskrav forklaret med eksempler — 2026</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-4">
            Omsætningskrav (wagering requirements) er det vigtigste begreb, du skal forstå,
            inden du accepterer en casino bonus. Denne komplette guide forklarer alt du behøver at vide — med konkrete beregningseksempler.
          </p>
          <p className="text-gray-500 text-xs">Senest opdateret: marts 2026 | 18+ | Spil ansvarligt | StopSpillet.dk</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4 max-w-4xl mx-auto space-y-8">

        {/* Hvad er omsætningskrav */}
        <div className="rounded-xl border border-[#f59e0b]/30 p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hvad er et omsætningskrav (wagering requirement)?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Et <strong className="text-[#f59e0b]">omsætningskrav</strong> — også kaldet{' '}
              <strong className="text-[#f59e0b]">wagering requirement</strong> på engelsk — er et krav fra casinoet
              om, at du skal spille for et bestemt beløb, inden du kan hæve penge, du har vundet med en bonus.
            </p>
            <p>
              Omsætningskravet er casinoets måde at sikre sig mod, at spillere blot hæver bonusser øjeblikkeligt uden
              at spille for dem. Det er et vilkår, der er knyttet til alle bonus-typer — velkomstbonus, free spins,
              reload-bonus og cashback.
            </p>
            <p>
              Omsætningskravet er normalt udtrykt som et tal efterfulgt af &ldquo;x&rdquo; — for eksempel{' '}
              <strong className="text-white">35x</strong>. Jo lavere tallet er, jo lettere og bedre er det for dig.
            </p>
            <div className="bg-[#1a0533] rounded-xl p-5 border border-[#f59e0b]/20">
              <p className="text-[#f59e0b] font-bold mb-2 flex items-center gap-2">
                <Calculator className="w-5 h-5" /> Enkel forklaring
              </p>
              <p className="text-gray-300">
                Wagering 35x på en bonus på 200 kr. betyder, at du skal spille for{' '}
                <strong className="text-white">35 × 200 kr. = 7.000 kr.</strong>{' '}
                — inden du kan hæve dine bonusgevinster. Det er ikke et tab på 7.000 kr., men det samlede beløb
                der skal løbe igennem dine spil.
              </p>
            </div>
            <p>
              Det er afgørende at forstå, at omsætningskravet gælder det beløb, der{' '}
              <em>passerer igennem</em> dine spil — ikke det du taber. Spilleautomater med en RTP på 96% returnerer
              statistisk 96 kr. for hver 100 kr. spillet, så du mister ikke hele omsætningssummen.
            </p>
          </div>
        </div>

        {/* Konkrete eksempler */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-6">
            Konkrete beregningseksempler på omsætningskrav
          </h2>
          <div className="space-y-5">
            {/* Example 1 */}
            <div className="bg-[#1a0533] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold mb-3">Eksempel 1: 30x omsætning kun på bonusbeløbet</h3>
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div><span className="text-gray-400">Dit indskud:</span> <span className="text-white font-bold">300 kr.</span></div>
                <div><span className="text-gray-400">100% velkomstbonus:</span> <span className="text-white font-bold">300 kr.</span></div>
                <div><span className="text-gray-400">Omsætningskrav:</span> <span className="text-white font-bold">30x på bonus</span></div>
                <div><span className="text-gray-400">Gælder for:</span> <span className="text-white font-bold">Kun bonusbeløbet</span></div>
              </div>
              <div className="bg-[#2d0a57] rounded-lg p-3 text-center mb-2">
                <span className="text-gray-300 text-sm">Skal omsættes: </span>
                <span className="text-[#f59e0b] font-bold text-xl">300 × 30 = 9.000 kr.</span>
              </div>
              <p className="text-gray-400 text-xs">Her gælder omsætningskravet kun på bonusbeløbet — de 300 kr. du fik i bonus. Dit indskud er frit at hæve.</p>
            </div>

            {/* Example 2 */}
            <div className="bg-[#1a0533] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold mb-3">Eksempel 2: 35x omsætning på bonus + indskud (pas på!)</h3>
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div><span className="text-gray-400">Dit indskud:</span> <span className="text-white font-bold">200 kr.</span></div>
                <div><span className="text-gray-400">100% velkomstbonus:</span> <span className="text-white font-bold">200 kr.</span></div>
                <div><span className="text-gray-400">Omsætningskrav:</span> <span className="text-white font-bold">35x (bonus+indskud)</span></div>
                <div><span className="text-gray-400">Gælder for:</span> <span className="text-white font-bold">Indskud + bonus = 400 kr.</span></div>
              </div>
              <div className="bg-[#2d0a57] rounded-lg p-3 text-center mb-2">
                <span className="text-gray-300 text-sm">Skal omsættes: </span>
                <span className="text-[#f59e0b] font-bold text-xl">(200+200) × 35 = 14.000 kr.</span>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <p className="text-gray-400 text-xs">Kravet gælder her sum af indskud + bonus — det er dobbelt så meget som i Eksempel 1! Tjek altid om kravet gælder bonus alene eller bonus+indskud.</p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-[#1a0533] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold mb-3">Eksempel 3: Free spins gevinster med 35x wagering</h3>
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div><span className="text-gray-400">Free spins modtaget:</span> <span className="text-white font-bold">200 spins</span></div>
                <div><span className="text-gray-400">Samlet gevinst fra spins:</span> <span className="text-white font-bold">150 kr.</span></div>
                <div><span className="text-gray-400">Omsætningskrav:</span> <span className="text-white font-bold">35x</span></div>
                <div><span className="text-gray-400">Gælder for:</span> <span className="text-white font-bold">Gevinsterne (150 kr.)</span></div>
              </div>
              <div className="bg-[#2d0a57] rounded-lg p-3 text-center mb-2">
                <span className="text-gray-300 text-sm">Skal omsættes: </span>
                <span className="text-[#f59e0b] font-bold text-xl">150 × 35 = 5.250 kr.</span>
              </div>
              <p className="text-gray-400 text-xs mt-2">Omsætningskravet gælder gevinsterne fra dine free spins — ikke de penge du indsatte.</p>
            </div>

            {/* Example 4 — Cashback */}
            <div className="bg-[#1a0533] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold mb-3">Eksempel 4: Cashback bonus med 20x wagering</h3>
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div><span className="text-gray-400">Tab i ugen:</span> <span className="text-white font-bold">500 kr.</span></div>
                <div><span className="text-gray-400">10% cashback:</span> <span className="text-white font-bold">50 kr.</span></div>
                <div><span className="text-gray-400">Omsætningskrav:</span> <span className="text-white font-bold">20x</span></div>
                <div><span className="text-gray-400">Gælder for:</span> <span className="text-white font-bold">Cashback-beløbet</span></div>
              </div>
              <div className="bg-[#2d0a57] rounded-lg p-3 text-center mb-2">
                <span className="text-gray-300 text-sm">Skal omsættes: </span>
                <span className="text-[#f59e0b] font-bold text-xl">50 × 20 = 1.000 kr.</span>
              </div>
              <p className="text-gray-400 text-xs mt-2">Cashback-bonusser har typisk lavere omsætningskrav end velkomstbonusser — 20x er normalt for denne type.</p>
            </div>
          </div>
        </div>

        {/* Hvad er et godt omsætningskrav */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hvad er et godt omsætningskrav? Skala og vurdering
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Som tommelfingerregel for danske Spillemyndigheds-licenserede casinoer kan du vurdere omsætningskrav sådan:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-green-900/30 border border-green-600/30 rounded-xl p-4 text-center">
                <div className="text-green-400 font-bold text-3xl mb-1">10-20x</div>
                <div className="text-green-400 text-sm font-medium">Fremragende</div>
                <p className="text-gray-400 text-xs mt-2">Sjælden og meget attraktiv. Næsten altid opnåeligt for alle spillere.</p>
              </div>
              <div className="bg-blue-900/30 border border-blue-600/30 rounded-xl p-4 text-center">
                <div className="text-blue-400 font-bold text-3xl mb-1">25-30x</div>
                <div className="text-blue-400 text-sm font-medium">Godt</div>
                <p className="text-gray-400 text-xs mt-2">Attraktivt krav. Opnåeligt med en moderat spillesession. Vælg dette fremfor 35x+.</p>
              </div>
              <div className="bg-yellow-900/30 border border-yellow-600/30 rounded-xl p-4 text-center">
                <div className="text-yellow-400 font-bold text-3xl mb-1">35x</div>
                <div className="text-yellow-400 text-sm font-medium">Normalt</div>
                <p className="text-gray-400 text-xs mt-2">Standardkrav for de fleste danske casinoer. Opnåeligt med tålmodighed.</p>
              </div>
              <div className="bg-red-900/30 border border-red-600/30 rounded-xl p-4 text-center">
                <div className="text-orange-400 font-bold text-3xl mb-1">40x+</div>
                <div className="text-orange-400 text-sm font-medium">Højt</div>
                <p className="text-gray-400 text-xs mt-2">Svært at opfylde. Overvej om bonussen reelt er attraktiv nok.</p>
              </div>
            </div>
            <div className="bg-[#1a0533] rounded-xl p-4 border border-[#f59e0b]/20">
              <p className="text-sm text-gray-300">
                <strong className="text-[#f59e0b]">Pro-tip:</strong> Sammenlign altid bonussens reelle værdi — ikke bare størrelsen.
                En bonus på 500 kr. med 20x omsætningskrav er langt mere værd end en bonus på 1.000 kr. med 50x omsætningskrav.
                Brug formlen: <strong className="text-white">Bonusbeløb ÷ Omsætningskrav = Reelt tab for at frigøre bonus.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Hvad tæller */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hvad tæller mod omsætningskravet? Komplet oversigt
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Ikke alle spil tæller 100% mod omsætningskravet. Det er afgørende at vide, hvilke spil der er mest
              effektive til at opfylde kravet — og hvilke du bør undgå, når du spiller med bonussaldo:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#3d1270]">
                    <th className="text-left text-gray-400 text-xs uppercase py-2 pr-4">Spiltype</th>
                    <th className="text-left text-gray-400 text-xs uppercase py-2 pr-4">Typisk bidrag</th>
                    <th className="text-left text-gray-400 text-xs uppercase py-2">Anbefaling</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Spilleautomater (slots)', contribution: '100%', anbefaling: '✅ Brug slots til omsætning', color: 'text-green-400' },
                    { type: 'Skrabelodder / Instant Win', contribution: '100%', anbefaling: '✅ Tæller fuldt ud', color: 'text-green-400' },
                    { type: 'Videopoker', contribution: '10-20%', anbefaling: '⚠️ Meget ineffektivt', color: 'text-yellow-400' },
                    { type: 'Blackjack', contribution: '10-20%', anbefaling: '⚠️ Undgå ved bonusspil', color: 'text-yellow-400' },
                    { type: 'Roulette', contribution: '10-20%', anbefaling: '⚠️ Undgå ved bonusspil', color: 'text-yellow-400' },
                    { type: 'Live Casino (Blackjack, Roulette mv.)', contribution: '5-10%', anbefaling: '❌ Næsten ingen effekt', color: 'text-orange-400' },
                    { type: 'Jackpot slots / Progressive', contribution: '0-5%', anbefaling: '❌ Typisk ekskluderet', color: 'text-red-400' },
                    { type: 'Sports betting', contribution: '0-10%', anbefaling: '❌ Sjældent tilladt', color: 'text-red-400' },
                  ].map((row) => (
                    <tr key={row.type} className="border-b border-[#1a0533]/50">
                      <td className="text-white py-2.5 pr-4">{row.type}</td>
                      <td className={`font-semibold py-2.5 pr-4 ${row.color}`}>
                        {row.contribution}
                      </td>
                      <td className={`py-2.5 text-xs ${row.color}`}>{row.anbefaling}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500">
              * Disse er typiske værdier for det danske marked i 2026. De kan variere fra casino til casino.
              Læs altid det specifikke casinos bonusvilkår for de præcise bidragsprocenter.
            </p>
          </div>
        </div>

        {/* Forskel på bonus-typer */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Omsætningskrav på forskellige bonus-typer
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>Omsætningskravet varierer afhængigt af, hvilken type bonus du har modtaget:</p>
            <div className="space-y-3">
              {[
                {
                  type: "Velkomstbonus (match-bonus)",
                  krav: "25x–50x",
                  gælder: "Bonus alene eller bonus+indskud — tjek altid vilkårene",
                  farve: "text-[#f59e0b]",
                },
                {
                  type: "Free spins gevinster",
                  krav: "20x–40x",
                  gælder: "Gevinsterne fra dine free spins",
                  farve: "text-blue-400",
                },
                {
                  type: "Ingen indskud bonus",
                  krav: "30x–60x",
                  gælder: "Bonusbeløbet — typisk højere krav end ved indbetaling",
                  farve: "text-green-400",
                },
                {
                  type: "Cashback bonus",
                  krav: "10x–25x",
                  gælder: "Cashback-beløbet — typisk lavere krav",
                  farve: "text-purple-400",
                },
                {
                  type: "Reload bonus",
                  krav: "20x–40x",
                  gælder: "Bonusbeløbet — varierer meget fra casino til casino",
                  farve: "text-pink-400",
                },
              ].map(({ type, krav, gælder, farve }) => (
                <div key={type} className="flex gap-4 bg-[#1a0533] rounded-xl p-4 items-start">
                  <div className="shrink-0">
                    <span className={`font-bold text-xl ${farve}`}>{krav}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{type}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{gælder}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Casinoer med lavest krav */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Casinoer med lavest omsætningskrav i Danmark 2026
          </h2>
          <div className="space-y-3">
            {sortedByWager.map((casino, i) => (
              <div key={casino.id} className="flex items-center justify-between bg-[#1a0533] rounded-lg px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 text-sm">{i + 1}.</span>
                  <span className="text-white font-medium">{casino.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`font-bold ${casino.wageringRequirement <= 25 ? 'text-green-400' : casino.wageringRequirement <= 30 ? 'text-blue-400' : casino.wageringRequirement <= 35 ? 'text-yellow-400' : 'text-orange-400'}`}>
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
          <p className="text-xs text-gray-500 mt-3">18+ | Spillemyndigheds-licens | Vilkår og betingelser gælder</p>
        </div>

        {/* Strategier */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            5 strategier til at opfylde omsætningskravet effektivt
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <CheckCircle className="w-5 h-5 text-green-400" />,
                title: 'Vælg spilleautomater med høj RTP',
                desc: 'Slots med 96%+ RTP giver de bedste chancer for at bevare din saldo under omsætningen. Top-valg: Book of Dead (96.21%), Starburst (96.09%), Blood Suckers (98.00%), 1429 Uncharted Seas (98.50%). Jo højere RTP, jo mindre taber du statistisk under omsætningsprocessen.'
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-green-400" />,
                title: 'Hold dine indsatser lave og stabile',
                desc: 'Store indsatser giver stor volatilitet og øger risikoen for at tabe bonussaldoen hurtigt. Sæt indsatsen til 0.5-2% af bonussaldoen pr. spin. Stabile, moderate indsatser forlænger spilletiden og øger din chance for at opfylde kravet.'
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-green-400" />,
                title: 'Beregn kravet, inden du accepterer bonussen',
                desc: 'Brug formlen: Bonusbeløb × Omsætningskrav = Samlet omsætningskrav. Vurder om du realistisk kan spille for dette beløb. Eksempel: 200 kr. bonus × 40x = 8.000 kr. i spil. Er det realistisk for dit spillebudget?'
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-green-400" />,
                title: 'Undgå ekskluderede spil med bonussaldo',
                desc: 'Live casino, jackpot slots og bordspil tæller typisk ikke eller meget lidt mod omsætningskravet. Brug udelukkende standard slots med bonussaldoen for maksimal effektivitet. Skift til andre spil, når bonussaldoen er omsat og konverteret til rigtige penge.'
              },
              {
                icon: <AlertTriangle className="w-5 h-5 text-orange-400" />,
                title: 'Pas på karantæne-regler og max indsats',
                desc: 'Mange casinoer har en maksimal indsats pr. spin med aktiv bonus — typisk 50-100 kr. Overskrider du denne grænse, kan casinoet annullere din bonus og gevinster. Læs altid de fulde bonusvilkår for at kende max-indsats reglen.'
              },
            ].map((tip) => (
              <div key={tip.title} className="flex gap-3 items-start bg-[#1a0533] rounded-xl p-4">
                <div className="shrink-0 mt-0.5">{tip.icon}</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{tip.title}</h3>
                  <p className="text-gray-400 text-sm">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Myter om wagering */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            5 myter om omsætningskrav — afsløret
          </h2>
          <div className="space-y-4">
            {[
              {
                myte: "Du skal tabe hele omsætningssummen",
                fakta: "Nej! Omsætningskravet er det beløb, der skal passere igennem dine spil — ikke det du mister. Med 96% RTP mister du statistisk kun 4% af omsætningsbeløbet.",
              },
              {
                myte: "Alle spil tæller 100% mod kravet",
                fakta: "Forkert. Live casino og bordspil tæller typisk kun 10-20% (eller slet ikke). Kun slots tæller 100% — hold dig til slots, når du har bonussaldo.",
              },
              {
                myte: "Du kan vinde ubegrænset med free spins",
                fakta: "Næsten alle free spins har en max gevinstgrænse — typisk 500-2.000 kr. Selv hvis du rammer en jackpot på 50.000 kr., udbetales kun max-grænsen.",
              },
              {
                myte: "Det er let at slå bonuskravet og tjene penge",
                fakta: "Omsætningskrav er designet til at sikre casinoet en fordel. De kan overvindes, men husk: husets fordel er altid til stede. Free spins er primært en måde at prøve nye casinoer gratis.",
              },
              {
                myte: "Jeg kan hæve mine penge, når jeg vil, under omsætningsperioden",
                fakta: "Nej. Mens du har aktiv bonus og bonussaldo, kan du typisk ikke hæve penge. Du skal enten færdiggøre omsætningskravet eller aktivt fravælge bonussen (og miste eventuelle bonusgevinster).",
              },
            ].map(({ myte, fakta }) => (
              <div key={myte} className="bg-[#1a0533] rounded-xl p-4">
                <div className="flex items-start gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-red-400 text-sm font-semibold">Myte: {myte}</p>
                </div>
                <div className="flex items-start gap-2 pl-6">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">{fakta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">FAQ — Omsætningskrav og wagering 2026</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Hvad sker der, hvis jeg ikke opfylder omsætningskravet til tiden?',
                a: 'Bonussen og eventuelle bonusgevinster annulleres automatisk. Du mister din bonus, men beholder dine egne indbetalte penge (minus hvad du måske har tabt under spil). Tjek altid udløbsdatoen for din aktive bonus.'
              },
              {
                q: 'Kan jeg se min fremgang mod omsætningskravet?',
                a: 'Ja, de fleste casinoer har en bonus-sektion i din konto med en progress-bar eller procentindikator for, hvor tæt du er på at opfylde kravet. Find det typisk under "Mine bonusser", "Bonus status" eller "Bonus historik" i din konto.'
              },
              {
                q: 'Tæller live dealer spil mod omsætningskravet?',
                a: 'Typisk kun med 5-10% effekt, eller slet ikke. De fleste casinoer ekskluderer live casino fra bonus-omsætning. Slots er altid det bedste valg for at opfylde kravet hurtigt og effektivt.'
              },
              {
                q: 'Hvad er forskellen på wagering på "bonus" vs. "bonus + indskud"?',
                a: 'Wagering kun på bonus er langt bedre for dig. Fx: 35x på 200 kr. bonus = 7.000 kr. skal omsættes vs. 35x på (200 kr. bonus + 200 kr. indskud) = 14.000 kr. Det er dobbelt så meget ved det andet scenarie. Tjek altid hvad kravet gælder for!'
              },
              {
                q: 'Kan jeg afstå fra en bonus, hvis omsætningskravet er for højt?',
                a: 'Ja, de fleste casinoer tillader dig at fravælge eller annullere en aktiv bonus — men så mister du bonussaldoen og eventuelle bonusgevinster. Dine egne indsatte penge er ikke påvirket. Find funktionen under "Mine bonusser" i din konto.'
              },
              {
                q: 'Hvad er en no-wagering bonus?',
                a: 'En no-wagering (ingen omsætningskrav) bonus er en sjælden type, hvor gevinster fra bonussen kan hæves direkte uden omsætningskrav. Disse er meget attraktive, men har typisk lavere bonusbeløb og strengere øvrige vilkår.'
              },
              {
                q: 'Tæller vinder-spins fra bonus-runderne mod omsætningskravet?',
                a: 'Nej — bonus-runder og free spins inden i en slot-game (f.eks. Book of Dead bonus-feature) tæller ikke separat mod omsætningskravet. Det er kun din indsats i slots, der tæller. Indsatsen pr. spin — ikke gevinsterne — er det, der akkumulerer mod kravet.'
              },
              {
                q: 'Hvad sker der med mit indskud, mens bonussaldoen er aktiv?',
                a: 'Dit egentlige indskud er typisk tilgængeligt at hæve som "rigtige penge" — men mange casinoer kræver, at du bruger bonussaldoen op, inden du kan hæve indskuddet. Alternativt kan du fravælge bonussen og hæve dit indskud. Reglerne varierer — tjek vilkårene.'
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

        {/* Disclaimer */}
        <div className="rounded-xl border border-red-800/30 p-5" style={{ background: '#1a0533' }}>
          <p className="text-gray-400 text-xs leading-relaxed text-center">
            <strong className="text-red-400">18+ | Spil ansvarligt | StopSpillet.dk | ROFUS.nu</strong><br />
            Casinospil kan skabe afhængighed. Sæt en grænse for dit spil — brug ROFUS.nu til at udelukke dig selv fra
            alle danske licenserede casinoer. BonusKompas anbefaler kun casinoer med gyldig Spillemyndigheds-licens.
            Senest opdateret: marts 2026.
          </p>
        </div>

        {/* Relaterede guider */}
        <div className="rounded-xl border border-[#f59e0b]/20 p-6" style={{ background: '#1a0533' }}>
          <h3 className="text-[#f59e0b] font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> Relaterede guider
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/guide/bonusvilkaar" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Bonusvilkår guide</Link>
            <Link href="/free-spins" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Free spins 2026</Link>
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
