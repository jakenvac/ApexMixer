import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  padding: ${p => p.theme.sizes.sm.padding};
  background: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Disclaimer = styled.p`
  opacity: 0.4;
  max-width: 20%;
  font-size: 12px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  font-size: 16px;
  opacity: 0.6;
`;

const SubtleLink = styled.a`
  &,
  &:hover,
  &:active,
  &:visited {
    color: ${p => p.theme.colors.white};
    text-decoration: underline;
  }
  &:hover {
    opacity: 0.9;
  }
`;

const FontAwesomeIconMarginRight = styled(FontAwesomeIcon)`
  margin-right: ${p => p.theme.sizes.sm.padding};
`;

const Footer = () => {
  return (
    <Container>
      <Disclaimer>
        This fan site is not affiliated with EA or Apex Legends in any way. Apex
        Legends is © EA.
      </Disclaimer>
      <DescriptionContainer>
        <p>
          Made with <FontAwesomeIcon icon="heart" color="#FAC" /> by{" "}
          <SubtleLink href="https://jlangford.uk">Jake Langford</SubtleLink>
        </p>
        <SubtleLink href="https://github.com/jakehl/apexmixer">
          <FontAwesomeIconMarginRight icon={["fab", "github"]} />
          Contribute on Github
        </SubtleLink>
      </DescriptionContainer>
    </Container>
  );
};

export default Footer;
