import {
  Game,
  getBank,
  setBank,
  updateBankBalance,
  startGame,
  getDay,
  simulateDay,
  simulateDayResult,
  getForecast,
} from "../game";

describe("game initilization", () => {
  it("Initialize game has correct starting values", () => {
    startGame();
    expect(getBank()).toBe(10);
    expect(getDay()).toBe(1);
  });
});
describe("game tests", () => {
  beforeEach(() => {
    startGame();
  });
  it("is defined", () => {
    expect(Game).toBeDefined();
  });
  it("Returns player bank value", () => {
    const bankResult = getBank();
    expect(bankResult).toBe(10);
  });
  it("Allows setting of bank value", () => {
    let newBank = getBank() + 1;
    setBank(newBank);
    expect(getBank()).toBe(newBank);
  });

  const values = [
    [10, 5, 15],
    [10, -5, 5],
    [10, 0, 10],
  ];

  it.each(values)(
    "Changes the value of bank by a value",
    (setAmount, updateAmount, expected) => {
      setBank(setAmount);
      updateBankBalance(updateAmount);
      expect(getBank()).toBe(expected);
    }
  );

  it("simulateDay advances to the next day", () => {
    startGame();
    simulateDay();
    expect(getDay()).toBe(2);
    simulateDay();
    expect(getDay()).toBe(3);
  });

  it("The game ends on day 7", () => {
    let result: simulateDayResult;
    startGame();
    for (let i = 0; i <= 6; i++) {
      result = simulateDay();
      expect(result.gameOver).toBe(false);
    }
    result = simulateDay();
    expect(result.gameOver).toBe(true);
  });

  const forecastValues: Array<[1|2|3 , string]> = [
    [1, "Overcast"],
    [2, "Clear"],
    [3, "Sunny"],
  ];

  it.each(forecastValues)(
    "getForecast method returns correct forecase values",
    (seed, forecast) => {
      expect(getForecast(seed)).toBe(forecast)
    }
  );
});
