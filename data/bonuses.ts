export type Bonus = { id: string; casino: string; bonus: string; amount: number; freeSpins: number; wagering: number; url: string; noDeposit: boolean; };
export const bonuses: Bonus[] = [
  { id: "b1", casino: "Unibet", bonus: "200 Free Spins uden indskud", amount: 0, freeSpins: 200, wagering: 25, url: "https://unibet.dk", noDeposit: true },
  { id: "b2", casino: "ComeOn", bonus: "100% op til 500 kr", amount: 500, freeSpins: 0, wagering: 30, url: "https://comeon.dk", noDeposit: false },
  { id: "b3", casino: "Betinia", bonus: "200% op til 2.000 kr", amount: 2000, freeSpins: 0, wagering: 40, url: "https://betinia.dk", noDeposit: false },
  { id: "b4", casino: "CasinoGo", bonus: "100% + 100 Free Spins", amount: 1000, freeSpins: 100, wagering: 35, url: "https://casinogo.dk", noDeposit: false },
];
