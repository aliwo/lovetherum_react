import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import { Assets } from '../../vars';

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

export default ({ showModal, modalOff }) => {
    return (
        <Modal showModal={showModal} modalOff={modalOff}>
            <Web3Alert>메타마스크 지갑 설치가 필요합니다.</Web3Alert>
            <Metamask src={Assets.metamask} />
            <AppStoreLink href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
                <ChromeAppStore src={Assets.chromeAppStore} />
            </AppStoreLink>
        </Modal>
    );
};
