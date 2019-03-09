import React from "react";
import styled from "styled-components";

import HoloButton from "../../components/HoloButton";
import PageSection from "../../components/PageSection";

import ProfilePicture from "../../components/Characters/ProfilePicture";

const Container = styled.section``;

const RollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-tems: center;
  padding: ${p => p.theme.sizes.md.padding} ${p => p.theme.sizes.sm.padding};
`;

const RollContainer = () => {
  return (
    <Container>
      <RollButtonContainer>
        <HoloButton>RANDOMIZE</HoloButton>
      </RollButtonContainer>
      <PageSection>
        <ProfilePicture player="Bangalore" />
        <ProfilePicture player="Bloodhound" />
        <ProfilePicture player="Lifeline" />
        <ProfilePicture player="Caustic" />
        <ProfilePicture player="Gibraltar" />
        <ProfilePicture player="Mirage" />
        <ProfilePicture player="Pathfinder" />
        <ProfilePicture player="Wraith" />
      </PageSection>
    </Container>
  );
};

export default RollContainer;
