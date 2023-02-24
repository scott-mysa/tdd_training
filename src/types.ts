export interface PlayDayResult {
    gameState: gameState,
    status: "ok" | "error",
    validationErrors?: string[],
    day: number,
    sales: number,
    income: number, 
    costs: number,
    profit: number
    wastedCups: number
}

export type gameState = "new" | "in-progress" | "end"

export interface gameParameters {
    startingBalance: number,
    numberDays: number,
    wasteCost: number,
    cupsPerJug: number,
    costPerJug: number,
    salesCalculator: (cups: number, price: number) => number
}