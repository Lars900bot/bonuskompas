import { Metadata } from 'next';
import { casinos, featuredCasino } from '@/data/casinos';
import FilteredCasinoList from '@/components/FilteredCasinoList';
import SortableTable from '@/components/SortableTable';
import BonusCalculator from '@/components/BonusCalculator';
import { Trophy, Zap, Shield, TrendingUp, ExternalLink, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bedste Casino Bonusser 2025 – Sammenlign Free Spins & Velkomstbonusser',
  description:
    'Sammenlign alle de bedste casino bonusser i Danmark. Find gratis free spins, velkomstbonusser og ingen indskud bonusser fra licenserede danske casinoer.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 px-4" style={{ background: 'linear-gradient(135deg, #0f0222 0%, #1a0533 50%, #2d0a57 100%)' }}>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-sm px-4 py-1.5 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            Kun Spillemyndigheds-licenserede casinoer
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Find de bedste<br />
            <span className="text-[#f59e0b]">casino bonusser</span> i Danmark
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Sammenlign {casinos.length} casinoer med dansk licens. Opdaterede bonustilbud,
            free spins og velkomstbonusser — uden skjulte vilkår.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#bonusser" className="bg-[#f59e0b] hover:bg-[#fbbf24] text-[#1a0533] font-bold px-6 py-3 rounded-lg transition-colors">
              Se alle bonusser
            </a>
            <a href="#beregner" className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-lg transition-colors">
              Brug bonus-beregner
            </a>
          </div>
        </div>
        {/* decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10" style={{ background: '#f59e0b' }} />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full opacity-5" style={{ background: '#f59e0b' }} />
      </section>

      {/* Stats bar */}
      <section className="border-y border-[#3d1270] py-4 px-4" style={{ background: '#0f0222' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Licenserede casinoer', value: casinos.length.toString(), icon: <Shield className="w-5 h-5" /> },
            { label: 'Max free spins', value: '250', icon: <Zap className="w-5 h-5" /> },
            { label: 'Max bonus', value: '3.000 kr.', icon: <TrendingUp className="w-5 h-5" /> },
            { label: 'Laveste omsætning', value: '30x', icon: <Trophy className="w-5 h-5" /> },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <div className="text-[#f59e0b]">{stat.icon}</div>
              <div className="text-white font-bold text-xl">{stat.value}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bonus af dagen */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <Trophy className="w-6 h-6 text-[#f59e0b]" />
          <h2 className="text-2xl font-bold text-white">Bonus af dagen</h2>
          <span className="bg-[#f59e0b] text-[#1a0533] text-xs font-bold px-2 py-0.5 rounded-full">
            ANBEFALET
          </span>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#f59e0b]/40" style={{ background: 'linear-gradient(135deg, #2d0a57, #3d1270)' }}>
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#f59e0b] font-bold text-2xl">{featuredCasino.name}</span>
                  {featuredCasino.isLimited && (
                    <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">Tidsbegrænset</span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className={`w-5 h-5 ${s <= Math.round(featuredCasino.rating) ? 'fill-[#f59e0b] text-[#f59e0b]' : 'text-gray-600'}`} />
                  ))}
                  <span className="text-gray-300 text-sm">{featuredCasino.rating}/5</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{featuredCasino.description}</p>
                <div className="flex gap-4 flex-wrap text-sm">
                  <div className="text-center">
                    <div className="text-[#f59e0b] font-bold text-2xl">{featuredCasino.freeSpins}</div>
                    <div className="text-gray-400">Free Spins</div>
                  </div>
                  {featuredCasino.bonusAmount > 0 && (
                    <div className="text-center">
                      <div className="text-[#f59e0b] font-bold text-2xl">{featuredCasino.bonusPercent}%</div>
                      <div className="text-gray-400">Op til {featuredCasino.bonusAmount.toLocaleString('da-DK')} kr.</div>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-[#f59e0b] font-bold text-2xl">{featuredCasino.wageringRequirement}x</div>
                    <div className="text-gray-400">Omsætning</div>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <a
                  href={featuredCasino.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#1a0533] font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-[#f59e0b]/30"
                >
                  <ExternalLink className="w-5 h-5" />
                  Hent bonus nu
                </a>
                <p className="text-gray-500 text-xs mt-2">18+ · Spil ansvarligt · Vilkår gælder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casino list with filters */}
      <section id="bonusser" className="py-10 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-6 h-6 text-[#f59e0b]" />
          <h2 className="text-2xl font-bold text-white">Alle aktuelle bonusser</h2>
          <span className="bg-[#2d0a57] border border-[#3d1270] text-gray-300 text-xs px-2 py-0.5 rounded-full">
            Opdateret marts 2025
          </span>
        </div>
        <FilteredCasinoList casinos={casinos} />
      </section>

      {/* Bonus calculator */}
      <section id="beregner" className="py-10 px-4 max-w-7xl mx-auto">
        <BonusCalculator />
      </section>

      {/* Sortable comparison table */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-[#f59e0b]" />
          <h2 className="text-2xl font-bold text-white">Sammenligningstabel</h2>
        </div>
        <SortableTable casinos={casinos} />
      </section>

      {/* Content section */}
      <section className="py-10 px-4 max-w-4xl mx-auto">
        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Sådan finder du den bedste casino bonus i Danmark
          </h2>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
            <p>
              At navigere i junglen af casino bonusser kan være overvældende. Der er tusindvis
              af tilbud derude, men ikke alle er skabt ens — og slet ikke alle er sikre at
              spille på. Hos BonusKompas.dk har vi gjort arbejdet for dig: vi sammenligner
              udelukkende casinoer med <strong className="text-[#f59e0b]">dansk licens fra Spillemyndigheden</strong>,
              hvilket garanterer dig den højeste grad af forbrugerbeskyttelse.
            </p>
            <h3 className="text-xl font-bold text-white">Hvad er en casino bonus?</h3>
            <p>
              En casino bonus er et tilbud fra casinoet til dig som ny eller eksisterende spiller.
              De mest populære typer inkluderer <Link href="/free-spins" className="text-[#f59e0b] hover:underline">free spins</Link>,
              {' '}<Link href="/velkomstbonus" className="text-[#f59e0b] hover:underline">velkomstbonusser</Link> og
              {' '}<Link href="/ingen-indskud-bonus" className="text-[#f59e0b] hover:underline">ingen indskud bonusser</Link>.
              Fælles for dem alle er, at de er underlagt et{' '}
              <Link href="/guide/hvad-er-wagering" className="text-[#f59e0b] hover:underline">omsætningskrav (wagering)</Link>,
              som du skal opfylde, før du kan hæve dine gevinster.
            </p>
            <h3 className="text-xl font-bold text-white">Hvad skal du kigge efter?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong className="text-white">Omsætningskrav:</strong> Jo lavere, jo bedre. 30x er godt, 35x er normalt, 40x+ er højt.</li>
              <li><strong className="text-white">Bonus beløb:</strong> En høj bonus er kun god, hvis vilkårene er rimelige.</li>
              <li><strong className="text-white">Free spins:</strong> Free spins med lav gevinststørrelse kan have skjulte krav.</li>
              <li><strong className="text-white">Tidsbegrænsning:</strong> Mange bonusser udløber — tjek altid vilkårene.</li>
              <li><strong className="text-white">Dansk licens:</strong> Det eneste, der sikrer dine penge og rettigheder som dansk spiller.</li>
            </ul>
            <h3 className="text-xl font-bold text-white">Spillemyndigheds-licenserede casinoer</h3>
            <p>
              I Danmark er det lovpligtigt for alle casinoer, der ønsker at tilbyde deres tjenester
              til danske spillere, at have en licens fra Spillemyndigheden. Dette sikrer, at:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Spilsoftwaren er testet og certificeret som fair</li>
              <li>Dine penge er beskyttet i separate konti</li>
              <li>Du kan udelukke dig selv via ROFUS</li>
              <li>Casinoet følger danske regler for ansvarligt spil</li>
              <li>Du har adgang til dansk kundesupport og forbrugerbeskyttelse</li>
            </ul>
            <p>
              Alle casinoer på BonusKompas.dk er verificeret som havende gyldig dansk licens.
              Vi opdaterer vores data løbende og fjerner casinoer, der mister deres licens.
            </p>
          </div>
        </div>
      </section>

      {/* Quick links to guides */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Læs vores guider</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { href: '/free-spins', title: 'Free Spins Guide', desc: 'Alt om free spins bonusser', badge: '9.900/md' },
            { href: '/gratis-spins', title: 'Gratis Spins', desc: 'Hvad er gratis spins?', badge: '2.400/md' },
            { href: '/velkomstbonus', title: 'Velkomstbonus', desc: 'Sammenlign velkomstbonusser', badge: null },
            { href: '/ingen-indskud-bonus', title: 'Ingen Indskud', desc: 'Spil gratis uden risiko', badge: null },
            { href: '/guide/hvad-er-wagering', title: 'Wagering Guide', desc: 'Forstå omsætningskrav', badge: null },
            { href: '/guide/bonusvilkaar', title: 'Bonusvilkår', desc: 'Læs vilkårene rigtigt', badge: null },
          ].map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="block rounded-xl border border-[#3d1270] hover:border-[#f59e0b]/50 p-5 transition-all hover:bg-[#3d1270]/30"
              style={{ background: '#2d0a57' }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-white font-semibold">{guide.title}</h3>
                {guide.badge && (
                  <span className="text-xs bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] px-1.5 py-0.5 rounded">
                    {guide.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm">{guide.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
