export class LemonadeStand {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    getBalance() {
        return this.balance;
    }
}