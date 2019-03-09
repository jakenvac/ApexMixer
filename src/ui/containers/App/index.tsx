import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
library.add(faGithub, faHeart);

import theme from "../../theme";
import PageTitle from "../../components/PageTitle";
import BetaTag from "../../components/BetaTag";
import Footer from "../../components/Footer";
import IntroContainer from "../IntroContainer";
import RollContainer from "../RollContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Filler = styled.div`
  flex: 1;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Filler>
          <BetaTag />
          <PageTitle />
          <IntroContainer />
          <RollContainer />
        </Filler>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
