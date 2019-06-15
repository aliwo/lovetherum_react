import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
const ActionBar = styled.div``;
const QuoteBox = styled.div`
  background-color: rgba(0.2, 0.2, 0.2, 0.1);
  width: 50%;
  height: 50%;
  text-align: center;
`;

const Message = styled.span``;

const SNS = styled.div``;

const LockPresneter = ({ message }) => (
  <Container>
    <ActionBar>
      <button>back</button>
    </ActionBar>
    <QuoteBox>
      "<Message>{message}</Message>"
    </QuoteBox>
    <SNS>
      <button>facebook</button>
      <button>twitter</button>
      <button>gmail</button>
    </SNS>
  </Container>
);

export default LockPresneter;
