import React from 'react';
import HomePresenter from './HomePresenter';
import LocalApi from '../../api';
import { sendMsg } from '../../Libs/love';

export default class extends React.Component {
    state = {
        message: '',
        messageLength: 0,
        loading: false
    };

    componentDidMount() {}

    preventSubmit = e => {
        e.preventDefault();
    };

    contentSubmit = async () => {
        const { message } = this.state;
        if (message.length !== 0) {
            this.setState({ loading: true });
            const love = await LocalApi.postLocal({ message });
            LocalApi.getContract().then(response =>
                this.waitContract(response, love)
            );
        }
        this.setState({ message: '' });
    };

    contentTyping = async e => {
        const {
            target: { value }
        } = e;
        const length = this.checkLength(value);
        if (length <= 140)
            this.setState({ message: value, messageLength: length });
    };

    waitContract = (response, message) => {
        console.log(response);
        this.setState({ loading: false });
        sendMsg(response.data, message);
    };

    checkLength = value => {
        const newLineLength = (value.split('\n').length - 1) * 20;
        const textLength = value.replace('\n', '').length;
        return newLineLength + textLength;
    };

    render() {
        const { message, messageLength, loading } = this.state;
        return (
            <HomePresenter
                message={message}
                messageLength={messageLength}
                loading={loading}
                preventSubmit={this.preventSubmit}
                contentTyping={this.contentTyping}
                contentSubmit={this.contentSubmit}
            />
        );
    }
}
