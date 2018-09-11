import each from 'lodash/each';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { editEmployee } from '../actions';
import { Card, CardSection, Button } from '../common';

class EditEmployee extends Component {
  componentWillMount() {
    each(this.props.employee, (value, prop) => {
      this.props.editEmployee({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    console.log('EDITEMPLOYEE:', name, phone, shift);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
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
  { editEmployee }
)(EditEmployee);
