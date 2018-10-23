// @flow
import * as React from 'react';
import TextField from '@material-ui/core/TextField';

type PropsType = {};

export default class ContactForm extends React.Component<PropsType> {
  render() {
    return (
      <form>
        <TextField
          id="standard-name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
      </form>
    );
  }
}
