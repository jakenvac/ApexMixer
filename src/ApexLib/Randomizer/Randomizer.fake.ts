import IRandomize from "./IRandomize";

export default class FakeRandomizer implements IRandomize {

  private iterator: IterableIterator<number>;

  constructor() {
    this.iterator = this.iteratorGenerator();
  }

  private *iteratorGenerator(): IterableIterator<number> {
    let i = 0;
    while (true) yield i++;
  }

  getRandomNumber(limit: number): number {
    let nextValue = this.iterator.next().value;
    if (nextValue > limit) {
      this.iterator = this.iteratorGenerator();
      nextValue = this.iterator.next().value;
    }
    return nextValue;
  }

  shuffleArray<T>(array: T[]): T[] {
    return array;
  }
}
