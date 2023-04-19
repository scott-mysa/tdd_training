import { Engine } from "../Engine";

describe("game engine tests", () => {
  it("is defined", () => {
    expect(Engine).toBeDefined();
  });

  it("initialize the game starting balance with $10", () => {
    const engine = new Engine();
    expect(engine.getBalance()).toBe(10);
  });

  const cases = [[25, 1.7, -0.125, 38]];

  it.each(cases)(
    "expect the number of customers for the given weather",
    (base, weatherMultiplier, priceMultiplier, expectedCustomer) => {
      const game = new Engine();
      const result = game.getMaxCustomer(
        base,
        weatherMultiplier,
        priceMultiplier
      );
      expect(result).toEqual(expectedCustomer);
    }
  );

  const priceMultiplierCases = [
    [0.25, 0],
    [0.2, 0.025],
    [0.3, -0.025],
    [0.35, -0.05],
    [2, -0.875],
  ];

  it.each(priceMultiplierCases)(
    "generated price multiplier from cup price",
    (cupPrice, priceMultiplier) => {
      const engine = new Engine();
      expect(engine.calculatePriceMultiplier(cupPrice)).toEqual(priceMultiplier);
    }
  );

  it("simulate each day", () => {
    const engine = new Engine();
    const result = engine.simulateDay();
    expect(result.day).toBe(1);
  })

  it("simulate day 3", () => {

    // arrange
    const engine = new Engine;

    // act
    let result = engine.simulateDay();
    engine.simulateDay();
    result = engine.simulateDay();

    // assert
    expect(result.day).toBe(3);
  })

  it("check result status for end of 7 days", () => {

    const engine = new Engine;

    let result = engine.simulateDay();
    engine.simulateDay();
    engine.simulateDay();
    engine.simulateDay();
    engine.simulateDay();
    engine.simulateDay();
    result = engine.simulateDay();

    expect(result.gameStatus).toBe("end game");
  })  
});
