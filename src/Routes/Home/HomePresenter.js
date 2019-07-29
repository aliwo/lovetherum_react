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
    background-color: #f6e0e8;
    background-image: url("/images/background.png");
    background-size: 120px;
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
    margin-bottom: 200px;
`;
const TextInputBack = styled.div`
    @media screen and (min-width: 400px) {
        width: 70vw+10px;
    }
    @media screen and (min-width: 900px) {
        width: 50vw+10px;
    }
    @media screen and (min-width: 1200px) {
        width: 40vw+10px;
    }
    height: 285px;
    top: 10px;
    padding: 2.5px;
    position: relative;
    background: linear-gradient(
        45deg,
        #feda75,
        #fa7e1e,
        #d62976,
        #962fbf,
        #4f5bd5
    );
    background: linear-gradient(to right, #fc5c7d, #6a82fb);
    background: linear-gradient(45deg, #c9ffbf, #ffafbd);
    border-radius: 10px;
`;
const TextInput = styled.textarea`
    position: static;
    text-align: center;
    resize: none;
    outline: none;
    @media screen and (min-width: 400px) {
        font-size: 15px;
        width: 70vw;
    }
    @media screen and (min-width: 900px) {
        font-size: 20px;
        width: 50vw;
    }
    @media screen and (min-width: 1200px) {
        font-size: 25px;
        width: 40vw;
    }
    overflow-x: hidden;
    height: 280px;
    border: none;
    border-radius: 10px;
`;
const TextLength = styled.span`
    position: relative;
    top: -20px;
    left: -10px;
    text-align: right;
    color: rgba(1, 1, 1, 0.4);
    font-size: 20px;
`;
const Byte = styled.span`
    font-size: 15px;
`;
const SubmitBack = styled.div`
    width: 102.5px;
    height: 52.5px;
    padding: 1.25px;
    position: relative;
    background: linear-gradient(to bottom, red, purple);
    background: linear-gradient(to right, #fc5c7d, #6a82fb);
    background: linear-gradient(45deg, #c9ffbf, #ffafbd);
    border-radius: 12px;
    margin: 0 auto;
`;
const Submit = styled.button`
    width: 100px;
    height: 50px;
    background-color: white;
    border: none;
    border-radius: 10px;
    outline: none;
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
                    <TextInputBack>
                        <TextInput
                            placeholder="나의 사랑에게, 140자 이내로.."
                            value={message}
                            onChange={contentTyping}
                        />
                    </TextInputBack>
                    <TextLength>
                        {messageLength}/140 <Byte>글자</Byte>
                    </TextLength>
                    <SubmitBack>
                        <Submit onClick={contentSubmit}>발행</Submit>
                    </SubmitBack>
                </Form>
            )}
        </Container>
    </>
);

export default HomePresenter;
