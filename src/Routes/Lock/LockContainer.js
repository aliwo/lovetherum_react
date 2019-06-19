import React from 'react';
import { stringLiteral } from '@babel/types';
import LockPresenter from './LockPresenter';
import LocalApi from '../../api';

export default class extends React.Component {
  state = {
    message: ''
  };

  componentDidMount() {
    this.getData();
  }

  getMessage = res => {
    const {
      data: { message }
    } = res;
    this.setState({ message });
  };

  getData = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    LocalApi.getLock(id).then(this.getMessage);
  };

  render() {
    const { message } = this.state;
    return <LockPresenter message={message} />;
  }
}
