import { Weather, WeatherTypes } from '../weather';

describe('Weather service', () => {
    it('Should return Overcast if 0 <= seed < 0.3', () => {
        const weatherService = new Weather();

        const weather = weatherService.generate(0);

        expect(weather).toBe(WeatherTypes.Overcast);
    })
});