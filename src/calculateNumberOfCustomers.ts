export function calculateNumberOfCustomers(baseNumber : number, weatherMultiplier : number, priceMultiplier : number) : number {
    return Math.round(Math.round(baseNumber * weatherMultiplier) - Math.round(baseNumber * weatherMultiplier) * priceMultiplier * -1)
}