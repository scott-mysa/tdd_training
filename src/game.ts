import { PlayDayResult, gameParameters, gameState } from "./types";

export default class Game {
  private _balance: number;
  private _numberDays: number;
  private _currentDay: number = 0;
  private _wasteCost: number = 0;
  private _costPerJug: number = 0;
  private _salesCalculator: (cups: number, price: number) => number;

  private calculateWastage = (numberJugs: number, numSales: number) => {
    const cups = numberJugs * 14;
    return cups - numSales;
  };
  private calculateGameState = (): gameState => {
    const balance = this._balance;
    const currentDay = this._currentDay;
    const numberDays = this._numberDays;

    if (currentDay === numberDays) {
      return "end";
    }

    if (balance <= 0) {
      return "end";
    }

    return "in-progress";
  };
  private debitBalance(amount: number) {
    this._balance = this._balance - amount;
  }

  constructor(params: gameParameters) {
    this._balance = params.startingBalance;
    this._numberDays = params.numberDays;
    this._salesCalculator = params.salesCalculator;
    this._wasteCost = params.wasteCost;
    this._costPerJug = params.costPerJug
  }

  balance() {
    return this._balance;
  }

  playDay(numberJugs: number, salePrice: number): PlayDayResult {
    this._currentDay++;

    const numSales = this._salesCalculator(numberJugs, salePrice);
    const income = numSales * salePrice
    const wastedCups = this.calculateWastage(numberJugs, numSales);
    const wastageCost = wastedCups * this._wasteCost
    const costs = (numberJugs * this._costPerJug) + wastageCost

    const profit = income - costs
    this.debitBalance(wastedCups * this._wasteCost);
    return {
      status: "ok",
      gameState: this.calculateGameState(),
      day: this._currentDay,
      sales: numSales,
      income, 
      costs, 
      profit, 
      wastedCups
      
    };
  }
}
