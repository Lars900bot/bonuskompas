import { Metadata } from 'next';
import { getFreeSpinsCasinos } from '@/data/casinos';
import CasinoCard from '@/components/CasinoCard';
import Link from 'next/link';
import { Zap, Star, HelpCircle, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gratis Spins Casino 2025 – Find Alle Gratis Spins Tilbud Danmark',
  description:
    'Oversigt over alle casinoer med gratis spins i Danmark 2025. Sammenlign tilbud, omsætningskrav og bonusvilkår. Kun Spillemyndigheds-licenserede casinoer.',
};

export default function GratisSpinsPage() {
  const fsCasinos = getFreeSpinsCasinos();
  const topCasinos = [...fsCasinos].sort((a, b) => b.freeSpins - a.freeSpins);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-14 px-4" style={{ background: 'linear-gradient(135deg, #0f0222 0%, #1a0533 60%, #2d0a57 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-sm px-4 py-1.5 rounded-full mb-5">
            <Zap className="w-4 h-4" />
            Gratis spins fra licenserede casinoer
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#f59e0b]">Gratis Spins</span> 2025
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Den komplette guide til gratis spins i Danmark. Find de bedste tilbud, forstå
            reglerne og maksimer dine chancer for at vinde med gratis spins.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-xl px-5 py-2.5 text-center">
              <div className="text-[#f59e0b] font-bold text-2xl">{Math.max(...fsCasinos.map(c => c.freeSpins))}</div>
              <div className="text-gray-400 text-xs">Max gratis spins</div>
            </div>
            <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-xl px-5 py-2.5 text-center">
              <div className="text-[#f59e0b] font-bold text-2xl">{fsCasinos.length}</div>
              <div className="text-gray-400 text-xs">Casinoer med gratis spins</div>
            </div>
          </div>
        </div>
      </section>

      {/* Casino cards */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Star className="w-6 h-6 text-[#f59e0b]" />
          <h2 className="text-2xl font-bold text-white">Bedste gratis spins tilbud</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCasinos.map((casino, i) => (
            <CasinoCard key={casino.id} casino={casino} rank={i + 1} />
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4 max-w-4xl mx-auto space-y-8">
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Gratis spins vs. free spins — hvad er forskellen?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Mange spillere undrer sig over forskellen på <strong className="text-white">gratis spins</strong>{' '}
              og <Link href="/free-spins" className="text-[#f59e0b] hover:underline">free spins</Link>.
              Svaret er enkelt: <strong className="text-[#f59e0b]">der er ingen forskel</strong>. Det er
              to betegnelser for præcis det samme fænomen.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-[#f59e0b] mt-0.5 shrink-0" />
                <span><strong className="text-white">Free spins</strong> er den engelske betegnelse, som bruges bredt i casino-branchen</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-[#f59e0b] mt-0.5 shrink-0" />
                <span><strong className="text-white">Gratis spins</strong> er den direkte danske oversættelse</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-[#f59e0b] mt-0.5 shrink-0" />
                <span>Begge termer refererer til gratis drej på en spilleautomat, der gives af casinoet</span>
              </li>
            </ul>
            <p>
              Uanset om du søger på "gratis spins" eller "free spins", leder du efter det samme.
              Hos BonusKompas.dk dækker vi begge søgetermer og viser dig de bedste tilbud.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Sådan fungerer gratis spins i praksis
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Gratis spins er designet til at give dig en smagstest på casino-oplevelsen uden at
              risikere dine egne penge. Her er en typisk situation:
            </p>
            <div className="bg-[#1a0533] rounded-xl p-5 space-y-3">
              <p className="text-[#f59e0b] font-semibold">Eksempel: LeoVegas Velkomstbonus</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Du indskyder 200 kr. (minimum for at aktivere bonussen)</li>
                <li>✓ Du modtager 200 gratis spins på en udvalgt spilleautomat</li>
                <li>✓ Hvert spin er typisk værd 1–5 kr. i indsats</li>
                <li>✓ Dine gevinster fra spinsene placeres i din bonussaldo</li>
                <li>✓ Du skal omsætte gevinster 35x, inden du kan hæve dem</li>
                <li>✓ Du har typisk 7 dage til at bruge spinsene</li>
              </ul>
            </div>
            <p>
              Det vigtigste at huske er, at selve spinsene er gratis — men gevinsterne er bundet
              af omsætningskravet. Brug vores{' '}
              <Link href="/#beregner" className="text-[#f59e0b] hover:underline">bonus-beregner</Link>{' '}
              til at se, hvad du faktisk skal omsætte.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hvilke spil kan man bruge gratis spins på?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Gratis spins er næsten altid begrænset til specifikke spilleautomater. De mest populære
              spil, som casinoer bruger til gratis spins-kampagner i Danmark, inkluderer:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Starburst (NetEnt)',
                'Book of Dead (Play\'n GO)',
                'Gonzo\'s Quest (NetEnt)',
                'Immortal Romance (Microgaming)',
                'Mega Moolah (Microgaming)',
                'Wolf Gold (Pragmatic Play)',
                'Reactoonz (Play\'n GO)',
                'Dead or Alive (NetEnt)',
                'Fire Joker (Play\'n GO)',
              ].map((game) => (
                <div key={game} className="bg-[#1a0533] rounded-lg px-3 py-2 text-sm text-center">
                  {game}
                </div>
              ))}
            </div>
            <p>
              Det er altid casinoet, der bestemmer hvilke spil gratis spinsene kan bruges på. Tjek
              altid bonusvilkårene inden du aktiverer din bonus, da du ikke kan bytte om, når
              spinsene er aktiveret.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Gratis spins uden indskud
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Den hellige gral for mange spillere er gratis spins{' '}
              <strong className="text-white">uden indskud</strong> — altså spins du får gratis
              uden at indbetale noget. Disse tilbud er sjældne i Danmark, men de eksisterer.
            </p>
            <p>
              Unibet er et godt eksempel: de tilbyder periodevis 100 gratis spins uden indskud
              til nye spillere. Det er en risikofri måde at prøve casinoet på.
            </p>
            <p>
              Læs vores fulde guide om{' '}
              <Link href="/ingen-indskud-bonus" className="text-[#f59e0b] hover:underline">
                ingen indskud bonusser
              </Link>{' '}
              for at finde de mest aktuelle tilbud.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-6">
            Top 5 tips til at bruge gratis spins smart
          </h2>
          <div className="space-y-4">
            {[
              {
                num: '1',
                title: 'Tjek omsætningskravet først',
                desc: 'Inden du aktiverer gratis spins, skal du forstå omsætningskravet. Et 30x krav på gevinster er OK; 50x+ er meget svært at opfylde.',
              },
              {
                num: '2',
                title: 'Brug alle dine spins',
                desc: 'Gratis spins udløber typisk efter 7–30 dage. Sæt en påmindelse og brug alle dine spins inden de forsvinder.',
              },
              {
                num: '3',
                title: 'Vælg de rigtige spil',
                desc: 'Hvis du har valg, vælg spilleautomater med høj RTP (Return to Player) — typisk 96%+. Det giver de bedste chancer for at opfylde omsætningskravet.',
              },
              {
                num: '4',
                title: 'Administrér din bonussaldo',
                desc: 'Hold øje med din bonussaldo separat fra din rigtige saldo. Du vil gerne se dine gevinster vokse nok til at dække omsætningskravet.',
              },
              {
                num: '5',
                title: 'Læs vilkårene',
                desc: 'Gratis spins kan have restriktioner på gevinster (max udtag), gyldige spil og tidsfrister. Læs altid vilkårene, inden du aktiverer bonussen.',
              },
            ].map((tip) => (
              <div key={tip.num} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#f59e0b] text-[#1a0533] font-bold flex items-center justify-center shrink-0 text-sm">
                  {tip.num}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{tip.title}</h3>
                  <p className="text-gray-400 text-sm">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Ofte stillede spørgsmål</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Er gratis spins det samme som free spins?',
                a: 'Ja, 100%. Gratis spins er blot den danske betegnelse for free spins. Begge termer beskriver gratis drej på spilleautomater givet af casinoet.'
              },
              {
                q: 'Hvad er værdien af hvert gratis spin?',
                a: 'Det varierer. De fleste casinoer sætter spinværdien til mellem 0,10 kr. og 5 kr. Tjek altid bonusvilkårene for præcis spinværdi, da det påvirker din potentielle gevinst.'
              },
              {
                q: 'Kan man vinde rigtige penge med gratis spins?',
                a: 'Ja! Gevinster fra gratis spins er rigtige penge, men de er bundet af et omsætningskrav. Når du opfylder kravet, kan du hæve dem til din bankkonto.'
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
            <Link href="/free-spins" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Free spins guide</Link>
            <Link href="/ingen-indskud-bonus" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Ingen indskud bonus</Link>
            <Link href="/velkomstbonus" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Velkomstbonus</Link>
            <Link href="/guide/hvad-er-wagering" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Wagering guide</Link>
            <Link href="/guide/bonusvilkaar" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Bonusvilkår</Link>
            <Link href="/" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Alle bonusser</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
