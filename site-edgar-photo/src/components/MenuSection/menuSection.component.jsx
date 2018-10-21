// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  margin-right: 24px;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  &:hover {
    border-top: solid 5px ${props => props.theme.colors.blue};
    transition: border 0.5s;
  }
  transition: border 0.5s;
`;

const SectionTitle = styled.div`
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.fontFamily.default};
  color: ${props => props.theme.colors.white};
  &:hover {
    color: ${props => props.theme.colors.blue};
  }
  transition: color 2s;
`;

type PropsType = {
  label: string,
};

export default class MenuSection extends Component<PropsType> {
  render() {
    const { label } = this.props;
    return (
      <Section>
        <SectionTitle>{label}</SectionTitle>
      </Section>
    );
  }
}
