import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import Web3Modal from '../../Components/Web3Modal';
import { Colors, Assets } from '../../vars';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    margin-bottom: 200px;
    overflow: hidden;
`;
const TextInputBack = styled.div`
    position:static;
    background: url("${Assets.textbox}");
    background-size: cover;
    background-repeat:no-repeat;
    width: 60vw;
    height: calc(60vw*1622/4674);
    padding: 2.5px;
    margin-bottom:20px;
`;
const TextInput = styled.textarea`
    & {
        padding: 10px 20px 0px 40px;
        text-align: center;
        font-color: white;
        resize: none;
        outline: none;
        width: 100%;
        @media screen and (min-width: 400px) {
            font-size: 0.9rem;
            line-height: 2;
        }
        @media screen and (min-width: 900px) {
            font-size: 1.1rem;
            line-height: 2;
        }
        @media screen and (min-width: 1200px) {
            font-size: 1.3rem;
            line-height: 2;
        }
        height: 70%;
        border: none;
        background: rgba(0, 0, 0, 0);
    }

    &::placeholder {
        color: white;
    }
`;
const ProgressContainer = styled.div`
    width: 100%;
    height: 30%;
`;
const ProgressBackground = styled.div`
    position: relative;
    top: calc(50% - 7.5px);
    vertical-align: middle;
    float: right;
    margin-right: 5%;
    width: 40%;
    border: solid;
    border-color: ${Colors.boxShadow};
`;
const ProgressForeground = styled.div`
    width: calc(20% + ${props => props.messageLength} / 140 * 80%);
    height: 15px;
    background-color: ${Colors.boxShadow};
`;
const MessageLength = styled.div`
    text-align: right;
    color: white;
    font-size: 12px;
    margin-right: 5px;
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
    redirectUrl,
    preventSubmit,
    contentTyping,
    contentSubmit,
    modalShow,
    modalClose,
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
                        <ProgressContainer>
                            <ProgressBackground>
                                <ProgressForeground
                                    messageLength={Number(messageLength)}
                                >
                                    <MessageLength>
                                        {messageLength}
                                    </MessageLength>
                                </ProgressForeground>
                            </ProgressBackground>
                        </ProgressContainer>
                    </TextInputBack>
                    <SubmitBack>
                        <Submit onClick={contentSubmit}>GO</Submit>
                    </SubmitBack>
                </Form>
            )}
        </Container>
        {redirectUrl && <Redirect to={`/love/${redirectUrl}`} />}
        {modalShow && <Web3Modal modalClose={modalClose}/>}
    </>
);

export default HomePresenter;
