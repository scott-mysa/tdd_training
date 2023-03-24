export class LemonadeGame {
    balance:Number = 0
    simulatedDay = {day: 0}
    constructor(balance:Number){
        this.balance = balance
        this.simulatedDay = {day: 0}
    }

    getBalance() {
        return this.balance;
    }

    simulateDay() {
        this.simulatedDay.day = this.simulatedDay.day + 1
        return this.simulatedDay
    }
}
