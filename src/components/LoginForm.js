import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from '../common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@email.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input label="Password" placeholder="password" secureTextEntry />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  null,
  { emailChanged }
)(LoginForm);
