interface IRandomize {
    getRandomNumber(limit: number) : number;
    shuffleArray<T>(array: T[]): T[];
}

export default IRandomize;