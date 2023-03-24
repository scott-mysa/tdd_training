import {LemonadeGame} from '../LemonadeGame'
import {WeatherForecast} from '../WeatherForecast'

describe('tests for game', () =>  {
    it('Check if the start of the game we have a balance of $10', () => {

        // this is where out test lives
        // define a new instance our class
        // invoke function/constructor for the game to start
        // call a method/check return if it is equal to 10

        const initBalance = 10
        const gameEngine = new LemonadeGame(initBalance)

        expect(gameEngine.getBalance()).toBe(initBalance)
    })

    it("When the game starts it should be day one", () => {
        const gameEngine = new LemonadeGame(10)
        const result = gameEngine.simulateDay()
        expect(result.day).toBe(1)
    })
    
    it("After calling simulateDay twice it should be day 2", () => {
        const gameEngine = new LemonadeGame(10)
        gameEngine.simulateDay()
        const result = gameEngine.simulateDay()
        expect(result.day).toBe(2)
    })    
    it.todo("Check if the game ends on the 8th day")
    


})