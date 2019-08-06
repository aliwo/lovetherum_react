import React from 'react';
import styled from 'styled-components';
import Router from './Router';
import GlobalStyles from './GlobalStyles';

import { Colors, Assets } from '../vars';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${Colors.rootBg};
    background-image: url(${Assets.background});
    background-size: 120px;
`;

const App = () => (
    <Container>
        <GlobalStyles />
        <Router />
    </Container>
);

export default App;
