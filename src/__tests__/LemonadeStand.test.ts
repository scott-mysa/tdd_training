import {LemonadeStand} from '../LemonadeStand'

describe('test for the lemonade stand class', () => {
    it ('test for initial balance', () => {
        const initialBalance = 10
        const lemonadeStand = new LemonadeStand(initialBalance)
        const balance = lemonadeStand.getBalance()
        expect(balance).toBe(initialBalance)
    })

    it ('test for calling simulateDay once will increment the day by one', () => {
        const initialBalance = 10
        const simulateDayResult = 1
        const lemonadeStand = new LemonadeStand(initialBalance)

        const playDay = lemonadeStand.simulateDay()

        expect(playDay.day).toEqual(simulateDayResult)
    })

    it ('test if the game ends after 7 days', () => {
        const initialBalance = 10
        const lemonadeStand = new LemonadeStand(initialBalance)
        let playDay = lemonadeStand.simulateDay()
        const currentGameStatus = "Game ended"

        for (let i = 0; i < 8; i++){
            playDay = lemonadeStand.simulateDay()
        }

        expect(playDay.status).toBe(currentGameStatus)
    })

    it ('test if game ends if funds reach zero', () => {
        const initialBalance = 0
        const lemonadeStand = new LemonadeStand(initialBalance)
        let playDay = lemonadeStand.simulateDay()
        const currentGameStatus = "Game ended"

        expect(playDay.status).toBe(currentGameStatus)
    })



    it.todo("test initial value of jug of lemonade")

})