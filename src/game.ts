export const Game = () => {
  console.log("init game");
};

let bank: number;
let day: number;

const maxDay = 7;

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

export type simulateDayResult = { gameOver: boolean };

export const simulateDay = (): simulateDayResult => {
  if (day <= maxDay) {
    day++;
    return { gameOver: false };
  }
  return { gameOver: true };
};

enum Forecast {
  "Overcast" = 1,
  "Clear",
  "Sunny"
}

export const getForecast = (chance: 1 | 2 | 3 ): string => {
      return Forecast[chance]
}
// export const finishGame = (): any => {}
