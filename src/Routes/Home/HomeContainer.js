import React from 'react';
import HomePresenter from './HomePresenter';
import LocalApi from '../../api';

export default class extends React.Component {
  state = {};

  async componentDidMount() {
    const { data } = await LocalApi.getLocal();
    console.log(data);
    await LocalApi.postLocal({ kanghyun: 'GOD' });
  }

  render() {
    return <HomePresenter />;
  }
}
