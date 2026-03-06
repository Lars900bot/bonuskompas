import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, CheckCircle, AlertTriangle, XCircle, HelpCircle, TrendingUp, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bonusvilkår Guide 2025 – Forstå Casino Bonus Betingelser',
  description:
    'Lær at læse og forstå casino bonusvilkår. Vi forklarer alle de vigtige termer: omsætningskrav, max indsats, gyldige spil, tidsbegrænsning og meget mere.',
};

export default function BonusvilkaarPage() {
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
            <span>Bonusvilkår</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#f59e0b]">Bonusvilkår</span> Guide 2025
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Forstå det med småt — en komplet gennemgang af casino bonusvilkår, hvad de betyder,
            og hvad du skal passe på, inden du accepterer en bonus.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4 max-w-4xl mx-auto space-y-8">
        <div className="rounded-xl border border-[#f59e0b]/30 p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Hvorfor er bonusvilkår vigtige?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Casino bonusser kan se utrolig attraktive ud — "200 free spins + 100% op til 3.000 kr."
              lyder fantastisk. Men bag disse tilbud gemmer der sig bonusvilkår, der afgør, om du
              faktisk kan få glæde af pengene.
            </p>
            <p>
              Mange spillere accepterer bonusser uden at læse vilkårene og opdager for sent, at
              de har accepteret krav, de ikke kan opfylde — eller at de har mistet retten til at
              hæve deres egne penge ved at acceptere bonussen.
            </p>
            <div className="bg-[#1a0533] rounded-xl p-4 border border-[#f59e0b]/20">
              <p className="text-[#f59e0b] font-bold mb-2">BonusKompas-reglen:</p>
              <p className="text-gray-300 text-sm">
                Læs altid bonusvilkårene, inden du indbetaler og aktiverer en bonus. Kan du ikke
                finde vilkårene, eller er de for komplicerede — spring bonussen over.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#f59e0b]" />
            De vigtigste bonusvilkår forklaret
          </h2>

          <div className="space-y-6">
            <div className="border border-[#3d1270] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold text-lg mb-2">1. Omsætningskrav (Wagering Requirement)</h3>
              <p className="text-gray-300 text-sm mb-3">
                Det absolut vigtigste vilkår. Angiver hvor mange gange du skal spille for bonusbeløbet
                (og/eller dit indskud), inden du kan hæve gevinster. Typisk angivet som "35x bonus" eller
                "35x bonus + indskud".
              </p>
              <div className="bg-[#1a0533] rounded-lg p-3 text-sm">
                <span className="text-gray-400">Eksempel: </span>
                <span className="text-white">35x på 200 kr. bonus = du skal spille for </span>
                <span className="text-[#f59e0b] font-bold">7.000 kr.</span>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Læs vores fulde guide: <Link href="/guide/hvad-er-wagering" className="text-[#f59e0b] hover:underline">Hvad er wagering?</Link>
              </p>
            </div>

            <div className="border border-[#3d1270] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold text-lg mb-2">2. Maksimal indsats med aktiv bonus</h3>
              <p className="text-gray-300 text-sm mb-3">
                Næsten alle casinoer har en grænse for, hvor meget du må satse per spin, mens du har
                en aktiv bonus. Typisk er dette <strong className="text-white">5–10 kr. per spin</strong>.
                Overtræder du dette, kan casinoet annullere din bonus og gevinster.
              </p>
              <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-3 text-sm">
                <span className="text-red-400 font-bold">⚠️ Advarsel: </span>
                <span className="text-gray-300">
                  Mange spillere mister bonusser og gevinster ved at sætte for store indsatser.
                  Hold altid under max-grænsen.
                </span>
              </div>
            </div>

            <div className="border border-[#3d1270] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold text-lg mb-2">3. Gyldige spil</h3>
              <p className="text-gray-300 text-sm mb-3">
                Bonusser er typisk begrænset til spilleautomater. Live casino og bordspil er ofte
                ekskluderet eller tæller kun delvist mod omsætningskravet. Derudover kan specifikke
                slot-titler være ekskluderet.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-3">
                  <p className="text-green-400 font-semibold mb-1">✓ Typisk tilladt</p>
                  <ul className="text-gray-300 text-xs space-y-0.5">
                    <li>Klassiske spilleautomater</li>
                    <li>Video slots</li>
                    <li>Bonus buy (delvist)</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-3">
                  <p className="text-red-400 font-semibold mb-1">✗ Typisk ekskluderet</p>
                  <ul className="text-gray-300 text-xs space-y-0.5">
                    <li>Live casino</li>
                    <li>Progressive jackpots</li>
                    <li>Roulette, Blackjack</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-[#3d1270] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold text-lg mb-2">4. Tidsbegrænsning</h3>
              <p className="text-gray-300 text-sm mb-3">
                Alle bonusser har en udløbsdato. Typisk er det 7–30 dage til at bruge free spins
                og 30–90 dage til at opfylde omsætningskravet. Udløber fristen, annulleres bonussen
                — med alle tilhørende gevinster.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-center">
                <div className="bg-[#1a0533] rounded-lg p-3">
                  <div className="text-[#f59e0b] font-bold text-lg">7–30 dage</div>
                  <div className="text-gray-400">Typisk frist for free spins</div>
                </div>
                <div className="bg-[#1a0533] rounded-lg p-3">
                  <div className="text-[#f59e0b] font-bold text-lg">30–90 dage</div>
                  <div className="text-gray-400">Typisk frist for omsætning</div>
                </div>
              </div>
            </div>

            <div className="border border-[#3d1270] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold text-lg mb-2">5. Maksimalt udtag fra bonus (Bonus Cap)</h3>
              <p className="text-gray-300 text-sm mb-3">
                Mange casinoer begrænser, hvor meget du kan hæve fra gevinster opnået med en bonus.
                Typisk er dette <strong className="text-white">3–10x bonusbeløbet</strong> eller et
                fast beløb på 500–2.000 kr. Dette gælder især for ingen indskud bonusser.
              </p>
              <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-3 text-sm">
                <span className="text-yellow-400 font-bold">Bemærk: </span>
                <span className="text-gray-300">
                  Selv hvis du vinder 10.000 kr. fra en bonus, kan du måske kun hæve 500 kr.
                  pga. bonus cap-regler. Tjek altid dette vilkår.
                </span>
              </div>
            </div>

            <div className="border border-[#3d1270] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold text-lg mb-2">6. Bonus kode</h3>
              <p className="text-gray-300 text-sm">
                Visse bonusser kræver, at du indtaster en bonuskode ved registrering eller indskud.
                Glemmer du koden, mister du bonussen. Tjek altid om der er en kode påkrævet, inden
                du indbetaler.
              </p>
            </div>

            <div className="border border-[#3d1270] rounded-xl p-5">
              <h3 className="text-[#f59e0b] font-bold text-lg mb-2">7. Geografiske begrænsninger</h3>
              <p className="text-gray-300 text-sm">
                Alle casinoer på BonusKompas.dk har dansk licens og er tilgængelige for danske
                spillere. Bonusvilkårene er dog specifikt for det danske marked — de kan afvige
                fra internationale versioner af de samme casinoer.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Røde flag — disse bonusvilkår bør du undgå
          </h2>
          <div className="space-y-3">
            {[
              {
                flag: 'Wagering over 50x',
                desc: 'Ekstremt svært at opfylde. Bonussen er reelt set værdiløs for de fleste spillere.'
              },
              {
                flag: 'Omsætningskrav på bonus + indskud ved 35x+',
                desc: 'Dobbelt så hårdt som omsætning på bonusbeløbet alene. Vær meget opmærksom.'
              },
              {
                flag: 'Max indsats under 2 kr. per spin',
                desc: 'Ekstremt restriktivt. Vil begrænse dig til laveste satser og gøre spillet keddeligt.'
              },
              {
                flag: 'Bonus cap under 2x bonusbeløb',
                desc: 'Meget lavt max udtag. Du kan vinde meget, men kun hæve lidt.'
              },
              {
                flag: 'Gyldighedsperiode under 7 dage',
                desc: 'Du har meget lidt tid. Svært at opfylde kravet uden at spille for meget.'
              },
              {
                flag: 'Uklare eller svært tilgængelige vilkår',
                desc: 'Hvis casinoet skjuler vilkårene eller gør dem svære at finde, er det et dårligt tegn.'
              },
            ].map((item) => (
              <div key={item.flag} className="flex gap-3 items-start bg-red-900/10 border border-red-700/20 rounded-lg p-4">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-300">{item.flag}</strong>
                  <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Grønne flag — tegn på gode bonusvilkår
          </h2>
          <div className="space-y-3">
            {[
              { flag: 'Wagering på bonus alene (ikke bonus + indskud)', desc: 'Halverer effektivt omsætningskravet i praksis.' },
              { flag: 'Omsætningskrav 30x eller lavere', desc: 'Realistisk og opnåeligt for de fleste spillere.' },
              { flag: 'Max indsats 5–10 kr. per spin', desc: 'Passende grænse der giver normalt spilleflow.' },
              { flag: 'Gyldighedsperiode 30 dage eller mere', desc: 'Rigeligt tid til at opfylde kravet i ro og mag.' },
              { flag: 'Klart viste vilkår med FAQ', desc: 'Transparente casinoer viser alle vilkår tydeligt.' },
            ].map((item) => (
              <div key={item.flag} className="flex gap-3 items-start bg-green-900/10 border border-green-700/20 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-green-300">{item.flag}</strong>
                  <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Dine rettigheder som dansk casinospiller
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              I Danmark er du beskyttet af Spillemyndighedens regler, der stiller krav til,
              hvordan casinoer kommunikerer deres bonusvilkår:
            </p>
            <ul className="space-y-3">
              {[
                'Bonusvilkår skal være klart og tydeligt formuleret på dansk',
                'Omsætningskrav skal fremgå tydeligt INDEN du accepterer bonussen',
                'Casinoet må ikke retroaktivt ændre vilkårene for en aktiv bonus',
                'Du har ret til at se alle vilkår for din aktive bonus til enhver tid',
                'Du kan klage til Spillemyndigheden, hvis casinoet ikke følger reglerne',
              ].map((right) => (
                <li key={right} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <div className="bg-[#1a0533] rounded-xl p-4 mt-4">
              <p className="text-[#f59e0b] font-semibold mb-1">Klageadgang:</p>
              <p className="text-gray-300 text-sm">
                Har du en tvist med et casino, kan du klage til{' '}
                <strong className="text-white">Spillemyndigheden</strong> (spillemyndigheden.dk)
                eller <strong className="text-white">Forbrugerklagenævnet</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Trin-for-trin: Sådan læser du bonusvilkår korrekt
          </h2>
          <div className="space-y-4">
            {[
              { num: '1', title: 'Find omsætningskravet', desc: 'Kig efter "omsætningskrav", "wagering" eller "playthrough". Noter hvad det gælder: bonus alene eller bonus + indskud.' },
              { num: '2', title: 'Tjek max indsats', desc: 'Find "maks. indsats" eller "max bet". Sørg for du kender grænsen INDEN du begynder at spille med bonus.' },
              { num: '3', title: 'Se gyldige spil', desc: 'Find listen over spil, der tæller 100% mod omsætningskravet. Undgå spil der er ekskluderet.' },
              { num: '4', title: 'Tjek tidsfrist', desc: 'Notér udløbsdatoerne for free spins og omsætningskravet. Sæt en påmindelse i din kalender.' },
              { num: '5', title: 'Find bonus cap', desc: 'Tjek om der er et max udtag fra bonusgevinster. Dette er typisk 3–10x bonusbeløbet.' },
              { num: '6', title: 'Beslut dig', desc: 'Er vilkårene acceptable for dig? Kan du realistisk set opfylde omsætningskravet? Hvis tvivl — spring over.' },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#f59e0b] text-[#1a0533] font-bold flex items-center justify-center shrink-0 text-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#3d1270] p-6 md:p-8" style={{ background: '#2d0a57' }}>
          <h2 className="text-2xl font-bold text-white mb-4">FAQ – Bonusvilkår</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Kan et casino ændre bonusvilkårene, efter jeg har accepteret?',
                a: 'Et seriøst casino bør ikke ændre vilkårene for en aktiv bonus retroaktivt. Spillemyndighedens licenserede casinoer er forpligtet til at overholde de kommunikerede vilkår. Oplever du dette, klag til Spillemyndigheden.'
              },
              {
                q: 'Hvad sker der, hvis jeg utilsigtet overtræder bonusvilkårene?',
                a: 'Casinoet kan annullere din bonus og evt. gevinster. Kontakt kundesupport øjeblikkeligt, hvis du mener det er sket ved en fejl. De fleste seriøse casinoer har en fair klageproces.'
              },
              {
                q: 'Er alle bonuser værd at tage imod?',
                a: 'Nej. En bonus med meget høje omsætningskrav kan faktisk begrænse din spillefrihed. Nogle spillere foretrækker at spille uden bonus for at have fuld rådighed over deres penge fra første spin.'
              },
              {
                q: 'Kan jeg afvise en bonus, jeg har accepteret?',
                a: 'Ja, hos mange casinoer kan du annullere/afvise en aktiv bonus via din konto. Bemærk at eventuelle bonusgevinster vil blive fjernet. Tjek muligheden under "Mine bonusser" i din konto.'
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
            <Link href="/guide/hvad-er-wagering" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Hvad er wagering?</Link>
            <Link href="/free-spins" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Free spins guide</Link>
            <Link href="/velkomstbonus" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Velkomstbonus</Link>
            <Link href="/ingen-indskud-bonus" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Ingen indskud bonus</Link>
            <Link href="/gratis-spins" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Gratis spins</Link>
            <Link href="/" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">→ Alle bonusser</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
