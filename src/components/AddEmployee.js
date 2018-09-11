import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editEmployee, addNewEmployee } from '../actions';
import { Card, CardSection, Button } from '../common';
import EmployeeForm from '../components/EmployeeForm';

class AddEmployee extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.addNewEmployee({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    const { name, phone } = this.props;
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Add</Button>
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
  { editEmployee, addNewEmployee }
)(AddEmployee);
