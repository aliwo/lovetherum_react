import React from 'react';
import Web3ModalPresenter from './Web3ModalPresenter';

export default class extends React.Component {
    state = {
        showModal: false
    };

    componentDidMount() {
        document.addEventListener('click', this.clickEvent);
        if (!window.web3) this.setState({ showModal: true });
    }

    clickEvent = () => {
        this.setState({ showModal: false });
    };

    render() {
        const { showModal } = this.state;
        return <Web3ModalPresenter showModal={showModal} />;
    }
}
