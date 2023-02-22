import { getForecast } from '../WeatherForecast'

describe('tests for weather forecast', () => {
    it('generates a forecast', () => {
        const forecast = getForecast()
        const expected = [ 'Overcast', 'Clear', 'Cloudy' ]
        expect(expected).toContain(forecast)
    })
})
