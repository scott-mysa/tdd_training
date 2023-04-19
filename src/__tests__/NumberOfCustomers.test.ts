import { calculateNumberOfCustomers } from '../calculateNumberOfCustomers';

describe('Checks if the calculated number of customers is correct', () => {
    it('Returns the correct number of customers', () => {
        // arrange
        const baseNumber = 25;
        const weatherMultiplier = 1.7;
        const priceMultiplier = -0.125
        const expectedNumberOFCustomers = 38;

        // act
        const expected = calculateNumberOfCustomers(baseNumber, weatherMultiplier, priceMultiplier);

        // assert
        expect(expected).toBe(expectedNumberOFCustomers);
    })
})