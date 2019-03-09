import React from "react";
import styled from "styled-components";

import PageSection from "../../components/PageSection";

const Title = styled.h2`
  font-weight: bold;
  font-family: ${p => p.theme.fonts.title};
`;

const IntroContainer = () => {
  return (
    <PageSection isBlack>
      <Title>Randomize your Apex games!</Title>
      <p>
        Arguing with your squad about where you should drop? Do randoms keep picking your main?
        Simply just too damn good at the game? This tool will generate random parameters to bring new challenges to Apex Legends.
      </p>
    </PageSection>
  );
};

export default IntroContainer;
