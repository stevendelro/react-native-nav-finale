import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from '../common';

class AddEmployee extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Name" placeholder="Jane" />
        </CardSection>
        <CardSection>
          <Input label="Phone" placeholder="012-435-6789" />
        </CardSection>
        <CardSection>
          <Button>Add</Button>
        </CardSection>
      </Card>
    );
  }
}

export default AddEmployee;
