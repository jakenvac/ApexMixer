import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  background-color: ${p =>
    p.isBlack ? p.theme.colors.black : p.theme.colors.apexBeige};
  color: ${p => (p.isBlack ? p.theme.colors.white : p.theme.colors.black)};
  `;

const TextContainer = styled.div`
  width: 100%;
  padding: ${p=>p.theme.sizes.sm.padding} ;
  @media only screen and (min-width: 768px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (min-width: 1200px) {
    width: 60%;
  }
`;

const PageSection = props => {
  const { isBlack, children, ...rest } = props;
  return (
    <SectionContainer isBlack={isBlack} {...rest}>
      <TextContainer>{children}</TextContainer>
    </SectionContainer>
  );
};

export default PageSection;
