// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import MenuSection from '../MenuSection';

type PropsType = {};

const HeaderWrapper = styled.div`
  padding-bottom: 32px;
  display: flex;
  justify-content: flex-end;
  height: 100px;
  background-color: ${props => props.theme.colors.black};
`;



const Menu = styled.div`
  display: flex
  margin-right: 24px;
`;

export default class Header extends Component<PropsType> {
  render() {
    return (
      <HeaderWrapper>
        <Menu>
          <MenuSection label="Gallerie" />
          <MenuSection label="Contact" />
        </Menu>
      </HeaderWrapper>
    );
  }
}
