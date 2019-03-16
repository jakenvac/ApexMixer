import ApexMixer from ".";
import RandomizerFake from "../Randomizer/Randomizer.fake";
import Characters from "../Characters";
import Locations from "../Locations";

describe("Apex mixer provides values for each category", () => {
  it("Returns random characters", () => {
    const mixer = new ApexMixer(new RandomizerFake());
    Characters.forEach(c => {
      expect(mixer.getRandomCharacter()).toBe(c);
    });
  });

  it("Returns a batch of a given quantity of unique random characters", () => {
    const charactersToGenerate = 3;
    const mixer = new ApexMixer(new RandomizerFake());
    const characterBatch = mixer.getBatchOfUniqueRandomCharacters(
      charactersToGenerate
    );
    const firstCharacter = characterBatch[0];
    const secondCharacter = characterBatch[1];
    const thirdCharacter = characterBatch[2];
    expect(firstCharacter).not.toEqual(secondCharacter);
    expect(secondCharacter).not.toEqual(thirdCharacter);
    expect(thirdCharacter).not.toEqual(firstCharacter);
  });

  it("Throws an error if a requested batch amount is higher than the amount of available characters", () => {
    const charactersToGenerate = Characters.length + 1;
    const mixer = new ApexMixer(new RandomizerFake());
    const throwErr = () => mixer.getBatchOfUniqueRandomCharacters(charactersToGenerate);
    expect(throwErr).toThrow(Error);
  });

  it("Returns random drop locations with coordinates", () => {
    const mixer = new ApexMixer(new RandomizerFake());
    Locations.forEach(l => {
      const location = mixer.getRandomLocation();
      expect(location.name).toBe(l.name);
      expect(location.coords).toEqual(l.coords);
    });
  });
});
