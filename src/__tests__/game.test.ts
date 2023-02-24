import {Game, getBank, setBank, updateBankBalance, startGame, getDay} from '../game'

describe('game initilization', () => {
   
    it('Initialize game has correct starting values', () => {
        startGame()
        expect(getBank()).toBe(10)
        expect(getDay()).toBe(1)
    })

})
describe('game tests', () => {
    beforeEach(() => {
        startGame()
    })
    it('is defined', () => {
        expect(Game).toBeDefined();
    })
    it('Returns player bank value', () => {
        const bankResult = getBank()
        expect(bankResult).toBe(10) 
    })
    it('Allows setting of bank value', () => {
        let newBank = getBank() + 1
        setBank(newBank)
        expect(getBank()).toBe(newBank)
    })

    const values = [
        [10,5,15],
        [10, -5, 5],
        [10, 0, 10]
    ]

    it.each(values)('Changes the value of bank by a value', (setAmount, updateAmount, expected) => {
        setBank(setAmount)
        updateBankBalance(updateAmount)
        expect(getBank()).toBe(expected)
    })

    it.todo('getDay returns the current day')

    it.todo('simulateDay advances to the next day')

    it.todo('simulateDay does not advanced past end of game')
})