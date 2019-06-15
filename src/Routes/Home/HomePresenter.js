import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 30px;
`;
const Logo = styled.img`
  margin: 50px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
const SearchTerm = styled.textarea`
  position: static;
  text-align: center;
  resize: none;
  @media screen and (min-width: 400px) {
    font-size: 20px;
    width: 70vw;
  }
  @media screen and (min-width: 900px) {
    font-size: 25px;
    width: 50vw;
  }
  @media screen and (min-width: 1200px) {
    font-size: 30px;
    width: 40vw;
  }
  overflow-x: hidden;
  height: 40vh;
  margin-top: 20px;
  border: none;
  border-top-style: dotted;
  border-bottom-style: dotted;
`;
const TextLength = styled.span`
  position: relative;
  top: -30px;
  text-align: right;
  color: rgba(1, 1, 1, 0.4);
  font-size: 20px;
`;
const Byte = styled.span`
  font-size: 15px;
`;
const Submit = styled.button`
  margin: 0 auto;
  width: 100px;
  height: 50px;
`;

const HomePresenter = ({
  message,
  preventSubmit,
  contentTyping,
  contentSubmit
}) => (
  <>
    <Helmet>
      <title>lovethereum | 사랑의 자물쇠</title>
    </Helmet>
    <Container>
      <Logo src="https://lovethereum-local.s3.ap-northeast-2.amazonaws.com/logo.png"></Logo>
      <Form method="post" onSubmit={preventSubmit}>
        <SearchTerm
          placeholder="나의 사랑에게, 140byte 이내로.."
          value={message}
          onChange={contentTyping}
        />
        <TextLength>
          {message.length}/140 <Byte>글자</Byte>
        </TextLength>
        <Submit onClick={contentSubmit}>발행</Submit>
      </Form>
    </Container>
  </>
);

export default HomePresenter;
