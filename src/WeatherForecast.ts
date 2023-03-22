export function getForecast() {
    const forecast = ['Overcast', 'Clear', 'Cloudy'];
    const random = Math.floor(Math.random() * forecast.length);
    return forecast[random];
}