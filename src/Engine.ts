export type dayResult = { 
  day: number, 
  gameStatus: string
};

export class Engine {
  balance = 10;

  day = 0;
  maxDays = 7;

  getBalance() {
    return this.balance;
  }

  getMaxCustomer(
    numCustomer: number,
    weatherMultiplier: number,
    priceMultiplier: number
  ) {
    const base = numCustomer * weatherMultiplier;
    return Math.ceil(base * (1 + priceMultiplier));
  }

  calculatePriceMultiplier(price: number) {
    let priceMultiplier = 0;
    if (price === 0.25) {
      return priceMultiplier;
    } else {
      const count = (price - 0.25) / 0.05;
      priceMultiplier = -0.025 * count;
    }
    return Math.round(priceMultiplier * 1000) / 1000;
  }

  simulateDay(): dayResult {
    this.day += 1;
    let status = "ongoing"

    if(this.day === this.maxDays) status = "end game"

    return { day: this.day, gameStatus: status };
  }
}
