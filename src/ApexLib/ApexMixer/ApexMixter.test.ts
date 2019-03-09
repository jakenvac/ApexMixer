import ApexMixer from ".";
import Randomizer from "../Randomizer/Randomizer.fake";
import Characters from "../Characters";
import Locations from "../Locations";

describe("Apex mixer provides values for each category", () => {
  it("Returns random characters", () => {
    const m = new ApexMixer(new Randomizer());
    Characters.forEach(c => {
      expect(m.getRandomCharacter()).toBe(c);
    });
  });

  it("Returns random drop locations with coordinates", () => {
    const m = new ApexMixer(new Randomizer());
    Locations.forEach(l => {
      const location = m.getRandomLocation();
      expect(location.name).toBe(l.name);
      expect(location.coords).toEqual(l.coords);
    })
  })
});
