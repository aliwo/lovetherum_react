import React from 'react';
import HomePresenter from './HomePresenter';
import LoveApi from '../../api';
import { sendMsg } from '../../Libs/love';

export default class extends React.Component {
    state = {
        message: '',
        messageLength: 0,
        loading: false,
        modalShow: false,
        redirectUrl: ''
    };

    preventSubmit = e => {
        e.preventDefault();
    };

    contentSubmit = async () => {
        const { message } = this.state;
        if (message.length !== 0) {
            this.setState({ loading: true });
            const love = await LoveApi.postLove({ message });
            LoveApi.getContract().then(response =>
                this.sendMessage(response, love.data)
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

    // callback / 최신 컨트렉트 정보를 전달
    sendMessage = (response, message) => {
        sendMsg(response.data, message);
        this.setState({
            loading: false,
            redirectUrl: response.data.url
        });
    };

    checkLength = value => {
        const newLineLength = (value.split('\n').length - 1) * 20;
        const textLength = value.replace('\n', '').length;
        return newLineLength + textLength;
    };

    render() {
        const {
            message,
            messageLength,
            loading,
            modalShow,
            redirectUrl
        } = this.state;
        return (
            <HomePresenter
                message={message}
                messageLength={messageLength}
                loading={loading}
                redirectUrl={redirectUrl}
                // message :id 보내주기
                preventSubmit={this.preventSubmit}
                contentTyping={this.contentTyping}
                contentSubmit={this.contentSubmit}
                modalShow={modalShow}
            />
        );
    }
}
