import React from "react";
import styled from "styled-components";
import Title from "./Title";

const TitleContainer = styled.div`
  padding: ${p => p.theme.sizes.sm.padding};
  text-align: center;
  color: ${p => p.theme.colors.white};

  display: flex;
  flex-direction: row;
  align-items: flex-center;
`;

const Logo = styled.img`
  padding: ${p => p.theme.sizes.sm.padding};
  max-width: 120px;
  max-height: 120px;
`;

const TitleText = styled(Title)`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
  margin-left: ${p => p.theme.sizes.md.padding};
`;

const PageTitle = () => {
  return (
    <TitleContainer>
      <Logo alt="Apex Mixer" src={require("../assets/amLogo.svg")} />
      <TitleText type="h1">APEX MIXER</TitleText>
    </TitleContainer>
  );
};

export default PageTitle;
