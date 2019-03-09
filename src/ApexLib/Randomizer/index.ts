import IRandomize from './IRandomize';

export default class Randomizer implements IRandomize {
  getRandomNumber(limit: number): number {
    return Math.floor(Math.random() * limit);
  }
}
