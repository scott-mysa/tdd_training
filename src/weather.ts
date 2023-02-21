export enum WeatherTypes {
    Overcast = 'Overcast',
    Clear = 'Clear',
    Sunny = 'Sunny'
}

export class Weather {
    generate(seed: number) {
        if (seed < 0.3) {
            return WeatherTypes.Overcast;
        }
        return WeatherTypes.Overcast;
    }
}