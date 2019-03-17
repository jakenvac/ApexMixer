import React from "react";
import styled from "styled-components";

import PageSection from "../../components/PageSection";
import Title from "../../components/Title";

const IntroContainer = () => {
  return (
    <PageSection isBlack>
      <Title type="h2">Randomize your Apex games!</Title>
      <p>
        Arguing with your squad about where you should drop? Do randoms keep
        picking your main? Simply just too damn good at the game? This tool will
        generate random parameters to bring new challenges to Apex Legends.
      </p>
    </PageSection>
  );
};

export default IntroContainer;
