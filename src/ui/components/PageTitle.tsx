import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  padding: ${p => p.theme.sizes.lg.padding} ${p => p.theme.sizes.sm.padding};
  text-align: center;
  color: ${p => p.theme.colors.white};
`;

const Logo = styled.img`
  padding: ${p => p.theme.sizes.sm.padding};
  max-width: 120px;
`;

const TitleText = styled.h1`
  font-family: ${p => p.theme.fonts.title};
  font-size: ${p => p.theme.fonts.sizes.lg};
  line-height: ${p => p.theme.fonts.sizes.lg};
  font-weight: 700;
  padding: 0px;
  margin: 0px;
`;

const PageTitle = () => {
  return (
    <TitleContainer>
      <Logo src={require("../assets/logo.png")} />
      <TitleText>APEX MIXER</TitleText>
    </TitleContainer>
  );
};

export default PageTitle;
