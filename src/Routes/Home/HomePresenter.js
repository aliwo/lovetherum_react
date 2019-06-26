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
    width: 100px;
    height: 100px;
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

const LoadingIcon = styled.img``;

const HomePresenter = ({
    message,
    messageLength,
    loading,
    preventSubmit,
    contentTyping,
    contentSubmit
}) => (
    <>
        <Helmet>
            <title>lovethereum | 사랑의 자물쇠</title>
        </Helmet>
        <Container>
            <Logo src="https://seoul-p-studio.bunjang.net/product/83183224_1_1523882302_w640.jpg"></Logo>
            {loading ? (
                <LoadingIcon src="https://media2.giphy.com/media/17mNCcKU1mJlrbXodo/giphy.gif?cid=790b76115d0a1bee4c6c456f2e57d260&rid=giphy.gif" />
            ) : (
                <Form method="post" onSubmit={preventSubmit}>
                    <SearchTerm
                        placeholder="나의 사랑에게, 140자 이내로.."
                        value={message}
                        onChange={contentTyping}
                    />
                    <TextLength>
                        {messageLength}/140 <Byte>글자</Byte>
                    </TextLength>
                    <Submit onClick={contentSubmit}>발행</Submit>
                </Form>
            )}
        </Container>
    </>
);

export default HomePresenter;
