import IRandomize from "./IRandomize";

export default class Randomizer implements IRandomize {

  shuffleArray<T>(samples: T[]): T[] {
    const samplesClone: T[] = samples.slice();
    for (let i = 0; i < samplesClone.length; i++) {
      const randomIndex = this.getRandomNumber(samplesClone.length);
      const temporarySwapValue = samplesClone[i];
      samplesClone[i] = samplesClone[randomIndex];
      samplesClone[randomIndex] = temporarySwapValue;
    }
    return samplesClone;
  }

  getRandomNumber(limit: number): number {
    return Math.floor(Math.random() * limit);
  }
}
