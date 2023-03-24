import { WeatherForecast } from "../WeatherForecast";

describe("Weather service", () => {
  it("The weather should be sunny if seed is 0", () => {
    // assuming weather has an engine/function that returns string
    // Check if the string is valid

    const weatherSeed = 0; // optional -> 0 for sunny, 1 for cloudy, 2 for overcast
    const expectedStr = "sunny";
    const weatherForecast = new WeatherForecast();
    weatherForecast.giveSeed(weatherSeed);
    expect(weatherForecast.getWeather()).toBe(expectedStr);
  });

  it("The weather should be cloudy if seed is 0", () => {
    // assuming weather has an engine/function that returns string
    // Check if the string is valid

    const weatherSeed = 1; // optional -> 0 for sunny, 1 for cloudy, 2 for overcast
    const expectedStr = "cloudy";
    const weatherForecast = new WeatherForecast();
    weatherForecast.giveSeed(weatherSeed);
    expect(weatherForecast.getWeather()).toBe(expectedStr);
  });

  it("The weather should be overcast if seed is 2", () => {
    // assuming weather has an engine/function that returns string
    // Check if the string is valid

    const weatherSeed = 2; // optional -> 0 for sunny, 1 for cloudy, 2 for overcast
    const expectedStr = "overcast";
    const weatherForecast = new WeatherForecast();
    weatherForecast.giveSeed(weatherSeed);
    expect(weatherForecast.getWeather()).toBe(expectedStr);
  });
});

// it('The weather should be sunny, cloudy or overcast', () => {
//     // assuming weather has an engine/function that returns string
//     // Check if the string is valid

//     const weatherSeed = 101 // optional -> 100 for sunny, 101 for cloudy, 102 for overcast
//     const weatherForecast = new WeatherForecast()
//     weatherForecast.giveSeed(weatherSeed)
//     expect(weatherForecast.getWeather()).toBe('cloudy')

// })

// it('The weather should be sunny, cloudy or overcast', () => {
//     // assuming weather has an engine/function that returns string
//     // Check if the string is valid

//     const weatherSeed = 102 // optional -> 100 for sunny, 101 for cloudy, 102 for overcast
//     const weatherForecast = new WeatherForecast()
//     weatherForecast.giveSeed(weatherSeed)
//     expect(weatherForecast.getWeather()).toBe('overcast')
// })

// it('The weather should be sunny, cloudy or overcast', () => {
//     // assuming weather has an engine/function that returns string
//     // Check if the string is valid

//     // seed is optional
//     const validWeather = ['sunny', 'cloudy', 'overcast']
//     const weatherSeed = rollDice() * 100
//     const weatherForecast = new WeatherForecast()
//     weatherForecast.giveSeed(weatherSeed)
//     expect(validWeather).toContain(weatherForecast.getWeather())
