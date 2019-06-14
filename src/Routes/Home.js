import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Logo = styled.div`
  margin-top: 50px;
  font-size: 50px;
  margin: 0 auto;
`;
const Form = styled.form`
  margin-top: 30px;
  height: 30px;
  margin: 0 auto;
`;
const SearchTerm = styled.input``;

function Home() {
  return (
    <Content>
      <Logo>LoveLock</Logo>
      <Form method="post">
        <SearchTerm />
      </Form>
    </Content>
  );
}

export default Home;
