import React from "react";
import styled from "styled-components";

import ApexMixer from "../../../ApexLib/ApexMixer";
import { Location } from '../../../ApexLib/Locations/Location';

import HoloButton from "../../components/HoloButton";
import PageSection from "../../components/PageSection";

import CharacterSection from './characterSection';
import LocationSection from "./LocationSection";

const Container = styled.section``;

const RollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-tems: center;
  padding: ${p => p.theme.sizes.md.padding} ${p => p.theme.sizes.sm.padding};
`;

interface RollContainerState {
  Randomizer: ApexMixer;
  Characters: string[];
  Locations: Location[];
}

class RollContainer extends React.Component {
  state: RollContainerState;
  constructor(props) {
    super(props);
    this.state = {
      Randomizer: new ApexMixer(),
      Characters: ["none", "none", "none"],
      Locations: [],
    };
  }

  render = () => {
    return (
      <Container id="rollContainer">
        <this.RenderRandomizeButton />
        <PageSection>
          <CharacterSection characters={this.state.Characters} />
        </PageSection>
        <PageSection isBlack>
          <LocationSection locations={this.state.Locations} />
        </PageSection>
      </Container>
    );
  };

  private RenderRandomizeButton = () => {
    return (
      <RollButtonContainer>
        <HoloButton onClick={this.randomizeGame}>RANDOMIZE!</HoloButton>
      </RollButtonContainer>
    );
  }

  private randomizeGame = () => {
    const chars = this.state.Randomizer.getBatchOfUniqueRandomCharacters(3);
    const location = this.state.Randomizer.getRandomLocation();
    this.setState({ Characters: chars, Locations: [location] }, () => {
      const champSection = document.getElementById('rollContainer');
      champSection.scrollIntoView();
    });
  }
}

export default RollContainer;
