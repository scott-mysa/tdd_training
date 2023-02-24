import {getForecast} from '../weatherService'
describe('weather service', ()=> {
    it('forecast will be Overcast, clear or sunny', () => {
        const forecast = getForecast();
        expect(['Overcast', 'Clear', 'Sunny']).toContain(forecast)
    })
})