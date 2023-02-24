import exp from "constants";
import Game from "../game";
import { gameParameters, PlayDayResult } from "../types";
describe("game test suite", () => {
  const getGameParameters = (): gameParameters => {
    return {
      startingBalance: 10,
      numberDays: 7,
      wasteCost: 0.15,
      cupsPerJug: 14,
      costPerJug: 3.50,
      salesCalculator: jest.fn(() => 0),
    };
  };
  it("starting balance is the correct amount", () => {
    const params: gameParameters = getGameParameters();
    const game = new Game(params);
    expect(game.balance()).toBe(params.startingBalance);
  });

  it("as long as the balance stays above zero, the game will last for 7 days", () => {
    const params: gameParameters = getGameParameters();

    const game = new Game(params);

    let res;
    for (let i = 0; i < params.numberDays; i++) {
      res = game.playDay(0, 0);
    }

    expect(res?.gameState).toBe("end");
  });

  it("starting the day with a valid number of lemondade jugs and cost, expect status to be ok, game in-progress", () => {
    const params: gameParameters = getGameParameters();

    const game = new Game(params);

    const res = game.playDay(1, 0.5);
    const expected: PlayDayResult = {
      status: "ok",
      gameState: "in-progress",
      day: 1,
      sales: 0,
      income: 0,
      costs: 5.6,
      profit: -5.6,
      wastedCups: params.cupsPerJug
    };
    expect(res).toStrictEqual(expected);
  });

  it("sales calculator is called once per day", () => {
    const params: gameParameters = getGameParameters();

    const game = new Game(params);

    game.playDay(1, 0.5);
    expect(params.salesCalculator).toHaveBeenCalledTimes(1);
  });

  it("wasting lemonade decreases balance by correct ammount", () => {
    const params: gameParameters = getGameParameters();

    const {cupsPerJug, wasteCost, startingBalance} = params

    const game = new Game(params);
    game.playDay(1, 0.5);

    expect(game.balance()).toBe(startingBalance - cupsPerJug * wasteCost);
  });

  it("correctly returns the right number of wasted cups", () => {
    const params: gameParameters = getGameParameters();

    const cupsSold = 10;
    params.salesCalculator = jest.fn(() => cupsSold)
    const game = new Game(params);
    const res = game.playDay(2, 0.5);
    const {cupsPerJug} = params;
    expect(res.wastedCups).toBe((cupsPerJug * 2) - cupsSold)
  })

  it("the game will end if the balance falls below zero", () => {
    const params: gameParameters = getGameParameters();
    params.wasteCost = 100;
    const game = new Game(params);
    const res = game.playDay(1, 0.5);

    expect(res.gameState).toBe("end")
  });

  it('calculation of profit is correct, with no waste', () => {
    const params: gameParameters = getGameParameters();
    params.salesCalculator = () => 14 // gonna sell 14 cups
    const game = new Game(params);
    
    const res = game.playDay(1, 1);
    expect(res.sales).toBe(14);
    expect(res.income).toBe(14);
    expect(res.profit).toBe(res.income - res.costs);
  })
  
  it('calculation of profit is correct, with wastage', () => {
    const params: gameParameters = getGameParameters();
    params.salesCalculator = () => 2 // gonna sell 2 cups
    const game = new Game(params);
    
    const res = game.playDay(1, 1);
    expect(res.sales).toBe(2);
    expect(res.income).toBe(2);
    expect(res.profit).toBe(res.income - res.costs);
  })


});
