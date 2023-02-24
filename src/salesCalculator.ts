export default class SalesCalculator {
    private _baseCustomers: number = 0;
    constructor(baseCustomers:number) {
        this._baseCustomers = baseCustomers
    }

    public sales(weather:string){
        return {
            baseCustomers:this._baseCustomers,
        }
    }
    
}