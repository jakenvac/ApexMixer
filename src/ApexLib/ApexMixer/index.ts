import Randomizer from "../Randomizer";
import IRandomize from "../Randomizer/IRandomize";
import defaultCharacters from "../Characters";
import defaultLocations from "../Locations";
import { Location } from "../Locations/Location";

class ApexMixer {
  private randomizer: IRandomize;

  characters: string[] = defaultCharacters;
  locations: Location[] = defaultLocations;

  constructor(randomizer: IRandomize = new Randomizer()) {
    this.randomizer = randomizer;
  }

  getRandomCharacter(): string {
    const r = this.getRandomNumber(this.characters.length);
    return this.characters[r];
  }

  getRandomLocation(): Location {
    const r = this.getRandomNumber(this.locations.length);
    return this.locations[r];
  }

  private getRandomNumber(length: number) {
    return this.randomizer.getRandomNumber(length);
  }
}

export default ApexMixer;
