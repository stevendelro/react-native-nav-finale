import each from 'lodash/each';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { editEmployee, saveEmployee } from '../actions';
import { Card, CardSection, Button } from '../common';

class EditEmployee extends Component {
  componentWillMount() {
    each(this.props.employee, (value, prop) => {
      this.props.editEmployee({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.saveEmployee({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  textSchedule() {
    const { name, phone, shift } = this.props;
    Communications.text(
      phone,
      `Hey ${name}! I have you scheduled to come in on ${shift}. Let me know if you have any questions! Thanks!`
    );
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.textSchedule.bind(this)}>Text Schedule</Button>
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
  { editEmployee, saveEmployee }
)(EditEmployee);
