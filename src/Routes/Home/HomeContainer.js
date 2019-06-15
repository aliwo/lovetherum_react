import React from 'react';
import HomePresenter from './HomePresenter';
import LocalApi from '../../api';

export default class extends React.Component {
  state = {
    message: ''
  };

  componentDidMount() {}

  preventSubmit = e => {
    e.preventDefault();
  };

  contentSubmit = async () => {
    const { message } = this.state;
    if (message.length !== 0) {
      LocalApi.postLocal({ message }).then(e => console.log(e));
      console.log('hello');
    }
    this.setState({ message: '' });
  };

  contentTyping = e => {
    const {
      target: { value }
    } = e;
    if (value.length <= 140) this.setState({ message: value });
  };

  render() {
    const { message } = this.state;
    return (
      <HomePresenter
        message={message}
        preventSubmit={this.preventSubmit}
        contentTyping={this.contentTyping}
        contentSubmit={this.contentSubmit}
      />
    );
  }
}
