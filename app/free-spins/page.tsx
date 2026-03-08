import { Metadata } from 'next';
import { casinos, getFreeSpinsCasinos } from '@/data/casinos';
import CasinoCard from '@/components/CasinoCard';
import SortableTable from '@/components/SortableTable';
import Link from 'next/link';
import { Zap, CheckCircle, XCircle, HelpCircle, TrendingUp, Star, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Spins 2026: Alle aktuelle free spins tilbud i Danmark',
  description:
    'Find alle aktuelle free spins tilbud fra Spillemyndigheds-licenserede danske casinoer i 2026. Sammenlign antal free spins, omsætningskrav og max gevinst. Komplet guide til free spins uden og med indbetaling.',
};

export default function FreeSpinsPage() {
  const freeSpinsCasinos = getFreeSpinsCasinos();
  const sorted = [...freeSpinsCasinos].sort((a, b) => b.freeSpins - a.freeSpins);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-14 px-4" style={{ background: 'linear-gradient(135deg, #0f0222 0%, #1a0533 60%, #2d0a57 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-sm px-4 py-1.5 rounded-full mb-5">
            <Zap className="w-4 h-4" />
            {freeSpinsCasinos.length} casinoer med free spins — opdateret marts 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#f59e0b]">Free Spins</span> 2026: Alle aktuelle free spins tilbud i Danmark
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Den komplette oversigt over de bedste og mest aktuelle free spins tilbud fra Spillemyndigheds-
            licenserede danske casinoer. Sammenlign tilbud, omsætningskrav og max gevinst — find det bedste tilbud til dig.
          </p>
          <div className="text-center">
            <span className="text-4xl font-bold text-[#f59e0b]">Op til 250 free spins</span>
            <p className="text-gray-400 text-sm mt-1">hos Jackpot Casino — bedste tilbud lige nu</p>
          </div>
          <p className="text-gray-500 text-xs mt-6">18+ | Spil ansvarligt | StopSpillet.dk | ROFUS.nu</p>
        </div>
      </section>

      {/* Bonus af dagen */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="rounded-xl border border-[#f59e0b]/40 p-6" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d0a57 100%)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-[#f59e0b]" />
            <span className="text-[#f59e0b] font-bold text-lg">🏆 Bonus af dagen — marts 2026</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-white mb-2">Jackpot Casino — 250 Free Spins</h2>
              <p className="text-gray-300 text-sm mb-3">
                Danmarks p.t. bedste free spins tilbud: 250 free spins til Book of Dead ved første indskud på min. 100 kr.
                Omsætningskrav: 35x på gevinster. Max gevinst fra free spins: 1.500 kr.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-900/40 border border-green-600/30 text-green-400 px-2 py-1 rounded">✓ 250 free spins</span>
                <span className="bg-yellow-900/40 border border-yellow-600/30 text-yellow-400 px-2 py-1 rounded">35x omsætning</span>
                <span className="bg-blue-900/40 border border-blue-600/30 text-blue-400 px-2 py-1 rounded">Max 1.500 kr</span>
                <span className="bg-purple-900/40 border border-purple-600/30 text-purple-400 px-2 py-1 rounded">Spillemyndigheden-licens</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f59e0b] mb-1">250</div>
              <div className="text-gray-300 text-sm mb-3">Free Spins</div>
              <div className="text-xs text-gray-500">18+ | Vilkår gælder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top free spins casinos */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-6 h-6 text-[#f59e0b]" />
          <h2 className="text-2xl font-bold text-white">Top free spins casinoer — marts 2026</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {sorted.map((casino, i) => (
            <CasinoCard key={casino.id} casino={casino} rank={i + 1} />
          ))}
        </div>
        <SortableTable casinos={freeSpinsCasinos} />
      </section>

      {/* SEO Content / Guide */}
      <section className="py-10 px-4 max-w-4xl mx-auto space-y-8">

        {/* Hvad er free spins */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Hvad er free spins?</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Free spins — eller gratis spins — er en af de mest populære og udbredte former for casino bonusser i Danmark.
              Som navnet antyder, modtager du et antal spins, du kan bruge på udvalgte spilleautomater{' '}
              <strong className="text-white">gratis</strong>, uden at det koster dig noget af din egentlige saldo.
              Vinder du noget med dine free spins, tilgår gevinsten din bonussaldo — og kan efter opfyldelse af
              omsætningskravet hæves som rigtige penge.
            </p>
            <p>
              Free spins gives typisk som en del af en velkomstbonus, når du registrerer dig som ny spiller og foretager
              dit første indskud. Hos et fåtal casinoer kan du også modtage free spins{' '}
              <em>uden indskud</em> — disse kaldes{' '}
              <Link href="/ingen-indskud-bonus" className="text-[#f59e0b] hover:underline">ingen indskud bonusser</Link>{' '}
              og er de mest eftertragtede, fordi du ikke behøver risikere dine egne penge.
            </p>
            <p>
              I Danmark kan du i øjeblikket finde free spins bonusser med op til{' '}
              <strong className="text-[#f59e0b]">250 free spins</strong> hos Jackpot Casino. Mange casinoer tilbyder
              100–200 free spins som standard velkomstpakke. Husk altid at læse vilkårene grundigt — omsætningskrav
              og max gevinstbegrænsning varierer meget fra casino til casino.
            </p>
          </div>
        </div>

        {/* Forskel på free spins og gratis spins */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Forskel på free spins og gratis spins</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              <strong className="text-[#f59e0b]">Free spins</strong> og{' '}
              <strong className="text-[#f59e0b]">gratis spins</strong> refererer reelt til det samme — det er blot
              det engelske og det danske udtryk for nøjagtig den samme type bonus. Du vil se begge betegnelser brugt
              i flæng på casino-sites og bonussider i Danmark.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1a0533] rounded-xl p-4">
                <h3 className="text-[#f59e0b] font-bold mb-2">Free spins (engelsk)</h3>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400 shrink-0" />Bruges på internationale sites</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400 shrink-0" />Oftest brugt i bonusvilkår</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400 shrink-0" />Søges mest på Google.dk</li>
                </ul>
              </div>
              <div className="bg-[#1a0533] rounded-xl p-4">
                <h3 className="text-[#f59e0b] font-bold mb-2">Gratis spins (dansk)</h3>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400 shrink-0" />Helt identisk med free spins</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400 shrink-0" />Bruges på dansksprogede sites</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400 shrink-0" />Samme regler og vilkår</li>
                </ul>
              </div>
            </div>
            <p>
              Det er dog vigtigt at kende forskellen på <strong className="text-white">free spins med indbetaling</strong>{' '}
              og <strong className="text-white">free spins uden indbetaling</strong> — to typer, der adskiller sig
              markant i vilkår og risiko.
            </p>
          </div>
        </div>

        {/* Free spins uden vs med indbetaling */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-6">Free spins uden vs. med indbetaling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-[#1a0533] rounded-xl p-5 border border-green-600/20">
              <h3 className="text-green-400 font-bold text-lg mb-3">🎁 Free spins UDEN indbetaling</h3>
              <p className="text-gray-300 text-sm mb-3">
                Den mest eftertragtede type: du modtager free spins blot ved at oprette en konto — ingen penge kræves.
                Disse er sjældne i Danmark pga. Spillemyndighedens regulering.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Ingen risiko for egne penge</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Mulighed for at vinde rigtige penge</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Typisk lavere antal spins (10-50)</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Strammere omsætningskrav</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Max gevinst typisk 500 kr.</li>
              </ul>
            </div>
            <div className="bg-[#1a0533] rounded-xl p-5 border border-[#f59e0b]/20">
              <h3 className="text-[#f59e0b] font-bold text-lg mb-3">💰 Free spins MED indbetaling</h3>
              <p className="text-gray-300 text-sm mb-3">
                Den mest almindelige type: du modtager free spins ved første indskud — typisk 75-200 kr. minimum.
                Du får langt flere spins end uden indbetaling.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Langt flere free spins (50-250)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Højere max gevinst (typisk 1.000-2.000 kr.)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Kombineres tit med velkomstbonus</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Kræver minimumindskud</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Omsætningskrav gælder stadig</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Omsætningskrav forklaret */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Omsætningskrav på free spins gevinster — forklaret med eksempel
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Når du vinder penge med dine free spins, placeres gevinsten i din{' '}
              <strong className="text-white">bonussaldo</strong> frem for din rigtige saldo. For at konvertere
              disse penge til rigtige penge, skal du omsætte beløbet et bestemt antal gange — dette kaldes{' '}
              <Link href="/guide/hvad-er-wagering" className="text-[#f59e0b] hover:underline">omsætningskravet</Link>{' '}
              eller wagering requirement.
            </p>
            <p>Omsætningskravet er typisk angivet som f.eks. 35x — og gælder <em>gevinsterne</em> fra dine free spins:</p>
            <div className="bg-[#1a0533] rounded-xl p-5 space-y-4">
              <div>
                <p className="text-[#f59e0b] font-bold mb-2">Eksempel 1: 35x omsætningskrav</p>
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div><span className="text-gray-400">Free spins modtaget:</span> <span className="text-white font-bold">100 spins</span></div>
                  <div><span className="text-gray-400">Gevinst fra spins:</span> <span className="text-white font-bold">150 kr.</span></div>
                  <div><span className="text-gray-400">Omsætningskrav:</span> <span className="text-white font-bold">35x</span></div>
                  <div><span className="text-gray-400">Gælder for:</span> <span className="text-white font-bold">Gevinsterne (150 kr.)</span></div>
                </div>
                <div className="bg-[#2d0a57] rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">Skal omsættes: </span>
                  <span className="text-[#f59e0b] font-bold text-2xl">150 × 35 = 5.250 kr.</span>
                </div>
                <p className="text-gray-400 text-xs mt-2">Du skal spille for 5.250 kr. på slots, inden du kan hæve de 150 kr.</p>
              </div>
              <div>
                <p className="text-[#f59e0b] font-bold mb-2">Eksempel 2: 30x omsætningskrav (lavere = bedre)</p>
                <div className="bg-[#2d0a57] rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">Samme gevinst, lavere krav: </span>
                  <span className="text-[#f59e0b] font-bold text-2xl">150 × 30 = 4.500 kr.</span>
                </div>
                <p className="text-gray-400 text-xs mt-2">Jo lavere omsætningskrav, jo lettere er det at hæve dine gevinster.</p>
              </div>
            </div>
            <p>
              Læs vores detaljerede guide om{' '}
              <Link href="/guide/hvad-er-wagering" className="text-[#f59e0b] hover:underline">
                hvad omsætningskrav er og hvordan de virker
              </Link>.
            </p>
          </div>
        </div>

        {/* Max gevinst-begrænsning */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Max gevinst-begrænsning på free spins</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              De fleste casinoer sætter en <strong className="text-white">maksimalgrænse</strong> for, hvor meget
              du kan vinde med dine free spins — uanset hvor stor en gevinst du faktisk rammer. Denne begrænsning
              er yderst vigtig at kende, inden du accepterer et tilbud.
            </p>
            <div className="bg-[#1a0533] rounded-xl p-5">
              <p className="text-[#f59e0b] font-bold mb-3">Typiske max gevinstgrænser på free spins i Danmark:</p>
              <div className="space-y-2">
                {[
                  { niveau: "Lav (sjældre)", beloeb: "500 kr.", farve: "text-red-400" },
                  { niveau: "Standard (oftest)", beloeb: "1.000–1.500 kr.", farve: "text-yellow-400" },
                  { niveau: "God (kig efter dette)", beloeb: "2.000–3.000 kr.", farve: "text-green-400" },
                  { niveau: "Høj (sjælden)", beloeb: "5.000 kr. eller ingen grænse", farve: "text-blue-400" },
                ].map(({ niveau, beloeb, farve }) => (
                  <div key={niveau} className="flex justify-between items-center bg-[#2d0a57] rounded-lg px-4 py-2.5">
                    <span className="text-gray-300 text-sm">{niveau}</span>
                    <span className={`font-bold ${farve}`}>{beloeb}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#1a0533] rounded-xl p-4 border border-[#f59e0b]/20">
              <AlertTriangle className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <strong className="text-[#f59e0b]">Vigtigt:</strong> Rammer du en stor jackpot på f.eks. 10.000 kr.
                med dine free spins, men casinoets max gevinstgrænse er 1.000 kr., vil kun 1.000 kr. blive krediteret
                din bonussaldo. Resten annulleres. Tjek altid max gevinstgrænsen, inden du accepterer et free spins tilbud.
              </p>
            </div>
          </div>
        </div>

        {/* Sådan bruger du free spins */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Sådan bruger du free spins trin for trin</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Processen for at benytte free spins er generelt den samme på tværs af casinoer:
            </p>
            <ol className="list-none space-y-3">
              {[
                { n: 1, title: "Opret en konto", desc: "Registrer dig hos casinoet med dine personlige oplysninger og bekræft din identitet (KYC — lovkrav i Danmark)." },
                { n: 2, title: "Foretag et indskud (hvis krævet)", desc: "De fleste free spins kræver et minimumindskud, typisk 75–150 kr., for at aktivere bonussen. Brug MobilePay, kort eller bankoverførsel." },
                { n: 3, title: "Aktiver din bonus", desc: "Afhængigt af casinoet aktiveres free spins automatisk eller kræver et klik under &lsquo;Mine bonusser&rsquo; i din konto." },
                { n: 4, title: "Spil dine free spins", desc: "Brug spinsene på de angivne spilleautomater inden for den fastsatte tidsfrist — typisk 7–30 dage. Udløbne free spins annulleres!" },
                { n: 5, title: "Opfyld omsætningskravet", desc: "Gevinster fra free spins krediteres din bonussaldo og skal omsættes typisk 30–40x på slots, inden du kan hæve pengene." },
                { n: 6, title: "Hæv dine penge", desc: "Når omsætningskravet er opfyldt, kan du anmode om udbetaling via MobilePay, bankoverførsel eller anden betalingsmetode." },
              ].map(({ n, title, desc }) => (
                <li key={n} className="flex gap-4 items-start">
                  <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[#1a0533] font-bold text-sm" style={{ background: '#f59e0b' }}>
                    {n}
                  </span>
                  <div>
                    <p className="text-white font-semibold">{title}</p>
                    <p className="text-gray-400 text-sm mt-0.5" dangerouslySetInnerHTML={{ __html: desc }} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Top 10 tilbud */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Top free spins tilbud med vilkår — marts 2026</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Her er en komplet oversigt over casinoerne med de bedste free spins tilbud i Danmark i 2026,
              sorteret efter antal free spins:
            </p>
            <div className="space-y-3">
              {sorted.map((casino, i) => (
                <div key={casino.id} className="bg-[#1a0533] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[#f59e0b] font-bold text-lg">#{i + 1}</span>
                      <span className="text-white font-bold">{casino.name}</span>
                    </div>
                    <span className="text-[#f59e0b] font-bold text-xl">{casino.freeSpins} FS</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-gray-400">
                    <span>🔄 Omsætning: <strong className="text-gray-200">{casino.wageringRequirement}x</strong></span>
                    <span>⏱ Gyldighed: <strong className="text-gray-200">7–30 dage</strong></span>
                    <span>💳 Min. indbetaling: <strong className="text-gray-200">fra 75 kr.</strong></span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">18+ | Spillemyndigheden-licens | Vilkår og betingelser gælder</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fordele og ulemper */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Fordele og ulemper ved free spins</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Fordele
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Du kan prøve spilleautomater gratis og vinde rigtige penge</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Lav risiko — din egentlige saldo er ikke på spil under spinsene</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Perfekt til at lære et nyt casino og nye spilleautomater at kende</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Free spins uden indbetaling kræver ingen egne penge</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Kan kombineres med velkomstbonus for endnu større total bonus</li>
              </ul>
            </div>
            <div>
              <h3 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Ulemper
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Omsætningskrav (30–40x) kan være svære at opfylde</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Max gevinstbegrænsning (typisk 500–2.000 kr.) begrænser gevinsten</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Kun gyldige på specifikke spilleautomater — typisk 1-3 titler</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Tidsbegrænsning — udløber typisk inden for 7 dage</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Gevinster indsættes på bonussaldo — ikke direkte udbetaling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Spilleautomater med free spins */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Hvilke spilleautomater er mest brugt til free spins?</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Free spins er typisk knyttet til et specifikt spil, som casinoet vælger. Her er de tre spilleautomater,
              der oftest bruges til free spins-bonusser i Danmark i 2026 — og hvad der gør dem populære:
            </p>
            <div className="space-y-4">
              {[
                {
                  navn: "Book of Dead (Play&apos;n GO)",
                  rtp: "96.21%",
                  volatilitet: "Høj",
                  beskrivelse: "Danmarks absolut mest populære spilleautomat til free spins bonusser. Den egyptiske temaede slot har et spændende free spins-feature, hvor et udvalgt symbol udvider sig over hele hjulet. Kan give store gevinster — men er volatil, så lange kørslede er mulige.",
                  farve: "text-yellow-400",
                },
                {
                  navn: "Starburst (NetEnt)",
                  rtp: "96.09%",
                  volatilitet: "Lav",
                  beskrivelse: "En af verdens mest spillede slots og klassikeren inden for free spins. Starburst har et unikt &lsquo;expanding wild&rsquo;-feature med re-spins, og dens lave volatilitet betyder hyppige, mindre gevinster. Perfekt til at opfylde omsætningskrav stabilt.",
                  farve: "text-purple-400",
                },
                {
                  navn: "Gonzo&apos;s Quest (NetEnt)",
                  rtp: "95.97%",
                  volatilitet: "Middel",
                  beskrivelse: "Den ikoniske aztekertema-slot med det unike &lsquo;Avalanche&rsquo;-system, hvor symboler falder ned frem for at dreje. Free falls (gratis runderne) giver op til 15 free falls med stigende multiplikatorer op til 15x — og kan give meget pæne gevinster.",
                  farve: "text-green-400",
                },
              ].map(({ navn, rtp, volatilitet, beskrivelse, farve }) => (
                <div key={navn} className="bg-[#1a0533] rounded-xl p-5">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className={`font-bold text-lg ${farve}`} dangerouslySetInnerHTML={{ __html: navn }} />
                    <span className="text-xs bg-green-900/30 border border-green-600/30 text-green-400 px-2 py-0.5 rounded">RTP: {rtp}</span>
                    <span className="text-xs bg-yellow-900/30 border border-yellow-600/30 text-yellow-400 px-2 py-0.5 rounded">Volatilitet: {volatilitet}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: beskrivelse }} />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              * RTP = Return to Player. Angiver den teoretiske tilbagebetaling over tid. Et RTP på 96% betyder, at der
              i gennemsnit udbetales 96 kr. for hver 100 kr. spillet. I praksis svinger resultaterne meget session til session.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Ofte stillede spørgsmål om free spins 2026</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Kan free spins gevinster udbetales direkte?',
                a: 'Nej — gevinster fra free spins placeres på din bonussaldo og skal omsættes et bestemt antal gange (typisk 30–40x), inden de kan hæves som rigtige penge. Vær opmærksom på max gevinstgrænsen, som typisk er 500–2.000 kr.'
              },
              {
                q: 'Hvornår udløber mine free spins?',
                a: 'Det varierer fra casino til casino. Typisk har free spins en gyldighedsperiode på 7–30 dage efter aktivering. Tjek altid det specifikke casinos vilkår, da ikke-brugte free spins annulleres ved udløb — du mister dem!'
              },
              {
                q: 'Hvad er forskellen på free spins og gratis spins?',
                a: 'Free spins er det engelske udtryk, gratis spins er det danske. Det er nøjagtig det samme — gratis drej på en spilleautomat, finansieret af casinoet. Vilkår og regler er identiske uanset betegnelse.'
              },
              {
                q: 'Kan jeg bruge free spins på alle spil?',
                a: 'Nej — free spins er næsten altid kun gyldige på ét eller få specifikke spilleautomater, som casinoet angiver i bonusvilkårene. Oftest er det populære titler som Book of Dead, Starburst eller Gonzo\'s Quest. Du kan ikke overføre dem til andre spil.'
              },
              {
                q: 'Hvad er et omsætningskrav på free spins gevinster?',
                a: 'Omsætningskravet (wagering requirement) er det antal gange, du skal spille for gevinsten fra dine free spins, inden du kan hæve pengene. 35x omsætning på 100 kr. i gevinst = du skal spille for 3.500 kr. på slots. Jo lavere krav, jo bedre for dig.'
              },
              {
                q: 'Hvad betyder "ingen omsætningskrav" på free spins?',
                a: 'Nogle sjældne tilbud er "wager free" — det vil sige, at gevinster fra free spins indsættes direkte som rigtige penge på din saldo og kan hæves øjeblikkeligt. Disse tilbud er sjældne og meget værdifulde, men har typisk lavere max gevinst og færre spins.'
              },
              {
                q: 'Er alle free spins tilbud i Danmark lovlige?',
                a: 'Ja — danske Spillemyndigheds-licenserede casinoer er regulerede og underlagt strenge krav. Det er lovligt at acceptere bonusser og free spins fra disse casinoer. BonusKompas anbefaler kun casinoer med gyldigt dansk Spillemyndigheds-licens.'
              },
              {
                q: 'Hvad er den bedste strategi til at opfylde omsætningskravet?',
                a: 'Spil udelukkende på spilleautomater (slots), da disse typisk tæller 100% mod omsætningskravet. Vælg spil med høj RTP (96%+) og lav-til-middel volatilitet. Hold dine indsatser stabile og lave. Live casino og jackpot slots tæller næsten aldrig mod omsætningskravet.'
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
            Casinospil kan skabe afhængighed. Sæt en grænse for dit spil. Alle tilbud er kun for nye spillere over 18 år,
            med gyldigt NemID/MitID. Vilkår og betingelser gælder. BonusKompas anbefaler udelukkende casinoer med gyldig
            Spillemyndigheds-licens. Senest opdateret: marts 2026.
          </p>
        </div>

        {/* Internal links */}
        <div className="rounded-xl border border-[#f59e0b]/20 p-6" style={{ background: '#1a0533' }}>
          <h3 className="text-[#f59e0b] font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> Relaterede guider
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/gratis-spins" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Gratis Spins guide</Link>
            <Link href="/ingen-indskud-bonus" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Ingen indskud bonus</Link>
            <Link href="/velkomstbonus" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Velkomstbonus oversigt</Link>
            <Link href="/guide/hvad-er-wagering" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Hvad er wagering?</Link>
            <Link href="/guide/bonusvilkaar" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Bonusvilkår guide</Link>
            <Link href="/" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Alle casino bonusser</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
