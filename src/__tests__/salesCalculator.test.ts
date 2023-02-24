import { isSymbolObject } from "util/types";
import SalesCalculator  from "../salesCalculator";
describe('sales calculator', () => {
    it('the base number of customers is set correctly', () => {
        const base = 10;
        const calc = new SalesCalculator(base);
        const res = calc.sales('Sunny');
        expect(res.baseCustomers).toEqual(base);
    })
    it('the weather is set correctly', () => {
        const weather = "Sunny"
        const base = 10;
        const calc = new SalesCalculator(base);
        const res = calc.sales(weather);
        expect(res.weather).toBe(weather);

    })

    it.todo('the weather multiplier is set correctly')
})