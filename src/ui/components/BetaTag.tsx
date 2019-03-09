import React from "react";
import styled from "styled-components";

const BetaContainer = styled.div`
    color: ${p=>p.theme.colors.white};
    padding: ${p=>p.theme.sizes.sm.padding} ${p=>p.theme.sizes.md.padding};;
    background: ${p=>p.theme.colors.apexPurple};
    font-family: ${p=>p.theme.fonts.title};
    font-weight: 700;
    letter-spacing: 3px;
    position: absolute;
    top: 20px;
    right: 20px;
    box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.4);
`;

const BetaTag = () => {
  return <BetaContainer>BETA</BetaContainer>;
};

export default BetaTag;