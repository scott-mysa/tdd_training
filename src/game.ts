import { WeatherTypes } from './weather';

export class Game {
    private _balance: number;
    private _weather: WeatherTypes;

    constructor(startingBalance: number) {
        this._balance = startingBalance;
        this._weather = WeatherTypes.Clear;
    }

    public get balance(): number {
        return this._balance;
    }

    public get weather(): WeatherTypes {
        return this._weather;
    }
}