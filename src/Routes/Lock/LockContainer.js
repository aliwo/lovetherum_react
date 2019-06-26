import React from 'react';
import LockPresenter from './LockPresenter';
import LoveApi from '../../api';
import { getMsg } from '../../Libs/love';

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
        LoveApi.getContract().then(response => getMsg(response.data, id));
    };

    render() {
        const { message } = this.state;
        return <LockPresenter message={message} />;
    }
}
