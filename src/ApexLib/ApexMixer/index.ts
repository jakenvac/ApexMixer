import Randomizer from "../Randomizer";
import IRandomize from "../Randomizer/IRandomize";
import defaultCharacters from "../Characters";
import defaultLocations from "../Locations";

class ApexMixer {
  private randomizer: IRandomize;

  characters: string[] = defaultCharacters;
  locations: string[] = defaultLocations;

  constructor(randomizer: IRandomize = new Randomizer()) {
    this.randomizer = randomizer;
  }

  getRandomCharacter(): string {
    const r = this.randomizer.getRandomNumber(this.characters.length);
    return this.characters[r];
  }

  getBatchOfUniqueRandomCharacters(amountToGenerate: number): string[] {
    if (amountToGenerate > this.characters.length)
      throw new Error("Not enough characters to satisfy requirement");

    const characterSamples = this.getShuffledCharacters();
    return characterSamples.slice(0, amountToGenerate);
  }

  getRandomLocation(): string {
    const r = this.randomizer.getRandomNumber(this.locations.length);
    return this.locations[r];
  }

  private getShuffledCharacters() {
    const shuffledCharacters = this.randomizer.shuffleArray(this.characters);
    return shuffledCharacters;
  }
}

export default ApexMixer;
