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


    it('The weather should be unsny, cloudy or overcast', () => {
        // assuming weather has an engine/function that returns string
        // Check if the string is valid

        // const weatherSeed = 100 // optional -> 100 for sunny, 101 for cloudy, 102 for overcast
        const weatherForecast = new WeatherForecast()
        expect(weatherForecast.getWeather()).toBe('sunny')


    })

    // it('The weather should be unsny, cloudy or overcast', () => {
    //     // assuming weather has an engine/function that returns string
    //     // Check if the string is valid
        
    //     // seed is optional
    //     const validWeather = ['sunny', 'cloudy', 'overcast']
    //     const weatherForecast = new WeatherForecast()
    //     expect(weatherForecast.getWeather()).toContain(validWeather)

    // })

})