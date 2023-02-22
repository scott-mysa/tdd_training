import {LemonadeStand} from '../LemonadeStand'

describe('test for the lemonade stand class', () => {
    it ('test for initial balance', () => {
        const initialBalance = 10
        const lemonadeStand = new LemonadeStand(initialBalance)
        const balance = lemonadeStand.getBalance()
        expect(balance).toBe(initialBalance)
    })

})