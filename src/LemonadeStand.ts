export class LemonadeStand {
  private maxDays = 7;
  private balance: number;
  private currentDay: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
    this.currentDay = 0;
  }

  getBalance() {
    return this.balance;
  }

  simulateDay() {
    const ended = "Game ended";
    const inprogress = "Game in progress";

    this.incrementDay()
    let ret = { day: this.currentDay, status: inprogress };
    let balanceOk = this.checkBalance();
    let dayOk = false
    if (balanceOk) {
      dayOk = this.checkDay();
    }

    if (!(balanceOk && dayOk)) ret.status = ended;

    return ret;
  }

  incrementDay() {
    ++this.currentDay;
  }

  checkBalance() {
    return this.balance > 0;
  }

  checkDay() {
    return this.currentDay <= this.maxDays;
  }
}
