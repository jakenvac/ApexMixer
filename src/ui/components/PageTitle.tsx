import React from "react";
import styled from "styled-components";
import Title from "./Title";

const TitleContainer = styled.div`
  padding: ${p => p.theme.sizes.sm.padding};
  text-align: center;
  color: ${p => p.theme.colors.white};
`;

const Logo = styled.img`
  padding: ${p => p.theme.sizes.sm.padding};
  max-width: 120px;
`;

const TitleText = styled(Title)`
  line-height: ${p => p.theme.fonts.sizes.lg};
  padding: 0px;
  margin: 0px;
`;

const PageTitle = () => {
  return (
    <TitleContainer>
      <Logo src={require("../assets/logo_alt.png")} />
      <TitleText type='h1'>APEX MIXER</TitleText>
    </TitleContainer>
  );
};

export default PageTitle;
