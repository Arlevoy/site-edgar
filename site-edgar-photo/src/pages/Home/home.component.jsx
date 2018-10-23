// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import homePageImage from '../../assets/img/home.jpg';

const HomeWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => props.theme.colors.black};
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fontFamily.default};
  text-align: center;
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.colors.white};
`;

const HomeImage = styled.div`
  height: 768px;
  width: 1024px;
  background-size: contain;
  background: url(${homePageImage}) no-repeat;
`;

type PropsType = {};

class Home extends Component<PropsType> {
  render() {
    return (
      <React.Fragment>
        <Header />
        <HomeWrapper />
      </React.Fragment>
    );
  }
}

export default Home;
