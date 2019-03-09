import React from "react";
import styled from "styled-components";

import HoloButton from "../../components/HoloButton";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-tems: center;
  padding: ${p=>p.theme.sizes.md.padding} ${p=>p.theme.sizes.sm.padding};
`;

const RollContainer = () => {
  return (
    <Container>
      <HoloButton>ROLL GAME</HoloButton>
    </Container>
  );
};

export default RollContainer;
