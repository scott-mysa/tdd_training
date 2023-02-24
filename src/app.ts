import Game from './game';
import { gameParameters } from './types';

const getGameParameters = (): gameParameters => {
    return {
      startingBalance: 10,
      numberDays: 7,
      wasteCost: 0.15,
      cupsPerJug: 14,
      costPerJug: 3.50,
      salesCalculator: jest.fn(() => 0),
    };
  };
 
  const params = getGameParameters()
const game = new Game(params);

