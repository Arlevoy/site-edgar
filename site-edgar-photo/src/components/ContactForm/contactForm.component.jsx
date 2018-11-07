// @flow
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

type PropsType = {};

type StateType = {
  name: string,
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
`;
export default class ContactForm extends React.Component<PropsType, StateType> {
  state = {
    lastName: '',
    firstName: '',
    email: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onFormSubmit = form => event => {
    alert("Gagné l'ami");
  };

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <TextField
          id="standard-name"
          label="Nom"
          value={this.state.lastName}
          onChange={this.handleChange('lastName')}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Prénom"
          value={this.state.firstName}
          onChange={this.handleChange('firstName')}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Email"
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <Button primary label="Submit" onClick={this.onFormSubmit('form')} />
      </Form>
    );
  }
}
