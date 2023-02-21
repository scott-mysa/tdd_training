import { Game } from '../game';
import { WeatherTypes } from '../weather';

describe('unit tests for lemonade game', ()=>{

    it('the game engine is defined', () => {
        expect(Game).toBeDefined();
    });

    it('when the game is initialized the players balance is the initial value', () => {
        const startingBalance = 10;

        const game = new Game(startingBalance);

        expect(game.balance).toBe(startingBalance)
    });

    it('weather will be either Overcast, Clear, or Sunny', () => {
        const game = new Game(10);
        const weatherToday = game.weather;
        expect(Object.values(WeatherTypes)).toContain(weatherToday)
    });
    

})
