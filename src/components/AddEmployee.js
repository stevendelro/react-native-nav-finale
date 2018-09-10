import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EditEmployee } from '../actions';
import { Card, CardSection, Input, Button } from '../common';

class AddEmployee extends Component {
  render() {
    const { name, phone } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChange={employeeName =>
              this.props.EditEmployee({
                prop: 'name',
                value: employeeName
              })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="012-345-6789"
            value={phone}
            onChange={phoneNumber =>
              this.props.EditEmployee({
                prop: 'phone',
                value: phoneNumber
              })
            }
          />
        </CardSection>
        <CardSection>
          <Button>Add</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.form;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { EditEmployee }
)(AddEmployee);
