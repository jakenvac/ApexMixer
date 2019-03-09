import IRandomize from "./IRandomize";

export default class FakeRandomizer implements IRandomize {

    private iterator: IterableIterator<number>;

    constructor() {
        this.iterator = this.iteratorGenerator();
    }   

    private *iteratorGenerator(): IterableIterator<number> {
        let i = 0;
        while(true) yield i++;
    }

    getRandomNumber(): number {
        return this.iterator.next().value;
    }

}