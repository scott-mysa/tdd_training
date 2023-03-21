import { Forecast } from "../Forecast";

describe("daily forecast test", () => {
  it("Check forecadst is Sunny", () => {
    const forecast = new Forecast();
    expect(forecast.getForecast(2)).toBe("Sunny");
  });

  it("Check forecadst is Overcast", () => {
    const forecast = new Forecast();
    expect(forecast.getForecast(0)).toBe("Overcast");
  });

  it("Check forecadst is Clear", () => {
    const forecast = new Forecast();
    expect(forecast.getForecast(1)).toBe("Clear");
  });
});
