import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

import imgChromeAppStore from './chrome_app_store.png';
import imgMetamask from './metamask.png';

const Web3Alert = styled.div`
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;
`;
const Metamask = styled.img`
    object-fit: contain;
    height: 50%;
`;
const AppStoreLink = styled.a`
    display: block;
    margin: 0 auto;
    width: 90%;
    height: 30%;
`;
const ChromeAppStore = styled.img`
    object-fit: contain;
    height: 100%;
`;

const Web3Modal = () => (
    <Modal>
        <Web3Alert>You need a Metamask!</Web3Alert>
        <Metamask src={imgMetamask} />
        <AppStoreLink href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
            <ChromeAppStore src={imgChromeAppStore} />
        </AppStoreLink>
    </Modal>
);

export default Web3Modal;
