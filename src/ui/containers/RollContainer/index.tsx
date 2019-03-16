import React from "react";
import styled from "styled-components";

import HoloButton from "../../components/HoloButton";
import PageSection from "../../components/PageSection";

import PictureCluster from "../../components/Characters/PictureCluster";
import ApexMixer from "../../../ApexLib/ApexMixer";

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
      Characters: ["none", "none", "none"],
    };
  }
  render = () => {
    return (
      <Container>
        <RollButtonContainer>
          <HoloButton
            onClick={() => {
              const chars = [];
              chars.push(this.state.Randomizer.getRandomCharacter());
              chars.push(this.state.Randomizer.getRandomCharacter());
              chars.push(this.state.Randomizer.getRandomCharacter());
              this.setState({Characters: chars}, ()=>console.log(this.state));
            }}
          >
            RANDOMIZE
          </HoloButton>
        </RollButtonContainer>
        <PageSection>
          <PictureCluster Classes={this.state.Characters} />
        </PageSection>
      </Container>
    );
  };
}

export default RollContainer;
