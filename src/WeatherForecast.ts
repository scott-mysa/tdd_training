export class WeatherForecast {

    private _seed = 0;
    
    giveSeed(seed:number) {
        this._seed = seed;
    }

    getWeather(){
        switch(this._seed) {
            case 0:
                return 'sunny';
            case 1:
                return 'cloudy'
            case 2:
                return 'overcast'}
    }
}