import { Metadata } from 'next';
import { casinos, getNoDepositCasinos } from '@/data/casinos';
import CasinoCard from '@/components/CasinoCard';
import Link from 'next/link';
import { Ban, CheckCircle, AlertTriangle, HelpCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ingen Indskud Bonus 2025 – Spil Casino Gratis Uden Deposit',
  description:
    'Find de bedste ingen indskud casino bonusser i Danmark. Spil gratis uden at indbetale egne penge. Kun licenserede danske casinoer med Spillemyndighedens godkendelse.',
};

export default function IngenIndskudPage() {
  const noDepositCasinos = getNoDepositCasinos();
  const allCasinos = casinos;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-14 px-4" style={{ background: 'linear-gradient(135deg, #0f0222 0%, #1a0533 60%, #2d0a57 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-600/40 text-green-400 text-sm px-4 py-1.5 rounded-full mb-5">
            <Ban className="w-4 h-4" />
            Ingen indskud krævet
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#f59e0b]">Ingen Indskud</span> Bonus 2025
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Spil casino helt gratis uden at indbetale dine egne penge. Vi har samlet de bedste
            ingen indskud bonusser fra danske, licenserede casinoer.
          </p>
          <div className="inline-block bg-green-600/10 border border-green-600/30 rounded-xl px-6 py-3">
            <span className="text-green-400 font-bold text-lg">0 kr. krævet</span>
            <span className="text-gray-400 text-sm ml-2">— start med at spille gratis i dag</span>
          </div>
        </div>
      </section>

      {/* No deposit casinos */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Ban className="w-6 h-6 text-[#f59e0b]" />
          <h2 className="text-2xl font-bold text-white">Casinoer med ingen indskud bonus</h2>
        </div>

        {noDepositCasinos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {noDepositCasinos.map((casino, i) => (
              <CasinoCard key={casino.id} casino={casino} rank={i + 1} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-yellow-600/30 p-8 text-center mb-10" style={{ background: '#2d0a57' }}>
            <AlertTriangle className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-white font-bold text-lg mb-2">Begrænsede tilbud</h3>
            <p className="text-gray-400">
              Ingen indskud bonusser er sjældne i Danmark på grund af stramme licensregler.
              Tjek vores velkomstbonusser nedenfor for de bedste aktuelle tilbud.
            </p>
          </div>
        )}
      </section>

      {/* Content */}
      <section className="py-10 px-4 max-w-4xl mx-auto space-y-8">
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hvad er en ingen indskud bonus?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              En <strong className="text-white">ingen indskud bonus</strong> — også kaldet en no deposit bonus —
              er en speciel type velkomstbonus, hvor casinoet giver dig gratis penge eller free spins
              <em> uden at du behøver at indbetale noget som helst</em>. Det er simpelthen casinoets måde
              at lade dig prøve deres platform på helt uden risiko for dig som ny spiller.
            </p>
            <p>
              I Danmark er disse bonusser relativt sjældne sammenlignet med andre markeder. Det skyldes,
              at Spillemyndigheden stiller strenge krav til ansvarligt spil, og mange casinoer vurderer,
              at ingen indskud bonusser kan tiltrække sårbare spillere. Alligevel findes der stadig
              casinoer med disse attraktive tilbud.
            </p>
            <p>
              Det er vigtigt at forstå, at selvom du ikke behøver at indbetale penge for at modtage
              bonussen, er den stadig underlagt et{' '}
              <Link href="/guide/hvad-er-wagering" className="text-[#f59e0b] hover:underline">
                omsætningskrav
              </Link>
              , som du skal opfylde, inden du kan hæve eventuelle gevinster.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Typer af ingen indskud bonusser
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-[#1a0533] rounded-xl p-5">
              <div className="text-[#f59e0b] font-bold text-lg mb-2">Gratis Free Spins</div>
              <p className="text-gray-300 text-sm">
                Den mest almindelige form. Du modtager et antal free spins på en bestemt spilleautomat,
                typisk 10–50 spins, uden at indbetale noget. Unibet tilbyder fx 100 free spins uden indskud.
              </p>
            </div>
            <div className="bg-[#1a0533] rounded-xl p-5">
              <div className="text-[#f59e0b] font-bold text-lg mb-2">Gratis Bonus Penge</div>
              <p className="text-gray-300 text-sm">
                Casinoet krediterer en sum penge direkte til din bonussaldo, typisk 50–200 kr.,
                som du kan bruge til at spille for. Disse er meget sjældne i Danmark.
              </p>
            </div>
            <div className="bg-[#1a0533] rounded-xl p-5">
              <div className="text-[#f59e0b] font-bold text-lg mb-2">Registreringsbonus</div>
              <p className="text-gray-300 text-sm">
                Bare ved at oprette en konto og bekræfte din identitet modtager du en bonus.
                Ingen indskud er nødvendigt, men identitetsbekræftelse er altid et krav.
              </p>
            </div>
            <div className="bg-[#1a0533] rounded-xl p-5">
              <div className="text-[#f59e0b] font-bold text-lg mb-2">Tidsbegrænset tilbud</div>
              <p className="text-gray-300 text-sm">
                Mange ingen indskud bonusser er tidsbegrænsede kampagner. Det er vigtigt at
                handle hurtigt og tjekke udløbsdatoen, når sådanne tilbud opstår.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Fordele og ulemper ved ingen indskud bonusser
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Fordele
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <span><strong className="text-white">Ingen risiko:</strong> Du bruger ikke dine egne penge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <span><strong className="text-white">Test casinoet:</strong> Prøv platformen inden du beslutter dig</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <span><strong className="text-white">Gratis gevinster:</strong> Mulighed for at vinde rigtige penge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <span><strong className="text-white">Lær spillene:</strong> Perfekt til at lære nye spil at kende</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Ulemper
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span><strong className="text-white">Højt omsætningskrav:</strong> Ofte 40–60x for at hæve gevinster</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span><strong className="text-white">Gevinst loft:</strong> Max udbetaling begrænses typisk til 500 kr.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span><strong className="text-white">Sjældne:</strong> Begrænsede tilbud tilgængelige i Danmark</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span><strong className="text-white">Korte frister:</strong> Skal bruges inden for få dage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Sådan aktiverer du din ingen indskud bonus
          </h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Opret konto', desc: 'Registrer dig med dit fulde navn, adresse og CPR-nummer. Casinoet er forpligtet til at verificere din identitet i henhold til dansk lovgivning.' },
              { step: '2', title: 'Bekræft din identitet', desc: 'Upload dit pas eller kørekort samt bevis for adresse. Dette er et krav fra Spillemyndigheden og kan tage 24–48 timer.' },
              { step: '3', title: 'Modtag din bonus', desc: 'Ingen indskud bonussen krediteres automatisk, når din konto er bekræftet. Du behøver ikke bruge en bonuskode medmindre det er angivet.' },
              { step: '4', title: 'Spil og opfyld krav', desc: 'Brug dine gratis spins eller bonuspenge og opfyld omsætningskravet inden for den angivne periode.' },
              { step: '5', title: 'Hæv dine gevinster', desc: 'Når omsætningskravet er opfyldt, kan du anmode om udbetaling. Husk at der typisk er et maksimum beløb du kan hæve fra bonusgevinster.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#f59e0b] text-[#1a0533] font-bold flex items-center justify-center shrink-0 text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Alternativet: Velkomstbonus med free spins</h2>
          <p className="text-gray-300 mb-5">
            Da ingen indskud bonusser er sjældne i Danmark, er en god alternativ strategi at vælge
            en velkomstbonus med mange free spins og et lavt minimumindskud. Her er de bedste tilbud:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allCasinos.filter(c => c.freeSpins > 0 && !c.noDeposit).slice(0, 4).map((casino) => (
              <div key={casino.id} className="bg-[#1a0533] rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">{casino.name}</div>
                  <div className="text-[#f59e0b] text-sm">{casino.freeSpins} free spins</div>
                  <div className="text-gray-400 text-xs">Min. indskud: {casino.minDeposit} kr.</div>
                </div>
                <a
                  href={casino.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center gap-1 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#1a0533] font-bold text-xs px-3 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Se tilbud
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">FAQ – Ingen indskud bonus</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Kan jeg hæve gevinster fra ingen indskud bonusser?',
                a: 'Ja, men du skal opfylde omsætningskravet (typisk 30–50x gevinsterne) og overholde de øvrige vilkår. Der er som regel et max beløb du kan hæve fra bonusgevinster, typisk 500–1.000 kr.'
              },
              {
                q: 'Behøver jeg et kreditkort for ingen indskud bonusser?',
                a: 'Nej, du behøver ikke en betalingsmetode for at modtage selve bonussen. Du skal dog registrere en, inden du kan hæve eventuelle gevinster.'
              },
              {
                q: 'Kan jeg benytte ingen indskud bonusser hos flere casinoer?',
                a: 'Ja, du kan oprette konti hos alle casinoer der tilbyder ingen indskud bonusser, så længe du opfylder kravene som ny spiller. Hvert casino giver kun bonussen én gang per spiller.'
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
          <h3 className="text-[#f59e0b] font-semibold mb-4">Relaterede guider</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/free-spins" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Free spins guide</Link>
            <Link href="/velkomstbonus" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Velkomstbonus</Link>
            <Link href="/guide/hvad-er-wagering" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Hvad er wagering?</Link>
            <Link href="/guide/bonusvilkaar" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Bonusvilkår guide</Link>
            <Link href="/" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Alle bonusser</Link>
            <Link href="/gratis-spins" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Gratis spins</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
