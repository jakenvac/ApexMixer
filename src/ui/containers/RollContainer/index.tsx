import React from "react";
import styled from "styled-components";

import ApexMixer from "../../../ApexLib/ApexMixer";

import HoloButton from "../../components/HoloButton";
import PageSection from "../../components/PageSection";

import CharacterSection from './characterSection';

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
}

class RollContainer extends React.Component {
  state: RollContainerState;
  constructor(props) {
    super(props);
    this.state = {
      Randomizer: new ApexMixer(),
      Characters: ["none", "none", "none"]
    };
  }

  render = () => {
    return (
      <Container>
        <this.RenderRandomizeButton />
        <PageSection>
          <CharacterSection characters={this.state.Characters} />
        </PageSection>
      </Container>
    );
  };

  private RenderRandomizeButton = () => {
    return (
      <RollButtonContainer>
        <HoloButton onClick={this.randomizeGame}>RANDOMIZE</HoloButton>
      </RollButtonContainer>
    );
  }

  private randomizeGame = () => {
    const chars = this.state.Randomizer.getBatchOfUniqueRandomCharacters(3);
    this.setState({ Characters: chars }, () => console.log(this.state));
  }
}

export default RollContainer;
