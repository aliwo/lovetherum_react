import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../vars';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    background-size: 120px;
`;
const ActionBar = styled.div`
    width: 50%;
    margin: 10px;
`;
const SLink = styled(Link)`
    display: block;
    margin-right: auto;
    margin-left: 0px;
`;
const QuoteBox = styled.div`
    display: flex;
    position: static;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: ${Colors.boxBg};
    border-radius: 20px;
    border: solid;
    border-color: ${Colors.boxShadow};
    box-shadow: 10px 10px ${Colors.boxShadow};
    width: 50%;
    height: 50%;
    text-align: center;
    padding: 50px;
`;
const Quote = styled.img`
    width: 50px;
    top: -10px;
    margin: 20px 0;
    :nth-child(1) {
        transform: rotate(180deg);
    }
    :nth-child(3) {
        margin-left: auto;
        margin-right: 0;
    }
`;
const Message = styled.div``;
const Line = styled.p`
    font-family: 'Noto Serif KR', 'Times New Roman', Times, serif;
    padding-bottom: 5px;
`;

const SNS = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`;
const Facebook = styled.div`
    margin: 10px;
`;
const Twitter = styled.div`
    margin: 10px;
`;

const LockPresneter = ({ message }) => (
    <Container>
        <ActionBar>
            <SLink to="/">
                <i className="fas fa-arrow-left"></i>
            </SLink>
        </ActionBar>
        <QuoteBox>
            <Quote src="https://lovethereum-local.s3.ap-northeast-2.amazonaws.com/PinClipart.com_quotes-clip-art_3794464.png" />
            <Message>
                {message.split('\n').map(line => (
                    <Line>{line}</Line>
                ))}
            </Message>
            <Quote src="https://lovethereum-local.s3.ap-northeast-2.amazonaws.com/PinClipart.com_quotes-clip-art_3794464.png" />
        </QuoteBox>
        <SNS>
            <Facebook>
                <div id="fb-root"></div>
                <script>
                    {((d, s, id) => {
                        const fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        const js = d.createElement(s);
                        js.id = id;
                        js.src =
                            'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
                        fjs.parentNode.insertBefore(js, fjs);
                    })(document, 'script', 'facebook-jssdk')}
                </script>
                <div
                    className="fb-share-button"
                    data-href="http://localhost:3000/lock/5d0599db9d1c791900924407"
                    data-layout="button_count"
                ></div>
            </Facebook>
            <Twitter>
                <a
                    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                    className="twitter-share-button"
                    data-show-count="false"
                >
                    Tweet
                </a>
                <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charset="utf-8"
                ></script>
            </Twitter>
        </SNS>
    </Container>
);

export default LockPresneter;
