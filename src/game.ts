export const Game = () => {
  console.log("init game");
};

let bank: number;
let day: number;

export const startGame = () => {
  bank = 10;
  day = 1;
};

export const getBank = () => {
  return bank;
};
export const setBank = (newTotal: number) => {
  bank = newTotal;
};

export const updateBankBalance = (change: number) => {
  setBank(bank + change);
};

export const getDay = () => {
  return day;
};
