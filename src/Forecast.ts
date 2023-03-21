export class Forecast {
  getForecast(seed: number) {
    const forecasts = ["Overcast", "Clear", "Sunny"];
    return forecasts[Math.floor(seed)];
  }
}
