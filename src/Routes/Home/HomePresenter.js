import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 30px;
  font-family: 'Nanum Pen Script';
`;
const Logo = styled.img`
  font-size: 50px;
  margin: 50px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.span`
  margin: 10px;
`;
const SearchTerm = styled.textarea`
  resize: none;
  width: 50vw;
  height: 40vh;
  margin-top: 20px;
  border: none;
  border-top-style: dotted;
  border-bottom-style: dotted;
`;

const HomePresenter = () => (
  <>
    <Helmet>
      <title>Movies</title>
    </Helmet>
    <Content>
      <Logo src="https://lovethereum-local.s3.ap-northeast-2.amazonaws.com/logo.png"></Logo>
      <Form method="post">
        <Label>우리 사랑.. 영원히 블록체인에..</Label>
        <SearchTerm />
      </Form>
    </Content>
  </>
);

export default HomePresenter;
