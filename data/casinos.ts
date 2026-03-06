export type BonusType = 'free-spins' | 'ingen-indskud' | 'velkomst' | 'match-bonus';

export interface Casino {
  id: string;
  name: string;
  url: string;
  rating: number; // 1-5
  freeSpins: number;
  bonusAmount: number; // max bonus in DKK
  bonusPercent: number; // match % (0 if none)
  wageringRequirement: number; // x times
  noDeposit: boolean; // ingen indskud bonus
  bonusTypes: BonusType[];
  isLimited: boolean;
  expiryDate?: string;
  description: string;
  featured?: boolean; // bonus af dagen
  minDeposit?: number; // minimum indskud i DKK
  license: string;
}

export const casinos: Casino[] = [
  {
    id: 'jackpot-casino',
    name: 'Jackpot Casino',
    url: 'https://jackpotcasino.dk',
    rating: 4.8,
    freeSpins: 250,
    bonusAmount: 3000,
    bonusPercent: 100,
    wageringRequirement: 35,
    noDeposit: false,
    bonusTypes: ['free-spins', 'velkomst', 'match-bonus'],
    isLimited: true,
    expiryDate: '2025-04-01',
    description: 'Jackpot Casino tilbyder en af de mest generøse velkomstbonusser på det danske marked med hele 250 free spins og 100% bonus op til 3.000 kr.',
    featured: true,
    minDeposit: 100,
    license: 'Spillemyndigheden',
  },
  {
    id: 'leovegas',
    name: 'LeoVegas',
    url: 'https://leovegas.com',
    rating: 4.7,
    freeSpins: 200,
    bonusAmount: 3000,
    bonusPercent: 100,
    wageringRequirement: 35,
    noDeposit: false,
    bonusTypes: ['free-spins', 'velkomst', 'match-bonus'],
    isLimited: false,
    description: 'LeoVegas er kendt som "Kongen af Mobil Casino" og tilbyder 200 free spins samt 100% bonus op til 3.000 kr. til nye spillere.',
    minDeposit: 100,
    license: 'Spillemyndigheden',
  },
  {
    id: 'comeon',
    name: 'ComeOn',
    url: 'https://comeon.com',
    rating: 4.5,
    freeSpins: 200,
    bonusAmount: 0,
    bonusPercent: 0,
    wageringRequirement: 35,
    noDeposit: false,
    bonusTypes: ['free-spins', 'velkomst'],
    isLimited: false,
    description: 'ComeOn Casino giver nye danske spillere 200 free spins som velkomstbonus. Et populært casino med god spiludvalg og dansk licens.',
    minDeposit: 75,
    license: 'Spillemyndigheden',
  },
  {
    id: 'mr-green',
    name: 'Mr Green',
    url: 'https://mrgreen.com',
    rating: 4.6,
    freeSpins: 200,
    bonusAmount: 1000,
    bonusPercent: 100,
    wageringRequirement: 35,
    noDeposit: false,
    bonusTypes: ['free-spins', 'velkomst', 'match-bonus'],
    isLimited: false,
    description: 'Mr Green tilbyder 200 free spins og 100% bonus op til 1.000 kr. Mr Green er kendt for ansvarligt spil og et bredt spiludvalg.',
    minDeposit: 100,
    license: 'Spillemyndigheden',
  },
  {
    id: 'betsson',
    name: 'Betsson',
    url: 'https://betsson.dk',
    rating: 4.5,
    freeSpins: 100,
    bonusAmount: 1500,
    bonusPercent: 100,
    wageringRequirement: 30,
    noDeposit: false,
    bonusTypes: ['free-spins', 'velkomst', 'match-bonus'],
    isLimited: false,
    description: 'Betsson er en af de mest anerkendte casinoer i Danmark med 100 free spins og 100% velkomstbonus op til 1.500 kr. Lavt omsætningskrav på 30x.',
    minDeposit: 100,
    license: 'Spillemyndigheden',
  },
  {
    id: 'betsafe',
    name: 'Betsafe',
    url: 'https://betsafe.dk',
    rating: 4.4,
    freeSpins: 100,
    bonusAmount: 1000,
    bonusPercent: 100,
    wageringRequirement: 30,
    noDeposit: false,
    bonusTypes: ['free-spins', 'velkomst', 'match-bonus'],
    isLimited: false,
    description: 'Betsafe giver 100 free spins og 100% bonus op til 1.000 kr. til nye spillere. Betsafe har et lavt omsætningskrav på 30x og er fuldt licenseret.',
    minDeposit: 100,
    license: 'Spillemyndigheden',
  },
  {
    id: 'unibet',
    name: 'Unibet',
    url: 'https://unibet.dk',
    rating: 4.3,
    freeSpins: 100,
    bonusAmount: 0,
    bonusPercent: 0,
    wageringRequirement: 30,
    noDeposit: true,
    bonusTypes: ['free-spins', 'ingen-indskud'],
    isLimited: true,
    expiryDate: '2025-03-31',
    description: 'Unibet tilbyder 100 free spins uden indskudskrav — en af de sjældne ingen-indskud bonusser på det danske marked. Perfekt til at prøve casinoet gratis.',
    license: 'Spillemyndigheden',
  },
  {
    id: 'casumo',
    name: 'Casumo',
    url: 'https://casumo.com',
    rating: 4.4,
    freeSpins: 0,
    bonusAmount: 1500,
    bonusPercent: 200,
    wageringRequirement: 30,
    noDeposit: false,
    bonusTypes: ['velkomst', 'match-bonus'],
    isLimited: false,
    description: 'Casumo tilbyder en imponerende 200% bonus op til 1.500 kr. til nye spillere — en af de bedste match-bonusser på markedet med et rimeligt omsætningskrav.',
    minDeposit: 150,
    license: 'Spillemyndigheden',
  },
  {
    id: 'betinia',
    name: 'Betinia',
    url: 'https://betinia.dk',
    rating: 4.2,
    freeSpins: 0,
    bonusAmount: 2000,
    bonusPercent: 200,
    wageringRequirement: 40,
    noDeposit: false,
    bonusTypes: ['velkomst', 'match-bonus'],
    isLimited: false,
    description: 'Betinia tilbyder 200% bonus op til 2.000 kr. — en af de højeste procentbonusser i Danmark. Bemærk det højere omsætningskrav på 40x.',
    minDeposit: 100,
    license: 'Spillemyndigheden',
  },
];

export const featuredCasino = casinos.find((c) => c.featured) || casinos[0];

export const getCasinosByType = (type: BonusType): Casino[] =>
  casinos.filter((c) => c.bonusTypes.includes(type));

export const getNoDepositCasinos = (): Casino[] =>
  casinos.filter((c) => c.noDeposit);

export const getFreeSpinsCasinos = (): Casino[] =>
  casinos.filter((c) => c.freeSpins > 0);
