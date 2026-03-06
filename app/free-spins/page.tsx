import { Metadata } from 'next';
import { casinos, getFreeSpinsCasinos } from '@/data/casinos';
import CasinoCard from '@/components/CasinoCard';
import SortableTable from '@/components/SortableTable';
import Link from 'next/link';
import { Zap, CheckCircle, XCircle, HelpCircle, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Spins Casino Bonusser 2025 – Bedste Free Spins Tilbud',
  description:
    'Find de bedste free spins bonusser fra danske licenserede casinoer. Sammenlign antal free spins, omsætningskrav og gevinster. Opdateret marts 2025.',
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
            {freeSpinsCasinos.length} casinoer med free spins
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#f59e0b]">Free Spins</span> Bonusser 2025
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Den komplette oversigt over de bedste free spins tilbud fra Spillemyndigheds-
            licenserede danske casinoer. Sammenlign og find det bedste tilbud til dig.
          </p>
          <div className="text-center">
            <span className="text-4xl font-bold text-[#f59e0b]">Op til 250 free spins</span>
            <p className="text-gray-400 text-sm mt-1">hos Jackpot Casino — bedste tilbud lige nu</p>
          </div>
        </div>
      </section>

      {/* Top free spins casinos */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-6 h-6 text-[#f59e0b]" />
          <h2 className="text-2xl font-bold text-white">Top free spins casinoer – marts 2025</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {sorted.map((casino, i) => (
            <CasinoCard key={casino.id} casino={casino} rank={i + 1} />
          ))}
        </div>
        <SortableTable casinos={freeSpinsCasinos} />
      </section>

      {/* Content / Guide */}
      <section className="py-10 px-4 max-w-4xl mx-auto space-y-8">
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Hvad er free spins?</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Free spins — eller gratis spins — er en af de mest populære former for casino bonusser
              i Danmark. Som navnet antyder, modtager du et antal spins, som du kan bruge på
              udvalgte spilleautomater <strong className="text-white">gratis</strong>, uden at det
              koster dig noget af din egen saldo.
            </p>
            <p>
              Free spins gives typisk som en del af en velkomstbonus, når du registrerer dig som
              ny spiller og foretager dit første indskud. Hos et fåtal casinoer kan du også
              modtage free spins <em>uden indskud</em> — disse kaldes{' '}
              <Link href="/ingen-indskud-bonus" className="text-[#f59e0b] hover:underline">ingen indskud bonusser</Link>.
            </p>
            <p>
              I Danmark kan du i øjeblikket finde free spins bonusser med op til{' '}
              <strong className="text-[#f59e0b]">250 free spins</strong> hos Jackpot Casino, og
              mange casinoer tilbyder 100–200 free spins som standard velkomstpakke.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Sådan bruger du free spins</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Processen for at benytte free spins er generelt den samme på tværs af casinoer:
            </p>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong className="text-white">Opret en konto</strong> — Registrer dig hos casinoet med dine personlige oplysninger
                og bekræft din identitet (KYC).
              </li>
              <li>
                <strong className="text-white">Foretag et indskud</strong> — De fleste free spins kræver et minimumindskud,
                typisk 75–150 kr., for at aktivere bonussen.
              </li>
              <li>
                <strong className="text-white">Modtag dine free spins</strong> — Free spins krediteres automatisk til din konto,
                enten med det samme eller inden for 24 timer.
              </li>
              <li>
                <strong className="text-white">Spil free spins</strong> — Brug spinsene på de angivne spilleautomater inden
                for den fastsatte tidsfrist (typisk 7–30 dage).
              </li>
              <li>
                <strong className="text-white">Opfyld omsætningskravet</strong> — Gevinster fra free spins er underlagt et{' '}
                <Link href="/guide/hvad-er-wagering" className="text-[#f59e0b] hover:underline">omsætningskrav</Link>{' '}
                på typisk 30–40x, før du kan hæve pengene.
              </li>
            </ol>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Fordele og ulemper ved free spins</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Fordele
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Du kan prøve spilleautomater gratis</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Mulighed for at vinde rigtige penge</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Lav risiko — din egen kapital er ikke på spil</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />Godt til at lære et nyt casino at kende</li>
              </ul>
            </div>
            <div>
              <h3 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Ulemper
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Omsætningskrav kan være svære at opfylde</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Gevinster er begrænsede (typisk max 500 kr.)</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Kun gyldige på specifikke spil</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />Tidsbegrænsning — udløber typisk inden for 7 dage</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hvad er omsætningskravet på free spins gevinster?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Når du vinder penge med dine free spins, vil gevinsten typisk blive placeret i din
              bonussaldo frem for din rigtige saldo. For at konvertere disse penge til rigtige penge,
              skal du omsætte beløbet et bestemt antal gange — dette kaldes omsætningskravet eller
              wagering requirement.
            </p>
            <p>
              <strong className="text-white">Eksempel:</strong> Du vinder 100 kr. med dine free spins.
              Casinoet har et 35x omsætningskrav. Det betyder, at du skal spille for:
            </p>
            <div className="bg-[#1a0533] rounded-lg p-4 text-center">
              <span className="text-[#f59e0b] font-bold text-2xl">100 kr. × 35 = 3.500 kr.</span>
              <p className="text-gray-400 text-sm mt-1">skal omsættes, inden du kan hæve</p>
            </div>
            <p>
              Læs vores detaljerede guide om{' '}
              <Link href="/guide/hvad-er-wagering" className="text-[#f59e0b] hover:underline">
                hvad omsætningskrav er og hvordan de virker
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Hvilke casinoer giver flest free spins?</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Her er en oversigt over casinoerne med flest free spins i Danmark i 2025:
            </p>
            <div className="space-y-3">
              {sorted.map((casino, i) => (
                <div key={casino.id} className="flex items-center justify-between bg-[#1a0533] rounded-lg px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[#f59e0b] font-bold text-lg">#{i + 1}</span>
                    <span className="text-white font-medium">{casino.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#f59e0b] font-bold">{casino.freeSpins} free spins</span>
                    <span className="text-gray-500 text-sm">· {casino.wageringRequirement}x omsætning</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">Ofte stillede spørgsmål om free spins</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Kan jeg hæve mine free spins gevinster?',
                a: 'Ja, men du skal først opfylde casinoets omsætningskrav. Gevinster fra free spins placeres typisk i din bonussaldo og kræver 30–40x omsætning, inden de kan hæves.'
              },
              {
                q: 'Hvad er forskellen på free spins og gratis spins?',
                a: 'Free spins og gratis spins er to ord for det samme. Free spins er det engelske udtryk, gratis spins er det danske. Begge refererer til gratis drej på en spilleautomat.'
              },
              {
                q: 'Kan jeg bruge free spins på alle spil?',
                a: 'Nej, free spins er typisk kun gyldige på specifikke spilleautomater, som casinoet bestemmer. Det er normalt populære titler som Starburst, Book of Dead eller lignende.'
              },
              {
                q: 'Hvornår udløber mine free spins?',
                a: 'Det varierer fra casino til casino, men typisk har free spins en gyldighedsperiode på 7–30 dage. Tjek altid det specifikke casino\'s vilkår for præcise frister.'
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
