import React from 'react';
import HomePresenter from './HomePresenter';
import LocalApi from '../../api';

export default class extends React.Component {
  state = {
    message: '',
    messageLength: 0
  };

  componentDidMount() {}

  preventSubmit = e => {
    e.preventDefault();
  };

  contentSubmit = async () => {
    const { message } = this.state;
    if (message.length !== 0) {
      LocalApi.postLocal({ message }).then(e => console.log(e));
    }
    this.setState({ message: '' });
  };

  contentTyping = async e => {
    const {
      target: { value }
    } = e;
    const length = this.checkLength(value);
    if (length <= 140) this.setState({ message: value, messageLength: length });
  };

  checkLength = value => {
    const newLineLength = (value.split('\n').length - 1) * 20;
    const textLength = value.replace('\n', '').length;
    return newLineLength + textLength;
  };

  render() {
    const { message, messageLength } = this.state;
    return (
      <HomePresenter
        message={message}
        messageLength={messageLength}
        preventSubmit={this.preventSubmit}
        contentTyping={this.contentTyping}
        contentSubmit={this.contentSubmit}
      />
    );
  }
}
