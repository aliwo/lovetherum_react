import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const Content = styled.div`
    position: relative;
    top: calc(50% - 35vh);
    background: white;
    width: 40%;
    height: 70vh;
    margin: 0 auto;
    border-radius: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

export default class extends React.Component {

    constructor(props) {
        super(props);
        const {children, modalClose} = this.props;
        this.state = { children, modalClose };
    }

    render() {
        return (
            <Container onClick={this.state.modalClose}>
                <Content onClick={event => event.stopPropagation()}>{this.state.children}</Content>
            </Container>
        );
    }
}
